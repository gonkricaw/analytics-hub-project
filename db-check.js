const fs = require('fs');
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();
const outputFile = './db-check-output.json';

async function main() {
  const results = {
    timestamp: new Date().toISOString(),
    users: [],
    roles: [],
    menuItems: [],
    permissions: [],
  };

  // Check users
  const userCount = await prisma.idnbi_User.count();
  results.userCount = userCount;
  
  if (userCount > 0) {
    const users = await prisma.idnbi_User.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        status: true
      }
    });
    results.users = users;
  }
  
  // Check roles
  const roleCount = await prisma.idnbi_Role.count();
  results.roleCount = roleCount;
  
  if (roleCount > 0) {
    const roles = await prisma.idnbi_Role.findMany();
    results.roles = roles;
  }
  
  // Check menu items
  const menuCount = await prisma.idnbi_MenuItem.count();
  results.menuCount = menuCount;
  
  // Check permissions
  const permissionCount = await prisma.idnbi_Permission.count();
  results.permissionCount = permissionCount;
  
  // Write results to file
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`Results written to ${outputFile}`);
}

main()
  .catch((e) => {
    console.error('Error:', e);
    fs.writeFileSync('db-check-error.txt', String(e));
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
