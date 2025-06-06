import{r as A,e as n}from"./index-D_CmzhJ4.js";import{j as m}from"./jsx-runtime-VM66peLj.js";import{c as D}from"./index-CkQHsVsO.js";import{c as j,a as H,p as Ee,r as z,Q as I,P as be,t as Y,s as Ge,d as J,q as De,I as y,J as _,ah as je,R as He,X as $e,w as We,aj as ze,ak as Fe,al as Ue,am as Me,au as Be,av as Ke,ap as Xe}from"./index-BCxMAfLs.js";import{u as Ye,s as Je,R as Qe}from"./render-strategy-C1g0moKL.js";import{c as B,b as Ie,a as xe,u as ye,n as Pe}from"./use-locale-context-Z4fgdY29.js";import{I as Ze,a as et}from"./icon-name-jL3axqAU.js";import{T as f}from"./Text-eeWNb4Wa.js";import{e as tt,o as ot,C as Q}from"./controls-BtiQQn1l.js";import{s as rt}from"./source-d0g_Nd0q.js";const[nt,$]=j({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[at,Wt]=j({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),it=e=>H()(e,["defaultOpen","disabled","id","ids","lazyMount","onExitComplete","onOpenChange","open","unmountOnExit"]);var st=be("collapsible").parts("root","trigger","content"),F=st.build(),ct=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`collapsible:${e.id}`},M=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`collapsible:${e.id}:content`},lt=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`collapsible:${e.id}:trigger`},q=e=>e.getById(M(e));function dt(e,t){const{state:o,send:r,context:a,scope:i,prop:s}=e,l=o.matches("open")||o.matches("closing"),d=o.matches("open"),{width:b,height:E}=a.get("size"),T=!!s("disabled"),u=!a.get("initial")&&d,c="ltr";return{disabled:T,visible:l,open:d,measureSize(){r({type:"size.measure"})},setOpen(C){o.matches("open")!==C&&r({type:C?"open":"close"})},getRootProps(){return t.element({...F.root.attrs,"data-state":d?"open":"closed",dir:c,id:ct(i)})},getContentProps(){return t.element({...F.content.attrs,"data-collapsible":"","data-state":u?void 0:d?"open":"closed",id:M(i),"data-disabled":I(T),hidden:!l,style:{"--height":E!=null?`${E}px`:void 0,"--width":b!=null?`${b}px`:void 0}})},getTriggerProps(){return t.element({...F.trigger.attrs,id:lt(i),dir:c,type:"button","data-state":d?"open":"closed","data-disabled":I(T),"aria-controls":M(i),"aria-expanded":l||!1,onClick(C){C.defaultPrevented||T||r({type:d?"close":"open"})}})}}}var ut=Ee({initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"closed"},context({bindable:e}){return{size:e(()=>({defaultValue:{height:0,width:0}})),initial:e(()=>({defaultValue:!1}))}},refs(){return{cleanup:void 0,stylesRef:void 0}},watch({track:e,prop:t,action:o}){e([()=>t("open")],()=>{o(["setInitial","computeSize","toggleVisibility"])})},exit:["clearInitial","cleanupNode"],states:{closed:{on:{"controlled.open":{target:"open"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","computeSize","invokeOnOpen"]}]}},closing:{effects:["trackExitAnimation"],on:{"controlled.close":{target:"closed"},"controlled.open":{target:"open"},open:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","invokeOnOpen"]}],close:[{guard:"isOpenControlled",actions:["invokeOnExitComplete"]},{target:"closed",actions:["setInitial","computeSize","invokeOnExitComplete"]}],"animation.end":{target:"closed",actions:["invokeOnExitComplete","clearInitial"]}}},open:{effects:["trackEnterAnimation"],on:{"controlled.close":{target:"closing"},close:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closing",actions:["setInitial","computeSize","invokeOnClose"]}],"size.measure":{actions:["measureSize"]},"animation.end":{actions:["clearInitial"]}}}},implementations:{guards:{isOpenControlled:({prop:e})=>e("open")!=null},effects:{trackEnterAnimation:({send:e,scope:t})=>{let o;const r=z(()=>{const a=q(t);if(!a)return;const i=Y(a).animationName;if(!i||i==="none"){e({type:"animation.end"});return}const l=d=>{J(d)===a&&e({type:"animation.end"})};a.addEventListener("animationend",l),o=()=>{a.removeEventListener("animationend",l)}});return()=>{r(),o==null||o()}},trackExitAnimation:({send:e,scope:t})=>{let o;const r=z(()=>{const a=q(t);if(!a)return;const i=Y(a).animationName;if(!i||i==="none"){e({type:"animation.end"});return}const l=b=>{J(b)===a&&e({type:"animation.end"})};a.addEventListener("animationend",l);const d=Ge(a,{animationFillMode:"forwards"});o=()=>{a.removeEventListener("animationend",l),De(()=>d())}});return()=>{r(),o==null||o()}}},actions:{setInitial:({context:e})=>{e.set("initial",!0)},clearInitial:({context:e})=>{e.set("initial",!1)},cleanupNode:({refs:e})=>{e.set("stylesRef",null)},measureSize:({context:e,flush:t,scope:o})=>{const r=q(o);if(!r)return;const{height:a,width:i}=r.getBoundingClientRect();t(()=>{e.set("size",{height:a,width:i})})},computeSize:({refs:e,scope:t,flush:o,context:r})=>{var i;(i=e.get("cleanup"))==null||i();const a=z(()=>{const s=q(t);if(!s)return;const l=s.hidden;s.style.animationName="none",s.style.animationDuration="0s",s.hidden=!1;const d=s.getBoundingClientRect();o(()=>{r.set("size",{height:d.height,width:d.width})}),r.get("initial")&&(s.style.animationName="",s.style.animationDuration=""),s.hidden=l});e.set("cleanup",a)},invokeOnOpen:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose:({prop:e})=>{var t;(t=e("onOpenChange"))==null||t({open:!1})},invokeOnExitComplete:({prop:e})=>{var t;(t=e("onExitComplete"))==null||t()},toggleVisibility:({prop:e,send:t})=>{t({type:e("open")?"controlled.open":"controlled.close"})}}}});B()(["dir","disabled","getRootNode","id","ids","onExitComplete","onOpenChange","defaultOpen","open"]);const mt=(e={})=>{const{lazyMount:t,unmountOnExit:o,...r}=e,a=A.useId(),i=A.useRef(!1),{dir:s}=Ie(),{getRootNode:l}=xe(),d={id:a,dir:s,getRootNode:l,...r},b=ye(ut,d),E=dt(b,Pe);E.visible&&(i.current=!0);const T=!E.visible&&!i.current&&t||o&&!E.visible&&i.current;return{...E,isUnmounted:T}},[pt,Oe]=j({name:"CollapsibleContext",hookName:"useCollapsibleContext",providerName:"<CollapsibleProvider />"}),Re=A.forwardRef((e,t)=>{const[o,r]=it(e),a=mt(o),i=y(a.getRootProps(),r);return m.jsx(pt,{value:a,children:m.jsx(_.div,{...i,ref:t})})});Re.displayName="CollapsibleRoot";const[gt,K]=j({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),Ne=A.forwardRef((e,t)=>{const[o,r]=H()(e,["value","disabled"]),a=$(),i=Ye(),s=y(a.getItemProps(o),r),l=a.getItemState(o),d=a.getItemContentProps(o);return m.jsx(gt,{value:o,children:m.jsx(at,{value:l,children:m.jsx(Re,{ref:t,open:l.expanded,ids:{content:d.id},...i,...s})})})});Ne.displayName="AccordionItem";const Se=A.forwardRef((e,t)=>{const o=Oe();if(o.isUnmounted)return null;const r=y(o.getContentProps(),e);return m.jsx(_.div,{...r,ref:t})});Se.displayName="CollapsibleContent";const vt=H(),Le=A.forwardRef((e,t)=>{const o=$(),r=K(),a=o.getItemContentProps(r),[,i]=vt(a,["hidden","data-state"]),s=y(i,e);return m.jsx(Se,{ref:t,...s})});Le.displayName="AccordionItemContent";const Ve=A.forwardRef((e,t)=>{const o=$(),r=K(),a=y(o.getItemIndicatorProps(r),e);return m.jsx(_.div,{...a,ref:t})});Ve.displayName="AccordionItemIndicator";const we=A.forwardRef((e,t)=>{const o=$(),r=K(),a=Oe(),i=o.getItemTriggerProps(r),s=y({...i,"aria-controls":a.isUnmounted?void 0:i["aria-controls"]},e);return m.jsx(_.button,{...s,ref:t})});we.displayName="AccordionItemTrigger";var At=be("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator"),P=At.build(),k=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`accordion:${e.id}`},ft=(e,t)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.item)==null?void 0:r.call(o,t))??`accordion:${e.id}:item:${t}`},Z=(e,t)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.itemContent)==null?void 0:r.call(o,t))??`accordion:${e.id}:content:${t}`},G=(e,t)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.itemTrigger)==null?void 0:r.call(o,t))??`accordion:${e.id}:trigger:${t}`},Ct=e=>e.getById(k(e)),W=e=>{const o=`[aria-controls][data-ownedby='${CSS.escape(k(e))}']:not([disabled])`;return Xe(Ct(e),o)},Tt=e=>Me(W(e)),ht=e=>Ue(W(e)),Et=(e,t)=>Fe(W(e),G(e,t)),bt=(e,t)=>ze(W(e),G(e,t));function It(e,t){const{send:o,context:r,prop:a,scope:i,computed:s}=e,l=r.get("focusedValue"),d=r.get("value"),b=a("multiple");function E(u){let c=u;!b&&c.length>1&&(c=[c[0]]),o({type:"VALUE.SET",value:c})}function T(u){return{expanded:d.includes(u.value),focused:l===u.value,disabled:!!(u.disabled??a("disabled"))}}return{focusedValue:l,value:d,setValue:E,getItemState:T,getRootProps(){return t.element({...P.root.attrs,dir:a("dir"),id:k(i),"data-orientation":a("orientation")})},getItemProps(u){const c=T(u);return t.element({...P.item.attrs,dir:a("dir"),id:ft(i,u.value),"data-state":c.expanded?"open":"closed","data-focus":I(c.focused),"data-disabled":I(c.disabled),"data-orientation":a("orientation")})},getItemContentProps(u){const c=T(u);return t.element({...P.itemContent.attrs,dir:a("dir"),role:"region",id:Z(i,u.value),"aria-labelledby":G(i,u.value),hidden:!c.expanded,"data-state":c.expanded?"open":"closed","data-disabled":I(c.disabled),"data-focus":I(c.focused),"data-orientation":a("orientation")})},getItemIndicatorProps(u){const c=T(u);return t.element({...P.itemIndicator.attrs,dir:a("dir"),"aria-hidden":!0,"data-state":c.expanded?"open":"closed","data-disabled":I(c.disabled),"data-focus":I(c.focused),"data-orientation":a("orientation")})},getItemTriggerProps(u){const{value:c}=u,C=T(u);return t.button({...P.itemTrigger.attrs,type:"button",dir:a("dir"),id:G(i,c),"aria-controls":Z(i,c),"aria-expanded":C.expanded,disabled:C.disabled,"data-orientation":a("orientation"),"aria-disabled":C.disabled,"data-state":C.expanded?"open":"closed","data-ownedby":k(i),onFocus(){C.disabled||o({type:"TRIGGER.FOCUS",value:c})},onBlur(){C.disabled||o({type:"TRIGGER.BLUR"})},onClick(x){C.disabled||(He()&&x.currentTarget.focus(),o({type:"TRIGGER.CLICK",value:c}))},onKeyDown(x){if(x.defaultPrevented||C.disabled)return;const qe={ArrowDown(){s("isHorizontal")||o({type:"GOTO.NEXT",value:c})},ArrowUp(){s("isHorizontal")||o({type:"GOTO.PREV",value:c})},ArrowRight(){s("isHorizontal")&&o({type:"GOTO.NEXT",value:c})},ArrowLeft(){s("isHorizontal")&&o({type:"GOTO.PREV",value:c})},Home(){o({type:"GOTO.FIRST",value:c})},End(){o({type:"GOTO.LAST",value:c})}},ke=je(x,{dir:a("dir"),orientation:a("orientation")}),X=qe[ke];X&&(X(x),x.preventDefault())}})}}}var{and:xt,not:yt}=$e(),Pt=Ee({props({props:e}){return{collapsible:!1,multiple:!1,orientation:"vertical",defaultValue:[],...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{focusedValue:t(()=>({defaultValue:null,sync:!0,onChange(o){var r;(r=e("onFocusChange"))==null||r({value:o})}})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(o){var r;(r=e("onValueChange"))==null||r({value:o})}}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal"},on:{"VALUE.SET":{actions:["setValue"]}},states:{idle:{on:{"TRIGGER.FOCUS":{target:"focused",actions:["setFocusedValue"]}}},focused:{on:{"GOTO.NEXT":{actions:["focusNextTrigger"]},"GOTO.PREV":{actions:["focusPrevTrigger"]},"TRIGGER.CLICK":[{guard:xt("isExpanded","canToggle"),actions:["collapse"]},{guard:yt("isExpanded"),actions:["expand"]}],"GOTO.FIRST":{actions:["focusFirstTrigger"]},"GOTO.LAST":{actions:["focusLastTrigger"]},"TRIGGER.BLUR":{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{canToggle:({prop:e})=>!!e("collapsible")||!!e("multiple"),isExpanded:({context:e,event:t})=>e.get("value").includes(t.value)},actions:{collapse({context:e,prop:t,event:o}){const r=t("multiple")?Ke(e.get("value"),o.value):[];e.set("value",r)},expand({context:e,prop:t,event:o}){const r=t("multiple")?Be(e.get("value"),o.value):[o.value];e.set("value",r)},focusFirstTrigger({scope:e}){var t;(t=Tt(e))==null||t.focus()},focusLastTrigger({scope:e}){var t;(t=ht(e))==null||t.focus()},focusNextTrigger({context:e,scope:t}){const o=e.get("focusedValue");if(!o)return;const r=Et(t,o);r==null||r.focus()},focusPrevTrigger({context:e,scope:t}){const o=e.get("focusedValue");if(!o)return;const r=bt(t,o);r==null||r.focus()},setFocusedValue({context:e,event:t}){e.set("focusedValue",t.value)},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:t}){e.set("value",t.value)},coarseValue({context:e,prop:t}){!t("multiple")&&e.get("value").length>1&&(We("The value of accordion should be a single value when multiple is false."),e.set("value",[e.get("value")[0]]))}}}});B()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value","defaultValue"]);B()(["value","disabled"]);const Ot=e=>{const t=A.useId(),{getRootNode:o}=xe(),{dir:r}=Ie(),a={id:t,dir:r,getRootNode:o,...e},i=ye(Pt,a);return It(i,Pe)},_e=A.forwardRef((e,t)=>{const[o,r]=Je(e),[a,i]=H()(r,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),s=Ot(a),l=y(s.getRootProps(),i);return m.jsx(nt,{value:s,children:m.jsx(Qe,{value:o,children:m.jsx(_.div,{...l,ref:t})})})});_e.displayName="AccordionRoot";const h=A.forwardRef(({className:e,defaultValue:t,disabled:o,multiple:r=!0,onChange:a,value:i,...s},l)=>m.jsx(_e,{className:D(e),collapsible:!0,defaultValue:t,disabled:o,ref:l,multiple:r,onValueChange:a,value:i,...s}));h.displayName="Accordion";h.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: AccordionChangeDetail) => void",signature:{arguments:[{type:{name:"AccordionChangeDetail"},name:"detail"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}},composes:["Omit"]};const Rt={"accordion-content":"_accordion-content_1tqim_2"},p=A.forwardRef(({children:e,className:t,...o},r)=>m.jsx(Le,{className:D(Rt["accordion-content"],t),ref:r,...o,children:e}));p.displayName="AccordionContent";p.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const Nt={"accordion-item":"_accordion-item_18ydh_2"},g=A.forwardRef(({children:e,className:t,disabled:o,value:r,...a},i)=>m.jsx(Ne,{className:D(Nt["accordion-item"],t),disabled:o,ref:i,value:r,...a,children:e}));g.displayName="AccordionItem";g.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithRef"]};const U={"accordion-trigger":"_accordion-trigger_1cq68_2","accordion-trigger__icon":"_accordion-trigger__icon_1cq68_22"},v=A.forwardRef(({children:e,className:t,...o},r)=>m.jsxs(we,{className:D(U["accordion-trigger"],t),ref:r,...o,children:[m.jsx("div",{className:U["accordion-trigger__content"],children:e}),m.jsx(Ve,{asChild:!0,children:m.jsx(Ze,{className:U["accordion-trigger__icon"],name:et.chevronDown})})]}));v.displayName="AccordionTrigger";v.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",composes:["ComponentPropsWithRef"]};const St={component:h,argTypes:tt(["onChange","defaultValue","value"]),subcomponents:{AccordionContent:p,AccordionItem:g,AccordionTrigger:v},title:"ODS Components/Accordion"},O={tags:["!dev"],render:({})=>n.createElement(h,null,n.createElement(g,{value:"0"},n.createElement(v,null,n.createElement(f,{preset:"paragraph"},"Hello World!")),n.createElement(p,null,n.createElement(f,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},R={render:e=>n.createElement(h,{disabled:e.disabled,multiple:e.multiple},n.createElement(g,{value:"0"},n.createElement(v,null,n.createElement(f,{preset:"paragraph"},"Hello World!")),n.createElement(p,null,n.createElement(f,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),n.createElement(g,{value:"1"},n.createElement(v,null,n.createElement(f,{preset:"paragraph"},"Bye World!")),n.createElement(p,null,n.createElement(f,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.")))),argTypes:ot({multiple:{table:{category:Q.general},control:"boolean"},disabled:{table:{category:Q.general},control:"boolean"}})},N={tags:["!dev"],render:({})=>n.createElement(h,null,n.createElement(g,{value:"0"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))},S={tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(h,null,n.createElement(g,{value:"1"},n.createElement(v,null,n.createElement(f,{preset:"heading-4"},"Multiple")),n.createElement(p,null,n.createElement(f,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),n.createElement(g,{value:"2"},n.createElement(v,null,n.createElement(f,{preset:"heading-4"},"Multiple")),n.createElement(p,null,n.createElement(f,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),n.createElement("br",null),n.createElement(h,{multiple:!1},n.createElement(g,{value:"3"},n.createElement(v,null,n.createElement(f,{preset:"heading-4"},"Non-multiple")),n.createElement(p,null,n.createElement(f,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),n.createElement(g,{value:"4"},n.createElement(v,null,n.createElement(f,{preset:"heading-4"},"Non-multiple")),n.createElement(p,null,n.createElement(f,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))},L={tags:["!dev"],render:({})=>n.createElement(h,{disabled:!0},n.createElement(g,{value:"0"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))},V={tags:["!dev"],render:({})=>n.createElement(h,null,n.createElement(g,{value:"0",disabled:!0},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")),n.createElement(g,{value:"1"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))},w={tags:["!dev"],parameters:{docs:{source:{...rt()}}},render:({})=>{const[e,t]=A.useState(["0"]);return n.createElement(h,{value:e,onChange:o=>t(o.value)},n.createElement(g,{value:"0"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")),n.createElement(g,{value:"1"},n.createElement(v,null,"Hello World!"),n.createElement(p,null,"Lorem ipsum dolor sit amet.")))}};var ee,te,oe;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ge=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ve,Ae,fe;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:fe.source}}};var Ce,Te,he;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(he=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};const Lt=["Overview","Demo","Default","Multiple","Disabled","ItemDisabled","Controlled"],zt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:w,Default:N,Demo:R,Disabled:L,ItemDisabled:V,Multiple:S,Overview:O,__namedExportsOrder:Lt,default:St},Symbol.toStringTag,{value:"Module"}));export{zt as A,w as C,N as D,V as I,S as M,O,L as a};
