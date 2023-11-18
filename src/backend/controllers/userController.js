const Admin  = require('../models/adminModel')
const Customers = require('../models/customerModel')
const bcryptjs = require('bcrypt')
const mongoose = require('mongoose')
const jwt=require("jsonwebtoken")

const getusers = async (req,res) => { 
  try {
    const { id } = req.body; // Assuming you receive the ID in the request body
    // Check if a user with the given ID exists
    const user = await Customers.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User with this ID does not exist." });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    // Check if a user with the given email exists
    const existingcustomer = await Customers.findOne({ email });
    const existingadmin = await Admin.findOne({ email });
    
    if (!existingcustomer) {
      if(!existingadmin){
      return res.status(404).json({ message: "User with this email does not exist." });
      }
    }

    // Compare the provided password with the hashed password of the existing user
    // const passwordsMatch = await bcryptjs.compare(password, existingUser.password);

    // console.log(passwordsMatch)
    if(existingcustomer){
    if (password!=existingcustomer.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // If passwords match, create a token
    // const signedToken = jwt.sign({ userId: existingUser._id }, process.env.SECRET, { expiresIn: '1h' });

    // Send the token in the response
    else{
      let jwttoken =jwt.sign({email:existingcustomer.email},"abcdef",{expiresIn: '1h'})
      
    
    return res.status(200).json({ message: "Login successful", user: existingcustomer,token:jwttoken,type:"user" });
    }
  }
  
  if(existingadmin){
    if (password!=existingadmin.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // If passwords match, create a token
    // const signedToken = jwt.sign({ userId: existingUser._id }, process.env.SECRET, { expiresIn: '1h' });

    // Send the token in the response
    else{
      let jwttoken =jwt.sign({email:existingadmin.email},"ghijh")
      
    
    return res.status(200).json({ message: "Login successful", user: existingadmin,token:jwttoken,type:"admin" });
    }
  }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {login,getusers}