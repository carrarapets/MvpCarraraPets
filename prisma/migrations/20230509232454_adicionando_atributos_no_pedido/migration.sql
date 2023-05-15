/*
  Warnings:

  - Added the required column `destino_lat` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localizacao_atual_lat` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "destino_lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "localizacao_atual_lat" DOUBLE PRECISION NOT NULL;
