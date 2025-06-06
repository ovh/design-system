import{e}from"./index-D_CmzhJ4.js";import{c as ee,O as ae}from"./OdsFormFieldLabel-DQU1mNMu.js";import{O as a,a as b,b as r}from"./OdsInput-wcKSK-Or.js";import{e as re,o as te,C as t}from"./controls-BtiQQn1l.js";const ne={argTypes:re(["onClear"]),component:a,title:"ODS Components/Form elements/Input"},n={argTypes:te({clearable:{table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},disabled:{table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},maskOption:{table:{category:t.general,defaultValue:{summary:"ø"}},control:"object"},placeholder:{table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},readOnly:{table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},type:{table:{category:t.general,defaultValue:{summary:r.text},type:{summary:b}},control:{type:"select"},options:b}})},l={tags:["!dev"],render:({})=>e.createElement(a,{clearable:!0,defaultValue:"Clearable"})},o={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{list:"ice-cream-flavors"}),e.createElement("datalist",{id:"ice-cream-flavors"},e.createElement("option",{value:"Chocolate"}),e.createElement("option",{value:"Coconut"}),e.createElement("option",{value:"Mint"}),e.createElement("option",{value:"Strawberry"}),e.createElement("option",{value:"Vanilla"})))},s={tags:["!dev"],render:({})=>e.createElement(a,null)},c={tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0})},d={tags:["!dev"],render:({})=>e.createElement(a,{defaultValue:"9.99",step:"any",type:r.number})},m={tags:["!dev"],render:({})=>e.createElement(ee,null,e.createElement(ae,null,"Name:"),e.createElement(a,null))},u={tags:["!dev"],render:({})=>e.createElement(a,{loading:!0})},p={tags:["!dev"],render:({})=>e.createElement(a,{maskOption:{enable:!0}})},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{placeholder:"Input"})},y={tags:["!dev"],render:({})=>e.createElement(a,{defaultValue:"Readonly",readOnly:!0})},g={decorators:[$=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},$())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{type:r.email,placeholder:"email"}),e.createElement("br",null),e.createElement(a,{type:r.number,placeholder:"number"}),e.createElement("br",null),e.createElement(a,{type:r.password,placeholder:"password"}),e.createElement("br",null),e.createElement(a,{type:r.search,placeholder:"search"}),e.createElement("br",null),e.createElement(a,{type:r.text,placeholder:"text"}),e.createElement("br",null),e.createElement(a,{type:r.time,placeholder:"time"}),e.createElement("br",null),e.createElement(a,{type:r.url,placeholder:"url"}),e.createElement("br",null))};var O,E,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  argTypes: orderControls({
    clearable: {
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
    loading: {
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
    maskOption: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'object'
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
    type: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_INPUT_TYPE.text
        },
        type: {
          summary: ODS_INPUT_TYPES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_INPUT_TYPES
    }
  })
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var v,_,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsInput clearable defaultValue="Clearable" />
}`,...(f=(_=l.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var I,S,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsInput list="ice-cream-flavors" />

      <datalist id="ice-cream-flavors">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
    </>
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var P,F,N;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsInput />
}`,...(N=(F=s.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var h,D,V;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsInput disabled />
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,Y,x;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsInput defaultValue="9.99" step="any" type={ODS_INPUT_TYPE.number} />
}`,...(x=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var L,U,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsFormField>
      <OdsFormFieldLabel>
        Name:
      </OdsFormFieldLabel>

      <OdsInput />
    </OdsFormField>
}`,...(w=(U=m.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var A,G,k;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsInput loading />
}`,...(k=(G=u.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var M,j,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsInput maskOption={{
    enable: true
  }} />
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var q,B,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsInput placeholder="Input" />
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsInput defaultValue="Readonly" readOnly />
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsInput type={ODS_INPUT_TYPE.email} placeholder="email" /><br />
      <OdsInput type={ODS_INPUT_TYPE.number} placeholder="number" /><br />
      <OdsInput type={ODS_INPUT_TYPE.password} placeholder="password" /><br />
      <OdsInput type={ODS_INPUT_TYPE.search} placeholder="search" /><br />
      <OdsInput type={ODS_INPUT_TYPE.text} placeholder="text" /><br />
      <OdsInput type={ODS_INPUT_TYPE.time} placeholder="time" /><br />
      <OdsInput type={ODS_INPUT_TYPE.url} placeholder="url" /><br />
    </>
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const le=["Demo","Clearable","Datalist","Default","Disabled","FloatingNumber","FormField","Loading","Masked","Overview","ReadOnly","Types"],me=Object.freeze(Object.defineProperty({__proto__:null,Clearable:l,Datalist:o,Default:s,Demo:n,Disabled:c,FloatingNumber:d,FormField:m,Loading:u,Masked:p,Overview:i,ReadOnly:y,Types:g,__namedExportsOrder:le,default:ne},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,d as F,me as I,u as L,p as M,i as O,y as R,g as T,c as a,o as b,m as c};
