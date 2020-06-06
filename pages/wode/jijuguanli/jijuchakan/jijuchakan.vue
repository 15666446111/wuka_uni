<template>
	<view>
		<view id="view">
			<view id="view_view">
				<image src="../../../../static/sousuo.png"></image>
				<input placeholder="  请输入有效的SN号" class="v_input" placeholder-class="place" />
			</view>
		</view>
		<view id="body">
			<view id="view2">
				<view class="views" id="v1">全部</view>

				<view class="views" id="v2">已绑定</view>

				<view class="views" id="v3">未绑定</view>

				<view class="views" id="v4">已激活</view>
			</view>
			<view id="view3">
				<view class="view_sn" v-for="(item, index) in merchantList" :key="index">
					<view class="p1">SN:{{item.merchant_sn}}</view>
					<view class="p2">{{item.bind_status == 0 ? '未绑定' : '已绑定'}}/{{item.active_status == 0 ? '未激活' : '已激活'}}</view>
					<view class="p3">
						活动：
						<view class="p3_1"></view>
						{{item.title}}
					</view>
					<view class="p4">绑定时间：{{item.bind_time}}</view>
					<view class="divLine"></view>
					
					<view class="xian"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import net from '../../../../common/net.js';
export default {
	data() {
		return {
			merchantList: {},
		};
	},
	
	onLoad(options) {
		this.getMerchantList(options.type);
	},
	
	methods: {
		getMerchantList(type) {
			net({
				url: '/V1/getTail',
				method: 'GET',
				data: { 'type': type },
				success: (res) => {
					if (res.data.success) {
						this.merchantList = res.data.success.data;
					} else {
						uni.showToast({
							title: res.data.error.message,
							icon: 'none'
						})
					}
					console.log(res);
				}
			})
		}
	}
};
</script>

<style>
	@import url("../../style/merchant_list.css");
</style>