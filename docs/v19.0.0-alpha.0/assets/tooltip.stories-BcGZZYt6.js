import{r as k,e as r}from"./index-E9JSHJbc.js";import{O as et}from"./OdsButton-Do9GSXD9.js";import{O as U,a as J}from"./icon-name-BXMPYDqj.js";import{j as y}from"./jsx-runtime-BSm7YJ_y.js";import{u as je,g as tt,c as ot,a as ue,b as nt,d as rt,e as it,n as st,s as lt,f as at,P as ct,O as Be,h as pt,i as ge}from"./portal-PiAqHQ5I.js";import{f as dt,x as M,y as W,z as ut,q,v as le,k as Fe,A as gt,B as mt,C as ft,h as Ot,D as Tt,E as ee,F as yt,G as vt}from"./index-BDDKzIGc.js";import{o as ht,C as R}from"./controls-CQ2mnOwv.js";const[wt,Y]=dt({name:"TooltipContext",hookName:"useTooltipContext",providerName:"<TooltipProvider />"}),xe=k.forwardRef((e,t)=>{const o=Y(),n=M(o.getArrowProps(),e);return y.jsx(W.div,{...n,ref:t})});xe.displayName="TooltipArrow";const Ge=k.forwardRef((e,t)=>{const o=Y(),n=M(o.getArrowTipProps(),e);return y.jsx(W.div,{...n,ref:t})});Ge.displayName="TooltipArrowTip";const Ke=k.forwardRef((e,t)=>{const o=Y(),n=je(),i=M(o.getContentProps(),n.getPresenceProps(),e);return n.unmounted?null:y.jsx(W.div,{...i,ref:ut(n.ref,t)})});Ke.displayName="TooltipContent";const qe=k.forwardRef((e,t)=>{const o=Y(),n=M(o.getPositionerProps(),e);return je().unmounted?null:y.jsx(W.div,{...n,ref:t})});qe.displayName="TooltipPositioner";function Et(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function Pt(e){return!(e.metaKey||!gt()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}var Ct=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function bt(e,t,o){const n=o?Fe(o):null,i=q(n);return e=e||n instanceof i.HTMLInputElement&&!Ct.has(n==null?void 0:n.type)||n instanceof i.HTMLTextAreaElement||n instanceof i.HTMLElement&&n.isContentEditable,!(e&&t==="keyboard"&&o instanceof i.KeyboardEvent&&!Reflect.has(kt,o.key))}var S=null,oe=new Set,K=new Map,L=!1,ne=!1,kt={Tab:!0,Escape:!0};function X(e,t){for(let o of oe)o(e,t)}function H(e){L=!0,Pt(e)&&(S="keyboard",X("keyboard",e))}function w(e){S="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(L=!0,X("pointer",e))}function We(e){Et(e)&&(L=!0,S="virtual")}function Ye(e){const t=Fe(e);t===q(t)||t===le(t)||(!L&&!ne&&(S="virtual",X("virtual",e)),L=!1,ne=!1)}function ze(){L=!1,ne=!0}function _t(e){if(typeof window>"u"||K.get(q(e)))return;const t=q(e),o=le(e);let n=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){S="virtual",X("virtual",null),L=!0,n.apply(this,arguments)},o.addEventListener("keydown",H,!0),o.addEventListener("keyup",H,!0),o.addEventListener("click",We,!0),t.addEventListener("focus",Ye,!0),t.addEventListener("blur",ze,!1),typeof t.PointerEvent<"u"?(o.addEventListener("pointerdown",w,!0),o.addEventListener("pointermove",w,!0),o.addEventListener("pointerup",w,!0)):(o.addEventListener("mousedown",w,!0),o.addEventListener("mousemove",w,!0),o.addEventListener("mouseup",w,!0)),t.addEventListener("beforeunload",()=>{Lt(e)},{once:!0}),K.set(t,{focus:n})}var Lt=(e,t)=>{const o=q(e),n=le(e);K.has(o)&&(o.HTMLElement.prototype.focus=K.get(o).focus,n.removeEventListener("keydown",H,!0),n.removeEventListener("keyup",H,!0),n.removeEventListener("click",We,!0),o.removeEventListener("focus",Ye,!0),o.removeEventListener("blur",ze,!1),typeof o.PointerEvent<"u"?(n.removeEventListener("pointerdown",w,!0),n.removeEventListener("pointermove",w,!0),n.removeEventListener("pointerup",w,!0)):(n.removeEventListener("mousedown",w,!0),n.removeEventListener("mousemove",w,!0),n.removeEventListener("mouseup",w,!0)),K.delete(o))};function re(){return S==="keyboard"}function St(e={}){const{isTextInput:t,autoFocus:o,onChange:n,root:i}=e;_t(i),n==null||n({isFocusVisible:o||re(),modality:S});const u=(p,c)=>{bt(!!t,p,c)&&(n==null||n({isFocusVisible:re(),modality:p}))};return oe.add(u),()=>{oe.delete(u)}}const At=Symbol(),me=Object.getPrototypeOf,ie=new WeakMap,Dt=e=>e&&(ie.has(e)?ie.get(e):me(e)===Object.prototype||me(e)===Array.prototype),Mt=e=>Dt(e)&&e[At]||null,fe=(e,t=!0)=>{ie.set(e,t)};function It(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global}function Qe(e,t){const o=It();return o?(o[e]||(o[e]=t()),o[e]):t()}var $=Qe("__zag__refSet",()=>new WeakSet),Rt=e=>typeof e=="object"&&e!==null&&"$$typeof"in e&&"props"in e,Nt=e=>typeof e=="object"&&e!==null&&"__v_isVNode"in e,Vt=e=>typeof e=="object"&&e!==null&&"nodeType"in e&&typeof e.nodeName=="string",jt=e=>Rt(e)||Nt(e)||Vt(e),se=e=>e!==null&&typeof e=="object",Oe=e=>se(e)&&!$.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!jt(e)&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)&&!(e instanceof Promise),_=Qe("__zag__proxyStateMap",()=>new WeakMap),Bt=(e=Object.is,t=(c,E)=>new Proxy(c,E),o=new WeakMap,n=(c,E)=>{const T=o.get(c);if((T==null?void 0:T[0])===E)return T[1];const g=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return fe(g,!0),o.set(c,[E,g]),Reflect.ownKeys(c).forEach(P=>{const h=Reflect.get(c,P);$.has(h)?(fe(h,!1),g[P]=h):_.has(h)?g[P]=Gt(h):g[P]=h}),Object.freeze(g)},i=new WeakMap,u=[1,1],p=c=>{if(!se(c))throw new Error("object required");const E=i.get(c);if(E)return E;let T=u[0];const g=new Set,P=(a,s=++u[0])=>{T!==s&&(T=s,g.forEach(l=>l(a,s)))};let h=u[1];const C=(a=++u[1])=>(h!==a&&!g.size&&(h=a,d.forEach(([s])=>{const l=s[1](a);l>T&&(T=l)})),T),A=a=>(s,l)=>{const v=[...s];v[1]=[a,...v[1]],P(v,l)},d=new Map,ae=(a,s)=>{if(g.size){const l=s[3](A(a));d.set(a,[s,l])}else d.set(a,[s])},ce=a=>{var l;const s=d.get(a);s&&(d.delete(a),(l=s[1])==null||l.call(s))},Xe=a=>(g.add(a),g.size===1&&d.forEach(([l,v],D)=>{const I=l[3](A(D));d.set(D,[l,I])}),()=>{g.delete(a),g.size===0&&d.forEach(([l,v],D)=>{v&&(v(),d.set(D,[l]))})}),Z=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),z=t(Z,{deleteProperty(a,s){const l=Reflect.get(a,s);ce(s);const v=Reflect.deleteProperty(a,s);return v&&P(["delete",[s],l]),v},set(a,s,l,v){var pe;const D=Reflect.has(a,s),I=Reflect.get(a,s,v);if(D&&(e(I,l)||i.has(l)&&e(I,i.get(l))))return!0;ce(s),se(l)&&(l=Mt(l)||l);let Q=l;if(!((pe=Object.getOwnPropertyDescriptor(a,s))!=null&&pe.set)){!_.has(l)&&Oe(l)&&(Q=$e(l));const de=!$.has(Q)&&_.get(Q);de&&ae(s,de)}return Reflect.set(a,s,Q,v),P(["set",[s],l,I]),!0}});i.set(c,z);const Ze=[Z,C,n,Xe];return _.set(z,Ze),Reflect.ownKeys(c).forEach(a=>{const s=Object.getOwnPropertyDescriptor(c,a);s.get||s.set?Object.defineProperty(Z,a,s):z[a]=c[a]}),z})=>[p,_,$,e,t,Oe,o,n,i,u],[Ft]=Bt();function $e(e={}){return Ft(e)}function xt(e,t,o){const n=_.get(e);let i;const u=[],p=n[3];let c=!1;const T=p(g=>{u.push(g),i||(i=Promise.resolve().then(()=>{i=void 0,c&&t(u.splice(0))}))});return c=!0,()=>{c=!1,T()}}function Gt(e){const t=_.get(e),[o,n,i]=t;return i(o,n())}var Kt=mt("tooltip").parts("trigger","arrow","arrowTip","positioner","content"),N=Kt.build(),He=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`tooltip:${e.id}:trigger`},qt=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`tooltip:${e.id}:content`},Wt=e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`tooltip:${e.id}:arrow`},Ue=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`tooltip:${e.id}:popper`},te=e=>e.getById(He(e)),Te=e=>e.getById(Ue(e)),b=$e({id:null});function Yt(e,t){const{state:o,context:n,send:i,scope:u,prop:p,event:c}=e,E=p("id"),T=!!p("aria-label"),g=o.matches("open","closing"),P=He(u),h=qt(u),C=p("disabled"),A=tt({...p("positioning"),placement:n.get("currentPlacement")});return{open:g,setOpen(d){o.matches("open","closing")!==d&&i({type:d?"open":"close"})},reposition(d={}){i({type:"positioning.set",options:d})},getTriggerProps(){return t.button({...N.trigger.attrs,id:P,dir:p("dir"),"data-expanded":ft(g),"data-state":g?"open":"closed","aria-describedby":g?h:void 0,onClick(d){d.defaultPrevented||C||p("closeOnClick")&&i({type:"close",src:"trigger.click"})},onFocus(d){queueMicrotask(()=>{d.defaultPrevented||C||c.src!=="trigger.pointerdown"&&re()&&i({type:"open",src:"trigger.focus"})})},onBlur(d){d.defaultPrevented||C||E===b.id&&i({type:"close",src:"trigger.blur"})},onPointerDown(d){d.defaultPrevented||C||p("closeOnPointerDown")&&E===b.id&&i({type:"close",src:"trigger.pointerdown"})},onPointerMove(d){d.defaultPrevented||C||d.pointerType!=="touch"&&i({type:"pointer.move"})},onPointerLeave(){C||i({type:"pointer.leave"})},onPointerCancel(){C||i({type:"pointer.leave"})}})},getArrowProps(){return t.element({id:Wt(u),...N.arrow.attrs,dir:p("dir"),style:A.arrow})},getArrowTipProps(){return t.element({...N.arrowTip.attrs,dir:p("dir"),style:A.arrowTip})},getPositionerProps(){return t.element({id:Ue(u),...N.positioner.attrs,dir:p("dir"),style:A.floating})},getContentProps(){return t.element({...N.content.attrs,dir:p("dir"),hidden:!g,"data-state":g?"open":"closed",role:T?void 0:"tooltip",id:T?void 0:h,"data-placement":n.get("currentPlacement"),onPointerEnter(){i({type:"content.pointer.move"})},onPointerLeave(){i({type:"content.pointer.leave"})},style:{pointerEvents:p("interactive")?"auto":"none"}})}}}var{and:zt,not:ye}=Tt(),Qt=Ot({initialState:({prop:e})=>e("open")||e("defaultOpen")?"open":"closed",props({props:e}){return{id:"x",openDelay:1e3,closeDelay:500,closeOnPointerDown:!0,closeOnEscape:!0,interactive:!1,closeOnScroll:!0,closeOnClick:!0,disabled:!1,...e,positioning:{placement:"bottom",...e.positioning}}},effects:["trackFocusVisible","trackStore"],context:({bindable:e})=>({currentPlacement:e(()=>({defaultValue:void 0})),hasPointerMoveOpened:e(()=>({defaultValue:!1}))}),watch({track:e,action:t,prop:o}){e([()=>o("disabled")],()=>{t(["closeIfDisabled"])}),e([()=>o("open")],()=>{t(["toggleVisibility"])})},states:{closed:{entry:["clearGlobalId"],on:{"controlled.open":{target:"open"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],"pointer.leave":{actions:["clearPointerMoveOpened"]},"pointer.move":[{guard:zt("noVisibleTooltip",ye("hasPointerMoveOpened")),target:"opening"},{guard:ye("hasPointerMoveOpened"),target:"open",actions:["setPointerMoveOpened","invokeOnOpen"]}]}},opening:{effects:["trackScroll","trackPointerlockChange","waitForOpenDelay"],on:{"after.openDelay":[{guard:"isOpenControlled",actions:["setPointerMoveOpened","invokeOnOpen"]},{target:"open",actions:["setPointerMoveOpened","invokeOnOpen"]}],"controlled.open":{target:"open"},"controlled.close":{target:"closed"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],"pointer.leave":[{guard:"isOpenControlled",actions:["clearPointerMoveOpened","invokeOnClose","toggleVisibility"]},{target:"closed",actions:["clearPointerMoveOpened","invokeOnClose"]}],close:[{guard:"isOpenControlled",actions:["invokeOnClose","toggleVisibility"]},{target:"closed",actions:["invokeOnClose"]}]}},open:{effects:["trackEscapeKey","trackScroll","trackPointerlockChange","trackPositioning"],entry:["setGlobalId"],on:{"controlled.close":{target:"closed"},close:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"pointer.leave":[{guard:"isVisible",target:"closing",actions:["clearPointerMoveOpened"]},{guard:"isOpenControlled",actions:["clearPointerMoveOpened","invokeOnClose"]},{target:"closed",actions:["clearPointerMoveOpened","invokeOnClose"]}],"content.pointer.leave":{guard:"isInteractive",target:"closing"},"positioning.set":{actions:["reposition"]}}},closing:{effects:["trackPositioning","waitForCloseDelay"],on:{"after.closeDelay":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"controlled.close":{target:"closed"},"controlled.open":{target:"open"},close:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"pointer.move":[{guard:"isOpenControlled",actions:["setPointerMoveOpened","invokeOnOpen","toggleVisibility"]},{target:"open",actions:["setPointerMoveOpened","invokeOnOpen"]}],"content.pointer.move":{guard:"isInteractive",target:"open"},"positioning.set":{actions:["reposition"]}}}},implementations:{guards:{noVisibleTooltip:()=>b.id===null,isVisible:({prop:e})=>e("id")===b.id,isInteractive:({prop:e})=>!!e("interactive"),hasPointerMoveOpened:({context:e})=>e.get("hasPointerMoveOpened"),isOpenControlled:({prop:e})=>e("open")!==void 0},actions:{setGlobalId:({prop:e})=>{b.id=e("id")},clearGlobalId:({prop:e})=>{e("id")===b.id&&(b.id=null)},invokeOnOpen:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!1})},closeIfDisabled:({prop:e,send:t})=>{e("disabled")&&t({type:"close",src:"disabled.change"})},reposition:({context:e,event:t,prop:o,scope:n})=>{if(t.type!=="positioning.set")return;const i=()=>Te(n);return ue(te(n),i,{...o("positioning"),...t.options,defer:!0,listeners:!1,onComplete(u){e.set("currentPlacement",u.placement)}})},toggleVisibility:({prop:e,event:t,send:o})=>{queueMicrotask(()=>{o({type:e("open")?"controlled.open":"controlled.close",previousEvent:t})})},setPointerMoveOpened:({context:e})=>{e.set("hasPointerMoveOpened",!0)},clearPointerMoveOpened:({context:e})=>{e.set("hasPointerMoveOpened",!1)}},effects:{trackFocusVisible:({scope:e})=>{var t;return St({root:(t=e.getRootNode)==null?void 0:t.call(e)})},trackPositioning:({context:e,prop:t,scope:o})=>{e.get("currentPlacement")||e.set("currentPlacement",t("positioning").placement);const n=()=>Te(o);return ue(te(o),n,{...t("positioning"),defer:!0,onComplete(i){e.set("currentPlacement",i.placement)}})},trackPointerlockChange:({send:e,scope:t})=>{const o=t.getDoc();return ee(o,"pointerlockchange",()=>e({type:"close",src:"pointerlock:change"}),!1)},trackScroll:({send:e,prop:t,scope:o})=>{if(!t("closeOnScroll"))return;const n=te(o);if(!n)return;const u=yt(n).map(p=>ee(p,"scroll",()=>{e({type:"close",src:"scroll"})},{passive:!0,capture:!0}));return()=>{u.forEach(p=>p==null?void 0:p())}},trackStore:({prop:e,send:t})=>{let o;return queueMicrotask(()=>{o=xt(b,()=>{b.id!==e("id")&&t({type:"close",src:"id.change"})})}),()=>o==null?void 0:o()},trackEscapeKey:({send:e,prop:t})=>t("closeOnEscape")?ee(document,"keydown",n=>{vt(n)||n.key==="Escape"&&(n.stopPropagation(),e({type:"close",src:"keydown.escape"}))},!0):void 0,waitForOpenDelay:({send:e,prop:t})=>{const o=setTimeout(()=>{e({type:"after.openDelay"})},t("openDelay"));return()=>clearTimeout(o)},waitForCloseDelay:({send:e,prop:t})=>{const o=setTimeout(()=>{e({type:"after.closeDelay"})},t("closeDelay"));return()=>clearTimeout(o)}}}});ot()(["aria-label","closeDelay","closeOnEscape","closeOnPointerDown","closeOnScroll","closeOnClick","dir","disabled","getRootNode","id","ids","interactive","onOpenChange","defaultOpen","open","openDelay","positioning"]);const $t=e=>{const t=k.useId(),{getRootNode:o}=nt(),{dir:n}=rt(),i={id:t,dir:n,getRootNode:o,...e},u=it(Qt,i);return Yt(u,st)},Ht=e=>{const[t,{children:o,...n}]=lt(e),i=$t(n),u=at(M({present:i.open},t));return y.jsx(wt,{value:i,children:y.jsx(ct,{value:u,children:o})})},Je=k.forwardRef((e,t)=>{const o=Y(),n=M(o.getTriggerProps(),e);return y.jsx(W.button,{...n,ref:t})});Je.displayName="TooltipTrigger";const m=({children:e,closeDelay:t=50,open:o,openDelay:n=0,position:i=Be.top})=>y.jsx(Ht,{closeDelay:t,interactive:!0,open:o,openDelay:n,positioning:{placement:i},children:e});m.displayName="OdsTooltip";try{m.displayName="OdsTooltip",m.__docgenInfo={description:"",displayName:"OdsTooltip",props:{closeDelay:{defaultValue:{value:"50"},description:"",name:"closeDelay",required:!1,type:{name:"number"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},openDelay:{defaultValue:{value:"0"},description:"",name:"openDelay",required:!1,type:{name:"number"}},position:{defaultValue:{value:"ODS_TOOLTIP_POSITION.top"},description:"",name:"position",required:!1,type:{name:'"bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" | "right-end" | "right-start" | "top" | "top-end" | "top-start"'}}}}}catch{}const Ut={"ods-tooltip-content":"_ods-tooltip-content_1hzm5_1"},f=k.forwardRef(({children:e,withArrow:t=!1,...o},n)=>y.jsx(pt,{children:y.jsx(qe,{children:y.jsxs(Ke,{className:Ut["ods-tooltip-content"],ref:n,...o,children:[t&&y.jsx(xe,{children:y.jsx(Ge,{})}),e]})})}));f.displayName="OdsTooltipContent";try{f.displayName="OdsTooltipContent",f.__docgenInfo={description:"",displayName:"OdsTooltipContent",props:{withArrow:{defaultValue:{value:"false"},description:"",name:"withArrow",required:!1,type:{name:"boolean"}}}}}catch{}const O=k.forwardRef(({children:e,...t},o)=>y.jsx(Je,{ref:o,...t,children:e}));O.displayName="OdsTooltipTrigger";try{O.displayName="OdsTooltipTrigger",O.__docgenInfo={description:"",displayName:"OdsTooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Jt={argTypes:{open:{table:{disable:!0}}},component:m,subcomponents:{OdsTooltipContent:f,OdsTooltipTrigger:O},title:"ODS Components/Tooltip"},V={parameters:{layout:"centered"},render:e=>r.createElement(m,{closeDelay:e.closeDelay,openDelay:e.openDelay,position:e.position},r.createElement(O,{asChild:!0},r.createElement(U,{name:J.circleQuestion})),r.createElement(f,{withArrow:e.withArrow},e.content)),argTypes:ht({closeDelay:{table:{category:R.general,defaultValue:{summary:50},type:{summary:"number"}},control:"number"},content:{table:{category:R.slot,defaultValue:{summary:"ø"}},control:"text"},openDelay:{table:{category:R.general,defaultValue:{summary:0},type:{summary:"number"}},control:"number"},position:{table:{category:R.general,defaultValue:{summary:Be.top},type:{summary:ge}},control:{type:"select"},options:ge},withArrow:{table:{category:R.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},j={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>{const[e,t]=k.useState(!1);function o(){t(n=>!n)}return r.createElement(r.Fragment,null,r.createElement(et,{onClick:o},"Toggle tooltip"),r.createElement(m,{open:e},r.createElement(O,{asChild:!0},r.createElement(U,{name:J.circleQuestion})),r.createElement(f,{withArrow:!0},"This is the tooltip content")))}},B={tags:["!dev"],render:({})=>r.createElement(m,null,r.createElement(O,{asChild:!0},r.createElement(U,{name:J.circleQuestion})),r.createElement(f,null,"This is the tooltip content"))},F={tags:["!dev"],render:({})=>r.createElement(m,null,r.createElement(O,null,"Show tooltip"),r.createElement(f,null,"This is the tooltip content"))},x={decorators:[e=>r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},e())],tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(m,{position:"top-start"},r.createElement(O,null,"Top Left"),r.createElement(f,{withArrow:!0},"Top Left tooltip")),r.createElement(m,{position:"top"},r.createElement(O,null,"Top"),r.createElement(f,{withArrow:!0},"Top tooltip")),r.createElement(m,{position:"top-end"},r.createElement(O,null,"Top Right"),r.createElement(f,{withArrow:!0},"Top Right tooltip")),r.createElement(m,{position:"left"},r.createElement(O,null,"Middle Left"),r.createElement(f,{withArrow:!0},"Middle Left tooltip")),r.createElement("div",null),r.createElement(m,{position:"right"},r.createElement(O,null,"Middle Right"),r.createElement(f,{withArrow:!0},"Middle Right tooltip")),r.createElement(m,{position:"bottom-start"},r.createElement(O,null,"Bottom Left"),r.createElement(f,{withArrow:!0},"Bottom Left tooltip")),r.createElement(m,{position:"bottom"},r.createElement(O,null,"Bottom"),r.createElement(f,{withArrow:!0},"Bottom tooltip")),r.createElement(m,{position:"bottom-end"},r.createElement(O,null,"Bottom Right"),r.createElement(f,{withArrow:!0},"Bottom Right tooltip")))},G={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(m,null,r.createElement(O,{asChild:!0},r.createElement(U,{name:J.circleQuestion})),r.createElement(f,null,"This is the tooltip content"))};var ve,he,we;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <OdsTooltip closeDelay={arg.closeDelay} openDelay={arg.openDelay} position={arg.position}>
      <OdsTooltipTrigger asChild>
        <OdsIcon name={ODS_ICON_NAME.circleQuestion} />
      </OdsTooltipTrigger>

      <OdsTooltipContent withArrow={arg.withArrow}>
        {arg.content}
      </OdsTooltipContent>
    </OdsTooltip>,
  argTypes: orderControls({
    closeDelay: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 50
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    openDelay: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 0
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_TOOLTIP_POSITION.top
        },
        type: {
          summary: ODS_TOOLTIP_POSITIONS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TOOLTIP_POSITIONS
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: false
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }),
  args: {
    content: 'My tooltip content'
  }
}`,...(we=(he=V.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var Ee,Pe,Ce;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleTooltip() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <OdsButton onClick={toggleTooltip}>
          Toggle tooltip
        </OdsButton>

        <OdsTooltip open={isOpen}>
          <OdsTooltipTrigger asChild>
            <OdsIcon name={ODS_ICON_NAME.circleQuestion} />
          </OdsTooltipTrigger>

          <OdsTooltipContent withArrow>
            This is the tooltip content
          </OdsTooltipContent>
        </OdsTooltip>
      </>;
  }
}`,...(Ce=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var be,ke,_e;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTooltip>
      <OdsTooltipTrigger asChild>
        <OdsIcon name={ODS_ICON_NAME.circleQuestion} />
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
}`,...(_e=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:_e.source}}};var Le,Se,Ae;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTooltip>
      <OdsTooltipTrigger>
        Show tooltip
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
}`,...(Ae=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var De,Me,Ie;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '50px 150px'
  }}>
      {story()}
    </div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsTooltip position="top-start">
        <OdsTooltipTrigger>
          Top Left
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Top Left tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="top">
        <OdsTooltipTrigger>
          Top
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Top tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="top-end">
        <OdsTooltipTrigger>
          Top Right
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Top Right tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="left">
        <OdsTooltipTrigger>
          Middle Left
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Middle Left tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <div />

      <OdsTooltip position="right">
        <OdsTooltipTrigger>
          Middle Right
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Middle Right tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="bottom-start">
        <OdsTooltipTrigger>
          Bottom Left
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Bottom Left tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="bottom">
        <OdsTooltipTrigger>
          Bottom
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Bottom tooltip
        </OdsTooltipContent>
      </OdsTooltip>

      <OdsTooltip position="bottom-end">
        <OdsTooltipTrigger>
          Bottom Right
        </OdsTooltipTrigger>
        <OdsTooltipContent withArrow>
          Bottom Right tooltip
        </OdsTooltipContent>
      </OdsTooltip>
    </>
}`,...(Ie=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:Ie.source}}};var Re,Ne,Ve;G.parameters={...G.parameters,docs:{...(Re=G.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsTooltip>
      <OdsTooltipTrigger asChild>
        <OdsIcon name={ODS_ICON_NAME.circleQuestion} />
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
}`,...(Ve=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};const Xt=["Demo","Controlled","CustomTrigger","Default","Grid","Overview"],lo=Object.freeze(Object.defineProperty({__proto__:null,Controlled:j,CustomTrigger:B,Default:F,Demo:V,Grid:x,Overview:G,__namedExportsOrder:Xt,default:Jt},Symbol.toStringTag,{value:"Module"}));export{B as C,F as D,x as G,G as O,lo as T,j as a};
