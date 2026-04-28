import{r as i,e}from"./index-jIWwRBLr.js";import{B as v,d as B,c as h}from"./Button-B-GJ-1TA.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as F}from"./index-CqY9YpN0.js";import{u as fe}from"./context-C_-r2uoG.js";import{A as q}from"./AsChild-BQZQcPff.js";import{L as r,u as z}from"./useI18n-C0NLVYPv.js";import{a as U}from"./colors-DSObuHxd.js";import{I as L,a as P}from"./icon-name-RfJfucZu.js";import{F as ge}from"./index-DHp3jGT7.js";import{I as C}from"./Input-DK0nnZkU.js";import{b as ye,S as ve,a as he}from"./index-BWF8qxTS.js";import{T as Ce}from"./Textarea-C_jrLmLc.js";import{e as Se}from"./controls-BtiQQn1l.js";import{s as j}from"./source-CPEZJ6oD.js";const pe=i.createContext(void 0);function be({children:t,defaultEditing:n,editing:a,i18n:l,locale:s,onCancel:u,onEditChange:c,onSubmit:d}){const m=i.useRef(!1),[g,k]=i.useState(n??!1),Ee=typeof a=="boolean";return i.useEffect(()=>{if(!m.current){m.current=!0;return}c==null||c({editing:g})},[g,c]),o.jsx(pe.Provider,{value:{i18n:l,isEditing:Ee?a:g,locale:s,onCancel:u,onEditChange:c,onSubmit:d,setIsEditing:k},children:t})}function S(){return fe(pe)}be.__docgenInfo={description:"",methods:[],displayName:"EditableProvider",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const De="_editable_ofz27_2",Ie={editable:De},$=i.forwardRef(({children:t,className:n,defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,...g},k)=>o.jsx(be,{defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,children:o.jsx("div",{className:F(Ie.editable,n),"data-ods":"editable",ref:k,...g,children:t})}));$.displayName="Editable";$.__docgenInfo={description:"",methods:[],displayName:"Editable",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."}},composes:["Omit"]};var O=(t=>(t.cancelButton="editable.actions.cancel.button",t.editButton="editable.actions.edit.button",t.submitButton="editable.actions.submit.button",t))(O||{});const Z={"editable.actions.cancel.button":{[r.de]:"Abbrechen",[r.en]:"Cancel",[r.es]:"Cancelar",[r.fr]:"Annuler",[r.it]:"Annulla",[r.nl]:"Annuleren",[r.pl]:"Anuluj",[r.pt]:"Cancelar"},"editable.actions.edit.button":{[r.de]:"Bearbeiten",[r.en]:"Edit",[r.es]:"Editar",[r.fr]:"Modifier",[r.it]:"Modifica",[r.nl]:"Bewerken",[r.pl]:"Edytuj",[r.pt]:"Editar"},"editable.actions.submit.button":{[r.de]:"Einreichen",[r.en]:"Submit",[r.es]:"Enviar",[r.fr]:"Envoyer",[r.it]:"Invia",[r.nl]:"Indienen",[r.pl]:"Zatwierdź",[r.pt]:"Enviar"}},D=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,onCancel:u,setIsEditing:c}=S(),{translate:d}=z(Z,s,l),m={"aria-label":d(O.cancelButton),onClick:g,ref:a};function g(){c(!1),u==null||u()}return t?o.jsx(q,{...m,...n}):o.jsx(v,{color:U.neutral,size:h.sm,variant:B.ghost,...m,...n,children:o.jsx(L,{name:P.xmark})})});D.displayName="EditableCancelTrigger";D.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableCancelTrigger"};const I=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,setIsEditing:u}=S(),{translate:c}=z(Z,s,l),d={"aria-label":c(O.editButton),onClick:m,ref:a};function m(){u(!0)}return t?o.jsx(q,{...d,...n}):o.jsx(v,{color:U.primary,size:h.sm,variant:B.ghost,...d,...n,children:o.jsx(L,{name:P.pen})})});I.displayName="EditableEditTrigger";I.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableEditTrigger"};const V=i.forwardRef(({asChild:t,...n},a)=>{const{i18n:l,locale:s,onSubmit:u,setIsEditing:c}=S(),{translate:d}=z(Z,s,l),m={"aria-label":d(O.submitButton),onClick:g,ref:a};function g(){c(!1),u==null||u()}return t?o.jsx(q,{...m,...n}):o.jsx(v,{color:U.primary,size:h.sm,variant:B.ghost,...m,...n,children:o.jsx(L,{name:P.check})})});V.displayName="EditableSubmitTrigger";V.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableSubmitTrigger"};const Ve=({isEditing:t})=>t?o.jsxs(o.Fragment,{children:[o.jsx(V,{}),o.jsx(D,{})]}):o.jsx(I,{}),p=i.forwardRef(({children:t,className:n,...a},l)=>{const{isEditing:s}=S();return o.jsx("div",{className:n,ref:l,...a,children:t&&typeof t=="function"?t({editing:s}):o.jsx(Ve,{isEditing:s})})});p.displayName="EditableActions";p.__docgenInfo={description:"",methods:[],displayName:"EditableActions",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { editing: boolean }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ editing: boolean }",signature:{properties:[{key:"editing",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Custom actions render function, that provides Editable current state."}},composes:["Omit"]};const M={"editable-display":"_editable-display_1ahob_2","editable-display--hidden":"_editable-display--hidden_1ahob_7"},b=i.forwardRef(({className:t,...n},a)=>{const{isEditing:l,setIsEditing:s}=S();return o.jsx("div",{className:F(M["editable-display"],t,{[M["editable-display--hidden"]]:l}),"data-ods":"editable-display",onDoubleClick:()=>s(!0),ref:a,...n})});b.displayName="EditableDisplay";b.__docgenInfo={description:"",methods:[],displayName:"EditableDisplay",composes:["ComponentPropsWithRef"]};const Te={"editable-display-empty":"_editable-display-empty_17eyf_2"},f=i.forwardRef(({className:t,...n},a)=>o.jsx("span",{className:F(Te["editable-display-empty"],t),"data-ods":"editable-display-empty",ref:a,...n}));f.displayName="EditableDisplayEmpty";f.__docgenInfo={description:"",methods:[],displayName:"EditableDisplayEmpty",composes:["ComponentPropsWithRef"]};const Ae={"editable-input":"_editable-input_14rnc_2"},E=i.forwardRef(({className:t,...n},a)=>{const{isEditing:l}=S();return l?o.jsx("div",{className:F(Ae["editable-input"],t),"data-ods":"editable-input",ref:a,...n}):o.jsx(o.Fragment,{})});E.displayName="EditableInput";E.__docgenInfo={description:"",methods:[],displayName:"EditableInput",composes:["ComponentPropsWithRef"]};const y=Object.assign($,{Actions:p,CancelTrigger:D,Display:b,DisplayEmpty:f,EditTrigger:I,Input:E,SubmitTrigger:V}),_e={argTypes:Se(["defaultEditing","editing","i18n","locale","onCancel","onEditChange","onSubmit"]),component:y,subcomponents:{EditableActions:p,EditableCancelTrigger:D,EditableDisplay:b,EditableDisplayEmpty:f,EditableEditTrigger:I,EditableInput:E,EditableSubmitTrigger:V},title:"React Components/Editable"},T={render:()=>{const[t,n]=i.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),a=i.useRef(t);return e.createElement(y,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current),style:{display:"flex"}},e.createElement(b,null,e.createElement("p",{style:{margin:0}},t||e.createElement(f,null,"Empty value"))),e.createElement(E,{style:{flex:"1 1 0"}},e.createElement(Ce,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value,style:{resize:"vertical",width:"100%"}})),e.createElement(p,null))}},A={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, FormField, Input, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState(""),[a,l]=i.useState(""),[s,u]=i.useState("");function c(){const[d,m]=t.split("@ovhcloud");l(d||""),u(m||"")}return e.createElement(y,{onCancel:c,onSubmit:()=>n(`${a}@ovhcloud${s}`)},e.createElement(b,null,t||e.createElement(f,null,"Account name")),e.createElement(E,null,e.createElement(ge,{style:{display:"flex",flexFlow:"row",alignItems:"center",columnGap:"8px"}},e.createElement(C,{name:"account-name",onChange:d=>l(d.target.value),pattern:"^([a-zA-Z0-9]|([._\\-](?![._\\-])))*[a-zA-Z0-9]$",placeholder:"Account name",value:a}),e.createElement("span",null,"@ovhcloud"),e.createElement(ye,{items:[{label:".fr",value:".fr"},{label:".com",value:".com"},{label:".dev",value:".dev"}],name:"domain",onValueChange:({value:d})=>u(d[0]),value:s?[s]:[]},e.createElement(ve,{placeholder:"Select domain"}),e.createElement(he,null)))),e.createElement(p,null))}},_={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),[a,l]=i.useState(t);return e.createElement(y,{onCancel:()=>l(t),onSubmit:()=>n(a)},e.createElement(b,null,t||e.createElement(f,null,"Empty value")),e.createElement(E,null,e.createElement(C,{autoFocus:!0,onChange:s=>l(s.target.value),value:a})),e.createElement(p,null))}},x={globals:{imports:`import { BUTTON_SIZE, BUTTON_VARIANT, Button, Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(y,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(b,null,t||e.createElement(f,null,"Empty value")),e.createElement(E,null,e.createElement(C,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(p,null,({editing:l})=>l?e.createElement(e.Fragment,null,e.createElement(V,{asChild:!0},e.createElement(v,{size:h.sm},"Submit")),e.createElement(D,{asChild:!0},e.createElement(v,{size:h.sm,variant:B.outline},"Cancel"))):e.createElement(I,{asChild:!0},e.createElement(v,{size:h.sm},"Edit"))))}},N={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(y,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(b,null,t||e.createElement(f,null,"Empty value")),e.createElement(E,null,e.createElement(C,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(p,null))}},R={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[t,n]=i.useState("Double click to edit"),a=i.useRef(t);return e.createElement(y,{onCancel:()=>a.current=t,onSubmit:()=>n(a.current)},e.createElement(b,null,t||e.createElement(f,null,"Empty value")),e.createElement(E,null,e.createElement(C,{autoFocus:!0,defaultValue:t,onChange:l=>a.current=l.target.value})),e.createElement(p,null))}},w={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(y,null,e.createElement(b,null,"Some node"),e.createElement(E,null,e.createElement(C,{autoFocus:!0,defaultValue:"Some node"})),e.createElement(p,null))};var G,W,H;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(H=(W=T.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var J,K,Q;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=A.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ae,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,ie,re;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var oe,se,ue;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(se=R.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var de,ce,me;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const xe=["Demo","ComplexFormElement","Controlled","CustomActions","Default","Overview","ThemeGenerator"],Me=Object.freeze(Object.defineProperty({__proto__:null,ComplexFormElement:A,Controlled:_,CustomActions:x,Default:N,Demo:T,Overview:R,ThemeGenerator:w,__namedExportsOrder:xe,default:_e},Symbol.toStringTag,{value:"Module"}));export{_ as C,N as D,Me as E,R as O,x as a,A as b};
