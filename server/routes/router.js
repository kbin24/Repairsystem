const express = require('express')
const fs=require('fs')
// const multer=require('../multer/multer')
const multer=require('multer')
// const upload=multer({dest:'upload'})
const upload=require('../multer/multer')
const md5 = require('md5')

const router = express.Router() //引入路由\

const User = require('../model/User/user')
const Staff = require('../model/Staff/staff')
const Admin = require('../model/admin/admin')
const Repair = require('../model/repair')


/**
 * status：0  账号密码错误 密码错误 账号错误
 * status：1  账号已存在
 * status：2  两次输入不一样 用于修改密码
 * status: 3  没有查询到
 * status：200  保存成功
 * 
 * status：
 */

//登录
router.post("/login", function (req, res) {
    const type = req.body.type //Admin Staff
    const param = {
        username: req.body.username,
        password: md5(md5(req.body.password)),
    }
    function myfunction(err, ret) {
        if (err) {
            return err
        }
        if (ret == null) {
            return res.json({
                status: '0',
                msg: '账号密码错误'
            })
        }
        else {
            // console.log(ret)
            return res.json(ret)
        }
    }
    if (type == 'Admin') {
        Admin.findOne(param, myfunction)
    }
    if (type == 'User') {
        User.findOne(param, myfunction)
    }
    if (type == 'Staff') {
        Staff.findOne(param, myfunction)
    }

})

//添加账号
router.post("/addUser", function (req, res) {
    const type = req.body.type
    if (type == 'Admin') {
        Admin.findOne({ username: req.body.username }, function (err, ret) {
            if (err) {
                return err
            }
            else{
                if (ret != null) {
                    return res.json({
                        status: 1,
                        msg: '账号已经存在'
                    })
                }
                else {
                    const newUser = new Admin({
                        username: req.body.username,
                        name: req.body.name,
                        password: md5(md5(req.body.password)),
                        phone: req.body.phone,
                        type: req.body.type
                    })
                    newUser.save(function (err) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            return res.json({
                                status: 200,
                                msg: '保存成功',
                            })
                        }
                    })
                }
            }
        })
    }
    if (type == 'User') {
        User.findOne({ username: req.body.username }, function (err, ret) {
            if (err) {
                return err
            }
            else{
                if (ret != null) {
                    return res.json({
                        status: 1,
                        msg: '账号已经存在'
                    })
                }
                else {
                    const newUser = new User({
                        username: req.body.username,
                        name: req.body.name,
                        password: md5(md5(req.body.password)),
                        phone: req.body.phone,
                        type: req.body.type
                    })
                    newUser.save(function (err) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            return res.json({
                                status: 200,
                                msg: '保存成功',
                            })
                        }
                    })
                }
            }
        })
    }
    if (type == 'Staff') {
        Staff.findOne({ username: req.body.username }, function (err, ret) {
            if (err) {
                return err
            }
            else{
                if (ret != null) {
                    return res.json({
                        status: 1,
                        msg: '账号已经存在'
                    })
                }
                else {
                    const newUser = new Staff({
                        username: req.body.username,
                        name: req.body.name,
                        password: md5(md5(req.body.password)),
                        phone: req.body.phone,
                        type: req.body.type
                    })
                    newUser.save(function (err) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            return res.json({
                                status: 200,
                                msg: '保存成功',
                            })
                        }
                    })
                }
            }
        })
    }


})

//获取管理员列表
router.get("/getAdminList", function (req, res) {
    // console.log(req.query)
    Admin.find({
        type: 'Admin'
    }, function (err, ret) {
        if (err) {
            return err
        }
        else {
            return res.json(ret)
        }
    })
})

//获取报修用户列表
router.get("/getUserList", function (req, res) {
    // console.log(req.query)
    User.find({
        type: 'User'
    }, function (err, ret) {
        if (err) {
            return err
        }
        else {
            return res.json(ret)
        }
    })
})

//获取维修员列表
router.get("/getStaffList", function (req, res) {
    // console.log(req.query)
    Staff.find({
        type: 'Staff'
    }, function (err, ret) {
        if (err) {
            return err
        }
        else {
            return res.json(ret)
        }
    })
})

//修改密码
router.post("/changePwd", function (req, res) {
    const type = req.body.type
   
    if (type == 'Admin') {
        Admin.updateOne({
            username: req.body.username
        }, {
                password: req.body.password
            }, {
                multi: true
            }, function (err, ret) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.json({
                        status: 200,
                        result: ret
                    })
                }
            })
    }
    if (type == 'User') {
        User.updateOne({
            username: req.body.username
        }, {
                password: req.body.password
            }, {
                multi: true
            }, function (err, ret) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.json({
                        status: 200,
                        result: ret
                    })
                }
            })
    }
    if (type == 'Staff') {
        Staff.updateOne({
            username: req.body.username
        }, {
                password: req.body.password
            }, {
                multi: true
            }, function (err, ret) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.json({
                        status: 200,
                        result: ret
                    })
                }
            })
    }
})

//用户故障报修
router.post("/postRepair",upload.single('image'),function (req, res) {
    // console.log('成功')
    // res.send({err:0,res:req.file})
    console.log(req.file)
    const newRepair = new Repair({
        username:req.body.username,
        name: req.body.name,
        phone: req.body.phone,
        location: req.body.location,
        content: req.body.content,
        mode: req.body.mode,
        type: req.body.type
    })
    newRepair.save(function (err, ret) {
        if (err) {
            return err
        }
        else {
            return res.json({
                status: 200,
                result: ret
            })
        }
    })
})

//获取用户故障报修表
router.get("/getRepairList", function (req, res) {
    // console.log(req.query.username)
    Repair.find({
        type: 'Repair',
        username:req.query.username
    }, function (err, ret) {
        if (err) {
            return err
        }
        else {
            return res.json(ret)
        }
    })
})

//获取审批单
router.get('/getApproval',function(req,res){
    Repair.find({
        mode:'已派单',
        mode:'等待派单'
    }, function (err, ret) {
        if (err) {
            return err
        }
        else {
            // console.log(ret)
            return res.json(ret)
        }
    })
})

//审批派单
router.post('/postOrder',function(req,res){
    // console.log(req.body._id)
    Repair.updateOne({
        _id: req.body._id
    }, {
            mode: '已派单',
            staff:req.body.staff
        }, {
            multi: true
        }, function (err, ret) {
            if (err) {
                return err
            }
            else {
                return res.json({
                    status: 200,
                    result: ret
                })
            }
        })
})

//获取维修单列表
router.get('/getRepairOrder',function(req,res){
    Repair.find({
        mode:'已派单',
        staff:req.query.username
    }, function (err, ret) {
        if (err) {
            return err
        }
        else {
            return res.json(ret)
        }
    })
})

//维系员接单
router.post('/handleRepairOrder',function(req,res){
    Repair.updateOne({
        _id: req.body._id
    }, {
            mode: '上门维修中',
        }, {
            multi: true
        }, function (err, ret) {
            if (err) {
               return err
            }
            else {
                return res.json({
                    status: 200,
                    result: ret
                })
            }
        })
})

//获取当日维修单数
router.get('/getTodyRepairOrder',function(req,res){
    // console.log(req.query.date)
    Repair.find({
        date:req.query.date
    },function(err,ret){
        if(err){
            return err
        }
        else{
            // console.log('成功')
            // console.log(ret)
            return res.json(ret)
        }
    })
})

//获取总的维修单数
router.get('/getAllRepairOrder',function(req,res){
    Repair.find({
        type:'Repair'
    },function(err,ret){
        if(err){
            return err
        }
        else{
            // console.log(ret)
            return res.json(ret)
        }
    })
})

//删除管理员
router.post('/deleteAdmin',function(req,res){
    console.log(req.body.username)
    Admin.remove({
        username:req.body.username
    },function(err,ret){
        if(err){
            return err
        }
        else{
            return res.json({
                status:200,
                msg:'成功删除管理员',
                result:ret
            })
        }
    })
})

//删除报修用户 deleteUser
router.post('/deleteUser',function(req,res){
    // console.log(req.body.username)
    User.remove({
        username:req.body.username
    },function(err,ret){
        if(err){
            return err
        }
        else{
            return res.json({
                status:200,
                msg:'成功删除管理员',
                result:ret
            })
        }
    })
})

//删除维修员 deleteStaff
router.post('/deleteStaff',function(req,res){
    // console.log(req.body.username)
    Staff.remove({
        username:req.body.username
    },function(err,ret){
        if(err){
            return err
        }
        else{
            return res.json({
                status:200,
                msg:'成功删除管理员',
                result:ret
            })
        }
    })
})
//测试photo
router.post('/upload',upload.single('image'),function(req,res){
    console.log(req.file)
})

//导出router
module.exports = router

