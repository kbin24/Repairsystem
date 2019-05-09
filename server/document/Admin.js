
const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/MyDB')//连接本地数据库

//设计文档结构（表结构) 字段名称就是表结构中的属性名称
const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

//将文档结构发布为模型 mongoose.model方法就是用来将一个架构发布为model
//第一个参数：传入一个大写单数字符串来表示你的数据库名称 mongoose会自动将大写名词的字符串生成 小写复数 的结合名称

const Admin = mongoose.model('Admin', adminSchema)


//1.增加数据 
//先new一个数据出来  再调用save()方法

// const admin=new Admin({
//     username:'admin',
//     password:'123456',
//     type:'管理员'
// })

// admin.save(function(err){//保存数据
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('meow')
//     }
// })


//查询数据
// Admin.find({
//     username:'admin'
// },function(err,ret){
//     if(err){
//         console.log('没有查询到')
//     }
//    else{
//        console.log('成功')
//        console.log(ret)
//    }
// })
// Admin.findOne({
//     username:'admin'
// },function(err,ret){
//     if(err){
//         console.log(err)
//     }
//    else{
//        console.log(ret)
//    }
// })


// 删除数据
// Admin.remove({
//     username:'admin'
// },function(err,res){
//     if(err){
//         console.log(删除失败)
//     }
//     else{
//         console.log('删除成功')
//     }
// })


// 更新数据
Admin.update({
    username:'admin'
},{
    password:'123123'
},function(err,res){
    if(err){
        console.log(err)
    }
    else{
        console.log('更新成功')
    }
})
  