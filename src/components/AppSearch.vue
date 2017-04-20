<template>
  <div class="content">
    <iframe src="http://localhost/channel" draggable="true">

    </iframe>
  </div>
</template>

<script>
  import d3 from "../../node_modules/d3/d3"
  export default {
    name : "appsearch",
    mounted() {
      console.log(this.$el.children[0].contentWindow.document.domain)
      this.$el.children[0].onload = function (a) {

      }
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
