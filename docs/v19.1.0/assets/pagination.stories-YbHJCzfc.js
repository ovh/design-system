import{r as p,e as P}from"./index-D_CmzhJ4.js";import{j as o}from"./jsx-runtime-VM66peLj.js";import{c as Me}from"./index-CkQHsVsO.js";import{B as U,d as G}from"./Button-Cu9Xbu09.js";import{I as ee,a as te}from"./icon-name-CL_C5kfn.js";import{b as ke,T as Fe,a as We}from"./TooltipTrigger--1kPNsOd.js";import{c as Ye,a as K,Q as w,R as q,W as X,T as Be,K as Q,H as Ue,u as Xe,U as Ze,L as He,V as Ke}from"./use-locale-context-DLC4Hyvy.js";import{b as Qe,S as Je,a as et}from"./SelectControl-CmmZyh2D.js";import{e as tt,o as at,C as T}from"./controls-BtiQQn1l.js";import{s as Le}from"./source-d0g_Nd0q.js";const[nt,v]=Ye({name:"PaginationContext",hookName:"usePaginationContext",providerName:"<PaginationProvider />"}),rt=e=>e.children(v()),Ae=p.forwardRef((e,t)=>{const[a,n]=K()(e,["index"]),r=v(),s=w(r.getEllipsisProps(a),n);return o.jsx(q.div,{...s,ref:t})});Ae.displayName="PaginationEllipsis";const Ge=p.forwardRef((e,t)=>{const[a,n]=K()(e,["value","type"]),r=v(),s=w(r.getItemProps(a),n);return o.jsx(q.button,{...s,ref:t})});Ge.displayName="PaginationItem";const we=p.forwardRef((e,t)=>{const a=v(),n=w(a.getNextTriggerProps(),e);return o.jsx(q.button,{...n,ref:t})});we.displayName="PaginationNextTrigger";const qe=p.forwardRef((e,t)=>{const a=v(),n=w(a.getPrevTriggerProps(),e);return o.jsx(q.button,{...n,ref:t})});qe.displayName="PaginationPrevTrigger";var ot=Be("pagination").parts("root","item","ellipsis","prevTrigger","nextTrigger"),I=ot.build(),st=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`pagination:${e.id}`},it=e=>{var t;return((t=e.ids)==null?void 0:t.prevTrigger)??`pagination:${e.id}:prev`},gt=e=>{var t;return((t=e.ids)==null?void 0:t.nextTrigger)??`pagination:${e.id}:next`},lt=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.ellipsis)==null?void 0:n.call(a,t))??`pagination:${e.id}:ellipsis:${t}`},pt=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.item)==null?void 0:n.call(a,t))??`pagination:${e.id}:item:${t}`},Y=(e,t)=>{let a=t-e+1;return Array.from({length:a},(n,r)=>r+e)},ct=e=>e.map(t=>typeof t=="number"?{type:"page",value:t}:{type:"ellipsis"}),B="ellipsis",dt=e=>{const{page:t,totalPages:a,siblingCount:n}=e,r=Math.min(2*n+5,a),s=1,i=a,d=Math.max(t-n,s),u=Math.min(t+n,i),l=d>s+1,b=u<i-1,S=r-2;if(!l&&b)return[...Y(1,S),B,i];if(l&&!b){const m=Y(i-S+1,i);return[s,B,...m]}if(l&&b){const m=Y(d,u);return[s,B,...m,B,i]}return Y(s,i)},ut=e=>ct(dt(e));function mt(e,t){const{send:a,scope:n,prop:r,computed:s,context:i}=e,d=s("totalPages"),u=i.get("page"),l=r("translations"),b=r("count"),S=s("previousPage"),V=s("nextPage"),m=s("pageRange"),f=r("type")==="button",$=u===1,D=u===d,M=ut({page:u,totalPages:d,siblingCount:r("siblingCount")});return{count:b,page:u,pageSize:i.get("pageSize"),totalPages:d,pages:M,previousPage:S,nextPage:V,pageRange:m,slice(g){return g.slice(m.start,m.end)},setPageSize(g){a({type:"SET_PAGE_SIZE",size:g})},setPage(g){a({type:"SET_PAGE",page:g})},goToNextPage(){a({type:"NEXT_PAGE"})},goToPrevPage(){a({type:"PREVIOUS_PAGE"})},goToFirstPage(){a({type:"FIRST_PAGE"})},goToLastPage(){a({type:"LAST_PAGE"})},getRootProps(){return t.element({id:st(n),...I.root.attrs,dir:r("dir"),"aria-label":l.rootLabel})},getEllipsisProps(g){return t.element({id:lt(n,g.index),...I.ellipsis.attrs,dir:r("dir")})},getItemProps(g){var F;const h=g.value,k=h===u;return t.element({id:pt(n,h),...I.item.attrs,dir:r("dir"),"data-index":h,"data-selected":X(k),"aria-current":k?"page":void 0,"aria-label":(F=l.itemLabel)==null?void 0:F.call(l,{page:h,totalPages:d}),onClick(){a({type:"SET_PAGE",page:h})},...f&&{type:"button"}})},getPrevTriggerProps(){return t.element({id:it(n),...I.prevTrigger.attrs,dir:r("dir"),"data-disabled":X($),"aria-label":l.prevTriggerLabel,onClick(){a({type:"PREVIOUS_PAGE"})},...f&&{disabled:$,type:"button"}})},getNextTriggerProps(){return t.element({id:gt(n),...I.nextTrigger.attrs,dir:r("dir"),"data-disabled":X(D),"aria-label":l.nextTriggerLabel,onClick(){a({type:"NEXT_PAGE"})},...f&&{disabled:D,type:"button"}})}}}var Pt=Ue({props({props:e}){return{defaultPageSize:10,siblingCount:1,defaultPage:1,type:"button",count:1,...e,translations:{rootLabel:"pagination",prevTriggerLabel:"previous page",nextTriggerLabel:"next page",itemLabel({page:t,totalPages:a}){return`${a>1&&t===a?"last page, ":""}page ${t}`},...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{page:t(()=>({value:e("page"),defaultValue:e("defaultPage"),onChange(n){var s;const r=a();(s=e("onPageChange"))==null||s({page:n,pageSize:r.get("pageSize")})}})),pageSize:t(()=>({value:e("pageSize"),defaultValue:e("defaultPageSize"),onChange(n){var r;(r=e("onPageSizeChange"))==null||r({pageSize:n})}}))}},watch({track:e,context:t,action:a}){e([()=>t.get("pageSize")],()=>{a(["setPageIfNeeded"])})},computed:{totalPages:({context:e,prop:t})=>Math.ceil(t("count")/e.get("pageSize")),previousPage:({context:e})=>e.get("page")===1?null:e.get("page")-1,nextPage:({context:e,computed:t})=>e.get("page")===t("totalPages")?null:e.get("page")+1,pageRange:({context:e,prop:t})=>{const a=(e.get("page")-1)*e.get("pageSize"),n=Math.min(a+e.get("pageSize"),t("count"));return{start:a,end:n}},isValidPage:({context:e,computed:t})=>e.get("page")>=1&&e.get("page")<=t("totalPages")},on:{SET_PAGE:{guard:"isValidPage",actions:["setPage"]},SET_PAGE_SIZE:{actions:["setPageSize"]},FIRST_PAGE:{actions:["goToFirstPage"]},LAST_PAGE:{actions:["goToLastPage"]},PREVIOUS_PAGE:{guard:"canGoToPrevPage",actions:["goToPrevPage"]},NEXT_PAGE:{guard:"canGoToNextPage",actions:["goToNextPage"]}},states:{idle:{}},implementations:{guards:{isValidPage:({event:e,computed:t})=>e.page>=1&&e.page<=t("totalPages"),isValidCount:({context:e,event:t})=>e.get("page")>t.count,canGoToNextPage:({context:e,computed:t})=>e.get("page")<t("totalPages"),canGoToPrevPage:({context:e})=>e.get("page")>1},actions:{setPage({context:e,event:t,computed:a}){const n=Z(t.page,a("totalPages"));e.set("page",n)},setPageSize({context:e,event:t}){e.set("pageSize",t.size)},goToFirstPage({context:e}){e.set("page",1)},goToLastPage({context:e,computed:t}){e.set("page",t("totalPages"))},goToPrevPage({context:e,computed:t}){e.set("page",a=>Z(a-1,t("totalPages")))},goToNextPage({context:e,computed:t}){e.set("page",a=>Z(a+1,t("totalPages")))},setPageIfNeeded({context:e,computed:t}){t("isValidPage")||e.set("page",1)}}}}),Z=(e,t)=>Math.min(Math.max(e,1),t);Q()(["count","dir","getRootNode","id","ids","onPageChange","onPageSizeChange","page","defaultPage","pageSize","defaultPageSize","siblingCount","translations","type"]);Q()(["value","type"]);Q()(["index"]);const bt=e=>{const t=p.useId(),{getRootNode:a}=Xe(),{dir:n}=Ze(),r={id:t,dir:n,getRootNode:a,...e},s=He(Pt,r);return mt(s,Ke)},Ve=p.forwardRef((e,t)=>{const[a,n]=K()(e,["count","defaultPage","defaultPageSize","id","ids","onPageChange","onPageSizeChange","page","pageSize","siblingCount","translations","type"]),r=bt(a),s=w(r.getRootProps(),n);return o.jsx(nt,{value:r,children:o.jsx(q.nav,{...s,ref:t})})});Ve.displayName="PaginationRoot";const H=({children:e,tooltip:t})=>t?o.jsxs(ke,{children:[o.jsx(Fe,{asChild:!0,children:e}),o.jsx(We,{children:t})]}):o.jsx(o.Fragment,{children:e});H.__docgenInfo={description:"",methods:[],displayName:"PaginationButtonWithTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const Tt="_pagination__item_i63de_1",ht={pagination__item:Tt},$e=({disabled:e,index:t,page:a})=>{const{page:n}=v();return o.jsx(Ge,{type:"page",asChild:!0,className:ht.pagination__item,...a,children:o.jsx(U,{disabled:e,variant:n===a.value?G.default:G.ghost,children:a.value})},t)};$e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: number;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}},description:""}}};const vt=Object.freeze([{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"100",value:"100"},{label:"300",value:"300"}]),ae={"pagination-page-size-selector":"_pagination-page-size-selector_1cj93_2","pagination-page-size-selector__label":"_pagination-page-size-selector__label_1cj93_7"},De=({onSelectChange:e,renderTotalItemsLabel:t})=>{const{count:a,pageSize:n}=v(),r=p.useId(),s=i=>{e&&i.value[0]&&e(i.value[0])};return o.jsxs("div",{className:ae["pagination-page-size-selector"],children:[o.jsxs(Qe,{defaultValue:[n.toString()],items:vt,onValueChange:s,children:[o.jsx(Je,{"aria-labelledby":r}),o.jsx(et,{})]}),o.jsx("p",{className:ae["pagination-page-size-selector__label"],id:r,children:t({totalItems:a})})]})};De.__docgenInfo={description:"",methods:[],displayName:"PaginationPageSizeSelector",props:{onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},renderTotalItemsLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""}}};const St="_pagination_6qm34_2",ft={pagination:St},yt=({totalItems:e})=>`of ${e} results`,c=p.forwardRef(({className:e,disabled:t,defaultPage:a,labelTooltipNext:n,labelTooltipPrev:r,onPageChange:s,onPageSizeChange:i,page:d,pageSize:u=10,siblingCount:l,totalItems:b,renderTotalItemsLabel:S=yt,withPageSizeSelector:V,...m},J)=>{const[f,$]=p.useState(u),[D,M]=p.useState(a??1),g=d!==void 0,h=g&&d?d:D;p.useEffect(()=>{g||M(a??1)},[b,f,a,g]);const k=y=>{g||M(y.page),s==null||s(y)},F=y=>{const C=Number(y);$(C),i==null||i({pageSize:C})};return o.jsxs(Ve,{className:Me(ft.pagination,e),count:b,"data-ods":"pagination",defaultPage:a,onPageChange:k,page:h,pageSize:f,ref:J,siblingCount:l,...m,children:[V&&o.jsx(De,{onSelectChange:F,renderTotalItemsLabel:S}),o.jsx(H,{tooltip:r,children:o.jsx(qe,{asChild:!0,children:o.jsx(U,{disabled:t,variant:G.ghost,children:o.jsx(ee,{name:te.chevronLeft})})})}),o.jsx(rt,{children:y=>y.pages.map((C,W)=>C.type==="page"?o.jsx($e,{page:C,index:W,disabled:t},W):o.jsx(Ae,{asChild:!0,index:W,children:o.jsx(U,{disabled:!0,variant:G.ghost,children:"…"})},W))}),o.jsx(H,{tooltip:n,children:o.jsx(we,{asChild:!0,children:o.jsx(U,{disabled:t,variant:G.ghost,children:o.jsx(ee,{name:te.chevronRight})})})})]})});c.displayName="Pagination";c.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},defaultPage:{required:!1,tsType:{name:"number"},description:"The initial active page. Use when you don't need to control the active page of the pagination."},labelTooltipNext:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "next page" button.'},labelTooltipPrev:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "previous page" button.'},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the active page changes."},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageSizeChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageSizeChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the page size changes."},page:{required:!1,tsType:{name:"number"},description:"The controlled active page"},pageSize:{required:!1,tsType:{name:"number"},description:"The number of items per page.",defaultValue:{value:"10",computed:!1}},renderTotalItemsLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"Format the label displayed near the per-page selector.",defaultValue:{value:"({ totalItems }) => `of ${totalItems} results`",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"The number of pages to show beside active page."},totalItems:{required:!0,tsType:{name:"number"},description:"The total number of items."},withPageSizeSelector:{required:!1,tsType:{name:"boolean"},description:"Whether the per-page selector is displayed."}},composes:["ComponentPropsWithRef"]};const Ct={argTypes:tt(["defaultPage","onPageChange","onPageSizeChange","page","pageSize","renderTotalItemsLabel"]),component:c,title:"React Components/Pagination"},x={argTypes:at({disabled:{table:{category:T.general}},labelTooltipNext:{table:{category:T.general}},labelTooltipPrev:{table:{category:T.general}},pageSize:{table:{category:T.general}},page:{table:{category:T.general}},siblingCount:{table:{category:T.general}},totalItems:{table:{category:T.general}},withPageSizeSelector:{table:{category:T.general}}}),args:{totalItems:5e3}},_={tags:["!dev"],render:({})=>P.createElement(c,{"aria-label":"Pagination",totalItems:5e3})},E={tags:["!dev"],parameters:{docs:{source:{...Le()}}},render:({})=>{const[e,t]=p.useState(1);function a({page:n}){t(n)}return P.createElement(c,{page:e,onPageChange:a,totalItems:500})}},R={tags:["!dev"],render:({})=>P.createElement(c,{totalItems:5e3})},N={tags:["!dev"],render:({})=>P.createElement(c,{totalItems:500,disabled:!0})},z={tags:["!dev"],render:({})=>P.createElement(c,{pageSize:25,totalItems:500})},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>P.createElement(c,{totalItems:100,withPageSizeSelector:!0})},j={tags:["!dev"],render:({})=>P.createElement(c,{defaultPage:5,siblingCount:2,totalItems:500})},L={tags:["!dev"],render:({})=>P.createElement(c,{labelTooltipPrev:"Go to previous page",labelTooltipNext:"Go to next page",totalItems:500})},A={tags:["!dev"],parameters:{docs:{source:{...Le()}}},render:({})=>P.createElement(c,{totalItems:500,renderTotalItemsLabel:({totalItems:e})=>`of ${e} results`,withPageSizeSelector:!0})};var ne,re,oe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ge;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination aria-label="Pagination" totalItems={5000} />
}`,...(ge=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var le,pe,ce;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
    return <Pagination page={page} onPageChange={handlePageChange} totalItems={500} />;
  }
}`,...(ce=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var de,ue,me;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={5000} />
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var Pe,be,Te;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={500} disabled />
}`,...(Te=(be=N.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var he,ve,Se;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination pageSize={25} totalItems={500} />
}`,...(Se=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var fe,ye,Ce;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Pagination totalItems={100} withPageSizeSelector />
}`,...(Ce=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var Ie,xe,_e;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination defaultPage={5} siblingCount={2} totalItems={500} />
}`,...(_e=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:_e.source}}};var Ee,Re,Ne;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination labelTooltipPrev={'Go to previous page'} labelTooltipNext={'Go to next page'} totalItems={500} />
}`,...(Ne=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var ze,Oe,je;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <Pagination totalItems={500} renderTotalItemsLabel={({
    totalItems
  }) => \`of \${totalItems} results\`} withPageSizeSelector />
}`,...(je=(Oe=A.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};const It=["Demo","AccessibilityLabel","Controlled","Default","Disabled","ItemsPerPage","Overview","SiblingCount","WithLabels","TotalItems"],Gt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:_,Controlled:E,Default:R,Demo:x,Disabled:N,ItemsPerPage:z,Overview:O,SiblingCount:j,TotalItems:A,WithLabels:L,__namedExportsOrder:It,default:Ct},Symbol.toStringTag,{value:"Module"}));export{_ as A,E as C,R as D,z as I,O,Gt as P,j as S,A as T,L as W,N as a};
