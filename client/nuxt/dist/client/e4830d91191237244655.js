(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1132:function(t,e,n){"use strict";n.r(e);n(26),n(60);var r=n(6),c=n(633),o=n.n(c),h={components:{},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("/api/wowToken/list");case 3:return r=e.sent,e.abrupt("return",{list:r.list});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{chart:null}},computed:{chartData:function(){return this.list?{updateTime:this.list.map((function(i){var time=new Date(+i.updateTime),t=time.getMonth()+1<10?"0".concat(time.getMonth()+1):time.getMonth()+1,e=time.getDate(),n=time.getHours(),r=time.getMinutes();return"".concat(t,"-").concat(e," ").concat(n,":").concat(r)})),price:this.list.map((function(i){return(+i.price/1e4).toFixed(2)}))}:{updateTime:[],price:[]}}},watch:{},mounted:function(){this.initChart()},methods:{initChart:function(){var t=document.querySelector("#chart");this.chart=o.a.init(t),this.chart.setOption({tooltip:{trigger:"axis",formatter:function(t){var e=t[0],n=e.name,data=e.data;return"".concat(n,": ").concat(data,"G")},axisPointer:{}},xAxis:{data:this.chartData.updateTime},yAxis:{min:function(t){return Math.floor(t.min-50)},max:function(t){return Math.ceil(t.max+50)}},series:[{name:"价格",type:"line",data:this.chartData.price}]})}}},l=(n(928),n(12)),component=Object(l.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wow-token-chart"},[e("h1",[this._v("魔兽世界怀旧服: 时光徽章价格曲线")]),this._v(" "),e("div",{staticStyle:{height:"500px"},attrs:{id:"chart"}})])}],!1,null,null,null);e.default=component.exports},487:function(t,e,n){var content=n(929);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("2d86133f",content,!0,{sourceMap:!1})},928:function(t,e,n){"use strict";var r=n(487);n.n(r).a},929:function(t,e,n){(e=n(24)(!1)).push([t.i,".wow-token-chart{width:100%;padding:10px;margin:10px 0;min-height:calc(100vh - 100px);background-color:#fff;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.wow-token-chart #chart{width:100%}",""]),t.exports=e}}]);