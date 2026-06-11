import{r as p,e as o}from"./index-D_CmzhJ4.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{c as D}from"./index-CkQHsVsO.js";import{c as Ce,a as k,N as $,O as W,P as Re,Q as Ve,T as g,W as Pe,U as _e,ai as Ie,V as Ae,z as M,v as Fe,X as Le,ay as Ne,az as Se,x as we,r as h,C as Oe,_ as xe,$ as Be,Y as De,Z as $e,aA as We,aB as je,a4 as Ue,u as ke,R as Me,A as Xe,S as qe}from"./use-locale-context-BCvnGTO-.js";import{u as He,s as Ke,R as ze}from"./render-strategy-Cz3sd1Ng.js";import{a as Ye,P as Ge}from"./use-presence-B3rWeOdE.js";import{e as Qe}from"./controls-BtiQQn1l.js";import{s as Ze}from"./source-d0g_Nd0q.js";function Je(e,t){const[s,a]=p.useState(e);return p.useEffect(()=>{const n=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(n)}},[e,t]),s}const[et,X]=Ce({name:"TabsContext",hookName:"useTabsContext",providerName:"<TabsProvider />"}),pe=p.forwardRef((e,t)=>{const[s,a]=k()(e,["value"]),n=X(),r=He(),c=Ye({...r,present:Je(n.value===e.value,0),immediate:!0}),T=$(n.getContentProps(s),c.getPresenceProps(),a);return d.jsx(Ge,{value:c,children:c.unmounted?null:d.jsx(W.div,{...T,ref:Re(c.ref,t)})})});pe.displayName="TabContent";const fe=p.forwardRef((e,t)=>{const s=X(),a=$(s.getListProps(),e);return d.jsx(W.div,{...a,ref:t})});fe.displayName="TabList";const me=p.forwardRef((e,t)=>{const[s,a]=k()(e,["disabled","value"]),n=X(),r=$(n.getTriggerProps(s),a);return d.jsx(W.button,{...r,ref:t})});me.displayName="TabTrigger";var tt=Ve("tabs").parts("root","list","trigger","content","indicator"),C=tt.build(),at=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`tabs:${e.id}`},L=e=>{var t;return((t=e.ids)==null?void 0:t.list)??`tabs:${e.id}:list`},U=(e,t)=>{var s;return((s=e.ids)==null?void 0:s.content)??`tabs:${e.id}:content-${t}`},E=(e,t)=>{var s;return((s=e.ids)==null?void 0:s.trigger)??`tabs:${e.id}:trigger-${t}`},ge=e=>{var t;return((t=e.ids)==null?void 0:t.indicator)??`tabs:${e.id}:indicator`},st=e=>e.getById(L(e)),rt=(e,t)=>e.getById(U(e,t)),B=(e,t)=>e.getById(E(e,t)),K=e=>e.getById(ge(e)),S=e=>{const s=`[role=tab][data-ownedby='${CSS.escape(L(e))}']:not([disabled])`;return Ue(st(e),s)},ot=e=>$e(S(e)),nt=e=>De(S(e)),lt=(e,t)=>Be(S(e),E(e,t.value),t.loopFocus),it=(e,t)=>xe(S(e),E(e,t.value),t.loopFocus),Ee=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),ct=(e,t)=>{const s=je(S(e),E(e,t));return ye(Ee(s))},ye=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function ut(e,t){const{state:s,send:a,context:n,prop:r,scope:c}=e,T=r("translations"),y=s.matches("focused"),w=r("orientation")==="vertical",O=r("orientation")==="horizontal",q=r("composite");function H(l){return{selected:n.get("value")===l.value,focused:n.get("focusedValue")===l.value,disabled:!!l.disabled}}return{value:n.get("value"),focusedValue:n.get("focusedValue"),setValue(l){a({type:"SET_VALUE",value:l})},clearValue(){a({type:"CLEAR_VALUE"})},setIndicatorRect(l){const u=E(c,l);a({type:"SET_INDICATOR_RECT",id:u})},syncTabIndex(){a({type:"SYNC_TAB_INDEX"})},selectNext(l){a({type:"TAB_FOCUS",value:l,src:"selectNext"}),a({type:"ARROW_NEXT",src:"selectNext"})},selectPrev(l){a({type:"TAB_FOCUS",value:l,src:"selectPrev"}),a({type:"ARROW_PREV",src:"selectPrev"})},focus(){var u;const l=n.get("value");l&&((u=B(c,l))==null||u.focus())},getRootProps(){return t.element({...C.root.attrs,id:at(c),"data-orientation":r("orientation"),"data-focus":g(y),dir:r("dir")})},getListProps(){return t.element({...C.list.attrs,id:L(c),role:"tablist",dir:r("dir"),"data-focus":g(y),"aria-orientation":r("orientation"),"data-orientation":r("orientation"),"aria-label":T==null?void 0:T.listLabel,onKeyDown(l){if(l.defaultPrevented||!_e(l)||Ie(l))return;const u={ArrowDown(){O||a({type:"ARROW_NEXT",key:"ArrowDown"})},ArrowUp(){O||a({type:"ARROW_PREV",key:"ArrowUp"})},ArrowLeft(){w||a({type:"ARROW_PREV",key:"ArrowLeft"})},ArrowRight(){w||a({type:"ARROW_NEXT",key:"ArrowRight"})},Home(){a({type:"HOME"})},End(){a({type:"END"})},Enter(){a({type:"ENTER"})}};let v=Ae(l,{dir:r("dir"),orientation:r("orientation")});const m=u[v];m&&(l.preventDefault(),m(l))}})},getTriggerState:H,getTriggerProps(l){const{value:u,disabled:v}=l,m=H(l);return t.button({...C.trigger.attrs,role:"tab",type:"button",disabled:v,dir:r("dir"),"data-orientation":r("orientation"),"data-disabled":g(v),"aria-disabled":v,"data-value":u,"aria-selected":m.selected,"data-selected":g(m.selected),"data-focus":g(m.focused),"aria-controls":m.selected?U(c,u):void 0,"data-ownedby":L(c),"data-ssr":g(n.get("ssr")),id:E(c,u),tabIndex:m.selected&&q?0:-1,onFocus(){a({type:"TAB_FOCUS",value:u})},onBlur(x){const j=x.relatedTarget;(j==null?void 0:j.getAttribute("role"))!=="tab"&&a({type:"TAB_BLUR"})},onClick(x){x.defaultPrevented||v||(Pe()&&x.currentTarget.focus(),a({type:"TAB_CLICK",value:u}))}})},getContentProps(l){const{value:u}=l,v=n.get("value")===u;return t.element({...C.content.attrs,dir:r("dir"),id:U(c,u),tabIndex:q?0:-1,"aria-labelledby":E(c,u),role:"tabpanel","data-ownedby":L(c),"data-selected":g(v),"data-orientation":r("orientation"),hidden:!v})},getIndicatorProps(){const l=n.get("indicatorRect"),u=n.get("indicatorTransition");return t.element({id:ge(c),...C.indicator.attrs,dir:r("dir"),"data-orientation":r("orientation"),style:{"--transition-property":"left, right, top, bottom, width, height","--left":l.left,"--top":l.top,"--width":l.width,"--height":l.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:u?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[O?"left":"top"]:O?"var(--left)":"var(--top)"}})}}}var{not:dt}=Le(),bt=Fe({props({props:e}){return{dir:"ltr",orientation:"horizontal",activationMode:"automatic",loopFocus:!0,composite:!0,navigate(t){We(t.node)},defaultValue:null,...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(s){var a;(a=e("onValueChange"))==null||a({value:s})}})),focusedValue:t(()=>({defaultValue:e("value")||e("defaultValue"),sync:!0,onChange(s){var a;(a=e("onFocusChange"))==null||a({focusedValue:s})}})),ssr:t(()=>({defaultValue:!0})),indicatorTransition:t(()=>({defaultValue:!1})),indicatorRect:t(()=>({defaultValue:{left:"0px",top:"0px",width:"0px",height:"0px"}}))}},watch({context:e,prop:t,track:s,action:a}){s([()=>e.get("value")],()=>{a(["allowIndicatorTransition","syncIndicatorRect","syncTabIndex","navigateIfNeeded"])}),s([()=>t("dir"),()=>t("orientation")],()=>{a(["syncIndicatorRect"])})},on:{SET_VALUE:{actions:["setValue"]},CLEAR_VALUE:{actions:["clearValue"]},SET_INDICATOR_RECT:{actions:["setIndicatorRect"]},SYNC_TAB_INDEX:{actions:["syncTabIndex"]}},entry:["syncIndicatorRect","syncTabIndex","syncSsr"],exit:["cleanupObserver"],states:{idle:{on:{TAB_FOCUS:{target:"focused",actions:["setFocusedValue"]},TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]}}},focused:{on:{TAB_CLICK:{actions:["setFocusedValue","setValue"]},ARROW_PREV:[{guard:"selectOnFocus",actions:["focusPrevTab","selectFocusedTab"]},{actions:["focusPrevTab"]}],ARROW_NEXT:[{guard:"selectOnFocus",actions:["focusNextTab","selectFocusedTab"]},{actions:["focusNextTab"]}],HOME:[{guard:"selectOnFocus",actions:["focusFirstTab","selectFocusedTab"]},{actions:["focusFirstTab"]}],END:[{guard:"selectOnFocus",actions:["focusLastTab","selectFocusedTab"]},{actions:["focusLastTab"]}],ENTER:{guard:dt("selectOnFocus"),actions:["selectFocusedTab"]},TAB_FOCUS:{actions:["setFocusedValue"]},TAB_BLUR:{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{selectOnFocus:({prop:e})=>e("activationMode")==="automatic"},actions:{selectFocusedTab({context:e,prop:t}){h(()=>{const s=e.get("focusedValue");if(!s)return;const n=t("deselectable")&&e.get("value")===s?null:s;e.set("value",n)})},setFocusedValue({context:e,event:t,flush:s}){t.value!=null&&s(()=>{e.set("focusedValue",t.value)})},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:t,prop:s}){const a=s("deselectable")&&e.get("value")===e.get("focusedValue");e.set("value",a?null:t.value)},clearValue({context:e}){e.set("value",null)},focusFirstTab({scope:e}){h(()=>{var t;(t=ot(e))==null||t.focus()})},focusLastTab({scope:e}){h(()=>{var t;(t=nt(e))==null||t.focus()})},focusNextTab({context:e,prop:t,scope:s,event:a}){const n=a.value??e.get("focusedValue");if(!n)return;const r=lt(s,{value:n,loopFocus:t("loopFocus")});h(()=>{t("composite")?r==null||r.focus():(r==null?void 0:r.dataset.value)!=null&&e.set("focusedValue",r.dataset.value)})},focusPrevTab({context:e,prop:t,scope:s,event:a}){const n=a.value??e.get("focusedValue");if(!n)return;const r=it(s,{value:n,loopFocus:t("loopFocus")});h(()=>{t("composite")?r==null||r.focus():(r==null?void 0:r.dataset.value)!=null&&e.set("focusedValue",r.dataset.value)})},syncTabIndex({context:e,scope:t}){h(()=>{const s=e.get("value");if(!s)return;const a=rt(t,s);if(!a)return;Oe(a).length>0?a.removeAttribute("tabindex"):a.setAttribute("tabindex","0")})},cleanupObserver({refs:e}){const t=e.get("indicatorCleanup");t&&t()},allowIndicatorTransition({context:e}){e.set("indicatorTransition",!0)},setIndicatorRect({context:e,event:t,scope:s}){const a=t.id??e.get("value");if(!K(s))return;if(!a){e.set("indicatorTransition",!1);return}B(s,a)&&(e.set("indicatorRect",ct(s,a)),we(()=>{e.set("indicatorTransition",!1)}))},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,refs:t,scope:s}){const a=t.get("indicatorCleanup");a&&a();const n=e.get("value");if(!n){e.set("indicatorTransition",!1);return}const r=B(s,n),c=K(s);if(!r||!c)return;const T=Se([r],{measure(y){return Ee(y)},onEntry({rects:y}){const[w]=y;e.set("indicatorRect",ye(w))}});t.set("indicatorCleanup",T)},navigateIfNeeded({context:e,prop:t,scope:s}){var r;const a=e.get("value");if(!a)return;const n=B(s,a);Ne(n)&&((r=t("navigate"))==null||r({value:a,node:n,href:n.href}))}}}});M()(["activationMode","composite","deselectable","dir","getRootNode","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value","defaultValue"]);M()(["disabled","value"]);M()(["value"]);const Tt=e=>{const t=p.useId(),{getRootNode:s}=ke(),{dir:a}=Me(),n={id:t,dir:a,getRootNode:s,...e},r=Xe(bt,n);return ut(r,qe)},he=p.forwardRef((e,t)=>{const[s,a]=Ke(e),[n,r]=k()(a,["activationMode","composite","defaultValue","deselectable","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value"]),c=Tt(n),T=$(c.getRootProps(),r);return d.jsx(et,{value:c,children:d.jsx(ze,{value:s,children:d.jsx(W.div,{...T,ref:t})})})});he.displayName="TabsRoot";const vt="_tabs_4moa9_2",pt={tabs:vt},b=p.forwardRef(({children:e,className:t,defaultValue:s,onChange:a,value:n,...r},c)=>d.jsx(he,{className:D(pt.tabs,t),defaultValue:s,onValueChange:a,ref:c,value:n,...r,children:e}));b.displayName="Tabs";b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected tab. Use when you don't need to control the value of the tabs."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: TabsChangeEvent) => void",signature:{arguments:[{type:{name:"TabsChangeEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the state of selected tab changes."},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected tab."}},composes:["Omit"]};const ft={"tab-list":"_tab-list_9h120_2"},f=({children:e,className:t,...s})=>d.jsx(fe,{className:D(ft["tab-list"],t),...s,children:e});f.__docgenInfo={description:"",methods:[],displayName:"TabList",composes:["ComponentPropsWithRef"]};const mt="_tab_1ddod_2",gt={tab:mt},i=({children:e,className:t,value:s,...a})=>d.jsx(me,{className:D(gt.tab,t),value:s,...a,children:e});i.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab item."}},composes:["ComponentPropsWithRef"]};const Et={"tab-content":"_tab-content_1xgrg_2"},N=({children:e,className:t,value:s,...a})=>d.jsx(pe,{className:D(Et["tab-content"],t),value:s,...a,children:e});N.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the tab content item."}},composes:["ComponentPropsWithRef"]};const yt={component:b,subcomponents:{TabList:f,Tab:i,TabContent:N},argTypes:Qe(["defaultValue","value","onChange"]),title:"React Components/Tabs"},R={render:()=>o.createElement(b,{defaultValue:"tab1"},o.createElement(f,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},V={tags:["!dev"],parameters:{layout:"centered"},render:({})=>o.createElement(b,{defaultValue:"tab1"},o.createElement(f,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},P={tags:["!dev"],parameters:{docs:{source:{...Ze()}}},render:({})=>{const[e,t]=p.useState("tab1"),s=a=>{t(a.value)};return o.createElement(b,{onChange:s,value:e},o.createElement(f,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))}},_={tags:["!dev"],render:({})=>o.createElement(b,null,o.createElement(f,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},I={tags:["!dev"],render:({})=>o.createElement(b,{defaultValue:"tab1"},o.createElement(f,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2",disabled:!0},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},A={tags:["!dev"],render:({})=>o.createElement("div",{style:{width:"300px"}},o.createElement(b,{defaultValue:"tab1"},o.createElement(f,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3"),o.createElement(i,{value:"tab4"},"Tab 4"),o.createElement(i,{value:"tab5"},"Tab 5"),o.createElement(i,{value:"tab6"},"Tab 6"))))},F={tags:["!dev"],render:({})=>o.createElement(b,{defaultValue:"tab1"},o.createElement(f,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")),o.createElement(N,{value:"tab1"},o.createElement("p",null,"Content 1")),o.createElement(N,{value:"tab2"},o.createElement("p",null,"Content 2")),o.createElement(N,{value:"tab3"},o.createElement("p",null,"Content 3")))};var z,Y,G;R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue='tab1'>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(G=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Q,Z,J;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var ee,te,ae;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    const handleChange = (event: TabsChangeEvent) => {
      setValue(event.value);
    };
    return <Tabs onChange={handleChange} value={value}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>;
  }
}`,...(ae=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,oe;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tabs>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(oe=(re=_.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,le,ie;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(ie=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,de;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var be,Te,ve;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};const ht=["Demo","Overview","Controlled","Default","Disabled","Overflow","WithContent"],Lt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:P,Default:_,Demo:R,Disabled:I,Overflow:A,Overview:V,WithContent:F,__namedExportsOrder:ht,default:yt},Symbol.toStringTag,{value:"Module"}));export{P as C,_ as D,V as O,Lt as T,F as W,I as a,A as b};
