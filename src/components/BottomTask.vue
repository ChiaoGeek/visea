<template>
  <div id="vi-footer">
    <!-- 左侧操作栏目 -->
    <div id="v-f-left">
      <div id="vf-l-begin"><span class="iconfont visea-icon">&#xe61b;</span></div>
      <div id="vf-l-user"><span class="iconfont visea-icon">&#xe619;</span></div>
      <div id="vf-l-manage"><span class="iconfont visea-icon">&#xe652;</span></div>
    </div>

    <!-- 中间任务栏 -->
    <div id="vf-task">
      <div class="vf-task" v-for="task in taskList" id="task.taskId" :key="task.taskId" @click="taskClick(task.taskId)">
        <img class="vf-task-icon" src="../assets/index/search.png">
        <div class="vf-task-name" >{{task.taskTitle}}</div>
      </div>
    </div>

    <!-- 右侧任务栏 -->
    <div id="vf-right">
      <div class="vf-r-icon"><span class="iconfont visea-icon">&#xe622;</span></div>
      <div class="vf-r-icon"><span class="iconfont visea-icon">&#xe621;</span></div>
      <div class="vf-r-icon"><span class="iconfont visea-icon">&#xe61e;</span></div>
      <div style="width:5px;border-left:1px solid #ccc">ddd</div>
    </div>

  </div>
</template>

<script>
  export default {
    name : 'bottonTask',
    data(){
      return {
      }
    },
    methods : {
      taskClick(id){
        console.log(id)
        this.$store.dispatch('taskActive', id)
      }
    },computed : {
      taskList(){
        return this.$store.state.taskList
      }
    }
  }
</script>




<style>
  @font-face {
    font-family: 'iconfont';
    src: url('../../static/fonts/icon/iconfont.eot');
    src: url('../../static/fonts/icon/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../static/fonts/icon/iconfont.woff') format('woff'),
    url('../../static/fonts/icon/iconfont.ttf') format('truetype'),
    url('../../static/fonts/icon/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  #vi-footer {
    position: fixed;
    bottom: 0;
    left: 0px;
    height: 35px;
    padding: 0 0px;
    width: 100%;
    z-index: 10000;
    overflow: hidden;
    text-align: left;
    -webkit-transition: all .25s;
    -webkit-transition-delay: 0;
    transition: all .25s;
    transition-delay: 0;
    -ms-transition: all .25s;
    -ms-transition-delay: 0;
    background-color: rgba(31,91,183,0.8);
  }
  #v-f-left {
    width: 120px;
    height: 100%;
  }
  #vf-l-begin {
    width: 36px;
    height: 100%;
    text-align: center;
    display: inline-block;
    float: left;
    cursor: pointer;
    line-height: 35px;
  }
  #vf-l-user {
    width: 36px;
    height: 100%;
    text-align: center;
    display: inline-block;
    float: left;
    cursor: pointer;
    line-height: 35px;
  }
  #vf-l-manage {
    width: 36px;
    height: 100%;
    text-align: center;
    display: inline-block;
    float: left;
    cursor: pointer;
    line-height: 35px;
  }
  #vf-right {
    height: 100%;
    position: absolute;;
    top: 0px;
    right: 10px;
  }
  .visea-icon {
    color: #fff;
    height: 100%;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  #vf-task {
    position: absolute;
    left: 120px;
    top: 0px;
    right: 278px;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  .vf-task{
    position: relative;
    width: 160px;
    margin: 0 2px;
    height: 30px;
    display: inline-block;
    margin-bottom: 2px;
    color: #fff;
    border-bottom: 2.5px solid rgba(255,255,255,0.6);
    overflow: hidden;
    cursor: pointer;
  }
  .vf-task:hover{
    background-color: rgba(31,91,183,0.8);
  }

  .vf-task-icon{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 8px;
    left: 8px;
    vertical-align: middle;
    border: 0px;
  }
  .vf-task-name{
    height: 100%;
    width: 100%;
    padding-left: 35px;
    line-height: 37px;
    font-size: 12px;
    text-align: left;
    font-family: "微软雅黑",'Luxi Sans','DejaVu Sans',Tahoma,'Hiragino Sans GB',STHeiti;
    font-weight: 900;
    overflow: hidden;
  }
  *{
    box-sizing: border-box
  }
</style>
