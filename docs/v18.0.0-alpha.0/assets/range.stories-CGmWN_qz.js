import{x as a}from"./lit-html-D-ZEPr28.js";import{o as De,C as n}from"./control-C1r2wu67.js";var x=Object.freeze,xe=Object.defineProperty,r=(e,fe)=>x(xe(e,"raw",{value:x(fe||e.slice())})),S,v,C,O,h,E;const Se={component:"ods-range",title:"ODS Components/Form elements/Range",decorators:[e=>a`<div style="padding-top: 50px; display: inline-flex; align-items: center;">${e()}</div>`]},s={render:e=>a`
    <ods-range
      class="my-range-demo"
      has-error="${e.hasError}"
      is-disabled="${e.isDisabled}"
      max="${e.max}"
      min="${e.min}"
      step="${e.step}"
    ></ods-range>
    <style>
      .my-range-demo::part(range) {
        ${e.customCss}
      }
    </style>`,argTypes:De({customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},max:{table:{category:n.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:n.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"}}),args:{hasError:!1,isDisabled:!1,max:100,min:0,step:1}},t={render:e=>a(S||(S=r([`
    <ods-range
      class="my-range-dual-demo"
      has-error="`,`"
      is-disabled="`,`"
      max="`,`"
      min="`,`"
      step="`,`"
    ></ods-range>
    <script>
    (() => {
      const rangeDual = document.querySelector('.my-range-dual-demo');
      rangeDual.value = [30, 70];
    })()
    <\/script>
    <style>
      .my-range-dual-demo::part(range) {
        `,`
      }

      .my-range-dual-demo::part(range-dual) {
        `,`
      }
    </style>`])),e.hasError,e.isDisabled,e.max,e.min,e.step,e.customCss,e.customCss),argTypes:De({customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},max:{table:{category:n.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:n.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"}}),args:{hasError:!1,isDisabled:!1,max:100,min:0,step:1}},o={tags:["isHidden"],render:()=>a`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  `},l={tags:["isHidden"],render:()=>a`
<ods-range></ods-range>
  `},d={tags:["isHidden"],render:()=>a(v||(v=r([`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>`])))},u={tags:["isHidden"],render:()=>a`
<ods-range is-disabled value="40"></ods-range>
  `},m={tags:["isHidden"],render:()=>a(C||(C=r([`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>`])))},c={tags:["isHidden"],render:()=>a`
<ods-range has-error value="40"></ods-range>
  `},i={tags:["isHidden"],render:()=>a(O||(O=r([`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>`])))},g={tags:["isHidden"],render:()=>a`
<ods-range max="1000" value="40"></ods-range>
  `},p={tags:["isHidden"],render:()=>a`
<ods-range min="50" value="70"></ods-range>
  `},y={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-range value="50"></ods-range>
  `},b={tags:["isHidden"],render:()=>a`
<ods-range step="10" value="70"></ods-range>
  `},D={tags:["isHidden"],render:()=>a(h||(h=r([`
<ods-range step="10" id="range-dual-step"></ods-range>
<script>
(() => {
  const rangeDualStep = document.querySelector('#range-dual-step');
  rangeDualStep.value = [30, 70];
})()
<\/script>
  `])))},f={tags:["isHidden"],render:()=>a(E||(E=r([`
<ods-form-field>
  <div slot="label">
    <ods-text preset='label'>
      Label
    </ods-text>
    <ods-text id='sub-label' preset='caption'>
      Selected value : <span id='min-bound'>0</span> - <span id='max-bound'>0</span>
    </ods-text>
  </div>
  <ods-range step="10" id="range-dual-step-2"></ods-range>
  <script>
    (() => {
      const rangeDualStep = document.querySelector('#range-dual-step-2');
      rangeDualStep.value = [30, 70];
      const minBound = document.querySelector('#min-bound');
      const maxBound = document.querySelector('#max-bound');
      minBound.textContent = rangeDualStep.value[0];
      maxBound.textContent = rangeDualStep.value[1];

      rangeDualStep.addEventListener('odsChange', () => {
        minBound.textContent = rangeDualStep.value[0];
        maxBound.textContent = rangeDualStep.value[1];
      });
    })()
  <\/script>
  <style>
    #sub-label::part(text) {
      display: block;
      text-align: left;
    }
  </style>
</ods-form-field>
  `])))};var T,_,R;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => html\`
    <ods-range
      class="my-range-demo"
      has-error="\${args.hasError}"
      is-disabled="\${args.isDisabled}"
      max="\${args.max}"
      min="\${args.min}"
      step="\${args.step}"
    ></ods-range>
    <style>
      .my-range-demo::part(range) {
        \${args.customCss}
      }
    </style>\`,
  argTypes: orderControls({
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
      description: 'Set a custom style properties. Example: "width: 100px;"'
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
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: '100'
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
          summary: '0'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: '1'
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
    isDisabled: false,
    max: 100,
    min: 0,
    step: 1
  }
}`,...(R=(_=s.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var H,V,$;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => html\`
    <ods-range
      class="my-range-dual-demo"
      has-error="\${args.hasError}"
      is-disabled="\${args.isDisabled}"
      max="\${args.max}"
      min="\${args.min}"
      step="\${args.step}"
    ></ods-range>
    <script>
    (() => {
      const rangeDual = document.querySelector('.my-range-dual-demo');
      rangeDual.value = [30, 70];
    })()
    <\/script>
    <style>
      .my-range-dual-demo::part(range) {
        \${args.customCss}
      }

      .my-range-dual-demo::part(range-dual) {
        \${args.customCss}
      }
    </style>\`,
  argTypes: orderControls({
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
      description: 'Set a custom style properties. Example: "width: 100px;"'
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
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: '100'
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
          summary: '0'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: '1'
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
    isDisabled: false,
    max: 100,
    min: 0,
    step: 1
  }
}`,...($=(V=t.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var L,q,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  \`
}`,...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,N,Y;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range></ods-range>
  \`
}`,...(Y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var B,w,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>\`
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var M,j,z;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40"></ods-range>
  \`
}`,...(z=(j=u.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,W,k;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>\`
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var I,J,K;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40"></ods-range>
  \`
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>\`
}`,...(X=(U=i.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range max="1000" value="40"></ods-range>
  \`
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,se;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range min="50" value="70"></ods-range>
  \`
}`,...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-range value="50"></ods-range>
  \`
}`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,ue,me;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range step="10" value="70"></ods-range>
  \`
}`,...(me=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ce,ie,ge;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range step="10" id="range-dual-step"></ods-range>
<script>
(() => {
  const rangeDualStep = document.querySelector('#range-dual-step');
  rangeDualStep.value = [30, 70];
})()
<\/script>
  \`
}`,...(ge=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var pe,ye,be;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <div slot="label">
    <ods-text preset='label'>
      Label
    </ods-text>
    <ods-text id='sub-label' preset='caption'>
      Selected value : <span id='min-bound'>0</span> - <span id='max-bound'>0</span>
    </ods-text>
  </div>
  <ods-range step="10" id="range-dual-step-2"></ods-range>
  <script>
    (() => {
      const rangeDualStep = document.querySelector('#range-dual-step-2');
      rangeDualStep.value = [30, 70];
      const minBound = document.querySelector('#min-bound');
      const maxBound = document.querySelector('#max-bound');
      minBound.textContent = rangeDualStep.value[0];
      maxBound.textContent = rangeDualStep.value[1];

      rangeDualStep.addEventListener('odsChange', () => {
        minBound.textContent = rangeDualStep.value[0];
        maxBound.textContent = rangeDualStep.value[1];
      });
    })()
  <\/script>
  <style>
    #sub-label::part(text) {
      display: block;
      text-align: left;
    }
  </style>
</ods-form-field>
  \`
}`,...(be=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const ve=["Demo","DemoDual","CustomCSS","Default","DefaultDual","Disabled","DisabledDual","Error","ErrorDual","Max","Min","Overview","Step","StepDual","WithFormField"],he=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:o,Default:l,DefaultDual:d,Demo:s,DemoDual:t,Disabled:u,DisabledDual:m,Error:c,ErrorDual:i,Max:g,Min:p,Overview:y,Step:b,StepDual:D,WithFormField:f,__namedExportsOrder:ve,default:Se},Symbol.toStringTag,{value:"Module"}));export{o as C,l as D,c as E,g as M,y as O,he as R,b as S,f as W,d as a,u as b,m as c,i as d,p as e,D as f};
