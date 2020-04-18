<template>
	<view>
		<view id="view">
			<view id="view_view">
				<image src="../../../../static/sousuo.png"></image>
				<input placeholder="  请输入有效的SN号" class="v_input" placeholder-class="place" />
			</view>
		</view>
		<view id="body">
			<view id="view2">
				<view class="views" id="v1">全部</view>

				<view class="views" id="v2">已绑定</view>

				<view class="views" id="v3">未绑定</view>

				<view class="views" id="v4">已激活</view>
			</view>
			<view id="view3">
				<view class="view_sn">
					<view class="p1">SN:123456789123456789</view>
					<view class="p2">已绑定/已激活</view>
					<view class="p3">
						活动：
						<view class="p3_1">H9</view>
						-298返460
					</view>
					<view class="p4">绑定时间：2019/12/6 15：12</view>
					<view class="divLine"></view>
				</view>
				<view class="xian"></view>
				<view class="view_sn">
					<view class="p1">SN:123456789123456789</view>
					<view class="p2">已绑定/已激活</view>
					<view class="p3">
						活动：
						<view class="p3_1">H9</view>
						-298返460
					</view>
					<view class="p4">绑定时间：2019/12/6 15：12</view>
					<view class="divLine"></view>
				</view>
				<view class="xian"></view>
				<view class="view_sn">
					<view class="p1">SN:123456789123456789</view>
					<view class="p2">已绑定/已激活</view>
					<view class="p3">
						活动：
						<view class="p3_1">H9</view>
						-298返460
					</view>
					<view class="p4">绑定时间：2019/12/6 15：12</view>
					<view class="divLine"></view>
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
.xian {
	width: 100%;
	height: 1upx;
	background-color: #f1f1f1;
}
#body {
	width: 100%;
	overflow: hidden;
	padding: 20px;
	height: 1000rpx;
}
#view {
	width: 100%;
	height: 50px;
	background-color: rgb(252, 252, 252);
	overflow: hidden;
}

#view_view {
	width: 90%;
	height: 36px;
	background: rgb(238, 238, 238);
	overflow: hidden;
	margin-top: 8px;
	border-radius: 5px;
	margin-left: 20px;
}

.v_input {
	background-color: rgb(238, 238, 238);
	width: 70%;
	margin: 0 auto;
	margin-top: 8px;
	display: inline-block;
}

.place {
	color: rgb(192, 192, 192);
}

#view image {
	width: 20px;
	height: 20px;
	display: inline-block;
	margin-left: 16px;
	margin-bottom: 2px;
}

.views {
	width: 20%;
	height: 50upx;
	line-height: 50upx;
	/* background-color:rgb(243, 169, 9);*/
	background-color: rgb(253, 253, 253);
	text-align: center;
	margin-top: 10px;
	color: rgb(168, 168, 168);
	display: inline-block;
	font-size: 12px;
	padding: 3px;
	margin-top: -10px;
	border-right: 1px solid #c4c4c4;
	box-shadow: 5rpx 5rpx 5rpx 5rpx rgb(204, 204, 204);
}

.view_sn {
	width: 90%;
	background-color: rgb(255, 255, 255);
	overflow: hidden;
	padding: 6px;
	margin-left: -10px;
	border-radius: 3px;
}

.divLine {
	background: #ffffff;
	width: 100%;
	height: 1rpx;
}

.view3 {
	width: 90%;
	height: 1000px;
	background-color: rgb(7, 0, 0);
}

.p1 {
	display: inline-block;
	font-size: 30upx;
}

.p2 {
	display: inline-block;
	font-size: 28upx;
	color: #ff8c00;
	font-weight: bold;
	float: right;
	overflow: hidden;
}

.p3 {
	display: inline-block;
	font-size: 12px;
	color: #666;
}

.p3_1 {
	display: inline-block;
	font-size: 12px;
	color: #ff8c00;
}

.p4 {
	display: inline-block;
	font-size: 12px;
	float: right;
	margin-top: 3px;
	color: #666;
}

#v1 {
	background-color: #ff8c00;
	color: white;
}
</style>
