import{r as p,e as P}from"./index-jIWwRBLr.js";import{j as r}from"./jsx-runtime-Cfl8ynUo.js";import{c as ke}from"./index-CqY9YpN0.js";import{B as U,d as G}from"./Button-Tqe-VRSF.js";import{I as ee,a as te}from"./icon-name-C581wThh.js";import{b as Fe,T as Ye,a as We}from"./TooltipTrigger-CT3e8Irz.js";import{c as Be,a as H,T as w,U as q,P as X,Q as Ue,C as J,z as Xe,ae,u as Ze,R as Qe,D as He,S as Je}from"./use-locale-context-BIV2aQtl.js";import{b as Ke,S as et,a as tt}from"./SelectControl-TvkHg2JI.js";import{e as at,o as nt,C as h}from"./controls-BtiQQn1l.js";import{s as Ae}from"./source-CPEZJ6oD.js";const[ot,T]=Be({name:"PaginationContext",hookName:"usePaginationContext",providerName:"<PaginationProvider />"}),rt=e=>e.children(T()),Ge=p.forwardRef((e,t)=>{const[a,n]=H()(e,["index"]),o=T(),s=w(o.getEllipsisProps(a),n);return r.jsx(q.div,{...s,ref:t})});Ge.displayName="PaginationEllipsis";const we=p.forwardRef((e,t)=>{const[a,n]=H()(e,["value","type"]),o=T(),s=w(o.getItemProps(a),n);return r.jsx(q.button,{...s,ref:t})});we.displayName="PaginationItem";const qe=p.forwardRef((e,t)=>{const a=T(),n=w(a.getNextTriggerProps(),e);return r.jsx(q.button,{...n,ref:t})});qe.displayName="PaginationNextTrigger";const Ve=p.forwardRef((e,t)=>{const a=T(),n=w(a.getPrevTriggerProps(),e);return r.jsx(q.button,{...n,ref:t})});Ve.displayName="PaginationPrevTrigger";var st=Ue("pagination").parts("root","item","ellipsis","prevTrigger","nextTrigger"),I=st.build(),it=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`pagination:${e.id}`},gt=e=>{var t;return((t=e.ids)==null?void 0:t.prevTrigger)??`pagination:${e.id}:prev`},lt=e=>{var t;return((t=e.ids)==null?void 0:t.nextTrigger)??`pagination:${e.id}:next`},pt=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.ellipsis)==null?void 0:n.call(a,t))??`pagination:${e.id}:ellipsis:${t}`},ct=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.item)==null?void 0:n.call(a,t))??`pagination:${e.id}:item:${t}`},W=(e,t)=>{let a=t-e+1;return Array.from({length:a},(n,o)=>o+e)},dt=e=>e.map(t=>typeof t=="number"?{type:"page",value:t}:{type:"ellipsis"}),B="ellipsis",mt=e=>{const{page:t,totalPages:a,siblingCount:n}=e,o=Math.min(2*n+5,a),s=1,i=a,d=Math.max(t-n,s),m=Math.min(t+n,i),l=d>s+1,b=m<i-1,f=o-2;if(!l&&b)return[...W(1,f),B,i];if(l&&!b){const u=W(i-f+1,i);return[s,B,...u]}if(l&&b){const u=W(d,m);return[s,B,...u,B,i]}return W(s,i)},ut=e=>dt(mt(e));function Pt(e,t){const{send:a,scope:n,prop:o,computed:s,context:i}=e,d=s("totalPages"),m=i.get("page"),l=o("translations"),b=o("count"),f=s("previousPage"),V=s("nextPage"),u=s("pageRange"),S=o("type")==="button",$=m===1,D=m===d,M=ut({page:m,totalPages:d,siblingCount:o("siblingCount")});return{count:b,page:m,pageSize:i.get("pageSize"),totalPages:d,pages:M,previousPage:f,nextPage:V,pageRange:u,slice(g){return g.slice(u.start,u.end)},setPageSize(g){a({type:"SET_PAGE_SIZE",size:g})},setPage(g){a({type:"SET_PAGE",page:g})},goToNextPage(){a({type:"NEXT_PAGE"})},goToPrevPage(){a({type:"PREVIOUS_PAGE"})},goToFirstPage(){a({type:"FIRST_PAGE"})},goToLastPage(){a({type:"LAST_PAGE"})},getRootProps(){return t.element({id:it(n),...I.root.attrs,dir:o("dir"),"aria-label":l.rootLabel})},getEllipsisProps(g){return t.element({id:pt(n,g.index),...I.ellipsis.attrs,dir:o("dir")})},getItemProps(g){var F;const v=g.value,k=v===m;return t.element({id:ct(n,v),...I.item.attrs,dir:o("dir"),"data-index":v,"data-selected":X(k),"aria-current":k?"page":void 0,"aria-label":(F=l.itemLabel)==null?void 0:F.call(l,{page:v,totalPages:d}),onClick(){a({type:"SET_PAGE",page:v})},...S&&{type:"button"}})},getPrevTriggerProps(){return t.element({id:gt(n),...I.prevTrigger.attrs,dir:o("dir"),"data-disabled":X($),"aria-label":l.prevTriggerLabel,onClick(){a({type:"PREVIOUS_PAGE"})},...S&&{disabled:$,type:"button"}})},getNextTriggerProps(){return t.element({id:lt(n),...I.nextTrigger.attrs,dir:o("dir"),"data-disabled":X(D),"aria-label":l.nextTriggerLabel,onClick(){a({type:"NEXT_PAGE"})},...S&&{disabled:D,type:"button"}})}}}var bt=Xe({props({props:e}){return{defaultPageSize:10,siblingCount:1,defaultPage:1,type:"button",count:1,...e,translations:{rootLabel:"pagination",prevTriggerLabel:"previous page",nextTriggerLabel:"next page",itemLabel({page:t,totalPages:a}){return`${a>1&&t===a?"last page, ":""}page ${t}`},...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{page:t(()=>({value:e("page"),defaultValue:e("defaultPage"),onChange(n){var s;const o=a();(s=e("onPageChange"))==null||s({page:n,pageSize:o.get("pageSize")})}})),pageSize:t(()=>({value:e("pageSize"),defaultValue:e("defaultPageSize"),onChange(n){var o;(o=e("onPageSizeChange"))==null||o({pageSize:n})}}))}},watch({track:e,context:t,action:a}){e([()=>t.get("pageSize")],()=>{a(["setPageIfNeeded"])})},computed:{totalPages:ae(({prop:e,context:t})=>[t.get("pageSize"),e("count")],([e,t])=>Math.ceil(t/e)),pageRange:ae(({context:e,prop:t})=>[e.get("page"),e.get("pageSize"),t("count")],([e,t,a])=>{const n=(e-1)*t;return{start:n,end:Math.min(n+t,a)}}),previousPage:({context:e})=>e.get("page")===1?null:e.get("page")-1,nextPage:({context:e,computed:t})=>e.get("page")===t("totalPages")?null:e.get("page")+1,isValidPage:({context:e,computed:t})=>e.get("page")>=1&&e.get("page")<=t("totalPages")},on:{SET_PAGE:{guard:"isValidPage",actions:["setPage"]},SET_PAGE_SIZE:{actions:["setPageSize"]},FIRST_PAGE:{actions:["goToFirstPage"]},LAST_PAGE:{actions:["goToLastPage"]},PREVIOUS_PAGE:{guard:"canGoToPrevPage",actions:["goToPrevPage"]},NEXT_PAGE:{guard:"canGoToNextPage",actions:["goToNextPage"]}},states:{idle:{}},implementations:{guards:{isValidPage:({event:e,computed:t})=>e.page>=1&&e.page<=t("totalPages"),isValidCount:({context:e,event:t})=>e.get("page")>t.count,canGoToNextPage:({context:e,computed:t})=>e.get("page")<t("totalPages"),canGoToPrevPage:({context:e})=>e.get("page")>1},actions:{setPage({context:e,event:t,computed:a}){const n=Z(t.page,a("totalPages"));e.set("page",n)},setPageSize({context:e,event:t}){e.set("pageSize",t.size)},goToFirstPage({context:e}){e.set("page",1)},goToLastPage({context:e,computed:t}){e.set("page",t("totalPages"))},goToPrevPage({context:e,computed:t}){e.set("page",a=>Z(a-1,t("totalPages")))},goToNextPage({context:e,computed:t}){e.set("page",a=>Z(a+1,t("totalPages")))},setPageIfNeeded({context:e,computed:t}){t("isValidPage")||e.set("page",1)}}}}),Z=(e,t)=>Math.min(Math.max(e,1),t);J()(["count","dir","getRootNode","id","ids","onPageChange","onPageSizeChange","page","defaultPage","pageSize","defaultPageSize","siblingCount","translations","type"]);J()(["value","type"]);J()(["index"]);const ht=e=>{const t=p.useId(),{getRootNode:a}=Ze(),{dir:n}=Qe(),o={id:t,dir:n,getRootNode:a,...e},s=He(bt,o);return Pt(s,Je)},$e=p.forwardRef((e,t)=>{const[a,n]=H()(e,["count","defaultPage","defaultPageSize","id","ids","onPageChange","onPageSizeChange","page","pageSize","siblingCount","translations","type"]),o=ht(a),s=w(o.getRootProps(),n);return r.jsx(ot,{value:o,children:r.jsx(q.nav,{...s,ref:t})})});$e.displayName="PaginationRoot";const Q=({children:e,tooltip:t})=>t?r.jsxs(Fe,{children:[r.jsx(Ye,{asChild:!0,children:e}),r.jsx(We,{children:t})]}):r.jsx(r.Fragment,{children:e});Q.__docgenInfo={description:"",methods:[],displayName:"PaginationButtonWithTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const vt="_pagination__item_i63de_1",Tt={pagination__item:vt},De=({disabled:e,index:t,page:a})=>{const{page:n}=T();return r.jsx(we,{type:"page",asChild:!0,className:Tt.pagination__item,...a,children:r.jsx(U,{disabled:e,variant:n===a.value?G.default:G.ghost,children:a.value})},t)};De.__docgenInfo={description:"",methods:[],displayName:"PaginationItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: number;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}},description:""}}};const ft=Object.freeze([{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"100",value:"100"},{label:"300",value:"300"}]),ne={"pagination-page-size-selector":"_pagination-page-size-selector_1cj93_2","pagination-page-size-selector__label":"_pagination-page-size-selector__label_1cj93_7"},Me=({onSelectChange:e,renderTotalItemsLabel:t})=>{const{count:a,pageSize:n}=T(),o=p.useId(),s=i=>{e&&i.value[0]&&e(i.value[0])};return r.jsxs("div",{className:ne["pagination-page-size-selector"],children:[r.jsxs(Ke,{defaultValue:[n.toString()],items:ft,onValueChange:s,children:[r.jsx(et,{"aria-labelledby":o}),r.jsx(tt,{})]}),r.jsx("p",{className:ne["pagination-page-size-selector__label"],id:o,children:t({totalItems:a})})]})};Me.__docgenInfo={description:"",methods:[],displayName:"PaginationPageSizeSelector",props:{onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},renderTotalItemsLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""}}};const St="_pagination_6qm34_2",yt={pagination:St},Ct=({totalItems:e})=>`of ${e} results`,c=p.forwardRef(({className:e,disabled:t,defaultPage:a,labelTooltipNext:n,labelTooltipPrev:o,onPageChange:s,onPageSizeChange:i,page:d,pageSize:m=10,siblingCount:l,totalItems:b,renderTotalItemsLabel:f=Ct,withPageSizeSelector:V,...u},K)=>{const[S,$]=p.useState(m),[D,M]=p.useState(a??1),g=d!==void 0,v=g&&d?d:D;p.useEffect(()=>{g||M(a??1)},[b,S,a,g]);const k=y=>{g||M(y.page),s==null||s(y)},F=y=>{const C=Number(y);$(C),i==null||i({pageSize:C})};return r.jsxs($e,{className:ke(yt.pagination,e),count:b,"data-ods":"pagination",defaultPage:a,onPageChange:k,page:v,pageSize:S,ref:K,siblingCount:l,...u,children:[V&&r.jsx(Me,{onSelectChange:F,renderTotalItemsLabel:f}),r.jsx(Q,{tooltip:o,children:r.jsx(Ve,{asChild:!0,children:r.jsx(U,{disabled:t,variant:G.ghost,children:r.jsx(ee,{name:te.chevronLeft})})})}),r.jsx(rt,{children:y=>y.pages.map((C,Y)=>C.type==="page"?r.jsx(De,{page:C,index:Y,disabled:t},Y):r.jsx(Ge,{asChild:!0,index:Y,children:r.jsx(U,{disabled:!0,variant:G.ghost,children:"…"})},Y))}),r.jsx(Q,{tooltip:n,children:r.jsx(qe,{asChild:!0,children:r.jsx(U,{disabled:t,variant:G.ghost,children:r.jsx(ee,{name:te.chevronRight})})})})]})});c.displayName="Pagination";c.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},defaultPage:{required:!1,tsType:{name:"number"},description:"The initial active page. Use when you don't need to control the active page of the pagination."},labelTooltipNext:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "next page" button.'},labelTooltipPrev:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "previous page" button.'},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the active page changes."},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageSizeChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageSizeChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the page size changes."},page:{required:!1,tsType:{name:"number"},description:"The controlled active page"},pageSize:{required:!1,tsType:{name:"number"},description:"The number of items per page.",defaultValue:{value:"10",computed:!1}},renderTotalItemsLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"Format the label displayed near the per-page selector.",defaultValue:{value:"({ totalItems }) => `of ${totalItems} results`",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"The number of pages to show beside active page."},totalItems:{required:!0,tsType:{name:"number"},description:"The total number of items."},withPageSizeSelector:{required:!1,tsType:{name:"boolean"},description:"Whether the per-page selector is displayed."}},composes:["ComponentPropsWithRef"]};const It={argTypes:at(["defaultPage","onPageChange","onPageSizeChange","page","pageSize","renderTotalItemsLabel"]),component:c,title:"React Components/Pagination"},x={argTypes:nt({disabled:{table:{category:h.general}},labelTooltipNext:{table:{category:h.general}},labelTooltipPrev:{table:{category:h.general}},pageSize:{table:{category:h.general}},page:{table:{category:h.general}},siblingCount:{table:{category:h.general}},totalItems:{table:{category:h.general}},withPageSizeSelector:{table:{category:h.general}}}),args:{totalItems:5e3}},_={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>P.createElement(c,{"aria-label":"Pagination",totalItems:5e3})},E={globals:{imports:`import { Pagination } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Ae()}}},render:({})=>{const[e,t]=p.useState(1);function a({page:n}){t(n)}return P.createElement(c,{onPageChange:a,page:e,totalItems:500})}},R={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>P.createElement(c,{totalItems:5e3})},N={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>P.createElement(c,{disabled:!0,totalItems:500})},z={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>P.createElement(c,{pageSize:25,totalItems:500})},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>P.createElement(c,{totalItems:100,withPageSizeSelector:!0})},j={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>P.createElement(c,{defaultPage:5,siblingCount:2,totalItems:500})},L={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>P.createElement(c,{labelTooltipPrev:"Go to previous page",labelTooltipNext:"Go to next page",totalItems:500})},A={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ae()}}},render:({})=>P.createElement(c,{renderTotalItemsLabel:({totalItems:e})=>`of ${e} results`,totalItems:500,withPageSizeSelector:!0})};var oe,re,se;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    labelTooltipNext: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    labelTooltipPrev: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    pageSize: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    page: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    siblingCount: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    totalItems: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    withPageSizeSelector: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    }
  }),
  args: {
    totalItems: 5000
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ge,le;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination aria-label="Pagination" totalItems={5000} />
}`,...(le=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:le.source}}};var pe,ce,de;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [page, setPage] = useState(1);
    function handlePageChange({
      page
    }: PaginationPageChangeDetail) {
      setPage(page);
    }
    return <Pagination onPageChange={handlePageChange} page={page} totalItems={500} />;
  }
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,Pe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={5000} />
}`,...(Pe=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:Pe.source}}};var be,he,ve;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination disabled totalItems={500} />
}`,...(ve=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Te,fe,Se;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination pageSize={25} totalItems={500} />
}`,...(Se=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ye,Ce,Ie;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Pagination totalItems={100} withPageSizeSelector />
}`,...(Ie=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var xe,_e,Ee;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination defaultPage={5} siblingCount={2} totalItems={500} />
}`,...(Ee=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var Re,Ne,ze;L.parameters={...L.parameters,docs:{...(Re=L.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination labelTooltipPrev={'Go to previous page'} labelTooltipNext={'Go to next page'} totalItems={500} />
}`,...(ze=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};var Oe,je,Le;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <Pagination renderTotalItemsLabel={({
    totalItems
  }) => \`of \${totalItems} results\`} totalItems={500} withPageSizeSelector />
}`,...(Le=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};const xt=["Demo","AccessibilityLabel","Controlled","Default","Disabled","ItemsPerPage","Overview","SiblingCount","WithLabels","TotalItems"],wt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:_,Controlled:E,Default:R,Demo:x,Disabled:N,ItemsPerPage:z,Overview:O,SiblingCount:j,TotalItems:A,WithLabels:L,__namedExportsOrder:xt,default:It},Symbol.toStringTag,{value:"Module"}));export{_ as A,E as C,R as D,z as I,O,wt as P,j as S,A as T,L as W,N as a};
