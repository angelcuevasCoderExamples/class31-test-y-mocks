const express = require('express');
const generateUser = require('../utils/generateUser');

const router = express.Router();


router.get('/', (req, res)=>{
    
    const quantity = req.query.quantity || 10; 

    const users = []
    for (let i = 0; i < quantity; i++) {
        users.push(generateUser())
    }


    res.send({status:'success', payload: users})
})



module.exports = {
    usersRouter: router 
}