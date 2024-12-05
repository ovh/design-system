import{L as A,M as m}from"./index-D19O3a7h.js";import{x as e}from"./lit-html-D-ZEPr28.js";import{V as L}from"./validityState-ExJ3RVbh.js";import{o as G,C as t}from"./controls-D697y8_r.js";const N={component:"ods-switch",title:"ODS Components/Form elements/Switch"},i={render:s=>e`
    <ods-switch id="my-switch"
                name="demo"
                has-error="${s.hasError}"
                is-disabled="${s.isDisabled}"
                is-required="${s.isRequired}"
                size="${s.size}">
      <ods-switch-item value="1">label1</ods-switch-item>
      <ods-switch-item value="2">label2</ods-switch-item>
      <ods-switch-item value="3">label3</ods-switch-item>
    </ods-switch>
    ${s.validityState?L("switch","#my-switch"):""}
  `,argTypes:G({hasError:{table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:t.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:t.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},size:{table:{category:t.design,defaultValue:{summary:A.md},type:{summary:m}},control:{type:"select"},options:m},validityState:{table:{category:t.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isRequired:!1,size:"md",validityState:!1}},a={tags:["isHidden"],render:()=>e`
<ods-switch name="default">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},o={tags:["isHidden"],render:()=>e`
<ods-switch name="checked">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},d={tags:["isHidden"],render:()=>e`
<ods-switch is-disabled name="disabled">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},l={tags:["isHidden"],render:()=>e`
<ods-switch has-error name="error">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-switch name="overview">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},r={tags:["isHidden"],render:()=>e`
<ods-switch size="md" name="size-md">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>

<ods-switch size="sm" name="size-sm">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},c={tags:["isHidden"],render:()=>e`
<ods-switch id="switch-validity-state-demo" name="switch-validity-state" is-required>
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
${L("switch","#switch-validity-state-demo")}
  `};var h,w,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-switch id="my-switch"
                name="demo"
                has-error="\${arg.hasError}"
                is-disabled="\${arg.isDisabled}"
                is-required="\${arg.isRequired}"
                size="\${arg.size}">
      <ods-switch-item value="1">label1</ods-switch-item>
      <ods-switch-item value="2">label2</ods-switch-item>
      <ods-switch-item value="3">label3</ods-switch-item>
    </ods-switch>
    \${arg.validityState ? ValidityStateTemplate('switch', '#my-switch') : ''}
  \`;
  },
  argTypes: orderControls({
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isRequired: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_SWITCH_SIZE.md
        },
        type: {
          summary: ODS_SWITCH_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_SWITCH_SIZES
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState'
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isRequired: false,
    size: 'md',
    validityState: false
  }
}`,...(u=(w=i.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var b,v,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch name="default">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var p,g,S;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch name="checked">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,O,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch is-disabled name="disabled">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var C,_,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch has-error name="error">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var z,D,H;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-switch name="overview">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var R,V,$;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch size="md" name="size-md">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>

<ods-switch size="sm" name="size-sm">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...($=(V=r.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var q,I,k;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch id="switch-validity-state-demo" name="switch-validity-state" is-required>
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
\${ValidityStateTemplate('switch', '#switch-validity-state-demo')}
  \`
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Y=["Demo","Default","Checked","Disabled","Error","Overview","Size","ValidityState"],j=Object.freeze(Object.defineProperty({__proto__:null,Checked:o,Default:a,Demo:i,Disabled:d,Error:l,Overview:n,Size:r,ValidityState:c,__namedExportsOrder:Y,default:N},Symbol.toStringTag,{value:"Module"}));export{o as C,a as D,l as E,n as O,j as S,c as V,d as a,r as b};
