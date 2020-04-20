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
          <button @click="change1('change')" class="btn">change1</button>
          <button @click="change1('init')" class="btn">init1</button>
          <div id="barChart" class="grid-content bg-purple chart">

          </div>
        </el-col>
        <el-col :span="12">
          <button @click="change2('change')" class="btn">change2</button>
          <button @click="change2('init')" class="btn">init2</button>
          <div id="lineChart" class="grid-content bg-purple chart">

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
        }
      },
      mounted () {
        //渲染图表
        this.drawCharts('barChart',this.barOption);
        this.drawCharts('lineChart',this.lineOption);
        //实现自适应
        this.resizeFun = ()=>{
          this.$echarts.init(document.getElementById('barChart')).resize(); //这里的myChart就是要自适应的图表容器Id
          this.$echarts.init(document.getElementById('lineChart')).resize();
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
          //echartjs执行太快，css的百分比还没来得及反应，js就已经执行完了，所以把百分比转成了px。
          //解决方法：将初始化代码放在setTimeout中
          setTimeout(function(){
            let echarts = require('echarts');
            let myChart = echarts.init(document.getElementById(id));
            myChart.setOption(options);
          },0)
        },
        setOption(id,options) {
            let echarts = require('echarts');
            let myChart = echarts.init(document.getElementById(id));
            myChart.setOption(options);
        },
        change1 (text){
          if(text=='change'){
            this.barOption.series[0].data = [6,16,26,36,46,56];
          }else{
            this.barOption.series[0].data = [5, 20, 36, 10, 10, 20];
          }
        },
        change2 (text){
          if(text=='change'){
            this.lineOption.series[0].data = [600,1600,2600,3600,600,500,3400];
          }else{
            this.lineOption.series[0].data = [820, 932, 901, 934, 1290, 1330, 1320];
          }
        }
      },
      watch: {
        barOption:{
          handler(newVal,oldVal){
            // console.log(newVal,oldVal)
            if(newVal){
              this.setOption('barChart',newVal)
            }else{
              this.setOption('barChart',oldVal)
            }
          },
          deep:true,
        },
        lineOption:{
          handler(newVal,oldVal){
            // console.log(newVal,oldVal)
            if(newVal){
              this.setOption('lineChart',newVal)
            }else{
              this.setOption('lineChart',oldVal)
            }
          },
          deep:true,
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
    // width: 100%;
  }
  .btn{
    margin: 10px;
    cursor: pointer;
  }
</style>
