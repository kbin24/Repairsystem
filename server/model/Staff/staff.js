const mongoose=require('mongoose')
const Schema=mongoose.Schema

//创建Schema
const staffSchema=new Schema({
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
    phone:{
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

const Staff=mongoose.model('staff',staffSchema)




module.exports=Staff