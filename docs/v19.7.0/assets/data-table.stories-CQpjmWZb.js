import{r as w,e as h}from"./index-jIWwRBLr.js";import{j as T}from"./jsx-runtime-Cfl8ynUo.js";import{T as Bn}from"./Table-DkuzY8hZ.js";import{u as zn}from"./context-C_-r2uoG.js";import{c as xn,b as Nn}from"./index-DaUvfsZM.js";import{c as Kn,b as Un,a as Jn}from"./index-DrSf431n.js";import{S as Xn}from"./Skeleton-DCKEB8Ic.js";import{c as Ce}from"./index-CqY9YpN0.js";import{I as Wn,a as ge}from"./icon-name-D0KNfDOz.js";import{d as Yn,c as Zn}from"./PaginationPageSelector-BM82wr0C.js";import{T as G,a as j}from"./Text-CAQM6i-X.js";import{e as Qn,o as et,C as re}from"./controls-BtiQQn1l.js";import{s as I}from"./source-CPEZJ6oD.js";/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function $(e,a){return typeof e=="function"?e(a):e}function P(e,a){return n=>{a.setState(t=>({...t,[e]:$(n,t[e])}))}}function ue(e){return e instanceof Function}function nt(e){return Array.isArray(e)&&e.every(a=>typeof a=="number")}function tt(e,a){const n=[],t=o=>{o.forEach(r=>{n.push(r);const s=a(r);s!=null&&s.length&&t(s)})};return t(e),n}function S(e,a,n){let t=[],o;return r=>{let s;n.key&&n.debug&&(s=Date.now());const i=e(r);if(!(i.length!==t.length||i.some((g,f)=>t[f]!==g)))return o;t=i;let u;if(n.key&&n.debug&&(u=Date.now()),o=a(...i),n==null||n.onChange==null||n.onChange(o),n.key&&n.debug&&n!=null&&n.debug()){const g=Math.round((Date.now()-s)*100)/100,f=Math.round((Date.now()-u)*100)/100,c=f/16,d=(m,p)=>{for(m=String(m);m.length<p;)m=" "+m;return m};console.info(`%c⏱ ${d(f,5)} /${d(g,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*c,120))}deg 100% 31%);`,n==null?void 0:n.key)}return o}}function b(e,a,n,t){return{debug:()=>{var o;return(o=e==null?void 0:e.debugAll)!=null?o:e[a]},key:!1,onChange:t}}function at(e,a,n,t){const o=()=>{var s;return(s=r.getValue())!=null?s:e.options.renderFallbackValue},r={id:`${a.id}_${n.id}`,row:a,column:n,getValue:()=>a.getValue(t),renderValue:o,getContext:S(()=>[e,n,a,r],(s,i,l,u)=>({table:s,column:i,row:l,cell:u,getValue:u.getValue,renderValue:u.renderValue}),b(e.options,"debugCells"))};return e._features.forEach(s=>{s.createCell==null||s.createCell(r,n,a,e)},{}),r}function ot(e,a,n,t){var o,r;const i={...e._getDefaultColumnDef(),...a},l=i.accessorKey;let u=(o=(r=i.id)!=null?r:l?typeof String.prototype.replaceAll=="function"?l.replaceAll(".","_"):l.replace(/\./g,"_"):void 0)!=null?o:typeof i.header=="string"?i.header:void 0,g;if(i.accessorFn?g=i.accessorFn:l&&(l.includes(".")?g=c=>{let d=c;for(const p of l.split(".")){var m;d=(m=d)==null?void 0:m[p]}return d}:g=c=>c[i.accessorKey]),!u)throw new Error;let f={id:`${String(u)}`,accessorFn:g,parent:t,depth:n,columnDef:i,columns:[],getFlatColumns:S(()=>[!0],()=>{var c;return[f,...(c=f.columns)==null?void 0:c.flatMap(d=>d.getFlatColumns())]},b(e.options,"debugColumns")),getLeafColumns:S(()=>[e._getOrderColumnsFn()],c=>{var d;if((d=f.columns)!=null&&d.length){let m=f.columns.flatMap(p=>p.getLeafColumns());return c(m)}return[f]},b(e.options,"debugColumns"))};for(const c of e._features)c.createColumn==null||c.createColumn(f,e);return f}const x="debugHeaders";function qe(e,a,n){var t;let r={id:(t=n.id)!=null?t:a.id,column:a,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const s=[],i=l=>{l.subHeaders&&l.subHeaders.length&&l.subHeaders.map(i),s.push(l)};return i(r),s},getContext:()=>({table:e,header:r,column:a})};return e._features.forEach(s=>{s.createHeader==null||s.createHeader(r,e)}),r}const rt={createTable:e=>{e.getHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,o)=>{var r,s;const i=(r=t==null?void 0:t.map(f=>n.find(c=>c.id===f)).filter(Boolean))!=null?r:[],l=(s=o==null?void 0:o.map(f=>n.find(c=>c.id===f)).filter(Boolean))!=null?s:[],u=n.filter(f=>!(t!=null&&t.includes(f.id))&&!(o!=null&&o.includes(f.id)));return se(a,[...i,...u,...l],e)},b(e.options,x)),e.getCenterHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,o)=>(n=n.filter(r=>!(t!=null&&t.includes(r.id))&&!(o!=null&&o.includes(r.id))),se(a,n,e,"center")),b(e.options,x)),e.getLeftHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(a,n,t)=>{var o;const r=(o=t==null?void 0:t.map(s=>n.find(i=>i.id===s)).filter(Boolean))!=null?o:[];return se(a,r,e,"left")},b(e.options,x)),e.getRightHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(a,n,t)=>{var o;const r=(o=t==null?void 0:t.map(s=>n.find(i=>i.id===s)).filter(Boolean))!=null?o:[];return se(a,r,e,"right")},b(e.options,x)),e.getFooterGroups=S(()=>[e.getHeaderGroups()],a=>[...a].reverse(),b(e.options,x)),e.getLeftFooterGroups=S(()=>[e.getLeftHeaderGroups()],a=>[...a].reverse(),b(e.options,x)),e.getCenterFooterGroups=S(()=>[e.getCenterHeaderGroups()],a=>[...a].reverse(),b(e.options,x)),e.getRightFooterGroups=S(()=>[e.getRightHeaderGroups()],a=>[...a].reverse(),b(e.options,x)),e.getFlatHeaders=S(()=>[e.getHeaderGroups()],a=>a.map(n=>n.headers).flat(),b(e.options,x)),e.getLeftFlatHeaders=S(()=>[e.getLeftHeaderGroups()],a=>a.map(n=>n.headers).flat(),b(e.options,x)),e.getCenterFlatHeaders=S(()=>[e.getCenterHeaderGroups()],a=>a.map(n=>n.headers).flat(),b(e.options,x)),e.getRightFlatHeaders=S(()=>[e.getRightHeaderGroups()],a=>a.map(n=>n.headers).flat(),b(e.options,x)),e.getCenterLeafHeaders=S(()=>[e.getCenterFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),b(e.options,x)),e.getLeftLeafHeaders=S(()=>[e.getLeftFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),b(e.options,x)),e.getRightLeafHeaders=S(()=>[e.getRightFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),b(e.options,x)),e.getLeafHeaders=S(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(a,n,t)=>{var o,r,s,i,l,u;return[...(o=(r=a[0])==null?void 0:r.headers)!=null?o:[],...(s=(i=n[0])==null?void 0:i.headers)!=null?s:[],...(l=(u=t[0])==null?void 0:u.headers)!=null?l:[]].map(g=>g.getLeafHeaders()).flat()},b(e.options,x))}};function se(e,a,n,t){var o,r;let s=0;const i=function(c,d){d===void 0&&(d=1),s=Math.max(s,d),c.filter(m=>m.getIsVisible()).forEach(m=>{var p;(p=m.columns)!=null&&p.length&&i(m.columns,d+1)},0)};i(e);let l=[];const u=(c,d)=>{const m={depth:d,id:[t,`${d}`].filter(Boolean).join("_"),headers:[]},p=[];c.forEach(y=>{const C=[...p].reverse()[0],R=y.column.depth===m.depth;let v,V=!1;if(R&&y.column.parent?v=y.column.parent:(v=y.column,V=!0),C&&(C==null?void 0:C.column)===v)C.subHeaders.push(y);else{const E=qe(n,v,{id:[t,d,v.id,y==null?void 0:y.id].filter(Boolean).join("_"),isPlaceholder:V,placeholderId:V?`${p.filter(q=>q.column===v).length}`:void 0,depth:d,index:p.length});E.subHeaders.push(y),p.push(E)}m.headers.push(y),y.headerGroup=m}),l.push(m),d>0&&u(p,d-1)},g=a.map((c,d)=>qe(n,c,{depth:s,index:d}));u(g,s-1),l.reverse();const f=c=>c.filter(m=>m.column.getIsVisible()).map(m=>{let p=0,y=0,C=[0];m.subHeaders&&m.subHeaders.length?(C=[],f(m.subHeaders).forEach(v=>{let{colSpan:V,rowSpan:E}=v;p+=V,C.push(E)})):p=1;const R=Math.min(...C);return y=y+R,m.colSpan=p,m.rowSpan=y,{colSpan:p,rowSpan:y}});return f((o=(r=l[0])==null?void 0:r.headers)!=null?o:[]),l}const st=(e,a,n,t,o,r,s)=>{let i={id:a,index:t,original:n,depth:o,parentId:s,_valuesCache:{},_uniqueValuesCache:{},getValue:l=>{if(i._valuesCache.hasOwnProperty(l))return i._valuesCache[l];const u=e.getColumn(l);if(u!=null&&u.accessorFn)return i._valuesCache[l]=u.accessorFn(i.original,t),i._valuesCache[l]},getUniqueValues:l=>{if(i._uniqueValuesCache.hasOwnProperty(l))return i._uniqueValuesCache[l];const u=e.getColumn(l);if(u!=null&&u.accessorFn)return u.columnDef.getUniqueValues?(i._uniqueValuesCache[l]=u.columnDef.getUniqueValues(i.original,t),i._uniqueValuesCache[l]):(i._uniqueValuesCache[l]=[i.getValue(l)],i._uniqueValuesCache[l])},renderValue:l=>{var u;return(u=i.getValue(l))!=null?u:e.options.renderFallbackValue},subRows:[],getLeafRows:()=>tt(i.subRows,l=>l.subRows),getParentRow:()=>i.parentId?e.getRow(i.parentId,!0):void 0,getParentRows:()=>{let l=[],u=i;for(;;){const g=u.getParentRow();if(!g)break;l.push(g),u=g}return l.reverse()},getAllCells:S(()=>[e.getAllLeafColumns()],l=>l.map(u=>at(e,i,u,u.id)),b(e.options,"debugRows")),_getAllCellsByColumnId:S(()=>[i.getAllCells()],l=>l.reduce((u,g)=>(u[g.column.id]=g,u),{}),b(e.options,"debugRows"))};for(let l=0;l<e._features.length;l++){const u=e._features[l];u==null||u.createRow==null||u.createRow(i,e)}return i},it={createColumn:(e,a)=>{e._getFacetedRowModel=a.options.getFacetedRowModel&&a.options.getFacetedRowModel(a,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():a.getPreFilteredRowModel(),e._getFacetedUniqueValues=a.options.getFacetedUniqueValues&&a.options.getFacetedUniqueValues(a,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=a.options.getFacetedMinMaxValues&&a.options.getFacetedMinMaxValues(a,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},En=(e,a,n)=>{var t,o;const r=n==null||(t=n.toString())==null?void 0:t.toLowerCase();return!!(!((o=e.getValue(a))==null||(o=o.toString())==null||(o=o.toLowerCase())==null)&&o.includes(r))};En.autoRemove=e=>M(e);const Pn=(e,a,n)=>{var t;return!!(!((t=e.getValue(a))==null||(t=t.toString())==null)&&t.includes(n))};Pn.autoRemove=e=>M(e);const Mn=(e,a,n)=>{var t;return((t=e.getValue(a))==null||(t=t.toString())==null?void 0:t.toLowerCase())===(n==null?void 0:n.toLowerCase())};Mn.autoRemove=e=>M(e);const Vn=(e,a,n)=>{var t;return(t=e.getValue(a))==null?void 0:t.includes(n)};Vn.autoRemove=e=>M(e);const Fn=(e,a,n)=>!n.some(t=>{var o;return!((o=e.getValue(a))!=null&&o.includes(t))});Fn.autoRemove=e=>M(e)||!(e!=null&&e.length);const In=(e,a,n)=>n.some(t=>{var o;return(o=e.getValue(a))==null?void 0:o.includes(t)});In.autoRemove=e=>M(e)||!(e!=null&&e.length);const $n=(e,a,n)=>e.getValue(a)===n;$n.autoRemove=e=>M(e);const An=(e,a,n)=>e.getValue(a)==n;An.autoRemove=e=>M(e);const De=(e,a,n)=>{let[t,o]=n;const r=e.getValue(a);return r>=t&&r<=o};De.resolveFilterValue=e=>{let[a,n]=e,t=typeof a!="number"?parseFloat(a):a,o=typeof n!="number"?parseFloat(n):n,r=a===null||Number.isNaN(t)?-1/0:t,s=n===null||Number.isNaN(o)?1/0:o;if(r>s){const i=r;r=s,s=i}return[r,s]};De.autoRemove=e=>M(e)||M(e[0])&&M(e[1]);const F={includesString:En,includesStringSensitive:Pn,equalsString:Mn,arrIncludes:Vn,arrIncludesAll:Fn,arrIncludesSome:In,equals:$n,weakEquals:An,inNumberRange:De};function M(e){return e==null||e===""}const lt={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:P("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,a)=>{e.getAutoFilterFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);return typeof t=="string"?F.includesString:typeof t=="number"?F.inNumberRange:typeof t=="boolean"||t!==null&&typeof t=="object"?F.equals:Array.isArray(t)?F.arrIncludes:F.weakEquals},e.getFilterFn=()=>{var n,t;return ue(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(n=(t=a.options.filterFns)==null?void 0:t[e.columnDef.filterFn])!=null?n:F[e.columnDef.filterFn]},e.getCanFilter=()=>{var n,t,o;return((n=e.columnDef.enableColumnFilter)!=null?n:!0)&&((t=a.options.enableColumnFilters)!=null?t:!0)&&((o=a.options.enableFilters)!=null?o:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var n;return(n=a.getState().columnFilters)==null||(n=n.find(t=>t.id===e.id))==null?void 0:n.value},e.getFilterIndex=()=>{var n,t;return(n=(t=a.getState().columnFilters)==null?void 0:t.findIndex(o=>o.id===e.id))!=null?n:-1},e.setFilterValue=n=>{a.setColumnFilters(t=>{const o=e.getFilterFn(),r=t==null?void 0:t.find(g=>g.id===e.id),s=$(n,r?r.value:void 0);if(Ge(o,s,e)){var i;return(i=t==null?void 0:t.filter(g=>g.id!==e.id))!=null?i:[]}const l={id:e.id,value:s};if(r){var u;return(u=t==null?void 0:t.map(g=>g.id===e.id?l:g))!=null?u:[]}return t!=null&&t.length?[...t,l]:[l]})}},createRow:(e,a)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=a=>{const n=e.getAllLeafColumns(),t=o=>{var r;return(r=$(a,o))==null?void 0:r.filter(s=>{const i=n.find(l=>l.id===s.id);if(i){const l=i.getFilterFn();if(Ge(l,s.value,i))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(t)},e.resetColumnFilters=a=>{var n,t;e.setColumnFilters(a?[]:(n=(t=e.initialState)==null?void 0:t.columnFilters)!=null?n:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function Ge(e,a,n){return(e&&e.autoRemove?e.autoRemove(a,n):!1)||typeof a>"u"||typeof a=="string"&&!a}const ut=(e,a,n)=>n.reduce((t,o)=>{const r=o.getValue(e);return t+(typeof r=="number"?r:0)},0),dt=(e,a,n)=>{let t;return n.forEach(o=>{const r=o.getValue(e);r!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}),t},gt=(e,a,n)=>{let t;return n.forEach(o=>{const r=o.getValue(e);r!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}),t},ct=(e,a,n)=>{let t,o;return n.forEach(r=>{const s=r.getValue(e);s!=null&&(t===void 0?s>=s&&(t=o=s):(t>s&&(t=s),o<s&&(o=s)))}),[t,o]},mt=(e,a)=>{let n=0,t=0;if(a.forEach(o=>{let r=o.getValue(e);r!=null&&(r=+r)>=r&&(++n,t+=r)}),n)return t/n},pt=(e,a)=>{if(!a.length)return;const n=a.map(r=>r.getValue(e));if(!nt(n))return;if(n.length===1)return n[0];const t=Math.floor(n.length/2),o=n.sort((r,s)=>r-s);return n.length%2!==0?o[t]:(o[t-1]+o[t])/2},ft=(e,a)=>Array.from(new Set(a.map(n=>n.getValue(e))).values()),ht=(e,a)=>new Set(a.map(n=>n.getValue(e))).size,St=(e,a)=>a.length,ce={sum:ut,min:dt,max:gt,extent:ct,mean:mt,median:pt,unique:ft,uniqueCount:ht,count:St},bt={getDefaultColumnDef:()=>({aggregatedCell:e=>{var a,n;return(a=(n=e.getValue())==null||n.toString==null?void 0:n.toString())!=null?a:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:P("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,a)=>{e.toggleGrouping=()=>{a.setGrouping(n=>n!=null&&n.includes(e.id)?n.filter(t=>t!==e.id):[...n??[],e.id])},e.getCanGroup=()=>{var n,t;return((n=e.columnDef.enableGrouping)!=null?n:!0)&&((t=a.options.enableGrouping)!=null?t:!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.includes(e.id)},e.getGroupedIndex=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const n=e.getCanGroup();return()=>{n&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);if(typeof t=="number")return ce.sum;if(Object.prototype.toString.call(t)==="[object Date]")return ce.extent},e.getAggregationFn=()=>{var n,t;if(!e)throw new Error;return ue(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(n=(t=a.options.aggregationFns)==null?void 0:t[e.columnDef.aggregationFn])!=null?n:ce[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=a=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(a),e.resetGrouping=a=>{var n,t;e.setGrouping(a?[]:(n=(t=e.initialState)==null?void 0:t.grouping)!=null?n:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,a)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=n=>{if(e._groupingValuesCache.hasOwnProperty(n))return e._groupingValuesCache[n];const t=a.getColumn(n);return t!=null&&t.columnDef.getGroupingValue?(e._groupingValuesCache[n]=t.columnDef.getGroupingValue(e.original),e._groupingValuesCache[n]):e.getValue(n)},e._groupingValuesCache={}},createCell:(e,a,n,t)=>{e.getIsGrouped=()=>a.getIsGrouped()&&a.id===n.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&a.getIsGrouped(),e.getIsAggregated=()=>{var o;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((o=n.subRows)!=null&&o.length)}}};function Ct(e,a,n){if(!(a!=null&&a.length)||!n)return e;const t=e.filter(r=>!a.includes(r.id));return n==="remove"?t:[...a.map(r=>e.find(s=>s.id===r)).filter(Boolean),...t]}const yt={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:P("columnOrder",e)}),createColumn:(e,a)=>{e.getIndex=S(n=>[ae(a,n)],n=>n.findIndex(t=>t.id===e.id),b(a.options,"debugColumns")),e.getIsFirstColumn=n=>{var t;return((t=ae(a,n)[0])==null?void 0:t.id)===e.id},e.getIsLastColumn=n=>{var t;const o=ae(a,n);return((t=o[o.length-1])==null?void 0:t.id)===e.id}},createTable:e=>{e.setColumnOrder=a=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(a),e.resetColumnOrder=a=>{var n;e.setColumnOrder(a?[]:(n=e.initialState.columnOrder)!=null?n:[])},e._getOrderColumnsFn=S(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(a,n,t)=>o=>{let r=[];if(!(a!=null&&a.length))r=o;else{const s=[...a],i=[...o];for(;i.length&&s.length;){const l=s.shift(),u=i.findIndex(g=>g.id===l);u>-1&&r.push(i.splice(u,1)[0])}r=[...r,...i]}return Ct(r,n,t)},b(e.options,"debugTable"))}},me=()=>({left:[],right:[]}),wt={getInitialState:e=>({columnPinning:me(),...e}),getDefaultOptions:e=>({onColumnPinningChange:P("columnPinning",e)}),createColumn:(e,a)=>{e.pin=n=>{const t=e.getLeafColumns().map(o=>o.id).filter(Boolean);a.setColumnPinning(o=>{var r,s;if(n==="right"){var i,l;return{left:((i=o==null?void 0:o.left)!=null?i:[]).filter(f=>!(t!=null&&t.includes(f))),right:[...((l=o==null?void 0:o.right)!=null?l:[]).filter(f=>!(t!=null&&t.includes(f))),...t]}}if(n==="left"){var u,g;return{left:[...((u=o==null?void 0:o.left)!=null?u:[]).filter(f=>!(t!=null&&t.includes(f))),...t],right:((g=o==null?void 0:o.right)!=null?g:[]).filter(f=>!(t!=null&&t.includes(f)))}}return{left:((r=o==null?void 0:o.left)!=null?r:[]).filter(f=>!(t!=null&&t.includes(f))),right:((s=o==null?void 0:o.right)!=null?s:[]).filter(f=>!(t!=null&&t.includes(f)))}})},e.getCanPin=()=>e.getLeafColumns().some(t=>{var o,r,s;return((o=t.columnDef.enablePinning)!=null?o:!0)&&((r=(s=a.options.enableColumnPinning)!=null?s:a.options.enablePinning)!=null?r:!0)}),e.getIsPinned=()=>{const n=e.getLeafColumns().map(i=>i.id),{left:t,right:o}=a.getState().columnPinning,r=n.some(i=>t==null?void 0:t.includes(i)),s=n.some(i=>o==null?void 0:o.includes(i));return r?"left":s?"right":!1},e.getPinnedIndex=()=>{var n,t;const o=e.getIsPinned();return o?(n=(t=a.getState().columnPinning)==null||(t=t[o])==null?void 0:t.indexOf(e.id))!=null?n:-1:0}},createRow:(e,a)=>{e.getCenterVisibleCells=S(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left,a.getState().columnPinning.right],(n,t,o)=>{const r=[...t??[],...o??[]];return n.filter(s=>!r.includes(s.column.id))},b(a.options,"debugRows")),e.getLeftVisibleCells=S(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left],(n,t)=>(t??[]).map(r=>n.find(s=>s.column.id===r)).filter(Boolean).map(r=>({...r,position:"left"})),b(a.options,"debugRows")),e.getRightVisibleCells=S(()=>[e._getAllVisibleCells(),a.getState().columnPinning.right],(n,t)=>(t??[]).map(r=>n.find(s=>s.column.id===r)).filter(Boolean).map(r=>({...r,position:"right"})),b(a.options,"debugRows"))},createTable:e=>{e.setColumnPinning=a=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(a),e.resetColumnPinning=a=>{var n,t;return e.setColumnPinning(a?me():(n=(t=e.initialState)==null?void 0:t.columnPinning)!=null?n:me())},e.getIsSomeColumnsPinned=a=>{var n;const t=e.getState().columnPinning;if(!a){var o,r;return!!((o=t.left)!=null&&o.length||(r=t.right)!=null&&r.length)}return!!((n=t[a])!=null&&n.length)},e.getLeftLeafColumns=S(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(a,n)=>(n??[]).map(t=>a.find(o=>o.id===t)).filter(Boolean),b(e.options,"debugColumns")),e.getRightLeafColumns=S(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(a,n)=>(n??[]).map(t=>a.find(o=>o.id===t)).filter(Boolean),b(e.options,"debugColumns")),e.getCenterLeafColumns=S(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t)=>{const o=[...n??[],...t??[]];return a.filter(r=>!o.includes(r.id))},b(e.options,"debugColumns"))}};function Tt(e){return e||(typeof document<"u"?document:null)}const ie={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},pe=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),Rt={getDefaultColumnDef:()=>ie,getInitialState:e=>({columnSizing:{},columnSizingInfo:pe(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:P("columnSizing",e),onColumnSizingInfoChange:P("columnSizingInfo",e)}),createColumn:(e,a)=>{e.getSize=()=>{var n,t,o;const r=a.getState().columnSizing[e.id];return Math.min(Math.max((n=e.columnDef.minSize)!=null?n:ie.minSize,(t=r??e.columnDef.size)!=null?t:ie.size),(o=e.columnDef.maxSize)!=null?o:ie.maxSize)},e.getStart=S(n=>[n,ae(a,n),a.getState().columnSizing],(n,t)=>t.slice(0,e.getIndex(n)).reduce((o,r)=>o+r.getSize(),0),b(a.options,"debugColumns")),e.getAfter=S(n=>[n,ae(a,n),a.getState().columnSizing],(n,t)=>t.slice(e.getIndex(n)+1).reduce((o,r)=>o+r.getSize(),0),b(a.options,"debugColumns")),e.resetSize=()=>{a.setColumnSizing(n=>{let{[e.id]:t,...o}=n;return o})},e.getCanResize=()=>{var n,t;return((n=e.columnDef.enableResizing)!=null?n:!0)&&((t=a.options.enableColumnResizing)!=null?t:!0)},e.getIsResizing=()=>a.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,a)=>{e.getSize=()=>{let n=0;const t=o=>{if(o.subHeaders.length)o.subHeaders.forEach(t);else{var r;n+=(r=o.column.getSize())!=null?r:0}};return t(e),n},e.getStart=()=>{if(e.index>0){const n=e.headerGroup.headers[e.index-1];return n.getStart()+n.getSize()}return 0},e.getResizeHandler=n=>{const t=a.getColumn(e.column.id),o=t==null?void 0:t.getCanResize();return r=>{if(!t||!o||(r.persist==null||r.persist(),fe(r)&&r.touches&&r.touches.length>1))return;const s=e.getSize(),i=e?e.getLeafHeaders().map(C=>[C.column.id,C.column.getSize()]):[[t.id,t.getSize()]],l=fe(r)?Math.round(r.touches[0].clientX):r.clientX,u={},g=(C,R)=>{typeof R=="number"&&(a.setColumnSizingInfo(v=>{var V,E;const q=a.options.columnResizeDirection==="rtl"?-1:1,Ae=(R-((V=v==null?void 0:v.startOffset)!=null?V:0))*q,He=Math.max(Ae/((E=v==null?void 0:v.startSize)!=null?E:0),-.999999);return v.columnSizingStart.forEach(Ln=>{let[On,ke]=Ln;u[On]=Math.round(Math.max(ke+ke*He,0)*100)/100}),{...v,deltaOffset:Ae,deltaPercentage:He}}),(a.options.columnResizeMode==="onChange"||C==="end")&&a.setColumnSizing(v=>({...v,...u})))},f=C=>g("move",C),c=C=>{g("end",C),a.setColumnSizingInfo(R=>({...R,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},d=Tt(n),m={moveHandler:C=>f(C.clientX),upHandler:C=>{d==null||d.removeEventListener("mousemove",m.moveHandler),d==null||d.removeEventListener("mouseup",m.upHandler),c(C.clientX)}},p={moveHandler:C=>(C.cancelable&&(C.preventDefault(),C.stopPropagation()),f(C.touches[0].clientX),!1),upHandler:C=>{var R;d==null||d.removeEventListener("touchmove",p.moveHandler),d==null||d.removeEventListener("touchend",p.upHandler),C.cancelable&&(C.preventDefault(),C.stopPropagation()),c((R=C.touches[0])==null?void 0:R.clientX)}},y=vt()?{passive:!1}:!1;fe(r)?(d==null||d.addEventListener("touchmove",p.moveHandler,y),d==null||d.addEventListener("touchend",p.upHandler,y)):(d==null||d.addEventListener("mousemove",m.moveHandler,y),d==null||d.addEventListener("mouseup",m.upHandler,y)),a.setColumnSizingInfo(C=>({...C,startOffset:l,startSize:s,deltaOffset:0,deltaPercentage:0,columnSizingStart:i,isResizingColumn:t.id}))}}},createTable:e=>{e.setColumnSizing=a=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(a),e.setColumnSizingInfo=a=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(a),e.resetColumnSizing=a=>{var n;e.setColumnSizing(a?{}:(n=e.initialState.columnSizing)!=null?n:{})},e.resetHeaderSizeInfo=a=>{var n;e.setColumnSizingInfo(a?pe():(n=e.initialState.columnSizingInfo)!=null?n:pe())},e.getTotalSize=()=>{var a,n;return(a=(n=e.getHeaderGroups()[0])==null?void 0:n.headers.reduce((t,o)=>t+o.getSize(),0))!=null?a:0},e.getLeftTotalSize=()=>{var a,n;return(a=(n=e.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((t,o)=>t+o.getSize(),0))!=null?a:0},e.getCenterTotalSize=()=>{var a,n;return(a=(n=e.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((t,o)=>t+o.getSize(),0))!=null?a:0},e.getRightTotalSize=()=>{var a,n;return(a=(n=e.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((t,o)=>t+o.getSize(),0))!=null?a:0}}};let le=null;function vt(){if(typeof le=="boolean")return le;let e=!1;try{const a={get passive(){return e=!0,!1}},n=()=>{};window.addEventListener("test",n,a),window.removeEventListener("test",n)}catch{e=!1}return le=e,le}function fe(e){return e.type==="touchstart"}const Dt={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:P("columnVisibility",e)}),createColumn:(e,a)=>{e.toggleVisibility=n=>{e.getCanHide()&&a.setColumnVisibility(t=>({...t,[e.id]:n??!e.getIsVisible()}))},e.getIsVisible=()=>{var n,t;const o=e.columns;return(n=o.length?o.some(r=>r.getIsVisible()):(t=a.getState().columnVisibility)==null?void 0:t[e.id])!=null?n:!0},e.getCanHide=()=>{var n,t;return((n=e.columnDef.enableHiding)!=null?n:!0)&&((t=a.options.enableHiding)!=null?t:!0)},e.getToggleVisibilityHandler=()=>n=>{e.toggleVisibility==null||e.toggleVisibility(n.target.checked)}},createRow:(e,a)=>{e._getAllVisibleCells=S(()=>[e.getAllCells(),a.getState().columnVisibility],n=>n.filter(t=>t.column.getIsVisible()),b(a.options,"debugRows")),e.getVisibleCells=S(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(n,t,o)=>[...n,...t,...o],b(a.options,"debugRows"))},createTable:e=>{const a=(n,t)=>S(()=>[t(),t().filter(o=>o.getIsVisible()).map(o=>o.id).join("_")],o=>o.filter(r=>r.getIsVisible==null?void 0:r.getIsVisible()),b(e.options,"debugColumns"));e.getVisibleFlatColumns=a("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=a("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=a("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=a("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=a("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=n=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(n),e.resetColumnVisibility=n=>{var t;e.setColumnVisibility(n?{}:(t=e.initialState.columnVisibility)!=null?t:{})},e.toggleAllColumnsVisible=n=>{var t;n=(t=n)!=null?t:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((o,r)=>({...o,[r.id]:n||!(r.getCanHide!=null&&r.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>n=>{var t;e.toggleAllColumnsVisible((t=n.target)==null?void 0:t.checked)}}};function ae(e,a){return a?a==="center"?e.getCenterVisibleLeafColumns():a==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const _t={createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},xt={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:P("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:a=>{var n;const t=(n=e.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[a.id])==null?void 0:n.getValue();return typeof t=="string"||typeof t=="number"}}),createColumn:(e,a)=>{e.getCanGlobalFilter=()=>{var n,t,o,r;return((n=e.columnDef.enableGlobalFilter)!=null?n:!0)&&((t=a.options.enableGlobalFilter)!=null?t:!0)&&((o=a.options.enableFilters)!=null?o:!0)&&((r=a.options.getColumnCanGlobalFilter==null?void 0:a.options.getColumnCanGlobalFilter(e))!=null?r:!0)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>F.includesString,e.getGlobalFilterFn=()=>{var a,n;const{globalFilterFn:t}=e.options;return ue(t)?t:t==="auto"?e.getGlobalAutoFilterFn():(a=(n=e.options.filterFns)==null?void 0:n[t])!=null?a:F[t]},e.setGlobalFilter=a=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(a)},e.resetGlobalFilter=a=>{e.setGlobalFilter(a?void 0:e.initialState.globalFilter)}}},Nt={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:P("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let a=!1,n=!1;e._autoResetExpanded=()=>{var t,o;if(!a){e._queue(()=>{a=!0});return}if((t=(o=e.options.autoResetAll)!=null?o:e.options.autoResetExpanded)!=null?t:!e.options.manualExpanding){if(n)return;n=!0,e._queue(()=>{e.resetExpanded(),n=!1})}},e.setExpanded=t=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(t),e.toggleAllRowsExpanded=t=>{t??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=t=>{var o,r;e.setExpanded(t?{}:(o=(r=e.initialState)==null?void 0:r.expanded)!=null?o:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(t=>t.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>t=>{t.persist==null||t.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const t=e.getState().expanded;return t===!0||Object.values(t).some(Boolean)},e.getIsAllRowsExpanded=()=>{const t=e.getState().expanded;return typeof t=="boolean"?t===!0:!(!Object.keys(t).length||e.getRowModel().flatRows.some(o=>!o.getIsExpanded()))},e.getExpandedDepth=()=>{let t=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(r=>{const s=r.split(".");t=Math.max(t,s.length)}),t},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,a)=>{e.toggleExpanded=n=>{a.setExpanded(t=>{var o;const r=t===!0?!0:!!(t!=null&&t[e.id]);let s={};if(t===!0?Object.keys(a.getRowModel().rowsById).forEach(i=>{s[i]=!0}):s=t,n=(o=n)!=null?o:!r,!r&&n)return{...s,[e.id]:!0};if(r&&!n){const{[e.id]:i,...l}=s;return l}return t})},e.getIsExpanded=()=>{var n;const t=a.getState().expanded;return!!((n=a.options.getIsRowExpanded==null?void 0:a.options.getIsRowExpanded(e))!=null?n:t===!0||t!=null&&t[e.id])},e.getCanExpand=()=>{var n,t,o;return(n=a.options.getRowCanExpand==null?void 0:a.options.getRowCanExpand(e))!=null?n:((t=a.options.enableExpanding)!=null?t:!0)&&!!((o=e.subRows)!=null&&o.length)},e.getIsAllParentsExpanded=()=>{let n=!0,t=e;for(;n&&t.parentId;)t=a.getRow(t.parentId,!0),n=t.getIsExpanded();return n},e.getToggleExpandedHandler=()=>{const n=e.getCanExpand();return()=>{n&&e.toggleExpanded()}}}},ye=0,we=10,he=()=>({pageIndex:ye,pageSize:we}),Et={getInitialState:e=>({...e,pagination:{...he(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:P("pagination",e)}),createTable:e=>{let a=!1,n=!1;e._autoResetPageIndex=()=>{var t,o;if(!a){e._queue(()=>{a=!0});return}if((t=(o=e.options.autoResetAll)!=null?o:e.options.autoResetPageIndex)!=null?t:!e.options.manualPagination){if(n)return;n=!0,e._queue(()=>{e.resetPageIndex(),n=!1})}},e.setPagination=t=>{const o=r=>$(t,r);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(o)},e.resetPagination=t=>{var o;e.setPagination(t?he():(o=e.initialState.pagination)!=null?o:he())},e.setPageIndex=t=>{e.setPagination(o=>{let r=$(t,o.pageIndex);const s=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return r=Math.max(0,Math.min(r,s)),{...o,pageIndex:r}})},e.resetPageIndex=t=>{var o,r;e.setPageIndex(t?ye:(o=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageIndex)!=null?o:ye)},e.resetPageSize=t=>{var o,r;e.setPageSize(t?we:(o=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageSize)!=null?o:we)},e.setPageSize=t=>{e.setPagination(o=>{const r=Math.max(1,$(t,o.pageSize)),s=o.pageSize*o.pageIndex,i=Math.floor(s/r);return{...o,pageIndex:i,pageSize:r}})},e.setPageCount=t=>e.setPagination(o=>{var r;let s=$(t,(r=e.options.pageCount)!=null?r:-1);return typeof s=="number"&&(s=Math.max(-1,s)),{...o,pageCount:s}}),e.getPageOptions=S(()=>[e.getPageCount()],t=>{let o=[];return t&&t>0&&(o=[...new Array(t)].fill(null).map((r,s)=>s)),o},b(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:t}=e.getState().pagination,o=e.getPageCount();return o===-1?!0:o===0?!1:t<o-1},e.previousPage=()=>e.setPageIndex(t=>t-1),e.nextPage=()=>e.setPageIndex(t=>t+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var t;return(t=e.options.pageCount)!=null?t:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var t;return(t=e.options.rowCount)!=null?t:e.getPrePaginationRowModel().rows.length}}},Se=()=>({top:[],bottom:[]}),Pt={getInitialState:e=>({rowPinning:Se(),...e}),getDefaultOptions:e=>({onRowPinningChange:P("rowPinning",e)}),createRow:(e,a)=>{e.pin=(n,t,o)=>{const r=t?e.getLeafRows().map(l=>{let{id:u}=l;return u}):[],s=o?e.getParentRows().map(l=>{let{id:u}=l;return u}):[],i=new Set([...s,e.id,...r]);a.setRowPinning(l=>{var u,g;if(n==="bottom"){var f,c;return{top:((f=l==null?void 0:l.top)!=null?f:[]).filter(p=>!(i!=null&&i.has(p))),bottom:[...((c=l==null?void 0:l.bottom)!=null?c:[]).filter(p=>!(i!=null&&i.has(p))),...Array.from(i)]}}if(n==="top"){var d,m;return{top:[...((d=l==null?void 0:l.top)!=null?d:[]).filter(p=>!(i!=null&&i.has(p))),...Array.from(i)],bottom:((m=l==null?void 0:l.bottom)!=null?m:[]).filter(p=>!(i!=null&&i.has(p)))}}return{top:((u=l==null?void 0:l.top)!=null?u:[]).filter(p=>!(i!=null&&i.has(p))),bottom:((g=l==null?void 0:l.bottom)!=null?g:[]).filter(p=>!(i!=null&&i.has(p)))}})},e.getCanPin=()=>{var n;const{enableRowPinning:t,enablePinning:o}=a.options;return typeof t=="function"?t(e):(n=t??o)!=null?n:!0},e.getIsPinned=()=>{const n=[e.id],{top:t,bottom:o}=a.getState().rowPinning,r=n.some(i=>t==null?void 0:t.includes(i)),s=n.some(i=>o==null?void 0:o.includes(i));return r?"top":s?"bottom":!1},e.getPinnedIndex=()=>{var n,t;const o=e.getIsPinned();if(!o)return-1;const r=(n=o==="top"?a.getTopRows():a.getBottomRows())==null?void 0:n.map(s=>{let{id:i}=s;return i});return(t=r==null?void 0:r.indexOf(e.id))!=null?t:-1}},createTable:e=>{e.setRowPinning=a=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(a),e.resetRowPinning=a=>{var n,t;return e.setRowPinning(a?Se():(n=(t=e.initialState)==null?void 0:t.rowPinning)!=null?n:Se())},e.getIsSomeRowsPinned=a=>{var n;const t=e.getState().rowPinning;if(!a){var o,r;return!!((o=t.top)!=null&&o.length||(r=t.bottom)!=null&&r.length)}return!!((n=t[a])!=null&&n.length)},e._getPinnedRows=(a,n,t)=>{var o;return((o=e.options.keepPinnedRows)==null||o?(n??[]).map(s=>{const i=e.getRow(s,!0);return i.getIsAllParentsExpanded()?i:null}):(n??[]).map(s=>a.find(i=>i.id===s))).filter(Boolean).map(s=>({...s,position:t}))},e.getTopRows=S(()=>[e.getRowModel().rows,e.getState().rowPinning.top],(a,n)=>e._getPinnedRows(a,n,"top"),b(e.options,"debugRows")),e.getBottomRows=S(()=>[e.getRowModel().rows,e.getState().rowPinning.bottom],(a,n)=>e._getPinnedRows(a,n,"bottom"),b(e.options,"debugRows")),e.getCenterRows=S(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(a,n,t)=>{const o=new Set([...n??[],...t??[]]);return a.filter(r=>!o.has(r.id))},b(e.options,"debugRows"))}},Mt={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:P("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=a=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(a),e.resetRowSelection=a=>{var n;return e.setRowSelection(a?{}:(n=e.initialState.rowSelection)!=null?n:{})},e.toggleAllRowsSelected=a=>{e.setRowSelection(n=>{a=typeof a<"u"?a:!e.getIsAllRowsSelected();const t={...n},o=e.getPreGroupedRowModel().flatRows;return a?o.forEach(r=>{r.getCanSelect()&&(t[r.id]=!0)}):o.forEach(r=>{delete t[r.id]}),t})},e.toggleAllPageRowsSelected=a=>e.setRowSelection(n=>{const t=typeof a<"u"?a:!e.getIsAllPageRowsSelected(),o={...n};return e.getRowModel().rows.forEach(r=>{Te(o,r.id,t,!0,e)}),o}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=S(()=>[e.getState().rowSelection,e.getCoreRowModel()],(a,n)=>Object.keys(a).length?be(e,n):{rows:[],flatRows:[],rowsById:{}},b(e.options,"debugTable")),e.getFilteredSelectedRowModel=S(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(a,n)=>Object.keys(a).length?be(e,n):{rows:[],flatRows:[],rowsById:{}},b(e.options,"debugTable")),e.getGroupedSelectedRowModel=S(()=>[e.getState().rowSelection,e.getSortedRowModel()],(a,n)=>Object.keys(a).length?be(e,n):{rows:[],flatRows:[],rowsById:{}},b(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const a=e.getFilteredRowModel().flatRows,{rowSelection:n}=e.getState();let t=!!(a.length&&Object.keys(n).length);return t&&a.some(o=>o.getCanSelect()&&!n[o.id])&&(t=!1),t},e.getIsAllPageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows.filter(o=>o.getCanSelect()),{rowSelection:n}=e.getState();let t=!!a.length;return t&&a.some(o=>!n[o.id])&&(t=!1),t},e.getIsSomeRowsSelected=()=>{var a;const n=Object.keys((a=e.getState().rowSelection)!=null?a:{}).length;return n>0&&n<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:a.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>a=>{e.toggleAllRowsSelected(a.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>a=>{e.toggleAllPageRowsSelected(a.target.checked)}},createRow:(e,a)=>{e.toggleSelected=(n,t)=>{const o=e.getIsSelected();a.setRowSelection(r=>{var s;if(n=typeof n<"u"?n:!o,e.getCanSelect()&&o===n)return r;const i={...r};return Te(i,e.id,n,(s=t==null?void 0:t.selectChildren)!=null?s:!0,a),i})},e.getIsSelected=()=>{const{rowSelection:n}=a.getState();return _e(e,n)},e.getIsSomeSelected=()=>{const{rowSelection:n}=a.getState();return Re(e,n)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=a.getState();return Re(e,n)==="all"},e.getCanSelect=()=>{var n;return typeof a.options.enableRowSelection=="function"?a.options.enableRowSelection(e):(n=a.options.enableRowSelection)!=null?n:!0},e.getCanSelectSubRows=()=>{var n;return typeof a.options.enableSubRowSelection=="function"?a.options.enableSubRowSelection(e):(n=a.options.enableSubRowSelection)!=null?n:!0},e.getCanMultiSelect=()=>{var n;return typeof a.options.enableMultiRowSelection=="function"?a.options.enableMultiRowSelection(e):(n=a.options.enableMultiRowSelection)!=null?n:!0},e.getToggleSelectedHandler=()=>{const n=e.getCanSelect();return t=>{var o;n&&e.toggleSelected((o=t.target)==null?void 0:o.checked)}}}},Te=(e,a,n,t,o)=>{var r;const s=o.getRow(a,!0);n?(s.getCanMultiSelect()||Object.keys(e).forEach(i=>delete e[i]),s.getCanSelect()&&(e[a]=!0)):delete e[a],t&&(r=s.subRows)!=null&&r.length&&s.getCanSelectSubRows()&&s.subRows.forEach(i=>Te(e,i.id,n,t,o))};function be(e,a){const n=e.getState().rowSelection,t=[],o={},r=function(s,i){return s.map(l=>{var u;const g=_e(l,n);if(g&&(t.push(l),o[l.id]=l),(u=l.subRows)!=null&&u.length&&(l={...l,subRows:r(l.subRows)}),g)return l}).filter(Boolean)};return{rows:r(a.rows),flatRows:t,rowsById:o}}function _e(e,a){var n;return(n=a[e.id])!=null?n:!1}function Re(e,a,n){var t;if(!((t=e.subRows)!=null&&t.length))return!1;let o=!0,r=!1;return e.subRows.forEach(s=>{if(!(r&&!o)&&(s.getCanSelect()&&(_e(s,a)?r=!0:o=!1),s.subRows&&s.subRows.length)){const i=Re(s,a);i==="all"?r=!0:(i==="some"&&(r=!0),o=!1)}}),o?"all":r?"some":!1}const ve=/([0-9]+)/gm,Vt=(e,a,n)=>Hn(A(e.getValue(n)).toLowerCase(),A(a.getValue(n)).toLowerCase()),Ft=(e,a,n)=>Hn(A(e.getValue(n)),A(a.getValue(n))),It=(e,a,n)=>xe(A(e.getValue(n)).toLowerCase(),A(a.getValue(n)).toLowerCase()),$t=(e,a,n)=>xe(A(e.getValue(n)),A(a.getValue(n))),At=(e,a,n)=>{const t=e.getValue(n),o=a.getValue(n);return t>o?1:t<o?-1:0},Ht=(e,a,n)=>xe(e.getValue(n),a.getValue(n));function xe(e,a){return e===a?0:e>a?1:-1}function A(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function Hn(e,a){const n=e.split(ve).filter(Boolean),t=a.split(ve).filter(Boolean);for(;n.length&&t.length;){const o=n.shift(),r=t.shift(),s=parseInt(o,10),i=parseInt(r,10),l=[s,i].sort();if(isNaN(l[0])){if(o>r)return 1;if(r>o)return-1;continue}if(isNaN(l[1]))return isNaN(s)?-1:1;if(s>i)return 1;if(i>s)return-1}return n.length-t.length}const L={alphanumeric:Vt,alphanumericCaseSensitive:Ft,text:It,textCaseSensitive:$t,datetime:At,basic:Ht},kt={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:P("sorting",e),isMultiSortEvent:a=>a.shiftKey}),createColumn:(e,a)=>{e.getAutoSortingFn=()=>{const n=a.getFilteredRowModel().flatRows.slice(10);let t=!1;for(const o of n){const r=o==null?void 0:o.getValue(e.id);if(Object.prototype.toString.call(r)==="[object Date]")return L.datetime;if(typeof r=="string"&&(t=!0,r.split(ve).length>1))return L.alphanumeric}return t?L.text:L.basic},e.getAutoSortDir=()=>{const n=a.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var n,t;if(!e)throw new Error;return ue(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(n=(t=a.options.sortingFns)==null?void 0:t[e.columnDef.sortingFn])!=null?n:L[e.columnDef.sortingFn]},e.toggleSorting=(n,t)=>{const o=e.getNextSortingOrder(),r=typeof n<"u"&&n!==null;a.setSorting(s=>{const i=s==null?void 0:s.find(d=>d.id===e.id),l=s==null?void 0:s.findIndex(d=>d.id===e.id);let u=[],g,f=r?n:o==="desc";if(s!=null&&s.length&&e.getCanMultiSort()&&t?i?g="toggle":g="add":s!=null&&s.length&&l!==s.length-1?g="replace":i?g="toggle":g="replace",g==="toggle"&&(r||o||(g="remove")),g==="add"){var c;u=[...s,{id:e.id,desc:f}],u.splice(0,u.length-((c=a.options.maxMultiSortColCount)!=null?c:Number.MAX_SAFE_INTEGER))}else g==="toggle"?u=s.map(d=>d.id===e.id?{...d,desc:f}:d):g==="remove"?u=s.filter(d=>d.id!==e.id):u=[{id:e.id,desc:f}];return u})},e.getFirstSortDir=()=>{var n,t;return((n=(t=e.columnDef.sortDescFirst)!=null?t:a.options.sortDescFirst)!=null?n:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=n=>{var t,o;const r=e.getFirstSortDir(),s=e.getIsSorted();return s?s!==r&&((t=a.options.enableSortingRemoval)==null||t)&&(!(n&&(o=a.options.enableMultiRemove)!=null)||o)?!1:s==="desc"?"asc":"desc":r},e.getCanSort=()=>{var n,t;return((n=e.columnDef.enableSorting)!=null?n:!0)&&((t=a.options.enableSorting)!=null?t:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var n,t;return(n=(t=e.columnDef.enableMultiSort)!=null?t:a.options.enableMultiSort)!=null?n:!!e.accessorFn},e.getIsSorted=()=>{var n;const t=(n=a.getState().sorting)==null?void 0:n.find(o=>o.id===e.id);return t?t.desc?"desc":"asc":!1},e.getSortIndex=()=>{var n,t;return(n=(t=a.getState().sorting)==null?void 0:t.findIndex(o=>o.id===e.id))!=null?n:-1},e.clearSorting=()=>{a.setSorting(n=>n!=null&&n.length?n.filter(t=>t.id!==e.id):[])},e.getToggleSortingHandler=()=>{const n=e.getCanSort();return t=>{n&&(t.persist==null||t.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?a.options.isMultiSortEvent==null?void 0:a.options.isMultiSortEvent(t):!1))}}},createTable:e=>{e.setSorting=a=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(a),e.resetSorting=a=>{var n,t;e.setSorting(a?[]:(n=(t=e.initialState)==null?void 0:t.sorting)!=null?n:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},qt=[rt,Dt,yt,wt,it,lt,_t,xt,kt,bt,Nt,Et,Pt,Mt,Rt];function Gt(e){var a,n;const t=[...qt,...(a=e._features)!=null?a:[]];let o={_features:t};const r=o._features.reduce((c,d)=>Object.assign(c,d.getDefaultOptions==null?void 0:d.getDefaultOptions(o)),{}),s=c=>o.options.mergeOptions?o.options.mergeOptions(r,c):{...r,...c};let l={...{},...(n=e.initialState)!=null?n:{}};o._features.forEach(c=>{var d;l=(d=c.getInitialState==null?void 0:c.getInitialState(l))!=null?d:l});const u=[];let g=!1;const f={_features:t,options:{...r,...e},initialState:l,_queue:c=>{u.push(c),g||(g=!0,Promise.resolve().then(()=>{for(;u.length;)u.shift()();g=!1}).catch(d=>setTimeout(()=>{throw d})))},reset:()=>{o.setState(o.initialState)},setOptions:c=>{const d=$(c,o.options);o.options=s(d)},getState:()=>o.options.state,setState:c=>{o.options.onStateChange==null||o.options.onStateChange(c)},_getRowId:(c,d,m)=>{var p;return(p=o.options.getRowId==null?void 0:o.options.getRowId(c,d,m))!=null?p:`${m?[m.id,d].join("."):d}`},getCoreRowModel:()=>(o._getCoreRowModel||(o._getCoreRowModel=o.options.getCoreRowModel(o)),o._getCoreRowModel()),getRowModel:()=>o.getPaginationRowModel(),getRow:(c,d)=>{let m=(d?o.getPrePaginationRowModel():o.getRowModel()).rowsById[c];if(!m&&(m=o.getCoreRowModel().rowsById[c],!m))throw new Error;return m},_getDefaultColumnDef:S(()=>[o.options.defaultColumn],c=>{var d;return c=(d=c)!=null?d:{},{header:m=>{const p=m.header.column.columnDef;return p.accessorKey?p.accessorKey:p.accessorFn?p.id:null},cell:m=>{var p,y;return(p=(y=m.renderValue())==null||y.toString==null?void 0:y.toString())!=null?p:null},...o._features.reduce((m,p)=>Object.assign(m,p.getDefaultColumnDef==null?void 0:p.getDefaultColumnDef()),{}),...c}},b(e,"debugColumns")),_getColumnDefs:()=>o.options.columns,getAllColumns:S(()=>[o._getColumnDefs()],c=>{const d=function(m,p,y){return y===void 0&&(y=0),m.map(C=>{const R=ot(o,C,y,p),v=C;return R.columns=v.columns?d(v.columns,R,y+1):[],R})};return d(c)},b(e,"debugColumns")),getAllFlatColumns:S(()=>[o.getAllColumns()],c=>c.flatMap(d=>d.getFlatColumns()),b(e,"debugColumns")),_getAllFlatColumnsById:S(()=>[o.getAllFlatColumns()],c=>c.reduce((d,m)=>(d[m.id]=m,d),{}),b(e,"debugColumns")),getAllLeafColumns:S(()=>[o.getAllColumns(),o._getOrderColumnsFn()],(c,d)=>{let m=c.flatMap(p=>p.getLeafColumns());return d(m)},b(e,"debugColumns")),getColumn:c=>o._getAllFlatColumnsById()[c]};Object.assign(o,f);for(let c=0;c<o._features.length;c++){const d=o._features[c];d==null||d.createTable==null||d.createTable(o)}return o}function jt(){return e=>S(()=>[e.options.data],a=>{const n={rows:[],flatRows:[],rowsById:{}},t=function(o,r,s){r===void 0&&(r=0);const i=[];for(let u=0;u<o.length;u++){const g=st(e,e._getRowId(o[u],u,s),o[u],u,r,void 0,s==null?void 0:s.id);if(n.flatRows.push(g),n.rowsById[g.id]=g,i.push(g),e.options.getSubRows){var l;g.originalSubRows=e.options.getSubRows(o[u],u),(l=g.originalSubRows)!=null&&l.length&&(g.subRows=t(g.originalSubRows,r+1,g))}}return i};return n.rows=t(a),n},b(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function Lt(){return e=>S(()=>[e.getState().sorting,e.getPreSortedRowModel()],(a,n)=>{if(!n.rows.length||!(a!=null&&a.length))return n;const t=e.getState().sorting,o=[],r=t.filter(l=>{var u;return(u=e.getColumn(l.id))==null?void 0:u.getCanSort()}),s={};r.forEach(l=>{const u=e.getColumn(l.id);u&&(s[l.id]={sortUndefined:u.columnDef.sortUndefined,invertSorting:u.columnDef.invertSorting,sortingFn:u.getSortingFn()})});const i=l=>{const u=l.map(g=>({...g}));return u.sort((g,f)=>{for(let d=0;d<r.length;d+=1){var c;const m=r[d],p=s[m.id],y=p.sortUndefined,C=(c=m==null?void 0:m.desc)!=null?c:!1;let R=0;if(y){const v=g.getValue(m.id),V=f.getValue(m.id),E=v===void 0,q=V===void 0;if(E||q){if(y==="first")return E?-1:1;if(y==="last")return E?1:-1;R=E&&q?0:E?y:-y}}if(R===0&&(R=p.sortingFn(g,f,m.id)),R!==0)return C&&(R*=-1),p.invertSorting&&(R*=-1),R}return g.index-f.index}),u.forEach(g=>{var f;o.push(g),(f=g.subRows)!=null&&f.length&&(g.subRows=i(g.subRows))}),u};return{rows:i(n.rows),flatRows:o,rowsById:n.rowsById}},b(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function kn(e,a){return e?Ot(e)?w.createElement(e,a):e:null}function Ot(e){return Bt(e)||typeof e=="function"||zt(e)}function Bt(e){return typeof e=="function"&&(()=>{const a=Object.getPrototypeOf(e);return a.prototype&&a.prototype.isReactComponent})()}function zt(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function Kt(e){const a={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[n]=w.useState(()=>({current:Gt(a)})),[t,o]=w.useState(()=>n.current.initialState);return n.current.setOptions(r=>({...r,...e,state:{...t,...e.state},onStateChange:s=>{o(s),e.onStateChange==null||e.onStateChange(s)}})),n.current}const Ne=({row:e})=>T.jsx(xn,{checked:e.getIsSelected(),disabled:!e.getCanSelect(),onCheckedChange:({checked:a})=>e.toggleSelected(!!a),children:T.jsx(Nn,{})});Ne.displayName="DataTableCellCheckbox";Ne.__docgenInfo={description:"",methods:[],displayName:"DataTableCellCheckbox",props:{row:{required:!0,tsType:{name:"Row",elements:[{name:"T"}],raw:"Row<T>"},description:""}}};const Ee=({row:e})=>{const{table:a}=H();return T.jsx(Kn,{disabled:!e.getCanSelect(),onValueChange:()=>{a.toggleAllRowsSelected(!1),e.toggleSelected(!0)},value:e.getIsSelected()?e.id:null,children:T.jsx(Un,{value:e.id,children:T.jsx(Jn,{})})})};Ee.displayName="DataTableCellRadio";Ee.__docgenInfo={description:"",methods:[],displayName:"DataTableCellRadio",props:{row:{required:!0,tsType:{name:"Row",elements:[{name:"T"}],raw:"Row<T>"},description:""}}};const Pe=({table:e})=>{function a(){return e.getIsAllRowsSelected()?!0:e.getIsSomeRowsSelected()?"indeterminate":!1}return T.jsx(xn,{checked:a(),onCheckedChange:({checked:n})=>e.toggleAllRowsSelected(!!n),children:T.jsx(Nn,{})})};Pe.displayName="DataTableHeaderCellCheckbox";Pe.__docgenInfo={description:"",methods:[],displayName:"DataTableHeaderCellCheckbox",props:{table:{required:!0,tsType:{name:"Table",elements:[{name:"T"}],raw:"Table<T>"},description:""}}};const Ut=[],qn=w.createContext(void 0);function Gn({children:e,columns:a,data:n,enableMultiRowSelection:t,enableRowSelection:o,enableSorting:r,getRowId:s,loading:i,manualSorting:l,onColumnPinningChange:u,onColumnVisibilityChange:g,onRowSelectionChange:f,onSortingChange:c,state:d,stickyHeader:m}){const p=w.useId(),y=w.useMemo(()=>o?[{cell:t?Ne:Ee,id:p,size:30,...t?{header:Pe}:{}},...a]:a,[a,t,o,p]),C=Kt({columns:y,data:n??Ut,enableColumnPinning:!0,enableMultiRowSelection:t,enableRowSelection:o,enableSorting:r,getCoreRowModel:jt(),getRowId:s,manualPagination:!0,manualSorting:l,state:d,...r&&{getSortedRowModel:Lt()},...u?{onColumnPinningChange:u}:{},...g?{onColumnVisibilityChange:g}:{},...f?{onRowSelectionChange:f}:{},...c?{onSortingChange:c}:{}});return T.jsx(qn.Provider,{value:{loading:i,stickyHeader:m,table:C},children:e})}function H(){return zn(qn)}Gn.__docgenInfo={description:"",methods:[],displayName:"DataTableProvider",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accessorKey?: string | keyof T;
  cell?: string | ((cellContext: DataTableCellContext<T>) => ReactNode);
  enableSorting?: boolean;
  header?: string | ((headerContext: DataTableHeaderContext<T>) => ReactNode);
  id: string;
  sortingFn?: (rowA: DataTableRow<T>, rowB: DataTableRow<T>, columnId: string) => number;
  size?: number;
}`,signature:{properties:[{key:"accessorKey",value:{name:"union",raw:"string | keyof T",elements:[{name:"string"},{name:"T"}],required:!1}},{key:"cell",value:{name:"union",raw:"string | ((cellContext: DataTableCellContext<T>) => ReactNode)",elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"enableSorting",value:{name:"boolean",required:!1}},{key:"header",value:{name:"union",raw:"string | ((headerContext: DataTableHeaderContext<T>) => ReactNode)",elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"sortingFn",value:{name:"signature",type:"function",raw:"(rowA: DataTableRow<T>, rowB: DataTableRow<T>, columnId: string) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  getValue: <TValue>(columnId: string) => TValue;
  index: number;
  original: T;
}`,signature:{properties:[{key:"getValue",value:{name:"signature",type:"function",raw:"<TValue>(columnId: string) => TValue",signature:{arguments:[{type:{name:"string"},name:"columnId"}],return:{name:"TValue"}},required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"original",value:{name:"T",required:!0}}]}},name:"rowA"},{type:{name:"signature",type:"object",raw:`{
  getValue: <TValue>(columnId: string) => TValue;
  index: number;
  original: T;
}`,signature:{properties:[{key:"getValue",value:{name:"signature",type:"function",raw:"<TValue>(columnId: string) => TValue",signature:{arguments:[{type:{name:"string"},name:"columnId"}],return:{name:"TValue"}},required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"original",value:{name:"T",required:!0}}]}},name:"rowB"},{type:{name:"string"},name:"columnId"}],return:{name:"number"}},required:!1}},{key:"size",value:{name:"number",required:!1}}]}}],raw:"DataTableColumnDef<T>[]"},description:"The columns definitions."},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"The table data to display."},enableMultiRowSelection:{required:!1,tsType:{name:"boolean"},description:"Whether the multi row selection is enabled."},enableRowSelection:{required:!1,tsType:{name:"union",raw:"boolean | ((row: DataTableRow<T>) => boolean)",elements:[{name:"boolean"},{name:"unknown"}]},description:"Whether the row selection is enabled."},enableSorting:{required:!1,tsType:{name:"boolean"},description:"Whether the column sorting is enabled."},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(originalRow: T, index: number, parent?: DataTableRow<T>) => string",signature:{arguments:[{type:{name:"T"},name:"originalRow"},{type:{name:"number"},name:"index"},{type:{name:"signature",type:"object",raw:`{
  getValue: <TValue>(columnId: string) => TValue;
  index: number;
  original: T;
}`,signature:{properties:[{key:"getValue",value:{name:"signature",type:"function",raw:"<TValue>(columnId: string) => TValue",signature:{arguments:[{type:{name:"string"},name:"columnId"}],return:{name:"TValue"}},required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"original",value:{name:"T",required:!0}}]}},name:"parent"}],return:{name:"string"}}},description:`By default, the component will look for an id attribute in a data item to identify each row.
Using this function, you can define another attribute to use instead (like uuid).`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the table data are in a loading state. This will replace each cell with a Skeleton."},manualSorting:{required:!1,tsType:{name:"boolean"},description:"Whether the sorting is handled outside of the table. Use this is the sorting is managed on server-side."},onColumnPinningChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  left?: string[];
  right?: string[];
}`,signature:{properties:[{key:"left",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"right",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the pinned columns changes."},onColumnVisibilityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>"},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the column visibility changes."},onRowSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>"},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the selected rows changes."},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  desc: boolean;
  id: string;
}`,signature:{properties:[{key:"desc",value:{name:"boolean",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:`{
  desc: boolean;
  id: string;
}[]`},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the columns sorting changes."},state:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  columnPinning?: DataTableColumnPinningState;
  columnVisibility?: DataTableColumnVisibilityState;
  rowSelection?: DataTableRowSelectionState;
  sorting?: DataTableSortingState;
}`,signature:{properties:[{key:"columnPinning",value:{name:"signature",type:"object",raw:`{
  left?: string[];
  right?: string[];
}`,signature:{properties:[{key:"left",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"right",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"columnVisibility",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1}},{key:"rowSelection",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1}},{key:"sorting",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  desc: boolean;
  id: string;
}`,signature:{properties:[{key:"desc",value:{name:"boolean",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:`{
  desc: boolean;
  id: string;
}[]`,required:!1}}]}},description:`@type=DataTableState
The controlled table values.`},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header should be sticky."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Me=w.forwardRef(({children:e,className:a,columns:n,data:t,enableMultiRowSelection:o=!0,enableRowSelection:r,enableSorting:s=!0,getRowId:i,loading:l,manualSorting:u,onColumnPinningChange:g,onColumnVisibilityChange:f,onRowSelectionChange:c,onSortingChange:d,state:m,stickyHeader:p,...y},C)=>T.jsx(Gn,{columns:n,data:t,enableMultiRowSelection:o,enableRowSelection:r,enableSorting:s,getRowId:i,loading:l,manualSorting:u,onColumnPinningChange:g,onColumnVisibilityChange:f,onRowSelectionChange:c,onSortingChange:d,state:m,stickyHeader:p,children:T.jsx(Bn,{className:a,"data-ods":"data-table",ref:C,...y,children:e})}));Me.displayName="DataTable";Me.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accessorKey?: string | keyof T;
  cell?: string | ((cellContext: DataTableCellContext<T>) => ReactNode);
  enableSorting?: boolean;
  header?: string | ((headerContext: DataTableHeaderContext<T>) => ReactNode);
  id: string;
  sortingFn?: (rowA: DataTableRow<T>, rowB: DataTableRow<T>, columnId: string) => number;
  size?: number;
}`,signature:{properties:[{key:"accessorKey",value:{name:"union",raw:"string | keyof T",elements:[{name:"string"},{name:"T"}],required:!1}},{key:"cell",value:{name:"union",raw:"string | ((cellContext: DataTableCellContext<T>) => ReactNode)",elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"enableSorting",value:{name:"boolean",required:!1}},{key:"header",value:{name:"union",raw:"string | ((headerContext: DataTableHeaderContext<T>) => ReactNode)",elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"sortingFn",value:{name:"signature",type:"function",raw:"(rowA: DataTableRow<T>, rowB: DataTableRow<T>, columnId: string) => number",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  getValue: <TValue>(columnId: string) => TValue;
  index: number;
  original: T;
}`,signature:{properties:[{key:"getValue",value:{name:"signature",type:"function",raw:"<TValue>(columnId: string) => TValue",signature:{arguments:[{type:{name:"string"},name:"columnId"}],return:{name:"TValue"}},required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"original",value:{name:"T",required:!0}}]}},name:"rowA"},{type:{name:"signature",type:"object",raw:`{
  getValue: <TValue>(columnId: string) => TValue;
  index: number;
  original: T;
}`,signature:{properties:[{key:"getValue",value:{name:"signature",type:"function",raw:"<TValue>(columnId: string) => TValue",signature:{arguments:[{type:{name:"string"},name:"columnId"}],return:{name:"TValue"}},required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"original",value:{name:"T",required:!0}}]}},name:"rowB"},{type:{name:"string"},name:"columnId"}],return:{name:"number"}},required:!1}},{key:"size",value:{name:"number",required:!1}}]}}],raw:"DataTableColumnDef<T>[]"},description:"The columns definitions."},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"The table data to display."},enableMultiRowSelection:{required:!1,tsType:{name:"boolean"},description:"Whether the multi row selection is enabled.",defaultValue:{value:"true",computed:!1}},enableRowSelection:{required:!1,tsType:{name:"union",raw:"boolean | ((row: DataTableRow<T>) => boolean)",elements:[{name:"boolean"},{name:"unknown"}]},description:"Whether the row selection is enabled."},enableSorting:{required:!1,tsType:{name:"boolean"},description:"Whether the column sorting is enabled.",defaultValue:{value:"true",computed:!1}},getRowId:{required:!1,tsType:{name:"signature",type:"function",raw:"(originalRow: T, index: number, parent?: DataTableRow<T>) => string",signature:{arguments:[{type:{name:"T"},name:"originalRow"},{type:{name:"number"},name:"index"},{type:{name:"signature",type:"object",raw:`{
  getValue: <TValue>(columnId: string) => TValue;
  index: number;
  original: T;
}`,signature:{properties:[{key:"getValue",value:{name:"signature",type:"function",raw:"<TValue>(columnId: string) => TValue",signature:{arguments:[{type:{name:"string"},name:"columnId"}],return:{name:"TValue"}},required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"original",value:{name:"T",required:!0}}]}},name:"parent"}],return:{name:"string"}}},description:`By default, the component will look for an id attribute in a data item to identify each row.
Using this function, you can define another attribute to use instead (like uuid).`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the table data are in a loading state. This will replace each cell with a Skeleton."},manualSorting:{required:!1,tsType:{name:"boolean"},description:"Whether the sorting is handled outside of the table. Use this is the sorting is managed on server-side."},onColumnPinningChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"signature",type:"object",raw:`{
  left?: string[];
  right?: string[];
}`,signature:{properties:[{key:"left",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"right",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the pinned columns changes."},onColumnVisibilityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>"},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the column visibility changes."},onRowSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>"},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the selected rows changes."},onSortingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(updaterOrValue: T | ((old: T) => T)) => void",signature:{arguments:[{type:{name:"union",raw:"T | ((old: T) => T)",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  desc: boolean;
  id: string;
}`,signature:{properties:[{key:"desc",value:{name:"boolean",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:`{
  desc: boolean;
  id: string;
}[]`},{name:"unknown"}]},name:"updaterOrValue"}],return:{name:"void"}}},description:"Callback fired when the columns sorting changes."},state:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  columnPinning?: DataTableColumnPinningState;
  columnVisibility?: DataTableColumnVisibilityState;
  rowSelection?: DataTableRowSelectionState;
  sorting?: DataTableSortingState;
}`,signature:{properties:[{key:"columnPinning",value:{name:"signature",type:"object",raw:`{
  left?: string[];
  right?: string[];
}`,signature:{properties:[{key:"left",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"right",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"columnVisibility",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1}},{key:"rowSelection",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!1}},{key:"sorting",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  desc: boolean;
  id: string;
}`,signature:{properties:[{key:"desc",value:{name:"boolean",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:`{
  desc: boolean;
  id: string;
}[]`,required:!1}}]}},description:`@type=DataTableState
The controlled table values.`},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header should be sticky."}}};function Jt(e,a){return e?2:a?1:0}function jn(e,a=!1){const n=e.getIsPinned(),t=n==="left"&&e.getIsLastColumn("left"),o=n==="right"&&e.getIsFirstColumn("right");return{boxShadow:t||o?`${t?"-":""}2px 0 0px 0px var(--ods-table-border-color) inset`:void 0,left:n==="left"?`${e.getStart("left")}px`:void 0,position:n?"sticky":"relative",right:n==="right"?`${e.getAfter("right")}px`:void 0,width:e.getSize(),zIndex:Jt(!!n,a),...a?{position:"sticky",top:0}:{}}}const Xt={"data-table-cell__skeleton":"_data-table-cell__skeleton_1kqn8_2"},Ve=({cell:e,className:a,...n})=>{const{loading:t}=H();return T.jsx("td",{className:a,...n,style:{...n.style,...jn(e.column)},children:t?T.jsx(Xn,{className:Xt["data-table-cell__skeleton"]}):kn(e.column.columnDef.cell,e.getContext())})};Ve.displayName="DataTableCell";Ve.__docgenInfo={description:"",methods:[],displayName:"DataTableCell",props:{cell:{required:!0,tsType:{name:"Cell",elements:[{name:"T"},{name:"unknown"}],raw:"Cell<T, unknown>"},description:""}},composes:["ComponentPropsWithRef"]};const Fe=({className:e,row:a,...n})=>{const{table:t}=H(),o=t.options.enableRowSelection,r=a.getIsSelected()??!1;return T.jsx("tr",{"aria-selected":o&&a?r:void 0,className:e,...n,children:a.getVisibleCells().map(s=>T.jsx(Ve,{cell:s},s.id))})};Fe.displayName="DataTableRow";Fe.__docgenInfo={description:"",methods:[],displayName:"DataTableRow",props:{row:{required:!0,tsType:{name:"Row",elements:[{name:"T"}],raw:"Row<T>"},description:""}},composes:["ComponentPropsWithRef"]};const D=({className:e,...a})=>{const{table:n}=H();return n.getRowCount()===0?T.jsx(T.Fragment,{}):T.jsx("tbody",{className:e,"data-ods":"data-table-body",...a,children:n.getRowModel().rows.map(t=>T.jsx(Fe,{row:t},t.id))})};D.displayName="DataTableBody";D.__docgenInfo={description:"",methods:[],displayName:"DataTableBody",composes:["ComponentPropsWithRef"]};const Wt={"data-table-empty":"_data-table-empty_1qa9t_2"},k=w.forwardRef(({children:e,className:a,...n},t)=>{const{table:o}=H();return o.getRowCount()>0?T.jsx(T.Fragment,{}):T.jsx("tbody",{className:Ce(Wt["data-table-empty"],a),"data-ods":"data-table-empty",ref:t,...n,children:T.jsx("tr",{children:T.jsx("td",{colSpan:o.getAllColumns().length,children:e})})})});k.displayName="DataTableEmpty";k.__docgenInfo={description:"",methods:[],displayName:"DataTableEmpty",composes:["ComponentPropsWithRef"]};const O={"data-table-header-cell--sortable":"_data-table-header-cell--sortable_18u1z_2","data-table-header-cell__content":"_data-table-header-cell__content_18u1z_5","data-table-header-cell__sort-icon":"_data-table-header-cell__sort-icon_18u1z_12","data-table-header-cell__sort-icon--sorted":"_data-table-header-cell__sort-icon--sorted_18u1z_15"};function Yt(e){switch(e){case"asc":return ge.arrowUp;case"desc":return ge.arrowDown;default:return ge.arrowUpDown}}const Ie=({className:e,header:a,...n})=>{const{stickyHeader:t,table:o}=H(),r=(o.options.enableSorting&&a.column.getCanSort())??!1,s=a.column.getIsSorted();function i(){r&&a.column.toggleSorting()}return T.jsx("th",{"aria-sort":s?s==="asc"?"ascending":"descending":void 0,className:Ce(O["data-table-header-cell"],{[O["data-table-header-cell--sortable"]]:r},e),onClick:i,...n,style:{...n.style,...jn(a.column,t)},children:T.jsxs("div",{className:O["data-table-header-cell__content"],children:[kn(a.column.columnDef.header,a.getContext()),r&&T.jsx(Wn,{className:Ce(O["data-table-header-cell__sort-icon"],{[O["data-table-header-cell__sort-icon--sorted"]]:s}),name:Yt(s)})]})})};Ie.displayName="DataTableHeaderCell";Ie.__docgenInfo={description:"",methods:[],displayName:"DataTableHeaderCell",props:{header:{required:!0,tsType:{name:"Header",elements:[{name:"T"},{name:"unknown"}],raw:"Header<T, unknown>"},description:""}},composes:["ComponentPropsWithRef"]};const $e=({children:e,className:a,headerGroup:n,...t})=>T.jsx("tr",{className:a,...t,children:n==null?void 0:n.headers.map(o=>T.jsx(Ie,{header:o},o.id))});$e.displayName="DataTableHeaderRow";$e.__docgenInfo={description:"",methods:[],displayName:"DataTableHeaderRow",props:{headerGroup:{required:!1,tsType:{name:"HeaderGroup",elements:[{name:"T"}],raw:"HeaderGroup<T>"},description:""}},composes:["ComponentPropsWithRef"]};const _=w.forwardRef(({className:e,...a},n)=>{const{table:t}=H();return T.jsx("thead",{className:e,"data-ods":"data-table-head",ref:n,...a,children:t.getHeaderGroups().map(o=>T.jsx($e,{headerGroup:o},o.id))})});_.displayName="DataTableHead";_.__docgenInfo={description:"",methods:[],displayName:"DataTableHead",composes:["ComponentPropsWithRef"]};const N=Object.assign(Me,{Body:D,Empty:k,Head:_}),Zt={argTypes:Qn(["columns","data","initialState","getRowId","manualSorting","onColumnPinningChange","onColumnVisibilityChange","onRowSelectionChange","onSortingChange","state","stickyHeader"]),component:N,subcomponents:{DataTableBody:D,DataTableEmpty:k,DataTableHead:_},tags:["new"],title:"React Components/Data Table"},de=[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@example.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@example.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@example.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],oe=[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],B={argTypes:et({enableMultiRowSelection:{table:{category:re.general},control:"boolean"},enableRowSelection:{table:{category:re.general},control:"boolean"},enableSorting:{table:{category:re.general},control:"boolean"},loading:{table:{category:re.general},control:"boolean"}}),render:e=>h.createElement(N,{...e,columns:oe,data:de},h.createElement(_,null),h.createElement(D,null))},z={tags:["!dev"],render:({})=>h.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"var(--ods-theme-row-gap)"}},h.createElement(N,{columns:oe,data:de},h.createElement(_,null),h.createElement(D,null)),h.createElement(N,{columns:oe,data:[]},h.createElement(_,null),h.createElement(D,null),h.createElement(k,null,"Empty table data")))},K={globals:{imports:`import { DataTable, DataTableBody, DataTableHead } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@example.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@example.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@example.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],[]);return h.createElement(N,{columns:a,data:e},h.createElement(_,null),h.createElement(D,null))}},U={globals:{imports:`import { DataTable, DataTableBody, DataTableEmpty, DataTableHead } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],[]);return h.createElement(N,{columns:a,data:e},h.createElement(_,null),h.createElement(D,null),h.createElement(k,null,"Empty table data"))}},J={tags:["!dev"],parameters:{layout:"centered"},render:({})=>h.createElement(N,{columns:oe,data:de},h.createElement(_,null),h.createElement(D,null))},X={globals:{imports:`import { DataTable, DataTableBody, DataTableHead, PAGINATION_PER_PAGE, Pagination, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useCallback, useEffect, useMemo, useState } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=Yn.option_10,a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],[]),[n,t]=w.useState(Array(e).fill({})),[o,r]=w.useState(0),[s,i]=w.useState(0),l=w.useCallback(async u=>fetch(`https://dummyjson.com/users?limit=${e}&skip=${e*(u-1)}&select=firstName,lastName,age,email,role`).then(g=>g.json()).then(({total:g,users:f})=>({total:g,users:f})),[]);return w.useEffect(()=>{l(o).then(({total:u,users:g})=>{t(g),i(u)})},[o]),h.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"16px",alignItems:"center",justifyContent:"center"}},h.createElement(N,{columns:a,data:n},h.createElement(G,{preset:j.caption,as:"caption"},"Paginated Table"),h.createElement(_,null),h.createElement(D,null)),h.createElement(Zn,{onPageChange:({page:u})=>r(u),page:o,pageSize:e,totalItems:s}))}},W={globals:{imports:`import { DataTable, DataTableBody, DataTableEmpty, DataTableHead } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@example.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@example.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@example.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],[]),n=w.useMemo(()=>({left:["age"],right:["email"]}),[]);return h.createElement(N,{columns:a,data:e,state:{columnPinning:n},style:{width:"1200px"}},h.createElement(_,null),h.createElement(D,null),h.createElement(k,null,"Empty table data"))}},Y={globals:{imports:`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo, useState } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@domain2.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@domain1.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@domain3.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],[]),[n,t]=w.useState([{id:"role",desc:!0}]);return h.createElement(N,{columns:a,data:e,onSortingChange:t,state:{sorting:n}},h.createElement(G,{preset:j.caption,as:"caption"},"Controlled sorted table"),h.createElement(_,null),h.createElement(D,null))}},Z={globals:{imports:`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@domain2.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@domain1.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@domain3.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email",sortingFn:(n,t,o)=>{const r=n.getValue(o).split("@")[1].split(".")[0],s=t.getValue(o).split("@")[1].split(".")[0];return r.localeCompare(s)}},{id:"role",header:"Role",accessorKey:"role"}],[]);return h.createElement(N,{columns:a,data:e},h.createElement(G,{preset:j.caption,as:"caption"},"Email sorted by domain"),h.createElement(_,null),h.createElement(D,null))}},Q={globals:{imports:`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@domain2.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@domain1.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@domain3.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName",enableSorting:!1},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role",enableSorting:!1}],[]);return h.createElement(N,{columns:a,data:e},h.createElement(G,{preset:j.caption,as:"caption"},"Sort disabled on some columns"),h.createElement(_,null),h.createElement(D,null))}},ee={globals:{imports:`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo, useState } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@domain2.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@domain1.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@domain3.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],[]),[n,t]=w.useState([{id:"role",desc:!0},{id:"lastName",desc:!0}]);return h.createElement(N,{columns:a,data:e,onSortingChange:t,state:{sorting:n}},h.createElement(G,{preset:j.caption,as:"caption"},"Controlled sorting"),h.createElement(_,null),h.createElement(D,null))}},ne={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>h.createElement(N,{columns:oe,data:de},h.createElement(_,null),h.createElement(D,null))},te={globals:{imports:`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo, useState } from 'react';`},parameters:{docs:{source:{...I()}}},tags:["!dev"],render:({})=>{const e=w.useMemo(()=>[{firstName:"John",lastName:"Doe",age:30,email:"john.doe@domain2.com",role:"Admin",uuid:"5ae49b94-9ceb-4612-a087-4079a812bb0b"},{firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@domain1.com",role:"User",uuid:"fb1c391c-bd88-4b96-ba39-8ab2a95d50bd"},{firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@domain3.com",role:"Manager",uuid:"a83a58a6-a007-47f0-b04b-83989e502171"}],[]),a=w.useMemo(()=>[{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"age",header:"Age",accessorKey:"age"},{id:"email",header:"Email",accessorKey:"email"},{id:"role",header:"Role",accessorKey:"role"}],[]),n=w.useMemo(()=>({age:!1}),[]);return h.createElement(N,{columns:a,data:e,state:{columnVisibility:n}},h.createElement(G,{preset:j.caption,as:"caption"},"Age column hidden"),h.createElement(_,null),h.createElement(D,null))}};var je,Le,Oe;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  argTypes: orderControls({
    enableMultiRowSelection: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    enableRowSelection: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    enableSorting: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  }),
  render: arg => <DataTable {...arg} columns={sampleColumns} data={sampleData}>
      <DataTableHead />

      <DataTableBody />
    </DataTable>
}`,...(Oe=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Be,ze,Ke;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    rowGap: 'var(--ods-theme-row-gap)'
  }}>
      <DataTable columns={sampleColumns} data={sampleData}>
        <DataTableHead />

        <DataTableBody />
      </DataTable>

      <DataTable columns={sampleColumns} data={[]}>
        <DataTableHead />

        <DataTableBody />

        <DataTableEmpty>
          Empty table data
        </DataTableEmpty>
      </DataTable>
    </div>
}`,...(Ke=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Ue,Je,Xe;K.parameters={...K.parameters,docs:{...(Ue=K.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableHead } from '@ovhcloud/ods-react';
import { useMemo } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      role: 'Admin',
      uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b'
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@example.com',
      role: 'User',
      uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd'
    }, {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      email: 'bob.johnson@example.com',
      role: 'Manager',
      uuid: 'a83a58a6-a007-47f0-b04b-83989e502171'
    }], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    return <DataTable columns={sampleColumns} data={sampleData}>
        <DataTableHead />

        <DataTableBody />
      </DataTable>;
  }
}`,...(Xe=(Je=K.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var We,Ye,Ze;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableEmpty, DataTableHead } from '@ovhcloud/ods-react';
import { useMemo } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    return <DataTable columns={sampleColumns} data={sampleData}>
        <DataTableHead />

        <DataTableBody />

        <DataTableEmpty>
          Empty table data
        </DataTableEmpty>
      </DataTable>;
  }
}`,...(Ze=(Ye=U.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Qe,en,nn;J.parameters={...J.parameters,docs:{...(Qe=J.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <DataTable columns={sampleColumns} data={sampleData}>
      <DataTableHead />

      <DataTableBody />
    </DataTable>
}`,...(nn=(en=J.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,an,on;X.parameters={...X.parameters,docs:{...(tn=X.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableHead, PAGINATION_PER_PAGE, Pagination, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useCallback, useEffect, useMemo, useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
    };
    const PAGE_LIMIT = PAGINATION_PER_PAGE.option_10;
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    const [data, setData] = useState<Person[]>(Array(PAGE_LIMIT).fill({}));
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const fetchData = useCallback(async (page: number) => {
      return fetch(\`https://dummyjson.com/users?limit=\${PAGE_LIMIT}&skip=\${PAGE_LIMIT * (page - 1)}&select=firstName,lastName,age,email,role\`).then(res => res.json()).then(({
        total,
        users
      }) => ({
        total,
        users
      }));
    }, []);
    useEffect(() => {
      fetchData(page).then(({
        total,
        users
      }) => {
        setData(users);
        setTotal(total);
      });
    }, [page]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <DataTable columns={sampleColumns} data={data}>
          <Text preset={TEXT_PRESET.caption} as="caption">Paginated Table</Text>

          <DataTableHead />

          <DataTableBody />
        </DataTable>

        <Pagination onPageChange={({
        page
      }) => setPage(page)} page={page} pageSize={PAGE_LIMIT} totalItems={total} />
      </div>;
  }
}`,...(on=(an=X.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,sn,ln;W.parameters={...W.parameters,docs:{...(rn=W.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableEmpty, DataTableHead } from '@ovhcloud/ods-react';
import { useMemo } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      role: 'Admin',
      uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b'
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@example.com',
      role: 'User',
      uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd'
    }, {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      email: 'bob.johnson@example.com',
      role: 'Manager',
      uuid: 'a83a58a6-a007-47f0-b04b-83989e502171'
    }], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    const pinningState = useMemo(() => ({
      left: ['age'],
      right: ['email']
    }), []);
    return <DataTable columns={sampleColumns} data={sampleData} state={{
      columnPinning: pinningState
    }} style={{
      width: '1200px'
    }}>
        <DataTableHead />

        <DataTableBody />

        <DataTableEmpty>
          Empty table data
        </DataTableEmpty>
      </DataTable>;
  }
}`,...(ln=(sn=W.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};var un,dn,gn;Y.parameters={...Y.parameters,docs:{...(un=Y.parameters)==null?void 0:un.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo, useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@domain2.com',
      role: 'Admin',
      uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b'
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@domain1.com',
      role: 'User',
      uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd'
    }, {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      email: 'bob.johnson@domain3.com',
      role: 'Manager',
      uuid: 'a83a58a6-a007-47f0-b04b-83989e502171'
    }], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    const [sortingState, setSortingState] = useState([{
      id: 'role',
      desc: true
    }]);
    return <DataTable columns={sampleColumns} data={sampleData} onSortingChange={setSortingState} state={{
      sorting: sortingState
    }}>
        <Text preset={TEXT_PRESET.caption} as="caption">Controlled sorted table</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>;
  }
}`,...(gn=(dn=Y.parameters)==null?void 0:dn.docs)==null?void 0:gn.source}}};var cn,mn,pn;Z.parameters={...Z.parameters,docs:{...(cn=Z.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@domain2.com',
      role: 'Admin',
      uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b'
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@domain1.com',
      role: 'User',
      uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd'
    }, {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      email: 'bob.johnson@domain3.com',
      role: 'Manager',
      uuid: 'a83a58a6-a007-47f0-b04b-83989e502171'
    }], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      sortingFn: (rowA, rowB, columnId) => {
        const valueA = rowA.getValue<string>(columnId).split('@')[1].split('.')[0];
        const valueB = rowB.getValue<string>(columnId).split('@')[1].split('.')[0];
        return valueA.localeCompare(valueB);
      }
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    return <DataTable columns={sampleColumns} data={sampleData}>
        <Text preset={TEXT_PRESET.caption} as="caption">Email sorted by domain</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>;
  }
}`,...(pn=(mn=Z.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var fn,hn,Sn;Q.parameters={...Q.parameters,docs:{...(fn=Q.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@domain2.com',
      role: 'Admin',
      uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b'
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@domain1.com',
      role: 'User',
      uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd'
    }, {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      email: 'bob.johnson@domain3.com',
      role: 'Manager',
      uuid: 'a83a58a6-a007-47f0-b04b-83989e502171'
    }], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName',
      enableSorting: false
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role',
      enableSorting: false
    }], []);
    return <DataTable columns={sampleColumns} data={sampleData}>
        <Text preset={TEXT_PRESET.caption} as="caption">Sort disabled on some columns</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>;
  }
}`,...(Sn=(hn=Q.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var bn,Cn,yn;ee.parameters={...ee.parameters,docs:{...(bn=ee.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo, useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@domain2.com',
      role: 'Admin',
      uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b'
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@domain1.com',
      role: 'User',
      uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd'
    }, {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      email: 'bob.johnson@domain3.com',
      role: 'Manager',
      uuid: 'a83a58a6-a007-47f0-b04b-83989e502171'
    }], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    const [sortingState, setSortingState] = useState<DataTableSortingState>([{
      id: 'role',
      desc: true
    }, {
      id: 'lastName',
      desc: true
    }]);
    return <DataTable columns={sampleColumns} data={sampleData} onSortingChange={setSortingState} state={{
      sorting: sortingState
    }}>
        <Text preset={TEXT_PRESET.caption} as="caption">Controlled sorting</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>;
  }
}`,...(yn=(Cn=ee.parameters)==null?void 0:Cn.docs)==null?void 0:yn.source}}};var wn,Tn,Rn;ne.parameters={...ne.parameters,docs:{...(wn=ne.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <DataTable columns={sampleColumns} data={sampleData}>
      <DataTableHead />

      <DataTableBody />
    </DataTable>
}`,...(Rn=(Tn=ne.parameters)==null?void 0:Tn.docs)==null?void 0:Rn.source}}};var vn,Dn,_n;te.parameters={...te.parameters,docs:{...(vn=te.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DataTable, DataTableBody, DataTableHead, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { useMemo, useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      role: string;
      uuid: string;
    };
    const sampleData: Person[] = useMemo(() => [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@domain2.com',
      role: 'Admin',
      uuid: '5ae49b94-9ceb-4612-a087-4079a812bb0b'
    }, {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@domain1.com',
      role: 'User',
      uuid: 'fb1c391c-bd88-4b96-ba39-8ab2a95d50bd'
    }, {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      email: 'bob.johnson@domain3.com',
      role: 'Manager',
      uuid: 'a83a58a6-a007-47f0-b04b-83989e502171'
    }], []);
    const sampleColumns: DataTableColumnDef<Person>[] = useMemo(() => [{
      id: 'firstName',
      header: 'First Name',
      accessorKey: 'firstName'
    }, {
      id: 'lastName',
      header: 'Last Name',
      accessorKey: 'lastName'
    }, {
      id: 'age',
      header: 'Age',
      accessorKey: 'age'
    }, {
      id: 'email',
      header: 'Email',
      accessorKey: 'email'
    }, {
      id: 'role',
      header: 'Role',
      accessorKey: 'role'
    }], []);
    const visibileColumn = useMemo(() => ({
      age: false
    }), []);
    return <DataTable columns={sampleColumns} data={sampleData} state={{
      columnVisibility: visibileColumn
    }}>
        <Text preset={TEXT_PRESET.caption} as="caption">Age column hidden</Text>

        <DataTableHead />

        <DataTableBody />
      </DataTable>;
  }
}`,...(_n=(Dn=te.parameters)==null?void 0:Dn.docs)==null?void 0:_n.source}}};const Qt=["Demo","AnatomyTech","Default","Empty","Overview","PaginationExample","PinnedColumns","StateControlled","SortingCustomFunction","SortingDisabledColumns","SortingControlled","ThemeGenerator","VisibilityExample"],ma=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:z,Default:K,Demo:B,Empty:U,Overview:J,PaginationExample:X,PinnedColumns:W,SortingControlled:ee,SortingCustomFunction:Z,SortingDisabledColumns:Q,StateControlled:Y,ThemeGenerator:ne,VisibilityExample:te,__namedExportsOrder:Qt,default:Zt},Symbol.toStringTag,{value:"Module"}));export{z as A,ma as D,U as E,J as O,X as P,Y as S,te as V,Q as a,Z as b,ee as c,W as d,K as e};
