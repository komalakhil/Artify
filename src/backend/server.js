require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require("cors")
const userRoute = require("./routes/user")
const customerRoute = require("./routes/customer")
const adminRoute = require("./routes/admin")
const newproductRoute = require("./routes/newproduct")
const deleteproductRoute = require("./routes/deleteproduct")
const cartRoute = require("./routes/cart")
const orderRoute = require('./routes/order')



const app = express()

app.use(cors());
app.use(express.json({limit:"10mb"}))

//middleware

app.use(express.json())

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users',userRoute)

app.use('/api/customer',customerRoute)

app.use('/api/admin',adminRoute)

app.use('/api/newproduct',newproductRoute)

app.use('/api/deleteproduct',deleteproductRoute)

app.use('/api/cart',cartRoute)

app.use('/api/order',orderRoute)





mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,() => {
            console.log('Database connected and Server Started!',process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })

