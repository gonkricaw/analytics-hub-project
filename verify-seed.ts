import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking database contents...');
  
  // Check users
  const userCount = await prisma.idnbi_User.count();
  console.log(`Users: ${userCount}`);
  const users = await prisma.idnbi_User.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      status: true
    }
  });
  console.log('Users:', JSON.stringify(users, null, 2));
  
  // Check roles
  const roleCount = await prisma.idnbi_Role.count();
  console.log(`Roles: ${roleCount}`);
  const roles = await prisma.idnbi_Role.findMany();
  console.log('Roles:', JSON.stringify(roles, null, 2));
  
  // Check menu items
  const menuCount = await prisma.idnbi_MenuItem.count();
  console.log(`Menu Items: ${menuCount}`);
  
  // Check permissions
  const permissionCount = await prisma.idnbi_Permission.count();
  console.log(`Permissions: ${permissionCount}`);
  
  console.log('Verification completed!');
}

main()
  .catch((e) => {
    console.error('Error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
