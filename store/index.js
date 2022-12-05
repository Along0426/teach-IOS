import Vue from 'vue'
import Vuex from 'vuex'
import KEY from '@/config/KEY.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: uni.getStorageSync(KEY.TOKEN_KEY) || null,
		username: uni.getStorageSync(KEY.USER_NAME) || null
	},
	getters: {

	},
	mutations: {
		setToken(state, data) {
			const {
				token,
				username
			} = data
			if (username) {
				state.username = username
				uni.setStorageSync(KEY.USER_NAME, username)
			}
			if (token) {
				state.token = token
				uni.setStorageSync(KEY.TOKEN_KEY, token)
			}
		}
	},
	actions: {

	},
	modules: {

	}
})

export default store
