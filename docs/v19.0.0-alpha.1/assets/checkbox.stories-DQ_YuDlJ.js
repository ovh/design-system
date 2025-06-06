import{r as b,e as n}from"./index-D_CmzhJ4.js";import{j as l}from"./jsx-runtime-VM66peLj.js";import{c as fe}from"./index-CkQHsVsO.js";import{o as Oe,m as E,d as _,B as Se,C as v,Y as Le,b as Fe,q as Re,E as qe,Z as Ge,_ as De,$ as je,a0 as we,p as ve}from"./index-DDDhx9B2.js";import{i as He,t as Ae}from"./index-BdhGapat.js";import{c as Me,u as Xe,b as Ke,d as $e,a as Ye,n as Be}from"./use-locale-context-D9QOpgGs.js";import{u as ye,c as $}from"./OdsFormFieldLabel-DQU1mNMu.js";import{O as Y,a as B}from"./icon-name-CmqPEXVL.js";import{O as Ue,a as We}from"./OdsText-BABXFwFE.js";import{e as Ze,o as Je,C as A}from"./controls-BtiQQn1l.js";const[Qe,j]=Oe({name:"CheckboxContext",hookName:"useCheckboxContext",providerName:"<CheckboxProvider />"}),Ee=b.forwardRef((e,t)=>{const a=j(),o=E(a.getControlProps(),e);return l.jsx(_.div,{...o,ref:t})});Ee.displayName="CheckboxControl";var _e=Se("checkbox").parts("root","label","control","indicator"),G=_e.build(),Ve=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`checkbox:${e.id}`},U=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`checkbox:${e.id}:label`},ze=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`checkbox:${e.id}:control`},X=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`checkbox:${e.id}:input`},et=e=>e.getById(Ve(e)),V=e=>e.getById(X(e));function tt(e,t){const{send:a,context:o,prop:r,computed:c,scope:s}=e,d=r("disabled"),k=r("readOnly"),C=r("invalid"),g=!d&&o.get("focused"),f=!d&&o.get("focusVisible"),p=c("checked"),y=c("indeterminate"),O={"data-active":v(o.get("active")),"data-focus":v(g),"data-focus-visible":v(f),"data-readonly":v(k),"data-hover":v(o.get("hovered")),"data-disabled":v(d),"data-state":y?"indeterminate":p?"checked":"unchecked","data-invalid":v(C)};return{checked:p,disabled:d,indeterminate:y,focused:g,checkedState:p,setChecked(x){a({type:"CHECKED.SET",checked:x,isTrusted:!1})},toggleChecked(){a({type:"CHECKED.TOGGLE",checked:p,isTrusted:!1})},getRootProps(){return t.label({...G.root.attrs,...O,dir:r("dir"),id:Ve(s),htmlFor:X(s),onPointerMove(){d||a({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){d||a({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(x){Fe(x)===V(s)&&x.stopPropagation()}})},getLabelProps(){return t.element({...G.label.attrs,...O,dir:r("dir"),id:U(s)})},getControlProps(){return t.element({...G.control.attrs,...O,dir:r("dir"),id:ze(s),"aria-hidden":!0})},getIndicatorProps(){return t.element({...G.indicator.attrs,...O,dir:r("dir"),hidden:!y&&!p})},getHiddenInputProps(){return t.input({id:X(s),type:"checkbox",required:r("required"),defaultChecked:p,disabled:d,"aria-labelledby":U(s),"aria-invalid":C,name:r("name"),form:r("form"),value:r("value"),style:Le,onFocus(){const x=He();a({type:"CONTEXT.SET",context:{focused:!0,focusVisible:x}})},onBlur(){a({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(x){if(k){x.preventDefault();return}const w=x.currentTarget.checked;a({type:"CHECKED.SET",checked:w,isTrusted:!0})}})}}}var{not:W}=qe(),at=Re({props({props:e}){return{value:"on",...e,defaultChecked:!!e.defaultChecked}},initialState(){return"ready"},context({prop:e,bindable:t}){return{checked:t(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(a){var o;(o=e("onCheckedChange"))==null||o({checked:a})}})),fieldsetDisabled:t(()=>({defaultValue:!1})),focusVisible:t(()=>({defaultValue:!1})),active:t(()=>({defaultValue:!1})),focused:t(()=>({defaultValue:!1})),hovered:t(()=>({defaultValue:!1}))}},watch({track:e,context:t,prop:a,action:o}){e([()=>a("disabled")],()=>{o(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{o(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:W("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:W("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},computed:{indeterminate:({context:e})=>D(e.get("checked")),checked:({context:e})=>nt(e.get("checked")),disabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled")},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({context:e,computed:t,scope:a}){if(!t("disabled"))return we({pointerNode:et(a),keyboardNode:V(a),isValidKey:o=>o.key===" ",onPress:()=>e.set("active",!1),onPressStart:()=>e.set("active",!0),onPressEnd:()=>e.set("active",!1)})},trackFocusVisible({computed:e,scope:t}){var a;if(!e("disabled"))return Ae({root:(a=t.getRootNode)==null?void 0:a.call(t)})},trackFormControlState({context:e,scope:t}){return je(V(t),{onFieldsetDisabledChange(a){e.set("fieldsetDisabled",a)},onFormReset(){e.set("checked",e.initial("checked"))}})}},actions:{setContext({context:e,event:t}){for(const a in t.context)e.set(a,t.context[a])},syncInputElement({context:e,computed:t,scope:a}){const o=V(a);o&&(De(o,t("checked")),o.indeterminate=D(e.get("checked")))},removeFocusIfNeeded({context:e,prop:t}){t("disabled")&&e.get("focused")&&(e.set("focused",!1),e.set("focusVisible",!1))},setChecked({context:e,event:t}){e.set("checked",t.checked)},toggleChecked({context:e,computed:t}){const a=D(t("checked"))?!0:!t("checked");e.set("checked",a)},dispatchChangeEvent({computed:e,scope:t}){queueMicrotask(()=>{const a=V(t);Ge(a,{checked:e("checked")})})}}}});function D(e){return e==="indeterminate"}function nt(e){return D(e)?!1:!!e}Me()(["defaultChecked","checked","dir","disabled","form","getRootNode","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]);const ot=_e.extendWith("group");function rt(e){const{value:t,onChange:a,defaultValue:o}=e,[r,c]=b.useState(o),s=t!==void 0,d=s?t:r,k=b.useCallback(C=>(s||c(C),a==null?void 0:a(C)),[s,a]);return[d,k]}function st(e={}){const{defaultValue:t,value:a,onValueChange:o,disabled:r,readOnly:c,name:s,invalid:d}=e,k=!(r||c),C=Xe(o,{sync:!0}),[g,f]=rt({value:a,defaultValue:t||[],onChange:C}),p=m=>g.some(H=>String(H)===String(m)),y=m=>{p(m)?x(m):O(m)},O=m=>{k&&(p(m)||f(g.concat(m)))},x=m=>{k&&f(g.filter(H=>String(H)!==String(m)))};return{isChecked:p,value:g,name:s,disabled:!!r,readOnly:!!c,invalid:!!d,setValue:f,addValue:O,toggleValue:y,getItemProps:m=>({checked:m.value!=null?p(m.value):void 0,onCheckedChange(){m.value!=null&&y(m.value)},name:s,disabled:r,readOnly:c,invalid:d})}}const[ct,dt]=Oe({name:"CheckboxGroupContext",hookName:"useCheckboxGroupContext",providerName:"<CheckboxGroupProvider />",strict:!1}),Te=b.forwardRef((e,t)=>{const[a,o]=ve()(e,["defaultValue","value","onValueChange","disabled","invalid","readOnly","name"]),r=st(a);return l.jsx(ct,{value:r,children:l.jsx(_.div,{ref:t,role:"group",...o,...ot.build().group.attrs})})});Te.displayName="CheckboxGroup";const Ie=b.forwardRef((e,t)=>{const a=j(),o=E(a.getHiddenInputProps(),e),r=ye();return l.jsx(_.input,{"aria-describedby":r==null?void 0:r.ariaDescribedby,...o,ref:t})});Ie.displayName="CheckboxHiddenInput";const K=b.forwardRef((e,t)=>{const{indeterminate:a,...o}=e,r=j(),c=E(r.getIndicatorProps(),o),s=a?r.indeterminate:r.checked;return l.jsx(_.div,{...c,hidden:!s,ref:t})});K.displayName="CheckboxIndicator";const Ne=b.forwardRef((e,t)=>{const a=j(),o=E(a.getLabelProps(),e);return l.jsx(_.span,{...o,ref:t})});Ne.displayName="CheckboxLabel";const lt=(e={})=>{const t=dt(),a=ye(),o=b.useMemo(()=>E(e,(t==null?void 0:t.getItemProps({value:e.value}))??{}),[e,t]),r=b.useId(),{getRootNode:c}=Ke(),{dir:s}=$e(),d={id:r,ids:{label:a==null?void 0:a.ids.label,hiddenInput:a==null?void 0:a.ids.control},dir:s,disabled:a==null?void 0:a.disabled,readOnly:a==null?void 0:a.readOnly,invalid:a==null?void 0:a.invalid,required:a==null?void 0:a.required,getRootNode:c,...o},k=Ye(at,d);return tt(k,Be)},Pe=b.forwardRef((e,t)=>{const[a,o]=ve()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]),r=lt(a),c=E(r.getRootProps(),o);return l.jsx(Qe,{value:r,children:l.jsx(_.label,{...c,ref:t})})});Pe.displayName="CheckboxRoot";const it={"ods-checkbox":"_ods-checkbox_1b9dq_1"},i=b.forwardRef(({checked:e,children:t,className:a,defaultChecked:o,disabled:r,invalid:c,name:s,onCheckedChange:d,required:k,value:C,...g},f)=>l.jsx(Pe,{checked:e,className:fe(it["ods-checkbox"],a),defaultChecked:o,disabled:r,invalid:c,name:s,onCheckedChange:d,ref:f,required:k,value:C,...g,children:t}));i.displayName="OdsCheckbox";try{i.displayName="OdsCheckbox",i.__docgenInfo={description:"",displayName:"OdsCheckbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"OdsCheckboxCheckedState"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onCheckedChange:{defaultValue:null,description:"",name:"onCheckedChange",required:!1,type:{name:"((details: OdsCheckboxCheckedChangeDetail) => void)"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}}}catch{}const M={"ods-checkbox-control":"_ods-checkbox-control_16kwr_1","ods-checkbox-control__icon":"_ods-checkbox-control__icon_16kwr_43"},u=b.forwardRef(({className:e,...t},a)=>l.jsxs(Ee,{className:fe(M["ods-checkbox-control"],e),ref:a,...t,children:[l.jsx(K,{children:l.jsx(Y,{className:M["ods-checkbox-control__icon"],name:B.check})}),l.jsx(K,{indeterminate:!0,children:l.jsx(Y,{className:M["ods-checkbox-control__icon"],name:B.minus})}),l.jsx(Ie,{})]}));u.displayName="OdsCheckboxControl";try{u.displayName="OdsCheckboxControl",u.__docgenInfo={description:"",displayName:"OdsCheckboxControl",props:{}}}catch{}const q=b.forwardRef(({children:e,defaultValue:t,disabled:a,invalid:o,name:r,onValueChange:c,readOnly:s,value:d,...k},C)=>l.jsx(Te,{defaultValue:t,disabled:a,invalid:o,name:r,onValueChange:c,readOnly:s,ref:C,value:d,...k,children:e}));q.displayName="OdsCheckboxGroup";try{q.displayName="OdsCheckboxGroup",q.__docgenInfo={description:"",displayName:"OdsCheckboxGroup",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string[]) => void)"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}}}}}catch{}const h=b.forwardRef(({children:e,...t},a)=>l.jsx(Ne,{ref:a,...t,children:e}));h.displayName="OdsCheckboxLabel";try{h.displayName="OdsCheckboxLabel",h.__docgenInfo={description:"",displayName:"OdsCheckboxLabel",props:{}}}catch{}const ut={argTypes:Ze(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:i,subcomponents:{OdsCheckboxControl:u,OdsCheckboxGroup:q,OdsCheckboxLabel:h},title:"ODS Components/Form elements/Checkbox"},T={render:e=>n.createElement(i,{disabled:e.disabled,invalid:e.invalid},n.createElement(u,null),n.createElement(h,null,e.label)),argTypes:Je({disabled:{table:{category:A.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:A.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:A.slot,defaultValue:{summary:"ø"}},control:"text"}}),args:{label:"My checkbox"}},I={tags:["!dev"],render:({})=>n.createElement(i,null,n.createElement(u,null))},N={tags:["!dev"],render:({})=>n.createElement(i,{disabled:!0},n.createElement(u,null),n.createElement(h,null,"Checkbox"))},P={tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(Ue,{preset:We.label},"Legal considerations:"),n.createElement($,null,n.createElement(i,null,n.createElement(u,null),n.createElement(h,null,"I agree to the terms and conditions."))),n.createElement($,null,n.createElement(i,null,n.createElement(u,null),n.createElement(h,null,"I agree to receive marketing communications."))))},S={tags:["!dev"],render:({})=>n.createElement(q,{defaultValue:["marketing"],name:"acknowledgments"},n.createElement(i,{value:"term"},n.createElement(u,null),n.createElement(h,null,"I agree to the terms and conditions.")),n.createElement(i,{value:"marketing"},n.createElement(u,null),n.createElement(h,null,"I agree to receive marketing communications.")))},L={tags:["!dev"],render:({})=>n.createElement(i,{invalid:!0},n.createElement(u,null),n.createElement(h,null,"Checkbox"))},F={tags:["!dev"],parameters:{layout:"centered"},render:({})=>n.createElement(i,null,n.createElement(u,null),n.createElement(h,null,"Checkbox"))},R={tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(i,{checked:!1},n.createElement(u,null),n.createElement(h,null,"Unchecked")),n.createElement(i,{checked:!0},n.createElement(u,null),n.createElement(h,null,"Checked")),n.createElement(i,{checked:"indeterminate"},n.createElement(u,null),n.createElement(h,null,"Indeterminate")))};var Z,J,Q;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <OdsCheckbox disabled={arg.disabled} invalid={arg.invalid}>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        {arg.label}
      </OdsCheckboxLabel>
    </OdsCheckbox>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    }
  }),
  args: {
    label: 'My checkbox'
  }
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var z,ee,te;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsCheckbox>
      <OdsCheckboxControl />
    </OdsCheckbox>
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,oe;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsCheckbox disabled>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Checkbox
      </OdsCheckboxLabel>
    </OdsCheckbox>
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,ce;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsText preset={ODS_TEXT_PRESET.label}>
        Legal considerations:
      </OdsText>

      <OdsFormField>
        <OdsCheckbox>
          <OdsCheckboxControl />

          <OdsCheckboxLabel>
            I agree to the terms and conditions.
          </OdsCheckboxLabel>
        </OdsCheckbox>
      </OdsFormField>

      <OdsFormField>
        <OdsCheckbox>
          <OdsCheckboxControl />

          <OdsCheckboxLabel>
            I agree to receive marketing communications.
          </OdsCheckboxLabel>
        </OdsCheckbox>
      </OdsFormField>
    </>
}`,...(ce=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,le,ie;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsCheckboxGroup defaultValue={['marketing']} name="acknowledgments">
      <OdsCheckbox value="term">
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          I agree to the terms and conditions.
        </OdsCheckboxLabel>
      </OdsCheckbox>

      <OdsCheckbox value="marketing">
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          I agree to receive marketing communications.
        </OdsCheckboxLabel>
      </OdsCheckbox>
    </OdsCheckboxGroup>
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,me,he;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsCheckbox invalid>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Checkbox
      </OdsCheckboxLabel>
    </OdsCheckbox>
}`,...(he=(me=L.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var be,ke,Ce;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsCheckbox>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Checkbox
      </OdsCheckboxLabel>
    </OdsCheckbox>
}`,...(Ce=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var pe,xe,ge;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsCheckbox checked={false}>
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          Unchecked
        </OdsCheckboxLabel>
      </OdsCheckbox>

      <OdsCheckbox checked={true}>
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          Checked
        </OdsCheckboxLabel>
      </OdsCheckbox>

      <OdsCheckbox checked="indeterminate">
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          Indeterminate
        </OdsCheckboxLabel>
      </OdsCheckbox>
    </>
}`,...(ge=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const mt=["Demo","Default","Disabled","FormField","Group","Invalid","Overview","States"],yt=Object.freeze(Object.defineProperty({__proto__:null,Default:I,Demo:T,Disabled:N,FormField:P,Group:S,Invalid:L,Overview:F,States:R,__namedExportsOrder:mt,default:ut},Symbol.toStringTag,{value:"Module"}));export{yt as C,I as D,P as F,S as G,L as I,F as O,R as S,N as a};
