import{r as d,e as s}from"./index-jIWwRBLr.js";import{B as _}from"./Button-B-GJ-1TA.js";import{I as lt,a as ct}from"./icon-name-D0KNfDOz.js";import{j as g}from"./jsx-runtime-Cfl8ynUo.js";import{u as wt}from"./context-C_-r2uoG.js";import{c as F,M as N,N as G,a4 as kt,a as ve,P as xt,O as V,j as Oe,aZ as Se,aD as Ne,s as pe,d as he,a_ as At,Q as Re,a$ as Gt,as as Dt,b0 as dt,p as Ht,ao as ce,z as Wt,aq as Vt,b1 as _e,q as Ut,S as Bt,r as de,T as Ft,U as jt,aB as qt,f as $t,al as Yt,l as Xt,b2 as gt,aC as Kt,g as Qt,aG as Zt,aH as Jt,_ as zt,ab as en,b3 as tn,C as ae,$ as nn,u as rn,D as on,a0 as an}from"./use-locale-context-CGqEQCyU.js";import{a as sn,b as un,g as Le,s as ln,P as cn}from"./portal-DmTPQ5yQ.js";import{u as Pe,a as dn,P as gn}from"./use-presence-D0Br6WHR.js";import{t as mn}from"./index-uZK-7FQN.js";import{c as B}from"./index-CqY9YpN0.js";import{a as pn,O as hn}from"./overlay-CZHjGBMC.js";import{e as fn,o as Mn,C as Y}from"./controls-BtiQQn1l.js";import{s as On}from"./source-CPEZJ6oD.js";const[En,L]=F({name:"MenuContext",hookName:"useMenuContext",providerName:"<MenuProvider />",strict:!1}),mt=d.forwardRef((e,t)=>{const n=L(),r=N(n.getArrowProps(),e);return g.jsx(G.div,{...r,ref:t})});mt.displayName="MenuArrow";const[In,mr]=F({name:"MenuItemContext",hookName:"useMenuItemContext",providerName:"<MenuItemProvider />"}),[pt,pr]=F({name:"MenuItemPropsContext",hookName:"useMenuItemPropsContext",providerName:"<MenuItemPropsProvider />"}),ht=d.forwardRef((e,t)=>{const n=L(),r=Pe(),i=N(n.getContentProps(),r.getPresenceProps(),e);return r.unmounted?null:g.jsx(G.div,{...i,ref:kt(r.ref,t)})});ht.displayName="MenuContent";const ft=d.forwardRef((e,t)=>{const[n,r]=ve()(e,["closeOnSelect","disabled","value","valueText","onSelect"]),i=L(),u=N(i.getItemProps(n),r),a=i.getItemState(n);return d.useEffect(()=>i.addItemListener({id:a.id,onSelect:n.onSelect}),[a.id,n.onSelect]),g.jsx(pt,{value:n,children:g.jsx(In,{value:a,children:g.jsx(G.div,{...u,ref:t})})})});ft.displayName="MenuItem";const[Tn,vn]=F({name:"MenuItemGroupContext",hookName:"useMenuItemGroupContext",providerName:"<MenuItemGroupProvider />"}),Mt=d.forwardRef((e,t)=>{const[n,r]=ve()(e,["id"]),i=L(),a={id:d.useId(),...n},l=N(i.getItemGroupProps(a),r);return g.jsx(Tn,{value:a,children:g.jsx(G.div,{...l,ref:t})})});Mt.displayName="MenuItemGroup";const Ot=d.forwardRef((e,t)=>{const n=L(),r=vn(),i=N(n.getItemGroupLabelProps({htmlFor:r.id}),e);return g.jsx(G.div,{...i,ref:t})});Ot.displayName="MenuItemGroupLabel";const Et=d.forwardRef((e,t)=>{const n=L(),r=N(n.getPositionerProps(),e);return Pe().unmounted?null:g.jsx(G.div,{...r,ref:t})});Et.displayName="MenuPositioner";const Pn=e=>{const t=d.useRef(e),n=d.useRef(!1);d.useEffect(()=>{t.current=e}),d.useEffect(()=>{n.current!==!0&&(n.current=!0,t.current())},[])};var X=(e,t)=>({x:e,y:t});function yn(e){const{x:t,y:n,width:r,height:i}=e,u=t+r/2,a=n+i/2;return{x:t,y:n,width:r,height:i,minX:t,minY:n,maxX:t+r,maxY:n+i,midX:u,midY:a,center:X(u,a)}}function Cn(e){const t=X(e.minX,e.minY),n=X(e.maxX,e.minY),r=X(e.maxX,e.maxY),i=X(e.minX,e.maxY);return{top:t,right:n,bottom:r,left:i}}function bn(e,t){const n=yn(e),{top:r,right:i,left:u,bottom:a}=Cn(n),[l]=t.split("-");return{top:[u,r,i,a],right:[r,i,a,u],bottom:[r,u,a,i],left:[i,r,u,a]}[l]}function Sn(e,t){const{x:n,y:r}=t;let i=!1;for(let u=0,a=e.length-1;u<e.length;a=u++){const l=e[u].x,m=e[u].y,P=e[a].x,f=e[a].y;m>r!=f>r&&n<(P-l)*(r-m)/(f-m)+l&&(i=!i)}return i}var Nn=xt("menu").parts("arrow","arrowTip","content","contextTrigger","indicator","item","itemGroup","itemGroupLabel","itemIndicator","itemText","positioner","separator","trigger","triggerItem"),E=Nn.build(),fe=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`menu:${e.id}:trigger`},It=e=>{var t;return((t=e.ids)==null?void 0:t.contextTrigger)??`menu:${e.id}:ctx-trigger`},oe=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`menu:${e.id}:content`},Rn=e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`menu:${e.id}:arrow`},Tt=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`menu:${e.id}:popper`},_n=(e,t)=>{var n,r;return((r=(n=e.ids)==null?void 0:n.group)==null?void 0:r.call(n,t))??`menu:${e.id}:group:${t}`},ie=(e,t)=>`${e.id}/${t}`,D=e=>(e==null?void 0:e.dataset.value)??null,we=(e,t)=>{var n,r;return((r=(n=e.ids)==null?void 0:n.groupLabel)==null?void 0:r.call(n,t))??`menu:${e.id}:group-label:${t}`},k=e=>e.getById(oe(e)),ke=e=>e.getById(Tt(e)),ge=e=>e.getById(fe(e)),Ln=(e,t)=>t?e.getById(ie(e,t)):null,Ee=e=>e.getById(It(e)),se=e=>{const n=`[role^="menuitem"][data-ownedby=${CSS.escape(oe(e))}]:not([data-disabled])`;return zt(k(e),n)},wn=e=>jt(se(e)),kn=e=>Ft(se(e)),ye=(e,t)=>t?e.id===t||e.dataset.value===t:!1,xn=(e,t)=>{const n=se(e),r=n.findIndex(i=>ye(i,t.value));return Jt(n,r,{loop:t.loop??t.loopFocus})},An=(e,t)=>{const n=se(e),r=n.findIndex(i=>ye(i,t.value));return Zt(n,r,{loop:t.loop??t.loopFocus})},Gn=(e,t)=>{const n=se(e),r=n.find(i=>ye(i,t.value));return gt(n,{state:t.typeaheadState,key:t.key,activeId:(r==null?void 0:r.id)??null})},me=e=>Ut(e)&&(e.dataset.disabled===""||e.hasAttribute("disabled")),Dn=e=>{var t;return!!((t=e==null?void 0:e.getAttribute("role"))!=null&&t.startsWith("menuitem"))&&!!(e!=null&&e.hasAttribute("aria-controls"))},Te="menu:select";function Hn(e,t){if(!e)return;const n=Qt(e),r=new n.CustomEvent(Te,{detail:{value:t}});e.dispatchEvent(r)}function Wn(e,t){const{context:n,send:r,state:i,computed:u,prop:a,scope:l}=e,m=i.hasTag("open"),P=n.get("isSubmenu"),f=u("isTypingAhead"),S=a("composite"),le=n.get("currentPlacement"),w=n.get("anchorPoint"),j=n.get("highlightedValue"),q=sn({...a("positioning"),placement:w?"bottom":le});function H(o){return{id:ie(l,o.value),disabled:!!o.disabled,highlighted:j===o.value}}function $(o){const c=o.valueText??o.value;return{...o,id:o.value,valueText:c}}function W(o){return{...H($(o)),checked:!!o.checked}}function Me(o){const{closeOnSelect:c,valueText:M,value:O}=o,I=H(o),b=ie(l,O);return t.element({...E.item.attrs,id:b,role:"menuitem","aria-disabled":Vt(I.disabled),"data-disabled":V(I.disabled),"data-ownedby":oe(l),"data-highlighted":V(I.highlighted),"data-value":O,"data-valuetext":M,onDragStart(h){h.currentTarget.matches("a[href]")&&h.preventDefault()},onPointerMove(h){if(I.disabled||h.pointerType!=="mouse")return;const y=h.currentTarget;I.highlighted||r({type:"ITEM_POINTERMOVE",id:b,target:y,closeOnSelect:c})},onPointerLeave(h){var be;if(I.disabled||h.pointerType!=="mouse"||!((be=e.event.previous())==null?void 0:be.type.includes("POINTER")))return;const Lt=h.currentTarget;r({type:"ITEM_POINTERLEAVE",id:b,target:Lt,closeOnSelect:c})},onPointerDown(h){if(I.disabled)return;const y=h.currentTarget;r({type:"ITEM_POINTERDOWN",target:y,id:b,closeOnSelect:c})},onClick(h){if(Se(h)||Ne(h)||I.disabled)return;const y=h.currentTarget;r({type:"ITEM_CLICK",target:y,id:b,closeOnSelect:c})}})}return{highlightedValue:j,open:m,setOpen(o){i.hasTag("open")!==o&&r({type:o?"OPEN":"CLOSE"})},setHighlightedValue(o){r({type:"HIGHLIGHTED.SET",value:o})},setParent(o){r({type:"PARENT.SET",value:o,id:o.prop("id")})},setChild(o){r({type:"CHILD.SET",value:o,id:o.prop("id")})},reposition(o={}){r({type:"POSITIONING.SET",options:o})},addItemListener(o){const c=l.getById(o.id);if(!c)return;const M=()=>{var O;return(O=o.onSelect)==null?void 0:O.call(o)};return c.addEventListener(Te,M),()=>c.removeEventListener(Te,M)},getContextTriggerProps(){return t.element({...E.contextTrigger.attrs,dir:a("dir"),id:It(l),"data-state":m?"open":"closed",onPointerDown(o){if(o.pointerType==="mouse")return;const c=ce(o);r({type:"CONTEXT_MENU_START",point:c})},onPointerCancel(o){o.pointerType!=="mouse"&&r({type:"CONTEXT_MENU_CANCEL"})},onPointerMove(o){o.pointerType!=="mouse"&&r({type:"CONTEXT_MENU_CANCEL"})},onPointerUp(o){o.pointerType!=="mouse"&&r({type:"CONTEXT_MENU_CANCEL"})},onContextMenu(o){const c=ce(o);r({type:"CONTEXT_MENU",point:c}),o.preventDefault()},style:{WebkitTouchCallout:"none",WebkitUserSelect:"none",userSelect:"none"}})},getTriggerItemProps(o){const c=o.getTriggerProps();return N(Me({value:c.id}),c)},getTriggerProps(){return t.button({...P?E.triggerItem.attrs:E.trigger.attrs,"data-placement":n.get("currentPlacement"),type:"button",dir:a("dir"),id:fe(l),"data-uid":a("id"),"aria-haspopup":S?"menu":"dialog","aria-controls":oe(l),"aria-expanded":m||void 0,"data-state":m?"open":"closed",onPointerMove(o){if(o.pointerType!=="mouse"||me(o.currentTarget)||!P)return;const M=ce(o);r({type:"TRIGGER_POINTERMOVE",target:o.currentTarget,point:M})},onPointerLeave(o){if(me(o.currentTarget)||o.pointerType!=="mouse"||!P)return;const c=ce(o);r({type:"TRIGGER_POINTERLEAVE",target:o.currentTarget,point:c})},onPointerDown(o){me(o.currentTarget)||Ht(o)||o.preventDefault()},onClick(o){o.defaultPrevented||me(o.currentTarget)||r({type:"TRIGGER_CLICK",target:o.currentTarget})},onBlur(){r({type:"TRIGGER_BLUR"})},onFocus(){r({type:"TRIGGER_FOCUS"})},onKeyDown(o){if(o.defaultPrevented)return;const c={ArrowDown(){r({type:"ARROW_DOWN"})},ArrowUp(){r({type:"ARROW_UP"})},Enter(){r({type:"ARROW_DOWN",src:"enter"})},Space(){r({type:"ARROW_DOWN",src:"space"})}},M=Re(o,{orientation:"vertical",dir:a("dir")}),O=c[M];O&&(o.preventDefault(),O(o))}})},getIndicatorProps(){return t.element({...E.indicator.attrs,dir:a("dir"),"data-state":m?"open":"closed"})},getPositionerProps(){return t.element({...E.positioner.attrs,dir:a("dir"),id:Tt(l),style:q.floating})},getArrowProps(){return t.element({id:Rn(l),...E.arrow.attrs,dir:a("dir"),style:q.arrow})},getArrowTipProps(){return t.element({...E.arrowTip.attrs,dir:a("dir"),style:q.arrowTip})},getContentProps(){return t.element({...E.content.attrs,id:oe(l),"aria-label":a("aria-label"),hidden:!m,"data-state":m?"open":"closed",role:S?"menu":"dialog",tabIndex:0,dir:a("dir"),"aria-activedescendant":u("highlightedId")||void 0,"aria-labelledby":fe(l),"data-placement":le,onPointerEnter(o){o.pointerType==="mouse"&&r({type:"MENU_POINTERENTER"})},onKeyDown(o){if(o.defaultPrevented||!pe(o.currentTarget,he(o)))return;const c=he(o);if(!((c==null?void 0:c.closest("[role=menu]"))===o.currentTarget||c===o.currentTarget))return;if(o.key==="Tab"&&!At(o)){o.preventDefault();return}const O={ArrowDown(){r({type:"ARROW_DOWN"})},ArrowUp(){r({type:"ARROW_UP"})},ArrowLeft(){r({type:"ARROW_LEFT"})},ArrowRight(){r({type:"ARROW_RIGHT"})},Enter(){r({type:"ENTER"})},Space(h){var y;f?r({type:"TYPEAHEAD",key:h.key}):(y=O.Enter)==null||y.call(O,h)},Home(){r({type:"HOME"})},End(){r({type:"END"})}},I=Re(o,{dir:a("dir")}),b=O[I];if(b){b(o),o.stopPropagation(),o.preventDefault();return}a("typeahead")&&Gt(o)&&(Dt(o)||dt(c)||(r({type:"TYPEAHEAD",key:o.key}),o.preventDefault()))}})},getSeparatorProps(){return t.element({...E.separator.attrs,role:"separator",dir:a("dir"),"aria-orientation":"horizontal"})},getItemState:H,getItemProps:Me,getOptionItemState:W,getOptionItemProps(o){const{type:c,disabled:M,closeOnSelect:O}=o,I=$(o),b=W(o);return{...Me(I),...t.element({"data-type":c,...E.item.attrs,dir:a("dir"),"data-value":I.value,role:`menuitem${c}`,"aria-checked":!!b.checked,"data-state":b.checked?"checked":"unchecked",onClick(h){if(M||Se(h)||Ne(h))return;const y=h.currentTarget;r({type:"ITEM_CLICK",target:y,option:I,closeOnSelect:O})}})}},getItemIndicatorProps(o){const c=W(_e(o)),M=c.checked?"checked":"unchecked";return t.element({...E.itemIndicator.attrs,dir:a("dir"),"data-disabled":V(c.disabled),"data-highlighted":V(c.highlighted),"data-state":Oe(o,"checked")?M:void 0,hidden:Oe(o,"checked")?!c.checked:void 0})},getItemTextProps(o){const c=W(_e(o)),M=c.checked?"checked":"unchecked";return t.element({...E.itemText.attrs,dir:a("dir"),"data-disabled":V(c.disabled),"data-highlighted":V(c.highlighted),"data-state":Oe(o,"checked")?M:void 0})},getItemGroupLabelProps(o){return t.element({...E.itemGroupLabel.attrs,id:we(l,o.htmlFor),dir:a("dir")})},getItemGroupProps(o){return t.element({id:_n(l,o.id),...E.itemGroup.attrs,dir:a("dir"),"aria-labelledby":we(l,o.id),role:"group"})}}}var{not:C,and:U,or:Vn}=Bt(),Un=Wt({props({props:e}){return{closeOnSelect:!0,typeahead:!0,composite:!0,loopFocus:!1,navigate(t){Kt(t.node)},...e,positioning:{placement:"bottom-start",gutter:8,...e.positioning}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"idle"},context({bindable:e,prop:t}){return{suspendPointer:e(()=>({defaultValue:!1})),highlightedValue:e(()=>({defaultValue:t("defaultHighlightedValue")||null,value:t("highlightedValue"),onChange(n){var r;(r=t("onHighlightChange"))==null||r({highlightedValue:n})}})),lastHighlightedValue:e(()=>({defaultValue:null})),currentPlacement:e(()=>({defaultValue:void 0})),intentPolygon:e(()=>({defaultValue:null})),anchorPoint:e(()=>({defaultValue:null,hash(n){return`x: ${n==null?void 0:n.x}, y: ${n==null?void 0:n.y}`}})),isSubmenu:e(()=>({defaultValue:!1}))}},refs(){return{parent:null,children:{},typeaheadState:{...gt.defaultOptions},positioningOverride:{}}},computed:{isRtl:({prop:e})=>e("dir")==="rtl",isTypingAhead:({refs:e})=>e.get("typeaheadState").keysSoFar!=="",highlightedId:({context:e,scope:t,refs:n})=>Fn(n.get("children"),e.get("highlightedValue"),t)},watch({track:e,action:t,context:n,prop:r}){e([()=>n.get("isSubmenu")],()=>{t(["setSubmenuPlacement"])}),e([()=>n.hash("anchorPoint")],()=>{n.get("anchorPoint")&&t(["reposition"])}),e([()=>r("open")],()=>{t(["toggleVisibility"])})},on:{"PARENT.SET":{actions:["setParentMenu"]},"CHILD.SET":{actions:["setChildMenu"]},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],OPEN_AUTOFOCUS:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["highlightFirstItem","invokeOnOpen"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"HIGHLIGHTED.RESTORE":{actions:["restoreHighlightedItem"]},"HIGHLIGHTED.SET":{actions:["setHighlightedItem"]}},states:{idle:{tags:["closed"],on:{"CONTROLLED.OPEN":{target:"open"},"CONTROLLED.CLOSE":{target:"closed"},CONTEXT_MENU_START:{target:"opening:contextmenu",actions:["setAnchorPoint"]},CONTEXT_MENU:[{guard:"isOpenControlled",actions:["setAnchorPoint","invokeOnOpen"]},{target:"open",actions:["setAnchorPoint","invokeOnOpen"]}],TRIGGER_CLICK:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],TRIGGER_FOCUS:{guard:C("isSubmenu"),target:"closed"},TRIGGER_POINTERMOVE:{guard:"isSubmenu",target:"opening"}}},"opening:contextmenu":{tags:["closed"],effects:["waitForLongPress"],on:{"CONTROLLED.OPEN":{target:"open"},"CONTROLLED.CLOSE":{target:"closed"},CONTEXT_MENU_CANCEL:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"LONG_PRESS.OPEN":[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}]}},opening:{tags:["closed"],effects:["waitForOpenDelay"],on:{"CONTROLLED.OPEN":{target:"open"},"CONTROLLED.CLOSE":{target:"closed"},BLUR:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],TRIGGER_POINTERLEAVE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"DELAY.OPEN":[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}]}},closing:{tags:["open"],effects:["trackPointerMove","trackInteractOutside","waitForCloseDelay"],on:{"CONTROLLED.OPEN":{target:"open"},"CONTROLLED.CLOSE":{target:"closed",actions:["focusParentMenu","restoreParentHighlightedItem"]},MENU_POINTERENTER:{target:"open",actions:["clearIntentPolygon"]},POINTER_MOVED_AWAY_FROM_SUBMENU:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["focusParentMenu","restoreParentHighlightedItem"]}],"DELAY.CLOSE":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["focusParentMenu","restoreParentHighlightedItem","invokeOnClose"]}]}},closed:{tags:["closed"],entry:["clearHighlightedItem","focusTrigger","resumePointer","clearAnchorPoint"],on:{"CONTROLLED.OPEN":[{guard:Vn("isOpenAutoFocusEvent","isArrowDownEvent"),target:"open",actions:["highlightFirstItem"]},{guard:"isArrowUpEvent",target:"open",actions:["highlightLastItem"]},{target:"open"}],CONTEXT_MENU_START:{target:"opening:contextmenu",actions:["setAnchorPoint"]},CONTEXT_MENU:[{guard:"isOpenControlled",actions:["setAnchorPoint","invokeOnOpen"]},{target:"open",actions:["setAnchorPoint","invokeOnOpen"]}],TRIGGER_CLICK:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],TRIGGER_POINTERMOVE:{guard:"isTriggerItem",target:"opening"},TRIGGER_BLUR:{target:"idle"},ARROW_DOWN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["highlightFirstItem","invokeOnOpen"]}],ARROW_UP:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["highlightLastItem","invokeOnOpen"]}]}},open:{tags:["open"],effects:["trackInteractOutside","trackPositioning","scrollToHighlightedItem"],entry:["focusMenu","resumePointer"],on:{"CONTROLLED.CLOSE":[{target:"closed",guard:"isArrowLeftEvent",actions:["focusParentMenu"]},{target:"closed"}],TRIGGER_CLICK:[{guard:U(C("isTriggerItem"),"isOpenControlled"),actions:["invokeOnClose"]},{guard:C("isTriggerItem"),target:"closed",actions:["invokeOnClose"]}],CONTEXT_MENU:{actions:["setAnchorPoint","focusMenu"]},ARROW_UP:{actions:["highlightPrevItem","focusMenu"]},ARROW_DOWN:{actions:["highlightNextItem","focusMenu"]},ARROW_LEFT:[{guard:U("isSubmenu","isOpenControlled"),actions:["invokeOnClose"]},{guard:"isSubmenu",target:"closed",actions:["focusParentMenu","invokeOnClose"]}],HOME:{actions:["highlightFirstItem","focusMenu"]},END:{actions:["highlightLastItem","focusMenu"]},ARROW_RIGHT:{guard:"isTriggerItemHighlighted",actions:["openSubmenu"]},ENTER:[{guard:"isTriggerItemHighlighted",actions:["openSubmenu"]},{actions:["clickHighlightedItem"]}],ITEM_POINTERMOVE:[{guard:C("isPointerSuspended"),actions:["setHighlightedItem","focusMenu"]},{actions:["setLastHighlightedItem"]}],ITEM_POINTERLEAVE:{guard:U(C("isPointerSuspended"),C("isTriggerItem")),actions:["clearHighlightedItem"]},ITEM_CLICK:[{guard:U(C("isTriggerItemHighlighted"),C("isHighlightedItemEditable"),"closeOnSelect","isOpenControlled"),actions:["invokeOnSelect","setOptionState","closeRootMenu","invokeOnClose"]},{guard:U(C("isTriggerItemHighlighted"),C("isHighlightedItemEditable"),"closeOnSelect"),target:"closed",actions:["invokeOnSelect","setOptionState","closeRootMenu","invokeOnClose"]},{guard:U(C("isTriggerItemHighlighted"),C("isHighlightedItemEditable")),actions:["invokeOnSelect","setOptionState"]},{actions:["setHighlightedItem"]}],TRIGGER_POINTERMOVE:{guard:"isTriggerItem",actions:["setIntentPolygon"]},TRIGGER_POINTERLEAVE:{target:"closing"},ITEM_POINTERDOWN:{actions:["setHighlightedItem"]},TYPEAHEAD:{actions:["highlightMatchedItem"]},FOCUS_MENU:{actions:["focusMenu"]},"POSITIONING.SET":{actions:["reposition"]}}}},implementations:{guards:{closeOnSelect:({prop:e,event:t})=>!!((t==null?void 0:t.closeOnSelect)??e("closeOnSelect")),isTriggerItem:({event:e})=>Dn(e.target),isTriggerItemHighlighted:({event:e,scope:t,computed:n})=>{const r=e.target??t.getById(n("highlightedId"));return!!(r!=null&&r.hasAttribute("aria-controls"))},isSubmenu:({context:e})=>e.get("isSubmenu"),isPointerSuspended:({context:e})=>e.get("suspendPointer"),isHighlightedItemEditable:({scope:e,computed:t})=>dt(e.getById(t("highlightedId"))),isOpenControlled:({prop:e})=>e("open")!==void 0,isArrowLeftEvent:({event:e})=>{var t;return((t=e.previousEvent)==null?void 0:t.type)==="ARROW_LEFT"},isArrowUpEvent:({event:e})=>{var t;return((t=e.previousEvent)==null?void 0:t.type)==="ARROW_UP"},isArrowDownEvent:({event:e})=>{var t;return((t=e.previousEvent)==null?void 0:t.type)==="ARROW_DOWN"},isOpenAutoFocusEvent:({event:e})=>{var t;return((t=e.previousEvent)==null?void 0:t.type)==="OPEN_AUTOFOCUS"}},effects:{waitForOpenDelay({send:e}){const t=setTimeout(()=>{e({type:"DELAY.OPEN"})},100);return()=>clearTimeout(t)},waitForCloseDelay({send:e}){const t=setTimeout(()=>{e({type:"DELAY.CLOSE"})},300);return()=>clearTimeout(t)},waitForLongPress({send:e}){const t=setTimeout(()=>{e({type:"LONG_PRESS.OPEN"})},700);return()=>clearTimeout(t)},trackPositioning({context:e,prop:t,scope:n,refs:r}){if(Ee(n))return;const i={...t("positioning"),...r.get("positioningOverride")};e.set("currentPlacement",i.placement);const u=()=>ke(n);return Le(ge(n),u,{...i,defer:!0,onComplete(a){e.set("currentPlacement",a.placement)}})},trackInteractOutside({refs:e,scope:t,prop:n,context:r,send:i}){const u=()=>k(t);let a=!0;return mn(u,{type:"menu",defer:!0,exclude:[ge(t)],onInteractOutside:n("onInteractOutside"),onRequestDismiss:n("onRequestDismiss"),onFocusOutside(l){var f;(f=n("onFocusOutside"))==null||f(l);const m=he(l.detail.originalEvent);if(pe(Ee(t),m)){l.preventDefault();return}},onEscapeKeyDown(l){var m;(m=n("onEscapeKeyDown"))==null||m(l),r.get("isSubmenu")&&l.preventDefault(),xe({parent:e.get("parent")})},onPointerDownOutside(l){var f;(f=n("onPointerDownOutside"))==null||f(l);const m=he(l.detail.originalEvent);if(pe(Ee(t),m)&&l.detail.contextmenu){l.preventDefault();return}a=!l.detail.focusable},onDismiss(){i({type:"CLOSE",src:"interact-outside",restoreFocus:a})}})},trackPointerMove({context:e,scope:t,send:n,refs:r,flush:i}){const u=r.get("parent");i(()=>{u.context.set("suspendPointer",!0)});const a=t.getDoc();return Xt(a,"pointermove",l=>{Bn(e.get("intentPolygon"),{x:l.clientX,y:l.clientY})||(n({type:"POINTER_MOVED_AWAY_FROM_SUBMENU"}),u.context.set("suspendPointer",!1))})},scrollToHighlightedItem({event:e,scope:t,computed:n}){const r=()=>{if(e.current().type.startsWith("ITEM_POINTER"))return;const u=t.getById(n("highlightedId")),a=k(t);tn(u,{rootEl:a,block:"nearest"})};return de(()=>r()),Yt(()=>k(t),{defer:!0,attributes:["aria-activedescendant"],callback:r})}},actions:{setAnchorPoint({context:e,event:t}){e.set("anchorPoint",n=>$t(n,t.point)?n:t.point)},setSubmenuPlacement({context:e,computed:t,refs:n}){if(!e.get("isSubmenu"))return;const r=t("isRtl")?"left-start":"right-start";n.set("positioningOverride",{placement:r,gutter:0})},reposition({context:e,scope:t,prop:n,event:r,refs:i}){const u=()=>ke(t),a=e.get("anchorPoint"),l=a?()=>({width:0,height:0,...a}):void 0,m={...n("positioning"),...i.get("positioningOverride")};Le(ge(t),u,{...m,defer:!0,getAnchorRect:l,...r.options??{},listeners:!1,onComplete(P){e.set("currentPlacement",P.placement)}})},setOptionState({event:e}){if(!e.option)return;const{checked:t,onCheckedChange:n,type:r}=e.option;r==="radio"?n==null||n(!0):r==="checkbox"&&(n==null||n(!t))},clickHighlightedItem({scope:e,computed:t,prop:n,context:r}){var a;const i=e.getById(t("highlightedId"));if(!i||i.dataset.disabled)return;const u=r.get("highlightedValue");qt(i)?(a=n("navigate"))==null||a({value:u,node:i,href:i.href}):queueMicrotask(()=>i.click())},setIntentPolygon({context:e,scope:t,event:n}){const r=k(t),i=e.get("currentPlacement");if(!r||!i)return;const u=r.getBoundingClientRect(),a=bn(u,i);if(!a)return;const m=un(i)==="right"?-5:5;e.set("intentPolygon",[{...n.point,x:n.point.x+m},...a])},clearIntentPolygon({context:e}){e.set("intentPolygon",null)},clearAnchorPoint({context:e}){e.set("anchorPoint",null)},resumePointer({refs:e,flush:t}){const n=e.get("parent");n&&t(()=>{n.context.set("suspendPointer",!1)})},setHighlightedItem({context:e,event:t}){const n=t.value||D(t.target);e.set("highlightedValue",n)},clearHighlightedItem({context:e}){e.set("highlightedValue",null)},focusMenu({scope:e}){de(()=>{const t=k(e),n=en({root:t,enabled:!pe(t,e.getActiveElement()),filter(r){var i;return!((i=r.role)!=null&&i.startsWith("menuitem"))}});n==null||n.focus({preventScroll:!0})})},highlightFirstItem({context:e,scope:t}){(k(t)?queueMicrotask:de)(()=>{const r=wn(t);r&&e.set("highlightedValue",D(r))})},highlightLastItem({context:e,scope:t}){(k(t)?queueMicrotask:de)(()=>{const r=kn(t);r&&e.set("highlightedValue",D(r))})},highlightNextItem({context:e,scope:t,event:n,prop:r}){const i=xn(t,{loop:n.loop,value:e.get("highlightedValue"),loopFocus:r("loopFocus")});e.set("highlightedValue",D(i))},highlightPrevItem({context:e,scope:t,event:n,prop:r}){const i=An(t,{loop:n.loop,value:e.get("highlightedValue"),loopFocus:r("loopFocus")});e.set("highlightedValue",D(i))},invokeOnSelect({context:e,prop:t,scope:n}){var u;const r=e.get("highlightedValue");if(r==null)return;const i=Ln(n,r);Hn(i,r),(u=t("onSelect"))==null||u({value:r})},focusTrigger({scope:e,context:t,event:n}){t.get("isSubmenu")||t.get("anchorPoint")||n.restoreFocus===!1||queueMicrotask(()=>{var r;return(r=ge(e))==null?void 0:r.focus({preventScroll:!0})})},highlightMatchedItem({scope:e,context:t,event:n,refs:r}){const i=Gn(e,{key:n.key,value:t.get("highlightedValue"),typeaheadState:r.get("typeaheadState")});i&&t.set("highlightedValue",D(i))},setParentMenu({refs:e,event:t,context:n}){e.set("parent",t.value),n.set("isSubmenu",!0)},setChildMenu({refs:e,event:t}){const n=e.get("children");n[t.id]=t.value,e.set("children",n)},closeRootMenu({refs:e}){xe({parent:e.get("parent")})},openSubmenu({refs:e,scope:t,computed:n}){const r=t.getById(n("highlightedId")),i=r==null?void 0:r.getAttribute("data-uid"),u=e.get("children"),a=i?u[i]:null;a==null||a.send({type:"OPEN_AUTOFOCUS"})},focusParentMenu({refs:e}){var t;(t=e.get("parent"))==null||t.send({type:"FOCUS_MENU"})},setLastHighlightedItem({context:e,event:t}){e.set("lastHighlightedValue",D(t.target))},restoreHighlightedItem({context:e}){e.get("lastHighlightedValue")&&(e.set("highlightedValue",e.get("lastHighlightedValue")),e.set("lastHighlightedValue",null))},restoreParentHighlightedItem({refs:e}){var t;(t=e.get("parent"))==null||t.send({type:"HIGHLIGHTED.RESTORE"})},invokeOnOpen({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!1})},toggleVisibility({prop:e,event:t,send:n}){n({type:e("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:t})}}}});function xe(e){let t=e.parent;for(;t&&t.context.get("isSubmenu");)t=t.refs.get("parent");t==null||t.send({type:"CLOSE"})}function Bn(e,t){return e?Sn(e,t):!1}function Fn(e,t,n){const r=Object.keys(e).length>0;if(!t)return null;if(!r)return ie(n,t);for(const i in e){const u=e[i],a=fe(u.scope);if(a===t)return a}return ie(n,t)}ae()(["anchorPoint","aria-label","closeOnSelect","composite","defaultHighlightedValue","defaultOpen","dir","getRootNode","highlightedValue","id","ids","loopFocus","navigate","onEscapeKeyDown","onFocusOutside","onHighlightChange","onInteractOutside","onOpenChange","onPointerDownOutside","onRequestDismiss","onSelect","open","positioning","typeahead"]);ae()(["closeOnSelect","disabled","value","valueText"]);ae()(["htmlFor"]);ae()(["id"]);ae()(["checked","closeOnSelect","disabled","onCheckedChange","type","value","valueText"]);const jn=e=>{const t=d.useId(),{getRootNode:n}=nn(),{dir:r}=rn(),i={id:t,dir:r,getRootNode:n,...e},u=on(Un,i);return{api:Wn(u,an),service:u}},[qn,$n]=F({name:"MenuMachineContext",hookName:"useMenuMachineContext",providerName:"<MenuMachineProvider />",strict:!1}),[Yn,Xn]=F({name:"MenuMachineContext",hookName:"useMenuMachineContext",providerName:"<MenuMachineProvider />",strict:!1}),vt=e=>{const[t,n]=ln(e),[r,i]=ve()(n,["anchorPoint","aria-label","closeOnSelect","composite","defaultHighlightedValue","defaultOpen","highlightedValue","id","ids","loopFocus","navigate","onEscapeKeyDown","onFocusOutside","onHighlightChange","onInteractOutside","onOpenChange","onPointerDownOutside","onRequestDismiss","onSelect","open","positioning","typeahead"]),u=L(),a=$n(),{api:l,service:m}=jn(r),P=dn(N({present:l.open},t));Pn(()=>{a&&u&&(u.setChild(m),l.setParent(a))});const f=d.useCallback(()=>u==null?void 0:u.getTriggerItemProps(l),[l,u]);return g.jsx(Yn,{value:f,children:g.jsx(qn,{value:m,children:g.jsx(En,{value:l,children:g.jsx(gn,{value:P,...i})})})})},Pt=d.forwardRef((e,t)=>{const n=L(),r=Pe(),i=N({...n.getTriggerProps(),"aria-controls":r.unmounted?void 0:n.getTriggerProps()["aria-controls"]},e);return g.jsx(G.button,{...i,ref:t})});Pt.displayName="MenuTrigger";const yt=d.forwardRef((e,t)=>{const n=Xn(),r=N((n==null?void 0:n())??{},e);return g.jsx(pt,{value:{value:r["data-value"]},children:g.jsx(G.div,{...r,ref:t})})});yt.displayName="MenuTriggerItem";const Ct=d.createContext(void 0);function bt({children:e,onPositionChange:t,positionerStyle:n}){const[r,i]=d.useState(),[u,a]=d.useState();return g.jsx(Ct.Provider,{value:{contentId:r,onPositionChange:t,positionerStyle:n,setContentId:i,setTriggerId:a,triggerId:u},children:e})}function St(){return wt(Ct)}bt.__docgenInfo={description:"",methods:[],displayName:"MenuProvider",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: MenuOpenChangeDetail) => void",signature:{arguments:[{type:{name:"MenuOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the menu open state changes."},onPositionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: MenuPositionChangeDetail) => void",signature:{arguments:[{type:{name:"MenuPositionChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the menu position changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the menu."},overlayConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Whether to flip the position.
   */
  flip?: boolean,
  /**
   * The main axis offset or gap between the reference and floating elements.
   */
  gutter?: number;
  /**
   * @type=MENU_POSITION
   * The menu position around the trigger.
   */
  position?: MenuPosition,
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
}`,signature:{properties:[{key:"flip",value:{name:"boolean",required:!1},description:"Whether to flip the position."},{key:"gutter",value:{name:"number",required:!1},description:"The main axis offset or gap between the reference and floating elements."},{key:"position",value:{name:"literal",value:"`${OVERLAY_POSITION}`",required:!1},description:`@type=MENU_POSITION
The menu position around the trigger.`},{key:"sameWidth",value:{name:"boolean",required:!1},description:"Whether to make the floating element same width as the reference element."}]}},description:"The overlay configuration."},position:{required:!1,tsType:{name:"literal",value:"`${OVERLAY_POSITION}`"},description:`@deprecated
@type=MENU_POSITION
Moved to overlayConfig.`},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index."},triggerId:{required:!1,tsType:{name:"string"},description:"ID of an external trigger element to use in place of the MenuTrigger component."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ce=({children:e,onOpenChange:t,onPositionChange:n,open:r,overlayConfig:i,position:u,positionerStyle:a,triggerId:l,...m})=>g.jsx(bt,{onPositionChange:n,positionerStyle:a,children:g.jsx(vt,{onOpenChange:t,open:r,positioning:{flip:i==null?void 0:i.flip,gutter:i==null?void 0:i.gutter,placement:(i==null?void 0:i.position)??u,sameWidth:i==null?void 0:i.sameWidth},...m,children:e})});Ce.displayName="Menu";Ce.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: MenuOpenChangeDetail) => void",signature:{arguments:[{type:{name:"MenuOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the menu open state changes."},onPositionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: MenuPositionChangeDetail) => void",signature:{arguments:[{type:{name:"MenuPositionChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the menu position changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the menu."},overlayConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Whether to flip the position.
   */
  flip?: boolean,
  /**
   * The main axis offset or gap between the reference and floating elements.
   */
  gutter?: number;
  /**
   * @type=MENU_POSITION
   * The menu position around the trigger.
   */
  position?: MenuPosition,
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
}`,signature:{properties:[{key:"flip",value:{name:"boolean",required:!1},description:"Whether to flip the position."},{key:"gutter",value:{name:"number",required:!1},description:"The main axis offset or gap between the reference and floating elements."},{key:"position",value:{name:"literal",value:"`${OVERLAY_POSITION}`",required:!1},description:`@type=MENU_POSITION
The menu position around the trigger.`},{key:"sameWidth",value:{name:"boolean",required:!1},description:"Whether to make the floating element same width as the reference element."}]}},description:"The overlay configuration."},position:{required:!1,tsType:{name:"literal",value:"`${OVERLAY_POSITION}`"},description:`@deprecated
@type=MENU_POSITION
Moved to overlayConfig.`},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index."},triggerId:{required:!1,tsType:{name:"string"},description:"ID of an external trigger element to use in place of the MenuTrigger component."}}};const Nt=d.createContext(void 0);function Rt({children:e}){return g.jsx(Nt.Provider,{value:{isSubmenu:!0},children:e})}function _t(){return d.useContext(Nt)??{isSubmenu:!1}}Rt.__docgenInfo={description:"",methods:[],displayName:"SubmenuProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ae={"menu-content":"_menu-content_1qs2s_2","menu-content__arrow":"_menu-content__arrow_1qs2s_15"},T=d.forwardRef(({children:e,className:t,createPortal:n=!0,id:r,withArrow:i=!1,...u},a)=>{const l=d.useId(),{onPositionChange:m,positionerStyle:P,setContentId:f}=St(),{isSubmenu:S}=_t(),{open:le}=L(),w=d.useRef(null),j=d.useMemo(()=>r??l,[l,r]),q=S?!0:n;return d.useImperativeHandle(a,()=>w.current,[w]),d.useEffect(()=>{S||f(j)},[j,S,f]),d.useEffect(()=>{if(!S&&w.current){const H=new MutationObserver($=>{if($.length){const W=$[0].target.dataset;m==null||m({position:W.placement})}});return H.observe(w.current,{attributeFilter:["data-placement"],attributes:!0}),()=>{H.disconnect()}}},[w,S,m]),g.jsx(cn,{disabled:!q,children:g.jsx(Et,{style:{zIndex:S?"calc(var(--ods-theme-overlay-z-index) + 1)":"var(--ods-theme-overlay-z-index)",...S?{}:P||{}},children:g.jsxs(ht,{className:B(Ae["menu-content"],t),"data-ods":"menu-content",ref:w,...u,style:{...u.style,...le?{}:{display:"none"}},children:[i&&g.jsx(mt,{className:Ae["menu-content__arrow"]}),e]})})})});T.displayName="MenuContent";T.__docgenInfo={description:"",methods:[],displayName:"MenuContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:`Whether the component should be rendered in the DOM close to the body tag.
This only works on the root menu and not in submenus.`,defaultValue:{value:"true",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"Whether the component displays an arrow pointing to the trigger.",defaultValue:{value:"false",computed:!1}}},composes:["ComponentPropsWithRef"]};const Kn={"menu-group":"_menu-group_xoe2f_2"},x=d.forwardRef(({asChild:e,children:t,className:n,...r},i)=>g.jsx(Mt,{asChild:e,className:B(Kn["menu-group"],n),"data-ods":"menu-group",ref:i,...r,children:t}));x.displayName="MenuGroup";x.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const Qn={"menu-group-label":"_menu-group-label_luh6p_2"},A=d.forwardRef(({asChild:e,children:t,className:n,...r},i)=>g.jsx(Ot,{asChild:e,className:B(Qn["menu-group-label"],n),"data-ods":"menu-group-label",ref:i,...r,children:t}));A.displayName="MenuGroupLabel";A.__docgenInfo={description:"",methods:[],displayName:"MenuGroupLabel",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const Zn={"menu-item":"_menu-item_5a640_2"},p=d.forwardRef(({children:e,className:t,disabled:n,onSelect:r,...i},u)=>g.jsx(ft,{className:B(Zn["menu-item"],t),"data-ods":"menu-item",disabled:n,onSelect:r,ref:u,...i,children:e}));p.displayName="MenuItem";p.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled."},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the selection changes."},value:{required:!0,tsType:{name:"string"},description:"The value of the item."}},composes:["Omit"]};const ue=({children:e,...t})=>g.jsx(vt,{...t,children:g.jsx(Rt,{children:e})});ue.displayName="MenuSubmenu";ue.__docgenInfo={description:"",methods:[],displayName:"MenuSubmenu",composes:["ComponentPropsWithRef"]};const Ie={"menu-trigger":"_menu-trigger_1hz5i_2","menu-submenu-trigger":"_menu-submenu-trigger_1hz5i_6","menu-submenu-trigger__label":"_menu-submenu-trigger__label_1hz5i_25"},v=d.forwardRef(({asChild:e,children:t,className:n,...r},i)=>{const{setTriggerId:u}=St(),{isSubmenu:a}=_t();return d.useEffect(()=>{var l;if(!a){if(!e&&r.id){u==null||u(r.id);return}t&&((l=t.props)!=null&&l.id)&&(u==null||u(t.props.id))}},[e,t,a,r,u]),a?g.jsx(yt,{asChild:!0,children:g.jsxs("button",{className:B(Ie["menu-submenu-trigger"],n),"data-ods":"menu-submenu-trigger",...r,children:[g.jsx("span",{className:Ie["menu-submenu-trigger__label"],children:t}),g.jsx(lt,{name:ct.chevronRight})]})}):g.jsx(Pt,{asChild:e,className:B(Ie["menu-trigger"],n),"data-ods":"menu-trigger",ref:i,role:"button",tabIndex:0,...r,children:t})});v.displayName="MenuTrigger";v.__docgenInfo={description:"",methods:[],displayName:"MenuTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const R=Object.assign(Ce,{Content:T,Group:x,GroupLabel:A,Item:p,Submenu:ue,Trigger:v}),Jn={argTypes:fn(["onOpenChange","onPositionChange","open","overlayConfig","positionerStyle","triggerId"]),component:R,subcomponents:{MenuContent:T,MenuGroup:x,MenuGroupLabel:A,MenuItem:p,MenuSubmenu:ue,MenuTrigger:v},tags:["new"],title:"React Components/Menu"},K={argTypes:Mn({gutter:{table:{category:Y.design,type:{summary:"number"}},control:"number"},position:{control:"select",options:hn,table:{category:Y.general,type:{summary:"MENU_POSITION"}}},sameWidth:{table:{category:Y.design},control:{type:"boolean"}},triggerLabel:{control:"text",table:{category:Y.slot,type:{summary:"string"}}},withArrow:{control:"boolean",table:{category:Y.design}}}),args:{position:pn.bottom,triggerLabel:"Open menu",withArrow:!1},render:e=>s.createElement(R,{overlayConfig:{gutter:e.gutter,position:e.position,sameWidth:e.sameWidth}},s.createElement(v,{asChild:!0},s.createElement(_,null,e.triggerLabel)),s.createElement(T,{withArrow:e.withArrow},s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{value:"settings"},"Settings")))},Q={parameters:{layout:"start"},tags:["!dev"],render:({})=>s.createElement(R,{open:!0,overlayConfig:{flip:!1}},s.createElement(v,{asChild:!0},s.createElement(_,null,"Menu trigger")),s.createElement(T,{createPortal:!1},s.createElement(x,null,s.createElement(A,null,"My account"),s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{value:"settings"},"Settings")),s.createElement(p,{value:"logout"},"Logout")))},Z={globals:{imports:"import { Button, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(R,null,s.createElement(v,{asChild:!0},s.createElement(_,null,"Open menu")),s.createElement(T,null,s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{value:"settings"},"Settings"),s.createElement(p,{value:"logout"},"Logout")))},J={globals:{imports:`import { Button, ICON_NAME, Icon, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...On()}}},tags:["!dev"],render:({})=>{const[e,t]=d.useState(!1);function n(){t(r=>!r)}return s.createElement(s.Fragment,null,s.createElement(_,{onClick:n},"Toggle menu"),s.createElement(R,{open:e},s.createElement(v,{asChild:!0},s.createElement(lt,{name:ct.ellipsisVertical})),s.createElement(T,null,s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{value:"settings"},"Settings"),s.createElement(p,{value:"logout"},"Logout"))))}},z={globals:{imports:"import { Button, Menu, MenuContent, MenuItem, MenuSubmenu, MenuTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(R,null,s.createElement(v,{asChild:!0},s.createElement(_,null,"Open menu")),s.createElement(T,null,s.createElement(p,{value:"new"},"New"),s.createElement(p,{value:"open"},"Open"),s.createElement(ue,null,s.createElement(v,null,"Share"),s.createElement(T,null,s.createElement(p,{value:"email"},"Email"),s.createElement(p,{value:"message"},"Message")))))},ee={globals:{imports:"import { Button, Menu, MenuContent, MenuGroup, MenuGroupLabel, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(R,null,s.createElement(v,{asChild:!0},s.createElement(_,null,"Open menu")),s.createElement(T,null,s.createElement(x,null,s.createElement(A,null,"Account"),s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{value:"billing"},"Billing")),s.createElement(x,null,s.createElement(A,null,"Support"),s.createElement(p,{value:"help"},"Help center"),s.createElement(p,{value:"contact"},"Contact support"))))},te={globals:{imports:"import { Button, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(R,null,s.createElement(v,{asChild:!0},s.createElement(_,null,"Open menu")),s.createElement(T,null,s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{disabled:!0,value:"settings"},"Settings"),s.createElement(p,{value:"logout"},"Logout")))},ne={parameters:{layout:"centered"},tags:["!dev"],render:({})=>s.createElement(R,null,s.createElement(v,{asChild:!0},s.createElement(_,null,"Account")),s.createElement(T,null,s.createElement(x,null,s.createElement(A,null,"My account"),s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{value:"settings"},"Settings")),s.createElement(p,{value:"logout"},"Logout")))},re={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>s.createElement(R,null,s.createElement(v,{asChild:!0},s.createElement(_,null,"Default")),s.createElement(T,{createPortal:!1},s.createElement(p,{value:"profile"},"Profile"),s.createElement(p,{value:"settings"},"Settings")))};var Ge,De,He;K.parameters={...K.parameters,docs:{...(Ge=K.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  argTypes: orderControls({
    gutter: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    position: {
      control: 'select',
      options: MENU_POSITIONS,
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'MENU_POSITION'
        }
      }
    },
    sameWidth: {
      table: {
        category: CONTROL_CATEGORY.design
      },
      control: {
        type: 'boolean'
      }
    },
    triggerLabel: {
      control: 'text',
      table: {
        category: CONTROL_CATEGORY.slot,
        type: {
          summary: 'string'
        }
      }
    },
    withArrow: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.design
      }
    }
  }),
  args: {
    position: MENU_POSITION.bottom,
    triggerLabel: 'Open menu',
    withArrow: false
  },
  render: (arg: Partial<DemoArg>) => <Menu overlayConfig={{
    gutter: arg.gutter,
    position: arg.position,
    sameWidth: arg.sameWidth
  }}>
      <MenuTrigger asChild>
        <Button>
          {arg.triggerLabel}
        </Button>
      </MenuTrigger>

      <MenuContent withArrow={arg.withArrow}>
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="settings">Settings</MenuItem>
      </MenuContent>
    </Menu>
}`,...(He=(De=K.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var We,Ve,Ue;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`{
  parameters: {
    layout: 'start'
  },
  tags: ['!dev'],
  render: ({}) => <Menu open overlayConfig={{
    flip: false
  }}>
      <MenuTrigger asChild>
        <Button>
          Menu trigger
        </Button>
      </MenuTrigger>

      <MenuContent createPortal={false}>
        <MenuGroup>
          <MenuGroupLabel>My account</MenuGroupLabel>
          <MenuItem value='profile'>Profile</MenuItem>
          <MenuItem value='settings'>Settings</MenuItem>
        </MenuGroup>
        <MenuItem value='logout'>Logout</MenuItem>
      </MenuContent>
    </Menu>
}`,...(Ue=(Ve=Q.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var Be,Fe,je;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Menu>
      <MenuTrigger asChild>
        <Button>
          Open menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="settings">Settings</MenuItem>
        <MenuItem value='logout'>Logout</MenuItem>
      </MenuContent>
    </Menu>
}`,...(je=(Fe=Z.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var qe,$e,Ye;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, ICON_NAME, Icon, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';
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
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <Button onClick={toggleMenu}>
          Toggle menu
        </Button>

        <Menu open={isOpen}>
          <MenuTrigger asChild>
            <Icon name={ICON_NAME.ellipsisVertical} />
          </MenuTrigger>
          <MenuContent>
            <MenuItem value='profile'>Profile</MenuItem>
            <MenuItem value='settings'>Settings</MenuItem>
            <MenuItem value='logout'>Logout</MenuItem>
          </MenuContent>
        </Menu>
      </>;
  }
}`,...(Ye=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source}}};var Xe,Ke,Qe;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Menu, MenuContent, MenuItem, MenuSubmenu, MenuTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Menu>
      <MenuTrigger asChild>
        <Button>
          Open menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value='new'>New</MenuItem>
        <MenuItem value='open'>Open</MenuItem>
        <MenuSubmenu>
          <MenuTrigger>Share</MenuTrigger>
          <MenuContent>
            <MenuItem value='email'>Email</MenuItem>
            <MenuItem value='message'>Message</MenuItem>
          </MenuContent>
        </MenuSubmenu>
      </MenuContent>
    </Menu>
}`,...(Qe=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ze,Je,ze;ee.parameters={...ee.parameters,docs:{...(Ze=ee.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Menu, MenuContent, MenuGroup, MenuGroupLabel, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Menu>
      <MenuTrigger asChild>
        <Button>
          Open menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuGroupLabel>Account</MenuGroupLabel>
          <MenuItem value='profile'>Profile</MenuItem>
          <MenuItem value='billing'>Billing</MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuGroupLabel>Support</MenuGroupLabel>
          <MenuItem value='help'>Help center</MenuItem>
          <MenuItem value='contact'>Contact support</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
}`,...(ze=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:ze.source}}};var et,tt,nt;te.parameters={...te.parameters,docs:{...(et=te.parameters)==null?void 0:et.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Menu>
      <MenuTrigger asChild>
        <Button>
          Open menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem disabled value="settings">Settings</MenuItem>
        <MenuItem value="logout">Logout</MenuItem>
      </MenuContent>
    </Menu>
}`,...(nt=(tt=te.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var rt,ot,it;ne.parameters={...ne.parameters,docs:{...(rt=ne.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => <Menu>
      <MenuTrigger asChild>
        <Button>
          Account
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuGroupLabel>My account</MenuGroupLabel>
          <MenuItem value='profile'>Profile</MenuItem>
          <MenuItem value='settings'>Settings</MenuItem>
        </MenuGroup>
        <MenuItem value='logout'>Logout</MenuItem>
      </MenuContent>
    </Menu>
}`,...(it=(ot=ne.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var at,st,ut;re.parameters={...re.parameters,docs:{...(at=re.parameters)==null?void 0:at.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <Menu>
      <MenuTrigger asChild>
        <Button>
            Default
        </Button>
      </MenuTrigger>
      <MenuContent createPortal={false}>
        <MenuItem value='profile'>Profile</MenuItem>
        <MenuItem value='settings'>Settings</MenuItem>
      </MenuContent>
    </Menu>
}`,...(ut=(st=re.parameters)==null?void 0:st.docs)==null?void 0:ut.source}}};const zn=["Demo","AnatomyTech","Default","Controlled","Nested","Group","Disabled","Overview","ThemeGenerator"],hr=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:Q,Controlled:J,Default:Z,Demo:K,Disabled:te,Group:ee,Nested:z,Overview:ne,ThemeGenerator:re,__namedExportsOrder:zn,default:Jn},Symbol.toStringTag,{value:"Module"}));export{Q as A,J as C,Z as D,ee as G,hr as M,z as N,ne as O,te as a};
