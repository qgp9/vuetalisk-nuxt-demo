webpackJsonp([0],{186:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(195),n=e(199),i=e(21),r=i(s.a,n.a,null,null,null);a.default=r.exports},195:function(t,a,e){"use strict";var s=e(196);a.a={middleware:["layout-default"],components:{Sidebar:s.a}}},196:function(t,a,e){"use strict";var s=e(197),n=e(198),i=e(21),r=i(s.a,n.a,null,null,null);a.a=r.exports},197:function(t,a,e){"use strict";var s=e(76);a.a={name:"Sidebar",computed:{site:s.g,data:s.c,menu:function(){return this.data("/data/menu").sidebar||{}}}}},198:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"container sidebar-sticky"},[e("div",{staticClass:"sidebar-about"},[e("h1",[e("nuxt-link",{attrs:{to:"/"}},[t._v("\n          "+t._s(t.site.title)+"\n        ")])],1),e("p",{staticClass:"lead"},[t._v(" "+t._s(t.site.description)+" ")])]),e("nav",{staticClass:"sidebar-nav"},[t._l(t.menu.order,function(a){return e("nuxt-link",{key:a+t.menu[a],staticClass:"sidebar-nav-item",attrs:{"active-class":"active",to:t.menu.menu[a]||""}},[t._v("\n         "+t._s(a)+"\n      ")])}),e("a",{staticClass:"sidebar-nav-item",attrs:{href:(t.site.github||{}).repo}},[t._v("GitHub")]),e("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),e("span",{staticClass:"sidebar-nav-item"},[t._v("some text")])],2)])])},n=[],i={render:s,staticRenderFns:n};a.a=i},199:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("sidebar"),e("div",{staticClass:"content container"},[e("nuxt")],1)],1)},n=[],i={render:s,staticRenderFns:n};a.a=i}});
//# sourceMappingURL=0.nuxt.bundle.d77962d573cbbc8390df.js.map