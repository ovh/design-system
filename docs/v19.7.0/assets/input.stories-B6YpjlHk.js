import{e}from"./index-jIWwRBLr.js";import{F,a as f}from"./index-B0M5RXeR.js";import{I as r,a as he,b as t,c as T}from"./Input-CsaVjqar.js";import{e as Fe,o as fe,C as a}from"./controls-BtiQQn1l.js";import{s as Te}from"./source-CPEZJ6oD.js";const Oe={argTypes:Fe(["i18n","locale","maskOption","onClear"]),component:r,title:"React Components/Input"},o={render:h=>{const{masked:ve,...Ee}=h;return e.createElement(r,{maskOption:{enable:!!ve},...Ee})},argTypes:fe({clearable:{table:{category:a.general},control:"boolean"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},loading:{table:{category:a.general},control:"boolean"},masked:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},type:{table:{category:a.general,type:{summary:"INPUT_TYPE"}},control:{type:"select"},options:he}})},l={tags:["!dev"],render:({})=>e.createElement(r,{placeholder:"Input"})},n={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},s={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{list:"ice-cream-flavors"}),e.createElement("datalist",{id:"ice-cream-flavors"},e.createElement("option",{value:"Chocolate"}),e.createElement("option",{value:"Coconut"}),e.createElement("option",{value:"Mint"}),e.createElement("option",{value:"Strawberry"}),e.createElement("option",{value:"Vanilla"})))},c={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},d={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},m={globals:{imports:"import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"9.99",step:"any",type:t.number})},p={globals:{imports:"import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(F,null,e.createElement(f,null,"Name:"),e.createElement(r,null))},u={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},i={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{maskOption:{enable:!0}})},b={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Input"})},g={globals:{imports:"import { Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},y={decorators:[h=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px",alignItems:"start"}},h())],globals:{imports:"import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{type:t.email,placeholder:"email"}),e.createElement("br",null),e.createElement(r,{type:t.number,placeholder:"number"}),e.createElement("br",null),e.createElement(r,{type:t.password,placeholder:"password"}),e.createElement("br",null),e.createElement(r,{type:t.search,placeholder:"search"}),e.createElement("br",null),e.createElement(r,{type:t.text,placeholder:"text"}),e.createElement("br",null),e.createElement(r,{type:t.time,placeholder:"time"}),e.createElement("br",null),e.createElement(r,{type:t.url,placeholder:"url"}),e.createElement("br",null))},I={globals:{imports:"import { FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(F,null,e.createElement(f,null,"Name:"),e.createElement(r,null))},v={globals:{imports:"import { INPUT_I18N, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Te()}}},render:({})=>e.createElement(F,null,e.createElement(f,null,"Search:"),e.createElement(r,{clearable:!0,defaultValue:"my search",i18n:{[T.clearButton]:"Clear current search",[T.searchButton]:"Search in database"},type:"search"}))},E={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(r,{placeholder:"Default"}),e.createElement(r,{clearable:!0,defaultValue:"Clearable"}),e.createElement(r,{loading:!0,placeholder:"Loading"}),e.createElement(r,{disabled:!0,placeholder:"Disabled"}),e.createElement(r,{invalid:!0,placeholder:"Invalid"}),e.createElement(r,{readOnly:!0,defaultValue:"Read only"}),e.createElement(r,{clearable:!0,maskOption:{enable:!0},defaultValue:"Clearable"}))};var O,N,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var P,_,S;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input placeholder="Input" />
}`,...(S=(_=l.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var R,L,Y;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input clearable defaultValue="Clearable" />
}`,...(Y=(L=n.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var x,U,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(U=s.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var D,V,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input />
}`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var G,w,M;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input disabled />
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var B,j,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  globals: {
    imports: \`import { INPUT_TYPE, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="9.99" step="any" type={INPUT_TYPE.number} />
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var q,H,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,W;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input loading />
}`,...(W=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,$;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input maskOption={{
    enable: true
  }} />
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Input placeholder="Input" />
}`,...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,le;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="Readonly" readOnly />
}`,...(le=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ne,se,ce;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ce=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,me,pe;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ie,be;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:be.source}}};var ge,ye,Ie;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ie=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};const Ne=["Demo","AnatomyTech","Clearable","Datalist","Default","Disabled","FloatingNumber","InFormField","Loading","Masked","Overview","ReadOnly","Types","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],Le=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:I,AccessibilityI18n:v,AnatomyTech:l,Clearable:n,Datalist:s,Default:c,Demo:o,Disabled:d,FloatingNumber:m,InFormField:p,Loading:u,Masked:i,Overview:b,ReadOnly:g,ThemeGenerator:E,Types:y,__namedExportsOrder:Ne,default:Oe},Symbol.toStringTag,{value:"Module"}));export{I as A,n as C,c as D,m as F,Le as I,u as L,i as M,b as O,g as R,y as T,v as a,l as b,d as c,s as d,p as e};
