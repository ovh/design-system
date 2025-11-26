import{r as i,e}from"./index-jIWwRBLr.js";import{j as v}from"./jsx-runtime-Cfl8ynUo.js";import{u as Ho,F as Oe,a as ke}from"./FormFieldLabel-B8-lDkmb.js";import{c as Yo}from"./index-CPOqegBX.js";import{R as Jo}from"./use-locale-context-6s5qsrWI.js";import{c as Ce}from"./index-CqY9YpN0.js";import{b as zo,a as Xo}from"./PopoverTrigger-DzBDMVX4.js";import{a as ve}from"./overlay-CZHjGBMC.js";import{I as Ko,a as Qo}from"./icon-name-C581wThh.js";import{e as Pe}from"./element-3R7vFkDE.js";import{I as Zo,c as en}from"./Input-DRCIBq_k.js";import{T as on}from"./Tag-CHLePf-F.js";import{e as nn,o as an,C as w}from"./controls-BtiQQn1l.js";import{s as Ne}from"./source-CPEZJ6oD.js";function tn(o){const a=Jo(),n=o.locale??a.locale;return i.useMemo(()=>Yo({...o,locale:n}),[n,o])}function ln(o,a,n,{allowCustomValue:l,filterFn:r,multiple:s,newElementLabel:d}){const y=l&&n.trim()!==""&&!bn(o.concat(a),n,s)?[{isNewElement:!0,label:`${d}${n}`,value:n}]:[];function _(C,h,f,x){return x&&h.some(k=>k.value===C.value)?!1:r(C.label,f.trim())}return o.reduce((C,h)=>{if(fe(h)){const f=h.options.filter(x=>_(x,a,n,s));return f.length&&C.push({...h,options:f}),C}return _(h,a,n,s)&&C.push(h),C},y)}function Wo(o,a){let n;return o.some(l=>{Bo(l,r=>r.value===a?(n=r,!0):!1)}),n}function rn(o,a,n){if(a||!(n!=null&&n.length))return"";const l=Wo(o,n[0]);return l?l.label:""}function Le(o,a){return a!=null&&a.length?o.reduce((n,l)=>{if(fe(l)){const r=l.options.filter(s=>a.indexOf(s.value)>=0);return r.length&&(n=n.concat(r)),n}return a.indexOf(l.value)>=0&&n.push(l),n},[]):[]}function Fe(o,a,n){if(typeof o=="string")return sn(o,a,n);if(i.isValidElement(o)){const l=i.Children.map(o.props.children,r=>Fe(r,a,n));return i.cloneElement(o,o.props,l)}return o}function sn(o,a,n){return un(o,a).map((r,s)=>r.toLowerCase()===a?n({key:s,part:r}):r)}function De(o){return!!o&&o.selectionStart===0&&o.selectionEnd===0}function fe(o){return"options"in o}function bn(o,a,n){const l=a.trim().toLocaleLowerCase();return o.some(r=>Bo(r,s=>n?s.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()||s.value.trim().toLocaleLowerCase()===l.toLocaleLowerCase():s.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()))}function Bo(o,a){return fe(o)?o.options.some(a):a(o)}function un(o,a){if(!o||!a)return[o];const n=a.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),l=new RegExp(`(${n})`,"gi");return o.split(l)}Fe.__docgenInfo={description:"",methods:[],displayName:"highlightNode"};const Mo=i.createContext(void 0),$o=({allowCustomValue:o,children:a,customFilter:n,defaultValue:l,disabled:r,items:s,multiple:d=!1,newElementLabel:y,onInputValueChange:_,onValueChange:C,readOnly:h,value:f,...x})=>{const k=i.useMemo(()=>rn(s,d,l||f),[]),P=i.useMemo(()=>Le(s,l||f),[]),{contains:N}=tn({sensitivity:"base"}),R=i.useCallback((t,g)=>n?n(t,g):N(t,g),[n]),E=i.useId(),V=i.useRef(null),[j,Y]=i.useState(""),[L,J]=i.useState(),[T,z]=i.useState(s),[p,F]=i.useState(""),[O,H]=i.useState(k),[G,W]=i.useState(!1),[q,A]=i.useState(P),I=i.useMemo(()=>T.reduce((t,g)=>fe(g)?t.concat(g.options.map($=>$.value)):(t.push(g.value),t),[]),[T]);i.useEffect(()=>{F(""),z(()=>!d&&O.trim()===""?s:ln(s,q,O,{allowCustomValue:o,filterFn:R,multiple:d,newElementLabel:y}))},[o,R,O,s,d,y,q]),i.useEffect(()=>{G||F("")},[G]),i.useEffect(()=>{const t=Le(s,f);t.length&&(d?(D(""),A(t)):(D(t[0].label),A([t[0]])))},[f]);function he(t){r||h||!d||(M(g=>g.filter($=>$.value!==t.value)),xe())}function xe(){var t;(t=V.current)==null||t.focus()}function Te(){if(G||b(!0),p===""&&T.length)F(I[0]);else{const t=I.findIndex(g=>g===p);F(I[t<I.length-1?t+1:0])}}function qe(t){G&&F(t.value)}function we(){if(G)if(p===""&&T.length)F(I[I.length-1]);else{const t=I.findIndex(g=>g===p);F(I[t>0?t-1:I.length-1])}}function Re(){if(!p)return;const t=Wo(T,p);t&&B(t)}function B(t){r||h||(d?(D(""),M(g=>{if(t.isNewElement){const{isNewElement:$,...Ie}=t;return g.concat([{...Ie,label:t.value}])}return g.concat([t])})):(D(t.isNewElement?t.value:t.label),M([t]),b(!1)),xe())}function D(t){const g=typeof t=="function"?t(O):t;H(g),_&&g!==O&&_({inputValue:g})}function b(t){W(r||h?!1:t)}function M(t){const g=typeof t=="function"?t(q):t;if(A(g),C){const $=g.length?g.map(Ie=>Ie.value):[];C({value:$})}}return v.jsx(Mo.Provider,{value:{...x,allowCustomValue:o,contentId:j,contentPosition:L,controlId:E,defaultValue:l,deselectItem:he,disabled:r,filteredItems:T,highlightNextOption:Te,highlightOption:qe,highlightPreviousOption:we,highlightedOptionValue:p,inputRef:V,inputValue:O,isOpen:G,items:s,multiple:d,newElementLabel:y,onInputValueChange:_,onValueChange:C,readOnly:h,selectHighlightedItem:Re,selectItem:B,selection:q,setContentId:Y,setContentPosition:J,setInputValue:D,setIsOpen:b,setSelection:M,value:f},children:a})};function _e(){const o=i.useContext(Mo);if(!o)throw new Error("useCombobox must be used within a ComboboxProvider");return o}$o.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed.",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add."},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value."},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const u=i.forwardRef(({allowCustomValue:o=!0,children:a,className:n,customFilter:l,customOptionRenderer:r,defaultValue:s,disabled:d,highlightResults:y=!1,i18n:_,invalid:C,items:h,locale:f,multiple:x,name:k,newElementLabel:P="Add ",noResultLabel:N="No results found",onInputValueChange:R,onValueChange:E,readOnly:V,required:j,value:Y,...L},J)=>{const T=Ho(),z=C||(T==null?void 0:T.invalid);return v.jsx($o,{allowCustomValue:o,customFilter:l,customOptionRenderer:r,defaultValue:s,disabled:d,highlightResults:y,i18n:_,invalid:z,items:h,locale:f,multiple:x,name:k,newElementLabel:P,noResultLabel:N,onInputValueChange:R,onValueChange:E,readOnly:V,required:j,value:Y,children:v.jsx("div",{className:n,"data-ods":"combobox",ref:J,...L,children:a})})});u.displayName="Combobox";u.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items.",defaultValue:{value:"false",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add.",defaultValue:{value:"'Add '",computed:!1}},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value.",defaultValue:{value:"'No results found'",computed:!1}},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const mn={"combobox-highlight":"_combobox-highlight_1y4e6_2"},Uo=({children:o,highlight:a,inputValue:n})=>!a||!n?v.jsx(v.Fragment,{children:o}):v.jsx(v.Fragment,{children:Fe(o,n.toLowerCase(),({key:l,part:r})=>v.jsx("span",{className:mn["combobox-highlight"],children:r},l))});Uo.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""}}};const U={"combobox-option":"_combobox-option_10qpo_2","combobox-option--disabled":"_combobox-option--disabled_10qpo_12","combobox-option--highlighted":"_combobox-option--highlighted_10qpo_18","combobox-option--new":"_combobox-option--new_10qpo_21","combobox-option--selected":"_combobox-option--selected_10qpo_24","combobox-option__new-item":"_combobox-option__new-item_10qpo_27"},Ee=({className:o,isHighlighted:a,item:n,...l})=>{const{customOptionRenderer:r,disabled:s,highlightOption:d,highlightResults:y,inputValue:_,selection:C,selectItem:h}=_e();function f(){s||h(n)}return v.jsx("div",{"aria-selected":a,className:Ce(U["combobox-option"],{[U["combobox-option--disabled"]]:s},{[U["combobox-option--highlighted"]]:a},{[U["combobox-option--new"]]:n.isNewElement},{[U["combobox-option--selected"]]:C.some(x=>x.value===n.value)},o),onClick:f,onPointerEnter:()=>d(n),role:"option",tabIndex:-1,...l,children:n.isNewElement?v.jsxs("div",{className:U["combobox-option__new-item"],children:[v.jsx(Ko,{name:Qo.plus})," ",n.label]}):v.jsx(Uo,{highlight:y,inputValue:_,children:r?r(n):n.label})})};Ee.displayName="ComboboxOption";Ee.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const ye={"combobox-group":"_combobox-group_38ufa_2","combobox-group__label":"_combobox-group__label_38ufa_8","combobox-group__label--disabled":"_combobox-group__label--disabled_38ufa_16","combobox-group__option":"_combobox-group__option_38ufa_22"},Se=({className:o,item:a,...n})=>{const l=i.useId(),{disabled:r,highlightedOptionValue:s}=_e();return v.jsxs("div",{"aria-labelledby":l,className:ye["combobox-group"],role:"group",...n,children:[v.jsx("div",{className:Ce(ye["combobox-group__label"],{[ye["combobox-group__label--disabled"]]:r}),id:l,role:"presentation",children:a.label}),a.options.map(d=>v.jsx(Ee,{className:ye["combobox-group__option"],isHighlighted:s===d.value,item:d},d.value))]})};Se.displayName="ComboboxGroup";Se.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const X={"combobox-content":"_combobox-content_1uuvg_2","combobox-content--invalid":"_combobox-content--invalid_1uuvg_13","combobox-content--open-bottom":"_combobox-content--open-bottom_1uuvg_16","combobox-content--open-top":"_combobox-content--open-top_1uuvg_19","combobox-content__empty":"_combobox-content__empty_1uuvg_22"},m=i.forwardRef(({className:o,createPortal:a=!0,id:n,...l},r)=>{const{contentPosition:s,controlId:d,filteredItems:y,highlightedOptionValue:_,isOpen:C,invalid:h,noResultLabel:f,setContentId:x,setContentPosition:k}=_e(),P=i.useId(),N=i.useMemo(()=>n??P,[P,n]);i.useEffect(()=>{x(N)},[N,x]);function R({position:E}){k(E)}return v.jsx(zo,{autoFocus:!1,gutter:-1,onPositionChange:R,open:C,position:ve.bottom,sameWidth:!0,triggerId:d,children:v.jsxs(Xo,{className:Ce(X["combobox-content"],{[X["combobox-content--invalid"]]:h},{[X["combobox-content--open-bottom"]]:s===ve.bottom},{[X["combobox-content--open-top"]]:s===ve.top},o),createPortal:a,"data-ods":"combobox-content",id:N,ref:r,...l,role:"listbox",children:[y.length===0&&v.jsx("div",{className:X["combobox-content__empty"],children:f}),y.map(E=>fe(E)?v.jsx(Se,{item:E},E.label):v.jsx(Ee,{id:`${d}-${E.value}`,isHighlighted:_===E.value,item:E},E.value))]})})});m.displayName="ComboboxContent";m.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const S={"combobox-control":"_combobox-control_rc3cx_2","combobox-control--invalid":"_combobox-control--invalid_rc3cx_19","combobox-control--disabled":"_combobox-control--disabled_rc3cx_19","combobox-control--read-only":"_combobox-control--read-only_rc3cx_19","combobox-control--focused":"_combobox-control--focused_rc3cx_19","combobox-control--open-bottom":"_combobox-control--open-bottom_rc3cx_35","combobox-control--open-top":"_combobox-control--open-top_rc3cx_38","combobox-control__tag--focused":"_combobox-control__tag--focused_rc3cx_45","combobox-control__input":"_combobox-control__input_rc3cx_49"},c=i.forwardRef(({className:o,clearable:a,id:n,loading:l,placeholder:r,...s},d)=>{const{contentId:y,contentPosition:_,controlId:C,deselectItem:h,disabled:f,highlightedOptionValue:x,highlightNextOption:k,highlightPreviousOption:P,i18n:N,inputRef:R,inputValue:E,invalid:V,isOpen:j,locale:Y,multiple:L,name:J,readOnly:T,required:z,selection:p,selectHighlightedItem:F,setInputValue:O,setIsOpen:H,setSelection:G}=_e(),W=Ho(),[q,A]=i.useState(-1),[I,he]=i.useState(!1),xe=!f&&!T;function Te(){!p.length||q<0||(q>=p.length-1?D():A(b=>Math.min(b+1,p.length-1)))}function qe(){p.length&&(q<0?A(p.length-1):A(b=>Math.max(0,b-1)))}function we(b){Pe(b.relatedTarget,"data-ods",["combobox-content","combobox-control"])&&Pe(b.relatedTarget,"id",[y,C])||(L||(p.length?O(p[0].isNewElement?p[0].value:p[0].label):O("")),D(),he(!1),H(!1))}function Re(b){switch(b.key){case"ArrowDown":b.preventDefault(),k();break;case"ArrowLeft":De(R.current)&&(b.preventDefault(),qe());break;case"ArrowRight":q>=0&&De(R.current)&&(b.preventDefault(),Te());break;case"ArrowUp":b.preventDefault(),P();break;case"Backspace":p.length&&De(R.current)&&B(p[q>=0?q:p.length-1]);break;case"Enter":if(p.length&&q>=0){b.preventDefault(),B(p[q]);break}x&&(b.preventDefault(),F());break;case"Escape":b.preventDefault(),D(),H(!1);break}}function B(b){D(),h(b)}function D(){A(-1)}return v.jsxs("div",{className:Ce(S["combobox-control"],{[S["combobox-control--disabled"]]:f},{[S["combobox-control--invalid"]]:V},{[S["combobox-control--focused"]]:I},{[S["combobox-control--open-bottom"]]:j&&_===ve.bottom},{[S["combobox-control--open-top"]]:j&&_===ve.top},{[S["combobox-control--read-only"]]:T},o),"data-ods":"combobox-control",id:C,onBlur:we,ref:d,...s,children:[L&&p.map((b,M)=>v.jsx(on,{className:Ce({[S["combobox-control__tag--focused"]]:xe&&q===M}),disabled:f||T,onClick:()=>B(b),tabIndex:-1,value:b.value,children:b.label},b.value)),v.jsx(Zo,{"aria-activedescendant":x?`${C}-${x}`:"","aria-autocomplete":"list","aria-controls":y,"aria-expanded":j?"true":"false",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:S["combobox-control__input"],clearable:a,disabled:f,i18n:N,id:n||(W==null?void 0:W.id),invalid:V,loading:l,locale:Y,onChange:b=>{D(),O(b.target.value),H(!0)},onClear:()=>!L&&G([]),onClick:()=>H(!0),onFocus:()=>he(!0),onKeyDown:Re,name:J,placeholder:r,readOnly:T,ref:R,required:L?!1:z,role:"combobox",spellCheck:"false",value:E})]})});c.displayName="ComboboxControl";c.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const cn={argTypes:nn(["customOptionRenderer","defaultValue","i18n","items","locale","name","onInputValueChange","onValueChange","required","value"]),component:u,subcomponents:{ComboboxContent:m,ComboboxControl:c},title:"React Components/Combobox"},K={render:o=>e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:o.allowCustomValue,defaultValue:o.defaultValue,disabled:o.disabled,highlightResults:o.highlightResults,invalid:o.invalid,multiple:o.multiple,newElementLabel:o.newElementLabel,noResultLabel:o.noResultLabel,readOnly:o.readOnly},e.createElement(c,{clearable:o.clearable,placeholder:o.placeholder,loading:o.loading}),e.createElement(m,null)),argTypes:an({allowCustomValue:{table:{category:w.general},control:"boolean"},clearable:{table:{category:w.general,type:{summary:"boolean"}},control:"boolean"},defaultValue:{table:{category:w.general},control:"text"},disabled:{table:{category:w.general},control:"boolean"},highlightResults:{table:{category:w.general},control:"boolean"},invalid:{table:{category:w.general},control:"boolean"},loading:{table:{category:w.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:w.general},control:"boolean"},newElementLabel:{table:{category:w.general},control:"text"},noResultLabel:{table:{category:w.general},control:"text"},placeholder:{table:{category:w.general},control:"text"},readOnly:{table:{category:w.general},control:"boolean"}}),args:{placeholder:"Start typing"}},Q={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,null),e.createElement(m,null))},Z={tags:["!dev"],render:({})=>e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,{placeholder:"Combobox"}),e.createElement(m,null))},ee={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,{clearable:!0,placeholder:"Combobox"}),e.createElement(m,null))},oe={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{customFilter:(o,a)=>{const n=o.split("").reverse().join("");return new RegExp(`^${a}`,"i").test(n)},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,{placeholder:"Search from right to left in each word"}),e.createElement(m,null))},ne={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,{placeholder:"Combobox"}),e.createElement(m,null))},ae={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{defaultValue:["parrot"],items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},e.createElement(c,{placeholder:"Combobox"}),e.createElement(m,null))},te={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},e.createElement(c,{placeholder:"Combobox"}),e.createElement(m,null))},le={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(Oe,null,e.createElement(ke,null,"Combobox"),e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(c,null),e.createElement(m,null)))},re={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(c,null),e.createElement(m,null))},se={globals:{imports:`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>{const[o,a]=i.useState(["dog"]);return e.createElement(e.Fragment,null,e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:n=>a(n.value),value:o},e.createElement(c,{placeholder:"Select an animal"}),e.createElement(m,null)),e.createElement("div",{style:{marginTop:8}},e.createElement("strong",null,"Selected value:")," ",o[0]??"None"))}},ie={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,null),e.createElement(m,null))},be={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>{const o=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}];function a(n){var l,r;return e.createElement("span",{style:{color:(l=n.customRendererData)==null?void 0:l.color,fontWeight:"bold"}},n.label," ",((r=n.customRendererData)==null?void 0:r.info)&&e.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",n.customRendererData.info,")"))}return e.createElement(u,{customOptionRenderer:a,highlightResults:!0,items:o},e.createElement(c,null),e.createElement(m,null))}},ue={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{items:[]},e.createElement(c,null),e.createElement(m,null))},me={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,null),e.createElement(m,null))},ce={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster",disabled:!0},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,{placeholder:"Please select"}),e.createElement(m,null))},de={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(Oe,null,e.createElement(ke,null,"Favorite pet:"),e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,null),e.createElement(m,null)))},pe={globals:{imports:"import { INPUT_I18N, Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>e.createElement(Oe,null,e.createElement(ke,null,"Favorite pet:"),e.createElement(u,{i18n:{[en.clearButton]:"Clear favorite pet selection"},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(c,{clearable:!0}),e.createElement(m,null)))},ge={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(c,{placeholder:"Default"}),e.createElement(m,{createPortal:!1})),e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(c,{clearable:!0,placeholder:"Clearable"}),e.createElement(m,{createPortal:!1})),e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(c,{loading:!0,placeholder:"Loading"}),e.createElement(m,{createPortal:!1})),e.createElement(u,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(c,{placeholder:"Disabled"}),e.createElement(m,{createPortal:!1})),e.createElement(u,{readOnly:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(c,{placeholder:"Read only"}),e.createElement(m,{createPortal:!1})),e.createElement(u,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}],multiple:!0},e.createElement(c,{placeholder:"Multiple"}),e.createElement(m,{createPortal:!1})))};var Ge,Ae,Ve;K.parameters={...K.parameters,docs:{...(Ge=K.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ve=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var je,He,We;Q.parameters={...Q.parameters,docs:{...(je=Q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(We=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Be,Me,$e;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...($e=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};var Ue,Ye,Je;ee.parameters={...ee.parameters,docs:{...(Ue=ee.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(Je=(Ye=ee.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var ze,Xe,Ke;oe.parameters={...oe.parameters,docs:{...(ze=oe.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox customFilter={(label, inputValue) => {
    const reversedLabel = label.split('').reverse().join('');
    return new RegExp(\`^\${inputValue}\`, 'i').test(reversedLabel);
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
      <ComboboxControl placeholder="Search from right to left in each word" />

      <ComboboxContent />
    </Combobox>
}`,...(Ke=(Xe=oe.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var Qe,Ze,eo;ne.parameters={...ne.parameters,docs:{...(Qe=ne.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(eo=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:eo.source}}};var oo,no,ao;ae.parameters={...ae.parameters,docs:{...(oo=ae.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox defaultValue={['parrot']} items={[{
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
}`,...(ao=(no=ae.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var to,lo,ro;te.parameters={...te.parameters,docs:{...(to=te.parameters)==null?void 0:to.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(ro=(lo=te.parameters)==null?void 0:lo.docs)==null?void 0:ro.source}}};var so,io,bo;le.parameters={...le.parameters,docs:{...(so=le.parameters)==null?void 0:so.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Combobox
      </FormFieldLabel>

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
}`,...(bo=(io=le.parameters)==null?void 0:io.docs)==null?void 0:bo.source}}};var uo,mo,co;re.parameters={...re.parameters,docs:{...(uo=re.parameters)==null?void 0:uo.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(co=(mo=re.parameters)==null?void 0:mo.docs)==null?void 0:co.source}}};var po,go,vo;se.parameters={...se.parameters,docs:{...(po=se.parameters)==null?void 0:po.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';
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
}`,...(vo=(go=se.parameters)==null?void 0:go.docs)==null?void 0:vo.source}}};var Co,fo,ho;ie.parameters={...ie.parameters,docs:{...(Co=ie.parameters)==null?void 0:Co.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(ho=(fo=ie.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};var xo,yo,_o;be.parameters={...be.parameters,docs:{...(xo=be.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
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
    type MyData = {
      color?: string;
      info?: string;
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
    function customOptionRenderer(item: ComboboxItem<MyData>) {
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
}`,...(_o=(yo=be.parameters)==null?void 0:yo.docs)==null?void 0:_o.source}}};var Eo,To,qo;ue.parameters={...ue.parameters,docs:{...(Eo=ue.parameters)==null?void 0:Eo.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox items={[]}>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
}`,...(qo=(To=ue.parameters)==null?void 0:To.docs)==null?void 0:qo.source}}};var wo,Ro,Io;me.parameters={...me.parameters,docs:{...(wo=me.parameters)==null?void 0:wo.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(Io=(Ro=me.parameters)==null?void 0:Ro.docs)==null?void 0:Io.source}}};var Do,Oo,ko;ce.parameters={...ce.parameters,docs:{...(Do=ce.parameters)==null?void 0:Do.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(ko=(Oo=ce.parameters)==null?void 0:Oo.docs)==null?void 0:ko.source}}};var No,Fo,So;de.parameters={...de.parameters,docs:{...(No=de.parameters)==null?void 0:No.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Favorite pet:
      </FormFieldLabel>

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
}`,...(So=(Fo=de.parameters)==null?void 0:Fo.docs)==null?void 0:So.source}}};var Po,Lo,Go;pe.parameters={...pe.parameters,docs:{...(Po=pe.parameters)==null?void 0:Po.docs,source:{originalSource:`{
  globals: {
    imports: \`import { INPUT_I18N, Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <FormField>
      <FormFieldLabel>
        Favorite pet:
      </FormFieldLabel>

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
}`,...(Go=(Lo=pe.parameters)==null?void 0:Lo.docs)==null?void 0:Go.source}}};var Ao,Vo,jo;ge.parameters={...ge.parameters,docs:{...(Ao=ge.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Combobox items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <ComboboxControl placeholder="Default" />
        <ComboboxContent createPortal={false} />
      </Combobox>

      <Combobox items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <ComboboxControl clearable placeholder="Clearable" />
        <ComboboxContent createPortal={false} />
      </Combobox>

      <Combobox items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <ComboboxControl loading placeholder="Loading" />
        <ComboboxContent createPortal={false} />
      </Combobox>

      <Combobox disabled items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <ComboboxControl placeholder="Disabled" />
        <ComboboxContent createPortal={false} />
      </Combobox>

      <Combobox readOnly items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <ComboboxControl placeholder="Read only" />
        <ComboboxContent createPortal={false} />
      </Combobox>

      <Combobox items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]} multiple>
        <ComboboxControl placeholder="Multiple" />
        <ComboboxContent createPortal={false} />
      </Combobox>
    </div>
}`,...(jo=(Vo=ge.parameters)==null?void 0:Vo.docs)==null?void 0:jo.source}}};const dn=["Demo","Default","Overview","Clearable","CustomFilter","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","Placeholder","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],In=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:de,AccessibilityI18n:pe,Clearable:ee,Controlled:se,CustomFilter:oe,CustomOptions:be,Default:Q,Demo:K,Disabled:ne,Empty:ue,Group:te,Highlight:ie,InFormField:le,Invalid:re,Multiple:me,Overview:Z,Placeholder:ce,Readonly:ae,ThemeGenerator:ge,__namedExportsOrder:dn,default:cn},Symbol.toStringTag,{value:"Module"}));export{de as A,In as C,Q as D,ue as E,te as G,ie as H,re as I,me as M,Z as O,ae as R,pe as a,ee as b,ne as c,se as d,be as e,oe as f,le as g};
