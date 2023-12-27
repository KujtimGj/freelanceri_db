require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const applyRoute =require('./routes/applyRoute')

const app = express()
app.use(express.json())
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

app.use('/posts',postRoutes)
app.use('/user',userRoutes)
app.use('/apply',applyRoute)
