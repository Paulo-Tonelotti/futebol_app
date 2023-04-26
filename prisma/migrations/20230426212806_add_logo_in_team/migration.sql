/*
  Warnings:

  - Added the required column `logo` to the `team_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "team_user" ADD COLUMN     "logo" TEXT NOT NULL;
