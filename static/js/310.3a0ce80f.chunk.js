"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{8310:function(A,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(5861),n=e(9439),a=e(4687),s=e.n(a),c=e(2791),i=e(1087),u=e(5343),o=e(7596),p=e(8751),f=e(9126),d="movies-page-form_form__XjwUU",v="movies-page-form_input__NYtxt",E="movies-page-form_searchBtn__vsM7e",m=e(184),I=function(A){var t=A.onSubmit,e=(0,c.useState)(""),r=(0,n.Z)(e,2),a=r[0],s=r[1];return(0,m.jsxs)("form",{onSubmit:function(A){A.preventDefault(),""!==a.trim()&&t(a),s("")},className:d,children:[(0,m.jsx)("input",{className:v,onChange:function(A){var t=A.target;s(t.value)},type:"text",value:a,placeholder:"Type movie"}),(0,m.jsx)("button",{className:E,type:"submit",children:(0,m.jsx)(f.dVI,{size:"16px",color:"#fff"})})]})},B=e(639),g="MoviesPage_moviesWrap__sxRco",l=function(){var A=(0,c.useState)([]),t=(0,n.Z)(A,2),e=t[0],a=t[1],f=(0,c.useState)(!1),d=(0,n.Z)(f,2),v=d[0],E=d[1],l=(0,i.lr)(),j=(0,n.Z)(l,2),k=j[0],w=j[1],x=k.get("query");return(0,c.useEffect)((function(){if(x){var A=function(){var A=(0,r.Z)(s().mark((function A(){var t,e;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,E(!0),A.next=4,(0,B.Pv)(x);case 4:t=A.sent,e=t.results,a(e),A.next=13;break;case 9:A.prev=9,A.t0=A.catch(0),A.t0.message,o.Am.error("Oops, something went wrong. Try reloading the page");case 13:return A.prev=13,E(!1),A.finish(13);case 16:case"end":return A.stop()}}),A,null,[[0,9,13,16]])})));return function(){return A.apply(this,arguments)}}();A()}}),[x]),(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)(I,{onSubmit:function(A){if(A===x)return o.Am.warn("Search for this query has already been completed");w({query:A})}}),v&&(0,m.jsx)(u.gy,{width:"50",color:"#fff",wrapperClass:"spinner"}),(0,m.jsx)(p.Z,{movies:e})]})}},8751:function(A,t,e){e.d(t,{Z:function(){return v}});var r=e(1087),n=e(7689),a=e(5840),s="Movies_moviesWrap__3msCr",c="Movies_link__A7qle",i="Movies_img__-7pxA",u="Movies_text__zkjiS",o="Movies_filmInfoWrap__I3kog",p="Movies_movie__8oebh",f=e(184),d=function(A){var t=A.movies,e=(0,n.TH)();console.log(t);var d=t.map((function(A){var t=A.id,n=A.title,s=A.poster_path,d=A.release_date;return(0,f.jsx)("li",{className:p,children:(0,f.jsxs)(r.rU,{className:c,to:"/movies/".concat(t),state:{from:e},children:[(0,f.jsx)("img",{className:i,src:s?"https://image.tmdb.org/t/p/w300".concat(s):a,alt:"poster"}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("p",{className:u,children:n}),(0,f.jsx)("p",{className:u,children:"Release data: ".concat(d.replaceAll("-","."))})]})]})},t)}));return(0,f.jsx)("ul",{className:s,children:d})},v=d;d.defaultProps={movies:[]}},639:function(A,t,e){e.d(t,{Hx:function(){return o},Mc:function(){return i},Pv:function(){return u},uV:function(){return p},wr:function(){return c}});var r=e(5861),n=e(4687),a=e.n(n),s=e(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a1735b4b403b356dec5f0993d9adcd8f"}}),c=function(){var A=(0,r.Z)(a().mark((function A(){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s.get("/trending/movie/day");case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),i=function(){var A=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s.get("/movie/".concat(t));case 2:return e=A.sent,r=e.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),u=function(){var A=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s.get("/search/movie",{params:{query:t}});case 2:return e=A.sent,r=e.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),o=function(){var A=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return e=A.sent,r=e.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return e=A.sent,r=e.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()},5840:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=310.3a0ce80f.chunk.js.map