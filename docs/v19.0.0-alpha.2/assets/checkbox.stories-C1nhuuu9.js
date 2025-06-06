import{r as b,e as r}from"./index-D_CmzhJ4.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{c as fe}from"./index-CkQHsVsO.js";import{c as ve,I as T,J as I,P as _e,Q as E,aq as Oe,d as Re,p as Fe,X as Ge,ar as qe,as as je,ac as De,at as we,a as Ee}from"./index-BCxMAfLs.js";import{i as Ae,t as He}from"./index-DTqyXX3-.js";import{c as Me,a as Xe,b as $e,u as Ke,n as We}from"./use-locale-context-Z4fgdY29.js";import{u as ye}from"./use-field-context-BA6pMY5L.js";import{I as K,a as W}from"./icon-name-jL3axqAU.js";import{u as Ye}from"./use-event-OCVb0O1l.js";import{c as Y}from"./FormFieldLabel-BxxkSoC9.js";import{T as Be,a as Ue}from"./Text-eeWNb4Wa.js";import{e as Je,o as Qe,C as H}from"./controls-BtiQQn1l.js";const[ze,j]=ve({name:"CheckboxContext",hookName:"useCheckboxContext",providerName:"<CheckboxProvider />"}),Te=b.forwardRef((e,t)=>{const o=j(),n=T(o.getControlProps(),e);return d.jsx(I.div,{...n,ref:t})});Te.displayName="CheckboxControl";var Ie=_e("checkbox").parts("root","label","control","indicator"),G=Ie.build(),Pe=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`checkbox:${e.id}`},B=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`checkbox:${e.id}:label`},Ze=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`checkbox:${e.id}:control`},X=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`checkbox:${e.id}:input`},et=e=>e.getById(Pe(e)),P=e=>e.getById(X(e));function tt(e,t){const{send:o,context:n,prop:a,computed:s,scope:c}=e,l=a("disabled"),k=a("readOnly"),C=a("invalid"),g=!l&&n.get("focused"),f=!l&&n.get("focusVisible"),p=s("checked"),y=s("indeterminate"),v={"data-active":E(n.get("active")),"data-focus":E(g),"data-focus-visible":E(f),"data-readonly":E(k),"data-hover":E(n.get("hovered")),"data-disabled":E(l),"data-state":y?"indeterminate":p?"checked":"unchecked","data-invalid":E(C)};return{checked:p,disabled:l,indeterminate:y,focused:g,checkedState:p,setChecked(x){o({type:"CHECKED.SET",checked:x,isTrusted:!1})},toggleChecked(){o({type:"CHECKED.TOGGLE",checked:p,isTrusted:!1})},getRootProps(){return t.label({...G.root.attrs,...v,dir:a("dir"),id:Pe(c),htmlFor:X(c),onPointerMove(){l||o({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){l||o({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(x){Re(x)===P(c)&&x.stopPropagation()}})},getLabelProps(){return t.element({...G.label.attrs,...v,dir:a("dir"),id:B(c)})},getControlProps(){return t.element({...G.control.attrs,...v,dir:a("dir"),id:Ze(c),"aria-hidden":!0})},getIndicatorProps(){return t.element({...G.indicator.attrs,...v,dir:a("dir"),hidden:!y&&!p})},getHiddenInputProps(){return t.input({id:X(c),type:"checkbox",required:a("required"),defaultChecked:p,disabled:l,"aria-labelledby":B(c),"aria-invalid":C,name:a("name"),form:a("form"),value:a("value"),style:Oe,onFocus(){const x=Ae();o({type:"CONTEXT.SET",context:{focused:!0,focusVisible:x}})},onBlur(){o({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(x){if(k){x.preventDefault();return}const w=x.currentTarget.checked;o({type:"CHECKED.SET",checked:w,isTrusted:!0})}})}}}var{not:U}=Ge(),ot=Fe({props({props:e}){return{value:"on",...e,defaultChecked:!!e.defaultChecked}},initialState(){return"ready"},context({prop:e,bindable:t}){return{checked:t(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(o){var n;(n=e("onCheckedChange"))==null||n({checked:o})}})),fieldsetDisabled:t(()=>({defaultValue:!1})),focusVisible:t(()=>({defaultValue:!1})),active:t(()=>({defaultValue:!1})),focused:t(()=>({defaultValue:!1})),hovered:t(()=>({defaultValue:!1}))}},watch({track:e,context:t,prop:o,action:n}){e([()=>o("disabled")],()=>{n(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{n(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:U("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:U("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},computed:{indeterminate:({context:e})=>q(e.get("checked")),checked:({context:e})=>rt(e.get("checked")),disabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled")},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({context:e,computed:t,scope:o}){if(!t("disabled"))return we({pointerNode:et(o),keyboardNode:P(o),isValidKey:n=>n.key===" ",onPress:()=>e.set("active",!1),onPressStart:()=>e.set("active",!0),onPressEnd:()=>e.set("active",!1)})},trackFocusVisible({computed:e,scope:t}){var o;if(!e("disabled"))return He({root:(o=t.getRootNode)==null?void 0:o.call(t)})},trackFormControlState({context:e,scope:t}){return De(P(t),{onFieldsetDisabledChange(o){e.set("fieldsetDisabled",o)},onFormReset(){e.set("checked",e.initial("checked"))}})}},actions:{setContext({context:e,event:t}){for(const o in t.context)e.set(o,t.context[o])},syncInputElement({context:e,computed:t,scope:o}){const n=P(o);n&&(je(n,t("checked")),n.indeterminate=q(e.get("checked")))},removeFocusIfNeeded({context:e,prop:t}){t("disabled")&&e.get("focused")&&(e.set("focused",!1),e.set("focusVisible",!1))},setChecked({context:e,event:t}){e.set("checked",t.checked)},toggleChecked({context:e,computed:t}){const o=q(t("checked"))?!0:!t("checked");e.set("checked",o)},dispatchChangeEvent({computed:e,scope:t}){queueMicrotask(()=>{const o=P(t);qe(o,{checked:e("checked")})})}}}});function q(e){return e==="indeterminate"}function rt(e){return q(e)?!1:!!e}Me()(["defaultChecked","checked","dir","disabled","form","getRootNode","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]);const nt=Ie.extendWith("group");function at(e){const{value:t,onChange:o,defaultValue:n}=e,[a,s]=b.useState(n),c=t!==void 0,l=c?t:a,k=b.useCallback(C=>(c||s(C),o==null?void 0:o(C)),[c,o]);return[l,k]}function ct(e={}){const{defaultValue:t,value:o,onValueChange:n,disabled:a,readOnly:s,name:c,invalid:l}=e,k=!(a||s),C=Ye(n,{sync:!0}),[g,f]=at({value:o,defaultValue:t||[],onChange:C}),p=i=>g.some(A=>String(A)===String(i)),y=i=>{p(i)?x(i):v(i)},v=i=>{k&&(p(i)||f(g.concat(i)))},x=i=>{k&&f(g.filter(A=>String(A)!==String(i)))};return{isChecked:p,value:g,name:c,disabled:!!a,readOnly:!!s,invalid:!!l,setValue:f,addValue:v,toggleValue:y,getItemProps:i=>({checked:i.value!=null?p(i.value):void 0,onCheckedChange(){i.value!=null&&y(i.value)},name:c,disabled:a,readOnly:s,invalid:l})}}const[st,lt]=ve({name:"CheckboxGroupContext",hookName:"useCheckboxGroupContext",providerName:"<CheckboxGroupProvider />",strict:!1}),Ne=b.forwardRef((e,t)=>{const[o,n]=Ee()(e,["defaultValue","value","onValueChange","disabled","invalid","readOnly","name"]),a=ct(o);return d.jsx(st,{value:a,children:d.jsx(I.div,{ref:t,role:"group",...n,...nt.build().group.attrs})})});Ne.displayName="CheckboxGroup";const Le=b.forwardRef((e,t)=>{const o=j(),n=T(o.getHiddenInputProps(),e),a=ye();return d.jsx(I.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...n,ref:t})});Le.displayName="CheckboxHiddenInput";const $=b.forwardRef((e,t)=>{const{indeterminate:o,...n}=e,a=j(),s=T(a.getIndicatorProps(),n),c=o?a.indeterminate:a.checked;return d.jsx(I.div,{...s,hidden:!c,ref:t})});$.displayName="CheckboxIndicator";const Se=b.forwardRef((e,t)=>{const o=j(),n=T(o.getLabelProps(),e);return d.jsx(I.span,{...n,ref:t})});Se.displayName="CheckboxLabel";const dt=(e={})=>{const t=lt(),o=ye(),n=b.useMemo(()=>T(e,(t==null?void 0:t.getItemProps({value:e.value}))??{}),[e,t]),a=b.useId(),{getRootNode:s}=Xe(),{dir:c}=$e(),l={id:a,ids:{label:o==null?void 0:o.ids.label,hiddenInput:o==null?void 0:o.ids.control},dir:c,disabled:o==null?void 0:o.disabled,readOnly:o==null?void 0:o.readOnly,invalid:o==null?void 0:o.invalid,required:o==null?void 0:o.required,getRootNode:s,...n},k=Ke(ot,l);return tt(k,We)},Ve=b.forwardRef((e,t)=>{const[o,n]=Ee()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]),a=dt(o),s=T(a.getRootProps(),n);return d.jsx(ze,{value:a,children:d.jsx(I.label,{...s,ref:t})})});Ve.displayName="CheckboxRoot";const it="_checkbox_7yyfb_2",ut={checkbox:it},u=b.forwardRef(({checked:e,children:t,className:o,defaultChecked:n,disabled:a,invalid:s,name:c,onCheckedChange:l,required:k,value:C,...g},f)=>d.jsx(Ve,{checked:e,className:fe(ut.checkbox,o),defaultChecked:n,disabled:a,invalid:s,name:c,onCheckedChange:l,ref:f,required:k,value:C,...g,children:t}));u.displayName="Checkbox";u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: CheckboxCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"CheckboxCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithRef"]};const M={"checkbox-control":"_checkbox-control_rfjcz_2","checkbox-control__icon":"_checkbox-control__icon_rfjcz_44"},m=b.forwardRef(({className:e,...t},o)=>d.jsxs(Te,{className:fe(M["checkbox-control"],e),ref:o,...t,children:[d.jsx($,{children:d.jsx(K,{className:M["checkbox-control__icon"],name:W.check})}),d.jsx($,{indeterminate:!0,children:d.jsx(K,{className:M["checkbox-control__icon"],name:W.minus})}),d.jsx(Le,{})]}));m.displayName="CheckboxControl";m.__docgenInfo={description:"",methods:[],displayName:"CheckboxControl",composes:["ComponentPropsWithRef"]};const D=b.forwardRef(({children:e,defaultValue:t,disabled:o,invalid:n,name:a,onValueChange:s,readOnly:c,value:l,...k},C)=>d.jsx(Ne,{defaultValue:t,disabled:o,invalid:n,name:a,onValueChange:s,readOnly:c,ref:C,value:l,...k,children:e}));D.displayName="CheckboxGroup";D.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}},composes:["ComponentPropsWithRef"]};const h=b.forwardRef(({children:e,...t},o)=>d.jsx(Se,{ref:o,...t,children:e}));h.displayName="CheckboxLabel";h.__docgenInfo={description:"",methods:[],displayName:"CheckboxLabel",composes:["ComponentPropsWithRef"]};const mt={argTypes:Je(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:u,subcomponents:{CheckboxControl:m,CheckboxGroup:D,CheckboxLabel:h},title:"ODS Components/Form elements/Checkbox"},N={render:e=>r.createElement(u,{disabled:e.disabled,invalid:e.invalid},r.createElement(m,null),r.createElement(h,null,e.label)),argTypes:Qe({disabled:{table:{category:H.general},control:"boolean"},invalid:{table:{category:H.general},control:"boolean"},label:{table:{category:H.slot},control:"text"}}),args:{label:"My checkbox"}},L={tags:["!dev"],render:({})=>r.createElement(u,null,r.createElement(m,null))},S={tags:["!dev"],render:({})=>r.createElement(u,{disabled:!0},r.createElement(m,null),r.createElement(h,null,"Checkbox"))},V={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(Be,{preset:Ue.label},"Legal considerations:"),r.createElement(Y,null,r.createElement(u,null,r.createElement(m,null),r.createElement(h,null,"I agree to the terms and conditions."))),r.createElement(Y,null,r.createElement(u,null,r.createElement(m,null),r.createElement(h,null,"I agree to receive marketing communications."))))},_={tags:["!dev"],render:({})=>r.createElement(D,{defaultValue:["marketing"],name:"acknowledgments"},r.createElement(u,{value:"term"},r.createElement(m,null),r.createElement(h,null,"I agree to the terms and conditions.")),r.createElement(u,{value:"marketing"},r.createElement(m,null),r.createElement(h,null,"I agree to receive marketing communications.")))},O={tags:["!dev"],render:({})=>r.createElement(u,{invalid:!0},r.createElement(m,null),r.createElement(h,null,"Checkbox"))},R={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(u,null,r.createElement(m,null),r.createElement(h,null,"Checkbox"))},F={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(u,{checked:!1},r.createElement(m,null),r.createElement(h,null,"Unchecked")),r.createElement(u,{checked:!0},r.createElement(m,null),r.createElement(h,null,"Checked")),r.createElement(u,{checked:"indeterminate"},r.createElement(m,null),r.createElement(h,null,"Indeterminate")))};var J,Q,z;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(z=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:z.source}}};var Z,ee,te;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ie=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ue,me,he;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Checkbox invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(he=(me=O.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var be,ke,Ce;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const ht=["Demo","Default","Disabled","InFormField","Group","Invalid","Overview","States"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Default:L,Demo:N,Disabled:S,Group:_,InFormField:V,Invalid:O,Overview:R,States:F,__namedExportsOrder:ht,default:mt},Symbol.toStringTag,{value:"Module"}));export{Pt as C,L as D,_ as G,O as I,R as O,F as S,S as a,V as b};
