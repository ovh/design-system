import{r as d,e}from"./index-jIWwRBLr.js";import{j as s}from"./jsx-runtime-Cfl8ynUo.js";import{c as ke}from"./index-CqY9YpN0.js";import{a as Le}from"./element-B8BTzFb4.js";import{u as Oe}from"./context-C_-r2uoG.js";import{L as B,u as Pe}from"./useI18n-C0NLVYPv.js";import{D as De,f as je,e as we}from"./divider-color-2AUX7hAv.js";import{L as Me}from"./Link-BMD7IBx8.js";import{I as T,a as S}from"./icon-name-D0KNfDOz.js";import{e as qe,o as Ge,C as O}from"./controls-BtiQQn1l.js";const ge=d.createContext(void 0);function ve({children:t,i18n:n,locale:m}){return s.jsx(ge.Provider,{value:{i18n:n,locale:m},children:t})}function Ve(){return Oe(ge)}ve.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};function Ce(t,n,m,c){return t>=Math.max(1,m)&&t<n-Math.max(1,c)}function We(t,n,m,c){if(!c||t<=n+m+1)return null;for(let l=0;l<t;l++)if(Ce(l,t,n,m))return l;return null}var _e=(t=>(t.ellipsisButton="breadcrumb.ellipsis.button",t))(_e||{});const Fe={"breadcrumb.ellipsis.button":{[B.de]:"Breadcrumb-Links erweitern",[B.en]:"Expand Breadcrumb links",[B.es]:"Expandir enlaces de ruta de navegación",[B.fr]:"Développer les liens du fil d'Ariane",[B.it]:"Espandi i link di Breadcrumb",[B.nl]:"Breadcrumb-koppelingen uitvouwen",[B.pl]:"Rozwiń linki ścieżki nawigacyjnej",[B.pt]:"Expandir links Breadcrumb"}},$e={"breadcrumb-separator":"_breadcrumb-separator_hnz6k_2"},A=()=>s.jsx(De,{className:$e["breadcrumb-separator"],orientation:we.vertical,spacing:je._24});A.displayName="BreadcrumbSeparator";A.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",composes:["ComponentPropsWithoutRef"]};const V={"breadcrumb-ellipsis":"_breadcrumb-ellipsis_1x76u_2","breadcrumb-ellipsis__button":"_breadcrumb-ellipsis__button_1x76u_5"},P=({onExpand:t,...n})=>{const{i18n:m,locale:c}=Ve(),{translate:l}=Pe(Fe,c,m);return s.jsxs("li",{className:V["breadcrumb-ellipsis"],children:[s.jsx("button",{...n,"aria-label":l(_e.ellipsisButton),className:V["breadcrumb-ellipsis__button"],onClick:t,type:"button",children:"..."}),s.jsx(A,{})]})};P.displayName="BreadcrumbEllipsis";P.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{onExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const Ue="_breadcrumb__list_1jn0o_2",W={breadcrumb__list:Ue},D=d.forwardRef(({children:t,className:n,collapseThreshold:m=4,i18n:c,id:l,locale:f,nbItemsAfterEllipsis:o=1,nbItemsBeforeEllipsis:i=1,noCollapse:b=!1,onExpand:j,...ye},Re)=>{const Ne=d.useId(),w=l??Ne,[x,Te]=d.useState(b),M=Le(t),p=M.length,H=!x&&p>m;let q=!1;const[G,Se]=d.useState(null),Ae=d.useMemo(()=>We(p,i,o,H),[p,i,o,H]),xe=M.reduce((R,He,N)=>H&&Ce(N,p,i,o)?(q||(R.push(s.jsx(P,{"aria-controls":w,onExpand:()=>{Te(!0),Se(Ae),j&&j()}},N)),q=!0),R):(R.push(d.cloneElement(He,{autoFocus:x&&G!==null&&N===G,isLast:p===N+1})),R),[]);return s.jsx(ve,{i18n:c,locale:f,children:s.jsx("nav",{"aria-expanded":!b&&p>m?x:void 0,className:ke(W.breadcrumb,n),"data-ods":"breadcrumb",id:w,ref:Re,role:"navigation",...ye,children:s.jsx("ol",{className:W.breadcrumb__list,children:xe})})})});D.displayName="Breadcrumb";D.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{collapseThreshold:{required:!1,tsType:{name:"number"},description:"The number of items when the component will collapse to an ellipsis.",defaultValue:{value:"4",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"BREADCRUMB_I18N"},{name:"string"}],raw:"Record<BREADCRUMB_I18N, string>"}],raw:"Partial<Record<BREADCRUMB_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"Id for the breadcrumb nav (overrides auto-generated id)"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},nbItemsAfterEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display before the ellipsis.",defaultValue:{value:"1",computed:!1}},nbItemsBeforeEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display after the ellipsis.",defaultValue:{value:"1",computed:!1}},noCollapse:{required:!1,tsType:{name:"boolean"},description:"Whether the component should not collapse in an ellipsis regarding the number of items.",defaultValue:{value:"false",computed:!1}},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when an ellipsis is expanded."}},composes:["ComponentPropsWithRef"]};const r=d.forwardRef(function({as:n,autoFocus:m,isLast:c,...l},f){const o=d.useRef(null),i=d.useRef(null);if(d.useImperativeHandle(f,()=>c?i.current:o.current,[c]),d.useEffect(()=>{m&&o.current&&o.current.focus()},[m]),c)return s.jsx("span",{"aria-current":"page","data-ods":"breadcrumb-link",ref:i,...l});const b=n||Me;return s.jsx(b,{"data-ods":"breadcrumb-link",ref:o,...l})});r.displayName="BreadcrumbLink";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{as:{required:!1,tsType:{name:"T"},description:`@default-value='a'
Pass a component you may want to use as custom Link component.
Useful for example when using routing library like react-router.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}}};const Ye={"breadcrumb-item":"_breadcrumb-item_15jgm_2"},a=d.forwardRef(({autoFocus:t,children:n,className:m,isLast:c,...l},f)=>{const i=Le(n).map(b=>b.type===r?d.cloneElement(b,{autoFocus:t,isLast:c}):b);return s.jsxs("li",{className:ke(Ye["breadcrumb-item"],m),"data-ods":"breadcrumb-item",ref:f,...l,children:[i,!c&&s.jsx(A,{})]})});a.displayName="BreadcrumbItem";a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}},composes:["ComponentPropsWithRef"]};const u=Object.assign(D,{Item:a,Link:r}),ze={argTypes:qe(["i18n","id","locale","noCollapse","onExpand"]),component:u,subcomponents:{BreadcrumbItem:a,BreadcrumbLink:r},title:"React Components/Breadcrumb"},h={render:t=>e.createElement(u,{collapseThreshold:t.collapseThreshold,nbItemsAfterEllipsis:t.nbItemsAfterEllipsis,nbItemsBeforeEllipsis:t.nbItemsBeforeEllipsis},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 1")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 2")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 3")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page"))),argTypes:Ge({collapseThreshold:{table:{category:O.design}},nbItemsAfterEllipsis:{table:{category:O.design}},nbItemsBeforeEllipsis:{table:{category:O.design}}})},I={tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(T,{name:S.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},E={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},k={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{nbItemsBeforeEllipsis:1,nbItemsAfterEllipsis:4},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},L={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{collapseThreshold:7},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},g={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(T,{name:S.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},v={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{noCollapse:!0},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},C={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(T,{name:S.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},_={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,{"aria-label":"Breadcrumb"},e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(T,{name:S.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Category")),e.createElement(a,null,e.createElement(r,{href:"#"},"Subcategory")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page")))},y={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))};var F,$,U;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=($=h.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var Y,z,J;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(z=I.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,me;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(me=(te=L.parameters)==null?void 0:te.docs)==null?void 0:me.source}}};var ne,ce,de;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,se,ue;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var oe,ie,be;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(be=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:be.source}}};var Be,pe,fe;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(fe=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var he,Ie,Ee;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
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
}`,...(Ee=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};const Je=["Demo","AnatomyTech","Collapsed","CustomAfterBeforeCollapse","CustomCollapseThreshold","Default","NoCollapse","Overview","AccessibilityWithAriaLabel","ThemeGenerator"],dr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithAriaLabel:_,AnatomyTech:I,Collapsed:E,CustomAfterBeforeCollapse:k,CustomCollapseThreshold:L,Default:g,Demo:h,NoCollapse:v,Overview:C,ThemeGenerator:y,__namedExportsOrder:Je,default:ze},Symbol.toStringTag,{value:"Module"}));export{_ as A,dr as B,E as C,g as D,v as N,C as O,I as a,k as b,L as c};
