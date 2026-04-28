import{r as g,e as s}from"./index-jIWwRBLr.js";import{u as vt,F as se,a as le}from"./index-B0M5RXeR.js";import{j as u}from"./jsx-runtime-Cfl8ynUo.js";import{c as Z}from"./index-CqY9YpN0.js";import{u as Ht}from"./context-C_-r2uoG.js";import{b as Xt,T as Yt,a as Kt}from"./index-Ct9O8XVq.js";import{c as ht,M as C,N as I,a as ie,z as Qt,ae as Zt,aL as J,r as Jt,a5 as en,aw as tn,_ as nn,aI as an,am as rn,f as on,P as sn,U as ln,T as dn,O as p,a9 as ye,as as un,ao as cn,aq as mn,ar as gn,Q as pn,aM as yt,ah as te,aN as xt,aO as fn,aP as bn,aQ as vn,aR as Tt,aS as hn,aT as yn,an as xn,aU as de,aV as xe,aW as ae,aX as Tn,C as Rt,$ as Rn,u as En,D as Vn,a0 as _n}from"./use-locale-context-CGqEQCyU.js";import{T as Sn,a as Pn}from"./Text-CAQM6i-X.js";import{e as Fn,o as kn,C as N}from"./controls-BtiQQn1l.js";import{s as ue}from"./source-CPEZJ6oD.js";const[wn,A]=ht({name:"SliderContext",hookName:"useSliderContext",providerName:"<SliderProvider />"}),Et=g.forwardRef((e,t)=>{const a=A(),n=C(a.getControlProps(),e);return u.jsx(I.div,{...n,ref:t})});Et.displayName="SliderControl";const[Cn,In]=ht({name:"SliderThumbPropsContext",hookName:"useSliderThumbPropsContext",providerName:"<SliderThumbPropsProvider />"}),Vt=g.forwardRef((e,t)=>{const a=A(),n=In(),o=C(a.getHiddenInputProps(n),e);return u.jsx(I.input,{...o,ref:t})});Vt.displayName="SliderHiddenInput";const _t=g.forwardRef((e,t)=>{const[a,n]=ie()(e,["value"]),o=A(),r=C(o.getMarkerProps(a),n);return u.jsx(I.span,{...r,ref:t})});_t.displayName="SliderMarker";const St=g.forwardRef((e,t)=>{const a=A(),n=C(a.getMarkerGroupProps(),e);return u.jsx(I.div,{...n,ref:t})});St.displayName="SliderMarkerGroup";const Pt=g.forwardRef((e,t)=>{const a=A(),n=C(a.getRangeProps(),e);return u.jsx(I.div,{...n,ref:t})});Pt.displayName="SliderRange";var An=sn("slider").parts("root","label","thumb","valueText","track","range","control","markerGroup","marker","draggingIndicator"),P=An.build(),Ft=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`slider:${e.id}`},kt=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.thumb)==null?void 0:n.call(a,t))??`slider:${e.id}:thumb:${t}`},re=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.hiddenInput)==null?void 0:n.call(a,t))??`slider:${e.id}:input:${t}`},wt=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`slider:${e.id}:control`},On=e=>{var t;return((t=e.ids)==null?void 0:t.track)??`slider:${e.id}:track`},Nn=e=>{var t;return((t=e.ids)==null?void 0:t.range)??`slider:${e.id}:range`},Te=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`slider:${e.id}:label`},Mn=e=>{var t;return((t=e.ids)==null?void 0:t.valueText)??`slider:${e.id}:value-text`},Dn=(e,t)=>{var a,n;return((n=(a=e.ids)==null?void 0:a.marker)==null?void 0:n.call(a,t))??`slider:${e.id}:marker:${t}`},Ln=e=>e.getById(Ft(e)),jn=(e,t)=>e.getById(kt(e,t)),Ct=e=>nn(At(e),"[role=slider]"),qn=e=>Ct(e)[0],It=(e,t)=>e.getById(re(e,t)),At=e=>e.getById(wt(e)),Re=(e,t)=>{const{prop:a,scope:n}=e,o=At(n);if(!o)return;const l=vn(t,o).getPercentValue({orientation:a("orientation"),dir:a("dir"),inverted:{y:!0}});return Tt(l,a("min"),a("max"),a("step"))},Un=(e,t)=>{t.forEach((a,n)=>{const o=It(e,n);o&&yn(o,{value:a})})},$n=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0});function Bn(e){const t=e[0],a=e[e.length-1];return[t,a]}function Gn(e){const{prop:t,computed:a}=e,n=a("valuePercent"),[o,r]=Bn(n);if(n.length===1){if(t("origin")==="center"){const l=n[0]<50,d=l?`${n[0]}%`:"50%",v=l?"50%":`${100-n[0]}%`;return{start:d,end:v}}return t("origin")==="end"?{start:`${r}%`,end:"0%"}:{start:"0%",end:`${100-r}%`}}return{start:`${o}%`,end:`${100-r}%`}}function zn(e){const{computed:t}=e,a=t("isVertical"),n=t("isRtl");return a?{position:"absolute",bottom:"var(--slider-range-start)",top:"var(--slider-range-end)"}:{position:"absolute",[n?"right":"left"]:"var(--slider-range-start)",[n?"left":"right"]:"var(--slider-range-end)"}}function Wn(e,t){const{context:a,prop:n}=e,{height:o=0}=a.get("thumbSize")??{},r=ae([n("min"),n("max")],[-o/2,o/2]);return parseFloat(r(t).toFixed(2))}function Hn(e,t){const{computed:a,context:n,prop:o}=e,{width:r=0}=n.get("thumbSize")??{};if(a("isRtl")){const v=ae([o("max"),o("min")],[-r/2,r/2]);return-1*parseFloat(v(t).toFixed(2))}const d=ae([o("min"),o("max")],[-r/2,r/2]);return parseFloat(d(t).toFixed(2))}function Xn(e,t,a){const{computed:n,prop:o}=e;if(o("thumbAlignment")==="center")return`${t}%`;const r=n("isVertical")?Wn(e,a):Hn(e,a);return`calc(${t}% - ${r}px)`}function Ot(e,t){const{prop:a}=e,n=de(t,a("min"),a("max"))*100;return Xn(e,n,t)}function Nt(e){const{computed:t,prop:a}=e;let n="visible";return a("thumbAlignment")==="contain"&&!t("hasMeasuredThumbSize")&&(n="hidden"),n}function Ee(e,t){const{computed:a}=e,n=a("isVertical")?"bottom":"insetInlineStart";return{visibility:Nt(e),position:"absolute",transform:"var(--slider-thumb-transform)",[n]:`var(--slider-thumb-offset-${t})`}}function Yn(){return{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",position:"relative"}}function Kn(e){const{context:t,computed:a}=e,n=a("isVertical"),o=a("isRtl"),r=Gn(e),l=t.get("thumbSize");return{...t.get("value").reduce((v,T,h)=>{const E=Ot(e,T);return{...v,[`--slider-thumb-offset-${h}`]:E}},{}),"--slider-thumb-width":xe(l==null?void 0:l.width),"--slider-thumb-height":xe(l==null?void 0:l.height),"--slider-thumb-transform":n?"translateY(50%)":o?"translateX(50%)":"translateX(-50%)","--slider-range-start":r.start,"--slider-range-end":r.end}}function Qn(e,t){const{computed:a}=e,n=a("isHorizontal"),o=a("isRtl");return{visibility:Nt(e),position:"absolute",pointerEvents:"none",[n?"insetInlineStart":"bottom"]:Ot(e,t),translate:"var(--translate-x) var(--translate-y)","--translate-x":n?o?"50%":"-50%":"0%","--translate-y":n?"0%":"50%"}}function Zn(){return{userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none",position:"relative"}}function Jn(e,t){return t.map((a,n)=>oe(e,a,n))}function w(e,t){const{context:a,prop:n}=e,o=n("step")*n("minStepsBetweenThumbs");return xt(a.get("value"),n("min"),n("max"),o)[t]}function oe(e,t,a){const{prop:n}=e,o=w(e,a),r=yt(t,n("min"),n("max"),n("step"));return te(r,o.min,o.max)}function ea(e,t,a){const{context:n,prop:o}=e,r=t??n.get("focusedIndex"),l=w(e,r),d=bn(r,{...l,step:a??o("step"),values:n.get("value")});return d[r]=te(d[r],l.min,l.max),d}function ta(e,t,a){const{context:n,prop:o}=e,r=t??n.get("focusedIndex"),l=w(e,r),d=fn(r,{...l,step:a??o("step"),values:n.get("value")});return d[r]=te(d[r],l.min,l.max),d}function na(e,t){const{context:a}=e;return hn(a.get("value"),t)}function aa(e,t){const{state:a,send:n,context:o,prop:r,computed:l,scope:d}=e,v=r("aria-label"),T=r("aria-labelledby"),h=o.get("value"),E=o.get("focusedIndex"),y=a.matches("focus"),b=a.matches("dragging"),f=l("isDisabled"),V=r("invalid"),R=l("isInteractive"),k=r("orientation")==="horizontal",S=r("orientation")==="vertical";function _(i){return de(i,r("min"),r("max"))}function M(i){return Tt(i,r("min"),r("max"),r("step"))}return{value:h,dragging:b,focused:y,setValue(i){n({type:"SET_VALUE",value:i})},getThumbValue(i){return h[i]},setThumbValue(i,m){n({type:"SET_VALUE",index:i,value:m})},getValuePercent:_,getPercentValue:M,getThumbPercent(i){return _(h[i])},setThumbPercent(i,m){const x=M(m);n({type:"SET_VALUE",index:i,value:x})},getThumbMin(i){return w(e,i).min},getThumbMax(i){return w(e,i).max},increment(i){n({type:"INCREMENT",index:i})},decrement(i){n({type:"DECREMENT",index:i})},focus(){R&&n({type:"FOCUS",index:0})},getLabelProps(){return t.label({...P.label.attrs,dir:r("dir"),"data-disabled":p(f),"data-orientation":r("orientation"),"data-invalid":p(V),"data-dragging":p(b),"data-focus":p(y),id:Te(d),htmlFor:re(d,0),onClick(i){var m;R&&(i.preventDefault(),(m=qn(d))==null||m.focus())},style:{userSelect:"none",WebkitUserSelect:"none"}})},getRootProps(){return t.element({...P.root.attrs,"data-disabled":p(f),"data-orientation":r("orientation"),"data-dragging":p(b),"data-invalid":p(V),"data-focus":p(y),id:Ft(d),dir:r("dir"),style:Kn(e)})},getValueTextProps(){return t.element({...P.valueText.attrs,dir:r("dir"),"data-disabled":p(f),"data-orientation":r("orientation"),"data-invalid":p(V),"data-focus":p(y),id:Mn(d)})},getTrackProps(){return t.element({...P.track.attrs,dir:r("dir"),id:On(d),"data-disabled":p(f),"data-invalid":p(V),"data-dragging":p(b),"data-orientation":r("orientation"),"data-focus":p(y),style:{position:"relative"}})},getThumbProps(i){var ve;const{index:m=0,name:x}=i,Ut=h[m],be=w(e,m),$t=(ve=r("getAriaValueText"))==null?void 0:ve({value:Ut,index:m}),Bt=Array.isArray(v)?v[m]:v,Gt=Array.isArray(T)?T[m]:T;return t.element({...P.thumb.attrs,dir:r("dir"),"data-index":m,"data-name":x,id:kt(d,m),"data-disabled":p(f),"data-orientation":r("orientation"),"data-focus":p(y&&E===m),"data-dragging":p(b&&E===m),draggable:!1,"aria-disabled":mn(f),"aria-label":Bt,"aria-labelledby":Gt??Te(d),"aria-orientation":r("orientation"),"aria-valuemax":be.max,"aria-valuemin":be.min,"aria-valuenow":h[m],"aria-valuetext":$t,role:"slider",tabIndex:f?void 0:0,style:Ee(e,m),onPointerDown(F){R&&ye(F)&&(n({type:"THUMB_POINTER_DOWN",index:m}),F.stopPropagation())},onBlur(){R&&n({type:"BLUR"})},onFocus(){R&&n({type:"FOCUS",index:m})},onKeyDown(F){if(F.defaultPrevented||!R)return;const O=gn(F)*r("step"),zt={ArrowUp(){k||n({type:"ARROW_INC",step:O,src:"ArrowUp"})},ArrowDown(){k||n({type:"ARROW_DEC",step:O,src:"ArrowDown"})},ArrowLeft(){S||n({type:"ARROW_DEC",step:O,src:"ArrowLeft"})},ArrowRight(){S||n({type:"ARROW_INC",step:O,src:"ArrowRight"})},PageUp(){n({type:"ARROW_INC",step:O,src:"PageUp"})},PageDown(){n({type:"ARROW_DEC",step:O,src:"PageDown"})},Home(){n({type:"HOME"})},End(){n({type:"END"})}},Wt=pn(F,{dir:r("dir"),orientation:r("orientation")}),he=zt[Wt];he&&(he(F),F.preventDefault(),F.stopPropagation())}})},getHiddenInputProps(i){const{index:m=0,name:x}=i;return t.input({name:x??(r("name")?r("name")+(h.length>1?"[]":""):void 0),form:r("form"),type:"text",hidden:!0,defaultValue:h[m],id:re(d,m)})},getRangeProps(){return t.element({id:Nn(d),...P.range.attrs,dir:r("dir"),"data-dragging":p(b),"data-focus":p(y),"data-invalid":p(V),"data-disabled":p(f),"data-orientation":r("orientation"),style:zn(e)})},getControlProps(){return t.element({...P.control.attrs,dir:r("dir"),id:wt(d),"data-dragging":p(b),"data-disabled":p(f),"data-orientation":r("orientation"),"data-invalid":p(V),"data-focus":p(y),style:Yn(),onPointerDown(i){if(!R||!ye(i)||un(i))return;const m=cn(i);n({type:"POINTER_DOWN",point:m}),i.preventDefault(),i.stopPropagation()}})},getMarkerGroupProps(){return t.element({...P.markerGroup.attrs,role:"presentation",dir:r("dir"),"aria-hidden":!0,"data-orientation":r("orientation"),style:Zn()})},getMarkerProps(i){const m=Qn(e,i.value);let x;return i.value<ln(h)?x="under-value":i.value>dn(h)?x="over-value":x="at-value",t.element({...P.marker.attrs,id:Dn(d,i.value),role:"presentation",dir:r("dir"),"data-orientation":r("orientation"),"data-value":i.value,"data-disabled":p(f),"data-state":x,style:m})},getDraggingIndicatorProps(i){const{index:m=0}=i,x=m===E&&b;return t.element({...P.draggingIndicator.attrs,role:"presentation",dir:r("dir"),hidden:!x,"data-orientation":r("orientation"),"data-state":x?"open":"closed",style:Ee(e,m)})}}}var ra=(e,t)=>(e==null?void 0:e.width)===(t==null?void 0:t.width)&&(e==null?void 0:e.height)===(t==null?void 0:t.height),Ve=(e,t,a,n,o)=>xt(e,t,a,o*n).map(l=>{const d=yt(l.value,l.min,l.max,n),v=te(d,l.min,l.max);if(!xn(v,t,a))throw new Error("[zag-js/slider] The configured `min`, `max`, `step` or `minStepsBetweenThumbs` values are invalid");return v}),oa=Qt({props({props:e}){const t=e.min??0,a=e.max??100,n=e.step??1,o=e.defaultValue??[t],r=e.minStepsBetweenThumbs??0;return{dir:"ltr",thumbAlignment:"contain",origin:"start",orientation:"horizontal",minStepsBetweenThumbs:r,...e,defaultValue:Ve(o,t,a,n,r),value:e.value?Ve(e.value,t,a,n,r):void 0,max:a,step:n,min:t}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{thumbSize:t(()=>({defaultValue:e("thumbSize")||null})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:on,hash(n){return n.join(",")},onChange(n){var o;(o=e("onValueChange"))==null||o({value:n})}})),focusedIndex:t(()=>({defaultValue:-1,onChange(n){var r;const o=a();(r=e("onFocusChange"))==null||r({focusedIndex:n,value:o.get("value")})}})),fieldsetDisabled:t(()=>({defaultValue:!1}))}},computed:{isHorizontal:({prop:e})=>e("orientation")==="horizontal",isVertical:({prop:e})=>e("orientation")==="vertical",isRtl:({prop:e})=>e("orientation")==="horizontal"&&e("dir")==="rtl",isDisabled:({context:e,prop:t})=>!!t("disabled")||e.get("fieldsetDisabled"),isInteractive:({prop:e,computed:t})=>!(e("readOnly")||t("isDisabled")),hasMeasuredThumbSize:({context:e})=>e.get("thumbSize")!=null,valuePercent:Zt(({context:e,prop:t})=>[e.get("value"),t("min"),t("max")],([e,t,a])=>e.map(n=>100*de(n,t,a)))},watch({track:e,action:t,context:a}){e([()=>a.hash("value")],()=>{t(["syncInputElements","dispatchChangeEvent"])})},effects:["trackFormControlState","trackThumbSize"],on:{SET_VALUE:[{guard:"hasIndex",actions:["setValueAtIndex"]},{actions:["setValue"]}],INCREMENT:{actions:["incrementThumbAtIndex"]},DECREMENT:{actions:["decrementThumbAtIndex"]}},states:{idle:{on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},FOCUS:{target:"focus",actions:["setFocusedIndex"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]}}},focus:{entry:["focusActiveThumb"],on:{POINTER_DOWN:{target:"dragging",actions:["setClosestThumbIndex","setPointerValue","focusActiveThumb"]},THUMB_POINTER_DOWN:{target:"dragging",actions:["setFocusedIndex","focusActiveThumb"]},ARROW_DEC:{actions:["decrementThumbAtIndex","invokeOnChangeEnd"]},ARROW_INC:{actions:["incrementThumbAtIndex","invokeOnChangeEnd"]},HOME:{actions:["setFocusedThumbToMin","invokeOnChangeEnd"]},END:{actions:["setFocusedThumbToMax","invokeOnChangeEnd"]},BLUR:{target:"idle",actions:["clearFocusedIndex"]}}},dragging:{entry:["focusActiveThumb"],effects:["trackPointerMove"],on:{POINTER_UP:{target:"focus",actions:["invokeOnChangeEnd"]},POINTER_MOVE:{actions:["setPointerValue"]}}}},implementations:{guards:{hasIndex:({event:e})=>e.index!=null},effects:{trackFormControlState({context:e,scope:t}){return rn(Ln(t),{onFieldsetDisabledChange(a){e.set("fieldsetDisabled",a)},onFormReset(){e.set("value",e.initial("value"))}})},trackPointerMove({scope:e,send:t}){return an(e.getDoc(),{onPointerMove(a){t({type:"POINTER_MOVE",point:a.point})},onPointerUp(){t({type:"POINTER_UP"})}})},trackThumbSize({context:e,scope:t,prop:a}){if(!(a("thumbAlignment")!=="contain"||a("thumbSize")))return tn(Ct(t),{box:"border-box",measure(n){return $n(n)},onEntry({rects:n}){if(n.length===0)return;const o=Tn(n[0],["width","height"]);ra(e.get("thumbSize"),o)||e.set("thumbSize",o)}})}},actions:{dispatchChangeEvent({context:e,scope:t}){Un(t,e.get("value"))},syncInputElements({context:e,scope:t}){e.get("value").forEach((a,n)=>{const o=It(t,n);en(o,a.toString())})},invokeOnChangeEnd({prop:e,context:t}){queueMicrotask(()=>{var a;(a=e("onValueChangeEnd"))==null||a({value:t.get("value")})})},setClosestThumbIndex(e){const{context:t,event:a}=e,n=Re(e,a.point);if(n==null)return;const o=na(e,n);t.set("focusedIndex",o)},setFocusedIndex({context:e,event:t}){e.set("focusedIndex",t.index)},clearFocusedIndex({context:e}){e.set("focusedIndex",-1)},setPointerValue(e){queueMicrotask(()=>{const{context:t,event:a}=e,n=Re(e,a.point);if(n==null)return;const o=t.get("focusedIndex"),r=oe(e,n,o);t.set("value",l=>J(l,o,r))})},focusActiveThumb({scope:e,context:t}){Jt(()=>{const a=jn(e,t.get("focusedIndex"));a==null||a.focus({preventScroll:!0})})},decrementThumbAtIndex(e){const{context:t,event:a}=e,n=ea(e,a.index,a.step);t.set("value",n)},incrementThumbAtIndex(e){const{context:t,event:a}=e,n=ta(e,a.index,a.step);t.set("value",n)},setFocusedThumbToMin(e){const{context:t}=e,a=t.get("focusedIndex"),{min:n}=w(e,a);t.set("value",o=>J(o,a,n))},setFocusedThumbToMax(e){const{context:t}=e,a=t.get("focusedIndex"),{max:n}=w(e,a);t.set("value",o=>J(o,a,n))},setValueAtIndex(e){const{context:t,event:a}=e,n=oe(e,a.value,a.index);t.set("value",o=>J(o,a.index,n))},setValue(e){const{context:t,event:a}=e,n=Jn(e,a.value);t.set("value",n)}}}});Rt()(["aria-label","aria-labelledby","dir","disabled","form","getAriaValueText","getRootNode","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value","defaultValue"]);Rt()(["index","name"]);const sa=e=>{const t=g.useId(),{getRootNode:a}=Rn(),{dir:n}=En(),o={id:t,dir:n,getRootNode:a,...e},r=Vn(oa,o);return aa(r,_n)},Mt=g.forwardRef((e,t)=>{const[a,n]=ie()(e,["aria-label","aria-labelledby","defaultValue","disabled","form","getAriaValueText","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value"]),o=sa(a),r=C(o.getRootProps(),n);return u.jsx(wn,{value:o,children:u.jsx(I.div,{...r,ref:t})})});Mt.displayName="SliderRoot";const Dt=g.forwardRef((e,t)=>{const[a,n]=ie()(e,["index","name"]),o=A(),r=C(o.getThumbProps(a),n);return u.jsx(Cn,{value:a,children:u.jsx(I.div,{...r,ref:t})})});Dt.displayName="SliderThumb";const Lt=g.forwardRef((e,t)=>{const a=A(),n=C(a.getTrackProps(),e);return u.jsx(I.div,{...n,ref:t})});Lt.displayName="SliderTrack";const ee=20,jt=g.createContext(void 0);function qt({children:e,disabled:t}){const[a,n]=g.useState({bottom:0,left:0,right:0});return u.jsx(jt.Provider,{value:{disabled:t,rootPadding:a,setRootPadding:n},children:e})}function ne(){return Ht(jt)}qt.__docgenInfo={description:"",methods:[],displayName:"RangeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const _e={"range-bounds":"_range-bounds_plgrk_2","range-bounds--disabled":"_range-bounds--disabled_plgrk_9"},ce=({max:e,min:t})=>{const{disabled:a}=ne();return u.jsxs("div",{className:Z(_e["range-bounds"],{[_e["range-bounds--disabled"]]:a}),children:[u.jsx("span",{children:t}),u.jsx("span",{children:e})]})};ce.displayName="RangeBounds";ce.__docgenInfo={description:"",methods:[],displayName:"RangeBounds",props:{max:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""}}};const Se={"range-thumb":"_range-thumb_1r225_2","range-thumb--invalid":"_range-thumb--invalid_1r225_22"},me=({displayTooltip:e,index:t,invalid:a})=>{const n=g.useRef(null),o=vt(),{value:r}=A(),{disabled:l}=ne(),[d,v]=g.useState(!1),[T,h]=g.useState(!1);g.useEffect(()=>{if(n.current){const f=new MutationObserver(V=>{var R;V.length&&V[0].target.dataset.focus===""&&((R=n.current)==null||R.focus())});return f.observe(n.current,{attributeFilter:["data-focus"],attributes:!0}),()=>f.disconnect()}},[n]);function E(){v(!1),h(!1)}function y(){v(!0),h(!0)}function b(f){(f.ctrlKey||f.metaKey)&&(f.key==="ArrowRight"||f.key==="ArrowLeft")&&f.preventDefault()}return u.jsxs(Xt,{open:e&&!l&&(d||T),children:[u.jsx(Yt,{asChild:!0,children:u.jsx(Dt,{"aria-describedby":o==null?void 0:o.ariaDescribedBy,"aria-invalid":a,"aria-labelledby":t===0?o==null?void 0:o.labelId:void 0,className:Z(Se["range-thumb"],{[Se["range-thumb--invalid"]]:a}),index:t,onBlur:E,onFocus:y,onKeyDown:b,onMouseLeave:()=>h(!1),onMouseOver:()=>h(!0),ref:n,role:"slider",children:u.jsx(Vt,{})})}),u.jsx(Kt,{withArrow:!0,children:r[t]})]})};me.displayName="RangeThumb";me.__docgenInfo={description:"",methods:[],displayName:"RangeThumb",props:{displayTooltip:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""}}};const D={"range-tick":"_range-tick_sfwc5_2","range-tick--single-mode":"_range-tick--single-mode_sfwc5_15","range-tick--custom-marker":"_range-tick--custom-marker_sfwc5_18","range-tick__label":"_range-tick__label_sfwc5_26","range-tick__label--disabled":"_range-tick__label--disabled_sfwc5_30"},ge=({index:e,isLast:t,singleMode:a,tick:n})=>{const{disabled:o,setRootPadding:r}=ne(),l=g.useRef(null),d=typeof n=="number";return g.useEffect(()=>{if(!l.current||typeof n=="number")return;const v=new ResizeObserver(T=>{if(T&&T.length){const{height:h,top:E,width:y}=T[0].contentRect;e===0?r(b=>({...b,left:Math.max(0,y/2-ee/2)})):t&&r(b=>({...b,right:Math.max(0,y/2-ee/2)})),r(b=>({...b,bottom:h+E}))}});return v.observe(l.current),()=>{v.disconnect()}},[e,t,r,n,l]),u.jsx(_t,{className:Z(D["range-tick"],{[D["range-tick--custom-marker"]]:!d},{[D["range-tick--single-mode"]]:a}),ref:l,value:d?n:n.value,children:!d&&u.jsx("span",{className:Z(D["range-tick__label"],{[D["range-tick__label--disabled"]]:o}),children:n.label})})};ge.displayName="RangeTick";ge.__docgenInfo={description:"",methods:[],displayName:"RangeTick",props:{index:{required:!0,tsType:{name:"number"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},singleMode:{required:!0,tsType:{name:"boolean"},description:""},tick:{required:!0,tsType:{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]},description:""}}};const la={"range-ticks":"_range-ticks_abmz7_2"},pe=({singleMode:e,ticks:t})=>u.jsx(St,{className:la["range-ticks"],children:t.map((a,n)=>u.jsx(ge,{index:n,isLast:n===t.length-1,singleMode:e,tick:a},typeof a=="number"?a:a.value))});pe.displayName="RangeTicks";pe.__docgenInfo={description:"",methods:[],displayName:"RangeTicks",props:{singleMode:{required:!0,tsType:{name:"boolean"},description:""},ticks:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"RangeTickItem[]"},description:""}}};const Pe={"range-track":"_range-track_12bwj_2","range-track__filled":"_range-track__filled_12bwj_9"},fe=()=>u.jsx(Lt,{className:Pe["range-track"],children:u.jsx(Pt,{className:Pe["range-track__filled"]})});fe.displayName="RangeTrack";fe.__docgenInfo={description:"",methods:[],displayName:"RangeTrack"};const ia="_range_1ppap_2",da="_range__control_1ppap_8",Fe={range:ia,range__control:da},ua=g.forwardRef(({className:e,defaultValue:t,displayBounds:a=!0,displayTooltip:n=!0,id:o,invalid:r,max:l=100,min:d=0,name:v,onDragging:T,onValueChange:h,step:E=1,ticks:y,value:b,...f},V)=>{const{disabled:R,rootPadding:k}=ne(),S=vt(),_=g.useRef(null),M=g.useMemo(()=>r||(S==null?void 0:S.invalid),[S,r]),i=g.useMemo(()=>b&&b.length?b.length:t&&t.length?t.length:1,[t,b]);return g.useImperativeHandle(V,()=>_.current,[_]),g.useEffect(()=>{_.current&&(_.current.style.setProperty("--range-padding-bottom",`${k.bottom}px`),_.current.style.setProperty("--range-padding-left",`${k.left}px`),_.current.style.setProperty("--range-padding-right",`${k.right}px`))},[_,k]),u.jsxs(Mt,{"aria-label":f["aria-label"],"aria-labelledby":f["aria-labelledby"],className:Z(Fe.range,e),"data-ods":"range",defaultValue:t,disabled:R,id:o||(S==null?void 0:S.id),invalid:M,max:l,min:d,minStepsBetweenThumbs:1,name:v,orientation:"horizontal",onValueChange:T,onValueChangeEnd:h,ref:_,role:"group",step:E,thumbSize:{height:ee,width:ee},value:b,...f,children:[u.jsxs(Et,{className:Fe.range__control,children:[u.jsx(fe,{}),Array.from({length:i}).map((m,x)=>u.jsx(me,{displayTooltip:n,index:x,invalid:M},x))]}),y&&y.length>0&&u.jsx(pe,{singleMode:i<=1,ticks:y}),a&&u.jsx(ce,{max:l,min:d})]})}),c=g.forwardRef(({disabled:e,...t},a)=>u.jsx(qt,{disabled:e,children:u.jsx(ua,{ref:a,...t})}));c.displayName="Range";c.__docgenInfo={description:"",methods:[],displayName:"Range",props:{"aria-label":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The aria-label of each slider thumb. Useful for providing an accessible name to the slider."},"aria-labelledby":{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The id of the elements that labels each slider thumb. Useful for providing an accessible name to the slider."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The initial selected value(s). Use when you don't need to control the value(s) of the range."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},displayBounds:{required:!1,tsType:{name:"boolean"},description:"Whether the range bounds are displayed under the track."},displayTooltip:{required:!1,tsType:{name:"boolean"},description:"Whether a tooltip with the current thumb value is displayed on drag."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},max:{required:!1,tsType:{name:"number"},description:"The maximum value that can be selected."},min:{required:!1,tsType:{name:"number"},description:"The minimum value that can be selected."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onDragging:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb moves."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RangeValueChangeDetail) => void",signature:{arguments:[{type:{name:"RangeValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the thumb is released."},step:{required:!1,tsType:{name:"number"},description:"The amount to increment or decrement the value by."},ticks:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"number | RangeTickCustomItem",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ label: string, value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}]}],raw:"RangeTickItem[]"},description:"List of tick indicators to display alongside the range."},value:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The controlled selected value(s)."}},composes:["Omit"]};const ca={argTypes:Fn(["aria-label","aria-labelledby","defaultValue","max","min","name","onDragging","onValueChange","ticks","value"]),component:c,title:"React Components/Range"},L={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",justifyContent:"center",height:"80vh"}},e())],render:({dualRange:e,...t})=>{const[n,o]=g.useState([0]);return g.useEffect(()=>{if(e){const r=t.step||1,l=n[0]===100?n[0]-r:n[0];o([l,l+r])}else o([n[0]])},[e]),s.createElement(c,{...t,max:100,onDragging:({value:r})=>o(r),value:n})},argTypes:kn({disabled:{table:{category:N.general},control:{type:"boolean"}},displayBounds:{table:{category:N.general},control:{type:"boolean"}},displayTooltip:{table:{category:N.general},control:{type:"boolean"}},dualRange:{table:{category:N.general,type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{table:{category:N.general},control:"boolean"},step:{table:{category:N.general},control:"number"}})},j={decorators:[e=>s.createElement("div",{style:{width:"160px"}},e())],tags:["!dev"],render:({})=>s.createElement(c,{defaultValue:[50]})},q={globals:{imports:`import { Range } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...ue()}}},render:({})=>{const[e,t]=g.useState(),[a,n]=g.useState();function o(l){t(l.value[0])}function r(l){n(l.value[0])}return s.createElement(s.Fragment,null,s.createElement("p",null,s.createElement("span",null,"Final value: ",a),s.createElement("br",null),s.createElement("span",null,"Dragged value: ",e)),s.createElement(c,{onDragging:o,onValueChange:r,value:e?[e]:void 0}))}},U={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(c,null),s.createElement(c,{defaultValue:[50,75]}))},$={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(c,{defaultValue:[20],disabled:!0}),s.createElement(c,{defaultValue:[50,75],disabled:!0}))},B={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(se,null,s.createElement(le,null,"Range:"),s.createElement(c,null))},G={globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement("p",null,"Max 500"),s.createElement(c,{defaultValue:[50],max:500}),s.createElement(c,{defaultValue:[50,75],max:500}),s.createElement("p",null,"Min 25"),s.createElement(c,{defaultValue:[50],min:25}),s.createElement(c,{defaultValue:[50,75],min:25}),s.createElement("p",null,"Max 75 & Min 25"),s.createElement(c,{defaultValue:[50],max:75,min:25}),s.createElement(c,{defaultValue:[50,75],max:75,min:25}))},z={decorators:[e=>s.createElement("div",{style:{width:"160px"}},e())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>s.createElement(c,{defaultValue:[50]})},W={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(c,{defaultValue:[20],step:5}),s.createElement(c,{defaultValue:[50,75],step:5}))},H={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(c,{defaultValue:[20],ticks:[10,20,30,40,50,60,70,80,90]}),s.createElement(c,{defaultValue:[50,75],ticks:[10,20,30,40,50,60,70,80,90]}))},X={decorators:[e=>s.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e())],globals:{imports:"import { Range } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...ue()}}},render:({})=>s.createElement(s.Fragment,null,s.createElement(c,{ticks:[{label:"Low",value:25},{label:"Medium",value:50},{label:"High",value:75}]}),s.createElement(c,{displayBounds:!1,displayTooltip:!1,max:5,min:1,ticks:[{label:"Very Poor",value:1},{label:"Poor",value:2},{label:"Average",value:3},{label:"Good",value:4},{label:"Excellent",value:5}]}))},Y={globals:{imports:"import { FormField, FormFieldLabel, Range } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(se,null,s.createElement(le,null,"Volume"),s.createElement(c,{defaultValue:[50]}))},K={globals:{imports:`import { TEXT_PRESET, FormField, FormFieldLabel, Range, Text } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...ue()}}},tags:["!dev"],render:({})=>{const[e,t]=g.useState([30,70]);return s.createElement(se,null,s.createElement(le,{id:"range-label"},"Price range"),s.createElement(Sn,{"aria-live":"polite",id:"range-sublabel",preset:Pn.caption},"Selected values: ",e[0]," - ",e[1],"€"),s.createElement(c,{"aria-labelledby":["range-label","range-sublabel"],onDragging:({value:a})=>t(a),value:e}))}},Q={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>s.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"240px"}},s.createElement(c,null),s.createElement(c,{defaultValue:[50,75]}),s.createElement(c,{disabled:!0,defaultValue:[20]}),s.createElement(c,{disabled:!0,defaultValue:[50,75]}),s.createElement(c,{step:5,defaultValue:[20]}),s.createElement(c,{ticks:[10,20,30,40,50,60,70,80,90],defaultValue:[20]}))};var ke,we,Ce;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ce=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Ie,Ae,Oe;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    width: '160px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <Range defaultValue={[50]} />
}`,...(Oe=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Ne,Me,De;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(De=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Le,je,qe;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(qe=(je=U.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var Ue,$e,Be;$.parameters={...$.parameters,docs:{...(Ue=$.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Be=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var Ge,ze,We;B.parameters={...B.parameters,docs:{...(Ge=B.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(We=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var He,Xe,Ye;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=G.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ke,Qe,Ze;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    width: '160px'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Range defaultValue={[50]} />
}`,...(Ze=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var Je,et,tt;W.parameters={...W.parameters,docs:{...(Je=W.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(tt=(et=W.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,rt;H.parameters={...H.parameters,docs:{...(nt=H.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(rt=(at=H.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var ot,st,lt;X.parameters={...X.parameters,docs:{...(ot=X.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(lt=(st=X.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var it,dt,ut;Y.parameters={...Y.parameters,docs:{...(it=Y.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ut=(dt=Y.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var ct,mt,gt;K.parameters={...K.parameters,docs:{...(ct=K.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(gt=(mt=K.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var pt,ft,bt;Q.parameters={...Q.parameters,docs:{...(pt=Q.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(bt=(ft=Q.parameters)==null?void 0:ft.docs)==null?void 0:bt.source}}};const ma=["Demo","AnatomyTech","Controlled","Default","Disabled","InFormField","MaxMin","Overview","Step","Ticks","TicksLabels","AccessibilityFormField","AccessibilityDescriptiveSubLabel","ThemeGenerator"],Ea=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDescriptiveSubLabel:K,AccessibilityFormField:Y,AnatomyTech:j,Controlled:q,Default:U,Demo:L,Disabled:$,InFormField:B,MaxMin:G,Overview:z,Step:W,ThemeGenerator:Q,Ticks:H,TicksLabels:X,__namedExportsOrder:ma,default:ca},Symbol.toStringTag,{value:"Module"}));export{Y as A,q as C,U as D,B as I,G as M,z as O,Ea as R,W as S,H as T,K as a,j as b,$ as c,X as d};
