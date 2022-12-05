<template>
	<view class="login">
		<view class="getBack iconfont icon-fanhui" @click="$router.back()"></view>
		<view class="content">
			<view class="title">
				{{flag?"登 录":"注 册"}}
			</view>
			<view class="form">
				<login-form :flag="flag" :loginForm="loginForm" @userLogin="userLogin" @getLoginForm="getLoginForm">
				</login-form>
			</view>
			<view class="editAccount">
				<view @click="flag=!flag">{{flag?"注册账号":"去登录"}}</view>
				<view @click="handleSkip">忘记密码？</view>
			</view>
			<view class="WX">
				<text class="iconfont icon-weixin"></text>
			</view>
			<view class="agreement" v-if="flag">
				<checkbox-group @change="checked=!checked">
					<label>
						<checkbox :checked="checked" style="transform:scale(0.7)" />
						<text>已阅读并同意用户协议&隐私声明</text>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
	import loginForm from '@/pages/login/components/loginForm.vue'
	import loginAPI from '@/api/login.js'
	export default {
		components: {
			loginForm
		},
		data() {
			return {
				// true 为登录页面
				flag: true,
				// 协议是否选中
				checked: false,
				// 注册表单数据
				loginForm: {
					// 用户名
					username: "",
					// 用户密码
					password: "",
					// 确认密码
					repassword: ""
				}
			};
		},
		methods: {
			// 清空表单数据
			emptyForm() {
				this.loginForm = {
					username: "",
					password: "",
					repassword: ""
				}
			},
			// 跳转页面
			handleSkip() {
				uni.navigateTo({
					url: "/pages/alterCode/alterCode"
				})
			},
			// 注册事件
			getLoginForm(form) {
				console.log(form);
				this.loginForm = form
				this.handleEnroll()
			},
			// 请求注册接口
			async handleEnroll() {
				loginAPI.enroll(this.loginForm).then((res) => {
					console.log(res);
					if (res.code == 20000) {
						uni.showToast({
							title: '注册成功',
							duration: 2000
						});
						this.emptyForm()
						this.flag = true
					}
				})
			},
			// 登录事件
			userLogin(form) {
				if (!this.checked) {
					uni.showToast({
						title: '请先阅读并同意用户协议&隐私声明',
						duration: 2000,
						icon: 'none'
					});
					return
				}
				this.loginForm = form
				loginAPI.Login(this.loginForm).then((res) => {
					if (res.code == 20000) {
						uni.showToast({
							title: '登录成功',
							duration: 2000
						});

						this.$store.commit("setToken", res.data)
						this.handleSkip(res)
					}
				})
			},
			handleSkip(res) {
				if (res.data.phone) {
					uni.reLaunch({
						url: "/pages/my/my"
					})
				} else {
					uni.navigateTo({
						url: "/pages/bind-phone/bind-phone"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		height: 100%;
	}

	.login {
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

			.editAccount {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				margin: 35px 0;

				view:nth-child(1) {
					color: #9aeeb9;
				}

				view:nth-child(2) {
					color: #88847e;
				}
			}

			.WX {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				box-sizing: border-box;
				border: 2px solid #7bd19b;
				margin: auto;
				text-align: center;
				line-height: 50px;

				text {
					font-size: 25px;
					color: #5ccc84;
				}
			}

			.agreement {
				margin-top: 20px;

				checkbox {
					margin-left: 40px;
					vertical-align: middle;
				}

				text {
					font-size: 13px;
					color: #bab8b4;
				}
			}
		}
	}
</style>
