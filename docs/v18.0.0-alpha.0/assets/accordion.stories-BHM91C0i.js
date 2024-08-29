import{x as e}from"./lit-html-D-ZEPr28.js";import{o as l}from"./unsafe-html-HR6uCwaW.js";import{o as v,C as s}from"./control-C1r2wu67.js";const w={title:"ODS Components/Accordion",component:"ods-accordion"},t={render:o=>e`
<ods-accordion is-open="${o.isOpen}" is-disabled="${o.isDisabled}">
  ${l(o.summary)}
  ${l(o.content)}
</ods-accordion>

<style>
  ${l(o.customCss)}
</style>
  `,argTypes:v({isDisabled:{table:{category:s.general,defaultValue:!1,type:{summary:"boolean"}},control:"boolean"},isOpen:{table:{category:s.general,defaultValue:!1,type:{summary:"boolean"}},control:"boolean"},summary:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},content:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:s.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties. Example: "ods-accordion::part(accordion) { border: 1px red solid; }"'}}),args:{isDisabled:!1,isOpen:!1,summary:'<ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>',content:'<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</ods-text>',customCss:""}},a={tags:["isHidden"],render:()=>e`
<ods-accordion>
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `},r={tags:["isHidden"],render:()=>e`
<ods-accordion></ods-accordion>
  `},n={tags:["isHidden"],render:()=>e`
<ods-accordion class="my-accordion">
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
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
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  `},d={tags:["isHidden"],render:()=>e`
<ods-accordion is-disabled>
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
</ods-accordion>
  `};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    summary: '<ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>',
    content: '<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</ods-text>',
    customCss: ''
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,x,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion>
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  \`
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,g,O;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion></ods-accordion>
  \`
}`,...(O=(g=r.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var q,f,C;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion class="my-accordion">
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
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
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var H,D,T;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion is-open>
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  </ods-text>
</ods-accordion>
  \`
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var L,S,h;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-accordion is-disabled>
  <ods-text class="label" slot="summary" preset="span">Hello, world!</ods-text>
</ods-accordion>
  \`
}`,...(h=(S=d.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const R=["Demo","Overview","Default","CustomCSS","Open","Disabled"],A=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:n,Default:r,Demo:t,Disabled:d,Open:i,Overview:a,__namedExportsOrder:R,default:w},Symbol.toStringTag,{value:"Module"}));export{A,n as C,r as D,a as O,i as a,d as b};
