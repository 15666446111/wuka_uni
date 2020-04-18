<template>
	<view>
		
		<view class="logo-view">
			<image class="logo" src="/static/index/logo.png"></image>
		</view>
		
		<view class="user-name">
			<view class="user-name-view">
				<view class="iconfont iconkey"></view>
				<input class="user-inpu" placeholder="请输入您的推荐码" type="text" />
			</view>
			<view class="user-name-view">
				<view class="iconfont iconuser"></view>
				<input class="user-inpu" placeholder="请输入您的昵称" type="text" />
			</view>
			
			<view class="user-name-view">
				<view class="iconfont iconmobile"></view>
				<input class="user-inpu" placeholder="请输入您的手机号" type="number" v-model="phone" />
			</view>
			
			<view class="user-name-view">
				<view class="iconfont iconsafetycertificate"></view>
				<input class="user-inpu" placeholder="动态验证码" type="number" />
				<view class="auth" v-model="code" @click="getCode">{{codeTime>0?codeTime+'s后发送' : "获取验证码"}}</view>
			</view>
			<view class="user-name-view">
				<view class="iconfont iconlock"></view>
				<input class="user-inpu" placeholder="请输入6-16位密码" password="true" />
			</view>
		</view>
		
		<button class="registerButton" @click="submit">立即注册</button>
		
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
			code:'',
			codeTime:0
		};
	},
	methods: {
		//验证码倒计时
			getCode(){
				if(this.codeTime>0){
					return;
				}
				this.codeTime=60
				let timer =setInterval(()=>{
					if(this.codeTime>=1){
						this.codeTime--
					}else{
						this.codeTime=0
						clearInterval(timer)
					}
				},1000)
			},
			//表单验证
			validata(){
				//手机号正则
				var mPattern = /^1[34578]\d{9}$/; 
				//输出 true
				console.log((mPattern.test(this.phone)));
			},
		submit(){
			//表单验证
			if(!this.validata()) return;
			//提交	
			//提交服务器
			//登录成功处理
		}
	},

};
</script>

<style>
@import 'style/register.css';
</style>
