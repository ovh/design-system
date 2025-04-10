import{e}from"./index-E9JSHJbc.js";import{O as t,b as H,a as P}from"./OdsText-CkwfP8Kl.js";import{o as w,C as l}from"./controls-CQ2mnOwv.js";const D={component:t,title:"ODS Components/Text"},r={argTypes:w({children:{table:{category:l.slot,defaultValue:{summary:"ø"}},control:"text"},preset:{table:{category:l.general,defaultValue:{summary:P.paragraph},type:{summary:"string"}},control:{type:"select"},options:H}}),args:{children:"Lorem ipsum dolor sit amet"}},a={tags:["!dev"],render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},s={tags:["!dev"],render:({})=>e.createElement("figure",null,e.createElement("img",{alt:"OVHcloud logo",src:"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4",style:{height:"100px"}}),e.createElement("figcaption",null,e.createElement(t,{preset:"caption"},"My picture title")))},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},o={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{preset:"caption"},"Caption"),e.createElement("br",null),e.createElement(t,{preset:"code"},"Code"),e.createElement(t,{preset:"paragraph"},"Paragraph"),e.createElement(t,{preset:"span"},"Span"),e.createElement("br",null),e.createElement(t,{preset:"heading-1"},"Heading-1"),e.createElement(t,{preset:"heading-2"},"Heading-2"),e.createElement(t,{preset:"heading-3"},"Heading-3"),e.createElement(t,{preset:"heading-4"},"Heading-4"),e.createElement(t,{preset:"heading-5"},"Heading-5"),e.createElement(t,{preset:"heading-6"},"Heading-6"))},c={tags:["!dev"],render:({})=>e.createElement("table",{style:{border:"2px solid rgb(140 140 140)",borderCollapse:"collapse"}},e.createElement("caption",{style:{captionSide:"bottom"}},e.createElement(t,{preset:"caption"},"My table title")),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"Person"),e.createElement("th",{scope:"col"},"Age"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Chris"),e.createElement("td",null,"22"))))};var d,p,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    preset: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_TEXT_PRESET.paragraph
        },
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TEXT_PRESETS
    }
  }),
  args: {
    children: 'Lorem ipsum dolor sit amet'
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</OdsText>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,O,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <figure>
      <img alt="OVHcloud logo" src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" style={{
      height: '100px'
    }} />
      <figcaption>
        <OdsText preset="caption">My picture title</OdsText>
      </figcaption>
    </figure>
}`,...(h=(O=s.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var E,x,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</OdsText>
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,_,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsText preset="caption">Caption</OdsText><br />
      <OdsText preset="code">Code</OdsText>
      <OdsText preset="paragraph">Paragraph</OdsText>
      <OdsText preset="span">Span</OdsText><br />
      <OdsText preset="heading-1">Heading-1</OdsText>
      <OdsText preset="heading-2">Heading-2</OdsText>
      <OdsText preset="heading-3">Heading-3</OdsText>
      <OdsText preset="heading-4">Heading-4</OdsText>
      <OdsText preset="heading-5">Heading-5</OdsText>
      <OdsText preset="heading-6">Heading-6</OdsText>
    </>
}`,...(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var f,C,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <table style={{
    border: '2px solid rgb(140 140 140)',
    borderCollapse: 'collapse'
  }}>
      <caption style={{
      captionSide: 'bottom'
    }}>
        <OdsText preset="caption">My table title</OdsText>
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
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const R=["Demo","Default","FigCaption","Overview","Preset","TableCaption"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Demo:r,FigCaption:s,Overview:n,Preset:o,TableCaption:c,__namedExportsOrder:R,default:D},Symbol.toStringTag,{value:"Module"}));export{a as D,s as F,n as O,o as P,A as T,c as a};
