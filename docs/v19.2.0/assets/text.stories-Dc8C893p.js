import{e}from"./index-jIWwRBLr.js";import{T as t,b as C,a as r}from"./Text-vMb3-i8V.js";import{o as O,C as p}from"./controls-BtiQQn1l.js";const H={component:t,title:"React Components/Text"},a={argTypes:O({children:{table:{category:p.slot},control:"text"},preset:{table:{category:p.general,type:{summary:"TEXT_PRESET"}},control:{type:"select"},options:C}}),args:{children:"Lorem ipsum dolor sit amet"}},o={globals:{imports:"import { Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},n={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("figure",null,e.createElement("img",{alt:"OVHcloud logo",src:"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4",style:{height:"100px"}}),e.createElement("figcaption",null,e.createElement(t,{preset:r.caption},"My picture title")))},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},l={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{preset:r.caption},"Caption"),e.createElement("br",null),e.createElement(t,{preset:r.code},"Code"),e.createElement("br",null),e.createElement(t,{preset:r.label},"Label"),e.createElement(t,{preset:r.paragraph},"Paragraph"),e.createElement(t,{preset:r.span},"Span"),e.createElement("br",null),e.createElement(t,{preset:r.heading1},"Heading-1"),e.createElement(t,{preset:r.heading2},"Heading-2"),e.createElement(t,{preset:r.heading3},"Heading-3"),e.createElement(t,{preset:r.heading4},"Heading-4"),e.createElement(t,{preset:r.heading5},"Heading-5"),e.createElement(t,{preset:r.heading6},"Heading-6"))},c={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("table",{style:{border:"2px solid rgb(140 140 140)",borderCollapse:"collapse"}},e.createElement("caption",{style:{captionSide:"bottom"}},e.createElement(t,{preset:"caption"},"My table title")),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"Person"),e.createElement("th",{scope:"col"},"Age"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Chris"),e.createElement("td",null,"22"))))};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var T,E,g;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
}`,...(g=(E=o.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var u,h,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <figure>
      <img alt="OVHcloud logo" src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" style={{
      height: '100px'
    }} />

      <figcaption>
        <Text preset={TEXT_PRESET.caption}>
          My picture title
        </Text>
      </figcaption>
    </figure>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,_,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var y,P,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text preset={TEXT_PRESET.caption}>Caption</Text><br />
      <Text preset={TEXT_PRESET.code}>Code</Text><br />
      <Text preset={TEXT_PRESET.label}>Label</Text>
      <Text preset={TEXT_PRESET.paragraph}>Paragraph</Text>
      <Text preset={TEXT_PRESET.span}>Span</Text><br />
      <Text preset={TEXT_PRESET.heading1}>Heading-1</Text>
      <Text preset={TEXT_PRESET.heading2}>Heading-2</Text>
      <Text preset={TEXT_PRESET.heading3}>Heading-3</Text>
      <Text preset={TEXT_PRESET.heading4}>Heading-4</Text>
      <Text preset={TEXT_PRESET.heading5}>Heading-5</Text>
      <Text preset={TEXT_PRESET.heading6}>Heading-6</Text>
    </>
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var f,v,X;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <table style={{
    border: '2px solid rgb(140 140 140)',
    borderCollapse: 'collapse'
  }}>
      <caption style={{
      captionSide: 'bottom'
    }}>
        <Text preset="caption">
          My table title
        </Text>
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
}`,...(X=(v=c.parameters)==null?void 0:v.docs)==null?void 0:X.source}}};const L=["Demo","Default","FigCaption","Overview","Preset","TableCaption"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Demo:a,FigCaption:n,Overview:s,Preset:l,TableCaption:c,__namedExportsOrder:L,default:H},Symbol.toStringTag,{value:"Module"}));export{o as D,n as F,s as O,l as P,D as T,c as a};
