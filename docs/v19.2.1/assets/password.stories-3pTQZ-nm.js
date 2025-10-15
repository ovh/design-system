import{r as de,e}from"./index-jIWwRBLr.js";import{F,a as w}from"./FormFieldLabel-DW-nAxje.js";import{c as o,I as ie,b as me}from"./Input-DA3rR-6T.js";import{j as ce}from"./jsx-runtime-Cfl8ynUo.js";import{L as r,u as pe}from"./useI18n-C0NLVYPv.js";import{e as ue,o as ge,C as s}from"./controls-BtiQQn1l.js";import{s as be}from"./source-CPEZJ6oD.js";const Fe={[o.maskButtonHide]:{[r.de]:"Passwort verbergen",[r.en]:"Hide password",[r.es]:"Ocultar contraseña",[r.fr]:"Masquer le mot de passe",[r.it]:"Nascondi password",[r.nl]:"Watchtwoord verbergen",[r.pl]:"Ukryj hasło",[r.pt]:"Ocultar a palavra-passe"},[o.maskButtonShow]:{[r.de]:"Passwort azeigen",[r.en]:"Show password",[r.es]:"Mostrar contraseña",[r.fr]:"Afficher le mot de passe",[r.it]:"Mostra password",[r.nl]:"Watchtwoord weergeven",[r.pl]:"Pokaż hasło",[r.pt]:"Mostrar a palavra-passe"}},a=de.forwardRef(({className:ee,clearable:re,i18n:y,invalid:ae,loading:oe,locale:P,maskInitialState:se,onClear:te,...ne},le)=>{const{translate:v}=pe(Fe,P,y);return ce.jsx(ie,{className:ee,clearable:re,"data-ods":"password",i18n:{[o.maskButtonHide]:v(o.maskButtonHide),[o.maskButtonShow]:v(o.maskButtonShow),...y},invalid:ae,loading:oe,locale:P,maskOption:{enable:!0,initialState:se},onClear:te,ref:le,type:me.text,...ne})});a.displayName="Password";a.__docgenInfo={description:"",methods:[],displayName:"Password",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N"},{name:"string"}],raw:"Record<INPUT_I18N, string>"}],raw:"Partial<Record<INPUT_I18N, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maskInitialState:{required:!1,tsType:{name:"literal",value:"`${INPUT_MASK_STATE}`"},description:"The masked display initial state."},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the input value is cleared."}},composes:["Omit"]};const we={argTypes:ue(["i18n","locale","maskInitialState","onClear"]),component:a,title:"React Components/Password"},t={argTypes:ge({clearable:{table:{category:s.general},control:"boolean"},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:s.general},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},placeholder:{table:{category:s.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"}})},n={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(F,null,e.createElement(w,null,"Password:"),e.createElement(a,null))},l={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{clearable:!0,defaultValue:"Clearable"})},d={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null)},i={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0})},m={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(F,null,e.createElement(w,null,"Password:"),e.createElement(a,null))},c={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{loading:!0})},p={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null)},u={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{defaultValue:"Readonly",readOnly:!0})},g={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(F,null,e.createElement(w,null,"Password:"),e.createElement(a,null))},b={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...be()}}},render:({})=>e.createElement(F,null,e.createElement(w,null,"Password:"),e.createElement(a,{i18n:{[o.maskButtonHide]:"Hide the password",[o.maskButtonShow]:"Show the password"}}))};var f,h,T;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  argTypes: orderControls({
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    }
  })
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var O,L,E;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,C,N;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password clearable defaultValue="Clearable" />
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var S,R,_;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password />
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var A,k,U;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password disabled />
}`,...(U=(k=i.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var x,B,q;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(q=(B=m.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var D,H,Y;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password loading />
}`,...(Y=(H=c.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var G,j,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Password />
}`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var W,V,z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password defaultValue="Readonly" readOnly />
}`,...(z=(V=u.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var $,K,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(J=(K=g.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { INPUT_I18N, FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password i18n={{
      [INPUT_I18N.maskButtonHide]: 'Hide the password',
      [INPUT_I18N.maskButtonShow]: 'Show the password'
    }} />
    </FormField>
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ye=["Demo","AccessibilityLabel","Clearable","Default","Disabled","InFormField","Loading","Overview","ReadOnly","AccessibilityFormField","AccessibilityI18n"],Ee=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:g,AccessibilityI18n:b,AccessibilityLabel:n,Clearable:l,Default:d,Demo:t,Disabled:i,InFormField:m,Loading:c,Overview:p,ReadOnly:u,__namedExportsOrder:ye,default:we},Symbol.toStringTag,{value:"Module"}));export{g as A,l as C,d as D,m as I,c as L,p as O,Ee as P,u as R,b as a,i as b};
