/*
  Warnings:

  - A unique constraint covering the columns `[squad_id,project_id]` on the table `ProjectSquadBridge` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[squad_id,user_id]` on the table `UserSquadBridge` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProjectSquadBridge_squad_id_project_id_key" ON "ProjectSquadBridge"("squad_id", "project_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserSquadBridge_squad_id_user_id_key" ON "UserSquadBridge"("squad_id", "user_id");
