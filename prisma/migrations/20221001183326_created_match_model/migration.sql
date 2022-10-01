-- CreateTable
CREATE TABLE "matches" (
    "id" SERIAL NOT NULL,
    "firstProfileId" INTEGER NOT NULL,
    "secondProfileId" INTEGER NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_firstProfileId_fkey" FOREIGN KEY ("firstProfileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_secondProfileId_fkey" FOREIGN KEY ("secondProfileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
