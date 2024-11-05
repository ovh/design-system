import{x as o}from"./lit-html-D-ZEPr28.js";import{o as $,C as t}from"./controls-DpsgTNdU.js";const _={title:"ODS Components/Form elements/Toggle",component:"ods-toggle"},r={render:e=>o`
<ods-toggle class="my-toggle-demo"
  is-disabled=${e.isDisabled}
  with-label=${e.withLabel}>
</ods-toggle>
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
  `,argTypes:$({CustomCssLabel:{control:"text",description:'Set a custom style properties for the label. Example: "color: green;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssLabelChecked:{control:"text",description:'Set a custom style properties for the label when the input is checked. Example: "color: black;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSlider:{control:"text",description:'Set a custom style properties for the slider. Example: "background-color: red;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSliderChecked:{control:"text",description:'Set a custom style properties for the slider when the input is checked. Example: "background-color: blueviolet;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSliderCircle:{control:"text",description:'Set a custom style properties for the circle of the slider. Example: "background-color: blue;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},CustomCssSliderCircleChecked:{control:"text",description:'Set a custom style properties for the circle of the slider when the input is checked. Example: "background-color: black;"',table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}}},isDisabled:{control:"boolean",table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}}},withLabel:{control:"boolean",table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}}}}),args:{isDisabled:!1,withLabel:!1}},s={tags:["isHidden"],render:()=>o`
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
  `},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>o`
<ods-toggle with-label value="true"></ods-toggle>
  `},n={tags:["isHidden"],render:()=>o`
<ods-toggle></ods-toggle>
  `},a={tags:["isHidden"],render:()=>o`
<ods-toggle is-disabled value></ods-toggle>
  `},d={tags:["isHidden"],render:()=>o`
<ods-toggle is-disabled></ods-toggle>
  `},c={tags:["isHidden"],render:()=>o`
<ods-toggle with-label></ods-toggle>
  `};var i,g,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: arg => html\`
<ods-toggle class="my-toggle-demo"
  is-disabled=\${arg.isDisabled}
  with-label=\${arg.withLabel}>
</ods-toggle>
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
  \`,
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
    isDisabled: false,
    withLabel: false
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,p,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,C,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-toggle with-label value="true"></ods-toggle>
  \`
}`,...(h=(C=l.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,k,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle></ods-toggle>
  \`
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var O,x,L;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle is-disabled value></ods-toggle>
  \`
}`,...(L=(x=a.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var T,w,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle is-disabled></ods-toggle>
  \`
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var R,D,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-toggle with-label></ods-toggle>
  \`
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const v=["Demo","CustomCSS","Overview","Default","DisabledOn","DisabledOff","WithLabel"],F=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:s,Default:n,Demo:r,DisabledOff:d,DisabledOn:a,Overview:l,WithLabel:c,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{s as C,n as D,l as O,F as T,c as W,a,d as b};
