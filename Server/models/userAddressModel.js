const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    country:{
        type: String
    },
    city: {
       type: String 
    },
    commune: {
        type: String,
    },
    district: {
        type: String,
    },
    address: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
    },
    addressType: {
        type: String,
        enum: ["home", "work"],
        },
    });


module.exports = mongoose.model("UserAddress", userAddressSchema);