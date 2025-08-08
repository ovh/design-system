import{r as f,e as o}from"./index-D_CmzhJ4.js";import{u as nt,F as Q,a as J}from"./FormFieldLabel-DQkMrZpp.js";import{j as m}from"./jsx-runtime-VM66peLj.js";import{c as Y}from"./index-CkQHsVsO.js";import{b as kt,T as At,a as wt}from"./TooltipTrigger--1kPNsOd.js";import{c as at,Q as P,R as C,a as ae,T as Ot,a0 as Dt,$ as Nt,W as c,ab as Mt,af as Lt,a9 as jt,ac as Ut,ae as $t,Y as qt,a6 as Bt,aF as rt,aG as re,aH as st,aI as me,aJ as ee,K as ot,H as Gt,aK as K,r as Wt,a7 as zt,ax as Ht,aL as Kt,aM as Xt,ap as Yt,h as Qt,aN as it,ak as Z,aO as Jt,aP as Zt,aQ as en,aR as tn,aS as nn,aq as an,u as rn,U as sn,L as on,V as ln}from"./use-locale-context-DLC4Hyvy.js";import{T as dn}from"./Text-B1XN51Xz.js";import{e as un,o as cn,C as X}from"./controls-BtiQQn1l.js";import{s as lt}from"./source-d0g_Nd0q.js";const[mn,I]=at({name:"SliderContext",hookName:"useSliderContext",providerName:"<SliderProvider />"}),dt=f.forwardRef((e,t)=>{const n=I(),a=P(n.getControlProps(),e);return m.jsx(C.div,{...a,ref:t})});dt.displayName="SliderControl";const[gn,pn]=at({name:"SliderThumbPropsContext",hookName:"useSliderThumbPropsContext",providerName:"<SliderThumbPropsProvider />"}),ut=f.forwardRef((e,t)=>{const n=I(),a=pn(),s=P(n.getHiddenInputProps(a),e);return m.jsx(C.input,{...s,ref:t})});ut.displayName="SliderHiddenInput";const ct=f.forwardRef((e,t)=>{const[n,a]=ae()(e,["value"]),s=I(),r=P(s.getMarkerProps(n),a);return m.jsx(C.span,{...r,ref:t})});ct.displayName="SliderMarker";const mt=f.forwardRef((e,t)=>{const n=I(),a=P(n.getMarkerGroupProps(),e);return m.jsx(C.div,{...a,ref:t})});mt.displayName="SliderMarkerGroup";const gt=f.forwardRef((e,t)=>{const n=I(),a=P(n.getRangeProps(),e);return m.jsx(C.div,{...a,ref:t})});gt.displayName="SliderRange";var fn=Ot("slider").parts("root","label","thumb","valueText","track","range","control","markerGroup","marker","draggingIndicator"),_=fn.build(),pt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`slider:${e.id}`},ft=(e,t)=>{var n,a;return((a=(n=e.ids)==null?void 0:n.thumb)==null?void 0:a.call(n,t))??`slider:${e.id}:thumb:${t}`},te=(e,t)=>{var n,a;return((a=(n=e.ids)==null?void 0:n.hiddenInput)==null?void 0:a.call(n,t))??`slider:${e.id}:input:${t}`},vt=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`slider:${e.id}:control`},vn=e=>{var t;return((t=e.ids)==null?void 0:t.track)??`slider:${e.id}:track`},bn=e=>{var t;return((t=e.ids)==null?void 0:t.range)??`slider:${e.id}:range`},ge=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`slider:${e.id}:label`},hn=e=>{var t;return((t=e.ids)==null?void 0:t.valueText)??`slider:${e.id}:value-text`},yn=(e,t)=>{var n,a;return((a=(n=e.ids)==null?void 0:n.marker)==null?void 0:a.call(n,t))??`slider:${e.id}:marker:${t}`},xn=e=>e.getById(pt(e)),Tn=(e,t)=>e.getById(ft(e,t)),bt=e=>Bt(yt(e),"[role=slider]"),Vn=e=>bt(e)[0],ht=(e,t)=>e.getById(te(e,t)),yt=e=>e.getById(vt(e)),pe=(e,t)=>{const{prop:n,scope:a}=e,s=yt(a);if(!s)return;const i=en(t,s).getPercentValue({orientation:n("orientation"),dir:n("dir"),inverted:{y:!0}});return rt(i,n("min"),n("max"),n("step"))},Rn=(e,t)=>{t.forEach((n,a)=>{const s=ht(e,a);s&&nn(s,{value:n})})},En=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0});function _n(e){const t=e[0],n=e[e.length-1];return[t,n]}function Sn(e){const{prop:t,computed:n}=e,a=n("valuePercent"),[s,r]=_n(a);if(a.length===1){if(t("origin")==="center"){const i=a[0]<50,d=i?`${a[0]}%`:"50%",v=i?"50%":`${100-a[0]}%`;return{start:d,end:v}}return t("origin")==="end"?{start:`${r}%`,end:"0%"}:{start:"0%",end:`${100-r}%`}}return{start:`${s}%`,end:`${100-r}%`}}function Fn(e){const{computed:t}=e,n=t("isVertical"),a=t("isRtl");return n?{position:"absolute",bottom:"var(--slider-range-start)",top:"var(--slider-range-end)"}:{position:"absolute",[a?"right":"left"]:"var(--slider-range-start)",[a?"left":"right"]:"var(--slider-range-end)"}}function Pn(e,t){const{context:n,prop:a}=e,{height:s=0}=n.get("thumbSize")??{},r=ee([a("min"),a("max")],[-s/2,s/2]);return parseFloat(r(t).toFixed(2))}function Cn(e,t){const{computed:n,context:a,prop:s}=e,{width:r=0}=a.get("thumbSize")??{};if(n("isRtl")){const v=ee([s("max"),s("min")],[-r/2,r/2]);return-1*parseFloat(v(t).toFixed(2))}const d=ee([s("min"),s("max")],[-r/2,r/2]);return parseFloat(d(t).toFixed(2))}function In(e,t,n){const{computed:a,prop:s}=e;if(s("thumbAlignment")==="center")return`${t}%`;const r=a("isVertical")?Pn(e,n):Cn(e,n);return`calc(${t}% - ${r}px)`}function xt(e,t){const{prop:n}=e,a=re(t,n("min"),n("max"))*100;return In(e,a,t)}function Tt(e){const{computed:t,prop:n}=e;let a="visible";return n("thumbAlignment")==="contain"&&!t("hasMeasuredThumbSize")&&(a="hidden"),a}function fe(e,t){const{computed:n}=e,a=n("isVertical")?"bottom":"insetInlineStart";return{visibility:Tt(e),position:"absolute",transform:"var(--slider-thumb-transform)",[a]:`var(--slider-thumb-offset-${t})`}}function kn(){return{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",position:"relative"}}function An(e){const{context:t,computed:n}=e,a=n("isVertical"),s=n("isRtl"),r=Sn(e),i=t.get("thumbSize");return{...t.get("value").reduce((v,T,h)=>{const R=xt(e,T);return{...v,[`--slider-thumb-offset-${h}`]:R}},{}),"--slider-thumb-width":me(i==null?void 0:i.width),"--slider-thumb-height":me(i==null?void 0:i.height),"--slider-thumb-transform":a?"translateY(50%)":s?"translateX(50%)":"translateX(-50%)","--slider-range-start":r.start,"--slider-range-end":r.end}}function wn(e,t){const{computed:n}=e,a=n("isHorizontal"),s=n("isRtl");return{visibility:Tt(e),position:"absolute",pointerEvents:"none",[a?"insetInlineStart":"bottom"]:xt(e,t),translate:"var(--tx) var(--ty)","--tx":a?s?"50%":"-50%":"0%","--ty":a?"0%":"50%"}}function On(){return{userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none",position:"relative"}}function Dn(e,t){return t.map((n,a)=>ne(e,n,a))}function F(e,t){const{context:n,prop:a}=e,s=a("step")*a("minStepsBetweenThumbs");return st(n.get("value"),a("min"),a("max"),s)[t]}function ne(e,t,n){const{prop:a}=e,s=F(e,n),r=it(t,a("min"),a("max"),a("step"));return Z(r,s.min,s.max)}function Nn(e,t,n){const{context:a,prop:s}=e,r=t??a.get("focusedIndex"),i=F(e,r),d=Zt(r,{...i,step:n??s("step"),values:a.get("value")});return d[r]=Z(d[r],i.min,i.max),d}function Mn(e,t,n){const{context:a,prop:s}=e,r=t??a.get("focusedIndex"),i=F(e,r),d=Jt(r,{...i,step:n??s("step"),values:a.get("value")});return d[r]=Z(d[r],i.min,i.max),d}function Ln(e,t){const{context:n}=e;return tn(n.get("value"),t)}function jn(e,t){const{state:n,send:a,context:s,prop:r,computed:i,scope:d}=e,v=r("aria-label"),T=r("aria-labelledby"),h=s.get("value"),R=s.get("focusedIndex"),b=n.matches("focus"),p=n.matches("dragging"),V=i("isDisabled"),y=r("invalid"),E=i("isInteractive"),w=r("orientation")==="horizontal",k=r("orientation")==="vertical";function O(l){return re(l,r("min"),r("max"))}function le(l){return rt(l,r("min"),r("max"),r("step"))}return{value:h,dragging:p,focused:b,setValue(l){a({type:"SET_VALUE",value:l})},getThumbValue(l){return h[l]},setThumbValue(l,u){a({type:"SET_VALUE",index:l,value:u})},getValuePercent:O,getPercentValue:le,getThumbPercent(l){return O(h[l])},setThumbPercent(l,u){const x=le(u);a({type:"SET_VALUE",index:l,value:x})},getThumbMin(l){return F(e,l).min},getThumbMax(l){return F(e,l).max},increment(l){a({type:"INCREMENT",index:l})},decrement(l){a({type:"DECREMENT",index:l})},focus(){E&&a({type:"FOCUS",index:0})},getLabelProps(){return t.label({..._.label.attrs,dir:r("dir"),"data-disabled":c(V),"data-orientation":r("orientation"),"data-invalid":c(y),"data-dragging":c(p),"data-focus":c(b),id:ge(d),htmlFor:te(d,0),onClick(l){var u;E&&(l.preventDefault(),(u=Vn(d))==null||u.focus())},style:{userSelect:"none",WebkitUserSelect:"none"}})},getRootProps(){return t.element({..._.root.attrs,"data-disabled":c(V),"data-orientation":r("orientation"),"data-dragging":c(p),"data-invalid":c(y),"data-focus":c(b),id:pt(d),dir:r("dir"),style:An(e)})},getValueTextProps(){return t.element({..._.valueText.attrs,dir:r("dir"),"data-disabled":c(V),"data-orientation":r("orientation"),"data-invalid":c(y),"data-focus":c(b),id:hn(d)})},getTrackProps(){return t.element({..._.track.attrs,dir:r("dir"),id:vn(d),"data-disabled":c(V),"data-invalid":c(y),"data-dragging":c(p),"data-orientation":r("orientation"),"data-focus":c(b),style:{position:"relative"}})},getThumbProps(l){var ue;const{index:u=0,name:x}=l,_t=h[u],de=F(e,u),St=(ue=r("getAriaValueText"))==null?void 0:ue({value:_t,index:u}),Ft=Array.isArray(v)?v[u]:v,Pt=Array.isArray(T)?T[u]:T;return t.element({..._.thumb.attrs,dir:r("dir"),"data-index":u,"data-name":x,id:ft(d,u),"data-disabled":c(V),"data-orientation":r("orientation"),"data-focus":c(b&&R===u),"data-dragging":c(p&&R===u),draggable:!1,"aria-disabled":Ut(V),"aria-label":Ft,"aria-labelledby":Pt??ge(d),"aria-orientation":r("orientation"),"aria-valuemax":de.max,"aria-valuemin":de.min,"aria-valuenow":h[u],"aria-valuetext":St,role:"slider",tabIndex:V?void 0:0,style:fe(e,u),onPointerDown(S){E&&(a({type:"THUMB_POINTER_DOWN",index:u}),S.stopPropagation())},onBlur(){E&&a({type:"BLUR"})},onFocus(){E&&a({type:"FOCUS",index:u})},onKeyDown(S){if(S.defaultPrevented||!E)return;const A=$t(S)*r("step"),Ct={ArrowUp(){w||a({type:"ARROW_INC",step:A,src:"ArrowUp"})},ArrowDown(){w||a({type:"ARROW_DEC",step:A,src:"ArrowDown"})},ArrowLeft(){k||a({type:"ARROW_DEC",step:A,src:"ArrowLeft"})},ArrowRight(){k||a({type:"ARROW_INC",step:A,src:"ArrowRight"})},PageUp(){a({type:"ARROW_INC",step:A,src:"PageUp"})},PageDown(){a({type:"ARROW_DEC",step:A,src:"PageDown"})},Home(){a({type:"HOME"})},End(){a({type:"END"})}},It=qt(S,{dir:r("dir"),orientation:r("orientation")}),ce=Ct[It];ce&&(ce(S),S.preventDefault(),S.stopPropagation())}})},getHiddenInputProps(l){const{index:u=0,name:x}=l;return t.input({name:x??(r("name")?r("name")+(h.length>1?"[]":""):void 0),form:r("form"),type:"text",hidden:!0,defaultValue:h[u],id:te(d,u)})},getRangeProps(){return t.element({id:bn(d),..._.range.attrs,dir:r("dir"),"data-dragging":c(p),"data-focus":c(b),"data-invalid":c(y),"data-disabled":c(V),"data-orientation":r("orientation"),style:Fn(e)})},getControlProps(){return t.element({..._.control.attrs,dir:r("dir"),id:vt(d),"data-dragging":c(p),"data-disabled":c(V),"data-orientation":r("orientation"),"data-invalid":c(y),"data-focus":c(b),style:kn(),onPointerDown(l){if(!E||!Mt(l)||Lt(l))return;const u=jt(l);a({type:"POINTER_DOWN",point:u}),l.preventDefault(),l.stopPropagation()}})},getMarkerGroupProps(){return t.element({..._.markerGroup.attrs,role:"presentation",dir:r("dir"),"aria-hidden":!0,"data-orientation":r("orientation"),style:On()})},getMarkerProps(l){const u=wn(e,l.value);let x;return l.value<Dt(h)?x="under-value":l.value>Nt(h)?x="over-value":x="at-value",t.element({..._.marker.attrs,id:yn(d,l.value),role:"presentation",dir:r("dir"),"data-orientation":r("orientation"),"data-value":l.value,"data-disabled":c(V),"data-state":x,style:u})},getDraggingIndicatorProps(l){const{index:u=0}=l,x=u===R&&p;return t.element({..._.draggingIndicator.attrs,role:"presentation",dir:r("dir"),hidden:!x,"data-orientation":r("orientation"),"data-state":x?"open":"closed",style:fe(e,u)})}}}var Un=(e,t)=>(e==null?void 0:e.width)===(t==null?void 0:t.width)&&(e==null?void 0:e.height)===(t==null?void 0:t.height),ve=(e,t,n,a,s)=>st(e,t,n,s*a).map(i=>{const d=it(i.value,i.min,i.max,a),v=Z(d,i.min,i.max);if(!an(v,t,n))throw new Error("[zag-js/slider] The configured `min`, `max`, `step` or `minStepsBetweenThumbs` values are invalid");return v}),$n=Gt({props({props:e}){const t=e.min??0,n=e.max??100,a=e.step??1,s=e.defaultValue??[t],r=e.minStepsBetweenThumbs??0;return{dir:"ltr",thumbAlignment:"contain",origin:"start",orientation:"horizontal",minStepsBetweenThumbs:r,...e,defaultValue:ve(s,t,n,a,r),value:e.value?ve(e.value,t,n,a,r):void 0,max:n,step:a,min:t}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:n}){return{thumbSize:t(()=>({defaultValue:e("thumbSize")||null})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:Qt,hash(a){return a.join(",")},onChange(a){var s;(s=e("onValueChange"))==null||s({value:a})}})),focusedIndex:t(()=>({defaultValue:-1,onChange(a){var r;const s=n();(r=e("onFocusChange"))==null||r({focusedIndex:a,value:s.get("value")})}})),fieldsetDisabled:t(()=>({defaultValue:!1}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal",isVertical:({prop:e})=>e("orientation")==="vertical",isRtl:({prop:e})=>e("orientation")==="horizontal"&&e("dir")==="rtl",isDisabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled"),isInteractive:({prop:e,computed:t})=>!(e("readOnly")||t("isDisabled")),hasMeasuredThumbSize:({context:e})=>e.get("thumbSize")!=null,valuePercent({context:e,prop:t}){return e.get("value").map(n=>100*re(n,t("min"),t("max")))}},watch({track:e,action:t,context:n}){e([()=>n.hash("value")],()=>{t(["syncInputElements","dispatchChangeEvent"])})},effects:["trackFormControlState","trackThumbSize"],on:{SET_VALUE:[{guard:"hasIndex",actions:["setValueAtIndex"]},{actions:["setValue"]}],INCREMENT:{actions:["incrementThumbAtIndex"]},DECREMENT:{actions:["decrementThumbAtIndex"]}},states:{idle:{on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},FOCUS:{target:"focus",actions:["setFocusedIndex"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]}}},focus:{entry:["focusActiveThumb"],on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]},ARROW_DEC:{actions:["decrementThumbAtIndex","invokeOnChangeEnd"]},ARROW_INC:{actions:["incrementThumbAtIndex","invokeOnChangeEnd"]},HOME:{actions:["setFocusedThumbToMin","invokeOnChangeEnd"]},END:{actions:["setFocusedThumbToMax","invokeOnChangeEnd"]},BLUR:{target:"idle",actions:["clearFocusedIndex"]}}},dragging:{entry:["focusActiveThumb"],effects:["trackPointerMove"],on:{POINTER_UP:{target:"focus",actions:["invokeOnChangeEnd"]},POINTER_MOVE:{actions:["setPointerValue"]}}}},implementations:{guards:{hasIndex:({event:e})=>e.index!=null},effects:{trackFormControlState({context:e,scope:t}){return Yt(xn(t),{onFieldsetDisabledChange(n){e.set("fieldsetDisabled",n)},onFormReset(){e.set("value",e.initial("value"))}})},trackPointerMove({scope:e,send:t}){return Xt(e.getDoc(),{onPointerMove(n){t({type:"POINTER_MOVE",point:n.point})},onPointerUp(){t({type:"POINTER_UP"})}})},trackThumbSize({context:e,scope:t,prop:n}){if(!(n("thumbAlignment")!=="contain"||n("thumbSize")))return Ht(bt(t),{box:"border-box",measure(a){return En(a)},onEntry({rects:a}){if(a.length===0)return;const s=Kt(a[0],["width","height"]);Un(e.get("thumbSize"),s)||e.set("thumbSize",s)}})}},actions:{dispatchChangeEvent({context:e,scope:t}){Rn(t,e.get("value"))},syncInputElements({context:e,scope:t}){e.get("value").forEach((n,a)=>{const s=ht(t,a);zt(s,n.toString())})},invokeOnChangeEnd({prop:e,context:t}){queueMicrotask(()=>{var n;(n=e("onValueChangeEnd"))==null||n({value:t.get("value")})})},setClosestThumbIndex(e){const{context:t,event:n}=e,a=pe(e,n.point);if(a==null)return;const s=Ln(e,a);t.set("focusedIndex",s)},setFocusedIndex({context:e,event:t}){e.set("focusedIndex",t.index)},clearFocusedIndex({context:e}){e.set("focusedIndex",-1)},setPointerValue(e){queueMicrotask(()=>{const{context:t,event:n}=e,a=pe(e,n.point);if(a==null)return;const s=t.get("focusedIndex"),r=ne(e,a,s);t.set("value",i=>K(i,s,r))})},focusActiveThumb({scope:e,context:t}){Wt(()=>{const n=Tn(e,t.get("focusedIndex"));n==null||n.focus({preventScroll:!0})})},decrementThumbAtIndex(e){const{context:t,event:n}=e,a=Nn(e,n.index,n.step);t.set("value",a)},incrementThumbAtIndex(e){const{context:t,event:n}=e,a=Mn(e,n.index,n.step);t.set("value",a)},setFocusedThumbToMin(e){const{context:t}=e,n=t.get("focusedIndex"),{min:a}=F(e,n);t.set("value",s=>K(s,n,a))},setFocusedThumbToMax(e){const{context:t}=e,n=t.get("focusedIndex"),{max:a}=F(e,n);t.set("value",s=>K(s,n,a))},setValueAtIndex(e){const{context:t,event:n}=e,a=ne(e,n.value,n.index);t.set("value",s=>K(s,n.index,a))},setValue(e){const{context:t,event:n}=e,a=Dn(e,n.value);t.set("value",a)}}}});ot()(["aria-label","aria-labelledby","dir","disabled","form","getAriaValueText","getRootNode","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value","defaultValue"]);ot()(["index","name"]);const qn=e=>{const t=f.useId(),{getRootNode:n}=rn(),{dir:a}=sn(),s={id:t,dir:a,getRootNode:n,...e},r=on($n,s);return jn(r,ln)},Vt=f.forwardRef((e,t)=>{const[n,a]=ae()(e,["aria-label","aria-labelledby","defaultValue","disabled","form","getAriaValueText","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value"]),s=qn(n),r=P(s.getRootProps(),a);return m.jsx(mn,{value:s,children:m.jsx(C.div,{...r,ref:t})})});Vt.displayName="SliderRoot";const Rt=f.forwardRef((e,t)=>{const[n,a]=ae()(e,["index","name"]),s=I(),r=P(s.getThumbProps(n),a);return m.jsx(gn,{value:n,children:m.jsx(C.div,{...r,ref:t})})});Rt.displayName="SliderThumb";const Et=f.forwardRef((e,t)=>{const n=I(),a=P(n.getTrackProps(),e);return m.jsx(C.div,{...a,ref:t})});Et.displayName="SliderTrack";const be={"range-bounds":"_range-bounds_c032r_2","range-bounds--disabled":"_range-bounds--disabled_c032r_9"},se=({disabled:e,max:t,min:n})=>m.jsxs("div",{className:Y(be["range-bounds"],{[be["range-bounds--disabled"]]:e}),children:[m.jsx("span",{children:n}),m.jsx("span",{children:t})]});se.displayName="RangeBounds";se.__docgenInfo={description:"",methods:[],displayName:"RangeBounds",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},max:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""}}};const he={"range-thumb":"_range-thumb_1ei9j_2","range-thumb--invalid":"_range-thumb--invalid_1ei9j_26"},oe=({disabled:e,index:t,invalid:n})=>{const a=f.useRef(null),s=nt(),{value:r}=I(),[i,d]=f.useState(!1),[v,T]=f.useState(!1);function h(){d(!1),T(!1)}function R(){d(!0),T(!0)}function b(p){(p.ctrlKey||p.metaKey)&&(p.key==="ArrowRight"||p.key==="ArrowLeft")&&p.preventDefault()}return m.jsxs(kt,{open:!e&&(i||v),children:[m.jsx(At,{asChild:!0,children:m.jsx(Rt,{"aria-invalid":n,"aria-describedby":s==null?void 0:s.ariaDescribedBy,"aria-labelledby":t===0?s==null?void 0:s.labelId:void 0,className:Y(he["range-thumb"],{[he["range-thumb--invalid"]]:n}),index:t,onBlur:h,onChange:()=>{var p;return(p=a.current)==null?void 0:p.focus()},onFocus:R,onKeyDown:b,onMouseLeave:()=>T(!1),onMouseOver:()=>T(!0),ref:a,role:"slider",children:m.jsx(ut,{})})}),m.jsx(wt,{withArrow:!0,children:r[t]})]})};oe.displayName="RangeThumb";oe.__docgenInfo={description:"",methods:[],displayName:"RangeThumb",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""}}};const ye={"range-track":"_range-track_137lt_2","range-track__filled":"_range-track__filled_137lt_8"},ie=()=>m.jsx(Et,{className:ye["range-track"],children:m.jsx(gt,{className:ye["range-track__filled"]})});ie.displayName="RangeTrack";ie.__docgenInfo={description:"",methods:[],displayName:"RangeTrack"};const Bn="_range__control_f9tjx_2",Gn="_range__ticks_f9tjx_7",Wn="_range__ticks__tick_f9tjx_10",D={range__control:Bn,range__ticks:Gn,range__ticks__tick:Wn,"range__ticks__tick--single-mode":"_range__ticks__tick--single-mode_f9tjx_18"},g=f.forwardRef(({className:e,defaultValue:t,disabled:n,id:a,invalid:s,max:r=100,min:i=0,name:d,onDragging:v,onValueChange:T,step:h=1,ticks:R,value:b,...p},V)=>{const y=nt(),E=f.useMemo(()=>s||(y==null?void 0:y.invalid),[y,s]),w=f.useMemo(()=>b&&b.length?b.length:t&&t.length?t.length:1,[t,b]);return m.jsxs(Vt,{"aria-label":p["aria-label"],"aria-labelledby":p["aria-labelledby"],className:Y(D.range,e),"data-ods":"range",defaultValue:t,disabled:n,id:a||(y==null?void 0:y.id),invalid:E,max:r,min:i,minStepsBetweenThumbs:1,name:d,orientation:"horizontal",onValueChange:v,onValueChangeEnd:T,ref:V,role:"group",step:h,thumbSize:{height:16,width:16},value:b,...p,children:[m.jsxs(dt,{className:D.range__control,children:[m.jsx(ie,{}),Array.from({length:w}).map((k,O)=>m.jsx(oe,{disabled:n,index:O,invalid:E},O))]}),R&&R.length>0&&m.jsx(mt,{className:D.range__ticks,children:R.map(k=>m.jsx(ct,{className:Y(D.range__ticks__tick,{[D["range__ticks__tick--single-mode"]]:w<=1}),value:k},k))}),m.jsx(se,{disabled:n,max:r,min:i})]})});g.displayName="Range";g.__docgenInfo={description:"",methods:[],displayName:"Range",props:{"aria-label":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The aria-label of each slider thumb. Useful for providing an accessible name to the slider."},"aria-labelledby":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The id of the elements that labels each slider thumb. Useful for providing an accessible name to the slider."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The initial selected value(s). Use when you don't need to control the value(s) of the range."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},max:{required:!1,tsType:{name:"number"},description:"The maximum value that can be selected.",defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"The minimum value that can be selected.",defaultValue:{value:"0",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onDragging:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb moves."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb is released."},step:{required:!1,tsType:{name:"number"},description:"The amount to increment or decrement the value by.",defaultValue:{value:"1",computed:!1}},ticks:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"List of tick indicators to display alongside the range."},value:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The controlled selected value(s)."}},composes:["Omit"]};const zn={argTypes:un(["aria-label","aria-labelledby","defaultValue","max","min","name","onDragging","onValueChange","ticks","value"]),component:g,title:"React Components/Range"},N={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",justifyContent:"center",height:"80vh"}},e())],render:({dualRange:e,...t})=>{const[a,s]=f.useState([0]);return f.useEffect(()=>{if(e){const r=t.step||1,i=a[0]===100?a[0]-r:a[0];s([i,i+r])}else s([a[0]])},[e]),o.createElement(g,{...t,max:100,onDragging:({value:r})=>s(r),value:a})},argTypes:cn({disabled:{table:{category:X.general},control:{type:"boolean"}},dualRange:{table:{category:X.general,type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{table:{category:X.general},control:"boolean"},step:{table:{category:X.general},control:"number"}})},M={tags:["!dev"],parameters:{docs:{source:{...lt()}}},render:({})=>{const[e,t]=f.useState(),[n,a]=f.useState();function s(i){t(i.value[0])}function r(i){a(i.value[0])}return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement("span",null,"Final value: ",n),o.createElement("br",null),o.createElement("span",null,"Dragged value: ",e)),o.createElement(g,{onDragging:s,onValueChange:r,value:e?[e]:void 0}))}},L={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(g,null),o.createElement(g,{defaultValue:[50,75]}))},j={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(g,{defaultValue:[20],disabled:!0}),o.createElement(g,{defaultValue:[50,75],disabled:!0}))},U={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(Q,null,o.createElement(J,null,"Range:"),o.createElement(g,null))},$={tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement("p",null,"Max 500"),o.createElement(g,{defaultValue:[50],max:500}),o.createElement(g,{defaultValue:[50,75],max:500}),o.createElement("p",null,"Min 25"),o.createElement(g,{defaultValue:[50],min:25}),o.createElement(g,{defaultValue:[50,75],min:25}),o.createElement("p",null,"Max 75 & Min 25"),o.createElement(g,{defaultValue:[50],max:75,min:25}),o.createElement(g,{defaultValue:[50,75],max:75,min:25}))},q={decorators:[e=>o.createElement("div",{style:{width:"160px"}},e())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>o.createElement(g,{defaultValue:[50]})},B={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(g,{defaultValue:[20],step:5}),o.createElement(g,{defaultValue:[50,75],step:5}))},G={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(g,{defaultValue:[20],ticks:[10,20,30,40,50,60,70,80,90]}),o.createElement(g,{defaultValue:[50,75],ticks:[10,20,30,40,50,60,70,80,90]}))},W={tags:["!dev"],render:({})=>o.createElement(Q,null,o.createElement(J,null,"Volume"),o.createElement(g,{defaultValue:[50]}))},z={tags:["!dev"],render:({})=>o.createElement(Q,null,o.createElement(J,null,"Price range"),o.createElement(g,{defaultValue:[30,70]}))},H={parameters:{docs:{source:{...lt()}}},tags:["!dev"],render:({})=>{const[e,t]=f.useState([30,70]);return o.createElement(Q,null,o.createElement(J,{id:"range-label"},"Price range"),o.createElement(dn,{preset:"caption",id:"range-sublabel","aria-live":"polite"},"Selected values: ",e[0]," - ",e[1],"€"),o.createElement(g,{"aria-labelledby":["range-label","range-sublabel"],onDragging:({value:n})=>t(n),value:e}))}};var xe,Te,Ve;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ve=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Ve.source}}};var Re,Ee,_e;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(_e=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var Se,Fe,Pe;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Pe=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ce,Ie,ke;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Ae,we,Oe;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Oe=(we=U.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};var De,Ne,Me;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var Le,je,Ue;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    width: '160px'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Range defaultValue={[50]} />
}`,...(Ue=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Ue.source}}};var $e,qe,Be;B.parameters={...B.parameters,docs:{...($e=B.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Be=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Be.source}}};var Ge,We,ze;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(ze=(We=G.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var He,Ke,Xe;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>Volume</FormFieldLabel>
      <Range defaultValue={[50]} />
    </FormField>
}`,...(Xe=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var Ye,Qe,Je;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>Price range</FormFieldLabel>
      <Range defaultValue={[30, 70]} />
    </FormField>
}`,...(Je=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Ze,et,tt;H.parameters={...H.parameters,docs:{...(Ze=H.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const [values, setValues] = useState([30, 70]);
    return <FormField>
        <FormFieldLabel id="range-label">
          Price range
        </FormFieldLabel>
        <Text preset="caption" id="range-sublabel" aria-live="polite">
          Selected values: {values[0]} - {values[1]}€
        </Text>
        <Range aria-labelledby={['range-label', 'range-sublabel']} onDragging={({
        value
      }) => setValues(value)} value={values} />
      </FormField>;
  }
}`,...(tt=(et=H.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const Hn=["Demo","Controlled","Default","Disabled","InFormField","MaxMin","Overview","Step","Ticks","AccessibilityFormField","AccessibilityDualRangeFormField","AccessibilityDescriptiveSubLabel"],aa=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescriptiveSubLabel:H,AccessibilityDualRangeFormField:z,AccessibilityFormField:W,Controlled:M,Default:L,Demo:N,Disabled:j,InFormField:U,MaxMin:$,Overview:q,Step:B,Ticks:G,__namedExportsOrder:Hn,default:zn},Symbol.toStringTag,{value:"Module"}));export{W as A,M as C,L as D,U as I,$ as M,q as O,aa as R,B as S,G as T,H as a,j as b};
