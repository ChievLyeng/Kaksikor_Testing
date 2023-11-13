const  mongoose = require("mongoose");
const userAddress = require('../models/userAddressModel')

const createAddress = async (req,res) => {
    const userAdd = await userAddress.create(req.body) 

    try{
        res.status(201).json({
            data : {
                userAdd
            }
        })
    }catch(error){
        res.status(404).json({
            message : error
        })
    }
}

module.exports = {
    createAddress
}