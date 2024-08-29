import{x as e}from"./lit-html-D-ZEPr28.js";import{o as W,C as r}from"./control-C1r2wu67.js";const X={title:"ODS Components/Form elements/Textarea",component:"ods-textarea"},s={render:a=>e`
  <ods-textarea class="my-textarea"
                ariaLabel="${a.ariaLabel}"
                ariaLabelledby="${a.ariaLabelledby}"
                cols="${a.cols}"
                has-error="${a.hasError}"
                has-spellcheck="${a.hasSpellcheck}"
                is-disabled="${a.isDisabled}"
                is-readonly="${a.isReadonly}"
                is-resizable="${a.isResizable}"
                placeholder="${a.placeholder}"
                rows="${a.rows}">
  </ods-textarea>
<style>
  .my-textarea::part(textarea) {
    ${a.customCss}
  }
</style>
  `,argTypes:W({ariaLabel:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},cols:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},customCss:{table:{category:r.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 50px; width: 500px;"'},hasError:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},hasSpellcheck:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isResizable:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},rows:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"}}),args:{hasError:!1,hasSpellcheck:!1,isDisabled:!1,isReadonly:!1,isResizable:!1}},t={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-textarea placeholder="Textarea"></ods-textarea>
  `},n={tags:["isHidden"],render:()=>e`
<ods-textarea></ods-textarea>
  `},o={tags:["isHidden"],render:()=>e`
<ods-textarea cols="50">
</ods-textarea>
  `},l={tags:["isHidden"],render:()=>e`
<ods-textarea class="my-textarea">
</ods-textarea>
<style>
  .my-textarea::part(textarea) {
    width: 100px;
  }
</style>
  `},d={tags:["isHidden"],render:()=>e`
<ods-textarea is-disabled>
</ods-textarea>
  `},c={tags:["isHidden"],render:()=>e`
<ods-textarea has-error>
</ods-textarea>
  `},m={tags:["isHidden"],render:()=>e`
<ods-textarea placeholder="Placeholder">
</ods-textarea>
  `},i={tags:["isHidden"],render:()=>e`
<ods-textarea is-readonly value="Readonly">
</ods-textarea>
  `},u={tags:["isHidden"],render:()=>e`
<ods-textarea is-resizable>
</ods-textarea>
  `},y={tags:["isHidden"],render:()=>e`
<ods-textarea rows="8">
</ods-textarea>
  `},p={tags:["isHidden"],render:()=>e`
<ods-textarea has-spellcheck>
</ods-textarea>
  `};var b,g,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-textarea class="my-textarea"
                ariaLabel="\${arg.ariaLabel}"
                ariaLabelledby="\${arg.ariaLabelledby}"
                cols="\${arg.cols}"
                has-error="\${arg.hasError}"
                has-spellcheck="\${arg.hasSpellcheck}"
                is-disabled="\${arg.isDisabled}"
                is-readonly="\${arg.isReadonly}"
                is-resizable="\${arg.isResizable}"
                placeholder="\${arg.placeholder}"
                rows="\${arg.rows}">
  </ods-textarea>
<style>
  .my-textarea::part(textarea) {
    \${arg.customCss}
  }
</style>
  \`,
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
    }
  }),
  args: {
    hasError: false,
    hasSpellcheck: false,
    isDisabled: false,
    isReadonly: false,
    isResizable: false
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,f,R;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-textarea placeholder="Textarea"></ods-textarea>
  \`
}`,...(R=(f=t.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var O,C,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea></ods-textarea>
  \`
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,E,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea cols="50">
</ods-textarea>
  \`
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var H,V,$;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea class="my-textarea">
</ods-textarea>
<style>
  .my-textarea::part(textarea) {
    width: 100px;
  }
</style>
  \`
}`,...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var _,w,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-disabled>
</ods-textarea>
  \`
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,k,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea has-error>
</ods-textarea>
  \`
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var G,N,Y;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea placeholder="Placeholder">
</ods-textarea>
  \`
}`,...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var v,F,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-readonly value="Readonly">
</ods-textarea>
  \`
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var j,M,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea is-resizable>
</ods-textarea>
  \`
}`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var B,I,J;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea rows="8">
</ods-textarea>
  \`
}`,...(J=(I=y.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-textarea has-spellcheck>
</ods-textarea>
  \`
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Z=["Demo","Overview","Default","Cols","CustomCSS","Disabled","Error","Placeholder","Readonly","Resizable","Rows","Spellcheck"],re=Object.freeze(Object.defineProperty({__proto__:null,Cols:o,CustomCSS:l,Default:n,Demo:s,Disabled:d,Error:c,Overview:t,Placeholder:m,Readonly:i,Resizable:u,Rows:y,Spellcheck:p,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{l as C,n as D,c as E,t as O,m as P,i as R,p as S,re as T,o as a,d as b,u as c,y as d};
