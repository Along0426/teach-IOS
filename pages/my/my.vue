<template>
	<view class="my">
		<view class="bg1">
		</view>
		<view class="bg2">
		</view>
		<view class="content">
			<!-- 用户信息组件 -->
			<my-login :loginFlag="loginFlag"></my-login>

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

	export default {
		data() {
			return {
				// tabbar 数据
				tabList: tabList(),
				// 菜单数据
				menuList: menuList(),
				// false 用户已登陆
				loginFlag: true
			};
		},
		components: {
			myLogin,
			myTabbar,
			myMenu
		},
		onLoad() {}
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

		.bg1 {
			height: 125px;
			background-color: #5ccc84;
		}

		.bg2 {
			margin-top: -1px;
			height: 25px;
			background-color: #5ccc84;
			border-radius: 0 0 180px 180px;
		}
	}
</style>
