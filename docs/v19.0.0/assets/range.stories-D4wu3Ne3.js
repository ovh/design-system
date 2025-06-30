import{r as f,e as o}from"./index-D_CmzhJ4.js";import{u as qe,c as ht,F as vt}from"./FormFieldLabel-DjB85afw.js";import{j as m}from"./jsx-runtime-VM66peLj.js";import{c as H}from"./index-CkQHsVsO.js";import{b as bt,T as yt,a as xt}from"./TooltipTrigger-DmpQ7Q38.js";import{c as Be,Q as I,R as C,a as J,T as Tt,a0 as Vt,$ as Rt,W as c,ai as Et,am as _t,ag as St,aj as Pt,al as It,Y as Ct,a6 as kt,aF as Ge,aG as Z,aH as We,aI as ie,aJ as X,K as ze,H as wt,aK as W,r as At,ac as Ft,aB as Ot,aL as Nt,aM as Dt,aa as Mt,h as jt,aN as He,ar as K,aO as Lt,aP as Ut,aQ as $t,aR as qt,aS as Bt,aw as Gt,u as Wt,U as zt,L as Ht,V as Kt}from"./use-locale-context-BQVaQ0H3.js";import{e as Xt,o as Yt,C as z}from"./controls-BtiQQn1l.js";import{s as Qt}from"./source-d0g_Nd0q.js";const[Jt,k]=Be({name:"SliderContext",hookName:"useSliderContext",providerName:"<SliderProvider />"}),Ke=f.forwardRef((e,t)=>{const a=k(),n=I(a.getControlProps(),e);return m.jsx(C.div,{...n,ref:t})});Ke.displayName="SliderControl";const[Zt,en]=Be({name:"SliderThumbPropsContext",hookName:"useSliderThumbPropsContext",providerName:"<SliderThumbPropsProvider />"}),Xe=f.forwardRef((e,t)=>{const a=k(),n=en(),s=I(a.getHiddenInputProps(n),e);return m.jsx(C.input,{...s,ref:t})});Xe.displayName="SliderHiddenInput";const Ye=f.forwardRef((e,t)=>{const[a,n]=J()(e,["value"]),s=k(),r=I(s.getMarkerProps(a),n);return m.jsx(C.span,{...r,ref:t})});Ye.displayName="SliderMarker";const Qe=f.forwardRef((e,t)=>{const a=k(),n=I(a.getMarkerGroupProps(),e);return m.jsx(C.div,{...n,ref:t})});Qe.displayName="SliderMarkerGroup";const Je=f.forwardRef((e,t)=>{const a=k(),n=I(a.getRangeProps(),e);return m.jsx(C.div,{...n,ref:t})});Je.displayName="SliderRange";var tn=Tt("slider").parts("root","label","thumb","valueText","track","range","control","markerGroup","marker","draggingIndicator"),_=tn.build(),Ze=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`slider:${e.id}`},et=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.thumb)==null?void 0:n.call(a,t))??`slider:${e.id}:thumb:${t}`},Y=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.hiddenInput)==null?void 0:n.call(a,t))??`slider:${e.id}:input:${t}`},tt=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`slider:${e.id}:control`},nn=e=>{var t;return((t=e.ids)==null?void 0:t.track)??`slider:${e.id}:track`},an=e=>{var t;return((t=e.ids)==null?void 0:t.range)??`slider:${e.id}:range`},le=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`slider:${e.id}:label`},rn=e=>{var t;return((t=e.ids)==null?void 0:t.valueText)??`slider:${e.id}:value-text`},sn=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.marker)==null?void 0:n.call(a,t))??`slider:${e.id}:marker:${t}`},on=e=>e.getById(Ze(e)),ln=(e,t)=>e.getById(et(e,t)),nt=e=>kt(rt(e),"[role=slider]"),dn=e=>nt(e)[0],at=(e,t)=>e.getById(Y(e,t)),rt=e=>e.getById(tt(e)),de=(e,t)=>{const{prop:a,scope:n}=e,s=rt(n);if(!s)return;const i=$t(t,s).getPercentValue({orientation:a("orientation"),dir:a("dir"),inverted:{y:!0}});return Ge(i,a("min"),a("max"),a("step"))},un=(e,t)=>{t.forEach((a,n)=>{const s=at(e,n);s&&Bt(s,{value:a})})},cn=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0});function mn(e){const t=e[0],a=e[e.length-1];return[t,a]}function gn(e){const{prop:t,computed:a}=e,n=a("valuePercent"),[s,r]=mn(n);if(n.length===1){if(t("origin")==="center"){const i=n[0]<50,d=i?`${n[0]}%`:"50%",h=i?"50%":`${100-n[0]}%`;return{start:d,end:h}}return t("origin")==="end"?{start:`${r}%`,end:"0%"}:{start:"0%",end:`${100-r}%`}}return{start:`${s}%`,end:`${100-r}%`}}function pn(e){const{computed:t}=e,a=t("isVertical"),n=t("isRtl");return a?{position:"absolute",bottom:"var(--slider-range-start)",top:"var(--slider-range-end)"}:{position:"absolute",[n?"right":"left"]:"var(--slider-range-start)",[n?"left":"right"]:"var(--slider-range-end)"}}function fn(e,t){const{context:a,prop:n}=e,{height:s=0}=a.get("thumbSize")??{},r=X([n("min"),n("max")],[-s/2,s/2]);return parseFloat(r(t).toFixed(2))}function hn(e,t){const{computed:a,context:n,prop:s}=e,{width:r=0}=n.get("thumbSize")??{};if(a("isRtl")){const h=X([s("max"),s("min")],[-r/2,r/2]);return-1*parseFloat(h(t).toFixed(2))}const d=X([s("min"),s("max")],[-r/2,r/2]);return parseFloat(d(t).toFixed(2))}function vn(e,t,a){const{computed:n,prop:s}=e;if(s("thumbAlignment")==="center")return`${t}%`;const r=n("isVertical")?fn(e,a):hn(e,a);return`calc(${t}% - ${r}px)`}function st(e,t){const{prop:a}=e,n=Z(t,a("min"),a("max"))*100;return vn(e,n,t)}function ot(e){const{computed:t,prop:a}=e;let n="visible";return a("thumbAlignment")==="contain"&&!t("hasMeasuredThumbSize")&&(n="hidden"),n}function ue(e,t){const{computed:a}=e,n=a("isVertical")?"bottom":"insetInlineStart";return{visibility:ot(e),position:"absolute",transform:"var(--slider-thumb-transform)",[n]:`var(--slider-thumb-offset-${t})`}}function bn(){return{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",position:"relative"}}function yn(e){const{context:t,computed:a}=e,n=a("isVertical"),s=a("isRtl"),r=gn(e),i=t.get("thumbSize");return{...t.get("value").reduce((h,T,b)=>{const R=st(e,T);return{...h,[`--slider-thumb-offset-${b}`]:R}},{}),"--slider-thumb-width":ie(i==null?void 0:i.width),"--slider-thumb-height":ie(i==null?void 0:i.height),"--slider-thumb-transform":n?"translateY(50%)":s?"translateX(50%)":"translateX(-50%)","--slider-range-start":r.start,"--slider-range-end":r.end}}function xn(e,t){const{computed:a}=e,n=a("isHorizontal"),s=a("isRtl");return{visibility:ot(e),position:"absolute",pointerEvents:"none",[n?"insetInlineStart":"bottom"]:st(e,t),translate:"var(--tx) var(--ty)","--tx":n?s?"50%":"-50%":"0%","--ty":n?"0%":"50%"}}function Tn(){return{userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none",position:"relative"}}function Vn(e,t){return t.map((a,n)=>Q(e,a,n))}function P(e,t){const{context:a,prop:n}=e,s=n("step")*n("minStepsBetweenThumbs");return We(a.get("value"),n("min"),n("max"),s)[t]}function Q(e,t,a){const{prop:n}=e,s=P(e,a),r=He(t,n("min"),n("max"),n("step"));return K(r,s.min,s.max)}function Rn(e,t,a){const{context:n,prop:s}=e,r=t??n.get("focusedIndex"),i=P(e,r),d=Ut(r,{...i,step:a??s("step"),values:n.get("value")});return d[r]=K(d[r],i.min,i.max),d}function En(e,t,a){const{context:n,prop:s}=e,r=t??n.get("focusedIndex"),i=P(e,r),d=Lt(r,{...i,step:a??s("step"),values:n.get("value")});return d[r]=K(d[r],i.min,i.max),d}function _n(e,t){const{context:a}=e;return qt(a.get("value"),t)}function Sn(e,t){const{state:a,send:n,context:s,prop:r,computed:i,scope:d}=e,h=r("aria-label"),T=r("aria-labelledby"),b=s.get("value"),R=s.get("focusedIndex"),v=a.matches("focus"),g=a.matches("dragging"),V=i("isDisabled"),y=r("invalid"),E=i("isInteractive"),F=r("orientation")==="horizontal",w=r("orientation")==="vertical";function O(l){return Z(l,r("min"),r("max"))}function ae(l){return Ge(l,r("min"),r("max"),r("step"))}return{value:b,dragging:g,focused:v,setValue(l){n({type:"SET_VALUE",value:l})},getThumbValue(l){return b[l]},setThumbValue(l,u){n({type:"SET_VALUE",index:l,value:u})},getValuePercent:O,getPercentValue:ae,getThumbPercent(l){return O(b[l])},setThumbPercent(l,u){const x=ae(u);n({type:"SET_VALUE",index:l,value:x})},getThumbMin(l){return P(e,l).min},getThumbMax(l){return P(e,l).max},increment(l){n({type:"INCREMENT",index:l})},decrement(l){n({type:"DECREMENT",index:l})},focus(){E&&n({type:"FOCUS",index:0})},getLabelProps(){return t.label({..._.label.attrs,dir:r("dir"),"data-disabled":c(V),"data-orientation":r("orientation"),"data-invalid":c(y),"data-dragging":c(g),"data-focus":c(v),id:le(d),htmlFor:Y(d,0),onClick(l){var u;E&&(l.preventDefault(),(u=dn(d))==null||u.focus())},style:{userSelect:"none",WebkitUserSelect:"none"}})},getRootProps(){return t.element({..._.root.attrs,"data-disabled":c(V),"data-orientation":r("orientation"),"data-dragging":c(g),"data-invalid":c(y),"data-focus":c(v),id:Ze(d),dir:r("dir"),style:yn(e)})},getValueTextProps(){return t.element({..._.valueText.attrs,dir:r("dir"),"data-disabled":c(V),"data-orientation":r("orientation"),"data-invalid":c(y),"data-focus":c(v),id:rn(d)})},getTrackProps(){return t.element({..._.track.attrs,dir:r("dir"),id:nn(d),"data-disabled":c(V),"data-invalid":c(y),"data-dragging":c(g),"data-orientation":r("orientation"),"data-focus":c(v),style:{position:"relative"}})},getThumbProps(l){var se;const{index:u=0,name:x}=l,ut=b[u],re=P(e,u),ct=(se=r("getAriaValueText"))==null?void 0:se({value:ut,index:u}),mt=Array.isArray(h)?h[u]:h,gt=Array.isArray(T)?T[u]:T;return t.element({..._.thumb.attrs,dir:r("dir"),"data-index":u,"data-name":x,id:et(d,u),"data-disabled":c(V),"data-orientation":r("orientation"),"data-focus":c(v&&R===u),"data-dragging":c(g&&R===u),draggable:!1,"aria-disabled":Pt(V),"aria-label":mt,"aria-labelledby":gt??le(d),"aria-orientation":r("orientation"),"aria-valuemax":re.max,"aria-valuemin":re.min,"aria-valuenow":b[u],"aria-valuetext":ct,role:"slider",tabIndex:V?void 0:0,style:ue(e,u),onPointerDown(S){E&&(n({type:"THUMB_POINTER_DOWN",index:u}),S.stopPropagation())},onBlur(){E&&n({type:"BLUR"})},onFocus(){E&&n({type:"FOCUS",index:u})},onKeyDown(S){if(S.defaultPrevented||!E)return;const A=It(S)*r("step"),pt={ArrowUp(){F||n({type:"ARROW_INC",step:A,src:"ArrowUp"})},ArrowDown(){F||n({type:"ARROW_DEC",step:A,src:"ArrowDown"})},ArrowLeft(){w||n({type:"ARROW_DEC",step:A,src:"ArrowLeft"})},ArrowRight(){w||n({type:"ARROW_INC",step:A,src:"ArrowRight"})},PageUp(){n({type:"ARROW_INC",step:A,src:"PageUp"})},PageDown(){n({type:"ARROW_DEC",step:A,src:"PageDown"})},Home(){n({type:"HOME"})},End(){n({type:"END"})}},ft=Ct(S,{dir:r("dir"),orientation:r("orientation")}),oe=pt[ft];oe&&(oe(S),S.preventDefault(),S.stopPropagation())}})},getHiddenInputProps(l){const{index:u=0,name:x}=l;return t.input({name:x??(r("name")?r("name")+(b.length>1?"[]":""):void 0),form:r("form"),type:"text",hidden:!0,defaultValue:b[u],id:Y(d,u)})},getRangeProps(){return t.element({id:an(d),..._.range.attrs,dir:r("dir"),"data-dragging":c(g),"data-focus":c(v),"data-invalid":c(y),"data-disabled":c(V),"data-orientation":r("orientation"),style:pn(e)})},getControlProps(){return t.element({..._.control.attrs,dir:r("dir"),id:tt(d),"data-dragging":c(g),"data-disabled":c(V),"data-orientation":r("orientation"),"data-invalid":c(y),"data-focus":c(v),style:bn(),onPointerDown(l){if(!E||!Et(l)||_t(l))return;const u=St(l);n({type:"POINTER_DOWN",point:u}),l.preventDefault(),l.stopPropagation()}})},getMarkerGroupProps(){return t.element({..._.markerGroup.attrs,role:"presentation",dir:r("dir"),"aria-hidden":!0,"data-orientation":r("orientation"),style:Tn()})},getMarkerProps(l){const u=xn(e,l.value);let x;return l.value<Vt(b)?x="under-value":l.value>Rt(b)?x="over-value":x="at-value",t.element({..._.marker.attrs,id:sn(d,l.value),role:"presentation",dir:r("dir"),"data-orientation":r("orientation"),"data-value":l.value,"data-disabled":c(V),"data-state":x,style:u})},getDraggingIndicatorProps(l){const{index:u=0}=l,x=u===R&&g;return t.element({..._.draggingIndicator.attrs,role:"presentation",dir:r("dir"),hidden:!x,"data-orientation":r("orientation"),"data-state":x?"open":"closed",style:ue(e,u)})}}}var Pn=(e,t)=>(e==null?void 0:e.width)===(t==null?void 0:t.width)&&(e==null?void 0:e.height)===(t==null?void 0:t.height),ce=(e,t,a,n,s)=>We(e,t,a,s*n).map(i=>{const d=He(i.value,i.min,i.max,n),h=K(d,i.min,i.max);if(!Gt(h,t,a))throw new Error("[zag-js/slider] The configured `min`, `max`, `step` or `minStepsBetweenThumbs` values are invalid");return h}),In=wt({props({props:e}){const t=e.min??0,a=e.max??100,n=e.step??1,s=e.defaultValue??[t],r=e.minStepsBetweenThumbs??0;return{dir:"ltr",thumbAlignment:"contain",origin:"start",orientation:"horizontal",minStepsBetweenThumbs:r,...e,defaultValue:ce(s,t,a,n,r),value:e.value?ce(e.value,t,a,n,r):void 0,max:a,step:n,min:t}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{thumbSize:t(()=>({defaultValue:e("thumbSize")||null})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:jt,hash(n){return n.join(",")},onChange(n){var s;(s=e("onValueChange"))==null||s({value:n})}})),focusedIndex:t(()=>({defaultValue:-1,onChange(n){var r;const s=a();(r=e("onFocusChange"))==null||r({focusedIndex:n,value:s.get("value")})}})),fieldsetDisabled:t(()=>({defaultValue:!1}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal",isVertical:({prop:e})=>e("orientation")==="vertical",isRtl:({prop:e})=>e("orientation")==="horizontal"&&e("dir")==="rtl",isDisabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled"),isInteractive:({prop:e,computed:t})=>!(e("readOnly")||t("isDisabled")),hasMeasuredThumbSize:({context:e})=>e.get("thumbSize")!=null,valuePercent({context:e,prop:t}){return e.get("value").map(a=>100*Z(a,t("min"),t("max")))}},watch({track:e,action:t,context:a}){e([()=>a.hash("value")],()=>{t(["syncInputElements","dispatchChangeEvent"])})},effects:["trackFormControlState","trackThumbSize"],on:{SET_VALUE:[{guard:"hasIndex",actions:["setValueAtIndex"]},{actions:["setValue"]}],INCREMENT:{actions:["incrementThumbAtIndex"]},DECREMENT:{actions:["decrementThumbAtIndex"]}},states:{idle:{on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},FOCUS:{target:"focus",actions:["setFocusedIndex"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]}}},focus:{entry:["focusActiveThumb"],on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]},ARROW_DEC:{actions:["decrementThumbAtIndex","invokeOnChangeEnd"]},ARROW_INC:{actions:["incrementThumbAtIndex","invokeOnChangeEnd"]},HOME:{actions:["setFocusedThumbToMin","invokeOnChangeEnd"]},END:{actions:["setFocusedThumbToMax","invokeOnChangeEnd"]},BLUR:{target:"idle",actions:["clearFocusedIndex"]}}},dragging:{entry:["focusActiveThumb"],effects:["trackPointerMove"],on:{POINTER_UP:{target:"focus",actions:["invokeOnChangeEnd"]},POINTER_MOVE:{actions:["setPointerValue"]}}}},implementations:{guards:{hasIndex:({event:e})=>e.index!=null},effects:{trackFormControlState({context:e,scope:t}){return Mt(on(t),{onFieldsetDisabledChange(a){e.set("fieldsetDisabled",a)},onFormReset(){e.set("value",e.initial("value"))}})},trackPointerMove({scope:e,send:t}){return Dt(e.getDoc(),{onPointerMove(a){t({type:"POINTER_MOVE",point:a.point})},onPointerUp(){t({type:"POINTER_UP"})}})},trackThumbSize({context:e,scope:t,prop:a}){if(!(a("thumbAlignment")!=="contain"||a("thumbSize")))return Ot(nt(t),{box:"border-box",measure(n){return cn(n)},onEntry({rects:n}){if(n.length===0)return;const s=Nt(n[0],["width","height"]);Pn(e.get("thumbSize"),s)||e.set("thumbSize",s)}})}},actions:{dispatchChangeEvent({context:e,scope:t}){un(t,e.get("value"))},syncInputElements({context:e,scope:t}){e.get("value").forEach((a,n)=>{const s=at(t,n);Ft(s,a.toString())})},invokeOnChangeEnd({prop:e,context:t}){queueMicrotask(()=>{var a;(a=e("onValueChangeEnd"))==null||a({value:t.get("value")})})},setClosestThumbIndex(e){const{context:t,event:a}=e,n=de(e,a.point);if(n==null)return;const s=_n(e,n);t.set("focusedIndex",s)},setFocusedIndex({context:e,event:t}){e.set("focusedIndex",t.index)},clearFocusedIndex({context:e}){e.set("focusedIndex",-1)},setPointerValue(e){queueMicrotask(()=>{const{context:t,event:a}=e,n=de(e,a.point);if(n==null)return;const s=t.get("focusedIndex"),r=Q(e,n,s);t.set("value",i=>W(i,s,r))})},focusActiveThumb({scope:e,context:t}){At(()=>{const a=ln(e,t.get("focusedIndex"));a==null||a.focus({preventScroll:!0})})},decrementThumbAtIndex(e){const{context:t,event:a}=e,n=Rn(e,a.index,a.step);t.set("value",n)},incrementThumbAtIndex(e){const{context:t,event:a}=e,n=En(e,a.index,a.step);t.set("value",n)},setFocusedThumbToMin(e){const{context:t}=e,a=t.get("focusedIndex"),{min:n}=P(e,a);t.set("value",s=>W(s,a,n))},setFocusedThumbToMax(e){const{context:t}=e,a=t.get("focusedIndex"),{max:n}=P(e,a);t.set("value",s=>W(s,a,n))},setValueAtIndex(e){const{context:t,event:a}=e,n=Q(e,a.value,a.index);t.set("value",s=>W(s,a.index,n))},setValue(e){const{context:t,event:a}=e,n=Vn(e,a.value);t.set("value",n)}}}});ze()(["aria-label","aria-labelledby","dir","disabled","form","getAriaValueText","getRootNode","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value","defaultValue"]);ze()(["index","name"]);const Cn=e=>{const t=f.useId(),{getRootNode:a}=Wt(),{dir:n}=zt(),s={id:t,dir:n,getRootNode:a,...e},r=Ht(In,s);return Sn(r,Kt)},it=f.forwardRef((e,t)=>{const[a,n]=J()(e,["aria-label","aria-labelledby","defaultValue","disabled","form","getAriaValueText","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value"]),s=Cn(a),r=I(s.getRootProps(),n);return m.jsx(Jt,{value:s,children:m.jsx(C.div,{...r,ref:t})})});it.displayName="SliderRoot";const lt=f.forwardRef((e,t)=>{const[a,n]=J()(e,["index","name"]),s=k(),r=I(s.getThumbProps(a),n);return m.jsx(Zt,{value:a,children:m.jsx(C.div,{...r,ref:t})})});lt.displayName="SliderThumb";const dt=f.forwardRef((e,t)=>{const a=k(),n=I(a.getTrackProps(),e);return m.jsx(C.div,{...n,ref:t})});dt.displayName="SliderTrack";const me={"range-bounds":"_range-bounds_c032r_2","range-bounds--disabled":"_range-bounds--disabled_c032r_9"},ee=({disabled:e,max:t,min:a})=>m.jsxs("div",{className:H(me["range-bounds"],{[me["range-bounds--disabled"]]:e}),children:[m.jsx("span",{children:a}),m.jsx("span",{children:t})]});ee.displayName="RangeBounds";ee.__docgenInfo={description:"",methods:[],displayName:"RangeBounds",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},max:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""}}};const ge={"range-thumb":"_range-thumb_1tiq7_2","range-thumb--invalid":"_range-thumb--invalid_1tiq7_26"},te=({disabled:e,index:t,invalid:a})=>{const n=f.useRef(null),s=qe(),{value:r}=k(),[i,d]=f.useState(!1),[h,T]=f.useState(!1);function b(){d(!1),T(!1)}function R(){d(!0),T(!0)}function v(g){(g.ctrlKey||g.metaKey)&&(g.key==="ArrowRight"||g.key==="ArrowLeft")&&g.preventDefault()}return m.jsxs(bt,{open:!e&&(i||h),children:[m.jsx(yt,{asChild:!0,children:m.jsx(lt,{"aria-invalid":a,"aria-describedby":s==null?void 0:s.ariaDescribedBy,"aria-labelledby":t===0?s==null?void 0:s.labelId:void 0,className:H(ge["range-thumb"],{[ge["range-thumb--invalid"]]:a}),index:t,onBlur:b,onChange:()=>{var g;return(g=n.current)==null?void 0:g.focus()},onFocus:R,onKeyDown:v,onMouseLeave:()=>T(!1),onMouseOver:()=>T(!0),ref:n,children:m.jsx(Xe,{})})}),m.jsx(xt,{withArrow:!0,children:r[t]})]})};te.displayName="RangeThumb";te.__docgenInfo={description:"",methods:[],displayName:"RangeThumb",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""}}};const pe={"range-track":"_range-track_137lt_2","range-track__filled":"_range-track__filled_137lt_8"},ne=()=>m.jsx(dt,{className:pe["range-track"],children:m.jsx(Je,{className:pe["range-track__filled"]})});ne.displayName="RangeTrack";ne.__docgenInfo={description:"",methods:[],displayName:"RangeTrack"};const kn="_range__control_75t60_2",wn="_range__ticks_75t60_7",An="_range__ticks__tick_75t60_10",N={range__control:kn,range__ticks:wn,range__ticks__tick:An,"range__ticks__tick--single-mode":"_range__ticks__tick--single-mode_75t60_18"},p=f.forwardRef(({className:e,defaultValue:t,disabled:a,id:n,invalid:s,max:r=100,min:i=0,name:d,onDragging:h,onValueChange:T,step:b=1,ticks:R,value:v,...g},V)=>{const y=qe(),E=f.useMemo(()=>s||(y==null?void 0:y.invalid),[y,s]),F=f.useMemo(()=>v&&v.length?v.length:t&&t.length?t.length:1,[t,v]);return m.jsxs(it,{"aria-label":g["aria-label"],"aria-labelledby":g["aria-labelledby"],className:H(N.range,e),defaultValue:t,disabled:a,id:n||(y==null?void 0:y.id),invalid:E,max:r,min:i,minStepsBetweenThumbs:1,name:d,orientation:"horizontal",onValueChange:h,onValueChangeEnd:T,ref:V,step:b,thumbSize:{height:16,width:16},value:v,...g,children:[m.jsxs(Ke,{className:N.range__control,children:[m.jsx(ne,{}),Array.from({length:F}).map((w,O)=>m.jsx(te,{disabled:a,index:O,invalid:E},O))]}),R&&R.length>0&&m.jsx(Qe,{className:N.range__ticks,children:R.map(w=>m.jsx(Ye,{className:H(N.range__ticks__tick,{[N["range__ticks__tick--single-mode"]]:F<=1}),value:w},w))}),m.jsx(ee,{disabled:a,max:r,min:i})]})});p.displayName="Range";p.__docgenInfo={description:"",methods:[],displayName:"Range",props:{"aria-label":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The aria-label of each slider thumb. Useful for providing an accessible name to the slider."},"aria-labelledby":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The id of the elements that labels each slider thumb. Useful for providing an accessible name to the slider."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The initial selected value(s). Use when you don't need to control the value(s) of the range."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},max:{required:!1,tsType:{name:"number"},description:"The maximum value that can be selected.",defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"The minimum value that can be selected.",defaultValue:{value:"0",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onDragging:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb moves."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb is released."},step:{required:!1,tsType:{name:"number"},description:"The amount to increment or decrement the value by.",defaultValue:{value:"1",computed:!1}},ticks:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"List of tick indicators to display alongside the range."},value:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The controlled selected value(s)."}},composes:["Omit"]};const Fn={argTypes:Xt(["aria-label","aria-labelledby","defaultValue","max","min","name","onDragging","onValueChange","ticks","value"]),component:p,title:"React Components/Range"},D={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",justifyContent:"center",height:"80vh"}},e())],render:({dualRange:e,...t})=>{const[n,s]=f.useState([0]);return f.useEffect(()=>{if(e){const r=t.step||1,i=n[0]===100?n[0]-r:n[0];s([i,i+r])}else s([n[0]])},[e]),o.createElement(p,{...t,max:100,onDragging:({value:r})=>s(r),value:n})},argTypes:Yt({disabled:{table:{category:z.general},control:{type:"boolean"}},dualRange:{table:{category:z.general,type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{table:{category:z.general},control:"boolean"},step:{table:{category:z.general},control:"number"}})},M={tags:["!dev"],parameters:{docs:{source:{...Qt()}}},render:({})=>{const[e,t]=f.useState(),[a,n]=f.useState();function s(i){t(i.value[0])}function r(i){n(i.value[0])}return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement("span",null,"Final value: ",a),o.createElement("br",null),o.createElement("span",null,"Dragged value: ",e)),o.createElement(p,{onDragging:s,onValueChange:r,value:e?[e]:void 0}))}},j={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,null),o.createElement(p,{defaultValue:[50,75]}))},L={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{defaultValue:[20],disabled:!0}),o.createElement(p,{defaultValue:[50,75],disabled:!0}))},U={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(ht,null,o.createElement(vt,null,"Range:"),o.createElement(p,null))},$={tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement("p",null,"Max 500"),o.createElement(p,{defaultValue:[50],max:500}),o.createElement(p,{defaultValue:[50,75],max:500}),o.createElement("p",null,"Min 25"),o.createElement(p,{defaultValue:[50],min:25}),o.createElement(p,{defaultValue:[50,75],min:25}),o.createElement("p",null,"Max 75 & Min 25"),o.createElement(p,{defaultValue:[50],max:75,min:25}),o.createElement(p,{defaultValue:[50,75],max:75,min:25}))},q={decorators:[e=>o.createElement("div",{style:{width:"160px"}},e())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>o.createElement(p,{defaultValue:[50]})},B={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{defaultValue:[20],step:5}),o.createElement(p,{defaultValue:[50,75],step:5}))},G={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{defaultValue:[20],ticks:[10,20,30,40,50,60,70,80,90]}),o.createElement(p,{defaultValue:[50,75],ticks:[10,20,30,40,50,60,70,80,90]}))};var fe,he,ve;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    height: '80vh'
  }}>{story()}</div>],
  render: ({
    dualRange,
    ...arg
  }: DemoArg) => {
    const MAX_VALUE = 100;
    const [values, setValues] = useState([0]);
    useEffect(() => {
      if (dualRange) {
        const step = arg.step || 1;
        const newValue = values[0] === MAX_VALUE ? values[0] - step : values[0];
        setValues([newValue, newValue + step]);
      } else {
        setValues([values[0]]);
      }
    }, [dualRange]);
    return <Range {...arg} max={MAX_VALUE} onDragging={({
      value
    }) => setValues(value)} value={values} />;
  },
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    dualRange: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    }
  })
}`,...(ve=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var be,ye,xe;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [draggingValue, setDraggingValue] = useState<number>();
    const [value, setValue] = useState<number>();
    function onDragging(detail: RangeValueChangeDetail) {
      setDraggingValue(detail.value[0]);
    }
    function onValueChange(detail: RangeValueChangeDetail) {
      setValue(detail.value[0]);
    }
    return <>
        <p>
          <span>Final value: {value}</span>
          <br />
          <span>Dragged value: {draggingValue}</span>
        </p>

        <Range onDragging={onDragging} onValueChange={onValueChange} value={draggingValue ? [draggingValue] : undefined} />
      </>;
  }
}`,...(xe=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Te,Ve,Re;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Range />

      <Range defaultValue={[50, 75]} />
    </>
}`,...(Re=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var Ee,_e,Se;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Range defaultValue={[20]} disabled />

      <Range defaultValue={[50, 75]} disabled />
    </>
}`,...(Se=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Se.source}}};var Pe,Ie,Ce;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Range:
      </FormFieldLabel>

      <Range />
    </FormField>
}`,...(Ce=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var ke,we,Ae;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <p>Max 500</p>
      <Range defaultValue={[50]} max={500} />
      <Range defaultValue={[50, 75]} max={500} />

      <p>Min 25</p>
      <Range defaultValue={[50]} min={25} />
      <Range defaultValue={[50, 75]} min={25} />

      <p>Max 75 & Min 25</p>
      <Range defaultValue={[50]} max={75} min={25} />
      <Range defaultValue={[50, 75]} max={75} min={25} />
    </>
}`,...(Ae=(we=$.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Fe,Oe,Ne;q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    width: '160px'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Range defaultValue={[50]} />
}`,...(Ne=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var De,Me,je;B.parameters={...B.parameters,docs:{...(De=B.parameters)==null?void 0:De.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Range defaultValue={[20]} step={5} />

      <Range defaultValue={[50, 75]} step={5} />
    </>
}`,...(je=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var Le,Ue,$e;G.parameters={...G.parameters,docs:{...(Le=G.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Range defaultValue={[20]} ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90]} />

      <Range defaultValue={[50, 75]} ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90]} />
    </>
}`,...($e=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};const On=["Demo","Controlled","Default","Disabled","InFormField","MaxMin","Overview","Step","Ticks"],Bn=Object.freeze(Object.defineProperty({__proto__:null,Controlled:M,Default:j,Demo:D,Disabled:L,InFormField:U,MaxMin:$,Overview:q,Step:B,Ticks:G,__namedExportsOrder:On,default:Fn},Symbol.toStringTag,{value:"Module"}));export{M as C,j as D,U as I,$ as M,q as O,Bn as R,B as S,G as T,L as a};
