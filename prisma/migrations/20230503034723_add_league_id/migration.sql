/*
  Warnings:

  - A unique constraint covering the columns `[leagueId]` on the table `team_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `leagueId` to the `team_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "team_user" ADD COLUMN     "leagueId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "League" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "League_id_key" ON "League"("id");

-- CreateIndex
CREATE UNIQUE INDEX "team_user_leagueId_key" ON "team_user"("leagueId");

-- AddForeignKey
ALTER TABLE "team_user" ADD CONSTRAINT "team_user_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
