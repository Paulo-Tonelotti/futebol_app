/*
  Warnings:

  - You are about to drop the column `leagueId` on the `team_user` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `team_user` table. All the data in the column will be lost.
  - You are about to drop the `League` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `team_user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "team_user" DROP CONSTRAINT "team_user_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "team_user" DROP CONSTRAINT "team_user_userId_fkey";

-- DropIndex
DROP INDEX "team_user_leagueId_key";

-- DropIndex
DROP INDEX "team_user_userId_key";

-- AlterTable
ALTER TABLE "team_user" DROP COLUMN "leagueId",
DROP COLUMN "userId",
ADD COLUMN     "league_id" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "team_id" TEXT;

-- DropTable
DROP TABLE "League";

-- CreateTable
CREATE TABLE "leagues" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "leagues_id_key" ON "leagues"("id");

-- CreateIndex
CREATE UNIQUE INDEX "team_user_id_key" ON "team_user"("id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_user" ADD CONSTRAINT "team_user_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "leagues"("id") ON DELETE SET NULL ON UPDATE CASCADE;
