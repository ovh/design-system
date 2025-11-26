import{r as v,e as o}from"./index-jIWwRBLr.js";import{j as p}from"./jsx-runtime-Cfl8ynUo.js";import{c as w}from"./index-CqY9YpN0.js";import{c as H,a as j,T as _,U as F,Q as Pe,W as Re,X as Le,P as C,z as Ne,Y as Se,w as _e,$ as Ve,a0 as Oe,Z as qe,_ as we,aF as Ge,aG as We,C as ve,a4 as De,u as He,R as je,D as Fe,S as Ue}from"./use-locale-context-6s5qsrWI.js";import{u as Me,s as $e,R as ke}from"./render-strategy-BOAyFnMW.js";import{C as Be,a as ze,u as Ke}from"./collapsible-content-JTmOXf4c.js";import{I as Xe,a as Ye}from"./icon-name-C581wThh.js";import{T as d}from"./Text-DyiJ5nHV.js";import{e as Qe,o as Ze,C as $}from"./controls-BtiQQn1l.js";import{s as Je}from"./source-CPEZJ6oD.js";const[eo,G]=H({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[oo,Oo]=H({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),[ro,U]=H({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),Te=v.forwardRef((e,r)=>{const[t,a]=j()(e,["value","disabled"]),n=G(),c=Me(),g=_(n.getItemProps(t),a),T=n.getItemState(t),V=n.getItemContentProps(t);return p.jsx(ro,{value:t,children:p.jsx(oo,{value:T,children:p.jsx(Be,{ref:r,open:T.expanded,ids:{content:V.id},...c,...g})})})});Te.displayName="AccordionItem";const to=j(),fe=v.forwardRef((e,r)=>{const t=G(),a=U(),n=t.getItemContentProps(a),[,c]=to(n,["hidden","data-state"]),g=_(c,e);return p.jsx(ze,{ref:r,...g})});fe.displayName="AccordionItemContent";const he=v.forwardRef((e,r)=>{const t=G(),a=U(),n=_(t.getItemIndicatorProps(a),e);return p.jsx(F.div,{...n,ref:r})});he.displayName="AccordionItemIndicator";const Ce=v.forwardRef((e,r)=>{const t=G(),a=U(),n=Ke(),c=t.getItemTriggerProps(a),g=_({...c,"aria-controls":n.isUnmounted?void 0:c["aria-controls"]},e);return p.jsx(F.button,{...g,ref:r})});Ce.displayName="AccordionItemTrigger";var ao=Pe("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator"),E=ao.build(),O=e=>{var r;return((r=e.ids)==null?void 0:r.root)??`accordion:${e.id}`},no=(e,r)=>{var t,a;return((a=(t=e.ids)==null?void 0:t.item)==null?void 0:a.call(t,r))??`accordion:${e.id}:item:${r}`},k=(e,r)=>{var t,a;return((a=(t=e.ids)==null?void 0:t.itemContent)==null?void 0:a.call(t,r))??`accordion:${e.id}:content:${r}`},q=(e,r)=>{var t,a;return((a=(t=e.ids)==null?void 0:t.itemTrigger)==null?void 0:a.call(t,r))??`accordion:${e.id}:trigger:${r}`},io=e=>e.getById(O(e)),W=e=>{const t=`[aria-controls][data-ownedby='${CSS.escape(O(e))}']:not([disabled])`;return De(io(e),t)},co=e=>we(W(e)),so=e=>qe(W(e)),lo=(e,r)=>Oe(W(e),q(e,r)),mo=(e,r)=>Ve(W(e),q(e,r));function uo(e,r){const{send:t,context:a,prop:n,scope:c,computed:g}=e,T=a.get("focusedValue"),V=a.get("value"),Ee=n("multiple");function be(u){let i=u;!Ee&&i.length>1&&(i=[i[0]]),t({type:"VALUE.SET",value:i})}function I(u){return{expanded:V.includes(u.value),focused:T===u.value,disabled:!!(u.disabled??n("disabled"))}}return{focusedValue:T,value:V,setValue:be,getItemState:I,getRootProps(){return r.element({...E.root.attrs,dir:n("dir"),id:O(c),"data-orientation":n("orientation")})},getItemProps(u){const i=I(u);return r.element({...E.item.attrs,dir:n("dir"),id:no(c,u.value),"data-state":i.expanded?"open":"closed","data-focus":C(i.focused),"data-disabled":C(i.disabled),"data-orientation":n("orientation")})},getItemContentProps(u){const i=I(u);return r.element({...E.itemContent.attrs,dir:n("dir"),role:"region",id:k(c,u.value),"aria-labelledby":q(c,u.value),hidden:!i.expanded,"data-state":i.expanded?"open":"closed","data-disabled":C(i.disabled),"data-focus":C(i.focused),"data-orientation":n("orientation")})},getItemIndicatorProps(u){const i=I(u);return r.element({...E.itemIndicator.attrs,dir:n("dir"),"aria-hidden":!0,"data-state":i.expanded?"open":"closed","data-disabled":C(i.disabled),"data-focus":C(i.focused),"data-orientation":n("orientation")})},getItemTriggerProps(u){const{value:i}=u,f=I(u);return r.button({...E.itemTrigger.attrs,type:"button",dir:n("dir"),id:q(c,i),"aria-controls":k(c,i),"aria-expanded":f.expanded,disabled:f.disabled,"data-orientation":n("orientation"),"aria-disabled":f.disabled,"data-state":f.expanded?"open":"closed","data-ownedby":O(c),onFocus(){f.disabled||t({type:"TRIGGER.FOCUS",value:i})},onBlur(){f.disabled||t({type:"TRIGGER.BLUR"})},onClick(h){f.disabled||(Le()&&h.currentTarget.focus(),t({type:"TRIGGER.CLICK",value:i}))},onKeyDown(h){if(h.defaultPrevented||f.disabled)return;const xe={ArrowDown(){g("isHorizontal")||t({type:"GOTO.NEXT",value:i})},ArrowUp(){g("isHorizontal")||t({type:"GOTO.PREV",value:i})},ArrowRight(){g("isHorizontal")&&t({type:"GOTO.NEXT",value:i})},ArrowLeft(){g("isHorizontal")&&t({type:"GOTO.PREV",value:i})},Home(){t({type:"GOTO.FIRST",value:i})},End(){t({type:"GOTO.LAST",value:i})}},ye=Re(h,{dir:n("dir"),orientation:n("orientation")}),M=xe[ye];M&&(M(h),h.preventDefault())}})}}}var{and:po,not:go}=Se(),Ao=Ne({props({props:e}){return{collapsible:!1,multiple:!1,orientation:"vertical",defaultValue:[],...e}},initialState(){return"idle"},context({prop:e,bindable:r}){return{focusedValue:r(()=>({defaultValue:null,sync:!0,onChange(t){var a;(a=e("onFocusChange"))==null||a({value:t})}})),value:r(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(t){var a;(a=e("onValueChange"))==null||a({value:t})}}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal"},on:{"VALUE.SET":{actions:["setValue"]}},states:{idle:{on:{"TRIGGER.FOCUS":{target:"focused",actions:["setFocusedValue"]}}},focused:{on:{"GOTO.NEXT":{actions:["focusNextTrigger"]},"GOTO.PREV":{actions:["focusPrevTrigger"]},"TRIGGER.CLICK":[{guard:po("isExpanded","canToggle"),actions:["collapse"]},{guard:go("isExpanded"),actions:["expand"]}],"GOTO.FIRST":{actions:["focusFirstTrigger"]},"GOTO.LAST":{actions:["focusLastTrigger"]},"TRIGGER.BLUR":{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{canToggle:({prop:e})=>!!e("collapsible")||!!e("multiple"),isExpanded:({context:e,event:r})=>e.get("value").includes(r.value)},actions:{collapse({context:e,prop:r,event:t}){const a=r("multiple")?We(e.get("value"),t.value):[];e.set("value",a)},expand({context:e,prop:r,event:t}){const a=r("multiple")?Ge(e.get("value"),t.value):[t.value];e.set("value",a)},focusFirstTrigger({scope:e}){var r;(r=co(e))==null||r.focus()},focusLastTrigger({scope:e}){var r;(r=so(e))==null||r.focus()},focusNextTrigger({context:e,scope:r}){const t=e.get("focusedValue");if(!t)return;const a=lo(r,t);a==null||a.focus()},focusPrevTrigger({context:e,scope:r}){const t=e.get("focusedValue");if(!t)return;const a=mo(r,t);a==null||a.focus()},setFocusedValue({context:e,event:r}){e.set("focusedValue",r.value)},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:r}){e.set("value",r.value)},coarseValue({context:e,prop:r}){!r("multiple")&&e.get("value").length>1&&(_e("The value of accordion should be a single value when multiple is false."),e.set("value",[e.get("value")[0]]))}}}});ve()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value","defaultValue"]);ve()(["value","disabled"]);const vo=e=>{const r=v.useId(),{getRootNode:t}=He(),{dir:a}=je(),n={id:r,dir:a,getRootNode:t,...e},c=Fe(Ao,n);return uo(c,Ue)},Ie=v.forwardRef((e,r)=>{const[t,a]=$e(e),[n,c]=j()(a,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),g=vo(n),T=_(g.getRootProps(),c);return p.jsx(eo,{value:g,children:p.jsx(ke,{value:t,children:p.jsx(F.div,{...T,ref:r})})})});Ie.displayName="AccordionRoot";const To="_accordion_1phk8_2",fo={accordion:To},A=v.forwardRef(({className:e,defaultValue:r,disabled:t,multiple:a=!0,onChange:n,value:c,...g},T)=>p.jsx(Ie,{className:w(fo.accordion,e),collapsible:!0,"data-ods":"accordion",defaultValue:r,disabled:t,ref:T,multiple:a,onValueChange:n,value:c,...g}));A.displayName="Accordion";A.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the expanded accordion items. Use when you don't need to control the value of the accordion."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple accordion items can be expanded at the same time.",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: AccordionChangeDetail) => void",signature:{arguments:[{type:{name:"AccordionChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the state of expanded/collapsed accordion items changes."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the expanded accordion items."}},composes:["Omit"]};const ho={"accordion-content":"_accordion-content_17pao_2"},s=v.forwardRef(({children:e,className:r,...t},a)=>p.jsx(fe,{className:w(ho["accordion-content"],r),"data-ods":"accordion-content",ref:a,...t,children:e}));s.displayName="AccordionContent";s.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const Co={"accordion-item":"_accordion-item_1w863_2"},l=v.forwardRef(({children:e,className:r,disabled:t,value:a,...n},c)=>p.jsx(Te,{className:w(Co["accordion-item"],r),"data-ods":"accordion-item",disabled:t,ref:c,value:a,...n,children:e}));l.displayName="AccordionItem";l.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the accordion item is disabled."},value:{required:!0,tsType:{name:"string"},description:"The value of the accordion item."}},composes:["ComponentPropsWithRef"]};const D={"accordion-trigger":"_accordion-trigger_rhj5e_2","accordion-trigger__icon":"_accordion-trigger__icon_rhj5e_23"},m=v.forwardRef(({children:e,className:r,...t},a)=>p.jsxs(Ce,{className:w(D["accordion-trigger"],r),"data-ods":"accordion-trigger",ref:a,...t,children:[p.jsx("div",{className:D["accordion-trigger__content"],children:e}),p.jsx(he,{asChild:!0,children:p.jsx(Xe,{className:D["accordion-trigger__icon"],name:Ye.chevronDown})})]}));m.displayName="AccordionTrigger";m.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",composes:["ComponentPropsWithRef"]};const Io={component:A,argTypes:Qe(["defaultValue","onChange","value"]),subcomponents:{AccordionContent:s,AccordionItem:l,AccordionTrigger:m},title:"React Components/Accordion"},b={tags:["!dev"],render:({})=>o.createElement(A,null,o.createElement(l,{value:"0"},o.createElement(m,null,o.createElement(d,{preset:"paragraph"},"Hello World!")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},x={render:e=>o.createElement(A,{disabled:e.disabled,multiple:e.multiple},o.createElement(l,{value:"0"},o.createElement(m,null,o.createElement(d,{preset:"paragraph"},"Hello World!")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),o.createElement(l,{value:"1"},o.createElement(m,null,o.createElement(d,{preset:"paragraph"},"Bye World!")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.")))),argTypes:Ze({multiple:{table:{category:$.general},control:"boolean"},disabled:{table:{category:$.general},control:"boolean"}})},y={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(A,null,o.createElement(l,{value:"0"},o.createElement(m,null,"Hello World!"),o.createElement(s,null,"Lorem ipsum dolor sit amet.")))},P={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(A,null,o.createElement(l,{value:"1"},o.createElement(m,null,o.createElement(d,{preset:"heading-4"},"Multiple")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),o.createElement(l,{value:"2"},o.createElement(m,null,o.createElement(d,{preset:"heading-4"},"Multiple")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),o.createElement("br",null),o.createElement(A,{multiple:!1},o.createElement(l,{value:"3"},o.createElement(m,null,o.createElement(d,{preset:"heading-4"},"Non-multiple")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),o.createElement(l,{value:"4"},o.createElement(m,null,o.createElement(d,{preset:"heading-4"},"Non-multiple")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))},R={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(A,{disabled:!0},o.createElement(l,{value:"0"},o.createElement(m,null,"Hello World!"),o.createElement(s,null,"Lorem ipsum dolor sit amet.")))},L={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(A,null,o.createElement(l,{value:"0",disabled:!0},o.createElement(m,null,"Hello World!"),o.createElement(s,null,"Lorem ipsum dolor sit amet.")),o.createElement(l,{value:"1"},o.createElement(m,null,"Hello World!"),o.createElement(s,null,"Lorem ipsum dolor sit amet.")))},N={globals:{imports:`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Je()}}},render:({})=>{const[e,r]=v.useState(["0"]);return o.createElement(A,{value:e,onChange:t=>r(t.value)},o.createElement(l,{value:"0"},o.createElement(m,null,"Hello World!"),o.createElement(s,null,"Lorem ipsum dolor sit amet.")),o.createElement(l,{value:"1"},o.createElement(m,null,"Hello World!"),o.createElement(s,null,"Lorem ipsum dolor sit amet.")))}},S={parameters:{layout:"fullscreen"},render:({})=>o.createElement(A,null,o.createElement(l,{value:"0"},o.createElement(m,null,o.createElement(d,{preset:"paragraph"},"Hello World!")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"Lorem ipsum dolor sit amet."))),o.createElement(l,{value:"1",disabled:!0},o.createElement(m,null,o.createElement(d,{preset:"paragraph"},"Disabled item")),o.createElement(s,null,o.createElement(d,{preset:"paragraph"},"This item is disabled.")))),tags:["!dev"]};var B,z,K;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(z=b.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var X,Y,Q;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,J,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(J=y.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var oe,re,te;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(re=P.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,ne,ie;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,de,se;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(se=(de=L.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var le,me,ue;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(me=N.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,ge,Ae;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Ae=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Ae.source}}};const Eo=["Overview","Demo","Default","Multiple","Disabled","ItemDisabled","Controlled","ThemeGenerator"],qo=Object.freeze(Object.defineProperty({__proto__:null,Controlled:N,Default:y,Demo:x,Disabled:R,ItemDisabled:L,Multiple:P,Overview:b,ThemeGenerator:S,__namedExportsOrder:Eo,default:Io},Symbol.toStringTag,{value:"Module"}));export{qo as A,N as C,y as D,L as I,P as M,b as O,R as a};
