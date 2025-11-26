import{r as F,e as a}from"./index-jIWwRBLr.js";import{j as C}from"./jsx-runtime-Cfl8ynUo.js";import{c as pe}from"./index-CqY9YpN0.js";import{c as Fe,a as ge,T as he,U as we,P as _,Q as Oe,s as P,d as A,W as Ge,X as _e,z as xe,Y as Re,r as x,Z as Le,_ as ke,$ as Ve,a0 as Pe,a1 as Ae,a2 as Ne,a3 as Ue,f as ze,C as ve,a4 as Be,u as We,R as De,D as He,S as je}from"./use-locale-context-6s5qsrWI.js";import{T as Ze,a as qe}from"./Text-DyiJ5nHV.js";import{e as Me,o as Xe,C as N}from"./controls-BtiQQn1l.js";const[$e,Ke]=Fe({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"<ToggleGroupProvider />"}),fe=F.forwardRef((e,t)=>{const[o,r]=ge()(e,["value","disabled"]),i=Ke(),n=he(i.getItemProps(o),r);return C.jsx(we.button,{...n,ref:t})});fe.displayName="ToggleGroupItem";var Ye=Oe("toggle-group").parts("root","item"),U=Ye.build(),R=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`toggle-group:${e.id}`},Qe=(e,t)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.item)==null?void 0:r.call(o,t))??`toggle-group:${e.id}:${t}`},Te=e=>e.getById(R(e)),L=e=>{const o=`[data-ownedby='${CSS.escape(R(e))}']:not([data-disabled])`;return Be(Te(e),o)},z=e=>ke(L(e)),Je=e=>Le(L(e)),et=(e,t,o)=>Pe(L(e),t,o),tt=(e,t,o)=>Ve(L(e),t,o);function at(e,t){const{context:o,send:r,prop:i,scope:n}=e,O=o.get("value"),S=i("disabled"),I=!i("multiple"),u=i("rovingFocus"),G=i("orientation")==="horizontal";function k(m){const l=Qe(n,m.value);return{id:l,disabled:!!(m.disabled||S),pressed:!!O.includes(m.value),focused:o.get("focusedId")===l}}return{value:O,setValue(m){r({type:"VALUE.SET",value:m})},getRootProps(){return t.element({...U.root.attrs,id:R(n),dir:i("dir"),role:I?"radiogroup":"group",tabIndex:o.get("isTabbingBackward")?-1:0,"data-disabled":_(S),"data-orientation":i("orientation"),"data-focus":_(o.get("focusedId")!=null),style:{outline:"none"},onMouseDown(){S||r({type:"ROOT.MOUSE_DOWN"})},onFocus(m){S||m.currentTarget===A(m)&&(o.get("isClickFocus")||o.get("isTabbingBackward")||r({type:"ROOT.FOCUS"}))},onBlur(m){const l=m.relatedTarget;P(m.currentTarget,l)||S||r({type:"ROOT.BLUR"})}})},getItemState:k,getItemProps(m){const l=k(m),be=l.focused?0:-1;return t.button({...U.item.attrs,id:l.id,type:"button","data-ownedby":R(n),"data-focus":_(l.focused),disabled:l.disabled,tabIndex:u?be:void 0,role:I?"radio":void 0,"aria-checked":I?l.pressed:void 0,"aria-pressed":I?void 0:l.pressed,"data-disabled":_(l.disabled),"data-orientation":i("orientation"),dir:i("dir"),"data-state":l.pressed?"on":"off",onFocus(){l.disabled||r({type:"TOGGLE.FOCUS",id:l.id})},onClick(d){l.disabled||(r({type:"TOGGLE.CLICK",id:l.id,value:m.value}),_e()&&d.currentTarget.focus({preventScroll:!0}))},onKeyDown(d){if(d.defaultPrevented||!P(d.currentTarget,A(d))||l.disabled)return;const V={Tab(ye){const Ce=ye.shiftKey;r({type:"TOGGLE.SHIFT_TAB",isShiftTab:Ce})},ArrowLeft(){!u||!G||r({type:"TOGGLE.FOCUS_PREV"})},ArrowRight(){!u||!G||r({type:"TOGGLE.FOCUS_NEXT"})},ArrowUp(){!u||G||r({type:"TOGGLE.FOCUS_PREV"})},ArrowDown(){!u||G||r({type:"TOGGLE.FOCUS_NEXT"})},Home(){u&&r({type:"TOGGLE.FOCUS_FIRST"})},End(){u&&r({type:"TOGGLE.FOCUS_LAST"})}}[Ge(d)];V&&(V(d),d.key!=="Tab"&&d.preventDefault())}})}}}var{not:B,and:rt}=Re(),ot=xe({props({props:e}){return{defaultValue:[],orientation:"horizontal",rovingFocus:!0,loopFocus:!0,deselectable:!0,...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(o){var r;(r=e("onValueChange"))==null||r({value:o})}})),focusedId:t(()=>({defaultValue:null})),isTabbingBackward:t(()=>({defaultValue:!1})),isClickFocus:t(()=>({defaultValue:!1})),isWithinToolbar:t(()=>({defaultValue:!1}))}},computed:{currentLoopFocus:({context:e,prop:t})=>t("loopFocus")&&!e.get("isWithinToolbar")},entry:["checkIfWithinToolbar"],on:{"VALUE.SET":{actions:["setValue"]},"TOGGLE.CLICK":{actions:["setValue"]},"ROOT.MOUSE_DOWN":{actions:["setClickFocus"]}},states:{idle:{on:{"ROOT.FOCUS":{target:"focused",guard:B(rt("isClickFocus","isTabbingBackward")),actions:["focusFirstToggle","clearClickFocus"]},"TOGGLE.FOCUS":{target:"focused",actions:["setFocusedId"]}}},focused:{on:{"ROOT.BLUR":{target:"idle",actions:["clearIsTabbingBackward","clearFocusedId","clearClickFocus"]},"TOGGLE.FOCUS":{actions:["setFocusedId"]},"TOGGLE.FOCUS_NEXT":{actions:["focusNextToggle"]},"TOGGLE.FOCUS_PREV":{actions:["focusPrevToggle"]},"TOGGLE.FOCUS_FIRST":{actions:["focusFirstToggle"]},"TOGGLE.FOCUS_LAST":{actions:["focusLastToggle"]},"TOGGLE.SHIFT_TAB":[{guard:B("isFirstToggleFocused"),target:"idle",actions:["setIsTabbingBackward"]},{actions:["setIsTabbingBackward"]}]}}},implementations:{guards:{isClickFocus:({context:e})=>e.get("isClickFocus"),isTabbingBackward:({context:e})=>e.get("isTabbingBackward"),isFirstToggleFocused:({context:e,scope:t})=>{var o;return e.get("focusedId")===((o=z(t))==null?void 0:o.id)}},actions:{setIsTabbingBackward({context:e}){e.set("isTabbingBackward",!0)},clearIsTabbingBackward({context:e}){e.set("isTabbingBackward",!1)},setClickFocus({context:e}){e.set("isClickFocus",!0)},clearClickFocus({context:e}){e.set("isClickFocus",!1)},checkIfWithinToolbar({context:e,scope:t}){var r;const o=(r=Te(t))==null?void 0:r.closest("[role=toolbar]");e.set("isWithinToolbar",!!o)},setFocusedId({context:e,event:t}){e.set("focusedId",t.id)},clearFocusedId({context:e}){e.set("focusedId",null)},setValue({context:e,event:t,prop:o}){Ae(t,["value"]);let r=e.get("value");Ne(t.value)?r=t.value:o("multiple")?r=Ue(r,t.value):r=ze(r,[t.value])&&o("deselectable")?[]:[t.value],e.set("value",r)},focusNextToggle({context:e,scope:t,prop:o}){x(()=>{var i;const r=e.get("focusedId");r&&((i=et(t,r,o("loopFocus")))==null||i.focus({preventScroll:!0}))})},focusPrevToggle({context:e,scope:t,prop:o}){x(()=>{var i;const r=e.get("focusedId");r&&((i=tt(t,r,o("loopFocus")))==null||i.focus({preventScroll:!0}))})},focusFirstToggle({scope:e}){x(()=>{var t;(t=z(e))==null||t.focus({preventScroll:!0})})},focusLastToggle({scope:e}){x(()=>{var t;(t=Je(e))==null||t.focus({preventScroll:!0})})}}}});ve()(["dir","disabled","getRootNode","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value","defaultValue","deselectable"]);ve()(["value","disabled"]);const st=e=>{const t=F.useId(),{getRootNode:o}=We(),{dir:r}=De(),i={id:t,dir:r,getRootNode:o,...e},n=He(ot,i);return at(n,je)},Ee=F.forwardRef((e,t)=>{const[o,r]=ge()(e,["defaultValue","deselectable","disabled","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value"]),i=st(o),n=he(i.getRootProps(),r);return C.jsx($e,{value:i,children:C.jsx(we.div,{...n,ref:t})})});Ee.displayName="ToggleGroupRoot";var p=(e=>(e.md="md",e.sm="sm",e))(p||{});const it=Object.freeze(Object.values(p)),W={switch:"_switch_eoewz_2","switch--sm":"_switch--sm_eoewz_14","switch--md":"_switch--md_eoewz_17"},c=F.forwardRef(({className:e,defaultValue:t,disabled:o,onValueChange:r,size:i=p.md,value:n,...O},S)=>{function I(u){r&&r({value:u.value[0]})}return C.jsx(Ee,{className:pe(W.switch,W[`switch--${i}`],e),"data-ods":"switch",...O,defaultValue:t?[t]:void 0,deselectable:!1,disabled:o,loopFocus:!1,multiple:!1,onValueChange:I,orientation:"horizontal",ref:S,value:n?[n]:void 0})});c.displayName="Switch";c.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected item. Use when you don't need to control the value of the switch."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SwitchValueChangeDetail) => void",signature:{arguments:[{type:{name:"SwitchValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},size:{required:!1,tsType:{name:"literal",value:"`${SWITCH_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"SWITCH_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected item."}},composes:["ComponentPropsWithRef"]};const lt={"switch-item":"_switch-item_6m31z_2"},s=F.forwardRef(({children:e,className:t,defaultValue:o,...r},i)=>C.jsx(fe,{className:pe(lt["switch-item"],t),"data-ods":"switch-item",ref:i,...r,children:e}));s.displayName="SwitchItem";s.__docgenInfo={description:"",methods:[],displayName:"SwitchItem",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the switch item."}},composes:["ComponentPropsWithRef"]};const ct={argTypes:Me(["defaultValue","onValueChange","value"]),component:c,subcomponents:{SwitchItem:s},title:"React Components/Switch"},g={render:e=>a.createElement(c,{...e},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3")),argTypes:Xe({disabled:{table:{category:N.general},control:"boolean"},size:{table:{category:N.design,type:{summary:"SWITCH_SIZE"}},control:{type:"select"},options:it}})},h={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(c,{"aria-label":"Select an item"},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3"))},w={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"start"}},e())],globals:{imports:"import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(Ze,{id:"switch-label",preset:qe.label},"Select an item:"),a.createElement(c,{"aria-labelledby":"switch-label"},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3")))},v={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(c,{defaultValue:"item-1"},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3"))},f={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(c,null,a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3"))},T={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(c,{disabled:!0},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3"))},E={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(c,{defaultValue:"item-1"},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3"))},b={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],globals:{imports:"import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(c,{size:p.sm},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3")),a.createElement(c,{size:p.md},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3")))},y={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>a.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"16px"}},a.createElement(c,{style:{alignSelf:"start"}},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3")),a.createElement(c,{disabled:!0,style:{alignSelf:"start"}},a.createElement(s,{value:"item-1"},"Item 1"),a.createElement(s,{value:"item-2"},"Item 2"),a.createElement(s,{value:"item-3"},"Item 3")),a.createElement(c,{size:p.sm,style:{alignSelf:"start"}},a.createElement(s,{value:"item-1"},"Small 1"),a.createElement(s,{value:"item-2"},"Small 2")))};var D,H,j;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(H=g.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var Z,q,M;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch aria-label="Select an item">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(M=(q=h.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var X,$,K;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=($=w.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Y,Q,J;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(J=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var ee,te,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,oe,se;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(se=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,ce;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,ne,ue;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};var de,Se,Ie;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '16px'
  }}>
      <Switch style={{
      alignSelf: 'start'
    }}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch disabled style={{
      alignSelf: 'start'
    }}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch size={SWITCH_SIZE.sm} style={{
      alignSelf: 'start'
    }}>
        <SwitchItem value="item-1">Small 1</SwitchItem>
        <SwitchItem value="item-2">Small 2</SwitchItem>
      </Switch>
    </div>
}`,...(Ie=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};const mt=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","Checked","Default","Disabled","Overview","Sizes","ThemeGenerator"],ht=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:h,AccessibilityAriaLabelledby:w,Checked:v,Default:f,Demo:g,Disabled:T,Overview:E,Sizes:b,ThemeGenerator:y,__namedExportsOrder:mt,default:ct},Symbol.toStringTag,{value:"Module"}));export{h as A,v as C,f as D,E as O,ht as S,w as a,T as b,b as c};
