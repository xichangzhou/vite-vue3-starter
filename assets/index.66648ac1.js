var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;import{r as s,a as r,i,d as p,b as m,p as l,c,e as u,o as d,f as h,g as _,t as E,F as O,w as f,h as v,j as b,u as g,k as T,C as j,l as w,m as A,N as I,n as S,V as L,q as P,s as V,I as y,v as R,x as D}from"./vendor.337200be.js";let k;const N={},C=function(e,t){if(!t)return e();if(void 0===k){const e=document.createElement("link").relList;k=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in N)return;N[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":k,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},x=Symbol("state"),H=()=>i(x);var K=p({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>((e,s)=>{for(var r in s||(s={}))o.call(s,r)&&a(e,r,s[r]);if(t)for(var r of t(s))n.call(s,r)&&a(e,r,s[r]);return e})({count:m(0)},H())});const W=f();l("data-v-699b4566");const B=_("h1",null,"vue",-1),q=v("add");c();const $=W(((e,t,o,n,a,s)=>{const r=u("el-button");return d(),h(O,null,[B,_("h1",null,E(e.state.counter),1),_(r,{type:"primary",onClick:e.increment},{default:W((()=>[q])),_:1},8,["onClick"])],64)}));K.render=$,K.__scopeId="data-v-699b4566";var F=p({name:"Error",setup:()=>({msg:"Error:404"})});F.render=function(e,t,o,n,a,s){return d(),h("div",null,E(e.msg),1)};var G=p({name:"Test",setup(){const e=g(),t=T();b((()=>{console.log(t.params)}));return{goBack:()=>{e.back()}}}});G.render=function(e,t,o,n,a,s){const r=u("router-view");return d(),h(O,null,[_("button",{onClick:t[1]||(t[1]=(...t)=>e.goBack&&e.goBack(...t))},"goback"),_("h2",null,"User "+E(e.$route.params.id),1),_(r)],64)};var M={TOKEN:"token",ASE:"ase",FORM:"application/x-www-form-urlencoded",JSON:"application/json; charset=utf-8",IOS:"iOS",ANDROID:"Android",WINDOWS:"Windows",PC:"PC",EN:"en",ZH:"zh-cn",DEVELOPMENT:"development",PRODUCTION:"production",HASH:"hash",HISTORY:"history",LOCALSTORAGE:"localStorage",SESSIONSTORAGE:"sessionStorage",COOKIE:"cookie"};const U=()=>j.get(M.TOKEN),z=e=>j.set(M.TOKEN,e),J=()=>j.remove(M.TOKEN),Y=[{path:"/home",name:"home",component:()=>C((()=>import("./home.4f7d36da.js")),["./assets/home.4f7d36da.js","./assets/home.7514327b.css","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css","./assets/utils.02843af4.js"]),meta:{title:"home"}},{path:"/vuex",name:"Vuex",component:K,meta:{title:"Vuex"}},{path:"/axios",name:"Axios",component:()=>C((()=>import("./axios.459598d2.js")),["./assets/axios.459598d2.js","./assets/axios.be155063.css","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"请求"}},{path:"/test",name:"Test",component:G,meta:{title:"测试"},children:[{path:"",component:()=>C((()=>import("./empty.8dd0ef75.js")),["./assets/empty.8dd0ef75.js","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{isShow:!1}},{name:"profile",path:"profile",component:()=>C((()=>import("./profile.ee6f3fab.js")),["./assets/profile.ee6f3fab.js","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"测试1",path:"/test/profile"},children:[{name:"post1",path:"post",component:()=>C((()=>import("./post.2d5221f4.js")),["./assets/post.2d5221f4.js","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"测试二wwww",path:"/test/profile/post"}}]},{name:"post",path:"post",component:()=>C((()=>import("./post.2d5221f4.js")),["./assets/post.2d5221f4.js","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"测试二"}},{name:"jsonViewer",path:"jsonViewer",component:()=>C((()=>import("./jsonViewer.2094a3e0.js")),["./assets/jsonViewer.2094a3e0.js","./assets/jsonViewer.c3bc0765.css","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"jsonViewer"}},{name:"splitpanes",path:"splitpanes",component:()=>C((()=>import("./splitpanes.f8406761.js")),["./assets/splitpanes.f8406761.js","./assets/splitpanes.4e5e959a.css","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"splitpanes"}},{name:"useTitle",path:"useTitle",component:()=>C((()=>import("./hooks.ba039bd7.js")),["./assets/hooks.ba039bd7.js","./assets/hooks.eafaeefb.css","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"useTitle"}}]}],Z=[{path:"/login",name:"Login",component:()=>C((()=>import("./login.aed3b5d6.js")),["./assets/login.aed3b5d6.js","./assets/login.d13f5b4f.css","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css","./assets/utils.02843af4.js"]),meta:{title:"Login",isShow:!1}},{path:"/",name:"Home",component:()=>C((()=>import("./homeLayout.83b651d3.js")),["./assets/homeLayout.83b651d3.js","./assets/homeLayout.b84253ac.css","./assets/vendor.337200be.js","./assets/vendor.9fbfc05e.css"]),meta:{title:"主页"},children:Y},{path:"/:catchAll(.*)*",name:"Error",component:F,meta:{isShow:!1}}],Q=w({history:A(),routes:Z,scrollBehavior:()=>({el:"#app",top:0,left:0,behavior:"smooth"})});Q.beforeEach(((e,t,o)=>{I.start();U()?"/login"===e.path?(o({path:"/"}),I.done()):"/"===e.path?(o({path:"/home"}),I.done()):o():"/login"===e.path?o():(o({path:"/login"}),I.done())})),Q.afterEach((()=>{I.done(),I.remove()}));const X={count:0};var ee=S({state:()=>X,mutations:{increment(e){e.count+=1}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}}),te=p({name:"App",setup:()=>{}});te.render=function(e,t,o,n,a,s){const r=u("router-view");return d(),h(r)};L.use(P),V(te).provide(x,(()=>{const e=r({counter:0});return{increment:()=>{e.counter+=1},state:s(e)}})()).use(Q).use(ee).use(y).use(R).use(D).use(L).mount("#app");export{J as a,M as c,U as g,Y as h,Q as r,z as s,H as u};
