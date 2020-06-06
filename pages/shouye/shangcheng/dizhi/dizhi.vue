<template>
	<view class="ID">
		<!-- 按钮 -->
		<navigator url="../xinzeng/xinzeng" open-type="navigate">
			<view id="button">
				<image class="button-img" src="../../../../static/+.png" mode="widthFix"></image>
				<view class="button-text">添加新的发货地址</view>
			</view>
		</navigator>

		<view class="site" v-for="(item, index) in addressList" :key="index">
			<view class="site-view">
				<view class="site-name">{{ item.name }}</view>
				<view class="site-phone">{{item.tel}}</view>
			</view>
			<view class="site-text"><view class="site-name">{{item.province}}{{item.city}}{{item.area}}{{item.detail}}</view></view>
			<view class="site-xian"></view>
			<!-- 默认框 -->
			<view class="group">
				<view class="ckeck">
					<checkbox :checked="item.is_default == 1 ? true : false" disabled="true" color="#ED6E11"><text class="moren">默认</text></checkbox>
				</view>
				<!-- 编辑删除 -->
				<view class="site-for">
					<view class="for" @click="addressDel(item.id)">
						<image class="for-img" src="../../../../static/shanchu.png" mode="widthFix"></image>
						<view class="for-text">删除</view>
					</view>
					<navigator :url="'../xinzeng/address_edit?address_id=' + item.id">
						<view class="for">
								<image class="for-img" src="../../../../static/xiugai.png" mode="widthFix"></image>
								<view class="for-text">编辑</view>
						</view>
					</navigator>
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
			addressList: {},
			// is_default: '',
		};
	},
	
	onLoad() {
		
	},
	
	onShow() {
		// 获取收货地址
		this.getAddress();
	},
	
	methods: {
		// 获取收货地址
		getAddress(){
			net({
				url: '/V1/getAddress',
				method: 'GET',
				success: (res) => {
					if (res.data.success) {
						this.addressList = res.data.success.data;
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
};
</script>

<style>
@import url("../../style/address.css");
</style>
