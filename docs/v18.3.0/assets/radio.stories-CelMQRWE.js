import{x as e}from"./lit-html-D-ZEPr28.js";import{o as W,C as s}from"./controls-DpsgTNdU.js";const X={component:"ods-radio",title:"ODS Components/Form elements/Radio"},n={render:a=>e`
    <ods-radio
      ariaLabel="${a.ariaLabel}"
      ariaLabelledby="${a.ariaLabelledby}"
      class="my-radio-demo"
      is-disabled="${a.isDisabled}"
    ></ods-radio>
    <style>
      .my-radio-demo > input[type="radio"]:not(:disabled):checked {
        ${a.customCss}
      }
    </style>`,argTypes:W({ariaLabel:{table:{category:s.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:s.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:s.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: red;"'},isDisabled:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"}}),args:{isDisabled:!1}},r={render:a=>e`
    <ods-radio input-id="html" name="fav_language" value="HTML" is-checked="${a.isCheckedHTML}" is-disabled="${a.isDisabledHTML}"></ods-radio>
    <label for="html">HTML</label>

    <ods-radio input-id="css" name="fav_language" value="CSS" is-checked="${a.isCheckedCSS}" is-disabled="${a.isDisabledCSS}"></ods-radio>
    <label for="css">CSS</label>

    <ods-radio input-id="js" name="fav_language" value="JS" is-checked="${a.isCheckedJS}" is-disabled="${a.isDisabledJS}"></ods-radio>
    <label for="js">JS</label>
`,argTypes:W({isCheckedHTML:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the HTML radio checked by default"},isCheckedCSS:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the CSS radio checked by default"},isCheckedJS:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the JS radio checked by default"},isDisabledHTML:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the HTML radio disabled"},isDisabledCSS:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the CSS radio disabled"},isDisabledJS:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the JS radio disabled"}}),args:{isCheckedCSS:!1,isCheckedHTML:!1,isCheckedJS:!1,isDisabledCSS:!1,isDisabledHTML:!1,isDisabledJS:!1}},o={tags:["isHidden"],render:()=>e`
<ods-radio class="my-radio"></ods-radio>
<style>
  .my-radio > input[type="radio"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  `},d={tags:["isHidden"],render:()=>e`
<ods-radio is-checked></ods-radio>
  `},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-radio is-checked></ods-radio>
  `},i={tags:["isHidden"],render:()=>e`
<ods-radio></ods-radio>
  `},t={tags:["isHidden"],render:()=>e`
<ods-radio is-disabled></ods-radio>
  `},c={tags:["isHidden"],render:()=>e`
<ods-radio is-disabled is-checked></ods-radio>
  `},u={tags:["isHidden"],render:()=>e`
  <ods-radio input-id="huey" name="drone" value="huey"></ods-radio>
  <label for="huey">Huey</label>

  <ods-radio input-id="dewey" name="drone" value="dewey"></ods-radio>
  <label for="dewey">Dewey</label>

  <ods-radio input-id="louie" name="drone" value="louie"></ods-radio>
  <label for="louie">Louie</label>
`},m={tags:["isHidden"],render:()=>e`
  <ods-radio input-id="html" name="fav_language" value="HTML" is-checked></ods-radio>
  <label for="html">HTML</label>

  <ods-radio input-id="css" name="fav_language" value="CSS"></ods-radio>
  <label for="css">CSS</label>

  <ods-radio input-id="js" name="fav_language" value="JS"></ods-radio>
  <label for="js">JS</label>
`},b={tags:["isHidden"],render:()=>e`
  <ods-radio input-id="input-id-example" name="name" value="huey"></ods-radio>
  <label for="input-id-example">Example</label>
 `},p={tags:["isHidden"],render:()=>e`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-radio input-id="alignment" value="alignment"></ods-radio>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>

    <ods-radio input-id="alignment2" value="alignment2"></ods-radio>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 `};var y,g,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`
    <ods-radio
      ariaLabel="\${args.ariaLabel}"
      ariaLabelledby="\${args.ariaLabelledby}"
      class="my-radio-demo"
      is-disabled="\${args.isDisabled}"
    ></ods-radio>
    <style>
      .my-radio-demo > input[type="radio"]:not(:disabled):checked {
        \${args.customCss}
      }
    </style>\`,
  argTypes: orderControls({
    ariaLabel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    ariaLabelledby: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    customCss: {
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
      description: 'Set a custom style properties. Example: "background-color: red;"'
    },
    isDisabled: {
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
    }
  }),
  args: {
    isDisabled: false
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,h,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => html\`
    <ods-radio input-id="html" name="fav_language" value="HTML" is-checked="\${args.isCheckedHTML}" is-disabled="\${args.isDisabledHTML}"></ods-radio>
    <label for="html">HTML</label>

    <ods-radio input-id="css" name="fav_language" value="CSS" is-checked="\${args.isCheckedCSS}" is-disabled="\${args.isDisabledCSS}"></ods-radio>
    <label for="css">CSS</label>

    <ods-radio input-id="js" name="fav_language" value="JS" is-checked="\${args.isCheckedJS}" is-disabled="\${args.isDisabledJS}"></ods-radio>
    <label for="js">JS</label>
\`,
  argTypes: orderControls({
    isCheckedHTML: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Make the HTML radio checked by default'
    },
    isCheckedCSS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Make the CSS radio checked by default'
    },
    isCheckedJS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Make the JS radio checked by default'
    },
    isDisabledHTML: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Make the HTML radio disabled'
    },
    isDisabledCSS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Make the CSS radio disabled'
    },
    isDisabledJS: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Make the JS radio disabled'
    }
  }),
  args: {
    isCheckedCSS: false,
    isCheckedHTML: false,
    isCheckedJS: false,
    isDisabledCSS: false,
    isDisabledHTML: false,
    isDisabledJS: false
  }
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,T,L;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio class="my-radio"></ods-radio>
<style>
  .my-radio > input[type="radio"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  \`
}`,...(L=(T=o.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var H,v,O;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-checked></ods-radio>
  \`
}`,...(O=(v=d.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var D,M,_;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-radio is-checked></ods-radio>
  \`
}`,...(_=(M=l.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var R,x,J;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio></ods-radio>
  \`
}`,...(J=(x=i.parameters)==null?void 0:x.docs)==null?void 0:J.source}}};var V,$,A;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-disabled></ods-radio>
  \`
}`,...(A=($=t.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var G,E,j;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-disabled is-checked></ods-radio>
  \`
}`,...(j=(E=c.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var N,Y,w;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="huey" name="drone" value="huey"></ods-radio>
  <label for="huey">Huey</label>

  <ods-radio input-id="dewey" name="drone" value="dewey"></ods-radio>
  <label for="dewey">Dewey</label>

  <ods-radio input-id="louie" name="drone" value="louie"></ods-radio>
  <label for="louie">Louie</label>
\`
}`,...(w=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:w.source}}};var I,F,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="html" name="fav_language" value="HTML" is-checked></ods-radio>
  <label for="html">HTML</label>

  <ods-radio input-id="css" name="fav_language" value="CSS"></ods-radio>
  <label for="css">CSS</label>

  <ods-radio input-id="js" name="fav_language" value="JS"></ods-radio>
  <label for="js">JS</label>
\`
}`,...(z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var P,q,B;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="input-id-example" name="name" value="huey"></ods-radio>
  <label for="input-id-example">Example</label>
 \`
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-radio input-id="alignment" value="alignment"></ods-radio>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>

    <ods-radio input-id="alignment2" value="alignment2"></ods-radio>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 \`
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Z=["Demo","DemoGroup","CustomCSS","Checked","Overview","Default","Disabled","DisabledChecked","Group","GroupIsChecked","InputId","Alignment"],se=Object.freeze(Object.defineProperty({__proto__:null,Alignment:p,Checked:d,CustomCSS:o,Default:i,Demo:n,DemoGroup:r,Disabled:t,DisabledChecked:c,Group:u,GroupIsChecked:m,InputId:b,Overview:l,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{p as A,d as C,i as D,u as G,b as I,l as O,se as R,o as a,t as b,c,m as d};
