(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shouye-shangcheng-xinzeng-xinzeng"],{2504:function(e,t,i){"use strict";var a=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("ac35")),s=function(e){e.url=n.default+e.url;try{var t=uni.getStorageSync("token");if(""==t)return void uni.redirectTo({url:"/pages/index/index"});uni.request({url:e.url,header:{Authorization:"Bearer "+t},method:e.method,data:e.data,success:function(t){if(200==t.statusCode&&e.success(t),505==t.statusCode)return uni.showToast({title:t.data.error.message,icon:"none",mask:!0}),void setTimeout((function(){uni.redirectTo({url:"/pages/index/index"})}),1e3)}})}catch(i){uni.showToast({title:"系统错误，请联系客服",icon:"none"})}},o=s;t.default=o},"2f04":function(e,t,i){"use strict";var a={"w-picker":i("b1e4").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"ID"},[i("v-uni-view",{staticClass:"indexs"},[i("v-uni-view",{staticClass:"select"},[i("v-uni-view",{staticClass:"select-view"},[i("v-uni-view",{staticClass:"select-name"},[e._v("收货人：")]),i("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"请填写姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-uni-view",{staticClass:"hengxian"}),i("v-uni-view",{staticClass:"select-view"},[i("v-uni-view",{staticClass:"select-name"},[e._v("联系电话：")]),i("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"请填写手机号码"},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1),i("v-uni-view",{staticClass:"hengxian"}),i("v-uni-view",{staticClass:"select-view1"},[i("v-uni-view",{staticClass:"select-name"},[e._v("所在地区：")]),i("v-uni-view",{staticClass:"tab select-text1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleTab("region")}}},[e._v(e._s(e.resultInfo.result))]),i("w-picker",{ref:"region",attrs:{mode:"region",defaultVal:e.regionDval,areaCode:["11","1101","110101"],hideArea:!1,timeout:!0},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"hengxian"}),i("v-uni-view",{staticClass:"select-view"},[i("v-uni-view",{staticClass:"select-name"},[e._v("详细地址：")]),i("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"请填写详细地址"},model:{value:e.detail,callback:function(t){e.detail=t},expression:"detail"}})],1)],1)],1),i("v-uni-view",{staticClass:"ckeck"},[i("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.defaultCheck.apply(void 0,arguments)}}},[i("v-uni-checkbox",{attrs:{checked:"true",value:"1",color:"#ED6E11"}},[i("v-uni-text",{staticClass:"moren"},[e._v("默认")])],1)],1)],1),i("v-uni-view",[i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addressAdd.apply(void 0,arguments)}}},[e._v("保 存")])],1)],1)},s=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}))},"46c5":function(e,t,i){"use strict";var a=i("8619"),n=i.n(a);n.a},"53f5":function(e,t,i){"use strict";i.r(t);var a=i("bfd8"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"6f3b":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".indexs[data-v-41d6afa6]{width:90%;background-color:#fff;margin-left:5%;margin-top:%?20?%;border-radius:%?10?% %?10?% %?10?% %?10?%}.selects[data-v-41d6afa6]{width:100%;position:relative;margin-top:2%}.select-view[data-v-41d6afa6]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?110?%}.select-view1[data-v-41d6afa6]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?110?%;position:relative}.select-name[data-v-41d6afa6]{margin-left:%?40?%;margin-top:6%;font-size:%?25?%;width:26%}.select-text[data-v-41d6afa6]{margin-left:%?20?%;margin-top:6%;font-size:%?25?%;color:#666}.select-text1[data-v-41d6afa6]{position:absolute;top:%?40?%;left:%?240?%;font-size:%?25?%;color:#666}.hengxian[data-v-41d6afa6]{width:94%;height:1px;background-color:#dbdada;margin-left:3%}.ckeck[data-v-41d6afa6]{width:90%;margin-left:5%;font-size:%?28?%;margin-top:3%}uni-button[data-v-41d6afa6]{width:80%;margin-top:%?50?%;background-color:#ff8c00;border-radius:%?40?% %?40?% %?40?% %?40?%;color:#fff}",""]),e.exports=t},8619:function(e,t,i){var a=i("6f3b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("12407df9",a,!0,{sourceMap:!1,shadowMode:!1})},ac35:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="http://zy.jiufukameng.com/api",n=a;t.default=n},b5d0:function(e,t,i){"use strict";i.r(t);var a=i("2f04"),n=i("53f5");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("46c5");var o,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"41d6afa6",null,!1,a["a"],o);t["default"]=c.exports},bfd8:function(e,t,i){"use strict";(function(e){var a=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("f3f3")),s=a(i("b1e4")),o=a(i("2504")),l={components:{wPicker:s.default},data:function(){return{title:"Hello",startYear:(new Date).getFullYear(),regionDval:["北京市","市辖区","东城区"],resultInfo:{result:"请选择所在地区"},name:"",tel:"",detail:"",is_default:1}},methods:{toggleTab:function(e){this.$refs[e].show()},onConfirm:function(t){this.resultInfo=(0,n.default)({},t),e("log",this.resultInfo," at pages/shouye/shangcheng/xinzeng/xinzeng.vue:75")},defaultCheck:function(e){this.is_default=1==e.detail.value?1:0},addressAdd:function(){var e=/^1[356789]\d{9}$/;return""==this.name?(uni.showToast({title:"请填写收货人姓名",icon:"none"}),!1):e.test(this.tel)?void 0==this.resultInfo.checkArr?(uni.showToast({title:"请选择所在地区",icon:"none"}),!1):""==this.detail?(uni.showToast({title:"请填写详细地址",icon:"none"}),!1):(uni.showLoading(),void(0,o.default)({url:"/V1/addressAdd",method:"POST",data:{name:this.name,tel:this.tel,province:this.resultInfo.checkArr[0],city:this.resultInfo.checkArr[1],area:this.resultInfo.checkArr[2],detail:this.detail,is_default:this.is_default},success:function(e){uni.hideLoading();try{e.data.success?uni.showToast({title:"添加成功",icon:"none",success:function(){setTimeout((function(){uni.redirectTo({url:"xinzeng"})}),1500)}}):uni.showToast({title:e.data.error.message,icon:"none"})}catch(t){uni.showToast({title:"系统错误，请联系客服",icon:"none"})}}})):(uni.showToast({title:"手机号格式不正确",icon:"none"}),!1)}}};t.default=l}).call(this,i("0de9")["log"])}}]);