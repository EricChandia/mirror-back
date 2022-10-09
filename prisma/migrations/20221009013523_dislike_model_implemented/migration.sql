-- CreateTable
CREATE TABLE "dislikes" (
    "id" SERIAL NOT NULL,
    "whoDislikeId" INTEGER NOT NULL,
    "whoReceivedId" INTEGER NOT NULL,

    CONSTRAINT "dislikes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dislikes" ADD CONSTRAINT "dislikes_whoDislikeId_fkey" FOREIGN KEY ("whoDislikeId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dislikes" ADD CONSTRAINT "dislikes_whoReceivedId_fkey" FOREIGN KEY ("whoReceivedId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
