<template>
  <div class="main-content" :style="{height : browseHeight+ 'px' , width : '100%'}">
    <win v-for="data in windowList" :value="data.display" :key="data.id" v-bind="{'display' : data.display , 'taskId' : data.taskId, 'title' : data.windowTitle , 'zIndex' :data.zIndex ,'isActive' : data.active}">
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
      windowHeight : window.innerHeight
    },watch : {
      windowHeight(){
        console.log('dasda')
      }
    },
    computed :{
      height(){
        let clientHeight;
        if(window.innerHeight)
          clientHeight = window.innerHeight
        else
          clientHeight = document.body.clientHeight;
        console.log(window.innerHeight)
        return clientHeight - this.$store.state.headerHeight - this.$store.state.footerHeight;
      },
      windowList() {
        return this.$store.state.windowList
      },
      browseHeight() {
        return this.$store.state.browseHeight - this.$store.state.headerHeight - this.$store.state.footerHeight;
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
