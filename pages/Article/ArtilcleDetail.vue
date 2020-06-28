<template>
	<view>
		<view class="title">
			<text>{{article.title}}</text>
		</view>
		<view class="add_time">
			发布时间：{{article.created_at}}
		</view>
		<view class="content">
			<rich-text :nodes="article.content|formatRichText"></rich-text>
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
		},

		filters: {
			/**
			 * 处理富文本里的图片宽度自适应
			 * 1.去掉img标签里的style、width、height属性
			 * 2.img标签添加style属性：max-width:100%;height:auto
			 * 3.修改所有style里的width属性为max-width:100%
			 * 4.去掉<br/>标签
			 * @param html
			 * @returns {void|string|*}
			 */
			formatRichText (html) { //控制小程序中图片大小
				if (typeof(html)=='string') {
					let newContent= html.replace(/<img[^>]*>/gi,function(match,capture){
						match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
						match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
						match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
						return match;
					});
					newContent = newContent.replace(/style="[^"]+"/gi,function(match,capture){
						match = match.replace(/width:[^;]+;/gi, 'max-width:92%;').replace(/width:[^;]+;/gi, 'max-width:92%;');
						return match;
					});
					newContent = newContent.replace(/<br[^>]*\/>/gi, '');
					newContent = newContent.replace(/\<img/gi, '<img style="max-width:92%;height:auto;display:inline-block;margin:10rpx auto;"');
					return newContent;
				}
			}	
		}

	}
</script>






<style>
	page {
		background-color: #f7f7f7;
		/* padding: 0 4%; */
	}
	.title {
		height: 160rpx;
		line-height: 160rpx;
		font-size: 40rpx;
		text-align: center;
	}
	.add_time {
		margin-right: 4%;
		padding-bottom: 20rpx;
		text-align: right;
		fong-size: 24rpx;
		color: #999;
	}
	.content {
		text-indent: 44rpx;
	}
	/* .content img {
		max-width: 90%;
	} */
</style>
