import{d as xe}from"./ods-range2-wBjnlon-.js";import{x as n,o as Ee,C as a}from"./controls-DX883vx3.js";import{V as O}from"./validityState-BuENXwQ9.js";const Ve=xe;var C=Object.freeze,_e=Object.defineProperty,r=(e,qe)=>C(_e(e,"raw",{value:C(e.slice())})),T,h,R,E,x,V;Ve();const $e={component:"ods-range",title:"ODS Components/Form elements/Range",decorators:[e=>n`<div style="padding-top: 50px; display: flex; flex-direction: column; align-items: start;">${e()}</div>`]},s={render:e=>n`
    <ods-range
      class="my-range-demo"
      has-error="${e.hasError}"
      is-disabled="${e.isDisabled}"
      is-required="${e.isRequired}"
      max="${e.max}"
      min="${e.min}"
      step="${e.step}"
      ticks="${e.ticks?"[0,25,50,75,100]":""}">
    </ods-range>
    ${e.validityState?O("range",".my-range-demo"):""}
    <style>
      .my-range-demo::part(range) {
        ${e.customCss}
      }
    </style>
    `,argTypes:Ee({customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:a.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{table:{category:a.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:a.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:a.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"},ticks:{control:"boolean",table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number[]"}}},validityState:{table:{category:a.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isRequired:!1,max:100,min:0,step:1,ticks:!1,validityState:!1}},t={render:e=>n(T||(T=r([`
    <ods-range
      class="my-range-dual-demo"
      has-error="`,`"
      is-disabled="`,`"
      is-required="`,`"
      max="`,`"
      min="`,`"
      step="`,`"
      ticks="`,`"
    ></ods-range>
    `,`
    <script>
    (async() => {
      await customElements.whenDefined('ods-range')
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
    </style>`])),e.hasError,e.isDisabled,e.isRequired,e.max,e.min,e.step,e.ticks?"[0,25,50,75,100]":"",e.validityState?O("range",".my-range-dual-demo"):"",e.customCss,e.customCss),argTypes:Ee({customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 100px;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:a.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},max:{table:{category:a.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},min:{table:{category:a.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},step:{table:{category:a.general,defaultValue:{summary:"1"},type:{summary:"number"}},control:"number"},ticks:{control:"boolean",table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"number[]"}}},validityState:{table:{category:a.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isRequired:!1,max:100,min:0,step:1,ticks:!1,validityState:!1}},o={tags:["isHidden"],render:()=>n`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  `},l={tags:["isHidden"],render:()=>n`
<ods-range></ods-range>
  `},d={tags:["isHidden"],render:()=>n(h||(h=r([`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>`])))},u={tags:["isHidden"],render:()=>n`
<ods-range is-disabled value="40"></ods-range>
  `},m={tags:["isHidden"],render:()=>n(R||(R=r([`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>`])))},i={tags:["isHidden"],render:()=>n`
<ods-range has-error value="40"></ods-range>
  `},c={tags:["isHidden"],render:()=>n(E||(E=r([`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>`])))},g={tags:["isHidden"],render:()=>n`
<ods-range max="1000" value="40"></ods-range>
  `},y={tags:["isHidden"],render:()=>n`
<ods-range min="50" value="70"></ods-range>
  `},p={tags:["isHidden"],parameters:{layout:"centered"},render:()=>n`
<ods-range value="50"></ods-range>
  `},b={tags:["isHidden"],render:()=>n`
<ods-range step="10" value="70"></ods-range>
  `},f={tags:["isHidden"],render:()=>n(x||(x=r([`
<ods-range step="10" id="range-dual-step"></ods-range>
<script>
(() => {
  const rangeDualStep = document.querySelector('#range-dual-step');
  rangeDualStep.value = [30, 70];
})()
<\/script>
  `])))},D={tags:["isHidden"],render:()=>n`
<ods-range ticks="[25,50,75]" value="55"></ods-range>
  `},S={tags:["isHidden"],render:()=>n(V||(V=r([`
<ods-range ticks="[0,25,50,75,100]" id="range-dual-ticks"></ods-range>
<script>
(() => {
  const rangeDualTicks = document.querySelector('#range-dual-ticks');
  rangeDualTicks.value = [30, 70];
})()
<\/script>
  `])))},v={tags:["isHidden"],render:()=>n`
<ods-range is-required id="range-validity-state-demo">
</ods-range>
${O("range","#range-validity-state-demo")}
  `};var _,$,k;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-range
      class="my-range-demo"
      has-error="\${arg.hasError}"
      is-disabled="\${arg.isDisabled}"
      is-required="\${arg.isRequired}"
      max="\${arg.max}"
      min="\${arg.min}"
      step="\${arg.step}"
      ticks="\${arg.ticks ? '[0,25,50,75,100]' : ''}">
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
    ticks: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number[]'
        }
      }
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
    ticks: false,
    validityState: false
  }
}`,...(k=($=s.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var q,H,A;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-range
      class="my-range-dual-demo"
      has-error="\${arg.hasError}"
      is-disabled="\${arg.isDisabled}"
      is-required="\${arg.isRequired}"
      max="\${arg.max}"
      min="\${arg.min}"
      step="\${arg.step}"
      ticks="\${arg.ticks ? '[0,25,50,75,100]' : ''}"
    ></ods-range>
    \${arg.validityState ? ValidityStateTemplate('range', '.my-range-dual-demo') : ''}
    <script>
    (async() => {
      await customElements.whenDefined('ods-range')
      const rangeDual = document.querySelector('.my-range-dual-demo');
      rangeDual.value = [30, 70];
    })()
    <\/script>
    <style>
      .my-range-dual-demo::part(range) {
        \${arg.customCss}
      }

      .my-range-dual-demo::part(range-dual) {
        \${arg.customCss}
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
    ticks: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number[]'
        }
      }
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
    ticks: false,
    validityState: false
  }
}`,...(A=(H=t.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var G,L,N;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range class="my-range" value="70"></ods-range>
<style>
  .my-range::part(range) {
    width: 100px
  }
</style>
  \`
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Y,w,M;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range></ods-range>
  \`
}`,...(M=(w=l.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var F,j,z;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range id="range-dual-default"></ods-range>
<script>
(() => {
  const rangeDualDefault = document.querySelector('#range-dual-default');
  rangeDualDefault.value = [30, 70];
})()
<\/script>\`
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,B,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40"></ods-range>
  \`
}`,...(I=(B=u.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-disabled value="40" id="range-dual-disabled"></ods-range>
<script>
(() => {
  const rangeDualDisabled = document.querySelector('#range-dual-disabled');
  rangeDualDisabled.value = [30, 70];
})()
<\/script>\`
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40"></ods-range>
  \`
}`,...(X=(W=i.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ae;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range has-error value="40" id="range-dual-error"></ods-range>
<script>
(() => {
  const rangeDualError = document.querySelector('#range-dual-error');
  rangeDualError.value = [30, 70];
})()
<\/script>\`
}`,...(ae=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,se;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range max="1000" value="40"></ods-range>
  \`
}`,...(se=(re=g.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range min="50" value="70"></ods-range>
  \`
}`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,ue,me;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-range value="50"></ods-range>
  \`
}`,...(me=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ie,ce,ge;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range step="10" value="70"></ods-range>
  \`
}`,...(ge=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var ye,pe,be;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var fe,De,Se;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range ticks="[25,50,75]" value="55"></ods-range>
  \`
}`,...(Se=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var ve,Oe,Ce;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range ticks="[0,25,50,75,100]" id="range-dual-ticks"></ods-range>
<script>
(() => {
  const rangeDualTicks = document.querySelector('#range-dual-ticks');
  rangeDualTicks.value = [30, 70];
})()
<\/script>
  \`
}`,...(Ce=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ce.source}}};var Te,he,Re;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-range is-required id="range-validity-state-demo">
</ods-range>
\${ValidityStateTemplate('range', '#range-validity-state-demo')}
  \`
}`,...(Re=(he=v.parameters)==null?void 0:he.docs)==null?void 0:Re.source}}};const ke=["Demo","DemoDual","CustomCSS","Default","DefaultDual","Disabled","DisabledDual","Error","ErrorDual","Max","Min","Overview","Step","StepDual","Ticks","TicksDual","ValidityState"],Le=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:o,Default:l,DefaultDual:d,Demo:s,DemoDual:t,Disabled:u,DisabledDual:m,Error:i,ErrorDual:c,Max:g,Min:y,Overview:p,Step:b,StepDual:f,Ticks:D,TicksDual:S,ValidityState:v,__namedExportsOrder:ke,default:$e},Symbol.toStringTag,{value:"Module"}));export{o as C,l as D,i as E,g as M,p as O,Le as R,b as S,D as T,v as V,d as a,u as b,m as c,c as d,y as e,f,S as g};
