import{P as d,Q as p,R as i,S as b}from"./index-BNPjhb5w.js";import{x as l}from"./lit-html-D-ZEPr28.js";import{o as e}from"./unsafe-html-HR6uCwaW.js";import{o as z,C as m}from"./controls-DpsgTNdU.js";const B={title:"ODS Components/Table",component:"ods-table"},t=`<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
  <tr>
    <th scope="col">Person</th>
    <th scope="col">Most interest in</th>
    <th scope="col">Age</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Chris</th>
    <td>HTML tables</td>
    <td>22</td>
  </tr>
  <tr>
    <th scope="row">Dennis</th>
    <td>Web accessibility</td>
    <td>45</td>
  </tr>
  <tr>
    <th scope="row">Sarah</th>
    <td>JavaScript frameworks</td>
    <td>29</td>
  </tr>
  <tr>
    <th scope="row">Karen</th>
    <td>Web performance</td>
    <td>36</td>
  </tr>
  </tbody>
</table>`,a={render:c=>l`
<ods-table size="${c.size}"
           variant="${c.variant}">
  ${e(c.content)}
</ods-table>
  `,argTypes:z({content:{table:{category:m.slot,defaultValue:{summary:"ø"}},control:"text"},size:{table:{category:m.design,defaultValue:{summary:d.md},type:{summary:p}},control:{type:"select"},options:p},variant:{table:{category:m.design,defaultValue:{summary:i.default},type:{summary:b}},control:{type:"select"},options:b}}),args:{content:t,size:d.md,variant:i.default}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>l`
<ods-table>
${e(t)}
</ods-table>
  `},s={tags:["isHidden"],render:()=>l`
<ods-table>
${e(t)}
</ods-table>
  `},r={tags:["isHidden"],render:()=>l`
<ods-table size="${d.sm}">
${e(t)}
</ods-table>

<ods-table size="${d.md}">
${e(t)}
</ods-table>

<ods-table size="${d.lg}">
${e(t)}
</ods-table>
  `},o={tags:["isHidden"],render:()=>l`
<ods-table variant="${i.default}">
${e(t)}
</ods-table>

<ods-table variant="${i.striped}">
${e(t)}
</ods-table>
  `};var u,T,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: arg => html\`
<ods-table size="\${arg.size}"
           variant="\${arg.variant}">
  \${unsafeHTML(arg.content)}
</ods-table>
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
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_TABLE_SIZE.md
        },
        type: {
          summary: ODS_TABLE_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TABLE_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_TABLE_VARIANT.default
        },
        type: {
          summary: ODS_TABLE_VARIANTS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TABLE_VARIANTS
    }
  }),
  args: {
    content: exampleTable,
    size: ODS_TABLE_SIZE.md,
    variant: ODS_TABLE_VARIANT.default
  }
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var _,A,O;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-table>
\${unsafeHTML(exampleTable)}
</ods-table>
  \`
}`,...(O=(A=n.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-table>
\${unsafeHTML(exampleTable)}
</ods-table>
  \`
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var E,L,$;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-table size="\${ODS_TABLE_SIZE.sm}">
\${unsafeHTML(exampleTable)}
</ods-table>

<ods-table size="\${ODS_TABLE_SIZE.md}">
\${unsafeHTML(exampleTable)}
</ods-table>

<ods-table size="\${ODS_TABLE_SIZE.lg}">
\${unsafeHTML(exampleTable)}
</ods-table>
  \`
}`,...($=(L=r.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var D,h,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-table variant="\${ODS_TABLE_VARIANT.default}">
\${unsafeHTML(exampleTable)}
</ods-table>

<ods-table variant="\${ODS_TABLE_VARIANT.striped}">
\${unsafeHTML(exampleTable)}
</ods-table>
  \`
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const H=["Demo","Overview","Default","Size","Variant"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Demo:a,Overview:n,Size:r,Variant:o,__namedExportsOrder:H,default:B},Symbol.toStringTag,{value:"Module"}));export{s as D,n as O,r as S,C as T,o as V};
