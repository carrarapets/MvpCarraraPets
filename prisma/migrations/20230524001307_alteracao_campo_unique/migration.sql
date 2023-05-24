/*
  Warnings:

  - You are about to drop the column `teste` on the `Rota` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Carro_marca_key";

-- DropIndex
DROP INDEX "Motorista_validade_cnh_key";

-- AlterTable
ALTER TABLE "Rota" DROP COLUMN "teste";
