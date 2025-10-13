import{r as v,e as r}from"./index-jIWwRBLr.js";import{j as s}from"./jsx-runtime-Cfl8ynUo.js";import{c as q}from"./index-CqY9YpN0.js";import{c as D,a as j,T as S,U as H,Q as be,W as Ee,X as xe,P as C,z as ye,Y as Pe,w as Re,$ as Ne,a0 as Le,Z as Se,_ as Ve,aE as Oe,aF as _e,C as ue,a4 as qe,u as we,R as Ge,D as We,S as De}from"./use-locale-context-BIV2aQtl.js";import{u as je,s as He,R as Fe}from"./render-strategy-CGQK92zh.js";import{C as Ue,a as Me,u as $e}from"./collapsible-content-BQIHSfqJ.js";import{I as ke,a as Be}from"./icon-name-C581wThh.js";import{T as g}from"./Text-vMb3-i8V.js";import{e as ze,o as Ke,C as M}from"./controls-BtiQQn1l.js";import{s as Xe}from"./source-CPEZJ6oD.js";const[Ye,w]=D({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[Qe,Ro]=D({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),[Ze,F]=D({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),pe=v.forwardRef((e,o)=>{const[t,n]=j()(e,["value","disabled"]),a=w(),c=je(),p=S(a.getItemProps(t),n),T=a.getItemState(t),V=a.getItemContentProps(t);return s.jsx(Ze,{value:t,children:s.jsx(Qe,{value:T,children:s.jsx(Ue,{ref:o,open:T.expanded,ids:{content:V.id},...c,...p})})})});pe.displayName="AccordionItem";const Je=j(),ge=v.forwardRef((e,o)=>{const t=w(),n=F(),a=t.getItemContentProps(n),[,c]=Je(a,["hidden","data-state"]),p=S(c,e);return s.jsx(Me,{ref:o,...p})});ge.displayName="AccordionItemContent";const Ae=v.forwardRef((e,o)=>{const t=w(),n=F(),a=S(t.getItemIndicatorProps(n),e);return s.jsx(H.div,{...a,ref:o})});Ae.displayName="AccordionItemIndicator";const ve=v.forwardRef((e,o)=>{const t=w(),n=F(),a=$e(),c=t.getItemTriggerProps(n),p=S({...c,"aria-controls":a.isUnmounted?void 0:c["aria-controls"]},e);return s.jsx(H.button,{...p,ref:o})});ve.displayName="AccordionItemTrigger";var eo=be("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator"),b=eo.build(),O=e=>{var o;return((o=e.ids)==null?void 0:o.root)??`accordion:${e.id}`},oo=(e,o)=>{var t,n;return((n=(t=e.ids)==null?void 0:t.item)==null?void 0:n.call(t,o))??`accordion:${e.id}:item:${o}`},$=(e,o)=>{var t,n;return((n=(t=e.ids)==null?void 0:t.itemContent)==null?void 0:n.call(t,o))??`accordion:${e.id}:content:${o}`},_=(e,o)=>{var t,n;return((n=(t=e.ids)==null?void 0:t.itemTrigger)==null?void 0:n.call(t,o))??`accordion:${e.id}:trigger:${o}`},to=e=>e.getById(O(e)),G=e=>{const t=`[aria-controls][data-ownedby='${CSS.escape(O(e))}']:not([disabled])`;return qe(to(e),t)},ro=e=>Ve(G(e)),no=e=>Se(G(e)),ao=(e,o)=>Le(G(e),_(e,o)),io=(e,o)=>Ne(G(e),_(e,o));function co(e,o){const{send:t,context:n,prop:a,scope:c,computed:p}=e,T=n.get("focusedValue"),V=n.get("value"),fe=a("multiple");function he(d){let i=d;!fe&&i.length>1&&(i=[i[0]]),t({type:"VALUE.SET",value:i})}function I(d){return{expanded:V.includes(d.value),focused:T===d.value,disabled:!!(d.disabled??a("disabled"))}}return{focusedValue:T,value:V,setValue:he,getItemState:I,getRootProps(){return o.element({...b.root.attrs,dir:a("dir"),id:O(c),"data-orientation":a("orientation")})},getItemProps(d){const i=I(d);return o.element({...b.item.attrs,dir:a("dir"),id:oo(c,d.value),"data-state":i.expanded?"open":"closed","data-focus":C(i.focused),"data-disabled":C(i.disabled),"data-orientation":a("orientation")})},getItemContentProps(d){const i=I(d);return o.element({...b.itemContent.attrs,dir:a("dir"),role:"region",id:$(c,d.value),"aria-labelledby":_(c,d.value),hidden:!i.expanded,"data-state":i.expanded?"open":"closed","data-disabled":C(i.disabled),"data-focus":C(i.focused),"data-orientation":a("orientation")})},getItemIndicatorProps(d){const i=I(d);return o.element({...b.itemIndicator.attrs,dir:a("dir"),"aria-hidden":!0,"data-state":i.expanded?"open":"closed","data-disabled":C(i.disabled),"data-focus":C(i.focused),"data-orientation":a("orientation")})},getItemTriggerProps(d){const{value:i}=d,f=I(d);return o.button({...b.itemTrigger.attrs,type:"button",dir:a("dir"),id:_(c,i),"aria-controls":$(c,i),"aria-expanded":f.expanded,disabled:f.disabled,"data-orientation":a("orientation"),"aria-disabled":f.disabled,"data-state":f.expanded?"open":"closed","data-ownedby":O(c),onFocus(){f.disabled||t({type:"TRIGGER.FOCUS",value:i})},onBlur(){f.disabled||t({type:"TRIGGER.BLUR"})},onClick(h){f.disabled||(xe()&&h.currentTarget.focus(),t({type:"TRIGGER.CLICK",value:i}))},onKeyDown(h){if(h.defaultPrevented||f.disabled)return;const Ce={ArrowDown(){p("isHorizontal")||t({type:"GOTO.NEXT",value:i})},ArrowUp(){p("isHorizontal")||t({type:"GOTO.PREV",value:i})},ArrowRight(){p("isHorizontal")&&t({type:"GOTO.NEXT",value:i})},ArrowLeft(){p("isHorizontal")&&t({type:"GOTO.PREV",value:i})},Home(){t({type:"GOTO.FIRST",value:i})},End(){t({type:"GOTO.LAST",value:i})}},Ie=Ee(h,{dir:a("dir"),orientation:a("orientation")}),U=Ce[Ie];U&&(U(h),h.preventDefault())}})}}}var{and:so,not:lo}=Pe(),mo=ye({props({props:e}){return{collapsible:!1,multiple:!1,orientation:"vertical",defaultValue:[],...e}},initialState(){return"idle"},context({prop:e,bindable:o}){return{focusedValue:o(()=>({defaultValue:null,sync:!0,onChange(t){var n;(n=e("onFocusChange"))==null||n({value:t})}})),value:o(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(t){var n;(n=e("onValueChange"))==null||n({value:t})}}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal"},on:{"VALUE.SET":{actions:["setValue"]}},states:{idle:{on:{"TRIGGER.FOCUS":{target:"focused",actions:["setFocusedValue"]}}},focused:{on:{"GOTO.NEXT":{actions:["focusNextTrigger"]},"GOTO.PREV":{actions:["focusPrevTrigger"]},"TRIGGER.CLICK":[{guard:so("isExpanded","canToggle"),actions:["collapse"]},{guard:lo("isExpanded"),actions:["expand"]}],"GOTO.FIRST":{actions:["focusFirstTrigger"]},"GOTO.LAST":{actions:["focusLastTrigger"]},"TRIGGER.BLUR":{target:"idle",actions:["clearFocusedValue"]}}}},implementations:{guards:{canToggle:({prop:e})=>!!e("collapsible")||!!e("multiple"),isExpanded:({context:e,event:o})=>e.get("value").includes(o.value)},actions:{collapse({context:e,prop:o,event:t}){const n=o("multiple")?_e(e.get("value"),t.value):[];e.set("value",n)},expand({context:e,prop:o,event:t}){const n=o("multiple")?Oe(e.get("value"),t.value):[t.value];e.set("value",n)},focusFirstTrigger({scope:e}){var o;(o=ro(e))==null||o.focus()},focusLastTrigger({scope:e}){var o;(o=no(e))==null||o.focus()},focusNextTrigger({context:e,scope:o}){const t=e.get("focusedValue");if(!t)return;const n=ao(o,t);n==null||n.focus()},focusPrevTrigger({context:e,scope:o}){const t=e.get("focusedValue");if(!t)return;const n=io(o,t);n==null||n.focus()},setFocusedValue({context:e,event:o}){e.set("focusedValue",o.value)},clearFocusedValue({context:e}){e.set("focusedValue",null)},setValue({context:e,event:o}){e.set("value",o.value)},coarseValue({context:e,prop:o}){!o("multiple")&&e.get("value").length>1&&(Re("The value of accordion should be a single value when multiple is false."),e.set("value",[e.get("value")[0]]))}}}});ue()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value","defaultValue"]);ue()(["value","disabled"]);const uo=e=>{const o=v.useId(),{getRootNode:t}=we(),{dir:n}=Ge(),a={id:o,dir:n,getRootNode:t,...e},c=We(mo,a);return co(c,De)},Te=v.forwardRef((e,o)=>{const[t,n]=He(e),[a,c]=j()(n,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),p=uo(a),T=S(p.getRootProps(),c);return s.jsx(Ye,{value:p,children:s.jsx(Fe,{value:t,children:s.jsx(H.div,{...T,ref:o})})})});Te.displayName="AccordionRoot";const A=v.forwardRef(({className:e,defaultValue:o,disabled:t,multiple:n=!0,onChange:a,value:c,...p},T)=>s.jsx(Te,{className:q(e),collapsible:!0,"data-ods":"accordion",defaultValue:o,disabled:t,ref:T,multiple:n,onValueChange:a,value:c,...p}));A.displayName="Accordion";A.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the expanded accordion items. Use when you don't need to control the value of the accordion."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple accordion items can be expanded at the same time.",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: AccordionChangeDetail) => void",signature:{arguments:[{type:{name:"AccordionChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the state of expanded/collapsed accordion items changes."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the expanded accordion items."}},composes:["Omit"]};const po={"accordion-content":"_accordion-content_1chb0_2"},l=v.forwardRef(({children:e,className:o,...t},n)=>s.jsx(ge,{className:q(po["accordion-content"],o),"data-ods":"accordion-content",ref:n,...t,children:e}));l.displayName="AccordionContent";l.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const go={"accordion-item":"_accordion-item_1a5kd_2"},m=v.forwardRef(({children:e,className:o,disabled:t,value:n,...a},c)=>s.jsx(pe,{className:q(go["accordion-item"],o),"data-ods":"accordion-item",disabled:t,ref:c,value:n,...a,children:e}));m.displayName="AccordionItem";m.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the accordion item is disabled."},value:{required:!0,tsType:{name:"string"},description:"The value of the accordion item."}},composes:["ComponentPropsWithRef"]};const W={"accordion-trigger":"_accordion-trigger_ckyhj_2","accordion-trigger__icon":"_accordion-trigger__icon_ckyhj_22"},u=v.forwardRef(({children:e,className:o,...t},n)=>s.jsxs(ve,{className:q(W["accordion-trigger"],o),"data-ods":"accordion-trigger",ref:n,...t,children:[s.jsx("div",{className:W["accordion-trigger__content"],children:e}),s.jsx(Ae,{asChild:!0,children:s.jsx(ke,{className:W["accordion-trigger__icon"],name:Be.chevronDown})})]}));u.displayName="AccordionTrigger";u.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",composes:["ComponentPropsWithRef"]};const Ao={component:A,argTypes:ze(["defaultValue","onChange","value"]),subcomponents:{AccordionContent:l,AccordionItem:m,AccordionTrigger:u},title:"React Components/Accordion"},E={tags:["!dev"],render:({})=>r.createElement(A,null,r.createElement(m,{value:"0"},r.createElement(u,null,r.createElement(g,{preset:"paragraph"},"Hello World!")),r.createElement(l,null,r.createElement(g,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},x={render:e=>r.createElement(A,{disabled:e.disabled,multiple:e.multiple},r.createElement(m,{value:"0"},r.createElement(u,null,r.createElement(g,{preset:"paragraph"},"Hello World!")),r.createElement(l,null,r.createElement(g,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),r.createElement(m,{value:"1"},r.createElement(u,null,r.createElement(g,{preset:"paragraph"},"Bye World!")),r.createElement(l,null,r.createElement(g,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.")))),argTypes:Ke({multiple:{table:{category:M.general},control:"boolean"},disabled:{table:{category:M.general},control:"boolean"}})},y={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(A,null,r.createElement(m,{value:"0"},r.createElement(u,null,"Hello World!"),r.createElement(l,null,"Lorem ipsum dolor sit amet.")))},P={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(A,null,r.createElement(m,{value:"1"},r.createElement(u,null,r.createElement(g,{preset:"heading-4"},"Multiple")),r.createElement(l,null,r.createElement(g,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.createElement(m,{value:"2"},r.createElement(u,null,r.createElement(g,{preset:"heading-4"},"Multiple")),r.createElement(l,null,r.createElement(g,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),r.createElement("br",null),r.createElement(A,{multiple:!1},r.createElement(m,{value:"3"},r.createElement(u,null,r.createElement(g,{preset:"heading-4"},"Non-multiple")),r.createElement(l,null,r.createElement(g,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.createElement(m,{value:"4"},r.createElement(u,null,r.createElement(g,{preset:"heading-4"},"Non-multiple")),r.createElement(l,null,r.createElement(g,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))},R={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(A,{disabled:!0},r.createElement(m,{value:"0"},r.createElement(u,null,"Hello World!"),r.createElement(l,null,"Lorem ipsum dolor sit amet.")))},N={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(A,null,r.createElement(m,{value:"0",disabled:!0},r.createElement(u,null,"Hello World!"),r.createElement(l,null,"Lorem ipsum dolor sit amet.")),r.createElement(m,{value:"1"},r.createElement(u,null,"Hello World!"),r.createElement(l,null,"Lorem ipsum dolor sit amet.")))},L={globals:{imports:`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Xe()}}},render:({})=>{const[e,o]=v.useState(["0"]);return r.createElement(A,{value:e,onChange:t=>o(t.value)},r.createElement(m,{value:"0"},r.createElement(u,null,"Hello World!"),r.createElement(l,null,"Lorem ipsum dolor sit amet.")),r.createElement(m,{value:"1"},r.createElement(u,null,"Hello World!"),r.createElement(l,null,"Lorem ipsum dolor sit amet.")))}};var k,B,z;E.parameters={...E.parameters,docs:{...(k=E.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(B=E.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var K,X,Y;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Q,Z,J;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var ee,oe,te;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,ne,ae;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,ce,de;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var se,le,me;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(me=(le=L.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const vo=["Overview","Demo","Default","Multiple","Disabled","ItemDisabled","Controlled"],No=Object.freeze(Object.defineProperty({__proto__:null,Controlled:L,Default:y,Demo:x,Disabled:R,ItemDisabled:N,Multiple:P,Overview:E,__namedExportsOrder:vo,default:Ao},Symbol.toStringTag,{value:"Module"}));export{No as A,L as C,y as D,N as I,P as M,E as O,R as a};
