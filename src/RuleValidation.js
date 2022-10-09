
const emailValidator = require('email-validator');
const phoneValidator = require('validate-phone-number-node-js');
const documentValidator = require('cpf-cnpj-validator');
const { prisma } = require('@prisma/client');




function validationEmail(email) {
    if (emailValidator.validate(email)) {
        return true;
    } else { 
        return false;
        }
}

/*function emailAlreadyExist(emailAlready) { 
    const getUser =  prisma.user.findUnique({
        where: {
            email: emailAlready,
        },
        select: {
            id: true,
            nome: true,
        },
    })
    if (getUser == null) {
        return true;
    } else {
        return false;
    }
}*/

function validationPhone(celular) {
    telefone = telefone.replace(/\D/g, '');
    if (!(telefone.length >= 10 && telefone.length <= 11)) return false;
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;
    for (var n = 0; n < 10; n++) {
        if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
    }
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];
    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;
    if (new Date().getFullYear() < 2017) return true;
    if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;
    return true;
}

/*function phoneAlreadyExist(celularAlready) { 
    const getUser =  prisma.user.findUnique({
        where: {
            celular: celularAlready,
        },
        select: {
            id: true,
            nome: true,
        },
    })
    if (getUser == null) {
        return true;
    } else {
        return false;
    }
}*/

function validationDocument(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

/*function documentAlreadyExist(cpfAlready) { 
    const getUser =  prisma.user.findUnique({
        where: {
            cpf: cpfAlready,
        },
        select: {
            id: true,
            nome: true,
        },
    })
    if (getUser == null) {
        return true;
    } else {
        return false;
    }
}*/





exports.validationEmail = validationEmail;
//exports.emailAlreadyExist = emailAlreadyExist;
exports.validationPhone = validationPhone;
//exports.phoneAlreadyExist = phoneAlreadyExist;
exports.validationDocument = validationDocument;
//exports.documentAlreadyExist = documentAlreadyExist;