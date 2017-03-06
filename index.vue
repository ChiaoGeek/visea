<template>
  <div class="window" v-on:mousedown="mouseDown" v-on:mousemove="mouseMove" v-on:mouseup="mouseUp" :style="{left : x, top : y}">
    <div class="window-header">
      <span class="window-title">淘宝网</span>
      <span class="window-close" v-on:click="">X</span>
      <span class="window-close">口</span>
      <span class="window-close">--</span>
    </div>
    <div class="window-content">
    </div>
  </div>
</template>


<script>
  export default {
    name : 'window',
    data : function (){
      return { x : this.x , y : this.y , downX : this.downX , downY : this.downY}
    },methods : {

    },props : {
      x : {
        type : Number,
        default : 0
      },
      y : {
        type : Number,
        default : 0
      },
      downX : {
        type : Number
      },
      downY : {
        type : Number
      }
    }

  }
</script>

<style scoped>
  .window-header{
    background-color: brown;
    position: relative;
    height: 5%;
    width:100%;
  }
  .window{
    width: 900px;
    height: 500px;
    left: 224px;
    top: 164px;
    z-index: 1004;
    display: block;
    background-color: #ffffff;
  }
  .window-close{
    float: right;
    font-size: small;
    font-family: 'Cambria_','PT Serif Caption',Verdana,Arial,Helvetica,sans-serif;
    margin-bottom: 0px;
    position: relative;
    background-color: transparent;
    color: #fff;
    z-index: 4;
    height: 100%;
    width: 50px;
    text-align: center;
    vertical-align: middle;
  }

  .window-content{
    position: relative;
    background-color: aqua;
    width: 100%;
    height: 95%;
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

</style>
