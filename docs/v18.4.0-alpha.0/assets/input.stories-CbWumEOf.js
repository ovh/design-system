import{Y as ge,Z as O}from"./index-D19O3a7h.js";import{T as t,x as a}from"./lit-html-D-ZEPr28.js";import{V as ce}from"./validityState-ExJ3RVbh.js";import{o as be,C as n}from"./controls-D697y8_r.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=e=>e??t;var C=Object.freeze,he=Object.defineProperty,Oe=(e,ye)=>C(he(e,"raw",{value:C(ye||e.slice())})),v;const Ce={title:"ODS Components/Form elements/Input",component:"ods-input"},r={render:e=>a`
    <ods-input class="my-input"
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-loading="${e.isLoading}"
      is-masked="${fe(e.isMasked)}"
      is-readonly="${e.isReadonly}"
      is-required="${e.isRequired}"
      max="${e.max||t}"
      maxlength="${e.maxlength||t}"
      min="${e.min||t}"
      minlength="${e.minlength||t}"
      pattern="${e.pattern||t}"
      placeholder="${e.placeholder||t}"
      step="${e.step||t}"
      type="${e.type||t}">
    </ods-input>
    ${e.validityState?ce("input",".my-input"):""}
    <style>
      .my-input::part(input) {
        ${e.customCss}
      }
    </style>
  `,argTypes:be({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "border-color: red;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isMasked:{table:{category:n.general,defaultValue:{summary:void 0},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},maxlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},minlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},pattern:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},step:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},type:{table:{category:n.general,defaultValue:{summary:ge.text},type:{summary:O}},control:{type:"select"},options:O},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isMasked:void 0,isReadonly:!1,isRequired:!1,validityState:!1}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-input placeholder="Input"></ods-input>
  `},o={tags:["isHidden"],render:()=>a`
<ods-input></ods-input>
  `},l={tags:["isHidden"],render:()=>a`
<ods-input is-disabled>
</ods-input>
  `},i={tags:["isHidden"],render:()=>a`
<ods-input has-error>
</ods-input>
  `},d={tags:["isHidden"],render:()=>a`
<ods-input is-clearable value="value">
</ods-input>
  `},u={tags:["isHidden"],render:()=>a`
<ods-input is-loading>
</ods-input>
  `},m={tags:["isHidden"],render:()=>a`
<ods-input is-masked>
</ods-input>
  `},p={tags:["isHidden"],render:()=>a`
<ods-input is-readonly value="Readonly">
</ods-input>
  `},c={tags:["isHidden"],render:()=>a`
<ods-input type="search" value="search type">
</ods-input>
  `},y={tags:["isHidden"],render:()=>a`
<ods-input placeholder="Placeholder">
</ods-input>
  `},g={tags:["isHidden"],render:()=>a(v||(v=Oe([`
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
  `])))},b={tags:["isHidden"],render:()=>a`
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
  `},f={tags:["isHidden"],render:()=>a`
<ods-input list="my-list">
  <datalist slot="list">
    <option value="Chocolate"></option>
    <option value="Coconut"></option>
    <option value="Mint"></option>
    <option value="Strawberry"></option>
    <option value="Vanilla"></option>
  </datalist>
</ods-input>
  `},h={tags:["isHidden"],render:()=>a`
<ods-input is-required id="input-validity-state-demo">
</ods-input>
${ce("input","#input-validity-state-demo")}
  `};var T,R,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-input class="my-input"
      ariaLabel="\${arg.ariaLabel}"
      ariaLabelledby="\${arg.ariaLabelledby}"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-loading="\${arg.isLoading}"
      is-masked="\${ifDefined(arg.isMasked)}"
      is-readonly="\${arg.isReadonly}"
      is-required="\${arg.isRequired}"
      max="\${arg.max || nothing}"
      maxlength="\${arg.maxlength || nothing}"
      min="\${arg.min || nothing}"
      minlength="\${arg.minlength || nothing}"
      pattern="\${arg.pattern || nothing}"
      placeholder="\${arg.placeholder || nothing}"
      step="\${arg.step || nothing}"
      type="\${arg.type || nothing}">
    </ods-input>
    \${arg.validityState ? ValidityStateTemplate('input', '.my-input') : ''}
    <style>
      .my-input::part(input) {
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
    isMasked: undefined,
    isReadonly: false,
    isRequired: false,
    validityState: false
  }
}`,...(S=(R=r.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var V,E,L;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-input placeholder="Input"></ods-input>
  \`
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var _,$,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input></ods-input>
  \`
}`,...(x=($=o.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var P,H,Y;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-disabled>
</ods-input>
  \`
}`,...(Y=(H=l.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var N,D,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input has-error>
</ods-input>
  \`
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var G,k,I;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-clearable value="value">
</ods-input>
  \`
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,F,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-loading>
</ods-input>
  \`
}`,...(q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var w,U,j;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-masked>
</ods-input>
  \`
}`,...(j=(U=m.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var z,B,Z;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-readonly value="Readonly">
</ods-input>
  \`
}`,...(Z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:Z.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input type="search" value="search type">
</ods-input>
  \`
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,ee;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input placeholder="Placeholder">
</ods-input>
  \`
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ne,ae,te;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,oe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=b.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,me,pe;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-required id="input-validity-state-demo">
</ods-input>
\${ValidityStateTemplate('input', '#input-validity-state-demo')}
  \`
}`,...(pe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const ve=["Demo","Overview","Default","Disabled","Error","Clearable","Loading","Masked","Readonly","Search","Placeholder","Pattern","CustomCSS","Datalist","ValidityState"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,CustomCSS:b,Datalist:f,Default:o,Demo:r,Disabled:l,Error:i,Loading:u,Masked:m,Overview:s,Pattern:g,Placeholder:y,Readonly:p,Search:c,ValidityState:h,__namedExportsOrder:ve,default:Ce},Symbol.toStringTag,{value:"Module"}));export{b as C,o as D,i as E,Ee as I,u as L,m as M,s as O,g as P,p as R,c as S,h as V,d as a,l as b,y as c,f as d};
