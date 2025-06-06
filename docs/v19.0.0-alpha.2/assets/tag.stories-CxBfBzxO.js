import{r as D,e as a}from"./index-D_CmzhJ4.js";import{j as p}from"./jsx-runtime-VM66peLj.js";import{c as h}from"./index-CkQHsVsO.js";import{I as F,a as Z}from"./icon-name-jL3axqAU.js";import{e as Y,o as $,C as i}from"./controls-BtiQQn1l.js";var r=(e=>(e.critical="critical",e.information="information",e.neutral="neutral",e.success="success",e.warning="warning",e))(r||{});const P=Object.freeze(Object.values(r));var m=(e=>(e.lg="lg",e.md="md",e))(m||{});const V=Object.freeze(Object.values(m)),k="_tag_1jxfq_6",W="_tag__close_1jxfq_98",B="_tag__label_1jxfq_109",d={tag:k,"tag--critical":"_tag--critical_1jxfq_22","tag--information":"_tag--information_1jxfq_35","tag--neutral":"_tag--neutral_1jxfq_48","tag--success":"_tag--success_1jxfq_61","tag--warning":"_tag--warning_1jxfq_74","tag--md":"_tag--md_1jxfq_93",tag__close:W,"tag--lg":"_tag--lg_1jxfq_101",tag__label:B},t=D.forwardRef(({children:e,className:I,color:q=r.information,size:z=m.md,...L},N)=>p.jsxs("button",{className:h(d.tag,d[`tag--${q}`],d[`tag--${z}`],I),ref:N,...L,children:[e,p.jsx(F,{className:d.tag__close,name:Z.xmark})]}));t.displayName="Tag";t.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{color:{required:!1,tsType:{name:"literal",value:"`${TAG_COLOR}`"},description:"",defaultValue:{value:"TAG_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${TAG_SIZE}`"},description:"",defaultValue:{value:"TAG_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const H={argTypes:Y(["onRemove"]),component:t,title:"ODS Components/Tag"},n={argTypes:$({color:{table:{category:i.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:P},children:{table:{category:i.general},control:"text"},disabled:{table:{category:i.general,type:{summary:"boolean"}},control:{type:"boolean"}},size:{table:{category:i.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:V}}),args:{children:"My tag"}},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(t,null,"My tag")},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(t,null,"My tag")},l={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(a.Fragment,null,a.createElement(t,{color:r.critical},"My tag"),a.createElement(t,{color:r.information},"My tag"),a.createElement(t,{color:r.neutral},"My tag"),a.createElement(t,{color:r.success},"My tag"),a.createElement(t,{color:r.warning},"My tag"))},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(t,{disabled:!0},"My tag")},g={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(a.Fragment,null,a.createElement(t,{size:m.md},"My tag"),a.createElement(t,{size:m.lg},"My tag"))};var y,u,_;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(u=n.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var T,f,O;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(O=(f=o.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var x,v,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var b,C,M;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      <Tag color={TAG_COLOR.critical}>My tag</Tag>
      <Tag color={TAG_COLOR.information}>My tag</Tag>
      <Tag color={TAG_COLOR.neutral}>My tag</Tag>
      <Tag color={TAG_COLOR.success}>My tag</Tag>
      <Tag color={TAG_COLOR.warning}>My tag</Tag>
    </>
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var S,R,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag disabled>My tag</Tag>
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var A,G,w;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(G=g.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};const J=["Demo","Overview","Default","Color","Disabled","Size"],ae=Object.freeze(Object.defineProperty({__proto__:null,Color:l,Default:s,Demo:n,Disabled:c,Overview:o,Size:g,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,o as O,g as S,ae as T,c as a};
