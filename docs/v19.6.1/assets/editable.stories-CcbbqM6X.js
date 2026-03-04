import{r as i,e}from"./index-jIWwRBLr.js";import{B as v,d as B,c as h}from"./Button-B-GJ-1TA.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as F}from"./index-CqY9YpN0.js";import{u as Ee}from"./context-C_-r2uoG.js";import{A as O}from"./AsChild-BQZQcPff.js";import{L as r,u as z}from"./useI18n-C0NLVYPv.js";import{a as U}from"./colors-DSObuHxd.js";import{I as L,a as P}from"./icon-name-DsSs6qF8.js";import{F as fe}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{I as C}from"./Input-DA8_WQMf.js";import{b as ge,S as ye,a as ve}from"./SelectControl-pvB5wLEQ.js";import{T as he}from"./Textarea-di6qQWES.js";import{e as Ce}from"./controls-BtiQQn1l.js";import{s as j}from"./source-CPEZJ6oD.js";const me=i.createContext(void 0);function pe({children:t,defaultEditing:n,editing:a,i18n:l,locale:s,onCancel:u,onEditChange:c,onSubmit:d}){const m=i.useRef(!1),[g,q]=i.useState(n??!1),be=typeof a=="boolean";return i.useEffect(()=>{if(!m.current){m.current=!0;return}c==null||c({editing:g})},[g,c]),o.jsx(me.Provider,{value:{i18n:l,isEditing:be?a:g,locale:s,onCancel:u,onEditChange:c,onSubmit:d,setIsEditing:q},children:t})}function S(){return Ee(me)}pe.__docgenInfo={description:"",methods:[],displayName:"EditableProvider",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Se="_editable_ofz27_2",De={editable:Se},p=i.forwardRef(({children:t,className:n,defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,...g},q)=>o.jsx(pe,{defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,children:o.jsx("div",{className:F(De.editable,n),"data-ods":"editable",ref:q,...g,children:t})}));p.displayName="Editable";p.__docgenInfo={description:"",methods:[],displayName:"Editable",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."}},composes:["Omit"]};var k=(t=>(t.cancelButton="editable.actions.cancel.button",t.editButton="editable.actions.edit.button",t.submitButton="editable.actions.submit.button",t))(k||{});const Z={"editable.actions.cancel.button":{[r.de]:"Abbrechen",[r.en]:"Cancel",[r.es]:"Cancelar",[r.fr]:"Annuler",[r.it]:"Annulla",[r.nl]:"Annuleren",[r.pl]:"Anuluj",[r.pt]:"Cancelar"},"editable.actions.edit.button":{[r.de]:"Bearbeiten",[r.en]:"Edit",[r.es]:"Editar",[r.fr]:"Modifier",[r.it]:"Modifica",[r.nl]:"Bewerken",[r.pl]:"Edytuj",[r.pt]:"Editar"},"editable.actions.submit.button":{[r.de]:"Einreichen",[r.en]:"Submit",[r.es]:"Enviar",[r.fr]:"Envoyer",[r.it]:"Invia",[r.nl]:"Indienen",[r.pl]:"Zatwierdź",[r.pt]:"Enviar"}},N=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,onCancel:u,setIsEditing:c}=S(),{translate:d}=z(Z,s,l),m={"aria-label":d(k.cancelButton),onClick:g,ref:a};function g(){c(!1),u==null||u()}return t?o.jsx(O,{...m,...n}):o.jsx(v,{color:U.neutral,size:h.sm,variant:B.ghost,...m,...n,children:o.jsx(L,{name:P.xmark})})});N.displayName="EditableCancelTrigger";N.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableCancelTrigger"};const R=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,setIsEditing:u}=S(),{translate:c}=z(Z,s,l),d={"aria-label":c(k.editButton),onClick:m,ref:a};function m(){u(!0)}return t?o.jsx(O,{...d,...n}):o.jsx(v,{color:U.primary,size:h.sm,variant:B.ghost,...d,...n,children:o.jsx(L,{name:P.pen})})});R.displayName="EditableEditTrigger";R.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableEditTrigger"};const w=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,onSubmit:u,setIsEditing:c}=S(),{translate:d}=z(Z,s,l),m={"aria-label":d(k.submitButton),onClick:g,ref:a};function g(){c(!1),u==null||u()}return t?o.jsx(O,{...m,...n}):o.jsx(v,{color:U.primary,size:h.sm,variant:B.ghost,...m,...n,children:o.jsx(L,{name:P.check})})});w.displayName="EditableSubmitTrigger";w.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableSubmitTrigger"};const Ie=({isEditing:t})=>t?o.jsxs(o.Fragment,{children:[o.jsx(w,{}),o.jsx(N,{})]}):o.jsx(R,{}),b=i.forwardRef(({children:t,className:n,...a},l)=>{const{isEditing:s}=S();return o.jsx("div",{className:n,ref:l,...a,children:t&&typeof t=="function"?t({editing:s}):o.jsx(Ie,{isEditing:s})})});b.displayName="EditableActions";b.__docgenInfo={description:"",methods:[],displayName:"EditableActions",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { editing: boolean }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ editing: boolean }",signature:{properties:[{key:"editing",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Custom actions render function, that provides Editable current state."}},composes:["Omit"]};const $={"editable-display":"_editable-display_1ahob_2","editable-display--hidden":"_editable-display--hidden_1ahob_7"},E=i.forwardRef(({className:t,...n},a)=>{const{isEditing:l,setIsEditing:s}=S();return o.jsx("div",{className:F($["editable-display"],t,{[$["editable-display--hidden"]]:l}),"data-ods":"editable-display",onDoubleClick:()=>s(!0),ref:a,...n})});E.displayName="EditableDisplay";E.__docgenInfo={description:"",methods:[],displayName:"EditableDisplay",composes:["ComponentPropsWithRef"]};const Ve={"editable-display-empty":"_editable-display-empty_17eyf_2"},y=i.forwardRef(({className:t,...n},a)=>o.jsx("span",{className:F(Ve["editable-display-empty"],t),"data-ods":"editable-display-empty",ref:a,...n}));y.displayName="EditableDisplayEmpty";y.__docgenInfo={description:"",methods:[],displayName:"EditableDisplayEmpty",composes:["ComponentPropsWithRef"]};const Te={"editable-input":"_editable-input_14rnc_2"},f=i.forwardRef(({className:t,...n},a)=>{const{isEditing:l}=S();return l?o.jsx("div",{className:F(Te["editable-input"],t),"data-ods":"editable-input",ref:a,...n}):o.jsx(o.Fragment,{})});f.displayName="EditableInput";f.__docgenInfo={description:"",methods:[],displayName:"EditableInput",composes:["ComponentPropsWithRef"]};const Ae={argTypes:Ce(["defaultEditing","editing","i18n","locale","onCancel","onEditChange","onSubmit"]),component:p,subcomponents:{EditableActions:b,EditableCancelTrigger:N,EditableDisplay:E,EditableDisplayEmpty:y,EditableEditTrigger:R,EditableInput:f,EditableSubmitTrigger:w},tags:["new"],title:"React Components/Editable"},D={render:()=>{const[t,n]=i.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),a=i.useRef(t);return e.createElement(p,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current),style:{display:"flex"}},e.createElement(E,null,e.createElement("p",{style:{margin:0}},t||e.createElement(y,null,"Empty value"))),e.createElement(f,{style:{flex:"1 1 0"}},e.createElement(he,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value,style:{resize:"vertical",width:"100%"}})),e.createElement(b,null))}},I={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, FormField, Input, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState(""),[a,l]=i.useState(""),[s,u]=i.useState("");function c(){const[d,m]=t.split("@ovhcloud");l(d||""),u(m||"")}return e.createElement(p,{onCancel:c,onSubmit:()=>n(`${a}@ovhcloud${s}`)},e.createElement(E,null,t||e.createElement(y,null,"Account name")),e.createElement(f,null,e.createElement(fe,{style:{display:"flex",flexFlow:"row",alignItems:"center",columnGap:"8px"}},e.createElement(C,{name:"account-name",onChange:d=>l(d.target.value),pattern:"^([a-zA-Z0-9]|([._\\-](?![._\\-])))*[a-zA-Z0-9]$",placeholder:"Account name",value:a}),e.createElement("span",null,"@ovhcloud"),e.createElement(ge,{items:[{label:".fr",value:".fr"},{label:".com",value:".com"},{label:".dev",value:".dev"}],name:"domain",onValueChange:({value:d})=>u(d[0]),value:s?[s]:[]},e.createElement(ye,{placeholder:"Select domain"}),e.createElement(ve,null)))),e.createElement(b,null))}},V={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),[a,l]=i.useState(t);return e.createElement(p,{onCancel:()=>l(t),onSubmit:()=>n(a)},e.createElement(E,null,t||e.createElement(y,null,"Empty value")),e.createElement(f,null,e.createElement(C,{autoFocus:!0,onChange:s=>l(s.target.value),value:a})),e.createElement(b,null))}},T={globals:{imports:`import { BUTTON_SIZE, BUTTON_VARIANT, Button, Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(p,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(E,null,t||e.createElement(y,null,"Empty value")),e.createElement(f,null,e.createElement(C,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(b,null,({editing:l})=>l?e.createElement(e.Fragment,null,e.createElement(w,{asChild:!0},e.createElement(v,{size:h.sm},"Submit")),e.createElement(N,{asChild:!0},e.createElement(v,{size:h.sm,variant:B.outline},"Cancel"))):e.createElement(R,{asChild:!0},e.createElement(v,{size:h.sm},"Edit"))))}},A={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(p,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(E,null,t||e.createElement(y,null,"Empty value")),e.createElement(f,null,e.createElement(C,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(b,null))}},_={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(p,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(E,null,t||e.createElement(y,null,"Empty value")),e.createElement(f,null,e.createElement(C,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(b,null))}},x={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(E,null,"Some node"),e.createElement(f,null,e.createElement(C,{autoFocus:!0,defaultValue:"Some node"})),e.createElement(b,null))};var M,G,W;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
    const bufferValue = useRef(value);
    return <Editable onCancel={() => bufferValue.current = value} onSubmit={() => setValue(bufferValue.current)} style={{
      display: 'flex'
    }}>
        <EditableDisplay>
          <p style={{
          margin: 0
        }}>
            {value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty>}
          </p>
        </EditableDisplay>

        <EditableInput style={{
        flex: '1 1 0'
      }}>
          <Textarea autoFocus defaultValue={value} onChange={e => bufferValue.current = e.target.value} style={{
          resize: 'vertical',
          width: '100%'
        }} />
        </EditableInput>

        <EditableActions />
      </Editable>;
  }
}`,...(W=(G=D.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var H,J,K;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, FormField, Input, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const [displayValue, setDisplayValue] = useState('');
    const [accountValue, setAccountValue] = useState('');
    const [domainValue, setDomainValue] = useState('');
    function onCancel(): void {
      const [account, domain] = displayValue.split('@ovhcloud');
      setAccountValue(account || '');
      setDomainValue(domain || '');
    }
    return <Editable onCancel={onCancel} onSubmit={() => setDisplayValue(\`\${accountValue}@ovhcloud\${domainValue}\`)}>
        <EditableDisplay>
          {displayValue || <EditableDisplayEmpty>Account name</EditableDisplayEmpty>}
        </EditableDisplay>

        <EditableInput>
          <FormField style={{
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          columnGap: '8px'
        }}>
            <Input name="account-name" onChange={e => setAccountValue(e.target.value)} pattern="^([a-zA-Z0-9]|([._\\-](?![._\\-])))*[a-zA-Z0-9]$" placeholder="Account name" value={accountValue} />

            <span>
              @ovhcloud
            </span>

            <Select items={[{
            label: '.fr',
            value: '.fr'
          }, {
            label: '.com',
            value: '.com'
          }, {
            label: '.dev',
            value: '.dev'
          }]} name="domain" onValueChange={({
            value
          }) => setDomainValue(value[0])} value={domainValue ? [domainValue] : []}>
              <SelectControl placeholder="Select domain" />

              <SelectContent />
            </Select>
          </FormField>
        </EditableInput>

        <EditableActions />
      </Editable>;
  }
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const [displayValue, setDisplayValue] = useState('Double click to edit');
    const [value, setValue] = useState(displayValue);
    return <Editable onCancel={() => setValue(displayValue)} onSubmit={() => setDisplayValue(value)}>
        <EditableDisplay>
          {displayValue || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty>}
        </EditableDisplay>

        <EditableInput>
          <Input autoFocus onChange={e => setValue(e.target.value)} value={value} />
        </EditableInput>

        <EditableActions />
      </Editable>;
  }
}`,...(Y=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,ae;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_SIZE, BUTTON_VARIANT, Button, Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const [value, setValue] = useState('Double click to edit');
    const bufferValue = useRef(value);
    return <Editable onCancel={() => bufferValue.current = value} onSubmit={() => setValue(bufferValue.current)}>
        <EditableDisplay>
          {value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty>}
        </EditableDisplay>

        <EditableInput>
          <Input autoFocus defaultValue={value} onChange={e => bufferValue.current = e.target.value} />
        </EditableInput>

        <EditableActions>
          {({
          editing
        }) => editing ? <>
                  <EditableSubmitTrigger asChild>
                    <Button size={BUTTON_SIZE.sm}>Submit</Button>
                  </EditableSubmitTrigger>

                  <EditableCancelTrigger asChild>
                    <Button size={BUTTON_SIZE.sm} variant={BUTTON_VARIANT.outline}>Cancel</Button>
                  </EditableCancelTrigger>
                </> : <EditableEditTrigger asChild>
                  <Button size={BUTTON_SIZE.sm}>Edit</Button>
                </EditableEditTrigger>}
        </EditableActions>
      </Editable>;
  }
}`,...(ae=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,le,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const [value, setValue] = useState('Double click to edit');
    const bufferValue = useRef(value);
    return <Editable onCancel={() => bufferValue.current = value} onSubmit={() => setValue(bufferValue.current)}>
        <EditableDisplay>
          {value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty>}
        </EditableDisplay>

        <EditableInput>
          <Input autoFocus defaultValue={value} onChange={e => bufferValue.current = e.target.value} />
        </EditableInput>

        <EditableActions />
      </Editable>;
  }
}`,...(ie=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var re,oe,se;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => {
    const [value, setValue] = useState('Double click to edit');
    const bufferValue = useRef(value);
    return <Editable onCancel={() => bufferValue.current = value} onSubmit={() => setValue(bufferValue.current)}>
        <EditableDisplay>
          {value || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty>}
        </EditableDisplay>

        <EditableInput>
          <Input autoFocus defaultValue={value} onChange={e => bufferValue.current = e.target.value} />
        </EditableInput>

        <EditableActions />
      </Editable>;
  }
}`,...(se=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ue,de,ce;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <Editable>
      <EditableDisplay>
        Some node
      </EditableDisplay>

      <EditableInput>
        <Input autoFocus defaultValue="Some node" />
      </EditableInput>

      <EditableActions />
    </Editable>
}`,...(ce=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const _e=["Demo","ComplexFormElement","Controlled","CustomActions","Default","Overview","ThemeGenerator"],$e=Object.freeze(Object.defineProperty({__proto__:null,ComplexFormElement:I,Controlled:V,CustomActions:T,Default:A,Demo:D,Overview:_,ThemeGenerator:x,__namedExportsOrder:_e,default:Ae},Symbol.toStringTag,{value:"Module"}));export{V as C,A as D,$e as E,_ as O,T as a,I as b};
