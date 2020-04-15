<template>
  <div class="layout">
    这是：Layout 布局
    <el-row :gutter="20">
      <el-col :span="24">
        <div id="pieChart" class="grid-content bg-purple chart">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'BasicLayout',
    data(){
      return{
        resizeFun:null,
        //echarts实例
        myChart: "",
        pieOption:{
          title: {
            text: '南丁格尔玫瑰图',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '半径模式',
              type: 'pie',
              radius: [20, 110],
              center: ['25%', '50%'],
              roseType: 'radius',
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: true
                }
              },
              data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
              ]
            },
            {
              name: '面积模式',
              type: 'pie',
              radius: [30, 110],
              center: ['75%', '50%'],
              roseType: 'area',
              data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
              ]
            }
          ]
        }
      }
    },
    mounted () {
      //渲染图表
      this.drawCharts('pieChart',this.pieOption);
      //实现自适应
      this.resizeFun = ()=>{
        this.$echarts.init(document.getElementById('pieChart')).resize();
      }
      window.addEventListener('resize',this.resizeFun)
    },
    //移除事件监听，避免内存泄漏
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeFun)
      this.resizeFun = null
    },
    methods: {
      drawCharts (id,options) {
        let echarts = require('echarts');
        this.myChart = echarts.init(document.getElementById(id));
        this.myChart.setOption(options,true);
      }
    },
    //数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
    watch: {
      //观察option的变化
      pieOption: {
        handler(newVal, oldVal) {
          console.log(111)
          if(this.myChart){
            if (newVal) {
              this.myChart.setOption(newVal,true);
            } else {
              this.myChart.setOption(oldVal,true);
            }
          }else{
            this.drawCharts('pieChart',this.pieOption);
          }
        },
        deep: true, //对象内部属性的监听，关键。
        immediate: true,
      }
    },
  }

</script>

<style scoped>
  .layout{
    /*border: 1px solid red;*/
    position: relative;
  }
  .bg-purple {
    background: #d3dce6;
    text-align: center;
  }
  .grid-content {
    border-radius: 4px;
    height: 100px;
    line-height: 100px;
  }
  .chart{
    margin-top: 10px;
    border: 1px solid darkgrey;
    background: white;
    height: 500px;
  }
</style>
