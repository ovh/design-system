import{d as v}from"./ods-accordion2-C_uqOg6Y.js";import{x as e,o as w,C as s}from"./controls-DX883vx3.js";import{o as l}from"./unsafe-html-VJzuFJfF.js";const R=v;R();const _={title:"ODS Components/Accordion",component:"ods-accordion"},t={render:o=>e`
<ods-accordion is-open="${o.isOpen}" is-disabled="${o.isDisabled}">
  ${l(o.summary)}
  ${l(o.content)}
</ods-accordion>

<style>
  ${l(o.customCss)}
</style>
  `,argTypes:w({isDisabled:{table:{category:s.general,defaultValue:!1,type:{summary:"boolean"}},control:"boolean"},isOpen:{table:{category:s.general,defaultValue:!1,type:{summary:"boolean"}},control:"boolean"},summary:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},content:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:s.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties. Example: "ods-accordion::part(accordion) { border: 1px red solid; }"'}}),args:{isDisabled:!1,isOpen:!1,summary:'<ods-text slot="summary" preset="span">Hello, world!</ods-text>',content:'<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</ods-text>',customCss:""}},n={tags:["isHidden"],render:()=>e`
<ods-accordion>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `},r={tags:["isHidden"],render:()=>e`
<ods-accordion></ods-accordion>
  `},a={tags:["isHidden"],render:()=>e`
<ods-accordion class="my-accordion">
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>

<style>
  .my-accordion::part(accordion) {
    border: 3px red solid;
  }

  .my-accordion::part(summary) {
    border: 3px green solid;
  }

  .my-accordion::part(content) {
    border: 3px blue solid;
  }
</style>
  `},i={tags:["isHidden"],render:()=>e`
<ods-accordion is-open>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `},d={tags:["isHidden"],render:()=>e`
<ods-accordion is-disabled>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
<ods-accordion is-open="\${args.isOpen}" is-disabled="\${args.isDisabled}">
  \${unsafeHTML(args.summary)}
  \${unsafeHTML(args.content)}
</ods-accordion>

<style>
  \${unsafeHTML(args.customCss)}
</style>
  \`,
  argTypes: orderControls({
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: false,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isOpen: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: false,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    summary: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "ods-accordion::part(accordion) { border: 1px red solid; }"'
    }
  }),
  args: {
    isDisabled: false,
    isOpen: false,
    summary: '<ods-text slot="summary" preset="span">Hello, world!</ods-text>',
    content: '<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</ods-text>',
    customCss: ''
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,x,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  \`
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,g,q;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion></ods-accordion>
  \`
}`,...(q=(g=r.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};var O,f,C;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion class="my-accordion">
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>

<style>
  .my-accordion::part(accordion) {
    border: 3px red solid;
  }

  .my-accordion::part(summary) {
    border: 3px green solid;
  }

  .my-accordion::part(content) {
    border: 3px blue solid;
  }
</style>
  \`
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var D,H,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion is-open>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  \`
}`,...(L=(H=i.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var T,h,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion is-disabled>
  <ods-text slot="summary" preset="span">Hello, world!</ods-text>

  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  \`
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const E=["Demo","Overview","Default","CustomCSS","Open","Disabled"],A=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:a,Default:r,Demo:t,Disabled:d,Open:i,Overview:n,__namedExportsOrder:E,default:_},Symbol.toStringTag,{value:"Module"}));export{A,a as C,r as D,n as O,i as a,d as b};
