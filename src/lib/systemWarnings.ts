import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import * as Sentry from "@sentry/nextjs";

export enum SystemWarningType {
  MULTIPLE_FAILED_LOGINS = "MULTIPLE_FAILED_LOGINS",
  EXCESSIVE_IP_BLOCKS = "EXCESSIVE_IP_BLOCKS",
  SERVER_ERROR = "SERVER_ERROR",
  SUSPICIOUS_ACTIVITY = "SUSPICIOUS_ACTIVITY",
  SYSTEM_MAINTENANCE = "SYSTEM_MAINTENANCE",
}

interface SystemWarningOptions {
  title?: string;
  details?: Record<string, any>;
  recipients?: string[];
}

/**
 * Send a system warning email to administrators
 *
 * @param warningType Type of system warning
 * @param options Additional options (title, details, recipients)
 */
export async function sendSystemWarningEmail(
  warningType: SystemWarningType,
  options: SystemWarningOptions = {},
): Promise<boolean> {
  try {
    // Get system admin emails if recipients not specified
    let recipients = options.recipients;

    if (!recipients || recipients.length === 0) {
      // Find admin users to send the email to
      const adminUsers = await prisma.idnbi_User.findMany({
        where: {
          role: {
            name: "Admin",
          },
        },
        select: {
          email: true,
        },
      });

      recipients = adminUsers.map((user) => user.email);
    }

    // If no recipients, log a warning and exit
    if (!recipients || recipients.length === 0) {
      console.warn("No recipients found for system warning email");
      return false;
    }

    // Get email template from database or use default
    const emailTemplate = await prisma.idnbi_EmailTemplate.findUnique({
      where: {
        template_type: "system_warning",
      },
    });

    // Generate default template if custom one doesn't exist
    let subject = `[SYSTEM WARNING] ${options.title || getDefaultWarningTitle(warningType)}`;
    let bodyHtml = generateDefaultWarningEmailBody(
      warningType,
      options.details || {},
    );

    // Use custom template if available
    if (emailTemplate) {
      subject = emailTemplate.subject
        .replace("{{warning_type}}", warningType)
        .replace(
          "{{title}}",
          options.title || getDefaultWarningTitle(warningType),
        );

      // Replace placeholders in custom template body
      bodyHtml = emailTemplate.body_html
        .replace("{{warning_type}}", warningType)
        .replace(
          "{{title}}",
          options.title || getDefaultWarningTitle(warningType),
        )
        .replace("{{details}}", JSON.stringify(options.details || {}));

      // Additional dynamic replacements can be added here
    }

    // Send the email
    const sent = await sendEmail({
      to: recipients,
      subject,
      html: bodyHtml,
    });

    // Log the warning in the audit log
    try {
      await prisma.idnbi_AuditLog.create({
        data: {
          user_id: null, // System-generated warning
          action_type: "SYSTEM_WARNING",
          target_resource: "SYSTEM",
          target_resource_id: warningType,
          ip_address: "127.0.0.1", // System-generated
          details: JSON.stringify({
            warning_type: warningType,
            title: options.title || getDefaultWarningTitle(warningType),
            details: options.details || {},
            recipients,
          }),
        },
      });
    } catch (logError) {
      console.error("Error logging system warning:", logError);
      Sentry.captureException(logError);
    }

    return sent;
  } catch (error) {
    console.error("Error sending system warning email:", error);
    Sentry.captureException(error);
    return false;
  }
}

/**
 * Get a default title for a warning type
 */
function getDefaultWarningTitle(warningType: SystemWarningType): string {
  switch (warningType) {
    case SystemWarningType.MULTIPLE_FAILED_LOGINS:
      return "Multiple Failed Login Attempts Detected";
    case SystemWarningType.EXCESSIVE_IP_BLOCKS:
      return "Excessive IP Blocks Detected";
    case SystemWarningType.SERVER_ERROR:
      return "Server Error Detected";
    case SystemWarningType.SUSPICIOUS_ACTIVITY:
      return "Suspicious Activity Detected";
    case SystemWarningType.SYSTEM_MAINTENANCE:
      return "System Maintenance Required";
    default:
      return "System Warning";
  }
}

/**
 * Generate a default HTML email body for a warning type
 */
function generateDefaultWarningEmailBody(
  warningType: SystemWarningType,
  details: Record<string, any>,
): string {
  let warningMessage = "";

  switch (warningType) {
    case SystemWarningType.MULTIPLE_FAILED_LOGINS:
      warningMessage = `
        <p>Multiple failed login attempts have been detected in the system.</p>
        <p>Details:</p>
        <ul>
          <li>IP Address: ${details.ipAddress || "Unknown"}</li>
          <li>Attempts: ${details.attempts || "Unknown"}</li>
          <li>Timeframe: ${details.timeframe || "Last hour"}</li>
        </ul>
        <p>Please review the security logs and take appropriate action if needed.</p>
      `;
      break;

    case SystemWarningType.EXCESSIVE_IP_BLOCKS:
      warningMessage = `
        <p>An unusually high number of IP addresses have been blocked in the system.</p>
        <p>Details:</p>
        <ul>
          <li>Number of Blocks: ${details.blockCount || "Unknown"}</li>
          <li>Timeframe: ${details.timeframe || "Last 24 hours"}</li>
        </ul>
        <p>This could indicate a brute force attack attempt. Please review the security logs.</p>
      `;
      break;

    case SystemWarningType.SERVER_ERROR:
      warningMessage = `
        <p>A serious server error has occurred that requires attention.</p>
        <p>Details:</p>
        <ul>
          <li>Error Type: ${details.errorType || "Unknown"}</li>
          <li>Message: ${details.message || "No message provided"}</li>
          <li>Path: ${details.path || "Unknown"}</li>
        </ul>
        <p>Please check the server logs for more information.</p>
      `;
      break;

    case SystemWarningType.SUSPICIOUS_ACTIVITY:
      warningMessage = `
        <p>Suspicious activity has been detected in the system.</p>
        <p>Details:</p>
        <ul>
          <li>Activity Type: ${details.activityType || "Unknown"}</li>
          <li>User ID: ${details.userId || "Unknown"}</li>
          <li>IP Address: ${details.ipAddress || "Unknown"}</li>
        </ul>
        <p>Please investigate this activity further.</p>
      `;
      break;

    case SystemWarningType.SYSTEM_MAINTENANCE:
      warningMessage = `
        <p>The system requires maintenance attention.</p>
        <p>Details:</p>
        <ul>
          <li>Issue: ${details.issue || "Unknown"}</li>
          <li>Priority: ${details.priority || "Medium"}</li>
        </ul>
        <p>Please schedule maintenance accordingly.</p>
      `;
      break;

    default:
      warningMessage = `
        <p>A system warning has been triggered.</p>
        <p>Details:</p>
        <pre>${JSON.stringify(details, null, 2)}</pre>
        <p>Please investigate this warning further.</p>
      `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${getDefaultWarningTitle(warningType)}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #FF4136; color: white; padding: 10px 20px; margin-bottom: 20px; }
        .content { padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
        .footer { margin-top: 20px; font-size: 12px; color: #777; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${getDefaultWarningTitle(warningType)}</h2>
        </div>
        <div class="content">
          ${warningMessage}
          <p>Time: ${new Date().toISOString()}</p>
        </div>
        <div class="footer">
          <p>This is an automated message from the Indonet Analytics Hub system.</p>
          <p>Please do not reply to this email. Contact your system administrator for assistance.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
