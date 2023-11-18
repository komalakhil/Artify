const express = require('express')
const {adminsignup} = require('../controllers/adminController')
const router = express.Router()

router.post('/adminsignup',adminsignup)
module.exports = router