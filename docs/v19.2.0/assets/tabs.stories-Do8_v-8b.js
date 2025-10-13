import{r as b,e as r}from"./index-jIWwRBLr.js";import{j as u}from"./jsx-runtime-Cfl8ynUo.js";import{c as Oe,a as z,T as U,U as M,V as Fe,Q as Be,P as _,av as je,X as De,aa as We,s as ke,d as $e,W as Ue,C as K,ad as Me,aw as qe,ax as Xe,A as He,r as V,F as ze,$ as Ke,a0 as Ye,Z as Ge,_ as Ze,ay as Qe,az as Je,a4 as et,u as tt,R as at,D as rt,S as st}from"./use-locale-context-BIV2aQtl.js";import{u as ot,s as nt,R as lt}from"./render-strategy-CGQK92zh.js";import{c as j}from"./index-CqY9YpN0.js";import{B as Y,d as G,c as Z}from"./Button-Dwx1IzdD.js";import{I as Q,a as J}from"./icon-name-C581wThh.js";import{a as it,P as ct}from"./use-presence-BC2E-XtL.js";import{e as ut,o as bt,C as dt}from"./controls-BtiQQn1l.js";import{s as Tt}from"./source-CPEZJ6oD.js";const[vt,q]=Oe({name:"TabsContext",hookName:"useTabsContext",providerName:"<TabsProvider />"}),Ve=b.forwardRef((e,t)=>{const[s,a]=z()(e,["value"]),n=q(),o=ot(),c=it({...o,present:n.value===e.value,immediate:!0}),v=U(n.getContentProps(s),c.getPresenceProps(),a);return u.jsx(ct,{value:c,children:c.unmounted?null:u.jsx(M.div,{...v,ref:Fe(c.ref,t)})})});Ve.displayName="TabContent";const we=b.forwardRef((e,t)=>{const s=q(),a=U(s.getListProps(),e);return u.jsx(M.div,{...a,ref:t})});we.displayName="TabList";const Ie=b.forwardRef((e,t)=>{const[s,a]=z()(e,["disabled","value"]),n=q(),o=U(n.getTriggerProps(s),a);return u.jsx(M.button,{...o,ref:t})});Ie.displayName="TabTrigger";var mt=Be("tabs").parts("root","list","trigger","content","indicator"),L=mt.build(),pt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`tabs:${e.id}`},D=e=>{var t;return((t=e.ids)==null?void 0:t.list)??`tabs:${e.id}:list`},H=(e,t)=>{var s,a;return((a=(s=e.ids)==null?void 0:s.content)==null?void 0:a.call(s,t))??`tabs:${e.id}:content-${t}`},R=(e,t)=>{var s,a;return((a=(s=e.ids)==null?void 0:s.trigger)==null?void 0:a.call(s,t))??`tabs:${e.id}:trigger-${t}`},Le=e=>{var t;return((t=e.ids)==null?void 0:t.indicator)??`tabs:${e.id}:indicator`},ft=e=>e.getById(D(e)),gt=(e,t)=>e.getById(H(e,t)),$=(e,t)=>e.getById(R(e,t)),ee=e=>e.getById(Le(e)),W=e=>{const s=`[role=tab][data-ownedby='${CSS.escape(D(e))}']:not([disabled])`;return et(ft(e),s)},ht=e=>Ze(W(e)),Et=e=>Ge(W(e)),Ct=(e,t)=>Ye(W(e),R(e,t.value),t.loopFocus),_t=(e,t)=>Ke(W(e),R(e,t.value),t.loopFocus),Ae=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),yt=(e,t)=>{const s=Je(W(e),R(e,t));return Pe(Ae(s))},Pe=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function Rt(e,t){const{state:s,send:a,context:n,prop:o,scope:c}=e,v=o("translations"),C=s.matches("focused"),T=o("orientation")==="vertical",h=o("orientation")==="horizontal",k=o("composite");function w(i){return{selected:n.get("value")===i.value,focused:n.get("focusedValue")===i.value,disabled:!!i.disabled}}return{value:n.get("value"),focusedValue:n.get("focusedValue"),setValue(i){a({type:"SET_VALUE",value:i})},clearValue(){a({type:"CLEAR_VALUE"})},setIndicatorRect(i){const d=R(c,i);a({type:"SET_INDICATOR_RECT",id:d})},syncTabIndex(){a({type:"SYNC_TAB_INDEX"})},selectNext(i){a({type:"TAB_FOCUS",value:i,src:"selectNext"}),a({type:"ARROW_NEXT",src:"selectNext"})},selectPrev(i){a({type:"TAB_FOCUS",value:i,src:"selectPrev"}),a({type:"ARROW_PREV",src:"selectPrev"})},focus(){var d;const i=n.get("value");i&&((d=$(c,i))==null||d.focus())},getRootProps(){return t.element({...L.root.attrs,id:pt(c),"data-orientation":o("orientation"),"data-focus":_(C),dir:o("dir")})},getListProps(){return t.element({...L.list.attrs,id:D(c),role:"tablist",dir:o("dir"),"data-focus":_(C),"aria-orientation":o("orientation"),"data-orientation":o("orientation"),"aria-label":v==null?void 0:v.listLabel,onKeyDown(i){if(i.defaultPrevented||We(i)||!ke(i.currentTarget,$e(i)))return;const d={ArrowDown(){h||a({type:"ARROW_NEXT",key:"ArrowDown"})},ArrowUp(){h||a({type:"ARROW_PREV",key:"ArrowUp"})},ArrowLeft(){T||a({type:"ARROW_PREV",key:"ArrowLeft"})},ArrowRight(){T||a({type:"ARROW_NEXT",key:"ArrowRight"})},Home(){a({type:"HOME"})},End(){a({type:"END"})}};let m=Ue(i,{dir:o("dir"),orientation:o("orientation")});const p=d[m];if(p){i.preventDefault(),p(i);return}}})},getTriggerState:w,getTriggerProps(i){const{value:d,disabled:m}=i,p=w(i);return t.button({...L.trigger.attrs,role:"tab",type:"button",disabled:m,dir:o("dir"),"data-orientation":o("orientation"),"data-disabled":_(m),"aria-disabled":m,"data-value":d,"aria-selected":p.selected,"data-selected":_(p.selected),"data-focus":_(p.focused),"aria-controls":p.selected?H(c,d):void 0,"data-ownedby":D(c),"data-ssr":_(n.get("ssr")),id:R(c,d),tabIndex:p.selected&&k?0:-1,onFocus(){a({type:"TAB_FOCUS",value:d})},onBlur(I){const X=I.relatedTarget;(X==null?void 0:X.getAttribute("role"))!=="tab"&&a({type:"TAB_BLUR"})},onClick(I){I.defaultPrevented||je(I)||m||(De()&&I.currentTarget.focus(),a({type:"TAB_CLICK",value:d}))}})},getContentProps(i){const{value:d}=i,m=n.get("value")===d;return t.element({...L.content.attrs,dir:o("dir"),id:H(c,d),tabIndex:k?0:-1,"aria-labelledby":R(c,d),role:"tabpanel","data-ownedby":D(c),"data-selected":_(m),"data-orientation":o("orientation"),hidden:!m})},getIndicatorProps(){const i=n.get("indicatorRect"),d=n.get("indicatorTransition");return t.element({id:Le(c),...L.indicator.attrs,dir:o("dir"),"data-orientation":o("orientation"),style:{"--transition-property":"left, right, top, bottom, width, height","--left":i.left,"--top":i.top,"--width":i.width,"--height":i.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:d?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[h?"left":"top"]:h?"var(--left)":"var(--top)"}})}}}var{createMachine:Vt}=Me(),wt=Vt({props({props:e}){return{dir:"ltr",orientation:"horizontal",activationMode:"automatic",loopFocus:!0,composite:!0,navigate(t){Qe(t.node)},defaultValue:null,...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(s){var a;(a=e("onValueChange"))==null||a({value:s})}})),focusedValue:t(()=>({defaultValue:e("value")||e("defaultValue"),sync:!0,onChange(s){var a;(a=e("onFocusChange"))==null||a({focusedValue:s})}})),ssr:t(()=>({defaultValue:!0})),indicatorTransition:t(()=>({defaultValue:!1})),indicatorRect:t(()=>({defaultValue:{left:"0px",top:"0px",width:"0px",height:"0px"}}))}},watch({context:e,prop:t,track:s,action:a}){s([()=>e.get("value")],()=>{a(["allowIndicatorTransition","syncIndicatorRect","syncTabIndex","navigateIfNeeded"])}),s([()=>t("dir"),()=>t("orientation")],()=>{a(["syncIndicatorRect"])})},on:{SET_VALUE:{actions:["setValue"]},CLEAR_VALUE:{actions:["clearValue"]},SET_INDICATOR_RECT:{actions:["setIndicatorRect"]},SYNC_TAB_INDEX:{actions:["syncTabIndex"]}},entry:["syncIndicatorRect","syncTabIndex","syncSsr"],exit:["cleanupObserver"],states:{idle:{on:{TAB_FOCUS:{target:"focused",actions:["setFocusedValue"]},TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]}}},focused:{on:{TAB_CLICK:{actions:["setFocusedValue","setValue"]},ARROW_PREV:[{guard:"selectOnFocus",actions:["focusPrevTab","selectFocusedTab"]},{actions:["focusPrevTab"]}],ARROW_NEXT:[{guard:"selectOnFocus",actions:["focusNextTab","selectFocusedTab"]},{actions:["focusNextTab"]}],HOME:[{guard:"selectOnFocus",actions:["focusFirstTab","selectFocusedTab"]},{actions:["focusFirstTab"]}],END:[{guard:"selectOnFocus",actions:["focusLastTab","selectFocusedTab"]},{actions:["focusLastTab"]}],TAB_FOCUS:{actions:["setFocusedValue"]},TAB_BLUR:{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{selectOnFocus:({prop:e})=>e("activationMode")==="automatic"},actions:{selectFocusedTab({context:e,prop:t}){V(()=>{const s=e.get("focusedValue");if(!s)return;const n=t("deselectable")&&e.get("value")===s?null:s;e.set("value",n)})},setFocusedValue({context:e,event:t,flush:s}){t.value!=null&&s(()=>{e.set("focusedValue",t.value)})},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:t,prop:s}){const a=s("deselectable")&&e.get("value")===e.get("focusedValue");e.set("value",a?null:t.value)},clearValue({context:e}){e.set("value",null)},focusFirstTab({scope:e}){V(()=>{var t;(t=ht(e))==null||t.focus()})},focusLastTab({scope:e}){V(()=>{var t;(t=Et(e))==null||t.focus()})},focusNextTab({context:e,prop:t,scope:s,event:a}){const n=a.value??e.get("focusedValue");if(!n)return;const o=Ct(s,{value:n,loopFocus:t("loopFocus")});V(()=>{t("composite")?o==null||o.focus():(o==null?void 0:o.dataset.value)!=null&&e.set("focusedValue",o.dataset.value)})},focusPrevTab({context:e,prop:t,scope:s,event:a}){const n=a.value??e.get("focusedValue");if(!n)return;const o=_t(s,{value:n,loopFocus:t("loopFocus")});V(()=>{t("composite")?o==null||o.focus():(o==null?void 0:o.dataset.value)!=null&&e.set("focusedValue",o.dataset.value)})},syncTabIndex({context:e,scope:t}){V(()=>{const s=e.get("value");if(!s)return;const a=gt(t,s);if(!a)return;ze(a).length>0?a.removeAttribute("tabindex"):a.setAttribute("tabindex","0")})},cleanupObserver({refs:e}){const t=e.get("indicatorCleanup");t&&t()},allowIndicatorTransition({context:e}){e.set("indicatorTransition",!0)},setIndicatorRect({context:e,event:t,scope:s}){const a=t.id??e.get("value");if(!ee(s))return;if(!a){e.set("indicatorTransition",!1);return}$(s,a)&&(e.set("indicatorRect",yt(s,a)),He(()=>{e.set("indicatorTransition",!1)}))},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,refs:t,scope:s}){const a=t.get("indicatorCleanup");a&&a();const n=e.get("value");if(!n){e.set("indicatorTransition",!1);return}const o=$(s,n),c=ee(s);if(!o||!c)return;const v=Xe([o],{measure(C){return Ae(C)},onEntry({rects:C}){const[T]=C;e.set("indicatorRect",Pe(T))}});t.set("indicatorCleanup",v)},navigateIfNeeded({context:e,prop:t,scope:s}){var o;const a=e.get("value");if(!a)return;const n=$(s,a);qe(n)&&((o=t("navigate"))==null||o({value:a,node:n,href:n.href}))}}}});K()(["activationMode","composite","deselectable","dir","getRootNode","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value","defaultValue"]);K()(["disabled","value"]);K()(["value"]);const It=e=>{const t=b.useId(),{getRootNode:s}=tt(),{dir:a}=at(),n={id:t,dir:a,getRootNode:s,...e},o=rt(wt,n);return Rt(o,st)},xe=b.forwardRef((e,t)=>{const[s,a]=nt(e),[n,o]=z()(a,["activationMode","composite","defaultValue","deselectable","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value"]),c=It(n),v=U(c.getRootProps(),o);return u.jsx(vt,{value:c,children:u.jsx(lt,{value:s,children:u.jsx(M.div,{...v,ref:t})})})});xe.displayName="TabsRoot";const Se=b.createContext({});function Ne({children:e,withArrows:t}){return u.jsx(Se.Provider,{value:{withArrows:t},children:e})}function Lt(){return b.useContext(Se)}Ne.__docgenInfo={description:"",methods:[],displayName:"TabsProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["TabsContextType"]};const g=b.forwardRef(({children:e,className:t,defaultValue:s,onValueChange:a,value:n,withArrows:o,...c},v)=>u.jsx(Ne,{withArrows:o,children:u.jsx(xe,{className:t,"data-ods":"tabs",defaultValue:s,onValueChange:a,ref:v,value:n,...c,children:e})}));g.displayName="Tabs";g.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected tab. Use when you don't need to control the value of the tabs."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: TabsValueChangeEvent) => void",signature:{arguments:[{type:{name:"TabsValueChangeEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the state of selected tab changes."},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected tab."},withArrows:{required:!1,tsType:{name:"boolean"},description:"Whether the component displays navigation arrows around the tabs."}},composes:["Omit"]};function At(e,t){let s;return(...a)=>{clearTimeout(s),s=setTimeout(()=>e(...a),t)}}const y={"tab-list":"_tab-list_1vjsr_2","tab-list__left-arrow":"_tab-list__left-arrow_1vjsr_7","tab-list__right-arrow":"_tab-list__right-arrow_1vjsr_7","tab-list__left-arrow--active":"_tab-list__left-arrow--active_1vjsr_29","tab-list__right-arrow--active":"_tab-list__right-arrow--active_1vjsr_36","tab-list__container":"_tab-list__container_1vjsr_40","tab-list__container__tabs":"_tab-list__container__tabs_1vjsr_51"},E=b.forwardRef(({children:e,className:t,...s},a)=>{const{withArrows:n}=Lt(),[o,c]=b.useState(!1),[v,C]=b.useState(!1),T=b.useRef(null),h=b.useCallback(()=>{c(T.current?T.current.scrollLeft===0:!1),C(T.current?T.current.scrollLeft===T.current.scrollWidth-T.current.offsetWidth:!1)},[]),k=b.useMemo(()=>At(h,50),[h]);b.useEffect(()=>{if(h(),T.current){const m=new ResizeObserver(()=>{h()});return m.observe(T.current),()=>{m.disconnect()}}},[h]);function w(m){var p;(p=T.current)==null||p.scrollBy({behavior:"smooth",left:m})}function i(){T.current&&w(-T.current.offsetWidth)}function d(){T.current&&w(T.current.offsetWidth)}return u.jsxs(we,{className:j(y["tab-list"],t),"data-ods":"tab-list",ref:a,...s,children:[n&&u.jsx("div",{className:j(y["tab-list__left-arrow"],{[y["tab-list__left-arrow--active"]]:!o}),children:u.jsx(Y,{disabled:o,onClick:i,size:Z.xs,tabIndex:-1,variant:G.ghost,children:u.jsx(Q,{name:J.chevronLeft})})}),u.jsx("div",{className:y["tab-list__container"],onScroll:k,ref:T,tabIndex:-1,children:u.jsx("div",{className:y["tab-list__container__tabs"],children:e})}),n&&u.jsx("div",{className:j(y["tab-list__right-arrow"],{[y["tab-list__right-arrow--active"]]:!v}),children:u.jsx(Y,{disabled:v,onClick:d,size:Z.xs,tabIndex:-1,variant:G.ghost,children:u.jsx(Q,{name:J.chevronRight})})})]})});E.__docgenInfo={description:"",methods:[],displayName:"TabList",composes:["ComponentPropsWithRef"]};const Pt="_tab_1h8j5_2",xt={tab:Pt},l=b.forwardRef(({children:e,className:t,value:s,...a},n)=>{const{focusedValue:o}=q(),c=b.useRef(null);return b.useImperativeHandle(n,()=>c.current,[c]),b.useEffect(()=>{c.current&&o===s&&c.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[o,s]),u.jsx(Ie,{className:j(xt.tab,t),"data-ods":"tab",ref:c,value:s,...a,children:e})});l.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab item."}},composes:["ComponentPropsWithRef"]};const St={"tab-content":"_tab-content_1xgrg_2"},f=b.forwardRef(({children:e,className:t,value:s,...a},n)=>u.jsx(Ve,{className:j(St["tab-content"],t),"data-ods":"tab-content",ref:n,value:s,...a,children:e}));f.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab content item."}},composes:["ComponentPropsWithRef"]};const Nt={component:g,subcomponents:{TabList:E,Tab:l,TabContent:f},argTypes:ut(["defaultValue","onValueChange","value"]),title:"React Components/Tabs"},A={render:e=>r.createElement(g,{defaultValue:"tab1",withArrows:e.withArrows},r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2"},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3"),r.createElement(l,{value:"tab4"},"Tab 4"),r.createElement(l,{value:"tab5"},"Tab 5"),r.createElement(l,{value:"tab6"},"Tab 6")),r.createElement(f,{value:"tab1"},r.createElement("p",null,"Tab 1 Content")),r.createElement(f,{value:"tab2"},r.createElement("p",null,"Tab 2 Content")),r.createElement(f,{value:"tab3"},r.createElement("p",null,"Tab 3 Content")),r.createElement(f,{value:"tab4"},r.createElement("p",null,"Tab 4 Content")),r.createElement(f,{value:"tab5"},r.createElement("p",null,"Tab 5 Content")),r.createElement(f,{value:"tab6"},r.createElement("p",null,"Tab 6 Content"))),argTypes:bt({withArrows:{table:{category:dt.design},control:{type:"boolean"}}})},P={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(g,{defaultValue:"tab1"},r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2"},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3")))},x={globals:{imports:`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Tt()}}},render:({})=>{const[e,t]=b.useState("tab1"),s=a=>{t(a.value)};return r.createElement(g,{onValueChange:s,value:e},r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2"},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3")))}},S={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(g,null,r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2"},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3")))},N={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(g,{defaultValue:"tab1"},r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2",disabled:!0},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3")))},O={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement("div",{style:{width:"300px"}},r.createElement(g,{defaultValue:"tab1"},r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2"},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3"),r.createElement(l,{value:"tab4"},"Tab 4"),r.createElement(l,{value:"tab5"},"Tab 5"),r.createElement(l,{value:"tab6"},"Tab 6"))))},F={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(g,{defaultValue:"tab1",withArrows:!0},r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2"},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3"),r.createElement(l,{value:"tab4"},"Tab 4"),r.createElement(l,{value:"tab5"},"Tab 5"),r.createElement(l,{value:"tab6"},"Tab 6"),r.createElement(l,{value:"tab7"},"Tab 7"),r.createElement(l,{value:"tab8"},"Tab 8"),r.createElement(l,{value:"tab9"},"Tab 9"),r.createElement(l,{value:"tab10"},"Tab 10"),r.createElement(l,{value:"tab11"},"Tab 11"),r.createElement(l,{value:"tab12"},"Tab 12"),r.createElement(l,{value:"tab13"},"Tab 13"),r.createElement(l,{value:"tab14"},"Tab 14"),r.createElement(l,{value:"tab15"},"Tab 15")))},B={globals:{imports:"import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(g,{defaultValue:"tab1"},r.createElement(E,null,r.createElement(l,{value:"tab1"},"Tab 1"),r.createElement(l,{value:"tab2"},"Tab 2"),r.createElement(l,{value:"tab3"},"Tab 3")),r.createElement(f,{value:"tab1"},r.createElement("p",null,"Content 1")),r.createElement(f,{value:"tab2"},r.createElement("p",null,"Content 2")),r.createElement(f,{value:"tab3"},r.createElement("p",null,"Content 3")))};var te,ae,re;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,oe,ne;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ie,ce;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,be,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(de=(be=S.parameters)==null?void 0:be.docs)==null?void 0:de.source}}};var Te,ve,me;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(me=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var pe,fe,ge;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,Ee,Ce;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ce=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var _e,ye,Re;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Re=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};const Ot=["Demo","Overview","Controlled","Default","Disabled","Overflow","WithArrows","WithContent"],Xt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:x,Default:S,Demo:A,Disabled:N,Overflow:O,Overview:P,WithArrows:F,WithContent:B,__namedExportsOrder:Ot,default:Nt},Symbol.toStringTag,{value:"Module"}));export{x as C,S as D,P as O,Xt as T,B as W,N as a,O as b,F as c};
