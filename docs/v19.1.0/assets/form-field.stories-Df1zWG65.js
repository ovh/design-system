import{p as w}from"./Input-Hv8CEFSW-dIkMq8ux.js";import{e,r as q}from"./index-D_CmzhJ4.js";import{a as d,b as p,c as u,F as r}from"./FormFieldLabel-DQkMrZpp.js";import{T as E,a as T}from"./Text-B1XN51Xz.js";import{T as t}from"./Textarea-DJ9iXjLq.js";import{e as z,o as k,C as F}from"./controls-BtiQQn1l.js";const B={argTypes:z(["id","required"]),component:r,subcomponents:{FormFieldError:u,FormFieldHelper:p,FormFieldLabel:d},title:"React Components/Form Field"},o={render:a=>e.createElement(r,{invalid:a.invalid},e.createElement(d,null,a.label),e.createElement(t,{name:"demo"}),e.createElement(p,null,a.helperText),e.createElement(u,null,a.errorText)),argTypes:k({errorText:{table:{category:F.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:F.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:F.general},control:"boolean"},label:{table:{category:F.slot,type:{summary:"string"}},control:"text"}})},l={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,{name:"textarea"}))},s={tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(t,{name:"textarea"}),e.createElement(u,null,"Error message"))},n={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,{name:"textarea"}),e.createElement(p,null,e.createElement(E,{preset:T.caption},"Helper text")))},m={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(d,null,"Description:"),e.createElement(t,{name:"textarea"}))},c={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[g,P]=q.useState(0);function Y(j){P(j.target.value.length)}return e.createElement(r,{invalid:g>200},e.createElement(d,null,"Description:"),e.createElement(t,{name:"description",onInput:Y}),e.createElement(p,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(E,{preset:T.caption},"Helper text"),e.createElement(E,{preset:T.caption},g,"/",200)),e.createElement(u,null,"Error message"))}},i={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(d,null,"Login:"),e.createElement(w,{name:"input"}),e.createElement(p,null,"Username or email address"))};var x,b,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,O,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(C=(O=l.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var L,_,f;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField invalid>
      <Textarea name="textarea" />

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var H,A,S;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />

      <FormFieldHelper>
        <Text preset={TEXT_PRESET.caption}>
          Helper text
        </Text>
      </FormFieldHelper>
    </FormField>
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var R,D,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var X,M,U;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var h,G,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const J=["Demo","Default","Error","Helper","Label","Overview","AccessibilityLabel"],ee=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:i,Default:l,Demo:o,Error:s,Helper:n,Label:m,Overview:c,__namedExportsOrder:J,default:B},Symbol.toStringTag,{value:"Module"}));export{i as A,l as D,s as E,ee as F,n as H,m as L,c as O};
