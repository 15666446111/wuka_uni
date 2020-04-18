<template>
	<view class="ID">
		<view class="indexs">
			<view class="select">
				<view class="select-view">
					<view class="select-name">收货人：</view>
					<input class="select-text" placeholder="请填写姓名" placeholder-class="place" />
				</view>
				<view class="hengxian"></view>
				<view class="select-view">
					<view class="select-name">联系电话：</view>
					<input class="select-text" placeholder="请填写手机号码" placeholder-class="place" />
				</view>
				<view class="hengxian"></view>
				<view class="select-view1">
					<view class="select-name">所在地区：</view>
					<view class="tab select-text1" @tap="toggleTab('region')">{{ resultInfo.result }}</view>
					<w-picker
						mode="region"
						:defaultVal="regionDval"
						:areaCode="['11', '1101', '110101']"
						:hideArea="false"
						@confirm="onConfirm"
						ref="region"
						:timeout="true"
					></w-picker>
				</view>
				<view class="hengxian"></view>
				<view class="select-view">
					<view class="select-name">详细地址：</view>
					<input class="select-text" placeholder="请填写详细地址" placeholder-class="place" />
				</view>
			</view>
		</view>
		<view class="ckeck">
			<checkbox checked="true" color="#ED6E11"><text class="moren">默认</text></checkbox>
		</view>

		<view><button>保 存</button></view>
	</view>
</template>

<script>
import wPicker from '@/components/w-picker/w-picker.vue';

export default {
	components: {
		wPicker
	},
	data() {
		return {
			title: 'Hello',
			startYear: new Date().getFullYear(),
			regionDval: ['北京市', '市辖区', '东城区'],
			resultInfo: {
				result: '请选择所在地区'
			},
			
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
.indexs {
	width: 90%;
	background-color: #fff;
	margin-left: 5%;
	margin-top: 20rpx;
	border-radius: 10rpx 10rpx 10rpx 10rpx;
}

.selects {
	width: 100%;
	position: relative;
	margin-top: 2%;
}

.select-view {
	display: flex;
	height: 110rpx;
}
.select-view1 {
	display: flex;
	height: 110rpx;
	position: relative;
}

.select-name {
	margin-left: 40rpx;
	margin-top: 6%;
	font-size: 25rpx;
	width: 26%;
}
.select-text {
	margin-left: 20rpx;
	margin-top: 6%;
	font-size: 25rpx;
	color: #666;
}
.select-text1 {
	position: absolute;
	top: 40upx;
	left: 240upx;
	font-size: 25rpx;
	color: #666;
}


.hengxian {
	width: 94%;
	height: 1px;
	background-color: #dbdada;
	margin-left: 3%;
}
.ckeck {
	width: 90%;
	margin-left: 5%;
	font-size: 28rpx;
	margin-top: 3%;
}
button {
	width: 80%;
	margin-top: 50rpx;
	background-color: #ff8c00;
	border-radius: 40rpx 40rpx 40rpx 40rpx;
	color: #fff;
}
</style>

