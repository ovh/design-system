import{e as y,f as S,b as rt,g,h as N,i as T,j as C,k as p,l as D,m as _}from"./index-BNPjhb5w.js";import{x as t}from"./lit-html-D-ZEPr28.js";import{o as lt,C as e}from"./controls-DpsgTNdU.js";const it={title:"ODS Components/Button",component:"ods-button"},o={render:n=>t`
<ods-button class="my-button-demo"
            color="${n.color}"
            icon="${n.icon}"
            icon-alignment="${n.iconAlignment}"
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
  `,argTypes:lt({color:{table:{category:e.design,defaultValue:{summary:y.primary},type:{summary:S}},control:{type:"select"},options:S},customCss:{table:{category:e.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; color: #008000;"'},icon:{table:{category:e.general,type:{summary:"string"}},control:{type:"select"},options:rt,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},iconAlignment:{table:{category:e.general,defaultValue:{summary:g.left},type:{summary:N}},control:{type:"select"},options:N},isDisabled:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:e.general,defaultValue:{summary:"My button"},type:{summary:"string"}},control:"text",description:"The button label"},size:{table:{category:e.design,defaultValue:{summary:T.md},type:{summary:C}},control:{type:"select"},options:C},variant:{table:{category:e.design,defaultValue:{summary:p.default},type:{summary:D}},control:{type:"select"},options:D}}),args:{color:y.primary,iconAlignment:g.left,isDisabled:!1,isLoading:!1,label:"My button",size:T.md,variant:p.default}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-button label="Button"></ods-button>
  `},a={tags:["isHidden"],render:()=>t`
<ods-button label="My button"></ods-button>
  `},r={tags:["isHidden"],render:()=>t`
<ods-button color="${y.primary}" label="Primary button"></ods-button>
<ods-button color="${y.critical}" label="Critical button"></ods-button>
  `},l={tags:["isHidden"],render:()=>t`
<ods-button class="my-button" label="My button"></ods-button>
<style>
  .my-button::part(button) {
    width: 300px;
  }
</style>
  `},i={tags:["isHidden"],render:()=>t`
<ods-button is-disabled label="Disabled button"></ods-button>
  `},d={tags:["isHidden"],render:()=>t`
<ods-button is-loading label="Loading button"></ods-button>
  `},u={tags:["isHidden"],render:()=>t`
<ods-button label="MD button" size="${T.md}"></ods-button>
<ods-button label="SM button" size="${T.sm}"></ods-button>
  `},c={tags:["isHidden"],render:()=>t`
<ods-button label="Default button" variant="${p.default}"></ods-button>
<ods-button label="Outline button" variant="${p.outline}"></ods-button>
<ods-button label="Ghost button" variant="${p.ghost}"></ods-button>
  `},m={tags:["isHidden"],render:()=>t`
    <ods-button label="Button" icon="${_.home}" icon-alignment="${g.left}"></ods-button>
  `},b={tags:["isHidden"],render:()=>t`
    <ods-button label="Button" icon="${_.home}" icon-alignment="${g.right}"></ods-button>
  `},O={tags:["isHidden"],render:()=>t`
<ods-button icon="${_.ellipsisHorizontal}"></ods-button>
  `};var I,f,A;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: arg => html\`
<ods-button class="my-button-demo"
            color="\${arg.color}"
            icon="\${arg.icon}"
            icon-alignment="\${arg.iconAlignment}"
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
    iconAlignment: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_BUTTON_ICON_ALIGNMENT.left
        },
        type: {
          summary: ODS_BUTTON_ICON_ALIGNMENTS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BUTTON_ICON_ALIGNMENTS
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
    iconAlignment: ODS_BUTTON_ICON_ALIGNMENT.left,
    isDisabled: false,
    isLoading: false,
    label: 'My button',
    size: ODS_BUTTON_SIZE.md,
    variant: ODS_BUTTON_VARIANT.default
  }
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var h,B,$;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button label="Button"></ods-button>
  \`
}`,...($=(B=s.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var R,L,E;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="My button"></ods-button>
  \`
}`,...(E=(L=a.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var U,V,M;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button color="\${ODS_BUTTON_COLOR.primary}" label="Primary button"></ods-button>
<ods-button color="\${ODS_BUTTON_COLOR.critical}" label="Critical button"></ods-button>
  \`
}`,...(M=(V=r.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var H,G,v;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="my-button" label="My button"></ods-button>
<style>
  .my-button::part(button) {
    width: 300px;
  }
</style>
  \`
}`,...(v=(G=l.parameters)==null?void 0:G.docs)==null?void 0:v.source}}};var z,x,Y;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button is-disabled label="Disabled button"></ods-button>
  \`
}`,...(Y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var Z,w,W;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button is-loading label="Loading button"></ods-button>
  \`
}`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var j,P,k;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="MD button" size="\${ODS_BUTTON_SIZE.md}"></ods-button>
<ods-button label="SM button" size="\${ODS_BUTTON_SIZE.sm}"></ods-button>
  \`
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var F,q,J;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="Default button" variant="\${ODS_BUTTON_VARIANT.default}"></ods-button>
<ods-button label="Outline button" variant="\${ODS_BUTTON_VARIANT.outline}"></ods-button>
<ods-button label="Ghost button" variant="\${ODS_BUTTON_VARIANT.ghost}"></ods-button>
  \`
}`,...(J=(q=c.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-button label="Button" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BUTTON_ICON_ALIGNMENT.left}"></ods-button>
  \`
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var tt,nt,et;b.parameters={...b.parameters,docs:{...(tt=b.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-button label="Button" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BUTTON_ICON_ALIGNMENT.right}"></ods-button>
  \`
}`,...(et=(nt=b.parameters)==null?void 0:nt.docs)==null?void 0:et.source}}};var ot,st,at;O.parameters={...O.parameters,docs:{...(ot=O.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button icon="\${ODS_ICON_NAME.ellipsisHorizontal}"></ods-button>
  \`
}`,...(at=(st=O.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};const dt=["Demo","Overview","Default","Color","CustomCSS","IsDisabled","IsLoading","Size","Variant","WithLeftIcon","WithRightIcon","IconOnly"],bt=Object.freeze(Object.defineProperty({__proto__:null,Color:r,CustomCSS:l,Default:a,Demo:o,IconOnly:O,IsDisabled:i,IsLoading:d,Overview:s,Size:u,Variant:c,WithLeftIcon:m,WithRightIcon:b,__namedExportsOrder:dt,default:it},Symbol.toStringTag,{value:"Module"}));export{bt as B,l as C,a as D,i as I,s as O,u as S,c as V,m as W,r as a,d as b,b as c,O as d};
