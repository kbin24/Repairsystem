const express=require('express')
const md5=require('md5')
// const bodyParser=require('body-parser')//body-parser插件，用来获取post请求内容
const mongoose=require('mongoose')
const bodyParser=require('body-parser')


//admin
const adminModel=require('./model/admin/admin')
var addUser=require('./routes/admin/addUser')
//User
const userModel=require('./model/User/user')

//Staff
const staffModel=require('./model/Staff/staff')

const router=require('./routes/router')
const modelLogin=require('./model/login')
const repairModel=require('./model/repair')//故障报修单Schema

const app=express()



//连接本地数据库
mongoose.connect('mongodb://localhost/MyDB',{useNewUrlParser:true}).then(function(){
    console.log('MongoDb Connect')
}).catch(function(){
    console.log(err)
})

//使用body-parser 中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//实现跨域
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", "true"); 
 // res.header('Access-Control-Allow-Origin', '*');
 　　res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
 　　res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
 　　res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
 　　if (req.method == 'OPTIONS') {
 　　　　res.send(200); /*让options请求快速返回*/
 　　} else {
 　　　　next();
 　　}
 })



app.get('/',function(req,res){
    res.end('welocome')
})


//使用routes
app.use(router)
app.use(modelLogin)

app.use(adminModel)
app.use(userModel)
app.use(staffModel)
app.use(repairModel)


app.listen(3000,function(){
    console.log('running...')
})
