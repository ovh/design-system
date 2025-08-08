import{r as m,e}from"./index-D_CmzhJ4.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{c as oe}from"./index-CkQHsVsO.js";import{a as ie}from"./element-BmbJTp3e.js";import{L as p,u as _e}from"./useI18n-CFuCjRRO.js";import{L as ve}from"./Link-CQBDxF2D.js";import{I as S,a as A}from"./icon-name-CL_C5kfn.js";import{e as Re,o as Te,C as x}from"./controls-BtiQQn1l.js";const be=m.createContext({});function pe({children:t,i18n:c,locale:n}){return d.jsx(be.Provider,{value:{i18n:c,locale:n},children:t})}function Ne(){return m.useContext(be)}pe.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["BreadcrumbContextType"]};function Be(t,c,n,l){return t>=Math.max(1,n)&&t<c-Math.max(1,l)}function xe(t,c,n,l){if(!l||t<=c+n+1)return null;for(let s=0;s<t;s++)if(Be(s,t,c,n))return s;return null}var fe=(t=>(t.ellipsisButton="breadcrumb.ellipsis.button",t))(fe||{});const Se={"breadcrumb.ellipsis.button":{[p.de]:"Breadcrumb-Links erweitern",[p.en]:"Expand Breadcrumb links",[p.es]:"Expandir enlaces de ruta de navegación",[p.fr]:"Développer les liens du fil d'Ariane",[p.it]:"Espandi i link di Breadcrumb",[p.nl]:"Breadcrumb-koppelingen uitvouwen",[p.pl]:"Rozwiń linki ścieżki nawigacyjnej",[p.pt]:"Expandir links Breadcrumb"}},Ae={"breadcrumb-separator":"_breadcrumb-separator_8bc5w_11"},R=()=>d.jsx("span",{className:Ae["breadcrumb-separator"],role:"presentation"});R.displayName="BreadcrumbSeparator";R.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",composes:["ComponentPropsWithoutRef"]};const q={"breadcrumb-ellipsis":"_breadcrumb-ellipsis_1nzj2_2","breadcrumb-ellipsis__button":"_breadcrumb-ellipsis__button_1nzj2_5"},P=({onExpand:t,...c})=>{const{i18n:n,locale:l}=Ne(),{translate:s}=_e(Se,l,n);return d.jsxs("li",{className:q["breadcrumb-ellipsis"],children:[d.jsx("button",{...c,"aria-label":s(fe.ellipsisButton),className:q["breadcrumb-ellipsis__button"],onClick:t,type:"button",children:"..."}),d.jsx(R,{})]})};P.displayName="BreadcrumbEllipsis";P.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{onExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const Pe="_breadcrumb__list_1jn0o_2",M={breadcrumb__list:Pe},u=m.forwardRef(({children:t,className:c,collapseThreshold:n=4,i18n:l,id:s,locale:f,nbItemsAfterEllipsis:o=1,nbItemsBeforeEllipsis:i=1,noCollapse:b=!1,onExpand:H,...he},Ee)=>{const Ie=m.useId(),O=s??Ie,[T,Le]=m.useState(b),j=ie(t),B=j.length,N=!T&&B>n;let w=!1;const[D,ke]=m.useState(null),ge=m.useMemo(()=>xe(B,i,o,N),[B,i,o,N]),Ce=j.reduce((_,ye,v)=>N&&Be(v,B,i,o)?(w||(_.push(d.jsx(P,{"aria-controls":O,onExpand:()=>{Le(!0),ke(ge),H&&H()}},v)),w=!0),_):(_.push(m.cloneElement(ye,{autoFocus:T&&D!==null&&v===D,isLast:B===v+1})),_),[]);return d.jsx(pe,{i18n:l,locale:f,children:d.jsx("nav",{"aria-expanded":!b&&B>n?T:void 0,className:oe(M.breadcrumb,c),"data-ods":"breadcrumb",id:O,ref:Ee,role:"navigation",...he,children:d.jsx("ol",{className:M.breadcrumb__list,children:Ce})})})});u.displayName="Breadcrumb";u.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{collapseThreshold:{required:!1,tsType:{name:"number"},description:"The number of items when the component will collapse to an ellipsis.",defaultValue:{value:"4",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"BREADCRUMB_I18N"},{name:"string"}],raw:"Record<BREADCRUMB_I18N, string>"}],raw:"Partial<Record<BREADCRUMB_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"Id for the breadcrumb nav (overrides auto-generated id)"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},nbItemsAfterEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display before the ellipsis.",defaultValue:{value:"1",computed:!1}},nbItemsBeforeEllipsis:{required:!1,tsType:{name:"number"},description:"The number of items to display after the ellipsis.",defaultValue:{value:"1",computed:!1}},noCollapse:{required:!1,tsType:{name:"boolean"},description:"Whether the component should not collapse in an ellipsis regarding the number of items.",defaultValue:{value:"false",computed:!1}},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when an ellipsis is expanded."}},composes:["ComponentPropsWithRef"]};const r=m.forwardRef(function({as:c,autoFocus:n,isLast:l,...s},f){const o=m.useRef(null),i=m.useRef(null);if(m.useImperativeHandle(f,()=>l?i.current:o.current,[l]),m.useEffect(()=>{n&&o.current&&o.current.focus()},[n]),l)return d.jsx("span",{"aria-current":"page","data-ods":"breadcrumb-link",ref:i,...s});const b=c||ve;return d.jsx(b,{"data-ods":"breadcrumb-link",ref:o,...s})});r.displayName="BreadcrumbLink";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{as:{required:!1,tsType:{name:"T"},description:`@default-value='a'
Pass a component you may want to use as custom Link component.
Useful for example when using routing library like react-router.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}}};const He={"breadcrumb-item":"_breadcrumb-item_1bnix_2"},a=m.forwardRef(({autoFocus:t,children:c,className:n,isLast:l,...s},f)=>{const i=ie(c).map(b=>b.type===r?m.cloneElement(b,{autoFocus:t,isLast:l}):b);return d.jsxs("li",{className:oe(He["breadcrumb-item"],n),"data-ods":"breadcrumb-item",ref:f,role:"listitem",...s,children:[i,!l&&d.jsx(R,{})]})});a.displayName="BreadcrumbItem";a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{autoFocus:{required:!1,tsType:{name:"boolean"},description:"@internal"},isLast:{required:!1,tsType:{name:"boolean"},description:"@internal"}},composes:["ComponentPropsWithRef"]};const Oe={argTypes:Re(["i18n","id","locale","noCollapse","onExpand"]),component:u,subcomponents:{BreadcrumbItem:a,BreadcrumbLink:r},title:"React Components/Breadcrumb"},h={render:t=>e.createElement(u,{collapseThreshold:t.collapseThreshold,nbItemsAfterEllipsis:t.nbItemsAfterEllipsis,nbItemsBeforeEllipsis:t.nbItemsBeforeEllipsis},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 1")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 2")),e.createElement(a,null,e.createElement(r,{href:"#"},"Page 3")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page"))),argTypes:Te({collapseThreshold:{table:{category:x.design}},nbItemsAfterEllipsis:{table:{category:x.design}},nbItemsBeforeEllipsis:{table:{category:x.design}}})},E={tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Homepage",href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},I={tags:["!dev"],render:({})=>e.createElement(u,{nbItemsBeforeEllipsis:1,nbItemsAfterEllipsis:4},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},L={tags:["!dev"],render:({})=>e.createElement(u,{collapseThreshold:7},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},k={tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(S,{name:A.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},g={tags:["!dev"],render:({})=>e.createElement(u,{noCollapse:!0},e.createElement(a,null,e.createElement(r,{href:"#"},"Home")),e.createElement(a,null,e.createElement(r,{href:"#"},"Products")),e.createElement(a,null,e.createElement(r,{href:"#"},"Hosting")),e.createElement(a,null,e.createElement(r,{href:"#"},"Servers")),e.createElement(a,null,e.createElement(r,{href:"#"},"Dedicated")),e.createElement(a,null,e.createElement(r,{href:"#"},"Rise")),e.createElement(a,null,e.createElement(r,{href:"#"},"RISE-2")))},C={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,null,e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(S,{name:A.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Parent")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current")))},y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,{"aria-label":"Breadcrumb"},e.createElement(a,null,e.createElement(r,{"aria-label":"Home",href:"#"},e.createElement(S,{name:A.home}))),e.createElement(a,null,e.createElement(r,{href:"#"},"Category")),e.createElement(a,null,e.createElement(r,{href:"#"},"Subcategory")),e.createElement(a,null,e.createElement(r,{href:"#"},"Current page")))};var W,F,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var z,G,U;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(G=E.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,$,J;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=($=I.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,X;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(re=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var me,ce,le;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(le=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var se,de,ue;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const je=["Demo","Collapsed","CustomAfterBeforeCollapse","CustomCollapseThreshold","Default","NoCollapse","Overview","AccessibilityWithAriaLabel"],Ue=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithAriaLabel:y,Collapsed:E,CustomAfterBeforeCollapse:I,CustomCollapseThreshold:L,Default:k,Demo:h,NoCollapse:g,Overview:C,__namedExportsOrder:je,default:Oe},Symbol.toStringTag,{value:"Module"}));export{y as A,Ue as B,E as C,k as D,g as N,C as O,I as a,L as b};
