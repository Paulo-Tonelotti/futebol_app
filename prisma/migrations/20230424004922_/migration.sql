/*
  Warnings:

  - The primary key for the `team_user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "team_user" DROP CONSTRAINT "team_user_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "team_user_pkey" PRIMARY KEY ("id");
