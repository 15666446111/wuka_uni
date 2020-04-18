<template>
	<view>
		<!-- 输入框 -->
		<view class="indexs">
			<!-- 第一栏 -->
			<view class="select">
				<view class="select-view">
					<view class="select-name">姓名</view>
					<view class="select-text">畅伙伴</view>
				</view>
				<view class="hengxian"></view>
			</view>
			<view class="select">
				<view class="select-view">
					<view class="select-name">银行</view>
					<input placeholder="交通银行" class="select-text" placeholder-class="ii1" />
				</view>
				<view class="hengxian"></view>
				<view class="select-view">
					<view class="select-name">银行卡号</view>
					<input placeholder="6222 0000 0000 0000" class="select-text" placeholder-class="ii1" />
				</view>
				<view class="hengxian"></view>
				<view class="select-view">
					<view class="select-name">身份证号</view>
					<input placeholder="370784100000000000" class="select-text" placeholder-class="ii1" />
				</view>
				<view class="hengxian"></view>
				<view class="select-view">
					<view class="select-name">开户行</view>
					<input placeholder="交通银行潍坊安丘支行" class="select-text" placeholder-class="ii1" />
				</view>
			</view>
		</view>
		<button>确 定</button>
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
page {
  background-color: #dbdada;
}

/*输入栏*/
.indexs {
  width: 90%;
  background-color: #fff;
  margin-left: 5%;
  margin-top: 20rpx;
  border-radius: 10rpx 10rpx 10rpx 10rpx;
}

.select-view {
  display: flex;
  height: 80rpx;
}

.select-name {
  margin-left: 40rpx;
  margin-top: 4%;
  font-size: 25rpx;
  width: 26%;
}

.select-text {
  margin-left: 20rpx;
  margin-top: 3%;
  font-size: 25rpx;
  color: #666;
}

.hengxian {
  width: 94%;
  height: 1px;
  background-color: #dbdada;
  margin-left: 3%;
}

button{
	width: 70%;
	margin-top: 20%;
	background-color: #ff8c00;
	color: #fff;
	font-weight: 600;
	letter-spacing: 25rpx
	}
</style>
