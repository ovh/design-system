import{O as e,a as b,b as z,c,d as i}from"./index-DCBH0_Tl.js";import{d as T}from"./ods-badge-tHc24Eg4.js";import{x as a,o as M,C as s}from"./controls-DX883vx3.js";T();const N={title:"ODS Components/Badge",component:"ods-badge"},n={render:o=>a`
<ods-badge class="my-badge-demo"
           color="${o.color}"
           icon="${o.icon}"
           label="${o.label}"
           size="${o.size}">
</ods-badge>
<style>
  .my-badge-demo::part(badge) {
    ${o.customCss}
  }
</style>
  `,argTypes:M({color:{table:{category:s.design,defaultValue:{summary:e.information},type:{summary:b}},control:{type:"select"},options:b},customCss:{table:{category:s.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: #008000;"'},icon:{table:{category:s.general,type:{summary:"string"}},control:{type:"select"},options:z,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},label:{table:{category:s.general,defaultValue:{summary:"My badge"},type:{summary:"string"}},control:"text",description:"The badge label"},size:{table:{category:s.design,defaultValue:{summary:c.md},type:{summary:i}},control:{type:"select"},options:i}}),args:{color:e.information,label:"My badge",size:c.md}},d={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
    <ods-badge label="Badge"></ods-badge>
  `},r={tags:["isHidden"],render:()=>a`
    <ods-badge label="My badge"></ods-badge>
  `},t={tags:["isHidden"],render:()=>a`
<ods-badge color="${e.alpha}" label="Alpha"></ods-badge>
<ods-badge color="${e.beta}" label="Beta"></ods-badge>
<ods-badge color="${e.critical}" label="Critical"></ods-badge>
<ods-badge color="${e.information}" label="Information"></ods-badge>
<ods-badge color="${e.neutral}" label="Neutral"></ods-badge>
<ods-badge color="${e.new}" label="New"></ods-badge>
<ods-badge color="${e.promotion}" label="Promotion"></ods-badge>
<ods-badge color="${e.success}" label="Success"></ods-badge>
<ods-badge color="${e.warning}" label="Warning"></ods-badge>
  `},l={tags:["isHidden"],render:()=>a`
<ods-badge class="my-badge" label="My badge"></ods-badge>
<style>
  .my-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
  `},g={tags:["isHidden"],render:()=>a`
<ods-badge label="SM badge" size="${c.sm}"></ods-badge>
<ods-badge label="MD badge" size="${c.md}"></ods-badge>
<ods-badge label="LG badge" size="${c.lg}"></ods-badge>
  `};var m,p,O;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: arg => html\`
<ods-badge class="my-badge-demo"
           color="\${arg.color}"
           icon="\${arg.icon}"
           label="\${arg.label}"
           size="\${arg.size}">
</ods-badge>
<style>
  .my-badge-demo::part(badge) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BADGE_COLOR.information
        },
        type: {
          summary: ODS_BADGE_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BADGE_COLORS
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
      description: 'Set a custom style properties. Example: "background-color: #008000;"'
    },
    icon: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_ICON_NAMES,
      description: 'See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'My badge'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'The badge label'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BADGE_SIZE.md
        },
        type: {
          summary: ODS_BADGE_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BADGE_SIZES
    }
  }),
  args: {
    color: ODS_BADGE_COLOR.information,
    label: 'My badge',
    size: ODS_BADGE_SIZE.md
  }
}`,...(O=(p=n.parameters)==null?void 0:p.docs)==null?void 0:O.source}}};var u,y,S;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-badge label="Badge"></ods-badge>
  \`
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var _,D,C;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-badge label="My badge"></ods-badge>
  \`
}`,...(C=(D=r.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var E,A,$;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-badge color="\${ODS_BADGE_COLOR.alpha}" label="Alpha"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.beta}" label="Beta"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.critical}" label="Critical"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.information}" label="Information"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.neutral}" label="Neutral"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.new}" label="New"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.promotion}" label="Promotion"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.success}" label="Success"></ods-badge>
<ods-badge color="\${ODS_BADGE_COLOR.warning}" label="Warning"></ods-badge>
  \`
}`,...($=(A=t.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var f,G,B;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-badge class="my-badge" label="My badge"></ods-badge>
<style>
  .my-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
  \`
}`,...(B=(G=l.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var R,L,h;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-badge label="SM badge" size="\${ODS_BADGE_SIZE.sm}"></ods-badge>
<ods-badge label="MD badge" size="\${ODS_BADGE_SIZE.md}"></ods-badge>
<ods-badge label="LG badge" size="\${ODS_BADGE_SIZE.lg}"></ods-badge>
  \`
}`,...(h=(L=g.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};const I=["Demo","Overview","Default","Color","CustomCSS","Size"],Z=Object.freeze(Object.defineProperty({__proto__:null,Color:t,CustomCSS:l,Default:r,Demo:n,Overview:d,Size:g,__namedExportsOrder:I,default:N},Symbol.toStringTag,{value:"Module"}));export{Z as B,l as C,r as D,d as O,g as S,t as a};
