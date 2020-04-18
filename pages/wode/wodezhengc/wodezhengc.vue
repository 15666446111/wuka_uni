<template>
	<view class="backgroundColor">
		<view class="data"><view class="phone">我的政策：</view></view>
		<view class="dara-xian"></view>
		<navigator url="zhengceyemian/zhengceyemian">
			<view class="data">
				<view class="phone">H9-298返460</view>
				<view class="mark">查看</view>
			</view>
		</navigator>
		<view class="dara-xian"></view>
		<navigator url="zhengceyemian/zhengceyemian">
			<view class="data">
				<view class="phone">MP70-不冻结</view>
				<view class="mark">查看</view>
			</view>
		</navigator>
		<view class="dara-xian"></view>
		<navigator url="zhengceyemian/zhengceyemian">
			<view class="data">
				<view class="phone">MP70-198返368</view>
				<view class="mark">查看</view>
			</view>
		</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
/*内容栏*/
.backgroundColor {
	width: 100%;
	margin-top: 3%;
	border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
	box-shadow: #d9d9d9 0 0 4px 0;
}
.data {
	display: flex;
	background-color: #fff;
	height: 100upx;
	position: relative;
}

.mark {
	position: absolute;
	color: #ed6e11;
	right: 6%;
	top: 25%;
	font-size: 28upx;
}
.phone {
	margin-top: 3.5%;
	margin-left: 5%;
	font-size: 28upx;
}
.dara-xian {
	width: 94%;
	height: 1px;
	margin-left: 3%;
	background-color: #f1f1f1;
}
</style>
