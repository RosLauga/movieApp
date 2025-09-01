/*
  Warnings:

  - Added the required column `country` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plot` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poster` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Movies" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "plot" TEXT NOT NULL,
ADD COLUMN     "poster" TEXT NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;
