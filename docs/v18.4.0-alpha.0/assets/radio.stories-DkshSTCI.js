import{x as a}from"./lit-html-D-ZEPr28.js";import{V as ae}from"./validityState-ExJ3RVbh.js";import{o as ne,C as n}from"./controls-D697y8_r.js";const se={component:"ods-radio",title:"ODS Components/Form elements/Radio"},s={render:e=>a`
    <ods-radio
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      class="my-radio-demo"
      name="my-radio-demo"
      is-disabled="${e.isDisabled}"
      is-required="${e.isRequired}">
    </ods-radio>
    ${e.validityState?ae("radio",".my-radio-demo"):""}
    <style>
      .my-radio-demo > input[type="radio"]:not(:disabled):checked {
        ${e.customCss}
      }
    </style>
    `,argTypes:ne({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: red;"'},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{isDisabled:!1,isRequired:!1,validityState:!1}},o={render:e=>a`
    <ods-radio input-id="html" name="fav_language" value="HTML" is-checked="${e.isCheckedHTML}" is-disabled="${e.isDisabledHTML}"></ods-radio>
    <label for="html">HTML</label>

    <ods-radio input-id="css" name="fav_language" value="CSS" is-checked="${e.isCheckedCSS}" is-disabled="${e.isDisabledCSS}"></ods-radio>
    <label for="css">CSS</label>

    <ods-radio input-id="js" name="fav_language" value="JS" is-checked="${e.isCheckedJS}" is-disabled="${e.isDisabledJS}"></ods-radio>
    <label for="js">JS</label>
`,argTypes:ne({isCheckedHTML:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the HTML radio checked by default"},isCheckedCSS:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the CSS radio checked by default"},isCheckedJS:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the JS radio checked by default"},isDisabledHTML:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the HTML radio disabled"},isDisabledCSS:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the CSS radio disabled"},isDisabledJS:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the JS radio disabled"}}),args:{isCheckedCSS:!1,isCheckedHTML:!1,isCheckedJS:!1,isDisabledCSS:!1,isDisabledHTML:!1,isDisabledJS:!1}},d={tags:["isHidden"],render:()=>a`
<ods-radio class="my-radio"></ods-radio>
<style>
  .my-radio > input[type="radio"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  `},r={tags:["isHidden"],render:()=>a`
<ods-radio is-checked></ods-radio>
  `},i={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-radio is-checked></ods-radio>
  `},l={tags:["isHidden"],render:()=>a`
<ods-radio></ods-radio>
  `},t={tags:["isHidden"],render:()=>a`
<ods-radio is-disabled></ods-radio>
  `},m={tags:["isHidden"],render:()=>a`
<ods-radio is-disabled is-checked></ods-radio>
  `},c={tags:["isHidden"],render:()=>a`
  <ods-radio input-id="huey" name="drone" value="huey"></ods-radio>
  <label for="huey">Huey</label>

  <ods-radio input-id="dewey" name="drone" value="dewey"></ods-radio>
  <label for="dewey">Dewey</label>

  <ods-radio input-id="louie" name="drone" value="louie"></ods-radio>
  <label for="louie">Louie</label>
`},u={tags:["isHidden"],render:()=>a`
  <ods-radio input-id="html" name="fav_language" value="HTML" is-checked></ods-radio>
  <label for="html">HTML</label>

  <ods-radio input-id="css" name="fav_language" value="CSS"></ods-radio>
  <label for="css">CSS</label>

  <ods-radio input-id="js" name="fav_language" value="JS"></ods-radio>
  <label for="js">JS</label>
`},b={tags:["isHidden"],render:()=>a`
  <ods-radio input-id="input-id-example" name="name" value="huey"></ods-radio>
  <label for="input-id-example">Example</label>
 `},y={tags:["isHidden"],render:()=>a`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-radio input-id="alignment" value="alignment"></ods-radio>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>

    <ods-radio input-id="alignment2" value="alignment2"></ods-radio>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 `},p={tags:["isHidden"],render:()=>a`
<ods-radio name="radio-validity-state-demo" is-required id="radio-validity-state-demo">
</ods-radio>
${ae("radio","#radio-validity-state-demo")}
  `};var g,f,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-radio
      ariaLabel="\${arg.ariaLabel}"
      ariaLabelledby="\${arg.ariaLabelledby}"
      class="my-radio-demo"
      name="my-radio-demo"
      is-disabled="\${arg.isDisabled}"
      is-required="\${arg.isRequired}">
    </ods-radio>
    \${arg.validityState ? ValidityStateTemplate('radio', '.my-radio-demo') : ''}
    <style>
      .my-radio-demo > input[type="radio"]:not(:disabled):checked {
        \${arg.customCss}
      }
    </style>
    \`;
  },
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
    }
  }),
  args: {
    isDisabled: false,
    isRequired: false,
    validityState: false
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,C,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,T,L;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var H,O,D;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-checked></ods-radio>
  \`
}`,...(D=(O=r.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var M,R,V;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-radio is-checked></ods-radio>
  \`
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,$,x;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio></ods-radio>
  \`
}`,...(x=($=l.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var J,A,G;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-disabled></ods-radio>
  \`
}`,...(G=(A=t.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var E,N,Y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-disabled is-checked></ods-radio>
  \`
}`,...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var j,q,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="huey" name="drone" value="huey"></ods-radio>
  <label for="huey">Huey</label>

  <ods-radio input-id="dewey" name="drone" value="dewey"></ods-radio>
  <label for="dewey">Dewey</label>

  <ods-radio input-id="louie" name="drone" value="louie"></ods-radio>
  <label for="louie">Louie</label>
\`
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var I,F,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="html" name="fav_language" value="HTML" is-checked></ods-radio>
  <label for="html">HTML</label>

  <ods-radio input-id="css" name="fav_language" value="CSS"></ods-radio>
  <label for="css">CSS</label>

  <ods-radio input-id="js" name="fav_language" value="JS"></ods-radio>
  <label for="js">JS</label>
\`
}`,...(z=(F=u.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var P,B,K;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="input-id-example" name="name" value="huey"></ods-radio>
  <label for="input-id-example">Example</label>
 \`
}`,...(K=(B=b.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var Q,U,W;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-radio input-id="alignment" value="alignment"></ods-radio>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>

    <ods-radio input-id="alignment2" value="alignment2"></ods-radio>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 \`
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio name="radio-validity-state-demo" is-required id="radio-validity-state-demo">
</ods-radio>
\${ValidityStateTemplate('radio', '#radio-validity-state-demo')}
  \`
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const oe=["Demo","DemoGroup","CustomCSS","Checked","Overview","Default","Disabled","DisabledChecked","Group","GroupIsChecked","InputId","Alignment","ValidityState"],le=Object.freeze(Object.defineProperty({__proto__:null,Alignment:y,Checked:r,CustomCSS:d,Default:l,Demo:s,DemoGroup:o,Disabled:t,DisabledChecked:m,Group:c,GroupIsChecked:u,InputId:b,Overview:i,ValidityState:p,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{y as A,r as C,l as D,c as G,b as I,i as O,le as R,p as V,d as a,t as b,m as c,u as d};
