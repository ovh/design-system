import{d as I}from"./ods-timepicker2-DVnCnUkw.js";import{x as t,o as J,C as r}from"./controls-DX883vx3.js";import{V as B}from"./validityState-BuENXwQ9.js";const K=I;K();const Q={component:"ods-timepicker",title:"ODS Components/Form elements/Timepicker"},a={render:e=>t`
    <ods-timepicker class="my-timepicker-demo"
                    aria-label="${e.ariaLabel}"
                    aria-labelledby="${e.ariaLabelledby}"
                    has-error="${e.hasError}"
                    is-disabled="${e.isDisabled}"
                    is-readonly="${e.isReadonly}"
                    is-required="${e.isRequired}"
                    timezones="${e.timezones?"all":null}"
                    with-seconds="${e.withSeconds}">
    </ods-timepicker>
    ${e.validityState?B("timepicker",".my-timepicker-demo"):""}
    <style>
      .my-timepicker-demo::part(input) {
        ${e.customCss}
      }
    </style>
    `,argTypes:J({ariaLabel:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:r.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:r.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 300px;"'},hasError:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:r.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},timezones:{table:{category:r.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:{type:"boolean"},description:'Toggle this to demo the "all" preset. To fine-tune the list of timezones, check the prop documentation.'},validityState:{table:{category:r.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"},withSeconds:{table:{category:r.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1,isRequired:!1,timezones:!1,validityState:!1,withSeconds:!1}},s={decorators:[e=>t`<div style="height: 230px;">${e()}</div>`],tags:["isHidden"],render:()=>t`
  <ods-timepicker timezones="all" class="my-timepicker"></ods-timepicker>
  <style>
    .my-timepicker {
      width: 100%;
    }

    .my-timepicker::part(input) {
      background-color: #ceffce;
    }

    .my-timepicker::part(select) {
      width: 300px;
    }
  </style>
  `},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-timepicker value="12:00" timezones="all" current-timezone="UTC+2"></ods-timepicker>
  `},i={tags:["isHidden"],render:()=>t`
<ods-timepicker></ods-timepicker>
  `},o={tags:["isHidden"],render:()=>t`
<ods-timepicker is-disabled></ods-timepicker>
  `},l={tags:["isHidden"],render:()=>t`
<ods-timepicker has-error></ods-timepicker>
  `},d={tags:["isHidden"],render:()=>t`
<ods-timepicker is-readonly></ods-timepicker>
  `},m={decorators:[e=>t`<div style="height: 230px;">${e()}</div>`],tags:["isHidden"],render:()=>t`
<ods-timepicker timezones="all"></ods-timepicker>
  `},c={decorators:[e=>t`<div style="height: 150px;">${e()}</div>`],tags:["isHidden"],render:()=>t`
<ods-timepicker timezones='["utc-4", "utc-2", "utc+2", "utc+4"]'></ods-timepicker>
  `},p={tags:["isHidden"],render:()=>t`
<ods-timepicker with-seconds></ods-timepicker>
  `},u={tags:["isHidden"],render:()=>t`
<ods-timepicker is-required id="timepicker-validity-state-demo">
</ods-timepicker>
${B("timepicker","#timepicker-validity-state-demo")}
  `};var y,g,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-timepicker class="my-timepicker-demo"
                    aria-label="\${arg.ariaLabel}"
                    aria-labelledby="\${arg.ariaLabelledby}"
                    has-error="\${arg.hasError}"
                    is-disabled="\${arg.isDisabled}"
                    is-readonly="\${arg.isReadonly}"
                    is-required="\${arg.isRequired}"
                    timezones="\${arg.timezones ? 'all' : null}"
                    with-seconds="\${arg.withSeconds}">
    </ods-timepicker>
    \${arg.validityState ? ValidityStateTemplate('timepicker', '.my-timepicker-demo') : ''}
    <style>
      .my-timepicker-demo::part(input) {
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
    timezones: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'boolean'
      },
      description: 'Toggle this to demo the "all" preset. To fine-tune the list of timezones, check the prop documentation.'
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
    isRequired: false,
    timezones: false,
    validityState: false,
    withSeconds: false
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,h,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="height: 230px;">\${story()}</div>\`],
  tags: ['isHidden'],
  render: () => html\`
  <ods-timepicker timezones="all" class="my-timepicker"></ods-timepicker>
  <style>
    .my-timepicker {
      width: 100%;
    }

    .my-timepicker::part(input) {
      background-color: #ceffce;
    }

    .my-timepicker::part(select) {
      width: 300px;
    }
  </style>
  \`
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var T,S,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-timepicker value="12:00" timezones="all" current-timezone="UTC+2"></ods-timepicker>
  \`
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,R,v;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker></ods-timepicker>
  \`
}`,...(v=(R=i.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var $,V,x;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker is-disabled></ods-timepicker>
  \`
}`,...(x=(V=o.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var z,E,H;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker has-error></ods-timepicker>
  \`
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var L,w,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker is-readonly></ods-timepicker>
  \`
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var D,A,G;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="height: 230px;">\${story()}</div>\`],
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker timezones="all"></ods-timepicker>
  \`
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,Y,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="height: 150px;">\${story()}</div>\`],
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker timezones='["utc-4", "utc-2", "utc+2", "utc+4"]'></ods-timepicker>
  \`
}`,...(q=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var F,W,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker with-seconds></ods-timepicker>
  \`
}`,...(j=(W=p.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var U,M,P;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker is-required id="timepicker-validity-state-demo">
</ods-timepicker>
\${ValidityStateTemplate('timepicker', '#timepicker-validity-state-demo')}
  \`
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const X=["Demo","CustomCSS","Overview","Default","Disabled","Error","Readonly","Timezones","TimezonesCustom","WithSeconds","ValidityState"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:s,Default:i,Demo:a,Disabled:o,Error:l,Overview:n,Readonly:d,Timezones:m,TimezonesCustom:c,ValidityState:u,WithSeconds:p,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{s as C,i as D,l as E,n as O,d as R,re as T,u as V,p as W,o as a,m as b,c};
