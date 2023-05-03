/*
  Warnings:

  - Made the column `team_id` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_team_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "team_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
