<template>
  <svg class="mainContent">

  </svg>
</template>


<script>
  import d3 from '../../node_modules/d3/d3'

  export default {
    name : 'svgTable',
    data(){
      return {edges : [], nodes : [], force : null, nodesLabel : []}
    },
    props : {
      height : {
        type : Number,
        default : 100
      },
      width : {
        type : Number,
        default : 100
      },copId : {
        type : String,
        default : ''
      },
    },
    methods : {
      update(i){
        var svg = d3.select("#"+this.$props.copId);
        //添加节点更新
        this.nodes.push({'name': 'xxx'});
        this.edges.push({'source': i, 'target': this.nodes.length - 1});

        var links = svg.selectAll("line").data(this.force.links());

        links.enter()
          .append("line")
          .style("stroke", "#ccc")
          .style("stroke-width", 2);

        links.exit().remove();

        var nodes = svg.selectAll("circle").data(this.force.nodes());
        nodes.enter().append("circle")
          .attr("r", 40)
          .style("fill", "red")
          .call(this.force.drag);

        nodes.exit().remove();

        //运动刷新
        var r = 40
        this.force.on("tick", function (d) {
          links.attr("x1", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var x_distance = (d.target.x - d.source.x) / distance * r;
            return d.source.x + x_distance;
          }).attr("y1", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var y_distance = (d.target.y - d.source.y) / distance * r;
            return d.source.y + y_distance;
          }).attr("x2", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var x_distance = (d.target.x - d.source.x) / distance * r;
            return d.target.x - x_distance;
          }).attr("y2", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var y_distance = (d.target.y - d.source.y) / distance * r;
            return d.target.y - y_distance;
          });


          nodes.attr("cx", function (d) {
            return d.x;
          }).attr("cy", function (d) {
            return d.y;
          });

        });

        this.force.start();
      },
      updateByData(i, node, edge){
        var svg = d3.select("#"+this.$props.copId);
        //添加节点更新
        this.nodes.push(node);
        this.edges.push(edge);

        var links = svg.selectAll("line").data(this.force.links());

        links.enter()
          .append("line")
          .style("stroke", "#ccc")
          .style("stroke-width", 2);

        links.exit().remove();

        var nodes = svg.selectAll("circle").data(this.force.nodes());
        nodes.enter().append("circle")
          .attr("r", 40)
          .style("fill", "red")
          .call(this.force.drag);

        nodes.exit().remove();

        //运动刷新
        var r = 40
        this.force.on("tick", function (d) {
          links.attr("x1", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var x_distance = (d.target.x - d.source.x) / distance * r;
            return d.source.x + x_distance;
          }).attr("y1", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var y_distance = (d.target.y - d.source.y) / distance * r;
            return d.source.y + y_distance;
          }).attr("x2", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var x_distance = (d.target.x - d.source.x) / distance * r;
            return d.target.x - x_distance;
          }).attr("y2", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var y_distance = (d.target.y - d.source.y) / distance * r;
            return d.target.y - y_distance;
          });


          nodes.attr("cx", function (d) {
            return d.x;
          }).attr("cy", function (d) {
            return d.y;
          });

        });

        this.force.start();
      },
      redraw(){
        var height = this.$parent.height;
        var width = this.$parent.width;

        var nodes_data = [{'name': '0'},
          {'name': '1'},
          {'name': '2'},
          {'name': '3'},
          {'name': '4'},
          {'name': '5'},
          {'name': '6'}];
        this.nodes = nodes_data;

        var edges_data = [{'source': 0, 'target': 1},
          {'source': 0, 'target': 2},
          {'source': 0, 'target': 3},
          {'source': 0, 'target': 4},
          {'source': 0, 'target': 5},
          {'source': 0, 'target': 6}];
        this.edges = edges_data

        var color = d3.scale.category20();
        var edgeWidth = 2;
        var r = 40;
        var svg = d3.select("#"+this.$props.copId)
          .attr("width", width)
          .attr("height", height);

        this.force = d3.layout.force()
          .nodes(nodes_data)
          .links(edges_data)
          .size([width, height])
          .linkDistance(200)
          .friction(0.8)
          .charge(-500)
          .start();
        var force = this.force;
        //边
        var links = svg.selectAll("line")
          .data(edges_data)
          .enter()
          .append("line")
          .attr("marker-end", "url(#arrow)")
          .style("stroke", "#ccc")
          .style("stroke-width", edgeWidth);
        //节点
        var t = this;
        var nodes = svg.selectAll("circle")
          .data(nodes_data)
          .enter()
          .append("circle")
          .attr("r", r)
          .style("fill", function (d, i) {
            return color(i);
          })
          .on("click", function (d, i) {
              t.update(i)
          })
          .call(force.drag);
//        //标签
//        var nodes_labels = svg.selectAll("text")
//          .data(nodes_data)
//          .enter()
//          .append("text")
//          .attr("dx", function (d, i) {
//            return -16 * (nodes_data[i].name.length);
//          })
//          .attr("dy", 5)
//          .attr("fill", "#fff")
//          .style("font-size", 16)
//          .text(function (d, i) {
//            if (i == 0) {
//              return "点我";
//            }
//            return "";
//          });

        //运动刷新
        this.force.on("tick", function (d) {
          links.attr("x1", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var x_distance = (d.target.x - d.source.x) / distance * r;
            return d.source.x + x_distance;
          }).attr("y1", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var y_distance = (d.target.y - d.source.y) / distance * r;
            return d.source.y + y_distance;
          }).attr("x2", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var x_distance = (d.target.x - d.source.x) / distance * r;
            return d.target.x - x_distance;
          }).attr("y2", function (d) {
            var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
              (d.target.x - d.source.x) * (d.target.x - d.source.x));
            var y_distance = (d.target.y - d.source.y) / distance * r;
            return d.target.y - y_distance;
          });


          nodes.attr("cx", function (d) {
            return d.x;
          }).attr("cy", function (d) {
            return d.y;
          });

//          nodes_labels.attr("x", function (d) {
//            return d.x;
//          });
//          nodes_labels.attr("y", function (d) {
//            return d.y;
//          });
        });

        this.force = force;



        //用于产生不同颜色的节点
        var colorIndex = 8;
      },
    },
    watch : {
      links(){
        this.update();
        return this.links;
      }
    },
    mounted(){
      this.redraw()
    }
  }
</script>

<style>
  .mainContent {
    width: 100%;
    height:100%;
  }
</style>
