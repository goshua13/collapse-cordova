(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,n,t){e.exports=t(75)},73:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),s=t.n(c),o=t(2),u=t(14),i=t(34),l=t(15),m=Object(u.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_USERS":return n.payload;default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"PARAMS_ACTION":return n.payload;default:return e}}}),d=t(3),p=Object(d.a)(),h=t(5),f=t(6),b=t(8),v=t(7),y=t(9),E=t(24),O=t.n(E),j=t(35),w=t(36),g=t.n(w).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),k=t(12),I=function(e){function n(){return Object(h.a)(this,n),Object(b.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map(function(e){return r.a.createElement(k.a,{to:"/".concat(e.id),key:e.id},r.a.createElement("li",null,e.name))})}},{key:"renderStyles",value:function(){var e,n=this.props.params;return n&&(e="col-12 col-md-12"),n.submenuId&&(e="col-2"),n.contentId&&(e="col-2 col-md-2"),e}},{key:"render",value:function(){return r.a.createElement(k.a,{to:"/",className:"".concat(this.renderStyles()," menu")},r.a.createElement("h1",{className:"main-menu"},"Main Menu"),r.a.createElement("ul",{className:"list-unstyled"},this.renderUsers()))}}]),n}(a.Component),S=Object(o.b)(function(e){return{users:e.users,params:e.params}},{fetchUsers:function(){return function(){var e=Object(j.a)(O.a.mark(function e(n){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/users");case 2:t=e.sent,n({type:"FETCH_USERS",payload:t.data});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}})(I),C=function(e){function n(){return Object(h.a)(this,n),Object(b.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(f.a)(n,[{key:"renderStyles",value:function(){var e,n=this.props.params;return n.submenuId&&(e="col-10"),n.contentId&&(e="col-2"),e}},{key:"renderUser",value:function(e){var n=this.props,t=n.users,a=n.params,c=t[a.submenuId];if(c)return r.a.createElement("ul",{className:"list-unstyled align-content-center"},r.a.createElement(k.a,{to:"/".concat(a.submenuId,"/address")},r.a.createElement("li",null,c.address.city)),r.a.createElement("hr",null),r.a.createElement(k.a,{to:"/".concat(a.submenuId,"/company")},r.a.createElement("li",null,c.company.name)))}},{key:"render",value:function(){var e=this.props.params;return r.a.createElement(k.a,{to:"/".concat(e.submenuId),className:"".concat(this.renderStyles()," submenu")},r.a.createElement("h1",{className:"submenu-menu"},"SubMenu"),this.renderUser())}}]),n}(a.Component);var N=Object(o.b)(function(e){return{users:e.users,params:e.params}},null)(C),A=function(e){function n(){return Object(h.a)(this,n),Object(b.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(f.a)(n,[{key:"renderAddress",value:function(){var e=this.props,n=e.params,t=e.users[n.submenuId];if(t)return r.a.createElement("div",null,r.a.createElement("h1",null,t.address.city),r.a.createElement("h3",null,t.address.street),r.a.createElement("hr",null),r.a.createElement("h4",null,t.address.zipcode),r.a.createElement("h3",null,t.address.suite))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"menus"},"Address"),this.renderAddress())}}]),n}(a.Component);var U=Object(o.b)(function(e){return{users:e.users,params:e.params}},null)(A),_=function(e){function n(){return Object(h.a)(this,n),Object(b.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(f.a)(n,[{key:"renderCompany",value:function(){var e=this.props,n=e.users[e.params.submenuId];if(n)return r.a.createElement("div",null,r.a.createElement("h1",null,n.company.name),r.a.createElement("h5",null,n.company.catchPhrase),r.a.createElement("hr",null),r.a.createElement("h4",null,n.company.bs))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"menus"},"Company"),this.renderCompany(),r.a.createElement("h1",{className:"bruh"},"orer otances occur in which toil and pain can procure him some great pleasuuences, or one w"))}}]),n}(a.Component);var T=Object(o.b)(function(e){return{users:e.users,params:e.params}},null)(_),R=function(e){function n(){return Object(h.a)(this,n),Object(b.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(f.a)(n,[{key:"renderStyles",value:function(){var e;return this.props.params.contentId&&(e="d-grid col-8"),e}},{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(this.renderStyles()," content")},r.a.createElement(l.a,{path:"/:submenuId/address",component:U}),r.a.createElement(l.a,{path:"/:submenuId/company",component:T}))}}]),n}(a.Component),M=Object(o.b)(function(e){return{users:e.users,params:e.params}},null)(R),W=function(e){function n(){return Object(h.a)(this,n),Object(b.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(f.a)(n,[{key:"renderTiers",value:function(){var e="tier-one",n=this.props.params;return n.submenuId&&(e="tier-two"),n.contentId&&(e="tier-three"),console.log(e),e}},{key:"render",value:function(){return this.props.paramsAction(this.props.match.params),r.a.createElement("div",{className:"row text-center ".concat(this.renderTiers())},r.a.createElement(l.b,{history:p},r.a.createElement(l.a,{path:"/",component:S}),r.a.createElement(l.a,{path:"/:submenuId",component:N}),r.a.createElement(l.a,{path:"/:submenuId/:contentId",component:M})))}}]),n}(a.Component),P=Object(o.b)(function(e){return{params:e.params}},{paramsAction:function(e){return{type:"PARAMS_ACTION",payload:e}}})(W),x=(t(73),t(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");x?(!function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):D(n,e)})}}function D(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var F=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d)(Object(u.a)(i.a))(u.e),H=function(){s.a.render(r.a.createElement(o.a,{store:F(m)},r.a.createElement(l.b,{history:p},r.a.createElement("div",null,r.a.createElement(l.a,{path:["/:submenuId/:contentId","/:submenuId","/"],component:P})))),document.querySelector("#root")),L()};window.cordova?document.addEventListener("deviceready",H,!1):H()}},[[38,1,2]]]);
//# sourceMappingURL=main.8614fcd8.chunk.js.map