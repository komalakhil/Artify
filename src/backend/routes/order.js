const express = require('express')
const {sendOrder,getOrders} = require('../controllers/orderController')
const router = express.Router()

router.post('/sendorder',sendOrder)
router.get('/getorders',getOrders)
module.exports = router