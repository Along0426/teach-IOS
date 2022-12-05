<template>
	<view class="bindPhone">
		<view class="getBack iconfont icon-fanhui" @click="$router.back()"></view>
		<view class="content">
			<view class="title">绑定手机号</view>
			<view class="phone">
				<view class="iconfont icon-yonghu"></view>
				<input type="text" placeholder="请输入手机号" :value="form.phone" @blur="getPhone">
			</view>
			<view class="code">
				<view class="iconfont icon-suo"></view>
				<input type="text" placeholder="验证码" :value="form.code" @blur="getCode">
				<gain-code :phone="form.phone"></gain-code>
			</view>

			<view class="binding" @click="btn">绑 定</view>
		</view>
	</view>
</template>

<script>
	import gainCode from '@/components/gainCode/gainCode.vue'
	import loginAPI from '@/api/login.js'
	export default {
		components: {
			gainCode
		},
		data() {
			return {
				form: {
					phone: "",
					code: ""
				}
			}
		},
		methods: {
			// 动态绑定手机号
			getPhone(event) {
				this.form.phone = event.detail.value
			},
			// 动态绑定验证码
			getCode(event) {
				this.form.code = event.detail.value
			},
			// 绑定按钮事件
			btn() {
				if (!this.form.code) {
					uni.showToast({
						title: "请输入验证码",
						icon: 'none',
						duration: 2000
					})
					return
				}
				this.handlebinding(this.form)
			},
			handlebinding(form) {
				loginAPI.binding(form).then((res) => {
					console.log(res);
					if (res.code == 20000) {
						uni.showToast({
							title: "绑定成功",
							icon: 'none',
							duration: 2000
						})
						uni.switchTab({
							url: "/pages/my/my"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	uni-page-body {
		height: 100%;
	}

	.bindPhone {
		height: 100%;
		background-image: linear-gradient(to right, #85f7b6, #8ed6ef);
		overflow: hidden;

		.getBack {
			position: absolute;
			top: 15px;
			left: 20px;
			font-size: 18px;
			color: #fff;
		}

		.content {
			height: calc(100% - 100px);
			margin-top: 100px;
			background-color: #fff;
			border-radius: 12px 12px 0 0;
			box-sizing: border-box;
			padding: 25px 35px 0;

			.title {
				font-size: 22px;
			}

			.phone {
				width: 100%;
				height: 50px;
				margin-top: 35px;
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

				input {
					width: calc(100% - 50px);
					height: 50px;
					line-height: 50px;
					color: #b9bac8;
					font-size: 16px;
				}
			}

			.code {
				width: 100%;
				height: 50px;
				margin-top: 35px;
				margin-bottom: 25px;
				background-color: #f5f5f5;
				border-radius: 3px;
				overflow: hidden;
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

				input {
					width: calc(100% - 150px);
					height: 50px;
					line-height: 50px;
					color: #b9bac8;
					font-size: 16px;
				}
			}

			.binding {
				width: 100%;
				height: 50px;
				background-color: #5ccc84;
				color: #fff;
				text-align: center;
				line-height: 50px;
				font-size: 17px;
				border-radius: 3px;
			}

		}
	}
</style>
