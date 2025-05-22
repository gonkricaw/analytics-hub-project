import { createAuditLog } from '@/lib/auditLog';
import { PrismaClient } from '@prisma/client';

// Mock PrismaClient
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    auditLog: {
      create: jest.fn().mockResolvedValue({ id: 'mock-audit-log-id' }),
    },
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
  };
});

describe('Audit Log Service', () => {
  let mockPrisma: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });
  
  it('should create an audit log entry', async () => {
    // Arrange
    const userId = 'user-123';
    const action = 'USER_LOGIN';
    const details = { ipAddress: '192.168.1.1', userAgent: 'Test Browser' };
    const resource = 'auth';
    const resourceId = null;
    
    // Act
    const result = await createAuditLog(userId, action, details, resource, resourceId);
    
    // Assert
    expect(mockPrisma.auditLog.create).toHaveBeenCalledWith({
      data: {
        userId,
        action,
        details,
        resource,
        resourceId,
      },
    });
    expect(result).toEqual({ id: 'mock-audit-log-id' });
  });
  
  it('should handle optional parameters', async () => {
    // Arrange
    const userId = 'user-123';
    const action = 'CONTENT_VIEW';
    
    // Act
    const result = await createAuditLog(userId, action);
    
    // Assert
    expect(mockPrisma.auditLog.create).toHaveBeenCalledWith({
      data: {
        userId,
        action,
        details: {},
        resource: null,
        resourceId: null,
      },
    });
  });
});
