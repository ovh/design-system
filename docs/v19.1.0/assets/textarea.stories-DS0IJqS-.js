import{e,r as J}from"./index-D_CmzhJ4.js";import{F as p,a as u,b as B,c as K}from"./FormFieldLabel-DQkMrZpp.js";import{T as b,a as y}from"./Text-B1XN51Xz.js";import{T as r}from"./Textarea-DJ9iXjLq.js";import{o as Q,C as a}from"./controls-BtiQQn1l.js";import{s as W}from"./source-d0g_Nd0q.js";const Z={component:r,title:"React Components/Textarea"},t={argTypes:Q({cols:{table:{category:a.general,type:{summary:"number"}},control:"number"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},rows:{table:{category:a.general,type:{summary:"number"}},control:"number"}})},n={tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(u,null,"Description:"),e.createElement(r,null),e.createElement(B,null,"Enter a brief description"))},o={tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(u,null,"Description:"),e.createElement(r,null))},s={tags:["!dev"],render:({})=>e.createElement(r,null)},l={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},c={tags:["!dev"],parameters:{docs:{source:{...W()}}},render:({})=>{const[g,V]=J.useState(0);function k(q){V(q.target.value.length)}return e.createElement(p,{invalid:g>200},e.createElement(u,null,"Description:"),e.createElement(r,{name:"description",onInput:k}),e.createElement(B,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(b,{preset:y.caption},"Helper text"),e.createElement(b,{preset:y.caption},g,"/",200)),e.createElement(K,null,"Error message"))}},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Textarea"})},d={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},i={tags:["!dev"],render:({})=>e.createElement(r,{style:{resize:"both"}})};var T,F,E;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(F=t.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var O,C,v;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var x,R,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea />
    </FormField>
}`,...(f=(R=o.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var _,A,S;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea />
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var D,L,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea disabled />
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var X,h,H;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(H=(h=c.parameters)==null?void 0:h.docs)==null?void 0:H.source}}};var M,G,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Textarea placeholder="Textarea" />
}`,...(I=(G=m.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var Y,w,U;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea defaultValue="Readonly" readOnly />
}`,...(U=(w=d.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var z,j,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea style={{
    resize: 'both'
  }} />
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const $=["Demo","AccessibilityDescribedBy","AccessibilityFormField","Default","Disabled","InFormField","Overview","ReadOnly","Resizable"],le=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescribedBy:n,AccessibilityFormField:o,Default:s,Demo:t,Disabled:l,InFormField:c,Overview:m,ReadOnly:d,Resizable:i,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{o as A,s as D,c as I,m as O,d as R,le as T,n as a,l as b,i as c};
