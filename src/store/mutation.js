/**
 * Created by shanesue on 17/3/5.
 */
//全局mutation

import * as types from './mutation-types'
import $ from '../../node_modules/jquery/dist/jquery'

export default {
  [types.TASK_ADD](state, {taskId, windowId, appId}){
    if (appId != '' && appId != null) {
      var appInfo = state.appList[appId]
      var taskMap = {
        taskId: taskId,
        appId: appId,
        windowId: windowId,
        taskTitle: appInfo.appName,
        active : 'task-active'
      }
      var windowMap = {
        windowId: windowId,
        windowTitle: appInfo.appName,
        windowIcon: appInfo.appIcon,
        taskId: taskId,
        appId: appId,
        active : false,
        zIndex : state.zIndex + 2
      }
      var taskNewSet = new Array();
      $.each(state.taskList , function(n , value){
          taskNewSet[n] = value;
      })
      taskNewSet.push(taskMap)
      state.taskList = taskNewSet

      var newSet = new Array()
      $.each(state.windowList , function(n , value){
        value.active = true;
        newSet[n] = value;
      })
      newSet.push(windowMap)
      state.windowList = newSet;
      state.zIndex += 2;
    }
  },
  [types.TASK_REMOVE](state, taskId, windowId){
    if(taskId != '' && taskId != null && taskId != undefined){
      let windowId = state.taskList.remove(taskId);
      state.windowList.remove(windowId);
    }else if (windowId != '' && windowId != null && windowId != undefined ){
      let taskId = state.windowList.remove(windowId)
      state.taskList.remove(taskId)
    }
  },
  [types.TASK_ACTIVE](state, taskId){
    var taskInfo;
    $.each(state.taskList , function(n , value){
      if(value.taskId == taskId){
        taskInfo = state.taskList[n];
      }
    })
    var newWinList = new Array();
    if(taskInfo != undefined && taskInfo != null){
      $.each(state.windowList , function(n , value){
        if(value.taskId != taskId){
          value.active = true;
        }else{

          value.active = false;
          value.zIndex = state.zIndex + 2;
          state.zIndex += 2;
        }
        newWinList[n] = value;
      })
      state.windowList = newWinList;
    }
  }
}

