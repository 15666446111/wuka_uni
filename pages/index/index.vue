<template>
	<view>
		
		<view class="logo-view">
			<image class="logo" src="/static/index/logo.png"></image>
		</view>
		
		<view class="user-name">
			<view class="user-name-view">
				<view class="iconfont iconmobile"></view>
				<input class="user-inpu" placeholder="请输入用户账号" type="number" v-model="account" />
			</view>
			<view class="user-name-view">
				<view class="iconfont iconlock"></view>
				<input class="user-inpu" placeholder="请输入密码" password="true" v-model="password" />
			</view>
		</view>
		
		<view class="checkbox">
			<checkbox checked="true">记住密码</checkbox>
		</view>
		
		<button class="loginButton" @click="submit">立即登录</button>
		
		<view class="d-flex">
			<view class="d-box">
				<view class="forget">忘记密码？</view>
				<view class="forget register"><navigator url="./register">用户注册</navigator></view>
			</view>
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
			//验证用户名
			if (!this.validate('account')){
				return false;
			};
			//验证密码
			if (!this.validate('password')){
				return false;
			};
			
			uni.request({
				url: 'http://www.chb.com/api/V1/login',
				method: 'POST',
				data: {
					account: this.account,
					password: this.password
				},
				success: res => {
					// var jsarr=JSON.parse(res.data);
					console.log(res.data.success != undefined);
					if (res.data.success) {
						uni.switchTab({
							url: '/pages/shouye/shouye'
						});
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: res.data.error.message,
							icon: 'none'
						});
					}
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};
</script>

<style>
@import 'style/index.css';
</style>
