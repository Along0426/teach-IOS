<template>
	<view class="myTabbarList">
		<tabbar-list v-for="(item,index) in tabList" :icon="item.icon" :text="item.text" :url="item.url"
			:loginFlag="loginFlag">
		</tabbar-list>
	</view>
</template>

<script>
	import tabbarList from "@/components/tabbarList/tabbarList.vue"
	export default {
		props: {
			tabList: {
				type: Array,
				default: () => ([])
			},
			// true 为用户未登录
			loginFlag: {
				type: Boolean,
				default: () => (false)
			}
		},
		data() {
			return {}
		},
		components: {
			tabbarList
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.myTabbarList {
		width: 100%;
		height: 75px;
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		border-radius: 3px;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
	}
</style>
