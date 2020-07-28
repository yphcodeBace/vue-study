<template>
  <div class="layout">
    这是：Layout 布局
    <el-row :gutter="20">
      <el-col :span="24">
        <div id="pieChart" class="grid-content bg-purple chart">
          测试
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

      }
    },
    mounted () {

    },
    methods: {

    },
    //数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
    watch: {

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
</style>
