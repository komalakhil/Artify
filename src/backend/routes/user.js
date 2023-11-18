const express = require('express')
const {login,getusers} = require('../controllers/userController')
const router = express.Router()

router.post('/login',login)
router.post('/getusers',getusers)

module.exports = router