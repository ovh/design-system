import{e,r as P}from"./index-D_CmzhJ4.js";import{F as d,a as p,b as F,c as r}from"./FormFieldLabel-DjB85afw.js";import{T as u,a as E}from"./Text-KX3Hvvn9.js";import{T as t}from"./Textarea-BHPD4BX2.js";import{e as Y,o as j,C as i}from"./controls-BtiQQn1l.js";const w={argTypes:Y(["id","required"]),component:r,subcomponents:{FormFieldError:F,FormFieldHelper:p,FormFieldLabel:d},title:"React Components/Form Field"},o={render:a=>e.createElement(r,{invalid:a.invalid},e.createElement(d,null,a.label),e.createElement(t,{name:"demo"}),e.createElement(p,null,a.helperText),e.createElement(F,null,a.errorText)),argTypes:j({errorText:{table:{category:i.slot,type:{summary:"string"}},control:"text"},helperText:{table:{category:i.slot,type:{summary:"string"}},control:"text"},invalid:{table:{category:i.general},control:"boolean"},label:{table:{category:i.slot,type:{summary:"string"}},control:"text"}})},l={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,{name:"textarea"}))},n={tags:["!dev"],render:({})=>e.createElement(r,{invalid:!0},e.createElement(t,{name:"textarea"}),e.createElement(F,null,"Error message"))},s={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(t,{name:"textarea"}),e.createElement(p,null,e.createElement(u,{preset:E.caption},"Helper text")))},m={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(d,null,"Description:"),e.createElement(t,{name:"textarea"}))},c={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[T,h]=P.useState(0);function U(G){h(G.target.value.length)}return e.createElement(r,{invalid:T>200},e.createElement(d,null,"Description:"),e.createElement(t,{name:"description",onInput:U}),e.createElement(p,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(u,{preset:E.caption},"Helper text"),e.createElement(u,{preset:E.caption},T,"/",200)),e.createElement(F,null,"Error message"))}};var g,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,v,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />
    </FormField>
}`,...(O=(v=l.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var C,_,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField invalid>
      <Textarea name="textarea" />

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var L,H,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <Textarea name="textarea" />

      <FormFieldHelper>
        <Text preset={TEXT_PRESET.caption}>
          Helper text
        </Text>
      </FormFieldHelper>
    </FormField>
}`,...(R=(H=s.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var S,A,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var N,X,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(X=c.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};const I=["Demo","Default","Error","Helper","Label","Overview"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Demo:o,Error:n,Helper:s,Label:m,Overview:c,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{l as D,n as E,K as F,s as H,m as L,c as O};
