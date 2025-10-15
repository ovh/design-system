import{r as i,e as n}from"./index-jIWwRBLr.js";import{j as d}from"./jsx-runtime-Cfl8ynUo.js";import{u as Lo,F as Oe,a as De}from"./FormFieldLabel-DW-nAxje.js";import{c as Ho}from"./index-CPOqegBX.js";import{R as Wo}from"./use-locale-context-BIV2aQtl.js";import{c as ge}from"./index-CqY9YpN0.js";import{b as Bo,a as $o}from"./PopoverTrigger-DrWuZNFw.js";import{a as pe}from"./overlay-CZHjGBMC.js";import{I as Mo,a as Uo}from"./icon-name-C581wThh.js";import{e as Yo}from"./element-3R7vFkDE.js";import{I as Jo,c as zo}from"./Input-DA3rR-6T.js";import{T as Xo}from"./Tag-Bp5l-_LL.js";import{e as Ko,o as Qo,C as q}from"./controls-BtiQQn1l.js";import{s as ke}from"./source-CPEZJ6oD.js";function Zo(e){const a=Wo(),o=e.locale??a.locale;return i.useMemo(()=>Ho({...e,locale:o}),[o,e])}function en(e,a,o,{allowCustomValue:r,filterFn:l,multiple:s,newElementLabel:c}){const w=r&&o.trim()!==""&&!tn(e.concat(a),o,s)?[{isNewElement:!0,label:`${c}${o}`,value:o}]:[];function y(C,h,f,_){return _&&h.some(I=>I.value===C.value)?!1:l(C.label,f.trim())}return e.reduce((C,h)=>{if(ve(h)){const f=h.options.filter(_=>y(_,a,o,s));return f.length&&C.push({...h,options:f}),C}return y(h,a,o,s)&&C.push(h),C},w)}function Po(e,a){let o;return e.some(r=>{Go(r,l=>l.value===a?(o=l,!0):!1)}),o}function on(e,a,o){if(a||!(o!=null&&o.length))return"";const r=Po(e,o[0]);return r?r.label:""}function nn(e,a){return a!=null&&a.length?e.reduce((o,r)=>{if(ve(r)){const l=r.options.filter(s=>a.indexOf(s.value)>=0);return l.length&&(o=o.concat(l)),o}return a.indexOf(r.value)>=0&&o.push(r),o},[]):[]}function Ne(e,a,o){if(typeof e=="string")return an(e,a,o);if(i.isValidElement(e)){const r=i.Children.map(e.props.children,l=>Ne(l,a,o));return i.cloneElement(e,e.props,r)}return e}function an(e,a,o){return rn(e,a).map((l,s)=>l.toLowerCase()===a?o({key:s,part:l}):l)}function Ie(e){return!!e&&e.selectionStart===0&&e.selectionEnd===0}function ve(e){return"options"in e}function tn(e,a,o){const r=a.trim().toLocaleLowerCase();return e.some(l=>Go(l,s=>o?s.label.trim().toLocaleLowerCase()===r.toLocaleLowerCase()||s.value.trim().toLocaleLowerCase()===r.toLocaleLowerCase():s.label.trim().toLocaleLowerCase()===r.toLocaleLowerCase()))}function Go(e,a){return ve(e)?e.options.some(a):a(e)}function rn(e,a){if(!e||!a)return[e];const o=a.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),r=new RegExp(`(${o})`,"gi");return e.split(r)}Ne.__docgenInfo={description:"",methods:[],displayName:"highlightNode"};const Ao=i.createContext(void 0),Vo=({allowCustomValue:e,children:a,customFilter:o,defaultValue:r,disabled:l,items:s,multiple:c=!1,newElementLabel:w,onInputValueChange:y,onValueChange:C,readOnly:h,value:f,..._})=>{const I=i.useMemo(()=>on(s,c,r||f),[]),D=i.useMemo(()=>nn(s,r||f),[]),{contains:P}=Zo({sensitivity:"base"}),x=i.useCallback((t,b)=>o?o(t,b):P(t,b),[o]),U=i.useId(),G=i.useRef(null),[A,Y]=i.useState(""),[S,J]=i.useState(),[T,z]=i.useState(s),[m,k]=i.useState(""),[O,V]=i.useState(I),[L,j]=i.useState(!1),[E,H]=i.useState(D),R=i.useMemo(()=>T.reduce((t,b)=>ve(b)?t.concat(b.options.map($=>$.value)):(t.push(b.value),t),[]),[T]);i.useEffect(()=>{k(""),z(()=>!c&&O.trim()===""?s:en(s,E,O,{allowCustomValue:e,filterFn:x,multiple:c,newElementLabel:w}))},[e,x,O,s,c,w,E]),i.useEffect(()=>{L||k("")},[L]);function Ce(t){l||h||!c||(B(b=>b.filter($=>$.value!==t.value)),he())}function he(){var t;(t=G.current)==null||t.focus()}function Te(){if(L||u(!0),m===""&&T.length)k(R[0]);else{const t=R.findIndex(b=>b===m);k(R[t<R.length-1?t+1:0])}}function we(t){L&&k(t.value)}function Ee(){if(L)if(m===""&&T.length)k(R[R.length-1]);else{const t=R.findIndex(b=>b===m);k(R[t>0?t-1:R.length-1])}}function qe(){if(!m)return;const t=Po(T,m);t&&W(t)}function W(t){l||h||(c?(N(""),B(b=>{if(t.isNewElement){const{isNewElement:$,...Re}=t;return b.concat([{...Re,label:t.value}])}return b.concat([t])})):(N(t.isNewElement?t.value:t.label),B([t]),u(!1)),he())}function N(t){const b=typeof t=="function"?t(O):t;V(b),y&&b!==O&&y({inputValue:b})}function u(t){j(l||h?!1:t)}function B(t){const b=typeof t=="function"?t(E):t;if(H(b),C){const $=b.length?b.map(Re=>Re.value):[];C({value:$})}}return d.jsx(Ao.Provider,{value:{..._,allowCustomValue:e,contentId:A,contentPosition:S,controlId:U,defaultValue:r,deselectItem:Ce,disabled:l,filteredItems:T,highlightNextOption:Te,highlightOption:we,highlightPreviousOption:Ee,highlightedOptionValue:m,inputRef:G,inputValue:O,isOpen:L,items:s,multiple:c,newElementLabel:w,onInputValueChange:y,onValueChange:C,readOnly:h,selectHighlightedItem:qe,selectItem:W,selection:E,setContentId:Y,setContentPosition:J,setInputValue:N,setIsOpen:u,setSelection:B,value:f},children:a})};function ye(){const e=i.useContext(Ao);if(!e)throw new Error("useCombobox must be used within a ComboboxProvider");return e}Vo.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const p=i.forwardRef(({allowCustomValue:e=!0,children:a,className:o,customFilter:r,customOptionRenderer:l,defaultValue:s,disabled:c,highlightResults:w=!1,i18n:y,invalid:C,items:h,locale:f,multiple:_,name:I,newElementLabel:D="Add ",noResultLabel:P="No results found",onInputValueChange:x,onValueChange:U,readOnly:G,required:A,value:Y,...S},J)=>{const T=Lo(),z=C||(T==null?void 0:T.invalid);return d.jsx(Vo,{allowCustomValue:e,customFilter:r,customOptionRenderer:l,defaultValue:s,disabled:c,highlightResults:w,i18n:y,invalid:z,items:h,locale:f,multiple:_,name:I,newElementLabel:D,noResultLabel:P,onInputValueChange:x,onValueChange:U,readOnly:G,required:A,value:Y,children:d.jsx("div",{className:o,"data-ods":"combobox",ref:J,...S,children:a})})});p.displayName="Combobox";p.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const ln={"combobox-highlight":"_combobox-highlight_1y4e6_2"},jo=({children:e,highlight:a,inputValue:o})=>!a||!o?d.jsx(d.Fragment,{children:e}):d.jsx(d.Fragment,{children:Ne(e,o.toLowerCase(),({key:r,part:l})=>d.jsx("span",{className:ln["combobox-highlight"],children:l},r))});jo.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""}}};const M={"combobox-option":"_combobox-option_6dh73_2","combobox-option--disabled":"_combobox-option--disabled_6dh73_12","combobox-option--highlighted":"_combobox-option--highlighted_6dh73_18","combobox-option--new":"_combobox-option--new_6dh73_21","combobox-option--selected":"_combobox-option--selected_6dh73_24","combobox-option__new-item":"_combobox-option__new-item_6dh73_27"},_e=({className:e,isHighlighted:a,item:o,...r})=>{const{customOptionRenderer:l,disabled:s,highlightOption:c,highlightResults:w,inputValue:y,selection:C,selectItem:h}=ye();function f(){s||h(o)}return d.jsx("div",{"aria-selected":a,className:ge(M["combobox-option"],{[M["combobox-option--disabled"]]:s},{[M["combobox-option--highlighted"]]:a},{[M["combobox-option--new"]]:o.isNewElement},{[M["combobox-option--selected"]]:C.some(_=>_.value===o.value)},e),onClick:f,onPointerEnter:()=>c(o),role:"option",tabIndex:-1,...r,children:o.isNewElement?d.jsxs("div",{className:M["combobox-option__new-item"],children:[d.jsx(Mo,{name:Uo.plus})," ",o.label]}):d.jsx(jo,{highlight:w,inputValue:y,children:l?l(o):o.label})})};_e.displayName="ComboboxOption";_e.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const fe={"combobox-group":"_combobox-group_1f16m_2","combobox-group__label":"_combobox-group__label_1f16m_8","combobox-group__label--disabled":"_combobox-group__label--disabled_1f16m_16","combobox-group__option":"_combobox-group__option_1f16m_22"},Fe=({className:e,item:a,...o})=>{const r=i.useId(),{disabled:l,highlightedOptionValue:s}=ye();return d.jsxs("div",{"aria-labelledby":r,className:fe["combobox-group"],role:"group",...o,children:[d.jsx("div",{className:ge(fe["combobox-group__label"],{[fe["combobox-group__label--disabled"]]:l}),id:r,role:"presentation",children:a.label}),a.options.map(c=>d.jsx(_e,{className:fe["combobox-group__option"],isHighlighted:s===c.value,item:c},c.value))]})};Fe.displayName="ComboboxGroup";Fe.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const xe={"combobox-content":"_combobox-content_isu4g_2","combobox-content--open-bottom":"_combobox-content--open-bottom_isu4g_11","combobox-content--open-top":"_combobox-content--open-top_isu4g_14","combobox-content__empty":"_combobox-content__empty_isu4g_17"},g=i.forwardRef(({className:e,createPortal:a=!0,id:o,...r},l)=>{const{contentPosition:s,controlId:c,filteredItems:w,highlightedOptionValue:y,isOpen:C,noResultLabel:h,setContentId:f,setContentPosition:_}=ye(),I=i.useId(),D=i.useMemo(()=>o??I,[I,o]);i.useEffect(()=>{f(D)},[D,f]);function P({position:x}){_(x)}return d.jsx(Bo,{autoFocus:!1,gutter:-1,onPositionChange:P,open:C,position:pe.bottom,sameWidth:!0,triggerId:c,children:d.jsxs($o,{className:ge(xe["combobox-content"],{[xe["combobox-content--open-bottom"]]:s===pe.bottom},{[xe["combobox-content--open-top"]]:s===pe.top},e),createPortal:a,"data-ods":"combobox-content",id:D,ref:l,...r,role:"listbox",children:[w.length===0&&d.jsx("div",{className:xe["combobox-content__empty"],children:h}),w.map(x=>ve(x)?d.jsx(Fe,{item:x},x.label):d.jsx(_e,{id:`${c}-${x.value}`,isHighlighted:y===x.value,item:x},x.value))]})})});g.displayName="ComboboxContent";g.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const F={"combobox-control":"_combobox-control_14h0r_2","combobox-control--invalid":"_combobox-control--invalid_14h0r_16","combobox-control--disabled":"_combobox-control--disabled_14h0r_16","combobox-control--read-only":"_combobox-control--read-only_14h0r_16","combobox-control--focused":"_combobox-control--focused_14h0r_19","combobox-control--open-bottom":"_combobox-control--open-bottom_14h0r_35","combobox-control--open-top":"_combobox-control--open-top_14h0r_38","combobox-control__tag--focused":"_combobox-control__tag--focused_14h0r_45","combobox-control__input":"_combobox-control__input_14h0r_49"},v=i.forwardRef(({className:e,clearable:a,id:o,loading:r,placeholder:l,...s},c)=>{const{contentId:w,contentPosition:y,controlId:C,deselectItem:h,disabled:f,highlightedOptionValue:_,highlightNextOption:I,highlightPreviousOption:D,i18n:P,inputRef:x,inputValue:U,invalid:G,isOpen:A,locale:Y,multiple:S,name:J,readOnly:T,required:z,selection:m,selectHighlightedItem:k,setInputValue:O,setIsOpen:V,setSelection:L}=ye(),j=Lo(),[E,H]=i.useState(-1),[R,Ce]=i.useState(!1),he=!f&&!T;function Te(){!m.length||E<0||(E>=m.length-1?N():H(u=>Math.min(u+1,m.length-1)))}function we(){m.length&&(E<0?H(m.length-1):H(u=>Math.max(0,u-1)))}function Ee(u){Yo(u.relatedTarget,"data-ods",["combobox-content","combobox-control"])||(S||(m.length?O(m[0].isNewElement?m[0].value:m[0].label):O("")),N(),Ce(!1),V(!1))}function qe(u){switch(u.key){case"ArrowDown":u.preventDefault(),I();break;case"ArrowLeft":Ie(x.current)&&(u.preventDefault(),we());break;case"ArrowRight":E>=0&&Ie(x.current)&&(u.preventDefault(),Te());break;case"ArrowUp":u.preventDefault(),D();break;case"Backspace":m.length&&Ie(x.current)&&W(m[E>=0?E:m.length-1]);break;case"Enter":if(m.length&&E>=0){u.preventDefault(),W(m[E]);break}_&&(u.preventDefault(),k());break;case"Escape":u.preventDefault(),N(),V(!1);break}}function W(u){N(),h(u)}function N(){H(-1)}return d.jsxs("div",{className:ge(F["combobox-control"],{[F["combobox-control--disabled"]]:f},{[F["combobox-control--invalid"]]:G},{[F["combobox-control--focused"]]:R},{[F["combobox-control--open-bottom"]]:A&&y===pe.bottom},{[F["combobox-control--open-top"]]:A&&y===pe.top},{[F["combobox-control--read-only"]]:T},e),"data-ods":"combobox-control",id:C,onBlur:Ee,ref:c,...s,children:[S&&m.map((u,B)=>d.jsx(Xo,{className:ge({[F["combobox-control__tag--focused"]]:he&&E===B}),disabled:f||T,onClick:()=>W(u),tabIndex:-1,value:u.value,children:u.label},u.value)),d.jsx(Jo,{"aria-activedescendant":_?`${C}-${_}`:"","aria-autocomplete":"list","aria-controls":w,"aria-expanded":A?"true":"false",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:F["combobox-control__input"],clearable:a,disabled:f,i18n:P,id:o||(j==null?void 0:j.id),invalid:G,loading:r,locale:Y,onChange:u=>{N(),O(u.target.value),V(!0)},onClear:()=>!S&&L([]),onClick:()=>V(!0),onFocus:()=>Ce(!0),onKeyDown:qe,name:J,placeholder:l,readOnly:T,ref:x,required:S?!1:z,role:"combobox",spellCheck:"false",value:U})]})});v.displayName="ComboboxControl";v.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const sn={argTypes:Ko(["customOptionRenderer","defaultValue","i18n","items","locale","name","onInputValueChange","onValueChange","required","value"]),component:p,subcomponents:{ComboboxContent:g,ComboboxControl:v},title:"React Components/Combobox"},X={render:e=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:e.allowCustomValue,defaultValue:e.defaultValue,disabled:e.disabled,highlightResults:e.highlightResults,invalid:e.invalid,multiple:e.multiple,newElementLabel:e.newElementLabel,noResultLabel:e.noResultLabel,readOnly:e.readOnly},n.createElement(v,{clearable:e.clearable,placeholder:e.placeholder,loading:e.loading}),n.createElement(g,null)),argTypes:Qo({allowCustomValue:{table:{category:q.general},control:"boolean"},clearable:{table:{category:q.general,type:{summary:"boolean"}},control:"boolean"},defaultValue:{table:{category:q.general},control:"text"},disabled:{table:{category:q.general},control:"boolean"},highlightResults:{table:{category:q.general},control:"boolean"},invalid:{table:{category:q.general},control:"boolean"},loading:{table:{category:q.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:q.general},control:"boolean"},newElementLabel:{table:{category:q.general},control:"text"},noResultLabel:{table:{category:q.general},control:"text"},placeholder:{table:{category:q.general},control:"text"},readOnly:{table:{category:q.general},control:"boolean"}}),args:{placeholder:"Start typing"}},K={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null))},Q={tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},Z={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{clearable:!0,placeholder:"Combobox"}),n.createElement(g,null))},ee={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{customFilter:(e,a)=>{const o=e.split("").reverse().join("");return new RegExp(`^${a}`,"i").test(o)},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{placeholder:"Search from right to left in each word"}),n.createElement(g,null))},oe={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},ne={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{defaultValue:["parrot"],items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},ae={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},te={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(Oe,null,n.createElement(De,null,"Combobox"),n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},n.createElement(v,null),n.createElement(g,null)))},re={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},n.createElement(v,null),n.createElement(g,null))},le={globals:{imports:`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...ke()}}},render:({})=>{const[e,a]=i.useState(["dog"]);return n.createElement(n.Fragment,null,n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:o=>a(o.value),value:e},n.createElement(v,{placeholder:"Select an animal"}),n.createElement(g,null)),n.createElement("div",{style:{marginTop:8}},n.createElement("strong",null,"Selected value:")," ",e[0]??"None"))}},se={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null))},ie={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...ke()}}},render:({})=>{const e=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}];function a(o){var r,l;return n.createElement("span",{style:{color:(r=o.customRendererData)==null?void 0:r.color,fontWeight:"bold"}},o.label," ",((l=o.customRendererData)==null?void 0:l.info)&&n.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",o.customRendererData.info,")"))}return n.createElement(p,{customOptionRenderer:a,highlightResults:!0,items:e},n.createElement(v,null),n.createElement(g,null))}},ue={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[]},n.createElement(v,null),n.createElement(g,null))},me={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null))},be={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster",disabled:!0},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{placeholder:"Please select"}),n.createElement(g,null))},de={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(Oe,null,n.createElement(De,null,"Favorite pet:"),n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null)))},ce={globals:{imports:"import { INPUT_I18N, Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...ke()}}},render:({})=>n.createElement(Oe,null,n.createElement(De,null,"Favorite pet:"),n.createElement(p,{i18n:{[zo.clearButton]:"Clear favorite pet selection"},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{clearable:!0}),n.createElement(g,null)))};var Se,Le,Pe;X.parameters={...X.parameters,docs:{...(Se=X.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Pe=(Le=X.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var Ge,Ae,Ve;K.parameters={...K.parameters,docs:{...(Ge=K.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ve=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var je,He,We;Q.parameters={...Q.parameters,docs:{...(je=Q.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(We=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Be,$e,Me;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Me=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:Me.source}}};var Ue,Ye,Je;ee.parameters={...ee.parameters,docs:{...(Ue=ee.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=ee.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var ze,Xe,Ke;oe.parameters={...oe.parameters,docs:{...(ze=oe.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ke=(Xe=oe.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var Qe,Ze,eo;ne.parameters={...ne.parameters,docs:{...(Qe=ne.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(eo=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:eo.source}}};var oo,no,ao;ae.parameters={...ae.parameters,docs:{...(oo=ae.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(ao=(no=ae.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var to,ro,lo;te.parameters={...te.parameters,docs:{...(to=te.parameters)==null?void 0:to.docs,source:{originalSource:`{
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
}`,...(lo=(ro=te.parameters)==null?void 0:ro.docs)==null?void 0:lo.source}}};var so,io,uo;re.parameters={...re.parameters,docs:{...(so=re.parameters)==null?void 0:so.docs,source:{originalSource:`{
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
}`,...(uo=(io=re.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var mo,bo,co;le.parameters={...le.parameters,docs:{...(mo=le.parameters)==null?void 0:mo.docs,source:{originalSource:`{
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
}`,...(co=(bo=le.parameters)==null?void 0:bo.docs)==null?void 0:co.source}}};var po,go,vo;se.parameters={...se.parameters,docs:{...(po=se.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
}`,...(vo=(go=se.parameters)==null?void 0:go.docs)==null?void 0:vo.source}}};var Co,ho,fo;ie.parameters={...ie.parameters,docs:{...(Co=ie.parameters)==null?void 0:Co.docs,source:{originalSource:`{
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
}`,...(fo=(ho=ie.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var xo,yo,_o;ue.parameters={...ue.parameters,docs:{...(xo=ue.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox items={[]}>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
}`,...(_o=(yo=ue.parameters)==null?void 0:yo.docs)==null?void 0:_o.source}}};var To,wo,Eo;me.parameters={...me.parameters,docs:{...(To=me.parameters)==null?void 0:To.docs,source:{originalSource:`{
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
}`,...(Eo=(wo=me.parameters)==null?void 0:wo.docs)==null?void 0:Eo.source}}};var qo,Ro,Io;be.parameters={...be.parameters,docs:{...(qo=be.parameters)==null?void 0:qo.docs,source:{originalSource:`{
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
}`,...(Io=(Ro=be.parameters)==null?void 0:Ro.docs)==null?void 0:Io.source}}};var Oo,Do,ko;de.parameters={...de.parameters,docs:{...(Oo=de.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
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
}`,...(ko=(Do=de.parameters)==null?void 0:Do.docs)==null?void 0:ko.source}}};var No,Fo,So;ce.parameters={...ce.parameters,docs:{...(No=ce.parameters)==null?void 0:No.docs,source:{originalSource:`{
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
}`,...(So=(Fo=ce.parameters)==null?void 0:Fo.docs)==null?void 0:So.source}}};const un=["Demo","Default","Overview","Clearable","CustomFilter","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","Placeholder","AccessibilityFormField","AccessibilityI18n"],wn=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:de,AccessibilityI18n:ce,Clearable:Z,Controlled:le,CustomFilter:ee,CustomOptions:ie,Default:K,Demo:X,Disabled:oe,Empty:ue,Group:ae,Highlight:se,InFormField:te,Invalid:re,Multiple:me,Overview:Q,Placeholder:be,Readonly:ne,__namedExportsOrder:un,default:sn},Symbol.toStringTag,{value:"Module"}));export{de as A,wn as C,K as D,ue as E,ae as G,se as H,re as I,me as M,Q as O,ne as R,ce as a,Z as b,oe as c,le as d,ie as e,ee as f,te as g};
