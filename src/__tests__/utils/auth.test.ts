import { getServerSession } from 'next-auth';
import { loginUser, createPasswordHash, verifyPassword } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

// Mock PrismaClient
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    idnbi_User: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
  };
});

// Mock next-auth
jest.mock('next-auth', () => ({
  getServerSession: jest.fn(),
}));

describe('Auth Service', () => {
  let mockPrisma: any;

  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });

  describe('loginUser', () => {
    it('should return null if user is not found', async () => {
      // Arrange
      mockPrisma.idnbi_User.findUnique.mockResolvedValue(null);
      const email = 'nonexistent@example.com';
      const password = 'password123';

      // Act
      const result = await loginUser(email, password);

      // Assert
      expect(result).toBeNull();
      expect(mockPrisma.idnbi_User.findUnique).toHaveBeenCalledWith({
        where: { email },
        include: { idnbi_UserRole: { include: { idnbi_Role: true } } },
      });
    });

    it('should return null if password is incorrect', async () => {
      // Arrange
      const hashedPassword = await createPasswordHash('correctpassword');
      mockPrisma.idnbi_User.findUnique.mockResolvedValue({
        id: '123',
        email: 'user@example.com',
        password: hashedPassword,
        status: 'ACTIVE',
        idnbi_UserRole: [{ idnbi_Role: { name: 'USER' } }],
      });
      const email = 'user@example.com';
      const password = 'wrongpassword';

      // Act
      const result = await loginUser(email, password);

      // Assert
      expect(result).toBeNull();
    });

    it('should return user data if login is successful', async () => {
      // Arrange
      const password = 'correctpassword';
      const hashedPassword = await createPasswordHash(password);
      const mockUser = {
        id: '123',
        email: 'user@example.com',
        password: hashedPassword,
        status: 'ACTIVE',
        idnbi_UserRole: [{ idnbi_Role: { name: 'USER' } }],
      };
      mockPrisma.idnbi_User.findUnique.mockResolvedValue(mockUser);
      const email = 'user@example.com';

      // Act
      const result = await loginUser(email, password);

      // Assert
      expect(result).toEqual({
        id: '123',
        email: 'user@example.com',
        role: 'USER',
      });
    });

    it('should update last login information on successful login', async () => {
      // Arrange
      const password = 'correctpassword';
      const hashedPassword = await createPasswordHash(password);
      const mockUser = {
        id: '123',
        email: 'user@example.com',
        password: hashedPassword,
        status: 'ACTIVE',
        idnbi_UserRole: [{ idnbi_Role: { name: 'USER' } }],
      };
      mockPrisma.idnbi_User.findUnique.mockResolvedValue(mockUser);
      const email = 'user@example.com';

      // Act
      await loginUser(email, password, '192.168.1.1');

      // Assert
      expect(mockPrisma.idnbi_User.update).toHaveBeenCalledWith({
        where: { id: '123' },
        data: {
          last_login_at: expect.any(Date),
          last_login_ip: '192.168.1.1',
        },
      });
    });
  });

  describe('Password Functions', () => {
    it('createPasswordHash should return a string', async () => {
      const hash = await createPasswordHash('password123');
      expect(typeof hash).toBe('string');
    });

    it('verifyPassword should return true for matching password', async () => {
      const password = 'password123';
      const hash = await createPasswordHash(password);
      const result = await verifyPassword(password, hash);
      expect(result).toBe(true);
    });

    it('verifyPassword should return false for non-matching password', async () => {
      const hash = await createPasswordHash('password123');
      const result = await verifyPassword('wrongpassword', hash);
      expect(result).toBe(false);
    });
  });
});
