(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f019fb8"],{"1c3c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"control-container",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("img",{staticClass:"control-container-header",attrs:{src:s("0f51")}}),i("table"),i("div",{staticClass:"control-container-title"},[i("h2",{on:{click:t.backRouter}},[t._v("车间驾驶舱")])]),i("div",{staticClass:"control-container-inner"},[i("Row",{attrs:{gutter:20}},[i("Col",{staticClass:"col-left",style:{height:parseInt(t.colBlockHeight)+20+"px"},attrs:{xs:24,sm:24,md:8,xl:6}},[i("ul",{style:!0===t.alertAnimate?t.alertAnimStyle:"",on:{mouseenter:function(e){return t.mouseEnter("alertList")},mouseleave:function(e){return t.mouseLeave("alertList")}}},t._l(t.alertList,(function(e,s){return i("li",{key:s,staticClass:"col-block col-block-min col-block-min-alert",style:{height:t.colBlockMinHeight}},[i("div",{staticClass:"col-block-title left"},[t._v("\n            "+t._s(""!==t.alertList[0].LineNo?"预警："+e.LineNo+"#产线":"暂无预警")+"\n          ")]),i("div",{staticClass:"col-block-chart"},[""!==t.alertList[0].LineNo?i("lineChart",{style:{height:parseInt(t.colBlockMinHeight)-70+"px"},attrs:{chartData:e.chartData,standardValue:e.AverageCount||20,yAxisMaxValue:2*e.AverageCount||30,unit:"台"}}):i("div",{staticClass:"no-data",style:{height:parseInt(t.colBlockMinHeight)-70+"px"}},[i("div",{staticClass:"content"},[t._v("暂无预警")])])],1)])})),0)]),i("Col",{attrs:{xs:24,sm:24,md:16,xl:12}},[i("div",{ref:"colBlockLarge",staticClass:"col-block col-block-large",style:{height:t.colBlockLargeHeight}},[i("div",{staticClass:"col-block-title"},[t._v("\n          检测总览\n        ")]),i("div",{staticClass:"col-block-chart whole",style:{height:parseInt(t.colBlockLargeHeight)-70+"px",padding:t.screenHeight>900?"2% 0":"1% 0"},on:{mouseenter:function(e){return t.mouseEnter("todayList")},mouseleave:function(e){return t.mouseLeave("todayList")}}},[i("div",{style:{height:4*parseInt(t.colBlockLargeHeightEvery)+"px",overflow:"hidden"}},[i("div",{style:{transition:t.wholeAnimate?t.wholeAnimStyle.transition:"",transform:t.wholeAnimate?t.wholeAnimStyle.transform:""}},t._l(t.todayList,(function(e,s){return i("div",{key:s,staticClass:"MainBlock",style:{padding:t.screenHeight>1e3?"20px 0":t.screenHeight>800?"10px 0":"0",textAlign:"left"}},[i("div",{staticStyle:{width:"30%",display:"inline-block","text-align":"right"}},[i("div",{staticClass:"MainBlock-title"},[t._v("\n                    "+t._s(e.ProductClass)+"\n                  ")])]),i("span",{staticClass:"MainBlock-title-block-small"},[t._v("目标")]),i("span",{staticClass:"MainBlock-title-block-huge"},[t._v(t._s(e.TaskCount))]),i("span",{staticClass:"MainBlock-title-block-small"},[t._v("台")]),i("span",{staticClass:"MainBlock-title-block-small"},[t._v("/")]),i("span",{staticClass:"MainBlock-title-block-small"},[t._v("完成")]),i("span",{staticClass:"MainBlock-title-block-huge"},[t._v(t._s(e.QualifiedCount))]),i("span",{staticClass:"MainBlock-title-block-small"},[t._v("台")]),i("span",{staticClass:"MainBlock-title-block-small"}),i("span",{staticClass:"MainBlock-title-block",staticStyle:{"vertical-align":"bottom"}},[i("i-circle",{attrs:{percent:e.CompletedRate,"stroke-color":100===e.CompletedRate?"#5cb85c":e.CompletedRate>=60?"#2db7f5":"#ff5500",size:70}},[i("span",{staticClass:"demo-Circle-inner",staticStyle:{"font-size":"1.2em",color:"#fff"}},[i("p",{staticStyle:{"line-height":"1.3em"}},[t._v("达成率")]),t._v("\n                      "+t._s(e.CompletedRate)+"%\n                    ")])])],1)])})),0)]),0===t.todayList.length?i("div",{staticClass:"no-data"},[i("div",{staticClass:"content"},[t._v("当前未生产")])]):t._e()])]),i("Row",{attrs:{gutter:20}},[i("Col",{attrs:{xs:24,sm:24,md:12,xl:12}},[i("div",{staticClass:"col-block col-block-min col-block-min-mid",style:{height:t.colBlockMidHeight}},[i("div",{staticClass:"col-block-title"},[t._v("\n            生产任务\n          ")]),i("div",{staticClass:"col-block-chart"},[0!==t.todayAssign.proAssign.length?i("pieChart",{style:{height:parseInt(t.colBlockMidHeight)-70+"px"},attrs:{chartData:t.todayAssignPieData,radius:"60%",unit:"台",labelPosition:"top"}}):i("div",{staticClass:"no-data",style:{height:parseInt(t.colBlockMidHeight)-70+"px"}},[i("div",{staticClass:"content"},[t._v("当前未生产")])])],1)])]),i("Col",{attrs:{xs:24,sm:24,md:12,xl:12}},[i("div",{staticClass:"col-block col-block-min col-block-min-mid",style:{height:t.colBlockMidHeight}},[i("div",{staticClass:"col-block-title"},[t._v("\n            产线概况\n          ")]),i("div",{staticClass:"col-block-chart"},[0!==t.todayAssign.proLine.length?i("pieChart",{style:{height:parseInt(t.colBlockMidHeight)-70+"px"},attrs:{chartData:t.todayAssign.proLine,color:["#fc8a53","#32ce32","#2db7f5"],unit:"条",radius:"60%",labelPosition:"top"}}):i("div",{staticClass:"no-data",style:{height:parseInt(t.colBlockMidHeight)-70+"px"}},[i("div",{staticClass:"content"},[t._v("当前未生产")])])],1)])])],1)],1),i("Col",{attrs:{xs:24,sm:24,md:24,xl:6}},[i("div",{staticClass:"col-block col-block-min",style:{height:t.colBlockHeight}},[i("div",{staticClass:"col-block-title"},[t._v("\n          今日各产线概况\n        ")]),i("div",{staticClass:"col-block-chart",staticStyle:{background:"transparent"},on:{mouseenter:function(e){return t.mouseEnter("todayPro")},mouseleave:function(e){return t.mouseLeave("todayPro")}}},[i("Row",{staticClass:"col-block-chart-row",style:{height:parseInt(t.colBlockHeight)-70+"px",padding:"0"},attrs:{gutter:15}},[i("div",{style:!0===t.proAnimate?t.proAnimStyle:""},t._l(t.todayPro,(function(e,s){return i("Col",{key:s,staticClass:"col-block-chart-box",attrs:{xs:24,sm:24,md:12,xl:24}},[i("div",{staticClass:"BoxWrap",style:{height:t.proBlockHeight},on:{click:function(e){return t.proHandleClick(s)}}},[i("div",{staticClass:"horn"},[i("div",{staticClass:"lt"}),i("div",{staticClass:"rt"}),i("div",{staticClass:"rb"}),i("div",{staticClass:"lb"})]),i("table"),i("div",{staticClass:"BoxWrap-title"},[i("Tag",{staticStyle:{padding:"0 5px"},attrs:{color:e.IsWarning?"error":"success"}},[t._v("\n                    "+t._s(e.IsWarning?"预警":"正常")+"\n                  ")]),t._v("\n                   "+t._s(e.LineNo)+"# "+t._s(e.captain)+" "+t._s(e.captionPhone)+"\n                ")],1),i("div",{staticClass:"BoxWrap-block"},[i("p",{staticClass:"BoxWrap-block-num"},[t._v("\n                    "+t._s(t.isMock?e.ProductClass:"电机"===e.ProductClass.substring(e.ProductClass.length-2)?e.ProductClass.substring(0,e.ProductClass.length-2):e.ProductClass)+"\n                  ")]),i("p",[t._v("\n                    型号\n                  ")])]),i("div",{staticClass:"BoxWrap-block"},[i("p",{staticClass:"BoxWrap-block-num"},[t._v("\n                    "+t._s(e.TaskCount)+"台\n                  ")]),i("p",[t._v("\n                    任务量\n                  ")])]),i("div",{staticClass:"BoxWrap-block"},[i("p",{staticClass:"BoxWrap-block-num"},[t._v("\n                    "+t._s(e.QualifiedCount)+"台\n                  ")]),i("p",[t._v("\n                    达成量\n                  ")])]),i("div",{staticClass:"BoxWrap-block"},[i("p",{staticClass:"BoxWrap-block-num"},[t._v("\n                    "+t._s(e.CompletedRate)+"%\n                  ")]),i("p",[t._v("\n                    达成率\n                  ")])]),i("div",{staticClass:"BoxWrap-block"},[i("p",{staticClass:"BoxWrap-block-num"},[t._v("\n                    "+t._s(e.QualifiedRate)+"%\n                  ")]),i("p",[t._v("\n                    良品率\n                  ")])])])])})),1),0===t.todayPro.length?i("div",{staticClass:"no-data"},[i("div",{staticClass:"content"},[t._v("当前未生产")])]):t._e()])],1)])])],1)],1)])},a=[],o=(s("8e6e"),s("7f7f"),s("55dd"),s("456d"),s("ac6a"),s("6b54"),s("96cf"),s("3b8d")),n=s("bd86"),r=s("11e7"),l=s("5f43"),c=s("e2d4"),h=s("f11f"),d=s("76d7"),u=s("2f62");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var m={components:{lineChart:r["a"],pieChart:l["a"]},data:function(){return{screenHeight:0,colBlockMinHeight:"0px",colBlockLargeHeight:"0px",colBlockLargeHeightEvery:"0px",colBlockMidHeight:"0px",colBlockHeight:"0px",proBlockHeight:"0px",alertList:[],todayPro:[],todayList:[],todayAssign:{proAssign:[],proLine:[]},todayAssignPieData:[],alertAnimate:!1,wholeAnimate:!1,proAnimate:!1,alertAnimStyle:{transition:"all 1.5s",transform:"translate(0,0)"},wholeAnimStyle:{transition:"all 1.5s",transform:"translate(0,0)"},proAnimStyle:{transition:"all 1.5s",transform:"translate(0,0)"},alertTimer:"",wholeTimer:"",proTimer:"",client:null}},computed:g({},Object(u["c"])(["userAccess"])),mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getHeight(),window.onresize=function(){return function(){e.getHeight()}()},window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.goBack,!1));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),created:function(){this.getData(),this.alertList.length>3&&(this.alertTimer=setInterval(this.alertScroll,5e3)),this.todayPro.length>5&&(this.todayPro=this.todayPro.concat(this.todayPro),this.proTimer=setInterval(this.proScroll,5e3)),this.todayList.length>4&&(this.todayList=this.todayList.concat(this.todayList),this.wholeTimer=setInterval(this.wholeScroll,5e3))},destroyed:function(){window.removeEventListener("popstate",this.goBack,!1)},methods:{alertScroll:function(){var t=this;this.alertAnimate=!0,setTimeout((function(){t.alertList.push(t.alertList[0]),t.alertList.shift(),t.alertAnimate=!1}),1500)},wholeScroll:function(){var t=this;this.wholeAnimate=!0,setTimeout((function(){for(var e=0;e<2;e++)t.todayList.push(t.todayList[0]),t.todayList.shift();t.wholeAnimate=!1}),1500)},proScroll:function(){var t=this;this.proAnimate=!0,setTimeout(Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=0;case 1:if(!(s<3)){e.next=8;break}return e.next=4,t.todayPro.push(t.todayPro[0]);case 4:t.todayPro.shift();case 5:s++,e.next=1;break;case 8:t.proAnimate=!1;case 9:case"end":return e.stop()}}),e)}))),1500)},getHeight:function(){this.screenHeight=document.body.clientHeight;var t=80;this.colBlockMinHeight=(this.screenHeight-t-40-60)/3+"px",this.colBlockLargeHeight=2*(this.screenHeight-t-40-40)/3+"px",this.colBlockLargeHeightEvery=0!==document.getElementsByClassName("MainBlock").length?parseInt(document.getElementsByClassName("MainBlock")[0].clientHeight)+"px":"0px",this.colBlockMidHeight=1*(this.screenHeight-t-40-40)/3+"px",this.colBlockHeight=this.screenHeight-t-40-20+"px",this.proBlockHeight=(parseInt(this.colBlockHeight)-45-5-80-20)/5+"px",this.alertAnimStyle.transform="translate(0,-"+(parseInt(this.colBlockMinHeight)+20)+"px)",this.wholeAnimStyle.transform="translate(0,-"+(2*parseInt(this.colBlockLargeHeightEvery)+40)+"px)",this.proAnimStyle.transform="translate(0,-"+(3*parseInt(this.proBlockHeight)+60)+"px)"},getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.isMock?(this.alertList=c["a"],this.todayPro=c["h"],this.todayList=c["g"],this.todayAssign=c["f"],this.todayAssign.proAssign.length>4?(this.todayAssign.proAssign.sort(Object(h["b"])("value","desc")),e=[this.todayAssign.proAssign[0].name,this.todayAssign.proAssign[1].name,this.todayAssign.proAssign[2].name],this.getPieData(e,1)):this.todayAssignPieData=this.todayAssign.proAssign):(this.client=d["b"].connect(d["a"],d["c"]),this.client.on("connect",(function(t){s.client.unsubscribe("ProductRoom");for(var e=1;e<=60;e++)s.client.unsubscribe("".concat(e,"-ProductLine"));s.client.subscribe("ProductRoom",{qos:1},(function(t){})),s.client.on("message",(function(t,e){var i=JSON.parse(e.toString());console.log(t,i),i.ProductClassOverview.forEach((function(t){s.$set(t,"CompletedRate",parseInt(1e4*t.CompletedRate)/100)})),s.todayList=i.ProductClassOverview;var a=[];i.ProductClassTask.forEach((function(t){s.$set(t,"value",t.TaskCount),s.$set(t,"name",t.ProductClass),a.push(t.ProductClass)}));var o=[];if(Object.keys(i.LineStatuOverview).forEach((function(t){o.push({name:"NormalCount"===t?"正常":"WaringCount"===t?"预警":"未生产",value:i.LineStatuOverview[t]})})),s.todayAssign={proAssign:i.ProductClassTask,proLine:o,legendDataAssign:a},s.todayAssign.proAssign.length>4){s.todayAssign.proAssign.sort(Object(h["b"])("value","desc"));var n=[s.todayAssign.proAssign[0].name,s.todayAssign.proAssign[1].name,s.todayAssign.proAssign[2].name];s.getPieData(n,1)}else s.todayAssignPieData=s.todayAssign.proAssign;0!==i.LineWorkingTimeWarning.length?(i.LineWorkingTimeWarning.forEach((function(t){var e=[],i=[];t.WorkInfo.forEach((function(t){e.push(t.EndTime.substring(0,t.EndTime.length-3)),i.push(t.CompleteCount)})),s.$set(t,"chartData",{xAxisData:e,seriesData:i})})),s.alertList=i.LineWorkingTimeWarning):s.alertList=[{LineNo:"",chartData:{xAxisData:[],seriesData:[]}}],i.LineOverviewReport.forEach((function(t){s.$set(t,"CompletedRate",parseInt(1e4*t.CompletedRate)/100),s.$set(t,"QualifiedRate",parseInt(1e4*t.QualifiedRate)/100)})),s.todayPro=i.LineOverviewReport}))})));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPieData:function(t,e){var s=this;switch(e){case 1:this.todayAssignPieData=[];var i=0;t.forEach((function(t){s.todayAssignPieData.push({value:Object(h["c"])(s.todayAssign.proAssign,"name",t,"value"),name:t}),i+=Object(h["c"])(s.todayAssign.proAssign,"name",t,"value")}));var a=Object(h["a"])(this.todayAssign.proAssign,"value")-i;this.todayAssignPieData.push({value:a,name:"其他"});break}},backRouter:function(){-1!==this.userAccess.indexOf("workshop_manager")?this.isMock?(clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),this.$router.push({path:"/electric/electricSearch",name:"electricSearch"})):(this.client.unsubscribe("ProductRoom"),this.client.end(!0,clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),this.$router.push({path:"/electric/electricSearch",name:"electricSearch"}))):-1!==this.userAccess.indexOf("admin")&&(this.isMock?(clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),this.$router.go(-1)):(this.client.unsubscribe("ProductRoom"),this.client.end(clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),this.$router.go(-1))))},mouseEnter:function(t){switch(t){case"alertList":clearInterval(this.alertTimer);break;case"todayList":clearInterval(this.wholeTimer);break;case"todayPro":clearInterval(this.proTimer);break}},mouseLeave:function(t){switch(t){case"alertList":this.alertList.length>3&&(this.alertTimer=setInterval(this.alertScroll,5e3));break;case"todayList":this.todayList.length>4&&(this.wholeTimer=setInterval(this.wholeScroll,5e3));break;case"todayPro":this.todayPro.length>5&&(this.proTimer=setInterval(this.proScroll,5e3));break}},proHandleClick:function(t){this.isMock?(clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),this.$router.push({path:"/control-leader-line",name:"control-leader-line",query:{lineNo:this.todayPro[t].LineNo}})):(this.client.unsubscribe("ProductRoom"),this.client.end(!0,clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),this.$router.push({path:"/control-leader-line",name:"control-leader-line",query:{lineNo:this.todayPro[t].LineNo}})))},goBack:function(){this.isMock?(clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),sessionStorage.clear(),window.history.back()):(this.client.unsubscribe("ProductRoom"),this.client.end(!0,clearInterval(this.alertTimer),clearInterval(this.proTimer),clearInterval(this.wholeTimer),sessionStorage.clear(),window.history.back()))}},watch:{todayList:{handler:function(t,e){var s=this;this.$nextTick((function(){s.colBlockLargeHeightEvery=0!==document.getElementsByClassName("MainBlock").length?parseInt(document.getElementsByClassName("MainBlock")[0].clientHeight)+"px":"0px"}))},deep:!0}}},v=m,k=(s("c083"),s("2877")),y=Object(k["a"])(v,i,a,!1,null,"4deff8e8",null);e["default"]=y.exports},"7be3":function(t,e,s){},c083:function(t,e,s){"use strict";var i=s("7be3"),a=s.n(i);a.a}}]);