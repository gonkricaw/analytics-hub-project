-- CreateTable
CREATE TABLE "idnbi_FailedLoginAttemptLog" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_FailedLoginAttemptLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idnbi_IPBlocklist" (
    "ip_address" TEXT NOT NULL,
    "blocked_until" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "idnbi_IPBlocklist_pkey" PRIMARY KEY ("ip_address")
);

-- CreateIndex
CREATE UNIQUE INDEX "idnbi_FailedLoginAttemptLog_email_ip_address_key" ON "idnbi_FailedLoginAttemptLog"("email", "ip_address");
