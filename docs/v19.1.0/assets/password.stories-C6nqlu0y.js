import{r as de,e}from"./index-D_CmzhJ4.js";import{F as y,a as w}from"./FormFieldLabel-DQkMrZpp.js";import{c as n,I as ce,b as ie}from"./Input-DtgH68sh.js";import{j as me}from"./jsx-runtime-VM66peLj.js";import{L as r,u as pe}from"./useI18n-CFuCjRRO.js";import{e as ue,o as ge,C as s}from"./controls-BtiQQn1l.js";import{s as be}from"./source-d0g_Nd0q.js";const ye={[n.maskButtonHide]:{[r.de]:"Passwort verbergen",[r.en]:"Hide password",[r.es]:"Ocultar contraseña",[r.fr]:"Masquer le mot de passe",[r.it]:"Nascondi password",[r.nl]:"Verberg wachtwoord",[r.pl]:"Ukryj hasło",[r.pt]:"Ocultar senha"},[n.maskButtonShow]:{[r.de]:"Passwort anzeigen",[r.en]:"Show password",[r.es]:"Mostrar contraseña",[r.fr]:"Afficher le mot de passe",[r.it]:"Mostra password",[r.nl]:"Toon wachtwoord",[r.pl]:"Pokaż hasło",[r.pt]:"Mostrar senha"}},a=de.forwardRef(({className:ee,clearable:re,i18n:F,invalid:ae,loading:ne,locale:T,maskInitialState:se,onClear:oe,...te},le)=>{const{translate:O}=pe(ye,T,F);return me.jsx(ce,{className:ee,clearable:re,"data-ods":"password",i18n:{[n.maskButtonHide]:O(n.maskButtonHide),[n.maskButtonShow]:O(n.maskButtonShow),...F},invalid:ae,loading:ne,locale:T,maskOption:{enable:!0,initialState:se},onClear:oe,ref:le,type:ie.text,...te})});a.displayName="Password";a.__docgenInfo={description:"",methods:[],displayName:"Password",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N"},{name:"string"}],raw:"Record<INPUT_I18N, string>"}],raw:"Partial<Record<INPUT_I18N, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maskInitialState:{required:!1,tsType:{name:"literal",value:"`${INPUT_MASK_STATE}`"},description:"The masked display initial state."},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the input value is cleared."}},composes:["Omit"]};const we={argTypes:ue(["i18n","locale","maskInitialState","onClear"]),component:a,title:"React Components/Password"},o={argTypes:ge({clearable:{table:{category:s.general},control:"boolean"},disabled:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:s.general},control:"boolean"},loading:{table:{category:s.general},control:"boolean"},placeholder:{table:{category:s.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:s.general,type:{summary:"boolean"}},control:"boolean"}})},t={tags:["!dev"],render:({})=>e.createElement(y,null,e.createElement(w,null,"Password:"),e.createElement(a,null))},l={tags:["!dev"],render:({})=>e.createElement(a,{clearable:!0,defaultValue:"Clearable"})},d={tags:["!dev"],render:({})=>e.createElement(a,null)},c={tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0})},i={tags:["!dev"],render:({})=>e.createElement(y,null,e.createElement(w,null,"Password:"),e.createElement(a,null))},m={tags:["!dev"],render:({})=>e.createElement(a,{loading:!0})},p={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null)},u={tags:["!dev"],render:({})=>e.createElement(a,{defaultValue:"Readonly",readOnly:!0})},g={tags:["!dev"],render:({})=>e.createElement(y,null,e.createElement(w,null,"Password:"),e.createElement(a,null))},b={tags:["!dev"],parameters:{docs:{source:{...be()}}},render:({})=>e.createElement(y,null,e.createElement(w,null,"Password:"),e.createElement(a,{i18n:{[n.maskButtonHide]:"Hide the password",[n.maskButtonShow]:"Show the password"}}))};var P,h,f;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,E,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(C=(E=t.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,I,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password clearable defaultValue="Clearable" />
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var L,N,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password />
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var A,k,x;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password disabled />
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,U,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(q=(U=i.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var D,H,Y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password loading />
}`,...(Y=(H=m.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var G,j,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Password />
}`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var V,W,z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password defaultValue="Readonly" readOnly />
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var $,K,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(J=(K=g.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Fe=["Demo","AccessibilityLabel","Clearable","Default","Disabled","InFormField","Loading","Overview","ReadOnly","AccessibilityFormField","AccessibilityI18n"],Ce=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:g,AccessibilityI18n:b,AccessibilityLabel:t,Clearable:l,Default:d,Demo:o,Disabled:c,InFormField:i,Loading:m,Overview:p,ReadOnly:u,__namedExportsOrder:Fe,default:we},Symbol.toStringTag,{value:"Module"}));export{g as A,l as C,d as D,i as I,m as L,p as O,Ce as P,u as R,b as a,c as b};
