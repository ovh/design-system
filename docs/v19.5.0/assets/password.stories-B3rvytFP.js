import{r as pe,e}from"./index-jIWwRBLr.js";import{F as w,a as y}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{c as o,I as ue,b as ge}from"./Input-BllcUVFN.js";import{j as be}from"./jsx-runtime-Cfl8ynUo.js";import{L as a,u as Fe}from"./useI18n-C0NLVYPv.js";import{e as we,o as ye,C as s}from"./controls-BtiQQn1l.js";import{s as fe}from"./source-CPEZJ6oD.js";const ve={[o.maskButtonHide]:{[a.de]:"Passwort verbergen",[a.en]:"Hide password",[a.es]:"Ocultar contraseña",[a.fr]:"Masquer le mot de passe",[a.it]:"Nascondi password",[a.nl]:"Watchtwoord verbergen",[a.pl]:"Ukryj hasło",[a.pt]:"Ocultar a palavra-passe"},[o.maskButtonShow]:{[a.de]:"Passwort azeigen",[a.en]:"Show password",[a.es]:"Mostrar contraseña",[a.fr]:"Afficher le mot de passe",[a.it]:"Mostra password",[a.nl]:"Watchtwoord weergeven",[a.pl]:"Pokaż hasło",[a.pt]:"Mostrar a palavra-passe"}},r=pe.forwardRef(({className:se,clearable:te,i18n:f,invalid:ne,loading:le,locale:v,maskInitialState:de,onClear:ie,...ce},me)=>{const{translate:P}=Fe(ve,v,f);return be.jsx(ue,{className:se,clearable:te,"data-ods":"password",i18n:{[o.maskButtonHide]:P(o.maskButtonHide),[o.maskButtonShow]:P(o.maskButtonShow),...f},invalid:ne,loading:le,locale:v,maskOption:{enable:!0,initialState:de},onClear:ie,ref:me,type:ge.text,...ce})});r.displayName="Password";r.__docgenInfo={description:"",methods:[],displayName:"Password",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N"},{name:"string"}],raw:"Record<INPUT_I18N, string>"}],raw:"Partial<Record<INPUT_I18N, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maskInitialState:{required:!1,tsType:{name:"literal",value:"`${INPUT_MASK_STATE}`"},description:"The masked display initial state."},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the input value is cleared."}},composes:["Omit"]};const Pe={argTypes:we(["i18n","locale","maskInitialState","onClear"]),component:r,title:"React Components/Password"},t={argTypes:ye({clearable:{table:{category:s.general},control:"boolean"},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:s.general},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},placeholder:{table:{category:s.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"}})},n={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(w,null,e.createElement(y,null,"Password:"),e.createElement(r,null))},l={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},d={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},i={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},c={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(w,null,e.createElement(y,null,"Password:"),e.createElement(r,null))},m={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},p={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},u={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},g={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(w,null,e.createElement(y,null,"Password:"),e.createElement(r,null))},b={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...fe()}}},render:({})=>e.createElement(w,null,e.createElement(y,null,"Password:"),e.createElement(r,{i18n:{[o.maskButtonHide]:"Hide the password",[o.maskButtonShow]:"Show the password"}}))},F={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(r,{placeholder:"Default"}),e.createElement(r,{clearable:!0,defaultValue:"Clearable"}),e.createElement(r,{loading:!0,placeholder:"Loading"}),e.createElement(r,{disabled:!0,placeholder:"Disabled"}),e.createElement(r,{invalid:!0,placeholder:"Invalid"}),e.createElement(r,{readOnly:!0,defaultValue:"Read only"}))};var h,T,O;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(T=t.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,L,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(L=n.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var C,S,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password clearable defaultValue="Clearable" />
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var R,_,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password />
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var k,x,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password disabled />
}`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var U,B,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var q,H,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password loading />
}`,...(V=(H=m.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var Y,j,M;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Password />
}`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var W,z,$;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password defaultValue="Readonly" readOnly />
}`,...($=(z=u.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var K,J,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,oe;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <Password placeholder="Default" />
      <Password clearable defaultValue="Clearable" />
      <Password loading placeholder="Loading" />
      <Password disabled placeholder="Disabled" />
      <Password invalid placeholder="Invalid" />
      <Password readOnly defaultValue="Read only" />
    </div>
}`,...(oe=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const he=["Demo","AccessibilityLabel","Clearable","Default","Disabled","InFormField","Loading","Overview","ReadOnly","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],Ne=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:g,AccessibilityI18n:b,AccessibilityLabel:n,Clearable:l,Default:d,Demo:t,Disabled:i,InFormField:c,Loading:m,Overview:p,ReadOnly:u,ThemeGenerator:F,__namedExportsOrder:he,default:Pe},Symbol.toStringTag,{value:"Module"}));export{g as A,l as C,d as D,c as I,m as L,p as O,Ne as P,u as R,b as a,i as b};
