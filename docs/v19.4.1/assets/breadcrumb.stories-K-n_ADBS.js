import{r as d,e}from"./index-jIWwRBLr.js";import{j as s}from"./jsx-runtime-Cfl8ynUo.js";import{c as pe}from"./index-CqY9YpN0.js";import{a as fe}from"./element-3R7vFkDE.js";import{u as Te}from"./context-C_-r2uoG.js";import{L as B,u as Se}from"./useI18n-C0NLVYPv.js";import{L as xe}from"./Link-C-y4OBrb.js";import{I as A,a as H}from"./icon-name-BpdEc4-2.js";import{e as Ae,o as He,C as x}from"./controls-BtiQQn1l.js";const he=d.createContext(void 0);function Ie({children:t,i18n:n,locale:m}){return s.jsx(he.Provider,{value:{i18n:n,locale:m},children:t})}function Pe(){return Te(he)}Ie.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};function Ee(t,n,m,c){return t>=Math.max(1,m)&&t<n-Math.max(1,c)}function Oe(t,n,m,c){if(!c||t<=n+m+1)return null;for(let l=0;l<t;l++)if(Ee(l,t,n,m))return l;return null}var Le=(t=>(t.ellipsisButton="breadcrumb.ellipsis.button",t))(Le||{});const je={"breadcrumb.ellipsis.button":{[B.de]:"Breadcrumb-Links erweitern",[B.en]:"Expand Breadcrumb links",[B.es]:"Expandir enlaces de ruta de navegación",[B.fr]:"Développer les liens du fil d'Ariane",[B.it]:"Espandi i link di Breadcrumb",[B.nl]:"Breadcrumb-koppelingen uitvouwen",[B.pl]:"Rozwiń linki ścieżki nawigacyjnej",[B.pt]:"Expandir links Breadcrumb"}},De={"breadcrumb-separator":"_breadcrumb-separator_s0t1u_2"},N=()=>s.jsx("span",{className:De["breadcrumb-separator"],role:"presentation"});N.displayName="BreadcrumbSeparator";N.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",composes:["ComponentPropsWithoutRef"]};const M={"breadcrumb-ellipsis":"_breadcrumb-ellipsis_1x76u_2","breadcrumb-ellipsis__button":"_breadcrumb-ellipsis__button_1x76u_5"},P=({onExpand:t,...n})=>{const{i18n:m,locale:c}=Pe(),{translate:l}=Se(je,c,m);return s.jsxs("li",{className:M["breadcrumb-ellipsis"],children:[s.jsx("button",{...n,"aria-label":l(Le.ellipsisButton),className:M["breadcrumb-ellipsis__button"],onClick:t,type:"button",children:"..."}),s.jsx(N,{})]})};P.displayName="BreadcrumbEllipsis";P.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{onExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const we="_breadcrumb__list_1jn0o_2",G={breadcrumb__list:we},u=d.forwardRef(({children:t,className:n,collapseThreshold:m=4,i18n:c,id:l,locale:f,nbItemsAfterEllipsis:o=1,nbItemsBeforeEllipsis:i=1,noCollapse:b=!1,onExpand:O,...ke},ge)=>{const ve=d.useId(),j=l??ve,[T,Ce]=d.useState(b),D=fe(t),p=D.length,S=!T&&p>m;let w=!1;const[q,ye]=d.useState(null),_e=d.useMemo(()=>Oe(p,i,o,S),[p,i,o,S]),Re=D.reduce((_,Ne,R)=>S&&Ee(R,p,i,o)?(w||(_.push(s.jsx(P,{"aria-controls":j,onExpand:()=>{Ce(!0),ye(_e),O&&O()}},R)),w=!0),_):(_.push(d.cloneElement(Ne,{autoFocus:T&&q!==null&&R===q,isLast:p===R+1})),_),[]);return s.jsx(Ie,{i18n:c,locale:f,children:s.jsx("nav",{"aria-expanded":!b&&p>m?T:void 0,className:pe(G.breadcrumb,n),"data-ods":"breadcrumb",id:j,ref:ge,role:"navigation",...ke,children:s.jsx("ol",{className:G.breadcrumb__list,children:Re})})})});u.displayName="Breadcrumb";u.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{collapseThreshold:{required:!1,tsType:{name:"number"},description:"The number of items when the component will collapse to an ellipsis.",defaultValue:{value:"4",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"BREADCRUMB_I18N"},{name:"string"}],raw:"Record<BREADCRUMB_I18N, string>"}],raw:"Partial<Record<BREADCRUMB_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"Id for the breadcrumb nav (overrides auto-generated id)"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},nbItemsAfterEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display before the ellipsis.",defaultValue:{value:"1",computed:!1}},nbItemsBeforeEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display after the ellipsis.",defaultValue:{value:"1",computed:!1}},noCollapse:{required:!1,tsType:{name:"boolean"},description:"Whether the component should not collapse in an ellipsis regarding the number of items.",defaultValue:{value:"false",computed:!1}},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when an ellipsis is expanded."}},composes:["ComponentPropsWithRef"]};const r=d.forwardRef(function({as:n,autoFocus:m,isLast:c,...l},f){const o=d.useRef(null),i=d.useRef(null);if(d.useImperativeHandle(f,()=>c?i.current:o.current,[c]),d.useEffect(()=>{m&&o.current&&o.current.focus()},[m]),c)return s.jsx("span",{"aria-current":"page","data-ods":"breadcrumb-link",ref:i,...l});const b=n||xe;return s.jsx(b,{"data-ods":"breadcrumb-link",ref:o,...l})});r.displayName="BreadcrumbLink";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{as:{required:!1,tsType:{name:"T"},description:`@default-value='a'
Pass a component you may want to use as custom Link component.
Useful for example when using routing library like react-router.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}}};const qe={"breadcrumb-item":"_breadcrumb-item_15jgm_2"},a=d.forwardRef(({autoFocus:t,children:n,className:m,isLast:c,...l},f)=>{const i=fe(n).map(b=>b.type===r?d.cloneElement(b,{autoFocus:t,isLast:c}):b);return s.jsxs("li",{className:pe(qe["breadcrumb-item"],m),"data-ods":"breadcrumb-item",ref:f,...l,children:[i,!c&&s.jsx(N,{})]})});a.displayName="BreadcrumbItem";a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}},composes:["ComponentPropsWithRef"]};const Me={argTypes:Ae(["i18n","id","locale","noCollapse","onExpand"]),component:u,subcomponents:{BreadcrumbItem:a,BreadcrumbLink:r},title:"React Components/Breadcrumb"},h={render:t=>e.createElement(u,{collapseThreshold:t.collapseThreshold,nbItemsAfterEllipsis:t.nbItemsAfterEllipsis,nbItemsBeforeEllipsis:t.nbItemsBeforeEllipsis},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 1")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 2")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 3")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page"))),argTypes:He({collapseThreshold:{table:{category:x.design}},nbItemsAfterEllipsis:{table:{category:x.design}},nbItemsBeforeEllipsis:{table:{category:x.design}}})},I={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},E={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{nbItemsBeforeEllipsis:1,nbItemsAfterEllipsis:4},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},L={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{collapseThreshold:7},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},k={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(A,{name:H.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},g={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{noCollapse:!0},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},v={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(A,{name:H.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},C={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,{"aria-label":"Breadcrumb"},e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(A,{name:H.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Category")),e.createElement(a,null,e.createElement(r,{href:"#"},"Subcategory")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page")))},y={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))};var W,F,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var U,Y,$;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var z,J,K;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(J=E.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=L.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,me,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ne.source}}};var ce,de,le;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(de=v.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var se,ue,oe;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,be,Be;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(Be=(be=y.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};const Ge=["Demo","Collapsed","CustomAfterBeforeCollapse","CustomCollapseThreshold","Default","NoCollapse","Overview","AccessibilityWithAriaLabel","ThemeGenerator"],Xe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithAriaLabel:C,Collapsed:I,CustomAfterBeforeCollapse:E,CustomCollapseThreshold:L,Default:k,Demo:h,NoCollapse:g,Overview:v,ThemeGenerator:y,__namedExportsOrder:Ge,default:Me},Symbol.toStringTag,{value:"Module"}));export{C as A,Xe as B,I as C,k as D,g as N,v as O,E as a,L as b};
