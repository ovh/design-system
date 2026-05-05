import{e}from"./index-jIWwRBLr.js";import{T as t,b as j,a as r}from"./Text-CAQM6i-X.js";import{e as I,o as V,C as m}from"./controls-BtiQQn1l.js";const J={component:t,argTypes:I(["as"]),title:"React Components/Text"},a={argTypes:V({children:{table:{category:m.slot},control:"text"},disabled:{table:{category:m.general},control:"boolean"},preset:{table:{category:m.general,type:{summary:"TEXT_PRESET"}},control:{type:"select"},options:j}}),args:{children:"Lorem ipsum dolor sit amet"}},n={tags:["!dev"],render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},o={globals:{imports:"import { Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},s={globals:{imports:"import { Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{disabled:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},l={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("figure",null,e.createElement("img",{alt:"OVHcloud logo",src:"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4",style:{height:"100px"}}),e.createElement("figcaption",null,e.createElement(t,{preset:r.caption},"My picture title")))},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},p={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{preset:r.blockquote},"Blockquote"),e.createElement(t,{preset:r.caption},"Caption"),e.createElement("br",null),e.createElement(t,{preset:r.code},"Code"),e.createElement("br",null),e.createElement(t,{preset:r.label},"Label"),e.createElement(t,{preset:r.paragraph},"Paragraph"),e.createElement(t,{preset:r.small},"Small"),e.createElement("br",null),e.createElement(t,{preset:r.span},"Span"),e.createElement("br",null),e.createElement(t,{preset:r.heading1},"Heading-1"),e.createElement(t,{preset:r.heading2},"Heading-2"),e.createElement(t,{preset:r.heading3},"Heading-3"),e.createElement(t,{preset:r.heading4},"Heading-4"),e.createElement(t,{preset:r.heading5},"Heading-5"),e.createElement(t,{preset:r.heading6},"Heading-6"))},i={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{as:"span",preset:r.heading5},"I am a <span> using the heading5 preset style.")},T={globals:{imports:"import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("table",{style:{border:"2px solid rgb(140 140 140)",borderCollapse:"collapse"}},e.createElement("caption",{style:{captionSide:"bottom"}},e.createElement(t,{preset:"caption"},"My table title")),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"Person"),e.createElement("th",{scope:"col"},"Age"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Chris"),e.createElement("td",null,"22"))))},d={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",null,e.createElement(t,{preset:r.blockquote},"Blockquote"),e.createElement(t,{preset:r.caption},"Caption"),e.createElement("br",null),e.createElement(t,{preset:r.code},"Code"),e.createElement("br",null),e.createElement(t,{preset:r.label},"Label"),e.createElement(t,{preset:r.paragraph},"Paragraph"),e.createElement(t,{preset:r.small},"Small"),e.createElement("br",null),e.createElement(t,{preset:r.span},"Span"),e.createElement("br",null),e.createElement(t,{preset:r.heading1},"Heading-1"),e.createElement(t,{preset:r.heading2},"Heading-2"),e.createElement(t,{preset:r.heading3},"Heading-3"),e.createElement(t,{preset:r.heading4},"Heading-4"),e.createElement(t,{preset:r.heading5},"Heading-5"),e.createElement(t,{preset:r.heading6},"Heading-6"))};var E,g,u;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,_,R;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
}`,...(R=(_=o.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var P,y,X;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Text disabled>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
}`,...(X=(y=s.parameters)==null?void 0:y.docs)==null?void 0:X.source}}};var v,f,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var H,O,L;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var k,q,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text preset={TEXT_PRESET.blockquote}>Blockquote</Text>
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
}`,...(w=(q=p.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var A,D,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Text as="span" preset={TEXT_PRESET.heading5}>
      I am a &lt;span&gt; using the heading5 preset style.
    </Text>
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var z,F,M;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(F=T.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var B,N,Y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div>
      <Text preset={TEXT_PRESET.blockquote}>Blockquote</Text>
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
}`,...(Y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};const K=["Demo","AnatomyTech","Default","Disabled","FigCaption","Overview","Preset","ReuseStyle","TableCaption","ThemeGenerator"],Z=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:n,Default:o,Demo:a,Disabled:s,FigCaption:l,Overview:c,Preset:p,ReuseStyle:i,TableCaption:T,ThemeGenerator:d,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{n as A,o as D,l as F,c as O,p as P,i as R,Z as T,s as a,T as b};
