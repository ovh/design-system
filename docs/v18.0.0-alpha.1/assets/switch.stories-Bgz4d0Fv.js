import{I as H,J as c}from"./index-CEZbmgmh.js";import{x as e}from"./lit-html-D-ZEPr28.js";import{o as I,C as n}from"./control-C1r2wu67.js";import{o as E}from"./unsafe-html-HR6uCwaW.js";const k={component:"ods-switch",title:"ODS Components/Form elements/Switch"},s={render:l=>e`
    <ods-switch
                name="demo"
                is-disabled="${l.isDisabled}"
                size="${l.size}">
      ${E(l.content)}
    </ods-switch>
  `,argTypes:I({content:{table:{category:n.slot,defaultValue:{summary:"ø"}},control:"text"},isDisabled:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"boolean"}},control:"boolean"},size:{table:{category:n.design,defaultValue:{summary:H.md},type:{summary:c}},control:{type:"select"},options:c}}),args:{content:`<ods-switch-item value="1">label1</ods-switch-item>
    <ods-switch-item value="2">label2</ods-switch-item>
    <ods-switch-item value="3">label3</ods-switch-item>`,isDisabled:!1,size:"md"}},t={tags:["isHidden"],render:()=>e`
<ods-switch name="default">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},i={tags:["isHidden"],render:()=>e`
<ods-switch name="checked">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},a={tags:["isHidden"],render:()=>e`
<ods-switch is-disabled name="disabled">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},o={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-switch name="overview">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  `},d={tags:["isHidden"],render:()=>e`
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
  `};var m,r,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <ods-switch
                name="demo"
                is-disabled="\${args.isDisabled}"
                size="\${args.size}">
      \${unsafeHTML(args.content)}
    </ods-switch>
  \`,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
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
    }
  }),
  args: {
    content: \`<ods-switch-item value="1">label1</ods-switch-item>
    <ods-switch-item value="2">label2</ods-switch-item>
    <ods-switch-item value="3">label3</ods-switch-item>\`,
    isDisabled: false,
    size: 'md'
  }
}`,...(h=(r=s.parameters)==null?void 0:r.docs)==null?void 0:h.source}}};var w,u,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch name="default">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,p,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch name="checked">
  <ods-switch-item is-checked value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,y,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-switch is-disabled name="disabled">
  <ods-switch-item value="1">label1</ods-switch-item>
  <ods-switch-item value="2">label2</ods-switch-item>
  <ods-switch-item value="3">label3</ods-switch-item>
</ods-switch>
  \`
}`,...(O=(y=a.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var f,C,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(_=(C=o.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var z,D,T;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const R=["Demo","Default","Checked","Disabled","Overview","Size"],W=Object.freeze(Object.defineProperty({__proto__:null,Checked:i,Default:t,Demo:s,Disabled:a,Overview:o,Size:d,__namedExportsOrder:R,default:k},Symbol.toStringTag,{value:"Module"}));export{i as C,t as D,o as O,W as S,a,d as b};
