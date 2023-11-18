const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const customerSchema = new Schema({
    username :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone :{
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


// customerSchema.statics.signup = async (username,email,phone,password,confirmpassword) => {
//         const exists = await this.findOne({username});

//         if(exists){
//             throw Error('This name already in use');
//         }

//         const salt = bcrypt.genSalt(10);
//         const hash = bcrypt.hash(password,salt); 
// }

module.exports = mongoose.model('Customer',customerSchema)