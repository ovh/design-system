import{r as T,e as t}from"./index-jIWwRBLr.js";import{j as m}from"./jsx-runtime-Cfl8ynUo.js";import{c as N}from"./index-CqY9YpN0.js";import{u as Qe}from"./context-C_-r2uoG.js";import{c as Je,a as ee,L as G,M as H,a4 as et,ad as tt,aD as at,aw as rt,z as nt,r as I,U as st,V as ot,aE as lt,O as bt,N as w,aF as ct,Q as it,aa as ut,s as Tt,d as dt,P as mt,aG as vt,Z as pt,E as ft,S as gt,T as _t,B as te,_ as Et,$ as Ct,C as ht,a0 as yt}from"./use-locale-context-CCZDATm7.js";import{u as Vt,s as At,R as Rt}from"./render-strategy-CCisVuOx.js";import{a as wt,P as St}from"./use-presence-BEoh9Cc1.js";import{B as ne,d as se}from"./Button-B-GJ-1TA.js";import{I as oe,a as le}from"./icon-name-RfJfucZu.js";import{e as Lt,o as It,C as K}from"./controls-BtiQQn1l.js";import{s as Nt}from"./source-CPEZJ6oD.js";const[Pt,Y]=Je({name:"TabsContext",hookName:"useTabsContext",providerName:"<TabsProvider />"}),ke=T.forwardRef((e,a)=>{const[n,r]=ee()(e,["value"]),l=Y(),o=Vt(),c=wt({...o,present:l.value===e.value,immediate:!0}),v=G(l.getContentProps(n),c.getPresenceProps(),r);return m.jsx(St,{value:c,children:c.unmounted?null:m.jsx(H.div,{...v,ref:et(c.ref,a)})})});ke.displayName="TabContent";const ze=T.forwardRef((e,a)=>{const n=Y(),r=G(n.getListProps(),e);return m.jsx(H.div,{...r,ref:a})});ze.displayName="TabList";const Me=T.forwardRef((e,a)=>{const[n,r]=ee()(e,["disabled","value"]),l=Y(),o=G(l.getTriggerProps(n),r);return m.jsx(H.button,{...o,ref:a})});Me.displayName="TabTrigger";var xt=bt("tabs").parts("root","list","trigger","content","indicator"),x=xt.build(),Bt=e=>{var a;return((a=e.ids)==null?void 0:a.root)??`tabs:${e.id}`},U=e=>{var a;return((a=e.ids)==null?void 0:a.list)??`tabs:${e.id}:list`},J=(e,a)=>{var n,r;return((r=(n=e.ids)==null?void 0:n.content)==null?void 0:r.call(n,a))??`tabs:${e.id}:content-${a}`},S=(e,a)=>{var n,r;return((r=(n=e.ids)==null?void 0:n.trigger)==null?void 0:r.call(n,a))??`tabs:${e.id}:trigger-${a}`},Ue=e=>{var a;return((a=e.ids)==null?void 0:a.indicator)??`tabs:${e.id}:indicator`},Ot=e=>e.getById(U(e)),Ft=(e,a)=>e.getById(J(e,a)),X=(e,a)=>e.getById(S(e,a)),be=e=>e.getById(Ue(e)),Z=e=>{const n=`[role=tab][data-ownedby='${CSS.escape(U(e))}']:not([disabled])`;return pt(Ot(e),n)},jt=e=>_t(Z(e)),qt=e=>gt(Z(e)),$t=(e,a)=>ot(Z(e),S(e,a.value),a.loopFocus),Dt=(e,a)=>st(Z(e),S(e,a.value),a.loopFocus),Ze=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),Wt=(e,a)=>{const n=vt(Z(e),S(e,a));return Xe(Ze(n))},Xe=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function kt(e,a){const{state:n,send:r,context:l,prop:o,scope:c}=e,v=o("translations"),E=n.matches("focused"),g=o("orientation")==="vertical",h=o("orientation")==="horizontal",V=o("composite");function d(b){return{selected:l.get("value")===b.value,focused:l.get("focusedValue")===b.value,disabled:!!b.disabled}}return{value:l.get("value"),focusedValue:l.get("focusedValue"),setValue(b){r({type:"SET_VALUE",value:b})},clearValue(){r({type:"CLEAR_VALUE"})},setIndicatorRect(b){const u=S(c,b);r({type:"SET_INDICATOR_RECT",id:u})},syncTabIndex(){r({type:"SYNC_TAB_INDEX"})},selectNext(b){r({type:"TAB_FOCUS",value:b,src:"selectNext"}),r({type:"ARROW_NEXT",src:"selectNext"})},selectPrev(b){r({type:"TAB_FOCUS",value:b,src:"selectPrev"}),r({type:"ARROW_PREV",src:"selectPrev"})},focus(){var u;const b=l.get("value");b&&((u=X(c,b))==null||u.focus())},getRootProps(){return a.element({...x.root.attrs,id:Bt(c),"data-orientation":o("orientation"),"data-focus":w(E),dir:o("dir")})},getListProps(){return a.element({...x.list.attrs,id:U(c),role:"tablist",dir:o("dir"),"data-focus":w(E),"aria-orientation":o("orientation"),"data-orientation":o("orientation"),"aria-label":v==null?void 0:v.listLabel,onKeyDown(b){if(b.defaultPrevented||ut(b)||!Tt(b.currentTarget,dt(b)))return;const u={ArrowDown(){h||r({type:"ARROW_NEXT",key:"ArrowDown"})},ArrowUp(){h||r({type:"ARROW_PREV",key:"ArrowUp"})},ArrowLeft(){g||r({type:"ARROW_PREV",key:"ArrowLeft"})},ArrowRight(){g||r({type:"ARROW_NEXT",key:"ArrowRight"})},Home(){r({type:"HOME"})},End(){r({type:"END"})}};let f=mt(b,{dir:o("dir"),orientation:o("orientation")});const y=u[f];if(y){b.preventDefault(),y(b);return}}})},getTriggerState:d,getTriggerProps(b){const{value:u,disabled:f}=b,y=d(b);return a.button({...x.trigger.attrs,role:"tab",type:"button",disabled:f,dir:o("dir"),"data-orientation":o("orientation"),"data-disabled":w(f),"aria-disabled":f,"data-value":u,"aria-selected":y.selected,"data-selected":w(y.selected),"data-focus":w(y.focused),"aria-controls":y.selected?J(c,u):void 0,"data-ownedby":U(c),"data-ssr":w(l.get("ssr")),id:S(c,u),tabIndex:y.selected&&V?0:-1,onFocus(){r({type:"TAB_FOCUS",value:u})},onBlur(R){const A=R.relatedTarget;(A==null?void 0:A.getAttribute("role"))!=="tab"&&r({type:"TAB_BLUR"})},onClick(R){R.defaultPrevented||ct(R)||f||(it()&&R.currentTarget.focus(),r({type:"TAB_CLICK",value:u}))}})},getContentProps(b){const{value:u}=b,f=l.get("value")===u;return a.element({...x.content.attrs,dir:o("dir"),id:J(c,u),tabIndex:V?0:-1,"aria-labelledby":S(c,u),role:"tabpanel","data-ownedby":U(c),"data-selected":w(f),"data-orientation":o("orientation"),hidden:!f})},getIndicatorProps(){const b=l.get("indicatorRect"),u=l.get("indicatorTransition");return a.element({id:Ue(c),...x.indicator.attrs,dir:o("dir"),"data-orientation":o("orientation"),style:{"--transition-property":"left, right, top, bottom, width, height","--left":b.left,"--top":b.top,"--width":b.width,"--height":b.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:u?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[h?"left":"top"]:h?"var(--left)":"var(--top)"}})}}}var{createMachine:zt}=tt(),Mt=zt({props({props:e}){return{dir:"ltr",orientation:"horizontal",activationMode:"automatic",loopFocus:!0,composite:!0,navigate(a){lt(a.node)},defaultValue:null,...e}},initialState(){return"idle"},context({prop:e,bindable:a}){return{value:a(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(n){var r;(r=e("onValueChange"))==null||r({value:n})}})),focusedValue:a(()=>({defaultValue:e("value")||e("defaultValue"),sync:!0,onChange(n){var r;(r=e("onFocusChange"))==null||r({focusedValue:n})}})),ssr:a(()=>({defaultValue:!0})),indicatorTransition:a(()=>({defaultValue:!1})),indicatorRect:a(()=>({defaultValue:{left:"0px",top:"0px",width:"0px",height:"0px"}}))}},watch({context:e,prop:a,track:n,action:r}){n([()=>e.get("value")],()=>{r(["allowIndicatorTransition","syncIndicatorRect","syncTabIndex","navigateIfNeeded"])}),n([()=>a("dir"),()=>a("orientation")],()=>{r(["syncIndicatorRect"])})},on:{SET_VALUE:{actions:["setValue"]},CLEAR_VALUE:{actions:["clearValue"]},SET_INDICATOR_RECT:{actions:["setIndicatorRect"]},SYNC_TAB_INDEX:{actions:["syncTabIndex"]}},entry:["syncIndicatorRect","syncTabIndex","syncSsr"],exit:["cleanupObserver"],states:{idle:{on:{TAB_FOCUS:{target:"focused",actions:["setFocusedValue"]},TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]}}},focused:{on:{TAB_CLICK:{actions:["setFocusedValue","setValue"]},ARROW_PREV:[{guard:"selectOnFocus",actions:["focusPrevTab","selectFocusedTab"]},{actions:["focusPrevTab"]}],ARROW_NEXT:[{guard:"selectOnFocus",actions:["focusNextTab","selectFocusedTab"]},{actions:["focusNextTab"]}],HOME:[{guard:"selectOnFocus",actions:["focusFirstTab","selectFocusedTab"]},{actions:["focusFirstTab"]}],END:[{guard:"selectOnFocus",actions:["focusLastTab","selectFocusedTab"]},{actions:["focusLastTab"]}],TAB_FOCUS:{actions:["setFocusedValue"]},TAB_BLUR:{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{selectOnFocus:({prop:e})=>e("activationMode")==="automatic"},actions:{selectFocusedTab({context:e,prop:a}){I(()=>{const n=e.get("focusedValue");if(!n)return;const l=a("deselectable")&&e.get("value")===n?null:n;e.set("value",l)})},setFocusedValue({context:e,event:a,flush:n}){a.value!=null&&n(()=>{e.set("focusedValue",a.value)})},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:a,prop:n}){const r=n("deselectable")&&e.get("value")===e.get("focusedValue");e.set("value",r?null:a.value)},clearValue({context:e}){e.set("value",null)},focusFirstTab({scope:e}){I(()=>{var a;(a=jt(e))==null||a.focus()})},focusLastTab({scope:e}){I(()=>{var a;(a=qt(e))==null||a.focus()})},focusNextTab({context:e,prop:a,scope:n,event:r}){const l=r.value??e.get("focusedValue");if(!l)return;const o=$t(n,{value:l,loopFocus:a("loopFocus")});I(()=>{a("composite")?o==null||o.focus():(o==null?void 0:o.dataset.value)!=null&&e.set("focusedValue",o.dataset.value)})},focusPrevTab({context:e,prop:a,scope:n,event:r}){const l=r.value??e.get("focusedValue");if(!l)return;const o=Dt(n,{value:l,loopFocus:a("loopFocus")});I(()=>{a("composite")?o==null||o.focus():(o==null?void 0:o.dataset.value)!=null&&e.set("focusedValue",o.dataset.value)})},syncTabIndex({context:e,scope:a}){I(()=>{const n=e.get("value");if(!n)return;const r=Ft(a,n);if(!r)return;ft(r).length>0?r.removeAttribute("tabindex"):r.setAttribute("tabindex","0")})},cleanupObserver({refs:e}){const a=e.get("indicatorCleanup");a&&a()},allowIndicatorTransition({context:e}){e.set("indicatorTransition",!0)},setIndicatorRect({context:e,event:a,scope:n}){const r=a.id??e.get("value");if(!be(n))return;if(!r){e.set("indicatorTransition",!1);return}X(n,r)&&(e.set("indicatorRect",Wt(n,r)),nt(()=>{e.set("indicatorTransition",!1)}))},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,refs:a,scope:n}){const r=a.get("indicatorCleanup");r&&r();const l=e.get("value");if(!l){e.set("indicatorTransition",!1);return}const o=X(n,l),c=be(n);if(!o||!c)return;const v=rt([o],{measure(E){return Ze(E)},onEntry({rects:E}){const[g]=E;e.set("indicatorRect",Xe(g))}});a.set("indicatorCleanup",v)},navigateIfNeeded({context:e,prop:a,scope:n}){var o;const r=e.get("value");if(!r)return;const l=X(n,r);at(l)&&((o=a("navigate"))==null||o({value:r,node:l,href:l.href}))}}}});te()(["activationMode","composite","deselectable","dir","getRootNode","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value","defaultValue"]);te()(["disabled","value"]);te()(["value"]);const Ut=e=>{const a=T.useId(),{getRootNode:n}=Et(),{dir:r}=Ct(),l={id:a,dir:r,getRootNode:n,...e},o=ht(Mt,l);return kt(o,yt)},Ge=T.forwardRef((e,a)=>{const[n,r]=At(e),[l,o]=ee()(r,["activationMode","composite","defaultValue","deselectable","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value"]),c=Ut(l),v=G(c.getRootProps(),o);return m.jsx(Pt,{value:c,children:m.jsx(Rt,{value:n,children:m.jsx(H.div,{...v,ref:a})})})});Ge.displayName="TabsRoot";const He=T.createContext(void 0);function Ye({children:e,size:a,variant:n,withArrows:r}){const[l,o]=T.useState(null);return m.jsx(He.Provider,{value:{scrollContainerRef:l,setScrollContainerRef:o,size:a,variant:n,withArrows:r},children:e})}function Ke(){return Qe(He)}Ye.__docgenInfo={description:"",methods:[],displayName:"TabsProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const Zt="_tab_r0pgc_6",Q={tab:Zt,"tab--default":"_tab--default_r0pgc_56","tab--md":"_tab--md_r0pgc_77","tab--sm":"_tab--sm_r0pgc_82","tab--xs":"_tab--xs_r0pgc_87","tab--switch":"_tab--switch_r0pgc_92"},s=T.forwardRef(({children:e,className:a,value:n,...r},l)=>{const{focusedValue:o}=Y(),{scrollContainerRef:c,size:v,variant:E}=Ke(),g=T.useRef(null);return T.useImperativeHandle(l,()=>g.current,[g]),T.useEffect(()=>{if(g.current&&o===n&&(c!=null&&c.current)){const h=g.current,V=c.current,d=h.offsetLeft,b=d+h.offsetWidth,u=V.scrollLeft,f=V.clientWidth;d<u?V.scrollTo({behavior:"smooth",left:d}):b>u+f&&V.scrollTo({behavior:"smooth",left:b-f})}},[o,n,c]),m.jsx(Me,{className:N(Q.tab,Q[`tab--${v}`],Q[`tab--${E}`],a),"data-ods":"tab",ref:g,value:n,...r,children:e})});s.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab item."}},composes:["ComponentPropsWithRef"]};const Xt={"tab-content":"_tab-content_3i2hx_2"},i=T.forwardRef(({children:e,className:a,value:n,...r},l)=>m.jsx(ke,{className:N(Xt["tab-content"],a),"data-ods":"tab-content",ref:l,value:n,...r,children:e}));i.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab content item."}},composes:["ComponentPropsWithRef"]};function Gt(e,a){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),a)}}const C={"tab-list":"_tab-list_gq3ln_6","tab-list__left-arrow":"_tab-list__left-arrow_gq3ln_17","tab-list__right-arrow":"_tab-list__right-arrow_gq3ln_17","tab-list__left-arrow--xs":"_tab-list__left-arrow--xs_gq3ln_36","tab-list__right-arrow--xs":"_tab-list__right-arrow--xs_gq3ln_36","tab-list__left-arrow--md":"_tab-list__left-arrow--md_gq3ln_42","tab-list__left-arrow--sm":"_tab-list__left-arrow--sm_gq3ln_45","tab-list__left-arrow--active":"_tab-list__left-arrow--active_gq3ln_51","tab-list__right-arrow--md":"_tab-list__right-arrow--md_gq3ln_57","tab-list__right-arrow--sm":"_tab-list__right-arrow--sm_gq3ln_60","tab-list__right-arrow--active":"_tab-list__right-arrow--active_gq3ln_66","tab-list__container":"_tab-list__container_gq3ln_69","tab-list__container--default":"_tab-list__container--default_gq3ln_80","tab-list__container--switch":"_tab-list__container--switch_gq3ln_91","tab-list__container--md":"_tab-list__container--md_gq3ln_94","tab-list__container--sm":"_tab-list__container--sm_gq3ln_97","tab-list__container--xs":"_tab-list__container--xs_gq3ln_100","tab-list__container__tabs":"_tab-list__container__tabs_gq3ln_103"},p=T.forwardRef(({children:e,className:a,...n},r)=>{const{setScrollContainerRef:l,size:o,variant:c,withArrows:v}=Ke(),[E,g]=T.useState(!1),[h,V]=T.useState(!1),d=T.useRef(null);T.useEffect(()=>{l(d)},[l]);const b=T.useCallback(()=>{g(d.current?d.current.scrollLeft===0:!1),V(d.current?Math.ceil(d.current.scrollLeft)>=d.current.scrollWidth-d.current.offsetWidth:!1)},[]),u=T.useMemo(()=>Gt(b,50),[b]);T.useEffect(()=>{if(b(),d.current){const A=new ResizeObserver(()=>{b()});return A.observe(d.current),()=>{A.disconnect()}}},[b]);function f(A){var re;(re=d.current)==null||re.scrollBy({behavior:"smooth",left:A})}function y(){d.current&&f(-d.current.offsetWidth)}function R(){d.current&&f(d.current.offsetWidth)}return m.jsxs("div",{className:N(C["tab-list"],a),"data-ods":"tab-list",ref:r,...n,children:[v&&m.jsx("div",{className:N(C["tab-list__left-arrow"],C[`tab-list__left-arrow--${o}`],{[C["tab-list__left-arrow--active"]]:!E}),children:m.jsx(ne,{disabled:E,onClick:y,size:o,tabIndex:-1,variant:se.ghost,children:m.jsx(oe,{name:le.chevronLeft})})}),m.jsx("div",{className:N(C["tab-list__container"],C[`tab-list__container--${o}`],C[`tab-list__container--${c}`]),onScroll:u,ref:d,tabIndex:-1,children:m.jsx(ze,{className:C["tab-list__container__tabs"],children:e})}),v&&m.jsx("div",{className:N(C["tab-list__right-arrow"],C[`tab-list__right-arrow--${o}`],{[C["tab-list__right-arrow--active"]]:!h}),children:m.jsx(ne,{disabled:h,onClick:R,size:o,tabIndex:-1,variant:se.ghost,children:m.jsx(oe,{name:le.chevronRight})})})]})});p.__docgenInfo={description:"",methods:[],displayName:"TabList",composes:["ComponentPropsWithRef"]};var P=(e=>(e.md="md",e.sm="sm",e.xs="xs",e))(P||{});const Ht=Object.freeze(Object.values(P));var L=(e=>(e.default="default",e.switch="switch",e))(L||{});const Yt=Object.freeze(Object.values(L)),ae=T.forwardRef(({children:e,className:a,defaultValue:n,onValueChange:r,size:l=P.md,value:o,variant:c=L.default,withArrows:v,...E},g)=>(T.useEffect(()=>{!o&&!n&&console.warn("No value or defaultValue provided. Please provide `defaultValue` or a controlled `value`")},[o,n]),m.jsx(Ye,{size:l,variant:c,withArrows:v,children:m.jsx(Ge,{className:a,"data-ods":"tabs",defaultValue:n,onValueChange:r,ref:g,value:o,...E,children:e})})));ae.displayName="Tabs";ae.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected tab. Use when you don't need to control the value of the tabs."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: TabsValueChangeEvent) => void",signature:{arguments:[{type:{name:"TabsValueChangeEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the state of selected tab changes."},size:{required:!1,tsType:{name:"literal",value:"`${TABS_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"TABS_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected tab."},variant:{required:!1,tsType:{name:"literal",value:"`${TABS_VARIANT}`"},description:"The variant preset to use.",defaultValue:{value:"TABS_VARIANT.default",computed:!0}},withArrows:{required:!1,tsType:{name:"boolean"},description:"Whether the component displays navigation arrows around the tabs."}},composes:["Omit"]};const _=Object.assign(ae,{Content:i,List:p,Tab:s}),Kt={component:_,subcomponents:{TabList:p,Tab:s,TabContent:i},argTypes:Lt(["defaultValue","onValueChange","value"]),title:"React Components/Tabs"},B={render:e=>t.createElement(_,{defaultValue:"tab1",...e},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6")),t.createElement(i,{value:"tab1"},t.createElement("p",null,"Tab 1 Content")),t.createElement(i,{value:"tab2"},t.createElement("p",null,"Tab 2 Content")),t.createElement(i,{value:"tab3"},t.createElement("p",null,"Tab 3 Content")),t.createElement(i,{value:"tab4"},t.createElement("p",null,"Tab 4 Content")),t.createElement(i,{value:"tab5"},t.createElement("p",null,"Tab 5 Content")),t.createElement(i,{value:"tab6"},t.createElement("p",null,"Tab 6 Content"))),argTypes:It({size:{table:{category:K.design,type:{summary:"TABS_SIZE"}},control:{type:"select"},options:Ht},variant:{table:{category:K.design,type:{summary:"TABS_VARIANT"}},control:{type:"select"},options:Yt},withArrows:{table:{category:K.design},control:{type:"boolean"}}})},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(_,{defaultValue:"tab1"},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},F={globals:{imports:`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Nt()}}},render:({})=>{const[e,a]=T.useState("tab1"),n=r=>{a(r.value)};return t.createElement(_,{onValueChange:n,value:e},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))}},j={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(_,{defaultValue:"tab1"},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},q={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(_,{defaultValue:"tab1"},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2",disabled:!0},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},$={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement("div",{style:{width:"300px"}},t.createElement(_,{defaultValue:"tab1"},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6"))))},D={globals:{imports:"import { TABS_SIZE, TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(t.Fragment,null,t.createElement("p",null,"MD"),t.createElement(_,{defaultValue:"tab1",size:P.md,variant:L.switch},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"))),t.createElement("p",null,"SM"),t.createElement(_,{defaultValue:"tab1",size:P.sm,variant:L.switch},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"))),t.createElement("p",null,"XS"),t.createElement(_,{defaultValue:"tab1",size:P.xs,variant:L.switch},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"))))},W={globals:{imports:"import { TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(_,{defaultValue:"tab1",variant:L.switch},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},k={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(_,{defaultValue:"tab1",withArrows:!0},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6"),t.createElement(s,{value:"tab7"},"Tab 7"),t.createElement(s,{value:"tab8"},"Tab 8"),t.createElement(s,{value:"tab9"},"Tab 9"),t.createElement(s,{value:"tab10"},"Tab 10"),t.createElement(s,{value:"tab11"},"Tab 11"),t.createElement(s,{value:"tab12"},"Tab 12"),t.createElement(s,{value:"tab13"},"Tab 13"),t.createElement(s,{value:"tab14"},"Tab 14"),t.createElement(s,{value:"tab15"},"Tab 15")))},z={globals:{imports:"import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(_,{defaultValue:"tab1"},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")),t.createElement(i,{value:"tab1"},t.createElement("p",null,"Content 1")),t.createElement(i,{value:"tab2"},t.createElement("p",null,"Content 2")),t.createElement(i,{value:"tab3"},t.createElement("p",null,"Content 3")))},M={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>t.createElement(_,{withArrows:!0,defaultValue:"tab1"},t.createElement(p,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2",disabled:!0},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6"),t.createElement(s,{value:"tab7"},"Tab 7"),t.createElement(s,{value:"tab8"},"Tab 8"),t.createElement(s,{value:"tab9"},"Tab 9"),t.createElement(s,{value:"tab10"},"Tab 10"),t.createElement(s,{value:"tab11"},"Tab 11"),t.createElement(s,{value:"tab12"},"Tab 12"),t.createElement(s,{value:"tab13"},"Tab 13"),t.createElement(s,{value:"tab14"},"Tab 14"),t.createElement(s,{value:"tab15"},"Tab 15")),t.createElement(i,{value:"tab1"},t.createElement("p",null,"Content 1")),t.createElement(i,{value:"tab2"},t.createElement("p",null,"Content 2")),t.createElement(i,{value:"tab3"},t.createElement("p",null,"Content 3")),t.createElement(i,{value:"tab4"},t.createElement("p",null,"Content 4")),t.createElement(i,{value:"tab5"},t.createElement("p",null,"Content 5")),t.createElement(i,{value:"tab6"},t.createElement("p",null,"Content 6")),t.createElement(i,{value:"tab7"},t.createElement("p",null,"Content 7")),t.createElement(i,{value:"tab8"},t.createElement("p",null,"Content 8")),t.createElement(i,{value:"tab9"},t.createElement("p",null,"Content 9")),t.createElement(i,{value:"tab10"},t.createElement("p",null,"Content 10")),t.createElement(i,{value:"tab11"},t.createElement("p",null,"Content 11")),t.createElement(i,{value:"tab12"},t.createElement("p",null,"Content 12")),t.createElement(i,{value:"tab13"},t.createElement("p",null,"Content 13")),t.createElement(i,{value:"tab14"},t.createElement("p",null,"Content 14")),t.createElement(i,{value:"tab15"},t.createElement("p",null,"Content 15")))};var ce,ie,ue;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: arg => <Tabs defaultValue="tab1" {...arg}>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
      </TabList>

      <TabContent value="tab1">
        <p>Tab 1 Content</p>
      </TabContent>

      <TabContent value="tab2">
        <p>Tab 2 Content</p>
      </TabContent>

      <TabContent value="tab3">
        <p>Tab 3 Content</p>
      </TabContent>

      <TabContent value="tab4">
        <p>Tab 4 Content</p>
      </TabContent>

      <TabContent value="tab5">
        <p>Tab 5 Content</p>
      </TabContent>

      <TabContent value="tab6">
        <p>Tab 6 Content</p>
      </TabContent>
    </Tabs>,
  argTypes: orderControls({
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TABS_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: TABS_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TABS_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: TABS_VARIANTS
    },
    withArrows: {
      table: {
        category: CONTROL_CATEGORY.design
      },
      control: {
        type: 'boolean'
      }
    }
  })
}`,...(ue=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var Te,de,me;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(me=(de=O.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ve,pe,fe;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [value, setValue] = useState('tab1');
    const handleValueChange = (event: TabsValueChangeEvent) => {
      setValue(event.value);
    };
    return <Tabs onValueChange={handleValueChange} value={value}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>;
  }
}`,...(fe=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ge,_e,Ee;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(Ee=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var Ce,he,ye;q.parameters={...q.parameters,docs:{...(Ce=q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(ye=(he=q.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Ve,Ae,Re;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    width: '300px'
  }}>
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
          <Tab value="tab4">Tab 4</Tab>
          <Tab value="tab5">Tab 5</Tab>
          <Tab value="tab6">Tab 6</Tab>
        </TabList>
      </Tabs>
    </div>
}`,...(Re=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var we,Se,Le;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TABS_SIZE, TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <p>MD</p>
      <Tabs defaultValue="tab1" size={TABS_SIZE.md} variant={TABS_VARIANT.switch}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>

      <p>SM</p>
      <Tabs defaultValue="tab1" size={TABS_SIZE.sm} variant={TABS_VARIANT.switch}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>

      <p>XS</p>
      <Tabs defaultValue="tab1" size={TABS_SIZE.xs} variant={TABS_VARIANT.switch}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>
    </>
}`,...(Le=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Ie,Ne,Pe;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1" variant={TABS_VARIANT.switch}>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(Pe=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var xe,Be,Oe;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1" withArrows>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
    </Tabs>
}`,...(Oe=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Fe,je,qe;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
      <TabContent value="tab1">
        <p>Content 1</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Content 2</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Content 3</p>
      </TabContent>
    </Tabs>
}`,...(qe=(je=z.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var $e,De,We;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <Tabs withArrows defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
      <TabContent value="tab1"><p>Content 1</p></TabContent>
      <TabContent value="tab2"><p>Content 2</p></TabContent>
      <TabContent value="tab3"><p>Content 3</p></TabContent>
      <TabContent value="tab4"><p>Content 4</p></TabContent>
      <TabContent value="tab5"><p>Content 5</p></TabContent>
      <TabContent value="tab6"><p>Content 6</p></TabContent>
      <TabContent value="tab7"><p>Content 7</p></TabContent>
      <TabContent value="tab8"><p>Content 8</p></TabContent>
      <TabContent value="tab9"><p>Content 9</p></TabContent>
      <TabContent value="tab10"><p>Content 10</p></TabContent>
      <TabContent value="tab11"><p>Content 11</p></TabContent>
      <TabContent value="tab12"><p>Content 12</p></TabContent>
      <TabContent value="tab13"><p>Content 13</p></TabContent>
      <TabContent value="tab14"><p>Content 14</p></TabContent>
      <TabContent value="tab15"><p>Content 15</p></TabContent>
    </Tabs>
}`,...(We=(De=M.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};const Qt=["Demo","Overview","Controlled","Default","Disabled","Overflow","Size","Variant","WithArrows","WithContent","ThemeGenerator"],ia=Object.freeze(Object.defineProperty({__proto__:null,Controlled:F,Default:j,Demo:B,Disabled:q,Overflow:$,Overview:O,Size:D,ThemeGenerator:M,Variant:W,WithArrows:k,WithContent:z,__namedExportsOrder:Qt,default:Kt},Symbol.toStringTag,{value:"Module"}));export{F as C,j as D,O,D as S,ia as T,W as V,z as W,q as a,$ as b,k as c};
