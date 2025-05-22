import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create roles
  const adminRole = await prisma.idnbi_Role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: {
      name: 'ADMIN',
      description: 'Administrator with full access',
    },
  });

  const userRole = await prisma.idnbi_Role.upsert({
    where: { name: 'USER' },
    update: {},
    create: {
      name: 'USER',
      description: 'Regular user with limited access',
    },
  });

  // Create permissions
  const permissions = [
    { name: 'user:create', description: 'Create users' },
    { name: 'user:read', description: 'Read users' },
    { name: 'user:update', description: 'Update users' },
    { name: 'user:delete', description: 'Delete users' },
    { name: 'content:create', description: 'Create content' },
    { name: 'content:read', description: 'Read content' },
    { name: 'content:update', description: 'Update content' },
    { name: 'content:delete', description: 'Delete content' },
    { name: 'menu:create', description: 'Create menu items' },
    { name: 'menu:read', description: 'Read menu items' },
    { name: 'menu:update', description: 'Update menu items' },
    { name: 'menu:delete', description: 'Delete menu items' },
    { name: 'system:config', description: 'Configure system settings' },
  ];

  // Upsert permissions
  for (const permission of permissions) {
    await prisma.idnbi_Permission.upsert({
      where: { name: permission.name },
      update: {},
      create: permission,
    });
  }

  // Assign all permissions to admin role
  const allPermissions = await prisma.idnbi_Permission.findMany();
  
  for (const permission of allPermissions) {
    await prisma.idnbi_RolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: adminRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: permission.id,
      },
    });
  }
  // Assign only read permissions to user role
  const readPermissions = allPermissions.filter((p: { name: string; id: string }) => p.name.includes(':read'));
  
  for (const permission of readPermissions) {
    await prisma.idnbi_RolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: userRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: userRole.id,
        permissionId: permission.id,
      },
    });
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash('AdminPassword123!', 10);
  
  await prisma.idnbi_User.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: hashedPassword,
      status: 'ACTIVE',
      roles: {
        create: [
          {
            roleId: adminRole.id,
          },
        ],
      },
    },
  });
  
  // Create test user
  const userHashedPassword = await bcrypt.hash('TestPassword123!', 10);
  
  await prisma.idnbi_User.upsert({
    where: { email: 'test-user@example.com' },
    update: {},
    create: {
      email: 'test-user@example.com',
      name: 'Test User',
      password: userHashedPassword,
      status: 'ACTIVE',
      roles: {
        create: [
          {
            roleId: userRole.id,
          },
        ],
      },
    },
  });

  // Create Terms and Conditions
  await prisma.idnbi_TermsAndConditions.upsert({
    where: { version: '1.0' },
    update: {},
    create: {
      version: '1.0',
      content_html: '<h1>Terms and Conditions</h1><p>Welcome to Indonet Analytics Hub. By using this application, you agree to the following terms and conditions.</p><p>This is a sample terms and conditions document for testing purposes.</p>',
      published_at: new Date(),
    },
  });

  // Create Email Templates
  const emailTemplates = [
    {
      name: 'user_invitation',
      subject: 'Welcome to Indonet Analytics Hub',
      content: '<h1>Welcome to Indonet Analytics Hub!</h1><p>Hello {{name}},</p><p>You have been invited to join Indonet Analytics Hub. Please use the following credentials to log in:</p><p>Email: {{email}}<br>Temporary Password: {{password}}</p><p>You will be prompted to change your password after your first login.</p>',
    },
    {
      name: 'password_reset',
      subject: 'Password Reset Request',
      content: '<h1>Password Reset</h1><p>Hello {{name}},</p><p>We received a request to reset your password. Click the link below to reset your password:</p><p><a href="{{resetLink}}">Reset Password</a></p><p>This link will expire in 24 hours.</p>',
    },
    {
      name: 'system_warning',
      subject: 'System Warning - Indonet Analytics Hub',
      content: '<h1>System Warning</h1><p>Hello Admin,</p><p>A system warning has been detected:</p><p>{{message}}</p><p>Please check the system as soon as possible.</p>',
    },
  ];

  for (const template of emailTemplates) {
    await prisma.idnbi_EmailTemplate.upsert({
      where: { name: template.name },
      update: {},
      create: template,
    });
  }

  // Create system configurations
  await prisma.idnbi_SystemConfiguration.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      app_name: 'Indonet Analytics Hub',
      logo_url: '/public/logo.png',
      login_bg_url: '/public/login-bg.jpg',
      footer_text: '© 2025 Indonet Analytics Hub. All rights reserved.',
      default_profile_photo_url: '/public/default-avatar.png',
      jumbotron_content: JSON.stringify([
        {
          image: '/public/slide1.jpg',
          title: 'Welcome to Indonet Analytics Hub',
          description: 'Your centralized platform for analytics and monitoring',
        },
        {
          image: '/public/slide2.jpg',
          title: 'Powerful Analytics',
          description: 'Get insights into your data with our powerful analytics tools',
        },
      ]),
      marquee_content: 'Welcome to Indonet Analytics Hub - The most powerful analytics platform for your business.',
    },
  });

  // Create sample content
  await prisma.idnbi_Content.upsert({
    where: { slug: 'getting-started-guide' },
    update: {},
    create: {
      title: 'Getting Started Guide',
      slug: 'getting-started-guide',
      type: 'html',
      content_data: '<h1>Welcome to Indonet Analytics Hub</h1><p>This guide will help you get started with using the platform. Follow these steps to make the most of our analytics tools.</p><h2>Step 1: Explore the Dashboard</h2><p>The dashboard provides an overview of your key metrics and recent activity.</p>',
      created_by_id: (await prisma.idnbi_User.findUnique({ where: { email: 'admin@example.com' } }))?.id,
    },
  });

  // Create sample menu items
  const dashboardMenu = await prisma.idnbi_MenuItem.upsert({
    where: { title_parent_id: { title: 'Dashboard', parent_id: "" } },
    update: {},
    create: {
      title: 'Dashboard',
      order: 1,
      icon_class: 'dashboard',
      type: 'link_internal',
      target_url: '/home',
    },
  });
  const contentMenu = await prisma.idnbi_MenuItem.upsert({
    where: { title_parent_id: { title: 'Content Library', parent_id: "" } },
    update: {},
    create: {
      title: 'Content Library',
      order: 2,
      icon_class: 'library_books',
      type: 'link_internal',
      target_url: '/content',
    },
  });

  // Add access for both roles to these menus
  const menuRoles = [
    { menuId: dashboardMenu.id, roleId: adminRole.id },
    { menuId: dashboardMenu.id, roleId: userRole.id },
    { menuId: contentMenu.id, roleId: adminRole.id },
    { menuId: contentMenu.id, roleId: userRole.id },
  ];

  for (const menuRole of menuRoles) {
    await prisma.idnbi_MenuRole.upsert({
      where: {
        menuId_roleId: {
          menuId: menuRole.menuId,
          roleId: menuRole.roleId,
        },
      },
      update: {},
      create: menuRole,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma Client at the end
    await prisma.$disconnect();
  });
