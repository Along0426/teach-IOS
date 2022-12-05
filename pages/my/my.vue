<template>
	<view class="my">
		<view class="bg"></view>
		<view class="content">
			<!-- 用户信息组件 -->
			<my-login :loginFlag="loginFlag" :userInfo="userInfo"></my-login>

			<!-- tabbar 组件 -->
			<my-tabbar :tabList="tabList" :loginFlag="loginFlag"></my-tabbar>

			<!-- 菜单组件 -->
			<my-menu :menuList="menuList" :loginFlag="loginFlag"></my-menu>
		</view>
	</view>
</template>

<script>
	// 用户&登录组件
	import myLogin from '@/pages/my/components/my-login.vue';
	// tabbar栏组件
	import myTabbar from "@/pages/my/components/my-tabbar-list.vue"
	// 菜单组件
	import myMenu from '@/pages/my/components/my-menu-list.vue'
	// 引入tabbar组件数据
	import tabList from "@/config/my-tabbar-list.js"
	// 引入菜单组件数据
	import menuList from '@/config/my-menu-list.js'
	// 导入vuex
	import store from '@/store/index.js'
	import Key from '@/config/KEY.js'

	export default {
		data() {
			return {
				// tabbar 数据
				tabList: tabList(),
				// 菜单数据
				menuList: menuList(),
				// false 用户已登陆
				loginFlag: true,
				// 用户名
				userInfo: {
					name: "",
					intro: "",
					vipFlag: true,
					id: 1
				}
			};
		},
		components: {
			myLogin,
			myTabbar,
			myMenu
		},
		onLoad() {
			if (uni.getStorageSync(Key.TOKEN_KEY)) {
				this.loginFlag = false
				this.userInfo.name = store.state.username
			}
		},
		onLaunch() {
			uni.switchTab({
				url: "/pages/my/my"
			})
		}
	}
</script>

<style lang="scss">
	.my {
		.content {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			padding: 0 14px;
			box-sizing: border-box;
		}

		.bg {
			height: 150px;
			background-color: #5ccc84;
			border-radius: 0 0 20px 20px;
		}
	}
</style>
