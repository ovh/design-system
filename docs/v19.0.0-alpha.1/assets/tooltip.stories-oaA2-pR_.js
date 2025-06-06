import{r as b,e as n}from"./index-D_CmzhJ4.js";import{O as Be}from"./OdsButton-BdAON5Xz.js";import{O as Q,a as W}from"./icon-name-CmqPEXVL.js";import{j as y}from"./jsx-runtime-VM66peLj.js";import{u as _e,g as Fe,a as te,s as Ge,b as qe,P as Ye,O as Ae,c as Qe,d as oe}from"./portal-Qh9imqPK.js";import{c as We,b as ze,d as Ke,a as $e,n as Ue}from"./use-locale-context-D9QOpgGs.js";import{o as Je,m as k,d as B,e as Xe,B as Ze,C as He,q as et,E as tt,F as K,G as ot,H as nt}from"./index-DDDhx9B2.js";import{i as rt,t as it}from"./index-BdhGapat.js";import{c as st}from"./index-CkQHsVsO.js";import{e as lt,o as at,C as R}from"./controls-BtiQQn1l.js";const[ct,F]=Je({name:"TooltipContext",hookName:"useTooltipContext",providerName:"<TooltipProvider />"}),De=b.forwardRef((e,t)=>{const o=F(),r=k(o.getArrowProps(),e);return y.jsx(B.div,{...r,ref:t})});De.displayName="TooltipArrow";const ke=b.forwardRef((e,t)=>{const o=F(),r=k(o.getArrowTipProps(),e);return y.jsx(B.div,{...r,ref:t})});ke.displayName="TooltipArrowTip";const Se=b.forwardRef((e,t)=>{const o=F(),r=_e(),i=k(o.getContentProps(),r.getPresenceProps(),e);return r.unmounted?null:y.jsx(B.div,{...i,ref:Xe(r.ref,t)})});Se.displayName="TooltipContent";const Re=b.forwardRef((e,t)=>{const o=F(),r=k(o.getPositionerProps(),e);return _e().unmounted?null:y.jsx(B.div,{...r,ref:t})});Re.displayName="TooltipPositioner";const pt=Symbol(),ne=Object.getPrototypeOf,U=new WeakMap,dt=e=>e&&(U.has(e)?U.get(e):ne(e)===Object.prototype||ne(e)===Array.prototype),ut=e=>dt(e)&&e[pt]||null,re=(e,t=!0)=>{U.set(e,t)};function gt(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global}function Ie(e,t){const o=gt();return o?(o[e]||(o[e]=t()),o[e]):t()}var Y=Ie("__zag__refSet",()=>new WeakSet),mt=e=>typeof e=="object"&&e!==null&&"$$typeof"in e&&"props"in e,Ot=e=>typeof e=="object"&&e!==null&&"__v_isVNode"in e,ft=e=>typeof e=="object"&&e!==null&&"nodeType"in e&&typeof e.nodeName=="string",Tt=e=>mt(e)||Ot(e)||ft(e),J=e=>e!==null&&typeof e=="object",ie=e=>J(e)&&!Y.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!Tt(e)&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)&&!(e instanceof Promise),_=Ie("__zag__proxyStateMap",()=>new WeakMap),yt=(e=Object.is,t=(p,w)=>new Proxy(p,w),o=new WeakMap,r=(p,w)=>{const T=o.get(p);if((T==null?void 0:T[0])===w)return T[1];const d=Array.isArray(p)?[]:Object.create(Object.getPrototypeOf(p));return re(d,!0),o.set(p,[w,d]),Reflect.ownKeys(p).forEach(P=>{const h=Reflect.get(p,P);Y.has(h)?(re(h,!1),d[P]=h):_.has(h)?d[P]=wt(h):d[P]=h}),Object.freeze(d)},i=new WeakMap,g=[1,1],u=p=>{if(!J(p))throw new Error("object required");const w=i.get(p);if(w)return w;let T=g[0];const d=new Set,P=(a,s=++g[0])=>{T!==s&&(T=s,d.forEach(l=>l(a,s)))};let h=g[1];const C=(a=++g[1])=>(h!==a&&!d.size&&(h=a,c.forEach(([s])=>{const l=s[1](a);l>T&&(T=l)})),T),A=a=>(s,l)=>{const v=[...s];v[1]=[a,...v[1]],P(v,l)},c=new Map,X=(a,s)=>{if(d.size){const l=s[3](A(a));c.set(a,[s,l])}else c.set(a,[s])},Z=a=>{var l;const s=c.get(a);s&&(c.delete(a),(l=s[1])==null||l.call(s))},je=a=>(d.add(a),d.size===1&&c.forEach(([l,v],D)=>{const S=l[3](A(D));c.set(D,[l,S])}),()=>{d.delete(a),d.size===0&&c.forEach(([l,v],D)=>{v&&(v(),c.set(D,[l]))})}),z=Array.isArray(p)?[]:Object.create(Object.getPrototypeOf(p)),G=t(z,{deleteProperty(a,s){const l=Reflect.get(a,s);Z(s);const v=Reflect.deleteProperty(a,s);return v&&P(["delete",[s],l]),v},set(a,s,l,v){var H;const D=Reflect.has(a,s),S=Reflect.get(a,s,v);if(D&&(e(S,l)||i.has(l)&&e(S,i.get(l))))return!0;Z(s),J(l)&&(l=ut(l)||l);let q=l;if(!((H=Object.getOwnPropertyDescriptor(a,s))!=null&&H.set)){!_.has(l)&&ie(l)&&(q=Me(l));const ee=!Y.has(q)&&_.get(q);ee&&X(s,ee)}return Reflect.set(a,s,q,v),P(["set",[s],l,S]),!0}});i.set(p,G);const xe=[z,C,r,je];return _.set(G,xe),Reflect.ownKeys(p).forEach(a=>{const s=Object.getOwnPropertyDescriptor(p,a);s.get||s.set?Object.defineProperty(z,a,s):G[a]=p[a]}),G})=>[u,_,Y,e,t,ie,o,r,i,g],[vt]=yt();function Me(e={}){return vt(e)}function ht(e,t,o){const r=_.get(e);let i;const g=[],u=r[3];let p=!1;const T=u(d=>{g.push(d),i||(i=Promise.resolve().then(()=>{i=void 0,p&&t(g.splice(0))}))});return p=!0,()=>{p=!1,T()}}function wt(e){const t=_.get(e),[o,r,i]=t;return i(o,r())}var Pt=Ze("tooltip").parts("trigger","arrow","arrowTip","positioner","content"),I=Pt.build(),Ne=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`tooltip:${e.id}:trigger`},Ct=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`tooltip:${e.id}:content`},Et=e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`tooltip:${e.id}:arrow`},Le=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`tooltip:${e.id}:popper`},$=e=>e.getById(Ne(e)),se=e=>e.getById(Le(e)),E=Me({id:null});function bt(e,t){const{state:o,context:r,send:i,scope:g,prop:u,event:p}=e,w=u("id"),T=!!u("aria-label"),d=o.matches("open","closing"),P=Ne(g),h=Ct(g),C=u("disabled"),A=Fe({...u("positioning"),placement:r.get("currentPlacement")});return{open:d,setOpen(c){o.matches("open","closing")!==c&&i({type:c?"open":"close"})},reposition(c={}){i({type:"positioning.set",options:c})},getTriggerProps(){return t.button({...I.trigger.attrs,id:P,dir:u("dir"),"data-expanded":He(d),"data-state":d?"open":"closed","aria-describedby":d?h:void 0,onClick(c){c.defaultPrevented||C||u("closeOnClick")&&i({type:"close",src:"trigger.click"})},onFocus(c){queueMicrotask(()=>{c.defaultPrevented||C||p.src!=="trigger.pointerdown"&&rt()&&i({type:"open",src:"trigger.focus"})})},onBlur(c){c.defaultPrevented||C||w===E.id&&i({type:"close",src:"trigger.blur"})},onPointerDown(c){c.defaultPrevented||C||u("closeOnPointerDown")&&w===E.id&&i({type:"close",src:"trigger.pointerdown"})},onPointerMove(c){c.defaultPrevented||C||c.pointerType!=="touch"&&i({type:"pointer.move"})},onPointerLeave(){C||i({type:"pointer.leave"})},onPointerCancel(){C||i({type:"pointer.leave"})}})},getArrowProps(){return t.element({id:Et(g),...I.arrow.attrs,dir:u("dir"),style:A.arrow})},getArrowTipProps(){return t.element({...I.arrowTip.attrs,dir:u("dir"),style:A.arrowTip})},getPositionerProps(){return t.element({id:Le(g),...I.positioner.attrs,dir:u("dir"),style:A.floating})},getContentProps(){return t.element({...I.content.attrs,dir:u("dir"),hidden:!d,"data-state":d?"open":"closed",role:T?void 0:"tooltip",id:T?void 0:h,"data-placement":r.get("currentPlacement"),onPointerEnter(){i({type:"content.pointer.move"})},onPointerLeave(){i({type:"content.pointer.leave"})},style:{pointerEvents:u("interactive")?"auto":"none"}})}}}var{and:_t,not:le}=tt(),At=et({initialState:({prop:e})=>e("open")||e("defaultOpen")?"open":"closed",props({props:e}){return{id:"x",openDelay:1e3,closeDelay:500,closeOnPointerDown:!0,closeOnEscape:!0,interactive:!1,closeOnScroll:!0,closeOnClick:!0,disabled:!1,...e,positioning:{placement:"bottom",...e.positioning}}},effects:["trackFocusVisible","trackStore"],context:({bindable:e})=>({currentPlacement:e(()=>({defaultValue:void 0})),hasPointerMoveOpened:e(()=>({defaultValue:!1}))}),watch({track:e,action:t,prop:o}){e([()=>o("disabled")],()=>{t(["closeIfDisabled"])}),e([()=>o("open")],()=>{t(["toggleVisibility"])})},states:{closed:{entry:["clearGlobalId"],on:{"controlled.open":{target:"open"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],"pointer.leave":{actions:["clearPointerMoveOpened"]},"pointer.move":[{guard:_t("noVisibleTooltip",le("hasPointerMoveOpened")),target:"opening"},{guard:le("hasPointerMoveOpened"),target:"open",actions:["setPointerMoveOpened","invokeOnOpen"]}]}},opening:{effects:["trackScroll","trackPointerlockChange","waitForOpenDelay"],on:{"after.openDelay":[{guard:"isOpenControlled",actions:["setPointerMoveOpened","invokeOnOpen"]},{target:"open",actions:["setPointerMoveOpened","invokeOnOpen"]}],"controlled.open":{target:"open"},"controlled.close":{target:"closed"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],"pointer.leave":[{guard:"isOpenControlled",actions:["clearPointerMoveOpened","invokeOnClose","toggleVisibility"]},{target:"closed",actions:["clearPointerMoveOpened","invokeOnClose"]}],close:[{guard:"isOpenControlled",actions:["invokeOnClose","toggleVisibility"]},{target:"closed",actions:["invokeOnClose"]}]}},open:{effects:["trackEscapeKey","trackScroll","trackPointerlockChange","trackPositioning"],entry:["setGlobalId"],on:{"controlled.close":{target:"closed"},close:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"pointer.leave":[{guard:"isVisible",target:"closing",actions:["clearPointerMoveOpened"]},{guard:"isOpenControlled",actions:["clearPointerMoveOpened","invokeOnClose"]},{target:"closed",actions:["clearPointerMoveOpened","invokeOnClose"]}],"content.pointer.leave":{guard:"isInteractive",target:"closing"},"positioning.set":{actions:["reposition"]}}},closing:{effects:["trackPositioning","waitForCloseDelay"],on:{"after.closeDelay":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"controlled.close":{target:"closed"},"controlled.open":{target:"open"},close:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"pointer.move":[{guard:"isOpenControlled",actions:["setPointerMoveOpened","invokeOnOpen","toggleVisibility"]},{target:"open",actions:["setPointerMoveOpened","invokeOnOpen"]}],"content.pointer.move":{guard:"isInteractive",target:"open"},"positioning.set":{actions:["reposition"]}}}},implementations:{guards:{noVisibleTooltip:()=>E.id===null,isVisible:({prop:e})=>e("id")===E.id,isInteractive:({prop:e})=>!!e("interactive"),hasPointerMoveOpened:({context:e})=>e.get("hasPointerMoveOpened"),isOpenControlled:({prop:e})=>e("open")!==void 0},actions:{setGlobalId:({prop:e})=>{E.id=e("id")},clearGlobalId:({prop:e})=>{e("id")===E.id&&(E.id=null)},invokeOnOpen:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!1})},closeIfDisabled:({prop:e,send:t})=>{e("disabled")&&t({type:"close",src:"disabled.change"})},reposition:({context:e,event:t,prop:o,scope:r})=>{if(t.type!=="positioning.set")return;const i=()=>se(r);return te($(r),i,{...o("positioning"),...t.options,defer:!0,listeners:!1,onComplete(g){e.set("currentPlacement",g.placement)}})},toggleVisibility:({prop:e,event:t,send:o})=>{queueMicrotask(()=>{o({type:e("open")?"controlled.open":"controlled.close",previousEvent:t})})},setPointerMoveOpened:({context:e})=>{e.set("hasPointerMoveOpened",!0)},clearPointerMoveOpened:({context:e})=>{e.set("hasPointerMoveOpened",!1)}},effects:{trackFocusVisible:({scope:e})=>{var t;return it({root:(t=e.getRootNode)==null?void 0:t.call(e)})},trackPositioning:({context:e,prop:t,scope:o})=>{e.get("currentPlacement")||e.set("currentPlacement",t("positioning").placement);const r=()=>se(o);return te($(o),r,{...t("positioning"),defer:!0,onComplete(i){e.set("currentPlacement",i.placement)}})},trackPointerlockChange:({send:e,scope:t})=>{const o=t.getDoc();return K(o,"pointerlockchange",()=>e({type:"close",src:"pointerlock:change"}),!1)},trackScroll:({send:e,prop:t,scope:o})=>{if(!t("closeOnScroll"))return;const r=$(o);if(!r)return;const g=ot(r).map(u=>K(u,"scroll",()=>{e({type:"close",src:"scroll"})},{passive:!0,capture:!0}));return()=>{g.forEach(u=>u==null?void 0:u())}},trackStore:({prop:e,send:t})=>{let o;return queueMicrotask(()=>{o=ht(E,()=>{E.id!==e("id")&&t({type:"close",src:"id.change"})})}),()=>o==null?void 0:o()},trackEscapeKey:({send:e,prop:t})=>t("closeOnEscape")?K(document,"keydown",r=>{nt(r)||r.key==="Escape"&&(r.stopPropagation(),e({type:"close",src:"keydown.escape"}))},!0):void 0,waitForOpenDelay:({send:e,prop:t})=>{const o=setTimeout(()=>{e({type:"after.openDelay"})},t("openDelay"));return()=>clearTimeout(o)},waitForCloseDelay:({send:e,prop:t})=>{const o=setTimeout(()=>{e({type:"after.closeDelay"})},t("closeDelay"));return()=>clearTimeout(o)}}}});We()(["aria-label","closeDelay","closeOnEscape","closeOnPointerDown","closeOnScroll","closeOnClick","dir","disabled","getRootNode","id","ids","interactive","onOpenChange","defaultOpen","open","openDelay","positioning"]);const Dt=e=>{const t=b.useId(),{getRootNode:o}=ze(),{dir:r}=Ke(),i={id:t,dir:r,getRootNode:o,...e},g=$e(At,i);return bt(g,Ue)},kt=e=>{const[t,{children:o,...r}]=Ge(e),i=Dt(r),g=qe(k({present:i.open},t));return y.jsx(ct,{value:i,children:y.jsx(Ye,{value:g,children:o})})},Ve=b.forwardRef((e,t)=>{const o=F(),r=k(o.getTriggerProps(),e);return y.jsx(B.button,{...r,ref:t})});Ve.displayName="TooltipTrigger";const m=({children:e,closeDelay:t=50,open:o,openDelay:r=0,position:i=Ae.top})=>y.jsx(kt,{closeDelay:t,interactive:!0,open:o,openDelay:r,positioning:{placement:i},children:e});m.displayName="OdsTooltip";try{m.displayName="OdsTooltip",m.__docgenInfo={description:"",displayName:"OdsTooltip",props:{closeDelay:{defaultValue:{value:"50"},description:"",name:"closeDelay",required:!1,type:{name:"number"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},openDelay:{defaultValue:{value:"0"},description:"",name:"openDelay",required:!1,type:{name:"number"}},position:{defaultValue:{value:"ODS_TOOLTIP_POSITION.top"},description:"",name:"position",required:!1,type:{name:'"left" | "right" | "bottom" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top" | "top-end" | "top-start"'}}}}}catch{}const St={"ods-tooltip-content":"_ods-tooltip-content_1hzm5_1"},O=b.forwardRef(({children:e,className:t,withArrow:o=!1,...r},i)=>y.jsx(Qe,{children:y.jsx(Re,{children:y.jsxs(Se,{className:st(St["ods-tooltip-content"],t),ref:i,...r,children:[o&&y.jsx(De,{children:y.jsx(ke,{})}),e]})})}));O.displayName="OdsTooltipContent";try{O.displayName="OdsTooltipContent",O.__docgenInfo={description:"",displayName:"OdsTooltipContent",props:{withArrow:{defaultValue:{value:"false"},description:"",name:"withArrow",required:!1,type:{name:"boolean"}}}}}catch{}const f=b.forwardRef(({children:e,...t},o)=>y.jsx(Ve,{ref:o,...t,children:e}));f.displayName="OdsTooltipTrigger";try{f.displayName="OdsTooltipTrigger",f.__docgenInfo={description:"",displayName:"OdsTooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Rt={argTypes:lt(["open"]),component:m,subcomponents:{OdsTooltipContent:O,OdsTooltipTrigger:f},title:"ODS Components/Tooltip"},M={parameters:{layout:"centered"},render:e=>n.createElement(m,{closeDelay:e.closeDelay,openDelay:e.openDelay,position:e.position},n.createElement(f,{asChild:!0},n.createElement(Q,{name:W.circleQuestion})),n.createElement(O,{withArrow:e.withArrow},e.content)),argTypes:at({closeDelay:{table:{category:R.general,defaultValue:{summary:50},type:{summary:"number"}},control:"number"},content:{table:{category:R.slot,defaultValue:{summary:"ø"}},control:"text"},openDelay:{table:{category:R.general,defaultValue:{summary:0},type:{summary:"number"}},control:"number"},position:{table:{category:R.general,defaultValue:{summary:Ae.top},type:{summary:oe}},control:{type:"select"},options:oe},withArrow:{table:{category:R.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},N={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>{const[e,t]=b.useState(!1);function o(){t(r=>!r)}return n.createElement(n.Fragment,null,n.createElement(Be,{onClick:o},"Toggle tooltip"),n.createElement(m,{open:e},n.createElement(f,{asChild:!0},n.createElement(Q,{name:W.circleQuestion})),n.createElement(O,{withArrow:!0},"This is the tooltip content")))}},L={tags:["!dev"],render:({})=>n.createElement(m,null,n.createElement(f,{asChild:!0},n.createElement(Q,{name:W.circleQuestion})),n.createElement(O,null,"This is the tooltip content"))},V={tags:["!dev"],render:({})=>n.createElement(m,null,n.createElement(f,null,"Show tooltip"),n.createElement(O,null,"This is the tooltip content"))},j={decorators:[e=>n.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(m,{position:"top-start"},n.createElement(f,null,"Top Left"),n.createElement(O,{withArrow:!0},"Top Left tooltip")),n.createElement(m,{position:"top"},n.createElement(f,null,"Top"),n.createElement(O,{withArrow:!0},"Top tooltip")),n.createElement(m,{position:"top-end"},n.createElement(f,null,"Top Right"),n.createElement(O,{withArrow:!0},"Top Right tooltip")),n.createElement(m,{position:"left"},n.createElement(f,null,"Middle Left"),n.createElement(O,{withArrow:!0},"Middle Left tooltip")),n.createElement("div",null),n.createElement(m,{position:"right"},n.createElement(f,null,"Middle Right"),n.createElement(O,{withArrow:!0},"Middle Right tooltip")),n.createElement(m,{position:"bottom-start"},n.createElement(f,null,"Bottom Left"),n.createElement(O,{withArrow:!0},"Bottom Left tooltip")),n.createElement(m,{position:"bottom"},n.createElement(f,null,"Bottom"),n.createElement(O,{withArrow:!0},"Bottom tooltip")),n.createElement(m,{position:"bottom-end"},n.createElement(f,null,"Bottom Right"),n.createElement(O,{withArrow:!0},"Bottom Right tooltip")))},x={tags:["!dev"],parameters:{layout:"centered"},render:({})=>n.createElement(m,null,n.createElement(f,{asChild:!0},n.createElement(Q,{name:W.circleQuestion})),n.createElement(O,null,"This is the tooltip content"))};var ae,ce,pe;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(pe=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ue,ge;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,Oe,fe;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTooltip>
      <OdsTooltipTrigger asChild>
        <OdsIcon name={ODS_ICON_NAME.circleQuestion} />
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
}`,...(fe=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:fe.source}}};var Te,ye,ve;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTooltip>
      <OdsTooltipTrigger>
        Show tooltip
      </OdsTooltipTrigger>

      <OdsTooltipContent>
        This is the tooltip content
      </OdsTooltipContent>
    </OdsTooltip>
}`,...(ve=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var he,we,Pe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Pe=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var Ce,Ee,be;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(be=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:be.source}}};const It=["Demo","Controlled","CustomTrigger","Default","Grid","Overview"],Qt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:N,CustomTrigger:L,Default:V,Demo:M,Grid:j,Overview:x,__namedExportsOrder:It,default:Rt},Symbol.toStringTag,{value:"Module"}));export{L as C,V as D,j as G,x as O,Qt as T,N as a};
