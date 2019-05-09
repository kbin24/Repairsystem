const mongoose=require('mongoose')
const Schema=mongoose.Schema

//创建Schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now //设置时间默认值
    }
})

const User=mongoose.model('user',userSchema)


module.exports=User