<script src="./iconfont.js"></script>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 公共样式表 */
	@import url("@/common/css/free.css");

	/* 字体图标库 */
	@import url("@/common/css/iconfont.css");
	@import url("@/download/font/iconfont.css");

	/* 动画库 */
	@import url("@/common/css/animate.min.css");

	@import url("@/common/css/common.css");

	html,
	body {
		height: 100%;
	}
</style>
