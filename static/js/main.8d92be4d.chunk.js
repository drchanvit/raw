(this.webpackJsonpblank=this.webpackJsonpblank||[]).push([[0],{100:function(e,t,a){e.exports=a(129)},105:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(77),i=a(78),r=a(90),o=a(89),l=a(0),c=a.n(l),s=a(7),u=a.n(s),d=(a(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=a(182),h=a(18),b=a(40),f=a(15),E=a(176),g=a(177),O=a(174),v=a(53),C=a(185),y=a(175),j=a(173),w=a(186),k=a(82),L=a.n(k),S=a(83),x=a.n(S),A=a(46),I=a.n(A),R=a(57),z=a.n(R),N=a(58),T=a.n(N),W=a(56),F=a.n(W),B=a(84),V=a.n(B),H=a(63),P=function(e){var t=Object(H.a)(),a=e.isAdd,n=e.title,i=e.cityList,r=(e.setCityList,e.onMenuClick),o=e.handleClickOpen,l=(e.saveLocationList,e.removeAllLocation),s=c.a.useState(null),u=Object(h.a)(s,2),d=u[0],m=u[1],p=c.a.useState(null),b=Object(h.a)(p,2),f=b[0],k=b[1],S=Boolean(d),A=Boolean(f),R=function(){window.location.reload(!1)},N=function(){k(null)},W=function(){m(null),N()},B="primary-search-account-menu",P=c.a.createElement(w.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:B,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:S,onClose:W},c.a.createElement(j.a,{onClick:W},"Refresh"),c.a.createElement(j.a,{onClick:l},"Remove All Cities")),M=c.a.createElement(w.a,{anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:A,onClose:N},c.a.createElement(j.a,null,c.a.createElement(O.a,{id:"butAdd","aria-label":"show 4 new mails",color:"inherit",size:"medium",onClick:o},c.a.createElement(y.a,{badgeContent:Object.keys(i).length,color:"secondary"},c.a.createElement(T.a,null))),c.a.createElement("p",null,"Add City")),c.a.createElement(j.a,{onClick:R},c.a.createElement(O.a,{id:"butRefresh","aria-label":"show 4 new mails",color:"inherit",size:"medium"},c.a.createElement(F.a,null)),c.a.createElement("p",null,"Refresh")),c.a.createElement(j.a,{onClick:l},c.a.createElement(O.a,{id:"butRemove","aria-label":"remove all cities",color:"inherit",size:"medium"},c.a.createElement(I.a,null)),c.a.createElement("p",null,"Remove All Cities")));return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{position:"static"},c.a.createElement(g.a,null,c.a.createElement(O.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"Menu",size:"medium",onClick:r},c.a.createElement(L.a,null)),c.a.createElement(v.a,{className:t.title,variant:"h6",noWrap:!0},n),a&&c.a.createElement("div",{className:t.search},c.a.createElement("div",{className:t.searchIcon},c.a.createElement(x.a,null)),c.a.createElement(C.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),c.a.createElement("div",{className:t.grow}),c.a.createElement("div",{className:t.sectionDesktop},c.a.createElement(O.a,{id:"butAdd",color:"inherit",size:"medium",onClick:o},c.a.createElement(y.a,{badgeContent:Object.keys(i).length,color:"secondary"},c.a.createElement(T.a,null))),c.a.createElement(O.a,{id:"butRefresh",color:"inherit",size:"medium",onClick:R},c.a.createElement(F.a,null)),c.a.createElement(O.a,{edge:"end","aria-label":"account of current user","aria-controls":B,"aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit",size:"medium"},c.a.createElement(z.a,null))),c.a.createElement("div",{className:t.sectionMobile},c.a.createElement(O.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){k(e.currentTarget)},color:"inherit",size:"medium"},c.a.createElement(V.a,null))))),M,P)},M=a(188),U=a(183),_=a(179),D=a(187),J=a(172),G=a(133),$=a(181),q=a(52),K=a(86),Q=a.n(K),X=a(64),Y=a.n(X),Z=a(180),ee=a(85),te=a.n(ee),ae=function(e){var t=e.variant,a=e.open,n=e.onClose,i=e.onItemClick,r=e.title,o=e.handleClickOpen,l=(e.handleClose,e.removeAllLocation);return c.a.createElement(M.a,{variant:t,open:a,onClose:n},c.a.createElement(U.a,{mt:2}),c.a.createElement(_.a,{container:!0,spacing:1,justify:"center",alignItems:"center"},c.a.createElement(D.a,{alt:"COVID"},c.a.createElement(te.a,{color:"primary"})),c.a.createElement(D.a,{alt:"COVID"},r),c.a.createElement(D.a,null,r.slice(0,1))),c.a.createElement(U.a,{mt:2}),c.a.createElement("div",null),c.a.createElement(J.a,null,c.a.createElement(G.a,{button:!0,component:b.b,to:"/",onClick:i("Show Weather")},c.a.createElement(Z.a,null,c.a.createElement(Q.a,{style:{color:q.a[500]}})),c.a.createElement($.a,null,"Show Weather")),c.a.createElement(G.a,{button:!0,onClick:function(e){return o()}},c.a.createElement(Z.a,null,c.a.createElement(Y.a,{color:"primary"})),c.a.createElement($.a,null,"Add City")),c.a.createElement(G.a,{button:!0,onClick:function(e){return l()}},c.a.createElement(Z.a,null,c.a.createElement(I.a,{color:"secondary"})),c.a.createElement($.a,null,"Remove All City"))))},ne=a(10),ie=Object(l.lazy)((function(){return Promise.all([a.e(4),a.e(3)]).then(a.bind(null,238))})),re=(Object(l.lazy)((function(){return a.e(5).then(a.bind(null,237))})),Object(l.lazy)((function(){return a.e(6).then(a.bind(null,239))}))),oe=function(e){var t=e.cityList,a=e.setCityList,n=e.handleClickOpen,i=e.handleClose,r=e.saveLocationList,o=e.open,s=(e.setOpen,e.selectedValue),u=(e.setSelectedValue,e.data);return c.a.createElement("main",null,c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(ne.a,{exact:!0,path:"/"},c.a.createElement(ie,{cityList:t,setCityList:a,handleClickOpen:n,handleClose:i,saveLocationList:r,open:o,selectedValue:s,data:u})),c.a.createElement(ne.a,{path:"/grid"},c.a.createElement(re,null)),c.a.createElement(ne.a,{path:"/showcities"},c.a.createElement(ie,{cityList:t,setCityList:a,handleClickOpen:n,handleClose:i,saveLocationList:r,open:o,selectedValue:s,data:u})),c.a.createElement(ne.a,null,c.a.createElement(ie,{cityList:t,setCityList:a,handleClickOpen:n,handleClose:i,saveLocationList:r,open:o,selectedValue:s,data:u}))))},le=a(61),ce=a.n(le),se=a(87),ue=a(28),de=a(88),me=a.n(de),pe=function(e,t){switch(t.type){case"FETCH_INIT":return Object(ue.a)(Object(ue.a)({},e),{},{isLoading:!0,isError:!1});case"FETCH_SUCCESS":return Object(ue.a)(Object(ue.a)({},e),{},{data:t.payload,isError:!1,isLoading:!1});case"FETCH_FAILURE":return Object(ue.a)(Object(ue.a)({},e),{},{isLoading:!1,isError:!0});default:throw new Error}},he=function(e){var t=e,a=Object(l.useReducer)(pe,{data:[],isError:!1,isLoading:!1}),n=Object(h.a)(a,2),i=n[0],r=n[1],o=t.map((function(e){return me.a.get(e)}));return Object(l.useEffect)((function(){var e=!1;return function(){var t=Object(se.a)(ce.a.mark((function t(){var a;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"FETCH_INIT"}),t.prev=1,t.next=4,Promise.all(o);case 4:a=t.sent,e||r({type:"FETCH_SUCCESS",payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e||r({type:"FETCH_FAILURE"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[]),[i]},be=function(e){var t=e.variant,a=Object(l.useState)(!1),n=Object(h.a)(a,2),i=n[0],r=n[1],o=Object(l.useState)("Home"),s=Object(h.a)(o,2),u=s[0],d=s[1],m=Object(l.useState)(!1),p=Object(h.a)(m,2),E=p[0],g=p[1],O=Object(l.useState)(function(){var e=localStorage.getItem("locationList");if(e)try{e=JSON.parse(e)}catch(t){e={}}if(!e||0===Object.keys(e).length){(e={})[1609348]={id:1609348}}return console.log(JSON.stringify(e)),e}()),v=Object(h.a)(O,2),C=v[0],y=v[1],j=c.a.useState(!1),w=Object(h.a)(j,2),k=w[0],L=w[1],S=c.a.useState(""),x=Object(h.a)(S,2),A=x[0],I=x[1],R=function(){r(!i)},z=Object(f.a)(),N=function(){L(!0)},T=function(e){L(!1),I(e);var t=C||{};t[e]={id:e},F(t),y(t),window.location.reload(!1)},W=function(){var e=[];F(e),y(e),window.location.reload(!1)},F=function(e){var t=JSON.stringify(e);localStorage.setItem("locationList",t)},B=Object.keys(C).map((function(e,t){return"https://api.openweathermap.org/data/2.5/forecast?id="+e+"&&APPID=a6a8579dd770e584e7e7b568d2539b4d"})),V=he(B),H=Object(h.a)(V,1)[0],M=H.data;H.isLoading,H.isError;return c.a.createElement("div",null,c.a.createElement(b.a,{history:z},c.a.createElement(P,{isAdd:E,setIsAdd:g,title:u,setTitle:d,onMenuClick:R,cityList:C,setCityList:y,handleClickOpen:N,handleClose:T,saveLocationList:F,removeAllLocation:W}),c.a.createElement(ae,{title:u,open:i,onClose:R,onItemClick:function(e){return function(){d(e),r("temporary"!==t&&i),r(!i)}},variant:t,handleClickOpen:N,handleClose:T,removeAllLocation:W}),c.a.createElement(oe,{cityList:C,setCityList:y,handleClickOpen:N,handleClose:T,saveLocationList:F,open:k,setOpen:L,selectedValue:A,setSelectedValue:I,data:M})))},fe=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,null),c.a.createElement(be,null))}}]),a}(l.Component),Ee=document.getElementById("root");u.a.render(c.a.createElement(fe,null),Ee),function(e){if("serviceWorker"in navigator){if(new URL("/raw",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/raw","/sw.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()},63:function(e,t,a){"use strict";var n=a(28),i=a(9),r=a(130),o=a(29),l=Object(r.a)((function(e){var t,a;return a={root:{padding:e.spacing(2)},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(i.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(o.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(o.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(i.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(i.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(i.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),fab:(t={},Object(i.a)(t,"background-color","#3f51b5"),Object(i.a)(t,"border-radius","50%"),Object(i.a)(t,"bottom","1rem"),Object(i.a)(t,"height","56px"),Object(i.a)(t,"padding","12px"),Object(i.a)(t,"position","fixed"),Object(i.a)(t,"right","1rem"),Object(i.a)(t,"width","56px"),Object(i.a)(t,"z-index",1e3),t),removeCity:{"background-color":"transparent",border:"none",float:"right","font-size":"x-large"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})}},Object(i.a)(a,"menuButton",{marginRight:e.spacing(2)}),Object(i.a)(a,"hide",{display:"none"}),Object(i.a)(a,"drawer",{width:240,flexShrink:0}),Object(i.a)(a,"drawerPaper",{width:240}),Object(i.a)(a,"drawerHeader",Object(n.a)(Object(n.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"})),a}));t.a=l}},[[100,1,2]]]);
//# sourceMappingURL=main.8d92be4d.chunk.js.map