/*
  Warnings:

  - Added the required column `petId` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Pet_userId_key";

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "petId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
