<template lang="html">
  <div id="vi-container">
    <div id="vi-header"></div>
    <div id="vi-middle"></div>

    <!-- 底部操作 -->
    <div id="vi-footer">
        <div id="v-f-left">
            <div id="vf-l-begin"><span class="iconfont visea-icon">&#xe61b;</span></div>
            <div id="vf-l-user"><span class="iconfont visea-icon">&#xe619;</span></div>
            <div id="vf-l-manage"><span class="iconfont visea-icon">&#xe652;</span></div>
        </div>
    </div>

    <!-- 背景墙 -->
    <div id="vi-wallpaper">
        <img id="v-w-bg" src="../../assets/index/bing.jpg" >
        <img id="v-w-bg-back" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
/* font */
@font-face {
  font-family: 'iconfont';
  src: url('../../assets/font/icon/iconfont.eot');
  src: url('../../assets/font/icon/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../assets/font/icon/iconfont.woff') format('woff'),
  url('../../assets/font/icon/iconfont.ttf') format('truetype'),
  url('../../assets/font/icon/iconfont.svg#iconfont') format('svg');
}
.iconfont{
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
  /*background-color: rgba(31,91,183,0.8);*/
  transition: all .25s;
  padding: 0 0px;
  margin: 0px;
  z-index: 11;
  position: relative;
  border: 0;
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
.visea-icon {
  color: #fff;
  height: 100%;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
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
