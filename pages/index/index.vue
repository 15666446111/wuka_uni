<template>
	<view class="">
		<view class="logo-view"><image class="logo" src="/static/index/logo.png"></image></view>
		<view class="user-name">
			<view class="user-name-view">
				<image class="user-image" src="/static/index/shouji.png"></image>
				<input class="user-inpu" placeholder="请输入用户密码" type="number" v-model="account" />
			</view>
			<view class="user-name-view">
				<image class="user-image" src="/static/index/mima.png"></image>
				<input class="user-inpu" placeholder="请输入密码" password="true" v-model="password" />
			</view>
		</view>
		<view class="checkbox"><checkbox checked="true">记住密码</checkbox></view>
		<button @click="submit">登录</button>
		<view class="d-flex">
			<view class="forget">忘记密码？</view>
			<navigator url="./login">
			<view class="forget yonghu">用户注册</view>
			</navigator>
		</view>
		<view class="annotation">
			<text>注册即代表同意</text>
			<text style="color:#ff9800;">《畅伙伴服务协议》</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			account: '',
			password: '',
			//验证规则
			rules: {
				account: [
					{
						rule: /^1[3456789]\d{9}$/,
						msg: '手机号格式不正确'
					}
				],
				password: [
					{
						rule: /^.{6,16}$/,
						msg: '密码格式不正确，长度为6-16个字符'
					}
				]
			}
		};
	},
	methods: {
		//表单验证
		validate(key) {
			var check = true;
			this.rules[key].forEach(v => {
				//验证失败
				if (!v.rule.test(this[key])) {
					uni.showToast({
						title: v.msg,
						icon: 'none'
					});
					check = false;
					return false;
				}
			});
			return check;
		},
		//提交表单
		submit() {
			uni.request({
				url: 'http://wk.changhuoban.com/api/V1/login',
				method: 'POST',
				data: {
					account: this.account,
					password: this.password
				},
				success: res => {
					// var jsarr=JSON.parse(res.data);
					console.log(res.data.success != undefined);
					if (res.data.success != undefined) {
						uni.switchTab({
							url: '/pages/shouye/shouye'
						});
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: '登录失败，账号或密码错误',
							icon: 'none'
						});
					}
				},
				fail: () => {},
				complete: () => {}
			});
			//验证用户名
			if (!this.validate('account')) return;
			//验证密码
			if (!this.validate('password')) return;
		}
	}
};
</script>

<style>
page {
	background-color: #fff;
}
.logo-view {
	width: 100%;
	height: 450upx;
	background-color: #fff;
	align-items: center; /*垂直居中*/
	display: flex; /*flex布局*/
	justify-content: center; /*flex属性 水平居中*/
}
.logo {
	width: 280upx;
	height: 280upx;
}
.user-name-view {
	width: 60%;
	height: 150upx;
	line-height: 150upx;
	align-items: center; /*垂直居中*/
	display: flex; /*flex布局*/
	justify-content: center; /*flex属性 水平居中*/
	border-bottom: 1px solid #eee;
	margin-left: 20%;
}
.user-image {
	width: 50upx;
	height: 50upx;
}
.user-inpu {
	color: #444;
	margin-left: 20upx;
}
.checkbox {
	width: 50%;
	margin-left: 20%;
	height: 120upx;
	line-height: 90upx;
}
button {
	width: 70%;
	background: linear-gradient(to right, #f64547, #fe695a);
	color: #fff;
	border-radius: 40upx;
}
.forget {
	color: #f64547;
	font-size: 33upx;
	height: 80upx;
	line-height: 80upx;
	margin-left: 12%;
}
.forget {
	color: #f64547;
	font-size: 33upx;
	height: 80upx;
	line-height: 80upx;
	margin-left: 12%;
	margin-top: 20upx;
}
.yonghu {
	margin-left: 300upx;
}
.annotation {
	color: #666;
	width: 80%;
	margin-left: 15%;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
}
</style>
