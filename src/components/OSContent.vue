<template>
  <div class="main-content" :style="{height : height+ 'px' , width : '100%'}">
    <win></win>
  </div>
</template>


<script>
  import win from './Window'
  export default {
    name : 'oscontent',
    data(){
      return {
      }
    },computed :{
      height(){
        let footerHeight = 43;
        let headerHeight = 35;
        let clientHeight;
        if(window.innerHeight)
          clientHeight = window.innerHeight
        else
          clientHeight = document.body.clientHeight;
        return clientHeight - footerHeight - headerHeight;
      }
    },
    components: {'win': win}
  }
</script>


<style>
  .main-content{
    position : relative;
    z-index: 1000;
    margin-left: 0px;
    margin-top:0px;
  }
</style>
