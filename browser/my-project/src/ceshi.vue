<template>
  <div class="Home">
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="myChart"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option:{
        title: { text: "" },
        tooltip: {}, //提示框的相关行为
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
    
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(this.option);
    }
  }
};
</script>

<style>
#myChart{
  width: 300px;
  height: 300px;
 
}

</style>
