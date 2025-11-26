import{e}from"./index-jIWwRBLr.js";import{C as r,a,b as o}from"./ClipboardTrigger-Dbk-1h1o.js";import{F as z,a as q}from"./FormFieldLabel-B8-lDkmb.js";import{e as B,o as H,C as n}from"./controls-BtiQQn1l.js";const J={argTypes:B(["i18n","locale","onCopy"]),component:o,subcomponents:{ClipboardControl:a,ClipboardTrigger:r},title:"React Components/Clipboard"},t={render:l=>e.createElement(o,{disabled:l.disabled,value:l.value},e.createElement(a,{loading:l.loading,maskOption:{enable:!!l.masked}}),e.createElement(r,{labelCopy:l.labelCopy,labelCopySuccess:l.labelCopySuccess})),argTypes:H({disabled:{table:{category:n.general},control:"boolean"},labelCopy:{table:{category:n.general,defaultValue:{summary:"Copy"}},control:"text"},labelCopySuccess:{table:{category:n.general,defaultValue:{summary:"Copied"}},control:"text"},loading:{table:{category:n.general,type:{summary:"boolean"}},control:"boolean"},masked:{table:{category:n.general,type:{summary:"boolean"}},control:"boolean"},value:{table:{category:n.general},control:"text"}}),args:{value:"Clipboard"}},d={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Clipboard"},e.createElement(a,null),e.createElement(r,null))},s={parameters:{layout:"centered"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Clipboard"},e.createElement(a,null),e.createElement(r,null))},i={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Masked"},e.createElement(a,{maskOption:{enable:!0}}),e.createElement(r,null))},p={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Custom labels"},e.createElement(a,null),e.createElement(r,{labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"}))},c={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Loading"},e.createElement(a,{loading:!0}),e.createElement(r,null))},b={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Disabled",disabled:!0},e.createElement(a,null),e.createElement(r,null))},m={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(z,null,e.createElement(q,null,"API key:"),e.createElement(o,{value:"loremipsum"},e.createElement(a,null),e.createElement(r,null)))},C={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(o,{value:"Clipboard"},e.createElement(a,null),e.createElement(r,null)),e.createElement(o,{value:"Masked"},e.createElement(a,{maskOption:{enable:!0}}),e.createElement(r,null)),e.createElement(o,{value:"Loading"},e.createElement(a,{loading:!0}),e.createElement(r,null)),e.createElement(o,{value:"Disabled",disabled:!0},e.createElement(a,null),e.createElement(r,null)))};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,E,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var f,O,F;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(F=(O=s.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var S,L,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var x,R,h;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Custom labels">
      <ClipboardControl />

      <ClipboardTrigger labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
    </Clipboard>
}`,...(h=(R=p.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var A,D,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Loading">
      <ClipboardControl loading />

      <ClipboardTrigger />
    </Clipboard>
}`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var G,M,N;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Disabled" disabled>
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(N=(M=b.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Y,w,I;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var V,P,j;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <Clipboard value="Clipboard">
        <ClipboardControl />
        <ClipboardTrigger />
      </Clipboard>

      <Clipboard value="Masked">
        <ClipboardControl maskOption={{
        enable: true
      }} />
        <ClipboardTrigger />
      </Clipboard>

      <Clipboard value="Loading">
        <ClipboardControl loading />
        <ClipboardTrigger />
      </Clipboard>

      <Clipboard value="Disabled" disabled>
        <ClipboardControl />
        <ClipboardTrigger />
      </Clipboard>
    </div>
}`,...(j=(P=C.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const K=["Demo","Default","Overview","Masked","CustomLabels","Loading","Disabled","AccessibilityFormField","ThemeGenerator"],Z=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:m,CustomLabels:p,Default:d,Demo:t,Disabled:b,Loading:c,Masked:i,Overview:s,ThemeGenerator:C,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{m as A,Z as C,d as D,c as L,i as M,s as O,b as a,p as b};
