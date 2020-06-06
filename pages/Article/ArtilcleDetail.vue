<template>
	<view>
		<view class="title">
			<text>{{article.title}}</text>
		</view>
		<view class="add_time">
			发布时间：{{article.created_at}}
		</view>
		<view class="content">
			{{article.content}}
		</view>
	</view>
	
</template>

<script>
	import net from '../../common/net.js';

	export default {
		data() {
			return {
				article: []
			};
		},
		
		// 页面初始化执行
		onLoad(options){
			this.getArticle(options.aid);
		},
		
		methods: {
			getArticle(aid){
				net({
		        	url:"/V1/getArticle",
		            method:'get',
					data: { aid: aid},
		            success: (res) => {
						console.log(res);
						this.article = res.data.success.data;
		            } 
		      	})
			}
		}
	}
</script>






<style>
	page {
		background-color: #f7f7f7;
		padding: 0 4%;
	}
	.title {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 34rpx;
		text-align: center;
	}
	.add_time {
		padding-bottom: 20rpx;
		text-align: right;
		fong-size: 24rpx;
		color: #999;
	}
	.content {
		text-indent: 44rpx;
	}
	.content img {
		max-width: 100%;
	}
</style>
