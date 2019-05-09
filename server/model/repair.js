const mongoose=require('mongoose')
const Schema=mongoose.Schema
const moment=require('moment')

function dateFormat(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month =
      date.getMonth(+1) < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return year + "-" + month + "-" + day;
  }

//创建Schema
const repairSchema=new Schema({
    username:{
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
    location:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    staff:{
        type:String
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: dateFormat(Date.now())
    }
})

const Repair=mongoose.model('repair',repairSchema)

// Repair.find({
//     mode:'已派单'
// },function(err,ret){
//     if(err){
//         return err
//     }
//     else{
//         console.log(ret)
//     }
// })


// const repair=new Repair({
//     name:'李一',
//     phone:'13610275518',
//     location:'南苑6#609',
//     content:'厕所灯坏了'
// })
// repair.save(function(err){
//     if(err){
//         return err
//     }
//     else{
//         console.log('staff 保存成功')
//     }
// })


module.exports=Repair