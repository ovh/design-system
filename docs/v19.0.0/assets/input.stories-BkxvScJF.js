import{e}from"./index-D_CmzhJ4.js";import{c as re,F as ae}from"./FormFieldLabel-DjB85afw.js";import{I as r,a as te,b as t}from"./Input-Pkw6XJuX.js";import{e as ne,o as oe,C as a}from"./controls-BtiQQn1l.js";const le={argTypes:ne(["maskOption","onClear"]),component:r,title:"React Components/Input"},n={render:y=>{const{masked:$,...ee}=y;return e.createElement(r,{maskOption:{enable:!!$},...ee})},argTypes:oe({clearable:{table:{category:a.general},control:"boolean"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},invalid:{table:{category:a.general},control:"boolean"},loading:{table:{category:a.general},control:"boolean"},masked:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},type:{table:{category:a.general,type:{summary:"INPUT_TYPE"}},control:{type:"select"},options:te}})},o={tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},l={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{list:"ice-cream-flavors"}),e.createElement("datalist",{id:"ice-cream-flavors"},e.createElement("option",{value:"Chocolate"}),e.createElement("option",{value:"Coconut"}),e.createElement("option",{value:"Mint"}),e.createElement("option",{value:"Strawberry"}),e.createElement("option",{value:"Vanilla"})))},s={tags:["!dev"],render:({})=>e.createElement(r,null)},c={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},d={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"9.99",step:"any",type:t.number})},p={tags:["!dev"],render:({})=>e.createElement(re,null,e.createElement(ae,null,"Name:"),e.createElement(r,null))},m={tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},u={tags:["!dev"],render:({})=>e.createElement(r,{maskOption:{enable:!0}})},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Input"})},g={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},b={decorators:[y=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px",alignItems:"start"}},y())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{type:t.email,placeholder:"email"}),e.createElement("br",null),e.createElement(r,{type:t.number,placeholder:"number"}),e.createElement("br",null),e.createElement(r,{type:t.password,placeholder:"password"}),e.createElement("br",null),e.createElement(r,{type:t.search,placeholder:"search"}),e.createElement("br",null),e.createElement(r,{type:t.text,placeholder:"text"}),e.createElement("br",null),e.createElement(r,{type:t.time,placeholder:"time"}),e.createElement("br",null),e.createElement(r,{type:t.url,placeholder:"url"}),e.createElement("br",null))};var E,T,v;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var O,I,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input clearable defaultValue="Clearable" />
}`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var _,P,N;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var F,h,R;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input />
}`,...(R=(h=s.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var f,Y,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input disabled />
}`,...(S=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:S.source}}};var x,L,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="9.99" step="any" type={INPUT_TYPE.number} />
}`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var U,k,D;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var w,G,V;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input loading />
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var M,j,z;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input maskOption={{
    enable: true
  }} />
}`,...(z=(j=u.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var q,B,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Input placeholder="Input" />
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="Readonly" readOnly />
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const se=["Demo","Clearable","Datalist","Default","Disabled","FloatingNumber","InFormField","Loading","Masked","Overview","ReadOnly","Types"],ue=Object.freeze(Object.defineProperty({__proto__:null,Clearable:o,Datalist:l,Default:s,Demo:n,Disabled:c,FloatingNumber:d,InFormField:p,Loading:m,Masked:u,Overview:i,ReadOnly:g,Types:b,__namedExportsOrder:se,default:le},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,d as F,ue as I,m as L,u as M,i as O,g as R,b as T,c as a,l as b,p as c};
