/*
  Warnings:

  - Added the required column `actors` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boxOffice` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rated` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratings` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `released` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `runtime` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Movie" ADD COLUMN     "actors" TEXT NOT NULL,
ADD COLUMN     "boxOffice" TEXT NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "rated" TEXT NOT NULL,
ADD COLUMN     "ratings" TEXT NOT NULL,
ADD COLUMN     "released" TEXT NOT NULL,
ADD COLUMN     "runtime" TEXT NOT NULL;
