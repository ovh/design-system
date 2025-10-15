import{r as n,e}from"./index-jIWwRBLr.js";import{j as d}from"./jsx-runtime-Cfl8ynUo.js";import{c as ue}from"./index-CqY9YpN0.js";import{a as ie}from"./element-3R7vFkDE.js";import{L as B,u as ye}from"./useI18n-C0NLVYPv.js";import{L as _e}from"./Link-D5eLq5a9.js";import{I as S,a as A}from"./icon-name-C581wThh.js";import{e as Re,o as Ne,C as x}from"./controls-BtiQQn1l.js";const be=n.createContext({});function Be({children:t,i18n:c,locale:m}){return d.jsx(be.Provider,{value:{i18n:c,locale:m},children:t})}function Te(){return n.useContext(be)}Be.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["BreadcrumbContextType"]};function pe(t,c,m,l){return t>=Math.max(1,m)&&t<c-Math.max(1,l)}function xe(t,c,m,l){if(!l||t<=c+m+1)return null;for(let s=0;s<t;s++)if(pe(s,t,c,m))return s;return null}var fe=(t=>(t.ellipsisButton="breadcrumb.ellipsis.button",t))(fe||{});const Se={"breadcrumb.ellipsis.button":{[B.de]:"Breadcrumb-Links erweitern",[B.en]:"Expand Breadcrumb links",[B.es]:"Expandir enlaces de ruta de navegación",[B.fr]:"Développer les liens du fil d'Ariane",[B.it]:"Espandi i link di Breadcrumb",[B.nl]:"Breadcrumb-koppelingen uitvouwen",[B.pl]:"Rozwiń linki ścieżki nawigacyjnej",[B.pt]:"Expandir links Breadcrumb"}},Ae={"breadcrumb-separator":"_breadcrumb-separator_8bc5w_11"},R=()=>d.jsx("span",{className:Ae["breadcrumb-separator"],role:"presentation"});R.displayName="BreadcrumbSeparator";R.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",composes:["ComponentPropsWithoutRef"]};const q={"breadcrumb-ellipsis":"_breadcrumb-ellipsis_1nzj2_2","breadcrumb-ellipsis__button":"_breadcrumb-ellipsis__button_1nzj2_5"},O=({onExpand:t,...c})=>{const{i18n:m,locale:l}=Te(),{translate:s}=ye(Se,l,m);return d.jsxs("li",{className:q["breadcrumb-ellipsis"],children:[d.jsx("button",{...c,"aria-label":s(fe.ellipsisButton),className:q["breadcrumb-ellipsis__button"],onClick:t,type:"button",children:"..."}),d.jsx(R,{})]})};O.displayName="BreadcrumbEllipsis";O.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{onExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const Oe="_breadcrumb__list_1jn0o_2",M={breadcrumb__list:Oe},o=n.forwardRef(({children:t,className:c,collapseThreshold:m=4,i18n:l,id:s,locale:f,nbItemsAfterEllipsis:u=1,nbItemsBeforeEllipsis:i=1,noCollapse:b=!1,onExpand:P,...he},Ie)=>{const Ee=n.useId(),H=s??Ee,[N,Le]=n.useState(b),j=ie(t),p=j.length,T=!N&&p>m;let w=!1;const[D,ke]=n.useState(null),ge=n.useMemo(()=>xe(p,i,u,T),[p,i,u,T]),Ce=j.reduce((y,ve,_)=>T&&pe(_,p,i,u)?(w||(y.push(d.jsx(O,{"aria-controls":H,onExpand:()=>{Le(!0),ke(ge),P&&P()}},_)),w=!0),y):(y.push(n.cloneElement(ve,{autoFocus:N&&D!==null&&_===D,isLast:p===_+1})),y),[]);return d.jsx(Be,{i18n:l,locale:f,children:d.jsx("nav",{"aria-expanded":!b&&p>m?N:void 0,className:ue(M.breadcrumb,c),"data-ods":"breadcrumb",id:H,ref:Ie,role:"navigation",...he,children:d.jsx("ol",{className:M.breadcrumb__list,children:Ce})})})});o.displayName="Breadcrumb";o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{collapseThreshold:{required:!1,tsType:{name:"number"},description:"The number of items when the component will collapse to an ellipsis.",defaultValue:{value:"4",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"BREADCRUMB_I18N"},{name:"string"}],raw:"Record<BREADCRUMB_I18N, string>"}],raw:"Partial<Record<BREADCRUMB_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"Id for the breadcrumb nav (overrides auto-generated id)"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},nbItemsAfterEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display before the ellipsis.",defaultValue:{value:"1",computed:!1}},nbItemsBeforeEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display after the ellipsis.",defaultValue:{value:"1",computed:!1}},noCollapse:{required:!1,tsType:{name:"boolean"},description:"Whether the component should not collapse in an ellipsis regarding the number of items.",defaultValue:{value:"false",computed:!1}},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when an ellipsis is expanded."}},composes:["ComponentPropsWithRef"]};const r=n.forwardRef(function({as:c,autoFocus:m,isLast:l,...s},f){const u=n.useRef(null),i=n.useRef(null);if(n.useImperativeHandle(f,()=>l?i.current:u.current,[l]),n.useEffect(()=>{m&&u.current&&u.current.focus()},[m]),l)return d.jsx("span",{"aria-current":"page","data-ods":"breadcrumb-link",ref:i,...s});const b=c||_e;return d.jsx(b,{"data-ods":"breadcrumb-link",ref:u,...s})});r.displayName="BreadcrumbLink";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{as:{required:!1,tsType:{name:"T"},description:`@default-value='a'
Pass a component you may want to use as custom Link component.
Useful for example when using routing library like react-router.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}}};const Pe={"breadcrumb-item":"_breadcrumb-item_1bnix_2"},a=n.forwardRef(({autoFocus:t,children:c,className:m,isLast:l,...s},f)=>{const i=ie(c).map(b=>b.type===r?n.cloneElement(b,{autoFocus:t,isLast:l}):b);return d.jsxs("li",{className:ue(Pe["breadcrumb-item"],m),"data-ods":"breadcrumb-item",ref:f,role:"listitem",...s,children:[i,!l&&d.jsx(R,{})]})});a.displayName="BreadcrumbItem";a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}},composes:["ComponentPropsWithRef"]};const He={argTypes:Re(["i18n","id","locale","noCollapse","onExpand"]),component:o,subcomponents:{BreadcrumbItem:a,BreadcrumbLink:r},title:"React Components/Breadcrumb"},h={render:t=>e.createElement(o,{collapseThreshold:t.collapseThreshold,nbItemsAfterEllipsis:t.nbItemsAfterEllipsis,nbItemsBeforeEllipsis:t.nbItemsBeforeEllipsis},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 1")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 2")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 3")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page"))),argTypes:Ne({collapseThreshold:{table:{category:x.design}},nbItemsAfterEllipsis:{table:{category:x.design}},nbItemsBeforeEllipsis:{table:{category:x.design}}})},I={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},E={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{nbItemsBeforeEllipsis:1,nbItemsAfterEllipsis:4},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},L={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{collapseThreshold:7},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},k={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(S,{name:A.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},g={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{noCollapse:!0},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},C={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(S,{name:A.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},v={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,{"aria-label":"Breadcrumb"},e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(S,{name:A.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Category")),e.createElement(a,null,e.createElement(r,{href:"#"},"Subcategory")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page")))};var W,F,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var z,G,U;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Homepage" href="#">
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
}`,...(U=(G=I.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,$,J;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';\`
  },
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
}`,...(J=($=E.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,X;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';\`
  },
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
}`,...(X=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Home" href="#">
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
}`,...(re=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,me;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';\`
  },
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
}`,...(me=(te=g.parameters)==null?void 0:te.docs)==null?void 0:me.source}}};var ne,ce,le;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Home" href="#">
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
}`,...(le=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var se,de,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Breadcrumb aria-label="Breadcrumb">
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Home" href="#">
          <Icon name={ICON_NAME.home} />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Category
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Subcategory
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current page
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
}`,...(oe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};const je=["Demo","Collapsed","CustomAfterBeforeCollapse","CustomCollapseThreshold","Default","NoCollapse","Overview","AccessibilityWithAriaLabel"],Ue=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithAriaLabel:v,Collapsed:I,CustomAfterBeforeCollapse:E,CustomCollapseThreshold:L,Default:k,Demo:h,NoCollapse:g,Overview:C,__namedExportsOrder:je,default:He},Symbol.toStringTag,{value:"Module"}));export{v as A,Ue as B,I as C,k as D,g as N,C as O,E as a,L as b};
