import{r as i,e as n}from"./index-jIWwRBLr.js";import{j as b}from"./jsx-runtime-Cfl8ynUo.js";import{u as Do,F as qe,a as Ie}from"./FormFieldLabel-DW-nAxje.js";import{c as Po}from"./index-CPOqegBX.js";import{R as Go}from"./use-locale-context-BIV2aQtl.js";import{c as de}from"./index-CqY9YpN0.js";import{b as Ao,a as Vo}from"./PopoverTrigger-DrWuZNFw.js";import{a as be}from"./overlay-CZHjGBMC.js";import{I as jo,a as Ho}from"./icon-name-C581wThh.js";import{e as Wo}from"./element-3R7vFkDE.js";import{I as Bo,c as Mo}from"./Input-YvN7KzhF.js";import{T as Uo}from"./Tag-Bp5l-_LL.js";import{e as $o,o as Yo,C as R}from"./controls-BtiQQn1l.js";import{s as Oe}from"./source-CPEZJ6oD.js";function Jo(e){const a=Go(),o=e.locale??a.locale;return i.useMemo(()=>Po({...e,locale:o}),[o,e])}function zo(e,a,o,{allowCustomValue:t,filterFn:r,multiple:s,newElementLabel:h}){const T=t&&o.trim()!==""&&!Zo(e.concat(a),o,s)?[{isNewElement:!0,label:`${h}${o}`,value:o}]:[];function y(d,C,f,_){return _&&C.some(O=>O.value===d.value)?!1:r(d.label,f.trim())}return e.reduce((d,C)=>{if(ce(C)){const f=C.options.filter(_=>y(_,a,o,s));return f.length&&d.push({...C,options:f}),d}return y(C,a,o,s)&&d.push(C),d},T)}function ko(e,a){let o;return e.some(t=>{No(t,r=>r.value===a?(o=r,!0):!1)}),o}function Xo(e,a,o){if(a||!(o!=null&&o.length))return"";const t=ko(e,o[0]);return t?t.label:""}function Ko(e,a){return a!=null&&a.length?e.reduce((o,t)=>{if(ce(t)){const r=t.options.filter(s=>a.indexOf(s.value)>=0);return r.length&&(o=o.concat(r)),o}return a.indexOf(t.value)>=0&&o.push(t),o},[]):[]}function De(e,a,o){if(typeof e=="string")return Qo(e,a,o);if(i.isValidElement(e)){const t=i.Children.map(e.props.children,r=>De(r,a,o));return i.cloneElement(e,e.props,t)}return e}function Qo(e,a,o){return en(e,a).map((r,s)=>r.toLowerCase()===a?o({key:s,part:r}):r)}function Re(e){return!!e&&e.selectionStart===0&&e.selectionEnd===0}function ce(e){return"options"in e}function Zo(e,a,o){const t=a.trim().toLocaleLowerCase();return e.some(r=>No(r,s=>o?s.label.trim().toLocaleLowerCase()===t.toLocaleLowerCase()||s.value.trim().toLocaleLowerCase()===t.toLocaleLowerCase():s.label.trim().toLocaleLowerCase()===t.toLocaleLowerCase()))}function No(e,a){return ce(e)?e.options.some(a):a(e)}function en(e,a){if(!e||!a)return[e];const o=a.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),t=new RegExp(`(${o})`,"gi");return e.split(t)}De.__docgenInfo={description:"",methods:[],displayName:"highlightNode"};const Fo=i.createContext(void 0),So=({allowCustomValue:e,children:a,defaultValue:o,disabled:t,items:r,multiple:s=!1,newElementLabel:h,onInputValueChange:T,onValueChange:y,readOnly:d,value:C,...f})=>{const _=i.useMemo(()=>Xo(r,s,o||C),[]),O=i.useMemo(()=>Ko(r,o||C),[]),{contains:D}=Jo({sensitivity:"base"}),S=i.useCallback(D,[]),x=i.useId(),H=i.useRef(null),[W,V]=i.useState(""),[U,L]=i.useState(),[E,P]=i.useState(r),[k,m]=i.useState(""),[G,$]=i.useState(_),[q,pe]=i.useState(!1),[A,I]=i.useState(O),w=i.useMemo(()=>E.reduce((l,c)=>ce(c)?l.concat(c.options.map(B=>B.value)):(l.push(c.value),l),[]),[E]);i.useEffect(()=>{m(""),P(()=>!s&&G.trim()===""?r:zo(r,A,G,{allowCustomValue:e,filterFn:S,multiple:s,newElementLabel:h}))},[e,S,G,r,s,h,A]),i.useEffect(()=>{q||m("")},[q]);function xe(l){t||d||!s||(u(c=>c.filter(B=>B.value!==l.value)),Y())}function Y(){var l;(l=H.current)==null||l.focus()}function ye(){if(q||N(!0),k===""&&E.length)m(w[0]);else{const l=w.findIndex(c=>c===k);m(w[l<w.length-1?l+1:0])}}function _e(l){q&&m(l.value)}function Te(){if(q)if(k===""&&E.length)m(w[w.length-1]);else{const l=w.findIndex(c=>c===k);m(w[l>0?l-1:w.length-1])}}function we(){if(!k)return;const l=ko(E,k);l&&ge(l)}function ge(l){t||d||(s?(j(""),u(c=>{if(l.isNewElement){const{isNewElement:B,...Ee}=l;return c.concat([{...Ee,label:l.value}])}return c.concat([l])})):(j(l.isNewElement?l.value:l.label),u([l]),N(!1)),Y())}function j(l){const c=typeof l=="function"?l(G):l;$(c),T&&c!==G&&T({inputValue:c})}function N(l){pe(t||d?!1:l)}function u(l){const c=typeof l=="function"?l(A):l;if(I(c),y){const B=c.length?c.map(Ee=>Ee.value):[];y({value:B})}}return b.jsx(Fo.Provider,{value:{...f,allowCustomValue:e,contentId:W,contentPosition:U,controlId:x,defaultValue:o,deselectItem:xe,disabled:t,filteredItems:E,highlightNextOption:ye,highlightOption:_e,highlightPreviousOption:Te,highlightedOptionValue:k,inputRef:H,inputValue:G,isOpen:q,items:r,multiple:s,newElementLabel:h,onInputValueChange:T,onValueChange:y,readOnly:d,selectHighlightedItem:we,selectItem:ge,selection:A,setContentId:V,setContentPosition:L,setInputValue:j,setIsOpen:N,setSelection:u,value:C},children:a})};function he(){const e=i.useContext(Fo);if(!e)throw new Error("useCombobox must be used within a ComboboxProvider");return e}So.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const p=i.forwardRef(({allowCustomValue:e=!0,children:a,className:o,customOptionRenderer:t,defaultValue:r,disabled:s,highlightResults:h=!1,i18n:T,invalid:y,items:d,locale:C,multiple:f,name:_,newElementLabel:O="Add ",noResultLabel:D="No results found",onInputValueChange:S,onValueChange:x,readOnly:H,required:W,value:V,...U},L)=>{const E=Do(),P=y||(E==null?void 0:E.invalid);return b.jsx(So,{allowCustomValue:e,customOptionRenderer:t,defaultValue:r,disabled:s,highlightResults:h,i18n:T,invalid:P,items:d,locale:C,multiple:f,name:_,newElementLabel:O,noResultLabel:D,onInputValueChange:S,onValueChange:x,readOnly:H,required:W,value:V,children:b.jsx("div",{className:o,"data-ods":"combobox",ref:L,...U,children:a})})});p.displayName="Combobox";p.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const on={"combobox-highlight":"_combobox-highlight_1y4e6_2"},Lo=({children:e,highlight:a,inputValue:o})=>!a||!o?b.jsx(b.Fragment,{children:e}):b.jsx(b.Fragment,{children:De(e,o.toLowerCase(),({key:t,part:r})=>b.jsx("span",{className:on["combobox-highlight"],children:r},t))});Lo.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""}}};const M={"combobox-option":"_combobox-option_6dh73_2","combobox-option--disabled":"_combobox-option--disabled_6dh73_12","combobox-option--highlighted":"_combobox-option--highlighted_6dh73_18","combobox-option--new":"_combobox-option--new_6dh73_21","combobox-option--selected":"_combobox-option--selected_6dh73_24","combobox-option__new-item":"_combobox-option__new-item_6dh73_27"},fe=({className:e,isHighlighted:a,item:o,...t})=>{const{customOptionRenderer:r,disabled:s,highlightOption:h,highlightResults:T,inputValue:y,selection:d,selectItem:C}=he();function f(){s||C(o)}return b.jsx("div",{"aria-selected":a,className:de(M["combobox-option"],{[M["combobox-option--disabled"]]:s},{[M["combobox-option--highlighted"]]:a},{[M["combobox-option--new"]]:o.isNewElement},{[M["combobox-option--selected"]]:d.some(_=>_.value===o.value)},e),onClick:f,onPointerEnter:()=>h(o),role:"option",tabIndex:-1,...t,children:o.isNewElement?b.jsxs("div",{className:M["combobox-option__new-item"],children:[b.jsx(jo,{name:Ho.plus})," ",o.label]}):b.jsx(Lo,{highlight:T,inputValue:y,children:r?r(o):o.label})})};fe.displayName="ComboboxOption";fe.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const ve={"combobox-group":"_combobox-group_1f16m_2","combobox-group__label":"_combobox-group__label_1f16m_8","combobox-group__label--disabled":"_combobox-group__label--disabled_1f16m_16","combobox-group__option":"_combobox-group__option_1f16m_22"},ke=({className:e,item:a,...o})=>{const t=i.useId(),{disabled:r,highlightedOptionValue:s}=he();return b.jsxs("div",{"aria-labelledby":t,className:ve["combobox-group"],role:"group",...o,children:[b.jsx("div",{className:de(ve["combobox-group__label"],{[ve["combobox-group__label--disabled"]]:r}),id:t,role:"presentation",children:a.label}),a.options.map(h=>b.jsx(fe,{className:ve["combobox-group__option"],isHighlighted:s===h.value,item:h},h.value))]})};ke.displayName="ComboboxGroup";ke.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const Ce={"combobox-content":"_combobox-content_isu4g_2","combobox-content--open-bottom":"_combobox-content--open-bottom_isu4g_11","combobox-content--open-top":"_combobox-content--open-top_isu4g_14","combobox-content__empty":"_combobox-content__empty_isu4g_17"},g=i.forwardRef(({className:e,createPortal:a=!0,id:o,...t},r)=>{const{contentPosition:s,controlId:h,filteredItems:T,highlightedOptionValue:y,isOpen:d,noResultLabel:C,setContentId:f,setContentPosition:_}=he(),O=i.useId(),D=i.useMemo(()=>o??O,[O,o]);i.useEffect(()=>{f(D)},[D,f]);function S({position:x}){_(x)}return b.jsx(Ao,{autoFocus:!1,gutter:-1,onPositionChange:S,open:d,position:be.bottom,sameWidth:!0,triggerId:h,children:b.jsxs(Vo,{className:de(Ce["combobox-content"],{[Ce["combobox-content--open-bottom"]]:s===be.bottom},{[Ce["combobox-content--open-top"]]:s===be.top},e),createPortal:a,"data-ods":"combobox-content",id:D,ref:r,...t,role:"listbox",children:[T.length===0&&b.jsx("div",{className:Ce["combobox-content__empty"],children:C}),T.map(x=>ce(x)?b.jsx(ke,{item:x},x.label):b.jsx(fe,{id:`${h}-${x.value}`,isHighlighted:y===x.value,item:x},x.value))]})})});g.displayName="ComboboxContent";g.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const F={"combobox-control":"_combobox-control_14h0r_2","combobox-control--invalid":"_combobox-control--invalid_14h0r_16","combobox-control--disabled":"_combobox-control--disabled_14h0r_16","combobox-control--read-only":"_combobox-control--read-only_14h0r_16","combobox-control--focused":"_combobox-control--focused_14h0r_19","combobox-control--open-bottom":"_combobox-control--open-bottom_14h0r_35","combobox-control--open-top":"_combobox-control--open-top_14h0r_38","combobox-control__tag--focused":"_combobox-control__tag--focused_14h0r_45","combobox-control__input":"_combobox-control__input_14h0r_49"},v=i.forwardRef(({className:e,clearable:a,id:o,loading:t,placeholder:r,...s},h)=>{const{contentId:T,contentPosition:y,controlId:d,deselectItem:C,disabled:f,highlightedOptionValue:_,highlightNextOption:O,highlightPreviousOption:D,i18n:S,inputRef:x,inputValue:H,invalid:W,isOpen:V,locale:U,multiple:L,name:E,readOnly:P,required:k,selection:m,selectHighlightedItem:G,setInputValue:$,setIsOpen:q,setSelection:pe}=he(),A=Do(),[I,w]=i.useState(-1),[xe,Y]=i.useState(!1),ye=!f&&!P;function _e(){!m.length||I<0||(I>=m.length-1?N():w(u=>Math.min(u+1,m.length-1)))}function Te(){m.length&&(I<0?w(m.length-1):w(u=>Math.max(0,u-1)))}function we(u){Wo(u.relatedTarget,"data-ods",["combobox-content","combobox-control"])||(L||(m.length?$(m[0].isNewElement?m[0].value:m[0].label):$("")),N(),Y(!1),q(!1))}function ge(u){switch(u.key){case"ArrowDown":u.preventDefault(),O();break;case"ArrowLeft":Re(x.current)&&(u.preventDefault(),Te());break;case"ArrowRight":I>=0&&Re(x.current)&&(u.preventDefault(),_e());break;case"ArrowUp":u.preventDefault(),D();break;case"Backspace":m.length&&Re(x.current)&&j(m[I>=0?I:m.length-1]);break;case"Enter":if(m.length&&I>=0){u.preventDefault(),j(m[I]);break}_&&(u.preventDefault(),G());break;case"Escape":u.preventDefault(),N(),q(!1);break}}function j(u){N(),C(u)}function N(){w(-1)}return b.jsxs("div",{className:de(F["combobox-control"],{[F["combobox-control--disabled"]]:f},{[F["combobox-control--invalid"]]:W},{[F["combobox-control--focused"]]:xe},{[F["combobox-control--open-bottom"]]:V&&y===be.bottom},{[F["combobox-control--open-top"]]:V&&y===be.top},{[F["combobox-control--read-only"]]:P},e),"data-ods":"combobox-control",id:d,onBlur:we,ref:h,...s,children:[L&&m.map((u,l)=>b.jsx(Uo,{className:de({[F["combobox-control__tag--focused"]]:ye&&I===l}),disabled:f||P,onClick:()=>j(u),tabIndex:-1,value:u.value,children:u.label},u.value)),b.jsx(Bo,{"aria-activedescendant":_?`${d}-${_}`:"","aria-autocomplete":"list","aria-controls":T,"aria-expanded":V?"true":"false",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:F["combobox-control__input"],clearable:a,disabled:f,i18n:S,id:o||(A==null?void 0:A.id),invalid:W,loading:t,locale:U,onChange:u=>{N(),$(u.target.value),q(!0)},onClear:()=>!L&&pe([]),onClick:()=>q(!0),onFocus:()=>Y(!0),onKeyDown:ge,name:E,placeholder:r,readOnly:P,ref:x,required:L?!1:k,role:"combobox",spellCheck:"false",value:H})]})});v.displayName="ComboboxControl";v.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const nn={argTypes:$o(["customOptionRenderer","defaultValue","i18n","items","locale","name","onInputValueChange","onValueChange","required","value"]),component:p,subcomponents:{ComboboxContent:g,ComboboxControl:v},title:"React Components/Combobox"},J={render:e=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:e.allowCustomValue,defaultValue:e.defaultValue,disabled:e.disabled,highlightResults:e.highlightResults,invalid:e.invalid,multiple:e.multiple,newElementLabel:e.newElementLabel,noResultLabel:e.noResultLabel,readOnly:e.readOnly},n.createElement(v,{clearable:e.clearable,placeholder:e.placeholder,loading:e.loading}),n.createElement(g,null)),argTypes:Yo({allowCustomValue:{table:{category:R.general},control:"boolean"},clearable:{table:{category:R.general,type:{summary:"boolean"}},control:"boolean"},defaultValue:{table:{category:R.general},control:"text"},disabled:{table:{category:R.general},control:"boolean"},highlightResults:{table:{category:R.general},control:"boolean"},invalid:{table:{category:R.general},control:"boolean"},loading:{table:{category:R.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:R.general},control:"boolean"},newElementLabel:{table:{category:R.general},control:"text"},noResultLabel:{table:{category:R.general},control:"text"},placeholder:{table:{category:R.general},control:"text"},readOnly:{table:{category:R.general},control:"boolean"}}),args:{placeholder:"Start typing"}},z={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null))},X={tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},K={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{clearable:!0,placeholder:"Combobox"}),n.createElement(g,null))},Q={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},Z={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{defaultValue:["parrot"],items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},ee={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},n.createElement(v,{placeholder:"Combobox"}),n.createElement(g,null))},oe={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(qe,null,n.createElement(Ie,null,"Combobox"),n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},n.createElement(v,null),n.createElement(g,null)))},ne={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},n.createElement(v,null),n.createElement(g,null))},ae={globals:{imports:`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Oe()}}},render:({})=>{const[e,a]=i.useState(["dog"]);return n.createElement(n.Fragment,null,n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:o=>a(o.value),value:e},n.createElement(v,{placeholder:"Select an animal"}),n.createElement(g,null)),n.createElement("div",{style:{marginTop:8}},n.createElement("strong",null,"Selected value:")," ",e[0]??"None"))}},te={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null))},le={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Oe()}}},render:({})=>{const e=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}];function a(o){var t,r;return n.createElement("span",{style:{color:(t=o.customRendererData)==null?void 0:t.color,fontWeight:"bold"}},o.label," ",((r=o.customRendererData)==null?void 0:r.info)&&n.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",o.customRendererData.info,")"))}return n.createElement(p,{customOptionRenderer:a,highlightResults:!0,items:e},n.createElement(v,null),n.createElement(g,null))}},re={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[]},n.createElement(v,null),n.createElement(g,null))},se={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null))},ie={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster",disabled:!0},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{placeholder:"Please select"}),n.createElement(g,null))},ue={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>n.createElement(qe,null,n.createElement(Ie,null,"Favorite pet:"),n.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,null),n.createElement(g,null)))},me={globals:{imports:"import { INPUT_I18N, Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Oe()}}},render:({})=>n.createElement(qe,null,n.createElement(Ie,null,"Favorite pet:"),n.createElement(p,{i18n:{[Mo.clearButton]:"Clear favorite pet selection"},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(v,{clearable:!0}),n.createElement(g,null)))};var Ne,Fe,Se;J.parameters={...J.parameters,docs:{...(Ne=J.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Se=(Fe=J.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var Le,Pe,Ge;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ge=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Ge.source}}};var Ae,Ve,je;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(je=(Ve=X.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var He,We,Be;K.parameters={...K.parameters,docs:{...(He=K.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Be=(We=K.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var Me,Ue,$e;Q.parameters={...Q.parameters,docs:{...(Me=Q.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...($e=(Ue=Q.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Ye,Je,ze;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(ze=(Je=Z.parameters)==null?void 0:Je.docs)==null?void 0:ze.source}}};var Xe,Ke,Qe;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=ee.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ze,eo,oo;oe.parameters={...oe.parameters,docs:{...(Ze=oe.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(oo=(eo=oe.parameters)==null?void 0:eo.docs)==null?void 0:oo.source}}};var no,ao,to;ne.parameters={...ne.parameters,docs:{...(no=ne.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(to=(ao=ne.parameters)==null?void 0:ao.docs)==null?void 0:to.source}}};var lo,ro,so;ae.parameters={...ae.parameters,docs:{...(lo=ae.parameters)==null?void 0:lo.docs,source:{originalSource:`{
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
}`,...(so=(ro=ae.parameters)==null?void 0:ro.docs)==null?void 0:so.source}}};var io,uo,mo;te.parameters={...te.parameters,docs:{...(io=te.parameters)==null?void 0:io.docs,source:{originalSource:`{
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
}`,...(mo=(uo=te.parameters)==null?void 0:uo.docs)==null?void 0:mo.source}}};var bo,co,po;le.parameters={...le.parameters,docs:{...(bo=le.parameters)==null?void 0:bo.docs,source:{originalSource:`{
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
}`,...(po=(co=le.parameters)==null?void 0:co.docs)==null?void 0:po.source}}};var go,vo,Co;re.parameters={...re.parameters,docs:{...(go=re.parameters)==null?void 0:go.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox items={[]}>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
}`,...(Co=(vo=re.parameters)==null?void 0:vo.docs)==null?void 0:Co.source}}};var ho,fo,xo;se.parameters={...se.parameters,docs:{...(ho=se.parameters)==null?void 0:ho.docs,source:{originalSource:`{
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
}`,...(xo=(fo=se.parameters)==null?void 0:fo.docs)==null?void 0:xo.source}}};var yo,_o,To;ie.parameters={...ie.parameters,docs:{...(yo=ie.parameters)==null?void 0:yo.docs,source:{originalSource:`{
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
}`,...(To=(_o=ie.parameters)==null?void 0:_o.docs)==null?void 0:To.source}}};var wo,Eo,Ro;ue.parameters={...ue.parameters,docs:{...(wo=ue.parameters)==null?void 0:wo.docs,source:{originalSource:`{
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
}`,...(Ro=(Eo=ue.parameters)==null?void 0:Eo.docs)==null?void 0:Ro.source}}};var qo,Io,Oo;me.parameters={...me.parameters,docs:{...(qo=me.parameters)==null?void 0:qo.docs,source:{originalSource:`{
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
}`,...(Oo=(Io=me.parameters)==null?void 0:Io.docs)==null?void 0:Oo.source}}};const an=["Demo","Default","Overview","Clearable","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","Placeholder","AccessibilityFormField","AccessibilityI18n"],fn=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:ue,AccessibilityI18n:me,Clearable:K,Controlled:ae,CustomOptions:le,Default:z,Demo:J,Disabled:Q,Empty:re,Group:ee,Highlight:te,InFormField:oe,Invalid:ne,Multiple:se,Overview:X,Placeholder:ie,Readonly:Z,__namedExportsOrder:an,default:nn},Symbol.toStringTag,{value:"Module"}));export{ue as A,fn as C,z as D,re as E,ee as G,te as H,ne as I,se as M,X as O,Z as R,me as a,K as b,Q as c,ae as d,le as e,oe as f};
