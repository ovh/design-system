import{U as ne,V as g}from"./index-CEZbmgmh.js";import{T as ae,x as a}from"./lit-html-D-ZEPr28.js";import{o as re,C as n}from"./control-C1r2wu67.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=e=>e??ae;var b=Object.freeze,se=Object.defineProperty,oe=(e,ee)=>b(se(e,"raw",{value:b(ee||e.slice())})),f;const le={title:"ODS Components/Form elements/Input",component:"ods-input"},r={render:e=>a`
  <ods-input class="my-input"
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-loading="${e.isLoading}"
      is-masked="${te(e.isMasked)}"
      is-readonly="${e.isReadonly}"
      max="${e.max}"
      maxlength="${e.maxlength}"
      min="${e.min}"
      minlength="${e.minlength}"
      pattern="${e.pattern}"
      placeholder="${e.placeholder}"
      step="${e.step}"
      type="${e.type}">
      </ods-input>
<style>
  .my-input::part(input) {
    ${e.customCss}
  }
</style>
  `,argTypes:re({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "border-color: red;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isMasked:{table:{category:n.general,defaultValue:{summary:void 0},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},max:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},maxlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},minlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},pattern:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},step:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},type:{table:{category:n.general,defaultValue:{summary:ne.text},type:{summary:g}},control:{type:"select"},options:g}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isMasked:void 0,isReadonly:!1}},t={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-input placeholder="Input"></ods-input>
  `},s={tags:["isHidden"],render:()=>a`
<ods-input></ods-input>
  `},o={tags:["isHidden"],render:()=>a`
<ods-input is-disabled>
</ods-input>
  `},l={tags:["isHidden"],render:()=>a`
<ods-input has-error>
</ods-input>
  `},d={tags:["isHidden"],render:()=>a`
<ods-input is-clearable>
</ods-input>
  `},i={tags:["isHidden"],render:()=>a`
<ods-input is-loading>
</ods-input>
  `},u={tags:["isHidden"],render:()=>a`
<ods-input is-masked>
</ods-input>
  `},m={tags:["isHidden"],render:()=>a`
<ods-input is-readonly value="Readonly">
</ods-input>
  `},p={tags:["isHidden"],render:()=>a`
<ods-input placeholder="Placeholder">
</ods-input>
  `},c={tags:["isHidden"],render:()=>a(f||(f=oe([`
<ods-input id="my-input-pattern" pattern="\\d*">
</ods-input>
<script>
(() => {
  const inputPattern = document.getElementById('my-input-pattern');
  inputPattern.addEventListener('odsChange', (event) => {
    inputPattern.hasError = !event.detail.validity.valid;
  });
})();
<\/script>
  `],[`
<ods-input id="my-input-pattern" pattern="\\\\d*">
</ods-input>
<script>
(() => {
  const inputPattern = document.getElementById('my-input-pattern');
  inputPattern.addEventListener('odsChange', (event) => {
    inputPattern.hasError = !event.detail.validity.valid;
  });
})();
<\/script>
  `])))},y={tags:["isHidden"],render:()=>a`
<ods-input class="my-input">
</ods-input>
<style>
  .my-input::part(input) {
    width: 100px;
  }
</style>
  `};var O,C,h;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-input class="my-input"
      ariaLabel="\${arg.ariaLabel}"
      ariaLabelledby="\${arg.ariaLabelledby}"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-loading="\${arg.isLoading}"
      is-masked="\${ifDefined(arg.isMasked)}"
      is-readonly="\${arg.isReadonly}"
      max="\${arg.max}"
      maxlength="\${arg.maxlength}"
      min="\${arg.min}"
      minlength="\${arg.minlength}"
      pattern="\${arg.pattern}"
      placeholder="\${arg.placeholder}"
      step="\${arg.step}"
      type="\${arg.type}">
      </ods-input>
<style>
  .my-input::part(input) {
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
    isMasked: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: undefined
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
    max: {
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
    min: {
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
    step: {
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
    type: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_INPUT_TYPE.text
        },
        type: {
          summary: ODS_INPUT_TYPES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_INPUT_TYPES
    }
  }),
  args: {
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isMasked: undefined,
    isReadonly: false
  }
}`,...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var T,R,E;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-input placeholder="Input"></ods-input>
  \`
}`,...(E=(R=t.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var L,x,_;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input></ods-input>
  \`
}`,...(_=(x=s.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var V,$,S;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-disabled>
</ods-input>
  \`
}`,...(S=($=o.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var v,P,N;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input has-error>
</ods-input>
  \`
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var Y,H,D;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-clearable>
</ods-input>
  \`
}`,...(D=(H=d.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var A,G,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-loading>
</ods-input>
  \`
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var k,F,M;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-masked>
</ods-input>
  \`
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var U,w,j;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-readonly value="Readonly">
</ods-input>
  \`
}`,...(j=(w=m.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var z,B,q;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input placeholder="Placeholder">
</ods-input>
  \`
}`,...(q=(B=p.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input id="my-input-pattern" pattern="\\\\d*">
</ods-input>
<script>
(() => {
  const inputPattern = document.getElementById('my-input-pattern');
  inputPattern.addEventListener('odsChange', (event) => {
    inputPattern.hasError = !event.detail.validity.valid;
  });
})();
<\/script>
  \`
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input class="my-input">
</ods-input>
<style>
  .my-input::part(input) {
    width: 100px;
  }
</style>
  \`
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const de=["Demo","Overview","Default","Disabled","Error","Clearable","Loading","Masked","Readonly","Placeholder","Pattern","CustomCSS"],pe=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,CustomCSS:y,Default:s,Demo:r,Disabled:o,Error:l,Loading:i,Masked:u,Overview:t,Pattern:c,Placeholder:p,Readonly:m,__namedExportsOrder:de,default:le},Symbol.toStringTag,{value:"Module"}));export{y as C,s as D,l as E,pe as I,i as L,u as M,t as O,c as P,m as R,d as a,o as b,p as c};
