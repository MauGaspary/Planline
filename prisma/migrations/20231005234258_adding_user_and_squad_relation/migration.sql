-- CreateTable
CREATE TABLE "UserSquadBridge" (
    "id" TEXT NOT NULL,
    "squad_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSquadBridge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSquadBridge" ADD CONSTRAINT "UserSquadBridge_squad_id_fkey" FOREIGN KEY ("squad_id") REFERENCES "Squad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSquadBridge" ADD CONSTRAINT "UserSquadBridge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
