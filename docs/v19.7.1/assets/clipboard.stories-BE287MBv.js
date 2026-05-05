import{e}from"./index-jIWwRBLr.js";import{C as r,a,b as o}from"./index-Br7IW9i3.js";import{F as J,a as K}from"./index-B0M5RXeR.js";import{e as Q,o as U,C as t}from"./controls-BtiQQn1l.js";const W={argTypes:Q(["i18n","locale","onCopy"]),component:o,subcomponents:{ClipboardControl:a,ClipboardTrigger:r},title:"React Components/Clipboard"},n={render:l=>e.createElement(o,{disabled:l.disabled,value:l.value},e.createElement(a,{loading:l.loading,maskOption:{enable:!!l.masked}}),e.createElement(r,{labelCopy:l.labelCopy,labelCopySuccess:l.labelCopySuccess})),argTypes:U({disabled:{table:{category:t.general},control:"boolean"},labelCopy:{table:{category:t.general,defaultValue:{summary:"Copy"}},control:"text"},labelCopySuccess:{table:{category:t.general,defaultValue:{summary:"Copied"}},control:"text"},loading:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},masked:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},value:{table:{category:t.general},control:"text"}}),args:{value:"Clipboard"}},d={tags:["!dev"],render:({})=>e.createElement(o,{value:"Clipboard"},e.createElement(a,null),e.createElement(r,null))},s={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Clipboard"},e.createElement(a,null),e.createElement(r,null))},i={parameters:{layout:"centered"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Clipboard"},e.createElement(a,null),e.createElement(r,null))},p={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Masked"},e.createElement(a,{maskOption:{enable:!0}}),e.createElement(r,null))},c={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Custom labels"},e.createElement(a,null),e.createElement(r,{labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"}))},m={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Loading"},e.createElement(a,{loading:!0}),e.createElement(r,null))},b={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Disabled",disabled:!0},e.createElement(a,null),e.createElement(r,null))},C={globals:{imports:"import { Clipboard, ClipboardControl, ClipboardTrigger, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(J,null,e.createElement(K,null,"API key:"),e.createElement(o,{value:"loremipsum"},e.createElement(a,null),e.createElement(r,null)))},u={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(o,{value:"Clipboard"},e.createElement(a,null),e.createElement(r,null)),e.createElement(o,{value:"Masked"},e.createElement(a,{maskOption:{enable:!0}}),e.createElement(r,null)),e.createElement(o,{value:"Loading"},e.createElement(a,{loading:!0}),e.createElement(r,null)),e.createElement(o,{value:"Disabled",disabled:!0},e.createElement(a,null),e.createElement(r,null)))};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var E,T,f;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(f=(T=d.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var O,F,S;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(S=(F=s.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var L,k,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var h,A,R;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,_,G;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Custom labels">
      <ClipboardControl />

      <ClipboardTrigger labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
    </Clipboard>
}`,...(G=(_=c.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var M,N,Y;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Loading">
      <ClipboardControl loading />

      <ClipboardTrigger />
    </Clipboard>
}`,...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var w,I,V;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Clipboard, ClipboardControl, ClipboardTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Disabled" disabled>
      <ClipboardControl />

      <ClipboardTrigger />
    </Clipboard>
}`,...(V=(I=b.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var P,j,z;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(j=C.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var q,B,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(B=u.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const X=["Demo","AnatomyTech","Default","Overview","Masked","CustomLabels","Loading","Disabled","AccessibilityFormField","ThemeGenerator"],ae=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:C,AnatomyTech:d,CustomLabels:c,Default:s,Demo:n,Disabled:b,Loading:m,Masked:p,Overview:i,ThemeGenerator:u,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{C as A,ae as C,s as D,m as L,p as M,i as O,d as a,b,c};
