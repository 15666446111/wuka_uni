<template>
	<view>
		<view class="back">
			<view class="view">
				<navigator url="../zhengcexuanze/zhengcexuanze">
					<view class="policy">
						<view class="model">选择划拨机具政策</view>
						<view class="amount">H9-298返460</view>
						<image class="model-image" src="/static/jiantou.png" mode="widthFix"></image>
					</view>
				</navigator>
			</view>
			<view class="view">
				<navigator url="../huobanxuanze/huaobanxuanze">
				<view class="policy">
					<view class="model">选择划拨伙伴</view>
					<view class="amount" v-if="partnerInfo.id == undefined">请选择</view>
					<view class="amount" v-else>{{partnerInfo.nickname}} - {{partnerInfo.account}}</view>
					<image class="model-image" src="/static/jiantou.png" mode="widthFix"></image>
				</view>
				</navigator>
			</view>
			<view class="bottom">
				<view class="bview">
					<navigator class="cancel" url="../qujianhuabo/qujianhuabo"><view>区间划拨</view></navigator>
					<navigator class="confirm" url="../xuanzehuabo/xuanzehuabo"><view>选择划拨</view></navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			partnerInfo: {},
		};
	},
	
	onLoad() {
		
	},
	
	onShow() {
		console.log(this.partnerInfo);
	},
	methods: {}
};
</script>

<style>
@import url("../../style/transfer.css");
</style>
