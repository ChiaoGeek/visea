/**
 * Created by shanesue on 17/3/5.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import mutation from './mutation'
import action from './action'

Vue.use(Vuex)

class windowInfo {
  constructor(windowId, windowTitle, windowIcon, taskId, appId){
    this.windowId = windowId;
    this.windowTitle = windowTitle;
    this.windowIcon = windowIcon;
    this.taskId = taskId;
    this.appId = appId;
  }
  toMap(){
    return {
      windowId : this.windowId,
      windowTitle : this.windowTitle,
      windowIcon : this.windowIcon,
      taskId : this.taskId,
      appId : this.appId
    }
  }
}

//以下为测试数据,和数据格式
windowInfo = {
  windowId : '11d21d',
  windowTitle : 'taobao',
  windowIcon : 'n',
  taskId : '1d121d2d1',
  appId : 'd1322eqd2d',
}

var taskInfo = {
  taskId : '1d121d2d1',
  appId : 'd1322eqd2d',
  windowId : '11d21d',
  taskTitle : 'taobao'
}

var appInfo = {
  appId : 'd1322eqd2d',
  appName : 'taobao',
  appIcon : 'n',
}

var searchEngineApp = {
  appId : 'd19j2h023h0ho23',
  appName : '搜索引擎',
  appIcon : '&#xe623;',
}
var splitEngineApp = {
  appId : '8123dh982h912h',
  appName : '拆分过滤',
  appIcon : '&#xe60c;',
}
var analysisEngineApp = {
  appId : '0j3d01du1d91h',
  appName : '分析面板',
  appIcon : '&#xe624;',
}
var resultSaveApp = {
  appId : '19hd1981hp912h',
  appName : '结果保存',
  appIcon : '&#xe662;',
}

//以上为测试数据,和数据格式


const state = {
  browseHeight : window.innerHeight ? window.innerHeight : document.body.clientHeight,
  browseWidth : window.innderWidth ? window.innderWidth : document.body.clientWidth,
  headerHeight : 63,  //主页面header高度,全局应一致
  footerHeight : 35,  //主页面footer高度,全局应一致
  zIndex : 1000,  //窗口的zIndex
  taskList : [],  //任务列表
  windowList : [],  //窗口列表
  appList : {'d19j2h023h0ho23' : searchEngineApp, '8123dh982h912h' : splitEngineApp, '0j3d01du1d91h' : analysisEngineApp, '19hd1981hp912h' : resultSaveApp,}
}

//监听窗口大小变化事件
window.onresize = function(){
  var winHeight=0;
  if (window.innerHeight)
    winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight;
  //通过深入Document内部对body进行检测，获取浏览器窗口高度
  if (document.documentElement && document.documentElement.clientHeight)
    winHeight = document.documentElement.clientHeight;
  state.browseHeight = winHeight;
}


export default new Vuex.Store({
  state,
  mutations : mutation,
  actions : action,
  getters: {
  }
})
