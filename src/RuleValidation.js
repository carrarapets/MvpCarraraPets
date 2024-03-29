
const emailValidator = require('email-validator');
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

function validationEmail(email) {
    if (emailValidator.validate(email)) {
        return true;
    } else { 
        return false;
        }
}

async function emailAlreadyExist(email) {
  try {
    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return existingEmail ? true : false;

  } catch (error) {
    throw error;}
  }

function validationPhone(celular) {
    if (isNaN(celular) === true) return false;
    celular = celular.replace(/\D/g, '');
    if (!(celular.length >= 10 && celular.length <= 11)) return false;
    if (celular.length == 11 && parseInt(celular.substring(2, 3)) != 9) return false;
    for (var n = 0; n < 10; n++) {
        if (celular == new Array(11).join(n) || celular == new Array(12).join(n)) return false;
    }
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];
    if (codigosDDD.indexOf(parseInt(celular.substring(0, 2))) == -1) return false;
    if (new Date().getFullYear() < 2017) return true;
    if (celular.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(celular.substring(2, 3))) == -1) return false;
    return true;
}

async function phoneAlreadyExist(celular) { 
  try {
    const existingFone = await prisma.user.findMany({
      where: {
        celular: celular,
      },
    });

    return existingFone ? true : false;
    
  } catch (error) {
    throw error;}
  }

function validationCpfDocument(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
  if (cpf == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}

async function CpfAlreadyExist(cpf) { 
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        cpf: cpf,
      },
    });

    return existingUser ? true : false;

  } catch (error) {
    throw error;}
  }

function validationRgDocument(rg) {
    if (rg.length === 9 && isNaN(rg) === false){
        return true;
    } else {
        return false;
    }
}

async function RgAlreadyExist(rg) { 
  try {
    const existingRg = await prisma.user.findUnique({
      where: {
        rg: rg,
      },
    });

    return existingRg ? true : false;

  } catch (error) {
    throw error;}
  }


async function CNHAlreadyExistMotorista(CNH) { 
    try {
        const existingUser = await prisma.motorista.findUnique({
          where: {
            CNH: CNH,
          },
        });
    
        return existingUser ? true : false;
    
      } catch (error) {
        throw error;}
      }

async function phoneAlreadyExistMotorista(celular) { 
  try {
    const existingFone = await prisma.Motorista.findMany({
      where: {
        celular: celular,
      },
    });

    return existingFone ? true : false;
    
  } catch (error) {
    throw error;}
  }

async function emailAlreadyExistMotorista(email) {
    try {
      const existingEmail = await prisma.motorista.findUnique({
        where: {
          email: email,
        },
      });
      return existingEmail ? true : false;
  
    } catch (error) {
      throw error;}
    }

  function validateCNH(CNH) {
    const numeroLimpo = CNH.replace(/\D/g, '');
  
    if (numeroLimpo.length !== 11) {
      return false;
    }
  
    if (/^(\d)\1+$/.test(numeroLimpo)) {
      return false;
    }
  
    let soma = 0;
    let peso = 2;
  
    for (let i = numeroLimpo.length - 1; i >= 0; i--) {
      soma += parseInt(numeroLimpo.charAt(i)) * peso;
      peso++;
  
      if (peso > 9) {
        peso = 2;
      }
    }
  
    const digitoVerificador = soma % 11;

    if (digitoVerificador === 0 || digitoVerificador === 1) {
      return parseInt(numeroLimpo.charAt(9)) === 0;
    } else {
      return parseInt(numeroLimpo.charAt(9)) === 11 - digitoVerificador;
    }
  }

exports.validationEmail = validationEmail;
exports.emailAlreadyExist = emailAlreadyExist;
exports.validationPhone = validationPhone;
exports.phoneAlreadyExist = phoneAlreadyExist;
exports.validationCpfDocument = validationCpfDocument;
exports.CpfAlreadyExist = CpfAlreadyExist;
exports.validationRgDocument = validationRgDocument;
exports.RgAlreadyExist = RgAlreadyExist;
exports.CNHAlreadyExistMotorista = CNHAlreadyExistMotorista;
exports.phoneAlreadyExistMotorista = phoneAlreadyExistMotorista;
exports.emailAlreadyExistMotorista = emailAlreadyExistMotorista;
exports.validateCNH = validateCNH;