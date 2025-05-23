import { PrismaClient } from './src/generated/prisma';
import * as fs from 'fs';

const logFile = './verification.log';

function log(message: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  // Log to file
  fs.appendFileSync(logFile, logMessage);
}

const prisma = new PrismaClient();

async function main() {
  log('Checking database contents...');
  
  // Check users
  const userCount = await prisma.idnbi_User.count();
  log(`Users: ${userCount}`);
  const users = await prisma.idnbi_User.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      status: true
    }
  });
  log(`Users: ${JSON.stringify(users, null, 2)}`);
  
  // Check roles
  const roleCount = await prisma.idnbi_Role.count();
  log(`Roles: ${roleCount}`);
  const roles = await prisma.idnbi_Role.findMany();
  log(`Roles: ${JSON.stringify(roles, null, 2)}`);
  
  // Check menu items
  const menuCount = await prisma.idnbi_MenuItem.count();
  log(`Menu Items: ${menuCount}`);
  
  // Check permissions
  const permissionCount = await prisma.idnbi_Permission.count();
  log(`Permissions: ${permissionCount}`);
  
  log('Verification completed!');
}

main()
  .catch((e) => {
    log(`Error: ${e}`);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
