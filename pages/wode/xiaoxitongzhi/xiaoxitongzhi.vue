<template>
	<section class="Tabs-Page">
		<s-tabs :effect="true" v-model="activeTab" @change="change" :nav-per-view="5">
			<s-tab title="<span>全部</span>">
				<view class="bviews">
					<view class="bview1">
						<view class="title">注册通知！</view>
						<view class="time">2019-9-17 10:29:07</view>
						<text class="text">手机号为18753947081的用户通过您的二维码注册成功，成为您的直推合伙人</text>
					</view>
				</view>
			</s-tab>
			<s-tab title="注册">
				<view class="bviews">
					<view class="bview1">
						<view class="title">注册通知！</view>
						<view class="time">2019-9-17 10:29:07</view>
						<text class="text">手机号为18753947081的用户通过您的二维码注册成功，成为您的直推合伙人</text>
					</view>
				</view>
			</s-tab>
			<s-tab title="订单"></s-tab>
			<s-tab title="收益"></s-tab>
			<s-tab title="实名"></s-tab>
		</s-tabs>
	</section>
</template>

<script>
import sTabs from '@/s-ui/s-tabs';
import sTab from '@/s-ui/s-tab';

export default {
	components: {
		sTabs,
		sTab
	},
	data() {
		return {
			ClassIndex: 3,
			classIndex: 3,
			tabIndex: 0,
			srcollinto: '',
			scrollH: 500,
			activeTab: 0,
			orde: [{ name: '待查询' }, { name: '已完成' }, { name: '已失败' }, { name: '无效订单' }],
			shangcheng: [
				{
					number: '订单号:SC2019122109551972539097',
					pay: '待付款',
					img: 'https://ccx.changhuoban.com/public/upload/xcx/sct.png',
					text: 'MP70普通版（3台）',
					figure: '¥594.00 × 1',
					total: '合计：¥594.00',
					delete: '删除订单'
				},
				{
					number: '订单号SC2019122109551972539097',
					pay: '已付款',
					img: 'https://ccx.changhuoban.com/public/upload/xcx/sct.png',
					text: 'MP70普通版（3台）',
					figure: '¥594.00 × 1',
					total: '合计：¥594.00',
					delete: '删除订单'
				}
			]
		};
	},
	methods: {},
	onLoad() {}
};
</script>
<style>
.body {
	overflow: hidden;
}

.top {
	display: flex;
	font-size: 28rpx;
	overflow: hidden;
}

.bview {
	margin-left: 80rpx;
	margin-top: 20rpx;
	margin-bottom: 10rpx;
}

.bviews {
	width: 100%;
	height: 150upx;
	background-color: white;
	margin-top: 20upx;
}

.bview1 {
	position: relative;
	display: flex;
	height: 200upx;
	line-height: 200upx;
}

.title {
	position: absolute;
	left: 20upx;
	top: 10upx;
	font-size: 26upx;
}

.time {
	position: absolute;
	right: 10rpx;
	top: 10rpx;
	font-size: 26rpx;
}

.text {
	width: 100%;
	position: absolute;
	top: 50rpx;
	left: 20rpx;
	font-size: 24rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: rgb(136, 136, 136);
	height: 80upx;
	line-height: 80upx;
}
</style>
