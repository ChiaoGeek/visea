<template>
  <div class="content">
    <iframe src="http://www.baidu.com" draggable="true">

    </iframe>
  </div>
</template>

<script>
  import d3 from "../../node_modules/d3/d3"
  export default {
    name : "appsearch",
    mounted() {
      this.child[0].load(function () {
        console.log("ovver")
      })
    },
    methods : {}
  }

</script>
<style>
  .content{
    width: 100%;
    height: 100%;
  }
  iframe{
    width: 100%;
    height: 100%;
  }
</style>
