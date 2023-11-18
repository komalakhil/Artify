const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    firstname :{
        type : String,
        required : true
    },
    cardnumber : {
        type : String,
        required : true
    },
    expirydate :{
        type : Date,
        required : true
    },
    cvv : {
        type : String,
        required : true
    },
    bankname : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true
    },
    item : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})


module.exports = mongoose.model('Order',orderSchema)