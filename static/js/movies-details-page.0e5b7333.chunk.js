"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[454],{587:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(152),c=t(871),o=t(791),i=t(635),a=t(504),s=t(184);var u=function(e){var n,t=e.movieDetails,r=e.fromPage,c=(null===r||void 0===r||null===(n=r.state)||void 0===n?void 0:n.from)||"/",o=t.poster_path,i=t.original_title,u=t.overview,l=t.genres,f=t.vote_average;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(o),alt:i})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:i}),(0,s.jsxs)("p",{children:["User Score: ","".concat(f)]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:u}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("ul",{children:l.map((function(e){var n=e.name,t=e.id;return(0,s.jsx)("li",{children:n},t)}))}),(0,s.jsx)("hr",{}),(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"cast",state:{from:c},children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"reviews",state:{from:c},children:"Reviews"})})]})]})]})},l=t(912);var f=function(){var e,n=(0,c.TH)(),t=(0,c.UO)().movieId,a=(0,c.s0)(),f=(0,o.useState)(),h=(0,r.Z)(f,2),d=h[0],v=h[1],m=(0,o.useState)(),p=(0,r.Z)(m,2),j=p[0],x=p[1],g=(0,o.useState)(null),w=(0,r.Z)(g,2),k=w[0],_=w[1],y=(null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.from)||"/";return(0,o.useEffect)((function(){v(t)}),[t]),(0,o.useEffect)((function(){d&&i._M(d).then(x).catch((function(e){var n=e.message;return _(n)}))}),[d]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:"button",onClick:function(){a(y)},children:"Go back"}),j&&(0,s.jsx)(u,{movieDetails:j,fromPage:n}),k&&(0,s.jsx)(l.Z,{message:k}),(0,s.jsx)(c.j3,{})]})}},635:function(e,n,t){t.d(n,{_M:function(){return p},qD:function(){return j},wr:function(){return v},yY:function(){return x},z1:function(){return m}});var r=t(861),c=t(757),o=t.n(c),i="31a0dc93409a2f9cdc2f4d925fcba2bc",a="https://api.themoviedb.org/3",s="/search/movie",u="/movie/";function l(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(o().mark((function e(){var n,t,r,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var h=function(e){var n=e.results;return n&&0!==n.length?n:Promise.reject(new Error("No movies requested"))},d=function(e){return!e||!1===e.success||e.cast?Promise.reject(new Error("Not found movie")):e};function v(){return l("".concat(a).concat("/trending/movie/day","?api_key=").concat(i)).then(h)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="".concat(a).concat(s,"?api_key=").concat(i,"&query=").concat(e);return e.trim()?l(n).then(h):alert("enter the movie")}function p(e){return l("".concat(a).concat(u).concat(e,"?api_key=").concat(i)).then(d)}function j(e){return l("".concat(a).concat(u).concat(e,"/credits?api_key=").concat(i)).then(d)}function x(e){return l("".concat(a).concat(u).concat(e,"/reviews?api_key=").concat(i)).then(h)}},912:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(184);function c(e){var n=e.message;return(0,r.jsx)("h1",{children:n})}}}]);
//# sourceMappingURL=movies-details-page.0e5b7333.chunk.js.map