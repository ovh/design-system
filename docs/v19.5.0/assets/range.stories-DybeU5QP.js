import{r as g,e as s}from"./index-jIWwRBLr.js";import{u as gt,F as oe,a as se}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{j as u}from"./jsx-runtime-Cfl8ynUo.js";import{c as Z}from"./index-CqY9YpN0.js";import{u as $t}from"./context-C_-r2uoG.js";import{b as Gt,T as zt,a as Ht}from"./TooltipTrigger-CRWH95NO.js";import{c as pt,L as C,M as I,a as le,y as Wt,ae as Xt,aH as J,r as Yt,a5 as Kt,az as Zt,Z as Jt,aI as Qt,am as en,f as tn,O as nn,T as an,S as rn,N as p,a7 as he,as as on,ao as sn,aq as ln,ar as dn,P as un,aJ as ft,ah as ee,aK as bt,aL as cn,aM as mn,aN as gn,aO as vt,aP as pn,aQ as fn,an as bn,aR as ie,aS as ye,aT as ne,aU as vn,B as ht,_ as hn,$ as yn,C as xn,a0 as Tn}from"./use-locale-context-kHyebpMI.js";import{T as Rn,a as En}from"./Text-CW33_IfE.js";import{e as Vn,o as _n,C as N}from"./controls-BtiQQn1l.js";import{s as de}from"./source-CPEZJ6oD.js";const[Sn,A]=pt({name:"SliderContext",hookName:"useSliderContext",providerName:"<SliderProvider />"}),yt=g.forwardRef((e,t)=>{const a=A(),n=C(a.getControlProps(),e);return u.jsx(I.div,{...n,ref:t})});yt.displayName="SliderControl";const[Pn,Fn]=pt({name:"SliderThumbPropsContext",hookName:"useSliderThumbPropsContext",providerName:"<SliderThumbPropsProvider />"}),xt=g.forwardRef((e,t)=>{const a=A(),n=Fn(),o=C(a.getHiddenInputProps(n),e);return u.jsx(I.input,{...o,ref:t})});xt.displayName="SliderHiddenInput";const Tt=g.forwardRef((e,t)=>{const[a,n]=le()(e,["value"]),o=A(),r=C(o.getMarkerProps(a),n);return u.jsx(I.span,{...r,ref:t})});Tt.displayName="SliderMarker";const Rt=g.forwardRef((e,t)=>{const a=A(),n=C(a.getMarkerGroupProps(),e);return u.jsx(I.div,{...n,ref:t})});Rt.displayName="SliderMarkerGroup";const Et=g.forwardRef((e,t)=>{const a=A(),n=C(a.getRangeProps(),e);return u.jsx(I.div,{...n,ref:t})});Et.displayName="SliderRange";var kn=nn("slider").parts("root","label","thumb","valueText","track","range","control","markerGroup","marker","draggingIndicator"),P=kn.build(),Vt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`slider:${e.id}`},_t=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.thumb)==null?void 0:n.call(a,t))??`slider:${e.id}:thumb:${t}`},ae=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.hiddenInput)==null?void 0:n.call(a,t))??`slider:${e.id}:input:${t}`},St=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`slider:${e.id}:control`},wn=e=>{var t;return((t=e.ids)==null?void 0:t.track)??`slider:${e.id}:track`},Cn=e=>{var t;return((t=e.ids)==null?void 0:t.range)??`slider:${e.id}:range`},xe=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`slider:${e.id}:label`},In=e=>{var t;return((t=e.ids)==null?void 0:t.valueText)??`slider:${e.id}:value-text`},An=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.marker)==null?void 0:n.call(a,t))??`slider:${e.id}:marker:${t}`},On=e=>e.getById(Vt(e)),Nn=(e,t)=>e.getById(_t(e,t)),Pt=e=>Jt(kt(e),"[role=slider]"),Mn=e=>Pt(e)[0],Ft=(e,t)=>e.getById(ae(e,t)),kt=e=>e.getById(St(e)),Te=(e,t)=>{const{prop:a,scope:n}=e,o=kt(n);if(!o)return;const l=gn(t,o).getPercentValue({orientation:a("orientation"),dir:a("dir"),inverted:{y:!0}});return vt(l,a("min"),a("max"),a("step"))},Dn=(e,t)=>{t.forEach((a,n)=>{const o=Ft(e,n);o&&fn(o,{value:a})})},Ln=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0});function jn(e){const t=e[0],a=e[e.length-1];return[t,a]}function qn(e){const{prop:t,computed:a}=e,n=a("valuePercent"),[o,r]=jn(n);if(n.length===1){if(t("origin")==="center"){const l=n[0]<50,d=l?`${n[0]}%`:"50%",v=l?"50%":`${100-n[0]}%`;return{start:d,end:v}}return t("origin")==="end"?{start:`${r}%`,end:"0%"}:{start:"0%",end:`${100-r}%`}}return{start:`${o}%`,end:`${100-r}%`}}function Un(e){const{computed:t}=e,a=t("isVertical"),n=t("isRtl");return a?{position:"absolute",bottom:"var(--slider-range-start)",top:"var(--slider-range-end)"}:{position:"absolute",[n?"right":"left"]:"var(--slider-range-start)",[n?"left":"right"]:"var(--slider-range-end)"}}function Bn(e,t){const{context:a,prop:n}=e,{height:o=0}=a.get("thumbSize")??{},r=ne([n("min"),n("max")],[-o/2,o/2]);return parseFloat(r(t).toFixed(2))}function $n(e,t){const{computed:a,context:n,prop:o}=e,{width:r=0}=n.get("thumbSize")??{};if(a("isRtl")){const v=ne([o("max"),o("min")],[-r/2,r/2]);return-1*parseFloat(v(t).toFixed(2))}const d=ne([o("min"),o("max")],[-r/2,r/2]);return parseFloat(d(t).toFixed(2))}function Gn(e,t,a){const{computed:n,prop:o}=e;if(o("thumbAlignment")==="center")return`${t}%`;const r=n("isVertical")?Bn(e,a):$n(e,a);return`calc(${t}% - ${r}px)`}function wt(e,t){const{prop:a}=e,n=ie(t,a("min"),a("max"))*100;return Gn(e,n,t)}function Ct(e){const{computed:t,prop:a}=e;let n="visible";return a("thumbAlignment")==="contain"&&!t("hasMeasuredThumbSize")&&(n="hidden"),n}function Re(e,t){const{computed:a}=e,n=a("isVertical")?"bottom":"insetInlineStart";return{visibility:Ct(e),position:"absolute",transform:"var(--slider-thumb-transform)",[n]:`var(--slider-thumb-offset-${t})`}}function zn(){return{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",position:"relative"}}function Hn(e){const{context:t,computed:a}=e,n=a("isVertical"),o=a("isRtl"),r=qn(e),l=t.get("thumbSize");return{...t.get("value").reduce((v,T,h)=>{const E=wt(e,T);return{...v,[`--slider-thumb-offset-${h}`]:E}},{}),"--slider-thumb-width":ye(l==null?void 0:l.width),"--slider-thumb-height":ye(l==null?void 0:l.height),"--slider-thumb-transform":n?"translateY(50%)":o?"translateX(50%)":"translateX(-50%)","--slider-range-start":r.start,"--slider-range-end":r.end}}function Wn(e,t){const{computed:a}=e,n=a("isHorizontal"),o=a("isRtl");return{visibility:Ct(e),position:"absolute",pointerEvents:"none",[n?"insetInlineStart":"bottom"]:wt(e,t),translate:"var(--translate-x) var(--translate-y)","--translate-x":n?o?"50%":"-50%":"0%","--translate-y":n?"0%":"50%"}}function Xn(){return{userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none",position:"relative"}}function Yn(e,t){return t.map((a,n)=>re(e,a,n))}function w(e,t){const{context:a,prop:n}=e,o=n("step")*n("minStepsBetweenThumbs");return bt(a.get("value"),n("min"),n("max"),o)[t]}function re(e,t,a){const{prop:n}=e,o=w(e,a),r=ft(t,n("min"),n("max"),n("step"));return ee(r,o.min,o.max)}function Kn(e,t,a){const{context:n,prop:o}=e,r=t??n.get("focusedIndex"),l=w(e,r),d=mn(r,{...l,step:a??o("step"),values:n.get("value")});return d[r]=ee(d[r],l.min,l.max),d}function Zn(e,t,a){const{context:n,prop:o}=e,r=t??n.get("focusedIndex"),l=w(e,r),d=cn(r,{...l,step:a??o("step"),values:n.get("value")});return d[r]=ee(d[r],l.min,l.max),d}function Jn(e,t){const{context:a}=e;return pn(a.get("value"),t)}function Qn(e,t){const{state:a,send:n,context:o,prop:r,computed:l,scope:d}=e,v=r("aria-label"),T=r("aria-labelledby"),h=o.get("value"),E=o.get("focusedIndex"),y=a.matches("focus"),b=a.matches("dragging"),f=l("isDisabled"),V=r("invalid"),R=l("isInteractive"),k=r("orientation")==="horizontal",S=r("orientation")==="vertical";function _(i){return ie(i,r("min"),r("max"))}function M(i){return vt(i,r("min"),r("max"),r("step"))}return{value:h,dragging:b,focused:y,setValue(i){n({type:"SET_VALUE",value:i})},getThumbValue(i){return h[i]},setThumbValue(i,c){n({type:"SET_VALUE",index:i,value:c})},getValuePercent:_,getPercentValue:M,getThumbPercent(i){return _(h[i])},setThumbPercent(i,c){const x=M(c);n({type:"SET_VALUE",index:i,value:x})},getThumbMin(i){return w(e,i).min},getThumbMax(i){return w(e,i).max},increment(i){n({type:"INCREMENT",index:i})},decrement(i){n({type:"DECREMENT",index:i})},focus(){R&&n({type:"FOCUS",index:0})},getLabelProps(){return t.label({...P.label.attrs,dir:r("dir"),"data-disabled":p(f),"data-orientation":r("orientation"),"data-invalid":p(V),"data-dragging":p(b),"data-focus":p(y),id:xe(d),htmlFor:ae(d,0),onClick(i){var c;R&&(i.preventDefault(),(c=Mn(d))==null||c.focus())},style:{userSelect:"none",WebkitUserSelect:"none"}})},getRootProps(){return t.element({...P.root.attrs,"data-disabled":p(f),"data-orientation":r("orientation"),"data-dragging":p(b),"data-invalid":p(V),"data-focus":p(y),id:Vt(d),dir:r("dir"),style:Hn(e)})},getValueTextProps(){return t.element({...P.valueText.attrs,dir:r("dir"),"data-disabled":p(f),"data-orientation":r("orientation"),"data-invalid":p(V),"data-focus":p(y),id:In(d)})},getTrackProps(){return t.element({...P.track.attrs,dir:r("dir"),id:wn(d),"data-disabled":p(f),"data-invalid":p(V),"data-dragging":p(b),"data-orientation":r("orientation"),"data-focus":p(y),style:{position:"relative"}})},getThumbProps(i){var be;const{index:c=0,name:x}=i,Dt=h[c],fe=w(e,c),Lt=(be=r("getAriaValueText"))==null?void 0:be({value:Dt,index:c}),jt=Array.isArray(v)?v[c]:v,qt=Array.isArray(T)?T[c]:T;return t.element({...P.thumb.attrs,dir:r("dir"),"data-index":c,"data-name":x,id:_t(d,c),"data-disabled":p(f),"data-orientation":r("orientation"),"data-focus":p(y&&E===c),"data-dragging":p(b&&E===c),draggable:!1,"aria-disabled":ln(f),"aria-label":jt,"aria-labelledby":qt??xe(d),"aria-orientation":r("orientation"),"aria-valuemax":fe.max,"aria-valuemin":fe.min,"aria-valuenow":h[c],"aria-valuetext":Lt,role:"slider",tabIndex:f?void 0:0,style:Re(e,c),onPointerDown(F){R&&he(F)&&(n({type:"THUMB_POINTER_DOWN",index:c}),F.stopPropagation())},onBlur(){R&&n({type:"BLUR"})},onFocus(){R&&n({type:"FOCUS",index:c})},onKeyDown(F){if(F.defaultPrevented||!R)return;const O=dn(F)*r("step"),Ut={ArrowUp(){k||n({type:"ARROW_INC",step:O,src:"ArrowUp"})},ArrowDown(){k||n({type:"ARROW_DEC",step:O,src:"ArrowDown"})},ArrowLeft(){S||n({type:"ARROW_DEC",step:O,src:"ArrowLeft"})},ArrowRight(){S||n({type:"ARROW_INC",step:O,src:"ArrowRight"})},PageUp(){n({type:"ARROW_INC",step:O,src:"PageUp"})},PageDown(){n({type:"ARROW_DEC",step:O,src:"PageDown"})},Home(){n({type:"HOME"})},End(){n({type:"END"})}},Bt=un(F,{dir:r("dir"),orientation:r("orientation")}),ve=Ut[Bt];ve&&(ve(F),F.preventDefault(),F.stopPropagation())}})},getHiddenInputProps(i){const{index:c=0,name:x}=i;return t.input({name:x??(r("name")?r("name")+(h.length>1?"[]":""):void 0),form:r("form"),type:"text",hidden:!0,defaultValue:h[c],id:ae(d,c)})},getRangeProps(){return t.element({id:Cn(d),...P.range.attrs,dir:r("dir"),"data-dragging":p(b),"data-focus":p(y),"data-invalid":p(V),"data-disabled":p(f),"data-orientation":r("orientation"),style:Un(e)})},getControlProps(){return t.element({...P.control.attrs,dir:r("dir"),id:St(d),"data-dragging":p(b),"data-disabled":p(f),"data-orientation":r("orientation"),"data-invalid":p(V),"data-focus":p(y),style:zn(),onPointerDown(i){if(!R||!he(i)||on(i))return;const c=sn(i);n({type:"POINTER_DOWN",point:c}),i.preventDefault(),i.stopPropagation()}})},getMarkerGroupProps(){return t.element({...P.markerGroup.attrs,role:"presentation",dir:r("dir"),"aria-hidden":!0,"data-orientation":r("orientation"),style:Xn()})},getMarkerProps(i){const c=Wn(e,i.value);let x;return i.value<an(h)?x="under-value":i.value>rn(h)?x="over-value":x="at-value",t.element({...P.marker.attrs,id:An(d,i.value),role:"presentation",dir:r("dir"),"data-orientation":r("orientation"),"data-value":i.value,"data-disabled":p(f),"data-state":x,style:c})},getDraggingIndicatorProps(i){const{index:c=0}=i,x=c===E&&b;return t.element({...P.draggingIndicator.attrs,role:"presentation",dir:r("dir"),hidden:!x,"data-orientation":r("orientation"),"data-state":x?"open":"closed",style:Re(e,c)})}}}var ea=(e,t)=>(e==null?void 0:e.width)===(t==null?void 0:t.width)&&(e==null?void 0:e.height)===(t==null?void 0:t.height),Ee=(e,t,a,n,o)=>bt(e,t,a,o*n).map(l=>{const d=ft(l.value,l.min,l.max,n),v=ee(d,l.min,l.max);if(!bn(v,t,a))throw new Error("[zag-js/slider] The configured `min`, `max`, `step` or `minStepsBetweenThumbs` values are invalid");return v}),ta=Wt({props({props:e}){const t=e.min??0,a=e.max??100,n=e.step??1,o=e.defaultValue??[t],r=e.minStepsBetweenThumbs??0;return{dir:"ltr",thumbAlignment:"contain",origin:"start",orientation:"horizontal",minStepsBetweenThumbs:r,...e,defaultValue:Ee(o,t,a,n,r),value:e.value?Ee(e.value,t,a,n,r):void 0,max:a,step:n,min:t}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{thumbSize:t(()=>({defaultValue:e("thumbSize")||null})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:tn,hash(n){return n.join(",")},onChange(n){var o;(o=e("onValueChange"))==null||o({value:n})}})),focusedIndex:t(()=>({defaultValue:-1,onChange(n){var r;const o=a();(r=e("onFocusChange"))==null||r({focusedIndex:n,value:o.get("value")})}})),fieldsetDisabled:t(()=>({defaultValue:!1}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal",isVertical:({prop:e})=>e("orientation")==="vertical",isRtl:({prop:e})=>e("orientation")==="horizontal"&&e("dir")==="rtl",isDisabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled"),isInteractive:({prop:e,computed:t})=>!(e("readOnly")||t("isDisabled")),hasMeasuredThumbSize:({context:e})=>e.get("thumbSize")!=null,valuePercent:Xt(({context:e,prop:t})=>[e.get("value"),t("min"),t("max")],([e,t,a])=>e.map(n=>100*ie(n,t,a)))},watch({track:e,action:t,context:a}){e([()=>a.hash("value")],()=>{t(["syncInputElements","dispatchChangeEvent"])})},effects:["trackFormControlState","trackThumbSize"],on:{SET_VALUE:[{guard:"hasIndex",actions:["setValueAtIndex"]},{actions:["setValue"]}],INCREMENT:{actions:["incrementThumbAtIndex"]},DECREMENT:{actions:["decrementThumbAtIndex"]}},states:{idle:{on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},FOCUS:{target:"focus",actions:["setFocusedIndex"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]}}},focus:{entry:["focusActiveThumb"],on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]},ARROW_DEC:{actions:["decrementThumbAtIndex","invokeOnChangeEnd"]},ARROW_INC:{actions:["incrementThumbAtIndex","invokeOnChangeEnd"]},HOME:{actions:["setFocusedThumbToMin","invokeOnChangeEnd"]},END:{actions:["setFocusedThumbToMax","invokeOnChangeEnd"]},BLUR:{target:"idle",actions:["clearFocusedIndex"]}}},dragging:{entry:["focusActiveThumb"],effects:["trackPointerMove"],on:{POINTER_UP:{target:"focus",actions:["invokeOnChangeEnd"]},POINTER_MOVE:{actions:["setPointerValue"]}}}},implementations:{guards:{hasIndex:({event:e})=>e.index!=null},effects:{trackFormControlState({context:e,scope:t}){return en(On(t),{onFieldsetDisabledChange(a){e.set("fieldsetDisabled",a)},onFormReset(){e.set("value",e.initial("value"))}})},trackPointerMove({scope:e,send:t}){return Qt(e.getDoc(),{onPointerMove(a){t({type:"POINTER_MOVE",point:a.point})},onPointerUp(){t({type:"POINTER_UP"})}})},trackThumbSize({context:e,scope:t,prop:a}){if(!(a("thumbAlignment")!=="contain"||a("thumbSize")))return Zt(Pt(t),{box:"border-box",measure(n){return Ln(n)},onEntry({rects:n}){if(n.length===0)return;const o=vn(n[0],["width","height"]);ea(e.get("thumbSize"),o)||e.set("thumbSize",o)}})}},actions:{dispatchChangeEvent({context:e,scope:t}){Dn(t,e.get("value"))},syncInputElements({context:e,scope:t}){e.get("value").forEach((a,n)=>{const o=Ft(t,n);Kt(o,a.toString())})},invokeOnChangeEnd({prop:e,context:t}){queueMicrotask(()=>{var a;(a=e("onValueChangeEnd"))==null||a({value:t.get("value")})})},setClosestThumbIndex(e){const{context:t,event:a}=e,n=Te(e,a.point);if(n==null)return;const o=Jn(e,n);t.set("focusedIndex",o)},setFocusedIndex({context:e,event:t}){e.set("focusedIndex",t.index)},clearFocusedIndex({context:e}){e.set("focusedIndex",-1)},setPointerValue(e){queueMicrotask(()=>{const{context:t,event:a}=e,n=Te(e,a.point);if(n==null)return;const o=t.get("focusedIndex"),r=re(e,n,o);t.set("value",l=>J(l,o,r))})},focusActiveThumb({scope:e,context:t}){Yt(()=>{const a=Nn(e,t.get("focusedIndex"));a==null||a.focus({preventScroll:!0})})},decrementThumbAtIndex(e){const{context:t,event:a}=e,n=Kn(e,a.index,a.step);t.set("value",n)},incrementThumbAtIndex(e){const{context:t,event:a}=e,n=Zn(e,a.index,a.step);t.set("value",n)},setFocusedThumbToMin(e){const{context:t}=e,a=t.get("focusedIndex"),{min:n}=w(e,a);t.set("value",o=>J(o,a,n))},setFocusedThumbToMax(e){const{context:t}=e,a=t.get("focusedIndex"),{max:n}=w(e,a);t.set("value",o=>J(o,a,n))},setValueAtIndex(e){const{context:t,event:a}=e,n=re(e,a.value,a.index);t.set("value",o=>J(o,a.index,n))},setValue(e){const{context:t,event:a}=e,n=Yn(e,a.value);t.set("value",n)}}}});ht()(["aria-label","aria-labelledby","dir","disabled","form","getAriaValueText","getRootNode","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value","defaultValue"]);ht()(["index","name"]);const na=e=>{const t=g.useId(),{getRootNode:a}=hn(),{dir:n}=yn(),o={id:t,dir:n,getRootNode:a,...e},r=xn(ta,o);return Qn(r,Tn)},It=g.forwardRef((e,t)=>{const[a,n]=le()(e,["aria-label","aria-labelledby","defaultValue","disabled","form","getAriaValueText","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value"]),o=na(a),r=C(o.getRootProps(),n);return u.jsx(Sn,{value:o,children:u.jsx(I.div,{...r,ref:t})})});It.displayName="SliderRoot";const At=g.forwardRef((e,t)=>{const[a,n]=le()(e,["index","name"]),o=A(),r=C(o.getThumbProps(a),n);return u.jsx(Pn,{value:a,children:u.jsx(I.div,{...r,ref:t})})});At.displayName="SliderThumb";const Ot=g.forwardRef((e,t)=>{const a=A(),n=C(a.getTrackProps(),e);return u.jsx(I.div,{...n,ref:t})});Ot.displayName="SliderTrack";const Q=20,Nt=g.createContext(void 0);function Mt({children:e,disabled:t}){const[a,n]=g.useState({bottom:0,left:0,right:0});return u.jsx(Nt.Provider,{value:{disabled:t,rootPadding:a,setRootPadding:n},children:e})}function te(){return $t(Nt)}Mt.__docgenInfo={description:"",methods:[],displayName:"RangeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const Ve={"range-bounds":"_range-bounds_plgrk_2","range-bounds--disabled":"_range-bounds--disabled_plgrk_9"},ue=({max:e,min:t})=>{const{disabled:a}=te();return u.jsxs("div",{className:Z(Ve["range-bounds"],{[Ve["range-bounds--disabled"]]:a}),children:[u.jsx("span",{children:t}),u.jsx("span",{children:e})]})};ue.displayName="RangeBounds";ue.__docgenInfo={description:"",methods:[],displayName:"RangeBounds",props:{max:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""}}};const _e={"range-thumb":"_range-thumb_1r225_2","range-thumb--invalid":"_range-thumb--invalid_1r225_22"},ce=({displayTooltip:e,index:t,invalid:a})=>{const n=g.useRef(null),o=gt(),{value:r}=A(),{disabled:l}=te(),[d,v]=g.useState(!1),[T,h]=g.useState(!1);g.useEffect(()=>{if(n.current){const f=new MutationObserver(V=>{var R;V.length&&V[0].target.dataset.focus===""&&((R=n.current)==null||R.focus())});return f.observe(n.current,{attributeFilter:["data-focus"],attributes:!0}),()=>f.disconnect()}},[n]);function E(){v(!1),h(!1)}function y(){v(!0),h(!0)}function b(f){(f.ctrlKey||f.metaKey)&&(f.key==="ArrowRight"||f.key==="ArrowLeft")&&f.preventDefault()}return u.jsxs(Gt,{open:e&&!l&&(d||T),children:[u.jsx(zt,{asChild:!0,children:u.jsx(At,{"aria-describedby":o==null?void 0:o.ariaDescribedBy,"aria-invalid":a,"aria-labelledby":t===0?o==null?void 0:o.labelId:void 0,className:Z(_e["range-thumb"],{[_e["range-thumb--invalid"]]:a}),index:t,onBlur:E,onFocus:y,onKeyDown:b,onMouseLeave:()=>h(!1),onMouseOver:()=>h(!0),ref:n,role:"slider",children:u.jsx(xt,{})})}),u.jsx(Ht,{withArrow:!0,children:r[t]})]})};ce.displayName="RangeThumb";ce.__docgenInfo={description:"",methods:[],displayName:"RangeThumb",props:{displayTooltip:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""}}};const D={"range-tick":"_range-tick_sfwc5_2","range-tick--single-mode":"_range-tick--single-mode_sfwc5_15","range-tick--custom-marker":"_range-tick--custom-marker_sfwc5_18","range-tick__label":"_range-tick__label_sfwc5_26","range-tick__label--disabled":"_range-tick__label--disabled_sfwc5_30"},me=({index:e,isLast:t,singleMode:a,tick:n})=>{const{disabled:o,setRootPadding:r}=te(),l=g.useRef(null),d=typeof n=="number";return g.useEffect(()=>{if(!l.current||typeof n=="number")return;const v=new ResizeObserver(T=>{if(T&&T.length){const{height:h,top:E,width:y}=T[0].contentRect;e===0?r(b=>({...b,left:Math.max(0,y/2-Q/2)})):t&&r(b=>({...b,right:Math.max(0,y/2-Q/2)})),r(b=>({...b,bottom:h+E}))}});return v.observe(l.current),()=>{v.disconnect()}},[e,t,r,n,l]),u.jsx(Tt,{className:Z(D["range-tick"],{[D["range-tick--custom-marker"]]:!d},{[D["range-tick--single-mode"]]:a}),ref:l,value:d?n:n.value,children:!d&&u.jsx("span",{className:Z(D["range-tick__label"],{[D["range-tick__label--disabled"]]:o}),children:n.label})})};me.displayName="RangeTick";me.__docgenInfo={description:"",methods:[],displayName:"RangeTick",props:{index:{required:!0,tsType:{name:"number"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},singleMode:{required:!0,tsType:{name:"boolean"},description:""},tick:{required:!0,tsType:{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]},description:""}}};const aa={"range-ticks":"_range-ticks_abmz7_2"},ge=({singleMode:e,ticks:t})=>u.jsx(Rt,{className:aa["range-ticks"],children:t.map((a,n)=>u.jsx(me,{index:n,isLast:n===t.length-1,singleMode:e,tick:a},typeof a=="number"?a:a.value))});ge.displayName="RangeTicks";ge.__docgenInfo={description:"",methods:[],displayName:"RangeTicks",props:{singleMode:{required:!0,tsType:{name:"boolean"},description:""},ticks:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"RangeTickItem[]"},description:""}}};const Se={"range-track":"_range-track_12bwj_2","range-track__filled":"_range-track__filled_12bwj_9"},pe=()=>u.jsx(Ot,{className:Se["range-track"],children:u.jsx(Et,{className:Se["range-track__filled"]})});pe.displayName="RangeTrack";pe.__docgenInfo={description:"",methods:[],displayName:"RangeTrack"};const ra="_range_1ppap_2",oa="_range__control_1ppap_8",Pe={range:ra,range__control:oa},sa=g.forwardRef(({className:e,defaultValue:t,displayBounds:a=!0,displayTooltip:n=!0,id:o,invalid:r,max:l=100,min:d=0,name:v,onDragging:T,onValueChange:h,step:E=1,ticks:y,value:b,...f},V)=>{const{disabled:R,rootPadding:k}=te(),S=gt(),_=g.useRef(null),M=g.useMemo(()=>r||(S==null?void 0:S.invalid),[S,r]),i=g.useMemo(()=>b&&b.length?b.length:t&&t.length?t.length:1,[t,b]);return g.useImperativeHandle(V,()=>_.current,[_]),g.useEffect(()=>{_.current&&(_.current.style.setProperty("--range-padding-bottom",`${k.bottom}px`),_.current.style.setProperty("--range-padding-left",`${k.left}px`),_.current.style.setProperty("--range-padding-right",`${k.right}px`))},[_,k]),u.jsxs(It,{"aria-label":f["aria-label"],"aria-labelledby":f["aria-labelledby"],className:Z(Pe.range,e),"data-ods":"range",defaultValue:t,disabled:R,id:o||(S==null?void 0:S.id),invalid:M,max:l,min:d,minStepsBetweenThumbs:1,name:v,orientation:"horizontal",onValueChange:T,onValueChangeEnd:h,ref:_,role:"group",step:E,thumbSize:{height:Q,width:Q},value:b,...f,children:[u.jsxs(yt,{className:Pe.range__control,children:[u.jsx(pe,{}),Array.from({length:i}).map((c,x)=>u.jsx(ce,{displayTooltip:n,index:x,invalid:M},x))]}),y&&y.length>0&&u.jsx(ge,{singleMode:i<=1,ticks:y}),a&&u.jsx(ue,{max:l,min:d})]})}),m=g.forwardRef(({disabled:e,...t},a)=>u.jsx(Mt,{disabled:e,children:u.jsx(sa,{ref:a,...t})}));m.displayName="Range";m.__docgenInfo={description:"",methods:[],displayName:"Range",props:{"aria-label":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The aria-label of each slider thumb. Useful for providing an accessible name to the slider."},"aria-labelledby":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The id of the elements that labels each slider thumb. Useful for providing an accessible name to the slider."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The initial selected value(s). Use when you don't need to control the value(s) of the range."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},displayBounds:{required:!1,tsType:{name:"boolean"},description:"Whether the range bounds are displayed under the track."},displayTooltip:{required:!1,tsType:{name:"boolean"},description:"Whether a tooltip with the current thumb value is displayed on drag."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},max:{required:!1,tsType:{name:"number"},description:"The maximum value that can be selected."},min:{required:!1,tsType:{name:"number"},description:"The minimum value that can be selected."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onDragging:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb moves."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb is released."},step:{required:!1,tsType:{name:"number"},description:"The amount to increment or decrement the value by."},ticks:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"RangeTickItem[]"},description:"List of tick indicators to display alongside the range."},value:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The controlled selected value(s)."}},composes:["Omit"]};const la={argTypes:Vn(["aria-label","aria-labelledby","defaultValue","max","min","name","onDragging","onValueChange","ticks","value"]),component:m,title:"React Components/Range"},L={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",justifyContent:"center",height:"80vh"}},e())],render:({dualRange:e,...t})=>{const[n,o]=g.useState([0]);return g.useEffect(()=>{if(e){const r=t.step||1,l=n[0]===100?n[0]-r:n[0];o([l,l+r])}else o([n[0]])},[e]),s.createElement(m,{...t,max:100,onDragging:({value:r})=>o(r),value:n})},argTypes:_n({disabled:{table:{category:N.general},control:{type:"boolean"}},displayBounds:{table:{category:N.general},control:{type:"boolean"}},displayTooltip:{table:{category:N.general},control:{type:"boolean"}},dualRange:{table:{category:N.general,type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{table:{category:N.general},control:"boolean"},step:{table:{category:N.general},control:"number"}})},j={globals:{imports:`import { Range } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...de()}}},render:({})=>{const[e,t]=g.useState(),[a,n]=g.useState();function o(l){t(l.value[0])}function r(l){n(l.value[0])}return s.createElement(s.Fragment,null,s.createElement("p",null,s.createElement("span",null,"Final value: ",a),s.createElement("br",null),s.createElement("span",null,"Dragged value: ",e)),s.createElement(m,{onDragging:o,onValueChange:r,value:e?[e]:void 0}))}},q={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(m,null),s.createElement(m,{defaultValue:[50,75]}))},U={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(m,{defaultValue:[20],disabled:!0}),s.createElement(m,{defaultValue:[50,75],disabled:!0}))},B={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(oe,null,s.createElement(se,null,"Range:"),s.createElement(m,null))},$={globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement("p",null,"Max 500"),s.createElement(m,{defaultValue:[50],max:500}),s.createElement(m,{defaultValue:[50,75],max:500}),s.createElement("p",null,"Min 25"),s.createElement(m,{defaultValue:[50],min:25}),s.createElement(m,{defaultValue:[50,75],min:25}),s.createElement("p",null,"Max 75 & Min 25"),s.createElement(m,{defaultValue:[50],max:75,min:25}),s.createElement(m,{defaultValue:[50,75],max:75,min:25}))},G={decorators:[e=>s.createElement("div",{style:{width:"160px"}},e())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>s.createElement(m,{defaultValue:[50]})},z={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(m,{defaultValue:[20],step:5}),s.createElement(m,{defaultValue:[50,75],step:5}))},H={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(m,{defaultValue:[20],ticks:[10,20,30,40,50,60,70,80,90]}),s.createElement(m,{defaultValue:[50,75],ticks:[10,20,30,40,50,60,70,80,90]}))},W={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...de()}}},render:({})=>s.createElement(s.Fragment,null,s.createElement(m,{ticks:[{label:"Low",value:25},{label:"Medium",value:50},{label:"High",value:75}]}),s.createElement(m,{displayBounds:!1,displayTooltip:!1,max:5,min:1,ticks:[{label:"Very Poor",value:1},{label:"Poor",value:2},{label:"Average",value:3},{label:"Good",value:4},{label:"Excellent",value:5}]}))},X={globals:{imports:"import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(oe,null,s.createElement(se,null,"Volume"),s.createElement(m,{defaultValue:[50]}))},Y={globals:{imports:`import { TEXT_PRESET, FormField, FormFieldLabel, Range, Text } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...de()}}},tags:["!dev"],render:({})=>{const[e,t]=g.useState([30,70]);return s.createElement(oe,null,s.createElement(se,{id:"range-label"},"Price range"),s.createElement(Rn,{"aria-live":"polite",id:"range-sublabel",preset:En.caption},"Selected values: ",e[0]," - ",e[1],"€"),s.createElement(m,{"aria-labelledby":["range-label","range-sublabel"],onDragging:({value:a})=>t(a),value:e}))}},K={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>s.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"240px"}},s.createElement(m,null),s.createElement(m,{defaultValue:[50,75]}),s.createElement(m,{disabled:!0,defaultValue:[20]}),s.createElement(m,{disabled:!0,defaultValue:[50,75]}),s.createElement(m,{step:5,defaultValue:[20]}),s.createElement(m,{ticks:[10,20,30,40,50,60,70,80,90],defaultValue:[20]}))};var Fe,ke,we;L.parameters={...L.parameters,docs:{...(Fe=L.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(we=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Ce,Ie,Ae;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ae=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var Oe,Ne,Me;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var De,Le,je;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(je=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var qe,Ue,Be;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Be=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:Be.source}}};var $e,Ge,ze;$.parameters={...$.parameters,docs:{...($e=$.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var He,We,Xe;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    width: '160px'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Range defaultValue={[50]} />
}`,...(Xe=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ke,Ze;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ze=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};var Je,Qe,et;H.parameters={...H.parameters,docs:{...(Je=H.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(et=(Qe=H.parameters)==null?void 0:Qe.docs)==null?void 0:et.source}}};var tt,nt,at;W.parameters={...W.parameters,docs:{...(tt=W.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=W.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var rt,ot,st;X.parameters={...X.parameters,docs:{...(rt=X.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(st=(ot=X.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var lt,it,dt;Y.parameters={...Y.parameters,docs:{...(lt=Y.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(dt=(it=Y.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var ut,ct,mt;K.parameters={...K.parameters,docs:{...(ut=K.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '240px'
  }}>
      <Range />
      <Range defaultValue={[50, 75]} />
      <Range disabled defaultValue={[20]} />
      <Range disabled defaultValue={[50, 75]} />
      <Range step={5} defaultValue={[20]} />
      <Range ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90]} defaultValue={[20]} />
    </div>
}`,...(mt=(ct=K.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};const ia=["Demo","Controlled","Default","Disabled","InFormField","MaxMin","Overview","Step","Ticks","TicksLabels","AccessibilityFormField","AccessibilityDescriptiveSubLabel","ThemeGenerator"],ya=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescriptiveSubLabel:Y,AccessibilityFormField:X,Controlled:j,Default:q,Demo:L,Disabled:U,InFormField:B,MaxMin:$,Overview:G,Step:z,ThemeGenerator:K,Ticks:H,TicksLabels:W,__namedExportsOrder:ia,default:la},Symbol.toStringTag,{value:"Module"}));export{X as A,j as C,q as D,B as I,$ as M,G as O,ya as R,z as S,H as T,Y as a,U as b,W as c};
