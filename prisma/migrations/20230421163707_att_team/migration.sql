/*
  Warnings:

  - The primary key for the `team_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `league` on the `team_user` table. All the data in the column will be lost.
  - Changed the type of `id` on the `team_user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "team_user" DROP CONSTRAINT "team_user_pkey",
DROP COLUMN "league",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "team_user_pkey" PRIMARY KEY ("id");
