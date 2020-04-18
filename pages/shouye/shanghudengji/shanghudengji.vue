<template>
	<view id="body">
		<!-- 头部注释 -->
		<view class="fr_top">
			<image class="fr_image" src="/static/mark.png" />
			<view class="view_p">注：为保证正常使用，请妥善填写信息。</view>
		</view>

		<!-- 第一栏 -->
		<view class="selects">
			<view class="select">
			<navigator url="zhongduanxuanze/zhongduanxuanze">
				<view class="select-view">
					<view class="select-name">终端选择</view>
					<view class="select-text1">请选择</view>
					<image class="select-image" src="/static/EPOS/jiantou.png" />
				</view>
			</navigator>
			</view>
		</view>
		<!-- 第二栏 -->
		<view class="selects">
			<view class="select">
				<view class="select-view2 tab">
					<view class="select-name1">商户类型</view>
					<view class="select-text2" @tap="toggleTab('selector')">
						{{ resultInfo.result }}
					</view>
					<w-picker mode="selector" defaultVal="C类" @confirm="onConfirm" ref="selector" themeColor="#f00" :selectList="selectList"></w-picker>
					<image class="select-image" src="/static/EPOS/jiantou.png" />
				</view>
				<view class="hengxian"></view>
			</view>

			<!-- 第三栏 -->
			<view class="select">
				<view class="select-view">
					<view class="select-name">商户姓名</view>
					<input class="select-text" placeholder="请输入商户姓名" placeholder-class="place" />
				</view>
				<view class="hengxian"></view>
			</view>
			<!-- 第三栏 -->
			<view class="select">
				<view class="select-view">
					<view class="select-name">商户电话</view>
					<input class="select-text" placeholder="请输入商户手机号" placeholder-class="place" />
				</view>
			</view>
		</view>
		<navigator url="jiaoyixiangqing/jiaoyixiangqing"><button class="button1">确 认 登 记</button></navigator>
		<navigator url="shanghuxinxi/shanghuxinxi"><button class="button2">A 类 商 户 入 网</button></navigator>
	</view>
</template>

<script>
import wPicker from '@/components/w-picker/w-picker.vue';
let _this = null;
export default {
	components: {
		wPicker
	},
	data() {
		return {
			title: 'Hello',
			startYear: new Date().getFullYear(),
			selectList: [
				{
					label: 'C类',
					value: 1
				},
				{
					label: 'A类',
					value: 2
				},
				{
					label: 'B类',
					value: 3
				}
			],
			resultInfo: {
				result: '请选择类型'
			}
		};
	},
	computed: {},
	mounted() {},
	methods: {
		toggleTab(str) {
			this.$refs[str].show();
		},
		onConfirm(val) {
			console.log(val);
			this.resultInfo = { ...val };
		}
	}
};
</script>

<style>
/*  注释*/
.fr_top {
	width: 100%;
	height: 2rem;
	background-color: #fff;
	overflow: hidden;
	display: flex;
	box-shadow: #ddd 3px 3px 8px 3px;
	margin-top: 2%;
}
.view_p {
	font-size: 0.7rem;
	color: #666;
	width: 70%;
	margin-top: 2%;
	margin-left: 2%;
}

.fr_image {
	width: 1.4rem;
	height: 1.4rem;
	display: flex;
	margin-top: 1.2%;
	margin-left: 8%;
}

/* 内容 */
.selects {
	width: 90%;
	margin-left: 5%;
	background-color: #fff;
	margin-top: 2%;
	border-radius: 4px 4px 4px 4px;
	box-shadow: #ddd 3px 3px 8px 3px;
}

.select-view {
	display: flex;
	height: 100upx;
	position: relative;
}
.select-view2 {
	display: flex;
	height: 100upx;
	position: relative;
}
.select-view1 {
	display: flex;
	height: 2.1rem;
	position: relative;
}

.select-image {
	width: 45rpx;
	height: 45rpx;
	position: absolute;
	right: 1rem;
	top:27upx;
}

.select-name {
	font-size: 28upx;
	margin-left: 1rem;
	margin-top: 4%;
}
.select-name1 {
	font-size: 28upx;
	margin-left: 30upx;
	margin-top: 4%;
	width: 100%;
}

.select-text {
	color: #666;
	font-size: 28upx;
	border: 0;
	margin-left: 30upx;
	margin-top: 4.5%;
}
.select-text1 {
	color: #666;
	font-size: 28upx;
	border: 0;
	margin-left: 30upx;
	margin-top: 4%;
}

.select-text2 {
	color: #666;
	font-size:28upx;
	border: 0;
	position: absolute;
	margin-top: 28upx;
	left: 186upx;
	width: 100%;
}
.item {
	width: 70%;
	margin-left: 35upx;
	position: relative;
}

.hengxian {
	width: 94%;
	height: 1px;
	background-color: #dbdada;
	margin-left: 3%;
}
/*  */

.button1 {
	width: 70%;
	height: 2.5rem;
	margin-left: 15%;
	margin-top: 2rem;
	background-color: #f98021;
	color: #ffffff;
	font-weight: 800;
	border-radius: 7px 7px 7px 7px;
}
.button2 {
	width: 70%;
	background-color: #f8aa00;
	height: 2.5rem;
	margin-left: 15%;
	margin-top: 2rem;
	color: #ffffff;
	font-weight: 800;
	border-radius: 7px 7px 7px 7px;
}
</style>
