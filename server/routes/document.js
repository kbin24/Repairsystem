//保存数据
function mysave(err,ret){
    if(err){
        return err
    }
    else{
        return res.json({
            status:200,
            result:ret
        })
    }
}

//查询数据
function myfind(err,ret){
    if(err){
        return err
    }
    if(ret==null){
        return res.json({
            status:3,
        })
    }
    else{
        return res.json({
            status:200,
            result:ret
        })
    }
}

function myfindOne(err,ret){
    if(err){
        return err
    }
    if(ret==null){
        return res.json({
            status:3,
        })
    }
    else{
        return res.json({
            status:200,
            result:ret
        })
    }
}

//删除数据
function myremove(err,ret){
    if(err){
        return err
    }
    else{
        return res.json({
            status:200,
            result:ret
        })
    }
}

//更新数据
function myupdate(err,ret){
    if(err){
        return err
    }
    else{
        res.json({
            status:200,
            result:ret
        })
    }
}

module.exports=document