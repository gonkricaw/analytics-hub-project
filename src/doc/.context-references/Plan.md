## Indonet Analytics Hub: Development Plan

This plan outlines the phases and steps required to build the Indonet Analytics Hub application using Next.js, adhering to the provided requirements document.

-----

### Phase 0: Project Foundation & Environment Setup ⚙️

This phase focuses on establishing the project's baseline, configuring the development environment, and integrating core UI tools.

1.  **Environment Setup:**

      * Create a `.env.local` file in the project root with the following structure. Replace `"xxxxx"` with actual credentials and information for your development environment.

        ```
        # Database Configuration (PostgreSQL recommended)
        DB_CONNECTION=pgsql
        DB_HOST="xxxxx"
        DB_PORT="5432"
        DB_DATABASE="xxxxx"
        DB_USERNAME="xxxxx"
        DB_PASSWORD="xxxxx"
        DATABASE_URL="postgresql://DB_USERNAME:DB_PASSWORD@DB_HOST:DB_PORT/DB_DATABASE?schema=public" # Prisma uses this

        # Email Service Configuration (e.g., SendGrid, Mailgun, or Gmail for dev)
        MAIL_MAILER=smtp
        MAIL_HOST=smtp.gmail.com
        MAIL_PORT=465
        MAIL_USERNAME="xxxxx" # Your email address
        MAIL_PASSWORD="xxxxx" # Your email password or app-specific password
        MAIL_ENCRYPTION=ssl # or tls, depending on provider
        MAIL_FROM_ADDRESS="xxxxx" # Email address that sends the emails
        MAIL_FROM_NAME="Indonet Analytics Hub"

        # NextAuth Configuration
        NEXTAUTH_URL=http://localhost:3000 # Adjust if your dev URL is different
        NEXTAUTH_SECRET= # Generate a strong secret: openssl rand -base64 32
        # Add other OAuth provider credentials here if needed later

        # Application Configuration
        APP_URL=http://localhost:3000
        ```

      * Ensure all developers use a consistent environment setup.

2.  **Project Initialization & Next.js Confirmation:**

      * Verify that the Next.js project is initialized with: TypeScript, ESLint, Tailwind CSS, `src/` directory, App Router, Turbopack enabled, and `@/*` import alias.

3.  **Core Dependency Installation:**

      * Install essential backend and utility libraries:
          * `prisma` (ORM)
          * `@prisma/client`
          * `next-auth` (Authentication)
          * `bcryptjs` (Password Hashing)
          * `zod` (Validation, chosen from Zod/Yup)
          * `react-hook-form` (Form Handling)
          * `date-fns` (Date utility, if needed for digital clock or logs)
          * Email library (e.g., `nodemailer` if using SMTP directly, or SDKs for SendGrid/Mailgun)
          * `nanoid` or `uuid` (for generating unique IDs, UUIDv4 specified for content embed IDs)

4.  **UI Framework & Styling Setup:**

      * **Tailwind CSS:** Confirm `tailwind.config.ts` (or `.js`) and `postcss.config.js` are correctly configured. Ensure Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`) are in `src/styles/globals.css`.
      * **Dark Mode:** Configure Tailwind CSS for "Dark Mode by default" as per requirements. This typically involves setting `darkMode: 'class'` in `tailwind.config.ts` and adding a `dark` class to the `<html>` or `<body>` tag in `src/app/layout.tsx`.
      * **shadcn/ui:** Initialize `shadcn/ui` in the project. This will set up the `components.json` and CLI.
        ```bash
        npx shadcn@latest init
        ```
        Follow the prompts, ensuring it aligns with the project structure (`@/components/ui`).
      * **MagicUI:** As `shadcn/ui` is now set up, specific MagicUI components can be added as needed. For example, for the Globe component:
        ```bash
        npx shadcn@latest add [https://magicui.design/r/globe.json](https://magicui.design/r/globe.json)
        ```
        This command will add the Globe component files directly into your project, typically within the `components` directory, which can then be customized.
      * **SASS (Optional):** If SASS is deemed necessary, install `sass` and configure it with Next.js.

5.  **Global Styles & Project Structure:**

      * Establish base global styles in `src/styles/globals.css`.
      * Confirm and adhere to the recommended project structure using the App Router.
        ```
        /src
        ├── /app
        │   ├── /api
        │   ├── /(auth)
        │   │   └── /login
        │   ├── /(dashboard)
        │   │   ├── /home
        │   │   └── /ui-showcase # New page for UI component viewing
        │   ├── layout.tsx
        │   └── page.tsx
        ├── /components
        │   ├── /ui # From shadcn
        │   ├── /common # Custom reusable components
        │   ├── /layouts # Layout components (e.g., DashboardLayout)
        │   └── /icons # Custom SVG icons or icon components
        ├── /lib # Utilities, helpers, Prisma client, auth options
        ├── /hooks # Custom React Hooks
        ├── /store # State management (e.g., Zustand)
        ├── /styles # global.css, theme configurations
        ├── /prisma # schema.prisma, migrations
        ├── /public # Static assets
        └── middleware.ts
        ```

6.  **Linting, Formatting, and Dev Tools:**

      * Configure ESLint with plugins for React, Next.js, TypeScript, and Tailwind CSS (e.g., `eslint-plugin-tailwindcss`).
      * Set up Stylelint if SASS is used or for stricter CSS.
      * Integrate Prettier for consistent code formatting.
      * Install `msw` for API mocking if frontend development needs to proceed significantly ahead of backend API completion.
      * Install `react-query` or `swr` for client-side data fetching.

7.  **Version Control:**

      * Initialize a Git repository.
      * Create a `.gitignore` file (Next.js usually provides a good default).
      * Make an initial commit with the project setup.

-----

### Phase 1: Core UI Component Development & Showcase 🎨

This phase focuses on building all necessary reusable UI components and a dedicated page to view them, ensuring styling and basic functionality are correct before feature integration.

1.  **Identify Required UI Components:**

      * Based on Section B (UI Design) and functional module requirements, list all atomic and composite components. Examples:
          * Buttons (primary, secondary, destructive, icon buttons)
          * Inputs (text, password, email, file)
          * Textarea
          * Dropdowns/Selects
          * Modals (for S\&K, confirmations)
          * Toast Notifications (flash messages)
          * Avatars (round, no border)
          * Checkboxes & Radio Buttons
          * Navigation Menu Items (for multi-level dropdowns)
          * Cards (for widgets, content display)
          * Loading Spinners/Skeletons
          * Rich Text Editor wrapper (if using `react-quill` or `TipTap`)
          * Carousel wrapper (for `Swiper (React)`)
          * Chart wrapper (for `react-apexcharts`)
          * Marquee Component
          * Digital Clock Component
          * File upload interface elements

2.  **Develop Reusable UI Components:**

      * Utilize `shadcn/ui` for available base components (e.g., Button, Input, Modal, DropdownMenu, Avatar, Toast). Add them to the project using `npx shadcn@latest add [component-name]`.
      * For specialized components like the Globe, use MagicUI as specified: `npx shadcn@latest add https://magicui.design/r/globe.json`.
      * Develop custom components in `src/components/common/` or `src/components/layouts/`.
      * Ensure all components are styled with Tailwind CSS and adhere to the dark mode theme.
      * Implement basic animations and transitions using `Framer Motion` for components like dropdowns, modals, and interactive elements.

3.  **Implement Core Layout Components:**

      * **Horizontal Navbar:**
          * Structure: Logo, Menu (placeholder for dynamic items), User Avatar (placeholder), Notification Icon (placeholder).
          * Style with Tailwind CSS.
          * Use `Framer Motion` for any subtle hover/interaction animations.
      * **Footer:**
          * Display dynamic footer text (to be managed via System Config).
      * **Main Dashboard Layout:** Create a layout component in `src/components/layouts/DashboardLayout.tsx` that includes the Navbar, a main content area, and the Footer. This will be used by pages within the `(dashboard)` route group.

4.  **Create UI Component Showcase Page:**

      * Create a new route: `src/app/(dashboard)/ui-showcase/page.tsx`.
      * This page should import and display instances of *all* developed UI components from step 2 & 3 (including the Navbar).
      * This allows for easy visual testing, style consistency checks, and ensures components are ready for integration.
      * Organize the showcase page logically (e.g., by component type).

5.  **Integrate Animation & Charting Libraries:**

      * Set up `Framer Motion` for general UI animations.
      * Set up `react-apexcharts` for charting components (initially, perhaps a placeholder chart on the showcase page).
      * Set up `Swiper (React)` for carousel components (a placeholder carousel on the showcase page).
      * Set up `DOMPurify` for input sanitization (though actual use will be in content management).
      * Set up `PrismJS` if code highlighting is anticipated.

-----

### Phase 2: Backend Foundation & Authentication 🔐

This phase focuses on setting up the database, ORM, and the core authentication system.

1.  **Database Schema Design & Prisma Setup:**

      * Define the Prisma schema (`prisma/schema.prisma`) for all required models based on Section A:
          * `User`: Fields as specified (id, name, email, password\_hash, role\_id, profile\_photo\_url, etc.).
          * `Role`: id, name, description.
          * `Permission`: id, name, description.
          * `RolePermission` (join table for m-n between Role and Permission).
          * `TermsAndConditions`: id, content\_html, version, created\_at, updated\_at.
          * `MenuItem`: id, title, parent\_id, order, icon\_class, type, target\_url, content\_id, etc.
          * `Content`: id (UUIDv4), title, type, content\_data, created\_by\_user\_id, etc.
          * `Notification`: id, title, content\_type, content\_data, created\_at, created\_by\_user\_id.
          * `UserNotificationStatus`: user\_id, notification\_id, is\_read, read\_at.
          * `EmailTemplate`: id, template\_type, subject, body\_html, is\_custom.
          * `SystemConfiguration`: key (string, unique), value (JSON or TEXT).
          * `AuditLog`: id, user\_id, action\_type, target\_resource, target\_resource\_id, timestamp, ip\_address, details.
          * (Potentially) `FailedLoginAttempt`: ip\_address, timestamp, count.
          * (Potentially) `IPBlocklist`: ip\_address, blocked\_until.
          * (Potentially) `PasswordResetToken`: token\_hash, user\_id, expires\_at.
      * Run `npx prisma migrate dev --name init` to create the initial migration and apply it to the database.
      * Generate Prisma Client: `npx prisma generate`.
      * Set up Prisma Client instance in `src/lib/prisma.ts`.

2.  **`next-auth` Implementation:**

      * Configure `next-auth` in `src/app/api/auth/[...nextauth]/route.ts` (or `src/lib/authOptions.ts` imported there).
      * Implement `CredentialsProvider` for email/password login.
      * Integrate `bcryptjs` for password comparison during login.
      * Configure session strategy (JWT recommended for flexibility).
      * Set up callbacks (e.g., `jwt`, `session`) to include user role and ID in the session token.
      * Protect API routes and pages using `next-auth/middleware` or server-side checks (`getServerSession`).

3.  **Initial API Routes for Authentication:**

      * `POST /api/auth/login`: Handled by `next-auth`.
      * `POST /api/auth/logout`: Handled by `next-auth` (usually a client-side call to `signOut()`).
      * `GET /api/users/me`: To fetch current user profile data from session.

4.  **Middleware for Authentication & Authorization:**

      * Implement `middleware.ts` in the `src` directory to protect routes.
      * Differentiate between public routes (e.g., login, forgot password), authenticated routes, and role-specific routes.

-----

### Phase 3: Feature Implementation - User Management & Core Admin Functions 👤🛠️

Implement user-facing and admin-facing features for managing users, access, and core system settings. Leverage UI components built in Phase 1.

1.  **User Management Module:**

      * **Login Page (`src/app/(auth)/login/page.tsx`):**
          * Use Input, Button, and Form components.
          * Integrate with `next-auth` `signIn`.
          * Display error messages using Toast components for failed login.
      * **User Invitation (Admin):**
          * API: `POST /api/users/invite`.
          * Admin UI: Form to enter email, select role.
          * Logic: Generate temporary password (hashed), send invitation email (using Email Template module later).
      * **First Login Password Change:**
          * Middleware or logic after login to check if password change is required.
          * Redirect to a dedicated "Change Password" page/modal.
          * Form with current (temporary) and new password fields, with validation (`React Hook Form + Zod`).
      * **Terms & Conditions Acceptance:**
          * API: `GET /api/terms-and-conditions` (public), `POST /api/users/me/accept-terms`.
          * UI: Modal component displaying S\&K content after login (if not yet accepted or new version).
          * Logic: Store `terms_accepted_at` in User model. Decline leads to logout.
      * **Profile Management (User):**
          * API: `PUT /api/users/me/profile` (password, photo).
          * UI: Page for users to update their password and profile photo. Name/email are read-only.
      * **Forgot Password:**
          * API: `POST /api/auth/forgot-password`, `POST /api/auth/reset-password`.
          * UI: Forms for requesting reset link and setting new password.
          * Logic: Generate unique, expiring token; send email.
      * **Admin User Management (CRUD):**
          * APIs: `GET /api/users`, `DELETE /api/users/{id}`, `PUT /api/users/{id}/role`.
          * UI: Admin pages with tables, buttons, modals for adding (inviting), deleting, and changing user roles.
      * **IP Blocking:**
          * Logic: Track `failed_login_attempts` and `last_login_ip`. Block IP after 15 attempts.
          * DB: Add `failed_login_attempts`, `is_ip_blocked` to User or a separate IP tracking table.
          * API: `POST /api/users/unblock-ip` (Admin).
          * UI: Admin interface to view and unblock IPs.
      * **Auto Logout:**
          * Client-side: Timer to detect 15 mins inactivity, call `signOut()`.
          * Server-side: Enforce session expiry via `next-auth` session options.

2.  **Terms & Conditions Management (Admin):**

      * API: `PUT /api/admin/terms-and-conditions`.
      * UI: Admin page with Rich Text Editor to create/update S\&K.
      * DB Model: `TermsAndConditions` with `content_html`, `version`.

3.  **Access Control (Permissions & Roles - Admin):**

      * APIs:
          * `GET /api/admin/permissions` (to list all defined permissions for assignment).
          * `GET /api/admin/roles`, `POST /api/admin/roles`, `PUT /api/admin/roles/{id}`, `DELETE /api/admin/roles/{id}`.
          * `GET /api/admin/roles/{id}/permissions`, `PUT /api/admin/roles/{id}/permissions` (assign/revoke).
      * UI: Admin pages to define permissions (if static list, this might be seeded), create roles, and assign permissions to roles using checkboxes/multi-select components.
      * Backend Logic: Enforce permissions in API routes/middleware based on the logged-in user's role.

4.  **Email Template Management (Admin):**

      * APIs: `GET /api/admin/email-templates`, `GET /api/admin/email-templates/{type}`, `PUT /api/admin/email-templates/{type}`.
      * UI: Admin interface to view and edit HTML templates for 'user\_invitation', 'password\_reset', 'system\_warning'. Use a simple code editor or Rich Text Editor.
      * Logic: System uses custom templates if `is_custom` is true, otherwise falls back to default hardcoded/simple templates. Templating engine (e.g., Handlebars light) for dynamic placeholders.
      * Integration: Connect with chosen email service (Nodemailer with SMTP or specific SDKs).

5.  **System Configuration Management (Admin):**

      * APIs: `GET /api/system-configurations` (publicly needed ones), `PUT /api/admin/system-configurations`.
      * UI: Admin page with forms to update: Jumbotron images/settings, marquee text, app logo URL, login background URL, app name, footer text, default profile photo URL.
      * DB Model: `SystemConfiguration` (key-value).
      * Frontend: Fetch these configurations to dynamically render parts of the UI.

-----

### Phase 4: Feature Implementation - Content & Navigation 📄🧭

Develop modules for managing the application's menu structure and content.

1.  **Menu Management Module:**

      * APIs: `GET /api/menus` (for current user, filtered by role), `POST /api/admin/menus`, `PUT /api/admin/menus/{id}`, `DELETE /api/admin/menus/{id}` (Admin).
      * UI (Admin): Interface to create/edit/delete menu items. Forms should include: title, parent (for hierarchy), order, Font Awesome icon class picker, type (internal link, external link, dropdown), target URL, content link (if internal).
      * UI (Frontend): Dynamically render the Horizontal Navbar menu based on `GET /api/menus` response. Implement multi-level dropdowns using UI components from Phase 1 and `Framer Motion` for animations.
      * Logic: Ensure menu items are linked to roles/permissions for visibility.

2.  **Content Management Module:**

      * APIs: `GET /api/content/{id_or_slug}`, `POST /api/admin/content`, `PUT /api/admin/content/{id}`, `DELETE /api/admin/content/{id}`. Endpoint for file uploads.
      * UI (Admin/Privileged Users):
          * Form to create/edit content: title, type selector (HTML, image, video embed, document, external link embed).
          * Conditional fields based on type: Rich Text Editor (e.g., `react-quill`, `TipTap`) for HTML with `DOMPurify` sanitization; URL input for videos/links; file upload for images/documents.
      * Content Display:
          * Develop page templates to render different content types.
          * For 'external\_link\_embed', use an iframe, ensure full-width. Generate UUIDv4 for these content items.
      * File Storage: Integrate with cloud storage (AWS S3, GCS) or configure local server storage.
      * Access Control: Ensure only authorized users (via role/permission) can manage content.
      * Embed URL Security: For external URL embeds accessed directly, Next.js middleware should check authentication and redirect to login if not authenticated.

-----

### Phase 5: Feature Implementation - Notifications & Home Page 🔔🏠

Implement the system notifications feature and build the dynamic Home/Welcome page.

1.  **System Notification Management Module:**

      * APIs:
          * `GET /api/notifications` (for current user, includes read status).
          * `POST /api/notifications/{id}/mark-as-read`.
          * Admin: `POST /api/admin/notifications`, `PUT /api/admin/notifications/{id}`, `DELETE /api/admin/notifications/{id}`.
      * UI (Admin/Privileged Users): Interface to create/edit/delete notifications (title, content type, content data).
      * UI (Frontend):
          * Navbar: Bell icon with a badge for unread count. Animate "pulse" if new/unread.
          * Dropdown/Panel: On click, show list of notifications (title, snippet, read/unread status).
          * Detail View: Modal or separate page to show full notification content.
      * Logic: Update `UserNotificationStatus` when a notification is read.
      * Real-time (Optional): Consider WebSockets (Socket.IO/Pusher) or regular polling for new notification updates.

2.  **Home/Welcome Page Implementation (`src/app/(dashboard)/home/page.tsx`):**

      * Structure the page as per Layout (Baris 1-4).
      * **Marquee:**
          * API: `GET /api/dashboard/marquee-text` (fetches from System Config).
          * UI: Implement smooth marquee component.
      * **Jumbotron:**
          * API: `GET /api/dashboard/jumbotron-images` (fetches from System Config).
          * UI: Use `Swiper (React)` for auto-sliding carousel background images.
      * **Digital Clock:**
          * UI: Component displaying time synchronized with user's PC.
      * **Analytics Widgets:** For each widget, create a dedicated component.
          * APIs:
              * `GET /api/dashboard/analytics/top-online-users` (Requires session tracking or recent activity log).
              * `GET /api/dashboard/analytics/top-frequent-logins` (Requires aggregation from login logs/audit logs).
              * `GET /api/dashboard/analytics/top-notifications` (Based on `UserNotificationStatus` read counts).
              * `GET /api/dashboard/analytics/login-history-chart` (params: `days=15`) (Aggregation from login logs).
              * `GET /api/dashboard/analytics/top-popular-menus` (Requires logging menu access).
          * UI:
              * Use Card components for widgets.
              * Use `react-apexcharts` for the Line Area Chart (Login History).
          * Backend: Implement aggregation logic for these analytics endpoints. This might involve querying `AuditLog` or specific tracking tables.

-----

### Phase 6: Security, Logging, & Optimization 🛡️📈

Focus on implementing security best practices, comprehensive logging, and performance optimizations.

1.  **Security Checklist Implementation:**

      * **SQL Injection Prevention:** Already largely handled by Prisma. Review any raw queries if used.
      * **CSRF Protection:** `next-auth` provides built-in protection for its routes. Ensure custom API POST/PUT/DELETE routes are also protected if not using `next-auth` forms (e.g., custom token, or ensure `next-auth` session check is robust).
      * **Content Security Policy (CSP):** Configure CSP headers in `next.config.js` or middleware.
      * **Input Validation & Sanitization:** Consistently use `Zod` for API input validation and `DOMPurify` for user-generated HTML.
      * **Rate Limiting:** Implement rate limiting on sensitive endpoints (login, forgot password, invite) using a library like `next-rate-limit` or custom solution with Redis/Upstash.
      * **CORS:** Configure strict CORS policies in `next.config.js` or middleware.
      * **XSS Protection:** Reinforce by ensuring `DOMPurify` is used correctly and avoid `dangerouslySetInnerHTML` without sanitization.
      * **Secure Cookie Attributes:** `next-auth` handles this well. Verify `HttpOnly`, `Secure` (in production), and `SameSite` attributes.
      * **Error Handling:** Implement custom error pages (`error.tsx` in App Router). Log errors comprehensively.

2.  **Audit Log Implementation:**

      * API: Endpoint for admins to view audit logs (with filtering/pagination).
      * Backend: Create a service/utility to record actions (login, logout, data changes, deletions) into the `AuditLog` table. Include `user_id`, `action_type`, `target_resource`, `target_resource_id`, `ip_address`, `details`.

3.  **Additional Email Notifications:**

      * Implement sending emails for critical system warnings using the Email Template system if specific events are identified.

4.  **Performance Optimization:**

      * Code splitting (Next.js handles this by default for pages).
      * Lazy loading for components and images where appropriate (`next/image`, `next/dynamic`).
      * Server-side Caching for frequently accessed, rarely changed data (e.g., system configurations, public content).
      * Client-side Caching with `React Query / SWR`.
      * Bundle analysis (`@next/bundle-analyzer`).

5.  **System Monitoring Integration:**

      * Integrate Sentry for error tracking and performance monitoring in both client and server-side code.

-----

### Phase 7: Testing & Quality Assurance 🧪✔️

Thorough testing to ensure application stability, functionality, and adherence to requirements.

1.  **Unit & Integration Testing:**
      * Write tests for critical utility functions, hooks, and API route handlers using Jest.
      * Write tests for UI components (especially complex ones) using React Testing Library.
2.  **End-to-End (E2E) Testing:**
      * Set up Playwright or Cypress.
      * Write E2E tests for key user journeys:
          * Login, logout.
          * First-time login password change.
          * S\&K acceptance.
          * Profile update.
          * Forgot password flow.
          * Admin CRUD operations (Users, Roles, Menus, Content, Notifications).
          * Content viewing and interaction.
          * Home page widget display.
3.  **Manual & Exploratory Testing:**
      * Test all functionalities across different browsers (Chrome, Firefox, Edge, Safari).
      * Test responsiveness on various device sizes (desktop, tablet, mobile). Focus on advanced mobile optimization.
      * Test user flows and edge cases.
4.  **User Acceptance Testing (UAT):**
      * Prepare UAT scenarios.
      * Conduct UAT with stakeholders to get feedback and approval.
5.  **Security Testing:**
      * Perform basic penetration testing or use security scanning tools if possible.
      * Review against OWASP Top 10.

-----

### Phase 8: Deployment & Go-Live 🚀

Preparing the application for production and deploying it.

1.  **Deployment Environment Setup:**
      * Configure production environment variables (DB, email, NextAuth secrets, etc.).
2.  **Build Optimization:**
      * Ensure Next.js build is optimized for production (`next build`).
3.  **Deployment Platform:**
      * Choose and configure a deployment platform (e.g., Vercel, AWS Amplify, Netlify, or a custom Docker setup).
4.  **Database Migration:**
      * Run Prisma migrations in the production database environment.
5.  **Launch:**
      * Deploy the application.
      * Perform post-launch checks.

-----

### Phase 9: Post-Deployment & Maintenance 🛠️🔄

Ongoing activities after the application is live.

1.  **Monitoring:**
      * Continuously monitor application performance, errors (Sentry), and server health.
2.  **Maintenance:**
      * Regularly update dependencies.
      * Perform database backups and maintenance.
3.  **Bug Fixing:**
      * Address any bugs reported by users or identified through monitoring.
4.  **Feedback & Iteration:**
      * Gather user feedback for future enhancements and new features.
      * Plan for subsequent development sprints if needed.