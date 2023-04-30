require('dotenv').config()
const express= require ('express')
const mongoose=require ('mongoose')
const cors = require('cors')

const connectDb = require('./config/config')
const carsRoute=require('./routes/carsRoute')
const usersRoute=require('./routes/usersRoute')
connectDb()

const app=express()
app.use(cors())

// app.use(express.json())
app.use(express.json({ extended: false }));
app.use(cors({origin:'*'}))

app.use('/api/cars',carsRoute)
app.use('/api/users',usersRoute)
app.use('/api/bookings',require('./routes/bookingsRoute'))
const port=process.env.PORT ||8080
app.listen(port,()=>{
    console.log(`server is running bro on---> ${port}`);
})