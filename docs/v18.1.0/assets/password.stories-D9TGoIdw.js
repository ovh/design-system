import{x as a}from"./lit-html-D-ZEPr28.js";import{o as W,C as s}from"./controls-DpsgTNdU.js";var y=Object.freeze,X=Object.defineProperty,Z=(e,U)=>y(X(e,"raw",{value:y(U||e.slice())})),g;const k={title:"ODS Components/Form elements/Password",component:"ods-password"},r={render:e=>a`
  <ods-password class="my-password"
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-loading="${e.isLoading}"
      is-readonly="${e.isReadonly}"
      pattern="${e.pattern}"
      placeholder="${e.placeholder}">
      </ods-password>
  <style>
  .my-password::part(input) {
    ${e.customCss}
  }
  </style>
  `,argTypes:W({ariaLabel:{table:{category:s.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:s.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:s.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "border-color: red;"'},hasError:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},pattern:{table:{category:s.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:s.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-password placeholder="Password"></ods-password>
  `},o={tags:["isHidden"],render:()=>a`
<ods-password></ods-password>
  `},t={tags:["isHidden"],render:()=>a`
<ods-password is-disabled>
</ods-password>
  `},d={tags:["isHidden"],render:()=>a`
<ods-password has-error>
</ods-password>
  `},l={tags:["isHidden"],render:()=>a`
<ods-password is-clearable value="value">
</ods-password>
  `},i={tags:["isHidden"],render:()=>a`
<ods-password is-loading>
</ods-password>
  `},p={tags:["isHidden"],render:()=>a`
<ods-password is-readonly value="Readonly">
</ods-password>
  `},m={tags:["isHidden"],render:()=>a`
<ods-password placeholder="Placeholder">
</ods-password>
  `},c={tags:["isHidden"],render:()=>a(g||(g=Z([`
<ods-password id="my-password-pattern" pattern="\\d*">
</ods-password>
<script>
(() => {
  const passwordPattern = document.getElementById('my-password-pattern');
  passwordPattern.addEventListener('odsChange', (event) => {
    passwordPattern.hasError = !event.detail.validity.valid;
  });
})();
<\/script>
  `],[`
<ods-password id="my-password-pattern" pattern="\\\\d*">
</ods-password>
<script>
(() => {
  const passwordPattern = document.getElementById('my-password-pattern');
  passwordPattern.addEventListener('odsChange', (event) => {
    passwordPattern.hasError = !event.detail.validity.valid;
  });
})();
<\/script>
  `])))},u={tags:["isHidden"],render:()=>a`
<ods-password class="my-password">
</ods-password>
<style>
  .my-password::part(input) {
    width: 100px;
  }
</style>
  `};var b,w,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-password class="my-password"
      ariaLabel="\${arg.ariaLabel}"
      ariaLabelledby="\${arg.ariaLabelledby}"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-loading="\${arg.isLoading}"
      is-readonly="\${arg.isReadonly}"
      pattern="\${arg.pattern}"
      placeholder="\${arg.placeholder}">
      </ods-password>
  <style>
  .my-password::part(input) {
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
      description: 'Set a custom style properties. Example: "border-color: red;"'
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
    isClearable: {
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
    isLoading: {
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
    pattern: {
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
    }
  }),
  args: {
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false
  }
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var C,h,O;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-password placeholder="Password"></ods-password>
  \`
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var L,R,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password></ods-password>
  \`
}`,...(E=(R=o.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var v,T,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-disabled>
</ods-password>
  \`
}`,...(_=(T=t.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var P,x,S;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password has-error>
</ods-password>
  \`
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var H,V,$;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-clearable value="value">
</ods-password>
  \`
}`,...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var D,A,G;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-loading>
</ods-password>
  \`
}`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,Y,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-readonly value="Readonly">
</ods-password>
  \`
}`,...(F=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var j,z,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password placeholder="Placeholder">
</ods-password>
  \`
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,M,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password id="my-password-pattern" pattern="\\\\d*">
</ods-password>
<script>
(() => {
  const passwordPattern = document.getElementById('my-password-pattern');
  passwordPattern.addEventListener('odsChange', (event) => {
    passwordPattern.hasError = !event.detail.validity.valid;
  });
})();
<\/script>
  \`
}`,...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password class="my-password">
</ods-password>
<style>
  .my-password::part(input) {
    width: 100px;
  }
</style>
  \`
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ee=["Demo","Overview","Default","Disabled","Error","Clearable","Loading","Readonly","Placeholder","Pattern","CustomCSS"],re=Object.freeze(Object.defineProperty({__proto__:null,Clearable:l,CustomCSS:u,Default:o,Demo:r,Disabled:t,Error:d,Loading:i,Overview:n,Pattern:c,Placeholder:m,Readonly:p,__namedExportsOrder:ee,default:k},Symbol.toStringTag,{value:"Module"}));export{u as C,o as D,d as E,i as L,n as O,re as P,p as R,l as a,t as b,c,m as d};
