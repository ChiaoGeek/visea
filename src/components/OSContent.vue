<template>
  <div class="main-content" :style="{height : browseHeight+ 'px' , width : '100%'}">
    <win v-for="data in windowList" :value="data.display" :key="data.id" v-bind="{'display' : data.display , 'taskId' : data.taskId, 'title' : data.windowTitle , 'zIndex' :data.zIndex ,'isActive' : data.active}">
      <template scope="props" slot="content">
        <svgPanel :id="data.appId" :copId="data.appId" v-if="data.appId=='s3dh982h912h'" ></svgPanel>
        <appsearch :id="data.appId" :copId="data.appId" v-else-if="data.appId=='d19j2h023h0ho23'"></appsearch>
      </template>
    </win>
  </div>
</template>


<script>
  import win from './Window'
  import svgPanel from './SvgPanel'
  import appsearch from './AppSearch.vue'
  export default {
    name : 'oscontent',
    data(){
      return {
      }
    },props :{

    },watch : {
      windowHeight(){
      }
    },
    computed :{
      height(){
        let clientHeight;
        if(window.innerHeight)
          clientHeight = window.innerHeight
        else
          clientHeight = document.body.clientHeight;
        return clientHeight - this.$store.state.headerHeight - this.$store.state.footerHeight;
      },
      windowList() {
        return this.$store.state.windowList
      },
      browseHeight() {
        return this.$store.state.browseHeight - this.$store.state.headerHeight - this.$store.state.footerHeight;
      }
    },
    components: {'win': win, 'svgPanel' : svgPanel, 'appsearch' : appsearch}
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
