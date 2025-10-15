import{r as C,e as r}from"./index-jIWwRBLr.js";import{j as E}from"./jsx-runtime-Cfl8ynUo.js";import{c as ue}from"./index-CqY9YpN0.js";import{c as be,a as de,T as pe,U as ge,P as _,Q as Ee,s as V,d as P,W as ye,X as Ce,z as Fe,Y as Oe,r as G,Z as _e,_ as Ge,$ as Re,a0 as xe,a1 as Le,a2 as ke,a3 as Ve,f as Pe,C as Ie,a4 as Ae,u as Ne,R as Ue,D as Be,S as We}from"./use-locale-context-BIV2aQtl.js";import{T as ze,a as De}from"./Text-vMb3-i8V.js";import{e as He,o as je,C as A}from"./controls-BtiQQn1l.js";const[Ze,qe]=be({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"<ToggleGroupProvider />"}),Se=C.forwardRef((e,t)=>{const[o,a]=de()(e,["value","disabled"]),i=qe(),m=pe(i.getItemProps(o),a);return E.jsx(ge.button,{...m,ref:t})});Se.displayName="ToggleGroupItem";var Me=Ee("toggle-group").parts("root","item"),N=Me.build(),R=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`toggle-group:${e.id}`},Xe=(e,t)=>{var o,a;return((a=(o=e.ids)==null?void 0:o.item)==null?void 0:a.call(o,t))??`toggle-group:${e.id}:${t}`},he=e=>e.getById(R(e)),x=e=>{const o=`[data-ownedby='${CSS.escape(R(e))}']:not([data-disabled])`;return Ae(he(e),o)},U=e=>Ge(x(e)),$e=e=>_e(x(e)),Ke=(e,t,o)=>xe(x(e),t,o),Ye=(e,t,o)=>Re(x(e),t,o);function Qe(e,t){const{context:o,send:a,prop:i,scope:m}=e,F=o.get("value"),p=i("disabled"),g=!i("multiple"),u=i("rovingFocus"),O=i("orientation")==="horizontal";function L(l){const c=Xe(m,l.value);return{id:c,disabled:!!(l.disabled||p),pressed:!!F.includes(l.value),focused:o.get("focusedId")===c}}return{value:F,setValue(l){a({type:"VALUE.SET",value:l})},getRootProps(){return t.element({...N.root.attrs,id:R(m),dir:i("dir"),role:g?"radiogroup":"group",tabIndex:o.get("isTabbingBackward")?-1:0,"data-disabled":_(p),"data-orientation":i("orientation"),"data-focus":_(o.get("focusedId")!=null),style:{outline:"none"},onMouseDown(){p||a({type:"ROOT.MOUSE_DOWN"})},onFocus(l){p||l.currentTarget===P(l)&&(o.get("isClickFocus")||o.get("isTabbingBackward")||a({type:"ROOT.FOCUS"}))},onBlur(l){const c=l.relatedTarget;V(l.currentTarget,c)||p||a({type:"ROOT.BLUR"})}})},getItemState:L,getItemProps(l){const c=L(l),ve=c.focused?0:-1;return t.button({...N.item.attrs,id:c.id,type:"button","data-ownedby":R(m),"data-focus":_(c.focused),disabled:c.disabled,tabIndex:u?ve:void 0,role:g?"radio":void 0,"aria-checked":g?c.pressed:void 0,"aria-pressed":g?void 0:c.pressed,"data-disabled":_(c.disabled),"data-orientation":i("orientation"),dir:i("dir"),"data-state":c.pressed?"on":"off",onFocus(){c.disabled||a({type:"TOGGLE.FOCUS",id:c.id})},onClick(d){c.disabled||(a({type:"TOGGLE.CLICK",id:c.id,value:l.value}),Ce()&&d.currentTarget.focus({preventScroll:!0}))},onKeyDown(d){if(d.defaultPrevented||!V(d.currentTarget,P(d))||c.disabled)return;const k={Tab(fe){const Te=fe.shiftKey;a({type:"TOGGLE.SHIFT_TAB",isShiftTab:Te})},ArrowLeft(){!u||!O||a({type:"TOGGLE.FOCUS_PREV"})},ArrowRight(){!u||!O||a({type:"TOGGLE.FOCUS_NEXT"})},ArrowUp(){!u||O||a({type:"TOGGLE.FOCUS_PREV"})},ArrowDown(){!u||O||a({type:"TOGGLE.FOCUS_NEXT"})},Home(){u&&a({type:"TOGGLE.FOCUS_FIRST"})},End(){u&&a({type:"TOGGLE.FOCUS_LAST"})}}[ye(d)];k&&(k(d),d.key!=="Tab"&&d.preventDefault())}})}}}var{not:B,and:Je}=Oe(),et=Fe({props({props:e}){return{defaultValue:[],orientation:"horizontal",rovingFocus:!0,loopFocus:!0,deselectable:!0,...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(o){var a;(a=e("onValueChange"))==null||a({value:o})}})),focusedId:t(()=>({defaultValue:null})),isTabbingBackward:t(()=>({defaultValue:!1})),isClickFocus:t(()=>({defaultValue:!1})),isWithinToolbar:t(()=>({defaultValue:!1}))}},computed:{currentLoopFocus:({context:e,prop:t})=>t("loopFocus")&&!e.get("isWithinToolbar")},entry:["checkIfWithinToolbar"],on:{"VALUE.SET":{actions:["setValue"]},"TOGGLE.CLICK":{actions:["setValue"]},"ROOT.MOUSE_DOWN":{actions:["setClickFocus"]}},states:{idle:{on:{"ROOT.FOCUS":{target:"focused",guard:B(Je("isClickFocus","isTabbingBackward")),actions:["focusFirstToggle","clearClickFocus"]},"TOGGLE.FOCUS":{target:"focused",actions:["setFocusedId"]}}},focused:{on:{"ROOT.BLUR":{target:"idle",actions:["clearIsTabbingBackward","clearFocusedId","clearClickFocus"]},"TOGGLE.FOCUS":{actions:["setFocusedId"]},"TOGGLE.FOCUS_NEXT":{actions:["focusNextToggle"]},"TOGGLE.FOCUS_PREV":{actions:["focusPrevToggle"]},"TOGGLE.FOCUS_FIRST":{actions:["focusFirstToggle"]},"TOGGLE.FOCUS_LAST":{actions:["focusLastToggle"]},"TOGGLE.SHIFT_TAB":[{guard:B("isFirstToggleFocused"),target:"idle",actions:["setIsTabbingBackward"]},{actions:["setIsTabbingBackward"]}]}}},implementations:{guards:{isClickFocus:({context:e})=>e.get("isClickFocus"),isTabbingBackward:({context:e})=>e.get("isTabbingBackward"),isFirstToggleFocused:({context:e,scope:t})=>{var o;return e.get("focusedId")===((o=U(t))==null?void 0:o.id)}},actions:{setIsTabbingBackward({context:e}){e.set("isTabbingBackward",!0)},clearIsTabbingBackward({context:e}){e.set("isTabbingBackward",!1)},setClickFocus({context:e}){e.set("isClickFocus",!0)},clearClickFocus({context:e}){e.set("isClickFocus",!1)},checkIfWithinToolbar({context:e,scope:t}){var a;const o=(a=he(t))==null?void 0:a.closest("[role=toolbar]");e.set("isWithinToolbar",!!o)},setFocusedId({context:e,event:t}){e.set("focusedId",t.id)},clearFocusedId({context:e}){e.set("focusedId",null)},setValue({context:e,event:t,prop:o}){Le(t,["value"]);let a=e.get("value");ke(t.value)?a=t.value:o("multiple")?a=Ve(a,t.value):a=Pe(a,[t.value])&&o("deselectable")?[]:[t.value],e.set("value",a)},focusNextToggle({context:e,scope:t,prop:o}){G(()=>{var i;const a=e.get("focusedId");a&&((i=Ke(t,a,o("loopFocus")))==null||i.focus({preventScroll:!0}))})},focusPrevToggle({context:e,scope:t,prop:o}){G(()=>{var i;const a=e.get("focusedId");a&&((i=Ye(t,a,o("loopFocus")))==null||i.focus({preventScroll:!0}))})},focusFirstToggle({scope:e}){G(()=>{var t;(t=U(e))==null||t.focus({preventScroll:!0})})},focusLastToggle({scope:e}){G(()=>{var t;(t=$e(e))==null||t.focus({preventScroll:!0})})}}}});Ie()(["dir","disabled","getRootNode","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value","defaultValue","deselectable"]);Ie()(["value","disabled"]);const tt=e=>{const t=C.useId(),{getRootNode:o}=Ne(),{dir:a}=Ue(),i={id:t,dir:a,getRootNode:o,...e},m=Be(et,i);return Qe(m,We)},we=C.forwardRef((e,t)=>{const[o,a]=de()(e,["defaultValue","deselectable","disabled","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value"]),i=tt(o),m=pe(i.getRootProps(),a);return E.jsx(Ze,{value:i,children:E.jsx(ge.div,{...m,ref:t})})});we.displayName="ToggleGroupRoot";var y=(e=>(e.md="md",e.sm="sm",e))(y||{});const at=Object.freeze(Object.values(y)),W={switch:"_switch_r3co3_2","switch--sm":"_switch--sm_r3co3_11","switch--md":"_switch--md_r3co3_14"},n=C.forwardRef(({className:e,defaultValue:t,disabled:o,onValueChange:a,size:i=y.md,value:m,...F},p)=>{function g(u){a&&a({value:u.value[0]})}return E.jsx(we,{className:ue(W.switch,W[`switch--${i}`],e),"data-ods":"switch",...F,defaultValue:t?[t]:void 0,deselectable:!1,disabled:o,loopFocus:!1,multiple:!1,onValueChange:g,orientation:"horizontal",ref:p,value:m?[m]:void 0})});n.displayName="Switch";n.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected item. Use when you don't need to control the value of the switch."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SwitchValueChangeDetail) => void",signature:{arguments:[{type:{name:"SwitchValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},size:{required:!1,tsType:{name:"literal",value:"`${SWITCH_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"SWITCH_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected item."}},composes:["ComponentPropsWithRef"]};const rt={"switch-item":"_switch-item_15c64_2"},s=C.forwardRef(({children:e,className:t,defaultValue:o,...a},i)=>E.jsx(Se,{className:ue(rt["switch-item"],t),"data-ods":"switch-item",ref:i,...a,children:e}));s.displayName="SwitchItem";s.__docgenInfo={description:"",methods:[],displayName:"SwitchItem",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the switch item."}},composes:["ComponentPropsWithRef"]};const ot={argTypes:He(["defaultValue","onValueChange","value"]),component:n,subcomponents:{SwitchItem:s},title:"React Components/Switch"},I={render:e=>r.createElement(n,{...e},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3")),argTypes:je({disabled:{table:{category:A.general},control:"boolean"},size:{table:{category:A.design,type:{summary:"SWITCH_SIZE"}},control:{type:"select"},options:at}})},S={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(n,{"aria-label":"Select an item"},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3"))},h={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"start"}},e())],globals:{imports:"import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(ze,{id:"switch-label",preset:De.label},"Select an item:"),r.createElement(n,{"aria-labelledby":"switch-label"},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3")))},w={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(n,{defaultValue:"item-1"},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3"))},v={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(n,null,r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3"))},f={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(n,{disabled:!0},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3"))},T={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(n,{defaultValue:"item-1"},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3"))},b={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],globals:{imports:"import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{size:y.sm},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3")),r.createElement(n,{size:y.md},r.createElement(s,{value:"item-1"},"Item 1"),r.createElement(s,{value:"item-2"},"Item 2"),r.createElement(s,{value:"item-3"},"Item 3")))};var z,D,H;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: arg => <Switch {...arg}>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'SWITCH_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: SWITCH_SIZES
    }
  })
}`,...(H=(D=I.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var j,Z,q;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch aria-label="Select an item">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(q=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var M,X,$;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text id="switch-label" preset={TEXT_PRESET.label}>
        Select an item:
      </Text>

      <Switch aria-labelledby="switch-label">
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>
    </>
}`,...($=(X=h.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var K,Y,Q;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(Q=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var J,ee,te;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,me,ne;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Switch size={SWITCH_SIZE.sm}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch size={SWITCH_SIZE.md}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>
    </>
}`,...(ne=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ne.source}}};const st=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","Checked","Default","Disabled","Overview","Sizes"],pt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:S,AccessibilityAriaLabelledby:h,Checked:w,Default:v,Demo:I,Disabled:f,Overview:T,Sizes:b,__namedExportsOrder:st,default:ot},Symbol.toStringTag,{value:"Module"}));export{S as A,w as C,v as D,T as O,pt as S,h as a,f as b,b as c};
