-- CreateTable
CREATE TABLE "idnbi_AuditLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT,
    "resourceId" TEXT,
    "details" JSONB,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_Content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'html',
    "content_data" TEXT NOT NULL,
    "created_by_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_EmailTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_EmailTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_MenuItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "parent_id" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "icon_class" TEXT,
    "type" TEXT NOT NULL,
    "target_url" TEXT,
    "content_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_MenuRole" (
    "menuId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_MenuRole_pkey" PRIMARY KEY ("menuId","roleId")
);

-- CreateTable
CREATE TABLE "idnbi_Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_PasswordResetToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_Permission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_RolePermission" (
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_RolePermission_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateTable
CREATE TABLE "idnbi_SystemConfiguration" (
    "id" TEXT NOT NULL DEFAULT '1',
    "app_name" TEXT NOT NULL DEFAULT 'Indonet Analytics Hub',
    "logo_url" TEXT,
    "login_bg_url" TEXT,
    "footer_text" TEXT,
    "default_profile_photo_url" TEXT,
    "jumbotron_content" TEXT,
    "marquee_content" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_SystemConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_TermsAndConditions" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "content_html" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),

    CONSTRAINT "idnbi_TermsAndConditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'INACTIVE',
    "profile_photo_url" TEXT,
    "last_login_at" TIMESTAMP(3),
    "last_login_ip" TEXT,
    "failed_login_attempts" INTEGER NOT NULL DEFAULT 0,
    "is_ip_blocked" BOOLEAN NOT NULL DEFAULT false,
    "terms_accepted_at" TIMESTAMP(3),
    "invited_at" TIMESTAMP(3),
    "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temp_password_flag" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idnbi_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_UserNotificationStatus" (
    "userId" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "read_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_UserNotificationStatus_pkey" PRIMARY KEY ("userId","notificationId")
);

-- CreateTable
CREATE TABLE "idnbi_UserRole" (
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_UserRole_pkey" PRIMARY KEY ("userId","roleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_Content_slug_key" ON "idnbi_Content"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_EmailTemplate_name_key" ON "idnbi_EmailTemplate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_MenuItem_title_parent_id_key" ON "idnbi_MenuItem"("title", "parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_PasswordResetToken_token_key" ON "idnbi_PasswordResetToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_Permission_name_key" ON "idnbi_Permission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_Role_name_key" ON "idnbi_Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_TermsAndConditions_version_key" ON "idnbi_TermsAndConditions"("version");

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_User_email_key" ON "idnbi_User"("email");

-- AddForeignKey
ALTER TABLE "idnbi_AuditLog" ADD CONSTRAINT "idnbi_AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "idnbi_User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_Content" ADD CONSTRAINT "idnbi_Content_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "idnbi_User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_MenuItem" ADD CONSTRAINT "idnbi_MenuItem_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "idnbi_MenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_MenuRole" ADD CONSTRAINT "idnbi_MenuRole_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "idnbi_MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_MenuRole" ADD CONSTRAINT "idnbi_MenuRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "idnbi_Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_PasswordResetToken" ADD CONSTRAINT "idnbi_PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "idnbi_User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_RolePermission" ADD CONSTRAINT "idnbi_RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "idnbi_Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_RolePermission" ADD CONSTRAINT "idnbi_RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "idnbi_Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_UserNotificationStatus" ADD CONSTRAINT "idnbi_UserNotificationStatus_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "idnbi_Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_UserNotificationStatus" ADD CONSTRAINT "idnbi_UserNotificationStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "idnbi_User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_UserRole" ADD CONSTRAINT "idnbi_UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "idnbi_Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idnbi_UserRole" ADD CONSTRAINT "idnbi_UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "idnbi_User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
