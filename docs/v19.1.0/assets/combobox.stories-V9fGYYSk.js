import{r as h,e as i}from"./index-D_CmzhJ4.js";import{j as c}from"./jsx-runtime-VM66peLj.js";import{u as co,F as Se,a as we}from"./FormFieldLabel-DQkMrZpp.js";import{g as mo}from"./element-BmbJTp3e.js";import{L as Wt,c as go}from"./collection-D1icvmxM.js";import{c as Oe,Q as M,R as Y,S as bo,a as Le,ag as po,aV as ve,r as U,aW as ho,aU as vo,a5 as qe,ao as fo,aX as Co,aY as yo,h as Io,ay as xo,T as Oo,W as C,ac as ke,aZ as Eo,a_ as To,p as Vo,Y as _e,ab as Po,ad as ko,a$ as Ro,aw as No,b0 as So,K as Ee,b1 as wo,U as Lo,u as Do,L as Fo,V as qo}from"./use-locale-context-DLC4Hyvy.js";import{s as _o,P as Ao}from"./portal-CjJhVgfZ.js";import{u as Bt,a as Go,P as Ho}from"./use-presence-BH5ft0ba.js";import{g as Ae,a as Uo}from"./index-inT8qsA6.js";import{a as jo}from"./index-DninfMAu.js";import{t as Mo}from"./index-EI2n6HsL.js";import{u as Kt}from"./use-field-context--XabuWSL.js";import{c as he}from"./index-CkQHsVsO.js";import{I as Wo,c as Bo}from"./Input-DtgH68sh.js";import{T as Ko}from"./Tag-BVsl-I75.js";import{e as $o,o as Yo,C as _}from"./controls-BtiQQn1l.js";import{s as De}from"./source-d0g_Nd0q.js";const[Jo,W]=Oe({name:"ComboboxContext",hookName:"useComboboxContext",providerName:"<ComboboxProvider />"}),$t=h.forwardRef((e,t)=>{const o=W(),a=Bt(),n=M(o.getContentProps(),a.getPresenceProps(),e);return a.unmounted?null:c.jsx(Y.div,{...n,ref:bo(a.ref,t)})});$t.displayName="ComboboxContent";const Yt=h.forwardRef((e,t)=>{const o=W(),a=M(o.getControlProps(),e);return c.jsx(Y.div,{...a,ref:t})});Yt.displayName="ComboboxControl";const Jt=h.forwardRef((e,t)=>{const o=W(),a=M(o.getInputProps(),e),n=Kt();return c.jsx(Y.input,{"aria-describedby":n==null?void 0:n.ariaDescribedby,...a,ref:t})});Jt.displayName="ComboboxInput";const[Xo,Ma]=Oe({name:"ComboboxItemContext",hookName:"useComboboxItemContext",providerName:"<ComboboxItemProvider />"}),[Qo,Wa]=Oe({name:"ComboboxItemPropsContext",hookName:"useComboboxItemPropsContext",providerName:"<ComboboxItemPropsProvider />"}),Xt=h.forwardRef((e,t)=>{const[o,a]=Le()(e,["item","persistFocus"]),n=W(),l=M(n.getItemProps(o),a),r=n.getItemState(o);return c.jsx(Qo,{value:o,children:c.jsx(Xo,{value:r,children:c.jsx(Y.div,{...l,ref:t})})})});Xt.displayName="ComboboxItem";const[Zo,zo]=Oe({name:"ComboboxItemGroupPropsContext",hookName:"useComboboxItemGroupPropsContext",providerName:"<ComboboxItemGroupPropsProvider />"}),Qt=h.forwardRef((e,t)=>{const o=h.useId(),[a,n]=Le()(e,["id"]),l={id:o,...a},r=W(),d=M(r.getItemGroupProps(l),n);return c.jsx(Zo,{value:l,children:c.jsx(Y.div,{...d,ref:t})})});Qt.displayName="ComboboxItemGroup";const Zt=h.forwardRef((e,t)=>{const o=W(),a=zo(),n=M(o.getItemGroupLabelProps({htmlFor:a.id}),e);return c.jsx(Y.div,{...n,ref:t})});Zt.displayName="ComboboxItemGroupLabel";const zt=h.forwardRef((e,t)=>{const o=W(),a=Bt(),n=M(o.getPositionerProps(),e);return a.unmounted?null:c.jsx(Y.div,{...n,ref:t})});zt.displayName="ComboboxPositioner";var ea=Oo("combobox").parts("root","clearTrigger","content","control","input","item","itemGroup","itemGroupLabel","itemIndicator","itemText","label","list","positioner","trigger"),S=ea.build(),eo=e=>new Wt(e);eo.empty=()=>new Wt({items:[]});var ta=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`combobox:${e.id}`},Re=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`combobox:${e.id}:label`},to=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`combobox:${e.id}:control`},fe=e=>{var t;return((t=e.ids)==null?void 0:t.input)??`combobox:${e.id}:input`},Ce=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`combobox:${e.id}:content`},oo=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`combobox:${e.id}:popper`},ao=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`combobox:${e.id}:toggle-btn`},no=e=>{var t;return((t=e.ids)==null?void 0:t.clearTrigger)??`combobox:${e.id}:clear-btn`},oa=(e,t)=>{var o,a;return((a=(o=e.ids)==null?void 0:o.itemGroup)==null?void 0:a.call(o,t))??`combobox:${e.id}:optgroup:${t}`},Ge=(e,t)=>{var o,a;return((a=(o=e.ids)==null?void 0:o.itemGroupLabel)==null?void 0:a.call(o,t))??`combobox:${e.id}:optgroup-label:${t}`},He=(e,t)=>{var o,a;return((a=(o=e.ids)==null?void 0:o.item)==null?void 0:a.call(o,t))??`combobox:${e.id}:option:${t}`},K=e=>e.getById(Ce(e)),$=e=>e.getById(fe(e)),Ue=e=>e.getById(oo(e)),je=e=>e.getById(to(e)),X=e=>e.getById(ao(e)),Me=e=>e.getById(no(e)),lo=(e,t)=>{if(t==null)return;const o=`[role=option][data-value="${CSS.escape(t)}"]`;return So(K(e),o)},We=e=>{const t=$(e);e.isActiveElement(t)||t==null||t.focus({preventScroll:!0})},aa=e=>{const t=X(e);e.isActiveElement(t)||t==null||t.focus({preventScroll:!0})};function na(e,t){const{context:o,prop:a,state:n,send:l,scope:r,computed:d,event:m}=e,v=a("translations"),y=a("collection"),g=a("disabled"),p=d("isInteractive"),w=a("invalid"),D=a("readOnly"),I=n.hasTag("open"),j=n.hasTag("focused"),k=a("composite"),x=o.get("highlightedValue"),F=Uo({...a("positioning"),placement:o.get("currentPlacement")});function q(s){const u=y.getItemDisabled(s.item),f=y.getItemValue(s.item);return Ro(f,()=>`[zag-js] No value found for item ${JSON.stringify(s.item)}`),{value:f,disabled:!!(u||u),highlighted:x===f,selected:o.get("value").includes(f)}}return{focused:j,open:I,inputValue:o.get("inputValue"),highlightedValue:x,highlightedItem:o.get("highlightedItem"),value:o.get("value"),valueAsString:o.get("valueAsString"),hasSelectedItems:d("hasSelectedItems"),selectedItems:o.get("selectedItems"),collection:a("collection"),multiple:!!a("multiple"),disabled:!!g,syncSelectedItems(){l({type:"SELECTED_ITEMS.SYNC"})},reposition(s={}){l({type:"POSITIONING.SET",options:s})},setHighlightValue(s){l({type:"HIGHLIGHTED_VALUE.SET",value:s})},selectValue(s){l({type:"ITEM.SELECT",value:s})},setValue(s){l({type:"VALUE.SET",value:s})},setInputValue(s){l({type:"INPUT_VALUE.SET",value:s})},clearValue(s){s!=null?l({type:"ITEM.CLEAR",value:s}):l({type:"VALUE.CLEAR"})},focus(){var s;(s=$(r))==null||s.focus()},setOpen(s){n.hasTag("open")!==s&&l({type:s?"OPEN":"CLOSE"})},getRootProps(){return t.element({...S.root.attrs,dir:a("dir"),id:ta(r),"data-invalid":C(w),"data-readonly":C(D)})},getLabelProps(){return t.label({...S.label.attrs,dir:a("dir"),htmlFor:fe(r),id:Re(r),"data-readonly":C(D),"data-disabled":C(g),"data-invalid":C(w),"data-focus":C(j),onClick(s){var u;k||(s.preventDefault(),(u=X(r))==null||u.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...S.control.attrs,dir:a("dir"),id:to(r),"data-state":I?"open":"closed","data-focus":C(j),"data-disabled":C(g),"data-invalid":C(w)})},getPositionerProps(){return t.element({...S.positioner.attrs,dir:a("dir"),id:oo(r),style:F.floating})},getInputProps(){return t.input({...S.input.attrs,dir:a("dir"),"aria-invalid":ke(w),"data-invalid":C(w),"data-autofocus":C(a("autoFocus")),name:a("name"),form:a("form"),disabled:g,required:a("required"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",spellCheck:"false",readOnly:D,placeholder:a("placeholder"),id:fe(r),type:"text",role:"combobox",defaultValue:o.get("inputValue"),"aria-autocomplete":d("autoComplete")?"both":"list","aria-controls":Ce(r),"aria-expanded":I,"data-state":I?"open":"closed","aria-activedescendant":x?He(r,x):void 0,onClick(s){s.defaultPrevented||a("openOnClick")&&p&&l({type:"INPUT.CLICK"})},onFocus(){g||l({type:"INPUT.FOCUS"})},onBlur(){g||l({type:"INPUT.BLUR"})},onChange(s){l({type:"INPUT.CHANGE",value:s.currentTarget.value})},onKeyDown(s){if(s.defaultPrevented||!p||s.ctrlKey||s.shiftKey||ko(s))return;const u=a("openOnKeyPress"),f=s.ctrlKey||s.metaKey||s.shiftKey,O=!0,R={ArrowDown(N){!u&&!I||(l({type:N.altKey?"OPEN":"INPUT.ARROW_DOWN",keypress:O}),N.preventDefault())},ArrowUp(){!u&&!I||(l({type:s.altKey?"CLOSE":"INPUT.ARROW_UP",keypress:O}),s.preventDefault())},Home(N){f||(l({type:"INPUT.HOME",keypress:O}),I&&N.preventDefault())},End(N){f||(l({type:"INPUT.END",keypress:O}),I&&N.preventDefault())},Enter(N){var H;if(l({type:"INPUT.ENTER",keypress:O}),I&&N.preventDefault(),x==null)return;const b=lo(r,x);No(b)&&((H=a("navigate"))==null||H({value:x,node:b,href:b.href}))},Escape(){l({type:"INPUT.ESCAPE",keypress:O}),s.preventDefault()}},J=_e(s,{dir:a("dir")}),A=R[J];A==null||A(s)}})},getTriggerProps(s={}){return t.button({...S.trigger.attrs,dir:a("dir"),id:ao(r),"aria-haspopup":k?"listbox":"dialog",type:"button",tabIndex:s.focusable?void 0:-1,"aria-label":v.triggerLabel,"aria-expanded":I,"data-state":I?"open":"closed","aria-controls":I?Ce(r):void 0,disabled:g,"data-invalid":C(w),"data-focusable":C(s.focusable),"data-readonly":C(D),"data-disabled":C(g),onFocus(){s.focusable&&l({type:"INPUT.FOCUS",src:"trigger"})},onClick(u){u.defaultPrevented||p&&Po(u)&&l({type:"TRIGGER.CLICK"})},onPointerDown(u){p&&u.pointerType!=="touch"&&(u.preventDefault(),queueMicrotask(()=>{var f;(f=$(r))==null||f.focus({preventScroll:!0})}))},onKeyDown(u){if(u.defaultPrevented||k)return;const f={ArrowDown(){l({type:"INPUT.ARROW_DOWN",src:"trigger"})},ArrowUp(){l({type:"INPUT.ARROW_UP",src:"trigger"})}},O=_e(u,{dir:a("dir")}),R=f[O];R&&(R(u),u.preventDefault())}})},getContentProps(){return t.element({...S.content.attrs,dir:a("dir"),id:Ce(r),role:k?"listbox":"dialog",tabIndex:-1,hidden:!I,"data-state":I?"open":"closed","data-placement":o.get("currentPlacement"),"aria-labelledby":Re(r),"aria-multiselectable":a("multiple")&&k?!0:void 0,"data-empty":C(y.size===0),onPointerDown(s){s.preventDefault()}})},getListProps(){return t.element({...S.list.attrs,role:k?void 0:"listbox","data-empty":C(y.size===0),"aria-labelledby":Re(r),"aria-multiselectable":a("multiple")&&!k?!0:void 0})},getClearTriggerProps(){return t.button({...S.clearTrigger.attrs,dir:a("dir"),id:no(r),type:"button",tabIndex:-1,disabled:g,"data-invalid":C(w),"aria-label":v.clearTriggerLabel,"aria-controls":fe(r),hidden:!o.get("value").length,onPointerDown(s){s.preventDefault()},onClick(s){s.defaultPrevented||p&&l({type:"VALUE.CLEAR",src:"clear-trigger"})}})},getItemState:q,getItemProps(s){const u=q(s),f=u.value;return t.element({...S.item.attrs,dir:a("dir"),id:He(r,f),role:"option",tabIndex:-1,"data-highlighted":C(u.highlighted),"data-state":u.selected?"checked":"unchecked","aria-selected":ke(u.highlighted),"aria-disabled":ke(u.disabled),"data-disabled":C(u.disabled),"data-value":u.value,onPointerMove(){u.disabled||u.highlighted||l({type:"ITEM.POINTER_MOVE",value:f})},onPointerLeave(){if(s.persistFocus||u.disabled)return;const O=m.previous();O!=null&&O.type.includes("POINTER")&&l({type:"ITEM.POINTER_LEAVE",value:f})},onClick(O){Eo(O)||To(O)||Vo(O)||u.disabled||l({type:"ITEM.CLICK",src:"click",value:f})}})},getItemTextProps(s){const u=q(s);return t.element({...S.itemText.attrs,dir:a("dir"),"data-state":u.selected?"checked":"unchecked","data-disabled":C(u.disabled),"data-highlighted":C(u.highlighted)})},getItemIndicatorProps(s){const u=q(s);return t.element({"aria-hidden":!0,...S.itemIndicator.attrs,dir:a("dir"),"data-state":u.selected?"checked":"unchecked",hidden:!u.selected})},getItemGroupProps(s){const{id:u}=s;return t.element({...S.itemGroup.attrs,dir:a("dir"),id:oa(r,u),"aria-labelledby":Ge(r,u),"data-empty":C(y.size===0),role:"group"})},getItemGroupLabelProps(s){const{htmlFor:u}=s;return t.element({...S.itemGroupLabel.attrs,dir:a("dir"),id:Ge(r,u),role:"presentation"})}}}var{guards:la,createMachine:ra,choose:sa}=po(),{and:P,not:L}=la,ia=ra({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],closeOnSelect:!e.multiple,allowCustomValue:!1,inputBehavior:"none",selectionBehavior:e.multiple?"clear":"replace",openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate({node:t}){xo(t)},collection:eo.empty(),...e,positioning:{placement:"bottom",sameWidth:!0,...e.positioning},translations:{triggerLabel:"Toggle suggestions",clearTriggerLabel:"Clear value",...e.translations}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"suggesting":"idle"},context({prop:e,bindable:t,getContext:o}){return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:Io,hash(a){return a.join(",")},onChange(a){var m;const n=o(),l=n.get("selectedItems"),r=e("collection"),d=a.map(v=>l.find(g=>r.getItemValue(g)===v)||r.find(v));n.set("selectedItems",d),n.set("valueAsString",r.stringifyItems(d)),(m=e("onValueChange"))==null||m({value:a,items:d})}})),highlightedValue:t(()=>({defaultValue:e("defaultHighlightedValue")||null,value:e("highlightedValue"),onChange(a){var l;const n=e("collection").find(a);(l=e("onHighlightChange"))==null||l({highlightedValue:a,highlightedItem:n})}})),inputValue:t(()=>{let a=e("inputValue")||e("defaultInputValue")||"";const n=e("defaultValue")||e("value")||[];if(!a.trim()&&!e("multiple")){const l=e("collection").stringifyMany(n);a=ve(e("selectionBehavior"),{preserve:a||l,replace:l,clear:""})}return{defaultValue:a,value:e("inputValue"),onChange(l){var r;(r=e("onInputValueChange"))==null||r({inputValue:l})}}}),highlightedItem:t(()=>{const a=e("highlightedValue");return{defaultValue:e("collection").find(a)}}),selectedItems:t(()=>{const a=e("value")||e("defaultValue")||[];return{defaultValue:e("collection").findMany(a)}}),valueAsString:t(()=>{const a=e("value")||e("defaultValue")||[];return{sync:!0,defaultValue:e("collection").stringifyMany(a)}})}},computed:{isInputValueEmpty:({context:e})=>e.get("inputValue").length===0,isInteractive:({prop:e})=>!(e("readOnly")||e("disabled")),autoComplete:({prop:e})=>e("inputBehavior")==="autocomplete",autoHighlight:({prop:e})=>e("inputBehavior")==="autohighlight",hasSelectedItems:({context:e})=>e.get("value").length>0},watch({context:e,prop:t,track:o,action:a}){o([()=>e.hash("value")],()=>{a(["syncSelectedItems"])}),o([()=>e.get("inputValue")],()=>{a(["syncInputValue"])}),o([()=>e.get("highlightedValue")],()=>{a(["syncHighlightedItem","autofillInputValue"])}),o([()=>t("open")],()=>{a(["toggleVisibility"])})},on:{"SELECTED_ITEMS.SYNC":{actions:["syncSelectedItems"]},"HIGHLIGHTED_VALUE.SET":{actions:["setHighlightedItem"]},"ITEM.SELECT":{actions:["selectItem"]},"ITEM.CLEAR":{actions:["clearItem"]},"VALUE.SET":{actions:["setValue"]},"INPUT_VALUE.SET":{actions:["setInputValue"]},"POSITIONING.SET":{actions:["reposition"]}},entry:sa([{guard:"autoFocus",actions:["setInitialFocus"]}]),states:{idle:{tags:["idle","closed"],entry:["scrollContentToTop","clearHighlightedItem"],on:{"CONTROLLED.OPEN":{target:"interacting"},"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.FOCUS":{target:"focused"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{target:"focused",actions:["clearInputValue","clearSelectedItems","setInitialFocus"]}}},focused:{tags:["focused","closed"],entry:["scrollContentToTop","clearHighlightedItem"],on:{"CONTROLLED.OPEN":[{guard:"isChangeEvent",target:"suggesting"},{target:"interacting"}],"INPUT.CHANGE":[{guard:P("isOpenControlled","openOnChange"),actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{guard:"openOnChange",target:"suggesting",actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{actions:["setInputValue"]}],"LAYER.INTERACT_OUTSIDE":{target:"idle"},"INPUT.ESCAPE":{guard:P("isCustomValue",L("allowCustomValue")),actions:["revertInputValue"]},"INPUT.BLUR":{target:"idle"},"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_DOWN":[{guard:P("isOpenControlled","autoComplete"),actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"isOpenControlled",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_UP":[{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{target:"interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{actions:["clearInputValue","clearSelectedItems"]}}},interacting:{tags:["open","focused"],entry:["setInitialFocus"],effects:["scrollToHighlightedItem","trackDismissableLayer","trackPlacement","hideOtherElements"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],"INPUT.HOME":{actions:["highlightFirstItem"]},"INPUT.END":{actions:["highlightLastItem"]},"INPUT.ARROW_DOWN":[{guard:P("autoComplete","isLastItemHighlighted"),actions:["clearHighlightedItem","scrollContentToTop"]},{actions:["highlightNextItem"]}],"INPUT.ARROW_UP":[{guard:P("autoComplete","isFirstItemHighlighted"),actions:["clearHighlightedItem"]},{actions:["highlightPrevItem"]}],"INPUT.ENTER":[{guard:P("isOpenControlled","isCustomValue",L("hasHighlightedItem"),L("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:P("isCustomValue",L("hasHighlightedItem"),L("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:P("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":[{guard:"autoComplete",target:"suggesting",actions:["setInputValue"]},{target:"suggesting",actions:["clearHighlightedItem","setInputValue"]}],"ITEM.POINTER_MOVE":{actions:["setHighlightedItem"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedItem"]},"ITEM.CLICK":[{guard:P("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],"LAYER.ESCAPE":[{guard:P("isOpenControlled","autoComplete"),actions:["syncInputValue","invokeOnClose"]},{guard:"autoComplete",target:"focused",actions:["syncInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"LAYER.INTERACT_OUTSIDE":[{guard:P("isOpenControlled","isCustomValue",L("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:P("isCustomValue",L("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}},suggesting:{tags:["open","focused"],effects:["trackDismissableLayer","scrollToHighlightedItem","trackPlacement","trackChildNodes","hideOtherElements"],entry:["setInitialFocus"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],CHILDREN_CHANGE:{guard:"autoHighlight",actions:["highlightFirstItem"]},"INPUT.ARROW_DOWN":{target:"interacting",actions:["highlightNextItem"]},"INPUT.ARROW_UP":{target:"interacting",actions:["highlightPrevItem"]},"INPUT.HOME":{target:"interacting",actions:["highlightFirstItem"]},"INPUT.END":{target:"interacting",actions:["highlightLastItem"]},"INPUT.ENTER":[{guard:P("isOpenControlled","isCustomValue",L("hasHighlightedItem"),L("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:P("isCustomValue",L("hasHighlightedItem"),L("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:P("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":{actions:["setInputValue"]},"LAYER.ESCAPE":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.POINTER_MOVE":{target:"interacting",actions:["setHighlightedItem"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedItem"]},"LAYER.INTERACT_OUTSIDE":[{guard:P("isOpenControlled","isCustomValue",L("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:P("isCustomValue",L("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.CLICK":[{guard:P("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e("isInputValueEmpty"),autoComplete:({computed:e,prop:t})=>e("autoComplete")&&!t("multiple"),autoHighlight:({computed:e})=>e("autoHighlight"),isFirstItemHighlighted:({prop:e,context:t})=>e("collection").firstValue===t.get("highlightedValue"),isLastItemHighlighted:({prop:e,context:t})=>e("collection").lastValue===t.get("highlightedValue"),isCustomValue:({context:e})=>e.get("inputValue")!==e.get("valueAsString"),allowCustomValue:({prop:e})=>!!e("allowCustomValue"),hasHighlightedItem:({context:e})=>e.get("highlightedValue")!=null,closeOnSelect:({prop:e})=>!!e("closeOnSelect"),isOpenControlled:({prop:e})=>e("open")!=null,openOnChange:({prop:e,context:t})=>{const o=e("openOnChange");return yo(o)?o:!!(o!=null&&o({inputValue:t.get("inputValue")}))},restoreFocus:({event:e})=>e.restoreFocus==null?!0:!!e.restoreFocus,isChangeEvent:({event:e})=>{var t;return((t=e.previousEvent)==null?void 0:t.type)==="INPUT.CHANGE"},autoFocus:({prop:e})=>!!e("autoFocus")},effects:{trackDismissableLayer({send:e,prop:t,scope:o}){return t("disableLayer")?void 0:Mo(()=>K(o),{defer:!0,exclude:()=>[$(o),X(o),Me(o)],onFocusOutside:t("onFocusOutside"),onPointerDownOutside:t("onPointerDownOutside"),onInteractOutside:t("onInteractOutside"),onEscapeKeyDown(n){n.preventDefault(),n.stopPropagation(),e({type:"LAYER.ESCAPE"})},onDismiss(){e({type:"LAYER.INTERACT_OUTSIDE",restoreFocus:!1})}})},hideOtherElements({scope:e}){return jo([$(e),K(e),X(e),Me(e)])},trackPlacement({context:e,prop:t,scope:o}){const a=()=>je(o)||X(o),n=()=>Ue(o);return e.set("currentPlacement",t("positioning").placement),Ae(a,n,{...t("positioning"),defer:!0,onComplete(l){e.set("currentPlacement",l.placement)}})},trackChildNodes({scope:e,computed:t,send:o}){return t("autoHighlight")?Co(()=>K(e),{callback:()=>o({type:"CHILDREN_CHANGE"})}):void 0},scrollToHighlightedItem({context:e,prop:t,scope:o,event:a}){const n=$(o);let l=[];const r=v=>{const y=a.current().type.includes("POINTER"),g=e.get("highlightedValue");if(y||!g)return;const p=lo(o,g),w=K(o),D=t("scrollToIndexFn");if(D){const j=t("collection").indexOf(g);D({index:j,immediate:v});return}const I=U(()=>{wo(p,{rootEl:w,block:"nearest"})});l.push(I)},d=U(()=>r(!0));l.push(d);const m=fo(n,{attributes:["aria-activedescendant"],callback:()=>r(!1)});return l.push(m),()=>{l.forEach(v=>v())}}},actions:{reposition({context:e,prop:t,scope:o,event:a}){Ae(()=>je(o),()=>Ue(o),{...t("positioning"),...a.options,defer:!0,listeners:!1,onComplete(r){e.set("currentPlacement",r.placement)}})},setHighlightedItem(e){const{context:t,event:o}=e;o.value!=null&&t.set("highlightedValue",o.value)},clearHighlightedItem(e){const{context:t}=e;t.set("highlightedValue",null)},selectHighlightedItem(e){var l;const{context:t,prop:o}=e,a=t.get("highlightedValue");if(!a)return;const n=o("multiple")?qe(t.get("value"),a):[a];(l=o("onSelect"))==null||l({value:n,itemValue:a}),t.set("value",n),t.set("inputValue",Q(e))},selectItem(e){const{context:t,event:o,flush:a,prop:n}=e;o.value!=null&&a(()=>{var r;const l=n("multiple")?qe(t.get("value"),o.value):[o.value];(r=n("onSelect"))==null||r({value:l,itemValue:o.value}),t.set("value",l),t.set("inputValue",Q(e))})},clearItem(e){const{context:t,event:o,flush:a}=e;o.value!=null&&a(()=>{const n=vo(t.get("value"),o.value);t.set("value",n),t.set("inputValue",Q(e))})},setInitialFocus({scope:e}){U(()=>{We(e)})},setFinalFocus({scope:e}){U(()=>{const t=X(e);(t==null?void 0:t.dataset.focusable)==null?We(e):aa(e)})},syncInputValue({context:e,scope:t,event:o}){const a=$(t);a&&(a.value=e.get("inputValue"),queueMicrotask(()=>{o.current().type!=="INPUT.CHANGE"&&ho(a)}))},setInputValue({context:e,event:t}){e.set("inputValue",t.value)},clearInputValue({context:e}){e.set("inputValue","")},revertInputValue({context:e,prop:t,computed:o}){const a=t("selectionBehavior"),n=ve(a,{replace:o("hasSelectedItems")?e.get("valueAsString"):"",preserve:e.get("inputValue"),clear:""});e.set("inputValue",n)},setValue(e){const{context:t,flush:o,event:a}=e;o(()=>{t.set("value",a.value),t.set("inputValue",Q(e))})},clearSelectedItems(e){const{context:t,flush:o}=e;o(()=>{t.set("value",[]),t.set("inputValue",Q(e))})},scrollContentToTop({prop:e,scope:t}){const o=e("scrollToIndexFn");if(o)o({index:0,immediate:!0});else{const a=K(t);if(!a)return;a.scrollTop=0}},invokeOnOpen({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!1})},highlightFirstItem({context:e,prop:t,scope:o}){(K(o)?queueMicrotask:U)(()=>{const n=t("collection").firstValue;n&&e.set("highlightedValue",n)})},highlightFirstItemIfNeeded({computed:e,action:t}){e("autoHighlight")&&t(["highlightFirstItem"])},highlightLastItem({context:e,prop:t,scope:o}){(K(o)?queueMicrotask:U)(()=>{const n=t("collection").lastValue;n&&e.set("highlightedValue",n)})},highlightNextItem({context:e,prop:t}){let o=null;const a=e.get("highlightedValue"),n=t("collection");a?(o=n.getNextValue(a),!o&&t("loopFocus")&&(o=n.firstValue)):o=n.firstValue,o&&e.set("highlightedValue",o)},highlightPrevItem({context:e,prop:t}){let o=null;const a=e.get("highlightedValue"),n=t("collection");a?(o=n.getPreviousValue(a),!o&&t("loopFocus")&&(o=n.lastValue)):o=n.lastValue,o&&e.set("highlightedValue",o)},highlightFirstSelectedItem({context:e,prop:t}){U(()=>{const[o]=t("collection").sort(e.get("value"));o&&e.set("highlightedValue",o)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:o}){U(()=>{let a=null;o("hasSelectedItems")?a=t("collection").sort(e.get("value"))[0]:a=t("collection").firstValue,a&&e.set("highlightedValue",a)})},highlightLastOrSelectedItem({context:e,prop:t,computed:o}){U(()=>{const a=t("collection");let n=null;o("hasSelectedItems")?n=a.sort(e.get("value"))[0]:n=a.lastValue,n&&e.set("highlightedValue",n)})},autofillInputValue({context:e,computed:t,prop:o,event:a,scope:n}){const l=$(n),r=o("collection");if(!t("autoComplete")||!l||!a.keypress)return;const d=r.stringify(e.get("highlightedValue"));U(()=>{l.value=d||e.get("inputValue")})},syncSelectedItems(e){const{context:t,prop:o}=e,a=ve(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(t.get("value")),clear:""});t.set("selectedItems",ua(e)),t.set("inputValue",a)},syncHighlightedItem({context:e,prop:t}){const o=t("collection").find(e.get("highlightedValue"));e.set("highlightedItem",o)},toggleVisibility({event:e,send:t,prop:o}){t({type:o("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});function Q({context:e,prop:t}){return ve(t("selectionBehavior"),{preserve:e.get("inputValue"),replace:e.get("valueAsString"),clear:""})}function ua({context:e,prop:t}){const o=t("collection");return e.get("value").map(a=>{const n=e.get("selectedItems").find(l=>o.getItemValue(l)===a);return n||o.find(a)})}Ee()(["allowCustomValue","autoFocus","closeOnSelect","collection","composite","defaultHighlightedValue","defaultInputValue","defaultOpen","defaultValue","dir","disabled","disableLayer","form","getRootNode","highlightedValue","id","ids","inputBehavior","inputValue","invalid","loopFocus","multiple","name","navigate","onFocusOutside","onHighlightChange","onInputValueChange","onInteractOutside","onOpenChange","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","openOnChange","openOnClick","openOnKeyPress","placeholder","positioning","readOnly","required","scrollToIndexFn","selectionBehavior","translations","value"]);Ee()(["htmlFor"]);Ee()(["id"]);Ee()(["item","persistFocus"]);const ca=e=>{const t=h.useId(),{dir:o}=Lo(),{getRootNode:a}=Do(),n=Kt(),l={id:t,ids:{label:n==null?void 0:n.ids.label,input:n==null?void 0:n.ids.control},disabled:n==null?void 0:n.disabled,readOnly:n==null?void 0:n.readOnly,required:n==null?void 0:n.required,invalid:n==null?void 0:n.invalid,dir:o,getRootNode:a,...e},r=Fo(ia,l);return na(r,qo)},da=(e,t)=>{const[o,a]=_o(e),[n,l]=Le()(a,["allowCustomValue","autoFocus","closeOnSelect","collection","composite","defaultHighlightedValue","defaultInputValue","defaultOpen","defaultValue","disabled","disableLayer","form","highlightedValue","id","ids","inputBehavior","inputValue","invalid","loopFocus","multiple","name","navigate","onFocusOutside","onHighlightChange","onInputValueChange","onInteractOutside","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","openOnChange","openOnClick","openOnKeyPress","placeholder","positioning","readOnly","required","scrollToIndexFn","selectionBehavior","translations","value"]),r=ca(n),d=Go(M({present:r.open},o)),m=M(r.getRootProps(),l);return c.jsx(Jo,{value:r,children:c.jsx(Ho,{value:d,children:c.jsx(Y.div,{...m,ref:t})})})},ma=h.forwardRef(da),ro=h.createContext(void 0),so=({children:e,filteredItems:t,...o})=>c.jsx(ro.Provider,{value:{...o,filteredItems:t},children:e});function Te(){const e=h.useContext(ro);if(!e)throw new Error("useCombobox must be used within a ComboboxProvider");return e}so.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add."},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},filteredItems:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ga(e,t){const o=t-1;return e>0&&o>0?e-1:o>0?0:null}function ba({allowCustomValue:e,customOptionRenderer:t,hasExactMatch:o,inputValue:a,isValueAlreadySelected:n,items:l,multiple:r,value:d}){if(!a&&!(d!=null&&d.length))return l;const m=l.reduce((v,y)=>{if("options"in y){const g=y.options.filter(p=>"options"in p?!0:d!=null&&d.includes(p.value)&&r?!1:!a||Ke(xe(p,t),a));g.length>0&&v.push({...y,options:g})}else(!(d!=null&&d.includes(y.value))||!r)&&(!a||Ke(xe(y,t),a))&&v.push(y);return v},[]);return e&&a&&!o&&!n?[{disabled:!1,isNewElement:!0,label:a,value:a},...m]:m}function Ie(e=[],t){for(const o of e)if("options"in o){const a=Ie(o.options,t);if(a!==t)return a}else if(o.value===t)return String(o.label);return t}function io(e=[],t){const o=[];for(const a of e)"options"in a?o.push(...io(a.options,a.label)):o.push(t?{...a,group:t}:a);return o}function pa({allowCustomValue:e,customOptionRenderer:t,inputValue:o,items:a,multiple:n,value:l=[]}){const r=ha(a,o,t),d=va(l,o);return ba({allowCustomValue:e,customOptionRenderer:t,hasExactMatch:r,inputValue:o,isValueAlreadySelected:d,items:a,multiple:n,value:l})}function xe(e,t){return"options"in e?e.label:t?mo(t(e)):e.label}function ha(e,t,o){return t?e.some(a=>"options"in a?a.options.some(n=>xe(n,o).toLowerCase()===t.toLowerCase()):xe(a,o).toLowerCase()===t.toLowerCase()):!1}function Be(e,t,o){return e.key===o&&t.current!==null&&t.current.selectionStart===0&&t.current.selectionEnd===0}function va(e,t){return t?e.some(o=>o.toLowerCase()===t.toLowerCase()):!1}function Ke(e,t){return e.toLowerCase().includes(t.toLowerCase())}function fa(e,t){return e.filter(o=>o!==t)}function Ca(e){return e!=="Backspace"&&e!=="ArrowLeft"}function ya(e,t){if(!e||!t)return[e];const o=t.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),a=new RegExp(`(${o})`,"gi");return e.split(a)}const E=h.forwardRef(({allowCustomValue:e=!0,children:t,className:o,customOptionRenderer:a,defaultValue:n,disabled:l,highlightResults:r=!1,i18n:d,items:m,invalid:v,locale:y,multiple:g,newElementLabel:p="Add ",noResultLabel:w="No results found",onValueChange:D,readOnly:I,required:j,value:k,...x},F)=>{const q=co(),[s,u]=h.useState(""),[f,O]=h.useState(n||[]),R=k&&k.length>0?k:f,J=v||(q==null?void 0:q.invalid);h.useEffect(()=>{if(!g&&R.length>0){const G=Ie(m,R[0]);u(G)}else g&&u("")},[R,m,g]);const A=h.useMemo(()=>pa({allowCustomValue:e,customOptionRenderer:a,inputValue:s,items:m,multiple:g,value:R}),[e,a,s,m,g,p,R]),N=h.useMemo(()=>io(A),[A]),b=h.useMemo(()=>go({items:N}),[N]);function H(G){u(G.inputValue)}function Ve(G){if(!g&&G.value.length>0){const Pe=Ie(m,G.value[0]);u(Pe)}else g&&u("");k||O(G.value),D&&D({value:G.value})}return c.jsx(so,{customOptionRenderer:a,filteredItems:A,highlightResults:r,i18n:d,invalid:J,items:m,locale:y,newElementLabel:p,noResultLabel:w,readOnly:I,children:c.jsx(ma,{allowCustomValue:e,className:o,closeOnSelect:!g,collection:b,"data-ods":"combobox",defaultValue:n,disabled:l,ids:{input:q==null?void 0:q.id},inputValue:s,invalid:J,multiple:g,onInputValueChange:H,onValueChange:Ve,positioning:{gutter:-1,sameWidth:!0},readOnly:I,ref:F,required:g?!1:j,selectionBehavior:g?"clear":"replace",value:R,...x,children:t})})});E.displayName="Combobox";E.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items.",defaultValue:{value:"false",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add.",defaultValue:{value:"'Add '",computed:!1}},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value.",defaultValue:{value:"'No results found'",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const Ia={"combobox-group":"_combobox-group_1i26q_2"},Fe=({children:e,className:t,...o})=>c.jsx(Qt,{className:he(Ia["combobox-group"],t),...o,children:e});Fe.displayName="ComboboxGroup";Fe.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",composes:["ComponentPropsWithRef"]};const xa={"combobox-highlight__highlight":"_combobox-highlight__highlight_cgn09_2"},ye=({children:e})=>{const{inputValue:t}=W(),{highlightResults:o}=Te();if(!o||!t)return c.jsx(c.Fragment,{children:e});const a=t.toLowerCase(),n=r=>ya(r,a).map((m,v)=>m.toLowerCase()===a?c.jsx("span",{className:xa["combobox-highlight__highlight"],children:m},v):m),l=r=>{if(typeof r=="string")return n(r);if(h.isValidElement(r)){const d=h.Children.map(r.props.children,l);return h.cloneElement(r,r.props,d)}return r};return l(e)};ye.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Oa={"combobox-option":"_combobox-option_qionr_2"},pe=({item:e,...t})=>{const{customOptionRenderer:o,newElementLabel:a}=Te();return"options"in e?c.jsx(c.Fragment,{}):c.jsx(Xt,{className:he(Oa["combobox-option"]),item:e,...t,children:o?c.jsx(ye,{children:o(e)}):c.jsx(c.Fragment,{children:e.isNewElement?c.jsxs(c.Fragment,{children:[a,c.jsx(ye,{children:e.label})]}):c.jsx(ye,{children:e.label})})})};pe.displayName="ComboboxOption";pe.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{item:{required:!0,tsType:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},description:""}},composes:["ComponentPropsWithRef"]};const Ne={"combobox-content":"_combobox-content_1nhfp_2","combobox-content__empty":"_combobox-content__empty_1nhfp_12"},T=h.forwardRef(({className:e,createPortal:t=!0,...o},a)=>{const{filteredItems:n,noResultLabel:l}=Te(),r=h.useMemo(()=>{if(!n||!n.length)return{hasNoResults:!0,hasOnlyNewElement:!1,itemsToDisplay:[],newElementItem:void 0};const m=n.length===1&&!("options"in n[0])&&n[0].isNewElement,v=m?[]:n,y=m&&!("options"in n[0])?n[0]:void 0;return{hasNoResults:!1,hasOnlyNewElement:m,itemsToDisplay:v,newElementItem:y}},[n]);return c.jsx(Ao,{disabled:!t,children:c.jsx(zt,{children:c.jsxs($t,{className:he(Ne["combobox-content"],e),"data-ods":"combobox-content",ref:a,...o,children:[r.hasNoResults&&c.jsx("div",{className:Ne["combobox-content__empty"],children:l}),r.newElementItem&&c.jsx(pe,{item:r.newElementItem}),r.itemsToDisplay.map(d=>"options"in d?c.jsxs(Fe,{children:[c.jsx(Zt,{children:d.label}),d.options.map(m=>"options"in m?null:c.jsx(pe,{item:m},m.value))]},d.label):c.jsx(pe,{item:d},d.value)),r.hasOnlyNewElement&&c.jsx("div",{className:Ne["combobox-content__empty"],children:l})]})})})});T.displayName="ComboboxContent";T.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const B={"combobox-control":"_combobox-control_169pk_2","combobox-control--multiple":"_combobox-control--multiple_169pk_16","combobox-control--open-bottom":"_combobox-control--open-bottom_169pk_20","combobox-control--open-top":"_combobox-control--open-top_169pk_24","combobox-control--read-only":"_combobox-control--read-only_169pk_28","combobox-control--invalid":"_combobox-control--invalid_169pk_32","combobox-control__tag--focused":"_combobox-control__tag--focused_169pk_35","combobox-control__input":"_combobox-control__input_169pk_39"},V=h.forwardRef(({className:e,clearable:t,loading:o,placeholder:a,...n},l)=>{const{disabled:r,getContentProps:d,multiple:m,open:v,setOpen:y,setValue:g,value:p}=W(),{i18n:w,invalid:D,items:I,locale:j,readOnly:k}=Te(),[x,F]=h.useState(null),s=d()["data-placement"],u=h.useRef(null),f=!r&&!k;function O(){f&&y(!0)}function R(b){if(b.key===" "&&v&&b.stopPropagation(),!m||!p.length)return;const H=Be(b,u,"Backspace"),Ve=Be(b,u,"ArrowLeft");if(H&&p.length>0)if(x===null)F(p.length-1),b.preventDefault();else{const G=x,Pe=p[G],uo=ga(G,p.length);F(uo),A(Pe),b.preventDefault()}else Ve&&p.length>0&&x===null?(F(p.length-1),b.preventDefault()):Ca(b.key)&&F(null);x!==null&&p.length>0&&(b.key==="ArrowLeft"&&x>0?(F(x-1),b.preventDefault()):b.key==="ArrowRight"&&x<p.length-1?(F(x+1),b.preventDefault()):b.key==="Escape"?(F(null),b.preventDefault()):b.key==="Enter"&&(A(p[x]),b.preventDefault()))}function J(b){f&&(N(),A(b))}function A(b){if(!m)return;const H=fa(p,b);g(H)}function N(){F(null)}return c.jsxs(Yt,{className:he(B["combobox-control"],{[B["combobox-control--open-top"]]:v&&s==="top",[B["combobox-control--open-bottom"]]:v&&s==="bottom",[B["combobox-control--multiple"]]:m,[B["combobox-control--read-only"]]:k,[B["combobox-control--invalid"]]:D,className:e}),"data-ods":"combobox-control",onBlur:()=>N(),ref:l,...n,children:[m&&p&&p.length>0&&p.map((b,H)=>c.jsx(Ko,{className:he({[B["combobox-control__tag--focused"]]:f&&x===H}),disabled:r||k,onClick:()=>J(b),tabIndex:-1,value:b,children:Ie(I,b)},b)),c.jsx(Jt,{asChild:!0,children:c.jsx(Wo,{className:B["combobox-control__input"],clearable:t,disabled:r,i18n:w,loading:o,locale:j,onClear:()=>g([]),onClick:O,onKeyDown:R,placeholder:a,readOnly:k,ref:u})})]})});V.displayName="ComboboxControl";V.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const Ea={argTypes:$o(["customOptionRenderer","defaultValue","i18n","items","locale","name","onInputValueChange","onValueChange","required","value"]),component:E,subcomponents:{ComboboxContent:T,ComboboxControl:V},title:"React Components/Combobox"},Z={render:e=>i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:e.allowCustomValue,defaultValue:e.defaultValue,disabled:e.disabled,highlightResults:e.highlightResults,invalid:e.invalid,multiple:e.multiple,newElementLabel:e.newElementLabel,noResultLabel:e.noResultLabel,readOnly:e.readOnly},i.createElement(V,{clearable:e.clearable,placeholder:e.placeholder,loading:e.loading}),i.createElement(T,null)),argTypes:Yo({allowCustomValue:{table:{category:_.general},control:"boolean"},clearable:{table:{category:_.general,type:{summary:"boolean"}},control:"boolean"},defaultValue:{table:{category:_.general},control:"text"},disabled:{table:{category:_.general},control:"boolean"},highlightResults:{table:{category:_.general},control:"boolean"},invalid:{table:{category:_.general},control:"boolean"},loading:{table:{category:_.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:_.general},control:"boolean"},newElementLabel:{table:{category:_.general},control:"text"},noResultLabel:{table:{category:_.general},control:"text"},placeholder:{table:{category:_.general},control:"text"},readOnly:{table:{category:_.general},control:"boolean"}}),args:{placeholder:"Start typing"}},z={tags:["!dev"],render:({})=>i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,null),i.createElement(T,null))},ee={tags:["!dev"],render:({})=>i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,{placeholder:"Combobox"}),i.createElement(T,null))},te={tags:["!dev"],render:({})=>i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,{clearable:!0,placeholder:"Combobox"}),i.createElement(T,null))},oe={tags:["!dev"],render:({})=>i.createElement(E,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,{placeholder:"Combobox"}),i.createElement(T,null))},ae={tags:["!dev"],render:({})=>i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},i.createElement(V,{placeholder:"Combobox"}),i.createElement(T,null))},ne={tags:["!dev"],render:({})=>i.createElement(E,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},i.createElement(V,{placeholder:"Combobox"}),i.createElement(T,null))},le={tags:["!dev"],render:({})=>i.createElement(Se,null,i.createElement(we,null,"Combobox"),i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},i.createElement(V,null),i.createElement(T,null)))},re={tags:["!dev"],render:({})=>i.createElement(E,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},i.createElement(V,null),i.createElement(T,null))},se={tags:["!dev"],parameters:{docs:{source:{...De()}}},render:({})=>{const[e,t]=h.useState(["dog"]);return i.createElement(i.Fragment,null,i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:o=>t(o.value),value:e},i.createElement(V,{placeholder:"Select an animal"}),i.createElement(T,null)),i.createElement("div",{style:{marginTop:8}},i.createElement("strong",null,"Selected value:")," ",e[0]??"None"))}},ie={tags:["!dev"],render:({})=>i.createElement(E,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,null),i.createElement(T,null))},ue={tags:["!dev"],parameters:{docs:{source:{...De()}}},render:({})=>{const e=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}];function t(o){var a,n;return i.createElement("span",{style:{color:(a=o.customRendererData)==null?void 0:a.color,fontWeight:"bold"}},o.label," ",((n=o.customRendererData)==null?void 0:n.info)&&i.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",o.customRendererData.info,")"))}return i.createElement(E,{customOptionRenderer:t,highlightResults:!0,items:e},i.createElement(V,null),i.createElement(T,null))}},ce={tags:["!dev"],render:({})=>i.createElement(E,{items:[]},i.createElement(V,null),i.createElement(T,null))},de={tags:["!dev"],render:({})=>i.createElement(E,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,null),i.createElement(T,null))},me={tags:["!dev"],render:({})=>i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster",disabled:!0},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,{placeholder:"Please select"}),i.createElement(T,null))},ge={tags:["!dev"],render:({})=>i.createElement(Se,null,i.createElement(we,null,"Favorite pet:"),i.createElement(E,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,null),i.createElement(T,null)))},be={tags:["!dev"],parameters:{docs:{source:{...De()}}},render:({})=>i.createElement(Se,null,i.createElement(we,null,"Favorite pet:"),i.createElement(E,{i18n:{[Bo.clearButton]:"Clear favorite pet selection"},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},i.createElement(V,{clearable:!0}),i.createElement(T,null)))};var $e,Ye,Je;Z.parameters={...Z.parameters,docs:{...($e=Z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Combobox items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]} allowCustomValue={arg.allowCustomValue} defaultValue={arg.defaultValue} disabled={arg.disabled} highlightResults={arg.highlightResults} invalid={arg.invalid} multiple={arg.multiple} newElementLabel={arg.newElementLabel} noResultLabel={arg.noResultLabel} readOnly={arg.readOnly}>
      <ComboboxControl clearable={arg.clearable} placeholder={arg.placeholder} loading={arg.loading} />
      <ComboboxContent />
    </Combobox>,
  argTypes: orderControls({
    allowCustomValue: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    defaultValue: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    highlightResults: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    newElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  }),
  args: {
    placeholder: 'Start typing'
  }
}`,...(Je=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Xe,Qe,Ze;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
}`,...(Ze=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var ze,et,tt;ee.parameters={...ee.parameters,docs:{...(ze=ee.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
}`,...(tt=(et=ee.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var ot,at,nt;te.parameters={...te.parameters,docs:{...(ot=te.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <ComboboxControl clearable placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
}`,...(nt=(at=te.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var lt,rt,st;oe.parameters={...oe.parameters,docs:{...(lt=oe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox disabled items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
}`,...(st=(rt=oe.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ut,ct;ae.parameters={...ae.parameters,docs:{...(it=ae.parameters)==null?void 0:it.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]} readOnly>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
}`,...(ct=(ut=ae.parameters)==null?void 0:ut.docs)==null?void 0:ct.source}}};var dt,mt,gt;ne.parameters={...ne.parameters,docs:{...(dt=ne.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox items={[{
    label: 'Europe',
    options: [{
      label: 'France',
      value: 'fr'
    }, {
      label: 'Germany',
      value: 'de'
    }, {
      label: 'Italy',
      value: 'it'
    }]
  }, {
    label: 'Asia',
    options: [{
      label: 'China',
      value: 'cn'
    }, {
      label: 'Japan',
      value: 'jp'
    }, {
      label: 'Russia',
      value: 'ru'
    }]
  }, {
    label: 'World',
    value: 'world'
  }]}>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
}`,...(gt=(mt=ne.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var bt,pt,ht;le.parameters={...le.parameters,docs:{...(bt=le.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>Combobox</FormFieldLabel>
      <Combobox items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </FormField>
}`,...(ht=(pt=le.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};var vt,ft,Ct;re.parameters={...re.parameters,docs:{...(vt=re.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox invalid items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
}`,...(Ct=(ft=re.parameters)==null?void 0:ft.docs)==null?void 0:Ct.source}}};var yt,It,xt;se.parameters={...se.parameters,docs:{...(yt=se.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [value, setValue] = useState<string[]>(['dog']);
    return <>
        <Combobox items={[{
        label: 'Dog',
        value: 'dog'
      }, {
        label: 'Cat',
        value: 'cat'
      }, {
        label: 'Hamster',
        value: 'hamster'
      }, {
        label: 'Parrot',
        value: 'parrot'
      }, {
        label: 'Spider',
        value: 'spider'
      }, {
        label: 'Goldfish',
        value: 'goldfish'
      }]} onValueChange={details => setValue(details.value)} value={value}>
          <ComboboxControl placeholder="Select an animal" />
          <ComboboxContent />
        </Combobox>
        <div style={{
        marginTop: 8
      }}>
          <strong>Selected value:</strong> {value[0] ?? 'None'}
        </div>
      </>;
  }
}`,...(xt=(It=se.parameters)==null?void 0:It.docs)==null?void 0:xt.source}}};var Ot,Et,Tt;ie.parameters={...ie.parameters,docs:{...(Ot=ie.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox highlightResults items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
}`,...(Tt=(Et=ie.parameters)==null?void 0:Et.docs)==null?void 0:Tt.source}}};var Vt,Pt,kt;ue.parameters={...ue.parameters,docs:{...(Vt=ue.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    type CustomData = {
      color: string;
      info: string;
    };
    const items = [{
      label: 'Apple',
      value: 'apple',
      customRendererData: {
        color: 'red',
        info: 'Fruit'
      }
    }, {
      label: 'Banana',
      value: 'banana',
      customRendererData: {
        color: 'yellow',
        info: 'Fruit'
      }
    }, {
      label: 'Carrot',
      value: 'carrot',
      customRendererData: {
        color: 'orange',
        info: 'Vegetable'
      }
    }, {
      label: 'Broccoli',
      value: 'broccoli',
      customRendererData: {
        color: 'green',
        info: 'Vegetable'
      }
    }, {
      label: 'Blueberry',
      value: 'blueberry',
      customRendererData: {
        color: 'blue',
        info: 'Fruit'
      }
    }];
    function customOptionRenderer(item: ComboboxItem<CustomData>) {
      return <span style={{
        color: item.customRendererData?.color,
        fontWeight: 'bold'
      }}>
          {item.label} {item.customRendererData?.info && <span style={{
          fontWeight: 'normal',
          fontSize: 12,
          color: '#888'
        }}>({item.customRendererData.info})</span>}
        </span>;
    }
    return <Combobox customOptionRenderer={customOptionRenderer} highlightResults items={items}>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>;
  }
}`,...(kt=(Pt=ue.parameters)==null?void 0:Pt.docs)==null?void 0:kt.source}}};var Rt,Nt,St;ce.parameters={...ce.parameters,docs:{...(Rt=ce.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox items={[]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
}`,...(St=(Nt=ce.parameters)==null?void 0:Nt.docs)==null?void 0:St.source}}};var wt,Lt,Dt;de.parameters={...de.parameters,docs:{...(wt=de.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox multiple items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
}`,...(Dt=(Lt=de.parameters)==null?void 0:Lt.docs)==null?void 0:Dt.source}}};var Ft,qt,_t;me.parameters={...me.parameters,docs:{...(Ft=me.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Combobox items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster',
    disabled: true
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <ComboboxControl placeholder="Please select" />
      <ComboboxContent />
    </Combobox>
}`,...(_t=(qt=me.parameters)==null?void 0:qt.docs)==null?void 0:_t.source}}};var At,Gt,Ht;ge.parameters={...ge.parameters,docs:{...(At=ge.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>Favorite pet:</FormFieldLabel>
      <Combobox items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }, {
      label: 'Hamster',
      value: 'hamster'
    }, {
      label: 'Parrot',
      value: 'parrot'
    }, {
      label: 'Spider',
      value: 'spider'
    }, {
      label: 'Goldfish',
      value: 'goldfish'
    }]}>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </FormField>
}`,...(Ht=(Gt=ge.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var Ut,jt,Mt;be.parameters={...be.parameters,docs:{...(Ut=be.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <FormField>
      <FormFieldLabel>Favorite pet:</FormFieldLabel>
      <Combobox i18n={{
      [INPUT_I18N.clearButton]: 'Clear favorite pet selection'
    }} items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }, {
      label: 'Hamster',
      value: 'hamster'
    }, {
      label: 'Parrot',
      value: 'parrot'
    }, {
      label: 'Spider',
      value: 'spider'
    }, {
      label: 'Goldfish',
      value: 'goldfish'
    }]}>
        <ComboboxControl clearable />
        <ComboboxContent />
      </Combobox>
    </FormField>
}`,...(Mt=(jt=be.parameters)==null?void 0:jt.docs)==null?void 0:Mt.source}}};const Ta=["Demo","Default","Overview","Clearable","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","Placeholder","AccessibilityFormField","AccessibilityI18n"],Ba=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:ge,AccessibilityI18n:be,Clearable:te,Controlled:se,CustomOptions:ue,Default:z,Demo:Z,Disabled:oe,Empty:ce,Group:ne,Highlight:ie,InFormField:le,Invalid:re,Multiple:de,Overview:ee,Placeholder:me,Readonly:ae,__namedExportsOrder:Ta,default:Ea},Symbol.toStringTag,{value:"Module"}));export{ge as A,Ba as C,z as D,ce as E,ne as G,ie as H,re as I,de as M,ee as O,ae as R,be as a,te as b,oe as c,se as d,ue as e,le as f};
