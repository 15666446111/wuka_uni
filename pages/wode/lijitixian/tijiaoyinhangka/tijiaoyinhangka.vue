<template>
	<view class="background">
		<view class="top">
			<image src="../../../../static/minsheng.png" class="img"></image>
			<view class="fview">
				<view class="ms">民生银行</view>
				<view class="cxk">储蓄卡</view>
			</view>
			<view class="kahao">622622******8888</view>
			<view class="top2">
				<checkbox class="radio"></checkbox>
				<view class="mbc">默认提现银行卡</view>
			</view>
		</view>
		<navigator url="../tijiaoyinhka/tijiaoyinhka"><button class="bck">添加银行卡</button></navigator>
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
.background {
	min-height: 100%;
	overflow: hidden;
	height: 1000rpx;
}

.top {
	width: 92%;
	height: 200rpx;
	border-radius: 8rpx;
	background-color: white;
	margin: 0 auto;
	margin-top: 20rpx;
	position: relative;
	overflow: hidden;
}

.img {
	width: 80rpx;
	height: 80rpx;
	position: absolute;
	top: 30rpx;
	left: 30rpx;
}

.fview {
	display: flex;
}

.ms {
	position: absolute;
	font-size: 33rpx;
	left: 128rpx;
	top: 28rpx;
	letter-spacing: 10rpx;
}

.cxk {
	position: absolute;
	right: 40rpx;
	top: 28rpx;
	color: rgb(150, 150, 150);
	font-size: 27rpx;
}

.kahao {
	position: absolute;
	top: 78rpx;
	left: 130rpx;
	font-size: 27rpx;
	color: rgb(150, 150, 150);
}

.top2 {
	display: flex;
}

.radio {
	position: absolute;
	top: 136rpx;
	left: 40rpx;
	width: 20upx;
}

.mbc {
	position: absolute;
	top: 142rpx;
	left: 101rpx;
	font-size: 24rpx;
}

.bck {
	width: 70%;
	margin: 0 auto;
	height: 70rpx;
	color: white;
	margin-top: 50rpx;
	font-size: 28rpx;
	background-position-x: 128rpx;
	background-position-y: 6rpx;
	background-color: rgb(252, 148, 50);
}
</style>
