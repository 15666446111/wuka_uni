<template>
	<view class="mr-list">
		<view class="mr-info" v-for="(item, index) in applyFirend" :key="index">
			<view class="mr-info-pt">
				<view>姓名：{{item.name}}</view>
				<view class="mr-info-num">联系电话：{{item.phone}}</view>
			</view>
			<view class="mr-info-p">
				装机地址：{{item.address}}
			</view>
			<view class="mr-info-p-small">
				SN：
			</view>
			<view class="mr-info-p mr-info-time">
				申请时间：{{item.created_at}}
			</view>
			<view class="mr-info-p mr-info-time" v-if="item.handle_time != null">
				装机时间：{{item.handle_time}}
			</view>
			<view class="mr-info-state">
				<view class="mr-state-l">
					状态：
					<text class="default" v-if="item.is_handle == 0"> 待处理</text>
					<text class="success" v-if="item.is_handle == 1"> 已处理</text>
				</view>
				<view class="mr-state-r">
					<button size="mini" type="default" @click="setState(item.id)" v-if="item.agent_id == userInfo.id">确认处理</button>
				</view>
			</view>
		</view>
		
		<hFormAlert v-if="cancelShow"  name="cancel_desc" placeholder="请输入领取机具SN号" @cancel="cancelHide"></hFormAlert>
	</view>
	
</template>

<script>
	import net from '../../../common/net.js';
	import hFormAlert from '@/components/h-form-alert/h-form-alert.vue';
	
	export default {
	    components: {hFormAlert},
		data() {
			return {
				cancelShow: false,
				// 商户申请列表
				applyFirend: {},
				// 用户个人信息
				userInfo: {},
				
				orderId: '',
			}
		},
		
		onLoad() {
			uni.showLoading();
			
			// 获取商户推荐申请列表
			this.getApplyFirend();
			//获取用户信息
			this.getUserInfo();
			
			// 监听事件
			var that = this;
			uni.$on('alert_confirm', function(data){
				uni.showLoading();
				that.setApplyFirend(data.cancel_desc);
			})
		},
		
		onUnload() {
			uni.$off('alert_confirm');
		},
		
		methods: {
			// 已完成按钮
			setState(id){
				this.cancelShow = true;
				this.orderId = id;
			},
			
			// 弹出层取消按钮
			cancelHide(){
				this.cancelShow = false;
			},
			
			// 获取个人信息
			getUserInfo(){
				net({
		        	url:"/V1/mine",
		            method:'get',
		            success: (res) => {
						uni.hideLoading();
						// console.log(res);
						this.userInfo = res.data.success.data;
		            }
		      	})
			},
			
			// 获取商户推荐申请列表
			getApplyFirend(){
				net({
		        	url:"/V1/getApplyFirend",
		            method:'get',
		            success: (res) => {
						console.log(res);
						uni.hideLoading();
						this.applyFirend = res.data.success.data;
		            }
		      	})
			},
			
			// 弹出框确认按钮
			// confirm(){
			// 	uni.showLoading();
			// },
			
			// 更新处理状态
			setApplyFirend(sn){
				
				console.log(sn);
				net({
					url:"/V1/setApplyFirend",
					method:'get',
					data: {
						order_id: this.orderId,
						sn: sn
					},
					success: (res) => {
						uni.hideLoading();
						if (res.data.success) {
							uni.showToast({
								title: '处理成功',
								icon: 'none'
							});
							setTimeout(function(){
								uni.redirectTo({
									url: './machine_receive'
								})
							}, 1000)
						} else {
							uni.showToast({
								title: res.data.error.message,
								icon: 'none'
							})
						}
		            }
		      	})
			}
		}
	}
</script>

<style>
	text { font-size: 26rpx;}
	.mr-list { width: 92%; margin-top: 20rpx; padding: 0 4%; background-color: #fff; }
	.mr-info { width: 100%; border-bottom: 1px solid #eee; padding: 20rpx 0; }
	.mr-info-pt { display: flex; }
	.mr-info-pt view { height: 64rpx; line-height: 64rpx; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 50%; }
	.mr-info-num, .mr-state-r { text-align: right;}
	.mr-info-p { line-height: 46rpx; color: #666; }
	.mr-info-time { font-size: 26rpx; }
	.mr-info-p-small { font-size: 26rpx; color: #f98021;}
	.mr-info-state { display: flex; }
	.mr-info-state view { width: 50%; height: 60rpx; line-height: 60rpx; }
	.mr-state-l { font-size: 26rpx; }
	.mr-state-l .default{ color: #999; }
	.mr-state-l .success{ color: #f98021; }
	.mr-state-r button { background-color: #f98021; color: #fff;}
</style>
