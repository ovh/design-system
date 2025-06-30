import{r as p,e as T}from"./index-D_CmzhJ4.js";import{j as r}from"./jsx-runtime-VM66peLj.js";import{c as we}from"./index-CkQHsVsO.js";import{B as W,d as G}from"./Button-CbWLwkmI.js";import{I as Q,a as J}from"./icon-name-BOrBmUKT.js";import{b as qe,T as Ve,a as $e}from"./TooltipTrigger-DmpQ7Q38.js";import{c as De,a as Z,Q as w,R as q,W as B,T as Me,K as H,H as ke,u as Fe,U as We,L as Ye,V as Be}from"./use-locale-context-BQVaQ0H3.js";import{b as Ue,S as Xe,a as Ze}from"./SelectControl-D8g7ZA4_.js";import{e as He,o as Ke,C as b}from"./controls-BtiQQn1l.js";import{s as Re}from"./source-d0g_Nd0q.js";const[Qe,S]=De({name:"PaginationContext",hookName:"usePaginationContext",providerName:"<PaginationProvider />"}),Je=e=>e.children(S()),Ne=p.forwardRef((e,t)=>{const[a,n]=Z()(e,["index"]),o=S(),s=w(o.getEllipsisProps(a),n);return r.jsx(q.div,{...s,ref:t})});Ne.displayName="PaginationEllipsis";const ze=p.forwardRef((e,t)=>{const[a,n]=Z()(e,["value","type"]),o=S(),s=w(o.getItemProps(a),n);return r.jsx(q.button,{...s,ref:t})});ze.displayName="PaginationItem";const Oe=p.forwardRef((e,t)=>{const a=S(),n=w(a.getNextTriggerProps(),e);return r.jsx(q.button,{...n,ref:t})});Oe.displayName="PaginationNextTrigger";const je=p.forwardRef((e,t)=>{const a=S(),n=w(a.getPrevTriggerProps(),e);return r.jsx(q.button,{...n,ref:t})});je.displayName="PaginationPrevTrigger";var et=Me("pagination").parts("root","item","ellipsis","prevTrigger","nextTrigger"),x=et.build(),tt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`pagination:${e.id}`},at=e=>{var t;return((t=e.ids)==null?void 0:t.prevTrigger)??`pagination:${e.id}:prev`},nt=e=>{var t;return((t=e.ids)==null?void 0:t.nextTrigger)??`pagination:${e.id}:next`},rt=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.ellipsis)==null?void 0:n.call(a,t))??`pagination:${e.id}:ellipsis:${t}`},ot=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.item)==null?void 0:n.call(a,t))??`pagination:${e.id}:item:${t}`},k=(e,t)=>{let a=t-e+1;return Array.from({length:a},(n,o)=>o+e)},st=e=>e.map(t=>typeof t=="number"?{type:"page",value:t}:{type:"ellipsis"}),F="ellipsis",it=e=>{const{page:t,totalPages:a,siblingCount:n}=e,o=Math.min(2*n+5,a),s=1,i=a,m=Math.max(t-n,s),d=Math.min(t+n,i),g=m>s+1,h=d<i-1,f=o-2;if(!g&&h)return[...k(1,f),F,i];if(g&&!h){const u=k(i-f+1,i);return[s,F,...u]}if(g&&h){const u=k(m,d);return[s,F,...u,F,i]}return k(s,i)},gt=e=>st(it(e));function lt(e,t){const{send:a,scope:n,prop:o,computed:s,context:i}=e,m=s("totalPages"),d=i.get("page"),g=o("translations"),h=o("count"),f=s("previousPage"),V=s("nextPage"),u=s("pageRange"),C=o("type")==="button",$=d===1,I=d===m,y=gt({page:d,totalPages:m,siblingCount:o("siblingCount")});return{count:h,page:d,pageSize:i.get("pageSize"),totalPages:m,pages:y,previousPage:f,nextPage:V,pageRange:u,slice(l){return l.slice(u.start,u.end)},setPageSize(l){a({type:"SET_PAGE_SIZE",size:l})},setPage(l){a({type:"SET_PAGE",page:l})},goToNextPage(){a({type:"NEXT_PAGE"})},goToPrevPage(){a({type:"PREVIOUS_PAGE"})},goToFirstPage(){a({type:"FIRST_PAGE"})},goToLastPage(){a({type:"LAST_PAGE"})},getRootProps(){return t.element({id:tt(n),...x.root.attrs,dir:o("dir"),"aria-label":g.rootLabel})},getEllipsisProps(l){return t.element({id:rt(n,l.index),...x.ellipsis.attrs,dir:o("dir")})},getItemProps(l){var P;const v=l.value,D=v===d;return t.element({id:ot(n,v),...x.item.attrs,dir:o("dir"),"data-index":v,"data-selected":B(D),"aria-current":D?"page":void 0,"aria-label":(P=g.itemLabel)==null?void 0:P.call(g,{page:v,totalPages:m}),onClick(){a({type:"SET_PAGE",page:v})},...C&&{type:"button"}})},getPrevTriggerProps(){return t.element({id:at(n),...x.prevTrigger.attrs,dir:o("dir"),"data-disabled":B($),"aria-label":g.prevTriggerLabel,onClick(){a({type:"PREVIOUS_PAGE"})},...C&&{disabled:$,type:"button"}})},getNextTriggerProps(){return t.element({id:nt(n),...x.nextTrigger.attrs,dir:o("dir"),"data-disabled":B(I),"aria-label":g.nextTriggerLabel,onClick(){a({type:"NEXT_PAGE"})},...C&&{disabled:I,type:"button"}})}}}var pt=ke({props({props:e}){return{defaultPageSize:10,siblingCount:1,defaultPage:1,type:"button",count:1,...e,translations:{rootLabel:"pagination",prevTriggerLabel:"previous page",nextTriggerLabel:"next page",itemLabel({page:t,totalPages:a}){return`${a>1&&t===a?"last page, ":""}page ${t}`},...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{page:t(()=>({value:e("page"),defaultValue:e("defaultPage"),onChange(n){var s;const o=a();(s=e("onPageChange"))==null||s({page:n,pageSize:o.get("pageSize")})}})),pageSize:t(()=>({value:e("pageSize"),defaultValue:e("defaultPageSize"),onChange(n){var o;(o=e("onPageSizeChange"))==null||o({pageSize:n})}}))}},watch({track:e,context:t,action:a}){e([()=>t.get("pageSize")],()=>{a(["setPageIfNeeded"])})},computed:{totalPages:({context:e,prop:t})=>Math.ceil(t("count")/e.get("pageSize")),previousPage:({context:e})=>e.get("page")===1?null:e.get("page")-1,nextPage:({context:e,computed:t})=>e.get("page")===t("totalPages")?null:e.get("page")+1,pageRange:({context:e,prop:t})=>{const a=(e.get("page")-1)*e.get("pageSize"),n=Math.min(a+e.get("pageSize"),t("count"));return{start:a,end:n}},isValidPage:({context:e,computed:t})=>e.get("page")>=1&&e.get("page")<=t("totalPages")},on:{SET_PAGE:{guard:"isValidPage",actions:["setPage"]},SET_PAGE_SIZE:{actions:["setPageSize"]},FIRST_PAGE:{actions:["goToFirstPage"]},LAST_PAGE:{actions:["goToLastPage"]},PREVIOUS_PAGE:{guard:"canGoToPrevPage",actions:["goToPrevPage"]},NEXT_PAGE:{guard:"canGoToNextPage",actions:["goToNextPage"]}},states:{idle:{}},implementations:{guards:{isValidPage:({event:e,computed:t})=>e.page>=1&&e.page<=t("totalPages"),isValidCount:({context:e,event:t})=>e.get("page")>t.count,canGoToNextPage:({context:e,computed:t})=>e.get("page")<t("totalPages"),canGoToPrevPage:({context:e})=>e.get("page")>1},actions:{setPage({context:e,event:t,computed:a}){const n=U(t.page,a("totalPages"));e.set("page",n)},setPageSize({context:e,event:t}){e.set("pageSize",t.size)},goToFirstPage({context:e}){e.set("page",1)},goToLastPage({context:e,computed:t}){e.set("page",t("totalPages"))},goToPrevPage({context:e,computed:t}){e.set("page",a=>U(a-1,t("totalPages")))},goToNextPage({context:e,computed:t}){e.set("page",a=>U(a+1,t("totalPages")))},setPageIfNeeded({context:e,computed:t}){t("isValidPage")||e.set("page",1)}}}}),U=(e,t)=>Math.min(Math.max(e,1),t);H()(["count","dir","getRootNode","id","ids","onPageChange","onPageSizeChange","page","defaultPage","pageSize","defaultPageSize","siblingCount","translations","type"]);H()(["value","type"]);H()(["index"]);const ct=e=>{const t=p.useId(),{getRootNode:a}=Fe(),{dir:n}=We(),o={id:t,dir:n,getRootNode:a,...e},s=Ye(pt,o);return lt(s,Be)},Le=p.forwardRef((e,t)=>{const[a,n]=Z()(e,["count","defaultPage","defaultPageSize","id","ids","onPageChange","onPageSizeChange","page","pageSize","siblingCount","translations","type"]),o=ct(a),s=w(o.getRootProps(),n);return r.jsx(Qe,{value:o,children:r.jsx(q.nav,{...s,ref:t})})});Le.displayName="PaginationRoot";const X=({children:e,tooltip:t})=>t?r.jsxs(qe,{children:[r.jsx(Ve,{asChild:!0,children:e}),r.jsx($e,{children:t})]}):r.jsx(r.Fragment,{children:e});X.__docgenInfo={description:"",methods:[],displayName:"PaginationButtonWithTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const dt="_pagination__item_i63de_1",ut={pagination__item:dt},Ae=({disabled:e,index:t,page:a})=>{const{page:n}=S();return r.jsx(ze,{type:"page",asChild:!0,className:ut.pagination__item,...a,children:r.jsx(W,{disabled:e,variant:n===a.value?G.default:G.ghost,children:a.value})},t)};Ae.__docgenInfo={description:"",methods:[],displayName:"PaginationItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: number;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}},description:""}}};const mt=Object.freeze([{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"100",value:"100"},{label:"300",value:"300"}]),ee={"pagination-page-size-selector":"_pagination-page-size-selector_1uwdi_2","pagination-page-size-selector__label":"_pagination-page-size-selector__label_1uwdi_7"},Ge=({onSelectChange:e,renderTotalItemsLabel:t})=>{const{count:a,pageSize:n}=S(),o=s=>{e&&s.value[0]&&e(s.value[0])};return r.jsxs("div",{className:ee["pagination-page-size-selector"],children:[r.jsxs(Ue,{defaultValue:[n.toString()],items:mt,onValueChange:o,children:[r.jsx(Xe,{}),r.jsx(Ze,{})]}),r.jsx("div",{className:ee["pagination-page-size-selector__label"],children:t({totalItems:a})})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"PaginationPageSizeSelector",props:{onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},renderTotalItemsLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""}}};const Pt="_pagination_6qm34_2",bt={pagination:Pt},Tt=({totalItems:e})=>`of ${e} results`,c=p.forwardRef(({className:e,disabled:t,defaultPage:a,labelTooltipNext:n,labelTooltipPrev:o,onPageChange:s,page:i,pageSize:m=10,siblingCount:d,totalItems:g,renderTotalItemsLabel:h=Tt,withPageSizeSelector:f,...V},u)=>{const[Y,C]=p.useState(m),[$,I]=p.useState(a??1),y=i!==void 0,l=y&&i?i:$;p.useEffect(()=>{y||I(a??1)},[g,Y,a,y]);const v=P=>{y||I(P.page),s==null||s(P)},D=P=>{C(Number(P))};return r.jsxs(Le,{className:we(bt.pagination,e),count:g,defaultPage:a,onPageChange:v,page:l,pageSize:Y,ref:u,siblingCount:d,...V,children:[f&&r.jsx(Ge,{onSelectChange:D,renderTotalItemsLabel:h}),r.jsx(X,{tooltip:o,children:r.jsx(je,{asChild:!0,children:r.jsx(W,{disabled:t,variant:G.ghost,children:r.jsx(Q,{name:J.chevronLeft})})})}),r.jsx(Je,{children:P=>P.pages.map((K,M)=>K.type==="page"?r.jsx(Ae,{page:K,index:M,disabled:t},M):r.jsx(Ne,{asChild:!0,index:M,children:r.jsx(W,{disabled:!0,variant:G.ghost,children:"…"})},M))}),r.jsx(X,{tooltip:n,children:r.jsx(Oe,{asChild:!0,children:r.jsx(W,{disabled:t,variant:G.ghost,children:r.jsx(Q,{name:J.chevronRight})})})})]})});c.displayName="Pagination";c.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},defaultPage:{required:!1,tsType:{name:"number"},description:"The initial active page. Use when you don't need to control the active page of the pagination."},labelTooltipNext:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "next page" button.'},labelTooltipPrev:{required:!1,tsType:{name:"string"},description:'The tooltip label on the "previous page" button.'},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PaginationPageChangeDetail) => void",signature:{arguments:[{type:{name:"PaginationPageChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the active page changes."},page:{required:!1,tsType:{name:"number"},description:"The controlled active page"},pageSize:{required:!1,tsType:{name:"number"},description:"The number of items per page.",defaultValue:{value:"10",computed:!1}},renderTotalItemsLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { totalItems: number }) => string | number",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ totalItems: number }",signature:{properties:[{key:"totalItems",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"Format the label displayed near the per-page selector.",defaultValue:{value:"({ totalItems }) => `of ${totalItems} results`",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"The number of pages to show beside active page."},totalItems:{required:!0,tsType:{name:"number"},description:"The total number of items."},withPageSizeSelector:{required:!1,tsType:{name:"boolean"},description:"Whether the per-page selector is displayed."}},composes:["ComponentPropsWithRef"]};const ht={argTypes:He(["defaultPage","onPageChange","page","pageSize","renderTotalItemsLabel"]),component:c,title:"React Components/Pagination"},_={argTypes:Ke({disabled:{table:{category:b.general}},labelTooltipNext:{table:{category:b.general}},labelTooltipPrev:{table:{category:b.general}},pageSize:{table:{category:b.general}},page:{table:{category:b.general}},siblingCount:{table:{category:b.general}},totalItems:{table:{category:b.general}},withPageSizeSelector:{table:{category:b.general}}}),args:{totalItems:5e3}},E={tags:["!dev"],parameters:{docs:{source:{...Re()}}},render:({})=>{const[e,t]=p.useState(1);function a({page:n}){t(n)}return T.createElement(c,{page:e,onPageChange:a,totalItems:500})}},R={tags:["!dev"],render:({})=>T.createElement(c,{totalItems:5e3})},N={tags:["!dev"],render:({})=>T.createElement(c,{totalItems:500,disabled:!0})},z={tags:["!dev"],render:({})=>T.createElement(c,{pageSize:25,totalItems:500})},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>T.createElement(c,{totalItems:100,withPageSizeSelector:!0})},j={tags:["!dev"],render:({})=>T.createElement(c,{defaultPage:5,siblingCount:2,totalItems:500})},L={tags:["!dev"],render:({})=>T.createElement(c,{labelTooltipPrev:"Go to previous page",labelTooltipNext:"Go to next page",totalItems:500})},A={tags:["!dev"],parameters:{docs:{source:{...Re()}}},render:({})=>T.createElement(c,{totalItems:500,renderTotalItemsLabel:({totalItems:e})=>`of ${e} results`,withPageSizeSelector:!0})};var te,ae,ne;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,se;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ge,le;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={5000} />
}`,...(le=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:le.source}}};var pe,ce,de;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination totalItems={500} disabled />
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,Pe;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination pageSize={25} totalItems={500} />
}`,...(Pe=(me=z.parameters)==null?void 0:me.docs)==null?void 0:Pe.source}}};var be,Te,he;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Pagination totalItems={100} withPageSizeSelector />
}`,...(he=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var ve,Se,fe;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination defaultPage={5} siblingCount={2} totalItems={500} />
}`,...(fe=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ye,Ce,Ie;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Pagination labelTooltipPrev={'Go to previous page'} labelTooltipNext={'Go to next page'} totalItems={500} />
}`,...(Ie=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var xe,_e,Ee;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ee=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};const vt=["Demo","Controlled","Default","Disabled","ItemsPerPage","Overview","SiblingCount","WithLabels","TotalItems"],zt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:E,Default:R,Demo:_,Disabled:N,ItemsPerPage:z,Overview:O,SiblingCount:j,TotalItems:A,WithLabels:L,__namedExportsOrder:vt,default:ht},Symbol.toStringTag,{value:"Module"}));export{E as C,R as D,z as I,O,zt as P,j as S,A as T,L as W,N as a};
