-- AlterTable
ALTER TABLE "Sprint" ADD COLUMN     "squadId" TEXT;

-- AddForeignKey
ALTER TABLE "Sprint" ADD CONSTRAINT "Sprint_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;
