const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){//指定磁盘的路径
        cb(null,'./pulbic/upload')
    },
    filename:function(req,file,cb){//指定文件名和拓展名
        const arr=file.originalname.split('.')
        cb(null,arr[0]+'-'+Date.now()+'.'+arr[1])
    }
})

const upload=multer({storage:storage})

module.exports=upload