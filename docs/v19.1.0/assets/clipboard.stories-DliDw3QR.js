import{e}from"./index-D_CmzhJ4.js";import{C as a,a as r,b as l}from"./ClipboardTrigger-C-Q_zTcf.js";import{F as j,a as w}from"./FormFieldLabel-DQkMrZpp.js";import{e as I,o as z,C as t}from"./controls-BtiQQn1l.js";const h={argTypes:I(["i18n","locale","onCopy"]),component:l,subcomponents:{ClipboardControl:r,ClipboardTrigger:a},title:"React Components/Clipboard"},n={render:o=>e.createElement(l,{disabled:o.disabled,value:o.value},e.createElement(r,{loading:o.loading,maskOption:{enable:!!o.masked}}),e.createElement(a,{labelCopy:o.labelCopy,labelCopySuccess:o.labelCopySuccess})),argTypes:z({disabled:{table:{category:t.general},control:"boolean"},labelCopy:{table:{category:t.general,defaultValue:{summary:"Copy"}},control:"text"},labelCopySuccess:{table:{category:t.general,defaultValue:{summary:"Copied"}},control:"text"},loading:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},masked:{table:{category:t.general,type:{summary:"boolean"}},control:"boolean"},value:{table:{category:t.general},control:"text"}}),args:{value:"Clipboard"}},s={tags:["!dev"],render:({})=>e.createElement(l,{value:"Clipboard"},e.createElement(r,null),e.createElement(a,null))},d={parameters:{layout:"centered"},tags:["!dev"],render:({})=>e.createElement(l,{value:"Clipboard"},e.createElement(r,null),e.createElement(a,null))},c={tags:["!dev"],render:({})=>e.createElement(l,{value:"Masked"},e.createElement(r,{maskOption:{enable:!0}}),e.createElement(a,null))},i={tags:["!dev"],render:({})=>e.createElement(l,{value:"Custom labels"},e.createElement(r,null),e.createElement(a,{labelCopy:"Click to copy",labelCopySuccess:"Successfully copied"}))},p={tags:["!dev"],render:({})=>e.createElement(l,{value:"Loading"},e.createElement(r,{loading:!0}),e.createElement(a,null))},m={tags:["!dev"],render:({})=>e.createElement(l,{value:"Disabled",disabled:!0},e.createElement(r,null),e.createElement(a,null))},b={tags:["!dev"],render:({})=>e.createElement(j,null,e.createElement(w,null,"API key:"),e.createElement(l,{value:"loremipsum"},e.createElement(r,null),e.createElement(a,null)))};var u,C,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var y,v,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var O,T,S;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var F,L,k;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Masked">
      <ClipboardControl maskOption={{
      enable: true
    }} />
      <ClipboardTrigger />
    </Clipboard>
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var f,R,A;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Custom labels">
      <ClipboardControl />
      <ClipboardTrigger labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
    </Clipboard>
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var _,D,x;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Loading">
      <ClipboardControl loading />
      <ClipboardTrigger />
    </Clipboard>
}`,...(x=(D=p.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var G,N,Y;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Clipboard value="Disabled" disabled>
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
}`,...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var M,V,P;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>API key:</FormFieldLabel>
      <Clipboard value="loremipsum">
        <ClipboardControl />
        <ClipboardTrigger />
      </Clipboard>
    </FormField>
}`,...(P=(V=b.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const q=["Demo","Default","Overview","Masked","CustomLabels","Loading","Disabled","AccessibilityFormField"],Q=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:b,CustomLabels:i,Default:s,Demo:n,Disabled:m,Loading:p,Masked:c,Overview:d,__namedExportsOrder:q,default:h},Symbol.toStringTag,{value:"Module"}));export{b as A,Q as C,s as D,p as L,c as M,d as O,m as a,i as b};
