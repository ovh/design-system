import{e}from"./index-D_CmzhJ4.js";import{S as r,a as Y,b as j,c as p,d}from"./Spinner-BdLZU4dE.js";import{o as w,C as m}from"./controls-BtiQQn1l.js";const F={component:r,title:"React Components/Spinner"},a={argTypes:w({color:{table:{category:m.design,type:{summary:"SPINNER_COLOR"}},control:{type:"select"},options:j},size:{table:{category:m.design,type:{summary:"SPINNER_SIZE"}},control:{type:"select"},options:Y}})},s={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:p.neutral}),e.createElement(r,{color:p.primary}))},n={tags:["!dev"],render:({})=>e.createElement(r,null)},t={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},o={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:d.xs}),e.createElement(r,{size:d.sm}),e.createElement(r,{size:d.md}),e.createElement(r,{size:d.lg}))},i={tags:["!dev"],render:({})=>e.createElement("div",{"aria-busy":"true","aria-live":"polite"},e.createElement(r,null))},c={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Loading user profile"})},l={tags:["!dev"],render:({})=>e.createElement("div",null,e.createElement("span",{id:"loading-text"},"Loading user profile"),e.createElement(r,{"aria-labelledby":"loading-text"}))};var S,u,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'SPINNER_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: SPINNER_COLORS
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'SPINNER_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: SPINNER_SIZES
    }
  })
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var E,y,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner color={SPINNER_COLOR.neutral} />
      <Spinner color={SPINNER_COLOR.primary} />
    </>
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var R,v,O;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Spinner />
}`,...(O=(v=n.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var b,I,_;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Spinner />
}`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var C,L,A;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner size={SPINNER_SIZE.xs} />
      <Spinner size={SPINNER_SIZE.sm} />
      <Spinner size={SPINNER_SIZE.md} />
      <Spinner size={SPINNER_SIZE.lg} />
    </>
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var P,z,f;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div aria-busy="true" aria-live="polite">
      <Spinner />
    </div>
}`,...(f=(z=i.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var T,Z,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Spinner aria-label="Loading user profile" />
}`,...(x=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:x.source}}};var D,B,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div>
      <span id="loading-text">Loading user profile</span>
      <Spinner aria-labelledby="loading-text" />
    </div>
}`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const M=["Demo","Color","Default","Overview","Size","AccessibilityAriaBusyAriaLive","AccessibilityAriaLabel","AccessibilityAriaLabelledBy"],H=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaBusyAriaLive:i,AccessibilityAriaLabel:c,AccessibilityAriaLabelledBy:l,Color:s,Default:n,Demo:a,Overview:t,Size:o,__namedExportsOrder:M,default:F},Symbol.toStringTag,{value:"Module"}));export{i as A,s as C,n as D,t as O,H as S,c as a,l as b,o as c};
