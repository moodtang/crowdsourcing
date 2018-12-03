<template>
  <div class="userMission">
    <div id="myChart" style="width: 800px; height:300px"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Vue from 'vue'
  import  macarons from 'echarts/theme/macarons'
  //import  dark from 'echarts/theme/dark'
  Vue.prototype.$echarts=echarts

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      taskNumList:[11, 11, 15, 13, 12, 13, 10,11, 11, 15, 13,18],
      option :{
        title : {
          text: '每个月任务数量',
          subtext: '纯属虚构'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['任务量']
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLabel : {
              formatter: '{value} 单'
            }
          }
        ],
        series : [
          {
            name:'任务量',
            type:'line',
            data:this.taskNumList,
            markPoint : {
              data : [
                {type : 'max', name: '最大值'},
              ]
            },
            markLine : {
              data : [
                {type : 'average', name: '平均值'}
              ]
            }
          },
        ]
      }
  }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'),'macarons')
      //设置横轴
      //this.option.xAxis[0].data=this.dateValue
      // 绘制图表
      myChart.setOption(this.option)
      //设置纵轴数据
      myChart.setOption({
        series: [
          { name:'任务量', data: this.taskNumList},
         ]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
