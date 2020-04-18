<template>
	<view>
		<view class="shiming">
			<view class="renzheng">
				<view class="picture">
					<image class="img" src="../../../static/shuzi/IDcard.png" mode="widthFix" />
					<view class="name">身份征正面</view>
					<view class="text">（文字清晰,四角齐全）</view>
				</view>
				<view class="picture">
					<image class="img" src="../../../static/shuzi/IDcard2.png" mode="widthFix" />
					<view class="name">身份征反面</view>
					<view class="text">（文字清晰,四角齐全）</view>
				</view>
			</view>
			<view class="renzheng">
				<view class="picture">
					<image class="img" src="../../../static/shuzi/Idcard3.png" mode="widthFix" />
					<view class="name">身份征正面</view>
					<view class="text">（文字清晰,四角齐全）</view>
				</view>
				<view class="picture">
					<image class="img" src="../../../static/shuzi/bank_card.png" mode="widthFix" />
					<view class="name">身份征反面</view>
					<view class="text">（文字清晰,四角齐全）</view>
				</view>
			</view>
		</view>
		<navigator url="shimingxinxi/shimingxinxi" class="url"><button class="button-1" id="button-1">下 一 步</button></navigator>
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
.renzheng {
	width: 100%;
}
.picture {
	width: 48%;
	margin-left: 1%;
	margin-top: 2%;
/* 	background-color: #fff;
	border-radius: 15px 15px 15px 15px; */
}
.renzheng {
	display: flex;
}
.img {
	width: 90%;
	margin-left: 20rpx;
	margin-top: 20rpx;
}
.name {
	text-align: center;
	font-size: 25rpx;
	color: #666;
}
.text {
	text-align: center;
	margin-top: 5rpx;
	font-size: 30rpx;
}
button {
	width: 80%;
	background-color: #ff8c00;
	color: #fff;
	margin-top: 100rpx;
	border-radius: 30px 30px 30px 30px;
}

.url {
	width: 700rpx;
	margin: 0 auto;
}
</style>
