(function(t){function e(e){for(var a,r,c=e[0],o=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-1fb367b0":"e2ffb1f0","chunk-51e86190":"810015ef","chunk-b8bc66f2":"30a7e7ec","chunk-c0af3ec0":"72ed3650","chunk-d8e43c4a":"9bd963aa"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-1fb367b0":1,"chunk-51e86190":1,"chunk-b8bc66f2":1,"chunk-c0af3ec0":1,"chunk-d8e43c4a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1fb367b0":"49fccd42","chunk-51e86190":"1f78d3a1","chunk-b8bc66f2":"d29d0c54","chunk-c0af3ec0":"89c25ea1","chunk-d8e43c4a":"ae75214b"}[t]+".css",i=o.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-ts/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0d20":function(t,e,n){},1648:function(t,e,n){"use strict";var a=n("2b01"),r=n.n(a);r.a},"1fb5":function(t,e,n){"use strict";var a=n("48ad"),r=n.n(a);r.a},"2b01":function(t,e,n){},"48ad":function(t,e,n){},"5ab5":function(t,e,n){"use strict";var a=n("0d20"),r=n.n(a);r.a},7784:function(t,e,n){},"81bc":function(t,e,n){"use strict";var a=n("b8e7"),r=n.n(a);r.a},8855:function(t,e,n){"use strict";var a=n("8e59"),r=n.n(a);r.a},"8be6":function(t,e,n){},"8e59":function(t,e,n){},"92eb":function(t,e,n){},"9ef1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("ul",{staticClass:"flex-box tc"},[n("li",[n("router-link",{attrs:{to:"/cart"}},[t._v("购物车")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),n("li",[n("router-link",{attrs:{to:"/center"}},[t._v("个人中心")])],1)])])},r=[],i=n("5768"),s=n("2a79"),c=n("b8da"),o=n("4e01"),u=n("3a61"),l=n("b2e6"),f=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(l["c"]);f=u["a"]([l["a"]],f);var d=f,h=d,p=(n("1fb5"),n("17cc")),m=Object(p["a"])(h,a,r,!1,null,"41c3d15d",null);e["a"]=m.exports},b8e7:function(t,e,n){},ba75:function(t,e,n){"use strict";var a=n("8be6"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("5c07"),n("53da"),n("2556"),n("d0f8");var a=n("2418"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Loading",{attrs:{loading:t.$store.state.pageLoad}})],1)},i=[],s=n("5768"),c=n("7099"),o=n("2a79"),u=n("b8da"),l=n("4e01"),f=n("3a61"),d=n("b2e6"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading landing-bubbles"},[a("img",{staticClass:"ld ld-bounce",attrs:{src:n("df60"),alt:""}})])},p=[],m=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);f["a"]([Object(d["b"])()],m.prototype,"loading",void 0),m=f["a"]([d["a"]],m);var b=m,v=b,g=(n("81bc"),n("17cc")),y=Object(g["a"])(v,h,p,!1,null,"7f3ac055",null),j=y.exports,O=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"beforeMount",value:function(){this.$store.dispatch("initUserInfo")}}]),e}(d["c"]);O=f["a"]([Object(d["a"])({components:{Loading:j}})],O);var C=O,k=C,_=Object(g["a"])(k,r,i,!1,null,null,null),w=_.exports,L=n("081a"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("Header"),n("Content"),n("Footer")],1)},P=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("ul",{staticClass:"clearfix"},[n("li",{staticClass:"tc pull-left header-left"},[n("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:""},on:{click:t.toUser}})]),n("li",{staticClass:"pull-left header-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"search-input",attrs:{type:"text",placeholder:"商品搜索"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}})]),n("li",{staticClass:"pull-left header-right"},[n("span",{staticClass:"searct-btn tc",on:{click:t.toSearch}},[t._v("搜索")])])])])},$=[],E=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.key="",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.key=this.$store.state.searchKeywords}},{key:"toUser",value:function(){this.$router.push({name:"center"})}},{key:"toSearch",value:function(){if(""===this.key.trim())return!1;this.$router.push({path:"search",query:{keywords:this.key}})}},{key:"avatar",get:function(){return this.$store.state.userInfo.avatar}}]),e}(d["c"]);E=f["a"]([d["a"]],E);var T,B=E,H=B,I=(n("5ab5"),Object(g["a"])(H,S,$,!1,null,"2f85f47b",null)),q=I.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("Banner"),n("Cate"),n("List")],1)},U=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"wrap-swiper"},[t.banner.length>0?n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.banner,function(t,e){return n("swiper-slide",{key:e},[n("img",{attrs:{src:t.img,alt:t.url}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)])},K=[],M=(n("9849"),n("6fe8")),N=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.swiperOption={loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"},on:{tap:function(){var t=this.realIndex;T.$router.push(T.banner[t].url)}}},t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){T=this}},{key:"banner",get:function(){return this.$store.state.homeBanner}}]),e}(d["c"]);N=f["a"]([Object(d["a"])({components:{swiper:M["swiper"],swiperSlide:M["swiperSlide"]}})],N);var F=N,R=F,G=(n("8855"),Object(g["a"])(R,A,K,!1,null,"1bc3c094",null)),J=G.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[t._m(0),n("div",{staticClass:"cate clearfix"},t._l(t.cate,function(e,a){return n("div",{key:a,staticClass:"cate-item pull-left tc",on:{click:function(n){return t.toCate(e.id)}}},[n("img",{attrs:{src:e.img,alt:e.title}}),n("p",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),n("p",{staticClass:"title"},[t._v(t._s(e.title))])])}),0)])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cate-head"},[n("span",[t._v("热销分类")])])}],z=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"toCate",value:function(t){this.$router.push({path:"cate",query:{cid:t}})}},{key:"cate",get:function(){return this.$store.state.homeCate}}]),e}(d["c"]);z=f["a"]([d["a"]],z);var Q=z,V=Q,Y=(n("ba75"),Object(g["a"])(V,W,X,!1,null,"fa7df618",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[t._m(0),n("div",{staticClass:"list clearfix"},t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"list-item pull-left tc",on:{click:function(n){return t.toProduct(e.id)}}},[n("img",{attrs:{src:e.img,alt:e.title}}),n("p",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),n("p",{staticClass:"title"},[t._v(t._s(e.title))])])}),0)])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-head"},[n("span",[t._v("商品推荐")])])}],nt=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"toProduct",value:function(t){this.$router.push({path:"goods",query:{gid:t}})}},{key:"list",get:function(){return this.$store.state.homeList}}]),e}(d["c"]);nt=f["a"]([d["a"]],nt);var at=nt,rt=at,it=(n("dff6"),Object(g["a"])(rt,tt,et,!1,null,"dd42a14c",null)),st=it.exports,ct=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);ct=f["a"]([Object(d["a"])({components:{Banner:J,Cate:Z,List:st}})],ct);var ot=ct,ut=ot,lt=(n("1648"),Object(g["a"])(ut,D,U,!1,null,"4c4852f6",null)),ft=lt.exports,dt=n("9ef1"),ht=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.$store.dispatch("initHomePage")}}]),e}(d["c"]);ht=f["a"]([Object(d["a"])({components:{Header:q,Content:ft,Footer:dt["a"]}})],ht);var pt=ht,mt=pt,bt=Object(g["a"])(mt,x,P,!1,null,null,null),vt=bt.exports;a["default"].use(L["a"]);var gt=new L["a"]({mode:"history",base:"/vue-ts/",routes:[{path:"/",name:"home",component:vt},{path:"/goods",name:"goods",component:function(){return n.e("chunk-51e86190").then(n.bind(null,"8629"))}},{path:"/cart",name:"cart",component:function(){return n.e("chunk-d8e43c4a").then(n.bind(null,"b789"))}},{path:"/center",name:"center",component:function(){return n.e("chunk-b8bc66f2").then(n.bind(null,"73d2"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-c0af3ec0").then(n.bind(null,"2d3b"))}},{path:"/cate",name:"cate",component:function(){return n.e("chunk-1fb367b0").then(n.bind(null,"1ef0"))}}]}),yt=(n("aaa4"),n("bdf4")),jt=n.n(yt),Ot=n("52c1"),Ct=n("7f43"),kt=n.n(Ct),_t=n("d4d8"),wt=n.n(_t),Lt=n("0427"),xt=n.n(Lt);kt.a.defaults.headers.post.Accept="application/json, text/javascript, */*; q=0.01",kt.a.defaults.headers.post["X-Requested-With"]="xmlhttprequest",kt.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8",kt.a.interceptors.request.use(function(t){return t.data=xt.a.stringify(t.data,{arrayFormat:"brackets"}),t}),a["default"].use(wt.a,kt.a);var Pt=kt.a,St={name:"",id:0,avatar:"",integral:0,level:0},$t={id:"",img:"",banner:[],info:{price:"",title:"",detail:"",sale:""},params:[],comments:[],imgs:[]},Et={manageState:!1,amount:0,list:[]},Tt={order:{s0:0,s1:0,s2:0,s3:0}},Bt="/vue-ts/static/api/",Ht={banner:Bt+"banner.json",cart:Bt+"cart.json",cate:Bt+"cate.json",catePage:Bt+"catePage.json",centerOrder:Bt+"centerOrder.json",goodsDetail:Bt+"goodsDetail.json",goodsList:Bt+"goodsList.json",order:Bt+"order.json",search:Bt+"search.json",updateCart:Bt+"updateCart.json",user:Bt+"user.json"};a["default"].use(Ot["a"]);var It=new Ot["a"].Store({state:{homeList:[],homeBanner:[],homeCate:[],searchList:[],searchKeywords:"",cateList:[],cateTitle:"",pageLoad:!0,goodsDetail:$t,userInfo:St,cart:Et,center:Tt},mutations:{setSearchKeywords:function(t,e){t.searchKeywords=e},setCateTitle:function(t,e){t.cateTitle=e},setPageLoad:function(t,e){setTimeout(function(){t.pageLoad=e},1e3)},setHomeList:function(t,e){t.homeList=e},setHomeBanner:function(t,e){t.homeBanner=e},setCartList:function(t,e){t.cart.list=e},setCartAmount:function(t,e){t.cart.amount=e},setCartManageState:function(t,e){t.cart.manageState=e},setHomeCate:function(t,e){t.homeCate=e},setSearchList:function(t,e){t.searchList=e},setCateList:function(t,e){t.cateList=e},setGoodsDetail:function(t,e){t.goodsDetail=e},setCenterOrder:function(t,e){t.center.order=e},setUser:function(t,e){t.userInfo=e}},actions:{initHomePage:function(t){0===t.state.homeList.length&&Pt.get(Ht.goodsList,{}).then(function(e){t.commit("setHomeList",e.data)}),0===t.state.homeCate.length&&Pt.get(Ht.cate,{}).then(function(e){t.commit("setHomeCate",e.data)}),0===t.state.homeBanner.length&&Pt.get(Ht.banner,{}).then(function(e){t.commit("setHomeBanner",e.data)}),t.commit("setPageLoad",!1)},initCartPage:function(t,e){(0===t.state.cart.list.length||e)&&Pt.get(Ht.cart,{}).then(function(e){var n=e.data,a=!0,r=!1,i=void 0;try{for(var s,c=jt()(n);!(a=(s=c.next()).done);a=!0){var o=s.value;o.add=!1}}catch(u){r=!0,i=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}t.commit("setCartList",n)}),t.commit("setPageLoad",!1)},updateCartPage:function(t,e){var n=e.update,a=e.list;Pt.post(Ht.updateCart,{update:n}).then(function(e){var n=e.data;n.status&&a?t.commit("setCartList",a):n.status||t.dispatch("initCartPage",!0)})},initSearchPage:function(t,e){e!==t.state.searchKeywords&&(Pt.get(Ht.search,{params:{keywords:e}}).then(function(e){t.commit("setSearchList",e.data)}),t.commit("setSearchKeywords",e)),t.commit("setPageLoad",!1)},initCatePage:function(t,e){Pt.get(Ht.catePage,{params:{cid:e}}).then(function(e){t.commit("setCateList",e.data.data),t.commit("setCateTitle",e.data.title)}),t.commit("setPageLoad",!1)},initGoodsDetail:function(t,e){Pt.get(Ht.goodsDetail,{params:{gid:e}}).then(function(e){t.commit("setGoodsDetail",e.data)}),t.commit("setPageLoad",!1)},initCenterPage:function(t){Pt.get(Ht.centerOrder,{}).then(function(e){t.commit("setCenterOrder",e.data)}),t.commit("setPageLoad",!1)},initUserInfo:function(t){if(0!==t.state.userInfo.id)return!1;Pt.get(Ht.user,{}).then(function(e){t.commit("setUser",e.data)})}}}),qt=(n("7784"),{getSession:function(t){return sessionStorage.getItem(t)},setSession:function(t,e){return sessionStorage.setItem(t,e)},getLocation:function(t){return localStorage.getItem(t)},setLocation:function(t,e){return localStorage.setItem(t,e)}});a["default"].prototype.$storage=qt,a["default"].config.productionTip=!1,d["a"].registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]),new a["default"]({router:gt,store:It,render:function(t){return t(w)}}).$mount("#app")},df60:function(t,e,n){t.exports=n.p+"img/fruits-lemon.5ee4b65e.svg"},dff6:function(t,e,n){"use strict";var a=n("92eb"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ac0fb72c.js.map