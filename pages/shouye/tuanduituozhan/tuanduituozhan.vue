<template>
	<view class="body">
		<view class="container2">
			<swiper previous-margin="100rpx" next-margin="100rpx" class="sw">
				<swiper-item><image src="https://ccx.changhuoban.com/public/upload/xcx/td1.jpg" class="img"></image></swiper-item>
				<swiper-item><image src="https://ccx.changhuoban.com/public/upload/xcx/td2.jpg" class="img"></image></swiper-item>
				<swiper-item><image src="https://ccx.changhuoban.com/public/upload/xcx/td3.jpg" class="img"></image></swiper-item>
				<swiper-item><image src="https://ccx.changhuoban.com/public/upload/xcx/td4.jpg" class="img"></image></swiper-item>
				<swiper-item><image src="https://ccx.changhuoban.com/public/upload/xcx/td5.jpg" class="img"></image></swiper-item>
			</swiper>
		</view>
		<button>长按图片保存</button>
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
.container2 {
	width: 100%;
	height: 100%;
	margin-top: 50rpx;
	overflow: hidden;
}

.img {
	width: 90%;
	height: 100%;
	margin: 25rpx;
}

.sw {
	width: 100%;
	height: 1000rpx;
}

.back {
	width: 100%;
	height: 100%;
	overflow: hidden;
	min-height: 1300rpx;
}

button {
	width: 80%;
	background-color: #f0ad4e;
	color: white;
	margin: 0 auto;
	margin-top: 200rpx;
}
</style>
