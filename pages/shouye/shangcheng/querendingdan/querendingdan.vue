<template>
	<view>
		<view class="xian"></view>
		<view class="addressBar">
			<navigator url="../dizhi/dizhi">
				<view class="addressBar-name">畅伙伴 150****8888</view>
				<image class="addressBar-image" src="/static/jiantou.png"></image>
				<view class="d-flex">
					<view class="label">公司</view>
					<view class="site">山东省济南市某某区某某路2204号</view>
				</view>
			</navigator>
			<view class="caution"><text class="">为减少接触，您可以在收货详细地址后增加如小区北门、保安亭、等方便提货的地址</text></view>
		</view>
		<view class="hr"></view>
		<view>
			<view class="xian"></view>
			<view class="pay">
				<view class="pay-view">
					<image class="pay-img" src="../../../../static/wx.png" mode="widthFix" />
					<view class="pay-text">微信支付</view>
				</view>
				<view class="ckeck">
					<checkbox checked="true" color="#ED6E11"><text class="moren">默认</text></checkbox>
				</view>
			</view>
		</view>
		<view class="pos">
			<view class="post">实付款：</view>
			<view class="pos-text">¥594.00</view>
			<view class="pos-view1">
				<navigator url="../zhifufangshi/zhifufangshi" open-type="navigate"><view class="pos-Text">提交订单</view></navigator>
			</view>
		</view>
	</view>
</template>

<script>
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';
export default {
	components: {
		uniNumberBox
	},
	data() {
		return {};
	},

	methods: {}
};
</script>

<style>
	@import url("../../style/place_order.css");
</style>
