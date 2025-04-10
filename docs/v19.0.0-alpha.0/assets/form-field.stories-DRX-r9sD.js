import{e,r as h}from"./index-E9JSHJbc.js";import{O as i,a as u,b as p,c as t,d as l}from"./OdsTextarea-0yUmkQgv.js";import{O,a as F}from"./OdsText-CkwfP8Kl.js";import{o as U,C as a}from"./controls-CQ2mnOwv.js";const P={argTypes:{required:{table:{disable:!0}}},component:t,subcomponents:{OdsFormFieldError:p,OdsFormFieldHelper:u,OdsFormFieldLabel:i},title:"ODS Components/Form elements/FormField"},o={render:r=>e.createElement(t,{disabled:r.disabled,invalid:r.invalid,readOnly:r.readOnly},e.createElement(i,null,r.label),e.createElement(l,{name:"demo"}),e.createElement(u,null,r.helperText),e.createElement(p,null,r.errorText)),argTypes:U({disabled:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},errorText:{table:{category:a.slot,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},helperText:{table:{category:a.slot,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},invalid:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:a.slot,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"}})},s={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(l,{name:"textarea"}))},n={tags:["!dev"],render:({})=>e.createElement(t,{invalid:!0},e.createElement(l,{name:"textarea"}),e.createElement(p,null,"Error message"))},d={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(l,{name:"textarea"}),e.createElement(u,null,e.createElement(O,{preset:F.caption},"Helper text")))},m={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(i,null,"Description:"),e.createElement(l,{name:"textarea"}))},c={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const[y,M]=h.useState(0);function G(Y){M(Y.target.value.length)}return e.createElement(t,{invalid:y>200},e.createElement(i,null,"Description:"),e.createElement(l,{name:"description",onInput:G}),e.createElement(u,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(O,{preset:F.caption},"Helper text"),e.createElement(O,{preset:F.caption},y,"/",200)),e.createElement(p,null,"Error message"))}};var E,T,g;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(g=(T=o.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var b,x,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsFormField>
      <OdsTextarea name="textarea" />
    </OdsFormField>
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,f,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var A,D,H;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsFormField>
      <OdsFormFieldLabel>
        Description:
      </OdsFormFieldLabel>

      <OdsTextarea name="textarea" />
    </OdsFormField>
}`,...(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var N,V,X;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(X=(V=c.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const j=["Demo","Default","Error","Helper","Label","Overview"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Demo:o,Error:n,Helper:d,Label:m,Overview:c,__namedExportsOrder:j,default:P},Symbol.toStringTag,{value:"Module"}));export{s as D,n as E,k as F,d as H,m as L,c as O};
