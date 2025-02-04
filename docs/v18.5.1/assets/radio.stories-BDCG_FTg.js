import{d as ie}from"./ods-radio2-BtBodUES.js";import{x as a,o as oe,C as r}from"./controls-DX883vx3.js";import{V as de}from"./validityState-BuENXwQ9.js";const le=ie;le();const te={component:"ods-radio",title:"ODS Components/Form elements/Radio"},s={render:e=>a`
    <ods-radio
      aria-label="${e.ariaLabel}"
      aria-labelledby="${e.ariaLabelledby}"
      class="my-radio-demo"
      has-error="${e.hasError}"
      is-disabled="${e.isDisabled}"
      is-required="${e.isRequired}"
      name="my-radio-demo">
    </ods-radio>
    ${e.validityState?de("radio",".my-radio-demo"):""}
    <style>
      .my-radio-demo > input[type="radio"]:not(:disabled):checked {
        ${e.customCss}
      }
    </style>
    `,argTypes:oe({ariaLabel:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:r.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: red;"'},hasError:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:r.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},validityState:{table:{category:r.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isRequired:!1,validityState:!1}},n={render:e=>a`
    <ods-radio input-id="html" name="fav_language" value="HTML" is-checked="${e.isCheckedHTML}" is-disabled="${e.isDisabledHTML}"></ods-radio>
    <label for="html">HTML</label>

    <ods-radio input-id="css" name="fav_language" value="CSS" is-checked="${e.isCheckedCSS}" is-disabled="${e.isDisabledCSS}"></ods-radio>
    <label for="css">CSS</label>

    <ods-radio input-id="js" name="fav_language" value="JS" is-checked="${e.isCheckedJS}" is-disabled="${e.isDisabledJS}"></ods-radio>
    <label for="js">JS</label>
`,argTypes:oe({isCheckedHTML:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the HTML radio checked by default"},isCheckedCSS:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the CSS radio checked by default"},isCheckedJS:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the JS radio checked by default"},isDisabledHTML:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the HTML radio disabled"},isDisabledCSS:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the CSS radio disabled"},isDisabledJS:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Make the JS radio disabled"}}),args:{isCheckedCSS:!1,isCheckedHTML:!1,isCheckedJS:!1,isDisabledCSS:!1,isDisabledHTML:!1,isDisabledJS:!1}},o={tags:["isHidden"],render:()=>a`
<ods-radio class="my-radio"></ods-radio>
<style>
  .my-radio > input[type="radio"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  `},d={tags:["isHidden"],render:()=>a`
<ods-radio is-checked></ods-radio>
  `},i={tags:["isHidden"],render:()=>a`
<ods-radio has-error></ods-radio>
  `},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-radio is-checked></ods-radio>
  `},t={tags:["isHidden"],render:()=>a`
<ods-radio></ods-radio>
  `},m={tags:["isHidden"],render:()=>a`
<ods-radio is-disabled></ods-radio>
  `},c={tags:["isHidden"],render:()=>a`
<ods-radio is-disabled is-checked></ods-radio>
  `},u={tags:["isHidden"],render:()=>a`
  <ods-radio input-id="huey" name="drone" value="huey"></ods-radio>
  <label for="huey">Huey</label>

  <ods-radio input-id="dewey" name="drone" value="dewey"></ods-radio>
  <label for="dewey">Dewey</label>

  <ods-radio input-id="louie" name="drone" value="louie"></ods-radio>
  <label for="louie">Louie</label>
`},b={tags:["isHidden"],render:()=>a`
  <ods-radio input-id="html" name="fav_language" value="HTML" is-checked></ods-radio>
  <label for="html">HTML</label>

  <ods-radio input-id="css" name="fav_language" value="CSS"></ods-radio>
  <label for="css">CSS</label>

  <ods-radio input-id="js" name="fav_language" value="JS"></ods-radio>
  <label for="js">JS</label>
`},y={tags:["isHidden"],render:()=>a`
  <ods-radio input-id="input-id-example" name="name" value="huey"></ods-radio>
  <label for="input-id-example">Example</label>
 `},p={tags:["isHidden"],render:()=>a`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-radio input-id="alignment" value="alignment"></ods-radio>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>

    <ods-radio input-id="alignment2" value="alignment2"></ods-radio>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 `},g={tags:["isHidden"],render:()=>a`
<ods-radio name="radio-validity-state-demo" is-required id="radio-validity-state-demo">
</ods-radio>
${de("radio","#radio-validity-state-demo")}
  `};var f,S,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-radio
      aria-label="\${arg.ariaLabel}"
      aria-labelledby="\${arg.ariaLabelledby}"
      class="my-radio-demo"
      has-error="\${arg.hasError}"
      is-disabled="\${arg.isDisabled}"
      is-required="\${arg.isRequired}"
      name="my-radio-demo">
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
    hasError: false,
    isDisabled: false,
    isRequired: false,
    validityState: false
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,k,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var v,H,O;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(H=o.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var L,D,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-checked></ods-radio>
  \`
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var R,V,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio has-error></ods-radio>
  \`
}`,...(_=(V=i.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var E,$,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-radio is-checked></ods-radio>
  \`
}`,...(x=($=l.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var J,A,G;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio></ods-radio>
  \`
}`,...(G=(A=t.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,Y,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-disabled></ods-radio>
  \`
}`,...(j=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,w,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio is-disabled is-checked></ods-radio>
  \`
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var F,z,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="huey" name="drone" value="huey"></ods-radio>
  <label for="huey">Huey</label>

  <ods-radio input-id="dewey" name="drone" value="dewey"></ods-radio>
  <label for="dewey">Dewey</label>

  <ods-radio input-id="louie" name="drone" value="louie"></ods-radio>
  <label for="louie">Louie</label>
\`
}`,...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var B,K,Q;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="html" name="fav_language" value="HTML" is-checked></ods-radio>
  <label for="html">HTML</label>

  <ods-radio input-id="css" name="fav_language" value="CSS"></ods-radio>
  <label for="css">CSS</label>

  <ods-radio input-id="js" name="fav_language" value="JS"></ods-radio>
  <label for="js">JS</label>
\`
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-radio input-id="input-id-example" name="name" value="huey"></ods-radio>
  <label for="input-id-example">Example</label>
 \`
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ae;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-radio input-id="alignment" value="alignment"></ods-radio>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>

    <ods-radio input-id="alignment2" value="alignment2"></ods-radio>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 \`
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,ne;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-radio name="radio-validity-state-demo" is-required id="radio-validity-state-demo">
</ods-radio>
\${ValidityStateTemplate('radio', '#radio-validity-state-demo')}
  \`
}`,...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const me=["Demo","DemoGroup","CustomCSS","Checked","Error","Overview","Default","Disabled","DisabledChecked","Group","GroupIsChecked","InputId","Alignment","ValidityState"],ye=Object.freeze(Object.defineProperty({__proto__:null,Alignment:p,Checked:d,CustomCSS:o,Default:t,Demo:s,DemoGroup:n,Disabled:m,DisabledChecked:c,Error:i,Group:u,GroupIsChecked:b,InputId:y,Overview:l,ValidityState:g,__namedExportsOrder:me,default:te},Symbol.toStringTag,{value:"Module"}));export{p as A,d as C,t as D,i as E,u as G,y as I,l as O,ye as R,g as V,o as a,m as b,c,b as d};
