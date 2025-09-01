/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `_UserMovies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_UserMovies" DROP CONSTRAINT "_UserMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_UserMovies" DROP CONSTRAINT "_UserMovies_B_fkey";

-- AlterTable
ALTER TABLE "public"."Movie" DROP CONSTRAINT "Movie_pkey",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("id", "userId");

-- DropTable
DROP TABLE "public"."_UserMovies";

-- AddForeignKey
ALTER TABLE "public"."Movie" ADD CONSTRAINT "Movie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
