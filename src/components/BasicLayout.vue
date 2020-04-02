<template>
  <div class="layout">
    这是：Layout 布局
    <br/>
    <customLabel></customLabel>
  </div>
</template>

<script>
  import CustomLabel from '@/components/CustomLabel'

  export default {
    name: 'BasicLayout',
    components: {
      'customLabel': CustomLabel
    },

  }

</script>

<style scoped>
  .layout{
    border: 1px solid red;
    position: relative;
  }
</style>
