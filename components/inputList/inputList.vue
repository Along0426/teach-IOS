<template>
	<view class="inputs">
		<view class="iconfont" :class="item.icon"></view>
		<input class="input" type="text" @blur="getData" :value="item.value" :placeholder="item.title"
			:password="item.password">
	</view>
</template>

<script>
	export default {
		name: "inputList",
		props: {
			item: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {

			};
		},
		methods: {
			getData(event) {
				this.$emit("getData", {
					type: this.item.type,
					value: event.detail.value
				})
			}
		}
	}
</script>

<style lang="scss">
	.inputs {
		width: 100%;
		height: 50px;
		margin-bottom: 25px;
		background-color: #f5f5f5;
		border-radius: 3px;
		display: flex;

		.iconfont {
			width: 60px;
			font-size: 20px;
			color: #040404;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.input {
			width: calc(100% - 50px);
			height: 50px;
			line-height: 50px;
			color: #b9bac8;
			font-size: 16px;
		}
	}
</style>
