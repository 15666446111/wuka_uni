<template>
	<view class="">
		<view class="gy-head">
			<view class="gy-head-portrait"><text>畅伙伴</text></view>
			<view class="gy-hserial-name">
				<view class="gy-name">畅伙伴</view>
				<view class="gy-serial">100000003461969</view>
			</view>
			<image src="/static/dingwei.png" class="gy-hserial-src"></image>
		</view>
		<view class="gy-payment">
			<view class="gy-wallet ">
				<image src="/static/EPOS/qianbao.png" class="gy-wallet-src" />
				<text class="gy-account" style="margin-left: 20upx; font-size:28upx; color: #333;">我的账户</text>
				<text class="gy-deposit">提 现</text>
			</view>
			<view class="gy-xian"></view>
			<view class="gy-TouchBalance" style="display: flex;">
				<view class="gy-Touch">
					<view class="gy-Touch-text">账户余额D0(元)</view>
					<view class="gy-Touch-name">0.00</view>
				</view>
				<view class="gy-shuaxian"></view>
				<view class="gy-Touch">
					<view class="gy-Touch-text">账户余额T1(元)</view>
					<view class="gy-Touch-name">0.00</view>
				</view>
			</view>
		</view>
		
		<view class="gy-list">
			<block v-for="(item, index) in list" :key="index">
				<navigator :url="item.url">
				<view class="gy-list-view">
					<image class="gy-list-img" :src="item.img"></image>
					<view class="gy-list-text">{{ item.text }}</view>
					<image class="gy-list-src" :src="item.src"></image>
				</view>
				<view class="gy-xian"></view>
				</navigator>
			</block>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					img: '/static/EPOS/jiaoyi.png',
					text: '交易记录',
					src: '/static/EPOS/jiantou.png',
					url:'/pages/shouye/EPOS/jiaoyijilv/jiaoyijilv'
				},
				{
					img: '/static/EPOS/jilu.png',
					text: '提现记录',
					src: '/static/EPOS/jiantou.png',
					url:'/pages/shouye/EPOS/tixianjilu/tixianjilu'
				},
				{
					img: '/static/EPOS/feilv.png',
					text: '费率信息',
					src: '/static/EPOS/jiantou.png',
					url:'/pages/shouye/EPOS/feilvxinxi/feilvxinxi'
				},
				{
					img: '/static/EPOS/jiesuanka.png',
					text: '结算卡管理',
					src: '/static/EPOS/jiantou.png',
					url:'/pages/shouye/EPOS/jiesuanka/jiesuanka'
				},
				{
					img: '/static/EPOS/zhifuka.png',
					text: '支付卡管理',
					src: '/static/EPOS/jiantou.png',
					url:'/pages/shouye/EPOS/zhifuka/zhifuka'
				},
				{
					img: '/static/EPOS/mima.png' ,
					text: '修改支付密码',
					src: '/static/EPOS/jiantou.png',
					url:'/pages/shouye/EPOS/zhifumima/zhifumima'
				}

			]
		};
	},

	methods: {}
};
</script>

<style>
.gy-list {
	background-color: #ffffff;
	height: 100%;
	width: 94%;
	margin-left: 3%;
	border-radius: 10px;
	box-shadow: #ddd 3px 3px 8px 3px;
	margin-top: 2%;
}
.gy-list-view {
	height: 100upx;
	line-height: 100upx;
	display: flex;
	position: relative;
}
.gy-list-img {
	margin-left: 35upx;
	margin-top: 30upx;
	width: 50upx;
	height: 50upx;
}
.gy-list-src {
	top: 30upx;
	position: absolute;
	right: 40upx;
	width: 40upx;
	height: 40upx;
}
.gy-list-text {
	margin-top: 30upx;
	margin-left: 15upx;
}

.gy-head {
	display: flex;
	background-color: #ffffff;
	height: 230upx;
	width: 94%;
	position: relative;
	margin-left: 3%;
	border-radius: 10px;
	box-shadow: #ddd 3px 3px 8px 3px;
	margin-top: 2%;
}
.gy-head-portrait {
	background-color: #f64547;
	color: #fff;
	width: 120upx;
	text-align: center;
	height: 120upx;
	line-height: 120upx;
	border-radius: 50px;
	margin-top: 55upx;
	margin-left: 5%;
}
.gy-hserial-name {
	margin-top: 55upx;
	height: 120upx;
	line-height: 120upx;
	margin-left: 30upx;
	color: #333;
	font-size: 30upx;
}
.gy-hserial-src {
	width: 45upx;
	height: 45upx;
	position: absolute;
	right: 60upx;
	bottom: 90upx;
}

.gy-payment {
	width: 94%;
	height: 220upx;
	background-color: #fff;
	margin-top: 2%;
	margin-left: 3%;
	border-radius: 10px;
	box-shadow: #ddd 3px 3px 8px 3px;
}
.gy-wallet {
	display: flex;
	height: 80upx;
	line-height: 80upx;
	position: relative;
}
.gy-wallet-src {
	width: 40upx;
	height: 40upx;
	margin-top: 20upx;
	margin-left: 20upx;
}
.gy-deposit {
	border: 1upx solid #ff0000;
	border-radius: 5px;
	width: 90upx;
	text-align: center;
	color: #ff0000;
	height: 35upx;
	line-height: 35upx;
	font-size: 25upx;
	position: absolute;
	right: 40upx;
	bottom: 23upx;
}
.gy-xian {
	width: 94%;
	height: 1upx;
	background-color: #f1f1f1;
	margin-left: 3%;
}
.gy-shuaxian {
	width: 1upx;
	height: 115upx;
	background-color: #f1f1f1;
	margin-top: 15upx;
}
.gy-Touch {
	width: 50%;
	text-align: center;
	margin-top: 20upx;
}
.gy-Touch-text {
	color: #666;
}

.gy-Touch-name {
	color: #ff0000;
}
</style>
