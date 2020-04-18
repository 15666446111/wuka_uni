<template>
	<view id="body">
		<!-- 搜索框 -->
		<view class="sousuo">
			<view class="sousuo-view">
				<image class="input-image" src="/static/left_fdj.png" mode="aspectFit"></image>
				<input class="input" placeholder="请正确输入伙伴手机号" />
			</view>
		</view>
		
		<view class="select">
			<!-- 选择栏 -->
			<!-- <view class="agencys">

				<view></view>
				<view class="agency">
					<view class="agency-text">排序</view>
					<image class="agency-image" src="../../../static/dsj.png"/>
				</view>
				<view class="shuxian"></view>

				<view class="agencys-content">
					<view class="content-text">直推伙伴共</view>
					<view class="shuzi">100</view>
					<view class="content-text">人,</view>
					<view class="content-text">伙伴总人数</view>
					<view class="shuzi">1000</view>
					<view class="content-text">人</view>
				</view>
			</view> -->
			<!-- 内容 -->
			<view class="content">
				<navigator url="huobanxiangqing/huobanxiangqing">
				<view class="detail">
						<image class="detail-image" src="../../../static/huoban/tb.png"  />
						<view class="partner">
							<view class="detail-name">畅伙伴</view>
							<!-- <view class="class">
								<image class="vip-image" src="../../../static/C.png"></image>
								<view class="detail-text">1</view>
							</view> -->
						</view>
						<view class="money">
							<view class="money-text">注册时间 ：2019年12月06日 21:50 21:50</view>
						</view>
						<image class="money-image" src="../../../static/jiantou.png"></image>
				</view>
				</navigator>
				<view class="across"></view>
				<view class="detail">
						<image class="detail-image" src="../../../static/huoban/tb.png"  />
						<view class="partner">
							<view class="detail-name">畅伙伴</view>
							<!-- <view class="class">
								<image class="vip-image" src="../../../static/C.png"></image>
								<view class="detail-text">1</view>
							</view> -->
						</view>
						<view class="money">
							<view class="money-text">注册时间 ：2019年12月06日 21:50</view>
						</view>
						<image class="money-image" src="../../../static/jiantou.png"></image>
				</view>
				<view class="across"></view>
				
				<view class="detail">
						<image class="detail-image" src="../../../static/huoban/tb.png"  />
						<view class="partner">
							<view class="detail-name">畅伙伴</view>
							<!-- <view class="class">
								<image class="vip-image" src="../../../static/C.png"></image>
								<view class="detail-text">1</view>
							</view> -->
						</view>
						<view class="money">
							<view class="money-text">注册时间 ：2019年12月06日 21:50</view>
						</view>
						<image class="money-image" src="../../../static/jiantou.png"></image>
				</view>
				<view class="across"></view>
				
				<view class="detail">
						<image class="detail-image" src="../../../static/huoban/tb.png"  />
						<view class="partner">
							<view class="detail-name">畅伙伴</view>
							<!-- <view class="class">
								<image class="vip-image" src="../../../static/C.png"></image>
								<view class="detail-text">1</view>
							</view> -->
						</view>
						<view class="money">
							<view class="money-text">注册时间 ：2019年12月06日 21:50</view>
						</view>
						<image class="money-image" src="../../../static/jiantou.png"></image>
				</view>
				<view class="across"></view>
				
				<view class="detail">
						<image class="detail-image" src="../../../static/huoban/tb.png"  />
						<view class="partner">
							<view class="detail-name">畅伙伴</view>
							<!-- <view class="class">
								<image class="vip-image" src="../../../static/C.png"></image>
								<view class="detail-text">1</view>
							</view> -->
						</view>
						<view class="money">
							<view class="money-text">注册时间 ：2019年12月06日 21:50</view>
						</view>
						<image class="money-image" src="../../../static/jiantou.png"></image>
				</view>
				<view class="across"></view>
				
				<view class="detail">
						<image class="detail-image" src="../../../static/huoban/tb.png"  />
						<view class="partner">
							<view class="detail-name">畅伙伴</view>
							<!-- <view class="class">
								<image class="vip-image" src="../../../static/C.png"></image>
								<view class="detail-text">1</view>
							</view> -->
						</view>
						<view class="money">
							<view class="money-text">注册时间 ：2019年12月06日 21:50</view>
						</view>
						<image class="money-image" src="../../../static/jiantou.png"></image>
				</view>
				<view class="across"></view>
				
				<view class="detail">
						<image class="detail-image" src="../../../static/huoban/tb.png"  />
						<view class="partner">
							<view class="detail-name">畅伙伴</view>
							<!-- <view class="class">
								<image class="vip-image" src="../../../static/C.png"></image>
								<view class="detail-text">1</view>
							</view> -->
						</view>
						<view class="money">
							<view class="money-text">注册时间 ：2019年12月06日 21:50</view>
						</view>
						<image class="money-image" src="../../../static/jiantou.png"></image>
				</view>

			</view>
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
.sousuo {
	width: 90%;
	margin-left: 5%;
	background-color: #fff;
	border-radius: 15upx 15upx 15upx 15upx;
	box-shadow: #d9d9d9 0 0 4px 0;
	margin-top: 2%;
}
.sousuo-view {
	width: 100%;
	display: flex;
	margin-left: 3%;
}
.input-image {
	width: 60upx;
	height: 60upx;
	margin-top: 10upx;
}
.input {
	border: 0;
	width: 88%;
	height: 80upx;
}
/*选择框*/
.select {
	width: 100%;
}

.agencys {
	width: 90%;
	height: 2rem;
	margin-left: 5%;
	margin-top: 15px;
	display: flex;
	border-radius: 7px 7px 7px 7px;
	box-shadow: #d9d9d9 0 0 4px 0;
	background-color: #fff;
	overflow: hidden;
}

.agency {
	display: flex;
	justify-content: center;
	width: 25%;
	border-radius: 7px 7px 7px 7px;
	background-color: #FF8C00;
	color: #EEEEEE;
}

.agency-text {
	font-size: 0.9rem;
	margin-top: 0.3rem;
}

.agency-image {
	width: 1.6rem;
	height: 1.6rem;
	margin-top: 0.1rem;
}

.shuxian {
	width: 1px;
	height: 2rem;
	background-color: #eee;
}
.agencys-content {
	width: 60%;
	display: flex;
	justify-content: center;
	margin-top: 3%;
	margin-left: 0.1rem;
}
.content-text {
	font-size: 0.5rem;
	color: #666;
}
.shuzi {
	font-size: 0.5rem;
	color: #FF8C00;

}

/**/
.content {
	width: 90%;
	border-radius: 7px 7px 7px 7px;
	box-shadow: #d9d9d9 0 0 4px 0;
	margin-left: 5%;
	overflow: hidden;
	margin-top: 3%;
	background-color: #fff;
}
.detail {
	width: 100%;
	position: relative;
	height: 3.5rem;
}
.detail1 {
	width: 100%;
	position: relative;
	height: 3.6rem;
}
.detail-image {
	width: 14%;
	height: 72%;
	position: absolute;
	left: 1rem;
	top: 0.45rem;
}
.detail-name {
	margin-top: 4%;
	font-size: 0.8rem;
	margin-left: 3%;
}
.class {
	width: 1.2rem;
	height: 0.7rem;
	line-height: 0.9rem;
	border: 2px solid #FF8C00;
	border-radius: 22px;
	display: flex;
	position: relative;
	top: 10rpx;
}
.vip-image {
	width: 0.6rem;
	height: 0.6rem;
	position: absolute;
	left: 1px;
	top:5%;
}

.detail-text {
	font-size: 12rpx;
	font-weight: 600;
	color: #FF8C00;
	position: absolute;
	right: 2px;
	bottom: -12%;
}

.money-text {
	font-size: 0.5rem;
	color: #666;
	margin-left: 3%;
}

.money-image {
	width: 28px;
	height: 28px;
	position: absolute;
	right: 0.5rem;
	bottom: 0.8rem;
	border-radius:30upx;
	
}

.across {
	width: 92%;
	height: 1px;
	background-color: #F1F1F1;
	margin-left: 4%;
}

.partner,.money {
	margin-left: 3.7rem;
}

.partner view {
	display: inline-block;
}

.money {
	height: 28px;
	line-height: 28px;
}

</style>
