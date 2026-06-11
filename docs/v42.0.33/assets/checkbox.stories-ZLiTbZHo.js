import{r as b,e as r}from"./index-D_CmzhJ4.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{c as fe}from"./index-CkQHsVsO.js";import{u as ve,c as $}from"./FormFieldLabel-CKDxoiJ9.js";import{c as ye,N as T,O as I,Q as Oe,T as E,a5 as Re,d as Fe,z as Ge,v as qe,X as we,a6 as De,a7 as je,a8 as Ae,a9 as He,a as Ee,u as We,R as Me,A as Xe,S as $e}from"./use-locale-context-BCvnGTO-.js";import{i as Ue,t as Ke}from"./index-DaKY7gBv.js";import{u as Te}from"./use-field-context-sFc5XjRx.js";import{I as U,a as K}from"./icon-name-BOrBmUKT.js";import{u as Be}from"./use-event-OCVb0O1l.js";import{T as Ye,a as Qe}from"./Text-KX3Hvvn9.js";import{e as Je,o as Ze,C as H}from"./controls-BtiQQn1l.js";const[ze,w]=ye({name:"CheckboxContext",hookName:"useCheckboxContext",providerName:"<CheckboxProvider />"}),Ie=b.forwardRef((e,t)=>{const o=w(),n=T(o.getControlProps(),e);return d.jsx(I.div,{...n,ref:t})});Ie.displayName="CheckboxControl";var Pe=Oe("checkbox").parts("root","label","control","indicator"),G=Pe.build(),Ne=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`checkbox:${e.id}`},B=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`checkbox:${e.id}:label`},et=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`checkbox:${e.id}:control`},M=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`checkbox:${e.id}:input`},tt=e=>e.getById(Ne(e)),P=e=>e.getById(M(e));function ot(e,t){const{send:o,context:n,prop:a,computed:s,scope:c}=e,l=a("disabled"),k=a("readOnly"),x=a("invalid"),f=!l&&n.get("focused"),v=!l&&n.get("focusVisible"),C=s("checked"),p=s("indeterminate"),y={"data-active":E(n.get("active")),"data-focus":E(f),"data-focus-visible":E(v),"data-readonly":E(k),"data-hover":E(n.get("hovered")),"data-disabled":E(l),"data-state":p?"indeterminate":C?"checked":"unchecked","data-invalid":E(x)};return{checked:C,disabled:l,indeterminate:p,focused:f,checkedState:C,setChecked(g){o({type:"CHECKED.SET",checked:g,isTrusted:!1})},toggleChecked(){o({type:"CHECKED.TOGGLE",checked:C,isTrusted:!1})},getRootProps(){return t.label({...G.root.attrs,...y,dir:a("dir"),id:Ne(c),htmlFor:M(c),onPointerMove(){l||o({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){l||o({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(g){Fe(g)===P(c)&&g.stopPropagation()}})},getLabelProps(){return t.element({...G.label.attrs,...y,dir:a("dir"),id:B(c)})},getControlProps(){return t.element({...G.control.attrs,...y,dir:a("dir"),id:et(c),"aria-hidden":!0})},getIndicatorProps(){return t.element({...G.indicator.attrs,...y,dir:a("dir"),hidden:!p&&!C})},getHiddenInputProps(){return t.input({id:M(c),type:"checkbox",required:a("required"),defaultChecked:C,disabled:l,"aria-labelledby":B(c),"aria-invalid":x,name:a("name"),form:a("form"),value:a("value"),style:Re,onFocus(){const g=Ue();o({type:"CONTEXT.SET",context:{focused:!0,focusVisible:g}})},onBlur(){o({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(g){if(k){g.preventDefault();return}const j=g.currentTarget.checked;o({type:"CHECKED.SET",checked:j,isTrusted:!0})}})}}}var{not:Y}=we(),rt=qe({props({props:e}){return{value:"on",...e,defaultChecked:!!e.defaultChecked}},initialState(){return"ready"},context({prop:e,bindable:t}){return{checked:t(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(o){var n;(n=e("onCheckedChange"))==null||n({checked:o})}})),fieldsetDisabled:t(()=>({defaultValue:!1})),focusVisible:t(()=>({defaultValue:!1})),active:t(()=>({defaultValue:!1})),focused:t(()=>({defaultValue:!1})),hovered:t(()=>({defaultValue:!1}))}},watch({track:e,context:t,prop:o,action:n}){e([()=>o("disabled")],()=>{n(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{n(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:Y("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:Y("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},computed:{indeterminate:({context:e})=>q(e.get("checked")),checked:({context:e})=>nt(e.get("checked")),disabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled")},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({context:e,computed:t,scope:o}){if(!t("disabled"))return He({pointerNode:tt(o),keyboardNode:P(o),isValidKey:n=>n.key===" ",onPress:()=>e.set("active",!1),onPressStart:()=>e.set("active",!0),onPressEnd:()=>e.set("active",!1)})},trackFocusVisible({computed:e,scope:t}){var o;if(!e("disabled"))return Ke({root:(o=t.getRootNode)==null?void 0:o.call(t)})},trackFormControlState({context:e,scope:t}){return Ae(P(t),{onFieldsetDisabledChange(o){e.set("fieldsetDisabled",o)},onFormReset(){e.set("checked",e.initial("checked"))}})}},actions:{setContext({context:e,event:t}){for(const o in t.context)e.set(o,t.context[o])},syncInputElement({context:e,computed:t,scope:o}){const n=P(o);n&&(je(n,t("checked")),n.indeterminate=q(e.get("checked")))},removeFocusIfNeeded({context:e,prop:t}){t("disabled")&&e.get("focused")&&(e.set("focused",!1),e.set("focusVisible",!1))},setChecked({context:e,event:t}){e.set("checked",t.checked)},toggleChecked({context:e,computed:t}){const o=q(t("checked"))?!0:!t("checked");e.set("checked",o)},dispatchChangeEvent({computed:e,scope:t}){queueMicrotask(()=>{const o=P(t);De(o,{checked:e("checked")})})}}}});function q(e){return e==="indeterminate"}function nt(e){return q(e)?!1:!!e}Ge()(["defaultChecked","checked","dir","disabled","form","getRootNode","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]);const at=Pe.extendWith("group");function ct(e){const{value:t,onChange:o,defaultValue:n}=e,[a,s]=b.useState(n),c=t!==void 0,l=c?t:a,k=b.useCallback(x=>(c||s(x),o==null?void 0:o(x)),[c,o]);return[l,k]}function st(e={}){const{defaultValue:t,value:o,onValueChange:n,disabled:a,readOnly:s,name:c,invalid:l}=e,k=!(a||s),x=Be(n,{sync:!0}),[f,v]=ct({value:o,defaultValue:t||[],onChange:x}),C=i=>f.some(A=>String(A)===String(i)),p=i=>{C(i)?g(i):y(i)},y=i=>{k&&(C(i)||v(f.concat(i)))},g=i=>{k&&v(f.filter(A=>String(A)!==String(i)))};return{isChecked:C,value:f,name:c,disabled:!!a,readOnly:!!s,invalid:!!l,setValue:v,addValue:y,toggleValue:p,getItemProps:i=>({checked:i.value!=null?C(i.value):void 0,onCheckedChange(){i.value!=null&&p(i.value)},name:c,disabled:a,readOnly:s,invalid:l})}}const[lt,dt]=ye({name:"CheckboxGroupContext",hookName:"useCheckboxGroupContext",providerName:"<CheckboxGroupProvider />",strict:!1}),Le=b.forwardRef((e,t)=>{const[o,n]=Ee()(e,["defaultValue","value","onValueChange","disabled","invalid","readOnly","name"]),a=st(o);return d.jsx(lt,{value:a,children:d.jsx(I.div,{ref:t,role:"group",...n,...at.build().group.attrs})})});Le.displayName="CheckboxGroup";const Se=b.forwardRef((e,t)=>{const o=w(),n=T(o.getHiddenInputProps(),e),a=Te();return d.jsx(I.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...n,ref:t})});Se.displayName="CheckboxHiddenInput";const X=b.forwardRef((e,t)=>{const{indeterminate:o,...n}=e,a=w(),s=T(a.getIndicatorProps(),n),c=o?a.indeterminate:a.checked;return d.jsx(I.div,{...s,hidden:!c,ref:t})});X.displayName="CheckboxIndicator";const Ve=b.forwardRef((e,t)=>{const o=w(),n=T(o.getLabelProps(),e);return d.jsx(I.span,{...n,ref:t})});Ve.displayName="CheckboxLabel";const it=(e={})=>{const t=dt(),o=Te(),n=b.useMemo(()=>T(e,(t==null?void 0:t.getItemProps({value:e.value}))??{}),[e,t]),a=b.useId(),{getRootNode:s}=We(),{dir:c}=Me(),l={id:a,ids:{label:o==null?void 0:o.ids.label,hiddenInput:o==null?void 0:o.ids.control},dir:c,disabled:o==null?void 0:o.disabled,readOnly:o==null?void 0:o.readOnly,invalid:o==null?void 0:o.invalid,required:o==null?void 0:o.required,getRootNode:s,...n},k=Xe(rt,l);return ot(k,$e)},_e=b.forwardRef((e,t)=>{const[o,n]=Ee()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]),a=it(o),s=T(a.getRootProps(),n);return d.jsx(ze,{value:a,children:d.jsx(I.label,{...s,ref:t})})});_e.displayName="CheckboxRoot";const ut="_checkbox_18i6t_2",ht={checkbox:ut},u=b.forwardRef(({checked:e,children:t,className:o,defaultChecked:n,disabled:a,id:s,invalid:c,name:l,onCheckedChange:k,required:x,value:f,...v},C)=>{const p=ve();return d.jsx(_e,{checked:e,className:fe(ht.checkbox,o),defaultChecked:n,disabled:a,id:s||(p==null?void 0:p.id),invalid:c||(p==null?void 0:p.invalid),name:l,onCheckedChange:k,ref:C,required:x,value:f,...v,children:t})});u.displayName="Checkbox";u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:"The controlled checked state of the checkbox."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the checkbox. Use when you don't need to control the checked state of the checkbox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: CheckboxCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"CheckboxCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."}},composes:["ComponentPropsWithRef"]};const W={"checkbox-control":"_checkbox-control_93pxb_2","checkbox-control__icon":"_checkbox-control__icon_93pxb_47"},h=b.forwardRef(({className:e,...t},o)=>{const n=ve();return d.jsxs(Ie,{className:fe(W["checkbox-control"],e),ref:o,...t,children:[d.jsx(X,{children:d.jsx(U,{className:W["checkbox-control__icon"],name:K.check})}),d.jsx(X,{indeterminate:!0,children:d.jsx(U,{className:W["checkbox-control__icon"],name:K.minus})}),d.jsx(Se,{"aria-describedby":t["aria-describedby"]||(n==null?void 0:n.ariaDescribedBy)})]})});h.displayName="CheckboxControl";h.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",composes:["ComponentPropsWithRef"]};const D=b.forwardRef(({children:e,defaultValue:t,disabled:o,invalid:n,name:a,onValueChange:s,readOnly:c,value:l,...k},x)=>d.jsx(Le,{defaultValue:t,disabled:o,invalid:n,name:a,onValueChange:s,readOnly:c,ref:x,value:l,...k,children:e}));D.displayName="CheckboxGroup";D.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of `value` when uncontrolled."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the group is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the group is in error."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the checkbox group."}},composes:["ComponentPropsWithRef"]};const m=b.forwardRef(({children:e,...t},o)=>d.jsx(Ve,{ref:o,...t,children:e}));m.displayName="CheckboxLabel";m.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabel",composes:["ComponentPropsWithRef"]};const mt={argTypes:Je(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:u,subcomponents:{CheckboxControl:h,CheckboxGroup:D,CheckboxLabel:m},title:"React Components/Checkbox"},N={render:e=>r.createElement(u,{disabled:e.disabled,invalid:e.invalid},r.createElement(h,null),r.createElement(m,null,e.label)),argTypes:Ze({disabled:{table:{category:H.general},control:"boolean"},invalid:{table:{category:H.general},control:"boolean"},label:{table:{category:H.slot},control:"text"}}),args:{label:"My checkbox"}},L={tags:["!dev"],render:({})=>r.createElement(u,null,r.createElement(h,null))},S={tags:["!dev"],render:({})=>r.createElement(u,{disabled:!0},r.createElement(h,null),r.createElement(m,null,"Checkbox"))},V={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(Ye,{preset:Qe.label},"Legal considerations:"),r.createElement($,null,r.createElement(u,null,r.createElement(h,null),r.createElement(m,null,"I agree to the terms and conditions."))),r.createElement($,null,r.createElement(u,null,r.createElement(h,null),r.createElement(m,null,"I agree to receive marketing communications."))))},_={tags:["!dev"],render:({})=>r.createElement(D,{defaultValue:["marketing"],name:"acknowledgments"},r.createElement(u,{value:"term"},r.createElement(h,null),r.createElement(m,null,"I agree to the terms and conditions.")),r.createElement(u,{value:"marketing"},r.createElement(h,null),r.createElement(m,null,"I agree to receive marketing communications.")))},O={tags:["!dev"],render:({})=>r.createElement(u,{invalid:!0},r.createElement(h,null),r.createElement(m,null,"Checkbox"))},R={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(u,null,r.createElement(h,null),r.createElement(m,null,"Checkbox"))},F={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(u,{checked:!1},r.createElement(h,null),r.createElement(m,null,"Unchecked")),r.createElement(u,{checked:!0},r.createElement(h,null),r.createElement(m,null,"Checked")),r.createElement(u,{checked:"indeterminate"},r.createElement(h,null),r.createElement(m,null,"Indeterminate")))};var Q,J,Z;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var z,ee,te;L.parameters={...L.parameters,docs:{...(z=L.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox>
      <CheckboxControl />
    </Checkbox>
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ne;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,ce,se;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var le,de,ie;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ue,he,me;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(me=(he=O.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var be,ke,Ce;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ce=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var pe,xe,ge;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const bt=["Demo","Default","Disabled","InFormField","Group","Invalid","Overview","States"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Default:L,Demo:N,Disabled:S,Group:_,InFormField:V,Invalid:O,Overview:R,States:F,__namedExportsOrder:bt,default:mt},Symbol.toStringTag,{value:"Module"}));export{Pt as C,L as D,_ as G,O as I,R as O,F as S,S as a,V as b};
