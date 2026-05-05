import{r as i,e}from"./index-jIWwRBLr.js";import{B as h,d as F,c as C}from"./Button-B-GJ-1TA.js";import{D as he,f as Ce}from"./divider-color-2AUX7hAv.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as j}from"./index-CqY9YpN0.js";import{u as Se}from"./context-C_-r2uoG.js";import{A as z}from"./AsChild-BQZQcPff.js";import{L as r,u as U}from"./useI18n-C0NLVYPv.js";import{a as P}from"./colors-DSObuHxd.js";import{I as L,a as $}from"./icon-name-D0KNfDOz.js";import{F as De}from"./index-B0M5RXeR.js";import{I as v}from"./Input-CsaVjqar.js";import{b as Ie,S as Ve,a as Te}from"./index-onrz60cw.js";import{T as Ae}from"./Textarea-1HJNDjsP.js";import{e as _e}from"./controls-BtiQQn1l.js";import{s as O}from"./source-CPEZJ6oD.js";const fe=i.createContext(void 0);function ye({children:t,defaultEditing:n,editing:a,i18n:l,locale:s,onCancel:u,onEditChange:c,onSubmit:d}){const m=i.useRef(!1),[y,q]=i.useState(n??!1),ve=typeof a=="boolean";return i.useEffect(()=>{if(!m.current){m.current=!0;return}c==null||c({editing:y})},[y,c]),o.jsx(fe.Provider,{value:{i18n:l,isEditing:ve?a:y,locale:s,onCancel:u,onEditChange:c,onSubmit:d,setIsEditing:q},children:t})}function S(){return Se(fe)}ye.__docgenInfo={description:"",methods:[],displayName:"EditableProvider",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ne="_editable_ofz27_2",xe={editable:Ne},Z=i.forwardRef(({children:t,className:n,defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,...y},q)=>o.jsx(ye,{defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,children:o.jsx("div",{className:j(xe.editable,n),"data-ods":"editable",ref:q,...y,children:t})}));Z.displayName="Editable";Z.__docgenInfo={description:"",methods:[],displayName:"Editable",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."}},composes:["Omit"]};var k=(t=>(t.cancelButton="editable.actions.cancel.button",t.editButton="editable.actions.edit.button",t.submitButton="editable.actions.submit.button",t))(k||{});const G={"editable.actions.cancel.button":{[r.de]:"Abbrechen",[r.en]:"Cancel",[r.es]:"Cancelar",[r.fr]:"Annuler",[r.it]:"Annulla",[r.nl]:"Annuleren",[r.pl]:"Anuluj",[r.pt]:"Cancelar"},"editable.actions.edit.button":{[r.de]:"Bearbeiten",[r.en]:"Edit",[r.es]:"Editar",[r.fr]:"Modifier",[r.it]:"Modifica",[r.nl]:"Bewerken",[r.pl]:"Edytuj",[r.pt]:"Editar"},"editable.actions.submit.button":{[r.de]:"Einreichen",[r.en]:"Submit",[r.es]:"Enviar",[r.fr]:"Envoyer",[r.it]:"Invia",[r.nl]:"Indienen",[r.pl]:"Zatwierdź",[r.pt]:"Enviar"}},D=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,onCancel:u,setIsEditing:c}=S(),{translate:d}=U(G,s,l),m={"aria-label":d(k.cancelButton),"data-ods":"editable-cancel-trigger",onClick:y,ref:a};function y(){c(!1),u==null||u()}return t?o.jsx(z,{...m,...n}):o.jsx(h,{color:P.neutral,size:C.sm,variant:F.ghost,...m,...n,children:o.jsx(L,{name:$.xmark})})});D.displayName="EditableCancelTrigger";D.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableCancelTrigger"};const I=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,setIsEditing:u}=S(),{translate:c}=U(G,s,l),d={"aria-label":c(k.editButton),"data-ods":"editable-edit-trigger",onClick:m,ref:a};function m(){u(!0)}return t?o.jsx(z,{...d,...n}):o.jsx(h,{color:P.primary,size:C.sm,variant:F.ghost,...d,...n,children:o.jsx(L,{name:$.pen})})});I.displayName="EditableEditTrigger";I.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableEditTrigger"};const V=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,onSubmit:u,setIsEditing:c}=S(),{translate:d}=U(G,s,l),m={"aria-label":d(k.submitButton),"data-ods":"editable-submit-trigger",onClick:y,ref:a};function y(){c(!1),u==null||u()}return t?o.jsx(z,{...m,...n}):o.jsx(h,{color:P.primary,size:C.sm,variant:F.ghost,...m,...n,children:o.jsx(L,{name:$.check})})});V.displayName="EditableSubmitTrigger";V.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableSubmitTrigger"};const Re=({isEditing:t})=>t?o.jsxs(o.Fragment,{children:[o.jsx(V,{}),o.jsx(D,{})]}):o.jsx(I,{}),p=i.forwardRef(({children:t,className:n,...a},l)=>{const{isEditing:s}=S();return o.jsx("div",{className:n,"data-ods":"editable-actions",ref:l,...a,children:t&&typeof t=="function"?t({editing:s}):o.jsx(Re,{isEditing:s})})});p.displayName="EditableActions";p.__docgenInfo={description:"",methods:[],displayName:"EditableActions",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { editing: boolean }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ editing: boolean }",signature:{properties:[{key:"editing",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Custom actions render function, that provides Editable current state."}},composes:["Omit"]};const M={"editable-display":"_editable-display_1ahob_2","editable-display--hidden":"_editable-display--hidden_1ahob_7"},E=i.forwardRef(({className:t,...n},a)=>{const{isEditing:l,setIsEditing:s}=S();return o.jsx("div",{className:j(M["editable-display"],t,{[M["editable-display--hidden"]]:l}),"data-ods":"editable-display",onDoubleClick:()=>s(!0),ref:a,...n})});E.displayName="EditableDisplay";E.__docgenInfo={description:"",methods:[],displayName:"EditableDisplay",composes:["ComponentPropsWithRef"]};const we={"editable-display-empty":"_editable-display-empty_17eyf_2"},g=i.forwardRef(({className:t,...n},a)=>o.jsx("span",{className:j(we["editable-display-empty"],t),"data-ods":"editable-display-empty",ref:a,...n}));g.displayName="EditableDisplayEmpty";g.__docgenInfo={description:"",methods:[],displayName:"EditableDisplayEmpty",composes:["ComponentPropsWithRef"]};const Be={"editable-input":"_editable-input_14rnc_2"},b=i.forwardRef(({className:t,...n},a)=>{const{isEditing:l}=S();return l?o.jsx("div",{className:j(Be["editable-input"],t),"data-ods":"editable-input",ref:a,...n}):o.jsx(o.Fragment,{})});b.displayName="EditableInput";b.__docgenInfo={description:"",methods:[],displayName:"EditableInput",composes:["ComponentPropsWithRef"]};const f=Object.assign(Z,{Actions:p,CancelTrigger:D,Display:E,DisplayEmpty:g,EditTrigger:I,Input:b,SubmitTrigger:V}),Fe={argTypes:_e(["defaultEditing","editing","i18n","locale","onCancel","onEditChange","onSubmit"]),component:f,subcomponents:{EditableActions:p,EditableCancelTrigger:D,EditableDisplay:E,EditableDisplayEmpty:g,EditableEditTrigger:I,EditableInput:b,EditableSubmitTrigger:V},title:"React Components/Editable"},T={render:()=>{const[t,n]=i.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),a=i.useRef(t);return e.createElement(f,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current),style:{display:"flex"}},e.createElement(E,null,e.createElement("p",{style:{margin:0}},t||e.createElement(g,null,"Empty value"))),e.createElement(b,{style:{flex:"1 1 0"}},e.createElement(Ae,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value,style:{resize:"vertical",width:"100%"}})),e.createElement(p,null))}},A={tags:["!dev"],render:({})=>e.createElement("div",null,e.createElement(f,{editing:!1},e.createElement(E,null,e.createElement(g,null,"Empty value")),e.createElement(p,null)),e.createElement(he,{spacing:Ce._16}),e.createElement(f,{editing:!0},e.createElement(b,null,e.createElement(v,null)),e.createElement(p,null)))},_={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, FormField, Input, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...O()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState(""),[a,l]=i.useState(""),[s,u]=i.useState("");function c(){const[d,m]=t.split("@ovhcloud");l(d||""),u(m||"")}return e.createElement(f,{onCancel:c,onSubmit:()=>n(`${a}@ovhcloud${s}`)},e.createElement(E,null,t||e.createElement(g,null,"Account name")),e.createElement(b,null,e.createElement(De,{style:{display:"flex",flexFlow:"row",alignItems:"center",columnGap:"8px"}},e.createElement(v,{name:"account-name",onChange:d=>l(d.target.value),pattern:"^([a-zA-Z0-9]|([._\\-](?![._\\-])))*[a-zA-Z0-9]$",placeholder:"Account name",value:a}),e.createElement("span",null,"@ovhcloud"),e.createElement(Ie,{items:[{label:".fr",value:".fr"},{label:".com",value:".com"},{label:".dev",value:".dev"}],name:"domain",onValueChange:({value:d})=>u(d[0]),value:s?[s]:[]},e.createElement(Ve,{placeholder:"Select domain"}),e.createElement(Te,null)))),e.createElement(p,null))}},N={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...O()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),[a,l]=i.useState(t);return e.createElement(f,{onCancel:()=>l(t),onSubmit:()=>n(a)},e.createElement(E,null,t||e.createElement(g,null,"Empty value")),e.createElement(b,null,e.createElement(v,{autoFocus:!0,onChange:s=>l(s.target.value),value:a})),e.createElement(p,null))}},x={globals:{imports:`import { BUTTON_SIZE, BUTTON_VARIANT, Button, Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...O()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(f,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(E,null,t||e.createElement(g,null,"Empty value")),e.createElement(b,null,e.createElement(v,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(p,null,({editing:l})=>l?e.createElement(e.Fragment,null,e.createElement(V,{asChild:!0},e.createElement(h,{size:C.sm},"Submit")),e.createElement(D,{asChild:!0},e.createElement(h,{size:C.sm,variant:F.outline},"Cancel"))):e.createElement(I,{asChild:!0},e.createElement(h,{size:C.sm},"Edit"))))}},R={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...O()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(f,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(E,null,t||e.createElement(g,null,"Empty value")),e.createElement(b,null,e.createElement(v,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(p,null))}},w={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(f,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(E,null,t||e.createElement(g,null,"Empty value")),e.createElement(b,null,e.createElement(v,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(p,null))}},B={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(f,null,e.createElement(E,null,"Some node"),e.createElement(b,null,e.createElement(v,{autoFocus:!0,defaultValue:"Some node"})),e.createElement(p,null))};var W,H,J;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div>
      <Editable editing={false}>
        <EditableDisplay>
          <EditableDisplayEmpty>Empty value</EditableDisplayEmpty>
        </EditableDisplay>

        <EditableActions />
      </Editable>

      <Divider spacing={DIVIDER_SPACING._16} />

      <Editable editing={true}>
        <EditableInput>
          <Input />
        </EditableInput>

        <EditableActions />
      </Editable>
    </div>
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,te;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,le;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ie,re,oe;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ue,de;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,me,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=w.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var Ee,be,ge;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ge=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};const je=["Demo","AnatomyTech","ComplexFormElement","Controlled","CustomActions","Default","Overview","ThemeGenerator"],Xe=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:A,ComplexFormElement:_,Controlled:N,CustomActions:x,Default:R,Demo:T,Overview:w,ThemeGenerator:B,__namedExportsOrder:je,default:Fe},Symbol.toStringTag,{value:"Module"}));export{A,N as C,R as D,Xe as E,w as O,x as a,_ as b};
