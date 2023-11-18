const Customer  = require('../models/customerModel')
const Admin  = require('../models/adminModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const getcustomers = async (req, res) => {
    try {
      const customers = await Customer.find({}).sort({createdAt : -1})
      res.status(200).json(customers)
    } catch (error) {
      res.status(400).json({ error: 'Something wrong while getting customers from backend' });
  }
}

const signup = async (req, res) => {
    try{
        const { username,email,phone,password} = req.body;
    const existingUser = await Customer.findOne({'email':email});
    const existingAdmin = await Admin.findOne({'email':email});

    if (existingUser) {
      return res.status(400).json({ error: "User with the same emailid already exists." });
    }
    if (existingAdmin) {
      return res.status(402).json({ error: "Admin with the same emailid already exists." });
    }

    const newCustomer = new Customer({
      'username':username,
      'email':email,
      'phone':phone,
      'password':password,
    });

    await newCustomer.save();
    let jwttoken =jwt.sign({email: email},"abcdefg",{expiresIn:2000})
    res.status(200).json({ message: "User account signedup successfully", user: newCustomer,token:jwttoken,type:"user" });
    console.log("Hello")
    }catch(err){
        res.status(500).json({ error: err.message });
      }
}  

module.exports = {getcustomers,signup}