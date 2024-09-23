/*
  Warnings:

  - Added the required column `client` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "client" TEXT NOT NULL,
ADD COLUMN     "demo" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "year" INTEGER;
