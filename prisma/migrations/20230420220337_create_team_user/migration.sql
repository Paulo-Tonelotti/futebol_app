/*
  Warnings:

  - Added the required column `userTeam` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "userTeam" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "team_user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "league" INTEGER NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "team_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userTeam_fkey" FOREIGN KEY ("userTeam") REFERENCES "team_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
