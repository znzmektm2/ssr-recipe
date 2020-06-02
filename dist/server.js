!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=16)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(13)},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r){e.exports={}},function(e,r){e.exports={}},function(e,r,t){"use strict";t.r(r);var n=t(2),a=t.n(n);function u(e,r,t,n,a,u,c){try{var o=e[u](c),s=o.value}catch(e){return void t(e)}o.done?r(s):Promise.resolve(s).then(n,a)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var c=e.apply(r,t);function o(e){u(c,n,a,o,s,"next",e)}function s(e){u(c,n,a,o,s,"throw",e)}o(void 0)}))}}var o=t(0),s=t.n(o),i=t(7),l=t.n(i),p=t(8),f=t.n(p),d=t(1),m=function(){return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/red"},"Red")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/blue"},"Blue")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/users"},"Users")))},E=(t(14),function(){return s.a.createElement("div",{className:"Red"},"Red")}),v=function(){return s.a.createElement(E,null)},b=(t(15),function(){return s.a.createElement("div",{className:"Blue"},"Blue")}),h=function(){return s.a.createElement(b,null)},y=function(e){var r=e.users;return r?s.a.createElement("div",null,s.a.createElement("ul",null,r.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.name))})))):null},x=t(3);function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){S(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=t(9),_=t.n(j),R=t(4),w=a.a.mark(G),P=a.a.mark(C),k="users/GET_USER",U=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},T=function(e){return{type:k,payload:e}},q=function(e){return _.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function G(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(R.call)(q,e.payload);case 3:return r=t.sent,t.next=6,Object(R.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(R.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),w,null,[[0,8]])}function C(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.takeEvery)(k,G);case 2:case"end":return e.stop()}}),P)}var D={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return O({},e,{loading:O({},e.loading,{users:!0}),error:O({},e.error,{users:null})});case"users/GET_USERS_SUCCESS":return O({},e,{loading:O({},e.loading,{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return O({},e,{loading:O({},e.loading,{users:!1}),error:O({},e.error,{users:r.payload})});case k:return O({},e,{loading:O({},e.loading,{user:!0}),error:O({},e.error,{user:null})});case"users/GET_USER_SUCCESS":return O({},e,{loading:O({},e.loading,{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return O({},e,{loading:O({},e.loading,{user:!1}),error:O({},e.error,{user:r.payload})});default:return e}},N=Object(o.createContext)(null),A=N,F=function(e){var r=e.resolve,t=Object(o.useContext)(N);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},I=s.a.useEffect,M=Object(x.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=c(a.a.mark((function e(r){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,_.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(U(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return I((function(){r||t()}),[t,r]),s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{users:r}),s.a.createElement(F,{resolve:t}))})),B=function(e){var r=e.user,t=r.email,n=r.name,a=r.username;return s.a.createElement("div",null,s.a.createElement("h1",null,a," (",n,")"),s.a.createElement("p",null,s.a.createElement("b",null,"e-mail:")," ",t))},J=function(e){var r=e.id,t=Object(x.useSelector)((function(e){return e.users.user})),n=Object(x.useDispatch)();return Object(o.useEffect)((function(){t&&t.id===parseInt(r,10)||n(T(r))}),[n,r,t]),t?s.a.createElement(B,{user:t}):s.a.createElement(F,{resolve:function(){return n(T(r))}})},Y=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),s.a.createElement(d.Route,{path:"/users/:id",render:function(e){var r=e.match;return s.a.createElement(J,{id:r.params.id})}}))},$=function(){return s.a.createElement("div",null,s.a.createElement(m,null),s.a.createElement("hr",null),s.a.createElement(d.Route,{path:"/red",component:v}),s.a.createElement(d.Route,{path:"/blue",component:h}),s.a.createElement(d.Route,{path:"/users",component:Y}))},z=t(10),H=t.n(z),K=t(11),Q=t.n(K),V=t(5),W=t(12),X=t.n(W),Z=t(6),ee=t.n(Z),re=a.a.mark(te);function te(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.all)([C()]);case 2:case"end":return e.stop()}}),re)}var ne=Object(V.combineReducers)({users:L}),ae=JSON.parse(Q.a.readFileSync(H.a.resolve("./build/asset-manifest.json"),"utf8")),ue=Object.keys(ae.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(ae.files[e],'"><\/script>')})).join("");function ce(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat(ae.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,"\n      </div>\n      ").concat(r,'\n      <script src="').concat(ae.files["runtime-main.js"],'"><\/script>\n      ').concat(ue,'\n      <script src="').concat(ae.files["main.js"],'"><\/script>\n    </body>\n    </html>\n      ')}var oe=f()(),se=function(){var e=c(a.a.mark((function e(r,t,n){var u,c,o,i,p,f,m,E,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={},c=ee()(),o=Object(V.createStore)(ne,Object(V.applyMiddleware)(X.a,c)),i=c.run(te).toPromise(),p={done:!1,promises:[]},f=s.a.createElement(A.Provider,{value:p},s.a.createElement(x.Provider,{store:o},s.a.createElement(d.StaticRouter,{location:r.url,context:u},s.a.createElement($,null)))),l.a.renderToStaticMarkup(f),o.dispatch(Z.END),e.prev=8,e.next=11,i;case 11:return e.next=13,Promise.all(p.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",t.status(500));case 18:p.done=!0,m=l.a.renderToString(f),E=JSON.stringify(o.getState()).replace(/</g,"\\u003c"),v="<script>__PRELOADED_STATE__ = ".concat(E,"<\/script>"),t.send(ce(m,v));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(r,t,n){return e.apply(this,arguments)}}(),ie=f.a.static(H.a.resolve("./build"),{index:!1});oe.use(ie),oe.use(se),oe.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);