(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);b&&b(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},s={app:0},i=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a13a13a0","chunk-2b09b1b8":"09705828"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-2b09b1b8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2b09b1b8":"771a8a88"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var l=i[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===s))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===a||d===s)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],b.parentNode.removeChild(b),n(i)},b.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}s[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1454:function(e,t,n){},"216c":function(e,t,n){"use strict";var a=n("7a23"),o=Object(a["A"])("data-v-6b3e66be");Object(a["q"])("data-v-6b3e66be");var s={id:"nav",class:"fs-3 "},i=Object(a["d"])("Home"),r=Object(a["d"])(" | "),c=Object(a["d"])("About");Object(a["o"])();var l=o((function(e,t,n,l,d,u){var b=Object(a["t"])("router-link");return Object(a["n"])(),Object(a["c"])("div",s,[Object(a["e"])(b,{class:"",to:"/"},{default:o((function(){return[i]})),_:1}),r,Object(a["e"])(b,{class:"",to:"/about"},{default:o((function(){return[c]})),_:1})])})),d={name:"Nav"};n("4b19");d.render=l,d.__scopeId="data-v-6b3e66be";t["a"]=d},"26f8":function(e,t,n){"use strict";n("dcb0")},"4b19":function(e,t,n){"use strict";n("4ce9")},"4ce9":function(e,t,n){},"50f8":function(e,t,n){"use strict";n("5d78")},"51eb":function(e,t,n){"use strict";n("f021")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(e,t,n,o,s,i){var r=Object(a["t"])("router-view");return Object(a["n"])(),Object(a["c"])("div",null,[Object(a["e"])(r)])}var s={name:"App",components:{}};n("fb67");s.render=o;var i=s,r=(n("ab8b"),n("f507")),c=n.n(r),l=(n("d3b7"),n("6c02"));function d(e,t,n,o,s,i){var r=this,c=Object(a["t"])("Nav"),l=Object(a["t"])("Header"),d=Object(a["t"])("SignIn"),u=Object(a["t"])("SignUp");return Object(a["n"])(),Object(a["c"])("div",null,[Object(a["e"])(c),Object(a["e"])(l,{onShowSignUpModal:t[1]||(t[1]=function(e){return i.showModal(r.signUp_modal)}),onShowSignInModal:t[2]||(t[2]=function(e){return i.showModal(r.signIn_modal)}),onInit:i.headerInit},null,8,["onInit"]),Object(a["e"])(d,{ref:"SignIn",onSignIn:i.signIn,onInit:i.signInInit},null,8,["onSignIn","onInit"]),Object(a["e"])(u,{ref:"SignUp",onSignUp:i.signUp,onInit:i.signUpInit},null,8,["onSignUp","onInit"])])}var u=Object(a["A"])("data-v-48502038");Object(a["q"])("data-v-48502038");var b={class:"container  h-75 "},p={class:"row justify-content-end"},f={class:"col-3",style:{"z-index":"99976"}},m={class:"toast fade",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},g=Object(a["e"])("div",{class:"toast-header"},[Object(a["e"])("strong",{class:"me-auto"},"LoginSystem"),Object(a["e"])("small",null,"just now"),Object(a["e"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),h={class:"toast-body",ref:"toast_body"},j={class:"row align-items-center h-75"},v={class:"col"},O=Object(a["e"])("h1",{class:"text-center"},"Welcome!",-1),w=Object(a["e"])("p",{class:"lead text-center"},"a simple login system using node.js+express.js+mangodb+passport.js",-1),y={class:"nav justify-content-center fs-4"},I={class:"nav-item  "},S={class:"nav-item"};Object(a["o"])();var _=u((function(e,t,n,o,s,i){return Object(a["n"])(),Object(a["c"])("div",null,[Object(a["e"])("div",b,[Object(a["e"])("div",p,[Object(a["e"])("div",f,[Object(a["e"])("div",m,[g,Object(a["e"])("div",h,null,512)],512)])]),Object(a["e"])("div",j,[Object(a["e"])("div",v,[O,w,Object(a["e"])("ul",y,[Object(a["e"])("li",I,[Object(a["e"])("a",{class:"nav-link",onClick:t[1]||(t[1]=function(){return i.showSingInModal&&i.showSingInModal.apply(i,arguments)})}," Sign in")]),Object(a["e"])("li",S,[Object(a["e"])("a",{class:"nav-link",onClick:t[2]||(t[2]=function(){return i.showSignUpModal&&i.showSignUpModal.apply(i,arguments)})}," Sign up ")])])])])])])})),U={name:"Header",methods:{showSignUpModal:function(){this.$emit("showSignUpModal")},showSingInModal:function(){this.$emit("showSignInModal")}},mounted:function(){this.$emit("init",{toast:this.$refs.toast,toast_body:this.$refs.toast_body})}};n("51eb");U.render=_,U.__scopeId="data-v-48502038";var x=U,M=Object(a["A"])("data-v-07cd305e");Object(a["q"])("data-v-07cd305e");var k={ref:"signin",class:"modal fade",id:"signIn_modal",tabindex:"-1","aria-labelledby":"signIn_modalLabel","aria-hidden":"true"},P={class:"modal-dialog"},T={class:"modal-content"},q=Object(a["e"])("div",{class:"modal-header"},[Object(a["e"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A=Object(a["e"])("div",{class:"text-center"},[Object(a["e"])("h2",null,"Please sign in")],-1),C={class:"modal-body"},E={class:"container"},L={class:"row justify-content-center"},$={class:"col-8"},H={class:"input-group input-group-lg "},N={class:"col-8"},z={class:"input-group mb-3 input-group-lg"},D=Object(a["e"])("div",{class:"text-center mb-4"},[Object(a["e"])("button",{type:"submit",class:"w-50 btn btn-primary btn-lg"},[Object(a["e"])("span",{class:"visually-hidden spinner-grow spinner-grow-md",role:"status","aria-hidden":"true"}),Object(a["e"])("span",{class:"visually-hidden"},"Loading..."),Object(a["e"])("span",{class:""},"Sign In")])],-1);Object(a["o"])();var V=M((function(e,t,n,o,s,i){return Object(a["n"])(),Object(a["c"])("div",k,[Object(a["e"])("div",P,[Object(a["e"])("div",T,[q,A,Object(a["e"])("div",C,[Object(a["e"])("form",{onSubmit:t[3]||(t[3]=function(){return i.signin&&i.signin.apply(i,arguments)})},[Object(a["e"])("div",E,[Object(a["e"])("div",L,[Object(a["e"])("div",$,[Object(a["e"])("div",H,[Object(a["z"])(Object(a["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.email=e}),type:"email",class:"form-control",placeholder:"Email address","aria-label":"username",required:"",minlength:"6"},null,512),[[a["x"],s.email]])])]),Object(a["e"])("div",N,[Object(a["e"])("div",z,[Object(a["z"])(Object(a["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.password=e}),type:"password",class:"form-control",placeholder:"Password","aria-label":"password",required:"",minlength:"6"},null,512),[[a["x"],s.password]])])])])]),D],32)])])])],512)})),B={name:"SignIn",data:function(){return{email:"",password:""}},methods:{signin:function(e){e.preventDefault();var t={email:this.email,password:this.password};this.$emit("signIn",t)}},mounted:function(){this.$emit("init",this.$refs.signin)}};n("26f8");B.render=V,B.__scopeId="data-v-07cd305e";var J=B,R=Object(a["A"])("data-v-33695ecd");Object(a["q"])("data-v-33695ecd");var F={ref:"signUp_modal",class:"modal fade",id:"signUp_modal",tabindex:"-1","aria-labelledby":"signUp_modalLabel","aria-hidden":"true"},K={class:"modal-dialog"},W={class:"modal-content"},G=Object(a["e"])("div",{class:"modal-header"},[Object(a["e"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q=Object(a["e"])("div",{class:"text-center"},[Object(a["e"])("h2",null,"Please sign up")],-1),X={class:"modal-body"},Y={class:"container"},Z={class:"row justify-content-center"},ee={class:"col-8"},te={class:"input-group mb-3 input-group-lg "},ne={class:"col-8"},ae={class:"input-group  input-group-lg"},oe={class:"col-8"},se={class:"input-group mb-3 input-group-lg"},ie=Object(a["e"])("div",{class:"text-center mb-4"},[Object(a["e"])("button",{type:"submit",class:"w-50 btn btn-primary btn-lg"},[Object(a["e"])("span",{class:"visually-hidden spinner-grow spinner-grow-md",role:"status","aria-hidden":"true"}),Object(a["e"])("span",{class:"visually-hidden"},"Loading..."),Object(a["e"])("span",{class:""},"Sign up")])],-1);Object(a["o"])();var re=R((function(e,t,n,o,s,i){return Object(a["n"])(),Object(a["c"])("div",F,[Object(a["e"])("div",K,[Object(a["e"])("div",W,[G,Q,Object(a["e"])("div",X,[Object(a["e"])("form",{onSubmit:t[4]||(t[4]=function(){return i.signUp&&i.signUp.apply(i,arguments)})},[Object(a["e"])("div",Y,[Object(a["e"])("div",Z,[Object(a["e"])("div",ee,[Object(a["e"])("div",te,[Object(a["z"])(Object(a["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.email=e}),type:"email",class:"form-control",placeholder:"Email","aria-label":"username",required:""},null,512),[[a["x"],s.email]])])]),Object(a["e"])("div",ne,[Object(a["e"])("div",ae,[Object(a["z"])(Object(a["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.password=e}),type:"password",class:"form-control",placeholder:"Password","aria-label":"password",required:"",minlength:"6"},null,512),[[a["x"],s.password]])])]),Object(a["e"])("div",oe,[Object(a["e"])("div",se,[Object(a["z"])(Object(a["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.confirmedPassword=e}),type:"password",class:"form-control",placeholder:"Confirm Password","aria-label":"password",minlength:"6",required:""},null,512),[[a["x"],s.confirmedPassword]])])])])]),ie],32)])])])],512)})),ce={name:"SignUp",data:function(){return{email:"154286411@qq.com",password:"",confirmedPassword:""}},methods:{signUp:function(e){e.preventDefault();var t={email:this.email,password:this.password,confirmedPassword:this.confirmedPassword};this.$emit("signUp",t)}},mounted:function(){this.$emit("init",this.$refs.signUp_modal)}};n("50f8");ce.render=re,ce.__scopeId="data-v-33695ecd";var le=ce,de=n("216c"),ue=n("bc3a"),be=n.n(ue),pe={userRouter:"/user"},fe=pe,me={name:"Home",components:{Header:x,SignIn:J,SignUp:le,Nav:de["a"]},data:function(){return{signUp_modal:"",signIn_modal:"",toast:"",toast_body:""}},methods:{signUp:function(e){var t=this;console.log(e),be.a.post(fe.userRouter+"/signup",e).then((function(e){return e.data})).then((function(e){-1!==e.code?(t.hideModal(t.signUp_modal),t.showToast(e.message||e.errors[0].msg||""),t.showModal(t.signIn_modal)):t.showToast(e.message||e.errors[0].msg||"")})).catch((function(e){console.log(e)}))},signIn:function(e){var t=this;console.log(e),be.a.post("/user/signin",e).then((function(e){return e.data})).then((function(e){console.log(e),-1===e.code?t.showToast(e.message||e.message.message||""):(document.cookie="sessionID="+e.sessionID,window.location.href="/index")})).catch((function(e){console.log(e.response),-1===e.response.data.code?t.showToast(e.response.data.message.message||e.response.data.message||""):window.location.href="/index"}))},showModal:function(e){e.show()},hideModal:function(e){e.hide()},headerInit:function(e){var t=e.toast,n=e.toast_body;this.toast=new c.a.Toast(t,{delay:3e3}),this.toast_body=n},showToast:function(e){e&&(this.toast_body.innerHTML=e),this.toast.show()},hideToast:function(){this.toast.hide()},signUpInit:function(e){this.signUp_modal=new c.a.Modal(e,{keyboard:!1,backdrop:"static"})},signInInit:function(e){this.signIn_modal=new c.a.Modal(e,{keyboard:!1,backdrop:"static"})}},mounted:function(){be.a.get("/user/isSignin").then((function(e){return e.data})).then((function(e){e.isSignin&&(window.location.href="/index")}))}};me.render=d;var ge=me,he=[{path:"/",name:"Home",component:ge},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/index",name:"Index",component:function(){return n.e("chunk-2b09b1b8").then(n.bind(null,"d504"))}}],je=Object(l["a"])({history:Object(l["b"])("/"),routes:he}),ve=je;Object(a["b"])(i).use(ve).mount("#app")},"5d78":function(e,t,n){},dcb0:function(e,t,n){},f021:function(e,t,n){},fb67:function(e,t,n){"use strict";n("1454")}});
//# sourceMappingURL=app.59f0a782.js.map