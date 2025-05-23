import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting simple seed test...');
  
  try {
    // Test database connection
    const userCount = await prisma.idnbi_User.count();
    console.log(`Current user count: ${userCount}`);
    
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

main()
  .catch((e) => {
    console.error('Error in seed test:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Disconnected from database');
  });
