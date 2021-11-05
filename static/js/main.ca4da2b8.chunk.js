(this["webpackJsonphouse-app"]=this["webpackJsonphouse-app"]||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(29),c=n.n(a),s=(n(136),n(137),n(205)),i=n(218),o=n(220),u=n(221),l=n(222),d=n(1);function j(){return Object(d.jsx)(i.a,{position:"static",children:Object(d.jsxs)(o.a,{variant:"dense",children:[Object(d.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"menu"}),Object(d.jsx)(l.a,{variant:"h6",color:"inherit",children:"House"})]})})}var p=n(14),b=n(12),O=n(18),h=n(223),f=n(212),m=n(213),x=n(225),v=n(24),g=n.n(v),y=n(39),I=n(109),S=n.n(I).a.create({baseURL:"https://dispex.org/api/vtest/"}),E=function(){return S.get("Request/streets")},w=function(e){return S.get("Request/houses/".concat(e))},T=function(e){return S.get("Request/house_flats/".concat(e))},_=function(e){return S.get("HousingStock/clients?addressId=".concat(e))},C=function(e){return S.post("HousingStock/client",Object(p.a)(Object(p.a)({},e),{},{Id:0,BindId:0}))},k=function(e){return S.put("HousingStock/bind_client",{AddressId:e.address,ClientId:e.clientID})},A=function(e){return S.delete("HousingStock/bind_client/".concat(e))},D="SET_HOUSES",P="SET_STREETS",F="SET_HOUSE_FLAT",L="SET_CURRENT_ADDRESS",N="SET_CURRENT_ADDRESS_ID",R={houses:[],streets:[],houseFlat:[],currentAddress:null,currentAddressID:0};function q(){var e=Object(O.c)((function(e){return e.address.streets})),t=Object(O.c)((function(e){return e.address.houses})),n=Object(O.c)((function(e){return e.address.houseFlat})),a=Object(O.b)(),c=Object(r.useState)(null),i=Object(b.a)(c,2),o=i[0],u=i[1],l=Object(r.useState)(null),j=Object(b.a)(l,2),p=j[0],f=j[1],m=Object(r.useState)(null),x=Object(b.a)(m,2),v=x[0],g=x[1];return Object(d.jsxs)(s.a,{direction:"row",spacing:2,children:[Object(d.jsx)(H,{setSearchTerm:u,dispatch:a,streets:e}),Object(d.jsx)(U,{streetID:o,setSearchTerm:f,dispatch:a,houses:t}),Object(d.jsx)(B,{houseID:p,setSearchTerm:g,houseFlat:n,dispatch:a}),Object(d.jsx)(h.a,{onClick:function(){var e,t;a((e=[o.nameWithPrefix,p.name,v.name],{type:L,payload:e})),a((t=v.id,{type:N,payload:t}))},children:" \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0410\u0434\u0440\u0435\u0441"})]})}function H(e){var t=e.setSearchTerm,n=e.streets,a=e.dispatch,c=Object(r.useState)(!1),s=Object(b.a)(c,2),i=s[0],o=s[1],u=i&&0===n.length;Object(r.useEffect)((function(){u&&a(function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:n=e.sent,t((r=n.data,{type:P,payload:r})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}var r}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[u]);var l=n.filter((function(e){return 1===e.cityId}));return Object(d.jsx)(f.a,{id:"streets",sx:{width:300},open:i,onOpen:function(){o(!0)},onClose:function(){o(!1)},onChange:function(e,n){return n&&t(n)},options:l,loading:u,getOptionLabel:function(e){return e&&e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderOption:function(e,t){return Object(r.createElement)("li",Object(p.a)(Object(p.a)({},e),{},{key:t.id}),t.name)},renderInput:function(e){return Object(d.jsx)(m.a,Object(p.a)(Object(p.a)({},e),{},{label:"\u0423\u043b\u0438\u0446\u0430",InputProps:Object(p.a)(Object(p.a)({},e.InputProps),{},{endAdornment:Object(d.jsxs)(d.Fragment,{children:[u?Object(d.jsx)(x.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}function U(e){var t=e.setSearchTerm,n=e.streetID,a=e.houses,c=e.dispatch,s=Object(r.useState)(!1),i=Object(b.a)(s,2),o=i[0],u=i[1],l=o&&0===a.length;return Object(r.useEffect)((function(){var e;n&&c((e=n.id,function(){var t=Object(y.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:r=t.sent,n((a=r.data,{type:D,payload:a})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[n]),Object(d.jsx)(f.a,{id:"houses",sx:{width:200},open:o,onOpen:function(){u(!0)},onClose:function(){u(!1)},onChange:function(e,n){return n&&t(n)},options:a,loading:l,getOptionLabel:function(e){return e&&e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderOption:function(e,t){return Object(r.createElement)("li",Object(p.a)(Object(p.a)({},e),{},{key:t.id}),t.name)},renderInput:function(e){return Object(d.jsx)(m.a,Object(p.a)(Object(p.a)({},e),{},{label:"\u0414\u043e\u043c",InputProps:Object(p.a)(Object(p.a)({},e.InputProps),{},{endAdornment:Object(d.jsxs)(d.Fragment,{children:[l?Object(d.jsx)(x.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}function B(e){var t=e.setSearchTerm,n=e.houseID,a=e.houseFlat,c=e.dispatch,s=Object(r.useState)(!1),i=Object(b.a)(s,2),o=i[0],u=i[1],l=o&&0===a.length;return Object(r.useEffect)((function(){var e;n&&c((e=n.id,function(){var t=Object(y.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:r=t.sent,n((a=r.data,{type:F,payload:a})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[n]),Object(d.jsx)(f.a,{id:"houses_flat",sx:{width:200},open:o,onOpen:function(){u(!0)},onClose:function(){u(!1)},onChange:function(e,n){n&&t(n)},options:a,loading:l,getOptionLabel:function(e){return e&&e.name},isOptionEqualToValue:function(e,t){return e&&e.name===t.name},renderOption:function(e,t){return Object(r.createElement)("li",Object(p.a)(Object(p.a)({},e),{},{key:t.id}),t.name)},renderInput:function(e){return Object(d.jsx)(m.a,Object(p.a)(Object(p.a)({},e),{},{label:"\u041a\u0432./\u043e\u0444\u0438\u0441",InputProps:Object(p.a)(Object(p.a)({},e.InputProps),{},{endAdornment:Object(d.jsxs)(d.Fragment,{children:[l?Object(d.jsx)(x.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var z=n(214),V=n(226),W=n(88),G=n.n(W),J=n(224),M=n(115),X="POST_CLIENT_DATA",K="SET_LOADING",Q="SET_STATUS",Y="SET_FLAT_CLIENTS",Z={clientID:null,isLoading:!1,status:"idle",flatClients:[{Id:0,Name:"\u0418\u0432\u0430\u043d",Phone:"+7 932 324 12",Email:"test@mail.com",BindId:0},{Id:2,Name:"\u0411\u043e\u0440\u0438\u0441",Phone:"+7 932 324 12",Email:"test@mail.com",BindId:3},{Id:4,Name:"\u0411\u043e\u0440\u0438\u0441",Phone:"+7 932 324 12",Email:"test@mail.com",BindId:3},{Id:5,Name:"\u0418\u043b\u044c\u044f",Phone:"+7 922 789 78",Email:"test@mail.com",BindId:3}]},$=function(e){return{type:X,payload:e}},ee=function(e){return{type:K,payload:e}},te=function(e){return{type:Q,payload:e}},ne=function(e){return function(){var t=Object(y.a)(g.a.mark((function t(n,r){var a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().address.currentAddressID,n(ee(!0)),n(te("loading")),t.prev=3,t.next=6,C(e);case 6:"Ok"===(c=t.sent).data.result&&(n($(c.data.id)),k({address:a,clientID:c.data.id})),n(te("success")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0);case 14:return t.prev=14,n(ee(!1)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[3,11,14,17]])})));return function(e,n){return t.apply(this,arguments)}}()};var re=function(e){var t=e.handleClose,n=Object(O.b)(),r=Object(O.c)((function(e){return e.houses.isLoading})),a=Object(M.a)({initialValues:{email:"",name:"",phone:""},onSubmit:function(e,t){n(ne(e))},validate:function(e){var t={};return e.phone||(t.phone="Required"),t}});return Object(d.jsx)("form",{className:G.a.formWrap,onSubmit:a.handleSubmit,children:Object(d.jsxs)(J.a,{children:[Object(d.jsxs)("div",{className:G.a.form,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(m.a,Object(p.a)({style:{width:"50%"},placeholder:"\u0424.\u0418.\u041e.",name:"name"},a.getFieldProps("name"))),Object(d.jsx)(m.a,Object(p.a)({style:{width:"50%"},placeholder:"e-mail",name:"email"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(d.jsx)("div",{style:{color:"red"},children:a.errors.email}):null]}),Object(d.jsx)(m.a,Object(p.a)({color:"secondary",required:!0,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone"},a.getFieldProps("phone"))),a.touched.phone&&a.errors.phone?Object(d.jsx)("div",{style:{color:"red"},children:a.errors.phone}):null]}),Object(d.jsx)("hr",{style:{width:"100%"}}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",marginRop:"40px"},children:[Object(d.jsx)(h.a,{style:{marginRight:"5px"},onClick:t,children:" \u041e\u0442\u043c\u0435\u043d\u0430 "}),Object(d.jsx)(h.a,{variant:"contained",disabled:r,type:"submit",children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c "}),r?Object(d.jsx)(x.a,{style:{margin:"5px 0 0 5px"},color:"inherit",size:20}):null]})]})})};function ae(e){var t=e.currentAddress,n=e.title,a=e.disabled,c=void 0!==a&&a,i=Object(r.useState)(!1),o=Object(b.a)(i,2),u=o[0],j=o[1],p=function(){return j(!1)},f=Object(O.b)();return Object(d.jsxs)("div",{children:[Object(d.jsx)(h.a,{disabled:c,variant:"contained",onClick:function(){return j(!0)},children:n}),Object(d.jsx)(z.a,{open:u,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(d.jsxs)(V.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",boxShadow:24,p:4},children:[Object(d.jsxs)(s.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(d.jsx)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0436\u0438\u043b\u044c\u0446\u0430"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(h.a,{onClick:function(){f(function(){var e=Object(y.a)(g.a.mark((function e(t,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().houses.clientID,e.prev=1,e.next=4,A(r);case 4:t({type:"DELETE_FLAT_CLIENTS"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}())},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(d.jsx)(h.a,{disabled:!0,onClick:function(){f(ne())},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})]}),Object(d.jsx)(l.a,{id:"modal-modal-description",sx:{mt:2},children:t}),Object(d.jsx)(re,{handleClose:p})]})})]})}var ce=n(219),se=n(217),ie=n(216);function oe(){var e=Object(O.c)((function(e){return e.houses.status})),t=Object(O.b)(),n=function(e,n){"clickaway"===n&&t(te("idle")),t(te("idle"))};return Object(d.jsx)(se.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:"success"===e,onClose:n,autoHideDuration:2e3,children:Object(d.jsx)(ie.a,{elevation:6,variant:"filled",onClose:n,severity:"success",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b."})})}var ue=n(112),le=n.n(ue),de=n(113),je=n.n(de);var pe=function(){var e=Object(O.c)((function(e){return e.address.currentAddress})),t=Object(O.c)((function(e){return e.houses.flatClients})),n=Object(O.b)(),r=e&&e.map((function(t,n){return e[e.length-1]===t?Object(d.jsxs)("span",{children:[" ",t," "]},n):Object(d.jsxs)("span",{children:[" ",t," ,"]},n)}));return Object(d.jsxs)(s.a,{direction:"column",spacing:4,children:[Object(d.jsx)(oe,{}),Object(d.jsxs)(s.a,{direction:"row",justifyContent:"space-between",spacing:15,children:[Object(d.jsx)("div",{style:{paddingTop:"10px"},children:e&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:" \u0410\u0434\u0440\u0435\u0441: "}),Object(d.jsx)("span",{style:{marginLeft:"10px"},children:r})]})}),Object(d.jsxs)(s.a,{direction:"row",spacing:2,children:[Object(d.jsx)(h.a,{onClick:function(){n(function(){var e=Object(y.a)(g.a.mark((function e(t,n){var r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().address.currentAddressID,e.prev=1,e.next=4,_(r);case 4:a=e.sent,t((c=a.data,{type:Y,payload:c})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}var c}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}())},children:" \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(d.jsx)(ae,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0436\u0438\u043b\u044c\u0446\u0430",currentAddress:r})]})]}),Object(d.jsx)(s.a,{direction:"row",spacing:2,children:t&&t.map((function(e){return Object(d.jsx)(be,{name:e.Name,email:e.Email,phone:e.Phone},e.Id)}))})]})};function be(e){var t=e.name,n=e.phone,r=e.email;return Object(d.jsxs)(ce.a,{elevation:5,children:[Object(d.jsxs)(s.a,{style:{padding:"20px"},direction:"column",justifyContent:"space-between",spacing:2,children:[Object(d.jsxs)("span",{children:["\u0418\u043c\u044f: ",t]}),Object(d.jsxs)("span",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",n]}),Object(d.jsxs)("span",{children:["E-mail: ",r," "]})]}),Object(d.jsxs)(s.a,{style:{backgroundColor:"rgb(231 231 231)",padding:"20px"},direction:"row",justifyContent:"space-between",spacing:2,children:[Object(d.jsx)(le.a,{})," ",Object(d.jsx)(je.a,{})]})]})}var Oe=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.a,{alignItems:"center",spacing:21,children:[Object(d.jsx)(j,{}),Object(d.jsxs)(s.a,{style:{width:"1000px"},alignItems:"center",spacing:15,children:[Object(d.jsx)(q,{}),Object(d.jsx)(pe,{})]})]})})},he=n(77),fe=n(114),me=n(77),xe=(0,me.createStore)((0,me.combineReducers)({address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(p.a)(Object(p.a)({},e),{},{houses:t.payload});case P:return Object(p.a)(Object(p.a)({},e),{},{streets:t.payload});case F:return Object(p.a)(Object(p.a)({},e),{},{houseFlat:t.payload});case L:return Object(p.a)(Object(p.a)({},e),{},{currentAddress:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{currentAddressID:t.payload});default:return e}},houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(p.a)(Object(p.a)({},e),{},{clientID:t.payload});case K:return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.payload});case Q:return Object(p.a)(Object(p.a)({},e),{},{status:t.payload});case Y:return Object(p.a)(Object(p.a)({},e),{},{flatClients:t.payload});default:return e}}}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.compose)(Object(he.applyMiddleware)(fe.a)));window.store=xe,c.a.render(Object(d.jsx)(O.a,{store:xe,children:Object(d.jsx)(Oe,{})}),document.getElementById("root"))},88:function(e,t,n){e.exports={formWrap:"Form_formWrap__3pKlD",form:"Form_form__Ui_Gb"}}},[[164,1,2]]]);
//# sourceMappingURL=main.ca4da2b8.chunk.js.map