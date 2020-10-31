(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{266:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"signup",(function(){return zn})),e.d(r,"signin",(function(){return Dn})),e.d(r,"signout",(function(){return En})),e.d(r,"fetchPizzas",(function(){return Pn})),e.d(r,"addToCart",(function(){return Cn})),e.d(r,"removeFromCart",(function(){return Rn})),e.d(r,"deleteItem",(function(){return Fn})),e.d(r,"clearCart",(function(){return Mn})),e.d(r,"sendOrder",(function(){return In})),e.d(r,"fetchOrders",(function(){return qn}));var i=e(1),c=e(0),a=e(25),o=e.n(a),u=e(8),s=e(11),d=e(13),p=e(121),b=e(269),l=e(10),f="auth_user",j="auth_error",x="auth_error",h="clear_cart",O="add_item",m="remove_item",g="delete_item",v="fetch_pizzas",y="fetch_error",w="fetch_orders",U={authenticated:"",errorMessage:"",signupErrorMessage:""},S=e(26),k={items:[],totalPriceUSD:0,totalPriceEURO:0,deliveryFee:{USD:4,EUR:3}};function z(n,t){return n.items.find((function(n){return n.id===t}))}function D(n,t){var e=n.items.map((function(n){return n.id})).indexOf(t);return n.items.splice(e,1),n.items}var E=Object(u.c)({auth:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(l.a)(Object(l.a)({},n),{},{authenticated:t.payload});case j:return Object(l.a)(Object(l.a)({},n),{},{errorMessage:t.payload});case x:return Object(l.a)(Object(l.a)({},n),{},{signupErrorMessage:t.payload});default:return n}},form:b.a,pizzas:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(S.a)(t.payload);default:return n}},cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var e=t.payload.item[0],r=t.payload.currency,i=z(n,e.id);if(void 0===i){if(e.quantity=1,"USD"===r){var c=n.totalPriceUSD+e.price.USD,a=n.totalPriceEURO+e.price.EUR,o=[].concat(Object(S.a)(n.items),Object(S.a)(t.payload.item)),u=Object(l.a)(Object(l.a)({},n),{},{items:o,totalPriceUSD:c+n.deliveryFee.USD,totalPriceEURO:a+n.deliveryFee.EUR});return u}if("EURO"===r){var s=n.totalPriceUSD+e.price.USD,d=n.totalPriceEURO+e.price.EUR,p=[].concat(Object(S.a)(n.items),Object(S.a)(t.payload.item)),b=Object(l.a)(Object(l.a)({},n),{},{items:p,totalPriceUSD:s,totalPriceEURO:d});return b}}if(void 0!==i){e.quantity+=1;var f=n.totalPriceUSD+e.price.USD,j=n.totalPriceUSD+e.price.EUR,x=Object(l.a)(Object(l.a)({},n),{},{totalPriceUSD:f,totalPriceEURO:j});return x}return n;case m:var v=t.payload[0];if(1===v.quantity){v.quantity=0;var y=n.totalPriceUSD-v.price.USD,w=D(n,v.id),U=Object(l.a)(Object(l.a)({},n),{},{items:w,totalPriceUSD:y});return U}if(v.quantity>1){v.quantity-=1;var E=n.totalPriceUSD-v.price.USD,P=Object(l.a)(Object(l.a)({},n),{},{totalPriceUSD:E});return P}return n;case g:var C=t.payload[0],R=D(n,C.id),F=Object(l.a)(Object(l.a)({},n),{},{items:R});return F;case h:return k;default:return n}},orders:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return[].concat(Object(S.a)(n),[t.payload]);default:return n}}}),P=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{items:[],totalPriceUSD:0,totalPriceEURO:0,deliveryFee:{USD:4,EUR:3}},C=e(31),R=e(2),F=e(3),M=e(12),I=e(123),q=e.p+"static/media/pizza-app-logo.6190b188.svg";function _(){var n=Object(R.a)(["\n  height: 60px;\n  width: 60px;\n"]);return _=function(){return n},n}function $(){var n=Object(R.a)(["\n  text-decoration: none;\n"]);return $=function(){return n},n}var B=Object(F.b)(d.b)($()),T=F.b.img(_()),J=function(n){return Object(I.a)(n),Object(i.jsx)(B,{to:"/",children:Object(i.jsx)(T,{src:q,alt:""})})},N=e(127),A=e(83),W=e.n(A),Y=c.createContext(void 0),G=function(){return c.useContext(Y)};function H(){return W.a.getItem("currency")||"USD"}var K=function(n){var t=n.children,e=c.useState(H),r=Object(C.a)(e,2),a=r[0],o=r[1];return c.useEffect((function(){W.a.setItem("currency",a)}),[a]),Object(i.jsx)(Y.Provider,{value:{currency:a,setCurrency:o},children:t})};function L(){var n=Object(R.a)(["\n  & .react-select__control {\n    background-color: hsl(0, 0%, 100%);\n    border-color: #fc4c4c;\n    border-radius: 5px;\n    padding: 0;\n    width: 90px;\n    font-size: 12px;\n    white-space: nowrap;\n  }\n"]);return L=function(){return n},n}var Q=Object(F.b)(N.a)(L()),V=[{value:"USD",label:"USD"},{value:"EURO",label:"EURO"}],X=function(n){var t=G(),e=t.currency,r=t.setCurrency;return Object(i.jsx)("div",{children:Object(i.jsx)(Q,{value:V.filter((function(n){return n.label===e})),classNamePrefix:"react-select",options:V,onChange:function(n){return r(n.value)}})})};function Z(){var n=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return Z=function(){return n},n}function nn(){var n=Object(R.a)(["\n  padding: 5px 20px;\n"]);return nn=function(){return n},n}var tn=F.b.header(nn()),en=F.b.div(Z()),rn=function(){return Object(i.jsx)(tn,{children:Object(i.jsxs)(en,{children:[Object(i.jsx)(J,{}),Object(i.jsx)(X,{})]})})},cn=e.p+"static/media/login.1169240a.svg",an=e.p+"static/media/logout.62dd6e5b.svg",on=e.p+"static/media/history.256833de.svg";function un(){var n=Object(R.a)(["\n  height: 24px;\n  width: 30px;\n  margin-right: 20px;\n"]);return un=function(){return n},n}function sn(){var n=Object(R.a)(["\n  height: 24px;\n  width: 30px;\n  margin-right: 20px;\n"]);return sn=function(){return n},n}function dn(){var n=Object(R.a)(["\n  height: 24px;\n  width: 30px;\n  margin-right: 20px;\n  margin-bottom: 3px;\n"]);return dn=function(){return n},n}var pn=F.b.img(dn()),bn=F.b.img(sn()),ln=F.b.img(un());var fn=Object(s.b)((function(n){return{authenticated:n.auth.authenticated}}))((function(n){return Object(i.jsx)(i.Fragment,{children:n.authenticated?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d.b,{to:"/signout",children:Object(i.jsx)(bn,{src:an,alt:""})}),Object(i.jsx)(d.b,{to:"/history",children:Object(i.jsx)(ln,{src:on,alt:""})})]}):Object(i.jsx)(d.b,{to:"/login",onClick:function(){return n.setModal(!0)},children:Object(i.jsx)(pn,{src:cn,alt:""})})})})),jn=e.p+"static/media/cart-icon.33abc4a5.svg";function xn(){var n=Object(R.a)(["\n  width: 30px;\n  height: 30px;\n\n  margin-bottom: 5px;\n"]);return xn=function(){return n},n}var hn=F.b.img(xn()),On=function(n){return Object(i.jsx)(hn,{src:jn,alt:"",onClick:function(){return n.setBusket(!n.busket)}})};function mn(){var n=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0px 20px 5px 20px;\n"]);return mn=function(){return n},n}var gn=F.b.div(mn()),vn=function(n){return Object(i.jsxs)(gn,{children:[Object(i.jsx)(fn,{setModal:n.setModal}),Object(i.jsx)(On,{busket:n.busket,setBusket:n.setBusket})]})},yn=e(22),wn=e.n(yn),Un=e(35),Sn=e(36),kn=e.n(Sn),zn=function(n,t){return function(){var e=Object(Un.a)(wn.a.mark((function e(r){var i;return wn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,kn.a.post("http://localhost:3090/signup",n);case 3:i=e.sent,r({type:f,payload:i.data.token}),localStorage.setItem("token",i.data.token),t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({type:x,payload:"Email in use"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},Dn=function(n,t){return function(){var e=Object(Un.a)(wn.a.mark((function e(r){var i;return wn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,kn.a.post("http://localhost:3090/signin",n);case 3:i=e.sent,r({type:f,payload:i.data.token}),localStorage.setItem("token",i.data.token),t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({type:j,payload:"Invalid login credentials"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},En=function(n){return localStorage.removeItem("token"),n(),{type:f,payload:""}},Pn=function(n){return function(){var t=Object(Un.a)(wn.a.mark((function t(e){var r;return wn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,kn.a.get(n);case 3:r=t.sent,e({type:v,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e({type:y,payload:"Unable to fetch data!"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},Cn=function(n,t){return function(e,r){var i=r().pizzas.filter((function(t){return t.id===n}));e({type:O,payload:{item:i,currency:t}})}},Rn=function(n){return function(t,e){var r=e().cart.items.filter((function(t){return t.id===n}));t({type:m,payload:r})}},Fn=function(n){return function(t,e){var r=e().cart.items.filter((function(t){return t.id===n}));t({type:g,payload:r})}},Mn=function(){return{type:h,payload:null}},In=function(n,t,e){return function(){var r=Object(Un.a)(wn.a.mark((function r(i){var c;return wn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,kn.a.post("http://localhost:3090/order",{formProps:n,cart:t});case 3:c=r.sent,i({type:h,payload:c}),e(),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),i({type:j,payload:"Fill all fields"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(n){return r.apply(this,arguments)}}()},qn=function(n){return function(){var t=Object(Un.a)(wn.a.mark((function t(e){var r,i;return wn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=localStorage.getItem("token"),t.next=4,kn.a.get(n,{headers:{authorization:r}});case 4:i=t.sent,e({type:w,payload:i.data.orders}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:y,payload:"Unable to fetch orders!"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()};function _n(){var n=Object(R.a)(["\n  padding: 10px 20px;\n  background: #fff;\n  color: #fc4c4c;\n  border: 1px solid #fc4c4c;\n  border-radius: 5px;\n"]);return _n=function(){return n},n}function $n(){var n=Object(R.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n"]);return $n=function(){return n},n}function Bn(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  justify-self: baseline;\n"]);return Bn=function(){return n},n}function Tn(){var n=Object(R.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: #857d7d;\n  padding: 15px 0;\n  margin: 0;\n  flex-grow: 1;\n"]);return Tn=function(){return n},n}function Jn(){var n=Object(R.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  color: #000;\n  margin: 20px 0 0 0;\n  padding-bottom: 15px;\n"]);return Jn=function(){return n},n}function Nn(){var n=Object(R.a)(["\n  height: 100%;\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n"]);return Nn=function(){return n},n}function An(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  max-width: 100%;\n  background-color: hsl(0, 0%, 100%);\n  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);\n  border-radius: 5px;\n\n  &:hover "," {\n    transform: scale(1.2);\n  }\n"]);return An=function(){return n},n}function Wn(){var n=Object(R.a)(["\n  width: 100%;\n  height: 200px;\n  object-fit: contain;\n  border-radius: 5px 5px 0 0;\n  transition: transform 0.5s;\n"]);return Wn=function(){return n},n}var Yn=F.b.img(Wn()),Gn=F.b.div(An(),Yn),Hn=F.b.div(Nn()),Kn=F.b.h4(Jn()),Ln=F.b.h5(Tn()),Qn=F.b.div(Bn()),Vn=F.b.h5($n()),Xn=F.b.span(_n()),Zn=Object(s.b)((function(n){return{cart:n.cart}}),r)((function(n){var t=G().currency;return Object(i.jsxs)(Gn,{children:[Object(i.jsx)(Yn,{src:"http://localhost:3090".concat(n.image),alt:n.name}),Object(i.jsxs)(Hn,{children:[Object(i.jsx)(Kn,{children:n.name}),Object(i.jsx)(Ln,{children:n.description}),Object(i.jsxs)(Qn,{children:[Object(i.jsxs)(Vn,{children:["USD"===t?"$ ":"\u20ac ","USD"===t?n.price.USD:n.price.EUR]}),Object(i.jsx)(Xn,{onClick:function(){return e=n.id,r=t,void n.addToCart(e,r);var e,r},children:"Add item"})]})]})]})}));function nt(){var n=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));\n  justify-content: center;\n  grid-gap: 40px;\n  padding: 30px 0;\n\n  @media (min-width: 1024px) {\n    grid-gap: 75px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 330px));\n    justify-content: center;\n  }\n"]);return nt=function(){return n},n}function tt(){var n=Object(R.a)(["\n  max-width: 1348px;\n  margin: 0 auto;\n"]);return tt=function(){return n},n}var et=F.b.div(tt()),rt=F.b.div(nt());var it=Object(s.b)((function(n){return{pizzas:n.pizzas}}),r)((function(n){return c.useEffect((function(){n.fetchPizzas("http://localhost:3090/pizzas")}),[]),Object(i.jsx)(et,{children:Object(i.jsx)(rt,{children:n.pizzas&&n.pizzas.map((function(n){return Object(i.jsx)(Zn,{id:n.id,name:n.name,price:n.price,description:n.description,image:n.image},n.id)}))})})})),ct=e(125),at=e.n(ct),ot=e.p+"static/media/remove.a6fd5b90.svg",ut=e.p+"static/media/decrement.6a18d353.svg",st=e.p+"static/media/increment.6b249512.svg";function dt(){var n=Object(R.a)(["\n  font-size: 16px;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  background: #64b171;\n  color: #fff;\n  margin-top: 20px;\n  padding: 10px 20px;\n"]);return dt=function(){return n},n}function pt(){var n=Object(R.a)(["\n  font-size: 18px;\n  font-weight: bold;\n"]);return pt=function(){return n},n}function bt(){var n=Object(R.a)(["\n  font-size: 18px;\n  font-weight: bold;\n"]);return bt=function(){return n},n}function lt(){var n=Object(R.a)(["\n  margin-top: 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return lt=function(){return n},n}function ft(){var n=Object(R.a)(["\n  font-size: 18px;\n  font-weight: bold;\n"]);return ft=function(){return n},n}function jt(){var n=Object(R.a)(["\n  font-size: 18px;\n  font-weight: bold;\n"]);return jt=function(){return n},n}function xt(){var n=Object(R.a)(["\n  margin-top: 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return xt=function(){return n},n}function ht(){var n=Object(R.a)(["\n  font-weight: 400;\n"]);return ht=function(){return n},n}function Ot(){var n=Object(R.a)(["\n  width: 20px;\n  height: 20px;\n"]);return Ot=function(){return n},n}function mt(){var n=Object(R.a)(["\n  width: 60px;\n  height: 60px;\n"]);return mt=function(){return n},n}function gt(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  padding: 20px 0;\n  min-width: 40px;\n"]);return gt=function(){return n},n}function vt(){var n=Object(R.a)(["\n  font-size: 18px;\n"]);return vt=function(){return n},n}function yt(){var n=Object(R.a)(["\n  width: 20px;\n  height: 20px;\n"]);return yt=function(){return n},n}function wt(){var n=Object(R.a)(["\n  margin-top: 5px;\n  border: none;\n  background: #fff;\n"]);return wt=function(){return n},n}function Ut(){var n=Object(R.a)(["\n  border: 1px solid rgba(204, 200, 200, 0.719);\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Ut=function(){return n},n}function St(){var n=Object(R.a)(["\n  font-size: 14px;\n  font-weight: bold;\n  white-space: nowrap;\n  margin: 0;\n  padding-bottom: 10px;\n"]);return St=function(){return n},n}function kt(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  flex-grow: 1;\n  padding: 20px 10px;\n"]);return kt=function(){return n},n}function zt(){var n=Object(R.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-height: 120px;\n  min-width: 250px;\n  flex-basis: 1 2 1;\n\n  &:after {\n    content: '';\n    height: 2px;\n    width: 100%;\n    border-bottom: 2px solid rgba(194, 187, 187, 0.712);\n\n    position: absolute;\n    top: 90%;\n    left: 0%;\n\n    transform: translate(0, 0%);\n  }\n"]);return zt=function(){return n},n}function Dt(){var n=Object(R.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);return Dt=function(){return n},n}function Et(){var n=Object(R.a)(["\n  font-size: 18px;\n  font-weight: bold;\n"]);return Et=function(){return n},n}function Pt(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n\n  max-height: 600px;\n  width: 275px;\n  padding: 25px 20px;\n  border-radius: 5px;\n  background: #fff;\n\n  overflow-y: scroll;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 25px;\n"]);return Pt=function(){return n},n}var Ct=F.b.div(Pt()),Rt=F.b.h4(Et()),Ft=F.b.ul(Dt()),Mt=F.b.li(zt()),It=F.b.div(kt()),qt=F.b.p(St()),_t=F.b.div(Ut()),$t=F.b.button(wt()),Bt=F.b.img(yt()),Tt=F.b.span(vt()),Jt=F.b.div(gt()),Nt=F.b.img(mt()),At=F.b.img(Ot()),Wt=F.b.p(ht()),Yt=F.b.div(xt()),Gt=F.b.h2(jt()),Ht=F.b.span(ft()),Kt=F.b.h2(lt()),Lt=F.b.span(bt()),Qt=F.b.span(pt()),Vt=Object(F.b)(d.b)(dt());var Xt=Object(s.b)((function(n){return{cart:n.cart}}),r)((function(n){var t=G().currency;return n.busket?0===n.cart.items.length?Object(i.jsx)(Ct,{children:Object(i.jsx)(Rt,{children:"Oops, it\u2019s empty here!"})}):Object(i.jsxs)(Ct,{children:[Object(i.jsx)(Rt,{children:"Your Order:"}),Object(i.jsx)(Ft,{children:n.cart.items&&n.cart.items.map((function(e){return Object(i.jsxs)(Mt,{children:[Object(i.jsx)(Nt,{src:"http://localhost:3090".concat(e.image),alt:""}),Object(i.jsxs)(It,{children:[Object(i.jsx)(qt,{children:e.name}),Object(i.jsxs)(_t,{children:[Object(i.jsx)($t,{onClick:function(){return r=e.id,i=t,void n.removeFromCart(r,i);var r,i},children:Object(i.jsx)(Bt,{src:ut,alt:""})}),Object(i.jsx)(Tt,{children:e.quantity}),Object(i.jsx)($t,{onClick:function(){return r=e.id,i=t,void n.addToCart(r,i);var r,i},children:Object(i.jsx)(Bt,{src:st,alt:""})})]})]}),Object(i.jsxs)(Jt,{children:[Object(i.jsx)(At,{src:ot,alt:"",onClick:function(){return t=e.id,void n.deleteItem(t);var t}}),Object(i.jsxs)(Wt,{children:["USD"===t?"$ ":"\u20ac ","USD"===t?e.price.USD:e.price.EUR]})]})]},e.id)}))}),Object(i.jsxs)(Yt,{children:[Object(i.jsx)(Gt,{children:"Delivery fee:"}),Object(i.jsxs)(Ht,{children:["USD"===t?"$ ":"\u20ac ","USD"===t?n.cart.deliveryFee.USD:n.cart.deliveryFee.EUR]})]}),Object(i.jsxs)(Kt,{children:[Object(i.jsx)(Lt,{children:"Total: "}),Object(i.jsxs)(Qt,{children:["USD"===t?"$ ":"\u20ac ","USD"===t?n.cart.totalPriceUSD:n.cart.totalPriceEURO]})]}),Object(i.jsx)(Vt,{to:"/cart",children:"Chechout"})]}):null})),Zt=at()(Xt),ne=e(268),te=e(267);function ee(){var n=Object(R.a)(["\n  text-align: center;\n  color: #c52626;\n"]);return ee=function(){return n},n}function re(){var n=Object(R.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  border: none;\n  background: #5579da;\n  color: #fff;\n  padding: 0.5em 0.9em;\n\n  @media (min-width: 1024px) {\n    font-size: 16px;\n  }\n"]);return re=function(){return n},n}function ie(){var n=Object(R.a)(["\n  font-size: 14px;\n  border: none;\n  background: #64b171;\n  color: #fff;\n  padding: 0.5em 0.9em;\n\n  @media (min-width: 1024px) {\n    font-size: 16px;\n  }\n"]);return ie=function(){return n},n}function ce(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 30px;\n"]);return ce=function(){return n},n}function ae(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ae=function(){return n},n}function oe(){var n=Object(R.a)(["\n  border: none;\n  background: #fff;\n  color: #000;\n  margin-top: 10px;\n"]);return oe=function(){return n},n}function ue(){var n=Object(R.a)(["\n  border: 2px solid #fc4c4c;\n  border-radius: 4px;\n  background: #fff;\n  padding: 15px 20px;\n\n  @media (min-width: 1024px) {\n    padding: 30px 40px;\n    border: 3px solid #fc4c4c;\n  }\n"]);return ue=function(){return n},n}function se(){var n=Object(R.a)(["\n  width: 250px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n\n  @media (min-width: 1024px) {\n    width: 500px;\n  }\n"]);return se=function(){return n},n}function de(){var n=Object(R.a)(["\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n"]);return de=function(){return n},n}var pe=F.b.div(de()),be=F.b.div(se()),le=F.b.form(ue()),fe=F.b.fieldset(oe()),je=F.b.label(ae()),xe=F.b.div(ce()),he=F.b.button(ie()),Oe=Object(F.b)(d.b)(re()),me=F.b.div(ee());var ge=Object(u.d)(Object(s.b)((function(n){return{errorMessage:n.auth.errorMessage}}),r),Object(te.a)({form:"signin"}))((function(n){var t=n.handleSubmit;return n.modal?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(pe,{onClick:function(){return n.setModal(!1)}}),Object(i.jsx)(be,{children:Object(i.jsxs)(le,{onSubmit:t((function(t){n.signin(t,(function(){n.history.push("/")}))})),children:[Object(i.jsx)(fe,{children:Object(i.jsxs)(je,{htmlFor:"email",children:["Email:",Object(i.jsx)(ne.a,{id:"email",name:"email",type:"email",component:"input",autoComplete:"none"})]})}),Object(i.jsx)(fe,{children:Object(i.jsxs)(je,{htmlFor:"password",children:["Password:",Object(i.jsx)(ne.a,{id:"password",name:"password",type:"password",component:"input",autoComplete:"none"})]})}),Object(i.jsx)(me,{children:n.errorMessage}),Object(i.jsxs)(xe,{children:[Object(i.jsx)(he,{type:"submit",children:"Sign In"}),Object(i.jsx)(Oe,{to:"/register",children:"Sign Up"})]})]})})]}):null}));function ve(){var n=Object(R.a)(["\n  text-align: center;\n  color: #c52626;\n"]);return ve=function(){return n},n}function ye(){var n=Object(R.a)(["\n  font-size: 14px;\n  border: none;\n  background: #64b171;\n  color: #fff;\n  padding: 0.5em 0.9em;\n\n  @media (min-width: 1024px) {\n    font-size: 16px;\n  }\n"]);return ye=function(){return n},n}function we(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 30px;\n"]);return we=function(){return n},n}function Ue(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ue=function(){return n},n}function Se(){var n=Object(R.a)(["\n  border: none;\n  background: #fff;\n  color: #000;\n  margin-top: 10px;\n"]);return Se=function(){return n},n}function ke(){var n=Object(R.a)(["\n  border: 2px solid #fc4c4c;\n  border-radius: 4px;\n  background: #fff;\n  padding: 15px 20px;\n\n  @media (min-width: 1024px) {\n    padding: 30px 40px;\n    border: 3px solid #fc4c4c;\n  }\n"]);return ke=function(){return n},n}function ze(){var n=Object(R.a)(["\n  width: 250px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n\n  @media (min-width: 1024px) {\n    width: 500px;\n  }\n"]);return ze=function(){return n},n}function De(){var n=Object(R.a)(["\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n"]);return De=function(){return n},n}var Ee=F.b.div(De()),Pe=F.b.div(ze()),Ce=F.b.form(ke()),Re=F.b.fieldset(Se()),Fe=F.b.label(Ue()),Me=F.b.div(we()),Ie=F.b.button(ye()),qe=F.b.div(ve());var _e=Object(u.d)(Object(s.b)((function(n){return{signupErrorMessage:n.auth.signupErrorMessage}}),r),Object(te.a)({form:"signup"}))((function(n){var t=n.handleSubmit;return n.modal?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Ee,{onClick:function(){return n.setModal(!1)}}),Object(i.jsx)(Pe,{children:Object(i.jsxs)(Ce,{onSubmit:t((function(t){n.signup(t,(function(){n.history.push("/")}))})),children:[Object(i.jsx)(Re,{children:Object(i.jsxs)(Fe,{htmlFor:"email",children:["Email:",Object(i.jsx)(ne.a,{id:"email",name:"email",type:"email",component:"input",autoComplete:"none"})]})}),Object(i.jsx)(Re,{children:Object(i.jsxs)(Fe,{htmlFor:"password",children:["Password:",Object(i.jsx)(ne.a,{id:"password",name:"password",type:"password",component:"input",autoComplete:"none"})]})}),Object(i.jsx)(qe,{children:n.signupErrorMessage}),Object(i.jsx)(Me,{children:Object(i.jsx)(Ie,{children:"Sign Up"})})]})})]}):null}));function $e(){var n=Object(R.a)(["\n  width: 100px;\n  margin-top: 50px;\n  background: #fff;\n  border: 1px solid #a8a6a6;\n  border-radius: 5px;\n  color: #000;\n  text-decoration: none;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 10px 20px;\n\n  @media (min-width: 1024px) {\n    border: 2px solid #a8a6a6;\n    font-size: 14px;\n    padding: 10px 20px;\n  }\n"]);return $e=function(){return n},n}function Be(){var n=Object(R.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: #64b171;\n"]);return Be=function(){return n},n}function Te(){var n=Object(R.a)(["\n  font-weight: 600;\n  font-size: 16px;\n"]);return Te=function(){return n},n}function Je(){var n=Object(R.a)(["\n  margin-top: 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Je=function(){return n},n}function Ne(){var n=Object(R.a)([""]);return Ne=function(){return n},n}function Ae(){var n=Object(R.a)([""]);return Ae=function(){return n},n}function We(){var n=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return We=function(){return n},n}function Ye(){var n=Object(R.a)(["\n  margin: 0;\n  padding: 0;\n"]);return Ye=function(){return n},n}function Ge(){var n=Object(R.a)(["\n  text-transform: uppercase;\n  font-weight: 600;\n"]);return Ge=function(){return n},n}function He(){var n=Object(R.a)(["\n  list-style: none;\n  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);\n  padding: 10px;\n  min-width: 300px;\n\n  @media (min-width: 1024px) {\n    margin-left: 50px;\n  }\n"]);return He=function(){return n},n}function Ke(){var n=Object(R.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n  margin-top: 25px;\n"]);return Ke=function(){return n},n}function Le(){var n=Object(R.a)(["\n  list-style: none;\n  margin: 20px 0 0 0;\n  padding: 0;\n\n  @media (min-width: 1024px) {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n"]);return Le=function(){return n},n}function Qe(){var n=Object(R.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-top: 25px;\n"]);return Qe=function(){return n},n}function Ve(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return Ve=function(){return n},n}function Xe(){var n=Object(R.a)(["\n  max-width: 1348px;\n  margin: 0 auto;\n  padding: 20px 40px;\n"]);return Xe=function(){return n},n}var Ze=F.b.div(Xe()),nr=F.b.div(Ve()),tr=F.b.div(Qe()),er=F.b.ul(Le()),rr=F.b.h5(Ke()),ir=F.b.li(He()),cr=F.b.h3(Ge()),ar=F.b.ul(Ye()),or=F.b.li(We()),ur=F.b.p(Ae()),sr=F.b.p(Ne()),dr=F.b.div(Je()),pr=F.b.span(Te()),br=F.b.span(Be()),lr=Object(F.b)(d.b)($e());var fr=Object(s.b)((function(n){return{orders:n.orders}}),r)((function(n){var t=c.useState(!1),e=Object(C.a)(t,2),r=e[0],a=e[1],o=G().currency;return c.useEffect((function(){n.fetchOrders("http://localhost:3090/orders"),a(!0)}),[]),r?Object(i.jsx)(Ze,{children:Object(i.jsxs)(nr,{children:[Object(i.jsx)(tr,{children:"My orders history"}),Object(i.jsx)(er,{children:0===n.orders.length?Object(i.jsx)(rr,{children:"We are waiting for your first orfderr"}):n.orders[0].map((function(n,t){return Object(i.jsxs)(ir,{children:[Object(i.jsxs)(cr,{children:["Order #",t+1]}),Object(i.jsx)(ar,{children:n.items.map((function(n,t){return Object(i.jsxs)(or,{children:[Object(i.jsx)(ur,{children:n.name}),Object(i.jsxs)(sr,{children:[n.quantity," x ","USD"===o?"$":"\u20ac","USD"===o?n.price.USD:n.price.EUR]})]},t)}))}),Object(i.jsxs)(dr,{children:[Object(i.jsx)(pr,{children:"Total"}),Object(i.jsxs)(br,{children:["USD"===o?"$ ":"\u20ac ","USD"===o?n.totalPriceUSD:n.totalPriceEURO]})]})]},t+1)}))}),Object(i.jsx)(lr,{to:"/",children:"Back"})]})}):null})),jr=Object(s.b)(null,r)((function(n){return c.useEffect((function(){console.log("rendered"),n.signout((function(){n.history.push("/")})),localStorage.removeItem("cart"),n.clearCart()}),[]),null}));function xr(){var n=Object(R.a)(["\n  background: #64b171;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 14px;\n  text-transform: uppercase;\n  white-space: nowrap;\n  text-align: center;\n  padding: 10px 20px;\n\n  @media (min-width: 1024px) {\n    font-size: 18px;\n    padding: 20px 40px;\n  }\n"]);return xr=function(){return n},n}function hr(){var n=Object(R.a)(["\n  background: #fff;\n  border: 1px solid #a8a6a6;\n  border-radius: 5px;\n  color: #000;\n  text-decoration: none;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 10px 20px;\n\n  @media (min-width: 1024px) {\n    border: 2px solid #a8a6a6;\n    font-size: 18px;\n    padding: 20px 40px;\n  }\n"]);return hr=function(){return n},n}function Or(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  @media (min-width: 1024px) {\n    justify-content: space-around;\n    margin-top: 35px;\n    padding-bottom: 25px;\n  }\n"]);return Or=function(){return n},n}function mr(){var n=Object(R.a)(["\n  font-weight: 600;\n"]);return mr=function(){return n},n}function gr(){var n=Object(R.a)([""]);return gr=function(){return n},n}function vr(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  @media (min-width: 1024px) {\n    margin-top: 30px;\n  }\n"]);return vr=function(){return n},n}function yr(){var n=Object(R.a)(["\n  font-weight: 600;\n"]);return yr=function(){return n},n}function wr(){var n=Object(R.a)([""]);return wr=function(){return n},n}function Ur(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n"]);return Ur=function(){return n},n}function Sr(){var n=Object(R.a)(["\n  font-weight: bold;\n"]);return Sr=function(){return n},n}function kr(){var n=Object(R.a)(["\n  font-weight: bold;\n"]);return kr=function(){return n},n}function zr(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return zr=function(){return n},n}function Dr(){var n=Object(R.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return Dr=function(){return n},n}function Er(){var n=Object(R.a)([""]);return Er=function(){return n},n}function Pr(){var n=Object(R.a)(["\n  margin-top: 20px;\n  padding: 10px 20px;\n  @media (min-width: 1024px) {\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 25px;\n    flex-grow: 0.5;\n  }\n"]);return Pr=function(){return n},n}function Cr(){var n=Object(R.a)(["\n  margin-right: 25px;\n"]);return Cr=function(){return n},n}function Rr(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    justify-content: space-between;\n    font-size: 20px;\n  }\n"]);return Rr=function(){return n},n}function Fr(){var n=Object(R.a)(["\n  border: none;\n  background: #fff;\n  color: #000;\n  margin-top: 10px;\n"]);return Fr=function(){return n},n}function Mr(){var n=Object(R.a)(["\n  @media (min-width: 1024px) {\n    max-width: 400px;\n  }\n"]);return Mr=function(){return n},n}function Ir(){var n=Object(R.a)(["\n  @media (min-width: 1024px) {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n  }\n"]);return Ir=function(){return n},n}function qr(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return qr=function(){return n},n}function _r(){var n=Object(R.a)(["\n  font-size: 18px;\n  font-weight: 600;\n\n  margin: 20px;\n  padding-top: 20px;\n\n  @media (min-width: 1024px) {\n    font-size: 28px;\n    margin: 40px;\n    padding-top: 40px;\n  }\n"]);return _r=function(){return n},n}function $r(){var n=Object(R.a)(["\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 25px;\n"]);return $r=function(){return n},n}function Br(){var n=Object(R.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 40px 20px;\n"]);return Br=function(){return n},n}var Tr=F.b.div(Br()),Jr=F.b.div($r()),Nr=F.b.h4(_r()),Ar=F.b.div(qr()),Wr=F.b.div(Ir()),Yr=F.b.form(Mr()),Gr=F.b.fieldset(Fr()),Hr=F.b.label(Rr()),Kr=F.b.span(Cr()),Lr=F.b.div(Pr()),Qr=F.b.h4(Er()),Vr=F.b.ul(Dr()),Xr=F.b.li(zr()),Zr=F.b.span(kr()),ni=F.b.span(Sr()),ti=F.b.div(Ur()),ei=F.b.span(wr()),ri=F.b.span(yr()),ii=F.b.div(vr()),ci=F.b.span(gr()),ai=F.b.span(mr()),oi=F.b.div(Or()),ui=Object(F.b)(d.b)(hr()),si=F.b.button(xr());var di=Object(u.d)(Object(s.b)((function(n){return{cart:n.cart}}),r),Object(te.a)({form:"order"}))((function(n){var t=G().currency,e=n.handleSubmit;return Object(i.jsx)(Tr,{children:Object(i.jsxs)(Jr,{children:[Object(i.jsx)(Nr,{children:"My order"}),Object(i.jsx)(Ar,{children:Object(i.jsxs)(Wr,{children:[Object(i.jsxs)(Yr,{onSubmit:e((function(n,t,e){e.sendOrder(n,e.cart,(function(){e.history.push("/")})),localStorage.removeItem("cart"),e.clearCart()})),id:"order-form",children:[Object(i.jsx)(Gr,{children:Object(i.jsxs)(Hr,{htmlFor:"name",children:[Object(i.jsx)(Kr,{children:"Name"}),Object(i.jsx)(ne.a,{id:"name",name:"name",type:"text",component:"input",autoComplete:"none",required:!0})]})}),Object(i.jsx)(Gr,{children:Object(i.jsxs)(Hr,{htmlFor:"email",children:[Object(i.jsx)(Kr,{children:"Email"}),Object(i.jsx)(ne.a,{id:"email",name:"email",type:"email",component:"input",autoComplete:"none",required:!0})]})}),Object(i.jsx)(Gr,{children:Object(i.jsxs)(Hr,{htmlFor:"tel",children:[Object(i.jsx)(Kr,{children:"Phone"}),Object(i.jsx)(ne.a,{id:"tel",name:"tel",type:"tel",component:"input",autoComplete:"none",required:!0})]})}),Object(i.jsx)(Gr,{children:Object(i.jsxs)(Hr,{htmlFor:"address",children:[Object(i.jsx)(Kr,{children:"Address"}),Object(i.jsx)(ne.a,{id:"address",name:"address",type:"text",component:"input",autoComplete:"none",required:!0})]})})]}),Object(i.jsxs)(Lr,{children:[Object(i.jsx)(Qr,{children:"Order details"}),Object(i.jsx)(Vr,{children:n.cart.items.map((function(n){return Object(i.jsxs)(Xr,{children:[Object(i.jsx)("p",{children:n.name}),Object(i.jsxs)("p",{children:[Object(i.jsx)(ni,{children:n.quantity})," ","x"," ",Object(i.jsxs)(Zr,{children:["USD"===t?"$ ":"\u20ac ","USD"===t?n.price.USD:n.price.EUR]})]})]},n.id)}))}),Object(i.jsxs)(ti,{children:[Object(i.jsx)(ei,{children:"Delivery fee"}),Object(i.jsxs)(ri,{children:[" ","USD"===t?"$ ":"\u20ac ","USD"===t?n.cart.deliveryFee.USD:n.cart.deliveryFee.EUR]})]}),Object(i.jsxs)(ii,{children:[Object(i.jsx)(ci,{children:"Total"}),Object(i.jsxs)(ai,{children:[" ","USD"===t?"$ ":"\u20ac ","USD"===t?n.cart.totalPriceUSD:n.cart.totalPriceEURO]})]})]})]})}),Object(i.jsxs)(oi,{children:[Object(i.jsx)(ui,{to:"/",children:"Back"}),Object(i.jsx)(si,{type:"submit",form:"order-form",children:"Submit order"})]})]})})}));function pi(){var n=Object(R.a)(["\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06),\n    inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n"]);return pi=function(){return n},n}function bi(){var n=Object(R.a)(["\n\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');\n  body {\n    font-family: 'Roboto', sans-serif;\n  }\n"]);return bi=function(){return n},n}var li=Object(F.a)(bi()),fi=F.b.div(pi()),ji=function(){var n=c.useState(!1),t=Object(C.a)(n,2),e=t[0],r=t[1],a=c.useState(!1),o=Object(C.a)(a,2),u=o[0],s=o[1];return Object(i.jsxs)(K,{children:[Object(i.jsx)(li,{}),Object(i.jsxs)(fi,{children:[Object(i.jsx)(rn,{}),Object(i.jsx)(vn,{setModal:r,setBusket:s,busket:u})]}),Object(i.jsxs)(M.c,{children:[Object(i.jsx)(M.a,{path:"/cart",exact:!0,component:di}),Object(i.jsx)(M.a,{path:"/history",exact:!0,component:fr}),Object(i.jsx)(M.a,{path:"/",render:function(n){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(it,{}),Object(i.jsx)(Zt,{busket:u,setBusket:s})]})}})]}),Object(i.jsx)(M.a,{path:"/login",render:function(n){return Object(i.jsx)(ge,Object(l.a)(Object(l.a)({},n),{},{modal:e,setModal:r}))}}),Object(i.jsx)(M.a,{path:"/register",render:function(n){return Object(i.jsx)(_e,Object(l.a)(Object(l.a)({},n),{},{modal:e,setModal:r}))}}),Object(i.jsx)(M.a,{path:"/signout",exact:!0,component:jr})]})},xi=(e(265),Object(u.e)(E,{auth:{authenticated:localStorage.getItem("token")},cart:P},Object(u.a)(p.a)));xi.subscribe((function(){localStorage.setItem("cart",JSON.stringify(xi.getState().cart))}));var hi=function(){return Object(i.jsx)(ji,{})};o.a.render(Object(i.jsx)(s.a,{store:xi,children:Object(i.jsx)(d.a,{children:Object(i.jsx)(hi,{})})}),document.querySelector("#root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.bdc1bf76.chunk.js.map