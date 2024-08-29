import{e as O,f as g,b as tt,g as y,h as T,i as p,j as S,k as X}from"./index-DryTTbHl.js";import{x as t}from"./lit-html-D-ZEPr28.js";import{o as nt,C as e}from"./control-C1r2wu67.js";const et={title:"ODS Components/Button",component:"ods-button"},o={render:n=>t`
<ods-button class="my-button-demo"
            color="${n.color}"
            icon="${n.icon}"
            is-disabled="${n.isDisabled}"
            is-loading="${n.isLoading}"
            label="${n.label}"
            size="${n.size}"
            variant="${n.variant}">
</ods-button>
<style>
  .my-button-demo::part(button) {
    ${n.customCss}
  }
</style>
  `,argTypes:nt({color:{table:{category:e.design,defaultValue:{summary:O.primary},type:{summary:g}},control:{type:"select"},options:g},customCss:{table:{category:e.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; color: #008000;"'},icon:{table:{category:e.general,type:{summary:"string"}},control:{type:"select"},options:tt,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},isDisabled:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:e.general,defaultValue:{summary:"My button"},type:{summary:"string"}},control:"text",description:"The button label"},size:{table:{category:e.design,defaultValue:{summary:y.md},type:{summary:T}},control:{type:"select"},options:T},variant:{table:{category:e.design,defaultValue:{summary:p.default},type:{summary:S}},control:{type:"select"},options:S}}),args:{color:O.primary,isDisabled:!1,isLoading:!1,label:"My button",size:y.md,variant:p.default}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-button label="Button"></ods-button>
  `},a={tags:["isHidden"],render:()=>t`
<ods-button label="My button"></ods-button>
  `},r={tags:["isHidden"],render:()=>t`
<ods-button color="${O.primary}" label="Primary button"></ods-button>
<ods-button color="${O.critical}" label="Critical button"></ods-button>
  `},l={tags:["isHidden"],render:()=>t`
<ods-button class="my-button" label="My button"></ods-button>
<style>
  .my-button::part(button) {
    width: 300px;
  }
</style>
  `},d={tags:["isHidden"],render:()=>t`
<ods-button is-disabled label="Disabled button"></ods-button>
  `},i={tags:["isHidden"],render:()=>t`
<ods-button is-loading label="Loading button"></ods-button>
  `},u={tags:["isHidden"],render:()=>t`
<ods-button label="MD button" size="${y.md}"></ods-button>
<ods-button label="SM button" size="${y.sm}"></ods-button>
  `},c={tags:["isHidden"],render:()=>t`
<ods-button label="Default button" variant="${p.default}"></ods-button>
<ods-button label="Outline button" variant="${p.outline}"></ods-button>
<ods-button label="Ghost button" variant="${p.ghost}"></ods-button>
  `},b={tags:["isHidden"],render:()=>t`
    <ods-button label="Button" icon="${X.home}"></ods-button>
  `},m={tags:["isHidden"],render:()=>t`
<ods-button icon="${X.ellipsisHorizontal}"></ods-button>
  `};var _,N,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: arg => html\`
<ods-button class="my-button-demo"
            color="\${arg.color}"
            icon="\${arg.icon}"
            is-disabled="\${arg.isDisabled}"
            is-loading="\${arg.isLoading}"
            label="\${arg.label}"
            size="\${arg.size}"
            variant="\${arg.variant}">
</ods-button>
<style>
  .my-button-demo::part(button) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BUTTON_COLOR.primary
        },
        type: {
          summary: ODS_BUTTON_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BUTTON_COLORS
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
      description: 'Set a custom style properties. Example: "height: 100px; color: #008000;"'
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
    isLoading: {
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
          summary: 'My button'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'The button label'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BUTTON_SIZE.md
        },
        type: {
          summary: ODS_BUTTON_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BUTTON_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BUTTON_VARIANT.default
        },
        type: {
          summary: ODS_BUTTON_VARIANTS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BUTTON_VARIANTS
    }
  }),
  args: {
    color: ODS_BUTTON_COLOR.primary,
    isDisabled: false,
    isLoading: false,
    label: 'My button',
    size: ODS_BUTTON_SIZE.md,
    variant: ODS_BUTTON_VARIANT.default
  }
}`,...(D=(N=o.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var C,f,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button label="Button"></ods-button>
  \`
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var R,$,A;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="My button"></ods-button>
  \`
}`,...(A=($=a.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var B,I,L;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button color="\${ODS_BUTTON_COLOR.primary}" label="Primary button"></ods-button>
<ods-button color="\${ODS_BUTTON_COLOR.critical}" label="Critical button"></ods-button>
  \`
}`,...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var V,E,U;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="my-button" label="My button"></ods-button>
<style>
  .my-button::part(button) {
    width: 300px;
  }
</style>
  \`
}`,...(U=(E=l.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var H,v,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button is-disabled label="Disabled button"></ods-button>
  \`
}`,...(M=(v=d.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var z,x,G;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button is-loading label="Loading button"></ods-button>
  \`
}`,...(G=(x=i.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var Y,Z,w;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="MD button" size="\${ODS_BUTTON_SIZE.md}"></ods-button>
<ods-button label="SM button" size="\${ODS_BUTTON_SIZE.sm}"></ods-button>
  \`
}`,...(w=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:w.source}}};var j,P,W;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="Default button" variant="\${ODS_BUTTON_VARIANT.default}"></ods-button>
<ods-button label="Outline button" variant="\${ODS_BUTTON_VARIANT.outline}"></ods-button>
<ods-button label="Ghost button" variant="\${ODS_BUTTON_VARIANT.ghost}"></ods-button>
  \`
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var k,F,q;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-button label="Button" icon="\${ODS_ICON_NAME.home}"></ods-button>
  \`
}`,...(q=(F=b.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button icon="\${ODS_ICON_NAME.ellipsisHorizontal}"></ods-button>
  \`
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ot=["Demo","Overview","Default","Color","CustomCSS","IsDisabled","IsLoading","Size","Variant","WithIcon","IconOnly"],lt=Object.freeze(Object.defineProperty({__proto__:null,Color:r,CustomCSS:l,Default:a,Demo:o,IconOnly:m,IsDisabled:d,IsLoading:i,Overview:s,Size:u,Variant:c,WithIcon:b,__namedExportsOrder:ot,default:et},Symbol.toStringTag,{value:"Module"}));export{lt as B,l as C,a as D,d as I,s as O,u as S,c as V,b as W,r as a,i as b,m as c};
