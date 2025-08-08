import{r as f,e as n}from"./index-D_CmzhJ4.js";import{j as u}from"./jsx-runtime-VM66peLj.js";import{c as D}from"./index-CkQHsVsO.js";import{c as W,a as H,H as Ee,r as F,W as I,T as be,J as X,y as Ge,d as J,I as je,K as B,U as Ie,u as xe,L as ye,V as Pe,Q as y,R as _,Y as De,Z as We,_ as He,w as $e,a1 as Ue,a2 as Fe,$ as ze,a0 as Me,aT as Be,aU as Ke,a6 as Ye}from"./use-locale-context-DLC4Hyvy.js";import{u as Xe,s as Je,R as Qe}from"./render-strategy-sz9fehwg.js";import{I as Ze,a as et}from"./icon-name-CL_C5kfn.js";import{T as A}from"./Text-B1XN51Xz.js";import{e as tt,o as ot,C as Q}from"./controls-BtiQQn1l.js";import{s as rt}from"./source-d0g_Nd0q.js";const[nt,$]=W({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[at,Ht]=W({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),it=e=>H()(e,["defaultOpen","disabled","id","ids","lazyMount","onExitComplete","onOpenChange","open","unmountOnExit"]);var st=be("collapsible").parts("root","trigger","content","indicator"),q=st.build(),ct=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`collapsible:${e.id}`},M=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`collapsible:${e.id}:content`},lt=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`collapsible:${e.id}:trigger`},k=e=>e.getById(M(e));function dt(e,t){const{state:o,send:r,context:a,scope:i,prop:l}=e,c=o.matches("open")||o.matches("closing"),m=o.matches("open"),{width:b,height:E}=a.get("size"),h=!!l("disabled"),d=!a.get("initial")&&m,s="ltr";return{disabled:h,visible:c,open:m,measureSize(){r({type:"size.measure"})},setOpen(C){o.matches("open")!==C&&r({type:C?"open":"close"})},getRootProps(){return t.element({...q.root.attrs,"data-state":m?"open":"closed",dir:s,id:ct(i)})},getContentProps(){return t.element({...q.content.attrs,"data-collapsible":"","data-state":d?void 0:m?"open":"closed",id:M(i),"data-disabled":I(h),hidden:!c,style:{"--height":E!=null?`${E}px`:void 0,"--width":b!=null?`${b}px`:void 0}})},getTriggerProps(){return t.element({...q.trigger.attrs,id:lt(i),dir:s,type:"button","data-state":m?"open":"closed","data-disabled":I(h),"aria-controls":M(i),"aria-expanded":c||!1,onClick(C){C.defaultPrevented||h||r({type:m?"close":"open"})}})},getIndicatorProps(){return t.element({...q.indicator.attrs,dir:s,"data-state":m?"open":"closed","data-disabled":I(h)})}}}var ut=Ee({initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"closed"},context({bindable:e}){return{size:e(()=>({defaultValue:{height:0,width:0},sync:!0})),initial:e(()=>({defaultValue:!1}))}},refs(){return{cleanup:void 0,stylesRef:void 0}},watch({track:e,prop:t,action:o}){e([()=>t("open")],()=>{o(["setInitial","computeSize","toggleVisibility"])})},exit:["clearInitial","cleanupNode"],states:{closed:{on:{"controlled.open":{target:"open"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","computeSize","invokeOnOpen"]}]}},closing:{effects:["trackExitAnimation"],on:{"controlled.close":{target:"closed"},"controlled.open":{target:"open"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","invokeOnOpen"]}],close:[{guard:"isOpenControlled",actions:["invokeOnExitComplete"]},{target:"closed",actions:["setInitial","computeSize","invokeOnExitComplete"]}],"animation.end":{target:"closed",actions:["invokeOnExitComplete","clearInitial"]}}},open:{effects:["trackEnterAnimation"],on:{"controlled.close":{target:"closing"},close:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closing",actions:["setInitial","computeSize","invokeOnClose"]}],"size.measure":{actions:["measureSize"]},"animation.end":{actions:["clearInitial"]}}}},implementations:{guards:{isOpenControlled:({prop:e})=>e("open")!=null},effects:{trackEnterAnimation:({send:e,scope:t})=>{let o;const r=F(()=>{const a=k(t);if(!a)return;const i=X(a).animationName;if(!i||i==="none"){e({type:"animation.end"});return}const c=m=>{J(m)===a&&e({type:"animation.end"})};a.addEventListener("animationend",c),o=()=>{a.removeEventListener("animationend",c)}});return()=>{r(),o==null||o()}},trackExitAnimation:({send:e,scope:t})=>{let o;const r=F(()=>{const a=k(t);if(!a)return;const i=X(a).animationName;if(!i||i==="none"){e({type:"animation.end"});return}const c=b=>{J(b)===a&&e({type:"animation.end"})};a.addEventListener("animationend",c);const m=Ge(a,{animationFillMode:"forwards"});o=()=>{a.removeEventListener("animationend",c),je(()=>m())}});return()=>{r(),o==null||o()}}},actions:{setInitial:({context:e,flush:t})=>{t(()=>{e.set("initial",!0)})},clearInitial:({context:e})=>{e.set("initial",!1)},cleanupNode:({refs:e})=>{e.set("stylesRef",null)},measureSize:({context:e,scope:t})=>{const o=k(t);if(!o)return;const{height:r,width:a}=o.getBoundingClientRect();e.set("size",{height:r,width:a})},computeSize:({refs:e,scope:t,context:o})=>{var a;(a=e.get("cleanup"))==null||a();const r=F(()=>{const i=k(t);if(!i)return;const l=i.hidden;i.style.animationName="none",i.style.animationDuration="0s",i.hidden=!1;const c=i.getBoundingClientRect();o.set("size",{height:c.height,width:c.width}),o.get("initial")&&(i.style.animationName="",i.style.animationDuration=""),i.hidden=l});e.set("cleanup",r)},invokeOnOpen:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!1})},invokeOnExitComplete:({prop:e})=>{var t;(t=e("onExitComplete"))==null||t()},toggleVisibility:({prop:e,send:t})=>{t({type:e("open")?"controlled.open":"controlled.close"})}}}});B()(["dir","disabled","getRootNode","id","ids","onExitComplete","onOpenChange","defaultOpen","open"]);const mt=(e={})=>{const{lazyMount:t,unmountOnExit:o,...r}=e,a=f.useId(),i=f.useRef(!1),{dir:l}=Ie(),{getRootNode:c}=xe(),m={id:a,dir:l,getRootNode:c,...r},b=ye(ut,m),E=dt(b,Pe);E.visible&&(i.current=!0);const h=!E.visible&&!i.current&&t||o&&!E.visible&&i.current;return{...E,isUnmounted:h}},[pt,Oe]=W({name:"CollapsibleContext",hookName:"useCollapsibleContext",providerName:"<CollapsibleProvider />"}),Re=f.forwardRef((e,t)=>{const[o,r]=it(e),a=mt(o),i=y(a.getRootProps(),r);return u.jsx(pt,{value:a,children:u.jsx(_.div,{...i,ref:t})})});Re.displayName="CollapsibleRoot";const[gt,K]=W({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),Ne=f.forwardRef((e,t)=>{const[o,r]=H()(e,["value","disabled"]),a=$(),i=Xe(),l=y(a.getItemProps(o),r),c=a.getItemState(o),m=a.getItemContentProps(o);return u.jsx(gt,{value:o,children:u.jsx(at,{value:c,children:u.jsx(Re,{ref:t,open:c.expanded,ids:{content:m.id},...i,...l})})})});Ne.displayName="AccordionItem";const Se=f.forwardRef((e,t)=>{const o=Oe();if(o.isUnmounted)return null;const r=y(o.getContentProps(),e);return u.jsx(_.div,{...r,ref:t})});Se.displayName="CollapsibleContent";const vt=H(),Le=f.forwardRef((e,t)=>{const o=$(),r=K(),a=o.getItemContentProps(r),[,i]=vt(a,["hidden","data-state"]),l=y(i,e);return u.jsx(Se,{ref:t,...l})});Le.displayName="AccordionItemContent";const Ve=f.forwardRef((e,t)=>{const o=$(),r=K(),a=y(o.getItemIndicatorProps(r),e);return u.jsx(_.div,{...a,ref:t})});Ve.displayName="AccordionItemIndicator";const we=f.forwardRef((e,t)=>{const o=$(),r=K(),a=Oe(),i=o.getItemTriggerProps(r),l=y({...i,"aria-controls":a.isUnmounted?void 0:i["aria-controls"]},e);return u.jsx(_.button,{...l,ref:t})});we.displayName="AccordionItemTrigger";var ft=be("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator"),P=ft.build(),G=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`accordion:${e.id}`},At=(e,t)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.item)==null?void 0:r.call(o,t))??`accordion:${e.id}:item:${t}`},Z=(e,t)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.itemContent)==null?void 0:r.call(o,t))??`accordion:${e.id}:content:${t}`},j=(e,t)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.itemTrigger)==null?void 0:r.call(o,t))??`accordion:${e.id}:trigger:${t}`},ht=e=>e.getById(G(e)),U=e=>{const o=`[aria-controls][data-ownedby='${CSS.escape(G(e))}']:not([disabled])`;return Ye(ht(e),o)},Ct=e=>Me(U(e)),Tt=e=>ze(U(e)),Et=(e,t)=>Fe(U(e),j(e,t)),bt=(e,t)=>Ue(U(e),j(e,t));function It(e,t){const{send:o,context:r,prop:a,scope:i,computed:l}=e,c=r.get("focusedValue"),m=r.get("value"),b=a("multiple");function E(d){let s=d;!b&&s.length>1&&(s=[s[0]]),o({type:"VALUE.SET",value:s})}function h(d){return{expanded:m.includes(d.value),focused:c===d.value,disabled:!!(d.disabled??a("disabled"))}}return{focusedValue:c,value:m,setValue:E,getItemState:h,getRootProps(){return t.element({...P.root.attrs,dir:a("dir"),id:G(i),"data-orientation":a("orientation")})},getItemProps(d){const s=h(d);return t.element({...P.item.attrs,dir:a("dir"),id:At(i,d.value),"data-state":s.expanded?"open":"closed","data-focus":I(s.focused),"data-disabled":I(s.disabled),"data-orientation":a("orientation")})},getItemContentProps(d){const s=h(d);return t.element({...P.itemContent.attrs,dir:a("dir"),role:"region",id:Z(i,d.value),"aria-labelledby":j(i,d.value),hidden:!s.expanded,"data-state":s.expanded?"open":"closed","data-disabled":I(s.disabled),"data-focus":I(s.focused),"data-orientation":a("orientation")})},getItemIndicatorProps(d){const s=h(d);return t.element({...P.itemIndicator.attrs,dir:a("dir"),"aria-hidden":!0,"data-state":s.expanded?"open":"closed","data-disabled":I(s.disabled),"data-focus":I(s.focused),"data-orientation":a("orientation")})},getItemTriggerProps(d){const{value:s}=d,C=h(d);return t.button({...P.itemTrigger.attrs,type:"button",dir:a("dir"),id:j(i,s),"aria-controls":Z(i,s),"aria-expanded":C.expanded,disabled:C.disabled,"data-orientation":a("orientation"),"aria-disabled":C.disabled,"data-state":C.expanded?"open":"closed","data-ownedby":G(i),onFocus(){C.disabled||o({type:"TRIGGER.FOCUS",value:s})},onBlur(){C.disabled||o({type:"TRIGGER.BLUR"})},onClick(x){C.disabled||(We()&&x.currentTarget.focus(),o({type:"TRIGGER.CLICK",value:s}))},onKeyDown(x){if(x.defaultPrevented||C.disabled)return;const qe={ArrowDown(){l("isHorizontal")||o({type:"GOTO.NEXT",value:s})},ArrowUp(){l("isHorizontal")||o({type:"GOTO.PREV",value:s})},ArrowRight(){l("isHorizontal")&&o({type:"GOTO.NEXT",value:s})},ArrowLeft(){l("isHorizontal")&&o({type:"GOTO.PREV",value:s})},Home(){o({type:"GOTO.FIRST",value:s})},End(){o({type:"GOTO.LAST",value:s})}},ke=De(x,{dir:a("dir"),orientation:a("orientation")}),Y=qe[ke];Y&&(Y(x),x.preventDefault())}})}}}var{and:xt,not:yt}=He(),Pt=Ee({props({props:e}){return{collapsible:!1,multiple:!1,orientation:"vertical",defaultValue:[],...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{focusedValue:t(()=>({defaultValue:null,sync:!0,onChange(o){var r;(r=e("onFocusChange"))==null||r({value:o})}})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(o){var r;(r=e("onValueChange"))==null||r({value:o})}}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal"},on:{"VALUE.SET":{actions:["setValue"]}},states:{idle:{on:{"TRIGGER.FOCUS":{target:"focused",actions:["setFocusedValue"]}}},focused:{on:{"GOTO.NEXT":{actions:["focusNextTrigger"]},"GOTO.PREV":{actions:["focusPrevTrigger"]},"TRIGGER.CLICK":[{guard:xt("isExpanded","canToggle"),actions:["collapse"]},{guard:yt("isExpanded"),actions:["expand"]}],"GOTO.FIRST":{actions:["focusFirstTrigger"]},"GOTO.LAST":{actions:["focusLastTrigger"]},"TRIGGER.BLUR":{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{canToggle:({prop:e})=>!!e("collapsible")||!!e("multiple"),isExpanded:({context:e,event:t})=>e.get("value").includes(t.value)},actions:{collapse({context:e,prop:t,event:o}){const r=t("multiple")?Ke(e.get("value"),o.value):[];e.set("value",r)},expand({context:e,prop:t,event:o}){const r=t("multiple")?Be(e.get("value"),o.value):[o.value];e.set("value",r)},focusFirstTrigger({scope:e}){var t;(t=Ct(e))==null||t.focus()},focusLastTrigger({scope:e}){var t;(t=Tt(e))==null||t.focus()},focusNextTrigger({context:e,scope:t}){const o=e.get("focusedValue");if(!o)return;const r=Et(t,o);r==null||r.focus()},focusPrevTrigger({context:e,scope:t}){const o=e.get("focusedValue");if(!o)return;const r=bt(t,o);r==null||r.focus()},setFocusedValue({context:e,event:t}){e.set("focusedValue",t.value)},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:t}){e.set("value",t.value)},coarseValue({context:e,prop:t}){!t("multiple")&&e.get("value").length>1&&($e("The value of accordion should be a single value when multiple is false."),e.set("value",[e.get("value")[0]]))}}}});B()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value","defaultValue"]);B()(["value","disabled"]);const Ot=e=>{const t=f.useId(),{getRootNode:o}=xe(),{dir:r}=Ie(),a={id:t,dir:r,getRootNode:o,...e},i=ye(Pt,a);return It(i,Pe)},_e=f.forwardRef((e,t)=>{const[o,r]=Je(e),[a,i]=H()(r,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),l=Ot(a),c=y(l.getRootProps(),i);return u.jsx(nt,{value:l,children:u.jsx(Qe,{value:o,children:u.jsx(_.div,{...c,ref:t})})})});_e.displayName="AccordionRoot";const T=f.forwardRef(({className:e,defaultValue:t,disabled:o,multiple:r=!0,onChange:a,value:i,...l},c)=>u.jsx(_e,{className:D(e),collapsible:!0,"data-ods":"accordion",defaultValue:t,disabled:o,ref:c,multiple:r,onValueChange:a,value:i,...l}));T.displayName="Accordion";T.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the expanded accordion items. Use when you don't need to control the value of the accordion."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple accordion items can be expanded at the same time.",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: AccordionChangeDetail) => void",signature:{arguments:[{type:{name:"AccordionChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the state of expanded/collapsed accordion items changes."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the expanded accordion items."}},composes:["Omit"]};const Rt={"accordion-content":"_accordion-content_1chb0_2"},p=f.forwardRef(({children:e,className:t,...o},r)=>u.jsx(Le,{className:D(Rt["accordion-content"],t),"data-ods":"accordion-content",ref:r,...o,children:e}));p.displayName="AccordionContent";p.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const Nt={"accordion-item":"_accordion-item_1a5kd_2"},g=f.forwardRef(({children:e,className:t,disabled:o,value:r,...a},i)=>u.jsx(Ne,{className:D(Nt["accordion-item"],t),"data-ods":"accordion-item",disabled:o,ref:i,value:r,...a,children:e}));g.displayName="AccordionItem";g.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the accordion item is disabled."},value:{required:!0,tsType:{name:"string"},description:"The value of the accordion item."}},composes:["ComponentPropsWithRef"]};const z={"accordion-trigger":"_accordion-trigger_ckyhj_2","accordion-trigger__icon":"_accordion-trigger__icon_ckyhj_22"},v=f.forwardRef(({children:e,className:t,...o},r)=>u.jsxs(we,{className:D(z["accordion-trigger"],t),"data-ods":"accordion-trigger",ref:r,...o,children:[u.jsx("div",{className:z["accordion-trigger__content"],children:e}),u.jsx(Ve,{asChild:!0,children:u.jsx(Ze,{className:z["accordion-trigger__icon"],name:et.chevronDown})})]}));v.displayName="AccordionTrigger";v.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",composes:["ComponentPropsWithRef"]};const St={component:T,argTypes:tt(["onChange","defaultValue","value"]),subcomponents:{AccordionContent:p,AccordionItem:g,AccordionTrigger:v},title:"React Components/Accordion"},O={tags:["!dev"],render:({})=>n.createElement(T,null,n.createElement(g,{value:"0"},n.createElement(v,null,n.createElement(A,{preset:"paragraph"},"Hello World!")),n.createElement(p,null,n.createElement(A,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},R={render:e=>n.createElement(T,{disabled:e.disabled,multiple:e.multiple},n.createElement(g,{value:"0"},n.createElement(v,null,n.createElement(A,{preset:"paragraph"},"Hello World!")),n.createElement(p,null,n.createElement(A,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),n.createElement(g,{value:"1"},n.createElement(v,null,n.createElement(A,{preset:"paragraph"},"Bye World!")),n.createElement(p,null,n.createElement(A,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.")))),argTypes:ot({multiple:{table:{category:Q.general},control:"boolean"},disabled:{table:{category:Q.general},control:"boolean"}})},N={tags:["!dev"],render:({})=>n.createElement(T,null,n.createElement(g,{value:"0"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))},S={tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(T,null,n.createElement(g,{value:"1"},n.createElement(v,null,n.createElement(A,{preset:"heading-4"},"Multiple")),n.createElement(p,null,n.createElement(A,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),n.createElement(g,{value:"2"},n.createElement(v,null,n.createElement(A,{preset:"heading-4"},"Multiple")),n.createElement(p,null,n.createElement(A,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),n.createElement("br",null),n.createElement(T,{multiple:!1},n.createElement(g,{value:"3"},n.createElement(v,null,n.createElement(A,{preset:"heading-4"},"Non-multiple")),n.createElement(p,null,n.createElement(A,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),n.createElement(g,{value:"4"},n.createElement(v,null,n.createElement(A,{preset:"heading-4"},"Non-multiple")),n.createElement(p,null,n.createElement(A,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))},L={tags:["!dev"],render:({})=>n.createElement(T,{disabled:!0},n.createElement(g,{value:"0"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))},V={tags:["!dev"],render:({})=>n.createElement(T,null,n.createElement(g,{value:"0",disabled:!0},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")),n.createElement(g,{value:"1"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))},w={tags:["!dev"],parameters:{docs:{source:{...rt()}}},render:({})=>{const[e,t]=f.useState(["0"]);return n.createElement(T,{value:e,onChange:o=>t(o.value)},n.createElement(g,{value:"0"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")),n.createElement(g,{value:"1"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))}};var ee,te,oe;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">
            Hello World!
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(oe=(te=O.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,ae;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: (arg: AccordionProp) => <Accordion disabled={arg.disabled} multiple={arg.multiple}>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">
            Hello World!
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1">
        <AccordionTrigger>
          <Text preset="paragraph">
            Bye World!
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  argTypes: orderControls({
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(ae=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,se,ce;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ce=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,de,ue;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Accordion>
        <AccordionItem value="1">
          <AccordionTrigger>
            <Text preset="heading-4">Multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>
            <Text preset="heading-4">Multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion multiple={false}>
        <AccordionItem value="3">
          <AccordionTrigger>
            <Text preset="heading-4">Non-multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger>
            <Text preset="heading-4">Non-multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ge;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Accordion disabled>
      <AccordionItem value="0">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ge=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ve,fe,Ae;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Accordion>
      <AccordionItem value="0" disabled>
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Ae=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var he,Ce,Te;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [value, setValue] = useState(['0']);
    return <Accordion value={value} onChange={detail => setValue(detail.value)}>
        <AccordionItem value="0">
          <AccordionTrigger>
            Hello World!
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="1">
          <AccordionTrigger>
            Hello World!
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(Te=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};const Lt=["Overview","Demo","Default","Multiple","Disabled","ItemDisabled","Controlled"],$t=Object.freeze(Object.defineProperty({__proto__:null,Controlled:w,Default:N,Demo:R,Disabled:L,ItemDisabled:V,Multiple:S,Overview:O,__namedExportsOrder:Lt,default:St},Symbol.toStringTag,{value:"Module"}));export{$t as A,w as C,N as D,V as I,S as M,O,L as a};
