/*
  Warnings:

  - You are about to drop the column `userTeam` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_userTeam_fkey";

-- AlterTable
ALTER TABLE "team_user" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "userTeam";

-- AddForeignKey
ALTER TABLE "team_user" ADD CONSTRAINT "team_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
