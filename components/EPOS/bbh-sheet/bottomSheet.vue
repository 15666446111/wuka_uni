<template>
	<view class="content">
		<view class="sheet" :class="{ sheetShow: isShowBottom, sheeHide: !isShowBottom }" @touchmove.stop.prevent="moveHandle" @click="closeSheet()">
			<scroll-view scroll-y="true" class="sheetView" :class="{ sheetView_active: isShowBottom }" @click.stop="stopEvent()">
				<view class="bank-for" v-for="(item, index) in bank" :key="index">
					<view class="bank j-center d-flex">
						<image class="bank-image" :src="item.src"></image>
						<view class="bank-view ">
							{{ item.name }}
							<text class="bank-text">{{ item.text }}</text>
						</view>
					</view>
					<view class="xian"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
export default {
	name: 'bottomSheet',
	props: {
		isShowBottom: Boolean
	},
	data() {
		return {
			bank: [
				{
					name: '广发银行',
					text: '(1234)',
					src: '/static/gf.png'
				},
				{
					name: '光大银行',
					text: '(1234)',
					src: '/static/gd.png'
				},
				{
					name: '中心银行',
					text: '(1234)',
					src: '/static/zx.png'
				},
				{
					name: '招商银行',
					text: '(1234)',
					src: '/static/zs.png'
				}
			]
		};
	},
	methods: {
		closeSheet() {
			this.$emit('closeBottom');
		},
		stopEvent() {
			//@click.stop防止事件冒泡
		},
		moveHandle() {
			//不让页面滚动
		}
	}
};
</script>

<style>
.bank-for {
	width: 100%;
	background-color: #fff;
}
.bank-image {
	width: 60upx;
	height: 60upx;
	margin-top: 10upx;
}
.bank-view {
	font-size: 33upx;
	height: 80upx;
	line-height: 80upx;
	margin-left: 40upx;
}
.xian {
	width: 94%;
	margin-left: 3%;
	height: 1upx;
	background-color: #f1f1f1;
}
.bank-text {
	margin-left: 20upx;
}
/* sheet弹窗 */
.sheet {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 120%;
	left: 0upx;
	bottom: 0upx;
	right: 0upx;
	background: rgba(0, 0, 0, 0.3);
	z-index: 10000;
}

/* 显示时候的动画默认0.5s */
.sheetView {
	width: 100%;
	height: 0upx;
	position: absolute;
	bottom: 0upx;
	background: white;
	z-index: 10001;
	transition: all 0.5s;
}
.sheetShow {
	top: 0upx !important;
}
/* 关闭时的动画，时间自己可以设置0.5s*/
.sheeHide {
	top: 120% !important;
	transition: all 0.5s;
}

/* 项目需求根据设计稿要展示的高度,超出这个高度就自动滚动*/
.sheetView_active {
	height: 942upx;
}
</style>
