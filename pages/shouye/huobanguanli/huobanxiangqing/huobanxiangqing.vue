<template>
	<view>
		<view class="titlebars">
			<!-- 头部内容栏 -->
			<view class="titlebar">
				<view class="rise">
					<view class="rise-head">
						<image :src=UserInfo.headimg class="head" />
						<view class="name">{{ UserInfo.nickname }}</view>
						<view class="shiming">
							<image class="shiming-image" src="../../../../static/xz1.png" />
							<view class="shiming-text">已实名</view>
						</view>
						<view class="id">
							<view class="zhanghao">账号:{{ UserInfo.account }}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="hengxian"></view>
		</view>
		
		<view class="backgroundColor">
			<view class="data">
				<view class="phone">手机号</view>
				<view class="mark">{{ UserInfo.account }}</view>
			</view>
			<view class="dara-xian"></view>
			<view class="data">
				<view class="phone">注册时间</view>
				<view class="mark">{{ UserInfo.created_at }}</view>
			</view>
			<view class="dara-xian"></view>
			<view class="data">
				<view class="phone">状态</view>
				<view class="mark">{{ UserInfo.active }}</view>
			</view>
			<view class="dara-xian"></view>
			<view class="data">
				<view class="phone">财商会员</view>
				<view class="mark">普通会员</view>
			</view>
		</view>
		<navigator url="../jiaoyixiangqing/jiaoyixiangqing">
			<view class="backgroundColor">
				<view class="data">
					<view class="phone">数据明细</view>
					<view class="mark">查看</view>
				</view>
			</view>
		</navigator>
		<view class="backgroundColor">
			<view class="data">
				<view class="phone">设置分润参数</view>
			</view>
						<view class="dara-xian"></view>
			<navigator url="../fenruencanshu/fenruencanshu">
				<view class="data">
					<view class="phone">H9-298返460</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
			<view class="dara-xian"></view>
			<navigator url="../fenruencanshu/fenruencanshu">
				<view class="data">
					<view class="phone">MP70-不冻结</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
			<view class="dara-xian"></view>
			<navigator url="../fenruencanshu/fenruencanshu">
				<view class="data">
					<view class="phone">MP70-198返368</view>
					<view class="mark">查看</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
import net from '../../../../common/net.js';
	
export default {
	data() {
		return {
			UserInfo: {},
		};
	},
	
	onLoad: function (options){
		// 获取伙伴信息
		this.getUserInfo(options.user);
	},
	
	methods: {
	  	getUserInfo(user){
	    	net({
	        	url:"/V1/userInfo",
	            method:'POST',
				data:{
					team_user: user,
				},
	            success: (res) => {
					this.UserInfo = res.data.success.data;
	            },
				fail: () => { console.log("22") },
				complete: () => { console.log("33") }
	      	})
		},
	}
};
</script>

<style>
@import '../../style/team_detail.css';
</style>
