<template>
	<view class="content">
		<view class="content-div">
			<view class="content-text"><text class="name">畅伙伴</text></view>
			<view>
				<view class="money"><text>付款金额</text></view>
				<view class="content-intsrc">
					<image class="content-src" src="/static/qian.png"></image>
					<input  class="gy-int" type="number" v-model="password"  placeholder="请输入支付金额" />
				</view>
			</view>
		</view>

		<view class="way">
			
			<view class="way-view">
				<view class="way-flex" @click="showBottom()">
					<view class="way-name"><text>支付方式</text></view>
					<view class="way-text"><text>平安银行(6222000000000000000)</text></view>
					<image class="way-src" src="/static/jiantou.png"></image>
				</view>
				<bottomSheet :isShowBottom="isShowBottom"  @closeBottom="closeBottom"></bottomSheet>
			</view>

			<view class="xian"></view>
			
			<view class="checkbox">
				<checkbox class="radio" checked="true"></checkbox>
				<text style="font-size: 28upx;">立即提现</text>
				<view class="cipher">找回支付密码</view>
			</view>
		</view>

	</view>
</template>

<script>
		import bottomSheet from '@/components/EPOS/bbh-sheet/bottomSheet.vue';
		export default{    
			components:{
				bottomSheet,
			},
			data(){
				return{
	
					isShowBottom : false,			//底部弹窗开关
				}
			},
			methods:{
			
				//底部开关
				showBottom(){
					this.isShowBottom = true;
				},
				closeBottom(){
					this.isShowBottom = false;
				},
				
			}
		}
</script>

<style>
	
	.checkbox {
		display: flex;
		height: 120upx;
		line-height: 120upx;
		margin-left: 20upx;
	}
		
	.radio{
	transform: scale(0.8,0.8);
	color:#FF0000;
	}
	.cipher {
		height: 100upx;
		line-height: 100upx;
		color: #ff0000;
		margin-left: 50%;
	}
	.xian {
		width: 98%;
		margin-left: 1%;
		background-color: #f1f1f1;
		height: 1upx;
	}
	.way {
		width: 100%;
		height: 100%;
		background-color: #fff;
		margin-top: 20upx;
	}
	.way-flex {
		display: flex;
		width: 100%;
		position: relative;
		color: #333;
		height: 100%;
	}
	.way-src {
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 20upx;
		top: 45upx;
	}
	.way-name {
		height: 120upx;
		line-height: 120upx;
		width: 20%;
		text-align: center;
		font-size: 30upx;
	}
	.way-text {
		height: 120upx;
		line-height: 120upx;
		position: absolute;
		right: 70upx;
		font-size: 30upx;
	}
	.content-div {
		height: 420upx;
		background-color: #ffffff;
		box-shadow: #d9d9d9 0 0 4px 0;
		margin-top: 2%;
	}
	.money {
		width: 30%;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		font-size: 33upx;
	}
	
	.content-text {
		width: 100%;
		height: 180upx;
		line-height: 180upx;
		font-size: 40upx;
		text-align: center;
		font-weight: 600;
	}
	.content-intsrc {
		display: flex;
		width: 100%;
		height: 140upx;
		line-height: 140upx;
		margin-top: 20upx;
		
	}
	.content-src {
		width: 70upx;
		height: 70upx;
		margin-top: 35upx;
		margin-left: 2%;
	}
	.gy-int {
		width: 88%;
		height: 100upx;
		line-height: 100upx;
		margin-top: 20upx;
		color: #666;
		font-size: 45upx;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

</style>
