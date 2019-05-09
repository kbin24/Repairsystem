const express=require('express')

const router=express.Router() //引入路由\
const Login=require('../model/login')

router.get('/login',function(req,res){
    res.json({msg:'login index'})
})

router.post("/register",function(req,res){
    Login.findOne({
        username:req.body.username
    },function(err,ret){
        if(err){
            console.log(err)
        }
       else{
        // const admin=new Login({
        //     username:req.body.username,
        //     password:req.body.password,
        //     type:req.body.type
        // })
        // admin.save(function(err){//保存数据
        //     if(err){
        //         console.log(err)
        //     }
        //     else{
        //         console.log('存储成功')
        //     }
        // })
        console.log('成功')
        res.json(ret)
       }
    })
    
})



//导出router
module.exports=router