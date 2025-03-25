import{d as se}from"./ods-password2-Cx1VaMfM.js";import{x as s,T as g,o as re,C as a}from"./controls-DX883vx3.js";import{V as ee}from"./validityState-BuENXwQ9.js";const ne=se;var b=Object.freeze,oe=Object.defineProperty,te=(e,ae)=>b(oe(e,"raw",{value:b(ae||e.slice())})),w;ne();const de={title:"ODS Components/Form elements/Password",component:"ods-password"},r={render:e=>s`
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
      maxlength="${e.maxlength||g}"
      minlength="${e.minlength||g}"
      pattern="${e.pattern||g}"
      placeholder="${e.placeholder}">
    </ods-password>
    ${e.validityState?ee("password",".my-password"):""}
    <style>
      .my-password::part(input) {
        ${e.customCss}
      }
    </style>
    `,argTypes:re({ariaLabel:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "border-color: red;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},maxlength:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},minlength:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},pattern:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:a.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1,isRequired:!1,validityState:!1}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>s`
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
  `},m={tags:["isHidden"],render:()=>s`
<ods-password is-readonly value="Readonly">
</ods-password>
  `},p={tags:["isHidden"],render:()=>s`
<ods-password placeholder="Placeholder">
</ods-password>
  `},c={tags:["isHidden"],render:()=>s(w||(w=te([`
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
  `])))},u={tags:["isHidden"],render:()=>s`
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
  `},y={tags:["isHidden"],render:()=>s`
<ods-password is-required id="password-validity-state-demo">
</ods-password>
${ee("password","#password-validity-state-demo")}
  `};var f,h,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      maxlength="\${arg.maxlength || nothing}"
      minlength="\${arg.minlength || nothing}"
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
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var O,R,v;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-password placeholder="Password"></ods-password>
  \`
}`,...(v=(R=n.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var L,T,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password></ods-password>
  \`
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,V,$;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-disabled>
</ods-password>
  \`
}`,...($=(V=t.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var x,_,P;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password has-error>
</ods-password>
  \`
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var H,A,G;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-clearable value="value">
</ods-password>
  \`
}`,...(G=(A=l.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,Y,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-loading>
</ods-password>
  \`
}`,...(D=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};var q,F,j;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-readonly value="Readonly">
</ods-password>
  \`
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var z,B,I;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password placeholder="Placeholder">
</ods-password>
  \`
}`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var k,M,J;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(J=(M=c.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var K,Q,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-password is-required id="password-validity-state-demo">
</ods-password>
\${ValidityStateTemplate('password', '#password-validity-state-demo')}
  \`
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const le=["Demo","Overview","Default","Disabled","Error","Clearable","Loading","Readonly","Placeholder","Pattern","CustomCSS","ValidityState"],ce=Object.freeze(Object.defineProperty({__proto__:null,Clearable:l,CustomCSS:u,Default:o,Demo:r,Disabled:t,Error:d,Loading:i,Overview:n,Pattern:c,Placeholder:p,Readonly:m,ValidityState:y,__namedExportsOrder:le,default:de},Symbol.toStringTag,{value:"Module"}));export{u as C,o as D,d as E,i as L,n as O,ce as P,m as R,y as V,l as a,t as b,c,p as d};
