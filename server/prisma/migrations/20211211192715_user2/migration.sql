/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[node_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idGit` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `node_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "blog" TEXT,
ADD COLUMN     "company" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3),
ADD COLUMN     "email" TEXT,
ADD COLUMN     "events_url" TEXT,
ADD COLUMN     "followers" INTEGER,
ADD COLUMN     "followers_url" TEXT,
ADD COLUMN     "following" INTEGER,
ADD COLUMN     "following_url" TEXT,
ADD COLUMN     "gists_url" TEXT,
ADD COLUMN     "gravatar_id" TEXT,
ADD COLUMN     "html_url" TEXT,
ADD COLUMN     "idGit" INTEGER NOT NULL,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "node_id" TEXT NOT NULL,
ADD COLUMN     "organizations_url" TEXT,
ADD COLUMN     "public_gists" INTEGER,
ADD COLUMN     "public_repos" INTEGER,
ADD COLUMN     "received_events_url" TEXT,
ADD COLUMN     "repos_url" TEXT,
ADD COLUMN     "site_admin" BOOLEAN,
ADD COLUMN     "starred_url" TEXT,
ADD COLUMN     "subscriptions_url" TEXT,
ADD COLUMN     "twitter_username" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "url" TEXT;

-- CreateTable
CREATE TABLE "Test" (
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_nom_key" ON "Test"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Test_prenom_key" ON "Test"("prenom");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");
