var o=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(e,l,t)=>l in e?o(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,c=(o,e)=>{for(var l in e||(e={}))a.call(e,l)&&s(o,l,e[l]);if(t)for(var l of t(e))n.call(e,l)&&s(o,l,e[l]);return o},i=(o,t)=>e(o,l(t));import{r}from"./index.36995e48.js";import{b as d,A as u,B as p,a as m,p as w,c as b,o as f,g as h,D as v,E as g,h as k,w as y,t as C,G as x,H as _,d as S,i as M,J as D,k as T,K as z,e as j,L as $,j as B}from"./vendor.66ec0ba8.js";import{u as O}from"./utils.02843af4.js";const I={name:"XCheckBox",props:{disabled:Boolean},setup(o){const e=d(!1);e.value=o.disabled;const l=d(!1);return i(c({},{checkboxChange(){l.value=!l.value}}),{isTouch:l,isDisabled:e})}},P=y();w("data-v-e98c7c92");const X={class:"x_wrap"},A={class:"x_input",type:"button"},E=k("span",{class:"x_span"},"复选框",-1);b();const H=P(((o,e,l,t,a,n)=>(f(),h("div",X,[v(k("input",A,null,512),[[g,t.isDisabled]]),k("div",{class:["x_checkbox",{x_checkbox_disabled:t.isDisabled}],onClick:e[1]||(e[1]=(...e)=>o.checkboxChange&&o.checkboxChange(...e))},[k("i",{class:["x_icon iconfont icon-duihao",t.isTouch?"x_icon_in":"x_icon_out"]},null,2),E],2)]))));I.render=H,I.__scopeId="data-v-e98c7c92";var L={name:"modal",props:{modalShow:{type:Boolean,default:!0},title:{type:String,default:"提示"}},setup(o,e){const l=m({modalShow:o.modalShow}),t=p(l);return c({confirmModal:o=>{e.emit("confirmModal",o)}},t)}};const G=y();w("data-v-2cbfacf1");const J={key:0,class:"modal-backdrop"},K={class:"modal"},U={class:"modal-header"},V={class:"modal-body"},W={class:"modal-footer"};b();const q=G(((o,e,l,t,a,n)=>l.modalShow?(f(),h("div",J,[k("div",K,[k("div",U,[k("div",null,[k("h3",null,C(l.title),1)]),k("div",null,[k("span",{class:"close-img iconfont icon-baseline-close-px",onClick:e[1]||(e[1]=o=>t.confirmModal(!1))})])]),k("div",V,[x(o.$slots,"default",{},void 0,!0)]),k("div",W,[k("button",{type:"button",class:"btn-close",onClick:e[2]||(e[2]=o=>t.confirmModal(!1))},"关闭"),k("button",{type:"button",class:"btn-confirm",onClick:e[3]||(e[3]=o=>t.confirmModal(!0))},"确认")])])])):_("",!0)));L.render=q,L.__scopeId="data-v-2cbfacf1";const F={name:"Drawer",props:{drawerShow:Boolean},setup(o,e){const l=m({drawerShow:o.drawerShow});return c({close:()=>{e.emit("closeDrawer")}},p(l))}},N=y();w("data-v-a1e94824");const Q={class:"drawer"},R={class:"header"},Y=k("p",{class:"fl"},"即时聊天",-1);b();const Z=N(((o,e,l,t,a,n)=>(f(),h("div",Q,[l.drawerShow?(f(),h("div",{key:0,class:"mask-show",onClick:e[1]||(e[1]=o=>t.close())})):_("",!0),k("div",{class:["setbox",{show:l.drawerShow}]},[k("div",R,[Y,k("button",{class:"off",onClick:e[2]||(e[2]=o=>t.close())},"关闭")])],2)]))));F.render=Z,F.__scopeId="data-v-a1e94824";const oo={name:"XButton",props:{type:{type:String},size:{type:String},color:{type:String,default:"#2d8cf0"},titleColor:{type:String,default:"##17233d"},plain:Boolean,circle:Boolean},setup:(o,e)=>c({},{click(){e.emit("click")}})},eo=y();w("data-v-61c0a42b");const lo={key:0,class:"color"};b();const to=eo(((o,e,l,t,a,n)=>(f(),h("button",{class:[l.type?"ice-button--"+l.type:"","button_init",l.size?`button_init_${l.size}`:"",{"is-plain":l.plain,"is-circle":l.circle}],style:`\n            --color-tint: ${l.color};\n            --color-title: ${l.titleColor}\n        `,onClick:e[1]||(e[1]=(...e)=>o.click&&o.click(...e))},[o.$slots.default?(f(),h("span",lo,[x(o.$slots,"default",{},void 0,!0)])):_("",!0)],6))));oo.render=to,oo.__scopeId="data-v-61c0a42b";var ao=S({name:"Child",props:{},setup:()=>{const o=M("title"),e=d(0);D(e,((o,e)=>{console.log(`原值为${e}`),console.log(`新值为${o}`)})),setTimeout((()=>{e.value+=1}),1e3);const l=m({count:0});D((()=>l.count),((o,e)=>{console.log(`原值为${e}`),console.log(`新值为${o}`)})),setTimeout((()=>{l.count+=1}),1e3);const t=m({count:0,name:"zs"});return T((()=>{console.log(t.count),console.log(t.name)})),setTimeout((()=>{t.count+=1,t.name="ls"}),1e3),T((()=>{console.log("主题被修改")})),{title:o}}});const no=y()(((o,e,l,t,a,n)=>(f(),h("h1",null,C(o.title),1))));ao.render=no,ao.__scopeId="data-v-3d196d1a";var so=S({components:{Child:ao,XCheckbox:I,XModal:L,XDrawer:F,XButton:oo},name:"HelloWorld",props:{},setup:()=>{const{count:o,multiple:e,increase:l,decrease:t}=((o=1)=>{const e=d(o),l=u((()=>2*e.value));return{count:e,multiple:l,increase:o=>{e.value+=void 0!==o?o:1},decrease:o=>{e.value-=void 0!==o?o:1}}})(10),a=m({nickname:"xiaofan",age:20,content:[1,2]});setTimeout((()=>{a.age++}),1e3),D((()=>a.age),((o,e)=>{console.log("新值:",o,"老值:",e)}));const n=d(0);setTimeout((()=>{n.value++}),1e3),D(n,((o,e)=>{console.log("新值:",o,"老值:",e)}),{immediate:!0}),D([()=>a.age,n],(([o,e],[l,t])=>{console.log("新值:",o,"老值:",l),console.log("新值:",e,"老值:",t)}));const s=m({room:{id:100,attrs:{size:"140平方米",type:"三室两厅"}}}),w=D((()=>s.room),((o,e)=>{console.log("新值:",o,"老值:",e)}),{deep:!0});setTimeout((()=>{w()}),1e3);const b=d("这个是要传的值");z("title",b);return c(c(i(c(i(c({count:o,pushAxios:()=>{r.push("/axios")},multiple:e,increase:l,decrease:t},p(a)),{title:b,setTitle:()=>{b.value=Math.random().toString()}}),((o=!1,e="弹框")=>{const l=m({modalShow:o,modalTitle:e,email:"",loginSign:!1});return c({confirmModal:o=>{if(l.modalShow=!1,o)console.log(l);else{const{email:o}=l;console.log(o)}},openModal:()=>{l.modalShow=!0}},p(l))})()),{showAlert:()=>{O.alertMsg("成功"),setTimeout((()=>{O.alertLoadExec(!1)}),2e3)}}),((o=!1)=>{const e=m({drawerShow:o});return c({closeDrawer:()=>{e.drawerShow=!1},openDrawer:()=>{e.drawerShow=!0}},p(e))})()),(({type:o="default",plain:e=!1,circle:l=!1,size:t="normal",color:a="#fe4444",titleColor:n="#fff"}={})=>{const s=m({type:o,plain:e,circle:l,size:t,color:a,titleColor:n}),i={click(){O.alertMsg("click")}};return c(c({},p(s)),i)})())}});const co=y();w("data-v-6092785f");const io={class:"homePage"},ro=B("go axios"),uo=B("setTitle"),po={style:{width:"100%","box-sizing":"border-box"}},mo={key:0,class:"input-button",style:{"margin-bottom":"0px"}},wo=B("button");b();const bo=co(((o,e,l,t,a,n)=>{const s=j("el-col"),c=j("el-button"),i=j("child"),r=j("x-checkbox"),d=j("x-modal"),u=j("x-drawer"),p=j("x-button"),m=j("el-row");return f(),h(m,null,{default:co((()=>[k(s,{span:7},{default:co((()=>[k("p",null,"count: "+C(o.count),1),k("p",null,"倍数： "+C(o.multiple),1),k("div",null,[k("button",{onClick:e[1]||(e[1]=e=>o.increase())},"加1"),k("button",{onClick:e[2]||(e[2]=e=>o.decrease())},"减一")]),k("div",io,[k("p",null,"姓名： "+C(o.nickname),1),k("p",null,"年龄： "+C(o.age),1)])])),_:1}),k(s,{span:17},{default:co((()=>[k(c,{type:"primary",onClick:o.pushAxios},{default:co((()=>[ro])),_:1},8,["onClick"]),k(c,{type:"primary",onClick:o.setTitle},{default:co((()=>[uo])),_:1},8,["onClick"]),k(i),k(r),k("div",{onClick:e[3]||(e[3]=e=>o.openModal())},"打开模态框"),k(d,{onConfirmModal:o.confirmModal,modalShow:o.modalShow,title:o.modalTitle},{default:co((()=>[k("div",po,[o.loginSign?_("",!0):(f(),h("div",mo,[v(k("input",{type:"text",placeholder:"请输入您的邮箱！","onUpdate:modelValue":e[4]||(e[4]=e=>o.email=e),style:{width:"100%"}},null,512),[[$,o.email]])]))])])),_:1},8,["onConfirmModal","modalShow","title"]),k("div",{onClick:e[5]||(e[5]=e=>o.showAlert())},"alert"),k("div",{onClick:e[6]||(e[6]=e=>o.openDrawer())},"open drawer"),k(u,{drawerShow:o.drawerShow,onCloseDrawer:o.closeDrawer},null,8,["drawerShow","onCloseDrawer"]),k(p,{type:o.type,circle:o.circle,plain:o.plain,size:o.size,color:o.color,titleColor:o.titleColor,onClick:o.click},{default:co((()=>[wo])),_:1},8,["type","circle","plain","size","color","titleColor","onClick"])])),_:1})])),_:1})}));so.render=bo,so.__scopeId="data-v-6092785f";export default so;