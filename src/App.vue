<template>
  <div id="app">
    <el-container>

      <el-header class="header">
        <vheader />
      </el-header>

      <el-container class="content">
        <el-aside class="aside">
          <navmenu></navmenu>
        </el-aside>

        <el-main class="main">
          <router-view></router-view>
          <el-footer>
            <p>TEL : 010-85394331</p>
            <p>Email : infinistudio@foxmail.com</p>
            <p>weibo : @InfiniStudio</p>
          </el-footer>
        </el-main>

      </el-container>

    </el-container>
  </div>
</template>
<script>
  import NavMenu from '@/components/NavMenu'
  import Header from '@/components/Header'
  import axios from 'axios'

  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'vheader': Header
    },
    created() {

    },
    mounted() {
      this.get()
    },
    methods:{
      get:function () {
        // console.log(this.$axios)
        // console.log(this.$store.state)
      }
    }

  }

</script>

<style>
  .header {
    background-color: #39B482;
    color: #fff;
    line-height: 60px;
    position: fixed;
    width: 100%;
    z-index: 99;
  }
  .content{
    margin-top: 60px;
    margin-bottom: 120px;
  }
  .aside{
    position: fixed;
    width: 200px !important;
  }
  .main{
    margin-left: 200px;
  }
  .el-footer {
    position: fixed;
    z-index: 99;
    width: calc(100% - 240px);
    bottom: 0;
    background-color: #F2F2F2;
    color: #333;
    text-align: center;
    height: 120px !important;
    /*line-height: 80px;*/
  }
</style>
