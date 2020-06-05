<template>
	<view class="body">
		<view class="container2">
			<swiper class="sw">
				<swiper-item><image mode="aspectFit" :src=images class="img"></image></swiper-item>
			</swiper>
		</view>
		<button>长按图片保存</button>
	</view>
</template>

<script>
import net from '../../../common/net.js';

export default {
	data() {
		return {
			images: ''
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
					console.log(res);
					this.images = res.data.success.data.link;
	            }
	      	})
		}
	},
};
</script>


<style>
@import '../style/team_ext.css';
</style>