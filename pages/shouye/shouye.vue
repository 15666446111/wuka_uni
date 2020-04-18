<template>
	<view>
		<!-- 轮播图 -->
		<swiper-image :resdata="swipers"></swiper-image>
		<!-- 公告 -->

		<view class="notice">
			<image class="notice-img" src="../../static/laba.png" mode="widthFix"></image>
			<view class="notice-text">公告：积分兑换、信用卡申请已经上线！！！</view>
		</view>

		<!-- 首页分类 -->
		<home-nav :resdata="indexnavs"></home-nav>

		<!-- 数据显示 -->
		<view class="datas">
			<view class="data ">
				<view class="deal">
					<view class="number">100000000.00</view>
					<view class="text">月交易额</view>
				</view>

				<view class="wire"></view>

				<view class="deal">
					<view class="number">80000.00</view>
					<view class="text">本月收益</view>
				</view>
			</view>
			<view class="vertical"></view>
			<view class="data ">
				<view class="deal">
					<view class="number" style="color:#f98021;">38</view>
					<view class="text">新增伙伴(人)</view>
				</view>

				<view class="wire"></view>

				<view class="deal">
					<view class="number" style="color:#f98021;">122</view>
					<view class="text">新增商户(户)</view>
				</view>
			</view>
		</view>
		<!-- 四个模块 -->
		<view class="modules-view">
			<view class="module">
				<navigator url="../index/index">
					<view class="module-text">
						<view class="module-text1">赋鸿财商</view>
						<view class="module-text2">百万财商俱乐部</view>
					</view>
				</navigator>
				<image class="module-image" src="../../static/7.png"></image>
			</view>

			<view class="module">
				<navigator url="../index/login">
					<view class="module-text">
						<view class="module-text1">卡测评</view>
						<view class="module-text2">给信用卡做次体检</view>
					</view>
				</navigator>
				<image class="module-image" src="../../static/10.png"></image>
			</view>
		</view>
		<view class="modules-view">
			<view class="module">
				<view class="module-text">
					<view class="module-text1">信用卡申请</view>
					<view class="module-text2">高额佣金 在线秒批</view>
				</view>
				<image class="module-image" src="../../static/11.png"></image>
			</view>
			<view class="module">
				<view class="module-text">
					<view class="module-text1">积分兑换</view>
					<view class="module-text2">积分变现 高额收益</view>
				</view>
				<image class="module-image" src="../../static/12.png"></image>
			</view>
		</view>
		<view style=" height: 200upx;"></view>
	</view>
</template>

<script>
import swiperImage from '@/components/home/swiper-image.vue';
import homeNav from '@/components/home/home-nav.vue';

export default {
	components: {
		swiperImage,
		homeNav
	},
	data() {
		return {
			swipers: [{ src: 'https://ccx.changhuoban.com/public/upload/xcx/banner1.png' }, { src: 'https://ccx.changhuoban.com/public/upload/xcx/banner0.jpg' }],
			indexnavs: [
				{ src: '/static/1.png', text: 'EPOS', url: 'EPOS/EPOS' },
				{ src: '/static/2.png', text: '商户注册', url: 'shanghuzhuce/shanghuzhuce' },
				{ src: '/static/3.png', text: '商户登记', url: 'shanghudengji/shanghudengji' },
				{ src: '/static/13.png', text: '商户管理', url: 'shanghuguanli/shanghuguanli' },
				{ src: '/static/5.png', text: '商城购买', url: 'shangcheng/shangcheng' },
				{ src: '/static/4.png', text: '团队拓展', url: 'tuanduituozhan/tuanduituozhan' },
				{ src: '/static/44.png', text: '伙伴管理', url: 'huobanguanli/huobanguanli' },
				{ src: '/static/8.png', text: '在线客服', url: 'zaixiankefu/zaixiankefu' },
				{ src: '/static/wd/jj.png', text: '机具管理' ,url:"shangcheng/shangcheng"},
				{ src: '/static/4.png', text: '账单规划' ,url:"tuanduituozhan/tuanduituozhan"},
				{ src: '/static/44.png', text: '产品使用' ,url:"huobanguanli/huobanguanli"},
				{ src: '/static/8.png', text: '收益明细' ,url:"zaixiankefu/zaixiankefu"}
			]
		};
	},
	methods: {
		envent(item) {
			console.log('点击了图标');
		}
	}
};
</script>

<style>
/* 四个模块 */
.modules-view {
	width: 92%;
	margin-left: 4%;
	display: flex;
	overflow: hidden;
	margin-top: 2%;
}
.module {
	width: 49%;
	background-color: #fff;
	display: flex;
	margin-left: 1%;
	border-radius: 8px;
	position: relative;
	height: 150upx;
}
.module-image {
	width: 120upx;
	height: 120upx;
	margin-top: 20upx;
	margin-left: 65%;
}
.module-text {
	position: absolute;
	left: 5%;
	top: 20%;
}
.module-text2 {
	font-size: 18upx;
	color: #666;
}

/* 数据显示 */
.datas {
	background-color: #ffffff;
	width: 92%;
	margin-left: 4%;
	border-radius: 8px;
}
.data {
	display: flex;
	width: 100%;
}
.deal {
	text-align: center;
	width: 50%;
	height: 150upx;
	line-height: 150upx;
}
.wire {
	width: 1upx;
	height: 90upx;
	background-color: #d9d9d9;
	margin-top: 3%;
}
.number {
	margin-top: 6%;
	font-size: 33upx;
	font-weight: 600;
	color: #ff0000;
}
.vertical {
	width: 96%;
	margin-left: 2%;
	height: 1upx;
	background-color: #d9d9d9;
}
/* 首页分类  */
.row {
	width: 92%;
	margin-left: 4%;
	background-color: #ffffff;
	border-radius: 20upx;
}
/* 公告 */
.notice {
	width: 92%;
	height: 55rpx;
	border-radius: 8px;
	box-shadow: #d3d3d3 0 0 4px 0;
	margin: 20rpx 4%;
	display: flex;
	background-color: #fff;
}
.notice-img {
	width: 6%;
	height: 6%;
	margin-left: 4%;
	margin-top: 0.8%;
}

.notice-text {
	display: inline-block;
	font-size: 28upx;
	color: #666;
	margin-left: 3%;
}
</style>
