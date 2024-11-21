import{Z as se,_ as b}from"./index-BvAGq-5Z.js";import{T as oe,x as a}from"./lit-html-D-ZEPr28.js";import{o as le,C as n}from"./controls-DpsgTNdU.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=e=>e??oe;var f=Object.freeze,de=Object.defineProperty,ue=(e,re)=>f(de(e,"raw",{value:f(re||e.slice())})),O;const me={title:"ODS Components/Form elements/Input",component:"ods-input"},t={render:e=>a`
  <ods-input class="my-input"
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-loading="${e.isLoading}"
      is-masked="${ie(e.isMasked)}"
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
  `,argTypes:le({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "border-color: red;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isMasked:{table:{category:n.general,defaultValue:{summary:void 0},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},max:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},maxlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},minlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},pattern:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},step:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},type:{table:{category:n.general,defaultValue:{summary:se.text},type:{summary:b}},control:{type:"select"},options:b}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isMasked:void 0,isReadonly:!1}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-input placeholder="Input"></ods-input>
  `},s={tags:["isHidden"],render:()=>a`
<ods-input></ods-input>
  `},o={tags:["isHidden"],render:()=>a`
<ods-input is-disabled>
</ods-input>
  `},l={tags:["isHidden"],render:()=>a`
<ods-input has-error>
</ods-input>
  `},i={tags:["isHidden"],render:()=>a`
<ods-input is-clearable value="value">
</ods-input>
  `},d={tags:["isHidden"],render:()=>a`
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
  `},c={tags:["isHidden"],render:()=>a(O||(O=ue([`
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
  .my-input {
    width: 100%;
  }

  .my-input::part(input) {
    background-color: #ceffce;
  }
</style>
  `},g={tags:["isHidden"],render:()=>a`
<ods-input list="my-list">
  <datalist slot="list">
    <option value="Chocolate"></option>
    <option value="Coconut"></option>
    <option value="Mint"></option>
    <option value="Strawberry"></option>
    <option value="Vanilla"></option>
  </datalist>
</ods-input>
  `};var C,h,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var R,E,v;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-input placeholder="Input"></ods-input>
  \`
}`,...(v=(E=r.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var L,_,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input></ods-input>
  \`
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var V,$,S;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-disabled>
</ods-input>
  \`
}`,...(S=($=o.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var P,H,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input has-error>
</ods-input>
  \`
}`,...(N=(H=l.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var Y,D,A;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-clearable value="value">
</ods-input>
  \`
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var G,k,I;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-loading>
</ods-input>
  \`
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,F,w;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-masked>
</ods-input>
  \`
}`,...(w=(F=u.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var U,j,z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-readonly value="Readonly">
</ods-input>
  \`
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,Z,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input placeholder="Placeholder">
</ods-input>
  \`
}`,...(q=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,ee;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input class="my-input">
</ods-input>
<style>
  .my-input {
    width: 100%;
  }

  .my-input::part(input) {
    background-color: #ceffce;
  }
</style>
  \`
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ne,ae,te;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input list="my-list">
  <datalist slot="list">
    <option value="Chocolate"></option>
    <option value="Coconut"></option>
    <option value="Mint"></option>
    <option value="Strawberry"></option>
    <option value="Vanilla"></option>
  </datalist>
</ods-input>
  \`
}`,...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const pe=["Demo","Overview","Default","Disabled","Error","Clearable","Loading","Masked","Readonly","Placeholder","Pattern","CustomCSS","Datalist"],be=Object.freeze(Object.defineProperty({__proto__:null,Clearable:i,CustomCSS:y,Datalist:g,Default:s,Demo:t,Disabled:o,Error:l,Loading:d,Masked:u,Overview:r,Pattern:c,Placeholder:p,Readonly:m,__namedExportsOrder:pe,default:me},Symbol.toStringTag,{value:"Module"}));export{y as C,s as D,l as E,be as I,d as L,u as M,r as O,c as P,m as R,i as a,o as b,p as c,g as d};
