<template>
	<view>
		<view class="sousuo">
			<view class="sousuo-view">
				<image class="input-image" src="/static/left_fdj.png" mode="aspectFit"></image>
				<input class="input" placeholder="请正确输入有效SN号" />
			</view>
		</view>
		<view class="view">
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="checkbox-view">
				<text class="checkbox-text">SN:123456789987654</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
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
/* 搜索框 */
.sousuo {
	width: 90%;
	margin-left: 5%;
	background-color: #fff;
	border-radius: 15upx 15upx 15upx 15upx;
	box-shadow: #d9d9d9 0 0 4px 0;
	margin-top: 2%;
}
.sousuo-view {
	width: 100%;
	display: flex;
	margin-left: 3%;
}
.input-image {
	width: 60upx;
	height: 60upx;
	margin-top: 10upx;
}
.input {
	border: 0;
	width: 88%;
	height: 80upx;
}

/* 内容 */
.view {
	width: 92%;
	height: 100%;
	margin-left: 4%;
	background-color: #ffffff;
	margin-top: 2%;
}

.checkbox-view {
	width: 100%;
	height: 90upx;
	line-height: 90upx;
	border-radius: 15upx 15upx 15upx 15upx;
	position: relative;
}
.checkbox-text {
	margin-left: 5%;
	font-size: 31upx;
	color: #333;
}
.checkbox {
	position: absolute;
	right: 5%;	
}
.xian{
	width: 96%;
	margin-left: 2%;
	height: 1upx;
	background-color: #F1F1F1; 
}
</style>