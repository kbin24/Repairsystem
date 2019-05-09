<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in repairs" :key="item">
        <el-card shadow="always">
          <div class="ceshi">
            <span class="right">维修内容：{{item.content}}</span>
          </div>
          <div class="ceshi">
            <span>维修地点：{{item.location}}</span>
          </div>
          <div class="ceshi">
            <span>报修时间：{{dateFormat(item.date)}}</span>
          </div>
          <div class="ceshi">
            <span class="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态：{{item.mode}}</span>
          </div>
          <div class="ceshi">
            <span class="right" v-if="false">&nbsp;&nbsp;维修人：{{item.staff}}</span>
          </div>
          <div class="btn">
            <el-button type="text" class="button" @click="comment">评价</el-button>
            <el-button type="text" class="button"  @click="deleteOrder">删除</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="评价" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="form">
        <el-form-item label="" :label-width="formLabelWidth">
          <el-input type="textarea"  placeholder="请输入评价内容" v-model="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="postOrder">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import localStorage from "../../localStorage.js";

export default {
  data() {
    return {
      repairs: [],
      dialogFormVisible: false,
      textarea: "",
      formLabelWidth: "80px"
    };
  },
  mounted() {
    this.getRepairList();
  },
  methods: {
    //获取维修单
    getRepairList() {
      const self = this;
      this.axios({
        method: "GET",
        url: "http://localhost:3000/getRepairList",
        params: {
          type: "Repair",
          username: localStorage.fetch().username
        }
      })
        .then(function(res) {
          self.repairs = res.data;
          console.log(self.repairs);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    dateFormat(time) {
      const date = new Date(time);
      const year = date.getFullYear();
      const month =
        date.getMonth(+1) < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return year + "-" + month + "-" + day;
    },
    //用户评价
    comment() {
      const self = this;
      self.dialogFormVisible = true;
    },

    //删除订单
    deleteOrder(){
      console.log(item.username)
      
    }
  }
};
</script>


<style lang="scss">
.is-always-shadow {
  margin-right: -10px;
}
.myel-col {
  margin-right: -180px;
  margin-left: -50px;
}
.el-card__body {
  height: 100px;
}
.ceshi {
  margin-bottom: 30px;
}
.btn {
  padding: 5px 5px 20px 5px;
  float: right;
}
</style>
