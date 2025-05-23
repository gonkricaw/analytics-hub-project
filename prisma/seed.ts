import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';

const logFile = './seed.log';

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
  log('Seeding database...');

  // Create roles
  log('Creating roles...');
  const adminRole = await prisma.idnbi_Role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: {
      id: uuidv4(),
      name: 'ADMIN',
      description: 'Administrator with full access',
      updated_at: new Date(),
    },
  });
  log('Admin role created or updated');

  const userRole = await prisma.idnbi_Role.upsert({
    where: { name: 'USER' },
    update: {},
    create: {
      id: uuidv4(),
      name: 'USER',
      description: 'Regular user with limited access',
      updated_at: new Date(),
    },
  });
  log('User role created or updated');

  // Create permissions
  log('Creating permissions...');
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
  ];

  // Upsert permissions
  for (const permission of permissions) {
    await prisma.idnbi_Permission.upsert({
      where: { name: permission.name },
      update: {},
      create: {
        id: uuidv4(),
        name: permission.name,
        description: permission.description,
        updated_at: new Date(),
      },
    });
  }
  log('Permissions created or updated');

  // Assign all permissions to admin role
  log('Assigning permissions to admin role...');
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
  log('Admin role permissions assigned');

  // Assign only read permissions to user role
  log('Assigning read permissions to user role...');
  const readPermissions = allPermissions.filter((p) => p.name.includes(':read'));
  
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
  log('User role permissions assigned');

  // Create admin user
  log('Creating admin user...');
  const hashedPassword = await bcrypt.hash('AdminPassword123!', 10);
  
  const adminUser = await prisma.idnbi_User.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      id: uuidv4(),
      email: 'admin@example.com',
      name: 'Admin User',
      password: hashedPassword,
      status: 'ACTIVE',
      updated_at: new Date(),
    },
  });
  log('Admin user created or updated');
  
  // Assign admin role to admin user
  log('Assigning admin role to admin user...');
  await prisma.idnbi_UserRole.upsert({
    where: {
      userId_roleId: {
        userId: adminUser.id,
        roleId: adminRole.id,
      },
    },
    update: {},
    create: {
      userId: adminUser.id,
      roleId: adminRole.id,
    },
  });
  log('Admin role assigned to admin user');
  
  // Create test user
  log('Creating test user...');
  const userHashedPassword = await bcrypt.hash('TestPassword123!', 10);
  
  const testUser = await prisma.idnbi_User.upsert({
    where: { email: 'test-user@example.com' },
    update: {},
    create: {
      id: uuidv4(),
      email: 'test-user@example.com',
      name: 'Test User',
      password: userHashedPassword,
      status: 'ACTIVE',
      updated_at: new Date(),
    },
  });
  log('Test user created or updated');

  // Assign user role to test user
  log('Assigning user role to test user...');
  await prisma.idnbi_UserRole.upsert({
    where: {
      userId_roleId: {
        userId: testUser.id,
        roleId: userRole.id,
      },
    },
    update: {},
    create: {
      userId: testUser.id,
      roleId: userRole.id,
    },
  });
  log('User role assigned to test user');

  // Create Terms and Conditions
  log('Creating Terms and Conditions...');
  await prisma.idnbi_TermsAndConditions.upsert({
    where: { version: '1.0' },
    update: {},
    create: {
      id: uuidv4(),
      version: '1.0',
      content_html: '<h1>Terms and Conditions</h1><p>Welcome to Indonet Analytics Hub. By using this application, you agree to the following terms and conditions.</p><p>This is a sample terms and conditions document for testing purposes.</p>',
      published_at: new Date(),
      updated_at: new Date(),
    },
  });
  log('Terms and Conditions created or updated');

  // Create email templates
  log('Creating email templates...');
  const emailTemplates = [
    {
      name: 'welcome_email',
      subject: 'Welcome to Indonet Analytics Hub',
      content: '<h1>Welcome!</h1><p>Thank you for joining Indonet Analytics Hub. We are excited to have you on board.</p>',
    },
    {
      name: 'password_reset',
      subject: 'Password Reset Request',
      content: '<h1>Password Reset</h1><p>You have requested to reset your password. Please click the link below to proceed.</p>',
    },
  ];

  for (const template of emailTemplates) {
    await prisma.idnbi_EmailTemplate.upsert({
      where: { name: template.name },
      update: {},
      create: {
        id: uuidv4(),
        name: template.name,
        subject: template.subject,
        content: template.content,
        updated_at: new Date(),
      },
    });
  }
  log('Email templates created or updated');

  // Create system configurations
  log('Creating system configurations...');
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
      updated_at: new Date(),
    },
  });
  log('System configurations created or updated');

  // Create sample content
  log('Creating sample content...');
  await prisma.idnbi_Content.upsert({
    where: { slug: 'getting-started-guide' },
    update: {},
    create: {
      id: uuidv4(),
      title: 'Getting Started Guide',
      slug: 'getting-started-guide',
      type: 'html',
      content_data: '<h1>Welcome to Indonet Analytics Hub</h1><p>This guide will help you get started with using the platform. Follow these steps to make the most of our analytics tools.</p><h2>Step 1: Explore the Dashboard</h2><p>The dashboard provides an overview of your key metrics and recent activity.</p>',
      created_by_id: adminUser.id,
      updated_at: new Date(),
    },
  });
  log('Sample content created or updated');

  // Create sample menu items
  log('Creating menu items...');
  let dashboardMenu = await prisma.idnbi_MenuItem.findFirst({
    where: { 
      title: 'Dashboard',
      parent_id: null
    }
  });

  if (!dashboardMenu) {
    log('Creating Dashboard menu...');
    dashboardMenu = await prisma.idnbi_MenuItem.create({
      data: {
        id: uuidv4(),
        title: 'Dashboard',
        parent_id: null,
        order: 1,
        icon_class: 'dashboard',
        type: 'link_internal',
        target_url: '/home',
        updated_at: new Date(),
      },
    });
    log('Dashboard menu created');
  }

  let contentMenu = await prisma.idnbi_MenuItem.findFirst({
    where: { 
      title: 'Content Library',
      parent_id: null
    }
  });

  if (!contentMenu) {
    log('Creating Content Library menu...');
    contentMenu = await prisma.idnbi_MenuItem.create({
      data: {
        id: uuidv4(),
        title: 'Content Library',
        parent_id: null,
        order: 2,
        icon_class: 'library_books',
        type: 'link_internal',
        target_url: '/content',
        updated_at: new Date(),
      },
    });
    log('Content Library menu created');
  }

  // Add access for both roles to these menus
  log('Assigning menu access to roles...');
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
  log('Menu access assigned to roles');

  log('Database seeded successfully!');
  log('Admin user created: admin@example.com (password: AdminPassword123!)');
  log('Test user created: test-user@example.com (password: TestPassword123!)');
}

log('Seed script started');

main()
  .catch((e) => {
    log(`Error seeding database: ${e}`);
    if (e instanceof Error && e.stack) {
      log(`Error stack: ${e.stack}`);
    }
    process.exit(1);
  })
  .finally(async () => {
    log('Closing database connection...');
    await prisma.$disconnect();
    log('Seed script completed');
  });
