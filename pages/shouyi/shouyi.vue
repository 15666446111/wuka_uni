<template>
	<view class="body-gy">
		<!-- 头部数据框 -->
		<view class="titlebars">
			<view class="earnings">
				<view class="earning">
					<view class="earning-text">总收益(元)</view>
					<view class="earning-figure">123456.78</view>
				</view>
				<view class="across1"></view>
				<view class="button">
					<view class="button-view">
						<view class="button-text">今日收益(元)</view>
						<view class="button-figure">456.78</view>
					</view>
					<view class="button-vertical"></view>
					<view class="button-view">
						<view class="button-text">本月收益(元)</view>
						<view class="button-figure">3456.78</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 选择框 -->
		<view class="dis-fix" style="height: 80rpx;" :scroll-into-view="srcollinto" scroll-with-animation="true">
			<view
				class="dis-div"
				@click="changTab(index)"
				style="height: 80rpx; line-height: 80rpx;"
				v-for="(item, index) in useName"
				:key="index"
				:class="tabIndex === index ? 'main-text-color' : ''"
				:id="'tab' + index"
			>
				<text class="dis-text">{{ item.name }}</text>
				<text :class="index < IndexClass ? 'shuxian1' : ''"></text>
			</view>
		</view>

		<!-- 内容栏 -->
		<view class="content">
			<view class="times">
				<view class="time">12月16日 星期一</view>
				<view class="income">收入¥36.00</view>
			</view>
			<view class="across"></view>
			<view class="for">
				<view class="detail">
					<image class="detail-img" src="/static/sy/zhi.png"  />
					<view class="detail-name">直营分润/双免</view>
					<view class="detail-text">+15.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/tuan.png"  />
					<view class="detail-name">团队佣金</view>
					<view class="detail-text">+8.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/fan.png"  />
					<view class="detail-name">返现/激活</view>
					<view class="detail-text">+200.00</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/dui.png"  />
					<view class="detail-name">积分兑换佣金</view>
					<view class="detail-text">+15.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/shen.png"  />
					<view class="detail-name">申卡佣金</view>
					<view class="detail-text">+15.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view style="height:30upx"></view>
			</view>
		</view>
		<view class="content">
			<view class="times">
				<view class="time">12月16日 星期一</view>
				<view class="income">收入¥36.00</view>
			</view>
			<view class="across"></view>
			<view class="for">
				<view class="detail">
					<image class="detail-img" src="/static/sy/zhi.png"  />
					<view class="detail-name">直营分润/双免</view>
					<view class="detail-text">+15.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/tuan.png"  />
					<view class="detail-name">团队佣金</view>
					<view class="detail-text">+8.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/fan.png"  />
					<view class="detail-name">返现/激活</view>
					<view class="detail-text">+200.00</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/dui.png"  />
					<view class="detail-name">积分兑换佣金</view>
					<view class="detail-text">+15.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view class="across"></view>
				<view class="detail">
					<image class="detail-img" src="/static/sy/shen.png"  />
					<view class="detail-name">申卡佣金</view>
					<view class="detail-text">+15.16</view>
				</view>
				<view class="SN">SN:234567890</view>
				<view class="money">
					<view class="money-text">交易金额(元):10000</view>
					<view class="money-time">2019年12月06日15:12</view>
				</view>
				<view style="height:30upx"></view>
			</view>
		</view>
		<view style="height:200upx"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
			IndexClass: 3,
			useName: [{ name: '全部明细' }, { name: '分润明细' }, { name: '返现明细' }, { name: '其他明细' }]
		};
	},
	methods: {
		changTab(index) {
			if (this.tabIndex == index) {
				return;
			}
			this.tabIndex = index;
		}
	}
};
</script>

<style>
/*头部数据显示*/
.titlebars {
	width: 100%;
	height: 280rpx;
	background-color: #ff8c00;
	position: relative;
	
}
.earnings {
	width: 90%;
	height: 270rpx;
	background-color: #fff;
	position: absolute;
	top: 40rpx;
	left: 5%;
	border-radius: 7px 7px 7px 7px;
	box-shadow: #666 0rpx 2rpx 8rpx 0rpx;
}
.earning {
	text-align: center;
	margin-top: 3%;
}
.earning-text {
	font-size: 25upx;
	font-weight: 600;
	color: #666;
}
.earning-figure {
	font-size: 37rpx;
	color: #ff8c00;
	font-weight: 600;
	margin-top: 1%;
}
.across {
	width: 96%;
	height: 2rpx;
	background-color: #c5c3c3;
	margin-top: 3%;
	margin-left: 2%;
}
.across1 {
	width: 96%;
	height: 2rpx;
	background-color: #c5c3c3;
	margin-top: 1%;
	margin-left: 2%;
}
.button {
	width: 100%;
	display: flex;
	font-size: 30rpx;
	margin-top: 2%;
	text-align: center;
}
.button-view {
	width: 50%;
}
.button-vertical {
	width: 1px;
	height: 100rpx;
	background-color: #c5c3c3;
}
.button-text {
	font-size: 23rpx;
	color: #666;
}

.button-figure {
	color: #ff8c00;
	font-size: 32rpx;
}
/* 选择框 */
.dis-fix {
	width: 90%;
	height: 150upx;
	background-color: #fff;
	margin-left: 5%;
	margin-top: 6%;
	display: flex;
	justify-content: center;
	border-radius: 10upx 10upx 10upx 10upx;
}
.dis-div {
	width: 25%;
	text-align: center;
	display: flex;
}
.dis-text {
	width: 100%;
}
.shuxian1 {
	width: 1upx;
	height: 60upx;
	background-color: #c5c3c3;
	margin-top: 10upx;
}

/*内容栏*/
.content {
	width: 92%;
	height: 100%;
	border-radius: 7px 7px 7px 7px;
	box-shadow: #666 0rpx 2rpx 8rpx 0rpx;
	margin-left: 4%;
	overflow: hidden;
	background-color: #fff;
	margin-top: 2%;
}

.times {
	width: 100%;
	display: flex;
	font-size: 30rpx;
	color: #666;
	margin-top: 30rpx;
}

.time {
	margin-left: 2%;
	font-size: 30upx;
}

.income {
	position: absolute;
	right: 70rpx;
	font-size: 30upx;
}

.detail {
	display: flex;
	width: 100%;
	position: relative;
}

.detail-img {
	width:100upx;
	height: 100upx;
	position: absolute;
	top: 40upx;
	left: 20upx;
}

.detail-name {
	margin-top: 3%;
	font-size: 28upx;
	font-weight: 500;
	margin-left: 18%;
}

.detail-text {
	font-size: 28upx;
	font-weight: 600;
	color: #ff8c00;
	position: absolute;
	top: 44rpx;
	right: 55rpx;
}

.SN {
	font-size: 12px;
	color: #666;
	margin-left: 18%;
	margin-top: -1%;
}

.money {
	display: flex;
}

.money-text {
	font-size: 12px;
	color: #666;
	margin-left: 18%;
}

.money-time {
	font-size: 12px;
	color: #666;
	position: absolute;
	right: 11%;
}
</style>
