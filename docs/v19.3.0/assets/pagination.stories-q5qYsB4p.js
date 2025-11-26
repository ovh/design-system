import{r as d,e as p}from"./index-jIWwRBLr.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as Be}from"./index-CqY9YpN0.js";import{B as X,d as w}from"./Button-B-GJ-1TA.js";import{I as te,a as ae}from"./icon-name-C581wThh.js";import{b as Ue,T as Xe,a as Ze}from"./TooltipTrigger-CtwhYrHp.js";import{c as Qe,a as J,T as q,U as V,P as Z,Q as He,C as K,z as Je,ae as ne,u as Ke,R as et,D as tt,S as at}from"./use-locale-context-6s5qsrWI.js";import{b as nt,S as rt,a as ot}from"./SelectControl-BYYgJB15.js";import{e as st,o as it,C as b}from"./controls-BtiQQn1l.js";import{s as Ve}from"./source-CPEZJ6oD.js";const[gt,T]=Qe({name:"PaginationContext",hookName:"usePaginationContext",providerName:"<PaginationProvider />"}),lt=e=>e.children(T()),De=d.forwardRef((e,t)=>{const[a,n]=J()(e,["index"]),r=T(),s=q(r.getEllipsisProps(a),n);return o.jsx(V.div,{...s,ref:t})});De.displayName="PaginationEllipsis";const $e=d.forwardRef((e,t)=>{const[a,n]=J()(e,["value","type"]),r=T(),s=q(r.getItemProps(a),n);return o.jsx(V.button,{...s,ref:t})});$e.displayName="PaginationItem";const Me=d.forwardRef((e,t)=>{const a=T(),n=q(a.getNextTriggerProps(),e);return o.jsx(V.button,{...n,ref:t})});Me.displayName="PaginationNextTrigger";const ke=d.forwardRef((e,t)=>{const a=T(),n=q(a.getPrevTriggerProps(),e);return o.jsx(V.button,{...n,ref:t})});ke.displayName="PaginationPrevTrigger";var pt=He("pagination").parts("root","item","ellipsis","prevTrigger","nextTrigger"),C=pt.build(),ct=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`pagination:${e.id}`},dt=e=>{var t;return((t=e.ids)==null?void 0:t.prevTrigger)??`pagination:${e.id}:prev`},mt=e=>{var t;return((t=e.ids)==null?void 0:t.nextTrigger)??`pagination:${e.id}:next`},ut=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.ellipsis)==null?void 0:n.call(a,t))??`pagination:${e.id}:ellipsis:${t}`},Pt=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.item)==null?void 0:n.call(a,t))??`pagination:${e.id}:item:${t}`},B=(e,t)=>{let a=t-e+1;return Array.from({length:a},(n,r)=>r+e)},bt=e=>e.map(t=>typeof t=="number"?{type:"page",value:t}:{type:"ellipsis"}),U="ellipsis",ht=e=>{const{page:t,totalPages:a,siblingCount:n}=e,r=Math.min(2*n+5,a),s=1,i=a,m=Math.max(t-n,s),u=Math.min(t+n,i),c=m>s+1,h=u<i-1,f=r-2;if(!c&&h)return[...B(1,f),U,i];if(c&&!h){const P=B(i-f+1,i);return[s,U,...P]}if(c&&h){const P=B(m,u);return[s,U,...P,U,i]}return B(s,i)},ft=e=>bt(ht(e));function vt(e,t){const{send:a,scope:n,prop:r,computed:s,context:i}=e,m=s("totalPages"),u=i.get("page"),c=r("translations"),h=r("count"),f=s("previousPage"),D=s("nextPage"),P=s("pageRange"),S=r("type")==="button",$=u===1,M=u===m,k=ft({page:u,totalPages:m,siblingCount:r("siblingCount")});return{count:h,page:u,pageSize:i.get("pageSize"),totalPages:m,pages:k,previousPage:f,nextPage:D,pageRange:P,slice(l){return l.slice(P.start,P.end)},setPageSize(l){a({type:"SET_PAGE_SIZE",size:l})},setPage(l){a({type:"SET_PAGE",page:l})},goToNextPage(){a({type:"NEXT_PAGE"})},goToPrevPage(){a({type:"PREVIOUS_PAGE"})},goToFirstPage(){a({type:"FIRST_PAGE"})},goToLastPage(){a({type:"LAST_PAGE"})},getRootProps(){return t.element({id:ct(n),...C.root.attrs,dir:r("dir"),"aria-label":c.rootLabel})},getEllipsisProps(l){return t.element({id:ut(n,l.index),...C.ellipsis.attrs,dir:r("dir")})},getItemProps(l){var Y;const v=l.value,F=v===u;return t.element({id:Pt(n,v),...C.item.attrs,dir:r("dir"),"data-index":v,"data-selected":Z(F),"aria-current":F?"page":void 0,"aria-label":(Y=c.itemLabel)==null?void 0:Y.call(c,{page:v,totalPages:m}),onClick(){a({type:"SET_PAGE",page:v})},...S&&{type:"button"}})},getPrevTriggerProps(){return t.element({id:dt(n),...C.prevTrigger.attrs,dir:r("dir"),"data-disabled":Z($),"aria-label":c.prevTriggerLabel,onClick(){a({type:"PREVIOUS_PAGE"})},...S&&{disabled:$,type:"button"}})},getNextTriggerProps(){return t.element({id:mt(n),...C.nextTrigger.attrs,dir:r("dir"),"data-disabled":Z(M),"aria-label":c.nextTriggerLabel,onClick(){a({type:"NEXT_PAGE"})},...S&&{disabled:M,type:"button"}})}}}var Tt=Je({props({props:e}){return{defaultPageSize:10,siblingCount:1,defaultPage:1,type:"button",count:1,...e,translations:{rootLabel:"pagination",prevTriggerLabel:"previous page",nextTriggerLabel:"next page",itemLabel({page:t,totalPages:a}){return`${a>1&&t===a?"last page, ":""}page ${t}`},...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{page:t(()=>({value:e("page"),defaultValue:e("defaultPage"),onChange(n){var s;const r=a();(s=e("onPageChange"))==null||s({page:n,pageSize:r.get("pageSize")})}})),pageSize:t(()=>({value:e("pageSize"),defaultValue:e("defaultPageSize"),onChange(n){var r;(r=e("onPageSizeChange"))==null||r({pageSize:n})}}))}},watch({track:e,context:t,action:a}){e([()=>t.get("pageSize")],()=>{a(["setPageIfNeeded"])})},computed:{totalPages:ne(({prop:e,context:t})=>[t.get("pageSize"),e("count")],([e,t])=>Math.ceil(t/e)),pageRange:ne(({context:e,prop:t})=>[e.get("page"),e.get("pageSize"),t("count")],([e,t,a])=>{const n=(e-1)*t;return{start:n,end:Math.min(n+t,a)}}),previousPage:({context:e})=>e.get("page")===1?null:e.get("page")-1,nextPage:({context:e,computed:t})=>e.get("page")===t("totalPages")?null:e.get("page")+1,isValidPage:({context:e,computed:t})=>e.get("page")>=1&&e.get("page")<=t("totalPages")},on:{SET_PAGE:{guard:"isValidPage",actions:["setPage"]},SET_PAGE_SIZE:{actions:["setPageSize"]},FIRST_PAGE:{actions:["goToFirstPage"]},LAST_PAGE:{actions:["goToLastPage"]},PREVIOUS_PAGE:{guard:"canGoToPrevPage",actions:["goToPrevPage"]},NEXT_PAGE:{guard:"canGoToNextPage",actions:["goToNextPage"]}},states:{idle:{}},implementations:{guards:{isValidPage:({event:e,computed:t})=>e.page>=1&&e.page<=t("totalPages"),isValidCount:({context:e,event:t})=>e.get("page")>t.count,canGoToNextPage:({context:e,computed:t})=>e.get("page")<t("totalPages"),canGoToPrevPage:({context:e})=>e.get("page")>1},actions:{setPage({context:e,event:t,computed:a}){const n=Q(t.page,a("totalPages"));e.set("page",n)},setPageSize({context:e,event:t}){e.set("pageSize",t.size)},goToFirstPage({context:e}){e.set("page",1)},goToLastPage({context:e,computed:t}){e.set("page",t("totalPages"))},goToPrevPage({context:e,computed:t}){e.set("page",a=>Q(a-1,t("totalPages")))},goToNextPage({context:e,computed:t}){e.set("page",a=>Q(a+1,t("totalPages")))},setPageIfNeeded({context:e,computed:t}){t("isValidPage")||e.set("page",1)}}}}),Q=(e,t)=>Math.min(Math.max(e,1),t);K()(["count","dir","getRootNode","id","ids","onPageChange","onPageSizeChange","page","defaultPage","pageSize","defaultPageSize","siblingCount","translations","type"]);K()(["value","type"]);K()(["index"]);const St=e=>{const t=d.useId(),{getRootNode:a}=Ke(),{dir:n}=et(),r={id:t,dir:n,getRootNode:a,...e},s=tt(Tt,r);return vt(s,at)},Fe=d.forwardRef((e,t)=>{const[a,n]=J()(e,["count","defaultPage","defaultPageSize","id","ids","onPageChange","onPageSizeChange","page","pageSize","siblingCount","translations","type"]),r=St(a),s=q(r.getRootProps(),n);return o.jsx(gt,{value:r,children:o.jsx(V.nav,{...s,ref:t})})});Fe.displayName="PaginationRoot";const H=({children:e,tooltip:t})=>t?o.jsxs(Ue,{children:[o.jsx(Xe,{asChild:!0,children:e}),o.jsx(Ze,{children:t})]}):o.jsx(o.Fragment,{children:e});H.__docgenInfo={description:"",methods:[],displayName:"PaginationButtonWithTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const yt={"pagination-item":"_pagination-item_1s1gs_1"},Ye=({disabled:e,index:t,page:a})=>{const{page:n}=T();return o.jsx($e,{asChild:!0,className:yt["pagination-item"],type:"page",...a,children:o.jsx(X,{disabled:e,variant:n===a.value?w.default:w.ghost,children:a.value})},t)};Ye.__docgenInfo={description:"",methods:[],displayName:"PaginationItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: number;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}},description:""}}};const It=Object.freeze([{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"100",value:"100"},{label:"300",value:"300"}]),re={"pagination-page-size-selector":"_pagination-page-size-selector_6gmgn_2","pagination-page-size-selector__label":"_pagination-page-size-selector__label_6gmgn_7"},We=({onSelectChange:e,renderTotalItemsLabel:t})=>{const{count:a,pageSize:n}=T(),r=d.useId(),s=i=>{e&&i.value[0]&&e(i.value[0])};return o.jsxs("div",{className:re["pagination-page-size-selector"],children:[o.jsxs(nt,{defaultValue:[n.toString()],items:It,onValueChange:s,children:[o.jsx(rt,{"aria-labelledby":r}),o.jsx(ot,{})]}),o.jsx("p",{className:re["pagination-page-size-selector__label"],id:r,children:t({totalItems:a})})]})};We.__docgenInfo={description:"",methods:[],displayName:"PaginationPageSizeSelector",props:{onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},renderTotalItemsLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""}}};const Ct="_pagination_6qm34_2",xt={pagination:Ct},Et=({totalItems:e})=>`of ${e} results`,g=d.forwardRef(({className:e,defaultPage:t,disabled:a,labelTooltipNext:n,labelTooltipPrev:r,onPageChange:s,onPageSizeChange:i,page:m,pageSize:u=10,renderTotalItemsLabel:c=Et,siblingCount:h,totalItems:f,withPageSizeSelector:D,...P},ee)=>{const[S,$]=d.useState(u),[M,k]=d.useState(t??1),l=m!==void 0,v=l&&m?m:M;d.useEffect(()=>{l||k(t??1)},[f,S,t,l]);const F=y=>{l||k(y.page),s==null||s(y)},Y=y=>{const I=Number(y);$(I),i==null||i({pageSize:I})};return o.jsxs(Fe,{className:Be(xt.pagination,e),count:f,"data-ods":"pagination",defaultPage:t,onPageChange:F,page:v,pageSize:S,ref:ee,siblingCount:h,...P,children:[D&&o.jsx(We,{onSelectChange:Y,renderTotalItemsLabel:c}),o.jsx(H,{tooltip:r,children:o.jsx(ke,{asChild:!0,children:o.jsx(X,{disabled:a,variant:w.ghost,children:o.jsx(te,{name:ae.chevronLeft})})})}),o.jsx(lt,{children:y=>y.pages.map((I,W)=>I.type==="page"?o.jsx(Ye,{page:I,index:W,disabled:a},W):o.jsx(De,{asChild:!0,index:W,children:o.jsx(X,{disabled:!0,variant:w.ghost,children:"…"})},W))}),o.jsx(H,{tooltip:n,children:o.jsx(Me,{asChild:!0,children:o.jsx(X,{disabled:a,variant:w.ghost,children:o.jsx(te,{name:ae.chevronRight})})})})]})});g.displayName="Pagination";g.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{defaultPage:{required:!1,tsType:{name:"number"},description:"The initial active page. Use when you don't need to control the active page of the pagination."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},labelTooltipNext:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "next page" button.'},labelTooltipPrev:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "previous page" button.'},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the active page changes."},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageSizeChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageSizeChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the page size changes."},page:{required:!1,tsType:{name:"number"},description:"The controlled active page"},pageSize:{required:!1,tsType:{name:"number"},description:"The number of items per page.",defaultValue:{value:"10",computed:!1}},renderTotalItemsLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"Format the label displayed near the per-page selector.",defaultValue:{value:"({ totalItems }) => `of ${totalItems} results`",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"The number of pages to show beside active page."},totalItems:{required:!0,tsType:{name:"number"},description:"The total number of items."},withPageSizeSelector:{required:!1,tsType:{name:"boolean"},description:"Whether the per-page selector is displayed."}},composes:["ComponentPropsWithRef"]};const _t={argTypes:st(["defaultPage","onPageChange","onPageSizeChange","page","pageSize","renderTotalItemsLabel"]),component:g,title:"React Components/Pagination"},x={argTypes:it({disabled:{table:{category:b.general}},labelTooltipNext:{table:{category:b.general}},labelTooltipPrev:{table:{category:b.general}},pageSize:{table:{category:b.general}},page:{table:{category:b.general}},siblingCount:{table:{category:b.general}},totalItems:{table:{category:b.general}},withPageSizeSelector:{table:{category:b.general}}}),args:{totalItems:5e3}},E={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>p.createElement(g,{"aria-label":"Pagination",totalItems:5e3})},_={globals:{imports:`import { Pagination } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Ve()}}},render:({})=>{const[e,t]=d.useState(1);function a({page:n}){t(n)}return p.createElement(g,{onPageChange:a,page:e,totalItems:500})}},R={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>p.createElement(g,{totalItems:5e3})},N={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>p.createElement(g,{disabled:!0,totalItems:500})},z={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>p.createElement(g,{pageSize:25,totalItems:500})},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>p.createElement(g,{totalItems:100,withPageSizeSelector:!0})},L={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>p.createElement(g,{defaultPage:5,siblingCount:2,totalItems:500})},j={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>p.createElement(g,{labelTooltipPrev:"Go to previous page",labelTooltipNext:"Go to next page",totalItems:500})},A={globals:{imports:"import { Pagination } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ve()}}},render:({})=>p.createElement(g,{renderTotalItemsLabel:({totalItems:e})=>`of ${e} results`,totalItems:500,withPageSizeSelector:!0})},G={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>p.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},p.createElement(g,{totalItems:100}),p.createElement(g,{totalItems:500,pageSize:25}),p.createElement(g,{totalItems:500,disabled:!0}),p.createElement(g,{totalItems:100,withPageSizeSelector:!0}))};var oe,se,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ge,le,pe;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination aria-label="Pagination" totalItems={5000} />
}`,...(pe=(le=E.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,de,me;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(de=_.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,Pe,be;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={5000} />
}`,...(be=(Pe=R.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var he,fe,ve;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination disabled totalItems={500} />
}`,...(ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Te,Se,ye;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination pageSize={25} totalItems={500} />
}`,...(ye=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Ie,Ce,xe;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Pagination totalItems={100} withPageSizeSelector />
}`,...(xe=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Ee,_e,Re;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination defaultPage={5} siblingCount={2} totalItems={500} />
}`,...(Re=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var Ne,ze,Oe;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Pagination } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Pagination labelTooltipPrev={'Go to previous page'} labelTooltipNext={'Go to next page'} totalItems={500} />
}`,...(Oe=(ze=j.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var Le,je,Ae;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ae=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var Ge,we,qe;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <Pagination totalItems={100} />
      <Pagination totalItems={500} pageSize={25} />
      <Pagination totalItems={500} disabled />
      <Pagination totalItems={100} withPageSizeSelector />
    </div>
}`,...(qe=(we=G.parameters)==null?void 0:we.docs)==null?void 0:qe.source}}};const Rt=["Demo","AccessibilityLabel","Controlled","Default","Disabled","ItemsPerPage","Overview","SiblingCount","WithLabels","TotalItems","ThemeGenerator"],Dt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:E,Controlled:_,Default:R,Demo:x,Disabled:N,ItemsPerPage:z,Overview:O,SiblingCount:L,ThemeGenerator:G,TotalItems:A,WithLabels:j,__namedExportsOrder:Rt,default:_t},Symbol.toStringTag,{value:"Module"}));export{E as A,_ as C,R as D,z as I,O,Dt as P,L as S,A as T,j as W,N as a};
