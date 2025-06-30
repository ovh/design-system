import{r as c,e as T}from"./index-D_CmzhJ4.js";import{j as r}from"./jsx-runtime-VM66peLj.js";import{c as qe}from"./index-CkQHsVsO.js";import{B,d as A}from"./Button-CbWLwkmI.js";import{I as J,a as ee}from"./icon-name-BOrBmUKT.js";import{b as Ve,T as $e,a as De}from"./TooltipTrigger-DmpQ7Q38.js";import{c as Me,a as H,Q as w,R as G,W as U,T as ke,K,H as Fe,u as We,U as Ye,L as Be,V as Ue}from"./use-locale-context-BQVaQ0H3.js";import{b as Xe,S as Ze,a as He}from"./SelectControl-D8g7ZA4_.js";import{e as Ke,o as Qe,C as b}from"./controls-BtiQQn1l.js";import{s as Ne}from"./source-d0g_Nd0q.js";const[Je,v]=Me({name:"PaginationContext",hookName:"usePaginationContext",providerName:"<PaginationProvider />"}),et=e=>e.children(v()),ze=c.forwardRef((e,t)=>{const[a,n]=H()(e,["index"]),o=v(),s=w(o.getEllipsisProps(a),n);return r.jsx(G.div,{...s,ref:t})});ze.displayName="PaginationEllipsis";const Oe=c.forwardRef((e,t)=>{const[a,n]=H()(e,["value","type"]),o=v(),s=w(o.getItemProps(a),n);return r.jsx(G.button,{...s,ref:t})});Oe.displayName="PaginationItem";const je=c.forwardRef((e,t)=>{const a=v(),n=w(a.getNextTriggerProps(),e);return r.jsx(G.button,{...n,ref:t})});je.displayName="PaginationNextTrigger";const Le=c.forwardRef((e,t)=>{const a=v(),n=w(a.getPrevTriggerProps(),e);return r.jsx(G.button,{...n,ref:t})});Le.displayName="PaginationPrevTrigger";var tt=ke("pagination").parts("root","item","ellipsis","prevTrigger","nextTrigger"),I=tt.build(),at=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`pagination:${e.id}`},nt=e=>{var t;return((t=e.ids)==null?void 0:t.prevTrigger)??`pagination:${e.id}:prev`},rt=e=>{var t;return((t=e.ids)==null?void 0:t.nextTrigger)??`pagination:${e.id}:next`},ot=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.ellipsis)==null?void 0:n.call(a,t))??`pagination:${e.id}:ellipsis:${t}`},st=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.item)==null?void 0:n.call(a,t))??`pagination:${e.id}:item:${t}`},W=(e,t)=>{let a=t-e+1;return Array.from({length:a},(n,o)=>o+e)},it=e=>e.map(t=>typeof t=="number"?{type:"page",value:t}:{type:"ellipsis"}),Y="ellipsis",gt=e=>{const{page:t,totalPages:a,siblingCount:n}=e,o=Math.min(2*n+5,a),s=1,i=a,p=Math.max(t-n,s),u=Math.min(t+n,i),l=p>s+1,P=u<i-1,f=o-2;if(!l&&P)return[...W(1,f),Y,i];if(l&&!P){const m=W(i-f+1,i);return[s,Y,...m]}if(l&&P){const m=W(p,u);return[s,Y,...m,Y,i]}return W(s,i)},lt=e=>it(gt(e));function pt(e,t){const{send:a,scope:n,prop:o,computed:s,context:i}=e,p=s("totalPages"),u=i.get("page"),l=o("translations"),P=o("count"),f=s("previousPage"),q=s("nextPage"),m=s("pageRange"),S=o("type")==="button",V=u===1,$=u===p,D=lt({page:u,totalPages:p,siblingCount:o("siblingCount")});return{count:P,page:u,pageSize:i.get("pageSize"),totalPages:p,pages:D,previousPage:f,nextPage:q,pageRange:m,slice(g){return g.slice(m.start,m.end)},setPageSize(g){a({type:"SET_PAGE_SIZE",size:g})},setPage(g){a({type:"SET_PAGE",page:g})},goToNextPage(){a({type:"NEXT_PAGE"})},goToPrevPage(){a({type:"PREVIOUS_PAGE"})},goToFirstPage(){a({type:"FIRST_PAGE"})},goToLastPage(){a({type:"LAST_PAGE"})},getRootProps(){return t.element({id:at(n),...I.root.attrs,dir:o("dir"),"aria-label":l.rootLabel})},getEllipsisProps(g){return t.element({id:ot(n,g.index),...I.ellipsis.attrs,dir:o("dir")})},getItemProps(g){var k;const h=g.value,M=h===u;return t.element({id:st(n,h),...I.item.attrs,dir:o("dir"),"data-index":h,"data-selected":U(M),"aria-current":M?"page":void 0,"aria-label":(k=l.itemLabel)==null?void 0:k.call(l,{page:h,totalPages:p}),onClick(){a({type:"SET_PAGE",page:h})},...S&&{type:"button"}})},getPrevTriggerProps(){return t.element({id:nt(n),...I.prevTrigger.attrs,dir:o("dir"),"data-disabled":U(V),"aria-label":l.prevTriggerLabel,onClick(){a({type:"PREVIOUS_PAGE"})},...S&&{disabled:V,type:"button"}})},getNextTriggerProps(){return t.element({id:rt(n),...I.nextTrigger.attrs,dir:o("dir"),"data-disabled":U($),"aria-label":l.nextTriggerLabel,onClick(){a({type:"NEXT_PAGE"})},...S&&{disabled:$,type:"button"}})}}}var ct=Fe({props({props:e}){return{defaultPageSize:10,siblingCount:1,defaultPage:1,type:"button",count:1,...e,translations:{rootLabel:"pagination",prevTriggerLabel:"previous page",nextTriggerLabel:"next page",itemLabel({page:t,totalPages:a}){return`${a>1&&t===a?"last page, ":""}page ${t}`},...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{page:t(()=>({value:e("page"),defaultValue:e("defaultPage"),onChange(n){var s;const o=a();(s=e("onPageChange"))==null||s({page:n,pageSize:o.get("pageSize")})}})),pageSize:t(()=>({value:e("pageSize"),defaultValue:e("defaultPageSize"),onChange(n){var o;(o=e("onPageSizeChange"))==null||o({pageSize:n})}}))}},watch({track:e,context:t,action:a}){e([()=>t.get("pageSize")],()=>{a(["setPageIfNeeded"])})},computed:{totalPages:({context:e,prop:t})=>Math.ceil(t("count")/e.get("pageSize")),previousPage:({context:e})=>e.get("page")===1?null:e.get("page")-1,nextPage:({context:e,computed:t})=>e.get("page")===t("totalPages")?null:e.get("page")+1,pageRange:({context:e,prop:t})=>{const a=(e.get("page")-1)*e.get("pageSize"),n=Math.min(a+e.get("pageSize"),t("count"));return{start:a,end:n}},isValidPage:({context:e,computed:t})=>e.get("page")>=1&&e.get("page")<=t("totalPages")},on:{SET_PAGE:{guard:"isValidPage",actions:["setPage"]},SET_PAGE_SIZE:{actions:["setPageSize"]},FIRST_PAGE:{actions:["goToFirstPage"]},LAST_PAGE:{actions:["goToLastPage"]},PREVIOUS_PAGE:{guard:"canGoToPrevPage",actions:["goToPrevPage"]},NEXT_PAGE:{guard:"canGoToNextPage",actions:["goToNextPage"]}},states:{idle:{}},implementations:{guards:{isValidPage:({event:e,computed:t})=>e.page>=1&&e.page<=t("totalPages"),isValidCount:({context:e,event:t})=>e.get("page")>t.count,canGoToNextPage:({context:e,computed:t})=>e.get("page")<t("totalPages"),canGoToPrevPage:({context:e})=>e.get("page")>1},actions:{setPage({context:e,event:t,computed:a}){const n=X(t.page,a("totalPages"));e.set("page",n)},setPageSize({context:e,event:t}){e.set("pageSize",t.size)},goToFirstPage({context:e}){e.set("page",1)},goToLastPage({context:e,computed:t}){e.set("page",t("totalPages"))},goToPrevPage({context:e,computed:t}){e.set("page",a=>X(a-1,t("totalPages")))},goToNextPage({context:e,computed:t}){e.set("page",a=>X(a+1,t("totalPages")))},setPageIfNeeded({context:e,computed:t}){t("isValidPage")||e.set("page",1)}}}}),X=(e,t)=>Math.min(Math.max(e,1),t);K()(["count","dir","getRootNode","id","ids","onPageChange","onPageSizeChange","page","defaultPage","pageSize","defaultPageSize","siblingCount","translations","type"]);K()(["value","type"]);K()(["index"]);const dt=e=>{const t=c.useId(),{getRootNode:a}=We(),{dir:n}=Ye(),o={id:t,dir:n,getRootNode:a,...e},s=Be(ct,o);return pt(s,Ue)},Ae=c.forwardRef((e,t)=>{const[a,n]=H()(e,["count","defaultPage","defaultPageSize","id","ids","onPageChange","onPageSizeChange","page","pageSize","siblingCount","translations","type"]),o=dt(a),s=w(o.getRootProps(),n);return r.jsx(Je,{value:o,children:r.jsx(G.nav,{...s,ref:t})})});Ae.displayName="PaginationRoot";const Z=({children:e,tooltip:t})=>t?r.jsxs(Ve,{children:[r.jsx($e,{asChild:!0,children:e}),r.jsx(De,{children:t})]}):r.jsx(r.Fragment,{children:e});Z.__docgenInfo={description:"",methods:[],displayName:"PaginationButtonWithTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const ut="_pagination__item_i63de_1",mt={pagination__item:ut},we=({disabled:e,index:t,page:a})=>{const{page:n}=v();return r.jsx(Oe,{type:"page",asChild:!0,className:mt.pagination__item,...a,children:r.jsx(B,{disabled:e,variant:n===a.value?A.default:A.ghost,children:a.value})},t)};we.__docgenInfo={description:"",methods:[],displayName:"PaginationItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: number;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}},description:""}}};const Pt=Object.freeze([{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"100",value:"100"},{label:"300",value:"300"}]),te={"pagination-page-size-selector":"_pagination-page-size-selector_1uwdi_2","pagination-page-size-selector__label":"_pagination-page-size-selector__label_1uwdi_7"},Ge=({onSelectChange:e,renderTotalItemsLabel:t})=>{const{count:a,pageSize:n}=v(),o=s=>{e&&s.value[0]&&e(s.value[0])};return r.jsxs("div",{className:te["pagination-page-size-selector"],children:[r.jsxs(Xe,{defaultValue:[n.toString()],items:Pt,onValueChange:o,children:[r.jsx(Ze,{}),r.jsx(He,{})]}),r.jsx("div",{className:te["pagination-page-size-selector__label"],children:t({totalItems:a})})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"PaginationPageSizeSelector",props:{onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},renderTotalItemsLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""}}};const bt="_pagination_6qm34_2",Tt={pagination:bt},ht=({totalItems:e})=>`of ${e} results`,d=c.forwardRef(({className:e,disabled:t,defaultPage:a,labelTooltipNext:n,labelTooltipPrev:o,onPageChange:s,onPageSizeChange:i,page:p,pageSize:u=10,siblingCount:l,totalItems:P,renderTotalItemsLabel:f=ht,withPageSizeSelector:q,...m},Q)=>{const[S,V]=c.useState(u),[$,D]=c.useState(a??1),g=p!==void 0,h=g&&p?p:$;c.useEffect(()=>{g||D(a??1)},[P,S,a,g]);const M=y=>{g||D(y.page),s==null||s(y)},k=y=>{const C=Number(y);V(C),i==null||i({pageSize:C})};return r.jsxs(Ae,{className:qe(Tt.pagination,e),count:P,defaultPage:a,onPageChange:M,page:h,pageSize:S,ref:Q,siblingCount:l,...m,children:[q&&r.jsx(Ge,{onSelectChange:k,renderTotalItemsLabel:f}),r.jsx(Z,{tooltip:o,children:r.jsx(Le,{asChild:!0,children:r.jsx(B,{disabled:t,variant:A.ghost,children:r.jsx(J,{name:ee.chevronLeft})})})}),r.jsx(et,{children:y=>y.pages.map((C,F)=>C.type==="page"?r.jsx(we,{page:C,index:F,disabled:t},F):r.jsx(ze,{asChild:!0,index:F,children:r.jsx(B,{disabled:!0,variant:A.ghost,children:"…"})},F))}),r.jsx(Z,{tooltip:n,children:r.jsx(je,{asChild:!0,children:r.jsx(B,{disabled:t,variant:A.ghost,children:r.jsx(J,{name:ee.chevronRight})})})})]})});d.displayName="Pagination";d.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},defaultPage:{required:!1,tsType:{name:"number"},description:"The initial active page. Use when you don't need to control the active page of the pagination."},labelTooltipNext:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "next page" button.'},labelTooltipPrev:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "previous page" button.'},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the active page changes."},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageSizeChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageSizeChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the page size changes."},page:{required:!1,tsType:{name:"number"},description:"The controlled active page"},pageSize:{required:!1,tsType:{name:"number"},description:"The number of items per page.",defaultValue:{value:"10",computed:!1}},renderTotalItemsLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"Format the label displayed near the per-page selector.",defaultValue:{value:"({ totalItems }) => `of ${totalItems} results`",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"The number of pages to show beside active page."},totalItems:{required:!0,tsType:{name:"number"},description:"The total number of items."},withPageSizeSelector:{required:!1,tsType:{name:"boolean"},description:"Whether the per-page selector is displayed."}},composes:["ComponentPropsWithRef"]};const vt={argTypes:Ke(["defaultPage","onPageChange","page","pageSize","renderTotalItemsLabel"]),component:d,title:"React Components/Pagination"},x={argTypes:Qe({disabled:{table:{category:b.general}},labelTooltipNext:{table:{category:b.general}},labelTooltipPrev:{table:{category:b.general}},pageSize:{table:{category:b.general}},page:{table:{category:b.general}},siblingCount:{table:{category:b.general}},totalItems:{table:{category:b.general}},withPageSizeSelector:{table:{category:b.general}}}),args:{totalItems:5e3}},_={tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>{const[e,t]=c.useState(1);function a({page:n}){t(n)}return T.createElement(d,{page:e,onPageChange:a,totalItems:500})}},E={tags:["!dev"],render:({})=>T.createElement(d,{totalItems:5e3})},R={tags:["!dev"],render:({})=>T.createElement(d,{totalItems:500,disabled:!0})},N={tags:["!dev"],render:({})=>T.createElement(d,{pageSize:25,totalItems:500})},z={tags:["!dev"],parameters:{layout:"centered"},render:({})=>T.createElement(d,{totalItems:100,withPageSizeSelector:!0})},O={tags:["!dev"],render:({})=>T.createElement(d,{defaultPage:5,siblingCount:2,totalItems:500})},j={tags:["!dev"],render:({})=>T.createElement(d,{labelTooltipPrev:"Go to previous page",labelTooltipNext:"Go to next page",totalItems:500})},L={tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>T.createElement(d,{totalItems:500,renderTotalItemsLabel:({totalItems:e})=>`of ${e} results`,withPageSizeSelector:!0})};var ae,ne,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ie;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ge,le,pe;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={5000} />
}`,...(pe=(le=E.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,de,ue;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={500} disabled />
}`,...(ue=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,Pe,be;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination pageSize={25} totalItems={500} />
}`,...(be=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var Te,he,ve;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Pagination totalItems={100} withPageSizeSelector />
}`,...(ve=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,Se,ye;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination defaultPage={5} siblingCount={2} totalItems={500} />
}`,...(ye=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Ce,Ie,xe;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination labelTooltipPrev={'Go to previous page'} labelTooltipNext={'Go to next page'} totalItems={500} />
}`,...(xe=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var _e,Ee,Re;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};const ft=["Demo","Controlled","Default","Disabled","ItemsPerPage","Overview","SiblingCount","WithLabels","TotalItems"],Ot=Object.freeze(Object.defineProperty({__proto__:null,Controlled:_,Default:E,Demo:x,Disabled:R,ItemsPerPage:N,Overview:z,SiblingCount:O,TotalItems:L,WithLabels:j,__namedExportsOrder:ft,default:vt},Symbol.toStringTag,{value:"Module"}));export{_ as C,E as D,N as I,z as O,Ot as P,O as S,L as T,j as W,R as a};
