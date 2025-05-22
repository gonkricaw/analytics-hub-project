import { sendEmail, getEmailTemplate, renderTemplate } from '@/lib/email';
import { PrismaClient } from '@prisma/client';

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'mock-message-id' }),
  }),
}));

// Mock PrismaClient
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    emailTemplate: {
      findUnique: jest.fn(),
    },
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
  };
});

describe('Email Service', () => {
  let mockPrisma: any;
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockPrisma = new PrismaClient();
  });
  
  describe('sendEmail', () => {
    it('should send an email successfully', async () => {
      // Arrange
      const to = 'user@example.com';
      const subject = 'Test Subject';
      const html = '<p>Test content</p>';
      
      // Act
      const result = await sendEmail(to, subject, html);
      
      // Assert
      expect(result).toBe(true);
      const nodemailer = require('nodemailer');
      const transport = nodemailer.createTransport();
      expect(transport.sendMail).toHaveBeenCalledWith(
        expect.objectContaining({
          to,
          subject,
          html,
        })
      );
    });
    
    it('should handle errors when sending emails', async () => {
      // Arrange
      const to = 'user@example.com';
      const subject = 'Test Subject';
      const html = '<p>Test content</p>';
      
      const nodemailer = require('nodemailer');
      const transport = nodemailer.createTransport();
      transport.sendMail.mockRejectedValueOnce(new Error('Failed to send email'));
      
      // Act
      const result = await sendEmail(to, subject, html);
      
      // Assert
      expect(result).toBe(false);
    });
  });
  
  describe('getEmailTemplate', () => {
    it('should retrieve email template from the database', async () => {
      // Arrange
      const templateName = 'welcome';
      const mockTemplate = {
        id: 'template-1',
        name: templateName,
        subject: 'Welcome to Indonet Analytics Hub',
        content: '<p>Welcome {{name}}!</p>',
        updatedAt: new Date(),
      };
      mockPrisma.emailTemplate.findUnique.mockResolvedValue(mockTemplate);
      
      // Act
      const template = await getEmailTemplate(templateName);
      
      // Assert
      expect(template).toEqual(mockTemplate);
      expect(mockPrisma.emailTemplate.findUnique).toHaveBeenCalledWith({
        where: { name: templateName },
      });
    });
    
    it('should return null if template not found', async () => {
      // Arrange
      const templateName = 'non-existent';
      mockPrisma.emailTemplate.findUnique.mockResolvedValue(null);
      
      // Act
      const template = await getEmailTemplate(templateName);
      
      // Assert
      expect(template).toBeNull();
    });
  });
  
  describe('renderTemplate', () => {
    it('should render a template with variables', () => {
      // Arrange
      const template = 'Hello {{name}}, welcome to {{company}}!';
      const variables = { name: 'John', company: 'Indonet' };
      
      // Act
      const rendered = renderTemplate(template, variables);
      
      // Assert
      expect(rendered).toBe('Hello John, welcome to Indonet!');
    });
    
    it('should handle missing variables gracefully', () => {
      // Arrange
      const template = 'Hello {{name}}, welcome to {{company}}!';
      const variables = { name: 'John' };
      
      // Act
      const rendered = renderTemplate(template, variables);
      
      // Assert
      expect(rendered).toBe('Hello John, welcome to !');
    });
  });
});
