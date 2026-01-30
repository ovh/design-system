import{r as i,e as t}from"./index-jIWwRBLr.js";import{B as v,d as F,c as h}from"./Button-B-GJ-1TA.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as x}from"./index-CqY9YpN0.js";import{u as Ee}from"./context-C_-r2uoG.js";import{L as r,u as z}from"./useI18n-C0NLVYPv.js";import{a as U}from"./colors-DSObuHxd.js";import{I as L,a as P}from"./icon-name-BpdEc4-2.js";import{F as fe}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{I as C}from"./Input-BllcUVFN.js";import{b as ge,S as ye,a as ve}from"./SelectControl-cFSNnpci.js";import{T as he}from"./Textarea-di6qQWES.js";import{e as Ce}from"./controls-BtiQQn1l.js";import{s as j}from"./source-CPEZJ6oD.js";const me=i.createContext(void 0);function pe({children:e,defaultEditing:n,editing:a,i18n:l,locale:s,onCancel:u,onEditChange:c,onSubmit:d}){const m=i.useRef(!1),[g,O]=i.useState(n??!1),be=typeof a=="boolean";return i.useEffect(()=>{if(!m.current){m.current=!0;return}c==null||c({editing:g})},[g,c]),o.jsx(me.Provider,{value:{i18n:l,isEditing:be?a:g,locale:s,onCancel:u,onEditChange:c,onSubmit:d,setIsEditing:O},children:e})}function S(){return Ee(me)}pe.__docgenInfo={description:"",methods:[],displayName:"EditableProvider",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Se="_editable_ofz27_2",Ie={editable:Se},p=i.forwardRef(({children:e,className:n,defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,...g},O)=>o.jsx(pe,{defaultEditing:a,editing:l,i18n:s,locale:u,onCancel:c,onEditChange:d,onSubmit:m,children:o.jsx("div",{className:x(Ie.editable,n),"data-ods":"editable",ref:O,...g,children:e})}));p.displayName="Editable";p.__docgenInfo={description:"",methods:[],displayName:"Editable",props:{defaultEditing:{required:!1,tsType:{name:"boolean"},description:"The initial editing state of the editable. Use when you don't need to control the editing state of the editable."},editing:{required:!1,tsType:{name:"boolean"},description:"The controlled editing state of the editable."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"EDITABLE_I18N"},{name:"string"}],raw:"Record<EDITABLE_I18N, string>"}],raw:"Partial<Record<EDITABLE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the cancel trigger is activated."},onEditChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: EditableEditingChangeDetail) => void",signature:{arguments:[{type:{name:"EditableEditingChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the editing state changes."},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the submit trigger is activated."}},composes:["Omit"]};const q=i.forwardRef(({children:e,...n},a)=>i.isValidElement(e)?i.cloneElement(e,{ref:a,...n,...e.props,className:x(n.className,e.props.className),style:{...n.style,...e.props.style}}):(i.Children.count(e)>1&&i.Children.only(null),null));q.__docgenInfo={description:"",methods:[],displayName:"AsChildSlot",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};var k=(e=>(e.cancelButton="editable.actions.cancel.button",e.editButton="editable.actions.edit.button",e.submitButton="editable.actions.submit.button",e))(k||{});const Z={"editable.actions.cancel.button":{[r.de]:"Abbrechen",[r.en]:"Cancel",[r.es]:"Cancelar",[r.fr]:"Annuler",[r.it]:"Annulla",[r.nl]:"Annuleren",[r.pl]:"Anuluj",[r.pt]:"Cancelar"},"editable.actions.edit.button":{[r.de]:"Bearbeiten",[r.en]:"Edit",[r.es]:"Editar",[r.fr]:"Modifier",[r.it]:"Modifica",[r.nl]:"Bewerken",[r.pl]:"Edytuj",[r.pt]:"Editar"},"editable.actions.submit.button":{[r.de]:"Einreichen",[r.en]:"Submit",[r.es]:"Enviar",[r.fr]:"Envoyer",[r.it]:"Invia",[r.nl]:"Indienen",[r.pl]:"Zatwierdź",[r.pt]:"Enviar"}},R=i.forwardRef(({asChild:e,...n},a)=>{const{i18n:l,locale:s,onCancel:u,setIsEditing:c}=S(),{translate:d}=z(Z,s,l),m={"aria-label":d(k.cancelButton),onClick:g,ref:a};function g(){c(!1),u==null||u()}return e?o.jsx(q,{...m,...n}):o.jsx(v,{color:U.neutral,size:h.sm,variant:F.ghost,...m,...n,children:o.jsx(L,{name:P.xmark})})});R.displayName="EditableCancelTrigger";R.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableCancelTrigger"};const w=i.forwardRef(({asChild:e,...n},a)=>{const{i18n:l,locale:s,setIsEditing:u}=S(),{translate:c}=z(Z,s,l),d={"aria-label":c(k.editButton),onClick:m,ref:a};function m(){u(!0)}return e?o.jsx(q,{...d,...n}):o.jsx(v,{color:U.primary,size:h.sm,variant:F.ghost,...d,...n,children:o.jsx(L,{name:P.pen})})});w.displayName="EditableEditTrigger";w.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableEditTrigger"};const B=i.forwardRef(({asChild:e,...n},a)=>{const{i18n:l,locale:s,onSubmit:u,setIsEditing:c}=S(),{translate:d}=z(Z,s,l),m={"aria-label":d(k.submitButton),onClick:g,ref:a};function g(){c(!1),u==null||u()}return e?o.jsx(q,{...m,...n}):o.jsx(v,{color:U.primary,size:h.sm,variant:F.ghost,...m,...n,children:o.jsx(L,{name:P.check})})});B.displayName="EditableSubmitTrigger";B.__docgenInfo={description:"@param {boolean|optional} asChild - Use the provided child element as the default rendered element, combining their props and behavior. Be careful to pass an actual Node, not a Fragment.",methods:[],displayName:"EditableSubmitTrigger"};const Ve=({isEditing:e})=>e?o.jsxs(o.Fragment,{children:[o.jsx(B,{}),o.jsx(R,{})]}):o.jsx(w,{}),b=i.forwardRef(({children:e,className:n,...a},l)=>{const{isEditing:s}=S();return o.jsx("div",{className:n,ref:l,...a,children:e&&typeof e=="function"?e({editing:s}):o.jsx(Ve,{isEditing:s})})});b.displayName="EditableActions";b.__docgenInfo={description:"",methods:[],displayName:"EditableActions",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { editing: boolean }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ editing: boolean }",signature:{properties:[{key:"editing",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Custom actions render function, that provides Editable current state."}},composes:["Omit"]};const $={"editable-display":"_editable-display_1ahob_2","editable-display--hidden":"_editable-display--hidden_1ahob_7"},E=i.forwardRef(({className:e,...n},a)=>{const{isEditing:l,setIsEditing:s}=S();return o.jsx("div",{className:x($["editable-display"],e,{[$["editable-display--hidden"]]:l}),"data-ods":"editable-display",onDoubleClick:()=>s(!0),ref:a,...n})});E.displayName="EditableDisplay";E.__docgenInfo={description:"",methods:[],displayName:"EditableDisplay",composes:["ComponentPropsWithRef"]};const De={"editable-display-empty":"_editable-display-empty_17eyf_2"},y=i.forwardRef(({className:e,...n},a)=>o.jsx("span",{className:x(De["editable-display-empty"],e),"data-ods":"editable-display-empty",ref:a,...n}));y.displayName="EditableDisplayEmpty";y.__docgenInfo={description:"",methods:[],displayName:"EditableDisplayEmpty",composes:["ComponentPropsWithRef"]};const Te={"editable-input":"_editable-input_14rnc_2"},f=i.forwardRef(({className:e,...n},a)=>{const{isEditing:l}=S();return l?o.jsx("div",{className:x(Te["editable-input"],e),"data-ods":"editable-input",ref:a,...n}):o.jsx(o.Fragment,{})});f.displayName="EditableInput";f.__docgenInfo={description:"",methods:[],displayName:"EditableInput",composes:["ComponentPropsWithRef"]};const _e={argTypes:Ce(["defaultEditing","editing","i18n","locale","onCancel","onEditChange","onSubmit"]),component:p,subcomponents:{EditableActions:b,EditableCancelTrigger:R,EditableDisplay:E,EditableDisplayEmpty:y,EditableEditTrigger:w,EditableInput:f,EditableSubmitTrigger:B},tags:["new"],title:"React Components/Editable"},I={render:()=>{const[e,n]=i.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),a=i.useRef(e);return t.createElement(p,{onCancel:()=>a.current=e,onSubmit:()=>n(a.current),style:{display:"flex"}},t.createElement(E,null,t.createElement("p",{style:{margin:0}},e||t.createElement(y,null,"Empty value"))),t.createElement(f,{style:{flex:"1 1 0"}},t.createElement(he,{autoFocus:!0,defaultValue:e,onChange:l=>a.current=l.target.value,style:{resize:"vertical",width:"100%"}})),t.createElement(b,null))}},V={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, FormField, Input, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[e,n]=i.useState(""),[a,l]=i.useState(""),[s,u]=i.useState("");function c(){const[d,m]=e.split("@ovhcloud");l(d||""),u(m||"")}return t.createElement(p,{onCancel:c,onSubmit:()=>n(`${a}@ovhcloud${s}`)},t.createElement(E,null,e||t.createElement(y,null,"Account name")),t.createElement(f,null,t.createElement(fe,{style:{display:"flex",flexFlow:"row",alignItems:"center",columnGap:"8px"}},t.createElement(C,{name:"account-name",onChange:d=>l(d.target.value),pattern:"^([a-zA-Z0-9]|([._\\-](?![._\\-])))*[a-zA-Z0-9]$",placeholder:"Account name",value:a}),t.createElement("span",null,"@ovhcloud"),t.createElement(ge,{items:[{label:".fr",value:".fr"},{label:".com",value:".com"},{label:".dev",value:".dev"}],name:"domain",onValueChange:({value:d})=>u(d[0]),value:s?[s]:[]},t.createElement(ye,{placeholder:"Select domain"}),t.createElement(ve,null)))),t.createElement(b,null))}},D={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[e,n]=i.useState("Double click to edit"),[a,l]=i.useState(e);return t.createElement(p,{onCancel:()=>l(e),onSubmit:()=>n(a)},t.createElement(E,null,e||t.createElement(y,null,"Empty value")),t.createElement(f,null,t.createElement(C,{autoFocus:!0,onChange:s=>l(s.target.value),value:a})),t.createElement(b,null))}},T={globals:{imports:`import { BUTTON_SIZE, BUTTON_VARIANT, Button, Editable, EditableActions, EditableCancelTrigger, EditableDisplay, EditableDisplayEmpty, EditableEditTrigger, EditableInput, EditableSubmitTrigger, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[e,n]=i.useState("Double click to edit"),a=i.useRef(e);return t.createElement(p,{onCancel:()=>a.current=e,onSubmit:()=>n(a.current)},t.createElement(E,null,e||t.createElement(y,null,"Empty value")),t.createElement(f,null,t.createElement(C,{autoFocus:!0,defaultValue:e,onChange:l=>a.current=l.target.value})),t.createElement(b,null,({editing:l})=>l?t.createElement(t.Fragment,null,t.createElement(B,{asChild:!0},t.createElement(v,{size:h.sm},"Submit")),t.createElement(R,{asChild:!0},t.createElement(v,{size:h.sm,variant:F.outline},"Cancel"))):t.createElement(w,{asChild:!0},t.createElement(v,{size:h.sm},"Edit"))))}},_={globals:{imports:`import { Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, Input } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...j()}}},tags:["!dev"],render:({})=>{const[e,n]=i.useState("Double click to edit"),a=i.useRef(e);return t.createElement(p,{onCancel:()=>a.current=e,onSubmit:()=>n(a.current)},t.createElement(E,null,e||t.createElement(y,null,"Empty value")),t.createElement(f,null,t.createElement(C,{autoFocus:!0,defaultValue:e,onChange:l=>a.current=l.target.value})),t.createElement(b,null))}},A={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[e,n]=i.useState("Double click to edit"),a=i.useRef(e);return t.createElement(p,{onCancel:()=>a.current=e,onSubmit:()=>n(a.current)},t.createElement(E,null,e||t.createElement(y,null,"Empty value")),t.createElement(f,null,t.createElement(C,{autoFocus:!0,defaultValue:e,onChange:l=>a.current=l.target.value})),t.createElement(b,null))}},N={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>t.createElement(p,null,t.createElement(E,null,"Some node"),t.createElement(f,null,t.createElement(C,{autoFocus:!0,defaultValue:"Some node"})),t.createElement(b,null))};var M,G,W;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(G=I.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var H,J,K;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=V.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,ae;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,le,ie;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(le=_.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var re,oe,se;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ue,de,ce;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ce=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Ae=["Demo","ComplexFormElement","Controlled","CustomActions","Default","Overview","ThemeGenerator"],Ze=Object.freeze(Object.defineProperty({__proto__:null,ComplexFormElement:V,Controlled:D,CustomActions:T,Default:_,Demo:I,Overview:A,ThemeGenerator:N,__namedExportsOrder:Ae,default:_e},Symbol.toStringTag,{value:"Module"}));export{D as C,_ as D,Ze as E,A as O,T as a,V as b};
