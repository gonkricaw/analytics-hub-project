import { PrismaClient } from '../src/generated/prisma';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';

const logFile = './build.log';

function log(message: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  // Log to file
  fs.appendFileSync(logFile, logMessage);
  
  // Also log to console
  console.log(message);
}

const prisma = new PrismaClient();

async function main() {
  log('Starting log-based seed test...');
  
  try {
    // Create a simple test role
    log('Attempting to create a test role...');
    
    const testRole = await prisma.idnbi_Role.upsert({
      where: { name: 'LOGGED_TEST_ROLE' },
      update: {},
      create: {
        id: uuidv4(),
        name: 'LOGGED_TEST_ROLE',
        description: 'Test role created by log-based seed script',
        updated_at: new Date(),
      },
    });
    
    log(`Test role created successfully with ID: ${testRole.id}`);
    
  } catch (error) {
    log(`Error during seeding: ${error}`);
    if (error instanceof Error) {
      log(`Error details: ${error.stack}`);
    }
  }
}

log('Script started');

main()
  .catch((e) => {
    log(`Fatal error in seed test: ${e}`);
    if (e instanceof Error) {
      log(`Error details: ${e.stack}`);
    }
    process.exit(1);
  })
  .finally(async () => {
    log('Disconnecting from database...');
    await prisma.$disconnect();
    log('Done');
  });
