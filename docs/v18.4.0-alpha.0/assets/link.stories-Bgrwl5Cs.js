import{x as t}from"./lit-html-D-ZEPr28.js";import{t as W,b as j,u as p,v as g,w as B}from"./index-D19O3a7h.js";import{o as q,C as n}from"./controls-D697y8_r.js";const J={title:"ODS Components/Link",component:"ods-link"},o={render:e=>t`
    <ods-link
      class="my-link-demo"
      color="${e.color}"
      download="${e.download}"
      href="${e.href}"
      icon="${e.icon}"
      icon-alignment="${e.iconAlignment}"
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
  `,argTypes:q({color:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"select",options:W},customCssLink:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the link. Example: "color: green; font-size: 32px;"'},customCssIcon:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the icon. Example: "width: 2rem; height: 2rem;"'},download:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},href:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},icon:{table:{category:n.general,type:{summary:"string"}},control:"select",options:j,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},iconAlignment:{table:{category:n.general,defaultValue:{summary:p.right},type:{summary:g}},control:{type:"select"},options:g},isDisabled:{table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},referrerpolicy:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},rel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},target:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{color:B.primary,iconAlignment:p.right,isDisabled:!1,label:"my label"}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Link"></ods-link>
  `},s={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  `},a={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  `},l={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  `},i={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-left" icon-alignment="${p.left}"></ods-link>
  `},c={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  `},d={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" icon="arrow-right"></ods-link>
  `},m={tags:["isHidden"],render:()=>t`
  <div style="display: flex; flex-direction: column;">
<ods-link href="https://www.ovhcloud.com/" target="_blank" label="Blank target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_self" label="Self target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_parent" label="Parent target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_top" label="Top target"></ods-link>
</div>
  `},u={tags:["isHidden"],render:()=>t`
<ods-link class="my-link" href="https://www.ovhcloud.com/" label="Content"></ods-link>

<style>
  .my-link::part(link) {
    color: green;
    font-size: 32px;
  }
</style>
  `};var y,h,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`
    <ods-link
      class="my-link-demo"
      color="\${args.color}"
      download="\${args.download}"
      href="\${args.href}"
      icon="\${args.icon}"
      icon-alignment="\${args.iconAlignment}"
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
    iconAlignment: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_LINK_ICON_ALIGNMENT.right
        },
        type: {
          summary: ODS_LINK_ICON_ALIGNMENTS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_LINK_ICON_ALIGNMENTS
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
    iconAlignment: ODS_LINK_ICON_ALIGNMENT.right,
    isDisabled: false,
    label: 'my label'
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,k,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Link"></ods-link>
  \`
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var O,C,_;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  \`
}`,...(_=(C=s.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var L,N,S;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  \`
}`,...(S=(N=a.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var I,T,x;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  \`
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var v,D,R;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-left" icon-alignment="\${ODS_LINK_ICON_ALIGNMENT.left}"></ods-link>
  \`
}`,...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var A,E,$;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  \`
}`,...($=(E=c.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var V,G,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" icon="arrow-right"></ods-link>
  \`
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Y,K,M;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: flex; flex-direction: column;">
<ods-link href="https://www.ovhcloud.com/" target="_blank" label="Blank target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_self" label="Self target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_parent" label="Parent target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_top" label="Top target"></ods-link>
</div>
  \`
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var F,z,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link class="my-link" href="https://www.ovhcloud.com/" label="Content"></ods-link>

<style>
  .my-link::part(link) {
    color: green;
    font-size: 32px;
  }
</style>
  \`
}`,...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const Q=["Demo","Overview","Default","Color","Disabled","WithLeftIcon","WithRightIcon","IconOnly","Target","CustomCSSLink"],ee=Object.freeze(Object.defineProperty({__proto__:null,Color:a,CustomCSSLink:u,Default:s,Demo:o,Disabled:l,IconOnly:d,Overview:r,Target:m,WithLeftIcon:i,WithRightIcon:c,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{u as C,s as D,d as I,ee as L,r as O,m as T,i as W,a,l as b,c};
