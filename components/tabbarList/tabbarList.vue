<template>
	<view class="tabbar" @click="handleSkip(url)">
		<view class=" iconfont" :class="icon">

		</view>
		<view class="text">
			{{text}}
		</view>
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
		name: "tabbarList",
		data() {
			return {

			};
		},
		methods: {

			handleSkip(url) {
				if (url === "/pages/study/study") {
					uni.switchTab({
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
	.tabbar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 15px 0;
		box-sizing: border-box;

		.iconfont {
			font-size: 20px !important;
			color: #fbca30;
		}

		.text {
			font-size: 13px;
			color: #202830;
		}
	}
</style>
