import{e as p,f as S,b as rt,g as T,h as N,i as y,j as D,k as g,l as C,m as _}from"./index-LQAjXuKp.js";import{x as t}from"./lit-html-D-ZEPr28.js";import{o as lt,C as e}from"./controls-DpsgTNdU.js";const it={title:"ODS Components/Button",component:"ods-button"},o={render:n=>t`
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
  `,argTypes:lt({color:{table:{category:e.design,defaultValue:{summary:p.primary},type:{summary:S}},control:{type:"select"},options:S},customCss:{table:{category:e.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; color: #008000;"'},icon:{table:{category:e.general,type:{summary:"string"}},control:{type:"select"},options:rt,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},iconAlignment:{table:{category:e.general,defaultValue:{summary:T.left},type:{summary:N}},control:{type:"select"},options:N},isDisabled:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:e.general,defaultValue:{summary:"My button"},type:{summary:"string"}},control:"text",description:"The button label"},size:{table:{category:e.design,defaultValue:{summary:y.md},type:{summary:D}},control:{type:"select"},options:D},variant:{table:{category:e.design,defaultValue:{summary:g.default},type:{summary:C}},control:{type:"select"},options:C}}),args:{color:p.primary,iconAlignment:T.left,isDisabled:!1,isLoading:!1,label:"My button",size:y.md,variant:g.default}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-button label="Button"></ods-button>
  `},a={tags:["isHidden"],render:()=>t`
<ods-button label="My button"></ods-button>
  `},r={tags:["isHidden"],render:()=>t`
<ods-button color="${p.primary}" label="Primary button"></ods-button>
<ods-button color="${p.critical}" label="Critical button"></ods-button>
<ods-button color="${p.neutral}" label="Neutral button"></ods-button>
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
<ods-button label="MD button" size="${y.md}"></ods-button>
<ods-button label="SM button" size="${y.sm}"></ods-button>
<ods-button label="XS button" size="${y.xs}"></ods-button>
  `},c={tags:["isHidden"],render:()=>t`
<ods-button label="Default button" variant="${g.default}"></ods-button>
<ods-button label="Outline button" variant="${g.outline}"></ods-button>
<ods-button label="Ghost button" variant="${g.ghost}"></ods-button>
  `},b={tags:["isHidden"],render:()=>t`
    <ods-button label="Button" icon="${_.home}" icon-alignment="${T.left}"></ods-button>
  `},m={tags:["isHidden"],render:()=>t`
    <ods-button label="Button" icon="${_.home}" icon-alignment="${T.right}"></ods-button>
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
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var $,h,B;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button label="Button"></ods-button>
  \`
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var R,L,E;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="My button"></ods-button>
  \`
}`,...(E=(L=a.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var U,V,M;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button color="\${ODS_BUTTON_COLOR.primary}" label="Primary button"></ods-button>
<ods-button color="\${ODS_BUTTON_COLOR.critical}" label="Critical button"></ods-button>
<ods-button color="\${ODS_BUTTON_COLOR.neutral}" label="Neutral button"></ods-button>
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
}`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var j,P,X;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="MD button" size="\${ODS_BUTTON_SIZE.md}"></ods-button>
<ods-button label="SM button" size="\${ODS_BUTTON_SIZE.sm}"></ods-button>
<ods-button label="XS button" size="\${ODS_BUTTON_SIZE.xs}"></ods-button>
  \`
}`,...(X=(P=u.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var k,F,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="Default button" variant="\${ODS_BUTTON_VARIANT.default}"></ods-button>
<ods-button label="Outline button" variant="\${ODS_BUTTON_VARIANT.outline}"></ods-button>
<ods-button label="Ghost button" variant="\${ODS_BUTTON_VARIANT.ghost}"></ods-button>
  \`
}`,...(q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-button label="Button" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BUTTON_ICON_ALIGNMENT.left}"></ods-button>
  \`
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var tt,nt,et;m.parameters={...m.parameters,docs:{...(tt=m.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-button label="Button" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BUTTON_ICON_ALIGNMENT.right}"></ods-button>
  \`
}`,...(et=(nt=m.parameters)==null?void 0:nt.docs)==null?void 0:et.source}}};var ot,st,at;O.parameters={...O.parameters,docs:{...(ot=O.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button icon="\${ODS_ICON_NAME.ellipsisHorizontal}"></ods-button>
  \`
}`,...(at=(st=O.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};const dt=["Demo","Overview","Default","Color","CustomCSS","IsDisabled","IsLoading","Size","Variant","WithLeftIcon","WithRightIcon","IconOnly"],mt=Object.freeze(Object.defineProperty({__proto__:null,Color:r,CustomCSS:l,Default:a,Demo:o,IconOnly:O,IsDisabled:i,IsLoading:d,Overview:s,Size:u,Variant:c,WithLeftIcon:b,WithRightIcon:m,__namedExportsOrder:dt,default:it},Symbol.toStringTag,{value:"Module"}));export{mt as B,l as C,a as D,i as I,s as O,u as S,c as V,b as W,r as a,d as b,m as c,O as d};
