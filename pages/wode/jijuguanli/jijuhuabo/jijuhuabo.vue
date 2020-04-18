<template>
	<view>
		<view class="back">
			<view class="view">
				<navigator url="../zhengcexuanze/zhengcexuanze">
					<view class="policy">
						<view class="model">选择划拨机具类型政策</view>
						<view class="amount">H9-298返460</view>
						<image class="model-image" src="/static/jiantou.png" mode="widthFix"></image>
					</view>
				</navigator>
			</view>
			<view class="view">
				<navigator url="../huobanxuanze/huaobanxuanze">
				<view class="policy">
					<view class="model">选择划拨伙伴</view>
					<view class="amount">-13812341234</view>
					<image class="model-image" src="/static/jiantou.png" mode="widthFix"></image>
				</view>
				</navigator>
			</view>
			<view class="bottom">
				<view class="bview">
					<navigator class="cancel" url="../qujianhuabo/qujianhuabo"><view>区间划拨</view></navigator>
					<navigator class="confirm" url="../xuanzehuabo/xuanzehuabo"><view>选择划拨</view></navigator>
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
.view {
	width: 92%;
	margin-left: 4%;
	height: 100%;
	border-radius: 15upx 15upx 15upx 15upx;
	box-shadow: #d9d9d9 0 0 4px 0;
	background-color: #fff;
	margin-top: 2%;
}
.policy {
	display: flex;
	position: relative;
}
.model {
	width: 50%;
	margin-left: 5%;
	font-size: 30upx;
	height: 100upx;
	line-height: 100upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.model-text {
	color: #333;
}
.model-name {
}
.amount {
	height: 100upx;
	line-height: 100upx;
	color: #f98021;
	margin-left: 50upx;
	width: 40%;
}
.model-image {
	width: 50upx;
	height: 50upx;
	top: 25upx;
	position: absolute;
	right: 20upx;
}
.xian {
	width: 92%;
	margin-left: 4%;
	background-color: #f1f1f1;
	height: 1upx;
}

.bottom {
	/* 	width: 100%;
	height: 100rpx;
	background-color: rgb(240, 239, 239);
	position: fixed;
	bottom: 0rpx; */

	position: fixed;
	width: 100%;
	background-color: #ff8c00;
	bottom: 0px;
	height: 100upx;
	text-align: center;
	line-height: 90upx;
	color: #fff;
	font-size: 35upx;
}

.bview {
	display: flex;
}

.cancel {
	width: 50%;
	height: 100upx;
	background-color: #ff8c00;
	text-align: center;
	padding-top: 20rpx;
	color: white;
}

.confirm {
	width: 50%;
	height: 100upx;
	background-color: #fff;
	text-align: center;
	padding-top: 20rpx;
	color: #666;
}
</style>
