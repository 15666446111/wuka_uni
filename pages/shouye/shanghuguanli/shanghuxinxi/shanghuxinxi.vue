<template>
	<view>
		<view class="titlebars">
			<!-- 头部内容栏 -->
			<view class="titlebar">
				<view class="rise">
					<view class="rise-head">
						<image class="head" src="/static/huoban/tb.png" />
						<view class="name">畅伙伴</view>
						<view class="shiming">
							<image class="shiming-image" src="/static/xz1.png" />
							<view class="shiming-text">已实名</view>
						</view>
						<view class="id">
							<view class="ID">ID:80000001</view>
							<view class="zhanghao">账号15812345678</view>
						</view>
					</view>
				</view>
			</view>
			<view class="hengxian"></view>
		</view>
		<view class="backgroundColor">
			<view class="data">
				<view class="phone">手机号</view>
				<view class="mark">15812345678</view>
			</view>
			<view class="dara-xian"></view>
			<view class="data">
				<view class="phone">注册时间</view>
				<view class="mark">2019年12月6日</view>
			</view>
			<view class="dara-xian"></view>
			<view class="data">
				<view class="phone">激活状态</view>
				<view class="mark">已激活</view>
			</view>
			<view class="dara-xian"></view>
			<navigator url="../huodongxiangqing/huodongxiangqing">
			<view class="data">
				<view class="phone">活动详情</view>
				<view class="mark">查看</view>
			</view>
			</navigator>
			<view class="dara-xian"></view>
			<navigator url="../jiaoymingxi/jiaoymingxi">
				<view class="data">
					<view class="phone">交易明细</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
			<view class="dara-xian"></view>
			<navigator url="../feilvcanshu/feilvcanshu">
				<view class="data">
					<view class="phone">修改商户费率</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mid: '',
			merchantInfo: [],
		};
	},
	
	onLoad(options) {
		this.mid = options.id;
	},
	
	methods: {}
};
</script>

<style>
	@import url("../../style/merchant_details.css");
</style>