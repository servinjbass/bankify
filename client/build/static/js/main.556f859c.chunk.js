(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{202:function(e,t,c){},203:function(e,t,c){},215:function(e,t){},217:function(e,t){},227:function(e,t){},229:function(e,t){},254:function(e,t){},256:function(e,t){},257:function(e,t){},262:function(e,t){},264:function(e,t){},270:function(e,t){},272:function(e,t){},291:function(e,t){},303:function(e,t){},306:function(e,t){},319:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(48),r=c.n(s),i=(c(202),c(13)),o=(c(203),c(204),c(318),c(3)),j=Object(a.createContext)({}),l=c(325),b=c(190),d=c(17),u=c(323),O=c(332),h=c(327),x=c(191),m=c(324),f=c(196),p=c(189);c.n(p).a.config();var g,v={apiKey:"AIzaSyCV1S46-jZ-Xd21HVeWr10ZlfyCi78nXAw",authDomain:"bankify-capstone.firebaseapp.com",projectId:"bankify-capstone",storageBucket:"bankify-capstone.appspot.com",messagingSenderId:"676135899184",appId:"1:676135899184:web:c096fc5caa04eea7a15df5"};var y=c(45),w=c(2),N="undefined"!==typeof window?g||(g=f.a.initializeApp(v)):null,k=Object(y.c)(N);function C(){return k}c(132);var S=C();function A(e){var t=Object(a.useState)(e),c=Object(i.a)(t,2),n=c[0],s=c[1];return{value:n,onChange:function(e){s(e.target.value)},clear:function(){return s("")}}}function W(){var e=Object(a.useContext)(j),t=(e.setUser,e.createAlert),c=A(""),n=A(""),s=A(""),r=A(""),i=function(){c.clear(),n.clear(),s.clear(),r.clear()};return Object(w.jsx)(u.a,{children:Object(w.jsxs)(O.a,{style:{maxWidth:"36rem",minWidth:"18rem"},children:[Object(w.jsx)(O.a.Header,{children:Object(w.jsx)("h2",{children:"Register Account"})}),Object(w.jsx)(O.a.Body,{className:"justify-content-center align-item-center",children:Object(w.jsxs)(h.a,{onSubmit:function(e){if(e.preventDefault(),!(s.value===r.value))return r.clear(),void t("Passwords do not match!","danger");var c={createAlert:t,resetForm:i};!function(e,t,c){var a=c.createAlert,n=c.resetForm;Object(y.b)(S,e,t).then((function(e){a("You are now registered!","success"),n()})).catch((function(e){a(e.message,"danger","Registration Failed!")}))}(n.value,s.value,c)},className:"mb-3",children:[Object(w.jsxs)(h.a.Group,{className:"mb-3",children:[Object(w.jsx)(h.a.Label,{className:"mb-3",children:"Name"}),Object(w.jsx)(x.a,{controlId:"floatingInput",label:"Account Name",className:"mb-3",children:Object(w.jsx)("input",Object(o.a)(Object(o.a)({placeholder:"Account Name ",autoComplete:"name"},c),{},{className:"form-control mb-3",required:!0}))})]}),Object(w.jsxs)(h.a.Group,{children:[Object(w.jsx)(h.a.Label,{children:"Email"}),Object(w.jsx)(x.a,{controlId:"floatingInput",label:"Email",className:"mb-3",children:Object(w.jsx)("input",Object(o.a)(Object(o.a)({type:"email",placeholder:"Email",autoComplete:"email",className:"form-control mb-3"},n),{},{required:!0}))})]}),Object(w.jsxs)(h.a.Group,{children:[Object(w.jsx)(h.a.Label,{children:"Password"}),Object(w.jsx)(x.a,{controlId:"floatingPassword",label:"New Password",className:"mb-3",children:Object(w.jsx)("input",Object(o.a)(Object(o.a)({type:"password",placeholder:"New Password",autoComplete:"new-password"},s),{},{className:"form-control mb-3",required:!0}))}),Object(w.jsx)(x.a,{controlId:"floatingPassword",label:"Confirm Password",className:"mb-3",children:Object(w.jsx)("input",Object(o.a)(Object(o.a)({type:"password",placeholder:"Confirm Password",autoComplete:"new-password"},r),{},{className:"form-control mb-3",required:!0}))})]}),Object(w.jsx)(m.a,{type:"submit",children:"Register"})]})})]})})}var I=c(330);function B(){var e=Object(a.useContext)(j),t=(e.setUser,e.createAlert),c=A(""),n=A(""),s=Object(a.useState)(!1),r=Object(i.a)(s,2),l=r[0];r[1];return Object(w.jsx)(u.a,{children:Object(w.jsxs)(O.a,{style:{maxWidth:"36rem",minWidth:"18rem"},children:[Object(w.jsx)(O.a.Header,{children:Object(w.jsx)("h2",{children:"Login"})}),Object(w.jsx)("br",{}),Object(w.jsxs)(O.a.Body,{children:[l&&Object(w.jsx)(d.a,{to:"/dashboard"}),Object(w.jsx)(O.a.Title,{children:"Login Methods"}),Object(w.jsxs)(I.a,{children:[Object(w.jsxs)(I.a.Item,{eventKey:"0",children:[Object(w.jsx)(I.a.Header,{children:"Email and Password"}),Object(w.jsxs)(I.a.Body,{children:[Object(w.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),function(e,t,c){Object(y.e)(S,e,t).then((function(e){c("Welcome back to Bankify","success","Successful Login!")})).catch((function(e){return c(e.message,"danger")}))}(c.value,n.value,t)},className:"mb-3",children:[Object(w.jsx)(h.a.Group,{children:Object(w.jsx)(x.a,{controlId:"floatingInput",label:"Email",className:"mb-3",children:Object(w.jsx)("input",Object(o.a)(Object(o.a)({type:"email",placeholder:"Email",autoComplete:"email",className:"form-control mb-3"},c),{},{required:!0}))})}),Object(w.jsx)("br",{}),Object(w.jsx)(h.a.Group,{children:Object(w.jsx)(x.a,{controlId:"floatingPassword",label:"Password",className:"mb-3",children:Object(w.jsx)("input",Object(o.a)(Object(o.a)({type:"password",placeholder:"Password",autoComplete:"current-password"},n),{},{className:"form-control mb-3",required:!0}))})}),Object(w.jsx)(m.a,{type:"submit",children:"Login"})]}),Object(w.jsx)(O.a.Footer,{})]})]}),Object(w.jsx)(I.a.Button,{onClick:function(e){e.preventDefault(),function(e){var t=new y.a;t.addScope("profile"),t.addScope("email"),Object(y.f)(S,t).then((function(t){e("Welcome back to Bankify","success","Successful Login!")})).catch((function(t){return e(t.message,"danger")}))}(t)},children:"Google"})]})]}),Object(w.jsx)(O.a.Footer,{})]})})}var P=c(1),L=c.n(P),D=c(5),T=c(331);function F(){return Object(a.useContext)(j).user}function H(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=(t[1],Object(a.useState)(!1)),s=Object(i.a)(n,2),r=s[0],o=s[1],j=Object(a.useState)(!1),d=Object(i.a)(j,2),x=(d[0],d[1],A(),A(),Object(a.useRef)(),Object(a.useRef)(),F()),f=function(){return o(!1)};x.getIdToken().then((function(e){Object(D.a)(L.a.mark((function t(){var c,a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/auth",{method:"GET",headers:{Authorization:e}});case 2:return c=t.sent,t.next=5,c.text();case 5:a=t.sent,console.log(a);case 7:case"end":return t.stop()}}),t)})))()})).catch((function(e){console.log(e)}));var p=x.displayName,g=x.photoURL;fetch(g,{method:"GET",redirect:"follow"}).catch((function(){g="https://ui-avatars.com/api/?name=".concat(p)}));var v=function(){return Object(w.jsx)("img",{src:g,className:"avatar-img",crossOrigin:!0})},y=function(){return Object(w.jsxs)(T.a,{show:r,onHide:f,backdrop:"static",children:[Object(w.jsx)(T.a.Header,{closeButton:!0,children:Object(w.jsx)(T.a.Title,{children:"Deposit heading"})}),Object(w.jsx)(T.a.Body,{children:"Woohoo, you're reading this text in a modal!"}),Object(w.jsxs)(T.a.Footer,{children:[Object(w.jsx)(m.a,{variant:"secondary",onClick:f,children:"Close"}),Object(w.jsx)(m.a,{variant:"primary",onClick:f,children:"Save Changes"})]})]})};return Object(w.jsxs)(u.a,{children:[Object(w.jsxs)(O.a,{style:{maxWidth:"36rem",minWidth:"18rem"},children:[Object(w.jsx)(O.a.Header,{children:Object(w.jsxs)(l.a,{className:"align-items-center",children:[Object(w.jsx)(b.a,{children:Object(w.jsx)("h2",{children:"Dashboard"})}),Object(w.jsx)(b.a,{sm:"3",className:"align-item-end",children:Object(w.jsx)(v,{})})]})}),Object(w.jsxs)(O.a.Body,{className:"justify-content-center align-item-center",children:[Object(w.jsx)(O.a.Text,{children:"Hello ".concat(p)}),Object(w.jsx)(O.a.Title,{children:"Balance"}),Object(w.jsx)("br",{}),console.log(x),Object(w.jsx)(h.a,{children:Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("span",{className:"input-group-text",children:"$"}),Object(w.jsx)("span",{className:"form-control","aria-label":"Amount",children:"".concat(c,".00")}),Object(w.jsx)(m.a,{variant:"outline-primary",id:"deposit",onClick:function(){return o(!0)},children:"Deposit"}),Object(w.jsx)(m.a,{variant:"outline-primary",id:"withdraw",children:"Withdraw"})]})}),Object(w.jsx)(O.a.Title,{children:"Deposit"}),Object(w.jsx)(O.a.Title,{children:"Withdraw"})]})]}),Object(w.jsx)(y,{})]})}var E=c(31);function G(e){e.user;return Object(w.jsx)(O.a,{style:{maxWidth:"36rem",minWidth:"18rem"},children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(O.a.Header,{children:Object(w.jsx)("h2",{children:"Welcome to Bankify"})}),Object(w.jsxs)(O.a.Body,{children:[Object(w.jsxs)(O.a.Text,{children:[Object(w.jsx)("p",{children:"Bankify is the banking solution for you! With local branches across the United States, we serve our customers with services like: withdraw, deposit, balances, and hack the system."}),Object(w.jsx)("p",{children:"While not FDIC insured, client-side Firebase Authentication does keep you passwords safe. Not bad ehh?"})]}),Object(w.jsx)(E.b,{to:"/register",children:Object(w.jsx)(m.a,{type:"link",children:"Register Now"})}),"      ",Object(w.jsx)(E.b,{to:"/login",children:Object(w.jsx)(m.a,{type:"link",children:"Login"})})]})]})})}function R(){return Object(w.jsx)("div",{children:"All Data"})}function U(){var e=Object(a.useContext)(j),t=e.user;e.createAlert;return Object(w.jsx)(d.d,{children:Object(w.jsx)(l.a,{className:"mx-auto",style:{maxWidth:"100%"},children:Object(w.jsxs)(b.a,{children:[Object(w.jsx)(d.b,{exact:!0,path:"/register",children:t?Object(w.jsx)(d.a,{to:"/dashboard"}):Object(w.jsx)(W,{})}),Object(w.jsx)(d.b,{exact:!0,path:"/login",children:t?Object(w.jsx)(d.a,{to:"/dashboard"}):Object(w.jsx)(B,{})}),Object(w.jsx)(d.b,{exact:!0,path:"/dashboard",children:t?Object(w.jsx)(H,{}):Object(w.jsx)(d.a,{to:"/"})}),Object(w.jsx)(d.b,{exact:!0,path:"/alldata",children:Object(w.jsx)(R,{})}),Object(w.jsx)(d.b,{exact:!0,path:"/",children:t?Object(w.jsx)(H,{}):Object(w.jsx)(G,{})})]})})})}var q=c(328),z=c(329);function J(){return Object(w.jsx)(q.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark",sticky:!0,children:Object(w.jsxs)(u.a,{className:"justify-content-space-between",children:[Object(w.jsx)(E.b,{to:"/",className:"navbar-brand nav-link",children:"Bankify"}),Object(w.jsx)(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsx)(q.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(w.jsx)(z.a,{children:Object(w.jsx)(K,{})})})]})})}function K(){var e=Object(a.useContext)(j).createAlert,t=function(){return Object(w.jsx)(E.b,{to:"/alldata",className:"nav-link",children:"All Data"})},c=F()?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(E.b,{to:"/dashboard",className:"nav-link",children:"Dashboard"}),Object(w.jsx)(t,{}),Object(w.jsx)(E.b,{to:"/",className:"nav-link",onClick:function(){return function(e){Object(y.g)(S).then((function(){e?e("Come back soon!","secondary"):console.log("Successful Logout")})).catch((function(t){e&&e(t.message,"danger")}))}(e)},children:"Logout"})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(E.b,{to:"/login",className:"nav-link",children:"Login"}),Object(w.jsx)(E.b,{to:"/register",className:"nav-link",children:"Register"}),Object(w.jsx)(t,{})]});return c}var M=c(326);function V(){var e=function(){var e=Object(a.useContext)(j);return{msg:e.msg,type:e.type,heading:e.heading,reset:e.reset}}(),t=e.msg,c=e.type,n=e.heading,s=e.reset;return t?(setTimeout(s,4e3),Object(w.jsxs)(M.a,{variant:c,onClose:s,dismissible:!0,children:[n&&Object(w.jsx)(M.a.Heading,{children:n}),Object(w.jsx)("p",{children:t})]})):null}function X(){var e=Object(a.useContext)(j),t=e.user,c=(e.setUser,e.alertProps);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(J,{}),Object(w.jsx)(V,Object(o.a)({},c)),Object(w.jsx)(U,{user:t})]})}var Z=Object(a.createContext)();function Y(e){var t=Object(a.useState)((Object(y.d)(S,(function(e){return e}))(),null)),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(w.jsx)(Z.Provider,{value:{user:n,setUser:s},children:e.children})}function $(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),u=d[0],O=d[1],h=Object(a.useState)("danger"),x=Object(i.a)(h,2),m=x[0],f=x[1],p=C();Object(y.d)(p,(function(e){n(e)}));var g={msg:o,type:m,heading:u,reset:function(){l(""),f("danger"),O("")}};return Object(w.jsx)(Y,{children:Object(w.jsx)(j.Provider,{value:{user:c,setUser:n,createAlert:function(e,t,c){l(e),f(t),O(c)},alertProps:g},children:Object(w.jsx)(E.a,{children:Object(w.jsx)(X,{})})})})}r.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)($,{})}),document.getElementById("root"))}},[[319,1,2]]]);
//# sourceMappingURL=main.556f859c.chunk.js.map