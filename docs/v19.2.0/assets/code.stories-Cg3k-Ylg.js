import{r as G,e as d}from"./index-jIWwRBLr.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as M}from"./index-CqY9YpN0.js";import{B as Y,d as B,c as H}from"./Button-Dwx1IzdD.js";import{b as P,C as k}from"./ClipboardTrigger-yRBIGquK.js";import{I as z,a as U}from"./icon-name-C581wThh.js";import{e as W,o as F,C as m}from"./controls-BtiQQn1l.js";const Z="_code_x2sq0_2",J="_code__preformat_x2sq0_14",K="_code__preformat__code_x2sq0_20",Q="_code__clipboard_x2sq0_23",X="_code__clipboard__trigger__button_x2sq0_27",r={code:Z,code__preformat:J,code__preformat__code:K,code__clipboard:Q,code__clipboard__trigger__button:X},e=G.forwardRef(({canCopy:i=!1,className:w,children:p,labelCopy:A,labelCopySuccess:I,onCopy:L,...D},V)=>o.jsxs("div",{className:M(r.code,w),"data-ods":"code",ref:V,role:i?"group":"",...D,children:[o.jsx("pre",{className:r.code__preformat,children:o.jsx("code",{className:r.code__preformat__code,children:p})}),i&&o.jsx(P,{className:r.code__clipboard,onCopy:L,value:p==null?void 0:p.toString(),children:o.jsx(k,{className:r.code__clipboard__trigger,labelCopy:A,labelCopySuccess:I,children:o.jsx(Y,{className:r.code__clipboard__trigger__button,size:H.sm,variant:B.ghost,children:o.jsx(z,{name:U.fileCopy})})})})]}));e.displayName="Code";e.__docgenInfo={description:"",methods:[],displayName:"Code",props:{canCopy:{required:!1,tsType:{name:"boolean"},description:"Whether the copy button is displayed.",defaultValue:{value:"false",computed:!1}},labelCopy:{required:!1,tsType:{name:"string"},description:"The initial tooltip label on copy button."},labelCopySuccess:{required:!1,tsType:{name:"string"},description:"The tooltip label on copy button after a successful copy."},onCopy:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the text is copied."}},composes:["ComponentPropsWithRef"]};const $={argTypes:W(["onCopy"]),component:e,title:"React Components/Code"},t={argTypes:F({canCopy:{table:{category:m.general},control:"boolean"},children:{table:{category:m.general},control:"text"},labelCopy:{table:{category:m.general,defaultValue:{summary:"Copy to clipboard"}},control:"text"},labelCopySuccess:{table:{category:m.general,defaultValue:{summary:"Copied"}},control:"text"}}),args:{children:"import { Text } from '@ovhcloud/ods-react';"}},a={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>d.createElement(e,null,"console.log('Hello world');")},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>d.createElement(e,{canCopy:!0},"import { Text } from '@ovhcloud/ods-react';")},n={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>d.createElement(e,{canCopy:!0},"import { Text } from '@ovhcloud/ods-react';")},c={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>d.createElement(e,{canCopy:!0,labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"},"console.log('Hello world');")},l={globals:{imports:"import { Code } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>d.createElement(e,null,`function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }`)};var u,_,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code>
      console.log('Hello world');
    </Code>
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,v,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Code canCopy>
      {\`import { Text } from '@ovhcloud/ods-react';\`}
    </Code>
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var x,h,O;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code canCopy>
      {\`import { Text } from '@ovhcloud/ods-react';\`}
    </Code>
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var N,S,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Code } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Code canCopy labelCopy="Click to copy" labelCopySuccess="Successfully copied">
      console.log('Hello world');
    </Code>
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var R,j,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const ee=["Demo","Default","Overview","CanCopy","CustomLabels","Multiline"],le=Object.freeze(Object.defineProperty({__proto__:null,CanCopy:n,CustomLabels:c,Default:a,Demo:t,Multiline:l,Overview:s,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{le as C,a as D,l as M,s as O,n as a,c as b};
