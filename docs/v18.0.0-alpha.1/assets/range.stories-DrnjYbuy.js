import{x as a}from"./lit-html-D-ZEPr28.js";import{o as ge,C as r}from"./control-C1r2wu67.js";var f=Object.freeze,pe=Object.defineProperty,D=(e,ie)=>f(pe(e,"raw",{value:f(ie||e.slice())})),O,C,S,x,h;const ye={component:"ods-range",title:"ODS Components/Form elements/Range",decorators:[e=>a`<div style="padding-top: 50px; display: inline-flex; align-items: center;">${e()}</div>`]},n={render:e=>a`
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
    </style>`,argTypes:ge({customCss:{table:{category:r.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},max:{table:{category:r.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:r.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:r.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"}}),args:{hasError:!1,isDisabled:!1,max:100,min:0,step:1}},s={render:e=>a(O||(O=D([`
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
    </style>`])),e.hasError,e.isDisabled,e.max,e.min,e.step,e.customCss,e.customCss),argTypes:ge({customCss:{table:{category:r.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},max:{table:{category:r.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:r.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:r.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"}}),args:{hasError:!1,isDisabled:!1,max:100,min:0,step:1}},t={tags:["isHidden"],render:()=>a`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  `},o={tags:["isHidden"],render:()=>a`
<ods-range></ods-range>
  `},l={tags:["isHidden"],render:()=>a(C||(C=D([`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>`])))},d={tags:["isHidden"],render:()=>a`
<ods-range is-disabled value="40"></ods-range>
  `},m={tags:["isHidden"],render:()=>a(S||(S=D([`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>`])))},u={tags:["isHidden"],render:()=>a`
<ods-range has-error value="40"></ods-range>
  `},c={tags:["isHidden"],render:()=>a(x||(x=D([`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>`])))},g={tags:["isHidden"],render:()=>a`
<ods-range max="1000" value="40"></ods-range>
  `},i={tags:["isHidden"],render:()=>a`
<ods-range min="50" value="70"></ods-range>
  `},p={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-range value="50"></ods-range>
  `},y={tags:["isHidden"],render:()=>a`
<ods-range step="10" value="70"></ods-range>
  `},b={tags:["isHidden"],render:()=>a(h||(h=D([`
<ods-range step="10" id="range-dual-step"></ods-range>
<script>
(() => {
  const rangeDualStep = document.querySelector('#range-dual-step');
  rangeDualStep.value = [30, 70];
})()
<\/script>
  `])))};var v,E,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var _,R,H;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(R=s.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var V,$,A;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  \`
}`,...(A=($=t.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var G,L,N;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range></ods-range>
  \`
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Y,q,w;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>\`
}`,...(w=(q=l.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var M,j,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40"></ods-range>
  \`
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var F,P,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>\`
}`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var I,J,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40"></ods-range>
  \`
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>\`
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,k;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range max="1000" value="40"></ods-range>
  \`
}`,...(k=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};var ee,ae,re;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range min="50" value="70"></ods-range>
  \`
}`,...(re=(ae=i.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,se,te;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-range value="50"></ods-range>
  \`
}`,...(te=(se=p.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,le,de;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range step="10" value="70"></ods-range>
  \`
}`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,ue,ce;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ce=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const be=["Demo","DemoDual","CustomCSS","Default","DefaultDual","Disabled","DisabledDual","Error","ErrorDual","Max","Min","Overview","Step","StepDual"],Oe=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:t,Default:o,DefaultDual:l,Demo:n,DemoDual:s,Disabled:d,DisabledDual:m,Error:u,ErrorDual:c,Max:g,Min:i,Overview:p,Step:y,StepDual:b,__namedExportsOrder:be,default:ye},Symbol.toStringTag,{value:"Module"}));export{t as C,o as D,u as E,g as M,p as O,Oe as R,y as S,l as a,d as b,m as c,c as d,i as e,b as f};
