"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[201],{8201:function(A,r,t){t.r(r),t.d(r,{default:function(){return h}});var e=t(5861),n=t(9439),a=t(4687),c=t.n(a),u=t(2791),s=t(7689),i=t(5343),o="actors-list_list__q0jJx",p=t(4364),f=t(184),d=function(A){var r=A.cast.map((function(A){var r=A.profile_path,t=A.name,e=A.character,n=A.credit_id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):p,alt:""}),(0,f.jsx)("p",{children:t}),(0,f.jsx)("p",{children:e})]},n)}));return(0,f.jsx)("ul",{className:o,children:r})},l=d;d.defaultProps={cast:[]};var v=t(639),h=function(){var A=(0,u.useState)(),r=(0,n.Z)(A,2),t=r[0],a=r[1],o=(0,u.useState)(null),p=(0,n.Z)(o,2),d=p[0],h=p[1],x=(0,u.useState)(!1),E=(0,n.Z)(x,2),w=E[0],g=E[1],k=(0,s.UO)().movieId;return(0,u.useEffect)((function(){var A=function(){var A=(0,e.Z)(c().mark((function A(){var r,t,e;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,g(!0),A.next=4,(0,v.uV)(k);case 4:r=A.sent,t=r.cast,a(t),A.next=13;break;case 9:A.prev=9,A.t0=A.catch(0),e=A.t0.message,h(e);case 13:return A.prev=13,g(!1),A.finish(13);case 16:case"end":return A.stop()}}),A,null,[[0,9,13,16]])})));return function(){return A.apply(this,arguments)}}();A()}),[k]),(0,f.jsxs)(f.Fragment,{children:[w&&(0,f.jsx)(i.gy,{width:"50",color:"black",wrapperClass:"spinner"}),(0,f.jsx)(l,{cast:t}),0===(null===t||void 0===t?void 0:t.length)&&!w&&(0,f.jsx)("h2",{children:"Sorry, there is no information about the actors"}),d&&(0,f.jsx)("p",{children:d})]})}},639:function(A,r,t){t.d(r,{Hx:function(){return o},Mc:function(){return s},Pv:function(){return i},uV:function(){return p},wr:function(){return u}});var e=t(5861),n=t(4687),a=t.n(n),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a1735b4b403b356dec5f0993d9adcd8f"}}),u=function(){var A=(0,e.Z)(a().mark((function A(){var r,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/trending/movie/day");case 2:return r=A.sent,t=r.data,A.abrupt("return",t);case 5:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),s=function(){var A=(0,e.Z)(a().mark((function A(r){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/movie/".concat(r));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(r){return A.apply(this,arguments)}}(),i=function(){var A=(0,e.Z)(a().mark((function A(r){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(r){return A.apply(this,arguments)}}(),o=function(){var A=(0,e.Z)(a().mark((function A(r){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(r){return A.apply(this,arguments)}}(),p=function(){var A=(0,e.Z)(a().mark((function A(r){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(r){return A.apply(this,arguments)}}()},4364:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAMgAyAMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAABAUGAwECBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/cgAAAAAAAAAAAAAAAAESkL/AI5Iav5yw18vC2Zp0CeAAAAAAAK6biTpzAAABos6N0rrEAAAAAHEoKoAAAAAJOww2tJoAAAAESXFMeAAAAABoM/oS5AAAAA59BhXbiAAAAANVldcTAAAAAI0mMY4AAAAADVZXVk8AAAAAGNj29QAAAAANvk9eAAAAAAcstrqApAAAAOvK2LqUAAAAAACFN8MM98AAAGpy24PoAAAAA+T6VlUaatzfye+AAAAvKMbXrhrM0yDOAAPIOa4ltWfAAAAAAAAAd+Au7PIjdMYOAAAAAAAAAAAAAP/xAA1EAACAQEGBAQEAwkAAAAAAAABAgMEAAURITBREjFBkRNAYXEiM1KhIHKBEBQ0Q1BTgqKx/9oACAEBAAE/AP65JU08ZweVQdsbG8aIfzh2NjedF/d/1NjetH9TdrQ11LMeFZM9jl5OqrIqYDizY8lFqm9JpQVQeGvoc/xU96TxAK4DqN+dqe8aechQSr7HyFVeUMGKr8b7DkLSyvLI0jnEk6N3Xh4g8KZhxjkx660rqkbsxwAGpdk/i0wBOLJkdW86syyGJD8CHudSkqWp5lccuTDcWBBAI5HTqHMcErjmEJGtdzl6OIk5gEdjp138JP8Al1rmkJSaPYg99OtGNJP+Q61zR4RyyfUwHbTmTjhlT6kI7jWusj9yj92/7qVACzzBeQdgO+rQQmGljU8zmf106uUw00sg5gZe5y1rtnknp8XzKtw476dZH4tLMm64j3GetdqcFHHu2J1KuLwamVOgbL2OrEnhxon0qB21L4jInSToy/calDCZaqJegPEfYas0Ec6FJFxFq2lFNNwA4qRiNKGIzSpGDgWOFqakiplwQZnmx5nWvlDxwv0IK6V0Q8c5k6IPude8IfFpZB1X4h+mldcXh0qnq54tcgEEGxGBI2OiihEVR0AGs7ogxdgo3JwtPetPGCI/jb7WJJJJ5k6NPe/JZ1/yW0U8MwxjcNpM6IMWYAbm01600eSYufTIWmvWqkyUhB6WZ3c4sxJ3Jx1FZlIKkg7i0F7VEeAkAcdjaC8aWbLj4W2bL8JIGZtNeVLFlx8Z2XO017zvlGoQdzZ5JJDi7lj6nyUNVPD8uQgbcxaK+WGUsQPqtoa+ll5SAHZsv2S1E83zJCfTp5iKpnh+XIw9Onmv/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwAp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwAp/9k="}}]);
//# sourceMappingURL=201.ceb90af3.chunk.js.map