import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		loginStatus:false
	}, //state 定义状态  mutations 修改state定义的状态
	mutations:{
		changeLoginStatus(state){
			state.loginStatus =true
		}
	}
})