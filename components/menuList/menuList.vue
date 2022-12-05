<template>
	<view class="menu" @click="handleSkip(url)">
		<view class="icon iconfont" :class="icon"></view>
		<view class="text">{{text}}</view>
		<view class="iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: () => ("")
			},
			text: {
				type: String,
				default: () => ("")
			},
			url: {
				type: String,
				default: () => ("")
			},
			// true 为用户未登录
			loginFlag: {
				type: Boolean,
				default: () => (false)
			}
		},
		name: "menuList",
		data() {
			return {

			};
		},
		methods: {
			handleSkip(url) {
				if (url !== "/pages/coupon/coupon") {
					uni.navigateTo({
						url: url
					})
					return
				}
				if (this.loginFlag) {
					uni.navigateTo({
						url: "/pages/login/login"
					})
					return
				}
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu {
		width: calc(100% - 30px);
		height: 60px;
		line-height: 60px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f9f9f9;
		box-sizing: border-box;
		margin: 0 15px;

		.icon {
			font-size: 18px;
			margin-right: 10px;
			color: #006beb;
		}

		.text {
			font-size: 15px;
			color: #35393e;
		}

		.icon-jinru {
			margin-left: auto;
			color: #c8c8c8;
			font-size: 15px;
		}
	}
</style>
