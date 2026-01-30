import{f as T}from"./Input-WCDlLY8s-BsMvbD1x.js";import{e,r as Z}from"./index-jIWwRBLr.js";import{b as L,a as t,c as l,d as E,F as r}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{T as g,a as x}from"./Text-CW33_IfE.js";import{T as a}from"./Textarea-di6qQWES.js";import{e as $,o as ee,C as n}from"./controls-BtiQQn1l.js";const re={argTypes:$(["id","required"]),component:r,subcomponents:{FormFieldError:E,FormFieldHelper:l,FormFieldLabel:t,FormFieldLabelSubLabel:L},title:"React Components/Form Field"},m={render:o=>e.createElement(r,{invalid:o.invalid},e.createElement(t,null,o.label,e.createElement(L,null,o.sublabel)),e.createElement(a,{name:"demo"}),e.createElement(l,null,o.helperText),e.createElement(E,null,o.errorText)),argTypes:ee({errorText:{table:{category:n.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:n.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:n.general},control:"boolean"},label:{table:{category:n.slot,type:{summary:"string"}},control:"text"},sublabel:{table:{category:n.slot,type:{summary:"string"}},control:"text"}})},s={globals:{imports:"import { FormField, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(a,{name:"textarea"}))},i={globals:{imports:"import { FormField, FormFieldError, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(a,{name:"textarea"}),e.createElement(E,null,"Error message"))},d={globals:{imports:"import { TEXT_PRESET, FormField, FormFieldHelper, Text, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(a,{name:"textarea"}),e.createElement(l,null,e.createElement(g,{preset:x.caption},"Helper text")))},c={globals:{imports:"import { FormField, FormFieldLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,null,"Description:"),e.createElement(a,{name:"textarea"}))},F={globals:{imports:"import { FormField, FormFieldLabel, FormFieldLabelSubLabel, Textarea } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,null,"Description",e.createElement(L,null,"- mandatory")),e.createElement(a,{name:"textarea"}))},p={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[v,Q]=Z.useState(0);function V(W){Q(W.target.value.length)}return e.createElement(r,{invalid:v>200},e.createElement(t,null,"Description:"),e.createElement(a,{name:"description",onInput:V}),e.createElement(l,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(g,{preset:x.caption},"Helper text"),e.createElement(g,{preset:x.caption},v,"/",200)),e.createElement(E,null,"Error message"))}},u={globals:{imports:"import { FormField, FormFieldHelper, FormFieldLabel, Input } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,null,"Login:"),e.createElement(T,{name:"input"}),e.createElement(l,null,"Username or email address"))},b={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(r,null,e.createElement(t,null,"Label"),e.createElement(T,{name:"input"})),e.createElement(r,null,e.createElement(T,{name:"input"}),e.createElement(l,null,"Helper text")),e.createElement(r,{invalid:!0},e.createElement(T,{name:"input"}),e.createElement(E,null,"Error message")))};var y,f,O;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: DemoArg) => <FormField invalid={args.invalid}>
      <FormFieldLabel>
        {args.label}
        <FormFieldLabelSubLabel>
          {args.sublabel}
        </FormFieldLabelSubLabel>
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
    },
    sublabel: {
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    }
  })
}`,...(O=(f=m.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var S,C,H;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var _,h,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(h=i.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var A,D,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var X,I,G;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var M,U,P;F.parameters={...F.parameters,docs:{...(M=F.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, FormFieldLabelSubLabel, Textarea } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description
        <FormFieldLabelSubLabel>- mandatory</FormFieldLabelSubLabel>
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
}`,...(P=(U=F.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var Y,j,w;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var q,z,k;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(k=(z=u.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var B,J,K;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const te=["Demo","Default","Error","Helper","Label","LabelSubLabel","Overview","AccessibilityLabel","ThemeGenerator"],ie=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:u,Default:s,Demo:m,Error:i,Helper:d,Label:c,LabelSubLabel:F,Overview:p,ThemeGenerator:b,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{u as A,s as D,i as E,ie as F,d as H,c as L,p as O,F as a};
