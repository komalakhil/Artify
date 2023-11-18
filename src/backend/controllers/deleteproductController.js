const NewProduct  = require('../models/newproductModel')
const mongoose = require('mongoose')

const deleteProduct =  async (req, res) => {
  try {
    // Extract the record identifier (id) from the request parameters
    const { id } = req.params;
    console.log(id);

    // Use Mongoose to find and delete the record by its unique identifier
    const deletedProduct = await NewProduct.findByIdAndDelete(id);

    if (!deletedProduct) {
      // If the record with the given id doesn't exist, return a 404 Not Found response
      return res.status(404).json({ message: 'Record not found' });
    }

    // Return a success response if the record was deleted
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    // Handle any errors and return an error response
    console.error('Error deleting record:', error);
    res.status(500).json({ error: 'An error occurred while deleting the record' });
  }
};


module.exports = {deleteProduct}