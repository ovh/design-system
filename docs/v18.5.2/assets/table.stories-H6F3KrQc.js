import{S as c,T as b,U as i,V as u}from"./index-DCBH0_Tl.js";import{d as z}from"./ods-table2-oe37kiP3.js";import{x as a,o as B,C as p}from"./controls-DX883vx3.js";import{o as e}from"./unsafe-html-VJzuFJfF.js";const I=z;I();const R={title:"ODS Components/Table",component:"ods-table"},t=`<table>
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
</table>`,w=`<table>
  <caption>
    <ods-text preset="caption">Front-end web developer course 2021</ods-text>
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
</table>`,s={render:m=>a`
<ods-table size="${m.size}"
           variant="${m.variant}">
  ${e(m.content)}
</ods-table>
  `,argTypes:B({content:{table:{category:p.slot,defaultValue:{summary:"ø"}},control:"text"},size:{table:{category:p.design,defaultValue:{summary:c.md},type:{summary:b}},control:{type:"select"},options:b},variant:{table:{category:p.design,defaultValue:{summary:i.default},type:{summary:u}},control:{type:"select"},options:u}}),args:{content:t,size:c.md,variant:i.default}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a`
<ods-table>
${e(t)}
</ods-table>
  `},r={tags:["isHidden"],render:()=>a`
<ods-table>
${e(t)}
</ods-table>
  `},o={tags:["isHidden"],render:()=>a`
<ods-table size="${c.sm}">
${e(t)}
</ods-table>

<ods-table size="${c.md}">
${e(t)}
</ods-table>

<ods-table size="${c.lg}">
${e(t)}
</ods-table>
  `},d={tags:["isHidden"],render:()=>a`
<ods-table variant="${i.default}">
${e(t)}
</ods-table>

<ods-table variant="${i.striped}">
${e(t)}
</ods-table>
  `},l={tags:["isHidden"],render:()=>a`
<ods-table>
${e(w)}
</ods-table>
  `};var T,S,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var h,A,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-table>
\${unsafeHTML(exampleTable)}
</ods-table>
  \`
}`,...(g=(A=n.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var f,y,O;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-table>
\${unsafeHTML(exampleTable)}
</ods-table>
  \`
}`,...(O=(y=r.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var E,$,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=($=o.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var D,v,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-table variant="\${ODS_TABLE_VARIANT.default}">
\${unsafeHTML(exampleTable)}
</ods-table>

<ods-table variant="\${ODS_TABLE_VARIANT.striped}">
\${unsafeHTML(exampleTable)}
</ods-table>
  \`
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var H,x,V;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-table>
\${unsafeHTML(odsTextCaptionTable)}
</ods-table>
  \`
}`,...(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const M=["Demo","Overview","Default","Size","Variant","Caption"],Y=Object.freeze(Object.defineProperty({__proto__:null,Caption:l,Default:r,Demo:s,Overview:n,Size:o,Variant:d,__namedExportsOrder:M,default:R},Symbol.toStringTag,{value:"Module"}));export{l as C,r as D,n as O,o as S,Y as T,d as V};
