/*
vuex的核心管理对象模块： store
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建之后要配置对象，在mainJS中映射
//状态对象
const state={ //初始化状态
  count:0
}
//包含多个更新state的对象
const mutations={
  //增加的mutation
    JIAFA(state){
      state.count++
    },
  //减少的mutation
    JIANFA(state){
      state.count--
    }
}
//包含多个对应事件回调函数的对象
const actions={
  //增加的action
  jiafa({commit}){
    //提交增加的mutation
    commit('JIAFA')
  },
  //减少的action
  jianfa({commit}){
    //提交减少的mutation
    commit('JIANFA')
  },
  //带条件的action
  jishu({commit,state}){
    if(state.count%2===1){
      //提交增加的mutation
      commit('JIAFA')
    }
  },
  //异步的action
  yibu({commit}){
    //在action中直接就可以执行异步代码
    setTimeout(()=>{
      //提交增加的mutation
      commit('JIAFA')
    },1000)
  }

}
//包含多个getter计算属性函数的对象
const getters={
  evenOradd(state){ //不需要调用，只需要读取属性值
    return state.count%2===0 ? "奇数" : "偶数"
  }
}

export default new Vuex.Store({
  state,      //状态对象
  mutations,  //包含多个更新state的对象
  actions,    //包含多个对应事件回调函数的对象
  getters     //包含多个getter计算属性函数的对象
})
