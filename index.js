const express = require('express')
const app = express()
const config = require('./config')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const userRoutes = require('./Routes/UserRoutes')

app.use(cors())
app.use(express.json())

app.use(userRoutes)


async function start(){
    try{
        await mongoose.connect(config.url,{useNewUrlParser:true,useUnifiedTopology: true})
        app.listen(process.env.PORT || 8080)
        console.log(`Server is running`)
    }catch(e){
        console.log(e)
    }
    
}

start()