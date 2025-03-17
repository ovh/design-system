import{K as Oe,L as C}from"./index-CGJBSJl7.js";import{d as Ce}from"./ods-input-CCQ46ZEm.js";import{E as ve}from"./lit-html-DJdeL0_A.js";import{x as a,T as t,o as Te,C as n}from"./controls-DX883vx3.js";import{V as fe}from"./validityState-BuENXwQ9.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=e=>e??ve;var v=Object.freeze,Se=Object.defineProperty,Ee=(e,he)=>v(Se(e,"raw",{value:v(he||e.slice())})),T;Ce();const Ve={title:"ODS Components/Form elements/Input",component:"ods-input"},r={render:e=>a`
    <ods-input class="my-input"
      ariaLabel="${e.ariaLabel}"
      ariaLabelledby="${e.ariaLabelledby}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-loading="${e.isLoading}"
      is-masked="${Re(e.isMasked)}"
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
    ${e.validityState?fe("input",".my-input"):""}
    <style>
      .my-input::part(input) {
        ${e.customCss}
      }
    </style>
  `,argTypes:Te({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "border-color: red;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isMasked:{table:{category:n.general,defaultValue:{summary:void 0},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},maxlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},minlength:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},pattern:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},step:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},type:{table:{category:n.general,defaultValue:{summary:Oe.text},type:{summary:C}},control:{type:"select"},options:C},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isMasked:void 0,isReadonly:!1,isRequired:!1,validityState:!1}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
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
<ods-input type="number" step="any" value="9.99">
</ods-input>
  `},g={tags:["isHidden"],render:()=>a`
<ods-input placeholder="Placeholder">
</ods-input>
  `},b={tags:["isHidden"],render:()=>a(T||(T=Ee([`
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
  `])))},f={tags:["isHidden"],render:()=>a`
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
  `},h={tags:["isHidden"],render:()=>a`
<ods-input list="my-list">
  <datalist slot="list">
    <option value="Chocolate"></option>
    <option value="Coconut"></option>
    <option value="Mint"></option>
    <option value="Strawberry"></option>
    <option value="Vanilla"></option>
  </datalist>
</ods-input>
  `},O={tags:["isHidden"],render:()=>a`
<ods-input is-required id="input-validity-state-demo">
</ods-input>
${fe("input","#input-validity-state-demo")}
  `};var R,S,E;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(S=r.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var V,L,_;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-input placeholder="Input"></ods-input>
  \`
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var $,x,H;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input></ods-input>
  \`
}`,...(H=(x=o.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var P,N,Y;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-disabled>
</ods-input>
  \`
}`,...(Y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var A,D,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input has-error>
</ods-input>
  \`
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var k,I,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-clearable value="value">
</ods-input>
  \`
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var F,q,w;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-loading>
</ods-input>
  \`
}`,...(w=(q=u.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var U,j,z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-masked>
</ods-input>
  \`
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,K,J;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-readonly value="Readonly">
</ods-input>
  \`
}`,...(J=(K=p.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,W,X;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input type="search" value="search type">
</ods-input>
  \`
}`,...(X=(W=c.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ne;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input type="number" step="any" value="9.99">
</ods-input>
  \`
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input placeholder="Placeholder">
</ods-input>
  \`
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,le;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,de,ue;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ce;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ce=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ye,ge,be;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-input is-required id="input-validity-state-demo">
</ods-input>
\${ValidityStateTemplate('input', '#input-validity-state-demo')}
  \`
}`,...(be=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const Le=["Demo","Overview","Default","Disabled","Error","Clearable","Loading","Masked","Readonly","Search","StepAny","Placeholder","Pattern","CustomCSS","Datalist","ValidityState"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Clearable:d,CustomCSS:f,Datalist:h,Default:o,Demo:r,Disabled:l,Error:i,Loading:u,Masked:m,Overview:s,Pattern:b,Placeholder:g,Readonly:p,Search:c,StepAny:y,ValidityState:O,__namedExportsOrder:Le,default:Ve},Symbol.toStringTag,{value:"Module"}));export{f as C,o as D,i as E,Ne as I,u as L,m as M,s as O,b as P,p as R,c as S,O as V,d as a,l as b,g as c,y as d,h as e};
