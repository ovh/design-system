import{r as y,e as r}from"./index-D_CmzhJ4.js";import{j as E}from"./jsx-runtime-VM66peLj.js";import{c as ne}from"./index-CkQHsVsO.js";import{c as we,a as me,Q as ue,R as de,W as O,T as Te,X as be,Y as Ee,Z as ye,d as Ce,H as Fe,_ as Oe,r as G,$ as Ge,a0 as _e,a1 as Re,a2 as Le,a3 as ke,a4 as xe,a5 as Ve,h as Pe,K as ge,a6 as Ae,u as Ne,U as Ue,L as Be,V as ze}from"./use-locale-context-DLC4Hyvy.js";import{T as De,a as We}from"./Text-B1XN51Xz.js";import{e as je,o as He,C as V}from"./controls-BtiQQn1l.js";const[qe,Me]=we({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"<ToggleGroupProvider />"}),pe=y.forwardRef((e,t)=>{const[s,a]=me()(e,["value","disabled"]),i=Me(),c=ue(i.getItemProps(s),a);return E.jsx(de.button,{...c,ref:t})});pe.displayName="ToggleGroupItem";var $e=Te("toggle-group").parts("root","item"),P=$e.build(),_=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`toggle-group:${e.id}`},Ke=(e,t)=>{var s,a;return((a=(s=e.ids)==null?void 0:s.item)==null?void 0:a.call(s,t))??`toggle-group:${e.id}:${t}`},Ie=e=>e.getById(_(e)),R=e=>{const s=`[data-ownedby='${CSS.escape(_(e))}']:not([data-disabled])`;return Ae(Ie(e),s)},A=e=>_e(R(e)),Xe=e=>Ge(R(e)),Ze=(e,t,s)=>Le(R(e),t,s),Ye=(e,t,s)=>Re(R(e),t,s);function Qe(e,t){const{context:s,send:a,prop:i,scope:c}=e,C=s.get("value"),g=i("disabled"),p=!i("multiple"),u=i("rovingFocus"),F=i("orientation")==="horizontal";function k(m){const l=Ke(c,m.value);return{id:l,disabled:!!(m.disabled||g),pressed:!!C.includes(m.value),focused:s.get("focusedId")===l}}return{value:C,setValue(m){a({type:"VALUE.SET",value:m})},getRootProps(){return t.element({...P.root.attrs,id:_(c),dir:i("dir"),role:p?"radiogroup":"group",tabIndex:s.get("isTabbingBackward")?-1:0,"data-disabled":O(g),"data-orientation":i("orientation"),"data-focus":O(s.get("focusedId")!=null),style:{outline:"none"},onMouseDown(){g||a({type:"ROOT.MOUSE_DOWN"})},onFocus(m){g||m.currentTarget===Ce(m)&&(s.get("isClickFocus")||s.get("isTabbingBackward")||a({type:"ROOT.FOCUS"}))},onBlur(){g||a({type:"ROOT.BLUR"})}})},getItemState:k,getItemProps(m){const l=k(m),he=l.focused?0:-1;return t.button({...P.item.attrs,id:l.id,type:"button","data-ownedby":_(c),"data-focus":O(l.focused),disabled:l.disabled,tabIndex:u?he:void 0,role:p?"radio":void 0,"aria-checked":p?l.pressed:void 0,"aria-pressed":p?void 0:l.pressed,"data-disabled":O(l.disabled),"data-orientation":i("orientation"),dir:i("dir"),"data-state":l.pressed?"on":"off",onFocus(){l.disabled||a({type:"TOGGLE.FOCUS",id:l.id})},onClick(d){l.disabled||(a({type:"TOGGLE.CLICK",id:l.id,value:m.value}),ye()&&d.currentTarget.focus({preventScroll:!0}))},onKeyDown(d){if(d.defaultPrevented||!be(d)||l.disabled)return;const x={Tab(ve){const fe=ve.shiftKey;a({type:"TOGGLE.SHIFT_TAB",isShiftTab:fe})},ArrowLeft(){!u||!F||a({type:"TOGGLE.FOCUS_PREV"})},ArrowRight(){!u||!F||a({type:"TOGGLE.FOCUS_NEXT"})},ArrowUp(){!u||F||a({type:"TOGGLE.FOCUS_PREV"})},ArrowDown(){!u||F||a({type:"TOGGLE.FOCUS_NEXT"})},Home(){u&&a({type:"TOGGLE.FOCUS_FIRST"})},End(){u&&a({type:"TOGGLE.FOCUS_LAST"})}}[Ee(d)];x&&(x(d),d.key!=="Tab"&&d.preventDefault())}})}}}var{not:N,and:Je}=Oe(),et=Fe({props({props:e}){return{defaultValue:[],orientation:"horizontal",rovingFocus:!0,loopFocus:!0,deselectable:!0,...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(s){var a;(a=e("onValueChange"))==null||a({value:s})}})),focusedId:t(()=>({defaultValue:null})),isTabbingBackward:t(()=>({defaultValue:!1})),isClickFocus:t(()=>({defaultValue:!1})),isWithinToolbar:t(()=>({defaultValue:!1}))}},computed:{currentLoopFocus:({context:e,prop:t})=>t("loopFocus")&&!e.get("isWithinToolbar")},entry:["checkIfWithinToolbar"],on:{"VALUE.SET":{actions:["setValue"]},"TOGGLE.CLICK":{actions:["setValue"]},"ROOT.MOUSE_DOWN":{actions:["setClickFocus"]}},states:{idle:{on:{"ROOT.FOCUS":{target:"focused",guard:N(Je("isClickFocus","isTabbingBackward")),actions:["focusFirstToggle","clearClickFocus"]},"TOGGLE.FOCUS":{target:"focused",actions:["setFocusedId"]}}},focused:{on:{"ROOT.BLUR":{target:"idle",actions:["clearIsTabbingBackward","clearFocusedId","clearClickFocus"]},"TOGGLE.FOCUS":{actions:["setFocusedId"]},"TOGGLE.FOCUS_NEXT":{actions:["focusNextToggle"]},"TOGGLE.FOCUS_PREV":{actions:["focusPrevToggle"]},"TOGGLE.FOCUS_FIRST":{actions:["focusFirstToggle"]},"TOGGLE.FOCUS_LAST":{actions:["focusLastToggle"]},"TOGGLE.SHIFT_TAB":[{guard:N("isFirstToggleFocused"),target:"idle",actions:["setIsTabbingBackward"]},{actions:["setIsTabbingBackward"]}]}}},implementations:{guards:{isClickFocus:({context:e})=>e.get("isClickFocus"),isTabbingBackward:({context:e})=>e.get("isTabbingBackward"),isFirstToggleFocused:({context:e,scope:t})=>{var s;return e.get("focusedId")===((s=A(t))==null?void 0:s.id)}},actions:{setIsTabbingBackward({context:e}){e.set("isTabbingBackward",!0)},clearIsTabbingBackward({context:e}){e.set("isTabbingBackward",!1)},setClickFocus({context:e}){e.set("isClickFocus",!0)},clearClickFocus({context:e}){e.set("isClickFocus",!1)},checkIfWithinToolbar({context:e,scope:t}){var a;const s=(a=Ie(t))==null?void 0:a.closest("[role=toolbar]");e.set("isWithinToolbar",!!s)},setFocusedId({context:e,event:t}){e.set("focusedId",t.id)},clearFocusedId({context:e}){e.set("focusedId",null)},setValue({context:e,event:t,prop:s}){ke(t,["value"]);let a=e.get("value");xe(t.value)?a=t.value:s("multiple")?a=Ve(a,t.value):a=Pe(a,[t.value])&&s("deselectable")?[]:[t.value],e.set("value",a)},focusNextToggle({context:e,scope:t,prop:s}){G(()=>{var i;const a=e.get("focusedId");a&&((i=Ze(t,a,s("loopFocus")))==null||i.focus({preventScroll:!0}))})},focusPrevToggle({context:e,scope:t,prop:s}){G(()=>{var i;const a=e.get("focusedId");a&&((i=Ye(t,a,s("loopFocus")))==null||i.focus({preventScroll:!0}))})},focusFirstToggle({scope:e}){G(()=>{var t;(t=A(e))==null||t.focus({preventScroll:!0})})},focusLastToggle({scope:e}){G(()=>{var t;(t=Xe(e))==null||t.focus({preventScroll:!0})})}}}});ge()(["dir","disabled","getRootNode","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value","defaultValue","deselectable"]);ge()(["value","disabled"]);const tt=e=>{const t=y.useId(),{getRootNode:s}=Ne(),{dir:a}=Ue(),i={id:t,dir:a,getRootNode:s,...e},c=Be(et,i);return Qe(c,ze)},Se=y.forwardRef((e,t)=>{const[s,a]=me()(e,["defaultValue","deselectable","disabled","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value"]),i=tt(s),c=ue(i.getRootProps(),a);return E.jsx(qe,{value:i,children:E.jsx(de.div,{...c,ref:t})})});Se.displayName="ToggleGroupRoot";var L=(e=>(e.md="md",e.sm="sm",e))(L||{});const at=Object.freeze(Object.values(L)),U={switch:"_switch_r3co3_2","switch--sm":"_switch--sm_r3co3_11","switch--md":"_switch--md_r3co3_14"},n=y.forwardRef(({className:e,defaultValue:t,disabled:s,onValueChange:a,size:i=L.md,value:c,...C},g)=>{function p(u){a&&a({value:u.value[0]})}return E.jsx(Se,{className:ne(U.switch,U[`switch--${i}`],e),"data-ods":"switch",...C,defaultValue:t?[t]:void 0,deselectable:!1,disabled:s,loopFocus:!1,multiple:!1,onValueChange:p,orientation:"horizontal",ref:g,value:c?[c]:void 0})});n.displayName="Switch";n.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected item. Use when you don't need to control the value of the switch."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SwitchValueChangeDetail) => void",signature:{arguments:[{type:{name:"SwitchValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},size:{required:!1,tsType:{name:"literal",value:"`${SWITCH_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"SWITCH_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected item."}},composes:["ComponentPropsWithRef"]};const rt={"switch-item":"_switch-item_15c64_2"},o=y.forwardRef(({children:e,className:t,defaultValue:s,...a},i)=>E.jsx(pe,{className:ne(rt["switch-item"],t),"data-ods":"switch-item",ref:i,...a,children:e}));o.displayName="SwitchItem";o.__docgenInfo={description:"",methods:[],displayName:"SwitchItem",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the switch item."}},composes:["ComponentPropsWithRef"]};const st={argTypes:je(["defaultValue","onValueChange","value"]),component:n,subcomponents:{SwitchItem:o},title:"React Components/Switch"},I={render:e=>r.createElement(n,{...e},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3")),argTypes:He({disabled:{table:{category:V.general},control:"boolean"},size:{table:{category:V.design,type:{summary:"SWITCH_SIZE"}},control:{type:"select"},options:at}})},S={tags:["!dev"],render:({})=>r.createElement(n,{"aria-label":"Select an item"},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3"))},h={tags:["!dev"],decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"start"}},e())],render:({})=>r.createElement(r.Fragment,null,r.createElement(De,{id:"switch-label",preset:We.label},"Select an item:"),r.createElement(n,{"aria-labelledby":"switch-label"},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3")))},v={tags:["!dev"],render:({})=>r.createElement(n,{defaultValue:"item-1"},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3"))},f={tags:["!dev"],render:({})=>r.createElement(n,null,r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3"))},w={tags:["!dev"],render:({})=>r.createElement(n,{disabled:!0},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3"))},T={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(n,{defaultValue:"item-1"},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3"))},b={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{size:"md"},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3")),r.createElement(n,{size:"sm"},r.createElement(o,{value:"item-1"},"Item 1"),r.createElement(o,{value:"item-2"},"Item 2"),r.createElement(o,{value:"item-3"},"Item 3")))};var B,z,D;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(z=I.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var W,j,H;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch aria-label="Select an item">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(H=(j=S.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var q,M,$;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start'
  }}>{story()}</div>],
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
}`,...($=(M=h.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var K,X,Z;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Y,Q,J;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(J=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,oe;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(oe=(se=T.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,ce;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Switch size="md">
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch size="sm">
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>
    </>
}`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const ot=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","Checked","Default","Disabled","Overview","Sizes"],gt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:S,AccessibilityAriaLabelledby:h,Checked:v,Default:f,Demo:I,Disabled:w,Overview:T,Sizes:b,__namedExportsOrder:ot,default:st},Symbol.toStringTag,{value:"Module"}));export{S as A,v as C,f as D,T as O,gt as S,h as a,w as b,b as c};
