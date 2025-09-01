/*
  Warnings:

  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_UserMovies" DROP CONSTRAINT "_UserMovies_A_fkey";

-- DropTable
DROP TABLE "public"."Movies";

-- CreateTable
CREATE TABLE "public"."Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."_UserMovies" ADD CONSTRAINT "_UserMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
