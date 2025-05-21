# Indonet Analytics Hub

## 📊 Introduction

Indonet Analytics Hub Platform is a role-based web application designed to serve as a centralized platform for presenting analytical content, system notifications, and user management dynamically and securely. The application supports the integration of external URLs and delivers information in an interactive format, manageable by internal users according to their assigned access rights.

[![Indonet Analytics Hub]](https://cdn.qwenlm.ai/output/144093b4-3007-49f6-89bc-fbdcce557939/t2i/352c9f4c-d3d9-4a16-af42-874ed0b2e08e/5bc34462-1ef0-4d4d-a055-abfdc028a356.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMTQ0MDkzYjQtMzAwNy00OWY2LTg5YmMtZmJkY2NlNTU3OTM5IiwicmVzb3VyY2VfaWQiOiI1YmMzNDQ2Mi0xZWYwLTRkNGQtYTA1NS1hYmZkYzAyOGEzNTYiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.nn2FbKtK4ZM68gQ44Z-hTsrJV498-05IGWEZ-wItKiA)

<div align="center">

**Next.js** | **TypeScript** | **Tailwind CSS** | **PostgreSQL** | **Prisma** | **NextAuth.js**

</div>

## Core Features & Functions

* **User Management:** Add/remove users, assign roles and permissions, manage user profiles (password, photo), and handle user invitations via email.
* **Authentication:** Secure login flow, mandatory password change on first login, "forgot password" functionality with email-based reset links, IP blocking after multiple failed login attempts, and auto-logout for inactivity.
* **Terms & Conditions:** Admins can manage Terms & Conditions content, which users must accept after login.
* **Access Control:** Granular permission and role management system controlled by administrators. Roles dictate access to menus and content.
* **Menu Management:** Admins or privileged users can dynamically configure a multi-level navigation menu with Font Awesome icons, linking to internal or external content.
* **Content Management:** Create and manage various content types including HTML, text, images, embedded YouTube videos, documents (PDF, Word, Excel, PPT), and embed external URLs (secured and requiring login for access).
* **System Notifications:** Admins or privileged users can create system-wide notifications (text, image, video, document, hyperlink) visible to all users, with read/unread status tracking.
* **Email Template Management:** Admins can customize email templates for user invitations, password resets, and system warnings.
* **Home/Welcome Dashboard:** Features a marquee, jumbotron carousel, digital clock, and various analytical widgets (e.g., top online users, frequent logins, popular notifications, login history chart, popular menus).
* **System Configuration:** Admins can manage application-wide settings like jumbotron content, marquee text, logos, application name, and footer text.
* **Audit Logging:** Tracks important user activities for administrative review.

## Modules

* **User Management:**
    Handles all aspects of user accounts, including creation through an invitation system, profile updates (password, photo), and administrative actions like deletion and role assignment.
* **Authentication & Authorization:**
    Manages secure user login and logout, password policies (including hashing and mandatory first-time changes), session validity, "forgot password" flows, IP-based lockout mechanisms, and ensures users only access features and data permitted by their roles.
* **Terms & Conditions Management:**
    Allows administrators to create, update, and version the application's terms of service. Users are required to accept these terms post-login before accessing the main application.
* **Permission Management:**
    Defines a granular set of specific actions (e.g., `user:create`, `content:edit`) that can be performed within the application, forming the building blocks for roles.
* **Role Management:**
    Enables administrators to create distinct roles (e.g., Manager, Sales), assign a collection of permissions to each role, and thereby govern the overall access level and capabilities of users assigned to these roles.
* **Menu Management:**
    Provides administrators or specially permissioned users the ability to dynamically build and organize the application's navigation menu, including multi-level dropdowns, icons, and links to internal content or external URLs, with visibility controlled by user roles.
* **Content Management:**
    Facilitates the creation, modification, and display of diverse content types such as HTML (via a rich text editor), images, embedded videos, documents, and secure external URL embeds, with mechanisms for file storage and content sanitization.
* **System Notification Management:**
    Allows authorized personnel to generate and distribute system-wide notifications. These can include various content types and are displayed to all users with indicators for unread messages and a detailed view.
* **Email Template Management:**
    Offers administrators the capability to customize the HTML content and subject lines of automated emails sent by the system, such as user invitations, password reset instructions, and system alerts, with support for dynamic variables.
* **Dashboard & Analytics (Home Page):**
    Serves as the primary landing area for users, featuring dynamic components like a marquee, a jumbotron carousel, and a suite of analytical widgets that display key metrics and insights such as top online users, login frequencies, popular content, and historical login data.
* **System Configuration:**
    A centralized module for administrators to manage global application settings, including visual elements like the application logo, login page background, jumbotron images, as well as functional defaults like marquee text and footer information.
* **Audit Log Viewer:**
    Provides administrators with an interface to view detailed logs of important user actions and system events (e.g., logins, data modifications, deletions), crucial for monitoring, security analysis, and troubleshooting.

## UI Component Approach

The application utilizes a component-based architecture for its user interface. Key aspects include:

* **Responsive Design:** Full-width, widescreen design responsive across various devices.
* **Dark Mode Theme:** The application exclusively uses a dark theme.
* **Pre-built & Custom Components:** Leverages `shadcn` for pre-built UI components, which are easily customizable. Custom components are developed for specific application needs.
* **Interactive Elements:** Modern animations and transitions for menus, content, widgets, and user interactions (hover, click) are implemented using `Framer Motion`.
* **Specialized UI Elements:** Includes carousels (`Swiper (React)`), charts (`react-apexcharts`), rich text editors, and dynamic marquees.
* **Navigation:** Features a horizontal top navbar with multi-level dropdown menus.
* **Feedback:** Modal popups for terms & conditions and confirmations, and toast notifications for user actions.

## Security System Narrative

The Indonet Analytics Hub employs a multi-layered security strategy to protect user data and ensure system integrity. At its core, authentication and session management are handled by `next-auth`, providing a robust foundation for verifying user identities. Access within the application is strictly governed by a Role-Based Access Control (RBAC) system, where permissions are assigned to roles, and roles are assigned to users. This is enforced through middleware and at the API route level, ensuring users can only access authorized functionalities and data.

Data protection measures include secure password hashing using industry-standard algorithms like `bcryptjs` or `argon2`, and the use of an ORM like Prisma, which leverages prepared statements to mitigate SQL injection risks. To counter various web vulnerabilities, the system incorporates CSRF protection (often built into `next-auth`), sets Content Security Policy (CSP) headers to restrict resource loading and script execution, and performs rigorous input validation on all API requests using libraries such as `Zod` or `Yup`. User-generated HTML content is sanitized with `DOMPurify` to prevent Cross-Site Scripting (XSS) attacks.

To defend against automated attacks, rate limiting is implemented on sensitive endpoints like login and password reset functions. Secure communication is further enhanced by configuring strict Cross-Origin Resource Sharing (CORS) policies and ensuring session cookies use attributes like `HttpOnly`, `Secure`, and `SameSite`. Finally, comprehensive error handling and logging mechanisms, potentially integrated with services like Sentry, allow for timely detection and response to any security incidents or system anomalies.

## Tech Stack

### Frontend Stack
| Category               | Tools / Libraries             |
|------------------------|-------------------------------|
| Framework              | **Next.js** |
| State Management       | Zustand / Redux Toolkit / Jotai |
| Styling                | **Tailwind CSS**, SASS        |
| UI Components          | **shadcn** |
| Animation              | **Framer Motion** / GSAP Core |
| Charts & Visualization | **react-apexcharts** |
| Carousel / Slider      | **Swiper (React)** |
| Code Highlighting      | **PrismJS** |
| Guided Tour            | **Shepherd.js** |
| Form Validation        | **React Hook Form + Zod/Yup** |
| Input Sanitization     | **DOMPurify** |

### Backend / API Layer (Next.js API Routes)
| Category               | Tools / Libraries         |
|------------------------|---------------------------|
| Database (optional)    | PostgreSQL                |
| ORM / Query Builder    | **Prisma** / Sequelize    |
| API Handler            | **Next.js API Routes** |
| Authentication         | **next-auth** |
| Password Hashing       | **bcryptjs / argon2** |
| API Mocking            | MSW (Mock Service Worker) |
| Data Fetching (Client) | React Query / SWR         |
| CORS Configuration     | `cors` middleware / headers |

### DevTools & Utilities
| Kategori               | Tools                          |
|------------------------|----------------------------------|
| JS/TS Linting          | **ESLint** |
| CSS/SCSS Linting       | **Stylelint** |
| Unit/Integration Test  | Jest + React Testing Library   |
| E2E Testing            | Playwright / Cypress           |
| Logging & Monitoring   | Sentry / LogRocket             |

---

## Contributors Team

* Business Intelligence Team, **Muhammad Ishaq**

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.