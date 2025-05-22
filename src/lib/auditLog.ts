// filepath: d:/Project/NEXTJS/analytics-hub-project/src/lib/auditLog.ts
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import * as Sentry from '@sentry/nextjs';

/**
 * Action types for audit logging
 */
export const AuditActionType = {
  // Authentication actions
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  PASSWORD_RESET_REQUEST: 'PASSWORD_RESET_REQUEST',
  PASSWORD_RESET_COMPLETE: 'PASSWORD_RESET_COMPLETE',
  
  // User management actions
  USER_CREATE: 'USER_CREATE',
  USER_UPDATE: 'USER_UPDATE',
  USER_DELETE: 'USER_DELETE',
  USER_ROLE_CHANGE: 'USER_ROLE_CHANGE',
  
  // Content management actions
  CONTENT_CREATE: 'CONTENT_CREATE',
  CONTENT_UPDATE: 'CONTENT_UPDATE',
  CONTENT_DELETE: 'CONTENT_DELETE',
  
  // Menu management actions
  MENU_CREATE: 'MENU_CREATE',
  MENU_UPDATE: 'MENU_UPDATE',
  MENU_DELETE: 'MENU_DELETE',
  
  // Role & Permission actions
  ROLE_CREATE: 'ROLE_CREATE',
  ROLE_UPDATE: 'ROLE_UPDATE',
  ROLE_DELETE: 'ROLE_DELETE',
  PERMISSION_ASSIGN: 'PERMISSION_ASSIGN',
  
  // System configuration actions
  SYSTEM_CONFIG_UPDATE: 'SYSTEM_CONFIG_UPDATE',
  EMAIL_TEMPLATE_UPDATE: 'EMAIL_TEMPLATE_UPDATE',
  
  // Terms & Conditions actions
  TERMS_UPDATE: 'TERMS_UPDATE',
  TERMS_ACCEPT: 'TERMS_ACCEPT',
  
  // Security actions
  IP_BLOCK: 'IP_BLOCK',
  IP_UNBLOCK: 'IP_UNBLOCK',
  
  // Notification actions
  NOTIFICATION_CREATE: 'NOTIFICATION_CREATE',
  NOTIFICATION_MARK_READ: 'NOTIFICATION_MARK_READ'
} as const;

// Type for action types
export type AuditActionType = typeof AuditActionType[keyof typeof AuditActionType];

/**
 * Interface for audit log data
 */
export interface AuditLogData {
  userId?: string;
  actionType: AuditActionType;
  targetResource: string;
  targetResourceId?: string;
  ipAddress: string;
  details?: Record<string, any>;
}

/**
 * Create an audit log entry
 */
export async function createAuditLog({
  userId,
  actionType,
  targetResource,
  targetResourceId,
  ipAddress,
  details
}: AuditLogData) {
  try {
    // Create the audit log entry
    const auditLog = await prisma.idnbi_AuditLog.create({
      data: {
        user_id: userId,
        action_type: actionType,
        target_resource: targetResource,
        target_resource_id: targetResourceId,
        ip_address: ipAddress,
        details: details ? JSON.stringify(details) : null,
      },
    });
    
    return auditLog;
  } catch (error) {
    // Log error to Sentry but don't fail the main operation
    Sentry.captureException(error);
    console.error('Failed to create audit log:', error);
    return null;
  }
}

/**
 * Create an audit log entry from a server component or API route
 */
export async function createServerAuditLog({
  actionType,
  targetResource,
  targetResourceId,
  ipAddress,
  details,
  headers,
}: Omit<AuditLogData, 'userId'> & { 
  headers: Headers | { [key: string]: string } 
}) {
  try {
    // Get the current session
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    
    // Get IP address if not provided
    const ip = ipAddress || getIpFromHeaders(headers);
    
    return createAuditLog({
      userId,
      actionType,
      targetResource,
      targetResourceId,
      ipAddress: ip,
      details
    });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Failed to create server audit log:', error);
    return null;
  }
}

/**
 * Helper function to extract IP address from request headers
 */
function getIpFromHeaders(headers: Headers | { [key: string]: string }): string {
  // Handle both Headers object and plain object
  const getHeader = (name: string): string | null => {
    if (headers instanceof Headers) {
      return headers.get(name);
    }
    return headers[name] || null;
  };
  
  // Try to get the IP from various headers
  const forwardedFor = getHeader('x-forwarded-for');
  if (forwardedFor) {
    // Get the first IP if there are multiple
    return forwardedFor.split(',')[0].trim();
  }
  
  const realIp = getHeader('x-real-ip');
  if (realIp) {
    return realIp;
  }
  
  // Default to a placeholder if no IP can be determined
  return '0.0.0.0';
}
