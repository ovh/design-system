import{r as T,e as l}from"./index-jIWwRBLr.js";import{B as he,d as ge,c as xe}from"./Button-B-GJ-1TA.js";import{a as Un}from"./colors-DSObuHxd.js";import{F as Wn,a as $n}from"./FormFieldLabel-B8-lDkmb.js";import{I as D,a as j}from"./icon-name-C581wThh.js";import{j as u}from"./jsx-runtime-Cfl8ynUo.js";import{c as se}from"./index-CqY9YpN0.js";import{T as Se}from"./index-BOgpNz4u.js";import{c as Ie,T as B,a as Ae,U as O,P as C,Q as Xn,a7 as fe,aq as ce,aw as $,as as M,aa as Yn,d as Zn,aW as Jn,W as Qn,aX as ve,aY as H,aF as G,z as zn,Y as et,a3 as _e,_ as Ne,aZ as Te,a2 as le,a_ as Ve,aG as pe,Z as nt,f as we,C as bn,a$ as De,b0 as tt,R as at,u as rt,D as ot,S as dt}from"./use-locale-context-6s5qsrWI.js";import{u as st,s as it,R as ct}from"./render-strategy-BOAyFnMW.js";import{c as Ce,b as Ee}from"./CheckboxLabel-57GsEPG_.js";import{C as lt,a as mt}from"./collapsible-content-JTmOXf4c.js";import{e as ut,o as pt,C as je}from"./controls-BtiQQn1l.js";import{s as L}from"./source-CPEZJ6oD.js";const ht=e=>new Se(e),[gt,A]=Ie({name:"TreeViewContext",hookName:"useTreeViewContext",providerName:"<TreeViewProvider />"}),[xt,kn]=Ie({name:"TreeViewNodeContext",hookName:"useTreeViewNodeContext",providerName:"<TreeViewNodeProvider />"}),[ft,F]=Ie({name:"TreeViewNodePropsContext",hookName:"useTreeViewNodePropsContext",providerName:"<TreeViewItemProvider />"}),Sn=T.forwardRef((e,n)=>{const a=A(),t=F(),o=kn(),i=st(),d=B(a.getBranchProps(t),e),m=a.getBranchContentProps(t);return u.jsx(lt,{ref:n,open:o.expanded,ids:{content:m.id},...i,...d})});Sn.displayName="TreeViewBranch";const Nt=Ae(),In=T.forwardRef((e,n)=>{const a=A(),t=F(),o=a.getBranchContentProps(t),[,i]=Nt(o,["hidden","data-state"]),d=B(i,e);return u.jsx(mt,{ref:n,...d})});In.displayName="TreeViewBranchContent";const An=T.forwardRef((e,n)=>{const a=A(),t=F(),o=B(a.getBranchControlProps(t),e);return u.jsx(O.div,{...o,ref:n})});An.displayName="TreeViewBranchControl";const Pn=T.forwardRef((e,n)=>{const a=A(),t=F(),o=B(a.getBranchIndentGuideProps(t),e);return u.jsx(O.div,{...o,ref:n})});Pn.displayName="TreeViewBranchIndentGuide";const Bn=T.forwardRef((e,n)=>{const a=A(),t=F(),o=B(a.getBranchIndicatorProps(t),e);return u.jsx(O.div,{...o,ref:n})});Bn.displayName="TreeViewBranchIndicator";const be=T.forwardRef((e,n)=>{const a=A(),t=F(),o=B(a.getBranchTextProps(t),e);return u.jsx(O.span,{...o,ref:n})});be.displayName="TreeViewBranchText";const Rn=T.forwardRef((e,n)=>{const a=A(),t=F(),o=B(a.getItemProps(t),e);return u.jsx(O.div,{...o,ref:n})});Rn.displayName="TreeViewItem";const ke=T.forwardRef((e,n)=>{const a=A(),t=F(),o=B(a.getItemTextProps(t),e);return u.jsx(O.span,{...o,ref:n})});ke.displayName="TreeViewItemText";function Tt(e){const[n,a]=Ae()(e,["indexPath","node"]),o=A().getNodeState(n);return u.jsx(xt,{value:o,children:u.jsx(ft,{value:n,children:a.children})})}var Vt=Xn("tree-view").parts("branch","branchContent","branchControl","branchIndentGuide","branchIndicator","branchText","branchTrigger","item","itemIndicator","itemText","label","nodeCheckbox","root","tree"),I=Vt.build(),_n=e=>new Se(e);_n.empty=()=>new Se({rootNode:{children:[]}});var wt=e=>{var n;return((n=e.ids)==null?void 0:n.root)??`tree:${e.id}:root`},Oe=e=>{var n;return((n=e.ids)==null?void 0:n.label)??`tree:${e.id}:label`},Dn=(e,n)=>{var a,t;return((t=(a=e.ids)==null?void 0:a.node)==null?void 0:t.call(a,n))??`tree:${e.id}:node:${n}`},ye=e=>{var n;return((n=e.ids)==null?void 0:n.tree)??`tree:${e.id}:tree`},q=(e,n)=>{var a;n!=null&&((a=e.getById(Dn(e,n)))==null||a.focus())};function jn(e,n,a){const t=e.getNodeValue(n);if(!e.isBranchNode(n))return a.includes(t);const o=e.getDescendantValues(t),i=o.every(m=>a.includes(m)),d=o.some(m=>a.includes(m));return i?!0:d?"indeterminate":!1}function Ct(e,n,a){const t=e.getDescendantValues(n),o=t.every(i=>a.includes(i));return H(o?pe(a,...t):G(a,...t))}function Et(e,n){const a=new Map;return e.visit({onEnter:t=>{const o=e.getNodeValue(t),i=e.isBranchNode(t),d=jn(e,t,n);a.set(o,{type:i?"branch":"leaf",checked:d})}}),a}function yt(e,n){const{context:a,scope:t,computed:o,prop:i,send:d}=e,m=i("collection"),h=Array.from(a.get("expandedValue")),x=Array.from(a.get("selectedValue")),g=Array.from(a.get("checkedValue")),f=o("isTypingAhead"),w=a.get("focusedValue"),k=a.get("loadingStatus");function E(s){const{node:r,indexPath:c}=s,p=m.getNodeValue(r),V=m.getFirstNode(),y=V?m.getNodeValue(V):null;return{id:Dn(t,p),value:p,indexPath:c,valuePath:m.getValuePath(c),disabled:!!r.disabled,focused:w==null?y==p:w===p,selected:x.includes(p),expanded:h.includes(p),loading:k[p]==="loading",depth:c.length,isBranch:m.isBranchNode(r),get checked(){return jn(m,r,g)}}}return{collection:m,expandedValue:h,selectedValue:x,checkedValue:g,toggleChecked(s,r){d({type:"CHECKED.TOGGLE",value:s,isBranch:r})},setChecked(s){d({type:"CHECKED.SET",value:s})},clearChecked(){d({type:"CHECKED.CLEAR"})},getCheckedMap(){return Et(m,g)},expand(s){d({type:s?"BRANCH.EXPAND":"EXPANDED.ALL",value:s})},collapse(s){d({type:s?"BRANCH.COLLAPSE":"EXPANDED.CLEAR",value:s})},deselect(s){d({type:s?"NODE.DESELECT":"SELECTED.CLEAR",value:s})},select(s){d({type:s?"NODE.SELECT":"SELECTED.ALL",value:s,isTrusted:!1})},getVisibleNodes(){return o("visibleNodes").map(({node:s})=>s)},focus(s){q(t,s)},selectParent(s){const r=m.getParentNode(s);if(!r)return;const c=G(x,m.getNodeValue(r));d({type:"SELECTED.SET",value:c,src:"select.parent"})},expandParent(s){const r=m.getParentNode(s);if(!r)return;const c=G(h,m.getNodeValue(r));d({type:"EXPANDED.SET",value:c,src:"expand.parent"})},setExpandedValue(s){const r=H(s);d({type:"EXPANDED.SET",value:r})},setSelectedValue(s){const r=H(s);d({type:"SELECTED.SET",value:r})},getRootProps(){return n.element({...I.root.attrs,id:wt(t),dir:i("dir")})},getLabelProps(){return n.element({...I.label.attrs,id:Oe(t),dir:i("dir")})},getTreeProps(){return n.element({...I.tree.attrs,id:ye(t),dir:i("dir"),role:"tree","aria-label":"Tree View","aria-labelledby":Oe(t),"aria-multiselectable":i("selectionMode")==="multiple"||void 0,tabIndex:-1,onKeyDown(s){if(s.defaultPrevented||Yn(s))return;const r=Zn(s);if(Jn(r))return;const c=r==null?void 0:r.closest("[data-part=branch-control], [data-part=item]");if(!c)return;const p=c.dataset.value;if(p==null){console.warn("[zag-js/tree-view] Node id not found for node",c);return}const V=c.matches("[data-part=branch-control]"),y={ArrowDown(N){M(N)||(N.preventDefault(),d({type:"NODE.ARROW_DOWN",id:p,shiftKey:N.shiftKey}))},ArrowUp(N){M(N)||(N.preventDefault(),d({type:"NODE.ARROW_UP",id:p,shiftKey:N.shiftKey}))},ArrowLeft(N){M(N)||c.dataset.disabled||(N.preventDefault(),d({type:V?"BRANCH_NODE.ARROW_LEFT":"NODE.ARROW_LEFT",id:p}))},ArrowRight(N){!V||c.dataset.disabled||(N.preventDefault(),d({type:"BRANCH_NODE.ARROW_RIGHT",id:p}))},Home(N){M(N)||(N.preventDefault(),d({type:"NODE.HOME",id:p,shiftKey:N.shiftKey}))},End(N){M(N)||(N.preventDefault(),d({type:"NODE.END",id:p,shiftKey:N.shiftKey}))},Space(N){var R;c.dataset.disabled||(f?d({type:"TREE.TYPEAHEAD",key:N.key}):(R=y.Enter)==null||R.call(y,N))},Enter(N){c.dataset.disabled||$(r)&&M(N)||(d({type:V?"BRANCH_NODE.CLICK":"NODE.CLICK",id:p,src:"keyboard"}),$(r)||N.preventDefault())},"*"(N){c.dataset.disabled||(N.preventDefault(),d({type:"SIBLINGS.EXPAND",id:p}))},a(N){!N.metaKey||c.dataset.disabled||(N.preventDefault(),d({type:"SELECTED.ALL",moveFocus:!0}))}},U=Qn(s,{dir:i("dir")}),P=y[U];if(P){P(s);return}ve.isValidEvent(s)&&(d({type:"TREE.TYPEAHEAD",key:s.key,id:p}),s.preventDefault())}})},getNodeState:E,getItemProps(s){const r=E(s);return n.element({...I.item.attrs,id:r.id,dir:i("dir"),"data-ownedby":ye(t),"data-path":s.indexPath.join("/"),"data-value":r.value,tabIndex:r.focused?0:-1,"data-focus":C(r.focused),role:"treeitem","aria-current":r.selected?"true":void 0,"aria-selected":r.disabled?void 0:r.selected,"data-selected":C(r.selected),"aria-disabled":ce(r.disabled),"data-disabled":C(r.disabled),"aria-level":r.depth,"data-depth":r.depth,style:{"--depth":r.depth},onFocus(c){c.stopPropagation(),d({type:"NODE.FOCUS",id:r.value})},onClick(c){if(r.disabled||!fe(c)||$(c.currentTarget)&&M(c))return;const p=c.metaKey||c.ctrlKey;d({type:"NODE.CLICK",id:r.value,shiftKey:c.shiftKey,ctrlKey:p}),c.stopPropagation(),$(c.currentTarget)||c.preventDefault()}})},getItemTextProps(s){const r=E(s);return n.element({...I.itemText.attrs,"data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused)})},getItemIndicatorProps(s){const r=E(s);return n.element({...I.itemIndicator.attrs,"aria-hidden":!0,"data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused),hidden:!r.selected})},getBranchProps(s){const r=E(s);return n.element({...I.branch.attrs,"data-depth":r.depth,dir:i("dir"),"data-branch":r.value,role:"treeitem","data-ownedby":ye(t),"data-value":r.value,"aria-level":r.depth,"aria-selected":r.disabled?void 0:r.selected,"data-path":s.indexPath.join("/"),"data-selected":C(r.selected),"aria-expanded":r.expanded,"data-state":r.expanded?"open":"closed","aria-disabled":ce(r.disabled),"data-disabled":C(r.disabled),"data-loading":C(r.loading),"aria-busy":ce(r.loading),style:{"--depth":r.depth}})},getBranchIndicatorProps(s){const r=E(s);return n.element({...I.branchIndicator.attrs,"aria-hidden":!0,"data-state":r.expanded?"open":"closed","data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused),"data-loading":C(r.loading)})},getBranchTriggerProps(s){const r=E(s);return n.element({...I.branchTrigger.attrs,role:"button",dir:i("dir"),"data-disabled":C(r.disabled),"data-state":r.expanded?"open":"closed","data-value":r.value,"data-loading":C(r.loading),disabled:r.loading,onClick(c){r.disabled||r.loading||(d({type:"BRANCH_TOGGLE.CLICK",id:r.value}),c.stopPropagation())}})},getBranchControlProps(s){const r=E(s);return n.element({...I.branchControl.attrs,role:"button",id:r.id,dir:i("dir"),tabIndex:r.focused?0:-1,"data-path":s.indexPath.join("/"),"data-state":r.expanded?"open":"closed","data-disabled":C(r.disabled),"data-selected":C(r.selected),"data-focus":C(r.focused),"data-value":r.value,"data-depth":r.depth,"data-loading":C(r.loading),"aria-busy":ce(r.loading),onFocus(c){d({type:"NODE.FOCUS",id:r.value}),c.stopPropagation()},onClick(c){if(r.disabled||r.loading||!fe(c)||$(c.currentTarget)&&M(c))return;const p=c.metaKey||c.ctrlKey;d({type:"BRANCH_NODE.CLICK",id:r.value,shiftKey:c.shiftKey,ctrlKey:p}),c.stopPropagation()}})},getBranchTextProps(s){const r=E(s);return n.element({...I.branchText.attrs,dir:i("dir"),"data-disabled":C(r.disabled),"data-state":r.expanded?"open":"closed","data-loading":C(r.loading)})},getBranchContentProps(s){const r=E(s);return n.element({...I.branchContent.attrs,role:"group",dir:i("dir"),"data-state":r.expanded?"open":"closed","data-depth":r.depth,"data-path":s.indexPath.join("/"),"data-value":r.value,hidden:!r.expanded})},getBranchIndentGuideProps(s){const r=E(s);return n.element({...I.branchIndentGuide.attrs,"data-depth":r.depth})},getNodeCheckboxProps(s){const r=E(s),c=r.checked;return n.element({...I.nodeCheckbox.attrs,tabIndex:-1,role:"checkbox","data-state":c===!0?"checked":c===!1?"unchecked":"indeterminate","aria-checked":c===!0?"true":c===!1?"false":"mixed","data-disabled":C(r.disabled),onClick(p){if(p.defaultPrevented||r.disabled||!fe(p))return;d({type:"CHECKED.TOGGLE",value:r.value,isBranch:r.isBranch}),p.stopPropagation();const V=p.currentTarget.closest("[role=treeitem]");V==null||V.focus({preventScroll:!0})}})}}}function me(e,n){const{context:a,prop:t,refs:o}=e;if(!t("loadChildren")){a.set("expandedValue",s=>H(G(s,...n)));return}const i=a.get("loadingStatus"),[d,m]=De(n,s=>i[s]==="loaded");if(d.length>0&&a.set("expandedValue",s=>H(G(s,...d))),m.length===0)return;const h=t("collection"),[x,g]=De(m,s=>{const r=h.findNode(s);return h.getNodeChildren(r).length>0});if(x.length>0&&a.set("expandedValue",s=>H(G(s,...x))),g.length===0)return;a.set("loadingStatus",s=>({...s,...g.reduce((r,c)=>({...r,[c]:"loading"}),{})}));const f=g.map(s=>{const r=h.getIndexPath(s),c=h.getValuePath(r),p=h.findNode(s);return{id:s,indexPath:r,valuePath:c,node:p}}),w=o.get("pendingAborts"),k=t("loadChildren");tt(k,()=>"[zag-js/tree-view] `loadChildren` is required for async expansion");const E=f.map(({id:s,indexPath:r,valuePath:c,node:p})=>{const V=w.get(s);V&&(V.abort(),w.delete(s));const y=new AbortController;return w.set(s,y),k({valuePath:c,indexPath:r,node:p,signal:y.signal})});Promise.allSettled(E).then(s=>{var y,U;const r=[],c=[],p=a.get("loadingStatus");let V=t("collection");s.forEach((P,N)=>{const{id:R,indexPath:W,node:Re,valuePath:Gn}=f[N];P.status==="fulfilled"?(p[R]="loaded",r.push(R),V=V.replace(W,{...Re,children:P.value})):(w.delete(R),Reflect.deleteProperty(p,R),c.push({node:Re,error:P.reason,indexPath:W,valuePath:Gn}))}),a.set("loadingStatus",p),r.length&&(a.set("expandedValue",P=>H(G(P,...r))),(y=t("onLoadChildrenComplete"))==null||y({collection:V})),c.length&&((U=t("onLoadChildrenError"))==null||U({nodes:c}))})}function K(e){const{prop:n,context:a}=e;return function({indexPath:o}){return n("collection").getValuePath(o).slice(0,-1).some(d=>!a.get("expandedValue").includes(d))}}var{and:_}=et(),vt=zn({props({props:e}){return{selectionMode:"single",collection:_n.empty(),typeahead:!0,expandOnClick:!0,defaultExpandedValue:[],defaultSelectedValue:[],...e}},initialState(){return"idle"},context({prop:e,bindable:n,getContext:a}){return{expandedValue:n(()=>({defaultValue:e("defaultExpandedValue"),value:e("expandedValue"),isEqual:we,onChange(t){var d;const i=a().get("focusedValue");(d=e("onExpandedChange"))==null||d({expandedValue:t,focusedValue:i,get expandedNodes(){return e("collection").findNodes(t)}})}})),selectedValue:n(()=>({defaultValue:e("defaultSelectedValue"),value:e("selectedValue"),isEqual:we,onChange(t){var d;const i=a().get("focusedValue");(d=e("onSelectionChange"))==null||d({selectedValue:t,focusedValue:i,get selectedNodes(){return e("collection").findNodes(t)}})}})),focusedValue:n(()=>({defaultValue:e("defaultFocusedValue")||null,value:e("focusedValue"),onChange(t){var o;(o=e("onFocusChange"))==null||o({focusedValue:t,get focusedNode(){return t?e("collection").findNode(t):null}})}})),loadingStatus:n(()=>({defaultValue:{}})),checkedValue:n(()=>({defaultValue:e("defaultCheckedValue")||[],value:e("checkedValue"),isEqual:we,onChange(t){var o;(o=e("onCheckedChange"))==null||o({checkedValue:t})}}))}},refs(){return{typeaheadState:{...ve.defaultOptions},pendingAborts:new Map}},computed:{isMultipleSelection:({prop:e})=>e("selectionMode")==="multiple",isTypingAhead:({refs:e})=>e.get("typeaheadState").keysSoFar.length>0,visibleNodes:({prop:e,context:n})=>{const a=[];return e("collection").visit({skip:K({prop:e,context:n}),onEnter:(t,o)=>{a.push({node:t,indexPath:o})}}),a}},on:{"EXPANDED.SET":{actions:["setExpanded"]},"EXPANDED.CLEAR":{actions:["clearExpanded"]},"EXPANDED.ALL":{actions:["expandAllBranches"]},"BRANCH.EXPAND":{actions:["expandBranches"]},"BRANCH.COLLAPSE":{actions:["collapseBranches"]},"SELECTED.SET":{actions:["setSelected"]},"SELECTED.ALL":[{guard:_("isMultipleSelection","moveFocus"),actions:["selectAllNodes","focusTreeLastNode"]},{guard:"isMultipleSelection",actions:["selectAllNodes"]}],"SELECTED.CLEAR":{actions:["clearSelected"]},"NODE.SELECT":{actions:["selectNode"]},"NODE.DESELECT":{actions:["deselectNode"]},"CHECKED.TOGGLE":{actions:["toggleChecked"]},"CHECKED.SET":{actions:["setChecked"]},"CHECKED.CLEAR":{actions:["clearChecked"]}},exit:["clearPendingAborts"],states:{idle:{on:{"NODE.FOCUS":{actions:["setFocusedNode"]},"NODE.ARROW_DOWN":[{guard:_("isShiftKey","isMultipleSelection"),actions:["focusTreeNextNode","extendSelectionToNextNode"]},{actions:["focusTreeNextNode"]}],"NODE.ARROW_UP":[{guard:_("isShiftKey","isMultipleSelection"),actions:["focusTreePrevNode","extendSelectionToPrevNode"]},{actions:["focusTreePrevNode"]}],"NODE.ARROW_LEFT":{actions:["focusBranchNode"]},"BRANCH_NODE.ARROW_LEFT":[{guard:"isBranchExpanded",actions:["collapseBranch"]},{actions:["focusBranchNode"]}],"BRANCH_NODE.ARROW_RIGHT":[{guard:_("isBranchFocused","isBranchExpanded"),actions:["focusBranchFirstNode"]},{actions:["expandBranch"]}],"SIBLINGS.EXPAND":{actions:["expandSiblingBranches"]},"NODE.HOME":[{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToFirstNode","focusTreeFirstNode"]},{actions:["focusTreeFirstNode"]}],"NODE.END":[{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToLastNode","focusTreeLastNode"]},{actions:["focusTreeLastNode"]}],"NODE.CLICK":[{guard:_("isCtrlKey","isMultipleSelection"),actions:["toggleNodeSelection"]},{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToNode"]},{actions:["selectNode"]}],"BRANCH_NODE.CLICK":[{guard:_("isCtrlKey","isMultipleSelection"),actions:["toggleNodeSelection"]},{guard:_("isShiftKey","isMultipleSelection"),actions:["extendSelectionToNode"]},{guard:"expandOnClick",actions:["selectNode","toggleBranchNode"]},{actions:["selectNode"]}],"BRANCH_TOGGLE.CLICK":{actions:["toggleBranchNode"]},"TREE.TYPEAHEAD":{actions:["focusMatchedNode"]}}}},implementations:{guards:{isBranchFocused:({context:e,event:n})=>e.get("focusedValue")===n.id,isBranchExpanded:({context:e,event:n})=>e.get("expandedValue").includes(n.id),isShiftKey:({event:e})=>e.shiftKey,isCtrlKey:({event:e})=>e.ctrlKey,hasSelectedItems:({context:e})=>e.get("selectedValue").length>0,isMultipleSelection:({prop:e})=>e("selectionMode")==="multiple",moveFocus:({event:e})=>!!e.moveFocus,expandOnClick:({prop:e})=>!!e("expandOnClick")},actions:{selectNode({context:e,event:n}){const a=n.id||n.value;e.set("selectedValue",t=>a==null?t:!n.isTrusted&&le(a)?t.concat(...a):[le(a)?nt(a):a].filter(Boolean))},deselectNode({context:e,event:n}){const a=Ve(n.id||n.value);e.set("selectedValue",t=>pe(t,...a))},setFocusedNode({context:e,event:n}){e.set("focusedValue",n.id)},clearFocusedNode({context:e}){e.set("focusedValue",null)},clearSelectedItem({context:e}){e.set("selectedValue",[])},toggleBranchNode({context:e,event:n,action:a}){const t=e.get("expandedValue").includes(n.id);a(t?["collapseBranch"]:["expandBranch"])},expandBranch(e){const{event:n}=e;me(e,[n.id])},expandBranches(e){const{context:n,event:a}=e,t=Ve(a.value);me(e,Te(t,n.get("expandedValue")))},collapseBranch({context:e,event:n}){e.set("expandedValue",a=>pe(a,n.id))},collapseBranches(e){const{context:n,event:a}=e,t=Ve(a.value);n.set("expandedValue",o=>pe(o,...t))},setExpanded({context:e,event:n}){le(n.value)&&e.set("expandedValue",n.value)},clearExpanded({context:e}){e.set("expandedValue",[])},setSelected({context:e,event:n}){le(n.value)&&e.set("selectedValue",n.value)},clearSelected({context:e}){e.set("selectedValue",[])},focusTreeFirstNode({prop:e,scope:n}){const a=e("collection"),t=a.getFirstNode(),o=a.getNodeValue(t);q(n,o)},focusTreeLastNode(e){const{prop:n,scope:a}=e,t=n("collection"),o=t.getLastNode(void 0,{skip:K(e)}),i=t.getNodeValue(o);q(a,i)},focusBranchFirstNode({event:e,prop:n,scope:a}){const t=n("collection"),o=t.findNode(e.id),i=t.getFirstNode(o),d=t.getNodeValue(i);q(a,d)},focusTreeNextNode(e){const{event:n,prop:a,scope:t}=e,o=a("collection"),i=o.getNextNode(n.id,{skip:K(e)});if(!i)return;const d=o.getNodeValue(i);q(t,d)},focusTreePrevNode(e){const{event:n,prop:a,scope:t}=e,o=a("collection"),i=o.getPreviousNode(n.id,{skip:K(e)});if(!i)return;const d=o.getNodeValue(i);q(t,d)},focusBranchNode({event:e,prop:n,scope:a}){const t=n("collection"),o=t.getParentNode(e.id),i=o?t.getNodeValue(o):void 0;q(a,i)},selectAllNodes({context:e,prop:n}){e.set("selectedValue",n("collection").getValues())},focusMatchedNode(e){const{context:n,prop:a,refs:t,event:o,scope:i,computed:d}=e,h=d("visibleNodes").map(({node:g})=>({textContent:a("collection").stringifyNode(g),id:a("collection").getNodeValue(g)})),x=ve(h,{state:t.get("typeaheadState"),activeId:n.get("focusedValue"),key:o.key});q(i,x==null?void 0:x.id)},toggleNodeSelection({context:e,event:n}){const a=_e(e.get("selectedValue"),n.id);e.set("selectedValue",a)},expandAllBranches(e){const{context:n,prop:a}=e,t=a("collection").getBranchValues(),o=Te(t,n.get("expandedValue"));me(e,o)},expandSiblingBranches(e){const{context:n,event:a,prop:t}=e,o=t("collection"),i=o.getIndexPath(a.id);if(!i)return;const m=o.getSiblingNodes(i).map(x=>o.getNodeValue(x)),h=Te(m,n.get("expandedValue"));me(e,h)},extendSelectionToNode(e){const{context:n,event:a,prop:t,computed:o}=e,i=t("collection"),d=Ne(n.get("selectedValue"))||i.getNodeValue(i.getFirstNode()),m=a.id;let h=[d,m],x=0;o("visibleNodes").forEach(({node:f})=>{const w=i.getNodeValue(f);x===1&&h.push(w),(w===d||w===m)&&x++}),n.set("selectedValue",H(h))},extendSelectionToNextNode(e){const{context:n,event:a,prop:t}=e,o=t("collection"),i=o.getNextNode(a.id,{skip:K(e)});if(!i)return;const d=new Set(n.get("selectedValue")),m=o.getNodeValue(i);m!=null&&(d.has(a.id)&&d.has(m)?d.delete(a.id):d.has(m)||d.add(m),n.set("selectedValue",Array.from(d)))},extendSelectionToPrevNode(e){const{context:n,event:a,prop:t}=e,o=t("collection"),i=o.getPreviousNode(a.id,{skip:K(e)});if(!i)return;const d=new Set(n.get("selectedValue")),m=o.getNodeValue(i);m!=null&&(d.has(a.id)&&d.has(m)?d.delete(a.id):d.has(m)||d.add(m),n.set("selectedValue",Array.from(d)))},extendSelectionToFirstNode(e){const{context:n,prop:a}=e,t=a("collection"),o=Ne(n.get("selectedValue")),i=[];t.visit({skip:K(e),onEnter:d=>{const m=t.getNodeValue(d);if(i.push(m),m===o)return"stop"}}),n.set("selectedValue",i)},extendSelectionToLastNode(e){const{context:n,prop:a}=e,t=a("collection"),o=Ne(n.get("selectedValue")),i=[];let d=!1;t.visit({skip:K(e),onEnter:m=>{const h=t.getNodeValue(m);h===o&&(d=!0),d&&i.push(h)}}),n.set("selectedValue",i)},clearPendingAborts({refs:e}){const n=e.get("pendingAborts");n.forEach(a=>a.abort()),n.clear()},toggleChecked({context:e,event:n,prop:a}){const t=a("collection");e.set("checkedValue",o=>n.isBranch?Ct(t,n.value,o):_e(o,n.value))},setChecked({context:e,event:n}){e.set("checkedValue",n.value)},clearChecked({context:e}){e.set("checkedValue",[])}}}});bn()(["ids","collection","dir","expandedValue","expandOnClick","defaultFocusedValue","focusedValue","getRootNode","id","onExpandedChange","onFocusChange","onSelectionChange","checkedValue","selectedValue","selectionMode","typeahead","defaultExpandedValue","defaultSelectedValue","defaultCheckedValue","onCheckedChange","onLoadChildrenComplete","onLoadChildrenError","loadChildren"]);bn()(["node","indexPath"]);const bt=e=>{const n=T.useId(),{dir:a}=at(),{getRootNode:t}=rt(),o={id:n,dir:a,getRootNode:t,...e},i=ot(vt,o);return yt(i,dt)},kt=(e,n)=>{const[a,t]=it(e),[o,i]=Ae()(t,["checkedValue","collection","defaultCheckedValue","defaultExpandedValue","defaultFocusedValue","defaultSelectedValue","expandedValue","expandOnClick","focusedValue","id","ids","loadChildren","onCheckedChange","onExpandedChange","onFocusChange","onLoadChildrenComplete","onLoadChildrenError","onSelectionChange","selectedValue","selectionMode","typeahead"]),d=bt(o),m=B(d.getRootProps(),i);return u.jsx(gt,{value:d,children:u.jsx(ct,{value:a,children:u.jsx(O.div,{...m,ref:n})})})},St=T.forwardRef(kt),On=T.forwardRef((e,n)=>{const a=A(),t=B(a.getTreeProps(),e);return u.jsx(O.div,{...t,ref:n})});On.displayName="TreeViewTree";const Pe=T.forwardRef((e,n)=>{const a=A(),t=F(),o=B(a.getNodeCheckboxProps(t),e);return u.jsx(O.span,{...o,ref:n})});Pe.displayName="TreeViewNodeCheckbox";const Ln=e=>{const{children:n,indeterminate:a,fallback:t}=e,i=kn().checked;return i==="indeterminate"&&a?u.jsx(u.Fragment,{children:a}):i===!0&&n?u.jsx(u.Fragment,{children:n}):u.jsx(u.Fragment,{children:t})};Ln.displayName="TreeViewNodeCheckboxIndicator";const Fn=T.createContext(void 0);function Mn({children:e,disabled:n,getIndexPathForId:a,multiple:t}){return u.jsx(Fn.Provider,{value:{disabled:n,getIndexPathForId:a,multiple:t},children:e})}function It(){const e=T.useContext(Fn);if(!e)throw new Error("useTreeView must be used within a TreeViewProvider");return e}Mn.__docgenInfo={description:"",methods:[],displayName:"TreeViewProvider",props:{getIndexPathForId:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => number[] | undefined",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"union",raw:"number[] | undefined",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"undefined"}]}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function At(e){return ht({isNodeDisabled:n=>n.disabled??!1,nodeToString:n=>n.name,nodeToValue:n=>n.id,rootNode:{children:e,id:"ROOT",name:"ROOT"}})}function Pt(e,n){return Array.isArray(e)?n?e:e[0]??"":n?[e]:e}function Kn(e,n=!1,a,t){var o;!n||a||e.key===" "&&(e.preventDefault(),e.stopPropagation(),(o=t.current)==null||o.click())}const Bt={"tree-view":"_tree-view_nyox9_2"},b=T.forwardRef(({children:e,className:n,defaultExpandedValue:a,defaultValue:t,disabled:o,expandedValue:i,items:d,multiple:m,onExpandedChange:h,onValueChange:x,value:g,...f},w)=>{const k=T.useMemo(()=>At(d),[d]),E=T.useMemo(()=>{const p=new Map;function V(y,U=[]){y!=null&&y.length&&y.forEach((P,N)=>{var W;const R=[...U,N];p.set(P.id,R),(W=P.children)!=null&&W.length&&V(P.children,R)})}return V(d,[]),p},[d]);function s(p){if(!x)return;const V=Pt(p.selectedValue,m),y=Array.isArray(V)?V:[V];x({value:y})}function r(p){x&&x({value:p.checkedValue})}function c(p){h&&h(p)}return u.jsx(Mn,{disabled:o,multiple:m,getIndexPathForId:p=>E.get(p),children:u.jsx(St,{className:se(Bt["tree-view"],n),collection:k,"data-ods":"tree-view",defaultExpandedValue:a,expandedValue:i,onExpandedChange:c,ref:w,selectionMode:m?"multiple":"single",...m?{checkedValue:g,defaultCheckedValue:t,onCheckedChange:r}:{defaultSelectedValue:t,onSelectionChange:s,selectedValue:g},...f,children:u.jsx(On,{children:e})})})});b.displayName="TreeView";b.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{defaultExpandedValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial expanded value(s). Use when you don't need to control the expanded value(s) of the tree view."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the tree view."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},expandedValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled expanded value(s)."},items:{required:!0,tsType:{name:"Array",elements:[{name:"TreeViewItem"}],raw:"Array<TreeViewItem>"},description:"The list of items"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(details: TreeViewExpandedChangeDetail) => void",signature:{arguments:[{type:{name:"TreeViewExpandedChangeDetail"},name:"details"}],return:{name:"void"}}},description:"Callback fired when the expanded value(s) changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(details: TreeViewValueChangeDetail) => void",signature:{arguments:[{type:{name:"TreeViewValueChangeDetail"},name:"details"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}},composes:["Omit"]};const Be=({isDisabled:e})=>u.jsx(Ln,{fallback:u.jsx(Ce,{checked:!1,disabled:e,children:u.jsx(Ee,{})}),indeterminate:u.jsx(Ce,{checked:"indeterminate",disabled:e,children:u.jsx(Ee,{})}),children:u.jsx(Ce,{checked:!0,disabled:e,children:u.jsx(Ee,{})})});Be.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeCheckboxIndicator",props:{isDisabled:{required:!0,tsType:{name:"boolean"},description:""}}};const ie=({children:e,item:n})=>{var o,i,d;const{expandedValue:a}=A(),t=(a==null?void 0:a.includes(n.id))??!1;if(typeof e=="function"){const h=e({customData:n.customRendererData,isBranch:!!((o=n.children)!=null&&o.length),isExpanded:t,item:n});return(i=n.children)!=null&&i.length?u.jsx(be,{asChild:!0,children:h}):u.jsx(ke,{asChild:!0,children:h})}return(d=n.children)!=null&&d.length?u.jsx(be,{children:n.name}):u.jsx(ke,{children:n.name})};ie.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeLabel",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},item:{required:!0,tsType:{name:"TreeViewItem"},description:""}}};const ue={"tree-view-node-branch__control":"_tree-view-node-branch__control_1yd47_2","tree-view-node-branch__control__checkbox":"_tree-view-node-branch__control__checkbox_1yd47_16","tree-view-node-branch__control__chevron":"_tree-view-node-branch__control__chevron_1yd47_42","tree-view-node-branch__control__children":"_tree-view-node-branch__control__children_1yd47_54"},qn=T.forwardRef(({className:e,effectiveIndexPath:n,getIndexPathForId:a,isDisabled:t,item:o,multiple:i,labelChildren:d,renderChildNode:m,...h},x)=>{var s,r;const{checkedValue:g}=A(),f=T.useRef(null),w=(s=f.current)==null?void 0:s.getAttribute("data-state");let k;i?w==="indeterminate"?k="mixed":w==="checked"?k="true":k=g!=null&&g.includes(o.id)?"true":"false":k=void 0;function E(c){Kn(c,i,t,f)}return u.jsxs(Sn,{"aria-disabled":t,className:e,"data-disabled":t?!0:void 0,"data-ods":"tree-view-node-branch",onKeyDown:E,ref:x,...h,children:[u.jsxs(An,{"aria-checked":k,"aria-disabled":t,className:ue["tree-view-node-branch__control"],"data-disabled":t?!0:void 0,role:i?"checkbox":"group",tabIndex:t?-1:void 0,children:[u.jsx(Bn,{className:ue["tree-view-node-branch__control__chevron"],children:u.jsx(D,{name:j.chevronRight})}),i?u.jsxs(Pe,{"aria-disabled":t,className:ue["tree-view-node-branch__control__checkbox"],"data-disabled":t?!0:void 0,tabIndex:-1,ref:f,children:[u.jsx(Be,{isDisabled:t}),u.jsx(ie,{item:o,children:d})]}):u.jsx(u.Fragment,{children:u.jsx(ie,{item:o,children:d})})]}),u.jsxs(In,{className:ue["tree-view-node-branch__control__children"],children:[u.jsx(Pn,{}),(r=o.children)==null?void 0:r.map((c,p)=>{if(!(c!=null&&c.id)||!(c!=null&&c.name))return null;const V=a(c.id)??[...n,p];return m(c,V)})]})]})});qn.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeBranch",props:{effectiveIndexPath:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},getIndexPathForId:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => number[] | undefined",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"union",raw:"number[] | undefined",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"undefined"}]}}},description:""},isDisabled:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"TreeViewItem"},description:""},labelChildren:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},renderChildNode:{required:!0,tsType:{name:"signature",type:"function",raw:"(child: TreeViewItem, childIndexPath: number[]) => JSX.Element",signature:{arguments:[{type:{name:"TreeViewItem"},name:"child"},{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"childIndexPath"}],return:{name:"JSX.Element"}}},description:""}},composes:["ComponentPropsWithRef"]};const Le={"tree-view-node-item":"_tree-view-node-item_5wrqb_2","tree-view-node-item__checkbox":"_tree-view-node-item__checkbox_5wrqb_13"},Hn=T.forwardRef(({className:e,isDisabled:n,item:a,labelChildren:t,multiple:o,...i},d)=>{const{checkedValue:m}=A(),h=T.useRef(null),x=(m==null?void 0:m.includes(a.id))??!1;let g;o?g=x?"true":"false":g=void 0;function f(w){Kn(w,o,n,h)}return u.jsx(Rn,{"aria-checked":g,"aria-disabled":n,className:se(Le["tree-view-node-item"],e),"data-disabled":n?!0:void 0,"data-ods":"tree-view-node-item",onKeyDown:f,ref:d,tabIndex:n?-1:void 0,...i,children:o?u.jsxs(Pe,{"aria-disabled":n,className:Le["tree-view-node-item__checkbox"],"data-disabled":n?!0:void 0,ref:h,tabIndex:-1,children:[u.jsx(Be,{isDisabled:n}),u.jsx(ie,{item:a,children:t})]}):u.jsx(ie,{item:a,children:t})})});Hn.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodeItem",props:{isDisabled:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"TreeViewItem"},description:""},labelChildren:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ComponentPropsWithRef"]};const Fe={"tree-view-node":"_tree-view-node_3frp4_2"},v=T.forwardRef(({children:e,className:n,indexPath:a,item:t,...o},i)=>{var E;const{multiple:d,disabled:m,getIndexPathForId:h}=It(),g=h(t.id)??a??[],f=!!((E=t.children)!=null&&E.length),w=!!(m||t.disabled),k={...t,disabled:w};return u.jsx(Tt,{indexPath:g,node:k,children:f?u.jsx(qn,{className:se(Fe["tree-view-node"],n),effectiveIndexPath:g,getIndexPathForId:h,isDisabled:w,item:t,labelChildren:e,multiple:d,renderChildNode:(s,r)=>u.jsx(v,{indexPath:r,item:s,children:e},s.id),...o,ref:i}):u.jsx(Hn,{className:se(Fe["tree-view-node"],n),isDisabled:w,item:t,labelChildren:e,multiple:d,...o,ref:i})})});v.displayName="TreeViewNode";v.__docgenInfo={description:"",methods:[],displayName:"TreeViewNode",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Label content or custom render function."},indexPath:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"@internal *"},item:{required:!0,tsType:{name:"TreeViewItem"},description:"The tree node to render."}},composes:["Omit"]};const Rt={"tree-view-nodes":"_tree-view-nodes_wfmwi_2"},S=T.forwardRef(({children:e,className:n,...a},t)=>u.jsx("div",{className:se(Rt["tree-view-nodes"],n),"data-ods":"tree-view-nodes",ref:t,...a,children:e}));S.displayName="TreeViewNodes";S.__docgenInfo={description:"",methods:[],displayName:"TreeViewNodes",composes:["ComponentPropsWithRef"]};const _t={argTypes:ut(["defaultExpandedValue","defaultValue","items","onExpandedChange","onValueChange","expandedValue","value"]),component:b,subcomponents:{TreeViewNode:v},tags:["new"],title:"React Components/Tree View"},X={render:e=>{const n=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(b,{defaultExpandedValue:e.defaultExpandedValue,disabled:e.disabled,expandedValue:e.expandedValue,items:n,multiple:e.multiple},l.createElement(S,null,n.map(a=>l.createElement(v,{key:a.id,item:a}))))},argTypes:pt({disabled:{table:{category:je.general},control:"boolean"},multiple:{table:{category:je.general},control:"boolean"}})},Y={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(b,{items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n}))))}},Z={tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(b,{items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n}))))}},J={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(b,{items:e,multiple:!0},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n}))))}},Q={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(b,{defaultExpandedValue:["src","components"],items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n}))))}},z={globals:{imports:`import { TreeView, TreeViewNode, TreeViewNodes, type TreeViewValueChangeDetail } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}],[n,a]=T.useState("package.json");return l.createElement(l.Fragment,null,l.createElement(b,{items:e,onValueChange:t=>a(t.value[0]),value:n?[n]:void 0},l.createElement(S,null,e.map(t=>l.createElement(v,{key:t.id,item:t})))),l.createElement("div",{style:{marginTop:8}},"Selected: ",n??"None"))}},ee={globals:{imports:`import { TreeView, TreeViewNode, TreeViewNodes, type TreeViewValueChangeDetail } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}],[n,a]=T.useState(["package.json","index.ts"]);return l.createElement(l.Fragment,null,l.createElement(b,{items:e,multiple:!0,onValueChange:t=>a(Array.isArray(t.value)?t.value:[t.value].filter(Boolean)),value:n},l.createElement(S,null,e.map(t=>l.createElement(v,{key:t.id,item:t})))),l.createElement("div",{style:{marginTop:8}},"Selected: ",n.length?n.join(", "):"None"))}},ne={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(b,{disabled:!0,items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n}))))}},te={globals:{imports:"import { TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts",disabled:!0},{id:"components",name:"components",disabled:!0,children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx",disabled:!0}]}]},{id:"package.json",name:"package.json",disabled:!0},{id:"readme.md",name:"README.md"}];return l.createElement(b,{items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n}))))}},ae={globals:{imports:"import { Icon, ICON_NAME, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(b,{items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n},({item:a,isBranch:t,isExpanded:o})=>l.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},t?o?l.createElement(D,{name:j.folderMinus}):l.createElement(D,{name:j.folderPlus}):l.createElement(D,{name:j.file}),l.createElement("span",null,a.name))))))}},re={globals:{imports:"import { FormField, FormFieldLabel, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"Card.tsx",name:"Card.tsx"}]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}];return l.createElement(Wn,null,l.createElement($n,null,"Choose a file"),l.createElement(b,{items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n})))))}},oe={globals:{imports:`import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Icon, ICON_NAME, TreeView, TreeViewNode, TreeViewNodes } from '@ovhcloud/ods-react';
import { useRef, useState } from 'react';`},parameters:{docs:{source:{...L()}}},tags:["!dev"],render:({})=>{const[e,n]=T.useState([{id:"src",name:"src",children:[{id:"app.tsx",name:"app.tsx"},{id:"index.ts",name:"index.ts"},{id:"components",name:"components",children:[]}]},{id:"package.json",name:"package.json"},{id:"readme.md",name:"README.md"}]),a=T.useRef(1);function t(h,x,g){return h.map(f=>{var w;if(f.id===x){const k=Array.isArray(f.children)?[...f.children,g]:[g];return{...f,children:k}}return(w=f.children)!=null&&w.length?{...f,children:t(f.children,x,g)}:f})}function o(h,x){return h.filter(g=>g.id!==x).map(g=>{var f;return(f=g.children)!=null&&f.length?{...g,children:o(g.children,x)}:g})}function i(h){const x=`new-file-${a.current++}.txt`,g={id:x,name:x};n(f=>t(f,h,g))}function d(h){n(x=>o(x,h))}function m(){const h=`new-file-${a.current++}.txt`,x={id:h,name:h};n(g=>[...g,x])}return l.createElement("div",null,l.createElement("div",{style:{marginBottom:16}},l.createElement(he,{"aria-label":"Add file at root level",onClick:m,size:xe.xs,variant:ge.outline},l.createElement(D,{name:j.plus}),"Add file at root level")),l.createElement(b,{items:e,multiple:!0},l.createElement(S,null,e.map(h=>l.createElement(v,{key:h.id,item:h},({item:x,isBranch:g})=>l.createElement("div",{style:{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"}},l.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:6}},g?l.createElement(D,{name:j.folder}):l.createElement(D,{name:j.file}),l.createElement("span",null,x.name)),l.createElement("div",{style:{display:"inline-flex",marginLeft:"auto",alignItems:"center",gap:8}},g?l.createElement(he,{"aria-label":"Add child",onClick:f=>{f.stopPropagation(),i(x.id)},size:xe.xs,onKeyDown:f=>{f.stopPropagation()},variant:ge.outline},l.createElement(D,{name:j.plus})):null,l.createElement(he,{"aria-label":"Delete",color:Un.critical,onClick:f=>{f.stopPropagation(),d(x.id)},onMouseDown:f=>{f.stopPropagation()},onKeyDown:f=>{f.stopPropagation()},size:xe.xs,variant:ge.outline},l.createElement(D,{name:j.trash})))))))))}},de={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>{const e=[{id:"src",name:"src",children:[{id:"components",name:"components",children:[{id:"Button.tsx",name:"Button.tsx"},{id:"button.scss",name:"button.scss"}]}]},{id:"package.json",name:"package.json"}];return l.createElement("div",{style:{display:"flex",gap:"24px"}},l.createElement(b,{items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n})))),l.createElement(b,{disabled:!0,items:e},l.createElement(S,null,e.map(n=>l.createElement(v,{key:n.id,item:n})))))}};var Me,Ke,qe;X.parameters={...X.parameters,docs:{...(Me=X.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(qe=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var He,Ge,Ue;Y.parameters={...Y.parameters,docs:{...(He=Y.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var We,$e,Xe;Z.parameters={...Z.parameters,docs:{...(We=Z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Xe=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:Xe.source}}};var Ye,Ze,Je;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Ze=J.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Qe,ze,en;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(en=(ze=Q.parameters)==null?void 0:ze.docs)==null?void 0:en.source}}};var nn,tn,an;z.parameters={...z.parameters,docs:{...(nn=z.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(an=(tn=z.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var rn,on,dn;ee.parameters={...ee.parameters,docs:{...(rn=ee.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(dn=(on=ee.parameters)==null?void 0:on.docs)==null?void 0:dn.source}}};var sn,cn,ln;ne.parameters={...ne.parameters,docs:{...(sn=ne.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(cn=ne.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var mn,un,pn;te.parameters={...te.parameters,docs:{...(mn=te.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(pn=(un=te.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};var hn,gn,xn;ae.parameters={...ae.parameters,docs:{...(hn=ae.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(xn=(gn=ae.parameters)==null?void 0:gn.docs)==null?void 0:xn.source}}};var fn,Nn,Tn;re.parameters={...re.parameters,docs:{...(fn=re.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(Tn=(Nn=re.parameters)==null?void 0:Nn.docs)==null?void 0:Tn.source}}};var Vn,wn,Cn;oe.parameters={...oe.parameters,docs:{...(Vn=oe.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(Cn=(wn=oe.parameters)==null?void 0:wn.docs)==null?void 0:Cn.source}}};var En,yn,vn;de.parameters={...de.parameters,docs:{...(En=de.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(vn=(yn=de.parameters)==null?void 0:yn.docs)==null?void 0:vn.source}}};const Dt=["Demo","Default","Overview","Multiple","DefaultExpandedValue","Controlled","ControlledMultiple","Disabled","DisabledItems","CustomRender","InFormField","DynamicChildren","ThemeGenerator"],Zt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:z,ControlledMultiple:ee,CustomRender:ae,Default:Y,DefaultExpandedValue:Q,Demo:X,Disabled:ne,DisabledItems:te,DynamicChildren:oe,InFormField:re,Multiple:J,Overview:Z,ThemeGenerator:de,__namedExportsOrder:Dt,default:_t},Symbol.toStringTag,{value:"Module"}));export{ae as C,Y as D,re as I,J as M,Z as O,Zt as T,ne as a,Q as b,z as c,ee as d,te as e,oe as f};
