<template>
	<view class="body">
		<view class="container2">
			<swiper class="sw">
				<swiper-item><image mode="aspectFit" src="https://ccx.changhuoban.com/public/upload/xcx/td1.jpg" class="img"></image></swiper-item>
			</swiper>
		</view>
		<button>长按图片保存</button>
	</view>
</template>

<script>
	export default{
		props:{
			resdata: Array
		}
	}
</script>

<style>
</style>
