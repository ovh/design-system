import{e}from"./index-D_CmzhJ4.js";import{F as I,a as v}from"./FormFieldLabel-DQkMrZpp.js";import{I as r,a as ue,b as t,c as F}from"./Input-DtgH68sh.js";import{e as ie,o as ge,C as a}from"./controls-BtiQQn1l.js";import{s as be}from"./source-d0g_Nd0q.js";const ye={argTypes:ie(["i18n","locale","maskOption","onClear"]),component:r,title:"React Components/Input"},n={render:T=>{const{masked:me,...pe}=T;return e.createElement(r,{maskOption:{enable:!!me},...pe})},argTypes:ge({clearable:{table:{category:a.general},control:"boolean"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},loading:{table:{category:a.general},control:"boolean"},masked:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},type:{table:{category:a.general,type:{summary:"INPUT_TYPE"}},control:{type:"select"},options:ue}})},o={tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},l={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{list:"ice-cream-flavors"}),e.createElement("datalist",{id:"ice-cream-flavors"},e.createElement("option",{value:"Chocolate"}),e.createElement("option",{value:"Coconut"}),e.createElement("option",{value:"Mint"}),e.createElement("option",{value:"Strawberry"}),e.createElement("option",{value:"Vanilla"})))},s={tags:["!dev"],render:({})=>e.createElement(r,null)},c={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},d={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"9.99",step:"any",type:t.number})},m={tags:["!dev"],render:({})=>e.createElement(I,null,e.createElement(v,null,"Name:"),e.createElement(r,null))},p={tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},u={tags:["!dev"],render:({})=>e.createElement(r,{maskOption:{enable:!0}})},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Input"})},g={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},b={decorators:[T=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px",alignItems:"start"}},T())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{type:t.email,placeholder:"email"}),e.createElement("br",null),e.createElement(r,{type:t.number,placeholder:"number"}),e.createElement("br",null),e.createElement(r,{type:t.password,placeholder:"password"}),e.createElement("br",null),e.createElement(r,{type:t.search,placeholder:"search"}),e.createElement("br",null),e.createElement(r,{type:t.text,placeholder:"text"}),e.createElement("br",null),e.createElement(r,{type:t.time,placeholder:"time"}),e.createElement("br",null),e.createElement(r,{type:t.url,placeholder:"url"}),e.createElement("br",null))},y={tags:["!dev"],render:({})=>e.createElement(I,null,e.createElement(v,null,"Name:"),e.createElement(r,null))},E={tags:["!dev"],parameters:{docs:{source:{...be()}}},render:({})=>e.createElement(I,null,e.createElement(v,null,"Search:"),e.createElement(r,{clearable:!0,defaultValue:"my search",i18n:{[F.clearButton]:"Clear current search",[F.searchButton]:"Search in database"},type:"search"}))};var O,C,h;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (arg: DemoArg) => {
    const {
      masked,
      ...inputArg
    } = arg;
    return <Input maskOption={{
      enable: !!masked
    }} {...inputArg} />;
  },
  argTypes: orderControls({
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
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
    loading: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    masked: {
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
    type: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'INPUT_TYPE'
        }
      },
      control: {
        type: 'select'
      },
      options: INPUT_TYPES
    }
  })
}`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var N,_,P;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input clearable defaultValue="Clearable" />
}`,...(P=(_=o.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var f,S,R;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Input list="ice-cream-flavors" />

      <datalist id="ice-cream-flavors">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
    </>
}`,...(R=(S=l.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var Y,L,A;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input />
}`,...(A=(L=s.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var U,x,k;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input disabled />
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,w,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="9.99" step="any" type={INPUT_TYPE.number} />
}`,...(V=(w=d.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var G,M,B;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
}`,...(B=(M=m.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var j,z,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input loading />
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input maskOption={{
    enable: true
  }} />
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Input placeholder="Input" />
}`,...(X=(W=i.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="Readonly" readOnly />
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px',
    alignItems: 'start'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Input type={INPUT_TYPE.email} placeholder="email" /><br />
      <Input type={INPUT_TYPE.number} placeholder="number" /><br />
      <Input type={INPUT_TYPE.password} placeholder="password" /><br />
      <Input type={INPUT_TYPE.search} placeholder="search" /><br />
      <Input type={INPUT_TYPE.text} placeholder="text" /><br />
      <Input type={INPUT_TYPE.time} placeholder="time" /><br />
      <Input type={INPUT_TYPE.url} placeholder="url" /><br />
    </>
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,oe,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
}`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ce,de;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <FormField>
      <FormFieldLabel>
        Search:
      </FormFieldLabel>

      <Input clearable defaultValue="my search" i18n={{
      [INPUT_I18N.clearButton]: 'Clear current search',
      [INPUT_I18N.searchButton]: 'Search in database'
    }} type='search' />
    </FormField>
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Ee=["Demo","Clearable","Datalist","Default","Disabled","FloatingNumber","InFormField","Loading","Masked","Overview","ReadOnly","Types","AccessibilityFormField","AccessibilityI18n"],Ce=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:y,AccessibilityI18n:E,Clearable:o,Datalist:l,Default:s,Demo:n,Disabled:c,FloatingNumber:d,InFormField:m,Loading:p,Masked:u,Overview:i,ReadOnly:g,Types:b,__namedExportsOrder:Ee,default:ye},Symbol.toStringTag,{value:"Module"}));export{y as A,o as C,s as D,d as F,Ce as I,p as L,u as M,i as O,g as R,b as T,E as a,c as b,l as c,m as d};
