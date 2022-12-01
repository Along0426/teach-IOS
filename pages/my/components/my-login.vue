<template>
	<view class="userLogin">
		<image class="img" src="/static/头像.png" mode=""></image>
		<view class="text">
			<view class="loginText" @click="handleSkip">
				{{loginFlag?"立即登录":userData.name}}
			</view>
			<view class="title">
				{{loginFlag?"登录解锁更多功能":userData.intro===""?"暂无描述":userData.intro}}
			</view>
		</view>
		<view class="vip" v-if="!loginFlag">
			永久会员
		</view>

		<view class="iconfont icon-shezhi" v-if="!loginFlag"></view>
	</view>
</template>

<script>
	export default {
		props: {
			// 用户信息
			userData: {
				type: Object,
				default: () => ({
					name: "ALong",
					intro: "111",
					vipFlag: false,
					id: 1
				})
			},
			// true 为用户未登录
			loginFlag: {
				type: Boolean,
				default: () => (false)
			}
		},
		methods: {
			handleSkip() {
				if (this.loginFlag) {
					uni.navigateTo({
						url: "/pages/login/login"
					})
				} else {
					uni.navigateTo({
						url: "/pages/edit/edit"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.userLogin {
		height: 80px;
		width: 100%;
		display: flex;

		.img {
			height: 62px;
			width: 62px;
			background-color: #ccc;
			border-radius: 50%;
			margin-top: 9px;
			float: left;
			margin-right: 14px;
		}

		.text {
			height: 80px;
			float: left;
			color: #fff;
			padding-top: 10px;
			margin-right: 15px;

			.loginText {
				font-size: 18px;
			}

			.title {
				font-size: 13px;
			}
		}

		.vip {
			padding-top: 25px;
			color: #f0c211;
			font-size: 12px;
		}

		.iconfont {
			float: right;
			height: 18px;
			color: #fff;
			margin-left: auto;
			margin-top: 30px;
		}
	}
</style>
