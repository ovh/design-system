import{r as T,e as t}from"./index-jIWwRBLr.js";import{j as m}from"./jsx-runtime-Cfl8ynUo.js";import{u as Ke}from"./context-C_-r2uoG.js";import{c as Qe,a as ee,L as G,M as H,a4 as Je,O as et,N as w,aB as tt,Q as at,aa as rt,s as nt,d as st,P as ot,B as te,ad as lt,aC as bt,az as ct,z as ut,r as I,E as it,U as Tt,V as dt,S as mt,T as vt,aD as pt,aE as ft,Z as gt,_ as _t,$ as Et,C as Ct,a0 as ht}from"./use-locale-context-kHyebpMI.js";import{u as yt,s as Vt,R as At}from"./render-strategy-DRJaCB2u.js";import{c as N}from"./index-CqY9YpN0.js";import{B as re,d as ne}from"./Button-B-GJ-1TA.js";import{I as se,a as oe}from"./icon-name-BpdEc4-2.js";import{a as Rt,P as wt}from"./use-presence-C53EI5fL.js";import{e as St,o as Lt,C as K}from"./controls-BtiQQn1l.js";import{s as It}from"./source-CPEZJ6oD.js";const[Nt,Y]=Qe({name:"TabsContext",hookName:"useTabsContext",providerName:"<TabsProvider />"}),We=T.forwardRef((e,a)=>{const[n,r]=ee()(e,["value"]),l=Y(),o=yt(),c=Rt({...o,present:l.value===e.value,immediate:!0}),v=G(l.getContentProps(n),c.getPresenceProps(),r);return m.jsx(wt,{value:c,children:c.unmounted?null:m.jsx(H.div,{...v,ref:Je(c.ref,a)})})});We.displayName="TabContent";const ze=T.forwardRef((e,a)=>{const n=Y(),r=G(n.getListProps(),e);return m.jsx(H.div,{...r,ref:a})});ze.displayName="TabList";const ke=T.forwardRef((e,a)=>{const[n,r]=ee()(e,["disabled","value"]),l=Y(),o=G(l.getTriggerProps(n),r);return m.jsx(H.button,{...o,ref:a})});ke.displayName="TabTrigger";var Pt=et("tabs").parts("root","list","trigger","content","indicator"),x=Pt.build(),xt=e=>{var a;return((a=e.ids)==null?void 0:a.root)??`tabs:${e.id}`},U=e=>{var a;return((a=e.ids)==null?void 0:a.list)??`tabs:${e.id}:list`},J=(e,a)=>{var n,r;return((r=(n=e.ids)==null?void 0:n.content)==null?void 0:r.call(n,a))??`tabs:${e.id}:content-${a}`},S=(e,a)=>{var n,r;return((r=(n=e.ids)==null?void 0:n.trigger)==null?void 0:r.call(n,a))??`tabs:${e.id}:trigger-${a}`},Me=e=>{var a;return((a=e.ids)==null?void 0:a.indicator)??`tabs:${e.id}:indicator`},Bt=e=>e.getById(U(e)),Ot=(e,a)=>e.getById(J(e,a)),X=(e,a)=>e.getById(S(e,a)),le=e=>e.getById(Me(e)),Z=e=>{const n=`[role=tab][data-ownedby='${CSS.escape(U(e))}']:not([disabled])`;return gt(Bt(e),n)},Ft=e=>vt(Z(e)),jt=e=>mt(Z(e)),qt=(e,a)=>dt(Z(e),S(e,a.value),a.loopFocus),$t=(e,a)=>Tt(Z(e),S(e,a.value),a.loopFocus),Ue=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),Dt=(e,a)=>{const n=ft(Z(e),S(e,a));return Ze(Ue(n))},Ze=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function Wt(e,a){const{state:n,send:r,context:l,prop:o,scope:c}=e,v=o("translations"),E=n.matches("focused"),_=o("orientation")==="vertical",h=o("orientation")==="horizontal",V=o("composite");function d(b){return{selected:l.get("value")===b.value,focused:l.get("focusedValue")===b.value,disabled:!!b.disabled}}return{value:l.get("value"),focusedValue:l.get("focusedValue"),setValue(b){r({type:"SET_VALUE",value:b})},clearValue(){r({type:"CLEAR_VALUE"})},setIndicatorRect(b){const i=S(c,b);r({type:"SET_INDICATOR_RECT",id:i})},syncTabIndex(){r({type:"SYNC_TAB_INDEX"})},selectNext(b){r({type:"TAB_FOCUS",value:b,src:"selectNext"}),r({type:"ARROW_NEXT",src:"selectNext"})},selectPrev(b){r({type:"TAB_FOCUS",value:b,src:"selectPrev"}),r({type:"ARROW_PREV",src:"selectPrev"})},focus(){var i;const b=l.get("value");b&&((i=X(c,b))==null||i.focus())},getRootProps(){return a.element({...x.root.attrs,id:xt(c),"data-orientation":o("orientation"),"data-focus":w(E),dir:o("dir")})},getListProps(){return a.element({...x.list.attrs,id:U(c),role:"tablist",dir:o("dir"),"data-focus":w(E),"aria-orientation":o("orientation"),"data-orientation":o("orientation"),"aria-label":v==null?void 0:v.listLabel,onKeyDown(b){if(b.defaultPrevented||rt(b)||!nt(b.currentTarget,st(b)))return;const i={ArrowDown(){h||r({type:"ARROW_NEXT",key:"ArrowDown"})},ArrowUp(){h||r({type:"ARROW_PREV",key:"ArrowUp"})},ArrowLeft(){_||r({type:"ARROW_PREV",key:"ArrowLeft"})},ArrowRight(){_||r({type:"ARROW_NEXT",key:"ArrowRight"})},Home(){r({type:"HOME"})},End(){r({type:"END"})}};let f=ot(b,{dir:o("dir"),orientation:o("orientation")});const y=i[f];if(y){b.preventDefault(),y(b);return}}})},getTriggerState:d,getTriggerProps(b){const{value:i,disabled:f}=b,y=d(b);return a.button({...x.trigger.attrs,role:"tab",type:"button",disabled:f,dir:o("dir"),"data-orientation":o("orientation"),"data-disabled":w(f),"aria-disabled":f,"data-value":i,"aria-selected":y.selected,"data-selected":w(y.selected),"data-focus":w(y.focused),"aria-controls":y.selected?J(c,i):void 0,"data-ownedby":U(c),"data-ssr":w(l.get("ssr")),id:S(c,i),tabIndex:y.selected&&V?0:-1,onFocus(){r({type:"TAB_FOCUS",value:i})},onBlur(R){const A=R.relatedTarget;(A==null?void 0:A.getAttribute("role"))!=="tab"&&r({type:"TAB_BLUR"})},onClick(R){R.defaultPrevented||tt(R)||f||(at()&&R.currentTarget.focus(),r({type:"TAB_CLICK",value:i}))}})},getContentProps(b){const{value:i}=b,f=l.get("value")===i;return a.element({...x.content.attrs,dir:o("dir"),id:J(c,i),tabIndex:V?0:-1,"aria-labelledby":S(c,i),role:"tabpanel","data-ownedby":U(c),"data-selected":w(f),"data-orientation":o("orientation"),hidden:!f})},getIndicatorProps(){const b=l.get("indicatorRect"),i=l.get("indicatorTransition");return a.element({id:Me(c),...x.indicator.attrs,dir:o("dir"),"data-orientation":o("orientation"),style:{"--transition-property":"left, right, top, bottom, width, height","--left":b.left,"--top":b.top,"--width":b.width,"--height":b.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:i?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[h?"left":"top"]:h?"var(--left)":"var(--top)"}})}}}var{createMachine:zt}=lt(),kt=zt({props({props:e}){return{dir:"ltr",orientation:"horizontal",activationMode:"automatic",loopFocus:!0,composite:!0,navigate(a){pt(a.node)},defaultValue:null,...e}},initialState(){return"idle"},context({prop:e,bindable:a}){return{value:a(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(n){var r;(r=e("onValueChange"))==null||r({value:n})}})),focusedValue:a(()=>({defaultValue:e("value")||e("defaultValue"),sync:!0,onChange(n){var r;(r=e("onFocusChange"))==null||r({focusedValue:n})}})),ssr:a(()=>({defaultValue:!0})),indicatorTransition:a(()=>({defaultValue:!1})),indicatorRect:a(()=>({defaultValue:{left:"0px",top:"0px",width:"0px",height:"0px"}}))}},watch({context:e,prop:a,track:n,action:r}){n([()=>e.get("value")],()=>{r(["allowIndicatorTransition","syncIndicatorRect","syncTabIndex","navigateIfNeeded"])}),n([()=>a("dir"),()=>a("orientation")],()=>{r(["syncIndicatorRect"])})},on:{SET_VALUE:{actions:["setValue"]},CLEAR_VALUE:{actions:["clearValue"]},SET_INDICATOR_RECT:{actions:["setIndicatorRect"]},SYNC_TAB_INDEX:{actions:["syncTabIndex"]}},entry:["syncIndicatorRect","syncTabIndex","syncSsr"],exit:["cleanupObserver"],states:{idle:{on:{TAB_FOCUS:{target:"focused",actions:["setFocusedValue"]},TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]}}},focused:{on:{TAB_CLICK:{actions:["setFocusedValue","setValue"]},ARROW_PREV:[{guard:"selectOnFocus",actions:["focusPrevTab","selectFocusedTab"]},{actions:["focusPrevTab"]}],ARROW_NEXT:[{guard:"selectOnFocus",actions:["focusNextTab","selectFocusedTab"]},{actions:["focusNextTab"]}],HOME:[{guard:"selectOnFocus",actions:["focusFirstTab","selectFocusedTab"]},{actions:["focusFirstTab"]}],END:[{guard:"selectOnFocus",actions:["focusLastTab","selectFocusedTab"]},{actions:["focusLastTab"]}],TAB_FOCUS:{actions:["setFocusedValue"]},TAB_BLUR:{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{selectOnFocus:({prop:e})=>e("activationMode")==="automatic"},actions:{selectFocusedTab({context:e,prop:a}){I(()=>{const n=e.get("focusedValue");if(!n)return;const l=a("deselectable")&&e.get("value")===n?null:n;e.set("value",l)})},setFocusedValue({context:e,event:a,flush:n}){a.value!=null&&n(()=>{e.set("focusedValue",a.value)})},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:a,prop:n}){const r=n("deselectable")&&e.get("value")===e.get("focusedValue");e.set("value",r?null:a.value)},clearValue({context:e}){e.set("value",null)},focusFirstTab({scope:e}){I(()=>{var a;(a=Ft(e))==null||a.focus()})},focusLastTab({scope:e}){I(()=>{var a;(a=jt(e))==null||a.focus()})},focusNextTab({context:e,prop:a,scope:n,event:r}){const l=r.value??e.get("focusedValue");if(!l)return;const o=qt(n,{value:l,loopFocus:a("loopFocus")});I(()=>{a("composite")?o==null||o.focus():(o==null?void 0:o.dataset.value)!=null&&e.set("focusedValue",o.dataset.value)})},focusPrevTab({context:e,prop:a,scope:n,event:r}){const l=r.value??e.get("focusedValue");if(!l)return;const o=$t(n,{value:l,loopFocus:a("loopFocus")});I(()=>{a("composite")?o==null||o.focus():(o==null?void 0:o.dataset.value)!=null&&e.set("focusedValue",o.dataset.value)})},syncTabIndex({context:e,scope:a}){I(()=>{const n=e.get("value");if(!n)return;const r=Ot(a,n);if(!r)return;it(r).length>0?r.removeAttribute("tabindex"):r.setAttribute("tabindex","0")})},cleanupObserver({refs:e}){const a=e.get("indicatorCleanup");a&&a()},allowIndicatorTransition({context:e}){e.set("indicatorTransition",!0)},setIndicatorRect({context:e,event:a,scope:n}){const r=a.id??e.get("value");if(!le(n))return;if(!r){e.set("indicatorTransition",!1);return}X(n,r)&&(e.set("indicatorRect",Dt(n,r)),ut(()=>{e.set("indicatorTransition",!1)}))},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,refs:a,scope:n}){const r=a.get("indicatorCleanup");r&&r();const l=e.get("value");if(!l){e.set("indicatorTransition",!1);return}const o=X(n,l),c=le(n);if(!o||!c)return;const v=ct([o],{measure(E){return Ue(E)},onEntry({rects:E}){const[_]=E;e.set("indicatorRect",Ze(_))}});a.set("indicatorCleanup",v)},navigateIfNeeded({context:e,prop:a,scope:n}){var o;const r=e.get("value");if(!r)return;const l=X(n,r);bt(l)&&((o=a("navigate"))==null||o({value:r,node:l,href:l.href}))}}}});te()(["activationMode","composite","deselectable","dir","getRootNode","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value","defaultValue"]);te()(["disabled","value"]);te()(["value"]);const Mt=e=>{const a=T.useId(),{getRootNode:n}=_t(),{dir:r}=Et(),l={id:a,dir:r,getRootNode:n,...e},o=Ct(kt,l);return Wt(o,ht)},Xe=T.forwardRef((e,a)=>{const[n,r]=Vt(e),[l,o]=ee()(r,["activationMode","composite","defaultValue","deselectable","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value"]),c=Mt(l),v=G(c.getRootProps(),o);return m.jsx(Nt,{value:c,children:m.jsx(At,{value:n,children:m.jsx(H.div,{...v,ref:a})})})});Xe.displayName="TabsRoot";var P=(e=>(e.md="md",e.sm="sm",e.xs="xs",e))(P||{});const Ut=Object.freeze(Object.values(P));var L=(e=>(e.default="default",e.switch="switch",e))(L||{});const Zt=Object.freeze(Object.values(L)),Ge=T.createContext(void 0);function He({children:e,size:a,variant:n,withArrows:r}){const[l,o]=T.useState(null);return m.jsx(Ge.Provider,{value:{scrollContainerRef:l,setScrollContainerRef:o,size:a,variant:n,withArrows:r},children:e})}function Ye(){return Ke(Ge)}He.__docgenInfo={description:"",methods:[],displayName:"TabsProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const p=T.forwardRef(({children:e,className:a,defaultValue:n,onValueChange:r,size:l=P.md,value:o,variant:c=L.default,withArrows:v,...E},_)=>(T.useEffect(()=>{!o&&!n&&console.warn("No value or defaultValue provided. Please provide `defaultValue` or a controlled `value`")},[o,n]),m.jsx(He,{size:l,variant:c,withArrows:v,children:m.jsx(Xe,{className:a,"data-ods":"tabs",defaultValue:n,onValueChange:r,ref:_,value:o,...E,children:e})})));p.displayName="Tabs";p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected tab. Use when you don't need to control the value of the tabs."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: TabsValueChangeEvent) => void",signature:{arguments:[{type:{name:"TabsValueChangeEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the state of selected tab changes."},size:{required:!1,tsType:{name:"literal",value:"`${TABS_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"TABS_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected tab."},variant:{required:!1,tsType:{name:"literal",value:"`${TABS_VARIANT}`"},description:"The variant preset to use.",defaultValue:{value:"TABS_VARIANT.default",computed:!0}},withArrows:{required:!1,tsType:{name:"boolean"},description:"Whether the component displays navigation arrows around the tabs."}},composes:["Omit"]};function Xt(e,a){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),a)}}const C={"tab-list":"_tab-list_gq3ln_6","tab-list__left-arrow":"_tab-list__left-arrow_gq3ln_17","tab-list__right-arrow":"_tab-list__right-arrow_gq3ln_17","tab-list__left-arrow--xs":"_tab-list__left-arrow--xs_gq3ln_36","tab-list__right-arrow--xs":"_tab-list__right-arrow--xs_gq3ln_36","tab-list__left-arrow--md":"_tab-list__left-arrow--md_gq3ln_42","tab-list__left-arrow--sm":"_tab-list__left-arrow--sm_gq3ln_45","tab-list__left-arrow--active":"_tab-list__left-arrow--active_gq3ln_51","tab-list__right-arrow--md":"_tab-list__right-arrow--md_gq3ln_57","tab-list__right-arrow--sm":"_tab-list__right-arrow--sm_gq3ln_60","tab-list__right-arrow--active":"_tab-list__right-arrow--active_gq3ln_66","tab-list__container":"_tab-list__container_gq3ln_69","tab-list__container--default":"_tab-list__container--default_gq3ln_80","tab-list__container--switch":"_tab-list__container--switch_gq3ln_91","tab-list__container--md":"_tab-list__container--md_gq3ln_94","tab-list__container--sm":"_tab-list__container--sm_gq3ln_97","tab-list__container--xs":"_tab-list__container--xs_gq3ln_100","tab-list__container__tabs":"_tab-list__container__tabs_gq3ln_103"},g=T.forwardRef(({children:e,className:a,...n},r)=>{const{setScrollContainerRef:l,size:o,variant:c,withArrows:v}=Ye(),[E,_]=T.useState(!1),[h,V]=T.useState(!1),d=T.useRef(null);T.useEffect(()=>{l(d)},[l]);const b=T.useCallback(()=>{_(d.current?d.current.scrollLeft===0:!1),V(d.current?Math.ceil(d.current.scrollLeft)>=d.current.scrollWidth-d.current.offsetWidth:!1)},[]),i=T.useMemo(()=>Xt(b,50),[b]);T.useEffect(()=>{if(b(),d.current){const A=new ResizeObserver(()=>{b()});return A.observe(d.current),()=>{A.disconnect()}}},[b]);function f(A){var ae;(ae=d.current)==null||ae.scrollBy({behavior:"smooth",left:A})}function y(){d.current&&f(-d.current.offsetWidth)}function R(){d.current&&f(d.current.offsetWidth)}return m.jsxs("div",{className:N(C["tab-list"],a),"data-ods":"tab-list",ref:r,...n,children:[v&&m.jsx("div",{className:N(C["tab-list__left-arrow"],C[`tab-list__left-arrow--${o}`],{[C["tab-list__left-arrow--active"]]:!E}),children:m.jsx(re,{disabled:E,onClick:y,size:o,tabIndex:-1,variant:ne.ghost,children:m.jsx(se,{name:oe.chevronLeft})})}),m.jsx("div",{className:N(C["tab-list__container"],C[`tab-list__container--${o}`],C[`tab-list__container--${c}`]),onScroll:i,ref:d,tabIndex:-1,children:m.jsx(ze,{className:C["tab-list__container__tabs"],children:e})}),v&&m.jsx("div",{className:N(C["tab-list__right-arrow"],C[`tab-list__right-arrow--${o}`],{[C["tab-list__right-arrow--active"]]:!h}),children:m.jsx(re,{disabled:h,onClick:R,size:o,tabIndex:-1,variant:ne.ghost,children:m.jsx(se,{name:oe.chevronRight})})})]})});g.__docgenInfo={description:"",methods:[],displayName:"TabList",composes:["ComponentPropsWithRef"]};const Gt="_tab_r0pgc_6",Q={tab:Gt,"tab--default":"_tab--default_r0pgc_56","tab--md":"_tab--md_r0pgc_77","tab--sm":"_tab--sm_r0pgc_82","tab--xs":"_tab--xs_r0pgc_87","tab--switch":"_tab--switch_r0pgc_92"},s=T.forwardRef(({children:e,className:a,value:n,...r},l)=>{const{focusedValue:o}=Y(),{scrollContainerRef:c,size:v,variant:E}=Ye(),_=T.useRef(null);return T.useImperativeHandle(l,()=>_.current,[_]),T.useEffect(()=>{if(_.current&&o===n&&(c!=null&&c.current)){const h=_.current,V=c.current,d=h.offsetLeft,b=d+h.offsetWidth,i=V.scrollLeft,f=V.clientWidth;d<i?V.scrollTo({behavior:"smooth",left:d}):b>i+f&&V.scrollTo({behavior:"smooth",left:b-f})}},[o,n,c]),m.jsx(ke,{className:N(Q.tab,Q[`tab--${v}`],Q[`tab--${E}`],a),"data-ods":"tab",ref:_,value:n,...r,children:e})});s.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab item."}},composes:["ComponentPropsWithRef"]};const Ht={"tab-content":"_tab-content_3i2hx_2"},u=T.forwardRef(({children:e,className:a,value:n,...r},l)=>m.jsx(We,{className:N(Ht["tab-content"],a),"data-ods":"tab-content",ref:l,value:n,...r,children:e}));u.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab content item."}},composes:["ComponentPropsWithRef"]};const Yt={component:p,subcomponents:{TabList:g,Tab:s,TabContent:u},argTypes:St(["defaultValue","onValueChange","value"]),title:"React Components/Tabs"},B={render:e=>t.createElement(p,{defaultValue:"tab1",...e},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6")),t.createElement(u,{value:"tab1"},t.createElement("p",null,"Tab 1 Content")),t.createElement(u,{value:"tab2"},t.createElement("p",null,"Tab 2 Content")),t.createElement(u,{value:"tab3"},t.createElement("p",null,"Tab 3 Content")),t.createElement(u,{value:"tab4"},t.createElement("p",null,"Tab 4 Content")),t.createElement(u,{value:"tab5"},t.createElement("p",null,"Tab 5 Content")),t.createElement(u,{value:"tab6"},t.createElement("p",null,"Tab 6 Content"))),argTypes:Lt({size:{table:{category:K.design,type:{summary:"TABS_SIZE"}},control:{type:"select"},options:Ut},variant:{table:{category:K.design,type:{summary:"TABS_VARIANT"}},control:{type:"select"},options:Zt},withArrows:{table:{category:K.design},control:{type:"boolean"}}})},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(p,{defaultValue:"tab1"},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},F={globals:{imports:`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...It()}}},render:({})=>{const[e,a]=T.useState("tab1"),n=r=>{a(r.value)};return t.createElement(p,{onValueChange:n,value:e},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))}},j={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(p,{defaultValue:"tab1"},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},q={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(p,{defaultValue:"tab1"},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2",disabled:!0},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},$={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement("div",{style:{width:"300px"}},t.createElement(p,{defaultValue:"tab1"},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6"))))},D={globals:{imports:"import { TABS_SIZE, TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(t.Fragment,null,t.createElement("p",null,"MD"),t.createElement(p,{defaultValue:"tab1",size:P.md,variant:L.switch},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"))),t.createElement("p",null,"SM"),t.createElement(p,{defaultValue:"tab1",size:P.sm,variant:L.switch},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"))),t.createElement("p",null,"XS"),t.createElement(p,{defaultValue:"tab1",size:P.xs,variant:L.switch},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"))))},W={globals:{imports:"import { TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(p,{defaultValue:"tab1",variant:L.switch},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")))},z={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(p,{defaultValue:"tab1",withArrows:!0},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6"),t.createElement(s,{value:"tab7"},"Tab 7"),t.createElement(s,{value:"tab8"},"Tab 8"),t.createElement(s,{value:"tab9"},"Tab 9"),t.createElement(s,{value:"tab10"},"Tab 10"),t.createElement(s,{value:"tab11"},"Tab 11"),t.createElement(s,{value:"tab12"},"Tab 12"),t.createElement(s,{value:"tab13"},"Tab 13"),t.createElement(s,{value:"tab14"},"Tab 14"),t.createElement(s,{value:"tab15"},"Tab 15")))},k={globals:{imports:"import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(p,{defaultValue:"tab1"},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2"},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3")),t.createElement(u,{value:"tab1"},t.createElement("p",null,"Content 1")),t.createElement(u,{value:"tab2"},t.createElement("p",null,"Content 2")),t.createElement(u,{value:"tab3"},t.createElement("p",null,"Content 3")))},M={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>t.createElement(p,{withArrows:!0,defaultValue:"tab1"},t.createElement(g,null,t.createElement(s,{value:"tab1"},"Tab 1"),t.createElement(s,{value:"tab2",disabled:!0},"Tab 2"),t.createElement(s,{value:"tab3"},"Tab 3"),t.createElement(s,{value:"tab4"},"Tab 4"),t.createElement(s,{value:"tab5"},"Tab 5"),t.createElement(s,{value:"tab6"},"Tab 6"),t.createElement(s,{value:"tab7"},"Tab 7"),t.createElement(s,{value:"tab8"},"Tab 8"),t.createElement(s,{value:"tab9"},"Tab 9"),t.createElement(s,{value:"tab10"},"Tab 10"),t.createElement(s,{value:"tab11"},"Tab 11"),t.createElement(s,{value:"tab12"},"Tab 12"),t.createElement(s,{value:"tab13"},"Tab 13"),t.createElement(s,{value:"tab14"},"Tab 14"),t.createElement(s,{value:"tab15"},"Tab 15")),t.createElement(u,{value:"tab1"},t.createElement("p",null,"Content 1")),t.createElement(u,{value:"tab2"},t.createElement("p",null,"Content 2")),t.createElement(u,{value:"tab3"},t.createElement("p",null,"Content 3")),t.createElement(u,{value:"tab4"},t.createElement("p",null,"Content 4")),t.createElement(u,{value:"tab5"},t.createElement("p",null,"Content 5")),t.createElement(u,{value:"tab6"},t.createElement("p",null,"Content 6")),t.createElement(u,{value:"tab7"},t.createElement("p",null,"Content 7")),t.createElement(u,{value:"tab8"},t.createElement("p",null,"Content 8")),t.createElement(u,{value:"tab9"},t.createElement("p",null,"Content 9")),t.createElement(u,{value:"tab10"},t.createElement("p",null,"Content 10")),t.createElement(u,{value:"tab11"},t.createElement("p",null,"Content 11")),t.createElement(u,{value:"tab12"},t.createElement("p",null,"Content 12")),t.createElement(u,{value:"tab13"},t.createElement("p",null,"Content 13")),t.createElement(u,{value:"tab14"},t.createElement("p",null,"Content 14")),t.createElement(u,{value:"tab15"},t.createElement("p",null,"Content 15")))};var be,ce,ue;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ue=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ie,Te,de;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:de.source}}};var me,ve,pe;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:pe.source}}};var fe,ge,_e;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(_e=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};var Ee,Ce,he;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(he=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:he.source}}};var ye,Ve,Ae;$.parameters={...$.parameters,docs:{...(ye=$.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ae=(Ve=$.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};var Re,we,Se;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Se=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Le,Ie,Ne;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ne=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source}}};var Pe,xe,Be;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Be=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Oe,Fe,je;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(je=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var qe,$e,De;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(De=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};const Kt=["Demo","Overview","Controlled","Default","Disabled","Overflow","Size","Variant","WithArrows","WithContent","ThemeGenerator"],ca=Object.freeze(Object.defineProperty({__proto__:null,Controlled:F,Default:j,Demo:B,Disabled:q,Overflow:$,Overview:O,Size:D,ThemeGenerator:M,Variant:W,WithArrows:z,WithContent:k,__namedExportsOrder:Kt,default:Yt},Symbol.toStringTag,{value:"Module"}));export{F as C,j as D,O,D as S,ca as T,W as V,k as W,q as a,$ as b,z as c};
