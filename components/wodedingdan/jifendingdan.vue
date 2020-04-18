<template>
	<view>
		<!-- 积分订单 -->
		<view class="shoppingMall">
			<view class="orderForm1">
				<view class="form1">
					<view class="form-text1">审核中</view>
					<view class="form-xian2"></view>
					<view class="form-text1">审核成功</view>
					<view class="form-xian2"></view>
					<view class="form-text1">审核失败</view>
					<view class="form-xian2"></view>
					<view class="form-text1">无效订单</view>
				</view>
			</view>
			<view class="mall">
				<!-- 标识 -->
				<view class="order-number"><view class="number">订单号SC2019122109551972539097</view></view>
				<!-- 横线 -->
				<view class="mall-xian1"></view>
				<!-- 内容 -->
				<view class="AoolyFor">
					<view class="applyFor">
						<view class="bank">工商银行</view>
						<view class="appluFor-time">2019-11-29 19:21:15</view>
					</view>
					<view class="integrals">
						<view class="integral">
							<view class="integral-name">1000000</view>
							<view class="integral-text">使用积分</view>
						</view>
						<view class="integral">
							<view class="integral-name">1040.00</view>
							<view class="integral-text">兑换金额</view>
						</view>
						<view class="status"><view class="status-text">审核成功</view></view>
					</view>
				</view>

				<view class="mall-xian"></view>
				<view class="turn"><view class="turn-text">兑换成功</view></view>
			</view>
		</view>
	</view>
</template>

<script></script>
<style>
	/* 积分兑换 */
	
	.bank {
		width: 50%;
		margin-left: 40rpx;
		margin-top: 50rpx;
		font-size: 35rpx;
	}
	
	.appluFor-time {
		width: 50%;
		margin-top: 55rpx;
		font-size: 26rpx;
		color: #666;
	}
	
	.integrals {
		display: flex;
		height: 130rpx;
	}
	
	.integral {
		width: 30%;
		margin-top: 15rpx;
		text-align: center;
	}
	
	.integral-name {
		font-size: 30rpx;
		font-weight: 600;
		color: #444;
	}
	
	.integral-text {
		font-size: 25rpx;
		color: #666;
		margin-top: 5rpx;
	}
	
	.status {
		height: 60rpx;
		width: 150rpx;
		text-align: center;
		background-color: #888;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		margin-top: 15rpx;
		margin-left: 70rpx;
	}
	
	.status-text {
		font-size: 28rpx;
		margin-top: 8rpx;
		color: #fff;
	}
	
	.turn {
		background-color: #fff;
		height: 60rpx;
		border-radius: 7px 7px 7px 7px;
	}
	
	.turn-text {
		margin-left: 40rpx;
		font-size: 30rpx;
		color: red;
		margin-top: 25rpx;
	}
	
	/* 申卡订单 */
	.people {
		width: 90%;
		display: flex;
		margin-left: 5%;
		height: 80rpx;
	}
	
	.people-name {
		color: #ff8c00;
		font-size: 33rpx;
		font-weight: 600;
		margin-top: 20rpx;
		width: 18%;
	}
	
	.people-phone {
		color: #666;
		font-size: 25rpx;
		margin-top: 28rpx;
	}
	
	.banks {
		display: flex;
		width: 100%;
		height: 60rpx;
	}
	
	.banks-bank {
		width: 30%;
		text-align: center;
		font-size: 35rpx;
	}
	
	.banks-text {
		width: 70%;
		font-size: 32rpx;
	}
	
	.message {
		display: flex;
		width: 100%;
		margin-left: 5%;
		height: 30rpx;
		margin-top: 10rpx;
	}
	
	.message-name {
		font-size: 25rpx;
		color: #666;
	}
	
	.message-time {
		font-size: 25rpx;
		color: #666;
	}
	
	.inquire-mark {
		width: 100%;
		height: 80rpx;
		margin-top: 20rpx;
		display: flex;
		overflow: hidden;
	}
	
	.message-mark {
		color: #666;
		font-size: 23rpx;
		width: 60%;
		margin-top: 20rpx;
		position: absolute;
		left: 10%;
	}
	
	.message-inquire {
		background-color: #ff8c00;
		width: 25%;
		height: 55rpx;
		border-radius: 30rpx 30rpx 30rpx 30rpx;
		margin-left: 70%;
		margin-top: 1%;
		font-size: 30rpx;
	}
	
	.inquire-text {
		margin-top: 7rpx;
		color: #fff;
		text-align: center;
	}
</style>
