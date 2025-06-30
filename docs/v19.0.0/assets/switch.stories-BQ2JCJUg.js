import{r as b,e as s}from"./index-D_CmzhJ4.js";import{j as T}from"./jsx-runtime-VM66peLj.js";import{c as te}from"./index-CkQHsVsO.js";import{c as me,a as ae,Q as oe,R as se,W as C,T as ge,X as pe,Y as Ie,Z as fe,d as Se,H as he,_ as ve,r as O,$ as we,a0 as Te,a1 as be,a2 as Ee,a3 as ye,a4 as Ce,a5 as Oe,h as Fe,K as re,a6 as Ge,u as _e,U as Re,L as ke,V as Le}from"./use-locale-context-BQVaQ0H3.js";import{e as Ve,o as xe,C as L}from"./controls-BtiQQn1l.js";const[Pe,Ne]=me({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"<ToggleGroupProvider />"}),ie=b.forwardRef((e,t)=>{const[o,a]=ae()(e,["value","disabled"]),r=Ne(),c=oe(r.getItemProps(o),a);return T.jsx(se.button,{...c,ref:t})});ie.displayName="ToggleGroupItem";var Ue=ge("toggle-group").parts("root","item"),V=Ue.build(),F=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`toggle-group:${e.id}`},Be=(e,t)=>{var o,a;return((a=(o=e.ids)==null?void 0:o.item)==null?void 0:a.call(o,t))??`toggle-group:${e.id}:${t}`},le=e=>e.getById(F(e)),G=e=>{const o=`[data-ownedby='${CSS.escape(F(e))}']:not([data-disabled])`;return Ge(le(e),o)},x=e=>Te(G(e)),Ae=e=>we(G(e)),ze=(e,t,o)=>Ee(G(e),t,o),De=(e,t,o)=>be(G(e),t,o);function We(e,t){const{context:o,send:a,prop:r,scope:c}=e,E=o.get("value"),g=r("disabled"),p=!r("multiple"),d=r("rovingFocus"),y=r("orientation")==="horizontal";function R(n){const l=Be(c,n.value);return{id:l,disabled:!!(n.disabled||g),pressed:!!E.includes(n.value),focused:o.get("focusedId")===l}}return{value:E,setValue(n){a({type:"VALUE.SET",value:n})},getRootProps(){return t.element({...V.root.attrs,id:F(c),dir:r("dir"),role:p?"radiogroup":"group",tabIndex:o.get("isTabbingBackward")?-1:0,"data-disabled":C(g),"data-orientation":r("orientation"),"data-focus":C(o.get("focusedId")!=null),style:{outline:"none"},onMouseDown(){g||a({type:"ROOT.MOUSE_DOWN"})},onFocus(n){g||n.currentTarget===Se(n)&&(o.get("isClickFocus")||o.get("isTabbingBackward")||a({type:"ROOT.FOCUS"}))},onBlur(){g||a({type:"ROOT.BLUR"})}})},getItemState:R,getItemProps(n){const l=R(n),ne=l.focused?0:-1;return t.button({...V.item.attrs,id:l.id,type:"button","data-ownedby":F(c),"data-focus":C(l.focused),disabled:l.disabled,tabIndex:d?ne:void 0,role:p?"radio":void 0,"aria-checked":p?l.pressed:void 0,"aria-pressed":p?void 0:l.pressed,"data-disabled":C(l.disabled),"data-orientation":r("orientation"),dir:r("dir"),"data-state":l.pressed?"on":"off",onFocus(){l.disabled||a({type:"TOGGLE.FOCUS",id:l.id})},onClick(m){l.disabled||(a({type:"TOGGLE.CLICK",id:l.id,value:n.value}),fe()&&m.currentTarget.focus({preventScroll:!0}))},onKeyDown(m){if(m.defaultPrevented||!pe(m)||l.disabled)return;const k={Tab(ue){const de=ue.shiftKey;a({type:"TOGGLE.SHIFT_TAB",isShiftTab:de})},ArrowLeft(){!d||!y||a({type:"TOGGLE.FOCUS_PREV"})},ArrowRight(){!d||!y||a({type:"TOGGLE.FOCUS_NEXT"})},ArrowUp(){!d||y||a({type:"TOGGLE.FOCUS_PREV"})},ArrowDown(){!d||y||a({type:"TOGGLE.FOCUS_NEXT"})},Home(){d&&a({type:"TOGGLE.FOCUS_FIRST"})},End(){d&&a({type:"TOGGLE.FOCUS_LAST"})}}[Ie(m)];k&&(k(m),m.key!=="Tab"&&m.preventDefault())}})}}}var{not:P,and:je}=ve(),He=he({props({props:e}){return{defaultValue:[],orientation:"horizontal",rovingFocus:!0,loopFocus:!0,deselectable:!0,...e}},initialState(){return"idle"},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(o){var a;(a=e("onValueChange"))==null||a({value:o})}})),focusedId:t(()=>({defaultValue:null})),isTabbingBackward:t(()=>({defaultValue:!1})),isClickFocus:t(()=>({defaultValue:!1})),isWithinToolbar:t(()=>({defaultValue:!1}))}},computed:{currentLoopFocus:({context:e,prop:t})=>t("loopFocus")&&!e.get("isWithinToolbar")},entry:["checkIfWithinToolbar"],on:{"VALUE.SET":{actions:["setValue"]},"TOGGLE.CLICK":{actions:["setValue"]},"ROOT.MOUSE_DOWN":{actions:["setClickFocus"]}},states:{idle:{on:{"ROOT.FOCUS":{target:"focused",guard:P(je("isClickFocus","isTabbingBackward")),actions:["focusFirstToggle","clearClickFocus"]},"TOGGLE.FOCUS":{target:"focused",actions:["setFocusedId"]}}},focused:{on:{"ROOT.BLUR":{target:"idle",actions:["clearIsTabbingBackward","clearFocusedId","clearClickFocus"]},"TOGGLE.FOCUS":{actions:["setFocusedId"]},"TOGGLE.FOCUS_NEXT":{actions:["focusNextToggle"]},"TOGGLE.FOCUS_PREV":{actions:["focusPrevToggle"]},"TOGGLE.FOCUS_FIRST":{actions:["focusFirstToggle"]},"TOGGLE.FOCUS_LAST":{actions:["focusLastToggle"]},"TOGGLE.SHIFT_TAB":[{guard:P("isFirstToggleFocused"),target:"idle",actions:["setIsTabbingBackward"]},{actions:["setIsTabbingBackward"]}]}}},implementations:{guards:{isClickFocus:({context:e})=>e.get("isClickFocus"),isTabbingBackward:({context:e})=>e.get("isTabbingBackward"),isFirstToggleFocused:({context:e,scope:t})=>{var o;return e.get("focusedId")===((o=x(t))==null?void 0:o.id)}},actions:{setIsTabbingBackward({context:e}){e.set("isTabbingBackward",!0)},clearIsTabbingBackward({context:e}){e.set("isTabbingBackward",!1)},setClickFocus({context:e}){e.set("isClickFocus",!0)},clearClickFocus({context:e}){e.set("isClickFocus",!1)},checkIfWithinToolbar({context:e,scope:t}){var a;const o=(a=le(t))==null?void 0:a.closest("[role=toolbar]");e.set("isWithinToolbar",!!o)},setFocusedId({context:e,event:t}){e.set("focusedId",t.id)},clearFocusedId({context:e}){e.set("focusedId",null)},setValue({context:e,event:t,prop:o}){ye(t,["value"]);let a=e.get("value");Ce(t.value)?a=t.value:o("multiple")?a=Oe(a,t.value):a=Fe(a,[t.value])&&o("deselectable")?[]:[t.value],e.set("value",a)},focusNextToggle({context:e,scope:t,prop:o}){O(()=>{var r;const a=e.get("focusedId");a&&((r=ze(t,a,o("loopFocus")))==null||r.focus({preventScroll:!0}))})},focusPrevToggle({context:e,scope:t,prop:o}){O(()=>{var r;const a=e.get("focusedId");a&&((r=De(t,a,o("loopFocus")))==null||r.focus({preventScroll:!0}))})},focusFirstToggle({scope:e}){O(()=>{var t;(t=x(e))==null||t.focus({preventScroll:!0})})},focusLastToggle({scope:e}){O(()=>{var t;(t=Ae(e))==null||t.focus({preventScroll:!0})})}}}});re()(["dir","disabled","getRootNode","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value","defaultValue","deselectable"]);re()(["value","disabled"]);const qe=e=>{const t=b.useId(),{getRootNode:o}=_e(),{dir:a}=Re(),r={id:t,dir:a,getRootNode:o,...e},c=ke(He,r);return We(c,Le)},ce=b.forwardRef((e,t)=>{const[o,a]=ae()(e,["defaultValue","deselectable","disabled","id","ids","loopFocus","multiple","onValueChange","orientation","rovingFocus","value"]),r=qe(o),c=oe(r.getRootProps(),a);return T.jsx(Pe,{value:r,children:T.jsx(se.div,{...c,ref:t})})});ce.displayName="ToggleGroupRoot";var _=(e=>(e.md="md",e.sm="sm",e))(_||{});const Me=Object.freeze(Object.values(_)),N={switch:"_switch_r3co3_2","switch--sm":"_switch--sm_r3co3_11","switch--md":"_switch--md_r3co3_14"},u=b.forwardRef(({className:e,defaultValue:t,disabled:o,onValueChange:a,size:r=_.md,value:c,...E},g)=>{function p(d){a&&a({value:d.value[0]})}return T.jsx(ce,{className:te(N.switch,N[`switch--${r}`],e),...E,defaultValue:t?[t]:void 0,deselectable:!1,disabled:o,loopFocus:!1,multiple:!1,onValueChange:p,orientation:"horizontal",ref:g,value:c?[c]:void 0})});u.displayName="Switch";u.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected item. Use when you don't need to control the value of the switch."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SwitchValueChangeDetail) => void",signature:{arguments:[{type:{name:"SwitchValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},size:{required:!1,tsType:{name:"literal",value:"`${SWITCH_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"SWITCH_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected item."}},composes:["ComponentPropsWithRef"]};const $e={"switch-item":"_switch-item_15c64_2"},i=b.forwardRef(({children:e,className:t,defaultValue:o,...a},r)=>T.jsx(ie,{className:te($e["switch-item"],t),ref:r,...a,children:e}));i.displayName="SwitchItem";i.__docgenInfo={description:"",methods:[],displayName:"SwitchItem",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the switch item."}},composes:["ComponentPropsWithRef"]};const Ke={argTypes:Ve(["defaultValue","onValueChange","value"]),component:u,subcomponents:{SwitchItem:i},title:"React Components/Switch"},I={render:e=>s.createElement(u,{...e},s.createElement(i,{value:"item-1"},"Item 1"),s.createElement(i,{value:"item-2"},"Item 2"),s.createElement(i,{value:"item-3"},"Item 3")),argTypes:xe({disabled:{table:{category:L.general},control:"boolean"},size:{table:{category:L.design,type:{summary:"SWITCH_SIZE"}},control:{type:"select"},options:Me}})},f={tags:["!dev"],render:({})=>s.createElement(u,{defaultValue:"item-1"},s.createElement(i,{value:"item-1"},"Item 1"),s.createElement(i,{value:"item-2"},"Item 2"),s.createElement(i,{value:"item-3"},"Item 3"))},S={tags:["!dev"],render:({})=>s.createElement(u,null,s.createElement(i,{value:"item-1"},"Item 1"),s.createElement(i,{value:"item-2"},"Item 2"),s.createElement(i,{value:"item-3"},"Item 3"))},h={tags:["!dev"],render:({})=>s.createElement(u,{disabled:!0},s.createElement(i,{value:"item-1"},"Item 1"),s.createElement(i,{value:"item-2"},"Item 2"),s.createElement(i,{value:"item-3"},"Item 3"))},v={tags:["!dev"],parameters:{layout:"centered"},render:({})=>s.createElement(u,{defaultValue:"item-1"},s.createElement(i,{value:"item-1"},"Item 1"),s.createElement(i,{value:"item-2"},"Item 2"),s.createElement(i,{value:"item-3"},"Item 3"))},w={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(u,{size:"md"},s.createElement(i,{value:"item-1"},"Item 1"),s.createElement(i,{value:"item-2"},"Item 2"),s.createElement(i,{value:"item-3"},"Item 3")),s.createElement(u,{size:"sm"},s.createElement(i,{value:"item-1"},"Item 1"),s.createElement(i,{value:"item-2"},"Item 2"),s.createElement(i,{value:"item-3"},"Item 3")))};var U,B,A;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(A=(B=I.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var z,D,W;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(W=(D=f.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var j,H,q;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(q=(H=S.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var M,$,K;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(K=($=h.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Z,X,Y;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Q,J,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(J=w.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};const Ze=["Demo","Checked","Default","Disabled","Overview","Sizes"],at=Object.freeze(Object.defineProperty({__proto__:null,Checked:f,Default:S,Demo:I,Disabled:h,Overview:v,Sizes:w,__namedExportsOrder:Ze,default:Ke},Symbol.toStringTag,{value:"Module"}));export{f as C,S as D,v as O,at as S,h as a,w as b};
