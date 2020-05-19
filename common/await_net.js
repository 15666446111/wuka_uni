import baseurl from './config.js';

export default function await_net( url, mydata, myget ){

	return new Promise((resolve,reject)=>{
		// 获取token
		const token 	= uni.getStorageSync('token');
		// 如果token存在 请求头链接上token Bearer令牌 设置在请求头
       	if (!token){
			// 如果没有token  定位到登陆页面
            uni.navigateTo({ url: '/pages/index/index' });
            return false;
        }

		uni.request({
			
			url: baseurl + url, //真实接口地址。
			
			method:myget || "get",//请求的方式
			
			data:mydata||{},//参数
			
			header: { 'Authorization' : 'Bearer ' + token },
				
			// 成功使用resolve
			success: (res) => {
				resolve(res)
			},
			
			//时报调用reject
			fail:(err)=>{
				reject(err)
			}
		});
	})
}