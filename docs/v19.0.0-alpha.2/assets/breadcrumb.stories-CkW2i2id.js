import{r as u,e}from"./index-D_CmzhJ4.js";import{j as m}from"./jsx-runtime-VM66peLj.js";import{c as X}from"./index-CkQHsVsO.js";import{g as Z,L as le}from"./Link-CnzBxqpY.js";import{I as ee,a as re}from"./icon-name-jL3axqAU.js";import{e as de,o as ue,C as y}from"./controls-BtiQQn1l.js";function oe(t,l,c,s){return t>=Math.max(1,c)&&t<l-Math.max(1,s)}const ie={"breadcrumb-separator":"_breadcrumb-separator_fy7ti_11"},g=()=>m.jsx("span",{className:ie["breadcrumb-separator"],role:"presentation"});g.displayName="BreadcrumbSeparator";g.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",composes:["ComponentPropsWithoutRef"]};const S={"breadcrumb-ellipsis":"_breadcrumb-ellipsis_qxgx4_2","breadcrumb-ellipsis__button":"_breadcrumb-ellipsis__button_qxgx4_6"},v=({onExpand:t})=>m.jsxs("li",{className:S["breadcrumb-ellipsis"],children:[m.jsx("button",{className:S["breadcrumb-ellipsis__button"],onClick:t,children:"..."}),m.jsx(g,{})]});v.displayName="BreadcrumbEllipsis";v.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{onExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["ComponentPropsWithoutRef"]};const be="_breadcrumb__list_tqb2f_2",N={breadcrumb__list:be},n=u.forwardRef(({children:t,className:l,collapseThreshold:c=4,nbItemsAfterEllipsis:s=1,nbItemsBeforeEllipsis:d=1,noCollapse:I=!1,onExpand:L,...o},ae)=>{const[te,me]=u.useState(I),T=Z(t),C=T.length,ne=!te&&C>c;let R=!1;const ce=T.reduce((k,se,_)=>ne&&oe(_,C,d,s)?(R||(k.push(m.jsx(v,{onExpand:()=>{me(!0),L&&L()}},_)),R=!0),k):(k.push(u.cloneElement(se,{isLast:C===_+1})),k),[]);return m.jsx("nav",{className:X(N.breadcrumb,l),ref:ae,...o,children:m.jsx("ol",{className:N.breadcrumb__list,children:ce})})});n.displayName="Breadcrumb";n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{collapseThreshold:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},nbItemsAfterEllipsis:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},nbItemsBeforeEllipsis:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},noCollapse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["ComponentPropsWithRef"]};const r=u.forwardRef(function({as:l,isLast:c,...s},d){if(c)return m.jsx("span",{"aria-current":"page",ref:d,...s});const I=l||le;return m.jsx(I,{ref:d,...s})});r.displayName="BreadcrumbLink";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{as:{required:!1,tsType:{name:"T"},description:`@default-value='a'
Pass a component you may want to use as custom Link component.
Useful for example when using routing library like react-router.`},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}}};const Be={"breadcrumb-item":"_breadcrumb-item_1vl0g_2"},a=u.forwardRef(({children:t,className:l,isLast:c,...s},d)=>{const L=Z(t).map(o=>o.type===r?u.cloneElement(o,{isLast:c}):o);return m.jsxs("li",{className:X(Be["breadcrumb-item"],l),ref:d,...s,children:[L,!c&&m.jsx(g,{})]})});a.displayName="BreadcrumbItem";a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}},composes:["ComponentPropsWithRef"]};const pe={argTypes:de(["noCollapse","onExpand"]),component:n,subcomponents:{BreadcrumbItem:a,BreadcrumbLink:r},title:"ODS Components/Breadcrumb"},i={render:t=>e.createElement(n,{collapseThreshold:t.collapseThreshold,nbItemsAfterEllipsis:t.nbItemsAfterEllipsis,nbItemsBeforeEllipsis:t.nbItemsBeforeEllipsis},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 1")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 2")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 3")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page"))),argTypes:ue({collapseThreshold:{table:{category:y.design}},nbItemsAfterEllipsis:{table:{category:y.design}},nbItemsBeforeEllipsis:{table:{category:y.design}}})},b={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},B={tags:["!dev"],render:({})=>e.createElement(n,{nbItemsBeforeEllipsis:1,nbItemsAfterEllipsis:4},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},p={tags:["!dev"],render:({})=>e.createElement(n,{collapseThreshold:7},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},f={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(a,null,e.createElement(r,{href:"#"},e.createElement(ee,{name:re.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},E={tags:["!dev"],render:({})=>e.createElement(n,{noCollapse:!0},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},h={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(a,null,e.createElement(r,{href:"#"},e.createElement(ee,{name:re.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))};var x,P,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: arg => <Breadcrumb collapseThreshold={arg.collapseThreshold} nbItemsAfterEllipsis={arg.nbItemsAfterEllipsis} nbItemsBeforeEllipsis={arg.nbItemsBeforeEllipsis}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Page 1
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Page 2
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Page 3
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current page
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>,
  argTypes: orderControls({
    collapseThreshold: {
      table: {
        category: CONTROL_CATEGORY.design
      }
    },
    nbItemsAfterEllipsis: {
      table: {
        category: CONTROL_CATEGORY.design
      }
    },
    nbItemsBeforeEllipsis: {
      table: {
        category: CONTROL_CATEGORY.design
      }
    }
  })
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var A,H,j;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...(j=(H=b.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var D,q,w;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Breadcrumb nbItemsBeforeEllipsis={1} nbItemsAfterEllipsis={4}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...(w=(q=B.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var M,V,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Breadcrumb collapseThreshold={7}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var W,Y,$;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon name={ICON_NAME.home} />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Parent
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var z,F,U;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Breadcrumb noCollapse>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...(U=(F=E.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon name={ICON_NAME.home} />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Parent
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const fe=["Demo","Collapsed","CustomAfterBeforeCollapse","CustomCollapseThreshold","Default","NoCollapse","Overview"],_e=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:b,CustomAfterBeforeCollapse:B,CustomCollapseThreshold:p,Default:f,Demo:i,NoCollapse:E,Overview:h,__namedExportsOrder:fe,default:pe},Symbol.toStringTag,{value:"Module"}));export{_e as B,b as C,f as D,E as N,h as O,B as a,p as b};
