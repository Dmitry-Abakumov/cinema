"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(r,e,t){t.r(e);var n=t(5861),a=t(9439),u=t(4687),c=t.n(u),s=t(2791),i=t(5343),o=t(2435),p=t(639),f=t(184);e.default=function(){var r=(0,s.useState)([]),e=(0,a.Z)(r,2),t=e[0],u=e[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),h=d[0],l=d[1],m=(0,s.useState)(null),w=(0,a.Z)(m,2),x=w[0],k=w[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,l(!0),r.next=4,(0,p.wr)();case 4:e=r.sent,u(e.results),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),t=r.t0.message,k(t);case 12:return r.prev=12,l(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,8,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending today"}),h&&(0,f.jsx)(i.gy,{width:"50",color:"black",wrapperClass:"spinner"}),(0,f.jsx)(o.Z,{movies:t}),x&&(0,f.jsx)("p",{children:x})]})}},2435:function(r,e,t){var n=t(7689),a=t(1087),u=t(184),c=function(r){var e=r.movies,t=(0,n.TH)(),c=e.map((function(r){var e=r.id,n=r.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e),state:{from:t},children:n})},e)}));return(0,u.jsx)("div",{className:"wrapper",children:(0,u.jsx)("ul",{children:c})})};e.Z=c,c.defaultProps={movies:[]}},639:function(r,e,t){t.d(e,{Hx:function(){return p},Mc:function(){return i},Pv:function(){return o},uV:function(){return f},wr:function(){return s}});var n=t(5861),a=t(4687),u=t.n(a),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a1735b4b403b356dec5f0993d9adcd8f"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/day");case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie",{params:{query:e}});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.61c58f35.chunk.js.map