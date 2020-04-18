<template>
	<view class="content">
		<view class="parcel">
			<view class="common"><text class="common-text">常 见 问 题</text></view>
			<view class="">
				<view class="issue">
					<text class="issue-text">畅伙伴功能介绍</text>
					<image class="issue-img" src="/static/jiantou.png" />
				</view>
				<view class="xian"></view>
				<view class="issue">
					<text class="issue-text">钱客通功能介绍</text>
					<image class="issue-img" src="/static/jiantou.png" />
				</view>
				<view class="xian"></view>
				<view class="issue">
					<text class="issue-text">钱包功能介绍</text>
					<image class="issue-img" src="/static/jiantou.png" />
				</view>
				<view class="xian"></view>
				<view class="issue">
					<text class="issue-text">磁条卡认证方式</text>
					<image class="issue-img" src="/static/jiantou.png" />
				</view>
				<view class="xian"></view>
			</view>
		</view>
		<view class="">
			<view class="pos">
				<view class="for">
					<view class="pos-view">
						<image class="pos-img" src="/static/新建文件夹/xiugai.png" />
						<view class="pos-text">装机问题</view>
					</view>
					<view class="pso-xian"></view>
				</view>
				<view class="for">
					<view class="pos-view">
						<image class="pos-img" src="/static/新建文件夹/xiugai.png" />
						<view class="pos-text">到账问题</view>
					</view>
					<view class="pso-xian"></view>
				</view>
				<view class="for">
					<view class="pos-view">
						<image class="pos-img" src="/static/新建文件夹/xiugai.png" />
						<view class="pos-text">使用问题</view>
					</view>
					<view class="pso-xian"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
	page{
		background-color: #f1f1f1;
	}
.parcel {
	overflow: hidden;
	width: 100%;
}

.issue {
	width: 100%;
	line-height: 100upx;
	display: flex;
	position: relative;
	height: 100upx;
	background-color: #fff;
}

.common {
	height: 100upx;
	line-height: 100upx;
}

.common-text {
	margin-left: 4%;
	font-size: 30rpx;
	font-weight: 600;
}

.issue-img {
	width:60upx;
	height: 60upx;
	position: absolute;
	right: 20upx;
	top: 20upx;
}

.issue-text {
	width: 80%;
	margin-left: 4%;
	font-size: 28rpx;
}

.xian {
	width: 100%;
	height: 1px;
	background-color: #dbdada;
}

/*  */
.pos {
	width: 100%;
	background-color: #fff;
	height: 100rpx;
	position: fixed;
	bottom: 0;
	display: flex;
}
.for {
	width: 100%;
	display: flex;
}

.pos-view {
	width: 100%;
	display: flex;
}

.pos-img {
	width: 60upx;
	height: 60upx;
	margin-top: 25rpx;
	margin-left: 30rpx;
}

.pos-text {
	width: 60%;
	font-size: 28rpx;
	margin-top: 30rpx;
	margin-left: 10rpx;
}

.pso-xian {
	width: 1px;
	height: 80rpx;
	background-color: #c5c3c3;
	margin-top: 10rpx;
}
</style>

