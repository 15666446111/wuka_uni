<template>
<view class="bank-card">
	<view class="bankCard-for" >
		<navigator url="xiugaidenglumima/xiugaidenglumima" open-type="navigate">
			<view class="bank">
				<view class="bank-name">修改登录密码</view>
				<image class="bank-img" src="../../../static/jiantou.png" mode="widthFix" />
			</view>
		</navigator>
		<view class="add-xian"></view>
		<navigator url="xiugaijiesuanxinxi/xiugaijiesuanxinxi" open-type="navigate">
			<view class="bank">
				<view class="bank-name">修改结算信息</view>
				<image class="bank-img" src="../../../static/jiantou.png" mode="widthFix" />
			</view>
		</navigator>
		<view class="add-xian"></view>
	</view>
	<view class="bankCard-for">
		<navigator url="" open-type="navigate">
			<view class="bank">
				<image class="wx" src="../../../static/wx.png" mode="widthFix" />
				<view class="bank-text">解除微信</view>
				<image class="bank-img" src="/images/jiantou.png" mode="widthFix" />
			</view>
		</navigator>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.bank-card {
  background-color: #fff;
  box-shadow: #d9d9d9 0 0 4px 0;
  margin-top: 20rpx;
}

.bank {
  display: flex;
  width: 100%;
  position: relative;
  height: 80rpx;
}

.bank-name {
  width: 25%;
  margin-top: 20rpx;
  font-size: 28rpx;
  margin-left: 3%;
}

.bank-text {
  width: 45%;
  margin-top: 20rpx;
  font-size: 28rpx;
  color: #777;
  margin-left: 15rpx;
}


.bank-img {
  width: 6%;
  position: absolute;
  right: 5%;
  top: 18rpx;
}

.add-xian {
  width: 100%;
  height: 1px;
  background-color: #c5c3c3;
}
.wx{
  width: 8%;
  margin-top: 10rpx;
  margin-left: 3%;
}

</style>
