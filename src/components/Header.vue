<template>
  <el-row>
    <el-col :span="24">
    <div class="head-wrap"><i class="el-icon-bell"></i>
      <span>个人信息管理平台</span>
      <el-select @change="selectChange" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item">
        </el-option>
      </el-select>
      <div class="right">
        <span>用户名:</span>
        <span>燕培浩</span>
        <span style="cursor: pointer">退出<i class="el-icon-circle-close"></i></span>
      </div>
    </div>
    </el-col>
  </el-row>
</template>

<script>
  import store from '../vuex/store'

  export default {
    // ...
    data(){
      return {
        options: [{
          value: '1',
          label: 'storeData1'
        }, {
          value: '2',
          label: 'storeData2'
        }, {
          value: '3',
          label: 'storeData3'
        }],
        value: ''
      }
    },
    computed: {
      doneTodosCount () {
        return this.$store.getters.doneTodosCount
      },

    },
    mounted() {
      //通过属性访问
      // console.log(this.$store.getters.doneTodos)
      console.log(this.doneTodosCount+'comouted')
      //通过方法访问
      // console.log(this.$store.getters.getTodoById(2))
      // this.$store.commit('increment');
      // this.$store.dispatch('increment');
      console.log(this.$store.state.count);
    },
    methods:{
      add:()=>{
        store.commit('increment');
      },
      selectChange(event){
        store.commit('changeData',event.label);
      }

    },

  }

</script>

<style scoped lang="less">
  .head-wrap{
    span{
      display: inline-block;
      margin-left: 10px;
    }
    .right{
      /*border: 1px solid red;*/
      float: right;
    }
  }
</style>
