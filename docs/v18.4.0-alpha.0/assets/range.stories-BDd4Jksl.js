import{x as a}from"./lit-html-D-ZEPr28.js";import{V as ve}from"./validityState-ExJ3RVbh.js";import{o as Se,C as n}from"./controls-D697y8_r.js";var D=Object.freeze,De=Object.defineProperty,r=(e,S)=>D(De(e,"raw",{value:D(S||e.slice())})),O,C,h,T,V,R;const Oe={component:"ods-range",title:"ODS Components/Form elements/Range",decorators:[e=>a`<div style="padding-top: 50px; display: flex; flex-direction: column; align-items: start;">${e()}</div>`]},t={render:e=>a`
    <ods-range
      class="my-range-demo"
      has-error="${e.hasError}"
      is-disabled="${e.isDisabled}"
      is-required="${e.isRequired}"
      max="${e.max}"
      min="${e.min}"
      step="${e.step}">
    </ods-range>
    ${e.validityState?ve("range",".my-range-demo"):""}
    <style>
      .my-range-demo::part(range) {
        ${e.customCss}
      }
    </style>
    `,argTypes:Se({customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{table:{category:n.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:n.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isRequired:!1,max:100,min:0,step:1,validityState:!1}},s={render:e=>{const S=a(O||(O=r([`<br>
    <div id="validity-state" style="display: grid; row-gap: 5px;"></div>
    <script>
      (async () => {
          const divValidityState = document.querySelector('#validity-state');
          const rangeDual = document.querySelector('.my-range-dual-demo');
          await customElements.whenDefined('ods-range');
          await renderValidityState();
          rangeDual.addEventListener('odsChange', async () => {
            await renderValidityState();
          })
          async function renderValidityState() {
            const validity = await rangeDual.getValidity()
            divValidityState.innerHTML = '';
            for (let key in validity) {
              divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
            }
          }
      })();
    <\/script>`])));return a(C||(C=r([`
    <ods-range
      class="my-range-dual-demo"
      has-error="`,`"
      is-disabled="`,`"
      is-required="`,`"
      max="`,`"
      min="`,`"
      step="`,`"
    ></ods-range>
    `,`
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
    </style>`])),e.hasError,e.isDisabled,e.isRequired,e.max,e.min,e.step,e.validityState?S:"",e.customCss,e.customCss)},argTypes:Se({customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{table:{category:n.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:n.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:n.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isRequired:!1,max:100,min:0,step:1,validityState:!1}},o={tags:["isHidden"],render:()=>a`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  `},l={tags:["isHidden"],render:()=>a`
<ods-range></ods-range>
  `},d={tags:["isHidden"],render:()=>a(h||(h=r([`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>`])))},i={tags:["isHidden"],render:()=>a`
<ods-range is-disabled value="40"></ods-range>
  `},u={tags:["isHidden"],render:()=>a(T||(T=r([`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>`])))},m={tags:["isHidden"],render:()=>a`
<ods-range has-error value="40"></ods-range>
  `},c={tags:["isHidden"],render:()=>a(V||(V=r([`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>`])))},g={tags:["isHidden"],render:()=>a`
<ods-range max="1000" value="40"></ods-range>
  `},y={tags:["isHidden"],render:()=>a`
<ods-range min="50" value="70"></ods-range>
  `},p={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-range value="50"></ods-range>
  `},b={tags:["isHidden"],render:()=>a`
<ods-range step="10" value="70"></ods-range>
  `},f={tags:["isHidden"],render:()=>a(R||(R=r([`
<ods-range step="10" id="range-dual-step"></ods-range>
<script>
(() => {
  const rangeDualStep = document.querySelector('#range-dual-step');
  rangeDualStep.value = [30, 70];
})()
<\/script>
  `])))},v={tags:["isHidden"],render:()=>a`
<ods-range is-required id="range-validity-state-demo">
</ods-range>
${ve("range","#range-validity-state-demo")}
  `};var E,x,_;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-range
      class="my-range-demo"
      has-error="\${arg.hasError}"
      is-disabled="\${arg.isDisabled}"
      is-required="\${arg.isRequired}"
      max="\${arg.max}"
      min="\${arg.min}"
      step="\${arg.step}">
    </ods-range>
    \${arg.validityState ? ValidityStateTemplate('range', '.my-range-demo') : ''}
    <style>
      .my-range-demo::part(range) {
        \${arg.customCss}
      }
    </style>
    \`;
  },
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
    isDisabled: false,
    isRequired: false,
    max: 100,
    min: 0,
    step: 1,
    validityState: false
  }
}`,...(_=(x=t.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var q,H,$;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const validityStateTemplate = html\`<br>
    <div id="validity-state" style="display: grid; row-gap: 5px;"></div>
    <script>
      (async () => {
          const divValidityState = document.querySelector('#validity-state');
          const rangeDual = document.querySelector('.my-range-dual-demo');
          await customElements.whenDefined('ods-range');
          await renderValidityState();
          rangeDual.addEventListener('odsChange', async () => {
            await renderValidityState();
          })
          async function renderValidityState() {
            const validity = await rangeDual.getValidity()
            divValidityState.innerHTML = '';
            for (let key in validity) {
              divValidityState.innerHTML += "<div>" + key + ": " + validity[key] + "</div>";
            }
          }
      })();
    <\/script>\`;
    return html\`
    <ods-range
      class="my-range-dual-demo"
      has-error="\${args.hasError}"
      is-disabled="\${args.isDisabled}"
      is-required="\${args.isRequired}"
      max="\${args.max}"
      min="\${args.min}"
      step="\${args.step}"
    ></ods-range>
    \${args.validityState ? validityStateTemplate : ''}
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
    </style>\`;
  },
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
    isDisabled: false,
    isRequired: false,
    max: 100,
    min: 0,
    step: 1,
    validityState: false
  }
}`,...($=(H=s.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var L,w,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  \`
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var G,N,Y;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range></ods-range>
  \`
}`,...(Y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var M,k,j;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>\`
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var z,F,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40"></ods-range>
  \`
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var B,I,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>\`
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40"></ods-range>
  \`
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>\`
}`,...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range max="1000" value="40"></ods-range>
  \`
}`,...(ne=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,te,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range min="50" value="70"></ods-range>
  \`
}`,...(se=(te=y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,le,de;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-range value="50"></ods-range>
  \`
}`,...(de=(le=p.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ie,ue,me;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range step="10" value="70"></ods-range>
  \`
}`,...(me=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ce,ge,ye;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ye=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var pe,be,fe;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-required id="range-validity-state-demo">
</ods-range>
\${ValidityStateTemplate('range', '#range-validity-state-demo')}
  \`
}`,...(fe=(be=v.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};const Ce=["Demo","DemoDual","CustomCSS","Default","DefaultDual","Disabled","DisabledDual","Error","ErrorDual","Max","Min","Overview","Step","StepDual","ValidityState"],Re=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:o,Default:l,DefaultDual:d,Demo:t,DemoDual:s,Disabled:i,DisabledDual:u,Error:m,ErrorDual:c,Max:g,Min:y,Overview:p,Step:b,StepDual:f,ValidityState:v,__namedExportsOrder:Ce,default:Oe},Symbol.toStringTag,{value:"Module"}));export{o as C,l as D,m as E,g as M,p as O,Re as R,b as S,v as V,d as a,i as b,u as c,c as d,y as e,f};
