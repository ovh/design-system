import{r as V,e as c}from"./index-jIWwRBLr.js";import{B as ge,d as xe,c as fe}from"./Button-B-GJ-1TA.js";import{a as Zn}from"./colors-DSObuHxd.js";import{F as Jn,a as Qn}from"./index-B0M5RXeR.js";import{I as D,a as j}from"./icon-name-D0KNfDOz.js";import{j as u}from"./jsx-runtime-Cfl8ynUo.js";import{c as ie}from"./index-CqY9YpN0.js";import{u as zn}from"./context-C_-r2uoG.js";import{T as Ie}from"./index-DaWTyRz7.js";import{c as Ae,M as P,a as Be,N as O,z as et,S as nt,Z as je,U as Ne,b4 as H,b5 as Te,b2 as be,Y as le,b6 as Ve,aK as he,T as tt,f as we,O as C,P as at,a9 as Ce,aq as me,aB as $,as as F,aa as rt,d as ot,b0 as dt,Q as st,aJ as G,b7 as Oe,aF as it,C as Bn,u as ct,$ as lt,D as mt,a0 as ut}from"./use-locale-context-CGqEQCyU.js";import{u as pt,s as ht,R as gt}from"./render-strategy-CleMi1sB.js";import{c as Ee,b as ye}from"./index-DaUvfsZM.js";import{C as xt,a as ft}from"./collapsible-content-ChqJJDcb.js";import{e as Nt,o as Tt,C as Le}from"./controls-BtiQQn1l.js";import{s as L}from"./source-CPEZJ6oD.js";const Vt=e=>new Ie(e),[wt,A]=Ae({name:"TreeViewContext",hookName:"useTreeViewContext",providerName:"<TreeViewProvider />"}),[Ct,Pn]=Ae({name:"TreeViewNodeContext",hookName:"useTreeViewNodeContext",providerName:"<TreeViewNodeProvider />"}),[Et,M]=Ae({name:"TreeViewNodePropsContext",hookName:"useTreeViewNodePropsContext",providerName:"<TreeViewItemProvider />"}),Rn=V.forwardRef((e,n)=>{const a=A(),t=M(),o=Pn(),i=pt(),d=P(a.getBranchProps(t),e),m=a.getBranchContentProps(t);return u.jsx(xt,{ref:n,open:o.expanded,ids:{content:m.id},...i,...d})});Rn.displayName="TreeViewBranch";const yt=Be(),_n=V.forwardRef((e,n)=>{const a=A(),t=M(),o=a.getBranchContentProps(t),[,i]=yt(o,["hidden","data-state"]),d=P(i,e);return u.jsx(ft,{ref:n,...d})});_n.displayName="TreeViewBranchContent";const Dn=V.forwardRef((e,n)=>{const a=A(),t=M(),o=P(a.getBranchControlProps(t),e);return u.jsx(O.div,{...o,ref:n})});Dn.displayName="TreeViewBranchControl";const jn=V.forwardRef((e,n)=>{const a=A(),t=M(),o=P(a.getBranchIndentGuideProps(t),e);return u.jsx(O.div,{...o,ref:n})});jn.displayName="TreeViewBranchIndentGuide";const On=V.forwardRef((e,n)=>{const a=A(),t=M(),o=P(a.getBranchIndicatorProps(t),e);return u.jsx(O.div,{...o,ref:n})});On.displayName="TreeViewBranchIndicator";const ke=V.forwardRef((e,n)=>{const a=A(),t=M(),o=P(a.getBranchTextProps(t),e);return u.jsx(O.span,{...o,ref:n})});ke.displayName="TreeViewBranchText";const Ln=V.forwardRef((e,n)=>{const a=A(),t=M(),o=P(a.getItemProps(t),e);return u.jsx(O.div,{...o,ref:n})});Ln.displayName="TreeViewItem";const Se=V.forwardRef((e,n)=>{const a=A(),t=M(),o=P(a.getItemTextProps(t),e);return u.jsx(O.span,{...o,ref:n})});Se.displayName="TreeViewItemText";function vt(e){const[n,a]=Be()(e,["indexPath","node"]),o=A().getNodeState(n);return u.jsx(Ct,{value:o,children:u.jsx(Et,{value:n,children:a.children})})}var bt=at("tree-view").parts("branch","branchContent","branchControl","branchIndentGuide","branchIndicator","branchText","branchTrigger","item","itemIndicator","itemText","label","nodeCheckbox","root","tree"),I=bt.build(),Mn=e=>new Ie(e);Mn.empty=()=>new Ie({rootNode:{children:[]}});var kt=e=>{var n;return((n=e.ids)==null?void 0:n.root)??`tree:${e.id}:root`},Me=e=>{var n;return((n=e.ids)==null?void 0:n.label)??`tree:${e.id}:label`},Fn=(e,n)=>{var a,t;return((t=(a=e.ids)==null?void 0:a.node)==null?void 0:t.call(a,n))??`tree:${e.id}:node:${n}`},ve=e=>{var n;return((n=e.ids)==null?void 0:n.tree)??`tree:${e.id}:tree`},q=(e,n)=>{var a;n!=null&&((a=e.getById(Fn(e,n)))==null||a.focus())};function Kn(e,n,a){const t=e.getNodeValue(n);if(!e.isBranchNode(n))return a.includes(t);const o=e.getDescendantValues(t),i=o.every(m=>a.includes(m)),d=o.some(m=>a.includes(m));return i?!0:d?"indeterminate":!1}function St(e,n,a){const t=e.getDescendantValues(n),o=t.every(i=>a.includes(i));return H(o?he(a,...t):G(a,...t))}function It(e,n){const a=new Map;return e.visit({onEnter:t=>{const o=e.getNodeValue(t),i=e.isBranchNode(t),d=Kn(e,t,n);a.set(o,{type:i?"branch":"leaf",checked:d})}}),a}function At(e,n){const{context:a,scope:t,computed:o,prop:i,send:d}=e,m=i("collection"),h=Array.from(a.get("expandedValue")),x=Array.from(a.get("selectedValue")),g=Array.from(a.get("checkedValue")),f=o("isTypingAhead"),w=a.get("focusedValue"),k=a.get("loadingStatus");function E(s){const{node:r,indexPath:l}=s,p=m.getNodeValue(r),T=m.getFirstNode(),v=T?m.getNodeValue(T):null;return{id:Fn(t,p),value:p,indexPath:l,valuePath:m.getValuePath(l),disabled:!!r.disabled,focused:w==null?v==p:w===p,selected:x.includes(p),expanded:h.includes(p),loading:k[p]==="loading",depth:l.length,isBranch:m.isBranchNode(r),get checked(){return Kn(m,r,g)}}}return{collection:m,expandedValue:h,selectedValue:x,checkedValue:g,toggleChecked(s,r){d({type:"CHECKED.TOGGLE",value:s,isBranch:r})},setChecked(s){d({type:"CHECKED.SET",value:s})},clearChecked(){d({type:"CHECKED.CLEAR"})},getCheckedMap(){return It(m,g)},expand(s){d({type:s?"BRANCH.EXPAND":"EXPANDED.ALL",value:s})},collapse(s){d({type:s?"BRANCH.COLLAPSE":"EXPANDED.CLEAR",value:s})},deselect(s){d({type:s?"NODE.DESELECT":"SELECTED.CLEAR",value:s})},select(s){d({type:s?"NODE.SELECT":"SELECTED.ALL",value:s,isTrusted:!1})},getVisibleNodes(){return o("visibleNodes").map(({node:s})=>s)},focus(s){q(t,s)},selectParent(s){const r=m.getParentNode(s);if(!r)return;const l=G(x,m.getNodeValue(r));d({type:"SELECTED.SET",value:l,src:"select.parent"})},expandParent(s){const r=m.getParentNode(s);if(!r)return;const l=G(h,m.getNodeValue(r));d({type:"EXPANDED.SET",value:l,src:"expand.parent"})},setExpandedValue(s){const r=H(s);d({type:"EXPANDED.SET",value:r})},setSelectedValue(s){const r=H(s);d({type:"SELECTED.SET",value:r})},getRootProps(){return n.element({...I.root.attrs,id:kt(t),dir:i("dir")})},getLabelProps(){return n.element({...I.label.attrs,id:Me(t),dir:i("dir")})},getTreeProps(){return n.element({...I.tree.attrs,id:ve(t),dir:i("dir"),role:"tree","aria-label":"Tree View","aria-labelledby":Me(t),"aria-multiselectable":i("selectionMode")==="multiple"||void 0,tabIndex:-1,onKeyDown(s){if(s.defaultPrevented||rt(s))return;const r=ot(s);if(dt(r))return;const l=r==null?void 0:r.closest("[data-part=branch-control], [data-part=item]");if(!l)return;const p=l.dataset.value;if(p==null){console.warn("[zag-js/tree-view] Node id not found for node",l);return}const T=l.matches("[data-part=branch-control]"),v={ArrowDown(N){F(N)||(N.preventDefault(),d({type:"NODE.ARROW_DOWN",id:p,shiftKey:N.shiftKey}))},ArrowUp(N){F(N)||(N.preventDefault(),d({type:"NODE.ARROW_UP",id:p,shiftKey:N.shiftKey}))},ArrowLeft(N){F(N)||l.dataset.disabled||(N.preventDefault(),d({type:T?"BRANCH_NODE.ARROW_LEFT":"NODE.ARROW_LEFT",id:p}))},ArrowRight(N){!T||l.dataset.disabled||(N.preventDefault(),d({type:"BRANCH_NODE.ARROW_RIGHT",id:p}))},Home(N){F(N)||(N.preventDefault(),d({type:"NODE.HOME",id:p,shiftKey:N.shiftKey}))},End(N){F(N)||(N.preventDefault(),d({type:"NODE.END",id:p,shiftKey:N.shiftKey}))},Space(N){var R;l.dataset.disabled||(f?d({type:"TREE.TYPEAHEAD",key:N.key}):(R=v.Enter)==null||R.call(v,N))},Enter(N){l.dataset.disabled||$(r)&&F(N)||(d({type:T?"BRANCH_NODE.CLICK":"NODE.CLICK",id:p,src:"keyboard"}),$(r)||N.preventDefault())},"*"(N){l.dataset.disabled||(N.preventDefault(),d({type:"SIBLINGS.EXPAND",id:p}))},a(N){!N.metaKey||l.dataset.disabled||(N.preventDefault(),d({type:"SELECTED.ALL",moveFocus:!0}))}},U=st(s,{dir:i("dir")}),B=v[U];if(B){B(s);return}be.isValidEvent(s)&&(d({type:"TREE.TYPEAHEAD",key:s.key,id:p}),s.preventDefault())}})},getNodeState:E,getItemProps(s){const r=E(s);return n.element({...I.item.attrs,id:r.id,dir:i("dir"),"data-ownedby":ve(t),"data-path":s.indexPath.join("/"),"data-value":r.value,tabIndex:r.focused?0:-1,"data-focus":C(r.focused),role:"treeitem","aria-current":r.selected?"true":void 0,"aria-selected":r.disabled?void 0:r.selected,"data-selected":C(r.selected),"aria-disabled":me(r.disabled),"data-disabled":C(r.disabled),"aria-level":r.depth,"data-depth":r.depth,style:{"--depth":r.depth},onFocus(l){l.stopPropagation(),d({type:"NODE.FOCUS",id:r.value})},onClick(l){if(r.disabled||!Ce(l)||$(l.currentTarget)&&F(l))return;const p=l.metaKey||l.ctrlKey;d({type:"NODE.CLICK",id:r.value,shiftKey:l.shiftKey,ctrlKey:p}),l.stopPropagation(),$(l.currentTarget)||l.preventDefault()}})},getItemTextProps(s){const r=E(s);return n.element({...I.itemText.attrs,"data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused)})},getItemIndicatorProps(s){const r=E(s);return n.element({...I.itemIndicator.attrs,"aria-hidden":!0,"data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused),hidden:!r.selected})},getBranchProps(s){const r=E(s);return n.element({...I.branch.attrs,"data-depth":r.depth,dir:i("dir"),"data-branch":r.value,role:"treeitem","data-ownedby":ve(t),"data-value":r.value,"aria-level":r.depth,"aria-selected":r.disabled?void 0:r.selected,"data-path":s.indexPath.join("/"),"data-selected":C(r.selected),"aria-expanded":r.expanded,"data-state":r.expanded?"open":"closed","aria-disabled":me(r.disabled),"data-disabled":C(r.disabled),"data-loading":C(r.loading),"aria-busy":me(r.loading),style:{"--depth":r.depth}})},getBranchIndicatorProps(s){const r=E(s);return n.element({...I.branchIndicator.attrs,"aria-hidden":!0,"data-state":r.expanded?"open":"closed","data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused),"data-loading":C(r.loading)})},getBranchTriggerProps(s){const r=E(s);return n.element({...I.branchTrigger.attrs,role:"button",dir:i("dir"),"data-disabled":C(r.disabled),"data-state":r.expanded?"open":"closed","data-value":r.value,"data-loading":C(r.loading),disabled:r.loading,onClick(l){r.disabled||r.loading||(d({type:"BRANCH_TOGGLE.CLICK",id:r.value}),l.stopPropagation())}})},getBranchControlProps(s){const r=E(s);return n.element({...I.branchControl.attrs,role:"button",id:r.id,dir:i("dir"),tabIndex:r.focused?0:-1,"data-path":s.indexPath.join("/"),"data-state":r.expanded?"open":"closed","data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused),"data-value":r.value,"data-depth":r.depth,"data-loading":C(r.loading),"aria-busy":me(r.loading),onFocus(l){d({type:"NODE.FOCUS",id:r.value}),l.stopPropagation()},onClick(l){if(r.disabled||r.loading||!Ce(l)||$(l.currentTarget)&&F(l))return;const p=l.metaKey||l.ctrlKey;d({type:"BRANCH_NODE.CLICK",id:r.value,shiftKey:l.shiftKey,ctrlKey:p}),l.stopPropagation()}})},getBranchTextProps(s){const r=E(s);return n.element({...I.branchText.attrs,dir:i("dir"),"data-disabled":C(r.disabled),"data-state":r.expanded?"open":"closed","data-loading":C(r.loading)})},getBranchContentProps(s){const r=E(s);return n.element({...I.branchContent.attrs,role:"group",dir:i("dir"),"data-state":r.expanded?"open":"closed","data-depth":r.depth,"data-path":s.indexPath.join("/"),"data-value":r.value,hidden:!r.expanded})},getBranchIndentGuideProps(s){const r=E(s);return n.element({...I.branchIndentGuide.attrs,"data-depth":r.depth})},getNodeCheckboxProps(s){const r=E(s),l=r.checked;return n.element({...I.nodeCheckbox.attrs,tabIndex:-1,role:"checkbox","data-state":l===!0?"checked":l===!1?"unchecked":"indeterminate","aria-checked":l===!0?"true":l===!1?"false":"mixed","data-disabled":C(r.disabled),onClick(p){if(p.defaultPrevented||r.disabled||!Ce(p))return;d({type:"CHECKED.TOGGLE",value:r.value,isBranch:r.isBranch}),p.stopPropagation();const T=p.currentTarget.closest("[role=treeitem]");T==null||T.focus({preventScroll:!0})}})}}}function ue(e,n){const{context:a,prop:t,refs:o}=e;if(!t("loadChildren")){a.set("expandedValue",s=>H(G(s,...n)));return}const i=a.get("loadingStatus"),[d,m]=Oe(n,s=>i[s]==="loaded");if(d.length>0&&a.set("expandedValue",s=>H(G(s,...d))),m.length===0)return;const h=t("collection"),[x,g]=Oe(m,s=>{const r=h.findNode(s);return h.getNodeChildren(r).length>0});if(x.length>0&&a.set("expandedValue",s=>H(G(s,...x))),g.length===0)return;a.set("loadingStatus",s=>({...s,...g.reduce((r,l)=>({...r,[l]:"loading"}),{})}));const f=g.map(s=>{const r=h.getIndexPath(s),l=h.getValuePath(r),p=h.findNode(s);return{id:s,indexPath:r,valuePath:l,node:p}}),w=o.get("pendingAborts"),k=t("loadChildren");it(k,()=>"[zag-js/tree-view] `loadChildren` is required for async expansion");const E=f.map(({id:s,indexPath:r,valuePath:l,node:p})=>{const T=w.get(s);T&&(T.abort(),w.delete(s));const v=new AbortController;return w.set(s,v),k({valuePath:l,indexPath:r,node:p,signal:v.signal})});Promise.allSettled(E).then(s=>{var v,U;const r=[],l=[],p=a.get("loadingStatus");let T=t("collection");s.forEach((B,N)=>{const{id:R,indexPath:W,node:De,valuePath:Yn}=f[N];B.status==="fulfilled"?(p[R]="loaded",r.push(R),T=T.replace(W,{...De,children:B.value})):(w.delete(R),Reflect.deleteProperty(p,R),l.push({node:De,error:B.reason,indexPath:W,valuePath:Yn}))}),a.set("loadingStatus",p),r.length&&(a.set("expandedValue",B=>H(G(B,...r))),(v=t("onLoadChildrenComplete"))==null||v({collection:T})),l.length&&((U=t("onLoadChildrenError"))==null||U({nodes:l}))})}function K(e){const{prop:n,context:a}=e;return function({indexPath:o}){return n("collection").getValuePath(o).slice(0,-1).some(d=>!a.get("expandedValue").includes(d))}}var{and:_}=nt(),Bt=et({props({props:e}){return{selectionMode:"single",collection:Mn.empty(),typeahead:!0,expandOnClick:!0,defaultExpandedValue:[],defaultSelectedValue:[],...e}},initialState(){return"idle"},context({prop:e,bindable:n,getContext:a}){return{expandedValue:n(()=>({defaultValue:e("defaultExpandedValue"),value:e("expandedValue"),isEqual:we,onChange(t){var d;const i=a().get("focusedValue");(d=e("onExpandedChange"))==null||d({expandedValue:t,focusedValue:i,get expandedNodes(){return e("collection").findNodes(t)}})}})),selectedValue:n(()=>({defaultValue:e("defaultSelectedValue"),value:e("selectedValue"),isEqual:we,onChange(t){var d;const i=a().get("focusedValue");(d=e("onSelectionChange"))==null||d({selectedValue:t,focusedValue:i,get selectedNodes(){return e("collection").findNodes(t)}})}})),focusedValue:n(()=>({defaultValue:e("defaultFocusedValue")||null,value:e("focusedValue"),onChange(t){var o;(o=e("onFocusChange"))==null||o({focusedValue:t,get focusedNode(){return t?e("collection").findNode(t):null}})}})),loadingStatus:n(()=>({defaultValue:{}})),checkedValue:n(()=>({defaultValue:e("defaultCheckedValue")||[],value:e("checkedValue"),isEqual:we,onChange(t){var o;(o=e("onCheckedChange"))==null||o({checkedValue:t})}}))}},refs(){return{typeaheadState:{...be.defaultOptions},pendingAborts:new Map}},computed:{isMultipleSelection:({prop:e})=>e("selectionMode")==="multiple",isTypingAhead:({refs:e})=>e.get("typeaheadState").keysSoFar.length>0,visibleNodes:({prop:e,context:n})=>{const a=[];return e("collection").visit({skip:K({prop:e,context:n}),onEnter:(t,o)=>{a.push({node:t,indexPath:o})}}),a}},on:{"EXPANDED.SET":{actions:["setExpanded"]},"EXPANDED.CLEAR":{actions:["clearExpanded"]},"EXPANDED.ALL":{actions:["expandAllBranches"]},"BRANCH.EXPAND":{actions:["expandBranches"]},"BRANCH.COLLAPSE":{actions:["collapseBranches"]},"SELECTED.SET":{actions:["setSelected"]},"SELECTED.ALL":[{guard:_("isMultipleSelection","moveFocus"),actions:["selectAllNodes","focusTreeLastNode"]},{guard:"isMultipleSelection",actions:["selectAllNodes"]}],"SELECTED.CLEAR":{actions:["clearSelected"]},"NODE.SELECT":{actions:["selectNode"]},"NODE.DESELECT":{actions:["deselectNode"]},"CHECKED.TOGGLE":{actions:["toggleChecked"]},"CHECKED.SET":{actions:["setChecked"]},"CHECKED.CLEAR":{actions:["clearChecked"]}},exit:["clearPendingAborts"],states:{idle:{on:{"NODE.FOCUS":{actions:["setFocusedNode"]},"NODE.ARROW_DOWN":[{guard:_("isShiftKey","isMultipleSelection"),actions:["focusTreeNextNode","extendSelectionToNextNode"]},{actions:["focusTreeNextNode"]}],"NODE.ARROW_UP":[{guard:_("isShiftKey","isMultipleSelection"),actions:["focusTreePrevNode","extendSelectionToPrevNode"]},{actions:["focusTreePrevNode"]}],"NODE.ARROW_LEFT":{actions:["focusBranchNode"]},"BRANCH_NODE.ARROW_LEFT":[{guard:"isBranchExpanded",actions:["collapseBranch"]},{actions:["focusBranchNode"]}],"BRANCH_NODE.ARROW_RIGHT":[{guard:_("isBranchFocused","isBranchExpanded"),actions:["focusBranchFirstNode"]},{actions:["expandBranch"]}],"SIBLINGS.EXPAND":{actions:["expandSiblingBranches"]},"NODE.HOME":[{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToFirstNode","focusTreeFirstNode"]},{actions:["focusTreeFirstNode"]}],"NODE.END":[{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToLastNode","focusTreeLastNode"]},{actions:["focusTreeLastNode"]}],"NODE.CLICK":[{guard:_("isCtrlKey","isMultipleSelection"),actions:["toggleNodeSelection"]},{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToNode"]},{actions:["selectNode"]}],"BRANCH_NODE.CLICK":[{guard:_("isCtrlKey","isMultipleSelection"),actions:["toggleNodeSelection"]},{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToNode"]},{guard:"expandOnClick",actions:["selectNode","toggleBranchNode"]},{actions:["selectNode"]}],"BRANCH_TOGGLE.CLICK":{actions:["toggleBranchNode"]},"TREE.TYPEAHEAD":{actions:["focusMatchedNode"]}}}},implementations:{guards:{isBranchFocused:({context:e,event:n})=>e.get("focusedValue")===n.id,isBranchExpanded:({context:e,event:n})=>e.get("expandedValue").includes(n.id),isShiftKey:({event:e})=>e.shiftKey,isCtrlKey:({event:e})=>e.ctrlKey,hasSelectedItems:({context:e})=>e.get("selectedValue").length>0,isMultipleSelection:({prop:e})=>e("selectionMode")==="multiple",moveFocus:({event:e})=>!!e.moveFocus,expandOnClick:({prop:e})=>!!e("expandOnClick")},actions:{selectNode({context:e,event:n}){const a=n.id||n.value;e.set("selectedValue",t=>a==null?t:!n.isTrusted&&le(a)?t.concat(...a):[le(a)?tt(a):a].filter(Boolean))},deselectNode({context:e,event:n}){const a=Ve(n.id||n.value);e.set("selectedValue",t=>he(t,...a))},setFocusedNode({context:e,event:n}){e.set("focusedValue",n.id)},clearFocusedNode({context:e}){e.set("focusedValue",null)},clearSelectedItem({context:e}){e.set("selectedValue",[])},toggleBranchNode({context:e,event:n,action:a}){const t=e.get("expandedValue").includes(n.id);a(t?["collapseBranch"]:["expandBranch"])},expandBranch(e){const{event:n}=e;ue(e,[n.id])},expandBranches(e){const{context:n,event:a}=e,t=Ve(a.value);ue(e,Te(t,n.get("expandedValue")))},collapseBranch({context:e,event:n}){e.set("expandedValue",a=>he(a,n.id))},collapseBranches(e){const{context:n,event:a}=e,t=Ve(a.value);n.set("expandedValue",o=>he(o,...t))},setExpanded({context:e,event:n}){le(n.value)&&e.set("expandedValue",n.value)},clearExpanded({context:e}){e.set("expandedValue",[])},setSelected({context:e,event:n}){le(n.value)&&e.set("selectedValue",n.value)},clearSelected({context:e}){e.set("selectedValue",[])},focusTreeFirstNode({prop:e,scope:n}){const a=e("collection"),t=a.getFirstNode(),o=a.getNodeValue(t);q(n,o)},focusTreeLastNode(e){const{prop:n,scope:a}=e,t=n("collection"),o=t.getLastNode(void 0,{skip:K(e)}),i=t.getNodeValue(o);q(a,i)},focusBranchFirstNode({event:e,prop:n,scope:a}){const t=n("collection"),o=t.findNode(e.id),i=t.getFirstNode(o),d=t.getNodeValue(i);q(a,d)},focusTreeNextNode(e){const{event:n,prop:a,scope:t}=e,o=a("collection"),i=o.getNextNode(n.id,{skip:K(e)});if(!i)return;const d=o.getNodeValue(i);q(t,d)},focusTreePrevNode(e){const{event:n,prop:a,scope:t}=e,o=a("collection"),i=o.getPreviousNode(n.id,{skip:K(e)});if(!i)return;const d=o.getNodeValue(i);q(t,d)},focusBranchNode({event:e,prop:n,scope:a}){const t=n("collection"),o=t.getParentNode(e.id),i=o?t.getNodeValue(o):void 0;q(a,i)},selectAllNodes({context:e,prop:n}){e.set("selectedValue",n("collection").getValues())},focusMatchedNode(e){const{context:n,prop:a,refs:t,event:o,scope:i,computed:d}=e,h=d("visibleNodes").map(({node:g})=>({textContent:a("collection").stringifyNode(g),id:a("collection").getNodeValue(g)})),x=be(h,{state:t.get("typeaheadState"),activeId:n.get("focusedValue"),key:o.key});q(i,x==null?void 0:x.id)},toggleNodeSelection({context:e,event:n}){const a=je(e.get("selectedValue"),n.id);e.set("selectedValue",a)},expandAllBranches(e){const{context:n,prop:a}=e,t=a("collection").getBranchValues(),o=Te(t,n.get("expandedValue"));ue(e,o)},expandSiblingBranches(e){const{context:n,event:a,prop:t}=e,o=t("collection"),i=o.getIndexPath(a.id);if(!i)return;const m=o.getSiblingNodes(i).map(x=>o.getNodeValue(x)),h=Te(m,n.get("expandedValue"));ue(e,h)},extendSelectionToNode(e){const{context:n,event:a,prop:t,computed:o}=e,i=t("collection"),d=Ne(n.get("selectedValue"))||i.getNodeValue(i.getFirstNode()),m=a.id;let h=[d,m],x=0;o("visibleNodes").forEach(({node:f})=>{const w=i.getNodeValue(f);x===1&&h.push(w),(w===d||w===m)&&x++}),n.set("selectedValue",H(h))},extendSelectionToNextNode(e){const{context:n,event:a,prop:t}=e,o=t("collection"),i=o.getNextNode(a.id,{skip:K(e)});if(!i)return;const d=new Set(n.get("selectedValue")),m=o.getNodeValue(i);m!=null&&(d.has(a.id)&&d.has(m)?d.delete(a.id):d.has(m)||d.add(m),n.set("selectedValue",Array.from(d)))},extendSelectionToPrevNode(e){const{context:n,event:a,prop:t}=e,o=t("collection"),i=o.getPreviousNode(a.id,{skip:K(e)});if(!i)return;const d=new Set(n.get("selectedValue")),m=o.getNodeValue(i);m!=null&&(d.has(a.id)&&d.has(m)?d.delete(a.id):d.has(m)||d.add(m),n.set("selectedValue",Array.from(d)))},extendSelectionToFirstNode(e){const{context:n,prop:a}=e,t=a("collection"),o=Ne(n.get("selectedValue")),i=[];t.visit({skip:K(e),onEnter:d=>{const m=t.getNodeValue(d);if(i.push(m),m===o)return"stop"}}),n.set("selectedValue",i)},extendSelectionToLastNode(e){const{context:n,prop:a}=e,t=a("collection"),o=Ne(n.get("selectedValue")),i=[];let d=!1;t.visit({skip:K(e),onEnter:m=>{const h=t.getNodeValue(m);h===o&&(d=!0),d&&i.push(h)}}),n.set("selectedValue",i)},clearPendingAborts({refs:e}){const n=e.get("pendingAborts");n.forEach(a=>a.abort()),n.clear()},toggleChecked({context:e,event:n,prop:a}){const t=a("collection");e.set("checkedValue",o=>n.isBranch?St(t,n.value,o):je(o,n.value))},setChecked({context:e,event:n}){e.set("checkedValue",n.value)},clearChecked({context:e}){e.set("checkedValue",[])}}}});Bn()(["ids","collection","dir","expandedValue","expandOnClick","defaultFocusedValue","focusedValue","getRootNode","id","onExpandedChange","onFocusChange","onSelectionChange","checkedValue","selectedValue","selectionMode","typeahead","defaultExpandedValue","defaultSelectedValue","defaultCheckedValue","onCheckedChange","onLoadChildrenComplete","onLoadChildrenError","loadChildren"]);Bn()(["node","indexPath"]);const Pt=e=>{const n=V.useId(),{dir:a}=ct(),{getRootNode:t}=lt(),o={id:n,dir:a,getRootNode:t,...e},i=mt(Bt,o);return At(i,ut)},Rt=(e,n)=>{const[a,t]=ht(e),[o,i]=Be()(t,["checkedValue","collection","defaultCheckedValue","defaultExpandedValue","defaultFocusedValue","defaultSelectedValue","expandedValue","expandOnClick","focusedValue","id","ids","loadChildren","onCheckedChange","onExpandedChange","onFocusChange","onLoadChildrenComplete","onLoadChildrenError","onSelectionChange","selectedValue","selectionMode","typeahead"]),d=Pt(o),m=P(d.getRootProps(),i);return u.jsx(wt,{value:d,children:u.jsx(gt,{value:a,children:u.jsx(O.div,{...m,ref:n})})})},_t=V.forwardRef(Rt),qn=V.forwardRef((e,n)=>{const a=A(),t=P(a.getTreeProps(),e);return u.jsx(O.div,{...t,ref:n})});qn.displayName="TreeViewTree";const Pe=V.forwardRef((e,n)=>{const a=A(),t=M(),o=P(a.getNodeCheckboxProps(t),e);return u.jsx(O.span,{...o,ref:n})});Pe.displayName="TreeViewNodeCheckbox";const Hn=e=>{const{children:n,indeterminate:a,fallback:t}=e,i=Pn().checked;return i==="indeterminate"&&a?u.jsx(u.Fragment,{children:a}):i===!0&&n?u.jsx(u.Fragment,{children:n}):u.jsx(u.Fragment,{children:t})};Hn.displayName="TreeViewNodeCheckboxIndicator";const Gn=V.createContext(void 0);function Un({children:e,disabled:n,getIndexPathForId:a,multiple:t}){return u.jsx(Gn.Provider,{value:{disabled:n,getIndexPathForId:a,multiple:t},children:e})}function Dt(){return zn(Gn)}Un.__docgenInfo={description:"",methods:[],displayName:"TreeViewProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},getIndexPathForId:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => number[] | undefined",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"union",raw:"number[] | undefined",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"undefined"}]}}},description:""}},composes:["Pick"]};function jt(e){return Vt({isNodeDisabled:n=>n.disabled??!1,nodeToString:n=>n.name,nodeToValue:n=>n.id,rootNode:{children:e,id:"ROOT",name:"ROOT"}})}function Ot(e,n){return Array.isArray(e)?n?e:e[0]??"":n?[e]:e}function Wn(e,n=!1,a,t){var o;!n||a||e.key===" "&&(e.preventDefault(),e.stopPropagation(),(o=t.current)==null||o.click())}const Lt={"tree-view":"_tree-view_nyox9_2"},Re=V.forwardRef(({children:e,className:n,defaultExpandedValue:a,defaultValue:t,disabled:o,expandedValue:i,items:d,multiple:m,onExpandedChange:h,onValueChange:x,value:g,...f},w)=>{const k=V.useMemo(()=>jt(d),[d]),E=V.useMemo(()=>{const p=new Map;function T(v,U=[]){v!=null&&v.length&&v.forEach((B,N)=>{var W;const R=[...U,N];p.set(B.id,R),(W=B.children)!=null&&W.length&&T(B.children,R)})}return T(d,[]),p},[d]);function s(p){if(!x)return;const T=Ot(p.selectedValue,m),v=Array.isArray(T)?T:[T];x({value:v})}function r(p){x&&x({value:p.checkedValue})}function l(p){h&&h(p)}return u.jsx(Un,{disabled:o,getIndexPathForId:p=>E.get(p),multiple:m,children:u.jsx(_t,{className:ie(Lt["tree-view"],n),collection:k,"data-ods":"tree-view",defaultExpandedValue:a,expandedValue:i,onExpandedChange:l,ref:w,selectionMode:m?"multiple":"single",...m?{checkedValue:g,defaultCheckedValue:t,onCheckedChange:r}:{defaultSelectedValue:t,onSelectionChange:s,selectedValue:g},...f,children:u.jsx(qn,{children:e})})})});Re.displayName="TreeView";Re.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{defaultExpandedValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial expanded value(s). Use when you don't need to control the expanded value(s) of the tree view."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the tree view."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},expandedValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled expanded value(s)."},items:{required:!0,tsType:{name:"Array",elements:[{name:"TreeViewItem"}],raw:"Array<TreeViewItem>"},description:"The list of items"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(details: TreeViewExpandedChangeDetail) => void",signature:{arguments:[{type:{name:"TreeViewExpandedChangeDetail"},name:"details"}],return:{name:"void"}}},description:"Callback fired when the expanded value(s) changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(details: TreeViewValueChangeDetail) => void",signature:{arguments:[{type:{name:"TreeViewValueChangeDetail"},name:"details"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}},composes:["Omit"]};const _e=({isDisabled:e})=>u.jsx(Hn,{fallback:u.jsx(Ee,{checked:!1,disabled:e,children:u.jsx(ye,{})}),indeterminate:u.jsx(Ee,{checked:"indeterminate",disabled:e,children:u.jsx(ye,{})}),children:u.jsx(Ee,{checked:!0,disabled:e,children:u.jsx(ye,{})})});_e.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeCheckboxIndicator",props:{isDisabled:{required:!0,tsType:{name:"boolean"},description:""}}};const ce=({children:e,item:n})=>{var o,i,d;const{expandedValue:a}=A(),t=(a==null?void 0:a.includes(n.id))??!1;if(typeof e=="function"){const h=e({customData:n.customRendererData,isBranch:!!((o=n.children)!=null&&o.length),isExpanded:t,item:n});return(i=n.children)!=null&&i.length?u.jsx(ke,{asChild:!0,children:h}):u.jsx(Se,{asChild:!0,children:h})}return(d=n.children)!=null&&d.length?u.jsx(ke,{children:n.name}):u.jsx(Se,{children:n.name})};ce.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeLabel",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},item:{required:!0,tsType:{name:"TreeViewItem"},description:""}}};const pe={"tree-view-node-branch__control":"_tree-view-node-branch__control_1yd47_2","tree-view-node-branch__control__checkbox":"_tree-view-node-branch__control__checkbox_1yd47_16","tree-view-node-branch__control__chevron":"_tree-view-node-branch__control__chevron_1yd47_42","tree-view-node-branch__control__children":"_tree-view-node-branch__control__children_1yd47_54"},$n=V.forwardRef(({className:e,effectiveIndexPath:n,getIndexPathForId:a,isDisabled:t,item:o,multiple:i,labelChildren:d,renderChildNode:m,...h},x)=>{var s,r;const{checkedValue:g}=A(),f=V.useRef(null),w=(s=f.current)==null?void 0:s.getAttribute("data-state");let k;i?w==="indeterminate"?k="mixed":w==="checked"?k="true":k=g!=null&&g.includes(o.id)?"true":"false":k=void 0;function E(l){Wn(l,i,t,f)}return u.jsxs(Rn,{"aria-disabled":t,className:e,"data-disabled":t?!0:void 0,"data-ods":"tree-view-node-branch",onKeyDown:E,ref:x,...h,children:[u.jsxs(Dn,{"aria-checked":k,"aria-disabled":t,className:pe["tree-view-node-branch__control"],"data-disabled":t?!0:void 0,role:i?"checkbox":"group",tabIndex:t?-1:void 0,children:[u.jsx(On,{className:pe["tree-view-node-branch__control__chevron"],children:u.jsx(D,{name:j.chevronRight})}),i?u.jsxs(Pe,{"aria-disabled":t,className:pe["tree-view-node-branch__control__checkbox"],"data-disabled":t?!0:void 0,tabIndex:-1,ref:f,children:[u.jsx(_e,{isDisabled:t}),u.jsx(ce,{item:o,children:d})]}):u.jsx(u.Fragment,{children:u.jsx(ce,{item:o,children:d})})]}),u.jsxs(_n,{className:pe["tree-view-node-branch__control__children"],children:[u.jsx(jn,{}),(r=o.children)==null?void 0:r.map((l,p)=>{if(!(l!=null&&l.id)||!(l!=null&&l.name))return null;const T=a(l.id)??[...n,p];return m(l,T)})]})]})});$n.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeBranch",props:{effectiveIndexPath:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},getIndexPathForId:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => number[] | undefined",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"union",raw:"number[] | undefined",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"undefined"}]}}},description:""},isDisabled:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"TreeViewItem"},description:""},labelChildren:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},renderChildNode:{required:!0,tsType:{name:"signature",type:"function",raw:"(child: TreeViewItem, childIndexPath: number[]) => JSX.Element",signature:{arguments:[{type:{name:"TreeViewItem"},name:"child"},{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"childIndexPath"}],return:{name:"JSX.Element"}}},description:""}},composes:["ComponentPropsWithRef"]};const Fe={"tree-view-node-item":"_tree-view-node-item_5wrqb_2","tree-view-node-item__checkbox":"_tree-view-node-item__checkbox_5wrqb_13"},Xn=V.forwardRef(({className:e,isDisabled:n,item:a,labelChildren:t,multiple:o,...i},d)=>{const{checkedValue:m}=A(),h=V.useRef(null),x=(m==null?void 0:m.includes(a.id))??!1;let g;o?g=x?"true":"false":g=void 0;function f(w){Wn(w,o,n,h)}return u.jsx(Ln,{"aria-checked":g,"aria-disabled":n,className:ie(Fe["tree-view-node-item"],e),"data-disabled":n?!0:void 0,"data-ods":"tree-view-node-item",onKeyDown:f,ref:d,tabIndex:n?-1:void 0,...i,children:o?u.jsxs(Pe,{"aria-disabled":n,className:Fe["tree-view-node-item__checkbox"],"data-disabled":n?!0:void 0,ref:h,tabIndex:-1,children:[u.jsx(_e,{isDisabled:n}),u.jsx(ce,{item:a,children:t})]}):u.jsx(ce,{item:a,children:t})})});Xn.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeItem",props:{isDisabled:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"TreeViewItem"},description:""},labelChildren:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ComponentPropsWithRef"]};const Ke={"tree-view-node":"_tree-view-node_3frp4_2"},y=V.forwardRef(({children:e,className:n,indexPath:a,item:t,...o},i)=>{var E;const{multiple:d,disabled:m,getIndexPathForId:h}=Dt(),g=h(t.id)??a??[],f=!!((E=t.children)!=null&&E.length),w=!!(m||t.disabled),k={...t,disabled:w};return u.jsx(vt,{indexPath:g,node:k,children:f?u.jsx($n,{className:ie(Ke["tree-view-node"],n),effectiveIndexPath:g,getIndexPathForId:h,isDisabled:w,item:t,labelChildren:e,multiple:d,renderChildNode:(s,r)=>u.jsx(y,{indexPath:r,item:s,children:e},s.id),...o,ref:i}):u.jsx(Xn,{className:ie(Ke["tree-view-node"],n),isDisabled:w,item:t,labelChildren:e,multiple:d,...o,ref:i})})});y.displayName="TreeViewNode";y.__docgenInfo={description:"",methods:[],displayName:"TreeViewNode",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Label content or custom render function."},indexPath:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"@internal *"},item:{required:!0,tsType:{name:"TreeViewItem"},description:"The tree node to render."}},composes:["Omit"]};const Mt={"tree-view-nodes":"_tree-view-nodes_wfmwi_2"},b=V.forwardRef(({children:e,className:n,...a},t)=>u.jsx("div",{className:ie(Mt["tree-view-nodes"],n),"data-ods":"tree-view-nodes",ref:t,...a,children:e}));b.displayName="TreeViewNodes";b.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodes",composes:["ComponentPropsWithRef"]};const S=Object.assign(Re,{Node:y,Nodes:b}),Ft={argTypes:Nt(["defaultExpandedValue","defaultValue","items","onExpandedChange","onValueChange","expandedValue","value"]),component:S,subcomponents:{TreeViewNode:y,TreeViewNodes:b},title:"React Components/Tree View"},X={render:e=>{const n=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{defaultExpandedValue:e.defaultExpandedValue,disabled:e.disabled,expandedValue:e.expandedValue,items:n,multiple:e.multiple},c.createElement(b,null,n.map(a=>c.createElement(y,{key:a.id,item:a}))))},argTypes:Tt({disabled:{table:{category:Le.general},control:"boolean"},multiple:{table:{category:Le.general},control:"boolean"}})},Y={tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n}))))}},Z={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n}))))}},J={tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n}))))}},Q={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{items:e,multiple:!0},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n}))))}},z={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{defaultExpandedValue:["src","components"],items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n}))))}},ee={globals:{imports:`import { TreeView, TreeViewNode, TreeViewNodes, type TreeViewValueChangeDetail } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}],[n,a]=V.useState("package.json");return c.createElement(c.Fragment,null,c.createElement(S,{items:e,onValueChange:t=>a(t.value[0]),value:n?[n]:void 0},c.createElement(b,null,e.map(t=>c.createElement(y,{key:t.id,item:t})))),c.createElement("div",{style:{marginTop:8}},"Selected: ",n??"None"))}},ne={globals:{imports:`import { TreeView, TreeViewNode, TreeViewNodes, type TreeViewValueChangeDetail } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}],[n,a]=V.useState(["package.json","index.ts"]);return c.createElement(c.Fragment,null,c.createElement(S,{items:e,multiple:!0,onValueChange:t=>a(Array.isArray(t.value)?t.value:[t.value].filter(Boolean)),value:n},c.createElement(b,null,e.map(t=>c.createElement(y,{key:t.id,item:t})))),c.createElement("div",{style:{marginTop:8}},"Selected: ",n.length?n.join(", "):"None"))}},te={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{disabled:!0,items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n}))))}},ae={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts",disabled:!0},{id:"components",name:"components",disabled:!0,children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx",disabled:!0}]}]},{id:"package.json",name:"package.json",disabled:!0},{id:"readme.md",name:"README.md"}];return c.createElement(S,{items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n}))))}},re={globals:{imports:"import { Icon, ICON_NAME, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(S,{items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n},({item:a,isBranch:t,isExpanded:o})=>c.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},t?o?c.createElement(D,{name:j.folderMinus}):c.createElement(D,{name:j.folderPlus}):c.createElement(D,{name:j.file}),c.createElement("span",null,a.name))))))}},oe={globals:{imports:"import { FormField, FormFieldLabel, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return c.createElement(Jn,null,c.createElement(Qn,null,"Choose a file"),c.createElement(S,{items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n})))))}},de={globals:{imports:`import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Icon, ICON_NAME, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const[e,n]=V.useState([{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}]),a=V.useRef(1);function t(h,x,g){return h.map(f=>{var w;if(f.id===x){const k=Array.isArray(f.children)?[...f.children,g]:[g];return{...f,children:k}}return(w=f.children)!=null&&w.length?{...f,children:t(f.children,x,g)}:f})}function o(h,x){return h.filter(g=>g.id!==x).map(g=>{var f;return(f=g.children)!=null&&f.length?{...g,children:o(g.children,x)}:g})}function i(h){const x=`new-file-${a.current++}.txt`,g={id:x,name:x};n(f=>t(f,h,g))}function d(h){n(x=>o(x,h))}function m(){const h=`new-file-${a.current++}.txt`,x={id:h,name:h};n(g=>[...g,x])}return c.createElement("div",null,c.createElement("div",{style:{marginBottom:16}},c.createElement(ge,{"aria-label":"Add file at root level",onClick:m,size:fe.xs,variant:xe.outline},c.createElement(D,{name:j.plus}),"Add file at root level")),c.createElement(S,{items:e,multiple:!0},c.createElement(b,null,e.map(h=>c.createElement(y,{key:h.id,item:h},({item:x,isBranch:g})=>c.createElement("div",{style:{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"}},c.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},g?c.createElement(D,{name:j.folder}):c.createElement(D,{name:j.file}),c.createElement("span",null,x.name)),c.createElement("div",{style:{display:"inline-flex",marginLeft:"auto",alignItems:"center",gap:8}},g?c.createElement(ge,{"aria-label":"Add child",onClick:f=>{f.stopPropagation(),i(x.id)},size:fe.xs,onKeyDown:f=>{f.stopPropagation()},variant:xe.outline},c.createElement(D,{name:j.plus})):null,c.createElement(ge,{"aria-label":"Delete",color:Zn.critical,onClick:f=>{f.stopPropagation(),d(x.id)},onMouseDown:f=>{f.stopPropagation()},onKeyDown:f=>{f.stopPropagation()},size:fe.xs,variant:xe.outline},c.createElement(D,{name:j.trash})))))))))}},se={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"button.scss",name:"button.scss"}]}]},{id:"package.json",name:"package.json"}];return c.createElement("div",{style:{display:"flex",gap:"24px"}},c.createElement(S,{items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n})))),c.createElement(S,{disabled:!0,items:e},c.createElement(b,null,e.map(n=>c.createElement(y,{key:n.id,item:n})))))}};var qe,He,Ge;X.parameters={...X.parameters,docs:{...(qe=X.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: arg => {
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView defaultExpandedValue={arg.defaultExpandedValue} disabled={arg.disabled} expandedValue={arg.expandedValue} items={items} multiple={arg.multiple}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  },
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(Ge=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Ue,We,$e;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => {
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView items={items}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...($e=(We=Y.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var Xe,Ye,Ze;Z.parameters={...Z.parameters,docs:{...(Xe=Z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => {
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView items={items}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...(Ze=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Je,Qe,ze;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => {
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView items={items}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...(ze=(Qe=J.parameters)==null?void 0:Qe.docs)==null?void 0:ze.source}}};var en,nn,tn;Q.parameters={...Q.parameters,docs:{...(en=Q.parameters)==null?void 0:en.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView items={items} multiple>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...(tn=(nn=Q.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,rn,on;z.parameters={...z.parameters,docs:{...(an=z.parameters)==null?void 0:an.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView defaultExpandedValue={["src", "components"]} items={items}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...(on=(rn=z.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var dn,sn,cn;ee.parameters={...ee.parameters,docs:{...(dn=ee.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TreeView, TreeViewNode, TreeViewNodes, type TreeViewValueChangeDetail } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    const [selectedId, setSelectedId] = useState<string | undefined>('package.json');
    return <>
        <TreeView items={items} onValueChange={(d: TreeViewValueChangeDetail) => setSelectedId(d.value[0])} value={selectedId ? [selectedId] : undefined}>
          <TreeViewNodes>
            {items.map(item => <TreeViewNode key={item.id} item={item} />)}
          </TreeViewNodes>
        </TreeView>
        <div style={{
        marginTop: 8
      }}>Selected: {selectedId ?? 'None'}</div>
      </>;
  }
}`,...(cn=(sn=ee.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var ln,mn,un;ne.parameters={...ne.parameters,docs:{...(ln=ne.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TreeView, TreeViewNode, TreeViewNodes, type TreeViewValueChangeDetail } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    const [selectedIds, setSelectedIds] = useState<string[]>(['package.json', 'index.ts']);
    return <>
        <TreeView items={items} multiple onValueChange={(d: TreeViewValueChangeDetail) => setSelectedIds(Array.isArray(d.value) ? d.value : [d.value].filter(Boolean) as string[])} value={selectedIds}>
          <TreeViewNodes>
            {items.map(item => <TreeViewNode key={item.id} item={item} />)}
          </TreeViewNodes>
        </TreeView>
        <div style={{
        marginTop: 8
      }}>Selected: {selectedIds.length ? selectedIds.join(', ') : 'None'}</div>
      </>;
  }
}`,...(un=(mn=ne.parameters)==null?void 0:mn.docs)==null?void 0:un.source}}};var pn,hn,gn;te.parameters={...te.parameters,docs:{...(pn=te.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView disabled items={items}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...(gn=(hn=te.parameters)==null?void 0:hn.docs)==null?void 0:gn.source}}};var xn,fn,Nn;ae.parameters={...ae.parameters,docs:{...(xn=ae.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts',
        disabled: true
      }, {
        id: 'components',
        name: 'components',
        disabled: true,
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx',
          disabled: true
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json',
      disabled: true
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView items={items}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item} />)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...(Nn=(fn=ae.parameters)==null?void 0:fn.docs)==null?void 0:Nn.source}}};var Tn,Vn,wn;re.parameters={...re.parameters,docs:{...(Tn=re.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Icon, ICON_NAME, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <TreeView items={items}>
        <TreeViewNodes>
          {items.map(item => <TreeViewNode key={item.id} item={item}>
              {({
            item,
            isBranch,
            isExpanded
          }) => <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }}>
                  {isBranch ? isExpanded ? <Icon name={ICON_NAME.folderMinus} /> : <Icon name={ICON_NAME.folderPlus} /> : <Icon name={ICON_NAME.file} />}
                  <span>{item.name}</span>
                </span>}
            </TreeViewNode>)}
        </TreeViewNodes>
      </TreeView>;
  }
}`,...(wn=(Vn=re.parameters)==null?void 0:Vn.docs)==null?void 0:wn.source}}};var Cn,En,yn;oe.parameters={...oe.parameters,docs:{...(Cn=oe.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';\`
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
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'Card.tsx',
          name: 'Card.tsx'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }];
    return <FormField>
        <FormFieldLabel>Choose a file</FormFieldLabel>
        <TreeView items={items}>
          <TreeViewNodes>
            {items.map(item => <TreeViewNode key={item.id} item={item} />)}
          </TreeViewNodes>
        </TreeView>
      </FormField>;
  }
}`,...(yn=(En=oe.parameters)==null?void 0:En.docs)==null?void 0:yn.source}}};var vn,bn,kn;de.parameters={...de.parameters,docs:{...(vn=de.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Icon, ICON_NAME, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';\`
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
    type Item = {
      id: string;
      name: string;
      children?: Item[];
    };
    const [items, setItems] = useState<Item[]>([{
      id: 'src',
      name: 'src',
      children: [{
        id: 'app.tsx',
        name: 'app.tsx'
      }, {
        id: 'index.ts',
        name: 'index.ts'
      }, {
        id: 'components',
        name: 'components',
        children: []
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }, {
      id: 'readme.md',
      name: 'README.md'
    }]);
    const counter = useRef(1);
    function addChildTo(collection: Item[], parentId: string, newNode: Item): Item[] {
      return collection.map(node => {
        if (node.id === parentId) {
          const nextChildren = Array.isArray(node.children) ? [...node.children, newNode] : [newNode];
          return {
            ...node,
            children: nextChildren
          };
        }
        if (node.children?.length) {
          return {
            ...node,
            children: addChildTo(node.children, parentId, newNode)
          };
        }
        return node;
      });
    }
    function removeNodeFrom(collection: Item[], nodeId: string): Item[] {
      return collection.filter(node => node.id !== nodeId).map(node => node.children?.length ? {
        ...node,
        children: removeNodeFrom(node.children, nodeId)
      } : node);
    }
    function handleAddChild(parentId: string): void {
      const id = \`new-file-\${counter.current++}.txt\`;
      const newNode = {
        id,
        name: id
      };
      setItems(prev => addChildTo(prev, parentId, newNode));
    }
    function handleDelete(nodeId: string): void {
      setItems(prev => removeNodeFrom(prev, nodeId));
    }
    function handleAddRootFile(): void {
      const id = \`new-file-\${counter.current++}.txt\`;
      const newNode = {
        id,
        name: id
      };
      setItems(prev => [...prev, newNode]);
    }
    return <div>
        <div style={{
        marginBottom: 16
      }}>
          <Button aria-label="Add file at root level" onClick={handleAddRootFile} size={BUTTON_SIZE.xs} variant={BUTTON_VARIANT.outline}>
            <Icon name={ICON_NAME.plus} />
            Add file at root level
          </Button>
        </div>
        <TreeView items={items} multiple>
          <TreeViewNodes>
            {items.map(item => <TreeViewNode key={item.id} item={item}>
                {({
              item,
              isBranch
            }) => <div style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between'
            }}>
                    <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}>
                      {isBranch ? <Icon name={ICON_NAME.folder} /> : <Icon name={ICON_NAME.file} />}
                      <span>{item.name}</span>
                    </span>
                    <div style={{
                display: 'inline-flex',
                marginLeft: 'auto',
                alignItems: 'center',
                gap: 8
              }}>
                      {isBranch ? <Button aria-label="Add child" onClick={e => {
                  e.stopPropagation();
                  handleAddChild(item.id);
                }} size={BUTTON_SIZE.xs} onKeyDown={e => {
                  e.stopPropagation();
                }} variant={BUTTON_VARIANT.outline}>
                          <Icon name={ICON_NAME.plus} />
                        </Button> : null}
                      <Button aria-label="Delete" color={BUTTON_COLOR.critical} onClick={e => {
                  e.stopPropagation();
                  handleDelete(item.id);
                }} onMouseDown={e => {
                  e.stopPropagation();
                }} onKeyDown={e => {
                  e.stopPropagation();
                }} size={BUTTON_SIZE.xs} variant={BUTTON_VARIANT.outline}>
                        <Icon name={ICON_NAME.trash} />
                      </Button>
                    </div>
                  </div>}
              </TreeViewNode>)}
          </TreeViewNodes>
        </TreeView>
      </div>;
  }
}`,...(kn=(bn=de.parameters)==null?void 0:bn.docs)==null?void 0:kn.source}}};var Sn,In,An;se.parameters={...se.parameters,docs:{...(Sn=se.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => {
    const items = [{
      id: 'src',
      name: 'src',
      children: [{
        id: 'components',
        name: 'components',
        children: [{
          id: 'Button.tsx',
          name: 'Button.tsx'
        }, {
          id: 'button.scss',
          name: 'button.scss'
        }]
      }]
    }, {
      id: 'package.json',
      name: 'package.json'
    }];
    return <div style={{
      display: 'flex',
      gap: '24px'
    }}>
        <TreeView items={items}>
          <TreeViewNodes>
            {items.map(item => <TreeViewNode key={item.id} item={item} />)}
          </TreeViewNodes>
        </TreeView>

        <TreeView disabled items={items}>
          <TreeViewNodes>
            {items.map(item => <TreeViewNode key={item.id} item={item} />)}
          </TreeViewNodes>
        </TreeView>
      </div>;
  }
}`,...(An=(In=se.parameters)==null?void 0:In.docs)==null?void 0:An.source}}};const Kt=["Demo","AnatomyTech","Default","Overview","Multiple","DefaultExpandedValue","Controlled","ControlledMultiple","Disabled","DisabledItems","CustomRender","InFormField","DynamicChildren","ThemeGenerator"],aa=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:Y,Controlled:ee,ControlledMultiple:ne,CustomRender:re,Default:Z,DefaultExpandedValue:z,Demo:X,Disabled:te,DisabledItems:ae,DynamicChildren:de,InFormField:oe,Multiple:Q,Overview:J,ThemeGenerator:se,__namedExportsOrder:Kt,default:Ft},Symbol.toStringTag,{value:"Module"}));export{Y as A,re as C,Z as D,oe as I,Q as M,J as O,aa as T,te as a,z as b,ee as c,ne as d,ae as e,de as f};
