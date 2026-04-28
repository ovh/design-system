import{r as d,e}from"./index-jIWwRBLr.js";import{j as s}from"./jsx-runtime-Cfl8ynUo.js";import{c as fe}from"./index-CqY9YpN0.js";import{a as he}from"./element-3R7vFkDE.js";import{u as Se}from"./context-C_-r2uoG.js";import{L as B,u as xe}from"./useI18n-C0NLVYPv.js";import{D as Ae,f as He,e as Oe}from"./divider-color-2AUX7hAv.js";import{L as Pe}from"./Link-C-y4OBrb.js";import{I as A,a as H}from"./icon-name-RfJfucZu.js";import{e as De,o as je,C as x}from"./controls-BtiQQn1l.js";const Ie=d.createContext(void 0);function Ee({children:t,i18n:n,locale:m}){return s.jsx(Ie.Provider,{value:{i18n:n,locale:m},children:t})}function we(){return Se(Ie)}Ee.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};function ke(t,n,m,c){return t>=Math.max(1,m)&&t<n-Math.max(1,c)}function qe(t,n,m,c){if(!c||t<=n+m+1)return null;for(let l=0;l<t;l++)if(ke(l,t,n,m))return l;return null}var Le=(t=>(t.ellipsisButton="breadcrumb.ellipsis.button",t))(Le||{});const Me={"breadcrumb.ellipsis.button":{[B.de]:"Breadcrumb-Links erweitern",[B.en]:"Expand Breadcrumb links",[B.es]:"Expandir enlaces de ruta de navegación",[B.fr]:"Développer les liens du fil d'Ariane",[B.it]:"Espandi i link di Breadcrumb",[B.nl]:"Breadcrumb-koppelingen uitvouwen",[B.pl]:"Rozwiń linki ścieżki nawigacyjnej",[B.pt]:"Expandir links Breadcrumb"}},Ge={"breadcrumb-separator":"_breadcrumb-separator_hnz6k_2"},N=()=>s.jsx(Ae,{className:Ge["breadcrumb-separator"],orientation:Oe.vertical,spacing:He._24});N.displayName="BreadcrumbSeparator";N.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",composes:["ComponentPropsWithoutRef"]};const G={"breadcrumb-ellipsis":"_breadcrumb-ellipsis_1x76u_2","breadcrumb-ellipsis__button":"_breadcrumb-ellipsis__button_1x76u_5"},O=({onExpand:t,...n})=>{const{i18n:m,locale:c}=we(),{translate:l}=xe(Me,c,m);return s.jsxs("li",{className:G["breadcrumb-ellipsis"],children:[s.jsx("button",{...n,"aria-label":l(Le.ellipsisButton),className:G["breadcrumb-ellipsis__button"],onClick:t,type:"button",children:"..."}),s.jsx(N,{})]})};O.displayName="BreadcrumbEllipsis";O.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{onExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const Ve="_breadcrumb__list_1jn0o_2",V={breadcrumb__list:Ve},P=d.forwardRef(({children:t,className:n,collapseThreshold:m=4,i18n:c,id:l,locale:f,nbItemsAfterEllipsis:o=1,nbItemsBeforeEllipsis:i=1,noCollapse:b=!1,onExpand:D,...ge},ve)=>{const Ce=d.useId(),j=l??Ce,[T,_e]=d.useState(b),w=he(t),p=w.length,S=!T&&p>m;let q=!1;const[M,ye]=d.useState(null),Re=d.useMemo(()=>qe(p,i,o,S),[p,i,o,S]),Ne=w.reduce((y,Te,R)=>S&&ke(R,p,i,o)?(q||(y.push(s.jsx(O,{"aria-controls":j,onExpand:()=>{_e(!0),ye(Re),D&&D()}},R)),q=!0),y):(y.push(d.cloneElement(Te,{autoFocus:T&&M!==null&&R===M,isLast:p===R+1})),y),[]);return s.jsx(Ee,{i18n:c,locale:f,children:s.jsx("nav",{"aria-expanded":!b&&p>m?T:void 0,className:fe(V.breadcrumb,n),"data-ods":"breadcrumb",id:j,ref:ve,role:"navigation",...ge,children:s.jsx("ol",{className:V.breadcrumb__list,children:Ne})})})});P.displayName="Breadcrumb";P.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{collapseThreshold:{required:!1,tsType:{name:"number"},description:"The number of items when the component will collapse to an ellipsis.",defaultValue:{value:"4",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"BREADCRUMB_I18N"},{name:"string"}],raw:"Record<BREADCRUMB_I18N, string>"}],raw:"Partial<Record<BREADCRUMB_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"Id for the breadcrumb nav (overrides auto-generated id)"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},nbItemsAfterEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display before the ellipsis.",defaultValue:{value:"1",computed:!1}},nbItemsBeforeEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display after the ellipsis.",defaultValue:{value:"1",computed:!1}},noCollapse:{required:!1,tsType:{name:"boolean"},description:"Whether the component should not collapse in an ellipsis regarding the number of items.",defaultValue:{value:"false",computed:!1}},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when an ellipsis is expanded."}},composes:["ComponentPropsWithRef"]};const r=d.forwardRef(function({as:n,autoFocus:m,isLast:c,...l},f){const o=d.useRef(null),i=d.useRef(null);if(d.useImperativeHandle(f,()=>c?i.current:o.current,[c]),d.useEffect(()=>{m&&o.current&&o.current.focus()},[m]),c)return s.jsx("span",{"aria-current":"page","data-ods":"breadcrumb-link",ref:i,...l});const b=n||Pe;return s.jsx(b,{"data-ods":"breadcrumb-link",ref:o,...l})});r.displayName="BreadcrumbLink";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{as:{required:!1,tsType:{name:"T"},description:`@default-value='a'
Pass a component you may want to use as custom Link component.
Useful for example when using routing library like react-router.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}}};const We={"breadcrumb-item":"_breadcrumb-item_15jgm_2"},a=d.forwardRef(({autoFocus:t,children:n,className:m,isLast:c,...l},f)=>{const i=he(n).map(b=>b.type===r?d.cloneElement(b,{autoFocus:t,isLast:c}):b);return s.jsxs("li",{className:fe(We["breadcrumb-item"],m),"data-ods":"breadcrumb-item",ref:f,...l,children:[i,!c&&s.jsx(N,{})]})});a.displayName="BreadcrumbItem";a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}},composes:["ComponentPropsWithRef"]};const u=Object.assign(P,{Item:a,Link:r}),Fe={argTypes:De(["i18n","id","locale","noCollapse","onExpand"]),component:u,subcomponents:{BreadcrumbItem:a,BreadcrumbLink:r},title:"React Components/Breadcrumb"},h={render:t=>e.createElement(u,{collapseThreshold:t.collapseThreshold,nbItemsAfterEllipsis:t.nbItemsAfterEllipsis,nbItemsBeforeEllipsis:t.nbItemsBeforeEllipsis},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 1")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 2")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 3")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page"))),argTypes:je({collapseThreshold:{table:{category:x.design}},nbItemsAfterEllipsis:{table:{category:x.design}},nbItemsBeforeEllipsis:{table:{category:x.design}}})},I={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},E={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{nbItemsBeforeEllipsis:1,nbItemsAfterEllipsis:4},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},k={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{collapseThreshold:7},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},L={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(A,{name:H.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},g={globals:{imports:"import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{noCollapse:!0},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},v={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(A,{name:H.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},C={globals:{imports:"import { ICON_NAME, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,{"aria-label":"Breadcrumb"},e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(A,{name:H.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Category")),e.createElement(a,null,e.createElement(r,{href:"#"},"Subcategory")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page")))},_={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))};var W,F,$;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(F=h.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var U,Y,z;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var J,K,Q;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(te=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var me,ne,ce;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ce=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,le,se;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(se=(le=v.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ue,oe,ie;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ie=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var be,Be,pe;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(pe=(Be=_.parameters)==null?void 0:Be.docs)==null?void 0:pe.source}}};const $e=["Demo","Collapsed","CustomAfterBeforeCollapse","CustomCollapseThreshold","Default","NoCollapse","Overview","AccessibilityWithAriaLabel","ThemeGenerator"],tr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithAriaLabel:C,Collapsed:I,CustomAfterBeforeCollapse:E,CustomCollapseThreshold:k,Default:L,Demo:h,NoCollapse:g,Overview:v,ThemeGenerator:_,__namedExportsOrder:$e,default:Fe},Symbol.toStringTag,{value:"Module"}));export{C as A,tr as B,I as C,L as D,g as N,v as O,E as a,k as b};
