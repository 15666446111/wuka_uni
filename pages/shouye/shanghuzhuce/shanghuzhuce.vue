<template>
	<view class="body">
		<view class="container2">
			<image :src=src class="img"></image>
		</view>
		<button>长按图片保存</button>
	</view>
</template>

<script>
import net from '../../../common/net.js';

export default {
	data() {
		return {
			src : null
		};
	},
	
	onLoad() {
		this.getMerchantPic();
	},
	
	methods: {
		// 获取分享图
		getMerchantPic(){
	    	net({
	        	url:"/V1/merchant_share",
	            method:'get',
	            success: (res) => {
					this.src = res.data.success.data.link;
	            } 
	      	})
		}
	},
};
</script>

<style>
@import '../style/merchant_register.css';
</style>
