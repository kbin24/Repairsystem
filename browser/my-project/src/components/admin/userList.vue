<template>
  <div>
    <!-- <el-row class="demo-autocomplete">
      <el-col :span="12">
        <el-autocomplete
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入搜索内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </el-row>-->
    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column prop="username" label="用户名" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="真实姓名" width="150" align="center"></el-table-column>
      <el-table-column prop="type" label="权限" width="180" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  inject: ["reload"], //执行完相应操作后 在then(res)里面 调用 this.reload()
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    //获取Admin列表数据
    getData() {
      const self = this;
      this.axios({
        method: "GET",
        url: "http://localhost:3000/getUserList",
        params: {
          type: "User"
        }
      })
        .then(function(res) {
          // console.log(res.data)
          self.tableData = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleDelete(index, row) {
      // console.log(row.username)
      const self = this;
      self
        .$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          this.axios({
            method: "post",
            url: "http://localhost:3000/deleteUser",
            data: {
              username: row.username
            }
          })
            .then(function(res) {
              if ((res.data.status = 200)) {
                self.$message({
                  message: "删除成功",
                  type: "success"
                });
              }
              self.reload();
            })
            .catch(function(err) {
              // console.log(err);
              self.$message.error("删除失败");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
  }
};
</script>


<style lang="scss">
.el-main {
  line-height: 0;
}
</style>

