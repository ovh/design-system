import{r as v,e as o}from"./index-jIWwRBLr.js";import{j as p}from"./jsx-runtime-Cfl8ynUo.js";import{c as W}from"./index-CqY9YpN0.js";import{c as F,a as U,L as V,M as $,O as Le,P as Se,Q as Ve,N as h,y as qe,R as we,w as Ge,U as De,V as We,S as He,T as je,aF as Fe,aG as Ue,B as Ce,Z as $e,_ as Me,$ as Be,C as ke,a0 as ze}from"./use-locale-context-kHyebpMI.js";import{u as Xe,s as Ke,R as Ye}from"./render-strategy-DRJaCB2u.js";import{C as Qe,a as Ze,u as Je}from"./collapsible-content-fFv9IDDj.js";import{I as eo,a as oo}from"./icon-name-BpdEc4-2.js";import{T as m}from"./Text-CW33_IfE.js";import{e as ro,o as to,C as k}from"./controls-BtiQQn1l.js";import{s as no}from"./source-CPEZJ6oD.js";const[ao,H]=F({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[io,Wo]=F({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),[co,M]=F({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),Ee=v.forwardRef((e,r)=>{const[t,n]=U()(e,["value","disabled"]),a=H(),c=Xe(),g=V(a.getItemProps(t),n),T=a.getItemState(t),q=a.getItemContentProps(t);return p.jsx(co,{value:t,children:p.jsx(io,{value:T,children:p.jsx(Qe,{ref:r,open:T.expanded,ids:{content:q.id},...c,...g})})})});Ee.displayName="AccordionItem";const so=U(),xe=v.forwardRef((e,r)=>{const t=H(),n=M(),a=t.getItemContentProps(n),[,c]=so(a,["hidden","data-state"]),g=V(c,e);return p.jsx(Ze,{ref:r,...g})});xe.displayName="AccordionItemContent";const be=v.forwardRef((e,r)=>{const t=H(),n=M(),a=V(t.getItemIndicatorProps(n),e);return p.jsx($.div,{...a,ref:r})});be.displayName="AccordionItemIndicator";const Pe=v.forwardRef((e,r)=>{const t=H(),n=M(),a=Je(),c=t.getItemTriggerProps(n),g=V({...c,"aria-controls":a.isUnmounted?void 0:c["aria-controls"]},e);return p.jsx($.button,{...g,ref:r})});Pe.displayName="AccordionItemTrigger";var lo=Le("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator"),E=lo.build(),G=e=>{var r;return((r=e.ids)==null?void 0:r.root)??`accordion:${e.id}`},mo=(e,r)=>{var t,n;return((n=(t=e.ids)==null?void 0:t.item)==null?void 0:n.call(t,r))??`accordion:${e.id}:item:${r}`},z=(e,r)=>{var t,n;return((n=(t=e.ids)==null?void 0:t.itemContent)==null?void 0:n.call(t,r))??`accordion:${e.id}:content:${r}`},D=(e,r)=>{var t,n;return((n=(t=e.ids)==null?void 0:t.itemTrigger)==null?void 0:n.call(t,r))??`accordion:${e.id}:trigger:${r}`},uo=e=>e.getById(G(e)),j=e=>{const t=`[aria-controls][data-ownedby='${CSS.escape(G(e))}']:not([disabled])`;return $e(uo(e),t)},po=e=>je(j(e)),go=e=>He(j(e)),Ao=(e,r)=>We(j(e),D(e,r)),vo=(e,r)=>De(j(e),D(e,r));function To(e,r){const{send:t,context:n,prop:a,scope:c,computed:g}=e,T=n.get("focusedValue"),q=n.get("value"),_e=a("multiple");function Ne(u){let i=u;!_e&&i.length>1&&(i=[i[0]]),t({type:"VALUE.SET",value:i})}function C(u){return{expanded:q.includes(u.value),focused:T===u.value,disabled:!!(u.disabled??a("disabled"))}}return{focusedValue:T,value:q,setValue:Ne,getItemState:C,getRootProps(){return r.element({...E.root.attrs,dir:a("dir"),id:G(c),"data-orientation":a("orientation")})},getItemProps(u){const i=C(u);return r.element({...E.item.attrs,dir:a("dir"),id:mo(c,u.value),"data-state":i.expanded?"open":"closed","data-focus":h(i.focused),"data-disabled":h(i.disabled),"data-orientation":a("orientation")})},getItemContentProps(u){const i=C(u);return r.element({...E.itemContent.attrs,dir:a("dir"),role:"region",id:z(c,u.value),"aria-labelledby":D(c,u.value),hidden:!i.expanded,"data-state":i.expanded?"open":"closed","data-disabled":h(i.disabled),"data-focus":h(i.focused),"data-orientation":a("orientation")})},getItemIndicatorProps(u){const i=C(u);return r.element({...E.itemIndicator.attrs,dir:a("dir"),"aria-hidden":!0,"data-state":i.expanded?"open":"closed","data-disabled":h(i.disabled),"data-focus":h(i.focused),"data-orientation":a("orientation")})},getItemTriggerProps(u){const{value:i}=u,f=C(u);return r.button({...E.itemTrigger.attrs,type:"button",dir:a("dir"),id:D(c,i),"aria-controls":z(c,i),"aria-expanded":f.expanded,disabled:f.disabled,"data-orientation":a("orientation"),"aria-disabled":f.disabled,"data-state":f.expanded?"open":"closed","data-ownedby":G(c),onFocus(){f.disabled||t({type:"TRIGGER.FOCUS",value:i})},onBlur(){f.disabled||t({type:"TRIGGER.BLUR"})},onClick(I){f.disabled||(Ve()&&I.currentTarget.focus(),t({type:"TRIGGER.CLICK",value:i}))},onKeyDown(I){if(I.defaultPrevented||f.disabled)return;const Oe={ArrowDown(){g("isHorizontal")||t({type:"GOTO.NEXT",value:i})},ArrowUp(){g("isHorizontal")||t({type:"GOTO.PREV",value:i})},ArrowRight(){g("isHorizontal")&&t({type:"GOTO.NEXT",value:i})},ArrowLeft(){g("isHorizontal")&&t({type:"GOTO.PREV",value:i})},Home(){t({type:"GOTO.FIRST",value:i})},End(){t({type:"GOTO.LAST",value:i})}},Re=Se(I,{dir:a("dir"),orientation:a("orientation")}),B=Oe[Re];B&&(B(I),I.preventDefault())}})}}}var{and:fo,not:Io}=we(),ho=qe({props({props:e}){return{collapsible:!1,multiple:!1,orientation:"vertical",defaultValue:[],...e}},initialState(){return"idle"},context({prop:e,bindable:r}){return{focusedValue:r(()=>({defaultValue:null,sync:!0,onChange(t){var n;(n=e("onFocusChange"))==null||n({value:t})}})),value:r(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(t){var n;(n=e("onValueChange"))==null||n({value:t})}}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal"},on:{"VALUE.SET":{actions:["setValue"]}},states:{idle:{on:{"TRIGGER.FOCUS":{target:"focused",actions:["setFocusedValue"]}}},focused:{on:{"GOTO.NEXT":{actions:["focusNextTrigger"]},"GOTO.PREV":{actions:["focusPrevTrigger"]},"TRIGGER.CLICK":[{guard:fo("isExpanded","canToggle"),actions:["collapse"]},{guard:Io("isExpanded"),actions:["expand"]}],"GOTO.FIRST":{actions:["focusFirstTrigger"]},"GOTO.LAST":{actions:["focusLastTrigger"]},"TRIGGER.BLUR":{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{canToggle:({prop:e})=>!!e("collapsible")||!!e("multiple"),isExpanded:({context:e,event:r})=>e.get("value").includes(r.value)},actions:{collapse({context:e,prop:r,event:t}){const n=r("multiple")?Ue(e.get("value"),t.value):[];e.set("value",n)},expand({context:e,prop:r,event:t}){const n=r("multiple")?Fe(e.get("value"),t.value):[t.value];e.set("value",n)},focusFirstTrigger({scope:e}){var r;(r=po(e))==null||r.focus()},focusLastTrigger({scope:e}){var r;(r=go(e))==null||r.focus()},focusNextTrigger({context:e,scope:r}){const t=e.get("focusedValue");if(!t)return;const n=Ao(r,t);n==null||n.focus()},focusPrevTrigger({context:e,scope:r}){const t=e.get("focusedValue");if(!t)return;const n=vo(r,t);n==null||n.focus()},setFocusedValue({context:e,event:r}){e.set("focusedValue",r.value)},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:r}){e.set("value",r.value)},coarseValue({context:e,prop:r}){!r("multiple")&&e.get("value").length>1&&(Ge("The value of accordion should be a single value when multiple is false."),e.set("value",[e.get("value")[0]]))}}}});Ce()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value","defaultValue"]);Ce()(["value","disabled"]);const Co=e=>{const r=v.useId(),{getRootNode:t}=Me(),{dir:n}=Be(),a={id:r,dir:n,getRootNode:t,...e},c=ke(ho,a);return To(c,ze)},ye=v.forwardRef((e,r)=>{const[t,n]=Ke(e),[a,c]=U()(n,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),g=Co(a),T=V(g.getRootProps(),c);return p.jsx(ao,{value:g,children:p.jsx(Ye,{value:t,children:p.jsx($.div,{...T,ref:r})})})});ye.displayName="AccordionRoot";const Eo="_accordion_4j883_2",xo={accordion:Eo},A=v.forwardRef(({className:e,defaultValue:r,disabled:t,multiple:n=!0,onChange:a,value:c,...g},T)=>p.jsx(ye,{className:W(xo.accordion,e),collapsible:!0,"data-ods":"accordion",defaultValue:r,disabled:t,ref:T,multiple:n,onValueChange:a,value:c,...g}));A.displayName="Accordion";A.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the expanded accordion items. Use when you don't need to control the value of the accordion."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple accordion items can be expanded at the same time.",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: AccordionChangeDetail) => void",signature:{arguments:[{type:{name:"AccordionChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the state of expanded/collapsed accordion items changes."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the expanded accordion items."}},composes:["Omit"]};const bo={"accordion-content":"_accordion-content_1ore3_2"},d=v.forwardRef(({children:e,className:r,...t},n)=>p.jsx(xe,{className:W(bo["accordion-content"],r),"data-ods":"accordion-content",ref:n,...t,children:e}));d.displayName="AccordionContent";d.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const Po={"accordion-item":"_accordion-item_k7r96_2"},s=v.forwardRef(({children:e,className:r,disabled:t,value:n,...a},c)=>p.jsx(Ee,{className:W(Po["accordion-item"],r),"data-ods":"accordion-item",disabled:t,ref:c,value:n,...a,children:e}));s.displayName="AccordionItem";s.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the accordion item is disabled."},value:{required:!0,tsType:{name:"string"},description:"The value of the accordion item."}},composes:["ComponentPropsWithRef"]};var S=(e=>(e.left="left",e.right="right",e))(S||{});Object.freeze(Object.values(S));const w={"accordion-trigger":"_accordion-trigger_1azmp_2","accordion-trigger__icon":"_accordion-trigger__icon_1azmp_28","accordion-trigger--expand-icon-left":"_accordion-trigger--expand-icon-left_1azmp_33","accordion-trigger__content":"_accordion-trigger__content_1azmp_36"},l=v.forwardRef(({expandIconPosition:e=S.right,children:r,className:t,...n},a)=>p.jsxs(Pe,{className:W(w["accordion-trigger"],w[`accordion-trigger--expand-icon-${e}`],t),"data-ods":"accordion-trigger",ref:a,...n,children:[p.jsx("div",{className:w["accordion-trigger__content"],children:r}),p.jsx(be,{asChild:!0,children:p.jsx(eo,{className:w["accordion-trigger__icon"],name:oo.chevronRight})})]}));l.displayName="AccordionTrigger";l.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",props:{expandIconPosition:{required:!1,tsType:{name:"literal",value:"`${EXPAND_ICON_POSITION}`"},description:"The position of the expand icon.",defaultValue:{value:"EXPAND_ICON_POSITION.right",computed:!0}}},composes:["ComponentPropsWithRef"]};const yo={component:A,argTypes:ro(["defaultValue","onChange","value"]),subcomponents:{AccordionContent:d,AccordionItem:s,AccordionTrigger:l},title:"React Components/Accordion"},x={tags:["!dev"],render:({})=>o.createElement(A,null,o.createElement(s,{value:"0"},o.createElement(l,null,o.createElement(m,{preset:"paragraph"},"Hello World!")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},b={render:e=>o.createElement(A,{disabled:e.disabled,multiple:e.multiple},o.createElement(s,{value:"0"},o.createElement(l,null,o.createElement(m,{preset:"paragraph"},"Hello World!")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),o.createElement(s,{value:"1"},o.createElement(l,null,o.createElement(m,{preset:"paragraph"},"Bye World!")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.")))),argTypes:to({multiple:{table:{category:k.general},control:"boolean"},disabled:{table:{category:k.general},control:"boolean"}})},P={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(A,null,o.createElement(s,{value:"0"},o.createElement(l,null,"Hello World!"),o.createElement(d,null,"Lorem ipsum dolor sit amet.")))},y={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(A,null,o.createElement(s,{value:"1"},o.createElement(l,null,o.createElement(m,{preset:"heading-4"},"Multiple")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),o.createElement(s,{value:"2"},o.createElement(l,null,o.createElement(m,{preset:"heading-4"},"Multiple")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),o.createElement("br",null),o.createElement(A,{multiple:!1},o.createElement(s,{value:"3"},o.createElement(l,null,o.createElement(m,{preset:"heading-4"},"Non-multiple")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),o.createElement(s,{value:"4"},o.createElement(l,null,o.createElement(m,{preset:"heading-4"},"Non-multiple")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))},_={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(A,{disabled:!0},o.createElement(s,{value:"0"},o.createElement(l,null,"Hello World!"),o.createElement(d,null,"Lorem ipsum dolor sit amet.")))},N={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(A,null,o.createElement(s,{value:"0",disabled:!0},o.createElement(l,null,"Hello World!"),o.createElement(d,null,"Lorem ipsum dolor sit amet.")),o.createElement(s,{value:"1"},o.createElement(l,null,"Hello World!"),o.createElement(d,null,"Lorem ipsum dolor sit amet.")))},O={globals:{imports:`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...no()}}},render:({})=>{const[e,r]=v.useState(["0"]);return o.createElement(A,{value:e,onChange:t=>r(t.value)},o.createElement(s,{value:"0"},o.createElement(l,null,"Hello World!"),o.createElement(d,null,"Lorem ipsum dolor sit amet.")),o.createElement(s,{value:"1"},o.createElement(l,null,"Hello World!"),o.createElement(d,null,"Lorem ipsum dolor sit amet.")))}},R={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, EXPAND_ICON_POSITION } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(A,null,o.createElement(s,{value:"0"},o.createElement(l,{expandIconPosition:S.right},"Icon on the right (default)"),o.createElement(d,null,"Lorem ipsum dolor sit amet."))),o.createElement("br",null),o.createElement(A,null,o.createElement(s,{value:"1"},o.createElement(l,{expandIconPosition:S.left},"Icon on the left"),o.createElement(d,null,"Lorem ipsum dolor sit amet."))))},L={parameters:{layout:"fullscreen"},render:({})=>o.createElement(A,null,o.createElement(s,{value:"0"},o.createElement(l,null,o.createElement(m,{preset:"paragraph"},"Hello World!")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"Lorem ipsum dolor sit amet."))),o.createElement(s,{value:"1",disabled:!0},o.createElement(l,null,o.createElement(m,{preset:"paragraph"},"Disabled item")),o.createElement(d,null,o.createElement(m,{preset:"paragraph"},"This item is disabled.")))),tags:["!dev"]};var X,K,Y;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,Z,J;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var ee,oe,re;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';\`
  },
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
}`,...(re=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ne,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';\`
  },
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
}`,...(ae=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,ce,de;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';\`
  },
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
}`,...(de=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var se,le,me;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';\`
  },
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
}`,...(me=(le=N.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ue,pe,ge;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
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
}`,...(ge=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var Ae,ve,Te;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, EXPAND_ICON_POSITION } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Accordion>
        <AccordionItem value="0">
          <AccordionTrigger expandIconPosition={EXPAND_ICON_POSITION.right}>
            Icon on the right (default)
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion>
        <AccordionItem value="1">
          <AccordionTrigger expandIconPosition={EXPAND_ICON_POSITION.left}>
            Icon on the left
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
}`,...(Te=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var fe,Ie,he;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: ({}) => <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">Hello World!</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">Lorem ipsum dolor sit amet.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1" disabled>
        <AccordionTrigger>
          <Text preset="paragraph">Disabled item</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">This item is disabled.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  tags: ['!dev']
}`,...(he=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};const _o=["Overview","Demo","Default","Multiple","Disabled","ItemDisabled","Controlled","ExpandIconPositionExample","ThemeGenerator"],Ho=Object.freeze(Object.defineProperty({__proto__:null,Controlled:O,Default:P,Demo:b,Disabled:_,ExpandIconPositionExample:R,ItemDisabled:N,Multiple:y,Overview:x,ThemeGenerator:L,__namedExportsOrder:_o,default:yo},Symbol.toStringTag,{value:"Module"}));export{Ho as A,O as C,P as D,R as E,N as I,y as M,x as O,_ as a};
