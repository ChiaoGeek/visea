<template lang="html">
  <div id="vi-container">
    <div id="vi-header">
        <div id="vh-content">
            <div id="vh-logo">
                <img src="../../assets/logo.png" alt="">
                <a href="#">ViSea深入分析系统</a>
            </div>
            <div id="vh-application">
                <a href="#" class="vha-href"  v-for="data in apps" id="data.appId" @click="openApp(data.appId)">
                    <span class="vha-h-name">
                      <i class="vhahn-icon">&#xe623;</i>
                      {{data.appName}}
                    </span>
                </a>
            </div>
        </div>
    </div>
    <oscontent>
    </oscontent>
    <!-- 底部操作 -->
    <bottom-task></bottom-task>
    <!-- 背景墙 -->
    <div id="vi-wallpaper">
        <img id="v-w-bg" src="../../assets/index/bg.jpg" >
        <img id="v-w-bg-back" >
    </div>
  </div>
</template>

<script>
  import win from '../../components/Window.vue'
  import oscontent from '../../components/OSContent.vue'
  import bottomTask from '../../components/BottomTask.vue'
export default {
  name: 'index',
  data () {
    return {
      apps : this.$store.state.appList
    }
  },
  computed: {},
  mounted () {},
  methods: {
    openApp(appId){
      var appinfo = this.$store.state.appList[appId]
      var taskId = 'task-' + appId ;
      var array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      var windowId = appId + array[0];
      const appInfo = {
        taskId : taskId,
        windowId : windowId,
        appId : appId
      }
      this.$store.dispatch('taskAdd', appInfo);
    }
  },
  components: {'win': win, 'oscontent' : oscontent, 'bottomTask': bottomTask}
}
</script>

<style lang="css" scoped>
/* font */
/*@font-face {
  font-family: 'iconfont';
  src: url('../../assets/font/icon/iconfont.eot');
  src: url('../../assets/font/icon/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../assets/font/icon/iconfont.woff') format('woff'),
  url('../../assets/font/icon/iconfont.ttf') format('truetype'),
  url('../../assets/font/icon/iconfont.svg#iconfont') format('svg');
}*/
@font-face {
  font-family: 'iconfont';
  src: url('../../../static/fonts/icon/iconfont.eot');
  src: url('../../../static/fonts/icon/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../../static/fonts/icon/iconfont.woff') format('woff'),
  url('../../../static/fonts/icon/iconfont.ttf') format('truetype'),
  url('../../../static/fonts/icon/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.vhahn-icon{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;

}
/* container*/
#vi-container {
  width: 100%;
  height: 100%;
  padding: 0 0px;
  margin: 0px;
}

/* header */
#vi-header {
  height: 43px;
  width: 100%;
  transition: all .25s;
  padding: 0 0px;
  margin-top: 20px;
  z-index: 11;
  position: relative;
  border: 0;
}
#vh-content {
  height: 50px;
  width: 90%;
  margin: auto;
}
#vh-logo {
  height: 50px;
  width: 280px;
  float: left;
  line-height: 50px;
  vertical-align: middle;
}
#vh-logo img {
  width: 50px;
  height: 50px;
  float: left;
}

#vh-logo a {
  text-decoration: none;
  color: #fff;
  text-shadow: 0 3px 7px rgba(0,0,0,0.37);
  font-size: 24px;
}

#vh-application {
  height: 50px;
  float: left;
  display: inline;
  padding-top: 10px;
  position: relative;
}
.vha-href {
  display: block;
  text-decoration: none;
  float: left;
  margin-left: 30px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: 1px;
  height: 30px;
  width: 120px;
  color: #ffffff;
  font-weight: 900;
  line-height: 30px;
  position: relative;
  overflow: hidden;
  background-color: rgba(31,91,183,0.8);
  filter:alpha(opacity=60);
  -moz-opacity:0.6;
  -khtml-opacity: 0.6;
  opacity: 0.6;
}
.vha-href:hover {
  filter:alpha(opacity=90);
  -moz-opacity:0.9;
  -khtml-opacity: 0.;
  opacity: 0.9;

}
.vha-h-name {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding-left: 18px;
}
.vha-h-name:hover {

  background-color: blue;
}
.vhahn-icon {

}

/*task*/
.vf-r-icon {
  width: 36px;
  height: 100%;
  text-align: center;
  display: inline-block;
  float: left;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  line-height: 35px;

}


/* wallpaper*/
#vi-wallpaper {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: -100;
}
#v-w-bg{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border: 0;
}
#v-w-bg-back{
  position: absolute;
  display: none;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>
