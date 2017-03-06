<template>
  <div class="window" :style="{width : width, height : height ,zIndex : zIndex, marginLeft : x + 'px', marginTop : y + 'px', display : display}">
    <div class="window-header">
      <span class="window-title">淘宝网</span>
      <span class="window-close" v-on:click="closewindow"><span class="iconfont visea-icon">&#xe628;</span></span>
      <span class="window-close" v-on:click="maxwindow"><span class="iconfont visea-icon">&#xe625;</span></span>
      <span class="window-close" v-on:click="minwindow"><span class="iconfont visea-icon">&#xe626;</span></span>
    </div>
    <div class="window-content" >
    </div>
  </div>
</template>


<script>
  export default {
    name : 'win',
    data(){
      return {
        x : 0,
        y : 0,
        clickX : 0,
        clickY : 0,
        zIndex : 1000,
        width : '60%',
        height : '60%',
        display : 'block'
      }
    },
    mounted(){
      this.moveHandler = this.bindListenFunction(this, this.move)
      this.stopHandler = this.bind(this, this.stop)
      this.addEventHandler(this.$el.children[0], 'mousedown', this.bindListenFunction(this, this.start))
    },
    destroy(){

    },
    methods : {
      bind(object, fun) {
        return function() {
          return fun.apply(object, arguments);  //fun方法在object上面执行,使用argument参数
        }
      },
      bindListenFunction(object, fun){  //绑定执行方法到object,用作handler
        return function(event){
          return fun.call(object, event);
        }
      },
      addEventHandler(sourceObj, eventType, handler){
        if(sourceObj.addEventListener){ //非IE
          sourceObj.addEventListener(eventType, handler, false);  //冒泡阶段执行,以便对象初始化监听事件
        }else{
          sourceObj.attachEvent("on"+eventType, handler);
        }
      },
      removeEventHandler(oTarget, sEventType, fnHandler) { //移除事件
        if (oTarget.removeEventListener) {
          oTarget.removeEventListener(sEventType, fnHandler, false);
        } else if (oTarget.detachEvent) {
          oTarget.detachEvent("on" + sEventType, fnHandler);
        } else {
          oTarget["on" + sEventType] = null;
        }
      },
      start(e) {
        this.clickX = e.clientX;
        this.clickY = e.clientY;
        this.addEventHandler(document, "mousemove", this.moveHandler)
        this.addEventHandler(document, "mouseup" , this.stopHandler)
        e.preventDefault()
      },
      move(e){
        this.x = this.x + (e.clientX - this.clickX);
        this.y = this.y + (e.clientY - this.clickY);
        this.clickX = e.clientX;
        this.clickY = e.clientY;
      },
      stop(e){
        this.removeEventHandler(document, "mousemove", this.moveHandler);
        this.removeEventHandler(document, "mouseup", this.stopHandler);
      },maxwindow(e){
        this.width = '100%';
        this.height = '100%';
        this.x = 0;
        this.y = 0;
      },minwindow(e){
        this.display = 'none'
      },closewindow(e){
      }
    },watch : {

    }

  }
</script>

<style scoped>
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
  .window-header{
    background-color: brown;
    position: relative;
    height: 25px;
    width:100%;
    z-index: 2;
  }
  .window{
    width: 900px;
    height: 500px;
    z-index: 2;
    vertical-align: middle;
    text-align: center;
    display: block;
    background-color: #ffffff;
    border: 2px solid brown;
    position : absolute;
  }
  .window-close{
    float: right;
    font-size: small;
    font-family: 'Cambria_','PT Serif Caption',Verdana,Arial,Helvetica,sans-serif;
    margin-top: 0px;
    position: relative;
    background-color: transparent;
    color: #fff;
    height: 100%;
    width: 50px;
    text-align: center;
    vertical-align: middle;
    z-index: 4;
    position: relative;
  }
  .window-close:hover{
    background-color: rgba(255,255,255,0.2);
  }

  .window-content{
    position: relative;
    background-color: aqua;
    width: 100%;
    height: auto;
    z-index: 2;
  }
  .window-title{
    float: left;
    position: relative;
    font-family: "微软雅黑",'Luxi Sans','DejaVu Sans',Tahoma,'Hiragino Sans GB',STHeiti;
    text-align: center;
    vertical-align: middle;
    line-height: 100%;
    background-color: transparent;
    color: #ffffff;
    z-index: 4;
    vertical-align: middle;
    margin-top: 0.5%;
    z-index: 2;
  }
iframe{
  width: 100%;
  height: 100%;
}
</style>
