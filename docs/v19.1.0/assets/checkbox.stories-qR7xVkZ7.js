import{r as i,e as r}from"./index-D_CmzhJ4.js";import{j as l}from"./jsx-runtime-VM66peLj.js";import{c as $}from"./index-CkQHsVsO.js";import{u as ve,F as K}from"./FormFieldLabel-DQkMrZpp.js";import{c as ye,Q as T,R as I,T as Ve,W as E,aA as Se,d as Oe,K as we,H as Ge,_ as qe,aB as De,aC as je,ap as Ae,aD as He,a as Ee,u as We,U as Me,L as Ue,V as $e}from"./use-locale-context-DLC4Hyvy.js";import{i as Ke,t as Xe}from"./index-Rz4wIOao.js";import{u as Te}from"./use-field-context--XabuWSL.js";import{I as X,a as B}from"./icon-name-CL_C5kfn.js";import{u as Be}from"./use-event-OCVb0O1l.js";import{T as Ye,a as Qe}from"./Text-B1XN51Xz.js";import{e as Je,o as Ze,C as H}from"./controls-BtiQQn1l.js";const[ze,w]=ye({name:"CheckboxContext",hookName:"useCheckboxContext",providerName:"<CheckboxProvider />"}),Ie=i.forwardRef((e,t)=>{const o=w(),n=T(o.getControlProps(),e);return l.jsx(I.div,{...n,ref:t})});Ie.displayName="CheckboxControl";var Pe=Ve("checkbox").parts("root","label","control","indicator"),G=Pe.build(),Ne=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`checkbox:${e.id}`},Y=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`checkbox:${e.id}:label`},et=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`checkbox:${e.id}:control`},M=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`checkbox:${e.id}:input`},tt=e=>e.getById(Ne(e)),P=e=>e.getById(M(e));function ot(e,t){const{send:o,context:n,prop:a,computed:s,scope:c}=e,d=a("disabled"),k=a("readOnly"),x=a("invalid"),g=!d&&n.get("focused"),v=!d&&n.get("focusVisible"),p=s("checked"),C=s("indeterminate"),y={"data-active":E(n.get("active")),"data-focus":E(g),"data-focus-visible":E(v),"data-readonly":E(k),"data-hover":E(n.get("hovered")),"data-disabled":E(d),"data-state":C?"indeterminate":p?"checked":"unchecked","data-invalid":E(x)};return{checked:p,disabled:d,indeterminate:C,focused:g,checkedState:p,setChecked(f){o({type:"CHECKED.SET",checked:f,isTrusted:!1})},toggleChecked(){o({type:"CHECKED.TOGGLE",checked:p,isTrusted:!1})},getRootProps(){return t.label({...G.root.attrs,...y,dir:a("dir"),id:Ne(c),htmlFor:M(c),onPointerMove(){d||o({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){d||o({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(f){Oe(f)===P(c)&&f.stopPropagation()}})},getLabelProps(){return t.element({...G.label.attrs,...y,dir:a("dir"),id:Y(c)})},getControlProps(){return t.element({...G.control.attrs,...y,dir:a("dir"),id:et(c),"aria-hidden":!0})},getIndicatorProps(){return t.element({...G.indicator.attrs,...y,dir:a("dir"),hidden:!C&&!p})},getHiddenInputProps(){return t.input({id:M(c),type:"checkbox",required:a("required"),defaultChecked:p,disabled:d,"aria-labelledby":Y(c),"aria-invalid":x,name:a("name"),form:a("form"),value:a("value"),style:Se,onFocus(){const f=Ke();o({type:"CONTEXT.SET",context:{focused:!0,focusVisible:f}})},onBlur(){o({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(f){if(k){f.preventDefault();return}const j=f.currentTarget.checked;o({type:"CHECKED.SET",checked:j,isTrusted:!0})}})}}}var{not:Q}=qe(),rt=Ge({props({props:e}){return{value:"on",...e,defaultChecked:!!e.defaultChecked}},initialState(){return"ready"},context({prop:e,bindable:t}){return{checked:t(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(o){var n;(n=e("onCheckedChange"))==null||n({checked:o})}})),fieldsetDisabled:t(()=>({defaultValue:!1})),focusVisible:t(()=>({defaultValue:!1})),active:t(()=>({defaultValue:!1})),focused:t(()=>({defaultValue:!1})),hovered:t(()=>({defaultValue:!1}))}},watch({track:e,context:t,prop:o,action:n}){e([()=>o("disabled")],()=>{n(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{n(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:Q("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:Q("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},computed:{indeterminate:({context:e})=>q(e.get("checked")),checked:({context:e})=>nt(e.get("checked")),disabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled")},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({context:e,computed:t,scope:o}){if(!t("disabled"))return He({pointerNode:tt(o),keyboardNode:P(o),isValidKey:n=>n.key===" ",onPress:()=>e.set("active",!1),onPressStart:()=>e.set("active",!0),onPressEnd:()=>e.set("active",!1)})},trackFocusVisible({computed:e,scope:t}){var o;if(!e("disabled"))return Xe({root:(o=t.getRootNode)==null?void 0:o.call(t)})},trackFormControlState({context:e,scope:t}){return Ae(P(t),{onFieldsetDisabledChange(o){e.set("fieldsetDisabled",o)},onFormReset(){e.set("checked",e.initial("checked"))}})}},actions:{setContext({context:e,event:t}){for(const o in t.context)e.set(o,t.context[o])},syncInputElement({context:e,computed:t,scope:o}){const n=P(o);n&&(je(n,t("checked")),n.indeterminate=q(e.get("checked")))},removeFocusIfNeeded({context:e,prop:t}){t("disabled")&&e.get("focused")&&(e.set("focused",!1),e.set("focusVisible",!1))},setChecked({context:e,event:t}){e.set("checked",t.checked)},toggleChecked({context:e,computed:t}){const o=q(t("checked"))?!0:!t("checked");e.set("checked",o)},dispatchChangeEvent({computed:e,scope:t}){queueMicrotask(()=>{const o=P(t);De(o,{checked:e("checked")})})}}}});function q(e){return e==="indeterminate"}function nt(e){return q(e)?!1:!!e}we()(["defaultChecked","checked","dir","disabled","form","getRootNode","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]);const at=Pe.extendWith("group");function ct(e){const{value:t,onChange:o,defaultValue:n}=e,[a,s]=i.useState(n),c=t!==void 0,d=c?t:a,k=i.useCallback(x=>(c||s(x),o==null?void 0:o(x)),[c,o]);return[d,k]}function st(e={}){const{defaultValue:t,value:o,onValueChange:n,disabled:a,readOnly:s,name:c,invalid:d}=e,k=!(a||s),x=Be(n,{sync:!0}),[g,v]=ct({value:o,defaultValue:t||[],onChange:x}),p=u=>g.some(A=>String(A)===String(u)),C=u=>{p(u)?f(u):y(u)},y=u=>{k&&(p(u)||v(g.concat(u)))},f=u=>{k&&v(g.filter(A=>String(A)!==String(u)))};return{isChecked:p,value:g,name:c,disabled:!!a,readOnly:!!s,invalid:!!d,setValue:v,addValue:y,toggleValue:C,getItemProps:u=>({checked:u.value!=null?p(u.value):void 0,onCheckedChange(){u.value!=null&&C(u.value)},name:c,disabled:a,readOnly:s,invalid:d})}}const[lt,dt]=ye({name:"CheckboxGroupContext",hookName:"useCheckboxGroupContext",providerName:"<CheckboxGroupProvider />",strict:!1}),_e=i.forwardRef((e,t)=>{const[o,n]=Ee()(e,["defaultValue","value","onValueChange","disabled","invalid","readOnly","name"]),a=st(o);return l.jsx(lt,{value:a,children:l.jsx(I.div,{ref:t,role:"group",...n,...at.build().group.attrs})})});_e.displayName="CheckboxGroup";const Le=i.forwardRef((e,t)=>{const o=w(),n=T(o.getHiddenInputProps(),e),a=Te();return l.jsx(I.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...n,ref:t})});Le.displayName="CheckboxHiddenInput";const U=i.forwardRef((e,t)=>{const{indeterminate:o,...n}=e,a=w(),s=T(a.getIndicatorProps(),n),c=o?a.indeterminate:a.checked;return l.jsx(I.div,{...s,hidden:!c,ref:t})});U.displayName="CheckboxIndicator";const Fe=i.forwardRef((e,t)=>{const o=w(),n=T(o.getLabelProps(),e);return l.jsx(I.span,{...n,ref:t})});Fe.displayName="CheckboxLabel";const it=(e={})=>{const t=dt(),o=Te(),n=i.useMemo(()=>T(e,(t==null?void 0:t.getItemProps({value:e.value}))??{}),[e,t]),a=i.useId(),{getRootNode:s}=We(),{dir:c}=Me(),d={id:a,ids:{label:o==null?void 0:o.ids.label,hiddenInput:o==null?void 0:o.ids.control},dir:c,disabled:o==null?void 0:o.disabled,readOnly:o==null?void 0:o.readOnly,invalid:o==null?void 0:o.invalid,required:o==null?void 0:o.required,getRootNode:s,...n},k=Ue(rt,d);return ot(k,$e)},Re=i.forwardRef((e,t)=>{const[o,n]=Ee()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]),a=it(o),s=T(a.getRootProps(),n);return l.jsx(ze,{value:a,children:l.jsx(I.label,{...s,ref:t})})});Re.displayName="CheckboxRoot";const ut="_checkbox_18i6t_2",ht={checkbox:ut},h=i.forwardRef(({checked:e,children:t,className:o,defaultChecked:n,disabled:a,id:s,invalid:c,name:d,onCheckedChange:k,required:x,value:g,...v},p)=>{const C=ve();return l.jsx(Re,{checked:e,className:$(ht.checkbox,o),"data-ods":"checkbox",defaultChecked:n,disabled:a,id:s||(C==null?void 0:C.id),invalid:c||(C==null?void 0:C.invalid),name:d,onCheckedChange:k,ref:p,required:x,value:g,...v,children:t})});h.displayName="Checkbox";h.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:"The controlled checked state of the checkbox."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the checkbox. Use when you don't need to control the checked state of the checkbox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: CheckboxCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"CheckboxCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."}},composes:["ComponentPropsWithRef"]};const W={"checkbox-control":"_checkbox-control_gr69e_2","checkbox-control__icon":"_checkbox-control__icon_gr69e_49"},m=i.forwardRef(({className:e,...t},o)=>{const n=ve(),a=i.useRef(null),{indeterminate:s}=w();return i.useEffect(()=>{a.current&&(a.current.indeterminate=s)},[s]),l.jsxs(l.Fragment,{children:[l.jsxs(Ie,{className:$(W["checkbox-control"],e),"data-ods":"checkbox-control",ref:o,...t,children:[l.jsx(U,{children:l.jsx(X,{className:W["checkbox-control__icon"],name:B.check})}),l.jsx(U,{indeterminate:!0,children:l.jsx(X,{className:W["checkbox-control__icon"],name:B.minus})})]}),l.jsx(Le,{"aria-describedby":t["aria-describedby"]||(n==null?void 0:n.ariaDescribedBy),ref:a})]})});m.displayName="CheckboxControl";m.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",composes:["ComponentPropsWithRef"]};const mt={"checkbox-group":"_checkbox-group_v5ypt_2"},D=i.forwardRef(({children:e,className:t,defaultValue:o,disabled:n,invalid:a,name:s,onValueChange:c,readOnly:d,value:k,...x},g)=>l.jsx(_e,{className:$(mt["checkbox-group"],t),"data-ods":"checkbox-group",defaultValue:o,disabled:n,invalid:a,name:s,onValueChange:c,readOnly:d,ref:g,value:k,...x,children:e}));D.displayName="CheckboxGroup";D.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of `value` when uncontrolled."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the group is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the group is in error."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the checkbox group."}},composes:["ComponentPropsWithRef"]};const b=i.forwardRef(({children:e,...t},o)=>l.jsx(Fe,{"data-ods":"checkbox-label",ref:o,...t,children:e}));b.displayName="CheckboxLabel";b.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabel",composes:["ComponentPropsWithRef"]};const bt={argTypes:Je(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:h,subcomponents:{CheckboxControl:m,CheckboxGroup:D,CheckboxLabel:b},title:"React Components/Checkbox"},N={render:e=>r.createElement(h,{disabled:e.disabled,invalid:e.invalid},r.createElement(m,null),r.createElement(b,null,e.label)),argTypes:Ze({disabled:{table:{category:H.general},control:"boolean"},invalid:{table:{category:H.general},control:"boolean"},label:{table:{category:H.slot},control:"text"}}),args:{label:"My checkbox"}},_={tags:["!dev"],render:({})=>r.createElement(h,null,r.createElement(m,null))},L={tags:["!dev"],render:({})=>r.createElement(h,{disabled:!0},r.createElement(m,null),r.createElement(b,null,"Checkbox"))},F={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(Ye,{preset:Qe.label},"Legal considerations:"),r.createElement(K,null,r.createElement(h,null,r.createElement(m,null),r.createElement(b,null,"I agree to the terms and conditions."))),r.createElement(K,null,r.createElement(h,null,r.createElement(m,null),r.createElement(b,null,"I agree to receive marketing communications."))))},R={tags:["!dev"],render:({})=>r.createElement(D,{defaultValue:["marketing"],name:"acknowledgments"},r.createElement(h,{value:"term"},r.createElement(m,null),r.createElement(b,null,"I agree to the terms and conditions.")),r.createElement(h,{value:"marketing"},r.createElement(m,null),r.createElement(b,null,"I agree to receive marketing communications.")))},V={tags:["!dev"],render:({})=>r.createElement(h,{invalid:!0},r.createElement(m,null),r.createElement(b,null,"Checkbox"))},S={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(h,null,r.createElement(m,null),r.createElement(b,null,"Checkbox"))},O={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(h,{checked:!1},r.createElement(m,null),r.createElement(b,null,"Unchecked")),r.createElement(h,{checked:!0},r.createElement(m,null),r.createElement(b,null,"Checked")),r.createElement(h,{checked:"indeterminate"},r.createElement(m,null),r.createElement(b,null,"Indeterminate")))};var J,Z,z;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Checkbox disabled={arg.disabled} invalid={arg.invalid}>
      <CheckboxControl />

      <CheckboxLabel>
        {arg.label}
      </CheckboxLabel>
    </Checkbox>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    }
  }),
  args: {
    label: 'My checkbox'
  }
}`,...(z=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var ee,te,oe;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox>
      <CheckboxControl />
    </Checkbox>
}`,...(oe=(te=_.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,ae;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(ae=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ce,se,le;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Text preset={TEXT_PRESET.label}>
        Legal considerations:
      </Text>

      <FormField>
        <Checkbox>
          <CheckboxControl />

          <CheckboxLabel>
            I agree to the terms and conditions.
          </CheckboxLabel>
        </Checkbox>
      </FormField>

      <FormField>
        <Checkbox>
          <CheckboxControl />

          <CheckboxLabel>
            I agree to receive marketing communications.
          </CheckboxLabel>
        </Checkbox>
      </FormField>
    </>
}`,...(le=(se=F.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ie,ue;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <CheckboxGroup defaultValue={['marketing']} name="acknowledgments">
      <Checkbox value="term">
        <CheckboxControl />

        <CheckboxLabel>
          I agree to the terms and conditions.
        </CheckboxLabel>
      </Checkbox>

      <Checkbox value="marketing">
        <CheckboxControl />

        <CheckboxLabel>
          I agree to receive marketing communications.
        </CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
}`,...(ue=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var he,me,be;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(be=(me=V.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ke,pe,Ce;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Checkbox>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(Ce=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:Ce.source}}};var xe,ge,fe;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Checkbox checked={false}>
        <CheckboxControl />

        <CheckboxLabel>
          Unchecked
        </CheckboxLabel>
      </Checkbox>

      <Checkbox checked={true}>
        <CheckboxControl />

        <CheckboxLabel>
          Checked
        </CheckboxLabel>
      </Checkbox>

      <Checkbox checked="indeterminate">
        <CheckboxControl />

        <CheckboxLabel>
          Indeterminate
        </CheckboxLabel>
      </Checkbox>
    </>
}`,...(fe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const kt=["Demo","Default","Disabled","InFormField","Group","Invalid","Overview","States"],Nt=Object.freeze(Object.defineProperty({__proto__:null,Default:_,Demo:N,Disabled:L,Group:R,InFormField:F,Invalid:V,Overview:S,States:O,__namedExportsOrder:kt,default:bt},Symbol.toStringTag,{value:"Module"}));export{Nt as C,_ as D,R as G,V as I,S as O,O as S,L as a,F as b};
