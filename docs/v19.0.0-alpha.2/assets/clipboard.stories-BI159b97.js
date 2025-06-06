import{r as d,e as l}from"./index-D_CmzhJ4.js";import{j as t}from"./jsx-runtime-VM66peLj.js";import{c as E}from"./index-CkQHsVsO.js";import{c as ue,I as P,J as N,P as me,Q as g,p as be,V as Ce,W as ge,g as ye,a as ve}from"./index-BCxMAfLs.js";import{c as ne,a as _e,u as fe,n as Te}from"./use-locale-context-Z4fgdY29.js";import{I as Oe,b as xe}from"./Input-BHPevcdA.js";import{B as j,f as w,e as V}from"./Button-BRERPjFq.js";import{I as S,a as k}from"./icon-name-jL3axqAU.js";import{b as he,T as A,a as L}from"./TooltipTrigger-CUqGeRIQ.js";import{a as Ee}from"./overlay-CZHjGBMC.js";import{e as Pe,o as Ne,C as m}from"./controls-BtiQQn1l.js";const[Re,R]=ue({name:"ClipboardContext",hookName:"useClipboardContext",providerName:"<ClipboardProvider />"}),le=d.forwardRef((e,o)=>{const a=R(),r=P(a.getControlProps(),e);return t.jsx(N.div,{...r,ref:o})});le.displayName="ClipboardControl";const se=d.forwardRef((e,o)=>{const{children:a,copied:r,...n}=e,s=R(),i=P(s.getIndicatorProps({copied:s.copied}),n);return t.jsx(N.div,{...i,ref:o,children:s.copied?r:a})});se.displayName="ClipboardIndicator";var Se=me("clipboard").parts("root","control","trigger","indicator","input","label"),b=Se.build(),ke=e=>{var o;return((o=e.ids)==null?void 0:o.root)??`clip:${e.id}`},I=e=>{var o;return((o=e.ids)==null?void 0:o.input)??`clip:${e.id}:input`},Ie=e=>{var o;return((o=e.ids)==null?void 0:o.label)??`clip:${e.id}:label`},je=e=>e.getById(I(e)),we=(e,o)=>Le(e.getDoc(),o);function Ve(e,o){const a=e.createElement("pre");return Object.assign(a.style,{width:"1px",height:"1px",position:"fixed",top:"5px"}),a.textContent=o,a}function Ae(e){const a=ye(e).getSelection();if(a==null)return Promise.reject(new Error);a.removeAllRanges();const r=e.ownerDocument,n=r.createRange();return n.selectNodeContents(e),a.addRange(n),r.execCommand("copy"),a.removeAllRanges(),Promise.resolve()}function Le(e,o){var n;const a=e.defaultView||window;if(((n=a.navigator.clipboard)==null?void 0:n.writeText)!==void 0)return a.navigator.clipboard.writeText(o);if(!e.body)return Promise.reject(new Error);const r=Ve(e,o);return e.body.appendChild(r),Ae(r),e.body.removeChild(r),Promise.resolve()}function Ye(e,o){const{state:a,send:r,context:n,scope:s}=e,i=a.matches("copied");return{copied:i,value:n.get("value"),setValue(C){r({type:"VALUE.SET",value:C})},copy(){r({type:"COPY"})},getRootProps(){return o.element({...b.root.attrs,"data-copied":g(i),id:ke(s)})},getLabelProps(){return o.label({...b.label.attrs,htmlFor:I(s),"data-copied":g(i),id:Ie(s)})},getControlProps(){return o.element({...b.control.attrs,"data-copied":g(i)})},getInputProps(){return o.input({...b.input.attrs,defaultValue:n.get("value"),"data-copied":g(i),readOnly:!0,"data-readonly":"true",id:I(s),onFocus(C){C.currentTarget.select()},onCopy(){r({type:"INPUT.COPY"})}})},getTriggerProps(){return o.button({...b.trigger.attrs,type:"button","aria-label":i?"Copied to clipboard":"Copy to clipboard","data-copied":g(i),onClick(){r({type:"COPY"})}})},getIndicatorProps(C){return o.element({...b.indicator.attrs,hidden:C.copied!==i})}}}var De=be({props({props:e}){return{timeout:3e3,defaultValue:"",...e}},initialState(){return"idle"},context({prop:e,bindable:o}){return{value:o(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(a){var r;(r=e("onValueChange"))==null||r({value:a})}}))}},watch({track:e,context:o,action:a}){e([()=>o.get("value")],()=>{a(["syncInputElement"])})},on:{"VALUE.SET":{actions:["setValue"]},COPY:{target:"copied",actions:["copyToClipboard","invokeOnCopy"]}},states:{idle:{on:{"INPUT.COPY":{target:"copied",actions:["invokeOnCopy"]}}},copied:{effects:["waitForTimeout"],on:{"COPY.DONE":{target:"idle"},COPY:{target:"copied",actions:["copyToClipboard","invokeOnCopy"]},"INPUT.COPY":{actions:["invokeOnCopy"]}}}},implementations:{effects:{waitForTimeout({prop:e,send:o}){return ge(()=>{o({type:"COPY.DONE"})},e("timeout"))}},actions:{setValue({context:e,event:o}){e.set("value",o.value)},copyToClipboard({context:e,scope:o}){we(o,e.get("value"))},invokeOnCopy({prop:e}){var o;(o=e("onStatusChange"))==null||o({copied:!0})},syncInputElement({context:e,scope:o}){const a=je(o);a&&Ce(a,e.get("value"))}}}});ne()(["getRootNode","id","ids","value","defaultValue","timeout","onStatusChange","onValueChange"]);ne()(["copied"]);const Me=e=>{const o=d.useId(),{getRootNode:a}=_e(),r={id:o,getRootNode:a,...e},n=fe(De,r);return Ye(n,Te)},ie=d.forwardRef((e,o)=>{const[a,r]=ve()(e,["defaultValue","id","ids","onStatusChange","onValueChange","timeout","value"]),n=Me(a),s=P(n.getRootProps(),r);return t.jsx(Re,{value:n,children:t.jsx(N.div,{ref:o,...s})})});ie.displayName="ClipboardRoot";const de=d.forwardRef((e,o)=>{const a=R(),r=P(a.getTriggerProps(),e);return t.jsx(N.button,{...r,ref:o})});de.displayName="ClipboardTrigger";const ce=d.createContext({disabled:!1});function pe(){return d.useContext(ce)}const qe="_clipboard_1gfx9_2",Y={clipboard:qe,"clipboard--disabled":"_clipboard--disabled_1gfx9_18"},c=d.forwardRef(({children:e,className:o,disabled:a,onCopy:r,value:n,...s},i)=>t.jsx(ce.Provider,{value:{disabled:a},children:t.jsx(ie,{className:E(Y.clipboard,{[Y["clipboard--disabled"]]:a},o),onStatusChange:r,ref:i,value:n,...s,children:e})}));c.displayName="Clipboard";c.__docgenInfo={description:"",methods:[],displayName:"Clipboard",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},onCopy:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Ue="_clipboard__input_15z7l_2",$e={clipboard__input:Ue},p=d.forwardRef(({className:e,...o},a)=>{const{disabled:r}=pe(),{value:n}=R();return t.jsx(le,{asChild:!0,children:t.jsx(Oe,{className:E($e.clipboard__input,e),...o,disabled:r,readOnly:!0,ref:a,type:xe.text,value:n})})});p.displayName="ClipboardControl";p.__docgenInfo={description:"",methods:[],displayName:"ClipboardControl",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},maskOption:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  enable: boolean,
  initialState?: InputMaskState,
}`,signature:{properties:[{key:"enable",value:{name:"boolean",required:!0}},{key:"initialState",value:{name:"literal",value:"`${INPUT_MASK_STATE}`",required:!1}}]}},description:""}},composes:["ComponentPropsWithRef"]};const Ge="_clipboard__copy_oxki5_2",Fe="_clipboard__tooltip_oxki5_8",h={clipboard__copy:Ge,clipboard__tooltip:Fe,"clipboard__tooltip-success":"_clipboard__tooltip-success_oxki5_8","clipboard__tooltip-success__check":"_clipboard__tooltip-success__check_oxki5_19"},u=d.forwardRef(({className:e,labelCopy:o="Copy to clipboard",labelCopySuccess:a="Copied!",...r},n)=>{const{disabled:s}=pe();return t.jsx(he,{position:Ee.right,children:t.jsx(de,{asChild:!0,children:t.jsxs(se,{className:h.clipboard__copy,copied:t.jsxs(t.Fragment,{children:[t.jsx(A,{asChild:!0,ref:n,...r,children:t.jsx(j,{disabled:s,size:V.xs,variant:w.ghost,children:t.jsx(S,{name:k.fileCopy})})}),t.jsxs(L,{className:E(h["clipboard__tooltip-success"],e),children:[a,t.jsx(S,{className:h["clipboard__tooltip-success__check"],name:k.check})]})]}),children:[t.jsx(A,{asChild:!0,ref:n,...r,children:t.jsx(j,{disabled:s,size:V.xs,variant:w.ghost,children:t.jsx(S,{name:k.fileCopy})})}),!s&&t.jsx(L,{className:E(h.clipboard__tooltip,e),children:o})]})})})});u.displayName="ClipboardTrigger";u.__docgenInfo={description:"",methods:[],displayName:"ClipboardTrigger",props:{labelCopy:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copy to clipboard'",computed:!1}},labelCopySuccess:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copied!'",computed:!1}}},composes:["ComponentPropsWithRef"]};const Be={argTypes:Pe(["onCopy"]),component:c,subcomponents:{ClipboardControl:p,ClipboardTrigger:u},title:"ODS Components/Clipboard"},y={render:e=>l.createElement(c,{disabled:e.disabled,value:e.value},l.createElement(p,{loading:e.loading,maskOption:{enable:!!e.masked}}),l.createElement(u,{labelCopy:e.labelCopy,labelCopySuccess:e.labelCopySuccess})),argTypes:Ne({disabled:{table:{category:m.general},control:"boolean"},labelCopy:{table:{category:m.general,defaultValue:{summary:"Copy"},type:{summary:"string"}},control:"text"},labelCopySuccess:{table:{category:m.general,defaultValue:{summary:"Copied"},type:{summary:"string"}},control:"text"},loading:{table:{category:m.general,type:{summary:"boolean"}},control:"boolean"},masked:{table:{category:m.general,type:{summary:"boolean"}},control:"boolean"},value:{table:{category:m.general},control:"text"}}),args:{value:"Clipboard"}},v={tags:["!dev"],render:({})=>l.createElement(c,{value:"Clipboard"},l.createElement(p,null),l.createElement(u,null))},_={parameters:{layout:"centered"},tags:["!dev"],render:({})=>l.createElement(c,{value:"Clipboard"},l.createElement(p,null),l.createElement(u,null))},f={tags:["!dev"],render:({})=>l.createElement(c,{value:"Masked"},l.createElement(p,{maskOption:{enable:!0}}),l.createElement(u,null))},T={tags:["!dev"],render:({})=>l.createElement(c,{value:"Custom labels"},l.createElement(p,null),l.createElement(u,{labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"}))},O={tags:["!dev"],render:({})=>l.createElement(c,{value:"Loading"},l.createElement(p,{loading:!0}),l.createElement(u,null))},x={tags:["!dev"],render:({})=>l.createElement(c,{value:"Disabled",disabled:!0},l.createElement(p,null),l.createElement(u,null))};var D,M,q;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Clipboard disabled={arg.disabled} value={arg.value}>
      <ClipboardControl loading={arg.loading} maskOption={{
      enable: !!arg.masked
    }} />

      <ClipboardTrigger labelCopy={arg.labelCopy} labelCopySuccess={arg.labelCopySuccess} />
    </Clipboard>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Copy'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Copied'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    masked: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    }
  }),
  args: {
    value: 'Clipboard'
  }
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var U,$,G;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var F,B,W;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(W=(B=_.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Masked">
      <ClipboardControl maskOption={{
      enable: true
    }} />
      <ClipboardTrigger />
    </Clipboard>
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,z,H;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Custom labels">
      <ClipboardControl />
      <ClipboardTrigger labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
    </Clipboard>
}`,...(H=(z=T.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var X,ee,oe;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Loading">
      <ClipboardControl loading />
      <ClipboardTrigger />
    </Clipboard>
}`,...(oe=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ae,re,te;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Disabled" disabled>
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const We=["Demo","Default","Overview","Masked","CustomLabels","Loading","Disabled"],to=Object.freeze(Object.defineProperty({__proto__:null,CustomLabels:T,Default:v,Demo:y,Disabled:x,Loading:O,Masked:f,Overview:_,__namedExportsOrder:We,default:Be},Symbol.toStringTag,{value:"Module"}));export{to as C,v as D,O as L,f as M,_ as O,x as a,T as b};
