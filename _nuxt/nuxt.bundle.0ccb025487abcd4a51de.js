webpackJsonp([5],{121:function(t,e,n){"use strict";var r=n(46),a=n.n(r),o=n(124),i=o.keys(),s={},u=!0,c=!1,f=void 0;try{for(var l,p=a()(i);!(u=(l=p.next()).done);u=!0){var d=l.value;s[d.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=o(t);return e.default?e.default:e}(d)}}catch(t){c=!0,f=t}finally{try{!u&&p.return&&p.return()}finally{if(c)throw f}}e.a=s},124:function(t,e,n){function r(t){return n(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./layout-default.js":125,"./page-list.js":126,"./page.js":127};r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=124},125:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),a=n.n(r),o=n(9),i=n.n(o);e.default=function(){var t=i()(a.a.mark(function t(e){var n=e.store;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.dispatch("vuetal/USE_DATA","/data/menu").catch(function(t){throw Error(t)});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},126:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),a=n.n(r),o=n(9),i=n.n(o);e.default=function(){var t=i()(a.a.mark(function t(e){var n,r=e.error,o=e.store,i=e.route;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.dispatch("vuetal/USE_PAGE_LIST_AS_CURRENT",i.path).catch(console.error);case 2:n=t.sent,404===n.status&&r({statusCode:404,message:"The page doesn't exists"});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),a=n.n(r),o=n(9),i=n.n(o);e.default=function(){var t=i()(a.a.mark(function t(e){var n,r=e.error,o=e.store,i=e.route;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.dispatch("vuetal/USE_PAGE_AS_CURRENT",i.path).catch(console.error);case 2:n=t.sent,404===n.status&&r({statusCode:404,message:"The page doesn't exists"});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},128:function(t,e,n){"use strict";n.d(e,"b",function(){return w});var r=n(8),a=n.n(r),o=n(30),i=n.n(o),s=n(49),u=n.n(s),c=n(20),f=(n.n(c),n(9)),l=n.n(f),p=n(129),d=(n.n(p),n(4)),h=n(53),v=n.n(h),m=n(131),A=n(73),x=n(158),g=n(74),_=n(163),y=n(166),b=n(75),C=n(176);n.d(e,"a",function(){return g.a});var w=function(){var t=l()(a.a.mark(function t(e){var n,r,o,s,c,f,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(m.a)(),r=Object(C.a)(),t.next=5;break;case 5:return window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),o=u()({router:n,store:r,_nuxt:{defaultTransition:E,transitions:[E],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?i()({},E,{name:t}):i()({},E,t):E}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var e=this._nuxt||this.$options._nuxt;return e.dateErr=Date.now(),e.err=t,t}}},y.a),s=e?e.next:function(t){return o.router.push(t)},c=n.currentRoute,e||(f=Object(b.e)(n.options.base),c=n.resolve(f).route),l=Object(b.d)({isServer:!!e,isClient:!e,route:c,next:s,error:o._nuxt.error.bind(o),store:r,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0},o),t.abrupt("return",{app:o,router:n,store:r});case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();d.default.component(A.a.name,A.a),d.default.component(x.a.name,x.a),d.default.component(_.a.name,_.a),d.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var E={name:"page",mode:"out-in"}},131:function(t,e,n){"use strict";function r(){return new o.default({mode:"history",base:"/vuetalisk-nuxt-demo",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:c,routes:[{path:"/",component:i,name:"index"},{path:"/:collection/list",component:s,name:"PageList"},{path:"/blog",component:s,name:"BlogList"},{path:"*",component:u,name:"Page"}],fallback:!1})}e.a=r;var a=n(4),o=n(52);a.default.use(o.default);var i=function(){return n.e(2).then(n.bind(null,183)).then(function(t){return t.default||t})},s=function(){return n.e(3).then(n.bind(null,184)).then(function(t){return t.default||t})},u=function(){return n.e(1).then(n.bind(null,185)).then(function(t){return t.default||t})},c=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},158:function(t,e,n){"use strict";n(4);e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},159:function(t,e,n){var r=n(160);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(51)("5cad06dc",r,!0)},160:function(t,e,n){e=t.exports=n(50)(!0),e.push([t.i,".error-page[data-v-479818b4]{color:#000;background:#fff;top:0;bottom:0;left:0;right:0;position:absolute;font-family:SF UI Text,Helvetica Neue,Lucida Grande;text-align:center;padding-top:20%}.error-code[data-v-479818b4]{display:inline-block;font-size:24px;font-weight:500;vertical-align:top;border-right:1px solid rgba(0,0,0,.298039);margin:0 20px 0 0;padding:10px 23px}.error-wrapper-message[data-v-479818b4]{display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle}.error-message[data-v-479818b4]{font-size:14px;font-weight:400;margin:0;padding:0}.error-link[data-v-479818b4]{color:#00bcd4;font-weight:400;text-decoration:none;font-size:14px}","",{version:3,sources:["/home/pung96/git/vuetalisk/vuetalisk-nuxt-demo/.nuxt/components/nuxt-error.vue"],names:[],mappings:"AACA,6BACE,WAAY,AACZ,gBAAiB,AACjB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oDAA6D,AAC7D,kBAAmB,AACnB,eAAiB,CAClB,AACD,6BACE,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,2CAAgD,AAChD,kBAAyB,AACzB,iBAAmB,CACpB,AACD,wCACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,YAAa,AACb,qBAAuB,CACxB,AACD,gCACE,eAAgB,AAChB,gBAAoB,AACpB,SAAY,AACZ,SAAa,CACd,AACD,6BACE,cAAe,AACf,gBAAoB,AACpB,qBAAsB,AACtB,cAAgB,CACjB",file:"nuxt-error.vue",sourcesContent:['\n.error-page[data-v-479818b4] {\n  color: #000;\n  background: #fff;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";\n  text-align: center;\n  padding-top: 20%;\n}\n.error-code[data-v-479818b4] {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  vertical-align: top;\n  border-right: 1px solid rgba(0, 0, 0, 0.298039);\n  margin: 0px 20px 0px 0px;\n  padding: 10px 23px;\n}\n.error-wrapper-message[data-v-479818b4] {\n  display: inline-block;\n  text-align: left;\n  line-height: 49px;\n  height: 49px;\n  vertical-align: middle;\n}\n.error-message[data-v-479818b4] {\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0px;\n  padding: 0px;\n}\n.error-link[data-v-479818b4] {\n  color: #00BCD4;\n  font-weight: normal;\n  text-decoration: none;\n  font-size: 14px;\n}\n'],sourceRoot:""}])},161:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occured"}}}},162:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",[n("h1",{staticClass:"error-code"},[t._v(t._s(t.error.statusCode))]),n("div",{staticClass:"error-wrapper-message"},[n("h2",{staticClass:"error-message"},[t._v(t._s(t.error.message))])]),404===t.error.statusCode?n("p",[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])])},a=[],o={render:r,staticRenderFns:a};e.a=o},163:function(t,e,n){"use strict";var r=n(164),a=n(165),o=n(21),i=o(r.a,a.a,null,null,null);e.a=i.exports},164:function(t,e,n){"use strict";var r=n(4),a=n(73),o=n(74);e.a={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||"":this.$route.fullPath.split("#")[0]}},components:{NuxtChild:a.a,NuxtError:o.a}}},165:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child",{key:t.routerViewKey})},a=[],o={render:r,staticRenderFns:a};e.a=o},166:function(t,e,n){"use strict";var r=n(167),a=n(173),o=n(21),i=o(r.a,a.a,null,null,null);e.a=i.exports},167:function(t,e,n){"use strict";var r=n(20),a=n.n(r),o=n(168),i={_default:function(){return n.e(0).then(n.bind(null,186)).then(function(t){return t.default||t})}};e.a={head:{title:"starter",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"/css/poole.css"},{rel:"stylesheet",href:"/css/syntax.css"},{rel:"stylesheet",href:"/css/hyde.css"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(t){t&&i["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=i[e],this.layout},loadLayout:function(t){var e=this;t&&i["_"+t]||(t="default");var n="_"+t;return"function"!=typeof i[n]?a.a.resolve(i[n]):i[n]().then(function(t){return i[n]=t,i[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:o.a}}},168:function(t,e,n){"use strict";function r(t){n(169)}var a=n(171),o=n(172),i=n(21),s=r,u=i(a.a,o.a,s,"data-v-384bb8e8",null);e.a=u.exports},169:function(t,e,n){var r=n(170);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(51)("337b9269",r,!0)},170:function(t,e,n){e=t.exports=n(50)(!0),e.push([t.i,".progress[data-v-384bb8e8]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}","",{version:3,sources:["/home/pung96/git/vuetalisk/vuetalisk-nuxt-demo/.nuxt/components/nuxt-loading.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,MAAS,AACT,OAAU,AACV,QAAW,AACX,WAAY,AACZ,QAAU,AACV,yCAA6C,AAC7C,oCAAwC,AACxC,iCAAqC,AACrC,UAAW,AACX,yBAA0B,AAC1B,cAAgB,CACjB",file:"nuxt-loading.vue",sourcesContent:["\n.progress[data-v-384bb8e8] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],sourceRoot:""}])},171:function(t,e,n){"use strict";var r=n(4);e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},172:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},a=[],o={render:r,staticRenderFns:a};e.a=o},173:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.layout,{tag:"component"}):t._e()],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},176:function(t,e,n){"use strict";function r(t){var e=l(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function a(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},a(t.modules[n],e)}n.d(e,"a",function(){return C});var o=n(30),i=n.n(o),s=n(46),u=n.n(s),c=n(4),f=n(48);c.default.use(f.default);var l=n(177),p=l.keys(),d={},h=void 0;if(p.forEach(function(t){-1!==t.indexOf("./index.")&&(h=t)}),h&&(d=r(h)),"function"!=typeof d){d.modules||(d.modules={});var v=!0,m=!1,A=void 0;try{for(var x,g=u()(p);!(v=(x=g.next()).done);v=!0){var _=x.value,y=_.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==y){var b=y.split(/\//),t=a(d,b);y=b.pop(),t[y]=r(_),t[y].namespaced=!0}}}catch(t){m=!0,A=t}finally{try{!v&&g.return&&g.return()}finally{if(m)throw A}}}var C=d instanceof Function?d:function(){return new f.default.Store(i()({},d,{state:d.state instanceof Function?d.state():{}}))}},177:function(t,e,n){function r(t){return n(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./vuetal.js":178};r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=177},178:function(t,e,n){"use strict";function r(t){throw console.error(t),Error(t)}function a(t){return t.map(function(t){var e=t.url.split("/"),n=e.pop(),r=void 0===t.order?1e3:t.order;return[t,e.join("/")||"",r,n]}).sort(function(t,e){return t[1].localeCompare(e[1])||t[2]-e[2]||t[3].localeCompare(e[3])}).map(function(t){return t[0]})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return x}),n.d(e,"getters",function(){return g}),n.d(e,"mutations",function(){return _}),n.d(e,"actions",function(){return y});var o=n(45),i=n.n(o),s=n(8),u=n.n(s),c=n(179),f=n.n(c),l=n(9),p=n.n(l),d=n(4),h=n(72),v=n.n(h),m=n(76),A={url:"",matter:{},empty:!0},x=function(){return{pages:{},data:{},lists:{},listsByUrl:{},pageMap:{},currentPage:null,currentList:null}},g={site:function(t){return v.a||{}},data:function(t){var e=t.data;return function(t){return e[t]?e[t].data||{}:{}}},dataMeta:function(t){var e=t.data;return function(t){return e[t]}},page:function(t){var e=t.pages;return function(t){return e[t]||A}},currentList:function(t){var e=t.currentList,n=t.lists;return e?n[e]:A},current:function(t){var e=t.currentPage,n=t.pages;return e?n[e]:A},next:function(t){var e=t.pageMap[t.currentPage];return e?t.lists[e[0]].data[e[1]+1]||A:A},previous:function(t){var e=t.pageMap[t.currentPage];return e?t.lists[e[0]].data[e[1]-1]||A:A}},_={ADD_OR_UPDATE_DATA:function(t,e){d.default.set(t.data,e.url,e)},ADD_OR_UPDATE_PAGE:function(t,e){d.default.set(t.pages,e.url,e)},ADD_OR_UPDATE_LIST:function(t,e){d.default.set(t.lists,e.name,e),d.default.set(t.listsByUrl,e.url,e.name);for(var n in e.data){var r=e.data[n].url;d.default.set(t.pageMap,r,[e.name,parseInt(n)])}},REMOVE_PAGE:function(t,e){d.default.delete(t.pages,e),d.default.delete(t.pageMap,e)},REMOVE_LIST:function(t,e){var n=t.lists[e].url;d.default.delete(t.lists,e),d.default.delete(t.listsByUrl,n)},SET_CURRENT_PAGE:function(t,e){t.currentPage=e},SET_CURRENT_LIST:function(t,e){t.currentList=e}},y={FETCH_API:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var o,i,s=(e.state,e.commit),c=f()(n,2),l=c[0],p=c[1];return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.d.fetchApi(l,p).catch(r);case 2:o=t.sent,i=o.data,t.t0=i.type,t.next="page"===t.t0?7:"data"===t.t0?9:"list"===t.t0?11:14;break;case 7:return s("ADD_OR_UPDATE_PAGE",i),t.abrupt("break",14);case 9:return s("ADD_OR_UPDATE_DATA",i),t.abrupt("break",14);case 11:return"pages"===i.name&&(i.data=a(i.data)),s("ADD_OR_UPDATE_LIST",i),t.abrupt("break",14);case 14:return t.abrupt("return",o);case 15:case"end":return t.stop()}},t,this)}));return t}(),USE_PAGE:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var a=e.state,o=e.dispatch;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.pages[n]){t.next=2;break}return t.abrupt("return",{data:a.pages[n]});case 2:return t.next=4,o("FETCH_API",[n,"page"]).catch(r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return t}(),USE_DATA:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var a=e.state,o=e.dispatch;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.data[n]){t.next=2;break}return t.abrupt("return",{data:a.data[n]});case 2:return t.next=4,o("FETCH_API",[n,"data"]).catch(r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return t}(),USE_LIST:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var a,o=e.state,i=e.dispatch,s=f()(n,2),c=s[0],l=s[1];return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=o.listsByUrl[c])){t.next=3;break}return t.abrupt("return",{data:o.lists[a]});case 3:return t.next=5,i("FETCH_API",[c,l]).catch(r);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return t}(),USE_COLLECTION:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var a,o,i=e.state,s=e.getters,c=e.dispatch;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=i.lists[n])){t.next=3;break}return t.abrupt("return",{data:a});case 3:if((o=s.site.collections[n])&&o.list){t.next=6;break}return t.abrupt("return",{data:{}});case 6:return t.next=8,c("FETCH_API",[o.list,o.type]).catch(r);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},t,this)}));return t}(),USE_PAGE_AS_CURRENT:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var a,o,s=(e.state,e.commit),c=e.dispatch;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("USE_PAGE",n).catch(r);case 2:if(a=t.sent,(o=a.data)&&!(i()(o).length<1)){t.next=6;break}return t.abrupt("return",a);case 6:return s("SET_CURRENT_PAGE",n),c("USE_COLLECTION_AS_CURRENT",o.collection).catch(r),t.abrupt("return",a);case 9:case"end":return t.stop()}},t,this)}));return t}(),USE_PAGE_LIST_AS_CURRENT:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var r,a,o=(e.state,e.commit),i=e.dispatch;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("USE_LIST",[n,"page"]);case 2:return r=t.sent,a=r.data,a&&o("SET_CURRENT_LIST",a.name),t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}));return t}(),USE_COLLECTION_AS_CURRENT:function(){function t(t,n){return e.apply(this,arguments)}var e=p()(u.a.mark(function t(e,n){var r,a,o=e.commit,i=e.dispatch;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("USE_COLLECTION",n);case 2:return r=t.sent,a=r.data,a&&o("SET_CURRENT_LIST",n),t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}));return t}()};e.default={namespaced:!0,state:x,getters:g,mutations:_,actions:y}},72:function(t,e){t.exports={this_is_default:!0,api_point:"api",basename:"/",permalink:"/:year/:month/:day/:slug",taxonomy:{category:["category","categories"],tag:["tag","tags"]},collections:{pages:{type:"page",permalink:"/:path",list:"/pages/list",sort:["dir","order"],name:"pages"},data:{type:"data",permalink:"/:path",list:"/data/list",name:"data"},static:{type:"file",permalink:"/:path",name:"static"},blog:{type:"page",permalink:"/blog/:year/:month/:day/:slug",list:"/blog/list",name:"blog"}},strategy:"nuxt"}},73:function(t,e,n){"use strict";var r=(n(4),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),a=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,o=e.data;o.nuxtChild=!0;for(var i=n,s=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;o.nuxtChildDepth=c;var f=s[c]||u,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var p={};return a.forEach(function(t){"function"==typeof f[t]&&(p[t]=f[t].bind(i))}),t("transition",{props:l,on:p},[t("router-view",o)])}}},74:function(t,e,n){"use strict";function r(t){n(159)}var a=n(161),o=n(162),i=n(21),s=r,u=i(a.a,o.a,s,"data-v-479818b4",null);e.a=u.exports},75:function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.options.data||R;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.options.name]),B()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function a(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=$.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function o(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.components).map(function(e){return t.components[e]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.instances).map(function(e){return t.instances[e]})}))}function s(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return k()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function u(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/vuetalisk-nuxt-demo",env:{},hotReload:t.hotReload||!1},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,a){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":w()(e))||(a=e||{},e=t,t=302),r({path:e,query:a,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),t.from&&(n.from=t.from),n.isServer&&t.beforeRenderFns&&(n.beforeNuxtRender=function(e){return t.beforeRenderFns.push(e)}),n}function c(t,e){return!t.length||e._redirected?b.a.resolve():f(t[0],e).then(function(){return c(t.slice(1),e)})}function f(t,e){var n=void 0;return n=2===t.length?new b.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof b.a||"function"==typeof n.then)||(n=b.a.resolve(n)),n}function l(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function p(t,e){return m(d(t,e))}function d(t,e){for(var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";null!=(n=O.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(o,f),o=f+u.length,c)i+=c[1];else{var l=t[o],p=n[2],d=n[3],h=n[4],v=n[5],m=n[6],g=n[7];i&&(r.push(i),i="");var _=null!=p&&null!=l&&l!==p,y="+"===m||"*"===m,b="?"===m||"*"===m,C=n[2]||s,w=h||v;r.push({name:d||a++,prefix:p||"",delimiter:C,optional:b,repeat:y,partial:_,asterisk:!!g,pattern:w?x(w):g?".*":"[^"+A(C)+"]+?"})}}return o<t.length&&(i+=t.substr(o)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function v(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===w()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",o=n||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f,l=o[c.name];if(null==l){if(c.optional){c.partial&&(a+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+_()(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(f=s(l[p]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+_()(f)+"`");a+=(0===p?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?v(l):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');a+=c.prefix+f}}else a+=c}return a}}function A(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function x(t){return t.replace(/([=!:$\/()])/g,"\\$1")}e.a=r,e.j=a,e.f=o,e.g=i,e.c=s,e.d=u,e.h=c,e.i=f,e.e=l,e.b=p;var g=n(174),_=n.n(g),y=n(20),b=n.n(y),C=n(31),w=n.n(C),E=n(45),k=n.n(E),T=n(49),B=n.n(T),$=n(4),R=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var O=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},76:function(t,e,n){"use strict";(function(t){function r(t){return function(){return this.$store.getters["vuetal/"+t]}}n.d(e,"c",function(){return T}),n.d(e,"g",function(){return B}),n.d(e,"a",function(){return $}),n.d(e,"b",function(){return R}),n.d(e,"e",function(){return O}),n.d(e,"f",function(){return S});var a=n(31),o=n.n(a),i=n(8),s=n.n(i),u=n(9),c=n.n(u),f=n(132),l=n.n(f),p=n(133),d=n.n(p),h=n(137),v=n.n(h),m=n(72),A=n.n(m),x=n(156),g=n.n(x),_=A.a.build||{},y=_.protocol||t.env.VUETAL_API_PROTOCOL,b=_.host||t.env.VUETAL_API_HOST,C=_.port||t.env.VUETAL_API_PORT,w="";y&&(w=y+":"),b&&(w+="//"+b),C&&(w+=":"+C);var E=""+w,k=function(){function t(){l()(this,t),this.site=A.a}return d()(t,[{key:"fetchApi",value:function(){function t(t,n){return e.apply(this,arguments)}var e=c()(s.a.mark(function t(e,n){var r,a,o,i,u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e,t.t0=n,t.next="page"===t.t0?4:"data"===t.t0?7:9;break;case 4:return"/"===r&&(r="/index"),r="/api/page"+r,t.abrupt("break",9);case 7:return r="/api"+r,t.abrupt("break",9);case 9:return r=r.replace(/\/+$/,""),r=encodeURI(r),a=E+("/"+r+".json").replace(/\/+/g,"/"),o=void 0,i=!1,t.next=16,v.a.get(a).catch(function(t){o=((t||{}).response||{}).status,i=t});case 16:if(u=t.sent,!o){t.next=19;break}return t.abrupt("return",{res:void 0,data:{},status:o,error:i});case 19:return t.abrupt("return",{res:u,data:u.data,status:u.status,error:i});case 20:case"end":return t.stop()}},t,this)}));return t}()},{key:"toHtml",value:function(t,e){if(!t)return"";var n=void 0;return"string"==typeof t?n=t:"object"===(void 0===t?"undefined":o()(t))&&(n=t.data,e||(e=t.ext)),e&&n?e.match(/^\.?(md|markdown)$/i)?g()(n):n:n||""}}]),t}(),T=r("data"),B=r("site"),$=r("current"),R=r("currentList"),O=r("next"),S=r("previous");e.d=new k}).call(e,n(66))},78:function(t,e,n){"use strict";function r(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}function a(t,e,n){var a=function(t){var a=r(t,"transition",e,n);return"string"==typeof a?{name:a}:a};return t.map(function(t){var e=y()({},a(t));if(n&&n.matched.length&&n.matched[0].components.default){var r=a(n.matched[0].components.default);g()(r).filter(function(t){return r[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=r[t]})}return e})}function o(t){var e=Object(E.e)(t.options.base);return Object(E.c)(t.match(e),function(t,e,n,r,a){if("function"!=typeof t||t.options){var o=Object(E.j)(t);return n.components[r]=o,o}return t().then(function(t){var e=Object(E.j)(t);return U.serverRendered&&(Object(E.a)(e,U.data[a]),U.components&&(t.options.components=y()(e.options.components,U.components[a])),e._Ctor=e),n.components[r]=e,e})})}function i(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"!=typeof C.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),C.a[t]}),!o)return Object(E.h)(a,e)}function s(t,e){Object(E.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":l()(t))||t.options||(t=b.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function u(t,e){var n=this;this._hashChanged||b.default.nextTick(function(){var e=Object(E.g)(t);R=e.map(function(t,e){if(!t)return"";if($[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)b.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),n._hadError&&n._dateLastError===n.$options._nuxt.dateErr&&n.error();var r=n.$options._nuxt.err?w.a.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(n._context)),n.setLayout(r)})}function c(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),S.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var f=n(31),l=n.n(f),p=n(8),d=n.n(p),h=n(20),v=n.n(h),m=n(9),A=n.n(m),x=n(45),g=n.n(x),_=n(30),y=n.n(_),b=n(4),C=n(121),w=n(128),E=n(75),k=function(){var t=A()(d.a.mark(function t(e,n,r){var a,o,i;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.fullPath.split("#")[0],o=e.fullPath.split("#")[0],this._hashChanged=a===o,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,v.a.all(Object(E.c)(e,function(t,e,n,r){if("function"!=typeof t||t.options){var a=Object(E.j)(t);return n.components[r]=a,a}return t().then(function(t){var e=Object(E.j)(t);return n.components[r]=e,e})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,n,r){return t.apply(this,arguments)}}(),T=function(){var t=A()(d.a.mark(function t(e,n,r){var o,s,u,c,f,l,p,h,m=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(o=!1,s=function(t){m.$loading.finish&&m.$loading.finish(),o||(o=!0,r(t))},u=Object(E.d)({to:e,from:n,store:j,isClient:!0,next:s.bind(this),error:this.error.bind(this)},O),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=Object(E.f)(e),c.length){t.next=23;break}return t.next=12,i.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof w.a.layout?w.a.layout(u):w.a.layout);case 16:return f=t.sent,t.next=19,i.call(this,c,u,f);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(a(c,e,n)),t.prev=25,t.next=28,i.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return l=c[0].options.layout,"function"==typeof l&&(l=l(u)),t.next=34,this.loadLayout(l);case 34:return l=t.sent,t.next=37,i.call(this,c,u,l);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(p=!0,c.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{},store:u.store}))}),p){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 44:return t.next=46,v.a.all(c.map(function(t,n){if(t._path=Object(E.b)(e.matched[n].path)(e.params),!m._hadError&&t._path===$[n]&&n+1!==c.length)return v.a.resolve();var r=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,o=!!t.options.fetch,i=a&&o?30:45;if(a){var s=Object(E.i)(t.options.asyncData,u).then(function(e){Object(E.a)(t,e),m.$loading.increase&&m.$loading.increase(i)});r.push(s)}if(o){var f=t.options.fetch(u);f&&(f instanceof v.a||"function"==typeof f.then)||(f=v.a.resolve(f)),f.then(function(t){m.$loading.increase&&m.$loading.increase(i)}),r.push(f)}return v.a.all(r)}));case 46:$=c.map(function(t,n){return Object(E.b)(e.matched[n].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),o||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),$=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,h=w.a.layout,"function"==typeof h&&(h=h(u)),t.next=60,this.loadLayout(h);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(e,n,r){return t.apply(this,arguments)}}(),B=function(){var t=A()(d.a.mark(function t(e){var n,r,i,f;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O=e.app,S=e.router,j=e.store,t.next=5,v.a.all(o(S));case 5:return n=t.sent,r=new b.default(O),i=U.layout||"default",t.next=10,r.loadLayout(i);case 10:if(r.setLayout(i),f=function(){r.$mount("#__nuxt"),b.default.nextTick(function(){c(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(a(n,S.currentRoute)),$=S.currentRoute.matched.map(function(t){return Object(E.b)(t.path)(S.currentRoute.params)}),R=n.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},U.error&&r.error(U.error),S.beforeEach(k.bind(r)),S.beforeEach(T.bind(r)),S.afterEach(s),S.afterEach(u.bind(r)),!U.serverRendered){t.next=24;break}return f(),t.abrupt("return");case 24:T.call(r,S.currentRoute,S.currentRoute,function(t){if(!t)return s(S.currentRoute,S.currentRoute),u.call(r,S.currentRoute,S.currentRoute),void f();var e=!1;S.afterEach(function(){e||(e=!0,f())}),S.push(t)});case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),$=[],R=[],O=void 0,S=void 0,j=void 0,U=window.__NUXT__||{};U.components=window.__COMPONENTS__||null,Object(w.b)().then(B).catch(function(t){console.error("[nuxt] Error while initializing app",t)})}},[78]);
//# sourceMappingURL=nuxt.bundle.0ccb025487abcd4a51de.js.map