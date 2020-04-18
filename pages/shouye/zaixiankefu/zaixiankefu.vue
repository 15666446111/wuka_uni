<template>
	<view style="overflow: hidden;">
		<scroll-view class="tab-title center" scroll-x="false" id="tab-title">
			<view>
				<view
					class="crcl-dda"
					v-for="(tab, index) in tabs"
					:key="index"
					:class="[tabCurrentIndex == index ? 'tab-current' : 'tabpage']"
					:id="'tabTag-' + index"
					@tap="tabChange"
				>
					{{ tab.name }}
				</view>
			</view>
		</scroll-view>
		<swiper class="tab-swiper-full" :current="swiperCurrentIndex" @change="swiperChange" :style="{ height: tabHeight + 'px' }">
			<swiper-item key="0"><zaixiankfu></zaixiankfu></swiper-item>
			<swiper-item key="1"><chanpinshiyong></chanpinshiyong></swiper-item>
		</swiper>
	</view>
</template>

<script>
import Chanpinshiyong from '@/components/home/chanpinshiyong.vue';
import zaixiankfu from '@/components/home/zaixiankefu.vue';
export default {
	components: {
		Chanpinshiyong,
		zaixiankfu
	},
	data() {
		return {
			show: false,
			tabCurrentIndex: 0,
			swiperCurrentIndex: 0,
			titleShowId: 'tabTag-0',
			tabHeight: 300,
			tabs: [
				//标签名称 , 分类 id , 加载更多, 加载的页码
				{ name: '在线客服', id: 'pwd1', loadingType: 0, page: 1 },
				{ name: '产品使用', id: 'pwd2', loadingType: 0, page: 1 }
			],
			showKeyboard: false
		};
	},
	onLoad() {},
	methods: {
		close() {
			this.show = false;
		},
		tabChange(e) {
			var index = e.target.id.replace('tabTag-', '');
			this.swiperCurrentIndex = index;
			this.tabCurrentIndex = index;
			this.titleShowId = 'tabTag-' + index;
		},
		swiperChange: function(e) {
			var index = e.detail.current;
			this.tabCurrentIndex = index;
			this.titleShowId = 'tabTag-' + index;
		}
	},
	onReady() {
		//获取屏幕高度及比例
		var winInfo = uni.getSystemInfo({
			success: res => {
				var windowHeight = res.windowHeight;
				//获取头部标题高度
				var dom = uni.createSelectorQuery().select('#tab-title');
				dom.fields({ size: true }, res2 => {
					if (!res2) {
						return;
					}
					//计算得出滚动区域的高度
					this.tabHeight = windowHeight - res2.height;
					console.log(this.tabHeight);
				}).exec();
			}
		});
	}
};
</script>

<style>
/* 隐藏滚动条 这个不能放在组件里*/
/* ::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
} */

/* 选项卡 */
.tab {
	padding: 0;
}
.tab-title {
	white-space: nowrap;
	text-align: center;
	background: #ffffff;
}
.tab-title view {
	width: auto;
	padding: 0 20px;
	margin: 0 30px;
	line-height: 42px;
	display: inline-block;
	text-align: center;
	border-bottom: 2px solid #ffffff;
	font-size: 30upx;
}
.tab-title view:first-child {
	margin-left: 0;
}
.tab-title view:last-child {
	margin-right: 0;
}
.tab-current {
	border-bottom: 4upx solid #f98021 !important;
	color: #f98021;
}
</style>
