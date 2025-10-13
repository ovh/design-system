import{e,r as J}from"./index-jIWwRBLr.js";import{F as p,a as u,b as B,c as K}from"./FormFieldLabel-DW-nAxje.js";import{T as b,a as g}from"./Text-vMb3-i8V.js";import{T as r}from"./Textarea-BPSPZX_r.js";import{o as Q,C as o}from"./controls-BtiQQn1l.js";import{s as W}from"./source-CPEZJ6oD.js";const Z={component:r,title:"React Components/Textarea"},a={argTypes:Q({cols:{table:{category:o.general,type:{summary:"number"}},control:"number"},disabled:{table:{category:o.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:o.general},control:"boolean"},placeholder:{table:{category:o.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:o.general,type:{summary:"boolean"}},control:"boolean"},rows:{table:{category:o.general,type:{summary:"number"}},control:"number"}})},t={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(u,null,"Description:"),e.createElement(r,null),e.createElement(B,null,"Enter a brief description"))},n={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(u,null,"Description:"),e.createElement(r,null))},l={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},s={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},m={globals:{imports:`import { TEXT_PRESET, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, Text, Textarea } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...W()}}},render:({})=>{const[F,V]=J.useState(0);function k(q){V(q.target.value.length)}return e.createElement(p,{invalid:F>200},e.createElement(u,null,"Description:"),e.createElement(r,{name:"description",onInput:k}),e.createElement(B,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(b,{preset:g.caption},"Helper text"),e.createElement(b,{preset:g.caption},F,"/",200)),e.createElement(K,null,"Error message"))}},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Textarea"})},d={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},i={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{style:{resize:"both"}})};var T,y,E;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var x,v,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var O,C,R;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(C=n.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var _,S,h;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea />
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var L,A,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea disabled />
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var N,H,X;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(X=(H=m.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var M,G,I;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Textarea placeholder="Textarea" />
}`,...(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var Y,w,P;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea defaultValue="Readonly" readOnly />
}`,...(P=(w=d.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var U,z,j;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea style={{
    resize: 'both'
  }} />
}`,...(j=(z=i.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const $=["Demo","AccessibilityDescribedBy","AccessibilityFormField","Default","Disabled","InFormField","Overview","ReadOnly","Resizable"],se=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescribedBy:t,AccessibilityFormField:n,Default:l,Demo:a,Disabled:s,InFormField:m,Overview:c,ReadOnly:d,Resizable:i,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{n as A,l as D,m as I,c as O,d as R,se as T,t as a,s as b,i as c};
