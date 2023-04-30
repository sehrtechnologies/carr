const express= require('express')
const car = require('../models/carModel')
const router= express.Router()

router.get('/getallcars',async(req,res)=>{
    try {
        const cars=await car.find()
        res.send(cars)
    } catch (error) {
        res.send(error)
    }
})



module.exports=router