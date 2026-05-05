import{r as s,e}from"./index-jIWwRBLr.js";import{j as d}from"./jsx-runtime-Cfl8ynUo.js";import{u as Uo,F as Fe,a as Se}from"./index-B0M5RXeR.js";import{u as Qo}from"./context-C_-r2uoG.js";import{u as Zo}from"./use-filter-DwFqGZM4.js";import{c as M}from"./index-CqY9YpN0.js";import{b as en,a as on}from"./index-DyJ6-P7h.js";import{I as Mo,a as $o}from"./icon-name-D0KNfDOz.js";import{h as nn,e as je}from"./element-B8BTzFb4.js";import{a as xe}from"./overlay-CZHjGBMC.js";import{I as tn,c as an}from"./Input-CsaVjqar.js";import{T as ln}from"./Tag-DvbeX4Ez.js";import{e as rn,o as sn,C as N}from"./controls-BtiQQn1l.js";import{s as Pe}from"./source-CPEZJ6oD.js";function mn(n,a,o,{allowCustomValue:l,filterFn:i,multiple:c,newElementLabel:g}){const v=l&&o.trim()!==""&&!un(n.concat(a),o,c)?[{isNewElement:!0,label:`${g}${o}`,value:o}]:[];function T(C,y,f,h){return h&&y.some(E=>E.value===C.value)?!1:i(C.label,f.trim())}return n.reduce((C,y)=>{if(ye(y)){const f=y.options.filter(h=>T(h,a,o,c));return f.length&&C.push({...y,options:f}),C}return T(y,a,o,c)&&C.push(y),C},v)}function Yo(n,a){let o;return n.some(l=>{Jo(l,i=>i.value===a?(o=i,!0):!1)}),o}function bn(n,a,o){if(a||!(o!=null&&o.length))return"";const l=Yo(n,o[0]);return l?l.label:""}function Ae(n,a){return a!=null&&a.length?n.reduce((o,l)=>{if(ye(l)){const i=l.options.filter(c=>a.indexOf(c.value)>=0);return i.length&&(o=o.concat(i)),o}return a.indexOf(l.value)>=0&&o.push(l),o},[]):[]}function Ne(n){return!!n&&n.selectionStart===0&&n.selectionEnd===0}function ye(n){return"options"in n}function un(n,a,o){const l=a.trim().toLocaleLowerCase();return n.some(i=>Jo(i,c=>o?c.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()||c.value.trim().toLocaleLowerCase()===l.toLocaleLowerCase():c.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()))}function Jo(n,a){return ye(n)?n.options.some(a):a(n)}const zo=s.createContext(void 0),Xo=({allowCustomValue:n,children:a,customFilter:o,defaultOpen:l,defaultValue:i,disabled:c,items:g,multiple:v=!1,newElementLabel:T,onInputValueChange:C,onOpenChange:y,onValueChange:f,open:h,readOnly:E,value:I,...V})=>{const w=s.useMemo(()=>bn(g,v,i||I),[]),H=s.useMemo(()=>Ae(g,i||I),[]),{contains:_}=Zo({sensitivity:"base"}),L=s.useCallback((t,m)=>o?o(t,m):_(t,m),[o]),J=s.useId(),G=s.useRef(null),[z,W]=s.useState(""),[X,x]=s.useState(),[F,j]=s.useState(g),[q,A]=s.useState(""),[S,O]=s.useState(w),[D,_e]=s.useState(l??h??!1),[B,K]=s.useState(H),k=s.useMemo(()=>F.reduce((t,m)=>ye(m)?t.concat(m.options.map($=>$.value)):(t.push(m.value),t),[]),[F]);s.useEffect(()=>{A(""),j(()=>!v&&S.trim()===""?g:mn(g,B,S,{allowCustomValue:n,filterFn:L,multiple:v,newElementLabel:T}))},[n,L,S,g,v,T,B]),s.useEffect(()=>{D||A("")},[D]),s.useEffect(()=>{typeof h=="boolean"&&_e(h)},[h]),s.useEffect(()=>{const t=Ae(g,I);t.length&&(v?(Z(""),K(t)):(Z(t[0].label),K([t[0]])))},[I]);function De(t){c||E||!v||(Ee(m=>m.filter($=>$.value!==t.value)),Te())}function Te(){var t;(t=G.current)==null||t.focus()}function Ie(){if(D||Oe(!0),q===""&&F.length)A(k[0]);else{const t=k.findIndex(m=>m===q);A(k[t<k.length-1?t+1:0])}}function Q(t){D&&A(t.value)}function U(){if(D)if(q===""&&F.length)A(k[k.length-1]);else{const t=k.findIndex(m=>m===q);A(k[t>0?t-1:k.length-1])}}function r(){if(!q)return;const t=Yo(F,q);t&&P(t)}function P(t){c||E||(v?(Z(""),Ee(m=>{if(t.isNewElement){const{isNewElement:$,...ke}=t;return m.concat([{...ke,label:t.value}])}return m.concat([t])})):(Z(t.isNewElement?t.value:t.label),Ee([t]),Oe(!1)),Te())}function Z(t){const m=typeof t=="function"?t(S):t;O(m),C&&m!==S&&C({inputValue:m})}function Oe(t){let m;c||E?m=!1:m=typeof t=="function"?t(D):t,typeof h!="boolean"&&_e(m),y&&y({open:m})}function Ee(t){const m=typeof t=="function"?t(B):t;if(K(m),f){const $=m.length?m.map(ke=>ke.value):[];f({value:$})}}return d.jsx(zo.Provider,{value:{...V,allowCustomValue:n,contentId:z,contentPosition:X,controlId:J,defaultValue:i,deselectItem:De,disabled:c,filteredItems:F,highlightNextOption:Ie,highlightOption:Q,highlightPreviousOption:U,highlightedOptionValue:q,inputRef:G,inputValue:S,isOpen:D,items:g,multiple:v,newElementLabel:T,onInputValueChange:C,onValueChange:f,readOnly:E,selectHighlightedItem:r,selectItem:P,selection:B,setContentId:W,setContentPosition:x,setInputValue:Z,setIsOpen:Oe,setSelection:Ee,value:I},children:a})};function qe(){return Qo(zo)}Xo.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the combobox. Use when you don't need to control the open state of the combobox."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed.",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add."},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value."},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ComboboxOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ComboboxOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the select open state changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the combobox."},overlayConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Whether to flip the position.
   */
  flip?: boolean,
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
}`,signature:{properties:[{key:"flip",value:{name:"boolean",required:!1},description:"Whether to flip the position."},{key:"sameWidth",value:{name:"boolean",required:!1},description:"Whether to make the floating element same width as the reference element."}]}},description:"The overlay configuration."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Le=s.forwardRef(({allowCustomValue:n=!0,children:a,className:o,customFilter:l,customOptionRenderer:i,defaultOpen:c,defaultValue:g,disabled:v,highlightResults:T=!1,i18n:C,invalid:y,items:f,locale:h,multiple:E,name:I,newElementLabel:V="Add ",noResultLabel:w="No results found",onInputValueChange:H,onOpenChange:_,onValueChange:L,open:J,overlayConfig:G,readOnly:z,required:W,value:X,...x},F)=>{const j=Uo(),q=y||(j==null?void 0:j.invalid);return d.jsx(Xo,{allowCustomValue:n,customFilter:l,customOptionRenderer:i,defaultOpen:c,defaultValue:g,disabled:v,highlightResults:T,i18n:C,invalid:q,items:f,locale:h,multiple:E,name:I,newElementLabel:V,noResultLabel:w,onInputValueChange:H,onOpenChange:_,onValueChange:L,open:J,overlayConfig:G,readOnly:z,required:W,value:X,children:d.jsx("div",{className:o,"data-ods":"combobox",ref:F,...x,children:a})})});Le.displayName="Combobox";Le.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the combobox. Use when you don't need to control the open state of the combobox."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items.",defaultValue:{value:"false",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add.",defaultValue:{value:"'Add '",computed:!1}},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value.",defaultValue:{value:"'No results found'",computed:!1}},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ComboboxOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ComboboxOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the select open state changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the combobox."},overlayConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Whether to flip the position.
   */
  flip?: boolean,
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
}`,signature:{properties:[{key:"flip",value:{name:"boolean",required:!1},description:"Whether to flip the position."},{key:"sameWidth",value:{name:"boolean",required:!1},description:"Whether to make the floating element same width as the reference element."}]}},description:"The overlay configuration."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const cn={"combobox-highlight":"_combobox-highlight_1y4e6_2"},Ko=({children:n,highlight:a,inputValue:o})=>!a||!o?d.jsx(d.Fragment,{children:n}):d.jsx(d.Fragment,{children:nn(n,o.toLowerCase(),({key:l,part:i})=>d.jsx("span",{className:cn["combobox-highlight"],children:i},l))});Ko.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""}}};const Y={"combobox-option":"_combobox-option_10qpo_2","combobox-option--disabled":"_combobox-option--disabled_10qpo_12","combobox-option--highlighted":"_combobox-option--highlighted_10qpo_18","combobox-option--new":"_combobox-option--new_10qpo_21","combobox-option--selected":"_combobox-option--selected_10qpo_24","combobox-option__new-item":"_combobox-option__new-item_10qpo_27"},Re=({className:n,isHighlighted:a,item:o,...l})=>{const{customOptionRenderer:i,disabled:c,highlightOption:g,highlightResults:v,inputValue:T,selection:C,selectItem:y}=qe(),f=s.useRef(null);s.useEffect(()=>{f.current&&a&&f.current.scrollIntoView({block:"nearest"})},[a,f]);function h(){c||y(o)}return d.jsx("div",{"aria-selected":a,className:M(Y["combobox-option"],{[Y["combobox-option--disabled"]]:c},{[Y["combobox-option--highlighted"]]:a},{[Y["combobox-option--new"]]:o.isNewElement},{[Y["combobox-option--selected"]]:C.some(E=>E.value===o.value)},n),onClick:h,onPointerEnter:()=>g(o),ref:f,role:"option",tabIndex:-1,...l,children:o.isNewElement?d.jsxs("div",{className:Y["combobox-option__new-item"],children:[d.jsx(Mo,{name:$o.plus})," ",o.label]}):d.jsx(Ko,{highlight:v,inputValue:T,children:i?i(o):o.label})})};Re.displayName="ComboboxOption";Re.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const we={"combobox-group":"_combobox-group_38ufa_2","combobox-group__label":"_combobox-group__label_38ufa_8","combobox-group__label--disabled":"_combobox-group__label--disabled_38ufa_16","combobox-group__option":"_combobox-group__option_38ufa_22"},Ge=({className:n,item:a,...o})=>{const l=s.useId(),{disabled:i,highlightedOptionValue:c}=qe();return d.jsxs("div",{"aria-labelledby":l,className:we["combobox-group"],role:"group",...o,children:[d.jsx("div",{className:M(we["combobox-group__label"],{[we["combobox-group__label--disabled"]]:i}),id:l,role:"presentation",children:a.label}),a.options.map(g=>d.jsx(Re,{className:we["combobox-group__option"],isHighlighted:c===g.value,item:g},g.value))]})};Ge.displayName="ComboboxGroup";Ge.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  label: string;
  options: ComboboxOptionItem[];
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const ee={"combobox-content":"_combobox-content_1uuvg_2","combobox-content--invalid":"_combobox-content--invalid_1uuvg_13","combobox-content--open-bottom":"_combobox-content--open-bottom_1uuvg_16","combobox-content--open-top":"_combobox-content--open-top_1uuvg_19","combobox-content__empty":"_combobox-content__empty_1uuvg_22"},b=s.forwardRef(({className:n,createPortal:a=!0,id:o,...l},i)=>{const{contentPosition:c,controlId:g,filteredItems:v,highlightedOptionValue:T,isOpen:C,invalid:y,noResultLabel:f,overlayConfig:h,setContentId:E,setContentPosition:I}=qe(),V=s.useId(),w=s.useMemo(()=>o??V,[V,o]);s.useEffect(()=>{E(w)},[w,E]);function H({position:_}){I(_)}return d.jsx(en,{autoFocus:!1,onPositionChange:H,open:C,overlayConfig:{gutter:-1,position:xe.bottom,sameWidth:!0,...h},triggerId:g,children:d.jsxs(on,{className:M(ee["combobox-content"],{[ee["combobox-content--invalid"]]:y},{[ee["combobox-content--open-bottom"]]:c===xe.bottom},{[ee["combobox-content--open-top"]]:c===xe.top},n),createPortal:a,"data-ods":"combobox-content",id:w,ref:i,...l,role:"listbox",children:[v.length===0&&d.jsx("div",{className:ee["combobox-content__empty"],children:f}),v.map(_=>ye(_)?d.jsx(Ge,{item:_},_.label):d.jsx(Re,{id:`${g}-${_.value}`,isHighlighted:T===_.value,item:_},_.value))]})})});b.displayName="ComboboxContent";b.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const R={"combobox-control":"_combobox-control_xpn1f_2","combobox-control--invalid":"_combobox-control--invalid_xpn1f_19","combobox-control--disabled":"_combobox-control--disabled_xpn1f_19","combobox-control--read-only":"_combobox-control--read-only_xpn1f_19","combobox-control--focused":"_combobox-control--focused_xpn1f_19","combobox-control--open-bottom":"_combobox-control--open-bottom_xpn1f_35","combobox-control--open-top":"_combobox-control--open-top_xpn1f_38","combobox-control__tag--focused":"_combobox-control__tag--focused_xpn1f_45","combobox-control__field":"_combobox-control__field_xpn1f_49","combobox-control__field__input":"_combobox-control__field__input_xpn1f_54","combobox-control__field__caret":"_combobox-control__field__caret_xpn1f_63","combobox-control__field__caret--disabled":"_combobox-control__field__caret--disabled_xpn1f_73","combobox-control__field__caret__icon":"_combobox-control__field__caret__icon_xpn1f_77","combobox-control__field__caret__icon--open":"_combobox-control__field__caret__icon--open_xpn1f_81"},u=s.forwardRef(({className:n,clearable:a,id:o,loading:l,placeholder:i,...c},g)=>{const{contentId:v,contentPosition:T,controlId:C,deselectItem:y,disabled:f,highlightedOptionValue:h,highlightNextOption:E,highlightPreviousOption:I,i18n:V,inputRef:w,inputValue:H,invalid:_,isOpen:L,locale:J,multiple:G,name:z,readOnly:W,required:X,selection:x,selectHighlightedItem:F,setInputValue:j,setIsOpen:q,setSelection:A}=qe(),S=Uo(),[O,D]=s.useState(-1),[_e,B]=s.useState(!1),K=!f&&!W;function k(){!x.length||O<0||(O>=x.length-1?U():D(r=>Math.min(r+1,x.length-1)))}function De(){x.length&&(O<0?D(x.length-1):D(r=>Math.max(0,r-1)))}function Te(r){var P;((P=r.relatedTarget)==null?void 0:P.id)===v||je(r.relatedTarget,"data-ods",["combobox-content","combobox-control"])&&je(r.relatedTarget,"id",[v,C])||(G||(x.length?j(x[0].isNewElement?x[0].value:x[0].label):j("")),U(),B(!1),q(!1))}function Ie(r){switch(r.key){case"ArrowDown":r.preventDefault(),E();break;case"ArrowLeft":Ne(w.current)&&(r.preventDefault(),De());break;case"ArrowRight":O>=0&&Ne(w.current)&&(r.preventDefault(),k());break;case"ArrowUp":r.preventDefault(),I();break;case"Backspace":x.length&&Ne(w.current)&&Q(x[O>=0?O:x.length-1]);break;case"Enter":if(x.length&&O>=0){r.preventDefault(),Q(x[O]);break}h&&(r.preventDefault(),F());break;case"Escape":r.preventDefault(),U(),q(!1);break}}function Q(r){U(),y(r)}function U(){D(-1)}return d.jsxs("div",{className:M(R["combobox-control"],{[R["combobox-control--disabled"]]:f},{[R["combobox-control--invalid"]]:_},{[R["combobox-control--focused"]]:_e},{[R["combobox-control--open-bottom"]]:L&&T===xe.bottom},{[R["combobox-control--open-top"]]:L&&T===xe.top},{[R["combobox-control--read-only"]]:W},n),"data-ods":"combobox-control",id:C,onBlur:Te,ref:g,...c,children:[G&&x.map((r,P)=>d.jsx(ln,{className:M({[R["combobox-control__tag--focused"]]:K&&O===P}),disabled:f||W,onClick:()=>Q(r),tabIndex:-1,value:r.value,children:r.label},r.value)),d.jsxs("div",{className:R["combobox-control__field"],children:[d.jsx(tn,{"aria-activedescendant":h?`${C}-${h}`:"","aria-autocomplete":"list","aria-controls":v,"aria-expanded":L?"true":"false",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:R["combobox-control__field__input"],clearable:a,disabled:f,i18n:V,id:o||(S==null?void 0:S.id),invalid:_,loading:l,locale:J,onChange:r=>{U(),j(r.target.value),q(!0)},onClear:()=>!G&&A([]),onClick:()=>q(!0),onFocus:()=>B(!0),onKeyDown:Ie,name:z,placeholder:i,readOnly:W,ref:w,required:G?!1:X,role:"combobox",spellCheck:"false",value:H}),d.jsx("button",{"aria-hidden":"true",className:M(R["combobox-control__field__caret"],{[R["combobox-control__field__caret--disabled"]]:f}),onClick:()=>{var r,P;(r=w.current)==null||r.click(),(P=w.current)==null||P.focus()},tabIndex:-1,type:"button",children:d.jsx(Mo,{className:M(R["combobox-control__field__caret__icon"],{[R["combobox-control__field__caret__icon--open"]]:L}),name:$o.chevronDown})})]})]})});u.displayName="ComboboxControl";u.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const p=Object.assign(Le,{Content:b,Control:u}),dn={argTypes:rn(["customFilter","customOptionRenderer","defaultOpen","defaultValue","i18n","items","locale","name","onInputValueChange","onOpenChange","onValueChange","open","overlayConfig","required","value"]),component:p,subcomponents:{ComboboxContent:b,ComboboxControl:u},title:"React Components/Combobox"},oe={render:n=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:n.allowCustomValue,disabled:n.disabled,highlightResults:n.highlightResults,invalid:n.invalid,multiple:n.multiple,newElementLabel:n.newElementLabel,noResultLabel:n.noResultLabel,readOnly:n.readOnly},e.createElement(u,{clearable:n.clearable,loading:n.loading,placeholder:n.placeholder}),e.createElement(b,null)),argTypes:sn({allowCustomValue:{table:{category:N.general},control:"boolean"},clearable:{table:{category:N.general,type:{summary:"boolean"}},control:"boolean"},disabled:{table:{category:N.general},control:"boolean"},highlightResults:{table:{category:N.general},control:"boolean"},invalid:{table:{category:N.general},control:"boolean"},loading:{table:{category:N.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:N.general},control:"boolean"},newElementLabel:{table:{category:N.general},control:"text"},noResultLabel:{table:{category:N.general},control:"text"},placeholder:{table:{category:N.general},control:"text"},readOnly:{table:{category:N.general},control:"boolean"}}),args:{placeholder:"Start typing"}},ne={parameters:{layout:"start"},tags:["!dev"],render:({})=>e.createElement("div",{style:{height:"230px"}},e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],open:!0,overlayConfig:{flip:!1}},e.createElement(u,{placeholder:"Combobox"}),e.createElement(b,{createPortal:!1})))},te={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,null),e.createElement(b,null))},ae={tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,{placeholder:"Combobox"}),e.createElement(b,null))},le={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,{clearable:!0,placeholder:"Combobox"}),e.createElement(b,null))},re={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{customFilter:(n,a)=>{const o=n.split("").reverse().join("");return new RegExp(`^${a}`,"i").test(o)},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,{placeholder:"Search from right to left in each word"}),e.createElement(b,null))},se={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,{placeholder:"Combobox"}),e.createElement(b,null))},ie={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{defaultValue:["parrot"],items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},e.createElement(u,{placeholder:"Combobox"}),e.createElement(b,null))},me={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},e.createElement(u,{placeholder:"Combobox"}),e.createElement(b,null))},be={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(Fe,null,e.createElement(Se,null,"Combobox"),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(u,null),e.createElement(b,null)))},ue={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(u,null),e.createElement(b,null))},ce={globals:{imports:`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Pe()}}},render:({})=>{const[n,a]=s.useState(["dog"]);return e.createElement(e.Fragment,null,e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:o=>a(o.value),value:n},e.createElement(u,{placeholder:"Select an animal"}),e.createElement(b,null)),e.createElement("div",{style:{marginTop:8}},e.createElement("strong",null,"Selected value:")," ",n[0]??"None"))}},de={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,null),e.createElement(b,null))},pe={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Pe()}}},render:({})=>{const n=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}];function a(o){var l,i;return e.createElement("span",{style:{color:(l=o.customRendererData)==null?void 0:l.color,fontWeight:"bold"}},o.label," ",((i=o.customRendererData)==null?void 0:i.info)&&e.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",o.customRendererData.info,")"))}return e.createElement(p,{customOptionRenderer:a,highlightResults:!0,items:n},e.createElement(u,null),e.createElement(b,null))}},ge={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[]},e.createElement(u,null),e.createElement(b,null))},fe={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,null),e.createElement(b,null))},ve={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(Fe,null,e.createElement(Se,null,"Favorite pet:"),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,null),e.createElement(b,null)))},Ce={globals:{imports:"import { INPUT_I18N, Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Pe()}}},render:({})=>e.createElement(Fe,null,e.createElement(Se,null,"Favorite pet:"),e.createElement(p,{i18n:{[an.clearButton]:"Clear favorite pet selection"},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(u,{clearable:!0}),e.createElement(b,null)))},he={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(u,{placeholder:"Default"}),e.createElement(b,{createPortal:!1})),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(u,{clearable:!0,placeholder:"Clearable"}),e.createElement(b,{createPortal:!1})),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(u,{loading:!0,placeholder:"Loading"}),e.createElement(b,{createPortal:!1})),e.createElement(p,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(u,{placeholder:"Disabled"}),e.createElement(b,{createPortal:!1})),e.createElement(p,{readOnly:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(u,{placeholder:"Read only"}),e.createElement(b,{createPortal:!1})),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}],multiple:!0},e.createElement(u,{placeholder:"Multiple"}),e.createElement(b,{createPortal:!1})))};var Ve,We,He;oe.parameters={...oe.parameters,docs:{...(Ve=oe.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
  }]} allowCustomValue={arg.allowCustomValue} disabled={arg.disabled} highlightResults={arg.highlightResults} invalid={arg.invalid} multiple={arg.multiple} newElementLabel={arg.newElementLabel} noResultLabel={arg.noResultLabel} readOnly={arg.readOnly}>
      <ComboboxControl clearable={arg.clearable} loading={arg.loading} placeholder={arg.placeholder} />

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
}`,...(He=(We=oe.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Be,Ue,Me;ne.parameters={...ne.parameters,docs:{...(Be=ne.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    layout: 'start'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    height: '230px'
  }}>
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
    }]} open overlayConfig={{
      flip: false
    }}>
        <ComboboxControl placeholder="Combobox" />

        <ComboboxContent createPortal={false} />
      </Combobox>
    </div>
}`,...(Me=(Ue=ne.parameters)==null?void 0:Ue.docs)==null?void 0:Me.source}}};var $e,Ye,Je;te.parameters={...te.parameters,docs:{...($e=te.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=te.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var ze,Xe,Ke;ae.parameters={...ae.parameters,docs:{...(ze=ae.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ke=(Xe=ae.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var Qe,Ze,eo;le.parameters={...le.parameters,docs:{...(Qe=le.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(eo=(Ze=le.parameters)==null?void 0:Ze.docs)==null?void 0:eo.source}}};var oo,no,to;re.parameters={...re.parameters,docs:{...(oo=re.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(to=(no=re.parameters)==null?void 0:no.docs)==null?void 0:to.source}}};var ao,lo,ro;se.parameters={...se.parameters,docs:{...(ao=se.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(ro=(lo=se.parameters)==null?void 0:lo.docs)==null?void 0:ro.source}}};var so,io,mo;ie.parameters={...ie.parameters,docs:{...(so=ie.parameters)==null?void 0:so.docs,source:{originalSource:`{
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
}`,...(mo=(io=ie.parameters)==null?void 0:io.docs)==null?void 0:mo.source}}};var bo,uo,co;me.parameters={...me.parameters,docs:{...(bo=me.parameters)==null?void 0:bo.docs,source:{originalSource:`{
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
}`,...(co=(uo=me.parameters)==null?void 0:uo.docs)==null?void 0:co.source}}};var po,go,fo;be.parameters={...be.parameters,docs:{...(po=be.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
}`,...(fo=(go=be.parameters)==null?void 0:go.docs)==null?void 0:fo.source}}};var vo,Co,ho;ue.parameters={...ue.parameters,docs:{...(vo=ue.parameters)==null?void 0:vo.docs,source:{originalSource:`{
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
}`,...(ho=(Co=ue.parameters)==null?void 0:Co.docs)==null?void 0:ho.source}}};var xo,yo,_o;ce.parameters={...ce.parameters,docs:{...(xo=ce.parameters)==null?void 0:xo.docs,source:{originalSource:`{
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
}`,...(_o=(yo=ce.parameters)==null?void 0:yo.docs)==null?void 0:_o.source}}};var To,Eo,wo;de.parameters={...de.parameters,docs:{...(To=de.parameters)==null?void 0:To.docs,source:{originalSource:`{
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
}`,...(wo=(Eo=de.parameters)==null?void 0:Eo.docs)==null?void 0:wo.source}}};var qo,Ro,Do;pe.parameters={...pe.parameters,docs:{...(qo=pe.parameters)==null?void 0:qo.docs,source:{originalSource:`{
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
}`,...(Do=(Ro=pe.parameters)==null?void 0:Ro.docs)==null?void 0:Do.source}}};var Io,Oo,ko;ge.parameters={...ge.parameters,docs:{...(Io=ge.parameters)==null?void 0:Io.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox items={[]}>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
}`,...(ko=(Oo=ge.parameters)==null?void 0:Oo.docs)==null?void 0:ko.source}}};var No,Fo,So;fe.parameters={...fe.parameters,docs:{...(No=fe.parameters)==null?void 0:No.docs,source:{originalSource:`{
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
}`,...(So=(Fo=fe.parameters)==null?void 0:Fo.docs)==null?void 0:So.source}}};var Po,Lo,Go;ve.parameters={...ve.parameters,docs:{...(Po=ve.parameters)==null?void 0:Po.docs,source:{originalSource:`{
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
}`,...(Go=(Lo=ve.parameters)==null?void 0:Lo.docs)==null?void 0:Go.source}}};var jo,Ao,Vo;Ce.parameters={...Ce.parameters,docs:{...(jo=Ce.parameters)==null?void 0:jo.docs,source:{originalSource:`{
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
}`,...(Vo=(Ao=Ce.parameters)==null?void 0:Ao.docs)==null?void 0:Vo.source}}};var Wo,Ho,Bo;he.parameters={...he.parameters,docs:{...(Wo=he.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
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
}`,...(Bo=(Ho=he.parameters)==null?void 0:Ho.docs)==null?void 0:Bo.source}}};const pn=["Demo","AnatomyTech","Default","Overview","Clearable","CustomFilter","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],In=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:ve,AccessibilityI18n:Ce,AnatomyTech:ne,Clearable:le,Controlled:ce,CustomFilter:re,CustomOptions:pe,Default:te,Demo:oe,Disabled:se,Empty:ge,Group:me,Highlight:de,InFormField:be,Invalid:ue,Multiple:fe,Overview:ae,Readonly:ie,ThemeGenerator:he,__namedExportsOrder:pn,default:dn},Symbol.toStringTag,{value:"Module"}));export{ve as A,In as C,te as D,ge as E,me as G,de as H,ue as I,fe as M,ae as O,ie as R,Ce as a,ne as b,le as c,se as d,ce as e,pe as f,re as g,be as h};
