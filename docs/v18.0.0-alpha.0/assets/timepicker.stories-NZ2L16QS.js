import{U as p,V as u}from"./index-DB8q6ij-.js";import{x as n}from"./lit-html-D-ZEPr28.js";import{o as U,C as a}from"./control-C1r2wu67.js";const W={component:"ods-timepicker",title:"ODS Components/Form elements/Timepicker"},s={render:e=>n`
  <ods-timepicker class="my-timepicker-demo"
    aria-label="${e.ariaLabel}"
    aria-labelledby="${e.ariaLabelledby}"
    has-error="${e.hasError}"
    is-disabled="${e.isDisabled}"
    is-readonly="${e.isReadonly}"
    with-seconds="${e.withSeconds}">
  </ods-timepicker>
  <style>
    .my-timepicker-demo::part(input) {
      ${e.customCss}
    }
  </style>
  `,argTypes:U({ariaLabel:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 300px;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},withSeconds:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1,withSeconds:!1}},r={render:e=>n`
  <ods-timepicker class="my-timepicker-demo-timezones"
    aria-label="${e.ariaLabel}"
    aria-labelledby="${e.ariaLabelledby}"
    current-timezone="${e.currentTimezone}"
    has-error="${e.hasError}"
    is-disabled="${e.isDisabled}"
    is-readonly="${e.isReadonly}"
    timezones="${e.timezones}"
    with-seconds="${e.withSeconds}">
  </ods-timepicker>
  <style>
    .my-timepicker-demo-timezones::part(input) {
      ${e.customCssInput}
    }
    .my-timepicker-demo-timezones::part(select) {
      ${e.customCssSelect}
    }
  </style>
  `,argTypes:U({ariaLabel:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},currentTimezone:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:p}},control:{type:"select"},options:p},customCssInput:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 300px;"'},customCssSelect:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 300px;"'},hasError:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},timezones:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:[...p,...u]}},control:{type:"select"},options:[...p,...u]},withSeconds:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1,timezones:"all",withSeconds:!1}},t={decorators:[e=>n`<div style="padding-bottom: 200px; display: inline-flex; align-items: center;">${e()}</div>`],tags:["isHidden"],render:()=>n`
  <ods-timepicker timezones="all" class="my-timepicker-custom-css"></ods-timepicker>
  <style>
    .my-timepicker-custom-css::part(input) {
      width: 300px;
    }

    .my-timepicker-custom-css::part(select) {
      width: 300px;
    }
  </style>
  `},o={tags:["isHidden"],parameters:{layout:"centered"},render:()=>n`
<ods-timepicker value="12:00" timezones="all" current-timezone="UTC+2"></ods-timepicker>
  `},l={tags:["isHidden"],render:()=>n`
<ods-timepicker></ods-timepicker>
  `},i={tags:["isHidden"],render:()=>n`
<ods-timepicker is-disabled></ods-timepicker>
  `},m={tags:["isHidden"],render:()=>n`
<ods-timepicker has-error></ods-timepicker>
  `},c={tags:["isHidden"],render:()=>n`
<ods-timepicker is-readonly></ods-timepicker>
  `},d={decorators:[e=>n`<div style="padding-bottom: 200px; display: inline-flex; align-items: center;">${e()}</div>`],tags:["isHidden"],render:()=>n`
<ods-timepicker timezones="all"></ods-timepicker>
  `},y={tags:["isHidden"],render:()=>n`
<ods-timepicker with-seconds></ods-timepicker>
  `};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-timepicker class="my-timepicker-demo"
    aria-label="\${arg.ariaLabel}"
    aria-labelledby="\${arg.ariaLabelledby}"
    has-error="\${arg.hasError}"
    is-disabled="\${arg.isDisabled}"
    is-readonly="\${arg.isReadonly}"
    with-seconds="\${arg.withSeconds}">
  </ods-timepicker>
  <style>
    .my-timepicker-demo::part(input) {
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
      description: 'Set a custom style properties. Example: "width: 300px;"'
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
    withSeconds: {
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
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    withSeconds: false
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var O,T,S;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-timepicker class="my-timepicker-demo-timezones"
    aria-label="\${arg.ariaLabel}"
    aria-labelledby="\${arg.ariaLabelledby}"
    current-timezone="\${arg.currentTimezone}"
    has-error="\${arg.hasError}"
    is-disabled="\${arg.isDisabled}"
    is-readonly="\${arg.isReadonly}"
    timezones="\${arg.timezones}"
    with-seconds="\${arg.withSeconds}">
  </ods-timepicker>
  <style>
    .my-timepicker-demo-timezones::part(input) {
      \${arg.customCssInput}
    }
    .my-timepicker-demo-timezones::part(select) {
      \${arg.customCssSelect}
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
    currentTimezone: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: ODS_TIMEZONES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TIMEZONES
    },
    customCssInput: {
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
      description: 'Set a custom style properties. Example: "width: 300px;"'
    },
    customCssSelect: {
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
      description: 'Set a custom style properties. Example: "width: 300px;"'
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
    timezones: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: [...ODS_TIMEZONES, ...ODS_TIMEZONES_PRESETS]
        }
      },
      control: {
        type: 'select'
      },
      options: [...ODS_TIMEZONES, ...ODS_TIMEZONES_PRESETS]
    },
    withSeconds: {
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
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    timezones: 'all',
    withSeconds: false
  }
}`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,h,C;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="padding-bottom: 200px; display: inline-flex; align-items: center;">\${story()}</div>\`],
  tags: ['isHidden'],
  render: () => html\`
  <ods-timepicker timezones="all" class="my-timepicker-custom-css"></ods-timepicker>
  <style>
    .my-timepicker-custom-css::part(input) {
      width: 300px;
    }

    .my-timepicker-custom-css::part(select) {
      width: 300px;
    }
  </style>
  \`
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,R,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-timepicker value="12:00" timezones="all" current-timezone="UTC+2"></ods-timepicker>
  \`
}`,...(x=(R=o.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var $,V,_;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker></ods-timepicker>
  \`
}`,...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var L,z,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker is-disabled></ods-timepicker>
  \`
}`,...(w=(z=i.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var D,N,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker has-error></ods-timepicker>
  \`
}`,...(A=(N=m.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var G,Y,H;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker is-readonly></ods-timepicker>
  \`
}`,...(H=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var v,I,F;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="padding-bottom: 200px; display: inline-flex; align-items: center;">\${story()}</div>\`],
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker timezones="all"></ods-timepicker>
  \`
}`,...(F=(I=d.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var Z,M,P;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker with-seconds></ods-timepicker>
  \`
}`,...(P=(M=y.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const j=["Demo","TimeZones","CustomCSS","Overview","Default","Disabled","Error","Readonly","Timezones","WithSeconds"],K=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:t,Default:l,Demo:s,Disabled:i,Error:m,Overview:o,Readonly:c,TimeZones:r,Timezones:d,WithSeconds:y,__namedExportsOrder:j,default:W},Symbol.toStringTag,{value:"Module"}));export{t as C,l as D,m as E,o as O,c as R,K as T,y as W,i as a,d as b};
