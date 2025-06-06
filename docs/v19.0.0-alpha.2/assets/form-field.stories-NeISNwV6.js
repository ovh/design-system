import{e,r as U}from"./index-D_CmzhJ4.js";import{F as i,a as p,b as F,c as t}from"./FormFieldLabel-BxxkSoC9.js";import{T as u,a as T}from"./Text-eeWNb4Wa.js";import{T as o}from"./Textarea-DH3wGpdQ.js";import{e as P,o as j,C as a}from"./controls-BtiQQn1l.js";const w={argTypes:P(["required"]),component:t,subcomponents:{FormFieldError:F,FormFieldHelper:p,FormFieldLabel:i},title:"ODS Components/Form elements/FormField"},l={render:r=>e.createElement(t,{disabled:r.disabled,invalid:r.invalid,readOnly:r.readOnly},e.createElement(i,null,r.label),e.createElement(o,{name:"demo"}),e.createElement(p,null,r.helperText),e.createElement(F,null,r.errorText)),argTypes:j({disabled:{table:{category:a.general},control:"boolean"},errorText:{table:{category:a.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:a.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:a.general},control:"boolean"},label:{table:{category:a.slot,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general},control:"boolean"}})},n={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{name:"textarea"}))},s={tags:["!dev"],render:({})=>e.createElement(t,{invalid:!0},e.createElement(o,{name:"textarea"}),e.createElement(F,null,"Error message"))},m={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{name:"textarea"}),e.createElement(p,null,e.createElement(u,{preset:T.caption},"Helper text")))},c={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(i,null,"Description:"),e.createElement(o,{name:"textarea"}))},d={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[E,G]=U.useState(0);function Y(h){G(h.target.value.length)}return e.createElement(t,{invalid:E>200},e.createElement(i,null,"Description:"),e.createElement(o,{name:"description",onInput:Y}),e.createElement(p,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(u,{preset:T.caption},"Helper text"),e.createElement(u,{preset:T.caption},E,"/",200)),e.createElement(F,null,"Error message"))}};var g,x,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: DemoArg) => <FormField disabled={args.disabled} invalid={args.invalid} readOnly={args.readOnly}>
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
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
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
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,O,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(C=(O=n.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var v,_,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField invalid>
      <Textarea name="textarea" />

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
}`,...(L=(_=s.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var R,f,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />

      <FormFieldHelper>
        <Text preset={TEXT_PRESET.caption}>
          Helper text
        </Text>
      </FormFieldHelper>
    </FormField>
}`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var A,H,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var D,X,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(X=d.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};const I=["Demo","Default","Error","Helper","Label","Overview"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Demo:l,Error:s,Helper:m,Label:c,Overview:d,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{n as D,s as E,K as F,m as H,c as L,d as O};
