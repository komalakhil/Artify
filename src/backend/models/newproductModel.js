const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newproductSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    type :{
        type : String,
        required : true
    },
    cost :{
        type : Number,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    image : String
},
{
    timestamps : true
})

module.exports = mongoose.model('NewProduct',newproductSchema)