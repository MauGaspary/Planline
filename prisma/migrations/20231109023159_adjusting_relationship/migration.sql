/*
  Warnings:

  - You are about to drop the column `leaderId` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the `ProjectSquadBridge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSquadBridge` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectSquadBridge" DROP CONSTRAINT "ProjectSquadBridge_project_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectSquadBridge" DROP CONSTRAINT "ProjectSquadBridge_squad_id_fkey";

-- DropForeignKey
ALTER TABLE "Squad" DROP CONSTRAINT "Squad_leaderId_fkey";

-- DropForeignKey
ALTER TABLE "UserSquadBridge" DROP CONSTRAINT "UserSquadBridge_squad_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSquadBridge" DROP CONSTRAINT "UserSquadBridge_user_id_fkey";

-- AlterTable
ALTER TABLE "Squad" DROP COLUMN "leaderId";

-- DropTable
DROP TABLE "ProjectSquadBridge";

-- DropTable
DROP TABLE "UserSquadBridge";

-- CreateTable
CREATE TABLE "_SquadToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToSquad" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SquadToUser_AB_unique" ON "_SquadToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SquadToUser_B_index" ON "_SquadToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToSquad_AB_unique" ON "_ProjectToSquad"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToSquad_B_index" ON "_ProjectToSquad"("B");

-- AddForeignKey
ALTER TABLE "_SquadToUser" ADD CONSTRAINT "_SquadToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Squad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SquadToUser" ADD CONSTRAINT "_SquadToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToSquad" ADD CONSTRAINT "_ProjectToSquad_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToSquad" ADD CONSTRAINT "_ProjectToSquad_B_fkey" FOREIGN KEY ("B") REFERENCES "Squad"("id") ON DELETE CASCADE ON UPDATE CASCADE;
