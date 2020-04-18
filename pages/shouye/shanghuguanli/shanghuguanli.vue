<template>
	<view>
		<!-- 搜索框 -->
		<view class="sousuo">
			<view class="sousuo-view">
				<image class="input-image" src="/static/left_fdj.png" mode="aspectFit"></image>
				<input class="input" placeholder="SN/姓名/手机号/商户号" />
			</view>
		</view>
		
<!-- 选择框1 -->
		<view class="dis-fix" style="height: 80rpx;" :scroll-into-view="srcollinto" scroll-with-animation="true">
			<view
				class="dis-div"
				@click="changTab(index)"
				style="height: 80rpx; line-height: 80rpx;"
				v-for="(item, index) in useName"
				:key="index"
				:class="tabIndex === index ? 'usename' : ''"
				:id="'tab' + index">
				<text class="dis-text">{{ item.name }}</text>
				<text :class="index < IndexClass ? 'shuxian1' : ''"></text>
			</view>
		</view>
		
<!-- 选择框2 -->
		<view class="dis-fix" style="height: 80rpx;" :scroll-into-view="srcollinto" scroll-with-animation="true">	
			<view
				class="dis-div"
				@click="HeadTab(index)"
				style="height: 80rpx; line-height: 80rpx;"
				v-for="(item, index) in head" :key="index"
				:class="Head === index ? 'usename' : ''"
				:id="'tab' + index">
				<text class="dis-text">{{ item.name }}</text>
				<text :class="index < HeadClass ? 'shuxian1' : ''"></text>
			</view>
		</view>
		
		<view class="content">
			<navigator url="shanghuxinxi/shanghuxinxi">
				<view id="view">
					<view class="detail">
						<view class="detail-name">个体户畅伙伴</view>
						<view class="shiming">
							<image class="detail-img" src="/static/A.png" mode="scaleToFill" />
							<view class="lei">类</view>
						</view>
						<view class="detail-text1">累计交易:</view>
						<view class="detail-text">168,4563.00</view>
					</view>
					<view class="SN">SN:123456789123456789</view>
					<view class="money">
						<view class="money-text">商户号:1234567890</view>
						<view class="money-time">登记时间：2019年12月06日15:12</view>
					</view>
				</view>
			</navigator>
			<view class="across"></view>
			<navigator>
				<view id="view">
					<view class="detail">
						<view class="detail-name">个体户畅伙伴</view>
						<view class="shiming">
							<image class="detail-img" src="/static/B.png" mode="scaleToFill" />
							<view class="lei">类</view>
						</view>
						<view class="detail-text1">累计交易:</view>
						<view class="detail-text">168,4563.00</view>
					</view>
					<view class="SN">SN:123456789123456789</view>

					<view class="money">
						<view class="money-text">商户号:1234567890</view>
						<view class="money-time">登记时间：2019年12月06日15:12</view>
					</view>
				</view>
			</navigator>
			<view class="across"></view>
			<navigator>
				<view id="view">
					<view class="detail">
						<view class="detail-name">个体户畅伙伴</view>
						<view class="shiming">
							<image class="detail-img" src="/static/C.png" mode="scaleToFill" />
							<view class="lei">类</view>
						</view>
						<view class="detail-text1">累计交易:</view>
						<view class="detail-text">168,4563.00</view>
					</view>
					<view class="SN">SN:123456789123456789</view>

					<view class="money">
						<view class="money-text">商户号:1234567890</view>
						<view class="money-time">登记时间：2019年12月06日15:12</view>
					</view>
				</view>
			</navigator>
			<view class="across"></view>
			<navigator>
				<view id="view">
					<view class="detail">
						<view class="detail-name">个体户</view>
						<view class="detail-text1">累计交易:</view>
						<view class="detail-text">0.00</view>
					</view>
					<view class="SN">SN:123456789123456789</view>
					<view class="money">
						<view class="money-text">商户号:</view>
						<view class="money-time">登记时间：2019年12月06日15:12</view>
					</view>
				</view>
			</navigator>
			<view class="across"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
			IndexClass: 1,
			HeadClass: 2,
			Head:0,
			useName: [{ name: 'POS商户' }, { name: 'EPOS商户' }],
			head: [{ name: '全部' }, { name: '已绑定' }, { name: '待绑定' }]
		};
	},
	methods: {
		changTab(index) {
			if (this.tabIndex == index) {
				return;
			}
			this.tabIndex = index;
		},
		HeadTab(index) {
			if (this.Head == index) {
				return;
			}
			this.Head = index;
		}
	}
};
</script>

<style>
.usename {
	color: #fff;
	background-color: #f0ad4e;
	border-radius: 10upx 10upx 10upx 10upx;
}
/* 选择框 */
.dis-fix {
	width: 90%;
	height: 150upx;
	background-color: #fff;
	margin-left: 5%;
	margin-top: 3%;
	display: flex;
	justify-content: center;
	border-radius: 10upx 10upx 10upx 10upx;
}
.dis-div {
	width: 49.8%;
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
/*  */
#view {
	width: 96%;
	height: 160rpx;
}
.content {
	width: 90%;
	height: 100%;
	border-radius: 7px 7px 7px 7px;
	box-shadow: #d9d9d9 0rpx 2rpx 8rpx 0rpx;
	margin-left: 5%;
	position: relative;
	margin-top: 3%;
	background-color: #fff;
}

.shiming {
	width: 60rpx;
	height: 28rpx;
	border: #ff9203 solid 2px;
	border-radius: 20px 20px 20px 20px;
	position: relative;
	left: 10rpx;
	display: flex;
	justify-content: center;
	top: 15rpx;
}
.lei {
	font-size: 20rpx;
	width: 33rpx;
	color: #ff9203;
	margin-left: 3rpx;
	margin-top: -10%;
}
.detail {
	display: flex;
	width: 100%;
	position: relative;
	height: 60rpx;
}
.detail-img {
	width: 30rpx;
	height: 30rpx;
}

.detail-name {
	font-size: 30rpx;
	font-weight: 600;
	margin-left: 30rpx;
	margin-top: 13rpx;
	text-align: center;
	color: #444;
}
.detail-text1 {
	font-size: 20rpx;
	color: #666;
	position: absolute;
	right: 33%;
	top: 17rpx;
}
.detail-text {
	font-size: 28rpx;
	font-weight: 600;
	color: #ff9203;
	position: absolute;
	right: 7%;
	top: 17rpx;
}
.SN {
	font-size: 20rpx;
	color: #666;
	margin-left: 30rpx;
	margin-top: 7rpx;
}
.money {
	display: flex;
}
.money-text {
	font-size: 20rpx;
	color: #666;
	margin-left: 29rpx;
	margin-top: 10rpx;
	position: relative;
}

.money-time {
	font-size: 20rpx;
	color: #ff9203;
	margin-top: 10rpx;
	position: absolute;
	right: 20rpx;
}

.across {
	width: 94%;
	height: 1px;
	background-color: #eee;
	margin-left: 3%;
}
/* 搜索框 */
#body {
	color: #333;
	background-color: #fafafa;
	margin: 0;
	width: 100%;
	height: 100%;
}
.sousuo {
	width: 92%;
	margin-left: 4%;
	background-color: #f3f3f3;
	border-radius: 15upx;
	box-shadow: #d9d9d9 0 0 4px 0;
	margin-top: 0.5rem;
	background-color: #fff;
}
.sousuo-view {
	width: 100%;
	display: flex;
	margin-left: 3%;
}
.input-image {
	width: 50rpx;
	height: 50rpx;
	margin-top: 10upx;
}
.input {
	border: 0;
	width: 88%;
	height: 70rpx;
}
</style>

