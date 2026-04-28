import{r as Fe,e}from"./index-jIWwRBLr.js";import{F as y,a as f}from"./index-B0M5RXeR.js";import{c as o,I as we,b as ye}from"./Input-CsaVjqar.js";import{j as fe}from"./jsx-runtime-Cfl8ynUo.js";import{L as a,u as ve}from"./useI18n-C0NLVYPv.js";import{e as Pe,o as he,C as s}from"./controls-BtiQQn1l.js";import{s as Te}from"./source-CPEZJ6oD.js";const Oe={[o.maskButtonHide]:{[a.de]:"Passwort verbergen",[a.en]:"Hide password",[a.es]:"Ocultar contraseña",[a.fr]:"Masquer le mot de passe",[a.it]:"Nascondi password",[a.nl]:"Watchtwoord verbergen",[a.pl]:"Ukryj hasło",[a.pt]:"Ocultar a palavra-passe"},[o.maskButtonShow]:{[a.de]:"Passwort azeigen",[a.en]:"Show password",[a.es]:"Mostrar contraseña",[a.fr]:"Afficher le mot de passe",[a.it]:"Mostra password",[a.nl]:"Watchtwoord weergeven",[a.pl]:"Pokaż hasło",[a.pt]:"Mostrar a palavra-passe"}},r=Fe.forwardRef(({className:de,clearable:ce,i18n:v,invalid:ie,loading:me,locale:P,maskInitialState:pe,onClear:ue,...ge},be)=>{const{translate:h}=ve(Oe,P,v);return fe.jsx(we,{className:de,clearable:ce,"data-ods":"password",i18n:{[o.maskButtonHide]:h(o.maskButtonHide),[o.maskButtonShow]:h(o.maskButtonShow),...v},invalid:ie,loading:me,locale:P,maskOption:{enable:!0,initialState:pe},onClear:ue,ref:be,type:ye.text,...ge})});r.displayName="Password";r.__docgenInfo={description:"",methods:[],displayName:"Password",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N"},{name:"string"}],raw:"Record<INPUT_I18N, string>"}],raw:"Partial<Record<INPUT_I18N, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maskInitialState:{required:!1,tsType:{name:"literal",value:"`${INPUT_MASK_STATE}`"},description:"The masked display initial state."},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the input value is cleared."}},composes:["Omit"]};const Ee={argTypes:Pe(["i18n","locale","maskInitialState","onClear"]),component:r,title:"React Components/Password"},t={argTypes:he({clearable:{table:{category:s.general},control:"boolean"},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:s.general},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},placeholder:{table:{category:s.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"}})},n={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(y,null,e.createElement(f,null,"Password:"),e.createElement(r,null))},l={tags:["!dev"],render:({})=>e.createElement(r,null)},d={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},c={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},i={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},m={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(y,null,e.createElement(f,null,"Password:"),e.createElement(r,null))},p={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},u={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},g={globals:{imports:"import { Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},b={globals:{imports:"import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(y,null,e.createElement(f,null,"Password:"),e.createElement(r,null))},F={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Te()}}},render:({})=>e.createElement(y,null,e.createElement(f,null,"Password:"),e.createElement(r,{i18n:{[o.maskButtonHide]:"Hide the password",[o.maskButtonShow]:"Show the password"}}))},w={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(r,{placeholder:"Default"}),e.createElement(r,{clearable:!0,defaultValue:"Clearable"}),e.createElement(r,{loading:!0,placeholder:"Loading"}),e.createElement(r,{disabled:!0,placeholder:"Disabled"}),e.createElement(r,{invalid:!0,placeholder:"Invalid"}),e.createElement(r,{readOnly:!0,defaultValue:"Read only"}))};var T,O,E;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(O=t.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var L,I,C;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var S,N,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password />
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,A,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password clearable defaultValue="Clearable" />
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var x,D,U;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password />
}`,...(U=(D=c.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var B,G,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password disabled />
}`,...(q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var H,V,Y;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var j,M,W;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password loading />
}`,...(W=(M=p.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var z,$,K;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Password />
}`,...(K=($=u.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Password } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Password defaultValue="Readonly" readOnly />
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,se;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var te,ne,le;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const Le=["Demo","AccessibilityLabel","AnatomyTech","Clearable","Default","Disabled","InFormField","Loading","Overview","ReadOnly","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],ke=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:b,AccessibilityI18n:F,AccessibilityLabel:n,AnatomyTech:l,Clearable:d,Default:c,Demo:t,Disabled:i,InFormField:m,Loading:p,Overview:u,ReadOnly:g,ThemeGenerator:w,__namedExportsOrder:Le,default:Ee},Symbol.toStringTag,{value:"Module"}));export{b as A,d as C,c as D,m as I,p as L,u as O,ke as P,g as R,F as a,l as b,i as c};
