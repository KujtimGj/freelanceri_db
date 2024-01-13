require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const businessAuth = require('./routes/auth/b_authRoute')
const applyRoute =require('./routes/applyRoute')
const cityRoute = require("./routes/cityRoute")
const sortRoute = require("./routes/sortingRoute");
const freelancerAuth = require('./routes/auth/f_authRoute')
const categoryJobRoute = require("./routes/categoryJobRoute")
const trial = require("./routes/trialRoute")
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
app.use('/business',businessAuth)
app.use('/freelancer',freelancerAuth)
app.use('/apply',applyRoute)
app.use("/city",cityRoute)
app.use("/category-job", categoryJobRoute);
app.use("/sort",sortRoute)
app.use("/trial",trial)