const Admin  = require('../models/adminModel')
const Customers = require('../models/customerModel')
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")

// const getCustomerDetails = async (req, res) => {
//   try{
//     const {name} = req.body;
//   }
// }

const adminsignup = async (req, res) => {
    try{

    const { username,email,company,phone,password} = req.body;
    const existingUser = await Admin.findOne({'email':email});
    const existingCustomer = await Customers.findOne({'email':email});


    if (existingUser) {
      return res.status(402).json({ error: "User with the same username already exists." });
    }
    if (existingCustomer) {
      return res.status(400).json({ error: "User with the same username already exists." });
    }

    const newAdmin = new Admin({
      'username':username,
      'email':email,
      'company':company,
      'phone':phone,
      'password':password,
    });

    await newAdmin.save();
    let jwttoken =jwt.sign({email: email},"abcdefg",{expiresIn:2000})
    res.status(200).json({ message: "Admin account signedup successfully", admin: newAdmin,token : jwttoken,type:"admin" });
    }catch(err){
        res.status(500).json({ error: err.message });
      }
}  

module.exports = {adminsignup}