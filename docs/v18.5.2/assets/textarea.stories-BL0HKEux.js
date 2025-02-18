import{d as le}from"./ods-textarea2-BqL_D5sd.js";import{x as r,T as x,o as de,C as a}from"./controls-DX883vx3.js";import{V as oe}from"./validityState-BuENXwQ9.js";const me=le;me();const ie={title:"ODS Components/Form elements/Textarea",component:"ods-textarea"},t={render:e=>r`
    <ods-textarea class="my-textarea"
                  aria-label="${e.ariaLabel}"
                  aria-labelledby="${e.ariaLabelledby}"
                  cols="${e.cols}"
                  has-error="${e.hasError}"
                  has-spellcheck="${e.hasSpellcheck}"
                  is-disabled="${e.isDisabled}"
                  is-readonly="${e.isReadonly}"
                  is-resizable="${e.isResizable}"
                  is-required="${e.isRequired}"
                  maxlength="${e.maxlength||x}"
                  minlength="${e.minlength||x}"
                  placeholder="${e.placeholder}"
                  rows="${e.rows}">
    </ods-textarea>
    ${e.validityState?oe("textarea",".my-textarea"):""}
    <style>
      .my-textarea::part(textarea) {
        ${e.customCss}
      }
    </style>
    `,argTypes:de({ariaLabel:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},cols:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 50px; width: 500px;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},hasSpellcheck:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isResizable:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},maxlength:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},minlength:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},placeholder:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},rows:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},validityState:{table:{category:a.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,hasSpellcheck:!1,isDisabled:!1,isReadonly:!1,isRequired:!1,isResizable:!1,validityState:!1}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>r`
<ods-textarea placeholder="Textarea"></ods-textarea>
  `},s={tags:["isHidden"],render:()=>r`
<ods-textarea></ods-textarea>
  `},o={tags:["isHidden"],render:()=>r`
<ods-textarea cols="50">
</ods-textarea>
  `},l={tags:["isHidden"],render:()=>r`
<ods-textarea class="my-textarea">
</ods-textarea>
<style>
  .my-textarea {
    width: 100%;
  }

  .my-textarea::part(textarea) {
    background-color: #ceffce;
  }
</style>
  `},d={tags:["isHidden"],render:()=>r`
<ods-textarea is-disabled>
</ods-textarea>
  `},m={tags:["isHidden"],render:()=>r`
<ods-textarea has-error>
</ods-textarea>
  `},i={tags:["isHidden"],render:()=>r`
<ods-textarea minlength="5" maxlength="20">
</ods-textarea>
  `},c={tags:["isHidden"],render:()=>r`
<ods-textarea placeholder="Placeholder">
</ods-textarea>
  `},u={tags:["isHidden"],render:()=>r`
<ods-textarea is-readonly value="Readonly">
</ods-textarea>
  `},y={tags:["isHidden"],render:()=>r`
<ods-textarea is-resizable>
</ods-textarea>
  `},p={tags:["isHidden"],render:()=>r`
<ods-textarea rows="8">
</ods-textarea>
  `},g={tags:["isHidden"],render:()=>r`
<ods-textarea has-spellcheck>
</ods-textarea>
  `},b={tags:["isHidden"],render:()=>r`
<ods-textarea is-required id="textarea-validity-state-demo">
</ods-textarea>
${oe("textarea","#textarea-validity-state-demo")}
  `};var h,f,R;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-textarea class="my-textarea"
                  aria-label="\${arg.ariaLabel}"
                  aria-labelledby="\${arg.ariaLabelledby}"
                  cols="\${arg.cols}"
                  has-error="\${arg.hasError}"
                  has-spellcheck="\${arg.hasSpellcheck}"
                  is-disabled="\${arg.isDisabled}"
                  is-readonly="\${arg.isReadonly}"
                  is-resizable="\${arg.isResizable}"
                  is-required="\${arg.isRequired}"
                  maxlength="\${arg.maxlength || nothing}"
                  minlength="\${arg.minlength || nothing}"
                  placeholder="\${arg.placeholder}"
                  rows="\${arg.rows}">
    </ods-textarea>
    \${arg.validityState ? ValidityStateTemplate('textarea', '.my-textarea') : ''}
    <style>
      .my-textarea::part(textarea) {
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
    cols: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
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
      description: 'Set a custom style properties. Example: "height: 50px; width: 500px;"'
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
    hasSpellcheck: {
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
    isReadonly: {
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
    isResizable: {
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
    maxlength: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    minlength: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    rows: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
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
    hasSpellcheck: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    isResizable: false,
    validityState: false
  }
}`,...(R=(f=t.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var O,C,S;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-textarea placeholder="Textarea"></ods-textarea>
  \`
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,V,$;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea></ods-textarea>
  \`
}`,...($=(V=s.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var E,H,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea cols="50">
</ods-textarea>
  \`
}`,...(L=(H=o.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var _,v,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea class="my-textarea">
</ods-textarea>
<style>
  .my-textarea {
    width: 100%;
  }

  .my-textarea::part(textarea) {
    background-color: #ceffce;
  }
</style>
  \`
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var A,G,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-disabled>
</ods-textarea>
  \`
}`,...(N=(G=d.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,k,D;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea has-error>
</ods-textarea>
  \`
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var z,q,F;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea minlength="5" maxlength="20">
</ods-textarea>
  \`
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var M,P,j;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea placeholder="Placeholder">
</ods-textarea>
  \`
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var B,I,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-readonly value="Readonly">
</ods-textarea>
  \`
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-resizable>
</ods-textarea>
  \`
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea rows="8">
</ods-textarea>
  \`
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea has-spellcheck>
</ods-textarea>
  \`
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,se;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-required id="textarea-validity-state-demo">
</ods-textarea>
\${ValidityStateTemplate('textarea', '#textarea-validity-state-demo')}
  \`
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const ce=["Demo","Overview","Default","Cols","CustomCSS","Disabled","Error","MaxMinLength","Placeholder","Readonly","Resizable","Rows","Spellcheck","ValidityState"],ge=Object.freeze(Object.defineProperty({__proto__:null,Cols:o,CustomCSS:l,Default:s,Demo:t,Disabled:d,Error:m,MaxMinLength:i,Overview:n,Placeholder:c,Readonly:u,Resizable:y,Rows:p,Spellcheck:g,ValidityState:b,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,m as E,i as M,n as O,c as P,u as R,g as S,ge as T,b as V,o as a,d as b,y as c,p as d};
