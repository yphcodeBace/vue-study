<template>
  <div id="app">
    <el-container>

      <el-header class="header">
        <vheader />
      </el-header>

      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>

        <el-main>
          <router-view></router-view>
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
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>
