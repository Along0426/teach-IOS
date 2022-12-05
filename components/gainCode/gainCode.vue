<template>
	<view class="gainCode" @click="getSecurityCode">
		{{codeCountDown?codeCountDown+'s':'发送'}}
	</view>
</template>

<script>
	import loginAPI from '@/api/login.js'
	export default {
		name: "gainCode",
		props: {
			phone: {
				type: String,
				default: () => ("")
			}
		},
		data() {
			return {
				// 验证码倒计时时间
				codeCountDown: null,
				// 定时器
				timer: null,
				// 按钮是否为禁用
				flag: false
			};
		},
		methods: {
			getSecurityCode() {
				if (!this.phone) {
					uni.showToast({
						title: "手机号不能为空",
						icon: 'none',
						duration: 2000
					})
					return
				}

				const phone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
				if (!phone.test(this.phone)) {
					uni.showToast({
						title: "手机号不规范",
						icon: 'none',
						duration: 2000
					})
					return
				}

				if (this.timer) {
					uni.showToast({
						icon: 'none',
						title: `请在${this.codeCountDown}秒后重试`,
						duration: 2000
					})
					return
				}



				this.getCode(this.phone)
			},

			getCode(num) {
				loginAPI.getCode({
					phone: num
				}).then((res) => {
					if (res.code == 20000) {
						uni.showToast({
							title: "验证码:" + res.data,
							icon: 'none',
							duration: 3000
						});
					}
				})
				this.codeCountDown = 60
				this.flag = true
				this.timer = setInterval(() => {
					this.codeCountDown--
					if (this.codeCountDown <= 0) {
						if (this.timer) {
							clearInterval(this.timer)
							this.timer = null
							this.flag = false
						}
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
	.gainCode {
		width: 100px;
		height: 50px;
		background-color: #5ccc84;
		line-height: 50px;
		text-align: center;
		color: #fff;
	}
</style>
