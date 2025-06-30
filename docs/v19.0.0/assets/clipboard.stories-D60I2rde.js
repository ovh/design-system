import{e}from"./index-D_CmzhJ4.js";import{C as a,a as r,b as o}from"./ClipboardTrigger-CLwkTjg3.js";import{e as M,o as V,C as t}from"./controls-BtiQQn1l.js";const j={argTypes:M(["onCopy"]),component:o,subcomponents:{ClipboardControl:r,ClipboardTrigger:a},title:"React Components/Clipboard"},n={render:l=>e.createElement(o,{disabled:l.disabled,value:l.value},e.createElement(r,{loading:l.loading,maskOption:{enable:!!l.masked}}),e.createElement(a,{labelCopy:l.labelCopy,labelCopySuccess:l.labelCopySuccess})),argTypes:V({disabled:{table:{category:t.general},control:"boolean"},labelCopy:{table:{category:t.general,defaultValue:{summary:"Copy"}},control:"text"},labelCopySuccess:{table:{category:t.general,defaultValue:{summary:"Copied"}},control:"text"},loading:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},masked:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},value:{table:{category:t.general},control:"text"}}),args:{value:"Clipboard"}},s={tags:["!dev"],render:({})=>e.createElement(o,{value:"Clipboard"},e.createElement(r,null),e.createElement(a,null))},d={parameters:{layout:"centered"},tags:["!dev"],render:({})=>e.createElement(o,{value:"Clipboard"},e.createElement(r,null),e.createElement(a,null))},c={tags:["!dev"],render:({})=>e.createElement(o,{value:"Masked"},e.createElement(r,{maskOption:{enable:!0}}),e.createElement(a,null))},p={tags:["!dev"],render:({})=>e.createElement(o,{value:"Custom labels"},e.createElement(r,null),e.createElement(a,{labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"}))},i={tags:["!dev"],render:({})=>e.createElement(o,{value:"Loading"},e.createElement(r,{loading:!0}),e.createElement(a,null))},b={tags:["!dev"],render:({})=>e.createElement(o,{value:"Disabled",disabled:!0},e.createElement(r,null),e.createElement(a,null))};var m,u,C;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(u=n.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var O,E,T;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var S,R,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Masked">
      <ClipboardControl maskOption={{
      enable: true
    }} />
      <ClipboardTrigger />
    </Clipboard>
}`,...(f=(R=c.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var k,L,_;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Custom labels">
      <ClipboardControl />
      <ClipboardTrigger labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
    </Clipboard>
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var D,x,A;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Loading">
      <ClipboardControl loading />
      <ClipboardTrigger />
    </Clipboard>
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var G,N,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Disabled" disabled>
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(Y=(N=b.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};const w=["Demo","Default","Overview","Masked","CustomLabels","Loading","Disabled"],h=Object.freeze(Object.defineProperty({__proto__:null,CustomLabels:p,Default:s,Demo:n,Disabled:b,Loading:i,Masked:c,Overview:d,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{h as C,s as D,i as L,c as M,d as O,b as a,p as b};
