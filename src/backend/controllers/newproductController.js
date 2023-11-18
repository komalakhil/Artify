const NewProduct  = require('../models/newproductModel')
const mongoose = require('mongoose')


const add = async (req, res) => {
    try{
        const { name,type,cost,description,image} = req.body;

    const existingProduct = await NewProduct.findOne({ 'name':name,'type':type,'cost':cost,'description':description,'image':image });

    if (existingProduct) {
      return res.status(400).json({ error: "Product with the same name already exists." });
    }

    const newProduct = new NewProduct({
      'name':name,
      'type':type,
      'cost':cost,
      'description':description,
      'image':image
    });


    // Save the product to the database
    await newProduct.save();
  
    res.status(201).json({ message: "New Product successfully", product: newProduct });
    }catch(err){
        res.status(500).json({ error: err.message });
      }
}  


// const get = async (req, res) => {
//   try{
//       const { name,type,cost,description} = req.body;
//       console.log(req.body)
//   const existingProduct = await NewProduct.findOne({ 'name':name,'type':type,'cost':cost,'description':description });

//   if (existingProduct) {
//     return res.status(400).json({ error: "Product with the same name already exists." });
//   }

//   const newProduct = new NewProduct({
//     'name':name,
//     'type':type,
//     'cost':cost,
//     'description':description,
//   });
//   await newProduct.save();
  
//   res.status(201).json({ message: "New Product successfully", product: newProduct });
//   }catch(err){
//       res.status(500).json({ error: err.message });
//     }
// }


const getProducts = async (req, res) => {
  try {
      const products = await NewProduct.find({}).sort({createdAt : -1})
      console.log(products)
      res.status(200).json(products)
    } catch (error) {
      res.status(400).json({ error: 'Something wrong while getting products from backend' });
  }
  
};

const deleteOne = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name)
    // Use Mongoose to find and delete the document by name
    const result = await NewProduct.findOneAndDelete({ "name" : name });
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting Product:', error);
    res.status(500).json({ message: 'Error deleting Product' });
  }
  
};

const submitFilters = async (req,res) => {
  try{
    const {filters} = req.body;
    console.log(filters);
  } catch(error){

  }
}

module.exports = {add,deleteOne,getProducts,submitFilters}