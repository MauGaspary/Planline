-- CreateTable
CREATE TABLE "ProjectSquadBridge" (
    "id" TEXT NOT NULL,
    "squad_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectSquadBridge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectSquadBridge" ADD CONSTRAINT "ProjectSquadBridge_squad_id_fkey" FOREIGN KEY ("squad_id") REFERENCES "Squad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectSquadBridge" ADD CONSTRAINT "ProjectSquadBridge_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
