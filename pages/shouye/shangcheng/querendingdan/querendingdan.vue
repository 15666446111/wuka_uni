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
			<view class="pos-text">¥{{moneyTotal / 100}}</view>
			<view class="pos-view1">
				<view @click="addOrderCreate"><view class="pos-Text">提交订单</view></view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';

import net from '../../../../common/net.js';
export default {
	components: {
		uniNumberBox
	},
	data() {
		return {
			// 商品信息
			productInfo: {},
			// 数量
			num: 1,
			// 总金额
			moneyTotal: '',
		};
	},
	
	onLoad(options) {
		if (options.num) {
			this.num = options.num;
		}
		// 获取产品信息
		this.getProductInfo(options.product);
	},

	methods: {
		// 获取产品信息
		getProductInfo(index) {
	    	net({
	        	url:"/V1/getproductinfo",
	            method:'get',
				data:{ product: index},
	            success: (res) => {
					this.productInfo = res.data.success.data;
					this.moneyTotal = this.productInfo.price * this.num;
					// console.log(this.productInfo);
	            }
	      	})
		},
		
		// 生成订单
		addOrderCreate(){
			var address = '测试固定收货地址';
			net({
	        	url:"/V1/addOrderCreate",
	            method: 'POST',
				data:{
					'product_id' : this.productInfo.id,
					'product_price' : this.productInfo.price,
					'numbers' : this.num,
					'price' : this.moneyTotal,
					'address' : address,
				},
	            success: (res) => {
					console.log(res);
					if (res.data.success) {
						uni.showToast({
							title: '下单成功',
							icon: 'none'
						})
					} else {
						uni.showToast({
							title: res.data.error.message,
							icon: 'none'
						})
					}
	            }
	      	})
		}
	}
};
</script>

<style>
	@import url("../../style/place_order.css");
</style>
