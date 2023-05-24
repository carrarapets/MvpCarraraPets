const jwt = require('jsonwebtoken');
const express = require("express")


const secret = process.env.SECRET;

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if(token == null){
        return res.status(401);
    }

    jwt.verify(token, secret, (err, user) =>{
        if(err){
            return res.status(403);
        }

        req.loginUser = user;
        next();
    });
};


module.exports = authToken;