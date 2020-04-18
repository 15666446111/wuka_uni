<template>
<view class="body">
  <view class="bview">
    <input placeholder="旧密码" class="old" placeholder-class="ii1"></input>
  </view>

  <view>
    <input placeholder="新密码" class="new" placeholder-class="ii1"></input>
    <input placeholder="确认新密码" class="new2" placeholder-class="ii1"></input>
  </view>

  <button class="psy">确定</button>
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
.old{
  background-color: white;
  margin-top: 20rpx;
  height: 70rpx;
}

.new{
  background-color: white;
  margin-top: 20rpx;
  height: 70rpx;
}

.new2{
  
  background-color: white;
  margin-top: 5rpx;
  height: 70rpx;
}

.psy{
  width: 96%;
  height: 70rpx;
  background-color: rgb(255, 99, 88);
  color: white;
  margin: 0 auto;
  margin-top: 20rpx;
  border-radius: 8rpx;
  font-size: 28rpx;
}

.ii1{
  margin-left: 30rpx;
}
</style>
