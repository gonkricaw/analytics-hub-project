# Indonet Analytics Hub: System Logic

## Core Concepts

* **User:** An individual interacting with the system, assigned a specific role.
* **Role:** A collection of permissions defining what a user can see and do within the application. Examples: Admin, Manager, Sales.
* **Permission:** A granular authorization to perform a specific action on a specific resource (e.g., `user:create`, `content:edit`).
* **Content:** Information displayed within the application, which can be of various types (HTML, embed, etc.).
* **Menu Item:** A navigational element that directs users to content or functionalities, access to which is role-dependent.
* **Session:** A period of user activity, managed by `next-auth`, with mechanisms for auto-logout and security.

---

## 1. User Management Logic

**Objective:** To manage user accounts, authentication, authorization, and profiles securely and efficiently.

**Key Entities & Data Structures:**
* `User`: `id`, `name`, `email`, `password_hash`, `role_id`, `profile_photo_url`, `last_login_ip`, `failed_login_attempts`, `is_ip_blocked`, `terms_accepted_at`, `invited_at`, `registered_at`, `temp_password_flag` (or similar to indicate if first login).
* `PasswordResetToken`: `token_hash`, `user_id`, `expires_at`, `is_used`.
* `FailedLoginAttemptLog`: `ip_address`, `timestamp`, `count`.
* `IPBlocklist`: `ip_address`, `blocked_until`.

**Core Processes & Workflows:**

* **User Invitation Process (Admin only):**
    1.  Admin initiates an invitation providing the user's email and assigning a role.
    2.  System generates a secure, random temporary password.
    3.  System stores the user record with `email`, assigned `role_id`, hashed temporary password, and sets `temp_password_flag` to true. `invited_at` is recorded.
    4.  An email is dispatched to the user containing their email, the temporary password, and a unique login link. (Uses Email Template: 'user_invitation').

* **Login Process:**
    1.  User accesses the login page (e.g., via direct URL, invite link, or after being redirected from a protected resource).
    2.  User submits credentials (email and password).
    3.  System attempts authentication via `next-auth` (CredentialsProvider).
        * Input validation: Email format, password presence.
    4.  **On Authentication Success:**
        a.  Reset `failed_login_attempts` for the user's email (if previously tracked against user, not just IP).
        b.  Record `last_login_ip`.
        c.  Check `temp_password_flag` (or if `registered_at` is null/very recent and matches `invited_at`). If it's the user's first login after invitation:
            i.  Redirect user to a mandatory "Change Password" page/modal. User cannot proceed further until password is changed.
            ii. Upon successful password change, `temp_password_flag` is cleared, and `registered_at` is updated.
        d.  **Terms & Conditions Check:**
            i.  Fetch the latest Terms & Conditions (T&C) version.
            ii. Compare with user's `terms_accepted_at` timestamp or version. If T&C are new, have been updated since last acceptance, or never accepted, a modal displaying the T&C is presented.
            iii. User must explicitly "Accept" or "Decline".
                * **Accept:** Record `terms_accepted_at` (timestamp and/or T&C version). User proceeds to the Home page.
                * **Decline:** User session is terminated (logout). User is redirected to the login page.
        e.  If T&C are already accepted and current, user proceeds directly to the Home page.
    5.  **On Authentication Failure:**
        a.  Increment `failed_login_attempts` for the submitted email (if user exists) and for the source `ip_address`.
        b.  If `failed_login_attempts` for the IP reaches 15:
            i.  Add the IP address to `IPBlocklist` with a defined block duration or until admin unblocks.
            ii.  Future login attempts from this IP are rejected before credential validation, displaying an "IP blocked" message.
        c.  Display a generic "Invalid email or password" error message to the user (Toast notification).

* **Password Policy & Change:**
    * New passwords (during first login change or profile update) must be at least 8 characters, containing uppercase, lowercase letters, and numbers. Validation using `React Hook Form + Zod/Yup`.
    * Passwords are hashed using `bcryptjs` or `argon2` before storing.

* **User Profile Update:**
    1.  Authenticated user accesses their profile page.
    2.  User can update `password` and `profile_photo_url` only. `name` and `email` are display-only.
    3.  Password change requires current password and new password (meeting policy).
    4.  Photo upload involves storing the file (see Content Management for file handling) and updating `profile_photo_url`.

* **Forgot Password Process:**
    1.  User navigates to the "Forgot Password" page and submits their registered email address.
    2.  System verifies if the email exists.
    3.  If email exists, a unique, cryptographically secure token is generated for password reset.
    4.  The hashed token, associated `user_id`, and an expiry time (e.g., 1 hour) are stored in `PasswordResetToken`. `is_used` is false.
    5.  An email (using Email Template: 'password_reset') is sent to the user with a unique link containing this token. The link is valid for one-time use.
    6.  User clicks the link. System validates the token:
        * Exists in `PasswordResetToken`.
        * Not expired.
        * `is_used` is false.
    7.  If valid, user is presented with a form to enter and confirm a new password (meeting policy).
    8.  Upon successful submission, user's password in the `User` table is updated (hashed). The `PasswordResetToken` is marked as `is_used=true` or deleted.
    9.  If token is invalid, expired, or already used, an error message is displayed.

* **Auto Logout Logic:**
    1.  Client-side: A timer starts/resets on any user activity (mouse move, key press, fetch request).
    2.  If the timer reaches 15 minutes of inactivity, the client automatically triggers a logout (`next-auth signOut()`).
    3.  Server-side: `next-auth` session also has an expiry time. Even if the client-side timer fails, the session will eventually expire on the server, requiring re-authentication.

* **Admin Functions:**
    * **Add User:** Handled by the invitation process.
    * **Delete User:** Admin can delete users. This should handle related data (e.g., reassign content or mark as anonymous, depending on policy).
    * **Change User Role:** Admin can modify `role_id` for any user.
    * **Unblock IP:** Admin can remove an IP address from `IPBlocklist` or reset `failed_login_attempts` for a user/IP.

**Access Control Logic:**
* User management functionalities (inviting, deleting, role changes, IP unblocking) are restricted to users with the "Admin" role.
* Users can only update their own profile (password, photo).

---

## 2. Terms & Conditions (S&K) Management Logic

**Objective:** To allow administrators to manage the application's Terms & Conditions.

**Key Entities & Data Structures:**
* `TermsAndConditions`: `id`, `content_html`, `version`, `created_at`, `updated_at`, `published_at`.

**Core Processes & Workflows:**

* **Create/Update S&K (Admin only):**
    1.  Admin accesses the S&K management interface.
    2.  Admin uses a Rich Text Editor to input/modify S&K content.
    3.  On save:
        a.  The content (HTML/Markdown) is sanitized (e.g., using `DOMPurify` on the backend before saving if input is direct HTML from editor).
        b.  A new version number might be generated (e.g., increment or timestamp-based).
        c.  The `content_html`, `version`, and `updated_at` fields are stored. `published_at` can be set to indicate it's the live version.
* **Retrieve S&K (Public/User):**
    1.  When a user needs to view T&C (e.g., during login flow), the system fetches the latest published version from the `TermsAndConditions` table.

**Access Control Logic:**
* Only users with the "Admin" role can create or modify S&K content.
* All users (even unauthenticated, if S&K are shown on a public page) or authenticated users (during login flow) can view the current S&K.

---

## 3. Permission Management Logic

**Objective:** To define a granular set of permissions available within the system.

**Key Entities & Data Structures:**
* `Permission`: `id`, `name` (e.g., `user:create`, `content:publish`), `description`.

**Core Processes & Workflows:**

* **Permission Definition:**
    1.  Permissions are typically pre-defined by developers based on application features.
    2.  Admin interface might allow viewing these permissions and their descriptions.
    3.  CRUD operations for permissions might be limited or non-existent for admins if permissions are hardcoded or seeded, to maintain system integrity. The requirement states "Diatur oleh admin. Hak standar: `create`, `edit`, `delete` untuk berbagai modul." and "Definisikan daftar hak akses yang granular". This implies admins can see and potentially group them, but direct creation of new *code-level* permissions might be a developer task. For this logic, assume admins primarily *assign* them via Roles.

**Access Control Logic:**
* Management (if any beyond viewing) of the `Permissions` list itself is an "Admin" or super-admin task.

---

## 4. Role Management Logic

**Objective:** To allow administrators to create roles and assign permissions to them.

**Key Entities & Data Structures:**
* `Role`: `id`, `name` (unique, e.g., 'admin', 'manager'), `description`.
* `RolePermission` (join table): `role_id`, `permission_id`.

**Core Processes & Workflows:**

* **Create/Update/Delete Role (Admin only):**
    1.  Admin accesses the Role management interface.
    2.  Admin can create a new role by providing a `name` and `description`.
    3.  Admin can edit an existing role's `name` or `description`.
    4.  Admin can delete a role (system should handle users assigned to this role - e.g., reassign to a default role or prevent deletion if in use).
* **Assign/Revoke Permissions for a Role (Admin only):**
    1.  Admin selects a role to manage its permissions.
    2.  System displays all available permissions (from `Permission` table).
    3.  Admin can select/deselect permissions for the chosen role.
    4.  Changes are saved to the `RolePermission` join table.

**Access Control Logic:**
* All role management functions are restricted to users with the "Admin" role.
* The "Admin" role itself should be non-deletable or have special protections.

---

## 5. Menu Management Logic

**Objective:** To allow authorized users to define the application's navigation structure dynamically.

**Key Entities & Data Structures:**
* `MenuItem`: `id`, `title`, `parent_id` (self-referencing for hierarchy), `order`, `icon_class` (Font Awesome), `type` ('link_internal', 'link_external', 'dropdown'), `target_url` (for external), `content_id` (for internal content), `required_role_ids` (array of Role IDs) or linked via a `MenuRolePermission` table.

**Core Processes & Workflows:**

* **Create/Update/Delete Menu Item (Admin or specially permissioned user):**
    1.  Authorized user accesses the Menu management interface.
    2.  User can define:
        * `title`: Display text of the menu.
        * `parent_id`: To create multi-level/hierarchical menus.
        * `order`: To control display sequence.
        * `icon_class`: For visual representation.
        * `type`:
            * `link_internal`: Links to content within the application (uses `content_id`).
            * `link_external`: Links to an external URL (uses `target_url`).
            * `dropdown`: Acts as a container for child menu items (no direct link).
        * `target_url` / `content_id`: Based on type.
        * **Role Access:** Assign roles that can view/access this menu item. This determines visibility.
    3.  System saves the menu item structure. Hierarchical integrity should be maintained (e.g., a child must have a valid parent).
* **Retrieve Menu Structure (User):**
    1.  When a user logs in and navigates the application, the system fetches menu items.
    2.  The fetched menu items are filtered based on the user's assigned role(s). Only items where the user's role is included in `required_role_ids` (or an equivalent check) are returned.
    3.  The frontend renders the menu dynamically, supporting multi-level dropdowns.

**Access Control Logic:**
* Menu item creation/modification is restricted to "Admin" or users with specific `menu:edit` permissions.
* Visibility of each menu item in the rendered navigation is controlled by the roles assigned to that menu item and the current user's role.

---

## 6. Content Management Logic

**Objective:** To enable users to create, manage, and display various types of content, with access controls.

**Key Entities & Data Structures:**
* `Content`: `id` (UUIDv4 for embeds), `title`, `type` ('html', 'image_url', 'video_embed_url', 'document_url', 'external_link_embed'), `content_data` (TEXT for HTML, URL/path for files), `created_by_user_id`, `created_at`, `updated_at`, `associated_menu_item_id` (optional).

**Core Processes & Workflows:**

* **Create/Update Content (Admin or user with content creation rights):**
    1.  Authorized user accesses the content creation/editing interface.
    2.  User provides a `title` and selects a `type`.
    3.  Based on `type`, appropriate input fields are shown:
        * `html`: Rich Text Editor. Content is sanitized using `DOMPurify` on the backend before saving.
        * `image_url`, `document_url`: File upload mechanism. Files are stored (cloud/local server), and the URL/path is saved in `content_data`.
        * `video_embed_url`, `external_link_embed`: Input field for the URL. For `external_link_embed`, a UUIDv4 is used as the public ID for this content item. Parameters might be encrypted if sensitive.
    4.  System saves the content along with `created_by_user_id` and timestamps.
* **View Content:**
    1.  User accesses content, typically via a menu link that resolves to a content ID/slug.
    2.  System fetches the content data.
    3.  Frontend renders the content based on its `type` (e.g., display HTML, embed video, provide download link for document).
    4.  `external_link_embed` content is displayed full-width, typically within an iframe.
* **Accessing External Embed URL Directly:**
    1.  If a URL for an `external_link_embed` content item is accessed directly (e.g., `app.com/embed/{uuid}`), Next.js middleware intercepts the request.
    2.  Middleware checks if the user is authenticated.
    3.  If not authenticated, redirect to the login page.
    4.  If authenticated, allow access to the embed rendering page.

**File Handling Logic:**
* Uploads are processed by a dedicated API endpoint.
* Files are stored in a configured location (cloud like S3/GCS, or local server path).
* Metadata (filename, type, size, URL) is stored or derivable.

**Access Control Logic:**
* Content creation/modification rights are determined by user role/permissions (e.g., `content:create`, `content:edit:{own}`, `content:publish`).
* Access to view content is typically linked to menu item visibility, which is role-based. Specific content items could also have direct role/permission assignments if not tied to a menu.

---

## 7. System Notification Management Logic

**Objective:** To enable broadcasting system-wide notifications to users and managing their read status.

**Key Entities & Data Structures:**
* `Notification`: `id`, `title`, `content_type` ('text', 'image_url', etc.), `content_data`, `created_at`, `created_by_user_id`.
* `UserNotificationStatus`: `user_id`, `notification_id`, `is_read` (boolean), `read_at`.

**Core Processes & Workflows:**

* **Create/Edit/Delete Notification (Admin or permissioned user):**
    1.  Authorized user accesses notification management.
    2.  User defines `title`, `content_type`, and `content_data` (similar to Content Management types).
    3.  On creation, the notification is saved. It becomes active for all users.
* **Retrieve Notifications (User):**
    1.  When a user is active, the system (via polling or real-time connection) checks for new notifications.
    2.  The navbar bell icon displays a count of notifications where `UserNotificationStatus.is_read` is false for the current user. A "pulse" animation indicates unread notifications.
    3.  Clicking the bell icon fetches a list of notifications for the user, joining `Notification` with `UserNotificationStatus` to show titles and read status.
* **View Notification Detail & Mark as Read:**
    1.  User clicks on a specific notification from the list.
    2.  The detailed content of the notification is displayed.
    3.  An API call (`POST /api/notifications/{id}/mark-as-read`) is made.
    4.  System creates/updates a record in `UserNotificationStatus` for that `user_id` and `notification_id`, setting `is_read` to true and recording `read_at`.
    5.  The unread count is updated.

**Real-time Logic (Optional):**
* If WebSockets are used:
    * On new notification creation, server pushes an event to all connected clients.
    * Clients update the unread count and notification list in real-time.

**Access Control Logic:**
* Creating/editing/deleting notifications is restricted by role/permission.
* All authenticated users receive and can view notifications.

---

## 8. Email Template Management Logic

**Objective:** To allow administrators to customize email templates used by the system.

**Key Entities & Data Structures:**
* `EmailTemplate`: `id`, `template_type` (enum: 'user_invitation', 'password_reset', 'system_warning'), `subject`, `body_html`, `is_custom` (boolean), `updated_at`.

**Core Processes & Workflows:**

* **Manage Email Templates (Admin only):**
    1.  Admin accesses the email template management interface.
    2.  Admin can select a `template_type` to customize.
    3.  Admin edits the `subject` and `body_html` using a Rich Text Editor or HTML editor. Templates support dynamic variables (e.g., `{{userName}}`, `{{resetLink}}`).
    4.  On save, the `subject`, `body_html` are stored, and `is_custom` is set to true.
* **Email Sending Logic:**
    1.  When the system needs to send an email (e.g., user invitation):
        a.  It identifies the required `template_type`.
        b.  It attempts to fetch a custom template from `EmailTemplate` where `template_type` matches and `is_custom` is true.
        c.  If no custom template exists, the system falls back to a predefined default template (hardcoded or simpler structure).
        d.  The chosen template's `body_html` and `subject` are processed by a templating engine (e.g., Handlebars, Nunjucks, or simple string replacement) to inject dynamic data.
        e.  The processed email is sent via the configured email service (e.g., SendGrid, Mailgun, SMTP).

**Access Control Logic:**
* Only "Admin" users can manage email templates.

---

## 9. Home/Welcome Page Logic

**Objective:** To display a dynamic and informative dashboard for logged-in users.

**Key Entities & Data Structures:**
* `SystemConfiguration` (for marquee, jumbotron data).
* `AuditLog` (for login stats, user activity).
* `UserNotificationStatus` (for top notifications).
* `MenuAccessLog` (hypothetical, for top menus).
* `ActiveUserSession` (hypothetical, or derived from recent `AuditLog` for online users).

**Core Processes & Workflows:**

* **Marquee Text Logic:**
    1.  Fetches `marquee_text` from `SystemConfiguration`.
    2.  Displayed in a smoothly scrolling marquee component.
* **Jumbotron Logic:**
    1.  Fetches `jumbotron_images` (array of URLs or configuration) from `SystemConfiguration`.
    2.  Displayed in an auto-sliding carousel (`Swiper (React)`).
* **Digital Clock Logic:**
    1.  Uses client-side JavaScript to display the current time from the user's PC, updating every second.
* **Analytics Widgets Logic:**
    * **Top 5 User Online:**
        1.  Requires a mechanism to track active sessions. This could be:
            * Querying `next-auth` session store if accessible and filter by recent activity.
            * Polling a "heartbeat" endpoint from active clients.
            * Aggregating `AuditLog` for very recent 'activity' type events.
        2.  The backend API endpoint aggregates this data to return the top 5 currently (or very recently) active users.
    * **Top 5 User Frequently Login:**
        1.  Backend API endpoint queries `AuditLog` for 'LOGIN_SUCCESS' actions.
        2.  Aggregates login counts per user over a defined period (e.g., last 30 days).
        3.  Returns the top 5 users with the highest login counts.
    * **Top 5 Notifikasi Terpopuler:**
        1.  Backend API endpoint queries `UserNotificationStatus`.
        2.  Counts how many times each `notification_id` has `is_read = true` (or counts distinct clicks if click tracking is implemented).
        3.  Returns the top 5 notifications based on this count.
    * **Line Chart Jumlah Login (15 days):**
        1.  Backend API endpoint queries `AuditLog` for 'LOGIN_SUCCESS' actions.
        2.  Aggregates daily login counts for the past 15 days.
        3.  Returns data formatted for `react-apexcharts` (e.g., array of dates and corresponding counts).
    * **Top 5 Menu Terpopuler:**
        1.  Requires logging menu access. A new table like `MenuAccessLog` (`menu_item_id`, `user_id`, `timestamp`) would be needed.
        2.  Each time a user accesses content via a menu, a log entry is created.
        3.  Backend API endpoint queries `MenuAccessLog`, aggregates access counts per `menu_item_id`.
        4.  Returns the top 5 menu items.

**Access Control Logic:**
* The Home page itself is accessible to all authenticated users who have accepted T&C.
* Data within widgets might be implicitly filtered by a user's general access, but typically dashboard analytics are system-wide unless specified otherwise.

---

## 10. System Configuration Management Logic

**Objective:** To allow administrators to manage global application settings.

**Key Entities & Data Structures:**
* `SystemConfiguration`: `key` (string, unique), `value` (JSON or TEXT). Examples: `jumbotron_images`, `marquee_text`, `app_logo_url`.

**Core Processes & Workflows:**

* **Update Configuration (Admin only):**
    1.  Admin accesses the System Configuration interface.
    2.  Interface lists configurable keys with their current values.
    3.  Admin modifies values (e.g., text input, file upload for images, JSON editor for structured data).
    4.  On save, the `value` for the corresponding `key` is updated in `SystemConfiguration`.
* **Retrieve Configuration (Application-wide):**
    1.  Various parts of the application (frontend and backend) fetch specific configuration values by their `key` as needed.
    2.  Example: Frontend fetches `app_logo_url` to display in the navbar.
    3.  Configurations are good candidates for caching due to infrequent changes.

**Access Control Logic:**
* Only "Admin" users can modify system configurations.
* Configurations are generally readable by the system/frontend components that need them.

---

## Cross-Cutting Concerns Logic

* **Authentication & Authorization:**
    * `next-auth` is the core. JWT sessions are preferred.
    * Middleware (`middleware.ts`) protects routes:
        * Redirects unauthenticated users from protected pages to `/login`.
        * Can perform role checks for route groups (e.g., `/admin/*` requires 'Admin' role).
    * API routes individually verify session validity and user roles/permissions before processing requests.
* **Error Handling & Logging:**
    * Custom error pages (`error.tsx` in App Router) for user-friendly error display.
    * Server-side errors are logged (e.g., using Sentry or a simpler file/console logger).
    * Client-side errors are caught and can also be reported to Sentry.
    * API responses use appropriate HTTP status codes for errors.
* **Audit Logging Logic:**
    1.  A dedicated service/function (`logAudit(userId, actionType, resource, resourceId, details, ipAddress)`) is created.
    2.  This function is called from various critical points in the application logic:
        * Login success/failure.
        * Logout.
        * User profile changes.
        * Admin changes to users, roles, permissions, content, S&K, system config, notifications.
        * Content creation/update/deletion.
    3.  The audit entry is saved to the `AuditLog` table.
    4.  Admin users can view these logs via a dedicated interface with filtering capabilities.
* **Data Validation:**
    * Client-side: `React Hook Form + Zod/Yup` for form validation to provide immediate feedback.
    * Server-side: `Zod` (or similar) for all API input validation to ensure data integrity, as client-side validation can be bypassed. This is crucial for security.
* **Input Sanitization:**
    * HTML content generated via Rich Text Editors is sanitized using `DOMPurify` on the backend before being stored or rendered, to prevent XSS.
