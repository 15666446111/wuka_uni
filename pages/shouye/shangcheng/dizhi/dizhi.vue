<template>
	<view class="ID">
		<!-- 按钮 -->
		<navigator url="../xinzeng/xinzeng" open-type="navigate">
			<view id="button">
				<image class="button-img" src="../../../../static/+.png" mode="widthFix"></image>
				<view class="button-text">添加新的发货地址</view>
			</view>
		</navigator>

		<view class="site">
			<view class="site-view">
				<view class="site-name">畅伙伴</view>
				<view class="site-phone">1588888888</view>
			</view>
			<view class="site-text"><view class="site-name">山东省济南市天桥区银座好望江A做12楼1203室</view></view>
			<view class="site-xian"></view>
			<!-- 默认框 -->
			<view class="group">
				<view class="ckeck">
					<checkbox checked="true" color="#ED6E11"><text class="moren">默认</text></checkbox>
				</view>
				<!-- 编辑删除 -->
				<view class="site-for">
					<view class="for">
						<image class="for-img" src="../../../../static/shanchu.png" mode="widthFix"></image>
						<view class="for-text">删除</view>
					</view>
					<view class="for">
						<image class="for-img" src="../../../../static/xiugai.png" mode="widthFix"></image>
						<view class="for-text">编辑</view>
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
.ID {
	background-color: #dbdada;
	width: 100%;
	height: 1530rpx;
	overflow: hidden;
}
#button {
	width: 80%;
	position: fixed;
	bottom: 10%;
	left: 10%;
	background-color: #ff8c00;
	color: #fff;
	display: flex;
	justify-content: center;
	height: 80rpx;
	border-radius: 40rpx 40rpx 40rpx 40rpx;
}

.button-img {
	width: 6%;
	margin-top: 22rpx;
}

.button-text {
	margin-top: 18rpx;
	margin-left: 10rpx;
}

/*  */
.site {
	width: 90%;
	background-color: #fff;
	margin-top: 10rpx;
	margin-left: 5%;
	border-radius: 7px 7px 7px 7px;
}

.site-xian {
	width: 100%;
	height: 1px;
	background-color: #c5c3c3;
	margin-top: 20rpx;
}

.site-view {
	width: 90%;
	margin-left: 5%;
	height: 80rpx;
	display: flex;
}

.site-name {
	font-size: 27rpx;
	margin-top: 30rpx;
}

.site-phone {
	font-size: 27rpx;
	margin-left: 55%;
	margin-top: 30rpx;
}

.group {
	height: 80rpx;
	margin-top: 20rpx;
	width: 95%;
	display: flex;
	margin-left: 2.5%;
}
.ckeck {
	width: 25%;
	font-size: 28rpx;
}

.site-text {
	margin-top: 30rpx;
	margin-left: 5%;
	height: 60rpx;
}

.site-for {
	display: flex;
	margin-left: 240rpx;
}

.for {
	display: flex;
	margin-top: 10rpx;
	margin-left: 20rpx;
}

.for-img {
	width: 40rpx;
}

.for-text {
	font-size: 28rpx;
	color: red;
	margin-left: 20rpx;
	width: 60rpx;
}
</style>
