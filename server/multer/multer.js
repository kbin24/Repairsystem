const multer=require('multer')
const fs=require('fs')

const createFolder=function(folder){
    try{
        fs.accessSync(folder)
    }catch(e){
        fs.mkdirSync(folder)
    }
}
//照片存储路径
const uploadFoler='E:/毕业设计/browser/my-project/public/'
createFolder(uploadFoler)
const storage=multer.diskStorage({
   destination:function(req,file,cb){
       cb(null,uploadFoler)
   },
   filename:function(req,file,cb){
       cb(null,file.fieldname+'-'+Date.now()+'.png')
   }
})


const upload=multer({storage:storage})

module.exports=upload