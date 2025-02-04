import{W as e,X as m,b as H,Y as g,Z as u}from"./index-DCBH0_Tl.js";import{d as x}from"./ods-tag2-Dj0-zHXw.js";import{x as a,o as V,C as t}from"./controls-DX883vx3.js";const Z=x;Z();const Y={title:"ODS Components/Tag",component:"ods-tag"},o={render:s=>a`
<ods-tag class="my-tag-demo"
         color="${s.color}"
         icon="${s.icon}"
         is-disabled="${s.isDisabled}"
         label="${s.label}"
         size="${s.size}">
</ods-tag>
<style>
  .my-tag-demo::part(tag) {
    ${s.customCss}
  }
</style>
  `,argTypes:V({color:{table:{category:t.design,defaultValue:{summary:e.information},type:{summary:m}},control:{type:"select"},options:m},customCss:{table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: #008000;"'},icon:{table:{category:t.general,type:{summary:"string"}},control:{type:"select"},options:H,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},isDisabled:{table:{category:t.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:t.general,defaultValue:{summary:"My tag"},type:{summary:"string"}},control:"text",description:"The tag label"},size:{table:{category:t.design,defaultValue:{summary:g.md},type:{summary:u}},control:{type:"select"},options:u}}),args:{color:e.information,isDisabled:!1,label:"My tag",size:g.md}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-tag label="Tag"></ods-tag>
  `},r={tags:["isHidden"],render:()=>a`
<ods-tag label="My tag"></ods-tag>
  `},l={tags:["isHidden"],render:()=>a`
<ods-tag color="${e.critical}" label="Critical"></ods-tag>
<ods-tag color="${e.information}" label="Information"></ods-tag>
<ods-tag color="${e.neutral}" label="Neutral"></ods-tag>
<ods-tag color="${e.success}" label="Success"></ods-tag>
<ods-tag color="${e.warning}" label="Warning"></ods-tag>
  `},d={tags:["isHidden"],render:()=>a`
<ods-tag class="my-tag" label="My tag"></ods-tag>
<style>
  .my-tag::part(tag) {
    background-color: #ff00ff;
  }
</style>
  `},c={tags:["isHidden"],render:()=>a`
<ods-tag is-disabled label="Disabled tag"></ods-tag>
  `},i={tags:["isHidden"],render:()=>a`
<ods-tag label="MD tag" size="${g.md}"></ods-tag>
<ods-tag label="LG tag" size="${g.lg}"></ods-tag>
  `};var p,y,O;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => html\`
<ods-tag class="my-tag-demo"
         color="\${arg.color}"
         icon="\${arg.icon}"
         is-disabled="\${arg.isDisabled}"
         label="\${arg.label}"
         size="\${arg.size}">
</ods-tag>
<style>
  .my-tag-demo::part(tag) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_TAG_COLOR.information
        },
        type: {
          summary: ODS_TAG_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TAG_COLORS
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
          summary: 'My tag'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'The tag label'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_TAG_SIZE.md
        },
        type: {
          summary: ODS_TAG_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TAG_SIZES
    }
  }),
  args: {
    color: ODS_TAG_COLOR.information,
    isDisabled: false,
    label: 'My tag',
    size: ODS_TAG_SIZE.md
  }
}`,...(O=(y=o.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var b,S,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-tag label="Tag"></ods-tag>
  \`
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var C,T,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tag label="My tag"></ods-tag>
  \`
}`,...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var D,A,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tag color="\${ODS_TAG_COLOR.critical}" label="Critical"></ods-tag>
<ods-tag color="\${ODS_TAG_COLOR.information}" label="Information"></ods-tag>
<ods-tag color="\${ODS_TAG_COLOR.neutral}" label="Neutral"></ods-tag>
<ods-tag color="\${ODS_TAG_COLOR.success}" label="Success"></ods-tag>
<ods-tag color="\${ODS_TAG_COLOR.warning}" label="Warning"></ods-tag>
  \`
}`,...(G=(A=l.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var $,R,E;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tag class="my-tag" label="My tag"></ods-tag>
<style>
  .my-tag::part(tag) {
    background-color: #ff00ff;
  }
</style>
  \`
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var L,h,z;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tag is-disabled label="Disabled tag"></ods-tag>
  \`
}`,...(z=(h=c.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var I,M,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tag label="MD tag" size="\${ODS_TAG_SIZE.md}"></ods-tag>
<ods-tag label="LG tag" size="\${ODS_TAG_SIZE.lg}"></ods-tag>
  \`
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const w=["Demo","Overview","Default","Color","CustomCSS","IsDisabled","Size"],j=Object.freeze(Object.defineProperty({__proto__:null,Color:l,CustomCSS:d,Default:r,Demo:o,IsDisabled:c,Overview:n,Size:i,__namedExportsOrder:w,default:Y},Symbol.toStringTag,{value:"Module"}));export{d as C,r as D,c as I,n as O,i as S,j as T,l as a};
