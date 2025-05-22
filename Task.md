# Indonet Analytics Hub: Implementation Task List

## Project Status: Phase 1 Complete ✅

**Reminder: Next.js Project Setup**
The project is already initialized with:
* TypeScript: Yes
* ESLint: Yes
* Tailwind CSS: Yes
* `src/` directory: Yes
* App Router: Yes
* Turbopack (`next dev`): Yes
* Import alias (`@/*`): Yes, configured to `@/*`
* Dependencies: `react`, `react-dom`, `next`
* DevDependencies: `typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `@tailwindcss/postcss`, `tailwindcss`, `eslint`, `eslint-config-next`, `@eslint/eslintrc`

**Important Reminder:**
* Before executing for implementation understand for each `package.json`, `next.config.ts`, `tsconfig.json` , `postcss.config.mjs` , `tailwind.config.ts` , `eslint.config.mjs` , `global.css` installed and preconfigured so that it does not match the implementation.
* Do not use `--force` for every new npm package or component install, must use `--legacy-peer-deps` to avoid conflicts with other packages or dependencies.
* Do not use `npm shadcn-ui@latest {add}` for every new component, must use `npx shadcn@latest {add}` (refer to https://ui.shadcn.com/docs/installation/next).
* Make sure for UI implementation should be `Wide` not `compact` layout.
* Make sure for UI implementation should be `Dark` not `Light` layout.
* shadcn/ui Components refer to https://github.com/shadcn-ui/ui/tree/main/apps/www/components.
* Magic UI Component refer to https://github.com/magicuidesign/magicui/tree/main/components.

---

### Phase 0: Project Foundation & Environment Setup ✅

Goal: Establish the foundational setup for the project, including environment configuration, core dependencies, and initial project structure.

* [✅] **Project Initialization:**
    * [✅] Verify Next.js project is initialized with TypeScript, ESLint, Tailwind CSS, and `src/` directory.
    * [✅] Confirm App Router is enabled.
    * [✅] Confirm Turbopack is set as the development server.
    * [✅] Confirm import alias (`@/*`) is configured.
    * [✅] Confirm dependencies: `react`, `react-dom`, `next`.
    * [✅] Confirm devDependencies: `typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `@tailwindcss/postcss`, `tailwindcss`, `eslint`, `eslint-config-next`, `@eslint/eslintrc`.
* [✅] **Environment & Configuration:**
    * [✅] Create and populate `.env.local` with development credentials for Database, Email, NextAuth, and App URL.
    * [✅] Confirm Next.js project initialization settings match the provided list.
* [✅] **Core Dependency Installation:**
    * [✅] Install `prisma` and `@prisma/client` for ORM.
    * [✅] Install `next-auth` for authentication.
    * [✅] Install `bcryptjs` for password hashing.
    * [✅] Install `zod` for validation.
    * [✅] Install `react-hook-form` for form handling.
    * [✅] Install `nodemailer` (or chosen email service SDK like SendGrid/Mailgun).
    * [✅] Install `uuid` (and types: `@types/uuid`) for UUIDv4 generation.
    * [✅] Install `date-fns` (or alternative date utility).
* [✅] **UI Framework & Styling Setup:**
    * [✅] Verify Tailwind CSS configuration (`tailwind.config.ts`, `postcss.config.js`).
    * [✅] Ensure Tailwind directives are in `src/styles/globals.css`.
    * [✅] Configure Tailwind CSS for "Dark Mode by default".
    * [✅] Initialize `shadcn/ui`: Run `npx shadcn@latest init` and configure paths.
    * [✅] Add initial MagicUI components if identified (e.g., `npx shadcn@latest add "https://magicui.design/r/globe.json"`).
    * [✅] If using SASS, install `sass` and configure with Next.js.
* [✅] **Global Styles & Project Structure:**
    * [✅] Define base global styles in `src/styles/globals.css`.
    * [✅] Create the recommended project folder structure within `src/` (app, components, lib, hooks, store, styles, prisma).
    * [✅] Create `src/app/(dashboard)/ui-showcase/page.tsx` for UI component viewing.
* [✅] **Linting, Formatting, & Dev Tools:**
    * [✅] Configure ESLint with plugins for React, Next.js, TypeScript, and Tailwind CSS (`eslint-plugin-tailwindcss`).
    * [✅] Set up Stylelint (if using SASS or for stricter CSS).
    * [✅] Integrate Prettier for code formatting.
    * [✅] Install `msw` (Mock Service Worker) for API mocking (optional, based on dev workflow).
    * [✅] Install `react-query` (or `swr`) for client-side data fetching.
* [✅] **Version Control:**
    * [✅] Initialize Git repository.
    * [✅] Create/Verify `.gitignore` file.
    * [✅] Make initial commit of the project setup.

---

### Phase 1: Core UI Component Development & Showcase ✅

Goal: Develop a set of reusable UI components using `shadcn/ui` and custom components, ensuring they are styled with Tailwind CSS and integrated with Framer Motion for animations.

* [✅] **Component Identification & Development (using `shadcn/ui` & custom):**
    * [✅] **Buttons:**
        * [✅] Develop/Add Primary Button.
        * [✅] Develop/Add Secondary Button.
        * [✅] Develop/Add Destructive Button.
        * [✅] Develop/Add Icon Button.
    * [✅] **Inputs:**
        * [✅] Develop/Add Text Input.
        * [✅] Develop/Add Password Input.
        * [✅] Develop/Add Email Input.
        * [✅] Develop/Add File Input.
        * [✅] Develop/Add Textarea.
    * [✅] **Selection:**
        * [✅] Develop/Add Dropdown/Select.
        * [✅] Develop/Add Checkbox.
        * [✅] Develop/Add Radio Button Group.
    * [✅] **Feedback & Overlays:**
        * [✅] Develop/Add Modal component (for S&K, confirmations).
        * [✅] Develop/Add Toast Notification component (for flash messages).
    * [✅] **Display:**
        * [✅] Develop/Add Avatar component (round, no border).
        * [✅] Develop/Add Card component (for widgets, content).
        * [✅] Develop/Add Table component (for admin data display).
    * [✅] **Navigation:**
        * [✅] Develop/Add Navigation Menu Item components (for multi-level dropdowns).
    * [✅] **Loaders:**
        * [✅] Develop/Add Loading Spinner/Skeleton components.
    * [✅] **Specialized Components:**
        * [✅] Develop Rich Text Editor wrapper (for `TipTap`).
        * [✅] Develop Carousel wrapper (for `Swiper (React)`).
        * [✅] Develop Chart wrapper (for `react-apexcharts`).
        * [✅] Develop Marquee component.
        * [✅] Develop Digital Clock component.
        * [✅] Develop/Add Globe component (via MagicUI).
* [✅] **Core Layout Components:**
    * [✅] **Horizontal Navbar:**
        * [✅] Design and implement basic structure (Logo, Menu area, User Avatar area, Notification Icon area).
        * [✅] Style with Tailwind CSS.
        * [✅] Integrate Framer Motion for hover/interaction animations.
    * [✅] **Footer:**
        * [✅] Design and implement basic structure.
        * [✅] Style with Tailwind CSS.
    * [✅] **Main Dashboard Layout (`src/components/layouts/DashboardLayout.tsx`):**
        * [✅] Create layout incorporating Navbar, main content area, and Footer.
* [✅] **UI Component Showcase Page (`src/app/(dashboard)/ui-showcase/page.tsx`):**
    * [✅] Populate the showcase page with instances of ALL developed UI components from this phase.
    * [✅] Ensure the Horizontal Navbar is displayed on this page.
    * [✅] Verify styling (including dark mode) and basic interactivity of all components.
* [✅] **Animation & Utility Libraries Integration:**
    * [✅] Integrate `Framer Motion` for general UI animations.
    * [✅] Integrate `react-apexcharts` for charts.
    * [✅] Integrate `Swiper (React)` for carousels.
    * [✅] Integrate `DOMPurify` for HTML sanitization.
    * [✅] Integrate `PrismJS` for code highlighting.

---

### Phase 2: Backend Foundation & Authentication 🔄 (In Progress)

Goal: Establish the backend foundation with Prisma ORM, NextAuth for authentication, and initial API routes.

* [ ] **Database Schema & Prisma Setup:**
    * [ ] Define `schema.prisma` with all models:
        * [ ] `User` model.
        * [ ] `Role` model.
        * [ ] `Permission` model.
        * [ ] `RolePermission` (join table).
        * [ ] `TermsAndConditions` model.
        * [ ] `MenuItem` model.
        * [ ] `Content` model.
        * [ ] `Notification` model.
        * [ ] `UserNotificationStatus` model.
        * [ ] `EmailTemplate` model.
        * [ ] `SystemConfiguration` model.
        * [ ] `AuditLog` model.
        * [ ] `PasswordResetToken` model (or similar name).
        * [ ] `FailedLoginAttemptLog` / `IPBlocklist` models (or integrate fields into `User`).
    * [ ] Run `npx prisma migrate dev --name init` to create and apply initial migration.
    * [ ] Run `npx prisma generate` to generate Prisma Client.
    * [ ] Create Prisma Client instance in `src/lib/prisma.ts`.
* [ ] **`next-auth` Implementation:**
    * [ ] Configure `next-auth` options in `src/app/api/auth/[...nextauth]/route.ts` (or `src/lib/authOptions.ts`).
    * [ ] Implement `CredentialsProvider` for email/password login.
    * [ ] Integrate `bcryptjs` for password comparison in `CredentialsProvider`.
    * [ ] Configure JWT session strategy.
    * [ ] Implement `jwt` and `session` callbacks to include user role and ID in the session.
* [ ] **Initial API Routes for Authentication:**
    * [ ] Verify `POST /api/auth/login` (handled by `next-auth`).
    * [ ] Verify `POST /api/auth/logout` (client-side `signOut()` triggers `next-auth` endpoint).
    * [ ] Create `GET /api/users/me` to fetch current user profile data from session.
* [ ] **Middleware for Authentication & Authorization:**
    * [ ] Create `middleware.ts` in the `src` directory.
    * [ ] Implement logic to protect routes based on authentication status.
    * [ ] Implement basic role checking for route groups (e.g., `/admin/*`).

---

### Phase 3: Feature Implementation - User Management & Core Admin Functions

Goal: Implement user management functionality and core administrative features.

* [ ] **User Management Frontend:**
    * [ ] Create User List Page (`src/app/(dashboard)/admin/users/page.tsx`).
    * [ ] Create User Detail/Edit Page (`src/app/(dashboard)/admin/users/[id]/page.tsx`).
    * [ ] Create User Creation Page (`src/app/(dashboard)/admin/users/create/page.tsx`).
* [ ] **User Management Backend API:**
    * [ ] Implement `GET /api/users` endpoint.
    * [ ] Implement `GET /api/users/:id` endpoint.
    * [ ] Implement `POST /api/users` endpoint.
    * [ ] Implement `PUT /api/users/:id` endpoint.
    * [ ] Implement `DELETE /api/users/:id` endpoint.
* [ ] **User Profile Management:**
    * [ ] Create User Profile Page (`src/app/(dashboard)/profile/page.tsx`).
    * [ ] Create Password Change Page (`src/app/(dashboard)/profile/change-password/page.tsx`).
    * [ ] Implement `PUT /api/users/me` endpoint.
    * [ ] Implement `PUT /api/users/me/password` endpoint.
* [ ] **Role & Permission Management:**
    * [ ] Create Role List Page (`src/app/(dashboard)/admin/roles/page.tsx`).
    * [ ] Create Role Detail/Edit Page (`src/app/(dashboard)/admin/roles/[id]/page.tsx`).
    * [ ] Create Role Creation Page (`src/app/(dashboard)/admin/roles/create/page.tsx`).
    * [ ] Implement RBAC services in `src/lib/rbac.ts`.

---

### Phase 4: Feature Implementation - Content Management

Goal: Build the content management system for the application.

* [ ] **Content Management Frontend:**
    * [ ] Create Content List Page (`src/app/(dashboard)/admin/content/page.tsx`).
    * [ ] Create Content Detail/Edit Page (`src/app/(dashboard)/admin/content/[id]/page.tsx`).
    * [ ] Create Content Creation Page (`src/app/(dashboard)/admin/content/create/page.tsx`).
* [ ] **Content Management Backend API:**
    * [ ] Implement `GET /api/content` endpoint.
    * [ ] Implement `GET /api/content/:id` endpoint.
    * [ ] Implement `POST /api/content` endpoint.
    * [ ] Implement `PUT /api/content/:id` endpoint.
    * [ ] Implement `DELETE /api/content/:id` endpoint.
* [ ] **Rich Text Editor Integration:**
    * [ ] Finalize integration of Rich Text Editor component.
    * [ ] Implement image upload handlers for the editor.
    * [ ] Implement code highlighting and other advanced features.
* [ ] **Content Display Frontend:**
    * [ ] Create content display components (for dynamic pages).
    * [ ] Implement basic content filtering and search functionality.

---

### Phase 5: Feature Implementation - Analytics Dashboard

Goal: Develop the core analytics dashboard features.

* [ ] **Analytics Dashboard Page:**
    * [ ] Create Main Dashboard Page (`src/app/(dashboard)/dashboard/page.tsx`).
    * [ ] Design and implement analytical widgets (using the chart component).
    * [ ] Create device/browser usage visualization.
    * [ ] Create user activity timeline.
* [ ] **Data Visualization Components:**
    * [ ] Enhance chart components for different data visualizations.
    * [ ] Create geolocation visualization (using the Globe component).
    * [ ] Create conversion funnels visualization.
* [ ] **Analytics Data Mock API:**
    * [ ] Implement `GET /api/analytics/overview` endpoint.
    * [ ] Implement `GET /api/analytics/users` endpoint.
    * [ ] Implement `GET /api/analytics/content` endpoint.

---

### Phase 6: Feature Implementation - Notifications & Communication

Goal: Implement notification system and user communication features.

* [ ] **Notification System Frontend:**
    * [ ] Create Notification Component for Navbar.
    * [ ] Create Notification List Page (`src/app/(dashboard)/notifications/page.tsx`).
* [ ] **Notification System Backend:**
    * [ ] Implement `GET /api/notifications` endpoint.
    * [ ] Implement `PUT /api/notifications/:id/read` endpoint.
    * [ ] Implement `PUT /api/notifications/read-all` endpoint.
* [ ] **Email Template Management:**
    * [ ] Create Email Template List Page (`src/app/(dashboard)/admin/email-templates/page.tsx`).
    * [ ] Create Email Template Detail/Edit Page (`src/app/(dashboard)/admin/email-templates/[id]/page.tsx`).
    * [ ] Create Email Template Preview functionality.
* [ ] **Email Service Integration:**
    * [ ] Implement email sending service in `src/lib/email.ts`.
    * [ ] Create test email sending functionality.

---

### Phase 7: Feature Implementation - Terms & Conditions Management

Goal: Implement the Terms & Conditions management system.

* [ ] **Terms & Conditions Management Frontend:**
    * [ ] Create Terms & Conditions List Page (`src/app/(dashboard)/admin/terms/page.tsx`).
    * [ ] Create Terms & Conditions Detail/Edit Page (`src/app/(dashboard)/admin/terms/[id]/page.tsx`).
    * [ ] Create Terms & Conditions Creation Page (`src/app/(dashboard)/admin/terms/create/page.tsx`).
* [ ] **Terms & Conditions Management Backend API:**
    * [ ] Implement `GET /api/terms` endpoint.
    * [ ] Implement `GET /api/terms/:id` endpoint.
    * [ ] Implement `POST /api/terms` endpoint.
    * [ ] Implement `PUT /api/terms/:id` endpoint.
* [ ] **Terms & Conditions Display Frontend:**
    * [ ] Create Terms & Conditions Display Page (`src/app/terms/page.tsx`).
    * [ ] Create Terms Acceptance modal for first-time users.

---

### Phase 8: Feature Implementation - Menu & Navigation Management

Goal: Implement dynamic menu and navigation management.

* [ ] **Menu Management Frontend:**
    * [ ] Create Menu Item List Page (`src/app/(dashboard)/admin/menu/page.tsx`).
    * [ ] Create Menu Item Detail/Edit Page (`src/app/(dashboard)/admin/menu/[id]/page.tsx`).
    * [ ] Create Menu Item Creation Page (`src/app/(dashboard)/admin/menu/create/page.tsx`).
* [ ] **Menu Management Backend API:**
    * [ ] Implement `GET /api/menu-items` endpoint.
    * [ ] Implement `GET /api/menu-items/:id` endpoint.
    * [ ] Implement `POST /api/menu-items` endpoint.
    * [ ] Implement `PUT /api/menu-items/:id` endpoint.
    * [ ] Implement `DELETE /api/menu-items/:id` endpoint.
* [ ] **Dynamic Menu Frontend:**
    * [ ] Create Dynamic Menu Component that reads from the database.
    * [ ] Implement role-based menu item visibility.

---

### Phase 9: Security, Testing & Production Readiness

Goal: Ensure the application is secure, tested, and ready for production.

* [ ] **Security Enhancements:**
    * [ ] Implement rate limiting for login attempts (either through a library or custom solution).
    * [ ] Implement IP blocking for suspicious login attempts.
    * [ ] Implement password policy enforcement.
    * [ ] Add CSRF protection to sensitive routes.
* [ ] **Testing:**
    * [ ] Write unit tests for critical authentication and user management functions.
    * [ ] Write integration tests for API routes.
    * [ ] Write E2E tests for critical user journeys.
* [ ] **Audit & Monitoring:**
    * [ ] Implement audit logging for sensitive actions.
    * [ ] Create Audit Log View (`src/app/(dashboard)/admin/audit-logs/page.tsx`).
* [ ] **Performance Optimization:**
    * [ ] Optimize bundle size (code splitting, tree shaking).
    * [ ] Implement proper caching strategies.
    * [ ] Optimize database queries (add appropriate indexes).
* [ ] **Deployment Configuration:**
    * [ ] Configure production environment variables.
    * [ ] Set up proper error handling and monitoring.
    * [ ] Document deployment process.
