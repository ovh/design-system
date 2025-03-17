import{F as h,G as he,H as Ce}from"./index-CGJBSJl7.js";import{d as De}from"./ods-datepicker2-CijAhCPy.js";import{x as a,T as O,o as Se,C as r}from"./controls-DX883vx3.js";import{V as Oe}from"./validityState-BuENXwQ9.js";const ve=De;var C=Object.freeze,Re=Object.defineProperty,t=(e,Te)=>C(Re(e,"raw",{value:C(e.slice())})),D,S,v,R,L,E;ve();const Le={title:"ODS Components/Form elements/Datepicker",component:"ods-datepicker",decorators:[e=>a`<div style="height: 320px;">${e()}</div>`]},n={render:e=>a`
    <ods-datepicker class="my-datepicker"
      aria-label="${e.ariaLabel}"
      aria-labelledby="${e.ariaLabelledby}"
      format="${e.format||O}"
      has-error="${e.hasError}"
      is-clearable="${e.isClearable}"
      is-disabled="${e.isDisabled}"
      is-loading="${e.isLoading}"
      is-readonly="${e.isReadonly}"
      is-required="${e.isRequired}"
      locale="${e.locale||O}"
      max="${e.max?h(e.max,e.format||"dd/mm/yyyy"):O}"
      min="${e.min?h(e.min,e.format||"dd/mm/yyyy"):O}"
      placeholder="${e.placeholder}">
    </ods-datepicker>
    ${e.validityState?Oe("datepicker",".my-datepicker"):""}
    `,argTypes:Se({ariaLabel:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},format:{table:{category:r.general,defaultValue:{summary:"dd/mm/yyyy"},type:{summary:"string"}},control:"text"},hasError:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},locale:{table:{category:r.general,defaultValue:{summary:he.en},type:{summary:"OdsDatepickerLocale"}},control:{type:"select"},options:Ce},max:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"Date"}},control:"date"},min:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"Date"}},control:"date"},placeholder:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:r.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1,isRequired:!1,validityState:!1}},s={tags:["isHidden"],render:()=>a`
<ods-datepicker is-clearable>
</ods-datepicker>
  `},d={tags:["isHidden"],render:()=>a(D||(D=t([`
<ods-datepicker id="datepicker-dates-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-dates-disabled');
    datepicker.datesDisabled = [new Date(Date.now() - 86400000)];
  })();
<\/script>
  `])))},o={tags:["isHidden"],render:()=>a(S||(S=t([`
<ods-datepicker id="datepicker-days-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-days-disabled');
    datepicker.daysOfWeekDisabled = [1, 2];
  })();
<\/script>
  `])))},i={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a(v||(v=t([`
<ods-datepicker id="datepicker-overview"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-overview');
    datepicker.value = new Date();
  })();
<\/script>
  `])))},l={tags:["isHidden"],render:()=>a`
<ods-datepicker></ods-datepicker>
  `},c={tags:["isHidden"],render:()=>a`
<ods-datepicker is-disabled>
</ods-datepicker>
  `},m={tags:["isHidden"],render:()=>a`
<ods-datepicker has-error>
</ods-datepicker>
  `},p={tags:["isHidden"],render:()=>a(R||(R=t([`
<ods-datepicker id="datepicker-format"
                format="yyyy-mm-dd">
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-format');
    datepicker.value = new Date();
  })();
<\/script>
  `])))},y={tags:["isHidden"],render:()=>a(L||(L=t([`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-datepicker">
  <div class="datepicker-container">
    <ods-datepicker class="datepicker" strategy="fixed">
    </ods-datepicker>
  </div>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-datepicker');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>

<style>
  .datepicker,
  .datepicker-container {
    width: 200px;
    height: var(--ods-form-element-input-height);
  }
</style>
  `])))},u={tags:["isHidden"],render:()=>a`
<ods-datepicker is-loading>
</ods-datepicker>
  `},g={tags:["isHidden"],render:()=>a`
<ods-datepicker locale="de">
</ods-datepicker>
  `},b={tags:["isHidden"],render:()=>a`
<ods-datepicker placeholder="Placeholder">
</ods-datepicker>
  `},k={tags:["isHidden"],render:()=>a(E||(E=t([`
<ods-datepicker id="datepicker-readonly"
                is-readonly>
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-readonly');
    datepicker.value = new Date();
  })();
<\/script>
  `])))},f={tags:["isHidden"],render:()=>a`
<ods-datepicker is-required id="datepicker-validity-state-demo">
</ods-datepicker>
${Oe("datepicker","#datepicker-validity-state-demo")}
  `};var T,_,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-datepicker class="my-datepicker"
      aria-label="\${arg.ariaLabel}"
      aria-labelledby="\${arg.ariaLabelledby}"
      format="\${arg.format || nothing}"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-loading="\${arg.isLoading}"
      is-readonly="\${arg.isReadonly}"
      is-required="\${arg.isRequired}"
      locale="\${arg.locale || nothing}"
      max="\${arg.max ? formatDate(arg.max, arg.format || 'dd/mm/yyyy') : nothing}"
      min="\${arg.min ? formatDate(arg.min, arg.format || 'dd/mm/yyyy') : nothing}"
      placeholder="\${arg.placeholder}">
    </ods-datepicker>
    \${arg.validityState ? ValidityStateTemplate('datepicker', '.my-datepicker') : ''}
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
    format: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'dd/mm/yyyy'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
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
    locale: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_DATEPICKER_LOCALE.en
        },
        type: {
          summary: 'OdsDatepickerLocale'
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_DATEPICKER_LOCALES
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'Date'
        }
      },
      control: 'date'
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'Date'
        }
      },
      control: 'date'
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
}`,...(V=(_=n.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var x,$,H;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-clearable>
</ods-datepicker>
  \`
}`,...(H=($=s.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var q,A,w;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-dates-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-dates-disabled');
    datepicker.datesDisabled = [new Date(Date.now() - 86400000)];
  })();
<\/script>
  \`
}`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var G,N,Y;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-days-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-days-disabled');
    datepicker.daysOfWeekDisabled = [1, 2];
  })();
<\/script>
  \`
}`,...(Y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var F,P,j;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-datepicker id="datepicker-overview"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-overview');
    datepicker.value = new Date();
  })();
<\/script>
  \`
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var B,W,z;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker></ods-datepicker>
  \`
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var M,I,K;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-disabled>
</ods-datepicker>
  \`
}`,...(K=(I=c.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var J,Q,U;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker has-error>
</ods-datepicker>
  \`
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-format"
                format="yyyy-mm-dd">
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-format');
    datepicker.value = new Date();
  })();
<\/script>
  \`
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-datepicker">
  <div class="datepicker-container">
    <ods-datepicker class="datepicker" strategy="fixed">
    </ods-datepicker>
  </div>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-datepicker');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>

<style>
  .datepicker,
  .datepicker-container {
    width: 200px;
    height: var(--ods-form-element-input-height);
  }
</style>
  \`
}`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,se,de;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-loading>
</ods-datepicker>
  \`
}`,...(de=(se=u.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var oe,ie,le;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker locale="de">
</ods-datepicker>
  \`
}`,...(le=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,me,pe;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker placeholder="Placeholder">
</ods-datepicker>
  \`
}`,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,ue,ge;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-readonly"
                is-readonly>
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-readonly');
    datepicker.value = new Date();
  })();
<\/script>
  \`
}`,...(ge=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var be,ke,fe;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-required id="datepicker-validity-state-demo">
</ods-datepicker>
\${ValidityStateTemplate('datepicker', '#datepicker-validity-state-demo')}
  \`
}`,...(fe=(ke=f.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};const Ee=["Demo","Clearable","DatesDisabled","DaysOfWeekDisabled","Overview","Default","Disabled","Error","Format","FixedContext","Loading","Locale","Placeholder","Readonly","ValidityState"],He=Object.freeze(Object.defineProperty({__proto__:null,Clearable:s,DatesDisabled:d,DaysOfWeekDisabled:o,Default:l,Demo:n,Disabled:c,Error:m,FixedContext:y,Format:p,Loading:u,Locale:g,Overview:i,Placeholder:b,Readonly:k,ValidityState:f,__namedExportsOrder:Ee,default:Le},Symbol.toStringTag,{value:"Module"}));export{s as C,He as D,m as E,p as F,u as L,i as O,b as P,k as R,f as V,l as a,d as b,o as c,c as d,g as e,y as f};
