<template>
 
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="报修人">
        <el-col :span="6">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="联系电话">
        <el-col :span="6">
          <el-input v-model="form.phone"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="维修地点">
        <el-col :span="6">
          <el-input v-model="form.location"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="维修内容">
        <el-col :span="8">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="上传图片">
        <el-col :span="8">
          <el-upload
            class="upload-demo"
            action="http://localhost:3000/postRepair"
            :on-change="handleChange"
            :file-list="fileList"
            name="image"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="postRepair">提交</el-button>
      </el-form-item>
    </el-form>
    
 
  
</template>
<script>
import bus from "../../bus.js";
import localStorage from "../../localStorage.js";
export default {
  data() {
    return {
      username: localStorage.fetch().username,
      form: {
        name: "",
        phone: "",
        location: "",
        content: ""
      }
    };
  },

  methods: {
    //故障报修
    postRepair() {
      const self = this;
      // console.log(this.username)
      this.axios({
        method: "post",
        url: "http://localhost:3000/postRepair",
        data: {
          username: this.username,
          name: this.form.name,
          phone: this.form.phone,
          location: this.form.location,
          content: this.form.content,
          mode: "等待派单",
          type: "Repair"
        }
      })
        .then(function(res) {
          if ((res.data.status = 200)) {
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

<style lang="scss">
.repair {
  margin-top: 30px;
}
</style>
