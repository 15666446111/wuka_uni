<template>
	<view class="content">
		<view class="parcel">
			
			<view class="common">
				<text class="common-text">常 见 问 题</text>
			</view>
			
			<view class="">
				<view class="issue" v-for="(item,index) in dataList" :key="item.id">
					<text class="issue-text">{{ item.title }}</text>
					<image class="issue-img" src="/static/jiantou.png" />
				</view>
			</view>
		</view>
		
		
		<view class="">
			<view class="pos">
				<view class="for">
					<view class="pos-view">
						<image class="pos-img" src="/static/新建文件夹/xiugai.png" />
						<view class="pos-text">装机问题</view>
					</view>
					<view class="pso-xian"></view>
				</view>
				<view class="for">
					<view class="pos-view">
						<image class="pos-img" src="/static/新建文件夹/xiugai.png" />
						<view class="pos-text">到账问题</view>
					</view>
					<view class="pso-xian"></view>
				</view>
				<view class="for">
					<view class="pos-view">
						<image class="pos-img" src="/static/新建文件夹/xiugai.png" />
						<view class="pos-text">使用问题</view>
					</view>
					<view class="pso-xian"></view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
export default{ props:["dataList"]}
</script>

<style>
@import 'style/service.css';
</style>

