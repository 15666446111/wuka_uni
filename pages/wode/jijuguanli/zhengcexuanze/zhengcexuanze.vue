<template>
	<view>
		<view class="view"  >
			<view v-for="(item,index) in policy" :key="index">
			<view class="policy">
				<view class="model">
					<text class="model-name">{{item.name}}</text>
					<text class="model-text">{{item.text}}</text>
				</view>
				<view class="amount">{{item.amount}}</view>
				<image class="model-image" :src="item.src" mode="widthFix"></image>
			</view>
			<view class="xian"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			policy:[
				{
					name:"MP70",
					text:'-99返150(线下普通版)',
					amount:'500台',
					src:'/static/jiantou.png'
				},
				{
					name:"MP70",
					text:'-99返200',
					amount:'500台',
					src:'/static/jiantou.png'
				},
				{
					name:"H9",
					text:'-298返460',
					amount:'500台',
					src:'/static/jiantou.png'
				},
				{
					name:"H9",
					text:'-298返460',
					amount:'500台',
					src:'/static/jiantou.png'
				},
				{
					name:"H9",
					text:'-298返460',
					amount:'500台',
					src:'/static/jiantou.png'
				},
				{
					name:"H9",
					text:'-298返460',
					amount:'500台',
					src:'/static/jiantou.png'
				},
				{
					name:"H9",
					text:'-298返460',
					amount:'500台',
					src:'/static/jiantou.png'
				}
			]
		};
	},
	methods: {}
};
</script>

<style>
.view {
	width: 92%;
	margin-left: 4%;
	height: 100%;
	border-radius: 15upx 15upx 15upx 15upx;
	box-shadow: #d9d9d9 0 0 4px 0;
	background-color: #fff;
	margin-top: 2%;
}
.policy {
	display: flex;
	position: relative;
}
.model {
	width: 50%;
	margin-left: 5%;
	font-size: 30upx;
	height: 100upx;
	line-height: 100upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.model-text {
	color: #333;
}
.model-name {
	color: #f98021;
}
.amount {
	height: 100upx;
	line-height: 100upx;
	color: #999;
	margin-left: 130upx;
}
.model-image {
	width: 50upx;
	height: 50upx;
	top: 25upx;
	position: absolute;
	right: 20upx;
}
.xian {
	width: 92%;
	margin-left: 4%;
	background-color: #f1f1f1;
	height: 1upx;
}
</style>
