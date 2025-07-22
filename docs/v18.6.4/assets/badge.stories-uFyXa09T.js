import{O as e,a as p,b as v,c as m,d as u,e as b,f as _,g as O}from"./index-BfWXrq3E.js";import{d as k}from"./ods-badge-CjbpLGl8.js";import{x as a,o as P,C as n}from"./controls-DX883vx3.js";k();const j={title:"ODS Components/Badge",component:"ods-badge"},s={render:o=>a`
<ods-badge class="my-badge-demo"
           color="${o.color}"
           icon="${o.icon}"
           icon-alignment="${o.iconAlignment}"
           label="${o.label}"
           size="${o.size}">
</ods-badge>
<style>
  .my-badge-demo::part(badge) {
    ${o.customCss}
  }
</style>
  `,argTypes:P({color:{table:{category:n.design,defaultValue:{summary:e.information},type:{summary:p}},control:{type:"select"},options:p},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: #008000;"'},icon:{table:{category:n.general,type:{summary:"string"}},control:{type:"select"},options:v,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},iconAlignment:{table:{category:n.general,defaultValue:{summary:m.left},type:{summary:u}},control:{type:"select"},options:u},label:{table:{category:n.general,defaultValue:{summary:"My badge"},type:{summary:"string"}},control:"text",description:"The badge label"},size:{table:{category:n.design,defaultValue:{summary:b.md},type:{summary:_}},control:{type:"select"},options:_}}),args:{color:e.information,label:"My badge",size:b.md}},d={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
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
    <ods-badge icon="${O.home}"></ods-badge>
  `},g={tags:["isHidden"],render:()=>a`
<ods-badge label="Home left" icon="${O.home}" icon-alignment="${m.left}"></ods-badge>
<br />
<ods-badge label="Home right" icon="${O.home}" icon-alignment="${m.right}"></ods-badge>
  `},c={tags:["isHidden"],render:()=>a`
<ods-badge class="my-badge" label="My badge"></ods-badge>
<style>
  .my-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
  `},i={tags:["isHidden"],render:()=>a`
<ods-badge label="SM badge" size="${b.sm}"></ods-badge>
<ods-badge label="MD badge" size="${b.md}"></ods-badge>
<ods-badge label="LG badge" size="${b.lg}"></ods-badge>
  `};var y,S,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: arg => html\`
<ods-badge class="my-badge-demo"
           color="\${arg.color}"
           icon="\${arg.icon}"
           icon-alignment="\${arg.iconAlignment}"
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
    iconAlignment: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_BADGE_ICON_ALIGNMENT.left
        },
        type: {
          summary: ODS_BADGE_ICON_ALIGNMENTS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BADGE_ICON_ALIGNMENTS
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
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,C,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-badge label="Badge"></ods-badge>
  \`
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var G,$,N;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-badge label="My badge"></ods-badge>
  \`
}`,...(N=($=r.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var f,B,I;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(B=t.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var h,L,R;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-badge icon="\${ODS_ICON_NAME.home}"></ods-badge>
  \`
}`,...(R=(L=l.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var M,T,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-badge label="Home left" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BADGE_ICON_ALIGNMENT.left}"></ods-badge>
<br />
<ods-badge label="Home right" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BADGE_ICON_ALIGNMENT.right}"></ods-badge>
  \`
}`,...(H=(T=g.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var z,w,x;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-badge class="my-badge" label="My badge"></ods-badge>
<style>
  .my-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
  \`
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var V,Z,Y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-badge label="SM badge" size="\${ODS_BADGE_SIZE.sm}"></ods-badge>
<ods-badge label="MD badge" size="\${ODS_BADGE_SIZE.md}"></ods-badge>
<ods-badge label="LG badge" size="\${ODS_BADGE_SIZE.lg}"></ods-badge>
  \`
}`,...(Y=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};const W=["Demo","Overview","Default","Color","IconOnly","IconAlignment","CustomCSS","Size"],K=Object.freeze(Object.defineProperty({__proto__:null,Color:t,CustomCSS:c,Default:r,Demo:s,IconAlignment:g,IconOnly:l,Overview:d,Size:i,__namedExportsOrder:W,default:j},Symbol.toStringTag,{value:"Module"}));export{K as B,c as C,r as D,l as I,d as O,i as S,t as a,g as b};
