<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="100px"
    class="demo-dynamic"
  >
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :label="'材料' + (index+1)"
      :key="domain.key"
      :prop="'domains.' + (index+1) + '.value'"
    >
      <el-row :gutter="20">
        <el-col :span="6">
             <el-input v-model="domain.value" @change="checkValue" placeholder="材料名称"></el-input>
        </el-col>
        <el-col :span="5">
           <el-input v-model="domain.number" placeholder="材料数量"></el-input>
        </el-col>
        <el-col :span="3">
         <el-button type="danger" @click.prevent="removeDomain(domain)" class="btn">删除</el-button>
        </el-col>
       
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="addDomain">新增材料</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: "",
            number:'',
          }
        ],
        email: ""
      }
    };
  },
  mounted(){
    // console.log(this.domains.value)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
      console.log('domains.' + (index+1) + '.value')
    },
    checkValue(){
      console.log(this.domains.value)
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 50px;
}
</style>
