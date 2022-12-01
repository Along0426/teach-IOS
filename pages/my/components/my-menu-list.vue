<template>
	<view class="menuList">
		<menu-list v-for="item in menuList" :icon="item.icon" :text="item.title" :url="item.url" :loginFlag="loginFlag">
		</menu-list>
	</view>
</template>

<script>
	import menuList from '@/components/menuList/menuList.vue'
	export default {
		components: {
			menuList
		},
		props: {
			menuList: {
				type: Array,
				default: () => ([])
			},
			// true 为用户未登录
			loginFlag: {
				type: Boolean,
				default: () => (false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menuList {
		width: 100%;
		margin-top: 20px;

		.menu:last-child {
			border: none;
		}
	}
</style>
