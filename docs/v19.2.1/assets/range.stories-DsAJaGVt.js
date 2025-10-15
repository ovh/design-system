import{r as m,e as s}from"./index-jIWwRBLr.js";import{u as dt,F as re,a as oe}from"./FormFieldLabel-DW-nAxje.js";import{j as u}from"./jsx-runtime-Cfl8ynUo.js";import{c as K}from"./index-CqY9YpN0.js";import{b as jt,T as qt,a as Ut}from"./TooltipTrigger-CT3e8Irz.js";import{c as ut,T as C,U as w,a as se,z as Bt,ae as $t,aH as Q,r as Gt,a5 as zt,ax as Wt,a4 as Ht,aI as Xt,am as Yt,f as Kt,Q as Qt,_ as Zt,Z as Jt,P as g,a7 as ve,as as en,ao as tn,aq as nn,ar as an,W as rn,aJ as ct,ah as J,aK as mt,aL as on,aM as sn,aN as ln,aO as gt,aP as dn,aQ as un,an as cn,aR as le,aS as he,aT as te,aU as mn,C as pt,u as gn,R as pn,D as fn,S as bn}from"./use-locale-context-BIV2aQtl.js";import{T as vn,a as hn}from"./Text-vMb3-i8V.js";import{e as yn,o as xn,C as N}from"./controls-BtiQQn1l.js";import{s as ie}from"./source-CPEZJ6oD.js";const[Tn,I]=ut({name:"SliderContext",hookName:"useSliderContext",providerName:"<SliderProvider />"}),ft=m.forwardRef((e,t)=>{const a=I(),n=C(a.getControlProps(),e);return u.jsx(w.div,{...n,ref:t})});ft.displayName="SliderControl";const[Rn,En]=ut({name:"SliderThumbPropsContext",hookName:"useSliderThumbPropsContext",providerName:"<SliderThumbPropsProvider />"}),bt=m.forwardRef((e,t)=>{const a=I(),n=En(),o=C(a.getHiddenInputProps(n),e);return u.jsx(w.input,{...o,ref:t})});bt.displayName="SliderHiddenInput";const vt=m.forwardRef((e,t)=>{const[a,n]=se()(e,["value"]),o=I(),r=C(o.getMarkerProps(a),n);return u.jsx(w.span,{...r,ref:t})});vt.displayName="SliderMarker";const ht=m.forwardRef((e,t)=>{const a=I(),n=C(a.getMarkerGroupProps(),e);return u.jsx(w.div,{...n,ref:t})});ht.displayName="SliderMarkerGroup";const yt=m.forwardRef((e,t)=>{const a=I(),n=C(a.getRangeProps(),e);return u.jsx(w.div,{...n,ref:t})});yt.displayName="SliderRange";var Vn=Qt("slider").parts("root","label","thumb","valueText","track","range","control","markerGroup","marker","draggingIndicator"),_=Vn.build(),xt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`slider:${e.id}`},Tt=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.thumb)==null?void 0:n.call(a,t))??`slider:${e.id}:thumb:${t}`},ne=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.hiddenInput)==null?void 0:n.call(a,t))??`slider:${e.id}:input:${t}`},Rt=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`slider:${e.id}:control`},_n=e=>{var t;return((t=e.ids)==null?void 0:t.track)??`slider:${e.id}:track`},Sn=e=>{var t;return((t=e.ids)==null?void 0:t.range)??`slider:${e.id}:range`},ye=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`slider:${e.id}:label`},Pn=e=>{var t;return((t=e.ids)==null?void 0:t.valueText)??`slider:${e.id}:value-text`},Fn=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.marker)==null?void 0:n.call(a,t))??`slider:${e.id}:marker:${t}`},kn=e=>e.getById(xt(e)),Cn=(e,t)=>e.getById(Tt(e,t)),Et=e=>Ht(_t(e),"[role=slider]"),wn=e=>Et(e)[0],Vt=(e,t)=>e.getById(ne(e,t)),_t=e=>e.getById(Rt(e)),xe=(e,t)=>{const{prop:a,scope:n}=e,o=_t(n);if(!o)return;const l=ln(t,o).getPercentValue({orientation:a("orientation"),dir:a("dir"),inverted:{y:!0}});return gt(l,a("min"),a("max"),a("step"))},In=(e,t)=>{t.forEach((a,n)=>{const o=Vt(e,n);o&&un(o,{value:a})})},An=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0});function On(e){const t=e[0],a=e[e.length-1];return[t,a]}function Nn(e){const{prop:t,computed:a}=e,n=a("valuePercent"),[o,r]=On(n);if(n.length===1){if(t("origin")==="center"){const l=n[0]<50,d=l?`${n[0]}%`:"50%",v=l?"50%":`${100-n[0]}%`;return{start:d,end:v}}return t("origin")==="end"?{start:`${r}%`,end:"0%"}:{start:"0%",end:`${100-r}%`}}return{start:`${o}%`,end:`${100-r}%`}}function Mn(e){const{computed:t}=e,a=t("isVertical"),n=t("isRtl");return a?{position:"absolute",bottom:"var(--slider-range-start)",top:"var(--slider-range-end)"}:{position:"absolute",[n?"right":"left"]:"var(--slider-range-start)",[n?"left":"right"]:"var(--slider-range-end)"}}function Dn(e,t){const{context:a,prop:n}=e,{height:o=0}=a.get("thumbSize")??{},r=te([n("min"),n("max")],[-o/2,o/2]);return parseFloat(r(t).toFixed(2))}function Ln(e,t){const{computed:a,context:n,prop:o}=e,{width:r=0}=n.get("thumbSize")??{};if(a("isRtl")){const v=te([o("max"),o("min")],[-r/2,r/2]);return-1*parseFloat(v(t).toFixed(2))}const d=te([o("min"),o("max")],[-r/2,r/2]);return parseFloat(d(t).toFixed(2))}function jn(e,t,a){const{computed:n,prop:o}=e;if(o("thumbAlignment")==="center")return`${t}%`;const r=n("isVertical")?Dn(e,a):Ln(e,a);return`calc(${t}% - ${r}px)`}function St(e,t){const{prop:a}=e,n=le(t,a("min"),a("max"))*100;return jn(e,n,t)}function Pt(e){const{computed:t,prop:a}=e;let n="visible";return a("thumbAlignment")==="contain"&&!t("hasMeasuredThumbSize")&&(n="hidden"),n}function Te(e,t){const{computed:a}=e,n=a("isVertical")?"bottom":"insetInlineStart";return{visibility:Pt(e),position:"absolute",transform:"var(--slider-thumb-transform)",[n]:`var(--slider-thumb-offset-${t})`}}function qn(){return{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",position:"relative"}}function Un(e){const{context:t,computed:a}=e,n=a("isVertical"),o=a("isRtl"),r=Nn(e),l=t.get("thumbSize");return{...t.get("value").reduce((v,T,h)=>{const R=St(e,T);return{...v,[`--slider-thumb-offset-${h}`]:R}},{}),"--slider-thumb-width":he(l==null?void 0:l.width),"--slider-thumb-height":he(l==null?void 0:l.height),"--slider-thumb-transform":n?"translateY(50%)":o?"translateX(50%)":"translateX(-50%)","--slider-range-start":r.start,"--slider-range-end":r.end}}function Bn(e,t){const{computed:a}=e,n=a("isHorizontal"),o=a("isRtl");return{visibility:Pt(e),position:"absolute",pointerEvents:"none",[n?"insetInlineStart":"bottom"]:St(e,t),translate:"var(--translate-x) var(--translate-y)","--translate-x":n?o?"50%":"-50%":"0%","--translate-y":n?"0%":"50%"}}function $n(){return{userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none",position:"relative"}}function Gn(e,t){return t.map((a,n)=>ae(e,a,n))}function k(e,t){const{context:a,prop:n}=e,o=n("step")*n("minStepsBetweenThumbs");return mt(a.get("value"),n("min"),n("max"),o)[t]}function ae(e,t,a){const{prop:n}=e,o=k(e,a),r=ct(t,n("min"),n("max"),n("step"));return J(r,o.min,o.max)}function zn(e,t,a){const{context:n,prop:o}=e,r=t??n.get("focusedIndex"),l=k(e,r),d=sn(r,{...l,step:a??o("step"),values:n.get("value")});return d[r]=J(d[r],l.min,l.max),d}function Wn(e,t,a){const{context:n,prop:o}=e,r=t??n.get("focusedIndex"),l=k(e,r),d=on(r,{...l,step:a??o("step"),values:n.get("value")});return d[r]=J(d[r],l.min,l.max),d}function Hn(e,t){const{context:a}=e;return dn(a.get("value"),t)}function Xn(e,t){const{state:a,send:n,context:o,prop:r,computed:l,scope:d}=e,v=r("aria-label"),T=r("aria-labelledby"),h=o.get("value"),R=o.get("focusedIndex"),y=a.matches("focus"),b=a.matches("dragging"),f=l("isDisabled"),F=r("invalid"),S=l("isInteractive"),A=r("orientation")==="horizontal",V=r("orientation")==="vertical";function E(i){return le(i,r("min"),r("max"))}function M(i){return gt(i,r("min"),r("max"),r("step"))}return{value:h,dragging:b,focused:y,setValue(i){n({type:"SET_VALUE",value:i})},getThumbValue(i){return h[i]},setThumbValue(i,c){n({type:"SET_VALUE",index:i,value:c})},getValuePercent:E,getPercentValue:M,getThumbPercent(i){return E(h[i])},setThumbPercent(i,c){const x=M(c);n({type:"SET_VALUE",index:i,value:x})},getThumbMin(i){return k(e,i).min},getThumbMax(i){return k(e,i).max},increment(i){n({type:"INCREMENT",index:i})},decrement(i){n({type:"DECREMENT",index:i})},focus(){S&&n({type:"FOCUS",index:0})},getLabelProps(){return t.label({..._.label.attrs,dir:r("dir"),"data-disabled":g(f),"data-orientation":r("orientation"),"data-invalid":g(F),"data-dragging":g(b),"data-focus":g(y),id:ye(d),htmlFor:ne(d,0),onClick(i){var c;S&&(i.preventDefault(),(c=wn(d))==null||c.focus())},style:{userSelect:"none",WebkitUserSelect:"none"}})},getRootProps(){return t.element({..._.root.attrs,"data-disabled":g(f),"data-orientation":r("orientation"),"data-dragging":g(b),"data-invalid":g(F),"data-focus":g(y),id:xt(d),dir:r("dir"),style:Un(e)})},getValueTextProps(){return t.element({..._.valueText.attrs,dir:r("dir"),"data-disabled":g(f),"data-orientation":r("orientation"),"data-invalid":g(F),"data-focus":g(y),id:Pn(d)})},getTrackProps(){return t.element({..._.track.attrs,dir:r("dir"),id:_n(d),"data-disabled":g(f),"data-invalid":g(F),"data-dragging":g(b),"data-orientation":r("orientation"),"data-focus":g(y),style:{position:"relative"}})},getThumbProps(i){var fe;const{index:c=0,name:x}=i,At=h[c],pe=k(e,c),Ot=(fe=r("getAriaValueText"))==null?void 0:fe({value:At,index:c}),Nt=Array.isArray(v)?v[c]:v,Mt=Array.isArray(T)?T[c]:T;return t.element({..._.thumb.attrs,dir:r("dir"),"data-index":c,"data-name":x,id:Tt(d,c),"data-disabled":g(f),"data-orientation":r("orientation"),"data-focus":g(y&&R===c),"data-dragging":g(b&&R===c),draggable:!1,"aria-disabled":nn(f),"aria-label":Nt,"aria-labelledby":Mt??ye(d),"aria-orientation":r("orientation"),"aria-valuemax":pe.max,"aria-valuemin":pe.min,"aria-valuenow":h[c],"aria-valuetext":Ot,role:"slider",tabIndex:f?void 0:0,style:Te(e,c),onPointerDown(P){S&&ve(P)&&(n({type:"THUMB_POINTER_DOWN",index:c}),P.stopPropagation())},onBlur(){S&&n({type:"BLUR"})},onFocus(){S&&n({type:"FOCUS",index:c})},onKeyDown(P){if(P.defaultPrevented||!S)return;const O=an(P)*r("step"),Dt={ArrowUp(){A||n({type:"ARROW_INC",step:O,src:"ArrowUp"})},ArrowDown(){A||n({type:"ARROW_DEC",step:O,src:"ArrowDown"})},ArrowLeft(){V||n({type:"ARROW_DEC",step:O,src:"ArrowLeft"})},ArrowRight(){V||n({type:"ARROW_INC",step:O,src:"ArrowRight"})},PageUp(){n({type:"ARROW_INC",step:O,src:"PageUp"})},PageDown(){n({type:"ARROW_DEC",step:O,src:"PageDown"})},Home(){n({type:"HOME"})},End(){n({type:"END"})}},Lt=rn(P,{dir:r("dir"),orientation:r("orientation")}),be=Dt[Lt];be&&(be(P),P.preventDefault(),P.stopPropagation())}})},getHiddenInputProps(i){const{index:c=0,name:x}=i;return t.input({name:x??(r("name")?r("name")+(h.length>1?"[]":""):void 0),form:r("form"),type:"text",hidden:!0,defaultValue:h[c],id:ne(d,c)})},getRangeProps(){return t.element({id:Sn(d),..._.range.attrs,dir:r("dir"),"data-dragging":g(b),"data-focus":g(y),"data-invalid":g(F),"data-disabled":g(f),"data-orientation":r("orientation"),style:Mn(e)})},getControlProps(){return t.element({..._.control.attrs,dir:r("dir"),id:Rt(d),"data-dragging":g(b),"data-disabled":g(f),"data-orientation":r("orientation"),"data-invalid":g(F),"data-focus":g(y),style:qn(),onPointerDown(i){if(!S||!ve(i)||en(i))return;const c=tn(i);n({type:"POINTER_DOWN",point:c}),i.preventDefault(),i.stopPropagation()}})},getMarkerGroupProps(){return t.element({..._.markerGroup.attrs,role:"presentation",dir:r("dir"),"aria-hidden":!0,"data-orientation":r("orientation"),style:$n()})},getMarkerProps(i){const c=Bn(e,i.value);let x;return i.value<Zt(h)?x="under-value":i.value>Jt(h)?x="over-value":x="at-value",t.element({..._.marker.attrs,id:Fn(d,i.value),role:"presentation",dir:r("dir"),"data-orientation":r("orientation"),"data-value":i.value,"data-disabled":g(f),"data-state":x,style:c})},getDraggingIndicatorProps(i){const{index:c=0}=i,x=c===R&&b;return t.element({..._.draggingIndicator.attrs,role:"presentation",dir:r("dir"),hidden:!x,"data-orientation":r("orientation"),"data-state":x?"open":"closed",style:Te(e,c)})}}}var Yn=(e,t)=>(e==null?void 0:e.width)===(t==null?void 0:t.width)&&(e==null?void 0:e.height)===(t==null?void 0:t.height),Re=(e,t,a,n,o)=>mt(e,t,a,o*n).map(l=>{const d=ct(l.value,l.min,l.max,n),v=J(d,l.min,l.max);if(!cn(v,t,a))throw new Error("[zag-js/slider] The configured `min`, `max`, `step` or `minStepsBetweenThumbs` values are invalid");return v}),Kn=Bt({props({props:e}){const t=e.min??0,a=e.max??100,n=e.step??1,o=e.defaultValue??[t],r=e.minStepsBetweenThumbs??0;return{dir:"ltr",thumbAlignment:"contain",origin:"start",orientation:"horizontal",minStepsBetweenThumbs:r,...e,defaultValue:Re(o,t,a,n,r),value:e.value?Re(e.value,t,a,n,r):void 0,max:a,step:n,min:t}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{thumbSize:t(()=>({defaultValue:e("thumbSize")||null})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:Kt,hash(n){return n.join(",")},onChange(n){var o;(o=e("onValueChange"))==null||o({value:n})}})),focusedIndex:t(()=>({defaultValue:-1,onChange(n){var r;const o=a();(r=e("onFocusChange"))==null||r({focusedIndex:n,value:o.get("value")})}})),fieldsetDisabled:t(()=>({defaultValue:!1}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal",isVertical:({prop:e})=>e("orientation")==="vertical",isRtl:({prop:e})=>e("orientation")==="horizontal"&&e("dir")==="rtl",isDisabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled"),isInteractive:({prop:e,computed:t})=>!(e("readOnly")||t("isDisabled")),hasMeasuredThumbSize:({context:e})=>e.get("thumbSize")!=null,valuePercent:$t(({context:e,prop:t})=>[e.get("value"),t("min"),t("max")],([e,t,a])=>e.map(n=>100*le(n,t,a)))},watch({track:e,action:t,context:a}){e([()=>a.hash("value")],()=>{t(["syncInputElements","dispatchChangeEvent"])})},effects:["trackFormControlState","trackThumbSize"],on:{SET_VALUE:[{guard:"hasIndex",actions:["setValueAtIndex"]},{actions:["setValue"]}],INCREMENT:{actions:["incrementThumbAtIndex"]},DECREMENT:{actions:["decrementThumbAtIndex"]}},states:{idle:{on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},FOCUS:{target:"focus",actions:["setFocusedIndex"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]}}},focus:{entry:["focusActiveThumb"],on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]},ARROW_DEC:{actions:["decrementThumbAtIndex","invokeOnChangeEnd"]},ARROW_INC:{actions:["incrementThumbAtIndex","invokeOnChangeEnd"]},HOME:{actions:["setFocusedThumbToMin","invokeOnChangeEnd"]},END:{actions:["setFocusedThumbToMax","invokeOnChangeEnd"]},BLUR:{target:"idle",actions:["clearFocusedIndex"]}}},dragging:{entry:["focusActiveThumb"],effects:["trackPointerMove"],on:{POINTER_UP:{target:"focus",actions:["invokeOnChangeEnd"]},POINTER_MOVE:{actions:["setPointerValue"]}}}},implementations:{guards:{hasIndex:({event:e})=>e.index!=null},effects:{trackFormControlState({context:e,scope:t}){return Yt(kn(t),{onFieldsetDisabledChange(a){e.set("fieldsetDisabled",a)},onFormReset(){e.set("value",e.initial("value"))}})},trackPointerMove({scope:e,send:t}){return Xt(e.getDoc(),{onPointerMove(a){t({type:"POINTER_MOVE",point:a.point})},onPointerUp(){t({type:"POINTER_UP"})}})},trackThumbSize({context:e,scope:t,prop:a}){if(!(a("thumbAlignment")!=="contain"||a("thumbSize")))return Wt(Et(t),{box:"border-box",measure(n){return An(n)},onEntry({rects:n}){if(n.length===0)return;const o=mn(n[0],["width","height"]);Yn(e.get("thumbSize"),o)||e.set("thumbSize",o)}})}},actions:{dispatchChangeEvent({context:e,scope:t}){In(t,e.get("value"))},syncInputElements({context:e,scope:t}){e.get("value").forEach((a,n)=>{const o=Vt(t,n);zt(o,a.toString())})},invokeOnChangeEnd({prop:e,context:t}){queueMicrotask(()=>{var a;(a=e("onValueChangeEnd"))==null||a({value:t.get("value")})})},setClosestThumbIndex(e){const{context:t,event:a}=e,n=xe(e,a.point);if(n==null)return;const o=Hn(e,n);t.set("focusedIndex",o)},setFocusedIndex({context:e,event:t}){e.set("focusedIndex",t.index)},clearFocusedIndex({context:e}){e.set("focusedIndex",-1)},setPointerValue(e){queueMicrotask(()=>{const{context:t,event:a}=e,n=xe(e,a.point);if(n==null)return;const o=t.get("focusedIndex"),r=ae(e,n,o);t.set("value",l=>Q(l,o,r))})},focusActiveThumb({scope:e,context:t}){Gt(()=>{const a=Cn(e,t.get("focusedIndex"));a==null||a.focus({preventScroll:!0})})},decrementThumbAtIndex(e){const{context:t,event:a}=e,n=zn(e,a.index,a.step);t.set("value",n)},incrementThumbAtIndex(e){const{context:t,event:a}=e,n=Wn(e,a.index,a.step);t.set("value",n)},setFocusedThumbToMin(e){const{context:t}=e,a=t.get("focusedIndex"),{min:n}=k(e,a);t.set("value",o=>Q(o,a,n))},setFocusedThumbToMax(e){const{context:t}=e,a=t.get("focusedIndex"),{max:n}=k(e,a);t.set("value",o=>Q(o,a,n))},setValueAtIndex(e){const{context:t,event:a}=e,n=ae(e,a.value,a.index);t.set("value",o=>Q(o,a.index,n))},setValue(e){const{context:t,event:a}=e,n=Gn(e,a.value);t.set("value",n)}}}});pt()(["aria-label","aria-labelledby","dir","disabled","form","getAriaValueText","getRootNode","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value","defaultValue"]);pt()(["index","name"]);const Qn=e=>{const t=m.useId(),{getRootNode:a}=gn(),{dir:n}=pn(),o={id:t,dir:n,getRootNode:a,...e},r=fn(Kn,o);return Xn(r,bn)},Ft=m.forwardRef((e,t)=>{const[a,n]=se()(e,["aria-label","aria-labelledby","defaultValue","disabled","form","getAriaValueText","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value"]),o=Qn(a),r=C(o.getRootProps(),n);return u.jsx(Tn,{value:o,children:u.jsx(w.div,{...r,ref:t})})});Ft.displayName="SliderRoot";const kt=m.forwardRef((e,t)=>{const[a,n]=se()(e,["index","name"]),o=I(),r=C(o.getThumbProps(a),n);return u.jsx(Rn,{value:a,children:u.jsx(w.div,{...r,ref:t})})});kt.displayName="SliderThumb";const Ct=m.forwardRef((e,t)=>{const a=I(),n=C(a.getTrackProps(),e);return u.jsx(w.div,{...n,ref:t})});Ct.displayName="SliderTrack";const Z=20,wt=m.createContext(void 0);function It({children:e,disabled:t}){const[a,n]=m.useState({bottom:0,left:0,right:0});return u.jsx(wt.Provider,{value:{disabled:t,rootPadding:a,setRootPadding:n},children:e})}function ee(){const e=m.useContext(wt);if(!e)throw new Error("useRange must be used within a RangeProvider");return e}It.__docgenInfo={description:"",methods:[],displayName:"RangeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const Ee={"range-bounds":"_range-bounds_c032r_2","range-bounds--disabled":"_range-bounds--disabled_c032r_9"},de=({max:e,min:t})=>{const{disabled:a}=ee();return u.jsxs("div",{className:K(Ee["range-bounds"],{[Ee["range-bounds--disabled"]]:a}),children:[u.jsx("span",{children:t}),u.jsx("span",{children:e})]})};de.displayName="RangeBounds";de.__docgenInfo={description:"",methods:[],displayName:"RangeBounds",props:{max:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""}}};const Ve={"range-thumb":"_range-thumb_1ei9j_2","range-thumb--invalid":"_range-thumb--invalid_1ei9j_26"},ue=({displayTooltip:e,index:t,invalid:a})=>{const n=m.useRef(null),o=dt(),{value:r}=I(),{disabled:l}=ee(),[d,v]=m.useState(!1),[T,h]=m.useState(!1);function R(){v(!1),h(!1)}function y(){v(!0),h(!0)}function b(f){(f.ctrlKey||f.metaKey)&&(f.key==="ArrowRight"||f.key==="ArrowLeft")&&f.preventDefault()}return u.jsxs(jt,{open:e&&!l&&(d||T),children:[u.jsx(qt,{asChild:!0,children:u.jsx(kt,{"aria-describedby":o==null?void 0:o.ariaDescribedBy,"aria-invalid":a,"aria-labelledby":t===0?o==null?void 0:o.labelId:void 0,className:K(Ve["range-thumb"],{[Ve["range-thumb--invalid"]]:a}),index:t,onBlur:R,onChange:()=>{var f;return(f=n.current)==null?void 0:f.focus()},onFocus:y,onKeyDown:b,onMouseLeave:()=>h(!1),onMouseOver:()=>h(!0),ref:n,role:"slider",children:u.jsx(bt,{})})}),u.jsx(Ut,{withArrow:!0,children:r[t]})]})};ue.displayName="RangeThumb";ue.__docgenInfo={description:"",methods:[],displayName:"RangeThumb",props:{displayTooltip:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""}}};const D={"range-tick":"_range-tick_11lbf_2","range-tick--single-mode":"_range-tick--single-mode_11lbf_15","range-tick--custom-marker":"_range-tick--custom-marker_11lbf_18","range-tick__label":"_range-tick__label_11lbf_26","range-tick__label--disabled":"_range-tick__label--disabled_11lbf_30"},ce=({index:e,isLast:t,singleMode:a,tick:n})=>{const{disabled:o,setRootPadding:r}=ee(),l=m.useRef(null),d=typeof n=="number";return m.useEffect(()=>{if(!l.current||typeof n=="number")return;const v=new ResizeObserver(T=>{if(T&&T.length){const{height:h,top:R,width:y}=T[0].contentRect;e===0?r(b=>({...b,left:Math.max(0,y/2-Z/2)})):t&&r(b=>({...b,right:Math.max(0,y/2-Z/2)})),r(b=>({...b,bottom:h+R}))}});return v.observe(l.current),()=>{v.disconnect()}},[e,t,r,n,l]),u.jsx(vt,{className:K(D["range-tick"],{[D["range-tick--custom-marker"]]:!d},{[D["range-tick--single-mode"]]:a}),ref:l,value:d?n:n.value,children:!d&&u.jsx("span",{className:K(D["range-tick__label"],{[D["range-tick__label--disabled"]]:o}),children:n.label})})};ce.displayName="RangeTick";ce.__docgenInfo={description:"",methods:[],displayName:"RangeTick",props:{index:{required:!0,tsType:{name:"number"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},singleMode:{required:!0,tsType:{name:"boolean"},description:""},tick:{required:!0,tsType:{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]},description:""}}};const Zn={"range-ticks":"_range-ticks_abmz7_2"},me=({singleMode:e,ticks:t})=>u.jsx(ht,{className:Zn["range-ticks"],children:t.map((a,n)=>u.jsx(ce,{index:n,isLast:n===t.length-1,singleMode:e,tick:a},typeof a=="number"?a:a.value))});me.displayName="RangeTicks";me.__docgenInfo={description:"",methods:[],displayName:"RangeTicks",props:{singleMode:{required:!0,tsType:{name:"boolean"},description:""},ticks:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"RangeTickItem[]"},description:""}}};const _e={"range-track":"_range-track_137lt_2","range-track__filled":"_range-track__filled_137lt_8"},ge=()=>u.jsx(Ct,{className:_e["range-track"],children:u.jsx(yt,{className:_e["range-track__filled"]})});ge.displayName="RangeTrack";ge.__docgenInfo={description:"",methods:[],displayName:"RangeTrack"};const Jn="_range_1mqcm_2",ea="_range__control_1mqcm_8",Se={range:Jn,range__control:ea},ta=m.forwardRef(({className:e,defaultValue:t,displayBounds:a=!0,displayTooltip:n=!0,id:o,invalid:r,max:l=100,min:d=0,name:v,onDragging:T,onValueChange:h,step:R=1,ticks:y,value:b,...f},F)=>{const{disabled:S,rootPadding:A}=ee(),V=dt(),E=m.useRef(null),M=m.useMemo(()=>r||(V==null?void 0:V.invalid),[V,r]),i=m.useMemo(()=>b&&b.length?b.length:t&&t.length?t.length:1,[t,b]);return m.useImperativeHandle(F,()=>E.current,[E]),m.useEffect(()=>{E.current&&(E.current.style.setProperty("--ods-range-padding-bottom",`${A.bottom}px`),E.current.style.setProperty("--ods-range-padding-left",`${A.left}px`),E.current.style.setProperty("--ods-range-padding-right",`${A.right}px`))},[E,A]),u.jsxs(Ft,{"aria-label":f["aria-label"],"aria-labelledby":f["aria-labelledby"],className:K(Se.range,e),"data-ods":"range",defaultValue:t,disabled:S,id:o||(V==null?void 0:V.id),invalid:M,max:l,min:d,minStepsBetweenThumbs:1,name:v,orientation:"horizontal",onValueChange:T,onValueChangeEnd:h,ref:E,role:"group",step:R,thumbSize:{height:Z,width:Z},value:b,...f,children:[u.jsxs(ft,{className:Se.range__control,children:[u.jsx(ge,{}),Array.from({length:i}).map((c,x)=>u.jsx(ue,{displayTooltip:n,index:x,invalid:M},x))]}),y&&y.length>0&&u.jsx(me,{singleMode:i<=1,ticks:y}),a&&u.jsx(de,{max:l,min:d})]})}),p=m.forwardRef(({disabled:e,...t},a)=>u.jsx(It,{disabled:e,children:u.jsx(ta,{ref:a,...t})}));p.displayName="Range";p.__docgenInfo={description:"",methods:[],displayName:"Range",props:{"aria-label":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The aria-label of each slider thumb. Useful for providing an accessible name to the slider."},"aria-labelledby":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The id of the elements that labels each slider thumb. Useful for providing an accessible name to the slider."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The initial selected value(s). Use when you don't need to control the value(s) of the range."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},displayBounds:{required:!1,tsType:{name:"boolean"},description:"Whether the range bounds are displayed under the track."},displayTooltip:{required:!1,tsType:{name:"boolean"},description:"Whether a tooltip with the current thumb value is displayed on drag."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},max:{required:!1,tsType:{name:"number"},description:"The maximum value that can be selected."},min:{required:!1,tsType:{name:"number"},description:"The minimum value that can be selected."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onDragging:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb moves."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb is released."},step:{required:!1,tsType:{name:"number"},description:"The amount to increment or decrement the value by."},ticks:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"RangeTickItem[]"},description:"List of tick indicators to display alongside the range."},value:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The controlled selected value(s)."}},composes:["Omit"]};const na={argTypes:yn(["aria-label","aria-labelledby","defaultValue","max","min","name","onDragging","onValueChange","ticks","value"]),component:p,title:"React Components/Range"},L={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",justifyContent:"center",height:"80vh"}},e())],render:({dualRange:e,...t})=>{const[n,o]=m.useState([0]);return m.useEffect(()=>{if(e){const r=t.step||1,l=n[0]===100?n[0]-r:n[0];o([l,l+r])}else o([n[0]])},[e]),s.createElement(p,{...t,max:100,onDragging:({value:r})=>o(r),value:n})},argTypes:xn({disabled:{table:{category:N.general},control:{type:"boolean"}},displayBounds:{table:{category:N.general},control:{type:"boolean"}},displayTooltip:{table:{category:N.general},control:{type:"boolean"}},dualRange:{table:{category:N.general,type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{table:{category:N.general},control:"boolean"},step:{table:{category:N.general},control:"number"}})},j={globals:{imports:`import { Range } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...ie()}}},render:({})=>{const[e,t]=m.useState(),[a,n]=m.useState();function o(l){t(l.value[0])}function r(l){n(l.value[0])}return s.createElement(s.Fragment,null,s.createElement("p",null,s.createElement("span",null,"Final value: ",a),s.createElement("br",null),s.createElement("span",null,"Dragged value: ",e)),s.createElement(p,{onDragging:o,onValueChange:r,value:e?[e]:void 0}))}},q={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(p,null),s.createElement(p,{defaultValue:[50,75]}))},U={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(p,{defaultValue:[20],disabled:!0}),s.createElement(p,{defaultValue:[50,75],disabled:!0}))},B={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(re,null,s.createElement(oe,null,"Range:"),s.createElement(p,null))},$={globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement("p",null,"Max 500"),s.createElement(p,{defaultValue:[50],max:500}),s.createElement(p,{defaultValue:[50,75],max:500}),s.createElement("p",null,"Min 25"),s.createElement(p,{defaultValue:[50],min:25}),s.createElement(p,{defaultValue:[50,75],min:25}),s.createElement("p",null,"Max 75 & Min 25"),s.createElement(p,{defaultValue:[50],max:75,min:25}),s.createElement(p,{defaultValue:[50,75],max:75,min:25}))},G={decorators:[e=>s.createElement("div",{style:{width:"160px"}},e())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>s.createElement(p,{defaultValue:[50]})},z={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(p,{defaultValue:[20],step:5}),s.createElement(p,{defaultValue:[50,75],step:5}))},W={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(p,{defaultValue:[20],ticks:[10,20,30,40,50,60,70,80,90]}),s.createElement(p,{defaultValue:[50,75],ticks:[10,20,30,40,50,60,70,80,90]}))},H={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...ie()}}},render:({})=>s.createElement(s.Fragment,null,s.createElement(p,{ticks:[{label:"Low",value:25},{label:"Medium",value:50},{label:"High",value:75}]}),s.createElement(p,{displayBounds:!1,displayTooltip:!1,max:5,min:1,ticks:[{label:"Very Poor",value:1},{label:"Poor",value:2},{label:"Average",value:3},{label:"Good",value:4},{label:"Excellent",value:5}]}))},X={globals:{imports:"import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(re,null,s.createElement(oe,null,"Volume"),s.createElement(p,{defaultValue:[50]}))},Y={globals:{imports:`import { TEXT_PRESET, FormField, FormFieldLabel, Range, Text } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...ie()}}},tags:["!dev"],render:({})=>{const[e,t]=m.useState([30,70]);return s.createElement(re,null,s.createElement(oe,{id:"range-label"},"Price range"),s.createElement(vn,{"aria-live":"polite",id:"range-sublabel",preset:hn.caption},"Selected values: ",e[0]," - ",e[1],"€"),s.createElement(p,{"aria-labelledby":["range-label","range-sublabel"],onDragging:({value:a})=>t(a),value:e}))}};var Pe,Fe,ke;L.parameters={...L.parameters,docs:{...(Pe=L.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
    displayBounds: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    displayTooltip: {
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
}`,...(ke=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};var Ce,we,Ie;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Range } from '@ovhcloud/ods-react';
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
}`,...(Ie=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Ae,Oe,Ne;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Range } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Range />

      <Range defaultValue={[50, 75]} />
    </>
}`,...(Ne=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var Me,De,Le;U.parameters={...U.parameters,docs:{...(Me=U.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Range } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Range defaultValue={[20]} disabled />

      <Range defaultValue={[50, 75]} disabled />
    </>
}`,...(Le=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var je,qe,Ue;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Range:
      </FormFieldLabel>

      <Range />
    </FormField>
}`,...(Ue=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};var Be,$e,Ge;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Range } from '@ovhcloud/ods-react';\`
  },
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
}`,...(Ge=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var ze,We,He;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    width: '160px'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Range defaultValue={[50]} />
}`,...(He=(We=G.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Xe,Ye,Ke;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Range } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Range defaultValue={[20]} step={5} />

      <Range defaultValue={[50, 75]} step={5} />
    </>
}`,...(Ke=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Qe,Ze,Je;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Range } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Range defaultValue={[20]} ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90]} />

      <Range defaultValue={[50, 75]} ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90]} />
    </>
}`,...(Je=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var et,tt,nt;H.parameters={...H.parameters,docs:{...(et=H.parameters)==null?void 0:et.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Range } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <>
      <Range ticks={[{
      label: 'Low',
      value: 25
    }, {
      label: 'Medium',
      value: 50
    }, {
      label: 'High',
      value: 75
    }]} />

      <Range displayBounds={false} displayTooltip={false} max={5} min={1} ticks={[{
      label: 'Very Poor',
      value: 1
    }, {
      label: 'Poor',
      value: 2
    }, {
      label: 'Average',
      value: 3
    }, {
      label: 'Good',
      value: 4
    }, {
      label: 'Excellent',
      value: 5
    }]} />
    </>
}`,...(nt=(tt=H.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,rt,ot;X.parameters={...X.parameters,docs:{...(at=X.parameters)==null?void 0:at.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Volume
      </FormFieldLabel>

      <Range defaultValue={[50]} />
    </FormField>
}`,...(ot=(rt=X.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var st,lt,it;Y.parameters={...Y.parameters,docs:{...(st=Y.parameters)==null?void 0:st.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, FormField, FormFieldLabel, Range, Text } from '@ovhcloud/ods-react';
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
    const [values, setValues] = useState([30, 70]);
    return <FormField>
        <FormFieldLabel id="range-label">
          Price range
        </FormFieldLabel>

        <Text aria-live="polite" id="range-sublabel" preset={TEXT_PRESET.caption}>
          Selected values: {values[0]} - {values[1]}€
        </Text>

        <Range aria-labelledby={['range-label', 'range-sublabel']} onDragging={({
        value
      }) => setValues(value)} value={values} />
      </FormField>;
  }
}`,...(it=(lt=Y.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};const aa=["Demo","Controlled","Default","Disabled","InFormField","MaxMin","Overview","Step","Ticks","TicksLabels","AccessibilityFormField","AccessibilityDescriptiveSubLabel"],ga=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescriptiveSubLabel:Y,AccessibilityFormField:X,Controlled:j,Default:q,Demo:L,Disabled:U,InFormField:B,MaxMin:$,Overview:G,Step:z,Ticks:W,TicksLabels:H,__namedExportsOrder:aa,default:na},Symbol.toStringTag,{value:"Module"}));export{X as A,j as C,q as D,B as I,$ as M,G as O,ga as R,z as S,W as T,Y as a,U as b,H as c};
