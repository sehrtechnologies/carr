const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    username : {type:String , required: true,unique: 'That username is already taken'},
    password : {type:String , required: true}
})

const userModel=mongoose.model('users',userSchema)
module.exports=userModel