<template>
	<view class="loginForm">
		<view v-for="item in inputList">
			<input-list v-if="item.loginFlag?true:flag==item.loginFlag" :item.sync="item" @getData="getData">
			</input-list>
		</view>

		<view class="login" @click="btn">
			{{flag?"登 录":"注 册"}}
		</view>
	</view>

</template>

<script>
	import inputList from '@/components/inputList/inputList.vue'
	export default {
		components: {
			inputList
		},
		props: {
			// true 为登录页面
			flag: {
				type: Boolean,
				default: () => (true)
			},
			loginForm: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
				inputList: [{
					icon: "icon-yonghu",
					title: "请输入用户名",
					type: 'username',
					// 是否为密码栏
					password: false,
					value: "",
					// 登录页面是否显示
					loginFlag: true,
				}, {
					icon: "icon-suo",
					title: "请输入密码",
					type: 'password',
					password: true,
					value: "",
					loginFlag: true,
				}, {
					icon: "icon-suo",
					title: "请输入确认密码",
					type: 'repassword',
					password: true,
					value: "",
					loginFlag: false,
				}]
			}
		},
		methods: {
			getData(obj) {
				switch (obj.type) {
					case 'username':
						this.loginForm.username = obj.value
						break;
					case 'password':
						this.loginForm.password = obj.value
						break;
					case 'repassword':
						this.loginForm.repassword = obj.value
						break;
					default:
						break;
				}
			},
			// 注册 & 登录按钮事件
			btn() {
				if (this.flag) {
					this.$emit("userLogin", this.loginForm)
				} else {
					if (this.loginForm.username == "") {
						uni.showToast({
							title: "用户名不能为空",
							icon: "none",
							duration: 2000
						})
						return
					}

					if (this.loginForm.username.length < 5) {
						console.log(1);
						uni.showToast({
							title: "用户名的长度需在5和20个字符之间",
							icon: "none",
							duration: 2000
						})
						return
					}

					if (this.loginForm.password == "") {
						uni.showToast({
							title: "密码不能为空",
							icon: "none",
							duration: 2000
						})
						return
					}

					if (this.loginForm.repassword == "") {
						uni.showToast({
							title: "确认密码不能为空",
							icon: "none",
							duration: 2000
						})
						return
					}

					if (this.loginForm.password !== this.loginForm.repassword) {
						uni.showToast({
							title: "[`密码`、`确认密码`] 参数必须是相等的",
							icon: "none",
							duration: 2000
						})
						return
					}

					this.$emit("getLoginForm", this.loginForm)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loginForm {
		margin-top: 30px;

		.login {
			width: 100%;
			height: 50px;
			background-color: #5ccc84;
			color: #fff;
			text-align: center;
			line-height: 50px;
			font-size: 16px;
			border-radius: 3px;
		}
	}
</style>
