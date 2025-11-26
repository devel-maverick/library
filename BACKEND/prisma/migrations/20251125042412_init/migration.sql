/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `ISBN` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the `_BookGenres` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookGenres" DROP CONSTRAINT "_BookGenres_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookGenres" DROP CONSTRAINT "_BookGenres_B_fkey";

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "lifeSpan" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "date_of_birth" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "date_of_death" DROP NOT NULL,
ALTER COLUMN "date_of_death" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "ISBN",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "isbn" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BookGenres";

-- CreateTable
CREATE TABLE "BookGenreMapping" (
    "bookId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "BookGenreMapping_pkey" PRIMARY KEY ("bookId","genreId")
);

-- AddForeignKey
ALTER TABLE "BookGenreMapping" ADD CONSTRAINT "BookGenreMapping_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookGenreMapping" ADD CONSTRAINT "BookGenreMapping_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
