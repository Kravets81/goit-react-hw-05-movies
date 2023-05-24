"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[792],{792:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(439),c=t(791),a=t(87),o=t(228),u=t(689),s=t(184);function i(e){var r=e.searchMovies,t=(0,u.TH)();return Array.isArray(r)&&r.length>0?r.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title||e.name})},e.id)})):(0,s.jsx)("li",{children:"No results available"})}function f(e){var r=e.onSearch,t=e.searchQuery,n=e.setSearchQuery,c=e.setSearchParams;return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===t.trim()&&alert("Enter the film title"),r(t),c({query:t.trim()})},children:[(0,s.jsx)("input",{type:"text",name:"searchQuery",value:t,autoComplete:"off",autoFocus:!0,placeholder:"Search movies ...",onChange:function(e){n(e.target.value.toLowerCase())}}),(0,s.jsx)("button",{children:"Search"})]})}var h=function(){var e=(0,a.lr)({query:""}),r=(0,n.Z)(e,2),t=r[0],u=r[1],h=t.get("query"),p=(0,c.useState)(h),l=(0,n.Z)(p,2),v=l[0],w=l[1],x=(0,c.useState)([]),m=(0,n.Z)(x,2),y=m[0],d=m[1];function k(e){(0,o.OQ)(e).then((function(e){d(e.results)})).catch((function(e){console.error(e)}))}return(0,c.useEffect)((function(){v&&k(v)}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{onSearch:k,searchQuery:v,setSearchQuery:w,setSearchParams:u}),(0,s.jsx)("ul",{children:(0,s.jsx)(i,{searchMovies:y})})]})}},228:function(e,r,t){t.d(r,{OQ:function(){return f},TP:function(){return p},rj:function(){return s},tx:function(){return x},zv:function(){return v}});var n=t(861),c=t(757),a=t.n(c),o="https://api.themoviedb.org/3/",u="bfdc0ae9bb4cf69882d567f8453b8335";function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"trending/movie/day?api_key=").concat(u));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return e.next=8,r.json();case 8:return t=e.sent,e.abrupt("return",t);case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"search/movie?api_key=").concat(u,"&query=").concat(r));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"movie/").concat(r,"?api_key=").concat(u));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"movie/").concat(r,"/credits?api_key=").concat(u));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"movie/").concat(r,"/reviews?api_key=").concat(u));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!");case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}},861:function(e,r,t){function n(e,r,t,n,c,a,o){try{var u=e[a](o),s=u.value}catch(i){return void t(i)}u.done?r(s):Promise.resolve(s).then(n,c)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(c,a){var o=e.apply(r,t);function u(e){n(o,c,a,u,s,"next",e)}function s(e){n(o,c,a,u,s,"throw",e)}u(void 0)}))}}t.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=792.fcdb508c.chunk.js.map