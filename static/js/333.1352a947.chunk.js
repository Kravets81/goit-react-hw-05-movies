"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[333],{333:function(n,r,e){e.r(r),e.d(r,{default:function(){return P}});var t=e(861),c=e(439),a=e(757),o=e.n(a),s=e(791),u=e(228);var i,p,f=function(){var n=(0,s.useState)([]),r=(0,c.Z)(n,2),e=r[0],a=r[1],i=(0,s.useState)(!0),p=(0,c.Z)(i,2),f=p[0],l=p[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,t.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.rj)();case 3:r=n.sent,a(r.results),l(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0),l(!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),{trendingMovies:e,loading:f}},l=e(689),h=e(168),v=e(444),d=e(87),x=v.ZP.li(i||(i=(0,h.Z)(["\n  margin-bottom: 3px;\n  background-color: lightgrey;\n  border-radius: 5px;\n  padding: 7px;\n"]))),w=(0,v.ZP)(d.OL)(p||(p=(0,h.Z)(["\n  text-decoration: none;\n  font-size: 17px;\n  color: black;\n\n  }\n"]))),k=e(184);function b(n){var r=n.trendingMovies,e=(0,l.TH)();return r.map((function(n){return(0,k.jsx)(x,{children:(0,k.jsx)(w,{to:"/movies/".concat(n.id),state:{from:e},children:n.title||n.name})},n.id)}))}var m,g,y,Z=e(243),j=v.ZP.div(m||(m=(0,h.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),_=v.ZP.h2(g||(g=(0,h.Z)(["\n  text-align: center;\n  padding: 0px;\n"]))),E=v.ZP.ul(y||(y=(0,h.Z)(["\n  list-style: none;\n"]))),P=function(){var n=f(),r=n.trendingMovies,e=n.loading;return(0,k.jsxs)(j,{children:[(0,k.jsx)(_,{children:"Trending today"}),e?(0,k.jsx)(Z.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0}):(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(E,{children:(0,k.jsx)(b,{trendingMovies:r})})})]})}},228:function(n,r,e){e.d(r,{OQ:function(){return p},TP:function(){return l},rj:function(){return u},tx:function(){return x},zv:function(){return v}});var t=e(861),c=e(757),a=e.n(c),o="https://api.themoviedb.org/3/",s="bfdc0ae9bb4cf69882d567f8453b8335";function u(){return i.apply(this,arguments)}function i(){return(i=(0,t.Z)(a().mark((function n(){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"trending/movie/day?api_key=").concat(s));case 3:if((r=n.sent).ok){n.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return n.next=8,r.json();case 8:return e=n.sent,n.abrupt("return",e);case 12:throw n.prev=12,n.t0=n.catch(0),console.error(n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(r));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return n.next=8,e.json();case 8:return t=n.sent,n.abrupt("return",t);case 12:throw n.prev=12,n.t0=n.catch(0),console.error(n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(r,"?api_key=").concat(s));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return n.next=8,e.json();case 8:return t=n.sent,n.abrupt("return",t);case 12:throw n.prev=12,n.t0=n.catch(0),console.error(n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function v(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(r,"/credits?api_key=").concat(s));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return n.next=8,e.json();case 8:return t=n.sent,n.abrupt("return",t);case 12:throw n.prev=12,n.t0=n.catch(0),console.error(n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(r,"/reviews?api_key=").concat(s));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return n.next=8,e.json();case 8:return t=n.sent,n.abrupt("return",t);case 12:throw n.prev=12,n.t0=n.catch(0),console.error(n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=333.1352a947.chunk.js.map