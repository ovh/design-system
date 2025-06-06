import{r as g,e as o}from"./index-D_CmzhJ4.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{c as D}from"./index-CkQHsVsO.js";import{c as Re,a as U,I as j,J as $,K as Ve,P as Pe,Q as m,R as _e,ag as Ie,Z as Fe,ah as Ae,p as Le,X as we,ai as Se,q as H,r as C,v as Ne,aj as Oe,ak as xe,al as Be,am as De,an as je,ao as $e,ap as We}from"./index-BCxMAfLs.js";import{u as ke,s as Ue,R as Me}from"./render-strategy-C1g0moKL.js";import{c as M,a as qe,b as Xe,u as Ke,n as He}from"./use-locale-context-Z4fgdY29.js";import{a as ze,P as Ye}from"./use-presence-BmJ92aQP.js";import{e as Ge}from"./controls-BtiQQn1l.js";import{s as Je}from"./source-d0g_Nd0q.js";function Qe(e,t){const[s,a]=g.useState(e);return g.useEffect(()=>{const n=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(n)}},[e,t]),s}const[Ze,q]=Re({name:"TabsContext",hookName:"useTabsContext",providerName:"<TabsProvider />"}),fe=g.forwardRef((e,t)=>{const[s,a]=U()(e,["value"]),n=q(),r=ke(),c=ze({...r,present:Qe(n.value===e.value,0),immediate:!0}),b=j(n.getContentProps(s),c.getPresenceProps(),a);return d.jsx(Ye,{value:c,children:c.unmounted?null:d.jsx($.div,{...b,ref:Ve(c.ref,t)})})});fe.displayName="TabContent";const ge=g.forwardRef((e,t)=>{const s=q(),a=j(s.getListProps(),e);return d.jsx($.div,{...a,ref:t})});ge.displayName="TabList";const me=g.forwardRef((e,t)=>{const[s,a]=U()(e,["disabled","value"]),n=q(),r=j(n.getTriggerProps(s),a);return d.jsx($.button,{...r,ref:t})});me.displayName="TabTrigger";var et=Pe("tabs").parts("root","list","trigger","content","indicator"),R=et.build(),tt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`tabs:${e.id}`},w=e=>{var t;return((t=e.ids)==null?void 0:t.list)??`tabs:${e.id}:list`},k=(e,t)=>{var s;return((s=e.ids)==null?void 0:s.content)??`tabs:${e.id}:content-${t}`},E=(e,t)=>{var s;return((s=e.ids)==null?void 0:s.trigger)??`tabs:${e.id}:trigger-${t}`},Ee=e=>{var t;return((t=e.ids)==null?void 0:t.indicator)??`tabs:${e.id}:indicator`},at=e=>e.getById(w(e)),st=(e,t)=>e.getById(k(e,t)),B=(e,t)=>e.getById(E(e,t)),z=e=>e.getById(Ee(e)),N=e=>{const s=`[role=tab][data-ownedby='${CSS.escape(w(e))}']:not([disabled])`;return We(at(e),s)},rt=e=>De(N(e)),ot=e=>Be(N(e)),nt=(e,t)=>xe(N(e),E(e,t.value),t.loopFocus),lt=(e,t)=>Oe(N(e),E(e,t.value),t.loopFocus),ye=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),it=(e,t)=>{const s=$e(N(e),E(e,t));return Ce(ye(s))},Ce=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function ct(e,t){const{state:s,send:a,context:n,prop:r,scope:c}=e,b=r("translations"),O=s.matches("focused"),h=r("orientation")==="vertical",y=r("orientation")==="horizontal",X=r("composite");function K(l){return{selected:n.get("value")===l.value,focused:n.get("focusedValue")===l.value,disabled:!!l.disabled}}return{value:n.get("value"),focusedValue:n.get("focusedValue"),setValue(l){a({type:"SET_VALUE",value:l})},clearValue(){a({type:"CLEAR_VALUE"})},setIndicatorRect(l){const u=E(c,l);a({type:"SET_INDICATOR_RECT",id:u})},syncTabIndex(){a({type:"SYNC_TAB_INDEX"})},selectNext(l){a({type:"TAB_FOCUS",value:l,src:"selectNext"}),a({type:"ARROW_NEXT",src:"selectNext"})},selectPrev(l){a({type:"TAB_FOCUS",value:l,src:"selectPrev"}),a({type:"ARROW_PREV",src:"selectPrev"})},focus(){var u;const l=n.get("value");l&&((u=B(c,l))==null||u.focus())},getRootProps(){return t.element({...R.root.attrs,id:tt(c),"data-orientation":r("orientation"),"data-focus":m(O),dir:r("dir")})},getListProps(){return t.element({...R.list.attrs,id:w(c),role:"tablist",dir:r("dir"),"data-focus":m(O),"aria-orientation":r("orientation"),"data-orientation":r("orientation"),"aria-label":b==null?void 0:b.listLabel,onKeyDown(l){if(l.defaultPrevented||!Ie(l)||Fe(l))return;const u={ArrowDown(){y||a({type:"ARROW_NEXT",key:"ArrowDown"})},ArrowUp(){y||a({type:"ARROW_PREV",key:"ArrowUp"})},ArrowLeft(){h||a({type:"ARROW_PREV",key:"ArrowLeft"})},ArrowRight(){h||a({type:"ARROW_NEXT",key:"ArrowRight"})},Home(){a({type:"HOME"})},End(){a({type:"END"})},Enter(){a({type:"ENTER"})}};let v=Ae(l,{dir:r("dir"),orientation:r("orientation")});const f=u[v];f&&(l.preventDefault(),f(l))}})},getTriggerState:K,getTriggerProps(l){const{value:u,disabled:v}=l,f=K(l);return t.button({...R.trigger.attrs,role:"tab",type:"button",disabled:v,dir:r("dir"),"data-orientation":r("orientation"),"data-disabled":m(v),"aria-disabled":v,"data-value":u,"aria-selected":f.selected,"data-selected":m(f.selected),"data-focus":m(f.focused),"aria-controls":f.selected?k(c,u):void 0,"data-ownedby":w(c),"data-ssr":m(n.get("ssr")),id:E(c,u),tabIndex:f.selected&&X?0:-1,onFocus(){a({type:"TAB_FOCUS",value:u})},onBlur(x){const W=x.relatedTarget;(W==null?void 0:W.getAttribute("role"))!=="tab"&&a({type:"TAB_BLUR"})},onClick(x){x.defaultPrevented||v||(_e()&&x.currentTarget.focus(),a({type:"TAB_CLICK",value:u}))}})},getContentProps(l){const{value:u}=l,v=n.get("value")===u;return t.element({...R.content.attrs,dir:r("dir"),id:k(c,u),tabIndex:X?0:-1,"aria-labelledby":E(c,u),role:"tabpanel","data-ownedby":w(c),"data-selected":m(v),"data-orientation":r("orientation"),hidden:!v})},getIndicatorProps(){const l=n.get("indicatorRect"),u=n.get("indicatorTransition");return t.element({id:Ee(c),...R.indicator.attrs,dir:r("dir"),"data-orientation":r("orientation"),style:{"--transition-property":"left, right, top, bottom, width, height","--left":l.left,"--top":l.top,"--width":l.width,"--height":l.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:u?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[y?"left":"top"]:y?"var(--left)":"var(--top)"}})}}}var{not:ut}=we(),dt=Le({props({props:e}){return{dir:"ltr",orientation:"horizontal",activationMode:"automatic",loopFocus:!0,composite:!0,navigate(t){je(t.node)},defaultValue:null,...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(s){var a;(a=e("onValueChange"))==null||a({value:s})}})),focusedValue:t(()=>({defaultValue:e("value")||e("defaultValue"),sync:!0,onChange(s){var a;(a=e("onFocusChange"))==null||a({focusedValue:s})}})),ssr:t(()=>({defaultValue:!0})),indicatorTransition:t(()=>({defaultValue:!1})),indicatorRect:t(()=>({defaultValue:{left:"0px",top:"0px",width:"0px",height:"0px"}}))}},watch({context:e,prop:t,track:s,action:a}){s([()=>e.get("value")],()=>{a(["allowIndicatorTransition","syncIndicatorRect","syncTabIndex","navigateIfNeeded"])}),s([()=>t("dir"),()=>t("orientation")],()=>{a(["syncIndicatorRect"])})},on:{SET_VALUE:{actions:["setValue"]},CLEAR_VALUE:{actions:["clearValue"]},SET_INDICATOR_RECT:{actions:["setIndicatorRect"]},SYNC_TAB_INDEX:{actions:["syncTabIndex"]}},entry:["syncIndicatorRect","syncTabIndex","syncSsr"],exit:["cleanupObserver"],states:{idle:{on:{TAB_FOCUS:{target:"focused",actions:["setFocusedValue"]},TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]}}},focused:{on:{TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]},ARROW_PREV:[{guard:"selectOnFocus",actions:["focusPrevTab","selectFocusedTab"]},{actions:["focusPrevTab"]}],ARROW_NEXT:[{guard:"selectOnFocus",actions:["focusNextTab","selectFocusedTab"]},{actions:["focusNextTab"]}],HOME:[{guard:"selectOnFocus",actions:["focusFirstTab","selectFocusedTab"]},{actions:["focusFirstTab"]}],END:[{guard:"selectOnFocus",actions:["focusLastTab","selectFocusedTab"]},{actions:["focusLastTab"]}],ENTER:{guard:ut("selectOnFocus"),actions:["selectFocusedTab"]},TAB_FOCUS:{actions:["setFocusedValue"]},TAB_BLUR:{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{selectOnFocus:({prop:e})=>e("activationMode")==="automatic"},actions:{selectFocusedTab({context:e,prop:t}){C(()=>{const s=e.get("focusedValue");if(!s)return;const n=t("deselectable")&&e.get("value")===s?null:s;e.set("value",n)})},setFocusedValue({context:e,event:t,flush:s}){t.value!=null&&s(()=>{e.set("focusedValue",t.value)})},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:t,prop:s}){const a=s("deselectable")&&e.get("value")===e.get("focusedValue");e.set("value",a?null:t.value)},clearValue({context:e}){e.set("value",null)},focusFirstTab({scope:e}){C(()=>{var t;(t=rt(e))==null||t.focus()})},focusLastTab({scope:e}){C(()=>{var t;(t=ot(e))==null||t.focus()})},focusNextTab({context:e,prop:t,scope:s,event:a}){const n=a.value??e.get("focusedValue");if(!n)return;const r=nt(s,{value:n,loopFocus:t("loopFocus")});C(()=>{t("composite")?r==null||r.focus():(r==null?void 0:r.dataset.value)!=null&&e.set("focusedValue",r.dataset.value)})},focusPrevTab({context:e,prop:t,scope:s,event:a}){const n=a.value??e.get("focusedValue");if(!n)return;const r=lt(s,{value:n,loopFocus:t("loopFocus")});C(()=>{t("composite")?r==null||r.focus():(r==null?void 0:r.dataset.value)!=null&&e.set("focusedValue",r.dataset.value)})},syncTabIndex({context:e,scope:t}){C(()=>{const s=e.get("value");if(!s)return;const a=st(t,s);if(!a)return;Ne(a).length>0?a.removeAttribute("tabindex"):a.setAttribute("tabindex","0")})},cleanupObserver({refs:e}){const t=e.get("indicatorCleanup");t&&t()},allowIndicatorTransition({context:e}){e.set("indicatorTransition",!0)},setIndicatorRect({context:e,event:t,scope:s}){const a=t.id??e.get("value");!z(s)||!a||!B(s,a)||(e.set("indicatorRect",it(s,a)),H(()=>{e.set("indicatorTransition",!1)}))},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,refs:t,scope:s}){const a=t.get("indicatorCleanup");a&&a();const n=e.get("value");if(!n)return;const r=B(s,n),c=z(s);if(!r||!c)return;const b=()=>{const y=ye(r);e.set("indicatorRect",Ce(y)),H(()=>{e.set("indicatorTransition",!1)})};b();const O=s.getWin(),h=new O.ResizeObserver(b);h.observe(r),t.set("indicatorCleanup",()=>h.disconnect())},navigateIfNeeded({context:e,prop:t,scope:s}){var r;const a=e.get("value");if(!a)return;const n=B(s,a);Se(n)&&((r=t("navigate"))==null||r({value:a,node:n}))}}}});M()(["activationMode","composite","deselectable","dir","getRootNode","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value","defaultValue"]);M()(["disabled","value"]);M()(["value"]);const bt=e=>{const t=g.useId(),{getRootNode:s}=qe(),{dir:a}=Xe(),n={id:t,dir:a,getRootNode:s,...e},r=Ke(dt,n);return ct(r,He)},he=g.forwardRef((e,t)=>{const[s,a]=Ue(e),[n,r]=U()(a,["activationMode","composite","defaultValue","deselectable","id","ids","loopFocus","navigate","onFocusChange","onValueChange","orientation","translations","value"]),c=bt(n),b=j(c.getRootProps(),r);return d.jsx(Ze,{value:c,children:d.jsx(Me,{value:s,children:d.jsx($.div,{...b,ref:t})})})});he.displayName="TabsRoot";const Tt="_tabs_1oaii_2",vt={tabs:Tt},T=g.forwardRef(({children:e,className:t,defaultValue:s,onChange:a,value:n,...r},c)=>d.jsx(he,{className:D(vt.tabs,t),defaultValue:s,onValueChange:a,ref:c,value:n,...r,children:e}));T.displayName="Tabs";T.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: TabsChangeEvent) => void",signature:{arguments:[{type:{name:"TabsChangeEvent"},name:"event"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const pt={"tab-list":"_tab-list_58e1j_2"},p=({children:e,className:t,...s})=>d.jsx(ge,{className:D(pt["tab-list"],t),...s,children:e});p.__docgenInfo={description:"",methods:[],displayName:"TabList",composes:["ComponentPropsWithRef"]};const ft="_tab_vrku8_2",gt={tab:ft},i=({children:e,className:t,value:s,...a})=>d.jsx(me,{className:D(gt.tab,t),value:s,...a,children:e});i.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithRef"]};const mt={"tab-content":"_tab-content_1inwf_2"},S=({children:e,className:t,value:s,...a})=>d.jsx(fe,{className:D(mt["tab-content"],t),value:s,...a,children:e});S.__docgenInfo={description:"",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithRef"]};const Et={component:T,subcomponents:{TabList:p,Tab:i,TabContent:S},argTypes:Ge(["defaultValue","value","onChange"]),title:"ODS Components/Tabs"},V={render:()=>o.createElement(T,{defaultValue:"tab1"},o.createElement(p,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},P={tags:["!dev"],parameters:{layout:"centered"},render:({})=>o.createElement(T,{defaultValue:"tab1"},o.createElement(p,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},_={tags:["!dev"],parameters:{docs:{source:{...Je()}}},render:({})=>{const[e,t]=o.useState("tab1"),s=a=>{t(a.value)};return o.createElement(T,{value:e,onChange:s},o.createElement(p,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))}},I={tags:["!dev"],render:({})=>o.createElement(T,null,o.createElement(p,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},F={tags:["!dev"],render:({})=>o.createElement(T,{defaultValue:"tab1"},o.createElement(p,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2",disabled:!0},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")))},A={tags:["!dev"],render:({})=>o.createElement("div",{style:{width:"300px"}},o.createElement(T,{defaultValue:"tab1"},o.createElement(p,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3"),o.createElement(i,{value:"tab4"},"Tab 4"),o.createElement(i,{value:"tab5"},"Tab 5"),o.createElement(i,{value:"tab6"},"Tab 6"))))},L={tags:["!dev"],render:({})=>o.createElement(T,{defaultValue:"tab1"},o.createElement(p,null,o.createElement(i,{value:"tab1"},"Tab 1"),o.createElement(i,{value:"tab2"},"Tab 2"),o.createElement(i,{value:"tab3"},"Tab 3")),o.createElement(S,{value:"tab1"},o.createElement("p",null,"Content 1")),o.createElement(S,{value:"tab2"},o.createElement("p",null,"Content 2")),o.createElement(S,{value:"tab3"},o.createElement("p",null,"Content 3")))};var Y,G,J;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue='tab1'>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(J=(G=V.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [value, setValue] = React.useState('tab1');
    const handleChange = (event: TabsChangeEvent) => {
      setValue(event.value);
    };
    return <Tabs value={value} onChange={handleChange}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>;
  }
}`,...(se=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,ne;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tabs>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(ne=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ie,ce;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(ce=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,be;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(de=A.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var Te,ve,pe;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(pe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:pe.source}}};const yt=["Demo","Overview","Controlled","Default","Disabled","Overflow","WithContent"],Lt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:_,Default:I,Demo:V,Disabled:F,Overflow:A,Overview:P,WithContent:L,__namedExportsOrder:yt,default:Et},Symbol.toStringTag,{value:"Module"}));export{_ as C,I as D,P as O,Lt as T,L as W,F as a,A as b};
