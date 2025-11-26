import{e}from"./index-jIWwRBLr.js";import{T as t,b as z,a as r}from"./Text-DyiJ5nHV.js";import{o as M,C as T}from"./controls-BtiQQn1l.js";const F={component:t,title:"React Components/Text"},a={argTypes:M({children:{table:{category:T.slot},control:"text"},disabled:{table:{category:T.general},control:"boolean"},preset:{table:{category:T.general,type:{summary:"TEXT_PRESET"}},control:{type:"select"},options:z}}),args:{children:"Lorem ipsum dolor sit amet"}},n={globals:{imports:"import { Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},o={globals:{imports:"import { Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{disabled:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},s={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("figure",null,e.createElement("img",{alt:"OVHcloud logo",src:"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4",style:{height:"100px"}}),e.createElement("figcaption",null,e.createElement(t,{preset:r.caption},"My picture title")))},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},c={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{preset:r.caption},"Caption"),e.createElement("br",null),e.createElement(t,{preset:r.code},"Code"),e.createElement("br",null),e.createElement(t,{preset:r.label},"Label"),e.createElement(t,{preset:r.paragraph},"Paragraph"),e.createElement(t,{preset:r.small},"Small"),e.createElement("br",null),e.createElement(t,{preset:r.span},"Span"),e.createElement("br",null),e.createElement(t,{preset:r.heading1},"Heading-1"),e.createElement(t,{preset:r.heading2},"Heading-2"),e.createElement(t,{preset:r.heading3},"Heading-3"),e.createElement(t,{preset:r.heading4},"Heading-4"),e.createElement(t,{preset:r.heading5},"Heading-5"),e.createElement(t,{preset:r.heading6},"Heading-6"))},p={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("table",{style:{border:"2px solid rgb(140 140 140)",borderCollapse:"collapse"}},e.createElement("caption",{style:{captionSide:"bottom"}},e.createElement(t,{preset:"caption"},"My table title")),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"Person"),e.createElement("th",{scope:"col"},"Age"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Chris"),e.createElement("td",null,"22"))))},i={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",null,e.createElement(t,{preset:r.caption},"Caption"),e.createElement("br",null),e.createElement(t,{preset:r.code},"Code"),e.createElement("br",null),e.createElement(t,{preset:r.label},"Label"),e.createElement(t,{preset:r.paragraph},"Paragraph"),e.createElement(t,{preset:r.small},"Small"),e.createElement("br",null),e.createElement(t,{preset:r.span},"Span"),e.createElement("br",null),e.createElement(t,{preset:r.heading1},"Heading-1"),e.createElement(t,{preset:r.heading2},"Heading-2"),e.createElement(t,{preset:r.heading3},"Heading-3"),e.createElement(t,{preset:r.heading4},"Heading-4"),e.createElement(t,{preset:r.heading5},"Heading-5"),e.createElement(t,{preset:r.heading6},"Heading-6"))};var d,m,E;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
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
}`,...(E=(m=a.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};var g,u,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,h,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Text disabled>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var _,P,R;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=s.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var y,X,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}`,...(v=(X=l.parameters)==null?void 0:X.docs)==null?void 0:v.source}}};var f,C,H;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text preset={TEXT_PRESET.caption}>Caption</Text><br />
      <Text preset={TEXT_PRESET.code}>Code</Text><br />
      <Text preset={TEXT_PRESET.label}>Label</Text>
      <Text preset={TEXT_PRESET.paragraph}>Paragraph</Text>
      <Text preset={TEXT_PRESET.small}>Small</Text><br />
      <Text preset={TEXT_PRESET.span}>Span</Text><br />
      <Text preset={TEXT_PRESET.heading1}>Heading-1</Text>
      <Text preset={TEXT_PRESET.heading2}>Heading-2</Text>
      <Text preset={TEXT_PRESET.heading3}>Heading-3</Text>
      <Text preset={TEXT_PRESET.heading4}>Heading-4</Text>
      <Text preset={TEXT_PRESET.heading5}>Heading-5</Text>
      <Text preset={TEXT_PRESET.heading6}>Heading-6</Text>
    </>
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var O,L,w;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(L=p.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var D,A,G;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div>
      <Text preset={TEXT_PRESET.caption}>Caption</Text><br />
      <Text preset={TEXT_PRESET.code}>Code</Text><br />
      <Text preset={TEXT_PRESET.label}>Label</Text>
      <Text preset={TEXT_PRESET.paragraph}>Paragraph</Text>
      <Text preset={TEXT_PRESET.small}>Small</Text><br />
      <Text preset={TEXT_PRESET.span}>Span</Text><br />
      <Text preset={TEXT_PRESET.heading1}>Heading-1</Text>
      <Text preset={TEXT_PRESET.heading2}>Heading-2</Text>
      <Text preset={TEXT_PRESET.heading3}>Heading-3</Text>
      <Text preset={TEXT_PRESET.heading4}>Heading-4</Text>
      <Text preset={TEXT_PRESET.heading5}>Heading-5</Text>
      <Text preset={TEXT_PRESET.heading6}>Heading-6</Text>
    </div>
}`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const N=["Demo","Default","Disabled","FigCaption","Overview","Preset","TableCaption","ThemeGenerator"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Demo:a,Disabled:o,FigCaption:s,Overview:l,Preset:c,TableCaption:p,ThemeGenerator:i,__namedExportsOrder:N,default:F},Symbol.toStringTag,{value:"Module"}));export{n as D,s as F,l as O,c as P,q as T,o as a,p as b};
