import{e}from"./index-jIWwRBLr.js";import{F as E,a as F}from"./FormFieldLabel-DW-nAxje.js";import{I as r,a as ue,b as o,c as T}from"./Input-DA3rR-6T.js";import{e as ie,o as be,C as a}from"./controls-BtiQQn1l.js";import{s as ge}from"./source-CPEZJ6oD.js";const ye={argTypes:ie(["i18n","locale","maskOption","onClear"]),component:r,title:"React Components/Input"},t={render:v=>{const{masked:de,...pe}=v;return e.createElement(r,{maskOption:{enable:!!de},...pe})},argTypes:be({clearable:{table:{category:a.general},control:"boolean"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},loading:{table:{category:a.general},control:"boolean"},masked:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},type:{table:{category:a.general,type:{summary:"INPUT_TYPE"}},control:{type:"select"},options:ue}})},n={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},l={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{list:"ice-cream-flavors"}),e.createElement("datalist",{id:"ice-cream-flavors"},e.createElement("option",{value:"Chocolate"}),e.createElement("option",{value:"Coconut"}),e.createElement("option",{value:"Mint"}),e.createElement("option",{value:"Strawberry"}),e.createElement("option",{value:"Vanilla"})))},s={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},c={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},m={globals:{imports:"import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"9.99",step:"any",type:o.number})},d={globals:{imports:"import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(E,null,e.createElement(F,null,"Name:"),e.createElement(r,null))},p={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},u={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{maskOption:{enable:!0}})},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Input"})},b={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},g={decorators:[v=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px",alignItems:"start"}},v())],globals:{imports:"import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{type:o.email,placeholder:"email"}),e.createElement("br",null),e.createElement(r,{type:o.number,placeholder:"number"}),e.createElement("br",null),e.createElement(r,{type:o.password,placeholder:"password"}),e.createElement("br",null),e.createElement(r,{type:o.search,placeholder:"search"}),e.createElement("br",null),e.createElement(r,{type:o.text,placeholder:"text"}),e.createElement("br",null),e.createElement(r,{type:o.time,placeholder:"time"}),e.createElement("br",null),e.createElement(r,{type:o.url,placeholder:"url"}),e.createElement("br",null))},y={globals:{imports:"import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(E,null,e.createElement(F,null,"Name:"),e.createElement(r,null))},I={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...ge()}}},render:({})=>e.createElement(E,null,e.createElement(F,null,"Search:"),e.createElement(r,{clearable:!0,defaultValue:"my search",i18n:{[T.clearButton]:"Clear current search",[T.searchButton]:"Search in database"},type:"search"}))};var h,f,O;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (arg: DemoArg) => {
    const {
      masked,
      ...inputArg
    } = arg;
    return <Input maskOption={{
      enable: !!masked
    }} {...inputArg} />;
  },
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
    masked: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
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
    },
    type: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'INPUT_TYPE'
        }
      },
      control: {
        type: 'select'
      },
      options: INPUT_TYPES
    }
  })
}`,...(O=(f=t.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var N,P,C;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input clearable defaultValue="Clearable" />
}`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var _,S,R;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Input list="ice-cream-flavors" />

      <datalist id="ice-cream-flavors">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
    </>
}`,...(R=(S=l.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var Y,L,U;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input />
}`,...(U=(L=s.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var A,x,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input disabled />
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,w,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="9.99" step="any" type={INPUT_TYPE.number} />
}`,...(V=(w=m.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var G,M,B;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
}`,...(B=(M=d.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var j,z,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input loading />
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input maskOption={{
    enable: true
  }} />
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Input placeholder="Input" />
}`,...(X=(W=i.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="Readonly" readOnly />
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px',
    alignItems: 'start'
  }}>{story()}</div>],
  globals: {
    imports: \`import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Input type={INPUT_TYPE.email} placeholder="email" /><br />
      <Input type={INPUT_TYPE.number} placeholder="number" /><br />
      <Input type={INPUT_TYPE.password} placeholder="password" /><br />
      <Input type={INPUT_TYPE.search} placeholder="search" /><br />
      <Input type={INPUT_TYPE.text} placeholder="text" /><br />
      <Input type={INPUT_TYPE.time} placeholder="time" /><br />
      <Input type={INPUT_TYPE.url} placeholder="url" /><br />
    </>
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,ne,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
}`,...(le=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var se,ce,me;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  globals: {
    imports: \`import { INPUT_I18N, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';\`
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
        Search:
      </FormFieldLabel>

      <Input clearable defaultValue="my search" i18n={{
      [INPUT_I18N.clearButton]: 'Clear current search',
      [INPUT_I18N.searchButton]: 'Search in database'
    }} type='search' />
    </FormField>
}`,...(me=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const Ie=["Demo","Clearable","Datalist","Default","Disabled","FloatingNumber","InFormField","Loading","Masked","Overview","ReadOnly","Types","AccessibilityFormField","AccessibilityI18n"],fe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:y,AccessibilityI18n:I,Clearable:n,Datalist:l,Default:s,Demo:t,Disabled:c,FloatingNumber:m,InFormField:d,Loading:p,Masked:u,Overview:i,ReadOnly:b,Types:g,__namedExportsOrder:Ie,default:ye},Symbol.toStringTag,{value:"Module"}));export{y as A,n as C,s as D,m as F,fe as I,p as L,u as M,i as O,b as R,g as T,I as a,c as b,l as c,d};
