import baseurl from './config.js';

// 公共的请求
const net = function(options) {
	// 设置请求url
    options.url = baseurl + options.url;
	// 尝试请求接口
    try {
		// 获取token
		const token 	= uni.getStorageSync('token');
		// 如果token存在 请求头链接上token Bearer令牌 设置在请求头
       	if (token) {
         	options.header = {
           		'Authorization' : 'Bearer ' + token
         	};
        }else{
			// 如果没有token  定位到登陆页面
            uni.navigateTo({
                url: '/pages/index/index'
            });
            return;
        }
     } catch (err) {
		// 如果请求出错  打印错误信息
      	console.log(err)
    }

	// 返回请求
	return uni.request(options);
}
export default net;