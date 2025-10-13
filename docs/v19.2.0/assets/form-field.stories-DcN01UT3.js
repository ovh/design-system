import{f as w}from"./Input-BxiCuv-8-0rw0jRRX.js";import{e,r as q}from"./index-jIWwRBLr.js";import{a as c,b as F,c as u,F as r}from"./FormFieldLabel-DW-nAxje.js";import{T,a as E}from"./Text-vMb3-i8V.js";import{T as t}from"./Textarea-BPSPZX_r.js";import{e as z,o as k,C as p}from"./controls-BtiQQn1l.js";const B={argTypes:z(["id","required"]),component:r,subcomponents:{FormFieldError:u,FormFieldHelper:F,FormFieldLabel:c},title:"React Components/Form Field"},a={render:o=>e.createElement(r,{invalid:o.invalid},e.createElement(c,null,o.label),e.createElement(t,{name:"demo"}),e.createElement(F,null,o.helperText),e.createElement(u,null,o.errorText)),argTypes:k({errorText:{table:{category:p.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:p.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:p.general},control:"boolean"},label:{table:{category:p.slot,type:{summary:"string"}},control:"text"}})},l={globals:{imports:"import { FormField, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,{name:"textarea"}))},n={globals:{imports:"import { FormField, FormFieldError, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(t,{name:"textarea"}),e.createElement(u,null,"Error message"))},s={globals:{imports:"import { TEXT_PRESET, FormField, FormFieldHelper, Text, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,{name:"textarea"}),e.createElement(F,null,e.createElement(T,{preset:E.caption},"Helper text")))},m={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(c,null,"Description:"),e.createElement(t,{name:"textarea"}))},i={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[g,G]=q.useState(0);function Y(j){G(j.target.value.length)}return e.createElement(r,{invalid:g>200},e.createElement(c,null,"Description:"),e.createElement(t,{name:"description",onInput:Y}),e.createElement(F,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(T,{preset:E.caption},"Helper text"),e.createElement(T,{preset:E.caption},g,"/",200)),e.createElement(u,null,"Error message"))}},d={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(c,null,"Login:"),e.createElement(w,{name:"input"}),e.createElement(F,null,"Username or email address"))};var x,b,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: DemoArg) => <FormField invalid={args.invalid}>
      <FormFieldLabel>
        {args.label}
      </FormFieldLabel>

      <Textarea name="demo" />

      <FormFieldHelper>
        {args.helperText}
      </FormFieldHelper>

      <FormFieldError>
        {args.errorText}
      </FormFieldError>
    </FormField>,
  argTypes: orderControls({
    errorText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    helperText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    }
  })
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,f,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(O=(f=l.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var C,L,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldError, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField invalid>
      <Textarea name="textarea" />

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
}`,...(_=(L=n.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var H,S,R;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, FormField, FormFieldHelper, Text, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />

      <FormFieldHelper>
        <Text preset={TEXT_PRESET.caption}>
          Helper text
        </Text>
      </FormFieldHelper>
    </FormField>
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var h,A,X;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
}`,...(X=(A=m.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var D,N,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
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
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var U,I,P;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldHelper, FormFieldLabel, Input } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Login:
      </FormFieldLabel>

      <Input name="input" />

      <FormFieldHelper>
        Username or email address
      </FormFieldHelper>
    </FormField>
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const J=["Demo","Default","Error","Helper","Label","Overview","AccessibilityLabel"],ee=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:d,Default:l,Demo:a,Error:n,Helper:s,Label:m,Overview:i,__namedExportsOrder:J,default:B},Symbol.toStringTag,{value:"Module"}));export{d as A,l as D,n as E,ee as F,s as H,m as L,i as O};
