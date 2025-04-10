import{e,r as G}from"./index-E9JSHJbc.js";import{d as r,c as H,O as U,a as Y,b as z}from"./OdsTextarea-0yUmkQgv.js";import{O as u,a as p}from"./OdsText-CkwfP8Kl.js";import{o as j,C as a}from"./controls-CQ2mnOwv.js";const I={component:r,title:"ODS Components/Form elements/Textarea"},t={argTypes:j({cols:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},disabled:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},rows:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"}})},n={tags:["!dev"],render:({})=>e.createElement(r,null)},s={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},o={tags:["!dev"],render:({})=>{const[c,M]=G.useState(0);function h(w){M(w.target.value.length)}return e.createElement(H,{invalid:c>200},e.createElement(U,null,"Description:"),e.createElement(r,{name:"description",onInput:h}),e.createElement(Y,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(u,{preset:p.caption},"Helper text"),e.createElement(u,{preset:p.caption},c,"/",200)),e.createElement(z,null,"Error message"))}},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},d={tags:["!dev"],render:({})=>e.createElement(r,{readOnly:!0})},m={tags:["!dev"],render:({})=>e.createElement(r,{style:{resize:"both"}})};var i,O,y;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: orderControls({
    cols: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
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
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
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
    },
    rows: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    }
  })
}`,...(y=(O=t.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var g,T,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTextarea />
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var E,F,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTextarea disabled />
}`,...(C=(F=s.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var f,x,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var v,R,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsTextarea />
}`,...(S=(R=l.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var A,D,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTextarea readOnly />
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var L,V,X;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsTextarea style={{
    resize: 'both'
  }} />
}`,...(X=(V=m.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const P=["Demo","Default","Disabled","FormField","Overview","ReadOnly","Resizable"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Demo:t,Disabled:s,FormField:o,Overview:l,ReadOnly:d,Resizable:m,__namedExportsOrder:P,default:I},Symbol.toStringTag,{value:"Module"}));export{n as D,o as F,l as O,d as R,Q as T,s as a,m as b};
