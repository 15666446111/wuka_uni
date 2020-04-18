<template>
	<view>
		<ms-dropdown-menu class="menu">
			<ms-dropdown-item v-model="value1" :list="list1"></ms-dropdown-item>
			 <ms-dropdown-item v-model="value1" :list="list"></ms-dropdown-item>
		</ms-dropdown-menu>		
		<view class="detail">
			<view class="detail-view">
				<view class="datail-name">信用卡/************8888</view>
				<view class="datail-way">
					<view class="datail-text">日结消费/二维码</view>
					<view class="datail-text1">6800.00</view>
				</view>
				<view class="datail-time">
					<view class="datail-text">时间：2019/12/06 18:05</view>
					<view class="datail-text2">交易成功</view>
				</view>
			</view>
			<view class="hengxian"></view>
			<view class="detail-view">
				<view class="datail-name">信用卡/************8888</view>
				<view class="datail-way">
					<view class="datail-text">日结消费/二维码</view>
					<view class="datail-text1">6800.00</view>
				</view>
				<view class="datail-time">
					<view class="datail-text">时间：2019/12/06 18:05</view>
					<view class="datail-text2">交易成功</view>
				</view>
			</view>
			<view class="hengxian"></view>
			<view class="detail-view">
				<view class="datail-name">信用卡/************8888</view>
				<view class="datail-way">
					<view class="datail-text">日结消费/二维码</view>
					<view class="datail-text1">6800.00</view>
				</view>
				<view class="datail-time">
					<view class="datail-text">时间：2019/12/06 18:05</view>
					<view class="datail-text2">交易成功</view>
				</view>
			</view>
			<view class="hengxian"></view>
			<view class="detail-view">
				<view class="datail-name">信用卡/************8888</view>
				<view class="datail-way">
					<view class="datail-text">日结消费/二维码</view>
					<view class="datail-text1">6800.00</view>
				</view>
				<view class="datail-time">
					<view class="datail-text">时间：2019/12/06 18:05</view>
					<view class="datail-text2">交易成功</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import msDropdownMenu from '@/components/ms-dropdown/dropdown-menu.vue'
	import msDropdownItem from '@/components/ms-dropdown/dropdown-item.vue'
	export default {
		components: {
			msDropdownMenu,
			msDropdownItem
		},
		props: {
		},
		data() {
			return {
				list: [
					{
						text: '当日',
						value: 0
					},
					{
						text: '刷卡支付',
						value: 1
					},
					{
						text: '银联二维码',
						value: 2
					},
					{
						text: '支付宝支付',
						value: 3
					},
					{
						text: '微信支付',
						value: 4
					}
				],
				list1: [
					{
						text: '全部',
						value: 0
					},
					{
						text: '刷卡支付',
						value: 1
					},
					{
						text: '银联二维码',
						value: 2
					},
					{
						text: '支付宝支付',
						value: 3
					},
					{
						text: '微信支付',
						value: 4
					}
				],
				value1: 0,
				value2: 1,
				value3: 'init'
			}
		},
		watch: {
		},
		mounted() {
		},
		methods: {
			choose() {
				let obj = {
					value: 'test'
				}
				this.$refs.dropdownItem.choose(obj)
			},
			close() {
				this.$refs.dropdownItem.closePopup()
			}
		}
	}
</script>

<style lang="scss">
		

	.dropdown-item-content {
		padding: 20rpx;
		.btn {
			background: $uni-color-primary;
			background: #007aff;
			color: #fff;
			padding: 20rpx;
			display: inline-block;
			border-radius: 10rpx;
			
		}
	}
	.dropdown-item-title {
		// display: flex;
		.title {
			color: red;
		}
		.btn {
			font-size: 24rpx;
			// background: $uni-color-primary;
			background: #007aff;
			color: #fff;
			padding: 10rpx;
			display: inline-block;
			border-radius: 10rpx;
		}
	}
	// .menu{
	// 	margin-top: 10upx;
	// 	width: 92%;
	// 	margin-left: 4%;
	// 	border-radius: 7px 7px 7px 7px;
	// }
	.select {
		width: 90%;
		display: flex;
		margin-left: 5%;
		margin-top: 2%;
		height: 1.5rem;
		background-color: #fff;
		box-shadow: #d3d3d3 0 0 4px 0;
		border-radius: 7px 7px 7px 7px;
	}
	
	.select-view {
		display: flex;
		justify-content: center;
		width: 50%;
	}
	
	.select-view:first-child {
		border-right: 1px solid #eee;
	}
	
	.select-image {
		width: 25rpx;
		height: 25rpx;
		margin-top: 8%;
		margin-left: 4%;
	}
	
	.select-text {
		color: #666;
		font-size: 0.9rem;
		margin-top: 4%;
	}
	
	.xian {
		width: 1px;
		height: 50px;
		background-color: #c5c3c3;
	}
	
	/*  */
	.detail {
		width: 90%;
		background-color: #fff;
		box-shadow: #d3d3d3 0 0 4px 0;
		border-radius: 7px 7px 7px 7px;
		margin-left: 5%;
		margin-top: 2%;
		overflow: hidden;
	}
	
	.detail-view {
		width: 100%;
		height: 4.5rem;
	}
	
	.datail-way {
		display: flex;
		position: relative;
	}
	
	.datail-time {
		display: flex;
	}
	
	.datail-name {
		font-size: 0.9rem;
		margin-left: 5%;
		margin-top: 3%;
	}
	
	.datail-text {
		color: #666;
		font-size: 0.7rem;
		margin-left: 5%;
		margin-top: 1%;
	}
	
	.datail-text1 {
		color: #ff8c00;
		position: absolute;
		font-weight: 600;
		right: 9%;
		bottom: 30%;
		font-size: 0.9rem;
	}
	
	.datail-text2 {
		color: #666;
		font-size: 0.7rem;
		margin-left: 22%;
	}
	
	.hengxian {
		width: 92%;
		margin-left: 4%;
		height: 1px;
		background-color: #c5c3c3;
	}
</style>
