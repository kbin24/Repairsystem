<template>
  <div>
    <div>
      <el-row>
        <el-button type="success" class="number mymargin">当日数据:</el-button>
        <el-button type="success" class="mymargin" plain>
          <span class="number">{{repairOrder}}</span>新增维修单
        </el-button>
        <el-button type="success" class="mymargin" plain>
          <span class="number">{{spareParts}}</span>备品使用
        </el-button>
      </el-row>
      <el-row>
        <el-button type="primary" class="number mymargin">总数据：</el-button>
        <el-button type="success" class="mymargin" plain>
          <span class="number">{{AllOrder}}</span>维修单
        </el-button>
        <el-button type="success" class="mymargin" plain>
          <span class="number">{{AllParts}}</span>备品使用
        </el-button>
      </el-row>
    </div>

    <div id="myChart"></div>
  </div>
</template>
<script>
import monment from "moment";
export default {
  data() {
    return {
      option: {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["维修单", "备品使用"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "维修单",
            type: "line",
            // stack: '总量',
            data: [25, 30, 20, 50, 15, 34, 60, 25, 30, 20, 50, 15, 34, 60]
          },
          {
            name: "备品使用",
            type: "line",
            // stack: '总量',
            data: [27, 32, 20, 55, 15, 35, 63, 23, 31, 22, 53, 17, 34, 60]
          }
        ]
      },
      repairOrder: "", //新增维修单
      spareParts: "0", //当日备品使用
      AllOrder: "", //总的维修单
      AllParts: "14" //总的备品使用
    };
  },
  mounted() {
    this.drawLine();
    this.getTodyRepairOrder();
    this.getAllRepairOrder()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(this.option);
    },
    getTodyRepairOrder() {
      // console.log(monment(new Date()).format('YYYY-MM-DD'))
      const self = this;
      const date = monment(new Date()).format("YYYY-MM-DD");
      this.axios({
        method: "get",
        url: "http://localhost:3000/getTodyRepairOrder",
        params: {
          date:date
        }
      })
        .then(function(res) {
          // console.log(res.data.length)
          self.repairOrder = res.data.length
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getAllRepairOrder(){
        const self = this;
      // const date = monment(new Date()).format("YYYY-MM-DD");
      this.axios({
        method: "get",
        url: "http://localhost:3000/getAllRepairOrder",
        params: {
          type:'Repair'
        }
      })
        .then(function(res) {
          // console.log(res)
          self.AllOrder = res.data.length
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.el-button {
  width: 147px;
}
.btn {
  background-color: orange;
  border: 0px solid white;
  font-size: 25px;
}
.number {
  font-size: 25px;
}
.mymargin {
  margin-right: 30px;
}
#myChart {
  margin-top: 30px;
  width: 80%;
  height: 500px;
}
</style>
