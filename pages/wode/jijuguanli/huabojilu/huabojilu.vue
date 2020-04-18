<template>
	<view>
		<!-- 选择框 -->
		<view class="select">
			<view class="select-view">
				<view class="select-div">
					<view class="select-text">类 型</view>
					<image class="image" src="../../../../static/huoban/xjx.png"></image>
				</view>
				<view class="shuxian"></view>
				<view class="select-div">
					<view class="select-text">类 型</view>
					<image class="image" src="../../../../static/huoban/xjx.png"></image>
				</view>
			</view>
			<view class="hengxian"></view>
			<view class="select-div1">
				<view class="div-text">全部</view>
				<view class="shuxian1"></view>
				<view class="div-text">划拨记录</view>
				<view class="shuxian1"></view>
				<view class="div-text">上级回拨</view>
				<view class="shuxian1"></view>
				<view class="div-text">我的回拨</view>
			</view>
			<view class="hengxian"></view>
			<button>确 定</button>
		</view>
		<!--  -->
		<view class="content">
			<view class="content-view">
				<view class="content-div">
					<view class="div">
						<view class="content-text">接受人:畅伙伴C</view>
						<view class="content-text1">已成功</view>
					</view>
					<view class="div">
						<view class="name">发起人:畅伙伴H</view>
						<view class="time">2019/12/06 14:06</view>
					</view>
				</view>
				<view class="hengxian1"></view>
				<view class="content-div">
					<view class="div">
						<view class="content-text">接受人:畅伙伴C</view>
						<view class="content-text2">已失效</view>
					</view>
					<view class="div">
						<view class="name">发起人:畅伙伴H</view>
						<view class="time">2019/12/06 14:06</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.select {
	width: 90%;
	height: 350rpx;
	background-color: #ffffff;
	margin-left: 5%;
	border-radius: 20rpx;
	margin-top: 2%;
}
.select-view {
	width: 100%;
	display: flex;
}
.select-div {
	display: flex;
	width: 50%;
	justify-content: center;
	margin-top: 3%;
}
.select-div1 {
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 3%;
}
.image {
	width: 25rpx;
	height: 25rpx;
	margin-top: 5%;
	margin-left: 3%;
}
.select-text {
	font-size: 30rpx;
	margin-top: 2%;
}
.shuxian {
	width: 1rpx;
	height: 58rpx;
	background-color: #c5c3c3;
	margin-top: 3%;
}
.hengxian {
	width: 94%;
	margin-left: 3%;
	height: 1rpx;
	background-color: #c5c3c3;
	margin-top: 3%;
}
.shuxian1 {
	width: 1rpx;
	height: 58rpx;
	background-color: #c5c3c3;
}
.div-text {
	width: 25%;
	text-align: center;
	font-size: 30rpx;
	margin-top: 1%;
}
button {
	background-color: #ff8c00;
	margin-top: 3.5%;
	width: 60%;
	color: #ffffff;
	font-weight: 600;
	letter-spacing: 25rpx;
}
.content {
	width: 90%;
	background-color: #ffffff;
	margin-left: 5%;
	border-radius: 20rpx;
	margin-top: 3%;
	overflow: hidden;
}
.content-div {
	height: 120rpx;
}
.div {
	display: flex;
	margin-top: 3%;
}
.content-text {
	font-size: 33rpx;
	margin-left: 8%;
	width: 40%;
}
.content-text1 {
	font-size: 28rpx;
	margin-left: 33%;
	color: #ff8c00;
}
.content-text2 {
	font-size: 28rpx;
	margin-left: 33%;
	color: #666;
}

.name {
	font-size: 25rpx;
	color: #666;
	margin-left: 8%;
}
.time {
	font-size: 25rpx;
	color: #666;
	margin-left: 31%;
}
.hengxian1 {
	width: 94%;
	margin-left: 3%;
	height: 1rpx;
	background-color: #c5c3c3;
}
</style>
