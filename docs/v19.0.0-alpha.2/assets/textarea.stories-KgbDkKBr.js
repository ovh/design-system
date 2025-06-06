import{e,r as G}from"./index-D_CmzhJ4.js";import{c as H,F as U,a as Y,b as z}from"./FormFieldLabel-BxxkSoC9.js";import{T as p,a as u}from"./Text-eeWNb4Wa.js";import{T as r}from"./Textarea-DH3wGpdQ.js";import{o as j,C as a}from"./controls-BtiQQn1l.js";const P={component:r,title:"ODS Components/Form elements/Textarea"},t={argTypes:j({cols:{table:{category:a.general,type:{summary:"number"}},control:"number"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},rows:{table:{category:a.general,type:{summary:"number"}},control:"number"}})},n={tags:["!dev"],render:({})=>e.createElement(r,null)},o={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},s={tags:["!dev"],render:({})=>{const[d,M]=G.useState(0);function I(w){M(w.target.value.length)}return e.createElement(H,{invalid:d>200},e.createElement(U,null,"Description:"),e.createElement(r,{name:"description",onInput:I}),e.createElement(Y,{style:{display:"flex",justifyContent:"space-between"}},e.createElement(p,{preset:u.caption},"Helper text"),e.createElement(p,{preset:u.caption},d,"/",200)),e.createElement(z,null,"Error message"))}},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Textarea"})},c={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},m={tags:["!dev"],render:({})=>e.createElement(r,{style:{resize:"both"}})};var i,y,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,b,O;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea />
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var E,F,C;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea disabled />
}`,...(C=(F=o.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var x,v,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(v=s.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var _,f,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Textarea placeholder="Textarea" />
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var A,N,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea defaultValue="Readonly" readOnly />
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var L,X,h;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Textarea style={{
    resize: 'both'
  }} />
}`,...(h=(X=m.parameters)==null?void 0:X.docs)==null?void 0:h.source}}};const V=["Demo","Default","Disabled","InFormField","Overview","ReadOnly","Resizable"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Demo:t,Disabled:o,InFormField:s,Overview:l,ReadOnly:c,Resizable:m,__namedExportsOrder:V,default:P},Symbol.toStringTag,{value:"Module"}));export{n as D,s as I,l as O,c as R,W as T,o as a,m as b};
