(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07ffe064"],{"2a54":function(e,t,c){},7900:function(e,t,c){"use strict";var r=c("2a54"),n=c.n(r);n.a},"89e6":function(e,t,c){"use strict";c.d(t,"d",(function(){return _})),c.d(t,"g",(function(){return u})),c.d(t,"c",(function(){return s})),c.d(t,"e",(function(){return a})),c.d(t,"f",(function(){return i})),c.d(t,"a",(function(){return q})),c.d(t,"b",(function(){return l}));var r=c("66df"),n=c("c276"),_=function(e,t){return r["a"].request({url:"/api/qcResult/finByPage?pageIndex=".concat(e,"&pageSize=").concat(t),method:"get"})},u=function(e){return r["a"].request({url:"/api/product/updateQc3",method:"put",data:e})},s=function(e){var t=Object(n["n"])({pageSize:e.pageSize,pageIndex:e.pageNum,lineNo:e.lineNo,isResolved:e.isResolved,qcIndex:e.tabSelected},{});return r["a"].request({url:"/api/QcResult/FindUnqualifiedProductByQcIndexWithPage",method:"get",params:t})},a=function(e){return r["a"].request({url:"/api/Unqualified/GetDropDownList?qcIndex=".concat(e),method:"get"})},i=function(e){return r["a"].request({url:"/api/qcResult/setUnqualifiedProductReason",method:"post",data:e,headers:{"Content-Type":"application/json"}})},q=function(e){return r["a"].request({url:"/api/qcResult/findByBarcode?barcode=".concat(e),method:"get"})},l=function(e,t){return r["a"].request({url:"/api/qcResult/findQcResultByBarcode?barcode=".concat(e,"&qcindex=").concat(t),method:"get"})}},cdd7:function(e,t,c){"use strict";c.r(t);var r=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"dooya-container"},[c("Card",[c("Table",{attrs:{data:this.isMock?e.tableData:e.tableData.pageData,columns:e.tableColumns,loading:e.tableLoading,ellipsis:!0,stripe:""}}),c("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[c("div",{staticStyle:{float:"right"}},[c("Page",{attrs:{"show-sizer":"",total:this.isMock?e.tableDataOrg.length:e.tableData.dataCount,current:1},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)])],1)],1)},n=[],_=(c("96cf"),c("3b8d")),u=[{barcode:"22Y33091E0993",lineno:"22",result:2,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-10 22:24:41",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 23:16:41",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y23091E0905",lineno:"22",result:0,qc1_result:2,qc1_user_name:"涂文轩",qc1_time:"2019-10-10 14:34:41",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 15:34:41",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y23091E0904",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-10 14:24:41",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 15:24:41",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y33091E0903",lineno:"22",result:2,qc1_result:0,qc1_user_name:"",qc1_time:"",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 15:16:41",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y23091E0902",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-10 14:14:41",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 15:14:41",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y23091E0901",lineno:"22",result:3,qc1_result:1,qc1_user_name:"涂文轩",qc1_time:"2019-10-10 14:11:11",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 15:11:11",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y23091E0906",lineno:"22",result:3,qc1_result:1,qc1_user_name:"张家辉",qc1_time:"2019-10-10 14:24:41",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 15:24:41",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y33091E0904",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-10 14:24:41",qc2_result:0,qc2_user_name:"",qc2_time:"",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y43091E0904",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-10 14:24:41",qc2_result:0,qc2_user_name:"",qc2_time:"",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y23091E0903",lineno:"22",result:1,qc1_result:1,qc1_user_name:"张家辉",qc1_time:"2019-10-10 14:16:41",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-10 15:16:41",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y13091E0902",lineno:"22",result:2,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-10 13:14:41",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-09-30 13:26:10",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y13091E0901",lineno:"22",result:3,qc1_result:1,qc1_user_name:"涂文轩",qc1_time:"2019-10-10 13:11:11",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-09-30 13:28:44",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080258",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:49:43",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:51:07",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080258",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:49:43",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:51:07",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080252",lineno:"22",result:2,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:46:16",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:50:03",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080250",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:44:31",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:48:57",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080255",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:47:55",qc2_result:0,qc2_user_name:"",qc2_time:"",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080238",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:37:54",qc2_result:2,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:43:51",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080218",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:42:43",qc2_result:0,qc2_user_name:"",qc2_time:"",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080246",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:41:05",qc2_result:0,qc2_user_name:"",qc2_time:"",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080249",lineno:"22",result:0,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:39:21",qc2_result:0,qc2_user_name:"",qc2_time:"",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080198",lineno:"22",result:2,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:36:13",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:38:57",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080199",lineno:"22",result:2,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:31:38",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:38:01",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080197",lineno:"22",result:2,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:08:42",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:36:27",qc3_result:0,qc3_user_name:"",qc3_time:""},{barcode:"22Y130A080241",lineno:"22",result:2,qc1_result:2,qc1_user_name:"张家辉",qc1_time:"2019-10-08 15:33:12",qc2_result:1,qc2_user_name:"刘超凡",qc2_time:"2019-10-08 15:35:35",qc3_result:0,qc3_user_name:"",qc3_time:""}],s={checkList:u},a=c("89e6"),i={data:function(){var e=this;return{tableDataOrg:[],tableData:[],tableColumns:[{title:"编号",key:"barcode",align:"center",minWidth:150},{title:"线号",key:"lineno",align:"center",render:function(e,t){var c=t.row.lineno+"线";return e("div",c)},minWidth:80},{title:"综合测试",key:"qc1_result",align:"center",render:function(e,t){var c=t.row,r=0===c.qc1_result?"default":1===c.qc1_result?"success":"error",n=0===c.qc1_result?"未检测":1===c.qc1_result?"合格":"不合格";return e("Tag",{props:{color:r}},n)},minWidth:100},{title:"综合测试开始时间",key:"qc1_time",align:"center",minWidth:150},{title:"综合测试检测人",key:"qc1_user_name",align:"center",minWidth:120},{title:"静音结果",key:"qc2_result",align:"center",render:function(e,t){var c=t.row,r=0===c.qc2_result?"default":1===c.qc2_result?"success":"error",n=0===c.qc2_result?"未检测":1===c.qc2_result?"合格":"不合格";return e("Tag",{props:{color:r}},n)},minWidth:100},{title:"静音测试开始时间",key:"qc2_time",align:"center",minWidth:150},{title:"静音间检测人",key:"qc2_user_name",align:"center",minWidth:120},{title:"外观结果",key:"qc3_result",align:"center",render:function(e,t){var c=t.row,r=0===c.qc3_result?"default":1===c.qc3_result?"success":"error",n=0===c.qc3_result?"未检测":1===c.qc3_result?"合格":"不合格";return e("Tag",{props:{color:r}},n)},minWidth:100},{title:"外观测试时间",key:"qc3_time",align:"center",minWidth:150},{title:"外观检测人",key:"qc3_user_name",align:"center",minWidth:120},{title:"检测结果",key:"result",align:"center",render:function(e,t){var c=t.row,r=2===c.qc1_result||2===c.qc2_result||0!==c.qc3_result&&1!==c.qc3_result?"error":0===c.qc1_result||0===c.qc2_result||0===c.qc3_result?"default":1===c.qc1_result&&1===c.qc2_result&&1===c.qc3_result?"success":"warning",n=2===c.qc1_result||2===c.qc2_result||0!==c.qc3_result&&1!==c.qc3_result?"不合格":0===c.qc1_result||0===c.qc2_result||0===c.qc3_result?"未检测":1===c.qc1_result&&1===c.qc2_result&&1===c.qc3_result?"合格":"异常";return e("Tag",{props:{color:r}},n)},minWidth:100},{title:"操作",key:"action",fixed:"right",minWidth:100,align:"center",render:function(t,c){return t("div",[t("Button",{props:{type:"primary",size:"small"},on:{click:function(){e.show(c.row)}}},"详情")])}}],pageNum:1,pageSize:10,tableLoading:!1}},created:function(){this.getData()},methods:{getData:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var t,c,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.tableLoading=!0,!this.isMock){e.next=8;break}t=s.checkList,this.tableDataOrg=t,this.tableData=t.slice((this.pageNum-1)*this.pageSize,this.pageNum*this.pageSize),this.tableLoading=!1,e.next=14;break;case 8:return e.next=10,Object(a["d"])(this.pageNum,this.pageSize);case 10:if(c=e.sent.data.data,document.body.clientWidth<=1280)for(r=["线号","综合测试开始时间","综合测试检测人","静音测试开始时间","静音间检测人","外观测试时间","外观检测人"],n=this.tableColumns.length-1;n>=0;n--)r.indexOf(this.tableColumns[n].title)>-1&&this.tableColumns.splice(n,1);this.tableData=this.tableDataOrg=c,this.tableLoading=!1;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),changePage:function(e){this.pageNum=e,this.getData()},changePageSize:function(e){this.pageSize=e,this.getData()},show:function(e){this.$router.push({path:"/check/checkSearch",name:"checkSearch",params:{checkSearchNumber:e.barcode}})}}},q=i,l=(c("7900"),c("2877")),m=Object(l["a"])(q,r,n,!1,null,"5e41125d",null);t["default"]=m.exports}}]);