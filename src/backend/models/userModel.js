const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})


userSchema.statics.login = async () => {
    
}
module.exports = mongoose.model('User',userSchema)