<template>
    <div class="indexPage">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <span>姓名:</span><span>燕培浩</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <span>性别:</span><span>man</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <span>年龄:</span><span>18</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div id="barChart" class="grid-content bg-purple chart">

          </div>
        </el-col>
        <el-col :span="12">
          <div id="lineChart" class="grid-content bg-purple chart">

          </div>
        </el-col>
      </el-row>
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
      name: "Index",
      data(){
        return{
          resizeFun:null,
          barOption:{
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          },
          lineOption:{
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {}
            }]
          },
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
        this.drawCharts('barChart',this.barOption);
        this.drawCharts('lineChart',this.lineOption);
        this.drawCharts('pieChart',this.pieOption);

        //实现自适应
        this.resizeFun = ()=>{
          // let echarts = require('echarts');
          this.$echarts.init(document.getElementById('barChart')).resize(); //这里的myChart就是要自适应的图表容器Id
          this.$echarts.init(document.getElementById('lineChart')).resize();
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
          let myChart = echarts.init(document.getElementById(id));
          myChart.setOption(options);
        }
      }
    }
</script>

<style scoped lang="less">
  .indexPage{
    /*border: 1px solid red;*/
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
