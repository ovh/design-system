import{r as k,e}from"./index-D_CmzhJ4.js";import{j as F}from"./jsx-runtime-VM66peLj.js";import{c as M}from"./index-CkQHsVsO.js";import{O as Y}from"./OdsText-BABXFwFE.js";import{o as Z,C as E}from"./controls-BtiQQn1l.js";var p=(r=>(r.lg="lg",r.md="md",r.sm="sm",r))(p||{});const y=Object.freeze(Object.values(p));var i=(r=>(r.default="default",r.striped="striped",r))(i||{});const b=Object.freeze(Object.values(i)),u={"ods-table--sm":"_ods-table--sm_k2vjt_1","ods-table--md":"_ods-table--md_k2vjt_53","ods-table--lg":"_ods-table--lg_k2vjt_105","ods-table--striped":"_ods-table--striped_k2vjt_157"},m=k.forwardRef(({children:r,className:a,size:L=p.md,variant:I=i.default,...B},G)=>F.jsx("table",{className:M(u["ods-table"],u[`ods-table--${L}`],u[`ods-table--${I}`],a),ref:G,...B,children:r}));m.displayName="OdsTable";try{m.displayName="OdsTable",m.__docgenInfo={description:"",displayName:"OdsTable",props:{size:{defaultValue:{value:"ODS_TABLE_SIZE.md"},description:"",name:"size",required:!1,type:{name:'"lg" | "md" | "sm"'}},variant:{defaultValue:{value:"ODS_TABLE_VARIANT.default"},description:"",name:"variant",required:!1,type:{name:'"default" | "striped"'}}}}}catch{}const q={component:m,title:"ODS Components/Table"};function t(r,a){return e.createElement(m,{...r},e.createElement("caption",null,a?a():"Front-end web developer course 2021"),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"Person"),e.createElement("th",{scope:"col"},"Most interest in"),e.createElement("th",{scope:"col"},"Age"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Chris"),e.createElement("td",null,"HTML tables"),e.createElement("td",null,"22")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Dennis"),e.createElement("td",null,"Web accessibility"),e.createElement("td",null,"45")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Sarah"),e.createElement("td",null,"JavaScript frameworks"),e.createElement("td",null,"29")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Karen"),e.createElement("td",null,"Web performance"),e.createElement("td",null,"36"))))}const n={render:({size:r,variant:a})=>t({size:r,variant:a}),argTypes:Z({size:{table:{category:E.design,defaultValue:{summary:p.md},type:{summary:y}},control:{type:"select"},options:y},variant:{table:{category:E.design,defaultValue:{summary:i.default},type:{summary:b}},control:{type:"select"},options:b}})},s={tags:["!dev"],render:({})=>t({},()=>e.createElement(Y,{preset:"caption"},"Front-end web developer course 2021"))},l={tags:["!dev"],render:({})=>t()},o={parameters:{layout:"centered"},tags:["!dev"],render:({})=>t()},d={decorators:[r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,t({size:"sm"}),t({size:"md"}),t({size:"lg"}))},c={decorators:[r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,t({variant:"default"}),t({variant:"striped"}))};var v,f,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    size,
    variant
  }) => renderExampleTable({
    size,
    variant
  }),
  argTypes: orderControls({
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
  })
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var T,g,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => renderExampleTable({}, () => <OdsText preset="caption">Front-end web developer course 2021</OdsText>)
}`,...(O=(g=s.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var x,S,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => renderExampleTable()
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,z,w;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => renderExampleTable()
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,j,V;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px'
  }}>
      {story()}
    </div>],
  tags: ['!dev'],
  render: ({}) => <>
      {renderExampleTable({
      size: 'sm'
    })}
      {renderExampleTable({
      size: 'md'
    })}
      {renderExampleTable({
      size: 'lg'
    })}
    </>
}`,...(V=(j=d.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var N,R,h;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px'
  }}>
      {story()}
    </div>],
  tags: ['!dev'],
  render: ({}) => <>
      {renderExampleTable({
      variant: 'default'
    })}
      {renderExampleTable({
      variant: 'striped'
    })}
    </>
}`,...(h=(R=c.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};const P=["Demo","CustomCaption","Default","Overview","Size","Variant"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomCaption:s,Default:l,Demo:n,Overview:o,Size:d,Variant:c,__namedExportsOrder:P,default:q},Symbol.toStringTag,{value:"Module"}));export{s as C,l as D,o as O,d as S,Q as T,c as V};
