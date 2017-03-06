<template lang="html">
  <div id="vi-container">
    <div id="vi-header">
        <div id="vh-content">
            <div id="vh-logo">
                <img src="../../assets/logo.png" alt="">
                <a href="#">ViSea深入分析系统</a>
            </div>
            <div id="vh-application">
                <a href="#" class="vha-href">
                    <span class="vha-h-name">
                      <i class="vhahn-icon">&#xe623;</i>
                      搜索引擎
                    </span>
                </a>

                <a href="#" class="vha-href">
                    <span class="vha-h-name">
                      <i class="vhahn-icon">&#xe60c;</i>
                      拆分过滤
                    </span>
                </a>

                <a href="#" class="vha-href">
                    <span class="vha-h-name">
                      <i class="vhahn-icon">&#xe624;</i>
                      分析面板
                    </span>
                </a>

                <a href="#" class="vha-href">
                    <span class="vha-h-name">
                      <i class="vhahn-icon">&#xe662;</i>
                      结果保存
                    </span>
                </a>


            </div>
        </div>
    </div>
    <oscontent>
      <win></win>
    </oscontent>
    <!-- 底部操作 -->
    <div id="vi-footer">
        <!-- 左侧操作栏目 -->
        <div id="v-f-left">
            <div id="vf-l-begin"><span class="iconfont visea-icon">&#xe61b;</span></div>
            <div id="vf-l-user"><span class="iconfont visea-icon">&#xe619;</span></div>
            <div id="vf-l-manage"><span class="iconfont visea-icon">&#xe652;</span></div>
        </div>

        <!-- 中间任务栏 -->
        <div id="vf-task">
            <div class="vf-task">
                <img class="vf-task-icon" src="../../assets/index/search.png">
                <div class="vf-task-name">搜索引擎</div>
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
export default {
  name: 'index',
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {'win': win, 'oscontent' : oscontent}
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
  margin-left: 250px;
  padding-top: 10px;
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
/*footer*/
#vi-footer {
  position: fixed;
  bottom: 0;
  left: 0px;
  height: 35px;
  padding: 0 0px;
  width: 100%;
  z-index: 1;
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
