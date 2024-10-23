import{x as r}from"./lit-html-D-ZEPr28.js";import{o as U,C as s}from"./controls-DpsgTNdU.js";const M={component:"ods-timepicker",title:"ODS Components/Form elements/Timepicker"},t={render:e=>r`
  <ods-timepicker class="my-timepicker-demo"
                  aria-label="${e.ariaLabel}"
                  aria-labelledby="${e.ariaLabelledby}"
                  has-error="${e.hasError}"
                  is-disabled="${e.isDisabled}"
                  is-readonly="${e.isReadonly}"
                  timezones="${e.timezones?"all":null}"
                  with-seconds="${e.withSeconds}">
  </ods-timepicker>
  <style>
    .my-timepicker-demo::part(input) {
      ${e.customCss}
    }
  </style>
  `,argTypes:U({ariaLabel:{table:{category:s.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:s.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:s.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "width: 300px;"'},hasError:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},timezones:{table:{category:s.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:{type:"boolean"},description:'Toggle this to demo the "all" preset. To fine-tune the list of timezones, check the prop documentation.'},withSeconds:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1,timezones:!1,withSeconds:!1}},a={decorators:[e=>r`<div style="height: 230px;">${e()}</div>`],tags:["isHidden"],render:()=>r`
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
  `},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>r`
<ods-timepicker value="12:00" timezones="all" current-timezone="UTC+2"></ods-timepicker>
  `},o={tags:["isHidden"],render:()=>r`
<ods-timepicker></ods-timepicker>
  `},i={tags:["isHidden"],render:()=>r`
<ods-timepicker is-disabled></ods-timepicker>
  `},l={tags:["isHidden"],render:()=>r`
<ods-timepicker has-error></ods-timepicker>
  `},m={tags:["isHidden"],render:()=>r`
<ods-timepicker is-readonly></ods-timepicker>
  `},d={decorators:[e=>r`<div style="height: 230px;">${e()}</div>`],tags:["isHidden"],render:()=>r`
<ods-timepicker timezones="all"></ods-timepicker>
  `},c={decorators:[e=>r`<div style="height: 150px;">${e()}</div>`],tags:["isHidden"],render:()=>r`
<ods-timepicker timezones='["utc-4", "utc-2", "utc+2", "utc+4"]'></ods-timepicker>
  `},p={tags:["isHidden"],render:()=>r`
<ods-timepicker with-seconds></ods-timepicker>
  `};var u,y,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-timepicker class="my-timepicker-demo"
                  aria-label="\${arg.ariaLabel}"
                  aria-labelledby="\${arg.ariaLabelledby}"
                  has-error="\${arg.hasError}"
                  is-disabled="\${arg.isDisabled}"
                  is-readonly="\${arg.isReadonly}"
                  timezones="\${arg.timezones ? 'all' : null}"
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
    timezones: false,
    withSeconds: false
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,h,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,C,O;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-timepicker value="12:00" timezones="all" current-timezone="UTC+2"></ods-timepicker>
  \`
}`,...(O=(C=n.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var T,S,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker></ods-timepicker>
  \`
}`,...(R=(S=o.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var x,z,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker is-disabled></ods-timepicker>
  \`
}`,...($=(z=i.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var E,v,w;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker has-error></ods-timepicker>
  \`
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var H,L,V;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker is-readonly></ods-timepicker>
  \`
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,D,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="height: 230px;">\${story()}</div>\`],
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker timezones="all"></ods-timepicker>
  \`
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var G,N,Y;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [story => html\`<div style="height: 150px;">\${story()}</div>\`],
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker timezones='["utc-4", "utc-2", "utc+2", "utc+4"]'></ods-timepicker>
  \`
}`,...(Y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var F,W,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-timepicker with-seconds></ods-timepicker>
  \`
}`,...(j=(W=p.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const P=["Demo","CustomCSS","Overview","Default","Disabled","Error","Readonly","Timezones","TimezonesCustom","WithSeconds"],I=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:a,Default:o,Demo:t,Disabled:i,Error:l,Overview:n,Readonly:m,Timezones:d,TimezonesCustom:c,WithSeconds:p,__namedExportsOrder:P,default:M},Symbol.toStringTag,{value:"Module"}));export{a as C,o as D,l as E,n as O,m as R,I as T,p as W,i as a,d as b,c};
