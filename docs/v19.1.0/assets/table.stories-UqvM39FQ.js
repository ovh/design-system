import{r as B,e}from"./index-D_CmzhJ4.js";import{j as G}from"./jsx-runtime-VM66peLj.js";import{c as k}from"./index-CkQHsVsO.js";import{T as F}from"./Text-B1XN51Xz.js";import{o as Z,C as E}from"./controls-BtiQQn1l.js";var i=(r=>(r.lg="lg",r.md="md",r.sm="sm",r))(i||{});const $=Object.freeze(Object.values(i));var u=(r=>(r.default="default",r.striped="striped",r))(u||{});const M=Object.freeze(Object.values(u)),p={"table--sm":"_table--sm_1xkmm_2","table--md":"_table--md_1xkmm_54","table--lg":"_table--lg_1xkmm_106","table--striped":"_table--striped_1xkmm_158"},d=B.forwardRef(({children:r,className:a,size:D=i.md,variant:I=u.default,...V},j)=>G.jsx("table",{className:k(p.table,p[`table--${D}`],p[`table--${I}`],a),"data-ods":"table",ref:j,...V,children:r}));d.displayName="Table";d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{size:{required:!1,tsType:{name:"literal",value:"`${TABLE_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"TABLE_SIZE.md",computed:!0}},variant:{required:!1,tsType:{name:"literal",value:"`${TABLE_VARIANT}`"},description:"The variant preset to use.",defaultValue:{value:"TABLE_VARIANT.default",computed:!0}}},composes:["ComponentPropsWithRef"]};const P={component:d,title:"React Components/Table"};function t(r,a){return e.createElement(d,{...r},e.createElement("caption",null,a?a():"Front-end web developer course 2021"),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"Person"),e.createElement("th",{scope:"col"},"Most interest in"),e.createElement("th",{scope:"col"},"Age"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Chris"),e.createElement("td",null,"HTML tables"),e.createElement("td",null,"22")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Dennis"),e.createElement("td",null,"Web accessibility"),e.createElement("td",null,"45")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Sarah"),e.createElement("td",null,"JavaScript frameworks"),e.createElement("td",null,"29")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Karen"),e.createElement("td",null,"Web performance"),e.createElement("td",null,"36"))))}const n={render:({size:r,variant:a})=>t({size:r,variant:a}),argTypes:Z({size:{table:{category:E.design,type:{summary:"TABLE_SIZE"}},control:{type:"select"},options:$},variant:{table:{category:E.design,type:{summary:"TABLE_VARIANT"}},control:{type:"select"},options:M}})},s={tags:["!dev"],render:({})=>t({},()=>e.createElement(F,{preset:"caption"},"Front-end web developer course 2021"))},l={tags:["!dev"],render:({})=>t()},o={parameters:{layout:"centered"},tags:["!dev"],render:({})=>t()},c={decorators:[r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,t({size:"sm"}),t({size:"md"}),t({size:"lg"}))},m={decorators:[r=>e.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,t({variant:"default"}),t({variant:"striped"}))};var T,b,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        type: {
          summary: 'TABLE_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: TABLE_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TABLE_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: TABLE_VARIANTS
    }
  })
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => renderExampleTable({}, () => <Text preset="caption">Front-end web developer course 2021</Text>)
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,_,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => renderExampleTable()
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var S,O,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => renderExampleTable()
}`,...(z=(O=o.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var C,w,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var h,L,N;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const W=["Demo","CustomCaption","Default","Overview","Size","Variant"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomCaption:s,Default:l,Demo:n,Overview:o,Size:c,Variant:m,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{s as C,l as D,o as O,c as S,Q as T,m as V};
