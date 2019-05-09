<template>
  <div>
    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>

      <el-table-column prop="location" label="维修地址" width="180" align="center"></el-table-column>

      <el-table-column prop="phone" label="联系电话" width="180" align="center"></el-table-column>

      <el-table-column prop="content" label="维修内容" width="180" align="center"></el-table-column>

      <el-table-column prop="mode" label="状态" width="100"></el-table-column>
      <!-- <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-button  type="text" @click="handleEdit(scope.$index, scope.row)">{{type}}</el-button>
          
        </template>
      </el-table-column>-->

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleRepairOrder(scope.$index, scope.row)">接单</el-button>
          <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">已完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import localStorage from '../../localStorage.js'
export default {
    inject: ["reload"], //执行完相应操作后 在then(res)里面 调用 this.reload()
  data() {
    return {
      tableData: []
      // type:'未接单'
    };
  },
  mounted() {
    this.getRepairOrder();
  },
  methods: {
    //获取维修单列表
    getRepairOrder() {
      const self = this;
      this.axios({
        method: "get",
        url: "http://localhost:3000/getRepairOrder",
        params: {
          username: localStorage.fetch().username
        }
      })
        .then(function(res) {
          // console.log(res.data[0].mode)
          self.tableData = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //维修员接单
    handleRepairOrder(index, row) {
      const self = this;
      this.axios({
        method: "post",
        url: "http://localhost:3000/handleRepairOrder",
        data: {
          _id: row._id
        }
      })
        .then(function(res) {
          if (res.data.status == 200) {
            self.$message({
              message: "接单成功",
              type: "success"
            });
          }
          self.type = "已接单";
          self.reload()
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.el-main {
  line-height: 0;
}
</style>
