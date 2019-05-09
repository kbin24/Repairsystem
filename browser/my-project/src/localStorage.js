const obj={username:'staff',type:'Admin'}
export default{
    save(items){
        window.localStorage.setItem(obj,JSON.stringify(items))//保存值
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(obj)||'[]')//获取值
    },
}