import{x as t}from"./lit-html-D-ZEPr28.js";import{t as I,c as A,u as H}from"./index-CEZbmgmh.js";import{o as G,C as n}from"./control-C1r2wu67.js";const Y={title:"ODS Components/Link",component:"ods-link"},r={render:e=>t`
    <ods-link
      class="my-link-demo"
      color="${e.color}"
      download="${e.download}"
      href="${e.href}"
      icon="${e.icon}"
      is-disabled="${e.isDisabled}"
      label="${e.label}"
      rel="${e.rel}"
      referrerpolicy="${e.referrerpolicy}"
      target="${e.target}">
    </ods-link>
    <style>
      .my-link-demo::part(link) {
        ${e.customCssLink}
      }
      .my-link-demo::part(icon) {
        ${e.customCssIcon}
      }
    </style>
  `,argTypes:G({color:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"select",options:I},customCssLink:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the link. Example: "color: green; font-size: 32px;"'},customCssIcon:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the icon. Example: "width: 2rem; height: 2rem;"'},download:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},href:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},icon:{table:{category:n.general,type:{summary:"string"}},control:"select",options:A,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},isDisabled:{table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},referrerpolicy:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},rel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},target:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{color:H.primary,isDisabled:!1,label:"my label"}},o={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Link"></ods-link>
  `},s={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  `},a={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  `},l={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  `},i={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  `},d={tags:["isHidden"],render:()=>t`
  <div style="display: flex; flex-direction: column;">
<ods-link href="https://www.ovhcloud.com/" target="_blank" label="Blank target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_self" label="Self target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_parent" label="Parent target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_top" label="Top target"></ods-link>
</div>
  `},c={tags:["isHidden"],render:()=>t`
<ods-link class="my-link" href="/page" label="Content"></ods-link>
<style>
  .my-link::part(link) {
    color: green;
    font-size: 32px;
  }
</style>
  `};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <ods-link
      class="my-link-demo"
      color="\${args.color}"
      download="\${args.download}"
      href="\${args.href}"
      icon="\${args.icon}"
      is-disabled="\${args.isDisabled}"
      label="\${args.label}"
      rel="\${args.rel}"
      referrerpolicy="\${args.referrerpolicy}"
      target="\${args.target}">
    </ods-link>
    <style>
      .my-link-demo::part(link) {
        \${args.customCssLink}
      }
      .my-link-demo::part(icon) {
        \${args.customCssIcon}
      }
    </style>
  \`,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'select',
      options: ODS_LINK_COLORS
    },
    customCssLink: {
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
      description: 'Set a custom style properties on the link. Example: "color: green; font-size: 32px;"'
    },
    customCssIcon: {
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
      description: 'Set a custom style properties on the icon. Example: "width: 2rem; height: 2rem;"'
    },
    download: {
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
    href: {
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
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'string'
        }
      },
      control: 'select',
      options: ODS_ICON_NAMES,
      description: 'See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    label: {
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
    referrerpolicy: {
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
    rel: {
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
    target: {
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
    }
  }),
  args: {
    color: ODS_LINK_COLOR.primary,
    isDisabled: false,
    label: 'my label'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Link"></ods-link>
  \`
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,k,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  \`
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var w,O,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  \`
}`,...(C=(O=a.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var x,_,L;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  \`
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var S,T,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  \`
}`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var R,D,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: flex; flex-direction: column;">
<ods-link href="https://www.ovhcloud.com/" target="_blank" label="Blank target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_self" label="Self target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_parent" label="Parent target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_top" label="Top target"></ods-link>
</div>
  \`
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var $,V,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link class="my-link" href="/page" label="Content"></ods-link>
<style>
  .my-link::part(link) {
    color: green;
    font-size: 32px;
  }
</style>
  \`
}`,...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const F=["Demo","Overview","Default","Color","Disabled","Icon","Target","CustomCSSLink"],M=Object.freeze(Object.defineProperty({__proto__:null,Color:a,CustomCSSLink:c,Default:s,Demo:r,Disabled:l,Icon:i,Overview:o,Target:d,__namedExportsOrder:F,default:Y},Symbol.toStringTag,{value:"Module"}));export{c as C,s as D,i as I,M as L,o as O,d as T,a,l as b};
