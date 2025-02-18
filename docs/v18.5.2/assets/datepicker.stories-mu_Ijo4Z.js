import{D,E as De,F as Ce}from"./index-DCBH0_Tl.js";import{d as Se}from"./ods-datepicker2-BYQpPxj0.js";import{x as a,T as O,o as he,C as r}from"./controls-DX883vx3.js";import{V as Oe}from"./validityState-BuENXwQ9.js";const Re=Se;var C=Object.freeze,Le=Object.defineProperty,t=(e,Te)=>C(Le(e,"raw",{value:C(e.slice())})),S,h,R,L,v,E;Re();const ve={title:"ODS Components/Form elements/Datepicker",component:"ods-datepicker",decorators:[e=>a`<div style="height: 320px;">${e()}</div>`]},n={render:e=>a`
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
      max="${e.max?D(e.max,e.format||"dd/mm/yyyy"):O}"
      min="${e.min?D(e.min,e.format||"dd/mm/yyyy"):O}"
      placeholder="${e.placeholder}">
    </ods-datepicker>
    ${e.validityState?Oe("datepicker",".my-datepicker"):""}
    `,argTypes:he({ariaLabel:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},format:{table:{category:r.general,defaultValue:{summary:"dd/mm/yyyy"},type:{summary:"string"}},control:"text"},hasError:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},locale:{table:{category:r.general,defaultValue:{summary:De.en},type:{summary:"OdsDatepickerLocale"}},control:{type:"select"},options:Ce},max:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"Date"}},control:"date"},min:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"Date"}},control:"date"},placeholder:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:r.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1,isRequired:!1,validityState:!1}},s={tags:["isHidden"],render:()=>a`
<ods-datepicker is-clearable>
</ods-datepicker>
  `},d={tags:["isHidden"],render:()=>a(S||(S=t([`
<ods-datepicker id="datepicker-dates-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-dates-disabled');
    datepicker.datesDisabled = [new Date(Date.now() - 86400000)];
  })();
<\/script>
  `])))},o={tags:["isHidden"],render:()=>a(h||(h=t([`
<ods-datepicker id="datepicker-days-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-days-disabled');
    datepicker.daysOfWeekDisabled = [1, 2];
  })();
<\/script>
  `])))},i={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a(R||(R=t([`
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
  `},p={tags:["isHidden"],render:()=>a(L||(L=t([`
<ods-datepicker id="datepicker-format"
                format="yyyy-mm-dd">
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-format');
    datepicker.value = new Date();
  })();
<\/script>
  `])))},u={tags:["isHidden"],render:()=>a(v||(v=t([`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-datepicker strategy="fixed">
  </ods-datepicker>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-tooltip');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>
  `])))},y={tags:["isHidden"],render:()=>a`
<ods-datepicker is-loading>
</ods-datepicker>
  `},b={tags:["isHidden"],render:()=>a`
<ods-datepicker locale="de">
</ods-datepicker>
  `},g={tags:["isHidden"],render:()=>a`
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
}`,...(V=(_=n.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var $,x,H;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-clearable>
</ods-datepicker>
  \`
}`,...(H=(x=s.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var q,A,w;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-datepicker strategy="fixed">
  </ods-datepicker>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-tooltip');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>
  \`
}`,...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,se,de;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-loading>
</ods-datepicker>
  \`
}`,...(de=(se=y.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var oe,ie,le;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker locale="de">
</ods-datepicker>
  \`
}`,...(le=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,me,pe;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker placeholder="Placeholder">
</ods-datepicker>
  \`
}`,...(pe=(me=g.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ye,be;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ge,ke,fe;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-required id="datepicker-validity-state-demo">
</ods-datepicker>
\${ValidityStateTemplate('datepicker', '#datepicker-validity-state-demo')}
  \`
}`,...(fe=(ke=f.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};const Ee=["Demo","Clearable","DatesDisabled","DaysOfWeekDisabled","Overview","Default","Disabled","Error","Format","FixedContext","Loading","Locale","Placeholder","Readonly","ValidityState"],He=Object.freeze(Object.defineProperty({__proto__:null,Clearable:s,DatesDisabled:d,DaysOfWeekDisabled:o,Default:l,Demo:n,Disabled:c,Error:m,FixedContext:u,Format:p,Loading:y,Locale:b,Overview:i,Placeholder:g,Readonly:k,ValidityState:f,__namedExportsOrder:Ee,default:ve},Symbol.toStringTag,{value:"Module"}));export{s as C,He as D,m as E,p as F,y as L,i as O,g as P,k as R,f as V,l as a,d as b,o as c,c as d,b as e,u as f};
