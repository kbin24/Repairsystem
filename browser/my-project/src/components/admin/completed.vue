<template>
  <div>
    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column prop="name" label="维修员" width="150" align="center"></el-table-column>
      <el-table-column prop="phone" label="维修地址" width="150" align="center"></el-table-column>
      <el-table-column prop="location" label="维修内容" width="180" align="center"></el-table-column>
      <el-table-column prop="content" label="报修员" width="150" align="center"></el-table-column>
      <el-table-column prop="mode" label="评价内容" width="180" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">派单</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="请选择维修员" :visible.sync="dialogFormVisible" width="100%;">
      <el-form :model="form">
        <el-form-item label="维修员" :label-width="formLabelWidth">
          <el-select v-model="form.type" @change="selectGet" placeholder="请选择维修员">
            <el-option label="staff 负责南苑" value="staff"></el-option>
            <el-option label="staff1 负责北苑" value="staff2"></el-option>
          </el-select>
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
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        type: ""
      },
      formLabelWidth: "80px"
    };
  },
  mounted() {
    this.getApproval();
  },
  methods: {
    selectGet() {
      console.log(this.form.type);
    },
    //获取审批单列表
    getApproval() {
      const self = this;
      this.axios({
        method: "get",
        url: "http://localhost:3000/getApproval"
        // params: {
        //   mode:'已完成'
        // }
      })
        .then(function(res) {
          // console.log(res.data[0].mode)
          self.tableData = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    //派单
    handleEdit(index, row) {
      const self = this;
      self._id = row._id;
      // console.log(index, row._id);
      self.dialogFormVisible = true;
      console.log(self.form.type);
      // this.axios({
      //   method: "post",
      //   url: "http://localhost:3000/handleEdit",
      //   data: {
      //     _id:row._id
      //   }
      // }).then(function(res){
      //  if(res.data.status==200){
      //     self.$message({
      //         message: "派单成功",
      //         type: "success"
      //       });
      //  }

      // })
    },
    //审批单编辑
    postOrder() {
      //  const _id=this._id
      const self = this;
      this.axios({
        method: "post",
        url: "http://localhost:3000/postOrder",
        data: {
          _id: this._id,
          staff: self.form.type
        }
      }).then(function(res) {
        if (res.data.status == 200) {
          self.$message({
            message: "派单成功",
            type: "success"
          });
        }
        self.dialogFormVisible = false;
        self.form.type=''
      });
    },

    //审批单删除
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>


<style lang="scss">
.el-main {
  line-height: 0;
}
</style>



