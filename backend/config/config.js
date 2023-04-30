const express= require ('express')
const mongoose = require ('mongoose')
require('dotenv').config()

const connectDb= async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGOURI,{
            useUnifiedTopology:true , 
        useNewUrlParser:true,
        })
        console.log("Connected to mongodb");
    } catch (error) {
        console.log("Not connected ");
    }
}

module.exports= connectDb