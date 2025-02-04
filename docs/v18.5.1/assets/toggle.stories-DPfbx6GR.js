import{d as F}from"./ods-toggle2-DbSuYqWU.js";import{x as o,o as W,C as t}from"./controls-DX883vx3.js";import{V as q}from"./validityState-BuENXwQ9.js";const j=F;j();const z={title:"ODS Components/Form elements/Toggle",component:"ods-toggle"},r={render:e=>o`
    <ods-toggle class="my-toggle-demo"
      has-error=${e.hasError}
      is-disabled=${e.isDisabled}
      is-required=${e.isRequired}
      with-label=${e.withLabel}>
    </ods-toggle>
    ${e.validityState?q("toggle",".my-toggle-demo"):""}
    <style>
      .my-toggle-demo::part(slider) {
        ${e.CustomCssSlider}
      }

      .my-toggle-demo::part(slider)::before {
        ${e.CustomCssSlider}
      }

      .my-toggle-demo::part(label) {
        ${e.CustomCssLabel}
      }

      .my-toggle-demo::part(slider checked) {
        ${e.CustomCssSliderChecked}
      }

      .my-toggle-demo::part(slider checked)::before {
        ${e.CustomCssSliderChecked}
      }

      .my-toggle-demo::part(label checked) {
        ${e.CustomCssLabelChecked}
      }
    </style>
    `,argTypes:W({CustomCssLabel:{control:"text",description:'Set a custom style properties for the label. Example: "color: green;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssLabelChecked:{control:"text",description:'Set a custom style properties for the label when the input is checked. Example: "color: black;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSlider:{control:"text",description:'Set a custom style properties for the slider. Example: "background-color: red;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSliderChecked:{control:"text",description:'Set a custom style properties for the slider when the input is checked. Example: "background-color: blueviolet;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSliderCircle:{control:"text",description:'Set a custom style properties for the circle of the slider. Example: "background-color: blue;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSliderCircleChecked:{control:"text",description:'Set a custom style properties for the circle of the slider when the input is checked. Example: "background-color: black;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},hasError:{table:{category:t.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{control:"boolean",table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}}},isRequired:{control:"boolean",table:{category:t.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},validityState:{table:{category:t.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"},withLabel:{control:"boolean",table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}}}}),args:{hasError:!1,isDisabled:!1,isRequired:!1,validityState:!1,withLabel:!1}},s={tags:["isHidden"],render:()=>o`
<ods-toggle class="my-toggle" with-label>
</ods-toggle>
<style>
  .my-toggle::part(slider) {
    background-color: red;
  }

  .my-toggle::part(slider)::before {
    background-color: blue;
  }

  .my-toggle::part(label) {
    color: green;
  }

  .my-toggle::part(slider checked) {
    background-color: blueviolet;
  }

  .my-toggle::part(slider checked)::before {
    background-color: black;
  }

  .my-toggle::part(label checked) {
    color: black;
  }
</style>
  `},a={tags:["isHidden"],parameters:{layout:"centered"},render:()=>o`
<ods-toggle with-label value="true"></ods-toggle>
  `},l={tags:["isHidden"],render:()=>o`
<ods-toggle></ods-toggle>
  `},n={tags:["isHidden"],render:()=>o`
<ods-toggle is-disabled value></ods-toggle>
  `},d={tags:["isHidden"],render:()=>o`
<ods-toggle is-disabled></ods-toggle>
  `},i={tags:["isHidden"],render:()=>o`
<ods-toggle has-error></ods-toggle>
  `},g={tags:["isHidden"],render:()=>o`
<ods-toggle with-label></ods-toggle>
  `},m={tags:["isHidden"],render:()=>o`
<ods-toggle is-required id="toggle-validity-state-demo">
</ods-toggle>
${q("toggle","#toggle-validity-state-demo")}
  `};var c,u,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-toggle class="my-toggle-demo"
      has-error=\${arg.hasError}
      is-disabled=\${arg.isDisabled}
      is-required=\${arg.isRequired}
      with-label=\${arg.withLabel}>
    </ods-toggle>
    \${arg.validityState ? ValidityStateTemplate('toggle', '.my-toggle-demo') : ''}
    <style>
      .my-toggle-demo::part(slider) {
        \${arg.CustomCssSlider}
      }

      .my-toggle-demo::part(slider)::before {
        \${arg.CustomCssSlider}
      }

      .my-toggle-demo::part(label) {
        \${arg.CustomCssLabel}
      }

      .my-toggle-demo::part(slider checked) {
        \${arg.CustomCssSliderChecked}
      }

      .my-toggle-demo::part(slider checked)::before {
        \${arg.CustomCssSliderChecked}
      }

      .my-toggle-demo::part(label checked) {
        \${arg.CustomCssLabelChecked}
      }
    </style>
    \`;
  },
  argTypes: orderControls({
    CustomCssLabel: {
      control: 'text',
      description: 'Set a custom style properties for the label. Example: "color: green;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    CustomCssLabelChecked: {
      control: 'text',
      description: 'Set a custom style properties for the label when the input is checked. Example: "color: black;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    CustomCssSlider: {
      control: 'text',
      description: 'Set a custom style properties for the slider. Example: "background-color: red;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    CustomCssSliderChecked: {
      control: 'text',
      description: 'Set a custom style properties for the slider when the input is checked. Example: "background-color: blueviolet;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    CustomCssSliderCircle: {
      control: 'text',
      description: 'Set a custom style properties for the circle of the slider. Example: "background-color: blue;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    CustomCssSliderCircleChecked: {
      control: 'text',
      description: 'Set a custom style properties for the circle of the slider when the input is checked. Example: "background-color: black;"',
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      }
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
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
    },
    withLabel: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      }
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isRequired: false,
    validityState: false,
    withLabel: false
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var p,b,C;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle class="my-toggle" with-label>
</ods-toggle>
<style>
  .my-toggle::part(slider) {
    background-color: red;
  }

  .my-toggle::part(slider)::before {
    background-color: blue;
  }

  .my-toggle::part(label) {
    color: green;
  }

  .my-toggle::part(slider checked) {
    background-color: blueviolet;
  }

  .my-toggle::part(slider checked)::before {
    background-color: black;
  }

  .my-toggle::part(label checked) {
    color: black;
  }
</style>
  \`
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var h,f,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-toggle with-label value="true"></ods-toggle>
  \`
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,O,E;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle></ods-toggle>
  \`
}`,...(E=(O=l.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var x,T,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle is-disabled value></ods-toggle>
  \`
}`,...(R=(T=n.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var V,L,v;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle is-disabled></ods-toggle>
  \`
}`,...(v=(L=d.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var $,w,_;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle has-error></ods-toggle>
  \`
}`,...(_=(w=i.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var D,H,A;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle with-label></ods-toggle>
  \`
}`,...(A=(H=g.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var G,N,Y;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle is-required id="toggle-validity-state-demo">
</ods-toggle>
\${ValidityStateTemplate('toggle', '#toggle-validity-state-demo')}
  \`
}`,...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};const M=["Demo","CustomCSS","Overview","Default","DisabledOn","DisabledOff","Error","WithLabel","ValidityState"],J=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:s,Default:l,Demo:r,DisabledOff:d,DisabledOn:n,Error:i,Overview:a,ValidityState:m,WithLabel:g,__namedExportsOrder:M,default:z},Symbol.toStringTag,{value:"Module"}));export{s as C,l as D,i as E,a as O,J as T,m as V,g as W,n as a,d as b};
