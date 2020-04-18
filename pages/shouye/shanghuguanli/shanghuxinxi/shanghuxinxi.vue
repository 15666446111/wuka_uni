<template>
	<view>
		<view class="titlebars">
			<!-- 头部内容栏 -->
			<view class="titlebar">
				<view class="rise">
					<view class="rise-head">
						<image class="head" src="/static/huoban/tb.png" />
						<view class="name">畅伙伴</view>
						<view class="shiming">
							<image class="shiming-image" src="/static/xz1.png" />
							<view class="shiming-text">已实名</view>
						</view>
						<view class="id">
							<view class="ID">ID:80000001</view>
							<view class="zhanghao">账号15812345678</view>
						</view>
					</view>
				</view>
			</view>
			<view class="hengxian"></view>
		</view>
		<view class="backgroundColor">
			<view class="data">
				<view class="phone">手机号</view>
				<view class="mark">15812345678</view>
			</view>
			<view class="dara-xian"></view>
			<view class="data">
				<view class="phone">注册时间</view>
				<view class="mark">2019年12月6日</view>
			</view>
			<view class="dara-xian"></view>
			<view class="data">
				<view class="phone">激活状态</view>
				<view class="mark">已激活</view>
			</view>
			<view class="dara-xian"></view>
			<navigator url="../huodongxiangqing/huodongxiangqing">
			<view class="data">
				<view class="phone">活动详情</view>
				<view class="mark">查看</view>
			</view>
			</navigator>
			<view class="dara-xian"></view>
			<navigator url="../jiaoymingxi/jiaoymingxi">
				<view class="data">
					<view class="phone">交易明细</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
			<view class="dara-xian"></view>
			<navigator url="../feilvcanshu/feilvcanshu">
				<view class="data">
					<view class="phone">修改商户费率</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
		</view>
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
.titlebars {
	width: 100%;
	height: 100%;
	background-color: #fff;
	position: relative;
	overflow: hidden;
	margin-top: 2%;
	border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
	box-shadow: #d9d9d9 0 0 4px 0;
}

.titlebar {
	width: 100%;
	margin-top: 5%;
}
.rise {
	width: 100%;
}
.rise-head {
	width: 100%;
	display: flex;
	margin-left: 5%;
	position: relative;
}
.head {
	width: 3.6rem;
	height: 3.6rem;
}
.name {
	width: 20%;
	font-size: 1.1rem;
	margin-top: 1.5%;
	margin-left: 3%;
	font-weight: 600;
}
/*实名框*/
.shiming {
	display: flex;
	border-radius: 10px 10px 10px 10px;
	border: #ed6e11 solid 1px;
	height: 30upx;
	width: 2.8rem;
	margin-top: 4%;
}
.shiming-image {
	width: 0.7rem;
	height: 0.7rem;
	margin-top: 3%;
	margin-left: 2%;
}
.shiming-text {
	font-size: 10px;
	color: #ed6e11;
	margin-top: -5upx;
}

/*ID框*/

.id {
	font-size: 12px;
	color: #666;
	position: absolute;
	left: 21.5%;
	top: 48%;
}
.hengxian {
	width: 100%;
	height: 1px;
	background-color: #dbdada;
	margin-top: 8%;
}

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
	height: 2.5rem;
	position: relative;
}

.mark {
	position: absolute;
	color: #ed6e11;
	right: 6%;
	top: 25%;
	font-size: 0.8rem;
}
.phone {
	margin-top: 3.5%;
	margin-left: 5%;
	font-size: 0.8rem;
}
.dara-xian {
	width: 94%;
	height: 1px;
	margin-left: 3%;
	background-color: #f1f1f1;
}
</style>
