/*
  Warnings:

  - Added the required column `teste` to the `Rota` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rota" ADD COLUMN     "teste" TEXT NOT NULL;
