import{r as h,e as u}from"./index-D_CmzhJ4.js";import{j as c}from"./jsx-runtime-VM66peLj.js";import{g as Qt}from"./element-BmbJTp3e.js";import{L as wt,c as Zt}from"./collection-DMrs6jU3.js";import{c as Ie,Q as H,R as B,S as zt,a as Te,an as eo,aV as be,r as G,aW as to,aU as oo,a5 as ke,av as no,aX as ao,aY as lo,h as ro,aC as so,T as io,W as y,aj as Oe,aZ as uo,a_ as co,p as mo,Y as Ne,ai as go,ak as bo,a$ as po,aA as ho,b0 as vo,K as ye,b1 as Co,U as fo,u as Io,L as yo,V as xo}from"./use-locale-context-BQVaQ0H3.js";import{s as Oo,P as Eo}from"./portal-Bd62KldU.js";import{u as St,a as Vo,P as To}from"./use-presence-Cqrqn20p.js";import{a as we,g as Po}from"./index-xSrPfE2G.js";import{a as ko}from"./index-DninfMAu.js";import{t as No}from"./index-DHCC0GIt.js";import{u as Rt}from"./use-field-context-A_pa20cf.js";import{c as ge}from"./index-CkQHsVsO.js";import{I as wo}from"./Input-Pkw6XJuX.js";import{T as So}from"./Tag-B60iwTLj.js";import{c as Ro,F as Lo}from"./FormFieldLabel-DjB85afw.js";import{e as qo,o as Fo,C as q}from"./controls-BtiQQn1l.js";const[_o,U]=Ie({name:"ComboboxContext",hookName:"useComboboxContext",providerName:"<ComboboxProvider />"}),Lt=h.forwardRef((e,t)=>{const o=U(),n=St(),a=H(o.getContentProps(),n.getPresenceProps(),e);return n.unmounted?null:c.jsx(B.div,{...a,ref:zt(n.ref,t)})});Lt.displayName="ComboboxContent";const qt=h.forwardRef((e,t)=>{const o=U(),n=H(o.getControlProps(),e);return c.jsx(B.div,{...n,ref:t})});qt.displayName="ComboboxControl";const Ft=h.forwardRef((e,t)=>{const o=U(),n=H(o.getInputProps(),e),a=Rt();return c.jsx(B.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...n,ref:t})});Ft.displayName="ComboboxInput";const[Do,wn]=Ie({name:"ComboboxItemContext",hookName:"useComboboxItemContext",providerName:"<ComboboxItemProvider />"}),[Ao,Sn]=Ie({name:"ComboboxItemPropsContext",hookName:"useComboboxItemPropsContext",providerName:"<ComboboxItemPropsProvider />"}),_t=h.forwardRef((e,t)=>{const[o,n]=Te()(e,["item","persistFocus"]),a=U(),r=H(a.getItemProps(o),n),l=a.getItemState(o);return c.jsx(Ao,{value:o,children:c.jsx(Do,{value:l,children:c.jsx(B.div,{...r,ref:t})})})});_t.displayName="ComboboxItem";const[Go,Ho]=Ie({name:"ComboboxItemGroupPropsContext",hookName:"useComboboxItemGroupPropsContext",providerName:"<ComboboxItemGroupPropsProvider />"}),Dt=h.forwardRef((e,t)=>{const o=h.useId(),[n,a]=Te()(e,["id"]),r={id:o,...n},l=U(),d=H(l.getItemGroupProps(r),a);return c.jsx(Go,{value:r,children:c.jsx(B.div,{...d,ref:t})})});Dt.displayName="ComboboxItemGroup";const At=h.forwardRef((e,t)=>{const o=U(),n=Ho(),a=H(o.getItemGroupLabelProps({htmlFor:n.id}),e);return c.jsx(B.div,{...a,ref:t})});At.displayName="ComboboxItemGroupLabel";const Gt=h.forwardRef((e,t)=>{const o=U(),n=St(),a=H(o.getPositionerProps(),e);return n.unmounted?null:c.jsx(B.div,{...a,ref:t})});Gt.displayName="ComboboxPositioner";var Uo=io("combobox").parts("root","clearTrigger","content","control","input","item","itemGroup","itemGroupLabel","itemIndicator","itemText","label","list","positioner","trigger"),S=Uo.build(),Ht=e=>new wt(e);Ht.empty=()=>new wt({items:[]});var jo=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`combobox:${e.id}`},Ee=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`combobox:${e.id}:label`},Ut=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`combobox:${e.id}:control`},pe=e=>{var t;return((t=e.ids)==null?void 0:t.input)??`combobox:${e.id}:input`},he=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`combobox:${e.id}:content`},jt=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`combobox:${e.id}:popper`},Mt=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`combobox:${e.id}:toggle-btn`},Wt=e=>{var t;return((t=e.ids)==null?void 0:t.clearTrigger)??`combobox:${e.id}:clear-btn`},Mo=(e,t)=>{var o,n;return((n=(o=e.ids)==null?void 0:o.itemGroup)==null?void 0:n.call(o,t))??`combobox:${e.id}:optgroup:${t}`},Se=(e,t)=>{var o,n;return((n=(o=e.ids)==null?void 0:o.itemGroupLabel)==null?void 0:n.call(o,t))??`combobox:${e.id}:optgroup-label:${t}`},Re=(e,t)=>{var o,n;return((n=(o=e.ids)==null?void 0:o.item)==null?void 0:n.call(o,t))??`combobox:${e.id}:option:${t}`},M=e=>e.getById(he(e)),W=e=>e.getById(pe(e)),Le=e=>e.getById(jt(e)),qe=e=>e.getById(Ut(e)),Y=e=>e.getById(Mt(e)),Fe=e=>e.getById(Wt(e)),Bt=(e,t)=>{if(t==null)return;const o=`[role=option][data-value="${CSS.escape(t)}"]`;return vo(M(e),o)},_e=e=>{const t=W(e);e.isActiveElement(t)||t==null||t.focus({preventScroll:!0})},Wo=e=>{const t=Y(e);e.isActiveElement(t)||t==null||t.focus({preventScroll:!0})};function Bo(e,t){const{context:o,prop:n,state:a,send:r,scope:l,computed:d,event:g}=e,m=n("translations"),x=n("collection"),C=n("disabled"),p=d("isInteractive"),w=n("invalid"),F=n("readOnly"),v=a.hasTag("open"),E=a.hasTag("focused"),V=n("composite"),L=o.get("highlightedValue"),D=Po({...n("positioning"),placement:o.get("currentPlacement")});function A(s){const i=x.getItemDisabled(s.item),f=x.getItemValue(s.item);return po(f,()=>`[zag-js] No value found for item ${JSON.stringify(s.item)}`),{value:f,disabled:!!(i||i),highlighted:L===f,selected:o.get("value").includes(f)}}return{focused:E,open:v,inputValue:o.get("inputValue"),highlightedValue:L,highlightedItem:o.get("highlightedItem"),value:o.get("value"),valueAsString:o.get("valueAsString"),hasSelectedItems:d("hasSelectedItems"),selectedItems:o.get("selectedItems"),collection:n("collection"),multiple:!!n("multiple"),disabled:!!C,syncSelectedItems(){r({type:"SELECTED_ITEMS.SYNC"})},reposition(s={}){r({type:"POSITIONING.SET",options:s})},setHighlightValue(s){r({type:"HIGHLIGHTED_VALUE.SET",value:s})},selectValue(s){r({type:"ITEM.SELECT",value:s})},setValue(s){r({type:"VALUE.SET",value:s})},setInputValue(s){r({type:"INPUT_VALUE.SET",value:s})},clearValue(s){s!=null?r({type:"ITEM.CLEAR",value:s}):r({type:"VALUE.CLEAR"})},focus(){var s;(s=W(l))==null||s.focus()},setOpen(s){a.hasTag("open")!==s&&r({type:s?"OPEN":"CLOSE"})},getRootProps(){return t.element({...S.root.attrs,dir:n("dir"),id:jo(l),"data-invalid":y(w),"data-readonly":y(F)})},getLabelProps(){return t.label({...S.label.attrs,dir:n("dir"),htmlFor:pe(l),id:Ee(l),"data-readonly":y(F),"data-disabled":y(C),"data-invalid":y(w),"data-focus":y(E),onClick(s){var i;V||(s.preventDefault(),(i=Y(l))==null||i.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...S.control.attrs,dir:n("dir"),id:Ut(l),"data-state":v?"open":"closed","data-focus":y(E),"data-disabled":y(C),"data-invalid":y(w)})},getPositionerProps(){return t.element({...S.positioner.attrs,dir:n("dir"),id:jt(l),style:D.floating})},getInputProps(){return t.input({...S.input.attrs,dir:n("dir"),"aria-invalid":Oe(w),"data-invalid":y(w),"data-autofocus":y(n("autoFocus")),name:n("name"),form:n("form"),disabled:C,required:n("required"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",spellCheck:"false",readOnly:F,placeholder:n("placeholder"),id:pe(l),type:"text",role:"combobox",defaultValue:o.get("inputValue"),"aria-autocomplete":d("autoComplete")?"both":"list","aria-controls":he(l),"aria-expanded":v,"data-state":v?"open":"closed","aria-activedescendant":L?Re(l,L):void 0,onClick(s){s.defaultPrevented||n("openOnClick")&&p&&r({type:"INPUT.CLICK"})},onFocus(){C||r({type:"INPUT.FOCUS"})},onBlur(){C||r({type:"INPUT.BLUR"})},onChange(s){r({type:"INPUT.CHANGE",value:s.currentTarget.value})},onKeyDown(s){if(s.defaultPrevented||!p||s.ctrlKey||s.shiftKey||bo(s))return;const i=n("openOnKeyPress"),f=s.ctrlKey||s.metaKey||s.shiftKey,O=!0,_={ArrowDown(I){!i&&!v||(r({type:I.altKey?"OPEN":"INPUT.ARROW_DOWN",keypress:O}),I.preventDefault())},ArrowUp(){!i&&!v||(r({type:s.altKey?"CLOSE":"INPUT.ARROW_UP",keypress:O}),s.preventDefault())},Home(I){f||(r({type:"INPUT.HOME",keypress:O}),v&&I.preventDefault())},End(I){f||(r({type:"INPUT.END",keypress:O}),v&&I.preventDefault())},Enter(I){var J;if(r({type:"INPUT.ENTER",keypress:O}),v&&I.preventDefault(),L==null)return;const K=Bt(l,L);ho(K)&&((J=n("navigate"))==null||J({value:L,node:K,href:K.href}))},Escape(){r({type:"INPUT.ESCAPE",keypress:O}),s.preventDefault()}},$=Ne(s,{dir:n("dir")}),b=_[$];b==null||b(s)}})},getTriggerProps(s={}){return t.button({...S.trigger.attrs,dir:n("dir"),id:Mt(l),"aria-haspopup":V?"listbox":"dialog",type:"button",tabIndex:s.focusable?void 0:-1,"aria-label":m.triggerLabel,"aria-expanded":v,"data-state":v?"open":"closed","aria-controls":v?he(l):void 0,disabled:C,"data-invalid":y(w),"data-focusable":y(s.focusable),"data-readonly":y(F),"data-disabled":y(C),onFocus(){s.focusable&&r({type:"INPUT.FOCUS",src:"trigger"})},onClick(i){i.defaultPrevented||p&&go(i)&&r({type:"TRIGGER.CLICK"})},onPointerDown(i){p&&i.pointerType!=="touch"&&(i.preventDefault(),queueMicrotask(()=>{var f;(f=W(l))==null||f.focus({preventScroll:!0})}))},onKeyDown(i){if(i.defaultPrevented||V)return;const f={ArrowDown(){r({type:"INPUT.ARROW_DOWN",src:"trigger"})},ArrowUp(){r({type:"INPUT.ARROW_UP",src:"trigger"})}},O=Ne(i,{dir:n("dir")}),_=f[O];_&&(_(i),i.preventDefault())}})},getContentProps(){return t.element({...S.content.attrs,dir:n("dir"),id:he(l),role:V?"listbox":"dialog",tabIndex:-1,hidden:!v,"data-state":v?"open":"closed","data-placement":o.get("currentPlacement"),"aria-labelledby":Ee(l),"aria-multiselectable":n("multiple")&&V?!0:void 0,"data-empty":y(x.size===0),onPointerDown(s){s.preventDefault()}})},getListProps(){return t.element({...S.list.attrs,role:V?void 0:"listbox","data-empty":y(x.size===0),"aria-labelledby":Ee(l),"aria-multiselectable":n("multiple")&&!V?!0:void 0})},getClearTriggerProps(){return t.button({...S.clearTrigger.attrs,dir:n("dir"),id:Wt(l),type:"button",tabIndex:-1,disabled:C,"data-invalid":y(w),"aria-label":m.clearTriggerLabel,"aria-controls":pe(l),hidden:!o.get("value").length,onPointerDown(s){s.preventDefault()},onClick(s){s.defaultPrevented||p&&r({type:"VALUE.CLEAR",src:"clear-trigger"})}})},getItemState:A,getItemProps(s){const i=A(s),f=i.value;return t.element({...S.item.attrs,dir:n("dir"),id:Re(l,f),role:"option",tabIndex:-1,"data-highlighted":y(i.highlighted),"data-state":i.selected?"checked":"unchecked","aria-selected":Oe(i.highlighted),"aria-disabled":Oe(i.disabled),"data-disabled":y(i.disabled),"data-value":i.value,onPointerMove(){i.disabled||i.highlighted||r({type:"ITEM.POINTER_MOVE",value:f})},onPointerLeave(){if(s.persistFocus||i.disabled)return;const O=g.previous();O!=null&&O.type.includes("POINTER")&&r({type:"ITEM.POINTER_LEAVE",value:f})},onClick(O){uo(O)||co(O)||mo(O)||i.disabled||r({type:"ITEM.CLICK",src:"click",value:f})}})},getItemTextProps(s){const i=A(s);return t.element({...S.itemText.attrs,dir:n("dir"),"data-state":i.selected?"checked":"unchecked","data-disabled":y(i.disabled),"data-highlighted":y(i.highlighted)})},getItemIndicatorProps(s){const i=A(s);return t.element({"aria-hidden":!0,...S.itemIndicator.attrs,dir:n("dir"),"data-state":i.selected?"checked":"unchecked",hidden:!i.selected})},getItemGroupProps(s){const{id:i}=s;return t.element({...S.itemGroup.attrs,dir:n("dir"),id:Mo(l,i),"aria-labelledby":Se(l,i),"data-empty":y(x.size===0),role:"group"})},getItemGroupLabelProps(s){const{htmlFor:i}=s;return t.element({...S.itemGroupLabel.attrs,dir:n("dir"),id:Se(l,i),role:"presentation"})}}}var{guards:Ko,createMachine:$o,choose:Yo}=eo(),{and:T,not:R}=Ko,Jo=$o({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],closeOnSelect:!e.multiple,allowCustomValue:!1,inputBehavior:"none",selectionBehavior:e.multiple?"clear":"replace",openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate({node:t}){so(t)},collection:Ht.empty(),...e,positioning:{placement:"bottom",sameWidth:!0,...e.positioning},translations:{triggerLabel:"Toggle suggestions",clearTriggerLabel:"Clear value",...e.translations}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"suggesting":"idle"},context({prop:e,bindable:t,getContext:o}){return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:ro,hash(n){return n.join(",")},onChange(n){var g;const a=o(),r=a.get("selectedItems"),l=e("collection"),d=n.map(m=>r.find(C=>l.getItemValue(C)===m)||l.find(m));a.set("selectedItems",d),a.set("valueAsString",l.stringifyItems(d)),(g=e("onValueChange"))==null||g({value:n,items:d})}})),highlightedValue:t(()=>({defaultValue:e("defaultHighlightedValue")||null,value:e("highlightedValue"),onChange(n){var r;const a=e("collection").find(n);(r=e("onHighlightChange"))==null||r({highlightedValue:n,highlightedItem:a})}})),inputValue:t(()=>{let n=e("inputValue")||e("defaultInputValue")||"";const a=e("defaultValue")||e("value")||[];if(!n.trim()&&!e("multiple")){const r=e("collection").stringifyMany(a);n=be(e("selectionBehavior"),{preserve:n||r,replace:r,clear:""})}return{defaultValue:n,value:e("inputValue"),onChange(r){var l;(l=e("onInputValueChange"))==null||l({inputValue:r})}}}),highlightedItem:t(()=>{const n=e("highlightedValue");return{defaultValue:e("collection").find(n)}}),selectedItems:t(()=>{const n=e("value")||e("defaultValue")||[];return{defaultValue:e("collection").findMany(n)}}),valueAsString:t(()=>{const n=e("value")||e("defaultValue")||[];return{sync:!0,defaultValue:e("collection").stringifyMany(n)}})}},computed:{isInputValueEmpty:({context:e})=>e.get("inputValue").length===0,isInteractive:({prop:e})=>!(e("readOnly")||e("disabled")),autoComplete:({prop:e})=>e("inputBehavior")==="autocomplete",autoHighlight:({prop:e})=>e("inputBehavior")==="autohighlight",hasSelectedItems:({context:e})=>e.get("value").length>0},watch({context:e,prop:t,track:o,action:n}){o([()=>e.hash("value")],()=>{n(["syncSelectedItems"])}),o([()=>e.get("inputValue")],()=>{n(["syncInputValue"])}),o([()=>e.get("highlightedValue")],()=>{n(["syncHighlightedItem","autofillInputValue"])}),o([()=>t("open")],()=>{n(["toggleVisibility"])})},on:{"SELECTED_ITEMS.SYNC":{actions:["syncSelectedItems"]},"HIGHLIGHTED_VALUE.SET":{actions:["setHighlightedItem"]},"ITEM.SELECT":{actions:["selectItem"]},"ITEM.CLEAR":{actions:["clearItem"]},"VALUE.SET":{actions:["setValue"]},"INPUT_VALUE.SET":{actions:["setInputValue"]},"POSITIONING.SET":{actions:["reposition"]}},entry:Yo([{guard:"autoFocus",actions:["setInitialFocus"]}]),states:{idle:{tags:["idle","closed"],entry:["scrollContentToTop","clearHighlightedItem"],on:{"CONTROLLED.OPEN":{target:"interacting"},"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.FOCUS":{target:"focused"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{target:"focused",actions:["clearInputValue","clearSelectedItems","setInitialFocus"]}}},focused:{tags:["focused","closed"],entry:["scrollContentToTop","clearHighlightedItem"],on:{"CONTROLLED.OPEN":[{guard:"isChangeEvent",target:"suggesting"},{target:"interacting"}],"INPUT.CHANGE":[{guard:T("isOpenControlled","openOnChange"),actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{guard:"openOnChange",target:"suggesting",actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{actions:["setInputValue"]}],"LAYER.INTERACT_OUTSIDE":{target:"idle"},"INPUT.ESCAPE":{guard:T("isCustomValue",R("allowCustomValue")),actions:["revertInputValue"]},"INPUT.BLUR":{target:"idle"},"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_DOWN":[{guard:T("isOpenControlled","autoComplete"),actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"isOpenControlled",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_UP":[{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{target:"interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{actions:["clearInputValue","clearSelectedItems"]}}},interacting:{tags:["open","focused"],entry:["setInitialFocus"],effects:["scrollToHighlightedItem","trackDismissableLayer","trackPlacement","hideOtherElements"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],"INPUT.HOME":{actions:["highlightFirstItem"]},"INPUT.END":{actions:["highlightLastItem"]},"INPUT.ARROW_DOWN":[{guard:T("autoComplete","isLastItemHighlighted"),actions:["clearHighlightedItem","scrollContentToTop"]},{actions:["highlightNextItem"]}],"INPUT.ARROW_UP":[{guard:T("autoComplete","isFirstItemHighlighted"),actions:["clearHighlightedItem"]},{actions:["highlightPrevItem"]}],"INPUT.ENTER":[{guard:T("isOpenControlled","isCustomValue",R("hasHighlightedItem"),R("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:T("isCustomValue",R("hasHighlightedItem"),R("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:T("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":[{guard:"autoComplete",target:"suggesting",actions:["setInputValue"]},{target:"suggesting",actions:["clearHighlightedItem","setInputValue"]}],"ITEM.POINTER_MOVE":{actions:["setHighlightedItem"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedItem"]},"ITEM.CLICK":[{guard:T("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],"LAYER.ESCAPE":[{guard:T("isOpenControlled","autoComplete"),actions:["syncInputValue","invokeOnClose"]},{guard:"autoComplete",target:"focused",actions:["syncInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"LAYER.INTERACT_OUTSIDE":[{guard:T("isOpenControlled","isCustomValue",R("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:T("isCustomValue",R("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}},suggesting:{tags:["open","focused"],effects:["trackDismissableLayer","scrollToHighlightedItem","trackPlacement","trackChildNodes","hideOtherElements"],entry:["setInitialFocus"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],CHILDREN_CHANGE:{guard:"autoHighlight",actions:["highlightFirstItem"]},"INPUT.ARROW_DOWN":{target:"interacting",actions:["highlightNextItem"]},"INPUT.ARROW_UP":{target:"interacting",actions:["highlightPrevItem"]},"INPUT.HOME":{target:"interacting",actions:["highlightFirstItem"]},"INPUT.END":{target:"interacting",actions:["highlightLastItem"]},"INPUT.ENTER":[{guard:T("isOpenControlled","isCustomValue",R("hasHighlightedItem"),R("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:T("isCustomValue",R("hasHighlightedItem"),R("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:T("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":{actions:["setInputValue"]},"LAYER.ESCAPE":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.POINTER_MOVE":{target:"interacting",actions:["setHighlightedItem"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedItem"]},"LAYER.INTERACT_OUTSIDE":[{guard:T("isOpenControlled","isCustomValue",R("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:T("isCustomValue",R("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.CLICK":[{guard:T("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e("isInputValueEmpty"),autoComplete:({computed:e,prop:t})=>e("autoComplete")&&!t("multiple"),autoHighlight:({computed:e})=>e("autoHighlight"),isFirstItemHighlighted:({prop:e,context:t})=>e("collection").firstValue===t.get("highlightedValue"),isLastItemHighlighted:({prop:e,context:t})=>e("collection").lastValue===t.get("highlightedValue"),isCustomValue:({context:e})=>e.get("inputValue")!==e.get("valueAsString"),allowCustomValue:({prop:e})=>!!e("allowCustomValue"),hasHighlightedItem:({context:e})=>e.get("highlightedValue")!=null,closeOnSelect:({prop:e})=>!!e("closeOnSelect"),isOpenControlled:({prop:e})=>e("open")!=null,openOnChange:({prop:e,context:t})=>{const o=e("openOnChange");return lo(o)?o:!!(o!=null&&o({inputValue:t.get("inputValue")}))},restoreFocus:({event:e})=>e.restoreFocus==null?!0:!!e.restoreFocus,isChangeEvent:({event:e})=>{var t;return((t=e.previousEvent)==null?void 0:t.type)==="INPUT.CHANGE"},autoFocus:({prop:e})=>!!e("autoFocus")},effects:{trackDismissableLayer({send:e,prop:t,scope:o}){return t("disableLayer")?void 0:No(()=>M(o),{defer:!0,exclude:()=>[W(o),Y(o),Fe(o)],onFocusOutside:t("onFocusOutside"),onPointerDownOutside:t("onPointerDownOutside"),onInteractOutside:t("onInteractOutside"),onEscapeKeyDown(a){a.preventDefault(),a.stopPropagation(),e({type:"LAYER.ESCAPE"})},onDismiss(){e({type:"LAYER.INTERACT_OUTSIDE",restoreFocus:!1})}})},hideOtherElements({scope:e}){return ko([W(e),M(e),Y(e),Fe(e)])},trackPlacement({context:e,prop:t,scope:o}){const n=()=>qe(o)||Y(o),a=()=>Le(o);return e.set("currentPlacement",t("positioning").placement),we(n,a,{...t("positioning"),defer:!0,onComplete(r){e.set("currentPlacement",r.placement)}})},trackChildNodes({scope:e,computed:t,send:o}){return t("autoHighlight")?ao(()=>M(e),{callback:()=>o({type:"CHILDREN_CHANGE"})}):void 0},scrollToHighlightedItem({context:e,prop:t,scope:o,event:n}){const a=W(o);let r=[];const l=m=>{const x=n.current().type.includes("POINTER"),C=e.get("highlightedValue");if(x||!C)return;const p=Bt(o,C),w=M(o),F=t("scrollToIndexFn");if(F){const E=t("collection").indexOf(C);F({index:E,immediate:m});return}const v=G(()=>{Co(p,{rootEl:w,block:"nearest"})});r.push(v)},d=G(()=>l(!0));r.push(d);const g=no(a,{attributes:["aria-activedescendant"],callback:()=>l(!1)});return r.push(g),()=>{r.forEach(m=>m())}}},actions:{reposition({context:e,prop:t,scope:o,event:n}){we(()=>qe(o),()=>Le(o),{...t("positioning"),...n.options,defer:!0,listeners:!1,onComplete(l){e.set("currentPlacement",l.placement)}})},setHighlightedItem(e){const{context:t,event:o}=e;o.value!=null&&t.set("highlightedValue",o.value)},clearHighlightedItem(e){const{context:t}=e;t.set("highlightedValue",null)},selectHighlightedItem(e){var r;const{context:t,prop:o}=e,n=t.get("highlightedValue");if(!n)return;const a=o("multiple")?ke(t.get("value"),n):[n];(r=o("onSelect"))==null||r({value:a,itemValue:n}),t.set("value",a),t.set("inputValue",X(e))},selectItem(e){const{context:t,event:o,flush:n,prop:a}=e;o.value!=null&&n(()=>{var l;const r=a("multiple")?ke(t.get("value"),o.value):[o.value];(l=a("onSelect"))==null||l({value:r,itemValue:o.value}),t.set("value",r),t.set("inputValue",X(e))})},clearItem(e){const{context:t,event:o,flush:n}=e;o.value!=null&&n(()=>{const a=oo(t.get("value"),o.value);t.set("value",a),t.set("inputValue",X(e))})},setInitialFocus({scope:e}){G(()=>{_e(e)})},setFinalFocus({scope:e}){G(()=>{const t=Y(e);(t==null?void 0:t.dataset.focusable)==null?_e(e):Wo(e)})},syncInputValue({context:e,scope:t,event:o}){const n=W(t);n&&(n.value=e.get("inputValue"),queueMicrotask(()=>{o.current().type!=="INPUT.CHANGE"&&to(n)}))},setInputValue({context:e,event:t}){e.set("inputValue",t.value)},clearInputValue({context:e}){e.set("inputValue","")},revertInputValue({context:e,prop:t,computed:o}){const n=t("selectionBehavior"),a=be(n,{replace:o("hasSelectedItems")?e.get("valueAsString"):"",preserve:e.get("inputValue"),clear:""});e.set("inputValue",a)},setValue(e){const{context:t,flush:o,event:n}=e;o(()=>{t.set("value",n.value),t.set("inputValue",X(e))})},clearSelectedItems(e){const{context:t,flush:o}=e;o(()=>{t.set("value",[]),t.set("inputValue",X(e))})},scrollContentToTop({prop:e,scope:t}){const o=e("scrollToIndexFn");if(o)o({index:0,immediate:!0});else{const n=M(t);if(!n)return;n.scrollTop=0}},invokeOnOpen({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!1})},highlightFirstItem({context:e,prop:t,scope:o}){(M(o)?queueMicrotask:G)(()=>{const a=t("collection").firstValue;a&&e.set("highlightedValue",a)})},highlightFirstItemIfNeeded({computed:e,action:t}){e("autoHighlight")&&t(["highlightFirstItem"])},highlightLastItem({context:e,prop:t,scope:o}){(M(o)?queueMicrotask:G)(()=>{const a=t("collection").lastValue;a&&e.set("highlightedValue",a)})},highlightNextItem({context:e,prop:t}){let o=null;const n=e.get("highlightedValue"),a=t("collection");n?(o=a.getNextValue(n),!o&&t("loopFocus")&&(o=a.firstValue)):o=a.firstValue,o&&e.set("highlightedValue",o)},highlightPrevItem({context:e,prop:t}){let o=null;const n=e.get("highlightedValue"),a=t("collection");n?(o=a.getPreviousValue(n),!o&&t("loopFocus")&&(o=a.lastValue)):o=a.lastValue,o&&e.set("highlightedValue",o)},highlightFirstSelectedItem({context:e,prop:t}){G(()=>{const[o]=t("collection").sort(e.get("value"));o&&e.set("highlightedValue",o)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:o}){G(()=>{let n=null;o("hasSelectedItems")?n=t("collection").sort(e.get("value"))[0]:n=t("collection").firstValue,n&&e.set("highlightedValue",n)})},highlightLastOrSelectedItem({context:e,prop:t,computed:o}){G(()=>{const n=t("collection");let a=null;o("hasSelectedItems")?a=n.sort(e.get("value"))[0]:a=n.lastValue,a&&e.set("highlightedValue",a)})},autofillInputValue({context:e,computed:t,prop:o,event:n,scope:a}){const r=W(a),l=o("collection");if(!t("autoComplete")||!r||!n.keypress)return;const d=l.stringify(e.get("highlightedValue"));G(()=>{r.value=d||e.get("inputValue")})},syncSelectedItems(e){const{context:t,prop:o}=e,n=be(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(t.get("value")),clear:""});t.set("selectedItems",Xo(e)),t.set("inputValue",n)},syncHighlightedItem({context:e,prop:t}){const o=t("collection").find(e.get("highlightedValue"));e.set("highlightedItem",o)},toggleVisibility({event:e,send:t,prop:o}){t({type:o("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});function X({context:e,prop:t}){return be(t("selectionBehavior"),{preserve:e.get("inputValue"),replace:e.get("valueAsString"),clear:""})}function Xo({context:e,prop:t}){const o=t("collection");return e.get("value").map(n=>{const a=e.get("selectedItems").find(r=>o.getItemValue(r)===n);return a||o.find(n)})}ye()(["allowCustomValue","autoFocus","closeOnSelect","collection","composite","defaultHighlightedValue","defaultInputValue","defaultOpen","defaultValue","dir","disabled","disableLayer","form","getRootNode","highlightedValue","id","ids","inputBehavior","inputValue","invalid","loopFocus","multiple","name","navigate","onFocusOutside","onHighlightChange","onInputValueChange","onInteractOutside","onOpenChange","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","openOnChange","openOnClick","openOnKeyPress","placeholder","positioning","readOnly","required","scrollToIndexFn","selectionBehavior","translations","value"]);ye()(["htmlFor"]);ye()(["id"]);ye()(["item","persistFocus"]);const Qo=e=>{const t=h.useId(),{dir:o}=fo(),{getRootNode:n}=Io(),a=Rt(),r={id:t,ids:{label:a==null?void 0:a.ids.label,input:a==null?void 0:a.ids.control},disabled:a==null?void 0:a.disabled,readOnly:a==null?void 0:a.readOnly,required:a==null?void 0:a.required,invalid:a==null?void 0:a.invalid,dir:o,getRootNode:n,...e},l=yo(Jo,r);return Bo(l,xo)},Zo=(e,t)=>{const[o,n]=Oo(e),[a,r]=Te()(n,["allowCustomValue","autoFocus","closeOnSelect","collection","composite","defaultHighlightedValue","defaultInputValue","defaultOpen","defaultValue","disabled","disableLayer","form","highlightedValue","id","ids","inputBehavior","inputValue","invalid","loopFocus","multiple","name","navigate","onFocusOutside","onHighlightChange","onInputValueChange","onInteractOutside","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","openOnChange","openOnClick","openOnKeyPress","placeholder","positioning","readOnly","required","scrollToIndexFn","selectionBehavior","translations","value"]),l=Qo(a),d=Vo(H({present:l.open},o)),g=H(l.getRootProps(),r);return c.jsx(_o,{value:l,children:c.jsx(To,{value:d,children:c.jsx(B.div,{...g,ref:t})})})},zo=h.forwardRef(Zo),Kt=h.createContext(void 0),$t=({children:e,filteredItems:t,...o})=>c.jsx(Kt.Provider,{value:{...o,filteredItems:t},children:e});function xe(){const e=h.useContext(Kt);if(!e)throw new Error("useCombobox must be used within a ComboboxProvider");return e}$t.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem | ComboboxOptionItem",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem | ComboboxOptionItem",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add."},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},filteredItems:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem | ComboboxOptionItem",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function en(e,t){const o=t-1;return e>0&&o>0?e-1:o>0?0:null}function tn({items:e,inputValue:t,allowCustomValue:o,hasExactMatch:n,isValueAlreadySelected:a,customOptionRenderer:r,value:l,multiple:d}){if(!t&&!(l!=null&&l.length))return e;const g=e.reduce((m,x)=>{if("options"in x){const C=x.options.filter(p=>"options"in p?!0:l!=null&&l.includes(p.value)&&d?!1:!t||Ae(fe(p,r),t));C.length>0&&m.push({...x,options:C})}else(!(l!=null&&l.includes(x.value))||!d)&&(!t||Ae(fe(x,r),t))&&m.push(x);return m},[]);return o&&t&&!n&&!a?[{disabled:!1,isNewElement:!0,label:t,value:t},...g]:g}function Ce(e=[],t){for(const o of e)if("options"in o){const n=Ce(o.options,t);if(n!==t)return n}else if(o.value===t)return String(o.label);return t}function Yt(e=[],t){const o=[];for(const n of e)"options"in n?o.push(...Yt(n.options,n.label)):o.push(t?{...n,group:t}:n);return o}function on({allowCustomValue:e,customOptionRenderer:t,inputValue:o,items:n,multiple:a,value:r=[]}){const l=nn(n,o,t),d=an(r,o);return tn({allowCustomValue:e,customOptionRenderer:t,hasExactMatch:l,inputValue:o,isValueAlreadySelected:d,items:n,multiple:a,value:r})}function fe(e,t){return"options"in e?e.label:t?Qt(t(e)):e.label}function nn(e,t,o){return t?e.some(n=>"options"in n?n.options.some(a=>fe(a,o).toLowerCase()===t.toLowerCase()):fe(n,o).toLowerCase()===t.toLowerCase()):!1}function De(e,t,o){return e.key===o&&t.current!==null&&t.current.selectionStart===0&&t.current.selectionEnd===0}function an(e,t){return t?e.some(o=>o.toLowerCase()===t.toLowerCase()):!1}function Ae(e,t){return e.toLowerCase().includes(t.toLowerCase())}function ln(e,t){return e.filter(o=>o!==t)}function rn(e){return e!=="Backspace"&&e!=="ArrowLeft"}function sn(e,t){if(!e||!t)return[e];const o=t.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp(`(${o})`,"gi");return e.split(n)}const P=h.forwardRef(({allowCustomValue:e=!0,children:t,className:o,customOptionRenderer:n,defaultValue:a,disabled:r,highlightResults:l=!1,items:d,invalid:g,multiple:m,newElementLabel:x="Add ",noResultLabel:C="No results found",onValueChange:p,readOnly:w,required:F,value:v,...E},V)=>{const[L,D]=h.useState(""),[A,s]=h.useState(a||[]),i=v&&v.length>0?v:A;h.useEffect(()=>{if(!m&&i.length>0){const I=Ce(d,i[0]);D(I)}else m&&D("")},[i,d,m]);const f=h.useMemo(()=>on({allowCustomValue:e,customOptionRenderer:n,inputValue:L,items:d,multiple:m,value:i}),[e,n,L,d,m,x,i]),O=h.useMemo(()=>Yt(f),[f]),_=h.useMemo(()=>Zt({items:O}),[O]);function $(I){D(I.inputValue)}function b(I){if(!m&&I.value.length>0){const K=Ce(d,I.value[0]);D(K)}else m&&D("");v||s(I.value),p&&p({value:I.value})}return c.jsx($t,{customOptionRenderer:n,filteredItems:f,highlightResults:l,invalid:g,items:d,newElementLabel:x,noResultLabel:C,readOnly:w,children:c.jsx(zo,{allowCustomValue:e,className:o,closeOnSelect:!m,collection:_,defaultValue:a,disabled:r,inputValue:L,invalid:g,multiple:m,onInputValueChange:$,onValueChange:b,positioning:{gutter:-1,sameWidth:!0},readOnly:w,ref:V,required:m?!1:F,selectionBehavior:m?"clear":"replace",value:i,...E,children:t})})});P.displayName="Combobox";P.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem | ComboboxOptionItem",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items.",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem | ComboboxOptionItem",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add.",defaultValue:{value:"'Add '",computed:!1}},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value.",defaultValue:{value:"'No results found'",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const un={"combobox-group":"_combobox-group_1i26q_2"},Pe=({children:e,className:t,...o})=>c.jsx(Dt,{className:ge(un["combobox-group"],t),...o,children:e});Pe.displayName="ComboboxGroup";Pe.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",composes:["ComponentPropsWithRef"]};const cn={"combobox-highlight__highlight":"_combobox-highlight__highlight_cgn09_2"},ve=({children:e})=>{const{inputValue:t}=U(),{highlightResults:o}=xe();if(!o||!t)return c.jsx(c.Fragment,{children:e});const n=t.toLowerCase(),a=l=>sn(l,n).map((g,m)=>g.toLowerCase()===n?c.jsx("span",{className:cn["combobox-highlight__highlight"],children:g},m):g),r=l=>{if(typeof l=="string")return a(l);if(h.isValidElement(l)){const d=h.Children.map(l.props.children,r);return h.cloneElement(l,l.props,d)}return l};return r(e)};ve.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const dn={"combobox-option":"_combobox-option_qionr_2"},me=({item:e,...t})=>{const{customOptionRenderer:o,newElementLabel:n}=xe();return"options"in e?c.jsx(c.Fragment,{}):c.jsx(_t,{className:ge(dn["combobox-option"]),item:e,...t,children:o?c.jsx(ve,{children:o(e)}):c.jsx(c.Fragment,{children:e.isNewElement?c.jsxs(c.Fragment,{children:[n,c.jsx(ve,{children:e.label})]}):c.jsx(ve,{children:e.label})})})};me.displayName="ComboboxOption";me.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{item:{required:!0,tsType:{name:"union",raw:"ComboboxGroupItem | ComboboxOptionItem",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},description:""}},composes:["ComponentPropsWithRef"]};const Ve={"combobox-content":"_combobox-content_1nhfp_2","combobox-content__empty":"_combobox-content__empty_1nhfp_12"},k=h.forwardRef(({className:e,createPortal:t=!0,...o},n)=>{const{filteredItems:a,noResultLabel:r}=xe(),l=h.useMemo(()=>{if(!a||!a.length)return{hasNoResults:!0,hasOnlyNewElement:!1,itemsToDisplay:[],newElementItem:void 0};const g=a.length===1&&!("options"in a[0])&&a[0].isNewElement,m=g?[]:a,x=g&&!("options"in a[0])?a[0]:void 0;return{hasNoResults:!1,hasOnlyNewElement:g,itemsToDisplay:m,newElementItem:x}},[a]);return c.jsx(Eo,{disabled:!t,children:c.jsx(Gt,{children:c.jsxs(Lt,{className:ge(Ve["combobox-content"],e),ref:n,...o,children:[l.hasNoResults&&c.jsx("div",{className:Ve["combobox-content__empty"],children:r}),l.newElementItem&&c.jsx(me,{item:l.newElementItem}),l.itemsToDisplay.map(d=>"options"in d?c.jsxs(Pe,{children:[c.jsx(At,{children:d.label}),d.options.map(g=>"options"in g?null:c.jsx(me,{item:g},g.value))]},d.label):c.jsx(me,{item:d},d.value)),l.hasOnlyNewElement&&c.jsx("div",{className:Ve["combobox-content__empty"],children:r})]})})})});k.displayName="ComboboxContent";k.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const j={"combobox-control":"_combobox-control_1d5vx_2","combobox-control--multiple":"_combobox-control--multiple_1d5vx_16","combobox-control--open-bottom":"_combobox-control--open-bottom_1d5vx_20","combobox-control--open-top":"_combobox-control--open-top_1d5vx_24","combobox-control--read-only":"_combobox-control--read-only_1d5vx_28","combobox-control--invalid":"_combobox-control--invalid_1d5vx_32","combobox-control__tag--focused":"_combobox-control__tag--focused_1d5vx_35","combobox-control__input":"_combobox-control__input_1d5vx_39"},N=h.forwardRef(({className:e,clearable:t,loading:o,placeholder:n,...a},r)=>{const{disabled:l,getContentProps:d,multiple:g,open:m,setOpen:x,setValue:C,value:p}=U(),{invalid:w,items:F,readOnly:v}=xe(),[E,V]=h.useState(null),D=d()["data-placement"],A=h.useRef(null),s=!l&&!v;function i(){s&&x(!0)}function f(b){if(b.key===" "&&m&&b.stopPropagation(),!g||!p.length)return;const I=De(b,A,"Backspace"),K=De(b,A,"ArrowLeft");if(I&&p.length>0)if(E===null)V(p.length-1),b.preventDefault();else{const J=E,Jt=p[J],Xt=en(J,p.length);V(Xt),_(Jt),b.preventDefault()}else K&&p.length>0&&E===null?(V(p.length-1),b.preventDefault()):rn(b.key)&&V(null);E!==null&&p.length>0&&(b.key==="ArrowLeft"&&E>0?(V(E-1),b.preventDefault()):b.key==="ArrowRight"&&E<p.length-1?(V(E+1),b.preventDefault()):b.key==="Escape"?(V(null),b.preventDefault()):b.key==="Enter"&&(_(p[E]),b.preventDefault()))}function O(b){s&&($(),_(b))}function _(b){if(!g)return;const I=ln(p,b);C(I)}function $(){V(null)}return c.jsxs(qt,{className:ge(j["combobox-control"],{[j["combobox-control--open-top"]]:m&&D==="top",[j["combobox-control--open-bottom"]]:m&&D==="bottom",[j["combobox-control--multiple"]]:g,[j["combobox-control--read-only"]]:v,[j["combobox-control--invalid"]]:w,className:e}),onBlur:()=>$(),ref:r,...a,children:[g&&p&&p.length>0&&p.map((b,I)=>c.jsx(So,{className:ge({[j["combobox-control__tag--focused"]]:s&&E===I}),disabled:l||v,onClick:()=>O(b),tabIndex:-1,value:b,children:Ce(F,b)},b)),c.jsx(Ft,{asChild:!0,children:c.jsx(wo,{className:j["combobox-control__input"],clearable:t,disabled:l,loading:o,onClear:()=>C([]),onClick:i,onKeyDown:f,placeholder:n,readOnly:v,ref:A})})]})});N.displayName="ComboboxControl";N.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const mn={argTypes:qo(["customOptionRenderer","defaultValue","items","name","onInputValueChange","onValueChange","required","value"]),component:P,subcomponents:{ComboboxContent:k,ComboboxControl:N},title:"React Components/Combobox"},Q={render:e=>u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:e.allowCustomValue,defaultValue:e.defaultValue,disabled:e.disabled,highlightResults:e.highlightResults,invalid:e.invalid,multiple:e.multiple,newElementLabel:e.newElementLabel,noResultLabel:e.noResultLabel,readOnly:e.readOnly},u.createElement(N,{clearable:e.clearable,placeholder:e.placeholder,loading:e.loading}),u.createElement(k,null)),argTypes:Fo({allowCustomValue:{table:{category:q.general},control:"boolean"},clearable:{table:{category:q.general,type:{summary:"boolean"}},control:"boolean"},defaultValue:{table:{category:q.general},control:"text"},disabled:{table:{category:q.general},control:"boolean"},highlightResults:{table:{category:q.general},control:"boolean"},invalid:{table:{category:q.general},control:"boolean"},loading:{table:{category:q.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:q.general},control:"boolean"},newElementLabel:{table:{category:q.general},control:"text"},noResultLabel:{table:{category:q.general},control:"text"},placeholder:{table:{category:q.general},control:"text"},readOnly:{table:{category:q.general},control:"boolean"}}),args:{placeholder:"Start typing"}},Z={tags:["!dev"],render:({})=>u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},u.createElement(N,null),u.createElement(k,null))},z={tags:["!dev"],render:({})=>u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},u.createElement(N,{placeholder:"Combobox"}),u.createElement(k,null))},ee={tags:["!dev"],render:({})=>u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},u.createElement(N,{clearable:!0,placeholder:"Combobox"}),u.createElement(k,null))},te={tags:["!dev"],render:({})=>u.createElement(P,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},u.createElement(N,{placeholder:"Combobox"}),u.createElement(k,null))},oe={tags:["!dev"],render:({})=>u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},u.createElement(N,{placeholder:"Combobox"}),u.createElement(k,null))},ne={tags:["!dev"],render:({})=>u.createElement(P,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},u.createElement(N,{placeholder:"Combobox"}),u.createElement(k,null))},ae={tags:["!dev"],render:({})=>u.createElement(Ro,null,u.createElement(Lo,null,"Combobox"),u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},u.createElement(N,null),u.createElement(k,null)))},le={tags:["!dev"],render:({})=>u.createElement(P,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},u.createElement(N,null),u.createElement(k,null))},re={tags:["!dev"],render:()=>{const[e,t]=h.useState(["dog"]);return u.createElement(u.Fragment,null,u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:o=>t(o.value),value:e},u.createElement(N,{placeholder:"Select an animal"}),u.createElement(k,null)),u.createElement("div",{style:{marginTop:8}},u.createElement("strong",null,"Selected value:")," ",e[0]??"None"))}},se={tags:["!dev"],render:()=>u.createElement(P,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},u.createElement(N,null),u.createElement(k,null))},ie={tags:["!dev"],render:()=>{const e=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}],t=o=>{const n="customRendererData"in o?o.customRendererData:void 0;return u.createElement("span",{style:{color:n==null?void 0:n.color,fontWeight:"bold"}},o.label," ",(n==null?void 0:n.info)&&u.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",n.info,")"))};return u.createElement(P,{customOptionRenderer:t,highlightResults:!0,items:e},u.createElement(N,null),u.createElement(k,null))}},ue={tags:["!dev"],render:()=>u.createElement(P,{items:[]},u.createElement(N,null),u.createElement(k,null))},ce={tags:["!dev"],render:()=>u.createElement(P,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},u.createElement(N,null),u.createElement(k,null))},de={tags:["!dev"],render:()=>u.createElement(P,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster",disabled:!0},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},u.createElement(N,{placeholder:"Please select"}),u.createElement(k,null))};var Ge,He,Ue;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var je,Me,We;Z.parameters={...Z.parameters,docs:{...(je=Z.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(We=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var Be,Ke,$e;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...($e=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var Ye,Je,Xe;ee.parameters={...ee.parameters,docs:{...(Ye=ee.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Qe,Ze,ze;te.parameters={...te.parameters,docs:{...(Qe=te.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(ze=(Ze=te.parameters)==null?void 0:Ze.docs)==null?void 0:ze.source}}};var et,tt,ot;oe.parameters={...oe.parameters,docs:{...(et=oe.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(ot=(tt=oe.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var nt,at,lt;ne.parameters={...ne.parameters,docs:{...(nt=ne.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(lt=(at=ne.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var rt,st,it;ae.parameters={...ae.parameters,docs:{...(rt=ae.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=ae.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ut,ct,dt;le.parameters={...le.parameters,docs:{...(ut=le.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(ct=le.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var mt,gt,bt;re.parameters={...re.parameters,docs:{...(mt=re.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
}`,...(bt=(gt=re.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};var pt,ht,vt;se.parameters={...se.parameters,docs:{...(pt=se.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Combobox highlightResults items={[{
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
}`,...(vt=(ht=se.parameters)==null?void 0:ht.docs)==null?void 0:vt.source}}};var Ct,ft,It;ie.parameters={...ie.parameters,docs:{...(Ct=ie.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
      } as CustomData
    }, {
      label: 'Banana',
      value: 'banana',
      customRendererData: {
        color: 'yellow',
        info: 'Fruit'
      } as CustomData
    }, {
      label: 'Carrot',
      value: 'carrot',
      customRendererData: {
        color: 'orange',
        info: 'Vegetable'
      } as CustomData
    }, {
      label: 'Broccoli',
      value: 'broccoli',
      customRendererData: {
        color: 'green',
        info: 'Vegetable'
      } as CustomData
    }, {
      label: 'Blueberry',
      value: 'blueberry',
      customRendererData: {
        color: 'blue',
        info: 'Fruit'
      } as CustomData
    }];
    const customOptionRenderer = (item: ComboboxItem) => {
      const customData = 'customRendererData' in item ? item.customRendererData as CustomData : undefined;
      return <span style={{
        color: customData?.color,
        fontWeight: 'bold'
      }}>
          {item.label} {customData?.info && <span style={{
          fontWeight: 'normal',
          fontSize: 12,
          color: '#888'
        }}>({customData.info})</span>}
        </span>;
    };
    return <Combobox customOptionRenderer={customOptionRenderer} highlightResults items={items}>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>;
  }
}`,...(It=(ft=ie.parameters)==null?void 0:ft.docs)==null?void 0:It.source}}};var yt,xt,Ot;ue.parameters={...ue.parameters,docs:{...(yt=ue.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Combobox items={[]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
}`,...(Ot=(xt=ue.parameters)==null?void 0:xt.docs)==null?void 0:Ot.source}}};var Et,Vt,Tt;ce.parameters={...ce.parameters,docs:{...(Et=ce.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Combobox multiple items={[{
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
}`,...(Tt=(Vt=ce.parameters)==null?void 0:Vt.docs)==null?void 0:Tt.source}}};var Pt,kt,Nt;de.parameters={...de.parameters,docs:{...(Pt=de.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Combobox items={[{
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
}`,...(Nt=(kt=de.parameters)==null?void 0:kt.docs)==null?void 0:Nt.source}}};const gn=["Demo","Default","Overview","Clearable","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","Placeholder"],Rn=Object.freeze(Object.defineProperty({__proto__:null,Clearable:ee,Controlled:re,CustomOptions:ie,Default:Z,Demo:Q,Disabled:te,Empty:ue,Group:ne,Highlight:se,InFormField:ae,Invalid:le,Multiple:ce,Overview:z,Placeholder:de,Readonly:oe,__namedExportsOrder:gn,default:mn},Symbol.toStringTag,{value:"Module"}));export{Rn as C,Z as D,ue as E,ne as G,se as H,le as I,ce as M,z as O,oe as R,ee as a,te as b,re as c,ie as d,ae as e};
