-- AlterTable
ALTER TABLE "Sprint" ADD COLUMN     "squadId" TEXT;

-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "sprintId" TEXT;

-- AddForeignKey
ALTER TABLE "Sprint" ADD CONSTRAINT "Sprint_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "Sprint"("id") ON DELETE SET NULL ON UPDATE CASCADE;
