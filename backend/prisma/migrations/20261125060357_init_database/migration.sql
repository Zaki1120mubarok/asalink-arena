-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mapel" TEXT NOT NULL,
    "bab" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "bloom" TEXT NOT NULL,
    "kesulitan" TEXT NOT NULL,
    "durasi" INTEGER NOT NULL,
    "teks" TEXT NOT NULL,
    "opsiA" TEXT NOT NULL,
    "opsiB" TEXT NOT NULL,
    "opsiC" TEXT NOT NULL,
    "opsiD" TEXT NOT NULL,
    "kunci" TEXT NOT NULL,
    "pembahasan" TEXT,
    "reviewed" BOOLEAN NOT NULL DEFAULT true,
    "authorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Question_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
