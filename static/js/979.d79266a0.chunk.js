"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[979],{243:function(n,e,t){t.d(e,{Ll:function(){return d}});var a,i,r=t(791),o={"aria-busy":!0,role:"status"},s=function(n){return{display:n?"flex":"none"}},c=function(){return c=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},c.apply(this,arguments)},d=function(n){var e=n.height,t=void 0===e?80:e,a=n.width,i=void 0===a?80:a,d=n.color,h=void 0===d?"#4fa94d":d,l=n.ariaLabel,u=void 0===l?"bars-loading":l,p=n.wrapperStyle,f=n.wrapperClass,y=n.visible,m=void 0===y||y;return r.createElement("div",c({style:c(c({},s(m)),p),className:f,"data-testid":"bars-loading","aria-label":u},o),r.createElement("svg",{width:i,height:t,fill:h,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg","data-testid":"bars-svg"},r.createElement("rect",{y:"10",width:"15",height:"120",rx:"6"},r.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},r.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("rect",{x:"60",width:"15",height:"140",rx:"6"},r.createElement("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},r.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},r.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"}))))},h=t(444),l=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},u=242.776657104492,p=(0,h.F4)(a||(a=l(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*u,u,.11*u,.35*u,u,.35*u,.01*u,u,.99*u),f=(h.ZP.path(i||(i=l(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*u,u,p,1.6),function(n,e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof t[n])return t[n];if(n&&n.indexOf(".")>0){for(var a=n.split("."),i=a.length,r=t[a[0]],o=1;null!=r&&o<i;)r=r[a[o]],o+=1;if("undefined"!==typeof r)return r}return e}});var y,m,k,v=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},b=(0,h.F4)(y||(y=v(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));h.ZP.svg(m||(m=v(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),b,f("speed","0.75")),h.ZP.polyline(k||(k=v(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(n){return n.width}));var g,x,w,E=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},P=(0,h.F4)(g||(g=E(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));h.ZP.polygon(x||(x=E(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),P),h.ZP.svg(w||(w=E(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])))},861:function(n,e,t){function a(n,e,t,a,i,r,o){try{var s=n[r](o),c=s.value}catch(d){return void t(d)}s.done?e(c):Promise.resolve(c).then(a,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var o=n.apply(e,t);function s(n){a(o,i,r,s,c,"next",n)}function c(n){a(o,i,r,s,c,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=979.d79266a0.chunk.js.map