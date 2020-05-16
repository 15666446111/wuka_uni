<template>
	<view class="bank-card">
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
	
		<navigator url="" open-type="navigate">
			<view class="bank wxbox">
				<image class="wx" src="../../../static/wx.png" mode="widthFix" />
				<view class="bank-text">解除微信</view>
				<image class="bank-img" src="/images/jiantou.png" mode="widthFix" />
			</view>
		</navigator>
	
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
@import '../style/setting.css';
</style>
