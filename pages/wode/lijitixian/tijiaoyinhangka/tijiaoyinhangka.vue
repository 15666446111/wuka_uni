<template>
	<view class="background">
		<navigator class="card-nav" v-for="(item, index) in cardList" :key="index" :url="'../../shezhi/xiugaijiesuanxinxi/settle_card_edit?card_id='+item.id">
			<view class="top">
				<image src="" class="img"></image>
				<view class="fview">
					<view class="ms">{{ item.name }}</view>
					<view class="cxk">储蓄卡</view>
				</view>
				<view class="kahao">{{ item.bank }}</view>
				<view class="top2" v-if="item.is_default == 1">
					<checkbox class="radio" checked="true" disabled="false"></checkbox>
					<view class="mbc">默认结算卡</view>
				</view>
			</view>
		</navigator>
		<navigator url="../../shezhi/xiugaijiesuanxinxi/xiugaijiesuanxinxi"><button class="bck">添加银行卡</button></navigator>
	</view>
</template>

<script>
import net from '../../../../common/net.js';
	
export default {
	data() {
		return {
			cardList: []
		};
	},
	
	onLoad() {
		// 获取银行卡列表
		this.getBankList();
		
		// 加载动画
		uni.showLoading();
	},
	
	methods: {
		// 获取银行卡列表
		getBankList(){
			net({
	        	url:"/V1/getBankInfo",
	            method:'get',
	            success: (res) => {
					uni.hideLoading();
					if (res.data.success) {
						this.cardList = res.data.success.data;
					} else {
						uni.showToast({
							title: res.data.error.message,
							icon: 'none',
							success : function(){
								setTimeout(function() {
									uni.navigateBack();
								}, 1500);
							}
						});
					}
	            }
	      	})
		}
	}
};
</script>

<style>
@import url("../../style/user_bank_card");
</style>
