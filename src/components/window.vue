<template>
  <div class="window" @click="clickActive" :class="{'inactive' : isActive}" :style="{width : width +'px', height : height +'px' ,zIndex : zIndex, left : x + 'px', top : y + 'px', display : display}">
    <div class="window-header " :class="{'inactive' : isActive}">
      <span class="window-title" :class="{'inactive' : isActive}">{{title}}</span>
      <span class="window-operate" :class="{'inactive' : isActive}" :style="{zIndex : zIndex + 2}" v-on:click="closewindow"><span class="iconfont visea-icon">&#xe628;</span></span>
      <span class="window-operate" :class="{'inactive' : isActive}" :style="{zIndex : zIndex + 2}" v-on:click="maxwindow"><span class="iconfont visea-icon">&#xe625;</span></span>
      <span class="window-operate" :class="{'inactive' : isActive}" :style="{zIndex : zIndex + 2}" v-on:click="minwindow"><span class="iconfont visea-icon">&#xe626;</span></span>
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
        x : this.$store.state.browseWidth * 0.1,
        y :  this.$store.state.browseHeight * 0.1,
        clickX : 0,
        clickY : 0,
        width : this.$store.state.browseWidth * 0.5,
        height : this.$store.state.browseHeight * 0.7,
      }
    },props : {
      zIndex : {
        default : 1000,
        type : Number
      },
      title : '',
      display : '',
      isActive : {
        type : Boolean,
        default : true
      },taskId : {
        type : String,
        default : ''
      }
    },
    mounted(){
      this.moveHandler = this.bindListenFunction(this, this.move)
      this.stopHandler = this.bind(this, this.stop)
      this.addEventHandler(this.$el.children[0], 'mousedown', this.bindListenFunction(this, this.start))
    },
    comouted : {

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
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.x = this.x + (e.clientX - this.clickX);
        this.y = this.y + (e.clientY - this.clickY);
        if(this.y < 0-this.$store.state.headerHeight) {
          this.y = 0 - this.$store.state.headerHeight
        }
        if(this.y > this.$store.state.browseHeight - this.$store.state.headerHeight - this.height){
          this.y = this.$store.state.browseHeight - this.$store.state.headerHeight - this.height
          console.log("dadasdsadsd")
        }
        if(e.clientY > 0)
          this.clickY = e.clientY;
        this.clickX = e.clientX;
      },
      stop(e){
        this.removeEventHandler(document, "mousemove", this.moveHandler);
        this.removeEventHandler(document, "mouseup", this.stopHandler);
      },maxwindow(e){
        this.width = window.innerWidth;
        this.height = window.innerHeight - this.$store.state.footerHeight;
        this.x = 0;
        this.y = 0 - this.$store.state.headerHeight;
      },minwindow(e){
        e.stopPropagation()
        this.$store.dispatch('taskBackground', this.$props.taskId)
      },closewindow(e){
        this.$store.dispatch('taskClose', {taskId : this.$props.taskId, windowId : ''})
      },clickActive(e){
        this.$store.dispatch('taskActive', this.$props.taskId)
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
.visea-icon{
  vertical-align: middle;
  text-align: center;
  position: relative;
  margin-top : 3px;
  display: block;
}
  .window-header{
    background-color: brown;
    position: absolute;
    height: 25px;
    width:100%;
    z-index: 6;
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
    border-radius: 5px;
    overflow: hidden;
  }
  .window-operate{
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
    display : block;
  }
  .window-operate:hover{
    background-color: rgba(255,255,255,0.2);
  }

  .window-content{
    position: relative;
    background-color: aqua;
    width: 100%;
    height: 100%;
    padding-top: 25px;
    overflow: hidden;
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
  }
  iframe{
    width: 100%;
    height: 100%;
  }
  *{
    box-sizing: border-box
  }
  .inactive {
    border-color: #ebebeb;
    background-color: #ebebeb;
    color: #000000;
  }
  .window-operate.inactive:hover{
    background-color: rgba(133, 104, 65, 0.54);
  }

  .active{
      box-shadow: 0 2px 6px rgba(0,0,0,0.3), 0 3px 8px rgba(0,0,0,0.2);
    }

</style>
