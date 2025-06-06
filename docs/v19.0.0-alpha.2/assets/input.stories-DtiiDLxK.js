import{e}from"./index-D_CmzhJ4.js";import{c as re,F as ae}from"./FormFieldLabel-BxxkSoC9.js";import{I as r,a as te,b as a}from"./Input-BHPevcdA.js";import{e as ne,o as oe,C as t}from"./controls-BtiQQn1l.js";const le={argTypes:ne(["maskOption","onClear"]),component:r,title:"ODS Components/Form elements/Input"},n={render:b=>{const{masked:$,...ee}=b;return e.createElement(r,{maskOption:{enable:!!$},...ee})},argTypes:oe({clearable:{table:{category:t.general},control:"boolean"},disabled:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:t.general},control:"boolean"},masked:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:t.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},type:{table:{category:t.general,type:{summary:"INPUT_TYPE"}},control:{type:"select"},options:te}})},o={tags:["!dev"],render:({})=>e.createElement(r,{clearable:!0,defaultValue:"Clearable"})},l={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{list:"ice-cream-flavors"}),e.createElement("datalist",{id:"ice-cream-flavors"},e.createElement("option",{value:"Chocolate"}),e.createElement("option",{value:"Coconut"}),e.createElement("option",{value:"Mint"}),e.createElement("option",{value:"Strawberry"}),e.createElement("option",{value:"Vanilla"})))},s={tags:["!dev"],render:({})=>e.createElement(r,null)},c={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0})},p={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"9.99",step:"any",type:a.number})},d={tags:["!dev"],render:({})=>e.createElement(re,null,e.createElement(ae,null,"Name:"),e.createElement(r,null))},m={tags:["!dev"],render:({})=>e.createElement(r,{loading:!0})},u={tags:["!dev"],render:({})=>e.createElement(r,{maskOption:{enable:!0}})},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{placeholder:"Input"})},g={tags:["!dev"],render:({})=>e.createElement(r,{defaultValue:"Readonly",readOnly:!0})},y={decorators:[b=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},b())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{type:a.email,placeholder:"email"}),e.createElement("br",null),e.createElement(r,{type:a.number,placeholder:"number"}),e.createElement("br",null),e.createElement(r,{type:a.password,placeholder:"password"}),e.createElement("br",null),e.createElement(r,{type:a.search,placeholder:"search"}),e.createElement("br",null),e.createElement(r,{type:a.text,placeholder:"text"}),e.createElement("br",null),e.createElement(r,{type:a.time,placeholder:"time"}),e.createElement("br",null),e.createElement(r,{type:a.url,placeholder:"url"}),e.createElement("br",null))};var E,T,v;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var P,_,F;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(_=l.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var N,h,f;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input />
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var R,Y,S;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input disabled />
}`,...(S=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:S.source}}};var x,L,U;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Input defaultValue="9.99" step="any" type={INPUT_TYPE.number} />
}`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var k,A,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var w,G,V;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const se=["Demo","Clearable","Datalist","Default","Disabled","FloatingNumber","InFormField","Loading","Masked","Overview","ReadOnly","Types"],ue=Object.freeze(Object.defineProperty({__proto__:null,Clearable:o,Datalist:l,Default:s,Demo:n,Disabled:c,FloatingNumber:p,InFormField:d,Loading:m,Masked:u,Overview:i,ReadOnly:g,Types:y,__namedExportsOrder:se,default:le},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,p as F,ue as I,m as L,u as M,i as O,g as R,y as T,c as a,l as b,d as c};
