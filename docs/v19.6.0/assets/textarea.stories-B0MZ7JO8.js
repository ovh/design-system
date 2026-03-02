import{e,r as Z}from"./index-jIWwRBLr.js";import{F as u,a as F,c as J,d as $}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{T as g,a as T}from"./Text-CW33_IfE.js";import{T as r}from"./Textarea-di6qQWES.js";import{o as ee,C as a}from"./controls-BtiQQn1l.js";import{s as re}from"./source-CPEZJ6oD.js";const ae={component:r,title:"React Components/Textarea"},t={argTypes:ee({cols:{table:{category:a.general,type:{summary:"number"}},control:"number"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},rows:{table:{category:a.general,type:{summary:"number"}},control:"number"}})},o={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(F,null,"Description:"),e.createElement(r,null),e.createElement(J,null,"Enter a brief description"))},n={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(F,null,"Description:"),e.createElement(r,null))},l={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},s={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},c={globals:{imports:`import { TEXT_PRESET, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, Text, Textarea } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...re()}}},render:({})=>{const[b,K]=Z.useState(0);function Q(W){K(W.target.value.length)}return e.createElement(u,{invalid:b>200},e.createElement(F,null,"Description:"),e.createElement(r,{name:"description",onInput:Q}),e.createElement(J,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(g,{preset:T.caption},"Helper text"),e.createElement(g,{preset:T.caption},b,"/",200)),e.createElement($,null,"Error message"))}},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Textarea"})},d={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},i={globals:{imports:"import { Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{style:{resize:"both"}})},p={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(r,{placeholder:"Default"}),e.createElement(r,{disabled:!0,placeholder:"Disabled"}),e.createElement(r,{invalid:!0,placeholder:"Invalid"}),e.createElement(r,{readOnly:!0,defaultValue:"Read only"}))};var y,E,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(E=t.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var v,f,O;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var C,R,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(h=(R=n.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var S,_,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea />
}`,...(D=(_=l.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var L,A,N;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea disabled />
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var H,I,X;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(I=c.parameters)==null?void 0:I.docs)==null?void 0:X.source}}};var G,M,Y;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Textarea placeholder="Textarea" />
}`,...(Y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var w,P,U;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea defaultValue="Readonly" readOnly />
}`,...(U=(P=d.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var z,j,V;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Textarea style={{
    resize: 'both'
  }} />
}`,...(V=(j=i.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var B,k,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(k=p.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const te=["Demo","AccessibilityDescribedBy","AccessibilityFormField","Default","Disabled","InFormField","Overview","ReadOnly","Resizable","ThemeGenerator"],ie=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescribedBy:o,AccessibilityFormField:n,Default:l,Demo:t,Disabled:s,InFormField:c,Overview:m,ReadOnly:d,Resizable:i,ThemeGenerator:p,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{n as A,l as D,c as I,m as O,d as R,ie as T,o as a,s as b,i as c};
