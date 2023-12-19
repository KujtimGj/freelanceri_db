const express = require('express');
require('dotenv').config()
const app = express()
const mongoose = require('mongoose');
app.use(express.json())
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const multer = require('multer');
const cors = require('cors');
const applyRoute =require('./routes/applyRoute')

app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(process.env.PORT)
        console.log("Connected to db")
    })
})
.catch((error)=>{
    console.log(error)
})

//routes
app.use('/posts',postRoutes)
app.use('/user',userRoutes)
app.use('/apply',applyRoute)
