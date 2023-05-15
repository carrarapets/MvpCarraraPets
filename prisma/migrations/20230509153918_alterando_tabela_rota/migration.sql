/*
  Warnings:

  - Added the required column `latitude_destino` to the `Localizacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longiute_destino` to the `Localizacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Localizacao" ADD COLUMN     "latitude_destino" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longiute_destino" DOUBLE PRECISION NOT NULL;
