import { getServerSession } from 'next-auth';
import { loginUser, createPasswordHash, verifyPassword } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

// Mock PrismaClient
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    user: {
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
      mockPrisma.user.findUnique.mockResolvedValue(null);
      const email = 'nonexistent@example.com';
      const password = 'password123';

      // Act
      const result = await loginUser(email, password);

      // Assert
      expect(result).toBeNull();
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { email },
        include: { roles: true },
      });
    });

    it('should return null if password is incorrect', async () => {
      // Arrange
      const hashedPassword = await createPasswordHash('correctpassword');
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '123',
        email: 'user@example.com',
        password: hashedPassword,
        status: 'ACTIVE',
        roles: [],
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
        roles: [{ name: 'USER' }],
      };
      mockPrisma.user.findUnique.mockResolvedValue(mockUser);
      const email = 'user@example.com';

      // Act
      const result = await loginUser(email, password);

      // Assert
      expect(result).toEqual({
        id: '123',
        email: 'user@example.com',
        roles: [{ name: 'USER' }],
      });
    });
  });

  describe('createPasswordHash and verifyPassword', () => {
    it('should create a hash that can be verified', async () => {
      // Arrange
      const password = 'securePassword123';

      // Act
      const hash = await createPasswordHash(password);
      const isValid = await verifyPassword(password, hash);

      // Assert
      expect(isValid).toBe(true);
    });

    it('should reject incorrect passwords', async () => {
      // Arrange
      const password = 'securePassword123';
      const wrongPassword = 'wrongPassword123';

      // Act
      const hash = await createPasswordHash(password);
      const isValid = await verifyPassword(wrongPassword, hash);

      // Assert
      expect(isValid).toBe(false);
    });
  });
});
