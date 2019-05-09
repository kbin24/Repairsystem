<template>
  <div>
    <div class="login-bcg">
      <div class="login">
        <div class="school_logo">
          <div class="nothing"></div>
          <img src="./assets/校徽.png" alt>
        </div>
        <span class="login_text">后勤服务中心</span>
        <input
          type="text"
          placeholder="请输入账号"
          v-model="username"
          @change="check"
          class="login_input"
        >
        <br>
        <input
          type="password"
          placeholder="请输入密码"
          @change="checkPwd"
          v-model="password"
          class="login_input"
        >
        <br>
        <div class="radio">
          <input type="radio" name="type" value="Admin" @click="getRadioVal">管理员
          <input type="radio" name="type" value="Staff" @click="getRadioVal">维修员
          <input type="radio" name="type" value="User" @click="getRadioVal">报修用户
        </div>
        <input type="button" value="登录" class="login_btn" @click="Login">
        <br>
        <div class="login_revise">
          <el-button type="text" @click="dialogFormVisible=true">修改密码</el-button>
        </div>
      </div>
    </div>

    <!-- Form -->
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="35%">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" v-model="form.type" :label-width="formLabelWidth">
          <input type="radio" name="type" value="Admin" @click=" getFormRadioVal">管理员
          <input type="radio" name="type" value="Staff" @click=" getFormRadioVal">维修员
          <input type="radio" name="type" value="User" @click=" getFormRadioVal">报修用户
        </el-form-item>

        <el-form-item label="新密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" type="password" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" :label-width="formLabelWidth">
          <el-input v-model="form.confirmpwd" type="password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changePwd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import bus from "./bus.js";
import localStorage from './localStorage.js'
export default {
  data() {
    return {
      username: "",
      password: "",
      type: "",
      result: "",
      mytype: "", //用来login.vue 和 Home.vue组件通信时保存用户的type类型
      dialogFormVisible: false,
      form: {
        username: "",
        password: "",
        confirmpwd: "",
        type: ""
      },
      formLabelWidth: "80px"
    };
  },
  destroyed() {
    let self = this; //定一个变量指向vue实例
    bus.$emit("sendMsg", {
      msg: "来自login.vue",
      type: this.mytype,
      result: this.result
    });
  },
  methods: {
    getRadioVal(event) {
      var radioVal = event.target.value; //获取value的值
      this.type = radioVal;
      // console.log(this.form.type)
    },
    getFormRadioVal(event) {
      var radioVal = event.target.value; //获取value的值
      this.form.type = radioVal;
      // console.log(this.form.type);
    },
    check(value) {
      const self = this;
      var pattern = /^[A-Za-z0-9]{5,12}$/;
      // console.log(pattern.test(self.username));
      if (pattern.test(self.username)) {
        return;
      } else {
        self.$message.error("只能输入英文数字5-12位");
      }
    },
    checkPwd(value) {
      const self = this;
      var pattern = /^[A-Za-z0-9_.+]{5,12}$/;
      // console.log(pattern.test(self.username));
      if (pattern.test(self.password)) {
        return;
      } else {
        self.$message.error("只能输入英文数字_.+5-12位");
      }
    },
    //登录函数
    Login() {
      let self = this; //定一个变量指向vue实例
      this.axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: {
          username: this.username,
          password: this.password,
          type: this.type
        }
      })
        .then(function(res) {
          self.result = res.data.username;
          self.mytype = res.data.type;
          const type = res.data.type;
          const items={username:res.data.username,type:res.data.type}
          // console.log(items)
          self.$store.commit(('setUser'),{username:res.data.username})
          self.$store.commit(('setUser'),{type:res.data.type})
          localStorage.save(items)
          if (res.data.status == 0) {
           
            self.$message.error("账号或密码或类型错误");
          } else {
            if (type == "Admin") {
              self.$router.push({ path: "/Home/index" });
            }
            if (type == "User") {
              self.$router.push({ path: "/Home/MyRepair" });
            }
            if (type == "Staff") {
              self.$router.push({ path: "/Home/repairOrder" });
            }
          }
        })
        .catch(function(err) {
          self.$message.error("登录失败");
        });
    },
    //修改密码
    changePwd() {
      const self = this;
      this.axios({
        method: "post",
        url: "http://localhost:3000/changePwd",
        data: {
          username: this.form.username,
          type: this.form.type,
          password: this.form.password
        }
      })
        .then(function(res) {
          if (res.data.status == 200) {
            self.$message({
              message: "密码修改成功",
              type: "success"
            });
          }
          self.dialogFormVisible = false;
        })
        .catch(err => {
          self.$message.error("密码修改不成功");
        });
    }
  }
};
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}
.login-bcg {
  height: 400px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -200px 0 0 -200px;
  background-color: rgb(41, 250, 250);
}
.login {
  height: 340px;
  width: 340px;
  margin: 30px 30px;
  background-color: #fff;
  //   opacity: ;
}

.nothing {
  width: 100%;
  height: 20px;
}

.school_logo {
  text-align: center;
}

.login_text {
  padding-top: 2opx;
  display: block;
  text-align: center;
  font-family: "楷体", "微软雅黑";
  font-size: 26px;
}

.login_input {
  width: 200px;
  height: 30px;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 30px;
  border-radius: 3px;
  border: 1px solid rgb(179, 176, 171);
  border-style: none none solid none;
}

.radio {
  width: 200px;
  height: 30px;
  margin-left: 70px;
  margin-right: 70px;
  font-size: 10px;
  margin-top: 5px;

  //   padding-left: 5px;
}

.login_btn {
  width: 200px;
  height: 30px;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 10px;
  background-color: rgb(41, 250, 250);
  border: none;
  border-radius: 3px;
}

.login_revise {
  float: right;
  margin-top: -15px;
  margin-right: 10px;
  font-size: 8px;
  color: rgb(41, 250, 250);
}
.login_revise a {
  text-decoration: none;
}
</style>
