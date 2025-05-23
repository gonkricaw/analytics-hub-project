// A simple JavaScript script to directly update the admin user
// No need for TypeScript or complex imports
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function updateAdmin() {
  try {
    console.log('Attempting to update admin user...');
    
    // Update the admin user to accept terms and conditions
    const updatedUser = await prisma.idnbi_User.update({
      where: {
        email: 'admin@example.com'
      },
      data: {
        terms_accepted_at: new Date(),
        status: 'ACTIVE'
      }
    });
    
    console.log('Admin user updated successfully:', updatedUser.email);
    console.log('Terms accepted at:', updatedUser.terms_accepted_at);
  } catch (error) {
    console.error('Error updating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Execute the function
updateAdmin();
