-- DropIndex
DROP INDEX "profiles_name_key";

-- CreateTable
CREATE TABLE "photos" (
    "id" SERIAL NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
