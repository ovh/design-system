import{x as s,T as ae}from"./lit-html-D-ZEPr28.js";import{V as Z}from"./validityState-ExJ3RVbh.js";import{o as se,C as a}from"./controls-D697y8_r.js";var g=Object.freeze,re=Object.defineProperty,ne=(e,ee)=>g(re(e,"raw",{value:g(ee||e.slice())})),b;const oe={title:"ODS Components/Form elements/Password",component:"ods-password"},r={render:e=>s`
    <ods-password
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      class="my-password"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-loading="${e.isLoading}"
      is-readonly="${e.isReadonly}"
      is-required="${e.isRequired}"
      pattern="${e.pattern||ae}"
      placeholder="${e.placeholder}">
    </ods-password>
    ${e.validityState?Z("password",".my-password"):""}
    <style>
      .my-password::part(input) {
        ${e.customCss}
      }
    </style>
    `,argTypes:se({ariaLabel:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "border-color: red;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},pattern:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:a.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1,isRequired:!1,validityState:!1}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>s`
<ods-password placeholder="Password"></ods-password>
  `},o={tags:["isHidden"],render:()=>s`
<ods-password></ods-password>
  `},t={tags:["isHidden"],render:()=>s`
<ods-password is-disabled>
</ods-password>
  `},d={tags:["isHidden"],render:()=>s`
<ods-password has-error>
</ods-password>
  `},l={tags:["isHidden"],render:()=>s`
<ods-password is-clearable value="value">
</ods-password>
  `},i={tags:["isHidden"],render:()=>s`
<ods-password is-loading>
</ods-password>
  `},p={tags:["isHidden"],render:()=>s`
<ods-password is-readonly value="Readonly">
</ods-password>
  `},m={tags:["isHidden"],render:()=>s`
<ods-password placeholder="Placeholder">
</ods-password>
  `},c={tags:["isHidden"],render:()=>s(b||(b=ne([`
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
  `])))},y={tags:["isHidden"],render:()=>s`
<ods-password class="my-password">
</ods-password>
<style>
  .my-password {
    width: 100%;
  }

  .my-password::part(input) {
    background-color: #ceffce;
  }
</style>
  `},u={tags:["isHidden"],render:()=>s`
<ods-password is-required id="password-validity-state-demo">
</ods-password>
${Z("password","#password-validity-state-demo")}
  `};var w,f,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-password
      ariaLabel="\${arg.ariaLabel}"
      ariaLabelledby="\${arg.ariaLabelledby}"
      class="my-password"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-loading="\${arg.isLoading}"
      is-readonly="\${arg.isReadonly}"
      is-required="\${arg.isRequired}"
      pattern="\${arg.pattern || nothing}"
      placeholder="\${arg.placeholder}">
    </ods-password>
    \${arg.validityState ? ValidityStateTemplate('password', '.my-password') : ''}
    <style>
      .my-password::part(input) {
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
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
    isRequired: false,
    validityState: false
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var h,O,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-password placeholder="Password"></ods-password>
  \`
}`,...(v=(O=n.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var R,L,S;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password></ods-password>
  \`
}`,...(S=(L=o.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var T,E,V;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-disabled>
</ods-password>
  \`
}`,...(V=(E=t.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var _,$,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password has-error>
</ods-password>
  \`
}`,...(P=($=d.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var H,x,D;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-clearable value="value">
</ods-password>
  \`
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var A,G,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-loading>
</ods-password>
  \`
}`,...(N=(G=i.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,q,F;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-readonly value="Readonly">
</ods-password>
  \`
}`,...(F=(q=p.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var j,z,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password placeholder="Placeholder">
</ods-password>
  \`
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,k,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password class="my-password">
</ods-password>
<style>
  .my-password {
    width: 100%;
  }

  .my-password::part(input) {
    background-color: #ceffce;
  }
</style>
  \`
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-required id="password-validity-state-demo">
</ods-password>
\${ValidityStateTemplate('password', '#password-validity-state-demo')}
  \`
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const te=["Demo","Overview","Default","Disabled","Error","Clearable","Loading","Readonly","Placeholder","Pattern","CustomCSS","ValidityState"],pe=Object.freeze(Object.defineProperty({__proto__:null,Clearable:l,CustomCSS:y,Default:o,Demo:r,Disabled:t,Error:d,Loading:i,Overview:n,Pattern:c,Placeholder:m,Readonly:p,ValidityState:u,__namedExportsOrder:te,default:oe},Symbol.toStringTag,{value:"Module"}));export{y as C,o as D,d as E,i as L,n as O,pe as P,p as R,u as V,l as a,t as b,c,m as d};
