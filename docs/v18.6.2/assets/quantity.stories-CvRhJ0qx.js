import{d as J}from"./ods-quantity2-BgFzW1u9.js";import{x as a,o as K,C as t}from"./controls-DX883vx3.js";import{V as k}from"./validityState-BuENXwQ9.js";const U=J;U();const W={title:"ODS Components/Form elements/Quantity",component:"ods-quantity"},n={render:e=>a`
    <ods-quantity class="my-quantity"
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-readonly="${e.isReadonly}"
      is-required="${e.isRequired}"
      max="${e.max}"
      min="${e.min}"
      placeholder="${e.placeholder}"
      step="${e.step}">
    </ods-quantity>
    ${e.validityState?k("quantity",".my-quantity"):""}
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
    `,argTypes:K({ariaLabel:{control:"text",table:{category:t.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}}},ariaLabelledby:{control:"text",table:{category:t.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}}},customCssButtonAdd:{table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "color: red;"'},customCssButtonMinus:{table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "color: red;"'},customCssInput:{table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{control:"boolean",table:{category:t.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},isDisabled:{control:"boolean",table:{category:t.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},isReadonly:{control:"boolean",table:{category:t.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},isRequired:{control:"boolean",table:{category:t.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{control:"number",table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"number"}}},min:{control:"number",table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"number"}}},step:{control:"number",table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"number"}}},validityState:{table:{category:t.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1,isRequired:!1,validityState:!1}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
    <ods-quantity min="0" value="0"></ods-quantity>
  `},s={tags:["isHidden"],render:()=>a`
<ods-quantity></ods-quantity>
  `},o={tags:["isHidden"],render:()=>a`
<ods-quantity is-disabled></ods-quantity>
  `},i={tags:["isHidden"],render:()=>a`
<ods-quantity has-error></ods-quantity>
  `},l={tags:["isHidden"],render:()=>a`
<ods-quantity is-readonly default-value="0"></ods-quantity>
  `},u={tags:["isHidden"],render:()=>a`
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
  `},c={tags:["isHidden"],render:()=>a`
<ods-quantity is-required id="quantity-validity-state-demo">
</ods-quantity>
${k("quantity","#quantity-validity-state-demo")}
  `};var p,b,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-quantity class="my-quantity"
      ariaLabel="\${arg.ariaLabel}"
      ariaLabelledby="\${arg.ariaLabelledby}"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-readonly="\${arg.isReadonly}"
      is-required="\${arg.isRequired}"
      max="\${arg.max}"
      min="\${arg.min}"
      placeholder="\${arg.placeholder}"
      step="\${arg.step}">
    </ods-quantity>
    \${arg.validityState ? ValidityStateTemplate('quantity', '.my-quantity') : ''}
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
    \`;
  },
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
    isRequired: {
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
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState'
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    validityState: false
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var q,f,C;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-quantity min="0" value="0"></ods-quantity>
  \`
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var O,R,S;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity></ods-quantity>
  \`
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var x,T,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity is-disabled></ods-quantity>
  \`
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var V,$,E;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity has-error></ods-quantity>
  \`
}`,...(E=($=i.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var v,L,H;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity is-readonly default-value="0"></ods-quantity>
  \`
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var _,A,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity min="0" value="0"></ods-quantity>
  \`
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var G,N,Y;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity max="10" value="10"></ods-quantity>
  \`
}`,...(Y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var M,F,w;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity step="10"></ods-quantity>
  \`
}`,...(w=(F=m.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var B,I,Q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Q=(I=y.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var j,z,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-quantity is-required id="quantity-validity-state-demo">
</ods-quantity>
\${ValidityStateTemplate('quantity', '#quantity-validity-state-demo')}
  \`
}`,...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const X=["Demo","Overview","Default","Disabled","Error","Readonly","Min","Max","Step","CustomCSS","ValidityState"],ae=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:y,Default:s,Demo:n,Disabled:o,Error:i,Max:d,Min:u,Overview:r,Readonly:l,Step:m,ValidityState:c,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{y as C,s as D,i as E,d as M,r as O,ae as Q,l as R,m as S,c as V,o as a,u as b};
