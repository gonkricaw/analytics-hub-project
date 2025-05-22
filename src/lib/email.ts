import nodemailer from 'nodemailer';
import prisma from './prisma';
import * as Sentry from '@sentry/nextjs';
import { formatISO } from 'date-fns';

// Initialize nodemailer transporter
let transporter: nodemailer.Transporter;

// Initialize the transporter
function getTransporter() {
  if (!transporter) {
    // Create a transporter using environment variables
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });
  }
  
  return transporter;
}

// Get email template from database
async function getEmailTemplate(templateType: string): Promise<string | null> {
  try {
    const template = await prisma.idnbi_EmailTemplate.findUnique({
      where: { type: templateType },
    });
    
    return template?.content_html || null;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching email template:', error);
    return null;
  }
}

// Replace template placeholders with actual values
function replacePlaceholders(template: string, replacements: Record<string, string>): string {
  let result = template;
  
  for (const [key, value] of Object.entries(replacements)) {
    const placeholder = `{{${key}}}`;
    result = result.replace(new RegExp(placeholder, 'g'), value);
  }
  
  return result;
}

// Generic function to send an email
export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  from: string = process.env.EMAIL_FROM || 'noreply@indonet.com'
): Promise<boolean> {
  try {
    const transport = getTransporter();
    
    const info = await transport.sendMail({
      from,
      to,
      subject,
      html,
    });
    
    console.log(`Email sent: ${info.messageId}`);
    
    // Log email sending to audit log
    await prisma.idnbi_AuditLog.create({
      data: {
        action_type: 'EMAIL_SENT',
        target_resource: 'EMAIL',
        target_resource_id: info.messageId,
        ip_address: '127.0.0.1', // System action
        details: JSON.stringify({
          to,
          subject,
          timestamp: new Date().toISOString(),
        }),
      },
    });
    
    return true;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error sending email:', error);
    return false;
  }
}

// Send an email using a template
export async function sendTemplatedEmail(
  templateType: string,
  to: string,
  subject: string,
  replacements: Record<string, string>,
  from: string = process.env.EMAIL_FROM || 'noreply@indonet.com'
): Promise<boolean> {
  try {
    // Get template
    const template = await getEmailTemplate(templateType);
    
    if (!template) {
      console.error(`Email template not found: ${templateType}`);
      return false;
    }
    
    // Replace placeholders
    const html = replacePlaceholders(template, {
      ...replacements,
      appName: process.env.NEXT_PUBLIC_APP_NAME || 'Indonet Analytics Hub',
      appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
      currentDate: formatISO(new Date(), { representation: 'date' }),
    });
    
    // Send email
    return await sendEmail(to, subject, html, from);
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Error sending ${templateType} email:`, error);
    return false;
  }
}

// Send a system warning email to administrators
export async function sendSystemWarningEmail(
  warningType: string,
  details: Record<string, any>,
  severity: 'low' | 'medium' | 'high' | 'critical' = 'medium'
): Promise<boolean> {
  try {
    // Get admin email addresses
    const admins = await prisma.idnbi_User.findMany({
      where: {
        role: {
          name: 'Admin',
        },
      },
      select: {
        email: true,
      },
    });
    
    if (!admins || admins.length === 0) {
      console.error('No admin users found to send system warning email');
      return false;
    }
    
    const adminEmails = admins.map(admin => admin.email);
    
    // Generate subject based on severity
    const subject = `[${severity.toUpperCase()}] ${process.env.NEXT_PUBLIC_APP_NAME || 'Indonet Analytics Hub'} System Warning: ${warningType}`;
    
    // Generate HTML content if template is not found
    const detailsHTML = Object.entries(details)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join('');
    
    const fallbackHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="color: #${severity === 'critical' ? 'cc0000' : severity === 'high' ? 'ff6600' : severity === 'medium' ? 'ffcc00' : '66cc00'};">
          System Warning: ${warningType}
        </h1>
        <p>Severity: ${severity.toUpperCase()}</p>
        <p>Time: ${new Date().toISOString()}</p>
        <h2>Details:</h2>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${detailsHTML}
        </div>
        <p>Please take appropriate action.</p>
        <hr>
        <p style="font-size: 12px; color: #777;">
          This is an automated message from ${process.env.NEXT_PUBLIC_APP_NAME || 'Indonet Analytics Hub'}.
          Do not reply to this email.
        </p>
      </div>
    `;
    
    // Try to send with template or fall back to generated HTML
    const result = await sendTemplatedEmail(
      'system_warning',
      adminEmails.join(','),
      subject,
      {
        warningType,
        severity,
        details: JSON.stringify(details, null, 2),
        timestamp: new Date().toISOString(),
      }
    ) || await sendEmail(adminEmails.join(','), subject, fallbackHTML);
    
    // Log the warning to audit log
    await prisma.idnbi_AuditLog.create({
      data: {
        action_type: 'SYSTEM_WARNING',
        target_resource: 'SYSTEM',
        target_resource_id: warningType,
        ip_address: '127.0.0.1', // System action
        details: JSON.stringify({
          warningType,
          severity,
          details,
          timestamp: new Date().toISOString(),
        }),
      },
    });
    
    return result;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error sending system warning email:', error);
    return false;
  }
}
