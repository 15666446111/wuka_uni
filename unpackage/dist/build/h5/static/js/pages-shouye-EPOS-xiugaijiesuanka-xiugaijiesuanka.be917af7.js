(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shouye-EPOS-xiugaijiesuanka-xiugaijiesuanka"],{"12e7":function(e,t,a){"use strict";(function(e){var i=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("f3f3")),n=i(a("b1e4")),l={components:{wPicker:n.default},data:function(){return{title:"Hello",startYear:(new Date).getFullYear(),regionDval:["北京市","市辖区","东城区"],resultInfo:{result:"请选择所在地区"}}},computed:{},mounted:function(){},methods:{toggleTab:function(e){this.$refs[e].show()},onConfirm:function(t){e("log",t," at pages/shouye/EPOS/xiugaijiesuanka/xiugaijiesuanka.vue:81"),this.resultInfo=(0,s.default)({},t)}}};t.default=l}).call(this,a("0de9")["log"])},"21e0":function(e,t,a){"use strict";a.r(t);var i=a("94ed"),s=a("78ff");for(var n in s)"default"!==n&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("3f18");var l,c=a("f0c5"),o=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"1cfe0037",null,!1,i["a"],l);t["default"]=o.exports},"3f18":function(e,t,a){"use strict";var i=a("e249"),s=a.n(i);s.a},"40ed":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".indexs[data-v-1cfe0037]{width:100%;background-color:#fff;margin-top:%?20?%;border-radius:%?10?% %?10?% %?10?% %?10?%}.selects[data-v-1cfe0037]{width:100%;position:relative;margin-top:2%}.select-view[data-v-1cfe0037]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%}.select-view1[data-v-1cfe0037]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%;position:relative}.select-name[data-v-1cfe0037]{margin-left:%?40?%;margin-top:4.5%;font-size:%?25?%;width:26%}.select-text[data-v-1cfe0037]{margin-top:4.5%;font-size:%?25?%;color:#666;width:70%}.select-text1[data-v-1cfe0037]{position:absolute;top:%?35?%;left:%?235?%;font-size:%?25?%;color:#666}.hengxian[data-v-1cfe0037]{width:94%;height:1px;background-color:#dbdada;margin-left:3%}.ckeck[data-v-1cfe0037]{width:90%;margin-left:5%;font-size:%?28?%;margin-top:3%}uni-button[data-v-1cfe0037]{width:80%;margin-top:%?50?%;background:-webkit-gradient(linear,left top,right top,from(#fe695a),to(#f64547));background:-webkit-linear-gradient(left,#fe695a,#f64547);background:linear-gradient(90deg,#fe695a,#f64547);color:#fff}\n\n/*  */.picture[data-v-1cfe0037]{height:100%;background-color:#fff;border-radius:4px 4px 4px 4px;-webkit-box-shadow:#ddd 3px 3px 8px 3px;box-shadow:#ddd 3px 3px 8px 3px;overflow:hidden;margin-top:2%}.photograph[data-v-1cfe0037]{height:6.5rem;margin-top:2%}.photograph-image[data-v-1cfe0037]{width:40%;height:5rem;margin-left:6%;-webkit-box-shadow:#d3d3d3 0 0 4px 0;box-shadow:#d3d3d3 0 0 4px 0;margin-top:3%}",""]),e.exports=t},"78ff":function(e,t,a){"use strict";a.r(t);var i=a("12e7"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},"94ed":function(e,t,a){"use strict";var i={"w-picker":a("b1e4").default},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"ID"},[a("v-uni-view",{staticClass:"indexs"},[a("v-uni-view",{staticClass:"select"},[a("v-uni-view",{staticClass:"select-view"},[a("v-uni-view",{staticClass:"select-name"},[e._v("姓名：")]),a("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"畅伙伴","placeholder-class":"place"}})],1),a("v-uni-view",{staticClass:"hengxian"}),a("v-uni-view",{staticClass:"select-view"},[a("v-uni-view",{staticClass:"select-name"},[e._v("预留手机号：")]),a("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"15800000000","placeholder-class":"place"}})],1),a("v-uni-view",{staticClass:"hengxian"}),a("v-uni-view",{staticClass:"select-view"},[a("v-uni-view",{staticClass:"select-name"},[e._v("结算卡号：")]),a("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"6222000000000000000","placeholder-class":"place"}})],1),a("v-uni-view",{staticClass:"hengxian"}),a("v-uni-view",{staticClass:"select-view"},[a("v-uni-view",{staticClass:"select-name"},[e._v("结算银行：")]),a("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"工商银行","placeholder-class":"place"}})],1),a("v-uni-view",{staticClass:"hengxian"}),a("v-uni-view",{staticClass:"select-view"},[a("v-uni-view",{staticClass:"select-name"},[e._v("支行名称：")]),a("v-uni-input",{staticClass:"select-text",attrs:{placeholder:"工商银行济南分行","placeholder-class":"place"}})],1),a("v-uni-view",{staticClass:"hengxian"}),a("v-uni-view",{staticClass:"select-view1"},[a("v-uni-view",{staticClass:"select-name"},[e._v("所在地区：")]),a("v-uni-view",{staticClass:"tab select-text1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleTab("region")}}},[e._v(e._s(e.resultInfo.result))]),a("w-picker",{ref:"region",attrs:{mode:"region",defaultVal:e.regionDval,areaCode:["11","1101","110101"],hideArea:!1,timeout:!0},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"picture"},[a("v-uni-view",{staticClass:"photograph"},[a("v-uni-image",{staticClass:"photograph-image",attrs:{src:"/static/shuzi/bank_card.jpg"}}),a("v-uni-image",{staticClass:"photograph-image",attrs:{src:"/static/shuzi/bank_card2.jpg"}})],1)],1),a("v-uni-view",[a("v-uni-button",[e._v("确 认 修 改")])],1)],1)},n=[];a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}))},e249:function(e,t,a){var i=a("40ed");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("2dc34f7f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);