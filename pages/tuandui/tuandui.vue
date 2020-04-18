<template>
	<view class="body">
		<!-- 日数据 -->
		<view style="height:30upx;"></view>
		<view class="teams">
			<view class="datas">
				<view class="bay">
					<view class="bay-view">
						<text class="the-text">今天汇总</text>
						<text class="the-text-1">19</text>
						<text class="the-text-2">日</text>
					</view>
					<view class="d-flex" style="height:100upx;">
						<view class="data-div1">
							<view class="data-text2">1234567.00</view>
							<view class="data-text2">交 易(元):</view>
						</view>
						<view class="vertical1"></view>
						<view class="data-div1">
							<view class="data-text2">1234.00</view>
							<view class="data-text2">收 益(元):</view>
						</view>
					</view>
				</view>
			</view>
			<view class="data">
				<view class="data-div">
					<view class="data-text1">50</view>
					<view class="data-text">激 活(台):</view>
				</view>
				<view class="vertical"></view>

				<view class="data-div">
					<view class="data-text1">100</view>
					<view class="data-text">商 户(个):</view>
				</view>

				<view class="vertical"></view>

				<view class="data-div">
					<view class="data-text1">50</view>
					<view class="data-text">伙 伴(个):</view>
				</view>
			</view>
		</view>
		<!-- 月数据 -->
		<view style="height:30upx;"></view>
		<view class="teams">
			<view class="datas">
				<view class="month">
					<view class="bay-view">
						<text class="the-text">本月汇总</text>
						<text class="the-text-1">12</text>
						<text class="the-text-2">月</text>
					</view>
					<view class="d-flex" style="height:100upx;">
						<view class="data-div1">
							<view class="data-text2">1234567.00</view>
							<view class="data-text2">交 易(元):</view>
						</view>
						<view class="vertical1"></view>
						<view class="data-div1">
							<view class="data-text2">1234.00</view>
							<view class="data-text2">收 益(元):</view>
						</view>
					</view>
				</view>
			</view>
			<view class="data">
				<view class="data-div">
					<view class="data-text1">50</view>
					<view class="data-text">激 活(台):</view>
				</view>
				<view class="vertical"></view>

				<view class="data-div">
					<view class="data-text1">100</view>
					<view class="data-text">商 户(个):</view>
				</view>

				<view class="vertical"></view>

				<view class="data-div">
					<view class="data-text1">50</view>
					<view class="data-text">伙 伴(个):</view>
				</view>
			</view>
		</view>
		<view style="height:30upx;"></view>
		<!-- 总数据 -->
		<view class="teams">
			<view class="datas">
				<view class="year">
					<view class="bay-view">
						<text class="the-text">累计汇总</text>
						<text class="the-text-1">2020</text>
						<text class="the-text-2">年</text>
					</view>
					<view class="d-flex" style="height:100upx;">
						<view class="data-div1">
							<view class="data-text2">1234567.00</view>
							<view class="data-text2">交 易(元):</view>
						</view>
						<view class="vertical1"></view>
						<view class="data-div1">
							<view class="data-text2">1234.00</view>
							<view class="data-text2">收 益(元):</view>
						</view>
					</view>
				</view>
			</view>
			<view class="data">
				<view class="data-div">
					<view class="data-text1">50</view>
					<view class="data-text">激 活(台):</view>
				</view>
				<view class="vertical"></view>

				<view class="data-div">
					<view class="data-text1">100</view>
					<view class="data-text">商 户(个):</view>
				</view>

				<view class="vertical"></view>

				<view class="data-div">
					<view class="data-text1">50</view>
					<view class="data-text">伙 伴(个):</view>
				</view>
			</view>
		</view>
		<navigator url="jiaoyixiangqing/jiaoyixiangqing"><button class="button">业 务 详 情</button></navigator>
			<view style="height: 80upx;"></view>
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
.body {
	width: 100%;
	height: 100%;
}

.teams {
	width: 90%;
	margin-left: 5%;
	overflow: hidden;
	border-radius: 10px 10px 10px 10px;
	box-shadow: #ddd 3px 3px 8px 3px;
	background-color: #fff;
}
.datas {
	width: 100%;
	height: 220upx;
	font-size: 10upx;
	text-align: center;
}
.the-text {
	margin-left: 100upx;
}
.the-text-1 {
	width: 36%;
}
.the-text-2 {
	margin-left: 90upx;
}

.data {
	display: flex;
	width: 100%;
	height: 130upx;
}
.bay {
	width: 100%;
	font-size: 28upx;
	color: #fff;
	height: 200upx;
   background-color: #81D842;
}

.month {
	width: 100%;
	font-size: 28upx;
	color: #fff;
	background-color:#ff9900;
	height: 200upx;
}
.year {
	width: 100%;
	font-size: 28upx;
	color: #fff;
	height: 200upx;
    background-color:#66ccff;

}
.bay-view {
	width: 100%;
	height: 70upx;
	display: flex;
	line-height: 70upx;
}

.data-div1 {
	text-align: center;
	width: 50%;
	height: 100upx;
}
.data-div {
	text-align: center;
	width: 33%;
}
.data-text {
	font-size: 28upx;
}
.data-text1 {
	font-size: 33upx;
	margin-top: 1%;
	color: #f19952;
}
.data-text2 {
	font-size: 28upx;
	color: #fff;
}
.data-text3 {
	font-size: 33upx;
	margin-top: 5%;
	color: #fff;
}

.vertical {
	width: 1px;
	height: 50px;
	background-color: rgb(175, 175, 175);
	margin-top: 10upx;
}
.vertical1 {
	width: 1px;
	height: 50px;
	background-color: #fff;
	margin-top: 10upx;
}
button {
	width: 70%;
	margin-left: 15%;
	margin-top:8%;
	background-color: #f0ad4e;
	color: #ffffff;
	font-weight: 800;
}
</style>
