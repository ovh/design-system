import{r as d,e as t}from"./index-jIWwRBLr.js";import{j as T}from"./jsx-runtime-Cfl8ynUo.js";import{c as De,a as K,T as M,U as q,V as ke,Q as $e,P as w,av as Ue,X as Me,aa as qe,s as Xe,d as He,W as ze,C as G,ad as Ke,aw as Ge,ax as Ye,A as Ze,r as I,F as Qe,$ as Je,a0 as et,Z as tt,_ as at,ay as nt,az as rt,a4 as ot,u as st,R as lt,D as bt,S as ut}from"./use-locale-context-6s5qsrWI.js";import{u as ct,s as it,R as dt}from"./render-strategy-BOAyFnMW.js";import{c as D}from"./index-CqY9YpN0.js";import{B as Y,d as Z,c as Q}from"./Button-B-GJ-1TA.js";import{I as J,a as ee}from"./icon-name-C581wThh.js";import{a as Tt,P as vt}from"./use-presence-Dwt5F0sJ.js";import{e as mt,o as pt,C as ft}from"./controls-BtiQQn1l.js";import{s as gt}from"./source-CPEZJ6oD.js";const[Ct,X]=De({name:"TabsContext",hookName:"useTabsContext",providerName:"<TabsProvider />"}),Ae=d.forwardRef((e,a)=>{const[r,n]=K()(e,["value"]),l=X(),s=ct(),u=Tt({...s,present:l.value===e.value,immediate:!0}),m=M(l.getContentProps(r),u.getPresenceProps(),n);return T.jsx(vt,{value:u,children:u.unmounted?null:T.jsx(q.div,{...m,ref:ke(u.ref,a)})})});Ae.displayName="TabContent";const Pe=d.forwardRef((e,a)=>{const r=X(),n=M(r.getListProps(),e);return T.jsx(q.div,{...n,ref:a})});Pe.displayName="TabList";const Se=d.forwardRef((e,a)=>{const[r,n]=K()(e,["disabled","value"]),l=X(),s=M(l.getTriggerProps(r),n);return T.jsx(q.button,{...s,ref:a})});Se.displayName="TabTrigger";var Et=$e("tabs").parts("root","list","trigger","content","indicator"),A=Et.build(),ht=e=>{var a;return((a=e.ids)==null?void 0:a.root)??`tabs:${e.id}`},k=e=>{var a;return((a=e.ids)==null?void 0:a.list)??`tabs:${e.id}:list`},z=(e,a)=>{var r,n;return((n=(r=e.ids)==null?void 0:r.content)==null?void 0:n.call(r,a))??`tabs:${e.id}:content-${a}`},L=(e,a)=>{var r,n;return((n=(r=e.ids)==null?void 0:r.trigger)==null?void 0:n.call(r,a))??`tabs:${e.id}:trigger-${a}`},Ne=e=>{var a;return((a=e.ids)==null?void 0:a.indicator)??`tabs:${e.id}:indicator`},_t=e=>e.getById(k(e)),yt=(e,a)=>e.getById(z(e,a)),U=(e,a)=>e.getById(L(e,a)),te=e=>e.getById(Ne(e)),$=e=>{const r=`[role=tab][data-ownedby='${CSS.escape(k(e))}']:not([disabled])`;return ot(_t(e),r)},Rt=e=>at($(e)),wt=e=>tt($(e)),Vt=(e,a)=>et($(e),L(e,a.value),a.loopFocus),Lt=(e,a)=>Je($(e),L(e,a.value),a.loopFocus),xe=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),It=(e,a)=>{const r=rt($(e),L(e,a));return Oe(xe(r))},Oe=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function At(e,a){const{state:r,send:n,context:l,prop:s,scope:u}=e,m=s("translations"),f=r.matches("focused"),C=s("orientation")==="vertical",i=s("orientation")==="horizontal",E=s("composite");function R(b){return{selected:l.get("value")===b.value,focused:l.get("focusedValue")===b.value,disabled:!!b.disabled}}return{value:l.get("value"),focusedValue:l.get("focusedValue"),setValue(b){n({type:"SET_VALUE",value:b})},clearValue(){n({type:"CLEAR_VALUE"})},setIndicatorRect(b){const v=L(u,b);n({type:"SET_INDICATOR_RECT",id:v})},syncTabIndex(){n({type:"SYNC_TAB_INDEX"})},selectNext(b){n({type:"TAB_FOCUS",value:b,src:"selectNext"}),n({type:"ARROW_NEXT",src:"selectNext"})},selectPrev(b){n({type:"TAB_FOCUS",value:b,src:"selectPrev"}),n({type:"ARROW_PREV",src:"selectPrev"})},focus(){var v;const b=l.get("value");b&&((v=U(u,b))==null||v.focus())},getRootProps(){return a.element({...A.root.attrs,id:ht(u),"data-orientation":s("orientation"),"data-focus":w(f),dir:s("dir")})},getListProps(){return a.element({...A.list.attrs,id:k(u),role:"tablist",dir:s("dir"),"data-focus":w(f),"aria-orientation":s("orientation"),"data-orientation":s("orientation"),"aria-label":m==null?void 0:m.listLabel,onKeyDown(b){if(b.defaultPrevented||qe(b)||!Xe(b.currentTarget,He(b)))return;const v={ArrowDown(){i||n({type:"ARROW_NEXT",key:"ArrowDown"})},ArrowUp(){i||n({type:"ARROW_PREV",key:"ArrowUp"})},ArrowLeft(){C||n({type:"ARROW_PREV",key:"ArrowLeft"})},ArrowRight(){C||n({type:"ARROW_NEXT",key:"ArrowRight"})},Home(){n({type:"HOME"})},End(){n({type:"END"})}};let h=ze(b,{dir:s("dir"),orientation:s("orientation")});const p=v[h];if(p){b.preventDefault(),p(b);return}}})},getTriggerState:R,getTriggerProps(b){const{value:v,disabled:h}=b,p=R(b);return a.button({...A.trigger.attrs,role:"tab",type:"button",disabled:h,dir:s("dir"),"data-orientation":s("orientation"),"data-disabled":w(h),"aria-disabled":h,"data-value":v,"aria-selected":p.selected,"data-selected":w(p.selected),"data-focus":w(p.focused),"aria-controls":p.selected?z(u,v):void 0,"data-ownedby":k(u),"data-ssr":w(l.get("ssr")),id:L(u,v),tabIndex:p.selected&&E?0:-1,onFocus(){n({type:"TAB_FOCUS",value:v})},onBlur(y){const H=y.relatedTarget;(H==null?void 0:H.getAttribute("role"))!=="tab"&&n({type:"TAB_BLUR"})},onClick(y){y.defaultPrevented||Ue(y)||h||(Me()&&y.currentTarget.focus(),n({type:"TAB_CLICK",value:v}))}})},getContentProps(b){const{value:v}=b,h=l.get("value")===v;return a.element({...A.content.attrs,dir:s("dir"),id:z(u,v),tabIndex:E?0:-1,"aria-labelledby":L(u,v),role:"tabpanel","data-ownedby":k(u),"data-selected":w(h),"data-orientation":s("orientation"),hidden:!h})},getIndicatorProps(){const b=l.get("indicatorRect"),v=l.get("indicatorTransition");return a.element({id:Ne(u),...A.indicator.attrs,dir:s("dir"),"data-orientation":s("orientation"),style:{"--transition-property":"left, right, top, bottom, width, height","--left":b.left,"--top":b.top,"--width":b.width,"--height":b.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:v?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[i?"left":"top"]:i?"var(--left)":"var(--top)"}})}}}var{createMachine:Pt}=Ke(),St=Pt({props({props:e}){return{dir:"ltr",orientation:"horizontal",activationMode:"automatic",loopFocus:!0,composite:!0,navigate(a){nt(a.node)},defaultValue:null,...e}},initialState(){return"idle"},context({prop:e,bindable:a}){return{value:a(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(r){var n;(n=e("onValueChange"))==null||n({value:r})}})),focusedValue:a(()=>({defaultValue:e("value")||e("defaultValue"),sync:!0,onChange(r){var n;(n=e("onFocusChange"))==null||n({focusedValue:r})}})),ssr:a(()=>({defaultValue:!0})),indicatorTransition:a(()=>({defaultValue:!1})),indicatorRect:a(()=>({defaultValue:{left:"0px",top:"0px",width:"0px",height:"0px"}}))}},watch({context:e,prop:a,track:r,action:n}){r([()=>e.get("value")],()=>{n(["allowIndicatorTransition","syncIndicatorRect","syncTabIndex","navigateIfNeeded"])}),r([()=>a("dir"),()=>a("orientation")],()=>{n(["syncIndicatorRect"])})},on:{SET_VALUE:{actions:["setValue"]},CLEAR_VALUE:{actions:["clearValue"]},SET_INDICATOR_RECT:{actions:["setIndicatorRect"]},SYNC_TAB_INDEX:{actions:["syncTabIndex"]}},entry:["syncIndicatorRect","syncTabIndex","syncSsr"],exit:["cleanupObserver"],states:{idle:{on:{TAB_FOCUS:{target:"focused",actions:["setFocusedValue"]},TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]}}},focused:{on:{TAB_CLICK:{actions:["setFocusedValue","setValue"]},ARROW_PREV:[{guard:"selectOnFocus",actions:["focusPrevTab","selectFocusedTab"]},{actions:["focusPrevTab"]}],ARROW_NEXT:[{guard:"selectOnFocus",actions:["focusNextTab","selectFocusedTab"]},{actions:["focusNextTab"]}],HOME:[{guard:"selectOnFocus",actions:["focusFirstTab","selectFocusedTab"]},{actions:["focusFirstTab"]}],END:[{guard:"selectOnFocus",actions:["focusLastTab","selectFocusedTab"]},{actions:["focusLastTab"]}],TAB_FOCUS:{actions:["setFocusedValue"]},TAB_BLUR:{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{selectOnFocus:({prop:e})=>e("activationMode")==="automatic"},actions:{selectFocusedTab({context:e,prop:a}){I(()=>{const r=e.get("focusedValue");if(!r)return;const l=a("deselectable")&&e.get("value")===r?null:r;e.set("value",l)})},setFocusedValue({context:e,event:a,flush:r}){a.value!=null&&r(()=>{e.set("focusedValue",a.value)})},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:a,prop:r}){const n=r("deselectable")&&e.get("value")===e.get("focusedValue");e.set("value",n?null:a.value)},clearValue({context:e}){e.set("value",null)},focusFirstTab({scope:e}){I(()=>{var a;(a=Rt(e))==null||a.focus()})},focusLastTab({scope:e}){I(()=>{var a;(a=wt(e))==null||a.focus()})},focusNextTab({context:e,prop:a,scope:r,event:n}){const l=n.value??e.get("focusedValue");if(!l)return;const s=Vt(r,{value:l,loopFocus:a("loopFocus")});I(()=>{a("composite")?s==null||s.focus():(s==null?void 0:s.dataset.value)!=null&&e.set("focusedValue",s.dataset.value)})},focusPrevTab({context:e,prop:a,scope:r,event:n}){const l=n.value??e.get("focusedValue");if(!l)return;const s=Lt(r,{value:l,loopFocus:a("loopFocus")});I(()=>{a("composite")?s==null||s.focus():(s==null?void 0:s.dataset.value)!=null&&e.set("focusedValue",s.dataset.value)})},syncTabIndex({context:e,scope:a}){I(()=>{const r=e.get("value");if(!r)return;const n=yt(a,r);if(!n)return;Qe(n).length>0?n.removeAttribute("tabindex"):n.setAttribute("tabindex","0")})},cleanupObserver({refs:e}){const a=e.get("indicatorCleanup");a&&a()},allowIndicatorTransition({context:e}){e.set("indicatorTransition",!0)},setIndicatorRect({context:e,event:a,scope:r}){const n=a.id??e.get("value");if(!te(r))return;if(!n){e.set("indicatorTransition",!1);return}U(r,n)&&(e.set("indicatorRect",It(r,n)),Ze(()=>{e.set("indicatorTransition",!1)}))},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,refs:a,scope:r}){const n=a.get("indicatorCleanup");n&&n();const l=e.get("value");if(!l){e.set("indicatorTransition",!1);return}const s=U(r,l),u=te(r);if(!s||!u)return;const m=Ye([s],{measure(f){return xe(f)},onEntry({rects:f}){const[C]=f;e.set("indicatorRect",Oe(C))}});a.set("indicatorCleanup",m)},navigateIfNeeded({context:e,prop:a,scope:r}){var s;const n=e.get("value");if(!n)return;const l=U(r,n);Ge(l)&&((s=a("navigate"))==null||s({value:n,node:l,href:l.href}))}}}});G()(["activationMode","composite","deselectable","dir","getRootNode","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value","defaultValue"]);G()(["disabled","value"]);G()(["value"]);const Nt=e=>{const a=d.useId(),{getRootNode:r}=st(),{dir:n}=lt(),l={id:a,dir:n,getRootNode:r,...e},s=bt(St,l);return At(s,ut)},Fe=d.forwardRef((e,a)=>{const[r,n]=it(e),[l,s]=K()(n,["activationMode","composite","defaultValue","deselectable","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value"]),u=Nt(l),m=M(u.getRootProps(),s);return T.jsx(Ct,{value:u,children:T.jsx(dt,{value:r,children:T.jsx(q.div,{...m,ref:a})})})});Fe.displayName="TabsRoot";const Be=d.createContext({});function We({children:e,withArrows:a}){const[r,n]=d.useState(null);return T.jsx(Be.Provider,{value:{scrollContainerRef:r,setScrollContainerRef:n,withArrows:a},children:e})}function je(){return d.useContext(Be)}We.__docgenInfo={description:"",methods:[],displayName:"TabsProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const g=d.forwardRef(({children:e,className:a,defaultValue:r,onValueChange:n,value:l,withArrows:s,...u},m)=>(d.useEffect(()=>{!l&&!r&&console.warn("No value or defaultValue provided. Please provide `defaultValue` or a controlled `value`")},[l,r]),T.jsx(We,{withArrows:s,children:T.jsx(Fe,{className:a,"data-ods":"tabs",defaultValue:r,onValueChange:n,ref:m,value:l,...u,children:e})})));g.displayName="Tabs";g.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected tab. Use when you don't need to control the value of the tabs."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: TabsValueChangeEvent) => void",signature:{arguments:[{type:{name:"TabsValueChangeEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the state of selected tab changes."},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected tab."},withArrows:{required:!1,tsType:{name:"boolean"},description:"Whether the component displays navigation arrows around the tabs."}},composes:["Omit"]};function xt(e,a){let r;return(...n)=>{clearTimeout(r),r=setTimeout(()=>e(...n),a)}}const V={"tab-list":"_tab-list_1yohb_2","tab-list__left-arrow":"_tab-list__left-arrow_1yohb_8","tab-list__right-arrow":"_tab-list__right-arrow_1yohb_8","tab-list__left-arrow--active":"_tab-list__left-arrow--active_1yohb_30","tab-list__right-arrow--active":"_tab-list__right-arrow--active_1yohb_37","tab-list__container":"_tab-list__container_1yohb_41","tab-list__container__tabs":"_tab-list__container__tabs_1yohb_61"},_=d.forwardRef(({children:e,className:a,...r},n)=>{const{withArrows:l,setScrollContainerRef:s}=je(),[u,m]=d.useState(!1),[f,C]=d.useState(!1),i=d.useRef(null);d.useEffect(()=>{s&&s(i)},[s]);const E=d.useCallback(()=>{m(i.current?i.current.scrollLeft===0:!1),C(i.current?i.current.scrollLeft===i.current.scrollWidth-i.current.offsetWidth:!1)},[]),R=d.useMemo(()=>xt(E,50),[E]);d.useEffect(()=>{if(E(),i.current){const p=new ResizeObserver(()=>{E()});return p.observe(i.current),()=>{p.disconnect()}}},[E]);function b(p){var y;(y=i.current)==null||y.scrollBy({behavior:"smooth",left:p})}function v(){i.current&&b(-i.current.offsetWidth)}function h(){i.current&&b(i.current.offsetWidth)}return T.jsxs("div",{className:D(V["tab-list"],a),"data-ods":"tab-list",ref:n,...r,children:[l&&T.jsx("div",{className:D(V["tab-list__left-arrow"],{[V["tab-list__left-arrow--active"]]:!u}),children:T.jsx(Y,{disabled:u,onClick:v,size:Q.xs,tabIndex:-1,variant:Z.ghost,children:T.jsx(J,{name:ee.chevronLeft})})}),T.jsx("div",{className:V["tab-list__container"],onScroll:R,ref:i,tabIndex:-1,children:T.jsx(Pe,{className:V["tab-list__container__tabs"],children:e})}),l&&T.jsx("div",{className:D(V["tab-list__right-arrow"],{[V["tab-list__right-arrow--active"]]:!f}),children:T.jsx(Y,{disabled:f,onClick:h,size:Q.xs,tabIndex:-1,variant:Z.ghost,children:T.jsx(J,{name:ee.chevronRight})})})]})});_.__docgenInfo={description:"",methods:[],displayName:"TabList",composes:["ComponentPropsWithRef"]};const Ot="_tab_154pw_2",Ft={tab:Ot},o=d.forwardRef(({children:e,className:a,value:r,...n},l)=>{const{focusedValue:s}=X(),{scrollContainerRef:u}=je(),m=d.useRef(null);return d.useImperativeHandle(l,()=>m.current,[m]),d.useEffect(()=>{if(m.current&&s===r&&(u!=null&&u.current)){const f=m.current,C=u.current,i=f.offsetLeft,E=i+f.offsetWidth,R=C.scrollLeft,b=C.clientWidth;i<R?C.scrollTo({behavior:"smooth",left:i}):E>R+b&&C.scrollTo({behavior:"smooth",left:E-b})}},[s,r,u]),T.jsx(Se,{className:D(Ft.tab,a),"data-ods":"tab",ref:m,value:r,...n,children:e})});o.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab item."}},composes:["ComponentPropsWithRef"]};const Bt={"tab-content":"_tab-content_3i2hx_2"},c=d.forwardRef(({children:e,className:a,value:r,...n},l)=>T.jsx(Ae,{className:D(Bt["tab-content"],a),"data-ods":"tab-content",ref:l,value:r,...n,children:e}));c.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab content item."}},composes:["ComponentPropsWithRef"]};const Wt={component:g,subcomponents:{TabList:_,Tab:o,TabContent:c},argTypes:mt(["defaultValue","onValueChange","value"]),title:"React Components/Tabs"},P={render:e=>t.createElement(g,{defaultValue:"tab1",withArrows:e.withArrows},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2"},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3"),t.createElement(o,{value:"tab4"},"Tab 4"),t.createElement(o,{value:"tab5"},"Tab 5"),t.createElement(o,{value:"tab6"},"Tab 6")),t.createElement(c,{value:"tab1"},t.createElement("p",null,"Tab 1 Content")),t.createElement(c,{value:"tab2"},t.createElement("p",null,"Tab 2 Content")),t.createElement(c,{value:"tab3"},t.createElement("p",null,"Tab 3 Content")),t.createElement(c,{value:"tab4"},t.createElement("p",null,"Tab 4 Content")),t.createElement(c,{value:"tab5"},t.createElement("p",null,"Tab 5 Content")),t.createElement(c,{value:"tab6"},t.createElement("p",null,"Tab 6 Content"))),argTypes:pt({withArrows:{table:{category:ft.design},control:{type:"boolean"}}})},S={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(g,{defaultValue:"tab1"},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2"},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3")))},N={globals:{imports:`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...gt()}}},render:({})=>{const[e,a]=d.useState("tab1"),r=n=>{a(n.value)};return t.createElement(g,{onValueChange:r,value:e},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2"},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3")))}},x={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(g,{defaultValue:"tab1"},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2"},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3")))},O={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(g,{defaultValue:"tab1"},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2",disabled:!0},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3")))},F={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement("div",{style:{width:"300px"}},t.createElement(g,{defaultValue:"tab1"},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2"},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3"),t.createElement(o,{value:"tab4"},"Tab 4"),t.createElement(o,{value:"tab5"},"Tab 5"),t.createElement(o,{value:"tab6"},"Tab 6"))))},B={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(g,{defaultValue:"tab1",withArrows:!0},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2"},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3"),t.createElement(o,{value:"tab4"},"Tab 4"),t.createElement(o,{value:"tab5"},"Tab 5"),t.createElement(o,{value:"tab6"},"Tab 6"),t.createElement(o,{value:"tab7"},"Tab 7"),t.createElement(o,{value:"tab8"},"Tab 8"),t.createElement(o,{value:"tab9"},"Tab 9"),t.createElement(o,{value:"tab10"},"Tab 10"),t.createElement(o,{value:"tab11"},"Tab 11"),t.createElement(o,{value:"tab12"},"Tab 12"),t.createElement(o,{value:"tab13"},"Tab 13"),t.createElement(o,{value:"tab14"},"Tab 14"),t.createElement(o,{value:"tab15"},"Tab 15")))},W={globals:{imports:"import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(g,{defaultValue:"tab1"},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2"},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3")),t.createElement(c,{value:"tab1"},t.createElement("p",null,"Content 1")),t.createElement(c,{value:"tab2"},t.createElement("p",null,"Content 2")),t.createElement(c,{value:"tab3"},t.createElement("p",null,"Content 3")))},j={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>t.createElement(g,{withArrows:!0,defaultValue:"tab1"},t.createElement(_,null,t.createElement(o,{value:"tab1"},"Tab 1"),t.createElement(o,{value:"tab2",disabled:!0},"Tab 2"),t.createElement(o,{value:"tab3"},"Tab 3"),t.createElement(o,{value:"tab4"},"Tab 4"),t.createElement(o,{value:"tab5"},"Tab 5"),t.createElement(o,{value:"tab6"},"Tab 6"),t.createElement(o,{value:"tab7"},"Tab 7"),t.createElement(o,{value:"tab8"},"Tab 8"),t.createElement(o,{value:"tab9"},"Tab 9"),t.createElement(o,{value:"tab10"},"Tab 10"),t.createElement(o,{value:"tab11"},"Tab 11"),t.createElement(o,{value:"tab12"},"Tab 12"),t.createElement(o,{value:"tab13"},"Tab 13"),t.createElement(o,{value:"tab14"},"Tab 14"),t.createElement(o,{value:"tab15"},"Tab 15")),t.createElement(c,{value:"tab1"},t.createElement("p",null,"Content 1")),t.createElement(c,{value:"tab2"},t.createElement("p",null,"Content 2")),t.createElement(c,{value:"tab3"},t.createElement("p",null,"Content 3")),t.createElement(c,{value:"tab4"},t.createElement("p",null,"Content 4")),t.createElement(c,{value:"tab5"},t.createElement("p",null,"Content 5")),t.createElement(c,{value:"tab6"},t.createElement("p",null,"Content 6")),t.createElement(c,{value:"tab7"},t.createElement("p",null,"Content 7")),t.createElement(c,{value:"tab8"},t.createElement("p",null,"Content 8")),t.createElement(c,{value:"tab9"},t.createElement("p",null,"Content 9")),t.createElement(c,{value:"tab10"},t.createElement("p",null,"Content 10")),t.createElement(c,{value:"tab11"},t.createElement("p",null,"Content 11")),t.createElement(c,{value:"tab12"},t.createElement("p",null,"Content 12")),t.createElement(c,{value:"tab13"},t.createElement("p",null,"Content 13")),t.createElement(c,{value:"tab14"},t.createElement("p",null,"Content 14")),t.createElement(c,{value:"tab15"},t.createElement("p",null,"Content 15")))};var ae,ne,re;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: arg => <Tabs defaultValue='tab1' withArrows={arg.withArrows}>
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
    withArrows: {
      table: {
        category: CONTROL_CATEGORY.design
      },
      control: {
        type: 'boolean'
      }
    }
  })
}`,...(re=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(se=S.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var be,ue,ce;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ce=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ie,de,Te;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue='tab1'>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(Te=(de=x.parameters)==null?void 0:de.docs)==null?void 0:Te.source}}};var ve,me,pe;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(pe=(me=O.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,ge,Ce;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var Ee,he,_e;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(_e=(he=B.parameters)==null?void 0:he.docs)==null?void 0:_e.source}}};var ye,Re,we;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Ve,Le,Ie;j.parameters={...j.parameters,docs:{...(Ve=j.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ie=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};const jt=["Demo","Overview","Controlled","Default","Disabled","Overflow","WithArrows","WithContent","ThemeGenerator"],Gt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:N,Default:x,Demo:P,Disabled:O,Overflow:F,Overview:S,ThemeGenerator:j,WithArrows:B,WithContent:W,__namedExportsOrder:jt,default:Wt},Symbol.toStringTag,{value:"Module"}));export{N as C,x as D,S as O,Gt as T,W,O as a,F as b,B as c};
