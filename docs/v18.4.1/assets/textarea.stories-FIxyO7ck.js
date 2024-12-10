import{x as r,o as re,C as a}from"./controls-DX883vx3.js";import{V as ae}from"./validityState-BuENXwQ9.js";const te={title:"ODS Components/Form elements/Textarea",component:"ods-textarea"},t={render:e=>r`
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
                  placeholder="${e.placeholder}"
                  rows="${e.rows}">
    </ods-textarea>
    ${e.validityState?ae("textarea",".my-textarea"):""}
    <style>
      .my-textarea::part(textarea) {
        ${e.customCss}
      }
    </style>
    `,argTypes:re({ariaLabel:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},cols:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 50px; width: 500px;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},hasSpellcheck:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isResizable:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},rows:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},validityState:{table:{category:a.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,hasSpellcheck:!1,isDisabled:!1,isReadonly:!1,isRequired:!1,isResizable:!1,validityState:!1}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>r`
<ods-textarea placeholder="Textarea"></ods-textarea>
  `},n={tags:["isHidden"],render:()=>r`
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
  `},i={tags:["isHidden"],render:()=>r`
<ods-textarea has-error>
</ods-textarea>
  `},c={tags:["isHidden"],render:()=>r`
<ods-textarea placeholder="Placeholder">
</ods-textarea>
  `},m={tags:["isHidden"],render:()=>r`
<ods-textarea is-readonly value="Readonly">
</ods-textarea>
  `},u={tags:["isHidden"],render:()=>r`
<ods-textarea is-resizable>
</ods-textarea>
  `},y={tags:["isHidden"],render:()=>r`
<ods-textarea rows="8">
</ods-textarea>
  `},p={tags:["isHidden"],render:()=>r`
<ods-textarea has-spellcheck>
</ods-textarea>
  `},b={tags:["isHidden"],render:()=>r`
<ods-textarea is-required id="textarea-validity-state-demo">
</ods-textarea>
${ae("textarea","#textarea-validity-state-demo")}
  `};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,R,O;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-textarea placeholder="Textarea"></ods-textarea>
  \`
}`,...(O=(R=s.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var S,C,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea></ods-textarea>
  \`
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var V,$,E;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea cols="50">
</ods-textarea>
  \`
}`,...(E=($=o.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var H,L,v;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(v=(L=l.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var _,w,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-disabled>
</ods-textarea>
  \`
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var A,D,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea has-error>
</ods-textarea>
  \`
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var N,Y,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea placeholder="Placeholder">
</ods-textarea>
  \`
}`,...(z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var q,F,P;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-readonly value="Readonly">
</ods-textarea>
  \`
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var j,M,B;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-resizable>
</ods-textarea>
  \`
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var I,J,K;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea rows="8">
</ods-textarea>
  \`
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea has-spellcheck>
</ods-textarea>
  \`
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-required id="textarea-validity-state-demo">
</ods-textarea>
\${ValidityStateTemplate('textarea', '#textarea-validity-state-demo')}
  \`
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const se=["Demo","Overview","Default","Cols","CustomCSS","Disabled","Error","Placeholder","Readonly","Resizable","Rows","Spellcheck","ValidityState"],le=Object.freeze(Object.defineProperty({__proto__:null,Cols:o,CustomCSS:l,Default:n,Demo:t,Disabled:d,Error:i,Overview:s,Placeholder:c,Readonly:m,Resizable:u,Rows:y,Spellcheck:p,ValidityState:b,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{l as C,n as D,i as E,s as O,c as P,m as R,p as S,le as T,b as V,o as a,d as b,u as c,y as d};
