const mongoose=require('mongoose')
const Schema=mongoose.Schema

//创建Schema
const loginSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})



module.exports=Login=mongoose.model('logins',loginSchema)