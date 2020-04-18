<template>
	<section class="Tabs-Page">
		<s-tabs :effect="true" v-model="activeTab" @change="change" :nav-per-view="5">
			<s-tab title="<span>全部订单</span>">
				<view class="shoppingMall">
					<view class="order"><text>商城订单</text></view>
					<view class="mall">
						<view class="order-number">
							<view class="number">订单号:SC2019122109551972539097</view>
							<view class="pay">待付款</view>
						</view>
						<view class="mall-xian1"></view>
						<view class="information">
							<image class="information-img" src="https://ccx.changhuoban.com/public/upload/xcx/sct.png" mode="widthFix" />
							<view class="information-view">
								<view class="information-text">MP70普通版（3台）</view>
								<view class="information-figure">¥594.00 × 1</view>
							</view>
						</view>
						<view class="mall-xian"></view>
						<view class="total1">
							<view class="total-text">合计：¥594.00</view>
							<view class="total-text1">删除订单</view>
						</view>
					</view>
					<view class="order"><text>积分订单</text></view>
					<view class="mall">
						<view class="people">
							<view class="people-name">畅伙伴</view>
							<view class="people-phone">13588888888</view>
						</view>
						<view class="AoolyFor">
							<view class="banks">
								<view class="banks-bank">浦发银行</view>
								<view class="banks-text">浦发银行标准卡</view>
							</view>
							<view class="messages">
								<view class="message">
									<view class="message-name">申请时间：</view>
									<view class="message-time">2019-11-29 19:21:15</view>
								</view>
							</view>
							<view class="messages">
								<view class="message">
									<view class="message-name">申请状态：</view>
									<view class="message-time">待查询</view>
								</view>
							</view>
							<view class="messages">
								<view class="message">
									<view class="message-name">返现金额：</view>
									<view class="message-time">120.00</view>
								</view>
							</view>
						</view>
						<view class="inquire-mark" style="position: relative;">
							<view class="message-mark">订单号SC2019122109551972539097</view>
							<view class="message-inquire">
								<navigator url="" open-type="navigate"><view class="inquire-text">进度查询</view></navigator>
							</view>
						</view>
					</view>
					<view class="order"><text>申卡订单</text></view>
					<view class="mall">
						<!-- 标识 -->
						<view class="order-number"><view class="number">订单号SC2019122109551972539097</view></view>
						<!-- 横线 -->
						<view class="mall-xian1"></view>
						<!-- 内容 -->
						<view class="AoolyFor">
							<view class="applyFor">
								<view class="bank">工商银行</view>
								<view class="appluFor-time">2019-11-29 19:21:15</view>
							</view>
							<view class="integrals">
								<view class="integral">
									<view class="integral-name">1000000</view>
									<view class="integral-text">使用积分</view>
								</view>
								<view class="integral">
									<view class="integral-name">1040.00</view>
									<view class="integral-text">兑换金额</view>
								</view>
								<view class="status"><view class="status-text">审核成功</view></view>
							</view>
						</view>
						<view class="mall-xian"></view>
						<view class="turn"><view class="turn-text">兑换成功</view></view>
					</view>
				</view>
			</s-tab>
			<s-tab title="商城订单">
				<view class="shoppingMall">
					<view class="mall">
						<view class="order-number">
							<view class="number">订单号:SC2019122109551972539097</view>
							<view class="pay">待付款</view>
						</view>
						<view class="mall-xian1"></view>
						<view class="information">
							<image class="information-img" src="https://ccx.changhuoban.com/public/upload/xcx/sct.png" mode="widthFix" />
							<view class="information-view">
								<view class="information-text">MP70普通版（3台）</view>
								<view class="information-figure">¥594.00 × 1</view>
							</view>
						</view>
						<view class="mall-xian"></view>
						<view class="total1">
							<view class="total-text">合计：¥594.00</view>
							<view class="total-text1">删除订单</view>
						</view>
					</view>
				</view>
			</s-tab>
			<s-tab title="申卡订单">
				<view class="shoppingMall">
					<view class="mall">
						<view class="people">
							<view class="people-name">畅伙伴</view>
							<view class="people-phone">13588888888</view>
						</view>
						<view class="AoolyFor">
							<view class="banks">
								<view class="banks-bank">浦发银行</view>
								<view class="banks-text">浦发银行标准卡</view>
							</view>
							<view class="messages">
								<view class="message">
									<view class="message-name">申请时间：</view>
									<view class="message-time">2019-11-29 19:21:15</view>
								</view>
							</view>
							<view class="messages">
								<view class="message">
									<view class="message-name">申请状态：</view>
									<view class="message-time">待查询</view>
								</view>
							</view>
							<view class="messages">
								<view class="message">
									<view class="message-name">返现金额：</view>
									<view class="message-time">120.00</view>
								</view>
							</view>
						</view>
						<view class="inquire-mark" style="position: relative;">
							<view class="message-mark">订单号SC2019122109551972539097</view>
							<view class="message-inquire">
								<navigator url="" open-type="navigate"><view class="inquire-text">进度查询</view></navigator>
							</view>
						</view>
					</view>
				</view>
			</s-tab>
			<s-tab title="积分订单">
				<view class="shoppingMall">
					<view class="mall">
						<view class="order-number"><view class="number">订单号SC2019122109551972539097</view></view>
						<view class="mall-xian1"></view>
						<view class="AoolyFor">
							<view class="applyFor">
								<view class="bank">工商银行</view>
								<view class="appluFor-time">2019-11-29 19:21:15</view>
							</view>
							<view class="integrals">
								<view class="integral">
									<view class="integral-name">1000000</view>
									<view class="integral-text">使用积分</view>
								</view>
								<view class="integral">
									<view class="integral-name">1040.00</view>
									<view class="integral-text">兑换金额</view>
								</view>
								<view class="status"><view class="status-text">审核成功</view></view>
							</view>
						</view>
						<view class="mall-xian"></view>
						<view class="turn"><view class="turn-text">兑换成功</view></view>
					</view>
				</view>
			</s-tab>
		</s-tabs>
	</section>
</template>

<script>
import sTabs from '@/s-ui/s-tabs';
import sTab from '@/s-ui/s-tab';

export default {
	components: {
		sTabs,
		sTab
	},
	data() {
		return {
			ClassIndex: 3,
			classIndex: 3,
			tabIndex: 0,
			srcollinto: '',
			scrollH: 500,
			activeTab: 0,
			orde: [{ name: '待查询' }, { name: '已完成' }, { name: '已失败' }, { name: '无效订单' }],
			shangcheng: [
				{
					number: '订单号:SC2019122109551972539097',
					pay: '待付款',
					img: 'https://ccx.changhuoban.com/public/upload/xcx/sct.png',
					text: 'MP70普通版（3台）',
					figure: '¥594.00 × 1',
					total: '合计：¥594.00',
					delete: '删除订单'
				},
				{
					number: '订单号SC2019122109551972539097',
					pay: '已付款',
					img: 'https://ccx.changhuoban.com/public/upload/xcx/sct.png',
					text: 'MP70普通版（3台）',
					figure: '¥594.00 × 1',
					total: '合计：¥594.00',
					delete: '删除订单'
				}
			]
		};
	},
	methods: {
		change(index) {
			console.log(index);
		}
	},
	onLoad() {}
};
</script>

<style lang="scss">
.Tabs-Page {
	/deep/.s-tab-wrap {
		.s-tab-panel {
			padding: 20rpx;
			font-size: 28rpx;
		}
	}
}
.order {
	width: 100%;
	line-height: 80upx;
	height: 80upx;
}
.order text{
	margin-left: 40upx;
	font-size: 30upx;
	margin-top: 5upx;
}
.diceng {
	width: 100%;
	height: 60rpx;
}
.orderForm {
	width: 100%;
	background-color: #fff;
	display: flex;
	height: 80rpx;
}

.form {
	width: 100%;
	display: flex;
}
.form-text {
	width: 100%;
	text-align: center;
	font-size: 28rpx;
	margin-top: 10rpx;
}
.form-xian {
	width: 1px;
	height: 60rpx;
	margin-top: 3%;
	background-color: #c5c3c3;
}
.orderForm1 {
	width: 95%;
	background-color: #fff;
	display: flex;
	height: 80rpx;
	margin-left: 2.5%;
	border-radius: 7px 7px 7px 7px;
}
.form1 {
	width: 100%;
	display: flex;
	justify-content: center;
}
.form-text1 {
	width: 100%;
	text-align: center;
	font-size: 28rpx;
	margin-top: 20rpx;
}
.form-xian2 {
	width: 1px;
	height: 60rpx;
	background-color: #c5c3c3;
	margin-top: 10rpx;
}

.shoppingMall {
	width: 100%;
}

.shopping-xian {
	width: 100%;
}

/*商城订单*/
.shopping {
	height: 55rpx;
}

.shopping-text {
	margin-left: 6%;
	font-size: 33rpx;
	font-weight: 600;
	color: #333;
}

/* 商城订单信息栏 */
.mall {
	width: 90%;
	background-color: #fff;
	margin-top: 10rpx;
	margin-left: 5%;
	border-radius: 7px 7px 7px 7px;
	height: 380rpx;
}

.order-number {
	display: flex;
	background-color: #fff;
	width: 100%;
	position: relative;
	height: 60rpx;
	border-radius: 7px 7px 7px 7px;
}

.number {
	font-size: 25rpx;
	margin-left: 30rpx;
	margin-top: 15rpx;
}

.pay {
	font-size: 28rpx;
	position: absolute;
	right: 35rpx;
	top: 10rpx;
	color: red;
}

.mall-xian {
	width: 90%;
	height: 1px;
	margin-left: 5%;
	background-color: #c5c3c3;
}

.mall-xian1 {
	width: 90%;
	height: 1px;
	margin-left: 5%;
	/* background-color: #c5c3c3; */
	border-bottom: 1px dashed #c5c3c3;
}

/* 内容 */
.information {
	width: 100%;
	display: flex;
	height: 240rpx;
}

.information-img {
	width: 30%;
	margin-left: 30rpx;
	margin-top: 17rpx;
}

.information-view {
	margin-left: 40rpx;
	margin-top: 50rpx;
}

.information-text {
	font-size: 28rpx;
}

.information-figure {
	margin-top: 60rpx;
	font-size: 25rpx;
	color: red;
}

/*合计*/
.total {
	width: 100%;
	height: 60rpx;
	position: relative;
}

.total-text {
	position: absolute;
	left: 40rpx;
	top: 10rpx;
	font-size: 28rpx;
}

/* 删除订单 */
.total1 {
	width: 100%;
	height: 70rpx;
	position: relative;
}

.total-text1 {
	border: red solid 1px;
	width: 150rpx;
	position: absolute;
	right: 40rpx;
	top: 15rpx;
	font-size: 28rpx;
	color: red;
	text-align: center;
	border-radius: 30px 30px 30px 30px;
}

.applyFor {
	display: flex;
}

/* 积分兑换 */

.bank {
	width: 50%;
	margin-left: 40rpx;
	margin-top: 50rpx;
	font-size: 35rpx;
}

.appluFor-time {
	width: 50%;
	margin-top: 55rpx;
	font-size: 26rpx;
	color: #666;
}

.integrals {
	display: flex;
	height: 130rpx;
}

.integral {
	width: 30%;
	margin-top: 15rpx;
	text-align: center;
}

.integral-name {
	font-size: 30rpx;
	font-weight: 600;
	color: #444;
}

.integral-text {
	font-size: 25rpx;
	color: #666;
	margin-top: 5rpx;
}

.status {
	height: 60rpx;
	width: 150rpx;
	text-align: center;
	background-color: #888;
	border-radius: 20rpx 20rpx 20rpx 20rpx;
	margin-top: 15rpx;
	margin-left: 70rpx;
}

.status-text {
	font-size: 28rpx;
	margin-top: 8rpx;
	color: #fff;
}

.turn {
	background-color: #fff;
	height: 60rpx;
	border-radius: 7px 7px 7px 7px;
}

.turn-text {
	margin-left: 40rpx;
	font-size: 30rpx;
	color: red;
	margin-top: 25rpx;
}

/* 申卡订单 */
.people {
	width: 90%;
	display: flex;
	margin-left: 5%;
	height: 80rpx;
}

.people-name {
	color: #ff8c00;
	font-size: 33rpx;
	font-weight: 600;
	margin-top: 20rpx;
	width: 18%;
}

.people-phone {
	color: #666;
	font-size: 25rpx;
	margin-top: 28rpx;
}

.banks {
	display: flex;
	width: 100%;
	height: 60rpx;
}

.banks-bank {
	width: 30%;
	text-align: center;
	font-size: 35rpx;
}

.banks-text {
	width: 70%;
	font-size: 32rpx;
}

.message {
	display: flex;
	width: 100%;
	margin-left: 5%;
	height: 30rpx;
	margin-top: 10rpx;
}

.message-name {
	font-size: 25rpx;
	color: #666;
}

.message-time {
	font-size: 25rpx;
	color: #666;
}

.inquire-mark {
	width: 100%;
	height: 80rpx;
	margin-top: 20rpx;
	display: flex;
	overflow: hidden;
}

.message-mark {
	color: #666;
	font-size: 23rpx;
	width: 60%;
	margin-top: 20rpx;
	position: absolute;
	left: 5%;
}

.message-inquire {
	background-color: #ff8c00;
	width: 25%;
	height: 55rpx;
	border-radius: 30rpx 30rpx 30rpx 30rpx;
	margin-left: 70%;
	margin-top: 1%;
	font-size: 30rpx;
}

.inquire-text {
	margin-top: 7rpx;
	color: #fff;
	text-align: center;
}
</style>
