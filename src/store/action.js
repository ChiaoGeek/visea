/**
 * Created by shanesue on 17/3/6.
 */
//全局actions,可用作分发业务,可用于异步分发
import * as types from './mutation-types'
import $ from '../../node_modules/jquery/dist/jquery'

export default {

  taskAdd({ commit , state}, {taskId, windowId, appId}){
    for(var i = 0; i < state.taskList.length; i++){
      var value = state.taskList[i];
      if(value.taskId == taskId){
        commit(types.TASK_ACTIVE, taskId);
        return ;
      }
    }
    commit(types.TASK_ADD, {taskId, windowId, appId});
  },
  taskRemove({commit }, {taskId, windowId, appId}){
    commit(types.TASK_REMOVE, taskId, windowId);
  },
  taskActive({commit}, taskId){
    commit(types.TASK_ACTIVE, taskId);
  },
  taskClose({commit }, {taskId, windowId}){
    commit(types.TASK_CLOSE , {taskId, windowId})
  },taskBackground({commit }, taskId){
    commit(types.TASK_BACKGROUND, taskId)
  }

}
