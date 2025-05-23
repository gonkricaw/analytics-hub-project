import { PrismaClient } from '../src/generated/prisma';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  console.log('Starting minimal seed test...');
  
  try {
    // Create a simple test role
    const testRole = await prisma.idnbi_Role.upsert({
      where: { name: 'TEST_ROLE' },
      update: {},
      create: {
        id: uuidv4(),
        name: 'TEST_ROLE',
        description: 'Test role created by seed script',
        updated_at: new Date(),
      },
    });
    
    console.log('Test role created successfully:', testRole);
    
  } catch (error) {
    console.error('Error during minimal seeding:', error);
  }
}

main()
  .catch((e) => {
    console.error('Fatal error in seed test:', e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Disconnecting...');
    await prisma.$disconnect();
    console.log('Done');
  });
