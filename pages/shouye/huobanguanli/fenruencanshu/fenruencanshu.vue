<template>
	<view>
		<view class="fr_top">
			<image class="fr_iamge" src="../../../../static/mark.png"></image>
			<view class="view_p">注：当保存参数后新参数即时生效。</view>
		</view>

		<!-- 结算价调整 -->
		<view class="body" v-if="tradePrice.length > 0">
			<view class="view_h1"><view class="text">结算价参数</view></view>
			<view class="rule"></view>
			<!-- 信用卡 -->
			<block v-for="(item, index) in tradePrice" :key="index">
				<view class="rule-view">
					<view class="rule_p">
						<view class="view_p2">{{item.name}}</view>
						<input class="rule_input" type="number" v-model="item.rate"
								@input="tradeInput(item.rate, item.min, item.max, item.name)" />%
						<view class="view_s">{{item.min}}% ~ {{item.max}}%</view>
					</view>
				</view>
				<view class="rule"></view>
			</block>
		</view>
		
		<!-- 返现设置 -->
		<view class="body" v-if="activePrice.length != ''">
			<view class="view_h1"><view class="text">激活参数（元）</view></view>
			<view class="rule"></view>
			<view class="rule-view">
				<view class="rule_p">
					<view class="view_p2 view_p4">激活返现</view>
					<input class="rule_input" type="number" v-model="activePrice.return_money"
								@input="tradeInput(activePrice.return_money, activePrice.min, activePrice.max, '激活返现')" /> 元
					<view class="view_s">{{activePrice.min}} ~ {{activePrice.max}} 元</view>
				</view>
			</view>
			<view class="rule"></view>
		</view>
		
		<view class="body" v-if="standardPrice.length > 0">
			<view class="view_h1"><view class="text">达标参数（元）</view></view>
			<view class="rule"></view>
			<block v-for="(item, index) in standardPrice" :key="index">
				<view class="rule-view">
					<view class="rule_p">
						<view class="view_p2 view_p4 view_standard">{{item.standard_start}} ~ {{item.standard_end}} 天
							交易 <text class="trade-text">{{item.standard_trade / 100}} </text>元，返现
						</view>
						<input class="rule_input" type="number" v-model="item.standard_agent_price"
								@input="tradeInput(item.standard_agent_price, item.min, item.max, item.standard_start, item.standard_end)" /> 元
						<view class="view_s">{{item.min}} ~ {{item.max}} 元</view>
					</view>
				</view>
				<view class="rule"></view>
			</block>
		</view>

		<button class="button" @click="submitForm()" style="margin-bottom: 40rpx;">确 认 修 改</button>
	</view>
</template>

<script>
import net from '../../../../common/net.js';
export default {
	data() {
		return {
			pid: '',			// 政策id
			uid: '',			// 用户id
			
			// 结算价参数
			tradePrice: [],
			// 激活参数
			activePrice: [],
			// 达标参数
			standardPrice: [],
		};
	},
	
	onLoad(options) {
		uni.showLoading();
		this.pid = options.pid;
		this.uid = options.uid;
		
		// 获取用户政策信息
		this.getPolicyInfo();
	},
	
	methods: {
		// 获取用户政策信息
		getPolicyInfo(){
			net({
	        	url:"/V1/getPolicyInfo",
	            method:'POST',
				data:{
					uid: this.uid,
					pid: this.pid
				},
	            success: (res) => {
		
					console.log(res);
					uni.hideLoading();
					
					if (res.data.success) {
						// 结算信息
						if (res.data.success.data.trade_price.list) {
							var tradeList = res.data.success.data.trade_price.list;
							for (var i = 0; i < tradeList.length; i++) {
								tradeList[i].rate = tradeList[i].rate / 100;
								tradeList[i].min = tradeList[i].min / 100;
								tradeList[i].max = tradeList[i].max / 100;
							}
							this.tradePrice = tradeList;
						}
						
						// 激活信息
						if (res.data.success.data.active_price) {
							var active_price = res.data.success.data.active_price;
							
							active_price.return_money = res.data.success.data.active_price.return_money / 100;
							active_price.max = res.data.success.data.active_price.max / 100;
							active_price.min = res.data.success.data.active_price.min / 100;
							
							this.activePrice = active_price;
						}
						
						// 达标信息
						if (res.data.success.data.standard_price.list) {
							var standard_price = res.data.success.data.standard_price.list;
							for (var i = 0; i < standard_price.length; i++) {
								standard_price[i].max = standard_price[i].max /100;
								standard_price[i].min = standard_price[i].min /100;
								standard_price[i].standard_agent_price = standard_price[i].standard_agent_price /100;
							}
							this.standardPrice = standard_price;
						}
						
					} else {
						uni.hideLoading();
						uni.showToast({
							title: res.data.error.message,
							icon: 'none'
						})
					}
					
	            },
				fail: () => {
					uni.showToast({
						title: '政策信息获取失败',
						icon: 'none'
					})
				},
	      	})
		},
		
		tradeInput(rate, min, max, name, names='') {
			var title = names != '' ? name + '~' + names + '天返现' : name;
			if (rate > max) {
				uni.showToast({
					title: title + '结算可设置最大值为' + max,
					icon: 'none',
					mask: true
				})
				return false;
			}
			
			if (rate < min) {
				uni.showToast({
					title: title + '结算可设置最小值为'+ min,
					icon: 'none',
					mask: true
				})
				return false;
			}
		},
		
		// 提交表单
		submitForm(){
			uni.showLoading({
				mask: true
			});
			net({
				url:"/V1/setPolicyInfo",
				method: 'POST',
				data:{
					uid: this.uid,
					pid: this.pid,
					tradePrice: this.tradePrice,
					activePrice: this.activePrice.return_money,
					standardPrice: this.standardPrice,
				},
	            success: (res) => {
					uni.hideLoading();
					if (res.data.success) {
						uni.showToast({
							title: '设置成功',
							icon: 'none'
						});
						
						var that = this;
						setTimeout(function() {
							uni.redirectTo({
								url: './fenruencanshu?pid=' + that.pid + '&uid=' + that.uid
							})
						}, 1000);
					} else {
						uni.showToast({
							title: res.data.error.message,
							icon: 'none'
						})
					}
	            },
			})
		}
	}
};
</script>

<style>
@import url("../../style/profit_data.css");
</style>
