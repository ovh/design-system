import{f as T}from"./Input-B6w59nJG-Cj4oFXtw.js";import{e,r as J}from"./index-jIWwRBLr.js";import{a as t,b as o,c as u,F as r}from"./FormFieldLabel-f_nl6yro.js";import{T as g,a as x}from"./Text-CW33_IfE.js";import{T as a}from"./Textarea-Dzd8nTLA.js";import{e as K,o as Q,C as E}from"./controls-BtiQQn1l.js";const V={argTypes:K(["id","required"]),component:r,subcomponents:{FormFieldError:u,FormFieldHelper:o,FormFieldLabel:t},title:"React Components/Form Field"},n={render:l=>e.createElement(r,{invalid:l.invalid},e.createElement(t,null,l.label),e.createElement(a,{name:"demo"}),e.createElement(o,null,l.helperText),e.createElement(u,null,l.errorText)),argTypes:Q({errorText:{table:{category:E.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:E.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:E.general},control:"boolean"},label:{table:{category:E.slot,type:{summary:"string"}},control:"text"}})},m={globals:{imports:"import { FormField, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(a,{name:"textarea"}))},s={globals:{imports:"import { FormField, FormFieldError, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(a,{name:"textarea"}),e.createElement(u,null,"Error message"))},i={globals:{imports:"import { TEXT_PRESET, FormField, FormFieldHelper, Text, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(a,{name:"textarea"}),e.createElement(o,null,e.createElement(g,{preset:x.caption},"Helper text")))},d={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,null,"Description:"),e.createElement(a,{name:"textarea"}))},c={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[b,z]=J.useState(0);function k(B){z(B.target.value.length)}return e.createElement(r,{invalid:b>200},e.createElement(t,null,"Description:"),e.createElement(a,{name:"description",onInput:k}),e.createElement(o,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(g,{preset:x.caption},"Helper text"),e.createElement(g,{preset:x.caption},b,"/",200)),e.createElement(u,null,"Error message"))}},p={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,null,"Login:"),e.createElement(T,{name:"input"}),e.createElement(o,null,"Username or email address"))},F={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(r,null,e.createElement(t,null,"Label"),e.createElement(T,{name:"input"})),e.createElement(r,null,e.createElement(T,{name:"input"}),e.createElement(o,null,"Helper text")),e.createElement(r,{invalid:!0},e.createElement(T,{name:"input"}),e.createElement(u,null,"Error message")))};var v,y,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var L,O,C;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(C=(O=m.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var H,_,S;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var h,R,A;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,X,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(X=d.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var I,M,U;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,P,Y;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var j,w,q;F.parameters={...F.parameters,docs:{...(j=F.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <FormField>
        <FormFieldLabel>Label</FormFieldLabel>
        <Input name="input" />
      </FormField>

      <FormField>
        <Input name="input" />
        <FormFieldHelper>Helper text</FormFieldHelper>
      </FormField>

      <FormField invalid>
        <Input name="input" />
        <FormFieldError>Error message</FormFieldError>
      </FormField>
    </div>
}`,...(q=(w=F.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const W=["Demo","Default","Error","Helper","Label","Overview","AccessibilityLabel","ThemeGenerator"],ae=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:p,Default:m,Demo:n,Error:s,Helper:i,Label:d,Overview:c,ThemeGenerator:F,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{p as A,m as D,s as E,ae as F,i as H,d as L,c as O};
