const express = require('express')
const {getcustomers,signup} = require('../controllers/customerController')
const router = express.Router()

router.post('/signup',signup)
router.get('/getcustomers',getcustomers)

module.exports = router