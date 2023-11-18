const Cart  = require('../models/cartModel')
const NewProduct = require('../models/newproductModel')
const mongoose = require('mongoose')


const sendCartItem = async (req, res) => {
    try{
        const {id,item} = req.body;
        console.log(req.body)
        const existingCart = await Cart.findOne({ 'id':id});
        console.log(existingCart)
    if (existingCart) {
        console.log(existingCart.item)
        const existingCartProduct = existingCart.item.includes(item);

        console.log(existingCartProduct)
        if (existingCartProduct){
            console.log('Bello')
            return res.status(404).json({message:'Product already added to cart successfully'})
        }
        else{
            console.log('Hello')
            existingCart.item.push(item);
            await existingCart.save();
            return res.status(200).json({ message: "Product added to existing cart successfully", product: existingCart });
        }
    }
    const newCartProduct = new Cart({
      'id':id,
      'item': [item],
    });
    console.log(newCartProduct)

    await newCartProduct.save();
    
    res.status(200).json({ message: "New Product added to cart successfully", product: newCartProduct });
    }catch(err){
        res.status(500).json({ error: err.message });
      }
}  

const deleteCartItem = async (req, res) => {
    try {
      const { id, item } = req.body;
  
      // Find the cart with the given 'id'
      const existingCart = await Cart.findOne({ 'id': id });
  
      if (!existingCart) {
        return res.status(404).json({ error: "Cart not found" });
      }
  
      // Check if the 'itemToDelete' exists in the 'item' array
      const itemIndex = existingCart.item.indexOf(item);
  
      if (itemIndex !== -1) {
        // If the item exists, remove it from the 'item' array
        existingCart.item.splice(itemIndex, 1);
  
        // Save the updated cart
        await existingCart.save();
  
        return res.status(200).json({ message: "Product removed from cart successfully", product: existingCart });
      } else {
        return res.status(404).json({ error: "Item not found in the cart" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


const getCartItems = async (req, res) => {
    const {id} = req.body;
  try {
      const cartProducts = await Cart.find({'id':id}).sort({createdAt : -1})
      const filteredCartProducts = cartProducts.filter(obj => obj.id === id);
      const namesToBeSearched = filteredCartProducts[0].item
      const totalProducts = await NewProduct.find({}).sort({createdAt : -1})
    //   const filteredItems = totalProducts.filter(item => filteredCartProducts.includes(item.name));
      const filteredItems = totalProducts.filter(obj => namesToBeSearched.includes(obj.name));
      res.status(200).json(filteredItems)
    } catch (error) {
      res.status(400).json({ error: 'Something wrong while getting products from backend' });
  }
  
};


module.exports = {sendCartItem,deleteCartItem,getCartItems}