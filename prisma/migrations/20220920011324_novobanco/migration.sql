/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "sobrenome" TEXT,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "valido" BOOLEAN NOT NULL,
    "foto" TEXT,
    "celular" TEXT,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "peso" DOUBLE PRECISION NOT NULL,
    "comportamento" TEXT,
    "foto" TEXT,
    "sexo" TEXT,
    "raca" TEXT,
    "especia" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viagem" (
    "id" SERIAL NOT NULL,
    "chat" TEXT,
    "update_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pontuacao" TEXT,
    "pedidoId" INTEGER NOT NULL,

    CONSTRAINT "Viagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "preco" DOUBLE PRECISION NOT NULL,
    "final" TIMESTAMP(3) NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "cancelpass" BOOLEAN NOT NULL,
    "cancelmoto" BOOLEAN NOT NULL,
    "destino" DOUBLE PRECISION NOT NULL,
    "localizacao_atual" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "motoristaId" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motorista" (
    "id" SERIAL NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CNH" TEXT,
    "ant_criminal" TEXT,
    "avaliacao" TEXT,
    "validade_cnh" TIMESTAMP(3) NOT NULL,
    "detalhes_corridas" TEXT,

    CONSTRAINT "Motorista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Convite" (
    "id" SERIAL NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "ativo" BOOLEAN NOT NULL,
    "motoristaId" INTEGER NOT NULL,

    CONSTRAINT "Convite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carro" (
    "id" SERIAL NOT NULL,
    "placa" TEXT,
    "modelo" TEXT,
    "marca" TEXT,
    "renavam" TEXT,
    "cor" TEXT,
    "motoristaId" INTEGER NOT NULL,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_rg_key" ON "User"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Pet_userId_key" ON "Pet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Viagem_pedidoId_key" ON "Viagem"("pedidoId");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_motoristaId_key" ON "Pedido"("motoristaId");

-- CreateIndex
CREATE UNIQUE INDEX "Motorista_CNH_key" ON "Motorista"("CNH");

-- CreateIndex
CREATE UNIQUE INDEX "Motorista_validade_cnh_key" ON "Motorista"("validade_cnh");

-- CreateIndex
CREATE UNIQUE INDEX "Convite_motoristaId_key" ON "Convite"("motoristaId");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_placa_key" ON "Carro"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_marca_key" ON "Carro"("marca");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_renavam_key" ON "Carro"("renavam");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_motoristaId_key" ON "Carro"("motoristaId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viagem" ADD CONSTRAINT "Viagem_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Convite" ADD CONSTRAINT "Convite_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carro" ADD CONSTRAINT "Carro_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
