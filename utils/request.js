import config from '@/config/index.js'
import store from '@/store/index.js'

const appid = "bd9d01ecc75dbbaaefce"
const token = store.state.token

const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中'
		});
		uni.request({
			url: config.baseUrl + options.url,
			method: options.method || 'GET',
			header: {
				appid: appid,
				token: token
			},
			data: options.data || {},
			success: (res) => {
				if (res.statusCode != 200) {
					uni.showToast({
						title: res.data.data,
						icon: 'none',
						duration: 2000
					});
					return
				}
				resolve(res.data)
			},
			fail: (error) => {
				uni.showToast({
					icon: 'error',
					title: '系统错误'
				})
				reject(error)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}

export default request
