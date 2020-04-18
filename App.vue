<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
/* 官方UI库 */
@import url('/common/uni.css');
/* 自定义图标库 */
@import url('/common/icon.css');
/* UI基础库 */
@import url('/common/zcm-main.css');
/* 公共样式 */
@import url('/common/common.css');

uni-checkbox .uni-checkbox-input {
	border-radius: 50% !important;
	color: #ffffff !important;
	transform: scale(0.8, 0.8);
}

uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
	color: #fff;
	border-color: #EE4000;
	background: #EE4000;
}
uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:after {
	font-size: 18px;
}
</style>
