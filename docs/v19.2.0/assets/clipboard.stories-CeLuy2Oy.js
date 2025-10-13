import{e}from"./index-jIWwRBLr.js";import{C as r,a as o,b as a}from"./ClipboardTrigger-yRBIGquK.js";import{F as P,a as j}from"./FormFieldLabel-DW-nAxje.js";import{e as w,o as I,C as n}from"./controls-BtiQQn1l.js";const z={argTypes:w(["i18n","locale","onCopy"]),component:a,subcomponents:{ClipboardControl:o,ClipboardTrigger:r},title:"React Components/Clipboard"},t={render:l=>e.createElement(a,{disabled:l.disabled,value:l.value},e.createElement(o,{loading:l.loading,maskOption:{enable:!!l.masked}}),e.createElement(r,{labelCopy:l.labelCopy,labelCopySuccess:l.labelCopySuccess})),argTypes:I({disabled:{table:{category:n.general},control:"boolean"},labelCopy:{table:{category:n.general,defaultValue:{summary:"Copy"}},control:"text"},labelCopySuccess:{table:{category:n.general,defaultValue:{summary:"Copied"}},control:"text"},loading:{table:{category:n.general,type:{summary:"boolean"}},control:"boolean"},masked:{table:{category:n.general,type:{summary:"boolean"}},control:"boolean"},value:{table:{category:n.general},control:"text"}}),args:{value:"Clipboard"}},s={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{value:"Clipboard"},e.createElement(o,null),e.createElement(r,null))},d={parameters:{layout:"centered"},tags:["!dev"],render:({})=>e.createElement(a,{value:"Clipboard"},e.createElement(o,null),e.createElement(r,null))},i={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{value:"Masked"},e.createElement(o,{maskOption:{enable:!0}}),e.createElement(r,null))},p={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{value:"Custom labels"},e.createElement(o,null),e.createElement(r,{labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"}))},c={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{value:"Loading"},e.createElement(o,{loading:!0}),e.createElement(r,null))},b={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{value:"Disabled",disabled:!0},e.createElement(o,null),e.createElement(r,null))},m={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(P,null,e.createElement(j,null,"API key:"),e.createElement(a,{value:"loremipsum"},e.createElement(o,null),e.createElement(r,null)))};var C,g,u;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Clipboard disabled={arg.disabled} value={arg.value}>
      <ClipboardControl loading={arg.loading} maskOption={{
      enable: !!arg.masked
    }} />

      <ClipboardTrigger labelCopy={arg.labelCopy} labelCopySuccess={arg.labelCopySuccess} />
    </Clipboard>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Copy'
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
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
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
    value: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    }
  }),
  args: {
    value: 'Clipboard'
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,v,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var E,O,f;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(f=(O=d.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var F,S,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Masked">
      <ClipboardControl maskOption={{
      enable: true
    }} />

      <ClipboardTrigger />
    </Clipboard>
}`,...(L=(S=i.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var k,R,A;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Custom labels">
      <ClipboardControl />

      <ClipboardTrigger labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
    </Clipboard>
}`,...(A=(R=p.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var _,h,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Loading">
      <ClipboardControl loading />

      <ClipboardTrigger />
    </Clipboard>
}`,...(D=(h=c.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var x,G,N;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Disabled" disabled>
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(N=(G=b.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,M,V;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger, FormField, FormFieldLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        API key:
      </FormFieldLabel>

      <Clipboard value="loremipsum">
        <ClipboardControl />

        <ClipboardTrigger />
      </Clipboard>
    </FormField>
}`,...(V=(M=m.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const q=["Demo","Default","Overview","Masked","CustomLabels","Loading","Disabled","AccessibilityFormField"],Q=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:m,CustomLabels:p,Default:s,Demo:t,Disabled:b,Loading:c,Masked:i,Overview:d,__namedExportsOrder:q,default:z},Symbol.toStringTag,{value:"Module"}));export{m as A,Q as C,s as D,c as L,i as M,d as O,b as a,p as b};
