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

function emailAlreadyExist(emailAlready) { 
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
}

function validationPhone(celular) {
    if (phoneValidator.validate(celular)) {
        return true;
    } else { 
        return false;
        }
}

function phoneAlreadyExist(celularAlready) { 
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
}

function validationDocument(cpf) {
    if (documentValidator.validate(cpf)) {
        return true;
    } else { 
        return false;
        }
}

function documentAlreadyExist(cpfAlready) { 
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
}