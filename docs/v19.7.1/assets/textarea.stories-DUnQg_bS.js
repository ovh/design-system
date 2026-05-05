import{e,r as ae}from"./index-jIWwRBLr.js";import{F,a as T,c as Z,d as te}from"./index-B0M5RXeR.js";import{T as b,a as y}from"./Text-CAQM6i-X.js";import{T as r}from"./Textarea-1HJNDjsP.js";import{o as oe,C as a}from"./controls-BtiQQn1l.js";import{s as ne}from"./source-CPEZJ6oD.js";const le={component:r,title:"React Components/Textarea"},t={argTypes:oe({cols:{table:{category:a.general,type:{summary:"number"}},control:"number"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},rows:{table:{category:a.general,type:{summary:"number"}},control:"number"}})},o={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(F,null,e.createElement(T,null,"Description:"),e.createElement(r,null),e.createElement(Z,null,"Enter a brief description"))},n={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(F,null,e.createElement(T,null,"Description:"),e.createElement(r,null))},l={tags:["!dev"],render:({})=>e.createElement(r,{placeholder:"Textarea"})},s={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},c={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},d={globals:{imports:`import { TEXT_PRESET, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, Text, Textarea } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...ne()}}},render:({})=>{const[g,$]=ae.useState(0);function ee(re){$(re.target.value.length)}return e.createElement(F,{invalid:g>200},e.createElement(T,null,"Description:"),e.createElement(r,{name:"description",onInput:ee}),e.createElement(Z,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(b,{preset:y.caption},"Helper text"),e.createElement(b,{preset:y.caption},g,"/",200)),e.createElement(te,null,"Error message"))}},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Textarea"})},i={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},p={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{style:{resize:"both"}})},u={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(r,{placeholder:"Default"}),e.createElement(r,{disabled:!0,placeholder:"Disabled"}),e.createElement(r,{invalid:!0,placeholder:"Invalid"}),e.createElement(r,{readOnly:!0,defaultValue:"Read only"}))};var E,x,v;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  argTypes: orderControls({
    cols: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'number'
        }
      },
      control: 'number'
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
    rows: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    }
  })
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,O,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldHelper, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea />

      <FormFieldHelper>
        Enter a brief description
      </FormFieldHelper>
    </FormField>
}`,...(h=(O=o.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var C,R,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea />
    </FormField>
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var _,A,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea placeholder="Textarea" />
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,N,H;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea />
}`,...(H=(N=s.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var I,X,G;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea disabled />
}`,...(G=(X=c.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var M,Y,w;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, Text, Textarea } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const MAX_COUNT = 200;
    const [count, setCount] = useState(0);
    function onInput(e: FormEvent): void {
      setCount((e.target as HTMLTextAreaElement).value.length);
    }
    return <FormField invalid={count > MAX_COUNT}>
        <FormFieldLabel>
          Description:
        </FormFieldLabel>

        <Textarea name="description" onInput={onInput} />

        <FormFieldHelper style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <Text preset={TEXT_PRESET.caption}>
            Helper text
          </Text>

          <Text preset={TEXT_PRESET.caption}>
            {count}/{MAX_COUNT}
          </Text>
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>;
  }
}`,...(w=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:w.source}}};var P,U,z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Textarea placeholder="Textarea" />
}`,...(z=(U=m.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var j,V,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea defaultValue="Readonly" readOnly />
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var k,q,J;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea style={{
    resize: 'both'
  }} />
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,W;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      <Textarea placeholder="Default" />
      <Textarea disabled placeholder="Disabled" />
      <Textarea invalid placeholder="Invalid" />
      <Textarea readOnly defaultValue="Read only" />
    </div>
}`,...(W=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const se=["Demo","AccessibilityDescribedBy","AccessibilityFormField","AnatomyTech","Default","Disabled","InFormField","Overview","ReadOnly","Resizable","ThemeGenerator"],Te=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescribedBy:o,AccessibilityFormField:n,AnatomyTech:l,Default:s,Demo:t,Disabled:c,InFormField:d,Overview:m,ReadOnly:i,Resizable:p,ThemeGenerator:u,__namedExportsOrder:se,default:le},Symbol.toStringTag,{value:"Module"}));export{n as A,s as D,d as I,m as O,i as R,Te as T,o as a,l as b,c,p as d};
