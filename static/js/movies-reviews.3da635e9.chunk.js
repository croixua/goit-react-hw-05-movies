"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[280,942],{977:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(152),c=e(791),o=e(871),a=e(936),u=e(184);var i=function(n){var t=n.reviews,e=(0,o.TH)();return console.log(e),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("hr",{}),(0,u.jsx)("ul",{children:t.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,u.jsxs)("li",{children:[(0,u.jsx)("h2",{children:t}),(0,u.jsx)("p",{children:e})]},r)}))})]})},s=e(635);var f=function(){var n=(0,o.UO)().movieId,t=(0,c.useState)(),e=(0,r.Z)(t,2),f=e[0],h=e[1],v=(0,c.useState)(),d=(0,r.Z)(v,2),l=d[0],m=d[1],p=(0,c.useState)(null),j=(0,r.Z)(p,2),x=j[0],k=j[1];return(0,c.useEffect)((function(){h(n)}),[n]),(0,c.useEffect)((function(){f&&s.yY(f).then(m).catch((function(n){var t=n.message;return k(t)}))}),[f]),(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(i,{reviews:l}),x&&(0,u.jsx)(a.default,{message:x})]})}},635:function(n,t,e){e.d(t,{_M:function(){return p},qD:function(){return j},wr:function(){return l},yY:function(){return x},z1:function(){return m}});var r=e(861),c=e(757),o=e.n(c),a="31a0dc93409a2f9cdc2f4d925fcba2bc",u="https://api.themoviedb.org/3",i="/search/movie",s="/movie/";function f(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(o().mark((function n(){var t,e,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}var v=function(n){var t=n.results;return t&&0!==t.length?t:Promise.reject(new Error("No movies requested"))},d=function(n){return!n||!1===n.success||n.cast?Promise.reject(new Error("Not found movie")):n};function l(){return f("".concat(u).concat("/trending/movie/day","?api_key=").concat(a)).then(v)}function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="".concat(u).concat(i,"?api_key=").concat(a,"&query=").concat(n);return n.trim()?f(t).then(v):alert("enter the movie")}function p(n){return f("".concat(u).concat(s).concat(n,"?api_key=").concat(a)).then(d)}function j(n){return f("".concat(u).concat(s).concat(n,"/credits?api_key=").concat(a)).then(d)}function x(n){return f("".concat(u).concat(s).concat(n,"/reviews?api_key=").concat(a)).then(v)}},912:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(184);function c(n){var t=n.message;return(0,r.jsx)("h1",{children:t})}},936:function(n,t,e){e.r(t);var r=e(912);t.default=r.Z}}]);
//# sourceMappingURL=movies-reviews.3da635e9.chunk.js.map