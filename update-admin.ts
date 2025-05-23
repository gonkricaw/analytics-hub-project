import { PrismaClient } from "./src/generated/prisma";

const prisma = new PrismaClient();

async function updateAdmin() {
  try {
    // Update the admin user to accept terms and conditions
    const updatedUser = await prisma.idnbi_User.update({
      where: {
        email: 'admin@example.com'
      },
      data: {
        terms_accepted_at: new Date(),
        // Also ensure the user is active
        status: 'ACTIVE'
      }
    });
    
    console.log('Admin user updated successfully:', updatedUser.email);
  } catch (error) {
    console.error('Error updating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateAdmin();
