/**
 * Created by Administrator on 2017/9/18.
 */
import Vue from "vue"
import Vuex from "vuex"

console.log(Vuex); //Vuex为一个对象里面包含

Vue.use(Vuex);

const store = new Vuex.Store({
  // 储存初始化数据
  state:{
    type: '',
    age: '18' //存储了一个公共状态age
  },
  //类似与过滤器作用、比如说想取state对象里面某一键值就用getters
  getters:{
    getType:function (state) {
      if(!state.type){
        state.type = localStorage.getItem('type')
      }
      return state.type;
    }
  },
  //类似computed计算属性方法
  //对数据进行计算的方法全部写在里面（类似computed） 在页面中触发时使用this.$store.commit('mutationName') 触发Mutations方法改变state的值
  mutations:{
    //格式：类型(名字)+处理函数
    //加1
    changetype(state,type) {
      //console.log(state)//state对象
      state.type = type;
    },
    showAge(state, msg){
      state.age= msg;
    }
  },
  //处理Mutations中已经写好的方法 其直接触发方式是 this.$store.dispatch(actionName)
  actions:{
    /* increment({commit}){
       commit("INCREMENT")
     }*/
  }
})

export default store
