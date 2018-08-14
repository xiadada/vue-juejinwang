import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		recommendLists: null,
		hotTags: null
	},
	getters: {

	},
	mutations: {
		/* 更新推荐列表的数据 */
		updateRecommendLists(state,data){
			state.recommendLists = data;
		},
		/* 更新热门标签的数据 */
		updateHotTags(state,data){
			state.hotTags = data;
		}
	},
	actions: {

	}
})