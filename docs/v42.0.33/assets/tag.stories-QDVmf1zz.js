import{r as D,e}from"./index-D_CmzhJ4.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{c as F}from"./index-CkQHsVsO.js";import{I as Z,a as Y}from"./icon-name-BOrBmUKT.js";import{a as t,C as P}from"./colors-DSObuHxd.js";import{e as $,o as W,C as m}from"./controls-BtiQQn1l.js";var i=(r=>(r.lg="lg",r.md="md",r))(i||{});const q=Object.freeze(Object.values(i)),V="_tag_ni9pn_6",k="_tag__close_ni9pn_111",B="_tag__label_ni9pn_119",p={tag:V,"tag--critical":"_tag--critical_ni9pn_22","tag--information":"_tag--information_ni9pn_35","tag--neutral":"_tag--neutral_ni9pn_48","tag--primary":"_tag--primary_ni9pn_61","tag--success":"_tag--success_ni9pn_74","tag--warning":"_tag--warning_ni9pn_87","tag--md":"_tag--md_ni9pn_106",tag__close:k,"tag--lg":"_tag--lg_ni9pn_114",tag__label:B},a=D.forwardRef(({children:r,className:M,color:N=t.information,size:z=i.md,...h},j)=>d.jsxs("button",{className:F(p.tag,p[`tag--${N}`],p[`tag--${z}`],M),ref:j,type:"button",...h,children:[r,d.jsx(Z,{className:p.tag__close,name:Y.xmark})]}));a.displayName="Tag";a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=TAG_COLOR
The color preset to use.`,defaultValue:{value:"TAG_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${TAG_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"TAG_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const H={argTypes:$(["onRemove"]),component:a,title:"React Components/Tag"},n={argTypes:W({color:{table:{category:m.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:P},children:{table:{category:m.general},control:"text"},disabled:{table:{category:m.general,type:{summary:"boolean"}},control:{type:"boolean"}},size:{table:{category:m.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:q}}),args:{children:"My tag"}},o={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:t.critical},"Critical"),e.createElement(a,{color:t.information},"Information"),e.createElement(a,{color:t.neutral},"Neutral"),e.createElement(a,{color:t.primary},"Primary"),e.createElement(a,{color:t.success},"Success"),e.createElement(a,{color:t.warning},"Warning"))},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,"My tag")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{disabled:!0},"My tag")},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,"My tag")},g={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{size:i.md},"My tag"),e.createElement(a,{size:i.lg},"My tag"))};var u,_,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TAG_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: TAG_COLORS
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TAG_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: TAG_SIZES
    }
  }),
  args: {
    children: 'My tag'
  }
}`,...(y=(_=n.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var T,O,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <Tag color={TAG_COLOR.critical}>Critical</Tag>
      <Tag color={TAG_COLOR.information}>Information</Tag>
      <Tag color={TAG_COLOR.neutral}>Neutral</Tag>
      <Tag color={TAG_COLOR.primary}>Primary</Tag>
      <Tag color={TAG_COLOR.success}>Success</Tag>
      <Tag color={TAG_COLOR.warning}>Warning</Tag>
    </>
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var f,E,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(R=(E=s.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var b,v,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag disabled>My tag</Tag>
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var A,x,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(G=(x=c.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var L,I,w;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <Tag size={TAG_SIZE.md}>My tag</Tag>
      <Tag size={TAG_SIZE.lg}>My tag</Tag>
    </>
}`,...(w=(I=g.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const J=["Demo","Color","Default","Disabled","Overview","Size"],re=Object.freeze(Object.defineProperty({__proto__:null,Color:o,Default:s,Demo:n,Disabled:l,Overview:c,Size:g,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,c as O,g as S,re as T,l as a};
