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
				<text class="checkbox-text">畅伙伴</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="phone-time">
				<view class="phone">
					<view class="phone-name">手机号</view>
					<view class="phone-text">13512341234</view>
				</view>
				<view class="phone">
					<view class="phone-name">加入时间</view>
					<view class="phone-text">2019/12/11/13:25</view>
				</view>
			</view>
			<view class="xian"></view>
			<view class="examine">
				<view class="examine-text">查看分润参数</view>
				<view class="shu"></view>
				<view class="examine-text">查看更多信息</view>
			</view>
		</view>
		<view class="view">
			<view class="checkbox-view">
				<text class="checkbox-text">畅伙伴</text>
				<checkbox class="checkbox" color="#f98021"></checkbox>
			</view>
			<view class="xian"></view>
			<view class="phone-time">
				<view class="phone">
					<view class="phone-name">手机号</view>
					<view class="phone-text">13512341234</view>
				</view>
				<view class="phone">
					<view class="phone-name">加入时间</view>
					<view class="phone-text">2019/12/11/13:25</view>
				</view>
			</view>
			<view class="xian"></view>
			<view class="examine">
				<view class="examine-text">查看分润参数</view>
				<view class="shu"></view>
				<view class="examine-text">查看更多信息</view>
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
	.examine{
		width: 100%;
		height: 100%;
		display: flex;
	}
	.shu{
		width: 1upx;
		height: 80upx;
		background-color:#F1F1F1;
		margin-top: 5upx;
		}
		.examine-text{
			width: 50%;
			text-align: center;
			height: 90upx;
			line-height: 90upx;
			font-size: 30upx;
			color: #333;
		}
	
	
.phone-time {
	width: 100%;
	height: 100%;
	display: flex;
}
.phone {
	width: 50%;
	text-align: center;
	height: 150upx;
}
.phone-name{
	font-size: 30upx;
	color: #666;
	height: 75upx;
	line-height: 75upx;

}
.phone-text{
		color: #f98021;
		font-size: 30upx;
}
.view {
	width: 92%;
	height: 100%;
	margin-left: 4%;
	background-color: #ffffff;
	margin-top: 2%;
	border-radius: 15upx 15upx 15upx 15upx;
	box-shadow: #d9d9d9 0 0 4px 0;
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
	font-size: 30upx;
	color: #333;
}
.checkbox {
	position: absolute;
	right: 5%;
}
.xian {
	width: 96%;
	margin-left: 2%;
	height: 1upx;
	background-color: #f1f1f1;
}

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
</style>
