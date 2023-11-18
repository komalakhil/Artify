const express = require('express')
const {sendCartItem,deleteCartItem,getCartItems} = require('../controllers/cartController')
const router = express.Router()

router.post('/sendcartitem',sendCartItem)
router.post('/deletecartitem',deleteCartItem)
router.post('/getcartitems',getCartItems)
module.exports = router