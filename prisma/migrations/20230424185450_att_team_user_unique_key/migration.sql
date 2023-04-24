/*
  Warnings:

  - The primary key for the `team_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `userId` on table `team_user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "team_user" DROP CONSTRAINT "team_user_userId_fkey";

-- AlterTable
ALTER TABLE "team_user" DROP CONSTRAINT "team_user_pkey",
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "team_user" ADD CONSTRAINT "team_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
