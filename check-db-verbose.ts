import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  console.log('Checking database connection...');
  
  try {
    // Attempt a simple query
    const userCount = await prisma.idnbi_User.count();
    console.log(`Database contains ${userCount} users`);
    
    // Let's also check if other tables exist
    console.log('Checking other tables...');
    const roleCount = await prisma.idnbi_Role.count();
    console.log(`Database contains ${roleCount} roles`);
    
    console.log('Database connection is working properly!');
  } catch (error) {
    console.error('Database connection failed:');
    console.error(error);
  } finally {
    await prisma.$disconnect();
    console.log('Database connection closed');
  }
}

main();
