<template>
  <div class="main-content" :style="{height : height+ 'px' , width : '100%'}">
    <win v-for="data in windowList" :key="data.id" v-bind="{'taskId' : data.taskId, 'title' : data.windowTitle , 'zIndex' :data.zIndex ,'isActive' : data.active}">
    </win>
  </div>
</template>


<script>
  import win from './Window'
  export default {
    name : 'oscontent',
    data(){
      return {
      }
    },props :{

    },watch : {

    },
    computed :{
      height(){
        let footerHeight = 43;
        let headerHeight = 35;
        let clientHeight;
        if(window.innerHeight)
          clientHeight = window.innerHeight
        else
          clientHeight = document.body.clientHeight;
        return clientHeight - this.$store.state.headerHeight - this.$store.state.footerHeight;
      },
      windowList() {
        return this.$store.state.windowList
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
