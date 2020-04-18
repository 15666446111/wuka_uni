<template>
	<view>
		<view class="head">
			<view class="xinxi">
				<view class="text-name">
					<view class="text">持卡人</view>
					<input class="name" placeholder="畅伙伴" placeholder-class="place" />
				</view>
				<view class="xian"></view>
			</view>
			<view class="xinxi">
				<view class="text-name">
					<view class="text">身份征号</view>
					<input class="name" placeholder="370784111122223333" placeholder-class="place" />
				</view>
				<view class="xian"></view>
			</view>
			<view class="xinxi">
				<view class="text-name">
					<view class="text">结算银行</view>
					<input class="name" placeholder="浦发银行" placeholder-class="place" />
				</view>
				<view class="xian"></view>
			</view>
			<view class="xinxi">
				<view class="text-name">
					<view class="text">结算卡号</view>
					<input class="name" placeholder="6222 0000 0000 0000 000" placeholder-class="place" />
				</view>
<!-- 				<view class="xian"></view> -->
			</view>
<!-- 			<view class="xinxi">
				<view class="text-name">
					<view class="text">所属省市</view>
					<input class="name" placeholder="某某省某某市某某区某某街道某某村138号" placeholder-class="place" />
				</view>
				<view class="xian"></view>
			</view> -->
<!-- 			<view class="yinang"><view class="jiesuan">结算开户行</view></view>
			<input placeholder="请输入结算卡开户行" class="rule_input" placeholder-class="place" /> -->
		</view>
		<navigator url="../xiangqing/xiangqing" open-type="navigate" class="url"><button>确认提交</button></navigator>
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
	margin-top: 20rpx;
	box-shadow: #ddd 3px 3px 8px 3px;
}
.text-name {
	display: flex;
	background-color: #fff;
	width: 100%;
	height: 100rpx;
}
.text {
	width: 20%;
	margin-top: 28rpx;
	margin-left: 30rpx;
	font-size: 28rpx;
}
.name {
	width: 70%;
	margin-top: 30rpx;
	font-size: 28rpx;
	color: #666;
}
.xian {
	width: 94%;
	height: 1px;
	background-color: #c5c3c3;
	margin-left: 3%;
}
.yinang {
	width: 30%;
}
.jiesuan {
	margin-top: 20rpx;
	width: 100%;
	height: 70rpx;
	font-size: 33rpx;
	text-align: center;
}

.rule_input {
	background-color: #fff;
	width: 100%;
	height: 100rpx;
	text-indent: 30rpx;
}
button {
	width: 80%;
	background-color: #ff8c00;
	color: #fff;
	margin-top: 100rpx;
	border-radius: 30px 30px 30px 30px;
}

.url {
	width: 700rpx;
	margin: 0 auto;
}
</style>
