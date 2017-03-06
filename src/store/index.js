/**
 * Created by shanesue on 17/3/5.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import mutation from './mutation'
import action from './action'

Vue.use(Vuex)

const state = {
}




export default new Vuex.Store({
  state,
  mutation,
  action,
})
