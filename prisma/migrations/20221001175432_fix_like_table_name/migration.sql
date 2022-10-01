/*
  Warnings:

  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_whoLikedId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_whoReceivedId_fkey";

-- DropTable
DROP TABLE "Like";

-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "whoLikedId" INTEGER NOT NULL,
    "whoReceivedId" INTEGER NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_whoLikedId_fkey" FOREIGN KEY ("whoLikedId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_whoReceivedId_fkey" FOREIGN KEY ("whoReceivedId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
