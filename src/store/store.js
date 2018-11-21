import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    title: '',
    username:'',
    userFlag:''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data;
    },
    [types.USERNAME]:(state,date)=>{
      state.username=date;
    },
    [types.FLAG]:(state,date)=>{
      state.userFlag=date;
    }
  },
  getters:{
    getToken:state=>{
      return state.token;
    },
    getUsername:state=>{
      return state.username
    },
    getUserFlag:state=>{
      return state.userFlag
    }
  }
})
