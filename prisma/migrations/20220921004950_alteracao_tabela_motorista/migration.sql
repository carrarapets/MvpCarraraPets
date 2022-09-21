/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Motorista` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valido` to the `Motorista` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Motorista" ADD COLUMN     "celular" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "foto" TEXT,
ADD COLUMN     "nome" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "sobrenome" TEXT,
ADD COLUMN     "valido" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Motorista_email_key" ON "Motorista"("email");
