<template>
	<view>
		<!-- 头部 -->
		<view class="titlebars">
			<view class="titlebar">
				<view class="rise">
					<view class="rise-head">
						<image class="head" src="/static/timg.jpg" mode="widthFix" />
						<view class="name">畅 伙 伴</view>
						<view class="shiming">
							<image class="shiming-img" src="/static/xz.png" />
							<view class="shiming-text">已实名</view>
						</view>
					</view>
					<view class="ID">ID:80000001</view>
				</view>
			</view>

			<view class="earnings">
				<navigator url="lijitixian/lijitixian">
				<view class="tixian">提现</view>
				</navigator>
				<view class="earning" style="color: #666; margin-top: 10upx;"><text>总资产(元)</text></view>
				<view class="earning"><text style="color: #EE9900; font-size: 30upx;">0.00</text></view>
				<view class="across"></view>

				<view class="eings d-flex">
					<view class="eings-view">
						<view style="color: #666;">分润钱包(元)</view>
						<view style="color: #EE9900;">0.00</view>
					</view>
					<view class="shuxian"></view>
					<view class="eings-view">
						<view style="color: #666;">返现钱包(元)</view>
						<view style="color: #EE9900;">0.00</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 头部数据框 -->
		<!-- 内容 -->
		<view class="NavigationBar">
			<view class="Bar1">
				<navigator class="url" url="jijuguanli/jijuguanli">
					<view class="div">
						<image class="div-img" src="/static/wd/jj.png" />
						<view class="div-text">机具管理</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
					<view class="across"></view>
				</navigator>
				<navigator class="url" url="wodedingdan/wodedingdan">
					<view class="div">
						<image class="div-img" src="/static/wd/sh.png" />
						<view class="div-text">我的订单</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
					<view class="across"></view>
				</navigator>
				<navigator class="url" url="wodezhengc/wodezhengc">
					<view class="div">
						<image class="div-img" src="/static/wd/cp.png" />
						<view class="div-text">我的政策</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
					<view class="across"></view>
				</navigator>

				<navigator class="url" url="jifenshangcheng/jifenshangcheng">
					<view class="div">
						<image class="div-img" src="/static/wd/sc.png" />
						<view class="div-text">积分商城</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
				</navigator>

				<view class="across"></view>
				<navigator class="url" url="../shouye/zaixiankefu/zaixiankefu">
					<view class="div">
						<image class="div-img" src="/static/wd/kf.png" />
						<view class="div-text">在线客服</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
					<view class="across"></view>
				</navigator>

				<navigator class="url" url="xiaoxitongzhi/xiaoxitongzhi">
					<view class="div">
						<image class="div-img" src="/static/wd/xiaoxi.png" />
						<view class="div-text">消息通知</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
					<view class="across"></view>
				</navigator>
				<navigator class="url" url="shezhi/shezhi">
					<view class="div">
						<image class="div-img" src="/static/xtsz.png" />
						<view class="div-text">系统设置</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
					<view class="across"></view>
				</navigator>
				<navigator class="url" url="shimingrenzheng/shimingrenzheng">
					<view class="div">
						<image class="div-img" src="/static/wd/rz.png" />
						<view class="div-text">实名认证</view>
						<image class="arrows" src="/static/jiantou.png" />
					</view>
				</navigator>
			</view>
			<!-- 第三 -->
			<view class="Bar1"></view>
		</view>
		<view style="height: 150upx;"></view>
		<view style="height: 80upx;"></view>
	</view>
</template>
<script>
export default {
	data() {},
	methods: {}
};
</script>

<style>
/*数据栏*/

.earnings {
	width: 92%;
	height: 240rpx;
	background-color: #fff;
	position: absolute;
	top: 160rpx;
	left: 4%;
	border-radius: 7px 7px 7px 7px;
	box-shadow: #666 0rpx 2rpx 8rpx 0rpx;
}
.tixian {
	position: absolute;
	border-radius:12upx;
	box-shadow: #f0f0f0 0rpx 2rpx 8rpx 0rpx; 
	border: 1upx solid #f0f0f0;
	width: 100upx;
	text-align: center;
	right: 60upx;
	top: 40upx;
	color: #666;
}
.earning {
	width: 100%;
	text-align: center;
	font-size: 30upx;
}
.eings-view {
	width: 50%;
	text-align: center;
	margin-top: 10upx;
}
.shuxian {
	width: 1upx;
	height: 100upx;
	background-color: #f0f0f0;
	margin-top: 10upx;
}
.across {
	width: 90%;
	height: 1upx;
	background-color: #f0f0f0;
	margin-left: 5%;
}

.titlebars {
	width: 100%;
	height: 330rpx;
	background-color: #ff8c00;
	position: relative;
}

.botn-1 {
	text-align: center;
	margin-top: 3rpx;
	font-size: 30rpx;
}

.botn {
	border-radius: 20px 0px 0px 20px;
	position: absolute;
	left: 75%;
	top: 20%;
	background-color: #ffb31f;
	width: 25%;
	height: 50rpx;
	box-shadow: rgb(238, 114, 42) 10rpx 0rpx 10rpx 10rpx;
	color: #fff;
}

.titlebar {
	width: 100%;
}

.rise-head {
	display: flex;
	height: 80rpx;
}

.head {
	width: 14%;
	border-radius: 60rpx 60rpx 60rpx 60rpx;
	margin-top: 5%;
	margin-left: 5%;
}
.name {
	font-size: 34rpx;
	color: #fff;
	width: 18%;
	height: 50rpx;
	margin-left: 15rpx;
	margin-top: 5%;
}
/*ID框*/
.ID {
	font-size: 30rpx;
	color: #fff;
	margin-left: 21%;
	margin-top: 0.5%;
}

/*实名框*/

.shiming {
	border: 1px solid #fff;
	border-radius: 10px 10px 10px 10px;
	height: 30upx;
	display: flex;
	position: absolute;
	left: 40%;
	top: 15%;
}
.shiming-img {
	width: 30upx;
	height: 30upx;
	margin-top: 2%;
}

.shiming-text {
	font-size: 22upx;
	color: #fff;
	margin-top: -5%;
}

/*内容*/
.NavigationBar {
	width: 100%;
	height: 100%;
	margin-top: 14%;
}
.Bar {
	width: 92%;
	height: 277rpx;
	background-color: #fff;
	border-radius: 10px;
	margin-top: 11%;
	margin-left: 4%;
	box-shadow: #efe9e9 3px 3px 8px 3px;
}

.Bar1 {
	width: 92%;
	background-color: #fff;
	border-radius: 10px;
	margin-top: 3%;
	margin-left: 4%;
	box-shadow: #efe9e9 3px 3px 8px 3px;
}

.div {
	width: 100%;
	display: flex;
	position: relative;
	height: 100upx;
}

.div-img {
	width: 65upx;
	height: 65upx;
	margin-left: 9%;
	margin-top: 3.5%;
}

.div-text {
	margin-top: 4%;
	margin-left: 1%;
	font-size: 28rpx;
	font-weight: 400;
	height: 55upx;
}

.arrows {
	width: 50upx;
	height: 50upx;
	margin-top: 4%;
	right: 40upx;
	position: absolute;
}
</style>
