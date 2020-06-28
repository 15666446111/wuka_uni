<template>
	<view class="background">
		<view class="top">
			<view class="view1" v-for="(item, index) in cashOutList" :key="index">
				<view class="fview">
					<!-- <image src="/static/minsheng.png" class="img"></image> -->
					<view class="ms">{{item.bank_name}}/{{item.bank}}</view>
					<view class="je">6500.00</view>
				</view>
				<view class="fview">
					<view class="ms sj">{{item.created_at}}</view>
					<view class="je zt">
						<text v-if="item.status == 0">待处理</text>
						<text v-else-if="item.status == 1">提现成功</text>
						<text v-else>提现失败</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import net from '../../../common/net.js';
export default {
	data() {
		return {
			cashOutList: {},
		};
	},
	
	onLoad() {
		uni.showLoading();
		
		// 获取提现记录列表
		this.getCashOutList();
	},
	
	methods: {
		// 获取提现记录列表
		getCashOutList(){
			net({
	        	url: "/V1/draw",
	            method: 'get',
	            success: (res) => {
					console.log(res);
					uni.hideLoading();
					this.cashOutList = res.data.success.data;
	            }
	      	})
		}
	}
};
</script>

<style>
.background {
	width: 100%;
	height: 100%;
}
.top {
	width: 94%;
	background-color: #fff;
	border-radius: 10px;
	margin-left: 3%;
	margin-top: 2%;
}
.view1 {
	width: 92%;
	padding: 8rpx 0;
	margin: 0 4%;
	border-bottom: 1px solid #eee;
}
.img {
	width: 100rpx;
	height: 100rpx;
	margin-top: 5%;
	margin-left: 8%;
}
.fview {
	display: flex;
	width: 100%;
	height: 72rpx;
}
.ms, .je {
	width: 50%;
	font-size: 30rpx;
	line-height: 72rpx;
}
.je {
	color: #ffb31f;
	text-align: right;
}
.sj {
	color: #666;
	font-size: 28rpx;
}
.zt {
	color: #666;
	font-size: 28rpx;
}
.line {
	width: 94%;
	margin-left: 3%;
	height: 1rpx;
	background-color: #c5c3c3;
}
</style>
