<template>
	<view>
		<!-- 选择栏 -->
		<view class="head"><image class="head-img" src="https://ccx.changhuoban.com/public/upload/xcx/sct.png" mode="widthFix" /></view>
		<!-- 价格 -->
		<view class="head-view">
			<view class="head-text">MP70普通版（3台）</view>
			<view class="head-money">¥594.00</view>
		</view>
		<!-- 详情 -->
		<view class="xian"></view>
		<view class="xian-text">商品详情</view>
		<view class="xian"></view>
		<view class="introduces">
			<view class="introduce"><view class="introduce-name">终端费率：</view></view>
			<view class="introduce-view">
				<view class="introduce-text">贷记卡：0.6%秒到（单笔不加）</view>
				<view class="introduce-text">借记卡：0.5%-20元封顶</view>
				<view class="introduce-text">云闪付：0.38秒到（限额1000以内）</view>
				<view class="introduce-text">免密免签：0.38秒到（限额1000以内）</view>
				<view class="introduce-text">微信：0.38%秒到（单笔2000，A类商户可申请提高）</view>
				<view class="introduce-text">支付宝：0.38%秒到（单笔2000，A类商户可申请提高）</view>
				<view class="introduce-text">银联二维码：0.38%秒到（单笔2000，A类商户可申请提高</view>
			</view>
		
			<view class="introduce"><view class="introduce-name1">激活返现政策：</view></view>
			<view class="introduce-view">
				<view class="introduce-text">1.终端激活:</view>
				<view class="introduce-text">用户绑定终端后成功冻结服务费累计198元，则视为终端激活（建议首次刷卡200元，选择1：消费）。</view>
				<view class="introduce-text">2.激活奖励:</view>
				<view class="introduce-text">成功激活次日奖励248元。</view>
				<view class="introduce-text">3.达标返现:</view>
				<view class="introduce-text">终端自激活之日起，180日内，贷记卡交易累计48万元视为达标，奖励198元至钱客通用户。</view>
			</view>
		
			<view class="introduce"><view class="introduce-name">备注：</view></view>
			<view class="introduce-view">
				<view class="introduce-text">产品全国包邮（除港澳台及新疆地区）</view>
				<view class="introduce-text">激活戒指日期为发货后4个月，如超过激活截止日期，不在发放激活返现</view>
			</view>
		</view>
		<!-- 底部 -->
<!-- 		<buttom-btn></buttom-btn> -->
		<view style="height: 100upx;"></view>
		<view class="d-flex a-stretch bg-white position-fixed left-0 right-0 bottom-0" style="height: 100upx; z-index: 100;">
			<view class="d-flex flex-column a-center j-center line-h-md " style="flex: 1.5; color: red;" hover-class="bg-light-secondary">
				价格:￥594.00
			</view>
			<view  class="  d-flex flex-column a-center j-center line-h-md main-bg-color text-white" 
			style="flex: 1;" @click="show">加入购物车</view>
			<navigator class="  d-flex flex-column a-center j-center line-h-md main-bg-color text-white"
			style="flex: 1; background-color: red;" url="../querendingdan/querendingdan">
			<view  >立即购买</view>
			</navigator>
		</view>
		<!-- 底部弹出框 -->
		<common-popup :popupClass="popupClass" @hide="hide">
			<!-- 弹出框内容 -->
			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="https://ccx.changhuoban.com/public/upload/xcx/sct.png" mode="widthFix" style="width: 180rpx; height: 180rpx;" class="border rounded"></image>
				<view class="pl-2">
					<Price priceSize="font-lg" unitSize="font">598</Price>
					<text class="d-block">MP70普通版(3台)</text>
				</view>
			</view>
			<view class="select">
				<view class="type">名称</view>
				<view class="MP70">MP70</view>
				<view class="select-view">
				<view class="type">类型</view>
				<view class="MP70">非扫码普通版</view>
				</view>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary"></view>
				<view class="d-flex j-sb a-center">
					<text>购买数量</text>
					<uni-number-box :min="1" :value="num" @change="num=$event"></uni-number-box>
				</view>
				<view class="main-bg-color text-white font-md d-flex a-center j-center "  hover-class="main-bg-hover-color"
				style="height: 100rpx; margin-left: -30rpx; margin-right: -30rpx; margin-top: 11%;" @tap.stop="hide">
					加入购物车
				</view>
			</view>
		</common-popup>
	</view>
</template>

<script>
import commonPopup from '@/components/common/common-popup.vue';
import radioGroup from '@/components/common/radio-group.vue';

export default {
	components: {
		commonPopup,
		radioGroup,
		// uniNumberBox
	},
	data() {
		return {
			num:"1",
			max:'5',
			label: {
				selected: 0,
				list: [{ name: 'MP70普通版(3台)' }]
			},
			popupClass: 'none'
		};
	},
	methods: {
		hide() {
			this.popupClass = 'hide';
			setTimeout(() => {
				this.popupClass = 'none';
			}, 200);
		},
		show() {
			this.popupClass = 'show';
		}
	}
};
</script>
<style>.head-img {
	width: 100%;
}

.head-view {
	margin-top: 15rpx;
	margin-left: 5%;
	width: 90%;
}

.head-text {
	font-size: 40rpx;
}

.head-money {
	font-size: 30rpx;
	color: red;
	margin-top: 15rpx;
}
/* 文字介绍 */
.xian {
	width: 100%;
	height: 1px;
	background-color: #c5c3c3;
	margin-top: 10rpx;
}
.xian-text {
	width: 90%;
	height: 45rpx;
	margin-top: 18rpx;
	margin-left: 5%;
	color: #333;
	font-size: 28rpx;
}

.introduces {
	width: 90%;
	margin-left: 4%;
	margin-top: 10rpx;
	height: 1200rpx;
}
.introduce-view {
	margin-top: 20rpx;
	font-size: 27rpx;
	color: #666;
}
.introduce-name {
	font-size: 30rpx;
	font-weight: 600;
	height: 50rpx;
	margin-top: 20rpx;
}
.introduce-name1 {
	font-size: 35rpx;
	font-weight: 600;
	height: 50rpx;
	margin-top: 20rpx;
}
	/* 底层 */
	.select-view{
		height: 180upx;
	}
.type {
	font-size: 28upx;
	font-weight: 600;
	margin-left: 3%;
	height: 80upx;
	line-height: 80upx;
	width: 40%;
}
.MP70{
	width: 30%;
	height: 60upx;
	line-height: 60upx;
	border: 1px solid #f98021;
	font-size: 25upx;
	text-align: center;
	background-color: rgba(255,130,71, 0.7); 
	margin-left: 10%;
	color: #fff;
	margin-top: 2%;
}
.mall-xian1 {
	width: 94%;
	height: 1px;
	margin-top: 3%;
	margin-left: 3%;
/* 	background-color: #c5c3c3; */
	border-bottom: 1px dashed #c7c7c7;
}
</style>
