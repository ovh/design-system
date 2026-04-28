import{l as V}from"./typescript-DU2lJCEK.js";import{t as W}from"./nord-Cm2omLQ2.js";import{e}from"./index-jIWwRBLr.js";import{C as o}from"./Code-BeNYFw9y.js";import{e as P,o as I,C as p}from"./controls-BtiQQn1l.js";const z={argTypes:P(["highlighter","onCopy"]),component:o,title:"React Components/Code"},r={argTypes:I({canCopy:{table:{category:p.general},control:"boolean"},children:{table:{category:p.general},control:"text"},labelCopy:{table:{category:p.general,defaultValue:{summary:"Copy to clipboard"}},control:"text"},labelCopySuccess:{table:{category:p.general,defaultValue:{summary:"Copied"}},control:"text"}}),args:{children:"import { Text } from '@ovhcloud/ods-react';"}},t={tags:["!dev"],render:({})=>e.createElement(o,{canCopy:!0},"import { Text } from '@ovhcloud/ods-react';")},a={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,"console.log('Hello world');")},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,{canCopy:!0},"import { Text } from '@ovhcloud/ods-react';")},s={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{canCopy:!0},"import { Text } from '@ovhcloud/ods-react';")},l={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{canCopy:!0,labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"},"console.log('Hello world');")},c={globals:{imports:`import { Code } from '@ovhcloud/ods-react';
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';`},tags:["!dev"],render:({})=>e.createElement(o,{highlighter:{language:V,theme:W}},"console.log('Hello World');")},d={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,`function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }`)},m={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:600}},e.createElement(o,null,"console.log('Hello world');"),e.createElement(o,{canCopy:!0},"import { Text } from '@ovhcloud/ods-react';"),e.createElement(o,{canCopy:!0,labelCopy:"Copy",labelCopySuccess:"Copied!"},"const sum = (a, b) => a + b;"))};var i,u,C;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: orderControls({
    canCopy: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Copy to clipboard'
        }
      },
      control: 'text'
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Copied'
        }
      },
      control: 'text'
    }
  }),
  args: {
    children: \`import { Text } from '@ovhcloud/ods-react';\`
  }
}`,...(C=(u=r.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var g,y,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Code canCopy>
      {\`import { Text } from '@ovhcloud/ods-react';\`}
    </Code>
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,v,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code>
      console.log('Hello world');
    </Code>
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,x,O;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Code canCopy>
      {\`import { Text } from '@ovhcloud/ods-react';\`}
    </Code>
}`,...(O=(x=n.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var S,E,H;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code canCopy>
      {\`import { Text } from '@ovhcloud/ods-react';\`}
    </Code>
}`,...(H=(E=s.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,_,w;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code canCopy labelCopy="Click to copy" labelCopySuccess="Successfully copied">
      console.log('Hello world');
    </Code>
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var A,D,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code highlighter={{
    language: lang,
    theme: theme
  }}>
      console.log('Hello World');
    </Code>
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var L,j,k;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code>
      {\`function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }\`}
    </Code>
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,Y,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: 600
  }}>
      <Code>
        console.log('Hello world');
      </Code>

      <Code canCopy>
        {\`import { Text } from '@ovhcloud/ods-react';\`}
      </Code>

      <Code canCopy labelCopy="Copy" labelCopySuccess="Copied!">
        {\`const sum = (a, b) => a + b;\`}
      </Code>
    </div>
}`,...(M=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};const F=["Demo","AnatomyTech","Default","Overview","CanCopy","CustomLabels","Highlighter","Multiline","ThemeGenerator"],U=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:t,CanCopy:s,CustomLabels:l,Default:a,Demo:r,Highlighter:c,Multiline:d,Overview:n,ThemeGenerator:m,__namedExportsOrder:F,default:z},Symbol.toStringTag,{value:"Module"}));export{t as A,U as C,a as D,c as H,d as M,n as O,s as a,l as b};
