import{x as a}from"./lit-html-D-ZEPr28.js";import{o as Q,C as n}from"./controls-DpsgTNdU.js";const j={title:"ODS Components/Form elements/Quantity",component:"ods-quantity"},t={render:e=>a`
  <ods-quantity class="my-quantity"
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-readonly="${e.isReadonly}"
      max="${e.max}"
      min="${e.min}"
      placeholder="${e.placeholder}"
      step="${e.step}">
      </ods-quantity>
<style>
  .my-quantity::part(input) {
    ${e.customCssInput}
  }
  .my-quantity::part(button-minus) {
    ${e.customCssButtonMinus}
  }
  .my-quantity::part(button-plus) {
    ${e.customCssButtonAdd}
  }
</style>
  `,argTypes:Q({ariaLabel:{control:"text",table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}}},ariaLabelledby:{control:"text",table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}}},customCssButtonAdd:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "color: red;"'},customCssButtonMinus:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "color: red;"'},customCssInput:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},isDisabled:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},isReadonly:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{control:"number",table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}}},min:{control:"number",table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}}},step:{control:"number",table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}}}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
    <ods-quantity min="0" value="0"></ods-quantity>
  `},s={tags:["isHidden"],render:()=>a`
<ods-quantity></ods-quantity>
  `},o={tags:["isHidden"],render:()=>a`
<ods-quantity is-disabled></ods-quantity>
  `},l={tags:["isHidden"],render:()=>a`
<ods-quantity has-error></ods-quantity>
  `},u={tags:["isHidden"],render:()=>a`
<ods-quantity is-readonly default-value="0"></ods-quantity>
  `},i={tags:["isHidden"],render:()=>a`
<ods-quantity min="0" value="0"></ods-quantity>
  `},d={tags:["isHidden"],render:()=>a`
<ods-quantity max="10" value="10"></ods-quantity>
  `},m={tags:["isHidden"],render:()=>a`
<ods-quantity step="10"></ods-quantity>
  `},y={tags:["isHidden"],render:()=>a`
<ods-quantity class="my-quantity"></ods-quantity>
<style>
  .my-quantity {
    width: 100%;
  }

  .my-quantity::part(input) {
    width: 100%;
  }

  .my-quantity::part(button-minus) {
    color: green;
    border-color: green;
  }

  .my-quantity::part(button-plus) {
    color: red;
    border-color: red;
  }
</style>
  `};var c,p,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-quantity class="my-quantity"
      ariaLabel="\${arg.ariaLabel}"
      ariaLabelledby="\${arg.ariaLabelledby}"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-readonly="\${arg.isReadonly}"
      max="\${arg.max}"
      min="\${arg.min}"
      placeholder="\${arg.placeholder}"
      step="\${arg.step}">
      </ods-quantity>
<style>
  .my-quantity::part(input) {
    \${arg.customCssInput}
  }
  .my-quantity::part(button-minus) {
    \${arg.customCssButtonMinus}
  }
  .my-quantity::part(button-plus) {
    \${arg.customCssButtonAdd}
  }
</style>
  \`,
  argTypes: orderControls({
    ariaLabel: {
      control: 'text',
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    ariaLabelledby: {
      control: 'text',
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    customCssButtonAdd: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "color: red;"'
    },
    customCssButtonMinus: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "color: red;"'
    },
    customCssInput: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "width: 100px;"'
    },
    hasError: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    isDisabled: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    isReadonly: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    max: {
      control: 'number',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      }
    },
    min: {
      control: 'number',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      }
    },
    step: {
      control: 'number',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      }
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,q,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-quantity min="0" value="0"></ods-quantity>
  \`
}`,...(C=(q=r.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var f,O,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity></ods-quantity>
  \`
}`,...(x=(O=s.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var R,h,E;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity is-disabled></ods-quantity>
  \`
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var S,T,$;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity has-error></ods-quantity>
  \`
}`,...($=(T=l.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var L,V,H;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity is-readonly default-value="0"></ods-quantity>
  \`
}`,...(H=(V=u.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var _,A,D;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity min="0" value="0"></ods-quantity>
  \`
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var v,G,N;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity max="10" value="10"></ods-quantity>
  \`
}`,...(N=(G=d.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,M,F;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity step="10"></ods-quantity>
  \`
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var w,B,I;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity class="my-quantity"></ods-quantity>
<style>
  .my-quantity {
    width: 100%;
  }

  .my-quantity::part(input) {
    width: 100%;
  }

  .my-quantity::part(button-minus) {
    color: green;
    border-color: green;
  }

  .my-quantity::part(button-plus) {
    color: red;
    border-color: red;
  }
</style>
  \`
}`,...(I=(B=y.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const z=["Demo","Overview","Default","Disabled","Error","Readonly","Min","Max","Step","CustomCSS"],J=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:y,Default:s,Demo:t,Disabled:o,Error:l,Max:d,Min:i,Overview:r,Readonly:u,Step:m,__namedExportsOrder:z,default:j},Symbol.toStringTag,{value:"Module"}));export{y as C,s as D,l as E,d as M,r as O,J as Q,u as R,m as S,o as a,i as b};
