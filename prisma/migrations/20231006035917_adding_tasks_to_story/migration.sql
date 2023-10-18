/*
  Warnings:

  - Added the required column `story_id` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "story_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
