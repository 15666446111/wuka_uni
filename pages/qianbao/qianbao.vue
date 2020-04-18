<template>
	<view>
		<view style="height: 20upx;"></view>
		<view class="head">
			<view class="head-text">总资产(元)</view>
			<view class="head-figure">0</view>
			<view class="head-collect">
				<view class="collect">
					<view class="collect-name">分润钱包</view>
					<view class="collect-figure">0.00</view>
				</view>
				<view class="shu"></view>
				<view class="collect">
					<view class="collect-name">返现钱包</view>
					<view class="collect-figure">0.00</view>
				</view>
				<view class="shu"></view>
				<view class="collect">
					<view class="collect-name">其他钱包</view>
					<view class="collect-figure">0.00</view>
				</view>
			</view>
		</view>
		<view style="height: 240upx;"></view>
		<button class="deposit">提 现</button>
		<button class="record">提 现 记 录</button>

		<view class="view"><text>资产明细</text></view>
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
.head {
	background: linear-gradient(to right, #efac73, #ec9a50);
	color: #fff;
	width: 92%;
	margin-left: 4%;
	border-radius: 20upx;
	overflow: hidden;
	height: 380upx;
}
.head-text {
	margin-left: 40upx;
	margin-top: 30upx;
	height: 80upx;
	line-height: 80upx;
	font-size: 30upx;
}
.head-figure {
	margin-left: 40upx;
	font-size: 38upx;
	font-weight: 600;
	height: 100upx;
	line-height: 100upx;
}
.head-collect {
	display: flex;
	height: 130upx;
}
.collect {
	width: 33%;
	text-align: center;
}
.shu {
	width: 1upx;
	height: 50upx;
	background-color: #fff;
	margin-top: 20upx;
}
.collect-name {
	font-size: 30upx;
}
.collect-figure {
	font-size: 30upx;
}
button {
	width: 80%;
	margin-left: 10%;
}
.deposit {
	background-color: #ee9900;
	color: #fff;
	height: 80upx;
	line-height: 80upx;
}
.record {
	color: #ee9900;
	margin-top: 60upx;
	border: 0.5upx #ee9900 solid;
	height: 80upx;
	line-height: 80upx;
}
.view {
	width: 100%;
	text-align: center;
	height: 120upx;
	line-height: 120upx;
	font-size: 36upx;
	color: #ee9900;
}
</style>
