import{e,r as h}from"./index-D_CmzhJ4.js";import{O as i,a as u,b as p,c as t}from"./OdsFormFieldLabel-DQU1mNMu.js";import{O,a as F}from"./OdsText-BABXFwFE.js";import{O as o}from"./OdsTextarea-C69vTE_2.js";import{e as U,o as P,C as a}from"./controls-BtiQQn1l.js";const j={argTypes:U(["required"]),component:t,subcomponents:{OdsFormFieldError:p,OdsFormFieldHelper:u,OdsFormFieldLabel:i},title:"ODS Components/Form elements/FormField"},l={render:r=>e.createElement(t,{disabled:r.disabled,invalid:r.invalid,readOnly:r.readOnly},e.createElement(i,null,r.label),e.createElement(o,{name:"demo"}),e.createElement(u,null,r.helperText),e.createElement(p,null,r.errorText)),argTypes:P({disabled:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},errorText:{table:{category:a.slot,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},helperText:{table:{category:a.slot,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},invalid:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:a.slot,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"}})},s={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{name:"textarea"}))},n={tags:["!dev"],render:({})=>e.createElement(t,{invalid:!0},e.createElement(o,{name:"textarea"}),e.createElement(p,null,"Error message"))},d={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{name:"textarea"}),e.createElement(u,null,e.createElement(O,{preset:F.caption},"Helper text")))},m={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(i,null,"Description:"),e.createElement(o,{name:"textarea"}))},c={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[y,M]=h.useState(0);function G(Y){M(Y.target.value.length)}return e.createElement(t,{invalid:y>200},e.createElement(i,null,"Description:"),e.createElement(o,{name:"description",onInput:G}),e.createElement(u,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(O,{preset:F.caption},"Helper text"),e.createElement(O,{preset:F.caption},y,"/",200)),e.createElement(p,null,"Error message"))}};var E,T,g;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: DemoArg) => <OdsFormField disabled={args.disabled} invalid={args.invalid} readOnly={args.readOnly}>
      <OdsFormFieldLabel>
        {args.label}
      </OdsFormFieldLabel>

      <OdsTextarea name="demo" />

      <OdsFormFieldHelper>
        {args.helperText}
      </OdsFormFieldHelper>

      <OdsFormFieldError>
        {args.errorText}
      </OdsFormFieldError>
    </OdsFormField>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    errorText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    helperText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    }
  })
}`,...(g=(T=l.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsFormField>
      <OdsTextarea name="textarea" />
    </OdsFormField>
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,f,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsFormField invalid>
      <OdsTextarea name="textarea" />

      <OdsFormFieldError>
        Error message
      </OdsFormFieldError>
    </OdsFormField>
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var S,L,R;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsFormField>
      <OdsTextarea name="textarea" />

      <OdsFormFieldHelper>
        <OdsText preset={ODS_TEXT_PRESET.caption}>
          Helper text
        </OdsText>
      </OdsFormFieldHelper>
    </OdsFormField>
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var D,A,H;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsFormField>
      <OdsFormFieldLabel>
        Description:
      </OdsFormFieldLabel>

      <OdsTextarea name="textarea" />
    </OdsFormField>
}`,...(H=(A=m.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var N,V,X;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    return <OdsFormField invalid={count > MAX_COUNT}>
        <OdsFormFieldLabel>
          Description:
        </OdsFormFieldLabel>

        <OdsTextarea name="description" onInput={onInput} />

        <OdsFormFieldHelper style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <OdsText preset={ODS_TEXT_PRESET.caption}>
            Helper text
          </OdsText>

          <OdsText preset={ODS_TEXT_PRESET.caption}>
            {count}/{MAX_COUNT}
          </OdsText>
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error message
        </OdsFormFieldError>
      </OdsFormField>;
  }
}`,...(X=(V=c.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const w=["Demo","Default","Error","Helper","Label","Overview"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Demo:l,Error:n,Helper:d,Label:m,Overview:c,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{s as D,n as E,J as F,d as H,m as L,c as O};
