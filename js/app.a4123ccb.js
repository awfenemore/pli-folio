(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pli-site/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0726":function(t,e,n){t.exports=n.p+"img/2k21-logo.cdfd70ab.jpg"},2173:function(t,e,n){},"24f0":function(t,e,n){"use strict";n("ab3d")},"2bcf":function(t,e,n){"use strict";n("d622")},"3b56":function(t,e,n){"use strict";n("74b4")},"4a43":function(t,e,n){"use strict";n("ab28")},"4b84":function(t,e,n){"use strict";n("e922")},5855:function(t,e,n){"use strict";n("b9ca")},"74b4":function(t,e,n){},"7a51":function(t,e,n){"use strict";n("2173")},"869d":function(t,e,n){"use strict";n("e169")},ab28:function(t,e,n){},ab3d:function(t,e,n){},b9ca:function(t,e,n){},c9ce:function(t,e,n){"use strict";n("eb93")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header",{attrs:{id:"top"}}),n("div",{staticClass:"top-border"}),n("v-main",{staticClass:"content"},[n("router-view")],1),n("div",{staticClass:"bot-border"}),n("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{color:"#f5eeda","min-height":"80"}},[a("div",{staticClass:"footer-logo"},[a("img",{attrs:{src:n("ea71"),alt:"Pli Logo",height:"60",width:"80"}})]),a("div",{staticClass:"footer-left"}),a("div",{staticClass:"footer-mid"},[a("router-link",{attrs:{to:"/"}},[t._v("Portfolio")]),t._v(" / "),a("router-link",{attrs:{to:"/aboutme"}},[t._v("About Me")]),t._v(" / "),a("router-link",{attrs:{to:"/resume"}},[t._v("Resume")]),t._v(" / "),a("a",{attrs:{href:"mailto:awfenemore@gmail.com"}},[t._v("Contact me")]),t._v(" / "),a("a",{attrs:{href:"#top"}},[t._v("Back to Top")])],1),a("div",{staticClass:"footer-right"},[a("span",[t._v("A Fenemore | "+t._s((new Date).getFullYear()))])])])},i=[],l={name:"Footer"},c=l,u=(n("3b56"),n("2877")),f=n("6544"),p=n.n(f),m=n("553a"),v=Object(u["a"])(c,s,i,!1,null,null,null),d=v.exports;p()(v,{VFooter:m["a"]});var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[t._m(0),t._m(1),n("div",{staticClass:"header-mid"},[n("router-link",{attrs:{to:"/"}},[t._v("Portfolio")]),t._v(" / "),n("router-link",{attrs:{to:"/aboutme"}},[t._v("About Me")]),t._v(" / "),n("router-link",{attrs:{to:"/resume"}},[t._v("Resume")]),t._v(" / "),n("a",{attrs:{href:"mailto:awfenemore@gmail.com"}},[t._v("Contact me")])],1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-logo"},[a("img",{attrs:{src:n("ea71"),alt:"Pli Logo",height:"60",width:"80"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-left"},[n("span",[t._v(" Welcome to Pli. UX Design, Behavioural Science, Improvement ")])])}],b={name:"Header",data:function(){return{}}},g=b,C=(n("c9ce"),Object(u["a"])(g,h,_,!1,null,null,null)),y=C.exports,k=a["a"].extend({name:"App",head:{meta:[{name:"theme-color",content:"#54850A"}]},components:{Footer:d,Header:y},data:function(){return{}},methods:{}}),w=k,x=(n("24f0"),n("7a51"),n("7496")),O=n("f6c4"),j=Object(u["a"])(w,o,r,!1,null,null,null),P=j.exports;p()(j,{VApp:x["a"],VMain:O["a"]});var $=n("8c4f"),E=n("342d"),M=n.n(E),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio"},[t._m(0),a("router-link",{staticClass:"portfolio-link",attrs:{to:"/2k21"}},[a("div",{staticClass:"portfolio-link-container"},[a("img",{staticClass:"portfolio-link-image",attrs:{src:n("0726")}}),a("div",{staticClass:"portfolio-link-text"},[a("h4",[t._v("NBA 2K21 Usability Changes")]),a("div",{staticClass:"tags"},[a("span",{staticClass:"tag navigation"},[t._v("Navigation")]),a("span",{staticClass:"tag redesign"},[t._v("Redesign")]),a("span",{staticClass:"tag qol"},[t._v("Quality of life")])]),a("p",{staticClass:"description"},[t._v(" An unsolicited redesign of a few features, I present a new method of wayfinding in NBA 2K21 and demonstrate a large number of usability and quality of life changes. ")])])])]),a("router-link",{staticClass:"portfolio-link",attrs:{to:"/myprocess"}},[a("div",{staticClass:"portfolio-link-container"},[a("img",{staticClass:"portfolio-link-image whitebg",attrs:{src:n("deaa")}}),a("div",{staticClass:"portfolio-link-text"},[a("h4",[t._v("My Design Process")]),a("div",{staticClass:"tags"},[a("span",{staticClass:"tag process"},[t._v("Process")])]),a("p",{staticClass:"description"},[t._v(" My design process involves a lot of user interaction, ideation and innovation methodologies, and UX focused behavioural reviews at each step. Understanding people is the key to the process. ")])])])])],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statement"},[n("h3",[t._v("My name is Adam Fenemore")]),n("p",[t._v(" I am a UX designer and behaviour specialist. I love to solve problems, improve things, and make the world a better place. Pli is a set of work examples in UX/UI design, behavioural science, innovation and more. ")])])}],S={name:"Portfolio"},U=S,I=(n("2bcf"),Object(u["a"])(U,A,F,!1,null,null,null)),B=I.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me"})},T=[],X={name:"AboutMe"},D=X,H=(n("869d"),Object(u["a"])(D,R,T,!1,null,null,null)),K=H.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resume"})},V=[],q={name:"Resume"},J=q,L=(n("4a43"),Object(u["a"])(J,N,V,!1,null,null,null)),Q=L.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-process"},[n("h1",[t._v(" my process")])])}],z={name:"MyProcess"},G=z,Z=(n("4b84"),Object(u["a"])(G,W,Y,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"2k21"},[n("h1",[t._v(" 2k21")])])}],at={name:"K21"},ot=at,rt=(n("5855"),Object(u["a"])(ot,et,nt,!1,null,null,null)),st=rt.exports;a["a"].use(M.a),a["a"].use($["a"]);var it=[{path:"/",name:"portfolio",component:B},{path:"/aboutme",name:"aboutme",component:K},{path:"/resume",name:"resume",component:Q},{path:"/myprocess",name:"myprocess",component:tt},{path:"/2k21",name:"2k21",component:st}],lt=new $["a"]({mode:"history",base:"/pli-site/",routes:it}),ct=lt,ut=n("2f62");a["a"].use(ut["a"]);var ft=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}}),pt=n("f309");a["a"].use(pt["a"]);var mt=new pt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:ct,store:ft,vuetify:mt,render:function(t){return t(P)}}).$mount("#app")},d622:function(t,e,n){},deaa:function(t,e,n){t.exports=n.p+"img/venn.53c9de34.png"},e169:function(t,e,n){},e922:function(t,e,n){},ea71:function(t,e,n){t.exports=n.p+"img/pli-grey-logo.58f2feb2.svg"},eb93:function(t,e,n){}});
//# sourceMappingURL=app.a4123ccb.js.map