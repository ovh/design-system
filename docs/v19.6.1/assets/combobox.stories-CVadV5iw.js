import{r as s,e}from"./index-jIWwRBLr.js";import{j as u}from"./jsx-runtime-Cfl8ynUo.js";import{u as Go,F as De,a as Oe}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{u as Mo}from"./context-C_-r2uoG.js";import{c as Uo}from"./index-CPOqegBX.js";import{$ as Yo}from"./use-locale-context-zjr1Qdvk.js";import{c as W}from"./index-CqY9YpN0.js";import{b as Jo,a as zo}from"./PopoverTrigger-9Mo2d56I.js";import{a as Ce}from"./overlay-CZHjGBMC.js";import{I as Vo,a as jo}from"./icon-name-DsSs6qF8.js";import{e as Se}from"./element-3R7vFkDE.js";import{I as Xo,c as Ko}from"./Input-DA8_WQMf.js";import{T as Qo}from"./Tag-DT-1jNFv.js";import{e as Zo,o as en,C as D}from"./controls-BtiQQn1l.js";import{s as Ne}from"./source-CPEZJ6oD.js";function on(o){const t=Yo(),n=o.locale??t.locale;return s.useMemo(()=>Uo({...o,locale:n}),[n,o])}function nn(o,t,n,{allowCustomValue:l,filterFn:r,multiple:i,newElementLabel:g}){const x=l&&n.trim()!==""&&!ln(o.concat(t),n,i)?[{isNewElement:!0,label:`${g}${n}`,value:n}]:[];function _(f,h,p,y){return y&&h.some(O=>O.value===f.value)?!1:r(f.label,p.trim())}return o.reduce((f,h)=>{if(ve(h)){const p=h.options.filter(y=>_(y,t,n,i));return p.length&&f.push({...h,options:p}),f}return _(h,t,n,i)&&f.push(h),f},x)}function Ao(o,t){let n;return o.some(l=>{Ho(l,r=>r.value===t?(n=r,!0):!1)}),n}function tn(o,t,n){if(t||!(n!=null&&n.length))return"";const l=Ao(o,n[0]);return l?l.label:""}function Le(o,t){return t!=null&&t.length?o.reduce((n,l)=>{if(ve(l)){const r=l.options.filter(i=>t.indexOf(i.value)>=0);return r.length&&(n=n.concat(r)),n}return t.indexOf(l.value)>=0&&n.push(l),n},[]):[]}function Fe(o,t,n){if(typeof o=="string")return an(o,t,n);if(s.isValidElement(o)){const l=s.Children.map(o.props.children,r=>Fe(r,t,n));return s.cloneElement(o,o.props,l)}return o}function an(o,t,n){return rn(o,t).map((r,i)=>r.toLowerCase()===t?n({key:i,part:r}):r)}function Ie(o){return!!o&&o.selectionStart===0&&o.selectionEnd===0}function ve(o){return"options"in o}function ln(o,t,n){const l=t.trim().toLocaleLowerCase();return o.some(r=>Ho(r,i=>n?i.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()||i.value.trim().toLocaleLowerCase()===l.toLocaleLowerCase():i.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()))}function Ho(o,t){return ve(o)?o.options.some(t):t(o)}function rn(o,t){if(!o||!t)return[o];const n=t.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),l=new RegExp(`(${n})`,"gi");return o.split(l)}Fe.__docgenInfo={description:"",methods:[],displayName:"highlightNode"};const Wo=s.createContext(void 0),Bo=({allowCustomValue:o,children:t,customFilter:n,defaultValue:l,disabled:r,items:i,multiple:g=!1,newElementLabel:x,onInputValueChange:_,onValueChange:f,readOnly:h,value:p,...y})=>{const O=s.useMemo(()=>tn(i,g,l||p),[]),P=s.useMemo(()=>Le(i,l||p),[]),{contains:S}=on({sensitivity:"base"}),q=s.useCallback((a,v)=>n?n(a,v):S(a,v),[n]),E=s.useId(),H=s.useRef(null),[G,J]=s.useState(""),[V,z]=s.useState(),[T,X]=s.useState(i),[C,L]=s.useState(""),[k,B]=s.useState(O),[j,$]=s.useState(!1),[w,A]=s.useState(P),N=s.useMemo(()=>T.reduce((a,v)=>ve(v)?a.concat(v.options.map(U=>U.value)):(a.push(v.value),a),[]),[T]);s.useEffect(()=>{L(""),X(()=>!g&&k.trim()===""?i:nn(i,w,k,{allowCustomValue:o,filterFn:q,multiple:g,newElementLabel:x}))},[o,q,k,i,g,x,w]),s.useEffect(()=>{j||L("")},[j]),s.useEffect(()=>{const a=Le(i,p);a.length&&(g?(F(""),A(a)):(F(a[0].label),A([a[0]])))},[p]);function fe(a){r||h||!g||(I(v=>v.filter(U=>U.value!==a.value)),he())}function he(){var a;(a=H.current)==null||a.focus()}function Ee(){if(j||m(!0),C===""&&T.length)L(N[0]);else{const a=N.findIndex(v=>v===C);L(N[a<N.length-1?a+1:0])}}function Te(a){j&&L(a.value)}function we(){if(j)if(C===""&&T.length)L(N[N.length-1]);else{const a=N.findIndex(v=>v===C);L(N[a>0?a-1:N.length-1])}}function Re(){if(!C)return;const a=Ao(T,C);a&&M(a)}function M(a){r||h||(g?(F(""),I(v=>{if(a.isNewElement){const{isNewElement:U,...qe}=a;return v.concat([{...qe,label:a.value}])}return v.concat([a])})):(F(a.isNewElement?a.value:a.label),I([a]),m(!1)),he())}function F(a){const v=typeof a=="function"?a(k):a;B(v),_&&v!==k&&_({inputValue:v})}function m(a){$(r||h?!1:a)}function I(a){const v=typeof a=="function"?a(w):a;if(A(v),f){const U=v.length?v.map(qe=>qe.value):[];f({value:U})}}return u.jsx(Wo.Provider,{value:{...y,allowCustomValue:o,contentId:G,contentPosition:V,controlId:E,defaultValue:l,deselectItem:fe,disabled:r,filteredItems:T,highlightNextOption:Ee,highlightOption:Te,highlightPreviousOption:we,highlightedOptionValue:C,inputRef:H,inputValue:k,isOpen:j,items:i,multiple:g,newElementLabel:x,onInputValueChange:_,onValueChange:f,readOnly:h,selectHighlightedItem:Re,selectItem:M,selection:w,setContentId:J,setContentPosition:z,setInputValue:F,setIsOpen:m,setSelection:I,value:p},children:t})};function ye(){return Mo(Wo)}Bo.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed.",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add."},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value."},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const b=s.forwardRef(({allowCustomValue:o=!0,children:t,className:n,customFilter:l,customOptionRenderer:r,defaultValue:i,disabled:g,highlightResults:x=!1,i18n:_,invalid:f,items:h,locale:p,multiple:y,name:O,newElementLabel:P="Add ",noResultLabel:S="No results found",onInputValueChange:q,onValueChange:E,readOnly:H,required:G,value:J,...V},z)=>{const T=Go(),X=f||(T==null?void 0:T.invalid);return u.jsx(Bo,{allowCustomValue:o,customFilter:l,customOptionRenderer:r,defaultValue:i,disabled:g,highlightResults:x,i18n:_,invalid:X,items:h,locale:p,multiple:y,name:O,newElementLabel:P,noResultLabel:S,onInputValueChange:q,onValueChange:E,readOnly:H,required:G,value:J,children:u.jsx("div",{className:n,"data-ods":"combobox",ref:z,...V,children:t})})});b.displayName="Combobox";b.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]},name:"item"}],return:{name:"JSX.Element"}}},description:"Custom render for each option item."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items.",defaultValue:{value:"false",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"ComboboxItem[]"},description:"The list of items"},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether the multiple selection is allowed."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom new value to add.",defaultValue:{value:"'Add '",computed:!1}},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value.",defaultValue:{value:"'No results found'",computed:!1}},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboboxValueChangeDetails) => void",signature:{arguments:[{type:{name:"ComboboxValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:`Whether the component is required.
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const sn={"combobox-highlight":"_combobox-highlight_1y4e6_2"},$o=({children:o,highlight:t,inputValue:n})=>!t||!n?u.jsx(u.Fragment,{children:o}):u.jsx(u.Fragment,{children:Fe(o,n.toLowerCase(),({key:l,part:r})=>u.jsx("span",{className:sn["combobox-highlight"],children:r},l))});$o.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""}}};const Y={"combobox-option":"_combobox-option_10qpo_2","combobox-option--disabled":"_combobox-option--disabled_10qpo_12","combobox-option--highlighted":"_combobox-option--highlighted_10qpo_18","combobox-option--new":"_combobox-option--new_10qpo_21","combobox-option--selected":"_combobox-option--selected_10qpo_24","combobox-option__new-item":"_combobox-option__new-item_10qpo_27"},_e=({className:o,isHighlighted:t,item:n,...l})=>{const{customOptionRenderer:r,disabled:i,highlightOption:g,highlightResults:x,inputValue:_,selection:f,selectItem:h}=ye(),p=s.useRef(null);s.useEffect(()=>{p.current&&t&&p.current.scrollIntoView({block:"nearest"})},[t,p]);function y(){i||h(n)}return u.jsx("div",{"aria-selected":t,className:W(Y["combobox-option"],{[Y["combobox-option--disabled"]]:i},{[Y["combobox-option--highlighted"]]:t},{[Y["combobox-option--new"]]:n.isNewElement},{[Y["combobox-option--selected"]]:f.some(O=>O.value===n.value)},o),onClick:y,onPointerEnter:()=>g(n),ref:p,role:"option",tabIndex:-1,...l,children:n.isNewElement?u.jsxs("div",{className:Y["combobox-option__new-item"],children:[u.jsx(Vo,{name:jo.plus})," ",n.label]}):u.jsx($o,{highlight:x,inputValue:_,children:r?r(n):n.label})})};_e.displayName="ComboboxOption";_e.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const xe={"combobox-group":"_combobox-group_38ufa_2","combobox-group__label":"_combobox-group__label_38ufa_8","combobox-group__label--disabled":"_combobox-group__label--disabled_38ufa_16","combobox-group__option":"_combobox-group__option_38ufa_22"},ke=({className:o,item:t,...n})=>{const l=s.useId(),{disabled:r,highlightedOptionValue:i}=ye();return u.jsxs("div",{"aria-labelledby":l,className:xe["combobox-group"],role:"group",...n,children:[u.jsx("div",{className:W(xe["combobox-group__label"],{[xe["combobox-group__label--disabled"]]:r}),id:l,role:"presentation",children:t.label}),t.options.map(g=>u.jsx(_e,{className:xe["combobox-group__option"],isHighlighted:i===g.value,item:g},g.value))]})};ke.displayName="ComboboxGroup";ke.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const K={"combobox-content":"_combobox-content_1uuvg_2","combobox-content--invalid":"_combobox-content--invalid_1uuvg_13","combobox-content--open-bottom":"_combobox-content--open-bottom_1uuvg_16","combobox-content--open-top":"_combobox-content--open-top_1uuvg_19","combobox-content__empty":"_combobox-content__empty_1uuvg_22"},c=s.forwardRef(({className:o,createPortal:t=!0,id:n,...l},r)=>{const{contentPosition:i,controlId:g,filteredItems:x,highlightedOptionValue:_,isOpen:f,invalid:h,noResultLabel:p,setContentId:y,setContentPosition:O}=ye(),P=s.useId(),S=s.useMemo(()=>n??P,[P,n]);s.useEffect(()=>{y(S)},[S,y]);function q({position:E}){O(E)}return u.jsx(Jo,{autoFocus:!1,gutter:-1,onPositionChange:q,open:f,position:Ce.bottom,sameWidth:!0,triggerId:g,children:u.jsxs(zo,{className:W(K["combobox-content"],{[K["combobox-content--invalid"]]:h},{[K["combobox-content--open-bottom"]]:i===Ce.bottom},{[K["combobox-content--open-top"]]:i===Ce.top},o),createPortal:t,"data-ods":"combobox-content",id:S,ref:r,...l,role:"listbox",children:[x.length===0&&u.jsx("div",{className:K["combobox-content__empty"],children:p}),x.map(E=>ve(E)?u.jsx(ke,{item:E},E.label):u.jsx(_e,{id:`${g}-${E.value}`,isHighlighted:_===E.value,item:E},E.value))]})})});c.displayName="ComboboxContent";c.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const R={"combobox-control":"_combobox-control_xpn1f_2","combobox-control--invalid":"_combobox-control--invalid_xpn1f_19","combobox-control--disabled":"_combobox-control--disabled_xpn1f_19","combobox-control--read-only":"_combobox-control--read-only_xpn1f_19","combobox-control--focused":"_combobox-control--focused_xpn1f_19","combobox-control--open-bottom":"_combobox-control--open-bottom_xpn1f_35","combobox-control--open-top":"_combobox-control--open-top_xpn1f_38","combobox-control__tag--focused":"_combobox-control__tag--focused_xpn1f_45","combobox-control__field":"_combobox-control__field_xpn1f_49","combobox-control__field__input":"_combobox-control__field__input_xpn1f_54","combobox-control__field__caret":"_combobox-control__field__caret_xpn1f_63","combobox-control__field__caret--disabled":"_combobox-control__field__caret--disabled_xpn1f_73","combobox-control__field__caret__icon":"_combobox-control__field__caret__icon_xpn1f_77","combobox-control__field__caret__icon--open":"_combobox-control__field__caret__icon--open_xpn1f_81"},d=s.forwardRef(({className:o,clearable:t,id:n,loading:l,placeholder:r,...i},g)=>{const{contentId:x,contentPosition:_,controlId:f,deselectItem:h,disabled:p,highlightedOptionValue:y,highlightNextOption:O,highlightPreviousOption:P,i18n:S,inputRef:q,inputValue:E,invalid:H,isOpen:G,locale:J,multiple:V,name:z,readOnly:T,required:X,selection:C,selectHighlightedItem:L,setInputValue:k,setIsOpen:B,setSelection:j}=ye(),$=Go(),[w,A]=s.useState(-1),[N,fe]=s.useState(!1),he=!p&&!T;function Ee(){!C.length||w<0||(w>=C.length-1?F():A(m=>Math.min(m+1,C.length-1)))}function Te(){C.length&&(w<0?A(C.length-1):A(m=>Math.max(0,m-1)))}function we(m){var I;((I=m.relatedTarget)==null?void 0:I.id)===x||Se(m.relatedTarget,"data-ods",["combobox-content","combobox-control"])&&Se(m.relatedTarget,"id",[x,f])||(V||(C.length?k(C[0].isNewElement?C[0].value:C[0].label):k("")),F(),fe(!1),B(!1))}function Re(m){switch(m.key){case"ArrowDown":m.preventDefault(),O();break;case"ArrowLeft":Ie(q.current)&&(m.preventDefault(),Te());break;case"ArrowRight":w>=0&&Ie(q.current)&&(m.preventDefault(),Ee());break;case"ArrowUp":m.preventDefault(),P();break;case"Backspace":C.length&&Ie(q.current)&&M(C[w>=0?w:C.length-1]);break;case"Enter":if(C.length&&w>=0){m.preventDefault(),M(C[w]);break}y&&(m.preventDefault(),L());break;case"Escape":m.preventDefault(),F(),B(!1);break}}function M(m){F(),h(m)}function F(){A(-1)}return u.jsxs("div",{className:W(R["combobox-control"],{[R["combobox-control--disabled"]]:p},{[R["combobox-control--invalid"]]:H},{[R["combobox-control--focused"]]:N},{[R["combobox-control--open-bottom"]]:G&&_===Ce.bottom},{[R["combobox-control--open-top"]]:G&&_===Ce.top},{[R["combobox-control--read-only"]]:T},o),"data-ods":"combobox-control",id:f,onBlur:we,ref:g,...i,children:[V&&C.map((m,I)=>u.jsx(Qo,{className:W({[R["combobox-control__tag--focused"]]:he&&w===I}),disabled:p||T,onClick:()=>M(m),tabIndex:-1,value:m.value,children:m.label},m.value)),u.jsxs("div",{className:R["combobox-control__field"],children:[u.jsx(Xo,{"aria-activedescendant":y?`${f}-${y}`:"","aria-autocomplete":"list","aria-controls":x,"aria-expanded":G?"true":"false",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:R["combobox-control__field__input"],clearable:t,disabled:p,i18n:S,id:n||($==null?void 0:$.id),invalid:H,loading:l,locale:J,onChange:m=>{F(),k(m.target.value),B(!0)},onClear:()=>!V&&j([]),onClick:()=>B(!0),onFocus:()=>fe(!0),onKeyDown:Re,name:z,placeholder:r,readOnly:T,ref:q,required:V?!1:X,role:"combobox",spellCheck:"false",value:E}),u.jsx("button",{"aria-hidden":"true",className:W(R["combobox-control__field__caret"],{[R["combobox-control__field__caret--disabled"]]:p}),onClick:()=>{var m,I;(m=q.current)==null||m.click(),(I=q.current)==null||I.focus()},tabIndex:-1,children:u.jsx(Vo,{className:W(R["combobox-control__field__caret__icon"],{[R["combobox-control__field__caret__icon--open"]]:G}),name:jo.chevronDown})})]})]})});d.displayName="ComboboxControl";d.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const mn={argTypes:Zo(["customFilter","customOptionRenderer","defaultValue","i18n","items","locale","name","onInputValueChange","onValueChange","required","value"]),component:b,subcomponents:{ComboboxContent:c,ComboboxControl:d},title:"React Components/Combobox"},Q={render:o=>e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:o.allowCustomValue,defaultValue:o.defaultValue,disabled:o.disabled,highlightResults:o.highlightResults,invalid:o.invalid,multiple:o.multiple,newElementLabel:o.newElementLabel,noResultLabel:o.noResultLabel,readOnly:o.readOnly},e.createElement(d,{clearable:o.clearable,placeholder:o.placeholder,loading:o.loading}),e.createElement(c,null)),argTypes:en({allowCustomValue:{table:{category:D.general},control:"boolean"},clearable:{table:{category:D.general,type:{summary:"boolean"}},control:"boolean"},defaultValue:{table:{category:D.general},control:"text"},disabled:{table:{category:D.general},control:"boolean"},highlightResults:{table:{category:D.general},control:"boolean"},invalid:{table:{category:D.general},control:"boolean"},loading:{table:{category:D.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:D.general},control:"boolean"},newElementLabel:{table:{category:D.general},control:"text"},noResultLabel:{table:{category:D.general},control:"text"},placeholder:{table:{category:D.general},control:"text"},readOnly:{table:{category:D.general},control:"boolean"}}),args:{placeholder:"Start typing"}},Z={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,null),e.createElement(c,null))},ee={tags:["!dev"],render:({})=>e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,{placeholder:"Combobox"}),e.createElement(c,null))},oe={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,{clearable:!0,placeholder:"Combobox"}),e.createElement(c,null))},ne={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{customFilter:(o,t)=>{const n=o.split("").reverse().join("");return new RegExp(`^${t}`,"i").test(n)},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,{placeholder:"Search from right to left in each word"}),e.createElement(c,null))},te={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,{placeholder:"Combobox"}),e.createElement(c,null))},ae={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{defaultValue:["parrot"],items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},e.createElement(d,{placeholder:"Combobox"}),e.createElement(c,null))},le={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},e.createElement(d,{placeholder:"Combobox"}),e.createElement(c,null))},re={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(De,null,e.createElement(Oe,null,"Combobox"),e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(d,null),e.createElement(c,null)))},se={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(d,null),e.createElement(c,null))},ie={globals:{imports:`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>{const[o,t]=s.useState(["dog"]);return e.createElement(e.Fragment,null,e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:n=>t(n.value),value:o},e.createElement(d,{placeholder:"Select an animal"}),e.createElement(c,null)),e.createElement("div",{style:{marginTop:8}},e.createElement("strong",null,"Selected value:")," ",o[0]??"None"))}},me={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,null),e.createElement(c,null))},ue={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>{const o=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}];function t(n){var l,r;return e.createElement("span",{style:{color:(l=n.customRendererData)==null?void 0:l.color,fontWeight:"bold"}},n.label," ",((r=n.customRendererData)==null?void 0:r.info)&&e.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",n.customRendererData.info,")"))}return e.createElement(b,{customOptionRenderer:t,highlightResults:!0,items:o},e.createElement(d,null),e.createElement(c,null))}},be={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{items:[]},e.createElement(d,null),e.createElement(c,null))},ce={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(b,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,null),e.createElement(c,null))},de={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(De,null,e.createElement(Oe,null,"Favorite pet:"),e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,null),e.createElement(c,null)))},pe={globals:{imports:"import { INPUT_I18N, Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>e.createElement(De,null,e.createElement(Oe,null,"Favorite pet:"),e.createElement(b,{i18n:{[Ko.clearButton]:"Clear favorite pet selection"},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(d,{clearable:!0}),e.createElement(c,null)))},ge={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(d,{placeholder:"Default"}),e.createElement(c,{createPortal:!1})),e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(d,{clearable:!0,placeholder:"Clearable"}),e.createElement(c,{createPortal:!1})),e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(d,{loading:!0,placeholder:"Loading"}),e.createElement(c,{createPortal:!1})),e.createElement(b,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(d,{placeholder:"Disabled"}),e.createElement(c,{createPortal:!1})),e.createElement(b,{readOnly:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(d,{placeholder:"Read only"}),e.createElement(c,{createPortal:!1})),e.createElement(b,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}],multiple:!0},e.createElement(d,{placeholder:"Multiple"}),e.createElement(c,{createPortal:!1})))};var Pe,Ge,Ve;Q.parameters={...Q.parameters,docs:{...(Pe=Q.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ve=(Ge=Q.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var je,Ae,He;Z.parameters={...Z.parameters,docs:{...(je=Z.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(He=(Ae=Z.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var We,Be,$e;ee.parameters={...ee.parameters,docs:{...(We=ee.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...($e=(Be=ee.parameters)==null?void 0:Be.docs)==null?void 0:$e.source}}};var Me,Ue,Ye;oe.parameters={...oe.parameters,docs:{...(Me=oe.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ye=(Ue=oe.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Je,ze,Xe;ne.parameters={...ne.parameters,docs:{...(Je=ne.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(ze=ne.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};var Ke,Qe,Ze;te.parameters={...te.parameters,docs:{...(Ke=te.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var eo,oo,no;ae.parameters={...ae.parameters,docs:{...(eo=ae.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(no=(oo=ae.parameters)==null?void 0:oo.docs)==null?void 0:no.source}}};var to,ao,lo;le.parameters={...le.parameters,docs:{...(to=le.parameters)==null?void 0:to.docs,source:{originalSource:`{
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
}`,...(lo=(ao=le.parameters)==null?void 0:ao.docs)==null?void 0:lo.source}}};var ro,so,io;re.parameters={...re.parameters,docs:{...(ro=re.parameters)==null?void 0:ro.docs,source:{originalSource:`{
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
}`,...(io=(so=re.parameters)==null?void 0:so.docs)==null?void 0:io.source}}};var mo,uo,bo;se.parameters={...se.parameters,docs:{...(mo=se.parameters)==null?void 0:mo.docs,source:{originalSource:`{
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
}`,...(bo=(uo=se.parameters)==null?void 0:uo.docs)==null?void 0:bo.source}}};var co,po,go;ie.parameters={...ie.parameters,docs:{...(co=ie.parameters)==null?void 0:co.docs,source:{originalSource:`{
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
}`,...(go=(po=ie.parameters)==null?void 0:po.docs)==null?void 0:go.source}}};var Co,vo,fo;me.parameters={...me.parameters,docs:{...(Co=me.parameters)==null?void 0:Co.docs,source:{originalSource:`{
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
}`,...(fo=(vo=me.parameters)==null?void 0:vo.docs)==null?void 0:fo.source}}};var ho,xo,yo;ue.parameters={...ue.parameters,docs:{...(ho=ue.parameters)==null?void 0:ho.docs,source:{originalSource:`{
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
}`,...(yo=(xo=ue.parameters)==null?void 0:xo.docs)==null?void 0:yo.source}}};var _o,Eo,To;be.parameters={...be.parameters,docs:{...(_o=be.parameters)==null?void 0:_o.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox items={[]}>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
}`,...(To=(Eo=be.parameters)==null?void 0:Eo.docs)==null?void 0:To.source}}};var wo,Ro,qo;ce.parameters={...ce.parameters,docs:{...(wo=ce.parameters)==null?void 0:wo.docs,source:{originalSource:`{
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
}`,...(qo=(Ro=ce.parameters)==null?void 0:Ro.docs)==null?void 0:qo.source}}};var Io,Do,Oo;de.parameters={...de.parameters,docs:{...(Io=de.parameters)==null?void 0:Io.docs,source:{originalSource:`{
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
}`,...(Oo=(Do=de.parameters)==null?void 0:Do.docs)==null?void 0:Oo.source}}};var No,Fo,ko;pe.parameters={...pe.parameters,docs:{...(No=pe.parameters)==null?void 0:No.docs,source:{originalSource:`{
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
}`,...(ko=(Fo=pe.parameters)==null?void 0:Fo.docs)==null?void 0:ko.source}}};var So,Lo,Po;ge.parameters={...ge.parameters,docs:{...(So=ge.parameters)==null?void 0:So.docs,source:{originalSource:`{
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
}`,...(Po=(Lo=ge.parameters)==null?void 0:Lo.docs)==null?void 0:Po.source}}};const un=["Demo","Default","Overview","Clearable","CustomFilter","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],Rn=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:de,AccessibilityI18n:pe,Clearable:oe,Controlled:ie,CustomFilter:ne,CustomOptions:ue,Default:Z,Demo:Q,Disabled:te,Empty:be,Group:le,Highlight:me,InFormField:re,Invalid:se,Multiple:ce,Overview:ee,Readonly:ae,ThemeGenerator:ge,__namedExportsOrder:un,default:mn},Symbol.toStringTag,{value:"Module"}));export{de as A,Rn as C,Z as D,be as E,le as G,me as H,se as I,ce as M,ee as O,ae as R,pe as a,oe as b,te as c,ie as d,ue as e,ne as f,re as g};
