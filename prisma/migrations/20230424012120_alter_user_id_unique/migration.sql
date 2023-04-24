/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `team_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "team_user_userId_key" ON "team_user"("userId");
