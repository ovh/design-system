import{v as p,w as S,b as rt,x as T,y as N,z as y,A as C,B as g,C as D,k as _}from"./index-DCBH0_Tl.js";import{d as lt}from"./ods-button2-DJxJiLcj.js";import{x as t,o as dt,C as e}from"./controls-DX883vx3.js";const it=lt;it();const ut={title:"ODS Components/Button",component:"ods-button"},o={render:n=>t`
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
  `,argTypes:dt({color:{table:{category:e.design,defaultValue:{summary:p.primary},type:{summary:S}},control:{type:"select"},options:S},customCss:{table:{category:e.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; color: #008000;"'},icon:{table:{category:e.general,type:{summary:"string"}},control:{type:"select"},options:rt,description:"See the whole list [here](/?path=/docs/ods-components-icon--documentation#name)"},iconAlignment:{table:{category:e.general,defaultValue:{summary:T.left},type:{summary:N}},control:{type:"select"},options:N},isDisabled:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:e.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},label:{table:{category:e.general,defaultValue:{summary:"My button"},type:{summary:"string"}},control:"text",description:"The button label"},size:{table:{category:e.design,defaultValue:{summary:y.md},type:{summary:C}},control:{type:"select"},options:C},variant:{table:{category:e.design,defaultValue:{summary:g.default},type:{summary:D}},control:{type:"select"},options:D}}),args:{color:p.primary,iconAlignment:T.left,isDisabled:!1,isLoading:!1,label:"My button",size:y.md,variant:g.default}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
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
  `},d={tags:["isHidden"],render:()=>t`
<ods-button is-disabled label="Disabled button"></ods-button>
  `},i={tags:["isHidden"],render:()=>t`
<ods-button is-loading label="Loading button"></ods-button>
  `},u={tags:["isHidden"],render:()=>t`
<ods-button label="MD button" size="${y.md}"></ods-button>
<ods-button label="SM button" size="${y.sm}"></ods-button>
<ods-button label="XS button" size="${y.xs}"></ods-button>
  `},c={tags:["isHidden"],render:()=>t`
<ods-button label="Default button" variant="${g.default}"></ods-button>
<ods-button label="Outline button" variant="${g.outline}"></ods-button>
<ods-button label="Ghost button" variant="${g.ghost}"></ods-button>
  `},m={tags:["isHidden"],render:()=>t`
    <ods-button label="Button" icon="${_.home}" icon-alignment="${T.left}"></ods-button>
  `},b={tags:["isHidden"],render:()=>t`
    <ods-button label="Button" icon="${_.home}" icon-alignment="${T.right}"></ods-button>
  `},O={tags:["isHidden"],render:()=>t`
<ods-button icon="${_.filter}"></ods-button>
  `};var f,I,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var $,B,h;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button label="Button"></ods-button>
  \`
}`,...(h=(B=s.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var R,L,E;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(V=r.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var H,v,G;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="my-button" label="My button"></ods-button>
<style>
  .my-button::part(button) {
    width: 300px;
  }
</style>
  \`
}`,...(G=(v=l.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var z,x,Y;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button is-disabled label="Disabled button"></ods-button>
  \`
}`,...(Y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var Z,w,W;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button is-loading label="Loading button"></ods-button>
  \`
}`,...(W=(w=i.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var P,j,X;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="MD button" size="\${ODS_BUTTON_SIZE.md}"></ods-button>
<ods-button label="SM button" size="\${ODS_BUTTON_SIZE.sm}"></ods-button>
<ods-button label="XS button" size="\${ODS_BUTTON_SIZE.xs}"></ods-button>
  \`
}`,...(X=(j=u.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var k,F,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button label="Default button" variant="\${ODS_BUTTON_VARIANT.default}"></ods-button>
<ods-button label="Outline button" variant="\${ODS_BUTTON_VARIANT.outline}"></ods-button>
<ods-button label="Ghost button" variant="\${ODS_BUTTON_VARIANT.ghost}"></ods-button>
  \`
}`,...(q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-button label="Button" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BUTTON_ICON_ALIGNMENT.left}"></ods-button>
  \`
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var tt,nt,et;b.parameters={...b.parameters,docs:{...(tt=b.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-button label="Button" icon="\${ODS_ICON_NAME.home}" icon-alignment="\${ODS_BUTTON_ICON_ALIGNMENT.right}"></ods-button>
  \`
}`,...(et=(nt=b.parameters)==null?void 0:nt.docs)==null?void 0:et.source}}};var ot,st,at;O.parameters={...O.parameters,docs:{...(ot=O.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button icon="\${ODS_ICON_NAME.filter}"></ods-button>
  \`
}`,...(at=(st=O.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};const ct=["Demo","Overview","Default","Color","CustomCSS","IsDisabled","IsLoading","Size","Variant","WithLeftIcon","WithRightIcon","IconOnly"],pt=Object.freeze(Object.defineProperty({__proto__:null,Color:r,CustomCSS:l,Default:a,Demo:o,IconOnly:O,IsDisabled:d,IsLoading:i,Overview:s,Size:u,Variant:c,WithLeftIcon:m,WithRightIcon:b,__namedExportsOrder:ct,default:ut},Symbol.toStringTag,{value:"Module"}));export{pt as B,l as C,a as D,d as I,s as O,u as S,c as V,m as W,r as a,i as b,b as c,O as d};
