import{p as J,b as Q,q as y,r as g,s as U}from"./index-DZK8KyWG.js";import{d as X}from"./ods-link-BCeMi6SV.js";import{x as t,o as Z,C as n}from"./controls-DX883vx3.js";X();const ee={title:"ODS Components/Link",component:"ods-link"},s={render:e=>t`
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
        .my-link-demo::part(label) {
        ${e.customCssLabel}
      }
    </style>
  `,argTypes:Z({color:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"select",options:J},customCssLink:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the link. Example: "color: green; font-size: 32px;"'},customCssIcon:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the icon. Example: "width: 2rem; height: 2rem;"'},customCssLabel:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the label. Example: "overflow: auto; text-overflow: inherit; white-space: break-spaces;"'},download:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},href:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},icon:{table:{category:n.general,type:{summary:"string"}},control:"select",options:Q,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},iconAlignment:{table:{category:n.general,defaultValue:{summary:y.right},type:{summary:g}},control:{type:"select"},options:g},isDisabled:{table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},referrerpolicy:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},rel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},target:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{color:U.primary,iconAlignment:y.right,isDisabled:!1,label:"my label"}},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Link"></ods-link>
  `},o={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  `},r={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  `},a={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  `},i={tags:["isHidden"],render:()=>t`
<ods-link id="link-ellipsis" class="my-link-ellipsis" href="test" label="link ellipsis" target="_blank">
</ods-link>
<ods-tooltip trigger-id="link-ellipsis" with-arrow="">
  link ellipsis
</ods-tooltip>

<ods-link class="my-link-not-ellipsis" href="test" label="link not ellipsis" target="_blank">
</ods-link>

<style>
  .my-link-ellipsis::part(link), .my-link-not-ellipsis::part(link) {
    width: 50px;
    margin-right: 1rem;
  }

  .my-link-not-ellipsis::part(label) {
    white-space: break-spaces;
  }
</style>
`},c={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-left" icon-alignment="${y.left}"></ods-link>
  `},d={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  `},m={tags:["isHidden"],render:()=>t`
<ods-link href="https://www.ovhcloud.com/" icon="arrow-right"></ods-link>
  `},p={tags:["isHidden"],render:()=>t`
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

  .my-link::part(label) {
    white-space: break-spaces;
  }
</style>
  `};var h,k,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        .my-link-demo::part(label) {
        \${args.customCssLabel}
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
    customCssLabel: {
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
      description: 'Set a custom style properties on the label. Example: "overflow: auto; text-overflow: inherit; white-space: break-spaces;"'
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
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var w,f,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Link"></ods-link>
  \`
}`,...(O=(f=l.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var C,_,L;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Default Link"></ods-link>
  \`
}`,...(L=(_=o.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,x,S;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" color="primary" label="Primary Color"></ods-link>
  \`
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,I,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" is-disabled="false" label="Not Disabled"></ods-link>
<ods-link href="https://www.ovhcloud.com/" is-disabled label="Disabled"></ods-link>  \`
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var E,R,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link id="link-ellipsis" class="my-link-ellipsis" href="test" label="link ellipsis" target="_blank">
</ods-link>
<ods-tooltip trigger-id="link-ellipsis" with-arrow="">
  link ellipsis
</ods-tooltip>

<ods-link class="my-link-not-ellipsis" href="test" label="link not ellipsis" target="_blank">
</ods-link>

<style>
  .my-link-ellipsis::part(link), .my-link-not-ellipsis::part(link) {
    width: 50px;
    margin-right: 1rem;
  }

  .my-link-not-ellipsis::part(label) {
    white-space: break-spaces;
  }
</style>
\`
}`,...(D=(R=i.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,$,V;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-left" icon-alignment="\${ODS_LINK_ICON_ALIGNMENT.left}"></ods-link>
  \`
}`,...(V=($=c.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var G,H,Y;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" label="Icon Link" icon="arrow-right"></ods-link>
  \`
}`,...(Y=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var K,F,M;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link href="https://www.ovhcloud.com/" icon="arrow-right"></ods-link>
  \`
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var z,P,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: flex; flex-direction: column;">
<ods-link href="https://www.ovhcloud.com/" target="_blank" label="Blank target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_self" label="Self target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_parent" label="Parent target"></ods-link>
<ods-link href="https://www.ovhcloud.com/" target="_top" label="Top target"></ods-link>
</div>
  \`
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var j,B,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-link class="my-link" href="https://www.ovhcloud.com/" label="Content"></ods-link>

<style>
  .my-link::part(link) {
    color: green;
    font-size: 32px;
  }

  .my-link::part(label) {
    white-space: break-spaces;
  }
</style>
  \`
}`,...(q=(B=u.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const ne=["Demo","Overview","Default","Color","Disabled","Ellipsis","WithLeftIcon","WithRightIcon","IconOnly","Target","CustomCSSLink"],oe=Object.freeze(Object.defineProperty({__proto__:null,Color:r,CustomCSSLink:u,Default:o,Demo:s,Disabled:a,Ellipsis:i,IconOnly:m,Overview:l,Target:p,WithLeftIcon:c,WithRightIcon:d,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{u as C,o as D,i as E,m as I,oe as L,l as O,p as T,c as W,r as a,a as b,d as c};
