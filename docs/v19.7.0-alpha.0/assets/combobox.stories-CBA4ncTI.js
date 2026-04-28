import{r as s,e}from"./index-jIWwRBLr.js";import{j as c}from"./jsx-runtime-Cfl8ynUo.js";import{u as jo,F as De,a as Oe}from"./index-DHp3jGT7.js";import{u as Uo}from"./context-C_-r2uoG.js";import{c as Yo}from"./index-CPOqegBX.js";import{$ as Jo}from"./use-locale-context-CCZDATm7.js";import{c as W}from"./index-CqY9YpN0.js";import{b as zo,a as Xo}from"./index-H96jH6jC.js";import{I as Vo,a as Ao}from"./icon-name-RfJfucZu.js";import{a as Ce}from"./overlay-CZHjGBMC.js";import{e as Le}from"./element-3R7vFkDE.js";import{I as Ko,c as Qo}from"./Input-DK0nnZkU.js";import{T as Zo}from"./Tag-Dpw8zK6W.js";import{e as en,o as on,C as D}from"./controls-BtiQQn1l.js";import{s as Ne}from"./source-CPEZJ6oD.js";function nn(o){const t=Jo(),n=o.locale??t.locale;return s.useMemo(()=>Yo({...o,locale:n}),[n,o])}function tn(o,t,n,{allowCustomValue:l,filterFn:r,multiple:i,newElementLabel:g}){const x=l&&n.trim()!==""&&!rn(o.concat(t),n,i)?[{isNewElement:!0,label:`${g}${n}`,value:n}]:[];function _(f,h,d,y){return y&&h.some(O=>O.value===f.value)?!1:r(f.label,d.trim())}return o.reduce((f,h)=>{if(ve(h)){const d=h.options.filter(y=>_(y,t,n,i));return d.length&&f.push({...h,options:d}),f}return _(h,t,n,i)&&f.push(h),f},x)}function Ho(o,t){let n;return o.some(l=>{Wo(l,r=>r.value===t?(n=r,!0):!1)}),n}function an(o,t,n){if(t||!(n!=null&&n.length))return"";const l=Ho(o,n[0]);return l?l.label:""}function Pe(o,t){return t!=null&&t.length?o.reduce((n,l)=>{if(ve(l)){const r=l.options.filter(i=>t.indexOf(i.value)>=0);return r.length&&(n=n.concat(r)),n}return t.indexOf(l.value)>=0&&n.push(l),n},[]):[]}function Fe(o,t,n){if(typeof o=="string")return ln(o,t,n);if(s.isValidElement(o)){const l=s.Children.map(o.props.children,r=>Fe(r,t,n));return s.cloneElement(o,o.props,l)}return o}function ln(o,t,n){return sn(o,t).map((r,i)=>r.toLowerCase()===t?n({key:i,part:r}):r)}function Ie(o){return!!o&&o.selectionStart===0&&o.selectionEnd===0}function ve(o){return"options"in o}function rn(o,t,n){const l=t.trim().toLocaleLowerCase();return o.some(r=>Wo(r,i=>n?i.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()||i.value.trim().toLocaleLowerCase()===l.toLocaleLowerCase():i.label.trim().toLocaleLowerCase()===l.toLocaleLowerCase()))}function Wo(o,t){return ve(o)?o.options.some(t):t(o)}function sn(o,t){if(!o||!t)return[o];const n=t.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),l=new RegExp(`(${n})`,"gi");return o.split(l)}Fe.__docgenInfo={description:"",methods:[],displayName:"highlightNode"};const Bo=s.createContext(void 0),$o=({allowCustomValue:o,children:t,customFilter:n,defaultValue:l,disabled:r,items:i,multiple:g=!1,newElementLabel:x,onInputValueChange:_,onValueChange:f,readOnly:h,value:d,...y})=>{const O=s.useMemo(()=>an(i,g,l||d),[]),P=s.useMemo(()=>Pe(i,l||d),[]),{contains:S}=nn({sensitivity:"base"}),q=s.useCallback((a,v)=>n?n(a,v):S(a,v),[n]),E=s.useId(),H=s.useRef(null),[G,J]=s.useState(""),[j,z]=s.useState(),[T,X]=s.useState(i),[C,L]=s.useState(""),[k,B]=s.useState(O),[V,$]=s.useState(!1),[w,A]=s.useState(P),N=s.useMemo(()=>T.reduce((a,v)=>ve(v)?a.concat(v.options.map(U=>U.value)):(a.push(v.value),a),[]),[T]);s.useEffect(()=>{L(""),X(()=>!g&&k.trim()===""?i:tn(i,w,k,{allowCustomValue:o,filterFn:q,multiple:g,newElementLabel:x}))},[o,q,k,i,g,x,w]),s.useEffect(()=>{V||L("")},[V]),s.useEffect(()=>{const a=Pe(i,d);a.length&&(g?(F(""),A(a)):(F(a[0].label),A([a[0]])))},[d]);function fe(a){r||h||!g||(I(v=>v.filter(U=>U.value!==a.value)),he())}function he(){var a;(a=H.current)==null||a.focus()}function Ee(){if(V||m(!0),C===""&&T.length)L(N[0]);else{const a=N.findIndex(v=>v===C);L(N[a<N.length-1?a+1:0])}}function Te(a){V&&L(a.value)}function we(){if(V)if(C===""&&T.length)L(N[N.length-1]);else{const a=N.findIndex(v=>v===C);L(N[a>0?a-1:N.length-1])}}function Re(){if(!C)return;const a=Ho(T,C);a&&M(a)}function M(a){r||h||(g?(F(""),I(v=>{if(a.isNewElement){const{isNewElement:U,...qe}=a;return v.concat([{...qe,label:a.value}])}return v.concat([a])})):(F(a.isNewElement?a.value:a.label),I([a]),m(!1)),he())}function F(a){const v=typeof a=="function"?a(k):a;B(v),_&&v!==k&&_({inputValue:v})}function m(a){$(r||h?!1:a)}function I(a){const v=typeof a=="function"?a(w):a;if(A(v),f){const U=v.length?v.map(qe=>qe.value):[];f({value:U})}}return c.jsx(Bo.Provider,{value:{...y,allowCustomValue:o,contentId:G,contentPosition:j,controlId:E,defaultValue:l,deselectItem:fe,disabled:r,filteredItems:T,highlightNextOption:Ee,highlightOption:Te,highlightPreviousOption:we,highlightedOptionValue:C,inputRef:H,inputValue:k,isOpen:V,items:i,multiple:g,newElementLabel:x,onInputValueChange:_,onValueChange:f,readOnly:h,selectHighlightedItem:Re,selectItem:M,selection:w,setContentId:J,setContentPosition:z,setInputValue:F,setIsOpen:m,setSelection:I,value:d},children:t})};function ye(){return Uo(Bo)}$o.__docgenInfo={description:"",methods:[],displayName:"ComboboxProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items."},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ke=s.forwardRef(({allowCustomValue:o=!0,children:t,className:n,customFilter:l,customOptionRenderer:r,defaultValue:i,disabled:g,highlightResults:x=!1,i18n:_,invalid:f,items:h,locale:d,multiple:y,name:O,newElementLabel:P="Add ",noResultLabel:S="No results found",onInputValueChange:q,onValueChange:E,readOnly:H,required:G,value:J,...j},z)=>{const T=jo(),X=f||(T==null?void 0:T.invalid);return c.jsx($o,{allowCustomValue:o,customFilter:l,customOptionRenderer:r,defaultValue:i,disabled:g,highlightResults:x,i18n:_,invalid:X,items:h,locale:d,multiple:y,name:O,newElementLabel:P,noResultLabel:S,onInputValueChange:q,onValueChange:E,readOnly:H,required:G,value:J,children:c.jsx("div",{className:n,"data-ods":"combobox",ref:z,...j,children:t})})});ke.displayName="Combobox";ke.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a value which is not part of the items.",defaultValue:{value:"true",computed:!1}},customFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, query: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"string"},name:"query"}],return:{name:"boolean"}}},description:"Custom filter logic to apply to each item."},customOptionRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ComboboxItem) => JSX.Element",signature:{arguments:[{type:{name:"union",raw:"ComboboxGroupItem<T> | ComboboxOptionItem<T>",elements:[{name:"signature",type:"object",raw:`{
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
/!\\ Only work for single selection mode for now.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled selected value(s)."}}};const mn={"combobox-highlight":"_combobox-highlight_1y4e6_2"},Mo=({children:o,highlight:t,inputValue:n})=>!t||!n?c.jsx(c.Fragment,{children:o}):c.jsx(c.Fragment,{children:Fe(o,n.toLowerCase(),({key:l,part:r})=>c.jsx("span",{className:mn["combobox-highlight"],children:r},l))});Mo.__docgenInfo={description:"",methods:[],displayName:"ComboboxHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""}}};const Y={"combobox-option":"_combobox-option_10qpo_2","combobox-option--disabled":"_combobox-option--disabled_10qpo_12","combobox-option--highlighted":"_combobox-option--highlighted_10qpo_18","combobox-option--new":"_combobox-option--new_10qpo_21","combobox-option--selected":"_combobox-option--selected_10qpo_24","combobox-option__new-item":"_combobox-option__new-item_10qpo_27"},_e=({className:o,isHighlighted:t,item:n,...l})=>{const{customOptionRenderer:r,disabled:i,highlightOption:g,highlightResults:x,inputValue:_,selection:f,selectItem:h}=ye(),d=s.useRef(null);s.useEffect(()=>{d.current&&t&&d.current.scrollIntoView({block:"nearest"})},[t,d]);function y(){i||h(n)}return c.jsx("div",{"aria-selected":t,className:W(Y["combobox-option"],{[Y["combobox-option--disabled"]]:i},{[Y["combobox-option--highlighted"]]:t},{[Y["combobox-option--new"]]:n.isNewElement},{[Y["combobox-option--selected"]]:f.some(O=>O.value===n.value)},o),onClick:y,onPointerEnter:()=>g(n),ref:d,role:"option",tabIndex:-1,...l,children:n.isNewElement?c.jsxs("div",{className:Y["combobox-option__new-item"],children:[c.jsx(Vo,{name:Ao.plus})," ",n.label]}):c.jsx(Mo,{highlight:x,inputValue:_,children:r?r(n):n.label})})};_e.displayName="ComboboxOption";_e.__docgenInfo={description:"",methods:[],displayName:"ComboboxOption",props:{isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  customRendererData?: T,
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const xe={"combobox-group":"_combobox-group_38ufa_2","combobox-group__label":"_combobox-group__label_38ufa_8","combobox-group__label--disabled":"_combobox-group__label--disabled_38ufa_16","combobox-group__option":"_combobox-group__option_38ufa_22"},Se=({className:o,item:t,...n})=>{const l=s.useId(),{disabled:r,highlightedOptionValue:i}=ye();return c.jsxs("div",{"aria-labelledby":l,className:xe["combobox-group"],role:"group",...n,children:[c.jsx("div",{className:W(xe["combobox-group__label"],{[xe["combobox-group__label--disabled"]]:r}),id:l,role:"presentation",children:t.label}),t.options.map(g=>c.jsx(_e,{className:xe["combobox-group__option"],isHighlighted:i===g.value,item:g},g.value))]})};Se.displayName="ComboboxGroup";Se.__docgenInfo={description:"",methods:[],displayName:"ComboboxGroup",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"customRendererData",value:{name:"T",required:!1}},{key:"group",value:{name:"string",required:!1}},{key:"isNewElement",value:{name:"boolean",required:!1},description:"@internal"},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOptionItem[]",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const K={"combobox-content":"_combobox-content_1uuvg_2","combobox-content--invalid":"_combobox-content--invalid_1uuvg_13","combobox-content--open-bottom":"_combobox-content--open-bottom_1uuvg_16","combobox-content--open-top":"_combobox-content--open-top_1uuvg_19","combobox-content__empty":"_combobox-content__empty_1uuvg_22"},u=s.forwardRef(({className:o,createPortal:t=!0,id:n,...l},r)=>{const{contentPosition:i,controlId:g,filteredItems:x,highlightedOptionValue:_,isOpen:f,invalid:h,noResultLabel:d,setContentId:y,setContentPosition:O}=ye(),P=s.useId(),S=s.useMemo(()=>n??P,[P,n]);s.useEffect(()=>{y(S)},[S,y]);function q({position:E}){O(E)}return c.jsx(zo,{autoFocus:!1,gutter:-1,onPositionChange:q,open:f,position:Ce.bottom,sameWidth:!0,triggerId:g,children:c.jsxs(Xo,{className:W(K["combobox-content"],{[K["combobox-content--invalid"]]:h},{[K["combobox-content--open-bottom"]]:i===Ce.bottom},{[K["combobox-content--open-top"]]:i===Ce.top},o),createPortal:t,"data-ods":"combobox-content",id:S,ref:r,...l,role:"listbox",children:[x.length===0&&c.jsx("div",{className:K["combobox-content__empty"],children:d}),x.map(E=>ve(E)?c.jsx(Se,{item:E},E.label):c.jsx(_e,{id:`${g}-${E.value}`,isHighlighted:_===E.value,item:E},E.value))]})})});u.displayName="ComboboxContent";u.__docgenInfo={description:"",methods:[],displayName:"ComboboxContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const R={"combobox-control":"_combobox-control_xpn1f_2","combobox-control--invalid":"_combobox-control--invalid_xpn1f_19","combobox-control--disabled":"_combobox-control--disabled_xpn1f_19","combobox-control--read-only":"_combobox-control--read-only_xpn1f_19","combobox-control--focused":"_combobox-control--focused_xpn1f_19","combobox-control--open-bottom":"_combobox-control--open-bottom_xpn1f_35","combobox-control--open-top":"_combobox-control--open-top_xpn1f_38","combobox-control__tag--focused":"_combobox-control__tag--focused_xpn1f_45","combobox-control__field":"_combobox-control__field_xpn1f_49","combobox-control__field__input":"_combobox-control__field__input_xpn1f_54","combobox-control__field__caret":"_combobox-control__field__caret_xpn1f_63","combobox-control__field__caret--disabled":"_combobox-control__field__caret--disabled_xpn1f_73","combobox-control__field__caret__icon":"_combobox-control__field__caret__icon_xpn1f_77","combobox-control__field__caret__icon--open":"_combobox-control__field__caret__icon--open_xpn1f_81"},b=s.forwardRef(({className:o,clearable:t,id:n,loading:l,placeholder:r,...i},g)=>{const{contentId:x,contentPosition:_,controlId:f,deselectItem:h,disabled:d,highlightedOptionValue:y,highlightNextOption:O,highlightPreviousOption:P,i18n:S,inputRef:q,inputValue:E,invalid:H,isOpen:G,locale:J,multiple:j,name:z,readOnly:T,required:X,selection:C,selectHighlightedItem:L,setInputValue:k,setIsOpen:B,setSelection:V}=ye(),$=jo(),[w,A]=s.useState(-1),[N,fe]=s.useState(!1),he=!d&&!T;function Ee(){!C.length||w<0||(w>=C.length-1?F():A(m=>Math.min(m+1,C.length-1)))}function Te(){C.length&&(w<0?A(C.length-1):A(m=>Math.max(0,m-1)))}function we(m){var I;((I=m.relatedTarget)==null?void 0:I.id)===x||Le(m.relatedTarget,"data-ods",["combobox-content","combobox-control"])&&Le(m.relatedTarget,"id",[x,f])||(j||(C.length?k(C[0].isNewElement?C[0].value:C[0].label):k("")),F(),fe(!1),B(!1))}function Re(m){switch(m.key){case"ArrowDown":m.preventDefault(),O();break;case"ArrowLeft":Ie(q.current)&&(m.preventDefault(),Te());break;case"ArrowRight":w>=0&&Ie(q.current)&&(m.preventDefault(),Ee());break;case"ArrowUp":m.preventDefault(),P();break;case"Backspace":C.length&&Ie(q.current)&&M(C[w>=0?w:C.length-1]);break;case"Enter":if(C.length&&w>=0){m.preventDefault(),M(C[w]);break}y&&(m.preventDefault(),L());break;case"Escape":m.preventDefault(),F(),B(!1);break}}function M(m){F(),h(m)}function F(){A(-1)}return c.jsxs("div",{className:W(R["combobox-control"],{[R["combobox-control--disabled"]]:d},{[R["combobox-control--invalid"]]:H},{[R["combobox-control--focused"]]:N},{[R["combobox-control--open-bottom"]]:G&&_===Ce.bottom},{[R["combobox-control--open-top"]]:G&&_===Ce.top},{[R["combobox-control--read-only"]]:T},o),"data-ods":"combobox-control",id:f,onBlur:we,ref:g,...i,children:[j&&C.map((m,I)=>c.jsx(Zo,{className:W({[R["combobox-control__tag--focused"]]:he&&w===I}),disabled:d||T,onClick:()=>M(m),tabIndex:-1,value:m.value,children:m.label},m.value)),c.jsxs("div",{className:R["combobox-control__field"],children:[c.jsx(Ko,{"aria-activedescendant":y?`${f}-${y}`:"","aria-autocomplete":"list","aria-controls":x,"aria-expanded":G?"true":"false",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:R["combobox-control__field__input"],clearable:t,disabled:d,i18n:S,id:n||($==null?void 0:$.id),invalid:H,loading:l,locale:J,onChange:m=>{F(),k(m.target.value),B(!0)},onClear:()=>!j&&V([]),onClick:()=>B(!0),onFocus:()=>fe(!0),onKeyDown:Re,name:z,placeholder:r,readOnly:T,ref:q,required:j?!1:X,role:"combobox",spellCheck:"false",value:E}),c.jsx("button",{"aria-hidden":"true",className:W(R["combobox-control__field__caret"],{[R["combobox-control__field__caret--disabled"]]:d}),onClick:()=>{var m,I;(m=q.current)==null||m.click(),(I=q.current)==null||I.focus()},tabIndex:-1,children:c.jsx(Vo,{className:W(R["combobox-control__field__caret__icon"],{[R["combobox-control__field__caret__icon--open"]]:G}),name:Ao.chevronDown})})]})]})});b.displayName="ComboboxControl";b.__docgenInfo={description:"",methods:[],displayName:"ComboboxControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const p=Object.assign(ke,{Content:u,Control:b}),un={argTypes:en(["customFilter","customOptionRenderer","defaultValue","i18n","items","locale","name","onInputValueChange","onValueChange","required","value"]),component:p,subcomponents:{ComboboxContent:u,ComboboxControl:b},title:"React Components/Combobox"},Q={render:o=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],allowCustomValue:o.allowCustomValue,defaultValue:o.defaultValue,disabled:o.disabled,highlightResults:o.highlightResults,invalid:o.invalid,multiple:o.multiple,newElementLabel:o.newElementLabel,noResultLabel:o.noResultLabel,readOnly:o.readOnly},e.createElement(b,{clearable:o.clearable,placeholder:o.placeholder,loading:o.loading}),e.createElement(u,null)),argTypes:on({allowCustomValue:{table:{category:D.general},control:"boolean"},clearable:{table:{category:D.general,type:{summary:"boolean"}},control:"boolean"},defaultValue:{table:{category:D.general},control:"text"},disabled:{table:{category:D.general},control:"boolean"},highlightResults:{table:{category:D.general},control:"boolean"},invalid:{table:{category:D.general},control:"boolean"},loading:{table:{category:D.general,type:{summary:"boolean"}},control:"boolean"},multiple:{table:{category:D.general},control:"boolean"},newElementLabel:{table:{category:D.general},control:"text"},noResultLabel:{table:{category:D.general},control:"text"},placeholder:{table:{category:D.general},control:"text"},readOnly:{table:{category:D.general},control:"boolean"}}),args:{placeholder:"Start typing"}},Z={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,null),e.createElement(u,null))},ee={tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,{placeholder:"Combobox"}),e.createElement(u,null))},oe={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,{clearable:!0,placeholder:"Combobox"}),e.createElement(u,null))},ne={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{customFilter:(o,t)=>{const n=o.split("").reverse().join("");return new RegExp(`^${t}`,"i").test(n)},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,{placeholder:"Search from right to left in each word"}),e.createElement(u,null))},te={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,{placeholder:"Combobox"}),e.createElement(u,null))},ae={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{defaultValue:["parrot"],items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},e.createElement(b,{placeholder:"Combobox"}),e.createElement(u,null))},le={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"World",value:"world"}]},e.createElement(b,{placeholder:"Combobox"}),e.createElement(u,null))},re={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(De,null,e.createElement(Oe,null,"Combobox"),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(b,null),e.createElement(u,null)))},se={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(b,null),e.createElement(u,null))},ie={globals:{imports:`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>{const[o,t]=s.useState(["dog"]);return e.createElement(e.Fragment,null,e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],onValueChange:n=>t(n.value),value:o},e.createElement(b,{placeholder:"Select an animal"}),e.createElement(u,null)),e.createElement("div",{style:{marginTop:8}},e.createElement("strong",null,"Selected value:")," ",o[0]??"None"))}},me={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{highlightResults:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,null),e.createElement(u,null))},ue={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>{const o=[{label:"Apple",value:"apple",customRendererData:{color:"red",info:"Fruit"}},{label:"Banana",value:"banana",customRendererData:{color:"yellow",info:"Fruit"}},{label:"Carrot",value:"carrot",customRendererData:{color:"orange",info:"Vegetable"}},{label:"Broccoli",value:"broccoli",customRendererData:{color:"green",info:"Vegetable"}},{label:"Blueberry",value:"blueberry",customRendererData:{color:"blue",info:"Fruit"}}];function t(n){var l,r;return e.createElement("span",{style:{color:(l=n.customRendererData)==null?void 0:l.color,fontWeight:"bold"}},n.label," ",((r=n.customRendererData)==null?void 0:r.info)&&e.createElement("span",{style:{fontWeight:"normal",fontSize:12,color:"#888"}},"(",n.customRendererData.info,")"))}return e.createElement(p,{customOptionRenderer:t,highlightResults:!0,items:o},e.createElement(b,null),e.createElement(u,null))}},be={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{items:[]},e.createElement(b,null),e.createElement(u,null))},ce={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,null),e.createElement(u,null))},de={globals:{imports:"import { Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(De,null,e.createElement(Oe,null,"Favorite pet:"),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,null),e.createElement(u,null)))},pe={globals:{imports:"import { INPUT_I18N, Combobox, ComboboxContent, ComboboxControl, FormField, FormFieldLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...Ne()}}},render:({})=>e.createElement(De,null,e.createElement(Oe,null,"Favorite pet:"),e.createElement(p,{i18n:{[Qo.clearButton]:"Clear favorite pet selection"},items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(b,{clearable:!0}),e.createElement(u,null)))},ge={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(b,{placeholder:"Default"}),e.createElement(u,{createPortal:!1})),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(b,{clearable:!0,placeholder:"Clearable"}),e.createElement(u,{createPortal:!1})),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(b,{loading:!0,placeholder:"Loading"}),e.createElement(u,{createPortal:!1})),e.createElement(p,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(b,{placeholder:"Disabled"}),e.createElement(u,{createPortal:!1})),e.createElement(p,{readOnly:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(b,{placeholder:"Read only"}),e.createElement(u,{createPortal:!1})),e.createElement(p,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}],multiple:!0},e.createElement(b,{placeholder:"Multiple"}),e.createElement(u,{createPortal:!1})))};var Ge,je,Ve;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ve=(je=Q.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var Ae,He,We;Z.parameters={...Z.parameters,docs:{...(Ae=Z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(We=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Be,$e,Me;ee.parameters={...ee.parameters,docs:{...(Be=ee.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Me=($e=ee.parameters)==null?void 0:$e.docs)==null?void 0:Me.source}}};var Ue,Ye,Je;oe.parameters={...oe.parameters,docs:{...(Ue=oe.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=oe.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var ze,Xe,Ke;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ke=(Xe=ne.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var Qe,Ze,eo;te.parameters={...te.parameters,docs:{...(Qe=te.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(eo=(Ze=te.parameters)==null?void 0:Ze.docs)==null?void 0:eo.source}}};var oo,no,to;ae.parameters={...ae.parameters,docs:{...(oo=ae.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(to=(no=ae.parameters)==null?void 0:no.docs)==null?void 0:to.source}}};var ao,lo,ro;le.parameters={...le.parameters,docs:{...(ao=le.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(ro=(lo=le.parameters)==null?void 0:lo.docs)==null?void 0:ro.source}}};var so,io,mo;re.parameters={...re.parameters,docs:{...(so=re.parameters)==null?void 0:so.docs,source:{originalSource:`{
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
}`,...(mo=(io=re.parameters)==null?void 0:io.docs)==null?void 0:mo.source}}};var uo,bo,co;se.parameters={...se.parameters,docs:{...(uo=se.parameters)==null?void 0:uo.docs,source:{originalSource:`{
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
}`,...(co=(bo=se.parameters)==null?void 0:bo.docs)==null?void 0:co.source}}};var po,go,Co;ie.parameters={...ie.parameters,docs:{...(po=ie.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
}`,...(Co=(go=ie.parameters)==null?void 0:go.docs)==null?void 0:Co.source}}};var vo,fo,ho;me.parameters={...me.parameters,docs:{...(vo=me.parameters)==null?void 0:vo.docs,source:{originalSource:`{
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
}`,...(ho=(fo=me.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};var xo,yo,_o;ue.parameters={...ue.parameters,docs:{...(xo=ue.parameters)==null?void 0:xo.docs,source:{originalSource:`{
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
}`,...(_o=(yo=ue.parameters)==null?void 0:yo.docs)==null?void 0:_o.source}}};var Eo,To,wo;be.parameters={...be.parameters,docs:{...(Eo=be.parameters)==null?void 0:Eo.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Combobox, ComboboxContent, ComboboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Combobox items={[]}>
      <ComboboxControl />

      <ComboboxContent />
    </Combobox>
}`,...(wo=(To=be.parameters)==null?void 0:To.docs)==null?void 0:wo.source}}};var Ro,qo,Io;ce.parameters={...ce.parameters,docs:{...(Ro=ce.parameters)==null?void 0:Ro.docs,source:{originalSource:`{
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
}`,...(Io=(qo=ce.parameters)==null?void 0:qo.docs)==null?void 0:Io.source}}};var Do,Oo,No;de.parameters={...de.parameters,docs:{...(Do=de.parameters)==null?void 0:Do.docs,source:{originalSource:`{
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
}`,...(No=(Oo=de.parameters)==null?void 0:Oo.docs)==null?void 0:No.source}}};var Fo,ko,So;pe.parameters={...pe.parameters,docs:{...(Fo=pe.parameters)==null?void 0:Fo.docs,source:{originalSource:`{
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
}`,...(So=(ko=pe.parameters)==null?void 0:ko.docs)==null?void 0:So.source}}};var Lo,Po,Go;ge.parameters={...ge.parameters,docs:{...(Lo=ge.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
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
}`,...(Go=(Po=ge.parameters)==null?void 0:Po.docs)==null?void 0:Go.source}}};const bn=["Demo","Default","Overview","Clearable","CustomFilter","Disabled","Readonly","Group","InFormField","Invalid","Controlled","Highlight","CustomOptions","Empty","Multiple","AccessibilityFormField","AccessibilityI18n","ThemeGenerator"],qn=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:de,AccessibilityI18n:pe,Clearable:oe,Controlled:ie,CustomFilter:ne,CustomOptions:ue,Default:Z,Demo:Q,Disabled:te,Empty:be,Group:le,Highlight:me,InFormField:re,Invalid:se,Multiple:ce,Overview:ee,Readonly:ae,ThemeGenerator:ge,__namedExportsOrder:bn,default:un},Symbol.toStringTag,{value:"Module"}));export{de as A,qn as C,Z as D,be as E,le as G,me as H,se as I,ce as M,ee as O,ae as R,pe as a,oe as b,te as c,ie as d,ue as e,ne as f,re as g};
