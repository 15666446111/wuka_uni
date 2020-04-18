<template>
	<view class="">
		<view class="logo-view"><image class="logo" src="/static/index/logo.png"></image></view>
		<view class="user-name">
			<view class="user-name-view">
				<image class="user-image" src="/static/index/yqma.png"></image>
				<input class="user-inpu" placeholder="推荐码" type="number" />
			</view>
			<view class="user-name-view">
				<image class="user-image" src="/static/index/name.png"></image>
				<input class="user-inpu" placeholder="姓名" />
			</view>
			<view class="user-name-view">
				<image class="user-image" src="/static/index/shouji.png"></image>
				<input class="user-inpu" placeholder="手机号" type="number" v-model="phone" />
			</view>
			<view class="user-name-view">
				<image class="user-image" src="/static/index/shouji.png"></image>
				<input class="user-inpu" placeholder="动态验证码" type="number" />
				<view class="auth" v-model="code" @click="getCode">{{codeTime>0?codeTime+' s' : "获取验证码"}}</view>
			</view>
			<view class="user-name-view">
				<image class="user-image" src="/static/index/mima.png"></image>
				<input class="user-inpu" placeholder="请输入6-16位密码" password="true" />
			</view>
		</view>
		<button @click="submit">注册</button>
		<button>下载APP</button>
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
page {
	background-color: #fff;

}
.logo-view {
	width: 100%;
	height: 300upx;
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
	width: 80%;
	height: 100upx;
	line-height: 100upx;
	display: flex; 
	align-items: center; 
	/*justify-content: center; */
	border-bottom: 1px solid #eee;
	margin-left: 10%;
}
.user-image {
	width: 40upx;
	height: 40upx;
}
.user-inpu {
	color: #444;
	margin-left: 20upx;
	font-size: 30upx;
}
button {
	width: 70%;
	background: linear-gradient(to right, #f64547, #fe695a);
	color: #fff;
	margin-top: 15upx;
	height: 80upx;
	line-height: 80upx;
	font-size: 30upx;
	border-radius: 50upx;
}
.annotation{
	color: #666;
	width: 80%;
	margin-left: 15%;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
}
.auth{
	border: 1upx solid #f1f1f1;
	width: 180upx;
	text-align: center;
	color: #999;
	border-radius: 30upx;
	}
</style>
