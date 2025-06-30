import{r as b,e as r}from"./index-D_CmzhJ4.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{c as fe}from"./index-CkQHsVsO.js";import{u as ve,c as $}from"./FormFieldLabel-DjB85afw.js";import{c as ye,Q as T,R as I,T as Se,W as E,a7 as Oe,d as Fe,K as Ge,H as qe,_ as we,a8 as De,a9 as je,aa as Ae,ab as He,a as Ee,u as We,U as Me,L as Ue,V as $e}from"./use-locale-context-BQVaQ0H3.js";import{i as Ke,t as Xe}from"./index-DoGvXrgL.js";import{u as Te}from"./use-field-context-A_pa20cf.js";import{I as K,a as X}from"./icon-name-BOrBmUKT.js";import{u as Be}from"./use-event-OCVb0O1l.js";import{T as Ye,a as Qe}from"./Text-KX3Hvvn9.js";import{e as Je,o as Ze,C as H}from"./controls-BtiQQn1l.js";const[ze,w]=ye({name:"CheckboxContext",hookName:"useCheckboxContext",providerName:"<CheckboxProvider />"}),Ie=b.forwardRef((e,t)=>{const o=w(),n=T(o.getControlProps(),e);return d.jsx(I.div,{...n,ref:t})});Ie.displayName="CheckboxControl";var Pe=Se("checkbox").parts("root","label","control","indicator"),G=Pe.build(),Le=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`checkbox:${e.id}`},B=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`checkbox:${e.id}:label`},et=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`checkbox:${e.id}:control`},M=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`checkbox:${e.id}:input`},tt=e=>e.getById(Le(e)),P=e=>e.getById(M(e));function ot(e,t){const{send:o,context:n,prop:a,computed:s,scope:c}=e,l=a("disabled"),k=a("readOnly"),x=a("invalid"),f=!l&&n.get("focused"),v=!l&&n.get("focusVisible"),C=s("checked"),p=s("indeterminate"),y={"data-active":E(n.get("active")),"data-focus":E(f),"data-focus-visible":E(v),"data-readonly":E(k),"data-hover":E(n.get("hovered")),"data-disabled":E(l),"data-state":p?"indeterminate":C?"checked":"unchecked","data-invalid":E(x)};return{checked:C,disabled:l,indeterminate:p,focused:f,checkedState:C,setChecked(g){o({type:"CHECKED.SET",checked:g,isTrusted:!1})},toggleChecked(){o({type:"CHECKED.TOGGLE",checked:C,isTrusted:!1})},getRootProps(){return t.label({...G.root.attrs,...y,dir:a("dir"),id:Le(c),htmlFor:M(c),onPointerMove(){l||o({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){l||o({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(g){Fe(g)===P(c)&&g.stopPropagation()}})},getLabelProps(){return t.element({...G.label.attrs,...y,dir:a("dir"),id:B(c)})},getControlProps(){return t.element({...G.control.attrs,...y,dir:a("dir"),id:et(c),"aria-hidden":!0})},getIndicatorProps(){return t.element({...G.indicator.attrs,...y,dir:a("dir"),hidden:!p&&!C})},getHiddenInputProps(){return t.input({id:M(c),type:"checkbox",required:a("required"),defaultChecked:C,disabled:l,"aria-labelledby":B(c),"aria-invalid":x,name:a("name"),form:a("form"),value:a("value"),style:Oe,onFocus(){const g=Ke();o({type:"CONTEXT.SET",context:{focused:!0,focusVisible:g}})},onBlur(){o({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(g){if(k){g.preventDefault();return}const j=g.currentTarget.checked;o({type:"CHECKED.SET",checked:j,isTrusted:!0})}})}}}var{not:Y}=we(),rt=qe({props({props:e}){return{value:"on",...e,defaultChecked:!!e.defaultChecked}},initialState(){return"ready"},context({prop:e,bindable:t}){return{checked:t(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(o){var n;(n=e("onCheckedChange"))==null||n({checked:o})}})),fieldsetDisabled:t(()=>({defaultValue:!1})),focusVisible:t(()=>({defaultValue:!1})),active:t(()=>({defaultValue:!1})),focused:t(()=>({defaultValue:!1})),hovered:t(()=>({defaultValue:!1}))}},watch({track:e,context:t,prop:o,action:n}){e([()=>o("disabled")],()=>{n(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{n(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:Y("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:Y("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},computed:{indeterminate:({context:e})=>q(e.get("checked")),checked:({context:e})=>nt(e.get("checked")),disabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled")},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({context:e,computed:t,scope:o}){if(!t("disabled"))return He({pointerNode:tt(o),keyboardNode:P(o),isValidKey:n=>n.key===" ",onPress:()=>e.set("active",!1),onPressStart:()=>e.set("active",!0),onPressEnd:()=>e.set("active",!1)})},trackFocusVisible({computed:e,scope:t}){var o;if(!e("disabled"))return Xe({root:(o=t.getRootNode)==null?void 0:o.call(t)})},trackFormControlState({context:e,scope:t}){return Ae(P(t),{onFieldsetDisabledChange(o){e.set("fieldsetDisabled",o)},onFormReset(){e.set("checked",e.initial("checked"))}})}},actions:{setContext({context:e,event:t}){for(const o in t.context)e.set(o,t.context[o])},syncInputElement({context:e,computed:t,scope:o}){const n=P(o);n&&(je(n,t("checked")),n.indeterminate=q(e.get("checked")))},removeFocusIfNeeded({context:e,prop:t}){t("disabled")&&e.get("focused")&&(e.set("focused",!1),e.set("focusVisible",!1))},setChecked({context:e,event:t}){e.set("checked",t.checked)},toggleChecked({context:e,computed:t}){const o=q(t("checked"))?!0:!t("checked");e.set("checked",o)},dispatchChangeEvent({computed:e,scope:t}){queueMicrotask(()=>{const o=P(t);De(o,{checked:e("checked")})})}}}});function q(e){return e==="indeterminate"}function nt(e){return q(e)?!1:!!e}Ge()(["defaultChecked","checked","dir","disabled","form","getRootNode","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]);const at=Pe.extendWith("group");function ct(e){const{value:t,onChange:o,defaultValue:n}=e,[a,s]=b.useState(n),c=t!==void 0,l=c?t:a,k=b.useCallback(x=>(c||s(x),o==null?void 0:o(x)),[c,o]);return[l,k]}function st(e={}){const{defaultValue:t,value:o,onValueChange:n,disabled:a,readOnly:s,name:c,invalid:l}=e,k=!(a||s),x=Be(n,{sync:!0}),[f,v]=ct({value:o,defaultValue:t||[],onChange:x}),C=i=>f.some(A=>String(A)===String(i)),p=i=>{C(i)?g(i):y(i)},y=i=>{k&&(C(i)||v(f.concat(i)))},g=i=>{k&&v(f.filter(A=>String(A)!==String(i)))};return{isChecked:C,value:f,name:c,disabled:!!a,readOnly:!!s,invalid:!!l,setValue:v,addValue:y,toggleValue:p,getItemProps:i=>({checked:i.value!=null?C(i.value):void 0,onCheckedChange(){i.value!=null&&p(i.value)},name:c,disabled:a,readOnly:s,invalid:l})}}const[lt,dt]=ye({name:"CheckboxGroupContext",hookName:"useCheckboxGroupContext",providerName:"<CheckboxGroupProvider />",strict:!1}),Ne=b.forwardRef((e,t)=>{const[o,n]=Ee()(e,["defaultValue","value","onValueChange","disabled","invalid","readOnly","name"]),a=st(o);return d.jsx(lt,{value:a,children:d.jsx(I.div,{ref:t,role:"group",...n,...at.build().group.attrs})})});Ne.displayName="CheckboxGroup";const Ve=b.forwardRef((e,t)=>{const o=w(),n=T(o.getHiddenInputProps(),e),a=Te();return d.jsx(I.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...n,ref:t})});Ve.displayName="CheckboxHiddenInput";const U=b.forwardRef((e,t)=>{const{indeterminate:o,...n}=e,a=w(),s=T(a.getIndicatorProps(),n),c=o?a.indeterminate:a.checked;return d.jsx(I.div,{...s,hidden:!c,ref:t})});U.displayName="CheckboxIndicator";const _e=b.forwardRef((e,t)=>{const o=w(),n=T(o.getLabelProps(),e);return d.jsx(I.span,{...n,ref:t})});_e.displayName="CheckboxLabel";const it=(e={})=>{const t=dt(),o=Te(),n=b.useMemo(()=>T(e,(t==null?void 0:t.getItemProps({value:e.value}))??{}),[e,t]),a=b.useId(),{getRootNode:s}=We(),{dir:c}=Me(),l={id:a,ids:{label:o==null?void 0:o.ids.label,hiddenInput:o==null?void 0:o.ids.control},dir:c,disabled:o==null?void 0:o.disabled,readOnly:o==null?void 0:o.readOnly,invalid:o==null?void 0:o.invalid,required:o==null?void 0:o.required,getRootNode:s,...n},k=Ue(rt,l);return ot(k,$e)},Re=b.forwardRef((e,t)=>{const[o,n]=Ee()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]),a=it(o),s=T(a.getRootProps(),n);return d.jsx(ze,{value:a,children:d.jsx(I.label,{...s,ref:t})})});Re.displayName="CheckboxRoot";const ut="_checkbox_18i6t_2",ht={checkbox:ut},u=b.forwardRef(({checked:e,children:t,className:o,defaultChecked:n,disabled:a,id:s,invalid:c,name:l,onCheckedChange:k,required:x,value:f,...v},C)=>{const p=ve();return d.jsx(Re,{checked:e,className:fe(ht.checkbox,o),defaultChecked:n,disabled:a,id:s||(p==null?void 0:p.id),invalid:c||(p==null?void 0:p.invalid),name:l,onCheckedChange:k,ref:C,required:x,value:f,...v,children:t})});u.displayName="Checkbox";u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:"The controlled checked state of the checkbox."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the checkbox. Use when you don't need to control the checked state of the checkbox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: CheckboxCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"CheckboxCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."}},composes:["ComponentPropsWithRef"]};const W={"checkbox-control":"_checkbox-control_r0pkw_2","checkbox-control__icon":"_checkbox-control__icon_r0pkw_48"},h=b.forwardRef(({className:e,...t},o)=>{const n=ve();return d.jsxs(Ie,{className:fe(W["checkbox-control"],e),ref:o,...t,children:[d.jsx(U,{children:d.jsx(K,{className:W["checkbox-control__icon"],name:X.check})}),d.jsx(U,{indeterminate:!0,children:d.jsx(K,{className:W["checkbox-control__icon"],name:X.minus})}),d.jsx(Ve,{"aria-describedby":t["aria-describedby"]||(n==null?void 0:n.ariaDescribedBy)})]})});h.displayName="CheckboxControl";h.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",composes:["ComponentPropsWithRef"]};const D=b.forwardRef(({children:e,defaultValue:t,disabled:o,invalid:n,name:a,onValueChange:s,readOnly:c,value:l,...k},x)=>d.jsx(Ne,{defaultValue:t,disabled:o,invalid:n,name:a,onValueChange:s,readOnly:c,ref:x,value:l,...k,children:e}));D.displayName="CheckboxGroup";D.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of `value` when uncontrolled."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the group is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the group is in error."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the checkbox group."}},composes:["ComponentPropsWithRef"]};const m=b.forwardRef(({children:e,...t},o)=>d.jsx(_e,{ref:o,...t,children:e}));m.displayName="CheckboxLabel";m.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabel",composes:["ComponentPropsWithRef"]};const mt={argTypes:Je(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:u,subcomponents:{CheckboxControl:h,CheckboxGroup:D,CheckboxLabel:m},title:"React Components/Checkbox"},L={render:e=>r.createElement(u,{disabled:e.disabled,invalid:e.invalid},r.createElement(h,null),r.createElement(m,null,e.label)),argTypes:Ze({disabled:{table:{category:H.general},control:"boolean"},invalid:{table:{category:H.general},control:"boolean"},label:{table:{category:H.slot},control:"text"}}),args:{label:"My checkbox"}},N={tags:["!dev"],render:({})=>r.createElement(u,null,r.createElement(h,null))},V={tags:["!dev"],render:({})=>r.createElement(u,{disabled:!0},r.createElement(h,null),r.createElement(m,null,"Checkbox"))},_={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(Ye,{preset:Qe.label},"Legal considerations:"),r.createElement($,null,r.createElement(u,null,r.createElement(h,null),r.createElement(m,null,"I agree to the terms and conditions."))),r.createElement($,null,r.createElement(u,null,r.createElement(h,null),r.createElement(m,null,"I agree to receive marketing communications."))))},R={tags:["!dev"],render:({})=>r.createElement(D,{defaultValue:["marketing"],name:"acknowledgments"},r.createElement(u,{value:"term"},r.createElement(h,null),r.createElement(m,null,"I agree to the terms and conditions.")),r.createElement(u,{value:"marketing"},r.createElement(h,null),r.createElement(m,null,"I agree to receive marketing communications.")))},S={tags:["!dev"],render:({})=>r.createElement(u,{invalid:!0},r.createElement(h,null),r.createElement(m,null,"Checkbox"))},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(u,null,r.createElement(h,null),r.createElement(m,null,"Checkbox"))},F={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(u,{checked:!1},r.createElement(h,null),r.createElement(m,null,"Unchecked")),r.createElement(u,{checked:!0},r.createElement(h,null),r.createElement(m,null,"Checked")),r.createElement(u,{checked:"indeterminate"},r.createElement(h,null),r.createElement(m,null,"Indeterminate")))};var Q,J,Z;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(J=L.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var z,ee,te;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox>
      <CheckboxControl />
    </Checkbox>
}`,...(te=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ne;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(ne=(re=V.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,ce,se;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var le,de,ie;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ue,he,me;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(me=(he=S.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var be,ke,Ce;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ce=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var pe,xe,ge;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const bt=["Demo","Default","Disabled","InFormField","Group","Invalid","Overview","States"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Default:N,Demo:L,Disabled:V,Group:R,InFormField:_,Invalid:S,Overview:O,States:F,__namedExportsOrder:bt,default:mt},Symbol.toStringTag,{value:"Module"}));export{Pt as C,N as D,R as G,S as I,O,F as S,V as a,_ as b};
