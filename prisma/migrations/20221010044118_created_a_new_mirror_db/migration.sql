/*
  Warnings:

  - Added the required column `age` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identification` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lookingFor` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "identification" TEXT NOT NULL,
ADD COLUMN     "lookingFor" TEXT NOT NULL;
