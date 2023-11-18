const Order  = require('../models/orderModel')
const mongoose = require('mongoose')


const sendOrder = async (req, res) => {
    try{
        const {firstName,cardNumber,expiryDate,cvv,bankname,message,id,item} = req.body;
        console.log(req.body)
    const existingOrder = await Order.findOne({'id':id,'item':item});
        console.log(existingOrder)
    if (existingOrder) {
      return res.status(400).json({ error: "Order already placed" });
    }

    const newOrder = new Order({
        'firstname':firstName,
        'cardnumber':cardNumber,
        'expirydate':expiryDate,
        'cvv':cvv,
        'bankname':bankname,
        'message':message,
        'id':id,
        'item':item
    });

    console.log('Order',newOrder)


    // Save the product to the database
    await newOrder.save();
  
    res.status(201).json({ message: "New Product ordered successfully", order: newOrder });
    }catch(err){
        res.status(500).json({ error: err.message });
      }
}  



const getOrders = async (req, res) => {
    const {id} = req.body;
  try {
      const orders = await Order.find({'id': id}).sort({createdAt : -1})
      console.log(orders)
      res.status(200).json(orders)
    } catch (error) {
      res.status(400).json({ error: 'Something wrong while getting products from backend' });
  }
  
};

// const deleteOne = async (req, res) => {
//   try {
//     const { name } = req.body;
//     console.log(name)
//     // Use Mongoose to find and delete the document by name
//     const result = await NewProduct.findOneAndDelete({ "name" : name });
//     if (!result) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
    
//     res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting Product:', error);
//     res.status(500).json({ message: 'Error deleting Product' });
//   }
  
// };



module.exports = {sendOrder,getOrders}