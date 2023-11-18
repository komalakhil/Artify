const express = require('express')
const {add,deleteOne,getProducts,submitFilters} = require('../controllers/newproductController')
// const { adminVerifyToken } = require('../middlewares/verifyToken')
const router = express.Router()

router.post('/add',add)
router.post('/delete',deleteOne)
router.get('/getproducts',getProducts)
router.post('/submit-filters',submitFilters)


module.exports = router