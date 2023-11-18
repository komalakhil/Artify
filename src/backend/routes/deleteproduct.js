const express = require('express')
const {deleteProduct} = require('../controllers/deleteproductController')
const router = express.Router()

router.delete('/:id',deleteProduct)


module.exports = router