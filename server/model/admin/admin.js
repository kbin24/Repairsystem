const mongoose=require('mongoose')
const md5=require('md5')
const Schema=mongoose.Schema

//创建Schema
const adminSchema=new Schema({
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

const Admin=mongoose.model('admin',adminSchema)


// Admin.find({
//     type:'Admin'
// },function(err,ret){
//     if(err){
//         console.log('没有查询到')
//     }
//    else{
//        console.log('成功')
//        console.log(ret)
//    }
// })
 
// const admin=new Admin({
//     username:'admin',
//     name:'李四',
//     password:123456,
//     type:'Admin'
// })

// admin.save(function(err){//保存数据
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('meow')
//     }
// })

// Admin.updateOne({
//     username:'admin11111'},{
//     password:'121212'
// },{
//     multi:true
// },function(err,ret){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(ret)
//     }
// })

module.exports=Admin