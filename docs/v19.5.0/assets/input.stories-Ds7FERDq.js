import{e}from"./index-jIWwRBLr.js";import{F as h,a as F}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{I as r,a as ye,b as t,c as f}from"./Input-BllcUVFN.js";import{e as Ie,o as ve,C as a}from"./controls-BtiQQn1l.js";import{s as Ee}from"./source-CPEZJ6oD.js";const he={argTypes:Ie(["i18n","locale","maskOption","onClear"]),component:r,title:"React Components/Input"},o={render:E=>{const{masked:be,...ge}=E;return e.createElement(r,{maskOption:{enable:!!be},...ge})},argTypes:ve({clearable:{table:{category:a.general},control:"boolean"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},loading:{table:{category:a.general},control:"boolean"},masked:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},type:{table:{category:a.general,type:{summary:"INPUT_TYPE"}},control:{type:"select"},options:ye}})},l={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},n={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{list:"ice-cream-flavors"}),e.createElement("datalist",{id:"ice-cream-flavors"},e.createElement("option",{value:"Chocolate"}),e.createElement("option",{value:"Coconut"}),e.createElement("option",{value:"Mint"}),e.createElement("option",{value:"Strawberry"}),e.createElement("option",{value:"Vanilla"})))},s={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},c={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},d={globals:{imports:"import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"9.99",step:"any",type:t.number})},m={globals:{imports:"import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(h,null,e.createElement(F,null,"Name:"),e.createElement(r,null))},p={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},u={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{maskOption:{enable:!0}})},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Input"})},b={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},g={decorators:[E=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px",alignItems:"start"}},E())],globals:{imports:"import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{type:t.email,placeholder:"email"}),e.createElement("br",null),e.createElement(r,{type:t.number,placeholder:"number"}),e.createElement("br",null),e.createElement(r,{type:t.password,placeholder:"password"}),e.createElement("br",null),e.createElement(r,{type:t.search,placeholder:"search"}),e.createElement("br",null),e.createElement(r,{type:t.text,placeholder:"text"}),e.createElement("br",null),e.createElement(r,{type:t.time,placeholder:"time"}),e.createElement("br",null),e.createElement(r,{type:t.url,placeholder:"url"}),e.createElement("br",null))},y={globals:{imports:"import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(h,null,e.createElement(F,null,"Name:"),e.createElement(r,null))},I={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ee()}}},render:({})=>e.createElement(h,null,e.createElement(F,null,"Search:"),e.createElement(r,{clearable:!0,defaultValue:"my search",i18n:{[f.clearButton]:"Clear current search",[f.searchButton]:"Search in database"},type:"search"}))},v={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(r,{placeholder:"Default"}),e.createElement(r,{clearable:!0,defaultValue:"Clearable"}),e.createElement(r,{loading:!0,placeholder:"Loading"}),e.createElement(r,{disabled:!0,placeholder:"Disabled"}),e.createElement(r,{invalid:!0,placeholder:"Invalid"}),e.createElement(r,{readOnly:!0,defaultValue:"Read only"}),e.createElement(r,{clearable:!0,maskOption:{enable:!0},defaultValue:"Clearable"}))};var T,O,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(O=o.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var C,P,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input clearable defaultValue="Clearable" />
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var R,S,L;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(S=n.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var Y,x,U;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input />
}`,...(U=(x=s.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};var A,D,V;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input disabled />
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var k,G,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  globals: {
    imports: \`import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="9.99" step="any" type={INPUT_TYPE.number} />
}`,...(w=(G=d.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var M,B,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(B=m.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var z,q,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input loading />
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input maskOption={{
    enable: true
  }} />
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Input placeholder="Input" />
}`,...(Z=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="Readonly" readOnly />
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(te=g.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ne,se;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ce,de,me;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(de=I.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,ie;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
      <Input placeholder="Default" />
      <Input clearable defaultValue="Clearable" />
      <Input loading placeholder="Loading" />
      <Input disabled placeholder="Disabled" />
      <Input invalid placeholder="Invalid" />
      <Input readOnly defaultValue="Read only" />
      <Input clearable maskOption={{
      enable: true
    }} defaultValue="Clearable" />
    </div>
}`,...(ie=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};const Fe=["Demo","Clearable","Datalist","Default","Disabled","FloatingNumber","InFormField","Loading","Masked","Overview","ReadOnly","Types","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],Pe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:y,AccessibilityI18n:I,Clearable:l,Datalist:n,Default:s,Demo:o,Disabled:c,FloatingNumber:d,InFormField:m,Loading:p,Masked:u,Overview:i,ReadOnly:b,ThemeGenerator:v,Types:g,__namedExportsOrder:Fe,default:he},Symbol.toStringTag,{value:"Module"}));export{y as A,l as C,s as D,d as F,Pe as I,p as L,u as M,i as O,b as R,g as T,I as a,c as b,n as c,m as d};
