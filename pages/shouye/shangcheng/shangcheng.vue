<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;" :scroll-into-view="srcollinto" scroll-with-animation="true">
			<view
				class="scroll-row-item px-3 "
				@click="changTab(index)"
				style="height: 80rpx; line-height: 80rpx;"
				v-for="(item, index) in tabBars"
				:key="index"
				:class="tabIndex === index ? 'main-text-color' : ''"
				:id="'tab' + index"
			>
				<text class="font-md">{{ item.name }}</text>
			</view>
		</scroll-view>

		<swiper :current="tabIndex" :duration="150" :style="'height:' + scrollH + 'px'">
			<swiper-item v-for="(item, index) in tabBars" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">
					<view class="body">
						<view class="list-wrap">
							<scroll-view scroll-y="true" class="list">
								<view class="list-scroll-view">
									
									<view class="course-card">
										<navigator url="shangpingxinxi/shangpingxinxi">
											<view><image src="https://ccx.changhuoban.com/public/upload/xcx/sct.png" mode="widthFix"></image></view>
											<view class="body-text">MP70普通版（3台）</view>
											<view class="price">¥594.00</view>
										</navigator>
									</view>
									
									<view class="course-card">
										<navigator>
											<view><image src="https://ccx.changhuoban.com/public/upload/xcx/sct.png" mode="widthFix"></image></view>
											<view class="body-text">MP70无考核（100台</view>
											<view class="price">¥19800.00</view>
										</navigator>
									</view>
									
									<view class="course-card">
										<navigator>
											<view><image src="https://ccx.changhuoban.com/public/upload/xcx/sch9.jpg" mode="widthFix"></image></view>
											<view class="body-text">H9无考核（100台）</view>
											<view class="price">¥29800.00</view>
										</navigator>
									</view>
									
								</view>
							</scroll-view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			srcollinto: '',
			scrollH: 500,
			tabIndex: 0,
			tabBars: [
				{ name: '全部' },
				{ name: 'MP70' },
				{ name: 'H9' },
				{ name: 'MP70(扫码)' },
				{ name: 'H9(扫码)' },
				{ name: '自备机' },
				{ name: '财商学院' },
				{ name: 'MF919(智能机)' },
				{ name: 'MP60' },
				{ name: 'P70自备机' },
				{ name: 'H9自备机' }
			]
		};
	},
	onLoad() {
		//获取可视区域高度
		uni.getSystemInfo({
			success: res => {
				this.scrollH = res.windowHeight - uni.upx2px(80);
			}
		});
	},
	methods: {
		// 切换选项卡
		changTab(index) {
			if (this.tabIndex == index) {
				return;
			}
			this.tabIndex = index;
			this.srcollinto = 'tab' + index;
		},
		onChangeTab(e) {
			this.changTab(e.detail.current);
		}
	}
};
</script>

<style>
.border-bottom {
	background-color: #fff;
	margin-top: 1%;
}
.body {
	display: flex;
	flex-direction: column;
	height: 100vh; /* vw */
	background-color: #fff;
	margin-top: 10rpx;
}

.list-wrap {
	flex-grow: 1;
	position: relative;
}

.list {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.list-scroll-view {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: space-between;
	margin-left: 2vw;
	margin-right: 2vw;
}

.course-card {
	width: 47vw; /** 47 * 2 = 94 **/

	margin-top: 10px;
	margin-bottom: 10px;
	/* margin: 10px; */
}

.course-card image {
	width: 100%;
	border-radius: 5px;
}

.price,
.active {
	color: red;
}

.guide {
	display: flex;
	justify-content: space-between;
}
.guide-item {
	text-align: center;
	font-size: 14px;
	width: 45px;
	line-height: 1;
	padding: 20px;
}

.guide-item image {
	width: 38px;
}
.body-text {
	font-size: 28rpx;
}
</style>
