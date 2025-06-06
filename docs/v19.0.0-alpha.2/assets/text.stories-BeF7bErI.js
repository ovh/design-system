import{e}from"./index-D_CmzhJ4.js";import{T as t,b as H}from"./Text-eeWNb4Wa.js";import{o as P,C as l}from"./controls-BtiQQn1l.js";const L={component:t,title:"ODS Components/Text"},r={argTypes:P({children:{table:{category:l.slot},control:"text"},preset:{table:{category:l.general,type:{summary:"TEXT_PRESET"}},control:{type:"select"},options:H}}),args:{children:"Lorem ipsum dolor sit amet"}},a={tags:["!dev"],render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},o={tags:["!dev"],render:({})=>e.createElement("figure",null,e.createElement("img",{alt:"OVHcloud logo",src:"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4",style:{height:"100px"}}),e.createElement("figcaption",null,e.createElement(t,{preset:"caption"},"My picture title")))},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},s={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{preset:"caption"},"Caption"),e.createElement("br",null),e.createElement(t,{preset:"code"},"Code"),e.createElement("br",null),e.createElement(t,{preset:"label"},"Label"),e.createElement(t,{preset:"paragraph"},"Paragraph"),e.createElement(t,{preset:"span"},"Span"),e.createElement("br",null),e.createElement(t,{preset:"heading-1"},"Heading-1"),e.createElement(t,{preset:"heading-2"},"Heading-2"),e.createElement(t,{preset:"heading-3"},"Heading-3"),e.createElement(t,{preset:"heading-4"},"Heading-4"),e.createElement(t,{preset:"heading-5"},"Heading-5"),e.createElement(t,{preset:"heading-6"},"Heading-6"))},c={tags:["!dev"],render:({})=>e.createElement("table",{style:{border:"2px solid rgb(140 140 140)",borderCollapse:"collapse"}},e.createElement("caption",{style:{captionSide:"bottom"}},e.createElement(t,{preset:"caption"},"My table title")),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"Person"),e.createElement("th",{scope:"col"},"Age"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Chris"),e.createElement("td",null,"22"))))};var p,i,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    preset: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'TEXT_PRESET'
        }
      },
      control: {
        type: 'select'
      },
      options: TEXT_PRESETS
    }
  }),
  args: {
    children: 'Lorem ipsum dolor sit amet'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,E,h;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <figure>
      <img alt="OVHcloud logo" src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" style={{
      height: '100px'
    }} />
      <figcaption>
        <Text preset="caption">My picture title</Text>
      </figcaption>
    </figure>
}`,...(h=(E=o.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var x,b,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var _,C,S;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Text preset="caption">Caption</Text><br />
      <Text preset="code">Code</Text><br />
      <Text preset="label">Label</Text>
      <Text preset="paragraph">Paragraph</Text>
      <Text preset="span">Span</Text><br />
      <Text preset="heading-1">Heading-1</Text>
      <Text preset="heading-2">Heading-2</Text>
      <Text preset="heading-3">Heading-3</Text>
      <Text preset="heading-4">Heading-4</Text>
      <Text preset="heading-5">Heading-5</Text>
      <Text preset="heading-6">Heading-6</Text>
    </>
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var f,O,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <table style={{
    border: '2px solid rgb(140 140 140)',
    borderCollapse: 'collapse'
  }}>
      <caption style={{
      captionSide: 'bottom'
    }}>
        <Text preset="caption">My table title</Text>
      </caption>
      <thead>
      <tr>
        <th scope="col">Person</th>
        <th scope="col">Age</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Chris</th>
        <td>22</td>
      </tr>
      </tbody>
    </table>
}`,...(v=(O=c.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const w=["Demo","Default","FigCaption","Overview","Preset","TableCaption"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Demo:r,FigCaption:o,Overview:n,Preset:s,TableCaption:c,__namedExportsOrder:w,default:L},Symbol.toStringTag,{value:"Module"}));export{a as D,o as F,n as O,s as P,A as T,c as a};
