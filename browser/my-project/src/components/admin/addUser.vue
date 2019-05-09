<template>
  <el-form :model="this.form" label-width="80px">
    <el-form-item label="用户名">
      <el-col :span="6">
        <el-input v-model="form.username" @change="check" placeholder="英文数字5~12位"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="真实姓名">
      <el-col :span="6">
        <el-input v-model="form.name" ></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="密码">
      <el-col :span="6">
        <el-input type="password" v-model="form.password" @change="checkpwd" placeholder="数字英文_.+5-12个字符"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="联系电话">
      <el-col :span="6">
        <el-input type="text" v-model="form.phone" @change="checkPhone"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="角色" v-model="form.type">
      <div class="addRadio">
        <input type="radio" name="type" value="Admin" @click="getRadioVal">管理员
        <input type="radio" name="type" value="Staff" @click="getRadioVal">维修员
        <input type="radio" name="type" value="User" @click="getRadioVal">报修用户
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :plain="true" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        name: "",
        password: "",
        phone: "",
        type: ""
      }
    };
  },
  methods: {
    getRadioVal() {
      var radioVal = event.target.value; //获取value的值
      this.form.type = radioVal;
    },

    check(value){
       const self = this;
      var pattern = /^[A-Za-z0-9]{5,12}$/;
      // console.log(pattern.test(self.username));
      if (pattern.test(self.form.username)) {
        return;
      } else {
        self.$message.error("只能输入英文数字5-12位");
      }
    },
    checkpwd(value){
      const self = this;
      var pattern = /^[A-Za-z0-9_.+]{5,12}$/;
      // console.log(pattern.test(self.username));
      if (pattern.test(self.form.password)) {
        return;
      } else {
        self.$message.error("只能输入英文数字_.+5-12位");
      }
    },
    checkPhone(value){
      const self=this
      var pattern=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
       if (pattern.test(self.form.phone)) {
        return;
      } else {
        self.$message.error("请输入正确的手机号码");
      }
    },

    onSubmit() {
      const self = this;
      this.axios({
        method: "post",
        url: "http://localhost:3000/addUser",
        data: {
          username: this.form.username,
          name: this.form.name,
          password: this.form.password,
          phone: this.form.phone,
          type: this.form.type
        }
      })
        .then(function(res) {
          console.log(res.data.status);
          if (res.data.status == 1) {
            self.$message.error("账号已存在");
          } 
          else {
            self.$message({
              message: "保存成功",
              type: "success"
            });
          }
        })
        .catch(function(err) {
          // console.log(err);
          self.$message.error("添加失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.addRadio {
  margin-left: 0px;
  font-size: 14px;
}
</style>
