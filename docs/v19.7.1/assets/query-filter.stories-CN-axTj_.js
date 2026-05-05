import{r as o,e as c}from"./index-jIWwRBLr.js";import{j as i}from"./jsx-runtime-Cfl8ynUo.js";import{c as B}from"./index-CqY9YpN0.js";import{u as De}from"./index-B0M5RXeR.js";import{u as Xe}from"./context-C_-r2uoG.js";import{u as Je}from"./use-filter-DwFqGZM4.js";import{B as et,d as tt,c as rt}from"./Button-B-GJ-1TA.js";import{b as nt,a as lt}from"./index-DyJ6-P7h.js";import{h as at,e as Ce}from"./element-B8BTzFb4.js";import{a as le}from"./overlay-CZHjGBMC.js";import{I as ot,a as it}from"./icon-name-D0KNfDOz.js";import{I as st}from"./Input-CsaVjqar.js";import{T as ut}from"./Tag-DvbeX4Ez.js";import{e as ct,o as pt,C as Q}from"./controls-BtiQQn1l.js";import{s as dt}from"./source-CPEZJ6oD.js";const ve=3,We="-";function yt(e,n){if(!n.length)return e.label;const l=n[n.length-1].label;return e.label.trim().toLowerCase().startsWith(l.toLowerCase())?e.label.replace(new RegExp(`^${l}`,"i"),"").trim():e.label}function Ge(e,n){return e.find(l=>l.value===n)}function mt(e){return e.map(n=>n.value).join(We)}function ft(e,n,l){if(!(l!=null&&l.length))return[];function u(r,a=[],p=""){const d=Ge(a,p);d&&r.filters.push(d),r.id+=`${r.id?We:""}${d?d.value:p}`,r.label+=`${r.label?" ":""}${d?d.label:p}`}return l.map(r=>{var p,d,g,v,h,y;if(!r.length)return;const a={filters:[],id:"",label:""};u(a,e.options,r[0]),u(a,(g=(d=n[(p=a.filters[0])==null?void 0:p.value])==null?void 0:d.operator)==null?void 0:g.options,r[1]),u(a,(y=(h=n[(v=a.filters[0])==null?void 0:v.value])==null?void 0:h.value)==null?void 0:y.options,r[2]);for(let q=ve;q<r.length;q++)u(a,[],r[q]);return a}).filter(r=>!!r)}function qe(e,n){return e.length?n?`${e[e.length-1].label} ${n}`:e[e.length-1].label:n||""}function gt(e,n,l){var u,r;switch(e.length){case 0:return n;case 1:return(u=l[e[0].value])==null?void 0:u.operator;case 2:return(r=l[e[0].value])==null?void 0:r.value;default:return}}const $e=o.createContext(void 0),Ue=({allowCustomValue:e,children:n,defaultOpen:l,defaultValue:u,disabled:r,filterOption:a,filterProperty:p,onInputValueChange:d,onOpenChange:g,onValueChange:v,open:h,readOnly:y,value:q,...W})=>{const G=o.useMemo(()=>ft(p,a,u||q),[]),{contains:A}=Je({sensitivity:"base"}),x=o.useCallback((t,s)=>A(t,s),[]),S=o.useId(),w=o.useRef(null),[N,V]=o.useState(""),[D,$]=o.useState(),[f,M]=o.useState(void 0),[_,O]=o.useState(""),[F,pe]=o.useState(""),[E,Y]=o.useState(l??h??!1),[T,H]=o.useState([]),[U,de]=o.useState(G),z=o.useMemo(()=>f?f.options.map(t=>t.value):[],[f]);o.useEffect(()=>{O(""),M(()=>{const t=gt(T,p,a);if(t)return F.trim()===""?t:{...t,options:t.options.map(s=>({...s,label:qe(T,s.label)})).filter(s=>x(s.label,F.trim()))}})},[x,p,a,F,T]),o.useEffect(()=>{E||O("")},[E]),o.useEffect(()=>{typeof h=="boolean"&&Y(h)},[h]);function ye(){var t;(t=w.current)==null||t.focus()}function b(){var s;E||he(!0);const t=e&&F?[F].concat(z):z;if(_===""&&((s=f==null?void 0:f.options)!=null&&s.length))O(t[0]);else{const m=t.findIndex(C=>C===_);O(t[m<t.length-1?m+1:0])}}function I(t){E&&O(t.value)}function me(){var s;if(!E)return;const t=e&&F?[F].concat(z):z;if(_===""&&((s=f==null?void 0:f.options)!=null&&s.length))O(t[t.length-1]);else{const m=t.findIndex(C=>C===_);O(t[m>0?m-1:t.length-1])}}function Ye(){var t;T.length<ve&&((t=f==null?void 0:f.options)!=null&&t.length)&&H(s=>s.concat(f.options[0]))}function He(){T.length&&H(t=>t.slice(0,-1))}function ze(){ae([])}function Ke(t){ae(s=>s.filter(m=>m.id!==t))}function fe(){ge(""),H([]),he(!1)}function Ze(){if(_&&f){const t=Ge(f.options,_);t&&Te(t)}}function Te(t,s=!1){if(!(r||y)){if(s)ae(m=>{if(m.every(C=>C.id!==t.value)){const C=yt(t,T);return m.concat({filters:T.concat({label:C,value:C}),id:t.value,label:t.label})}return m}),fe();else{const m=T.concat(t);if(m.length>=ve){const C=mt(m);if(U.every(be=>be.id!==C)){const be=U.concat([{filters:m,id:C,label:qe(m)}]);ae(be)}fe()}else ge(t.label),H(m)}ye()}}function ge(t){const s=typeof t=="function"?t(F):t;pe(s),d&&s!==F&&d({inputValue:s})}function he(t){let s;r||y?s=!1:s=typeof t=="function"?t(E):t,typeof h!="boolean"&&Y(s),g&&g({open:s})}function ae(t){const s=typeof t=="function"?t(U):t;de(s),v&&v({value:s.map(m=>m.filters.length?m.filters.map(C=>C.value):[m.label])})}return i.jsx($e.Provider,{value:{...W,allowCustomValue:e,contentId:N,contentPosition:D,controlId:S,disabled:r,filterOption:a,filterProperty:p,filteredGroup:f,highlightNextOption:b,highlightOption:I,highlightPreviousOption:me,highlightedOptionValue:_,inputRef:w,inputValue:F,isOpen:E,moveToNextStep:Ye,moveToPreviousStep:He,readOnly:y,removeAllTags:ze,removeTag:Ke,resetControl:fe,selectHighlightedItem:Ze,selectItem:Te,selection:T,setContentId:V,setContentPosition:$,setInputValue:ge,setIsOpen:he,tags:U},children:n})};function K(){return Xe($e)}Ue.__docgenInfo={description:"",methods:[],displayName:"QueryFilterProvider",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a custom filter."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the query filter. Use when you don't need to control the open state of the query filter."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"string[][]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the query filter."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},filterOption:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  operator: QueryFilterGroup;
  value: QueryFilterGroup;
}`,signature:{properties:[{key:"operator",value:{name:"signature",type:"object",raw:`{
  label: string;
  options: QueryFilterItem[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QueryFilterItem[]",required:!0}}]},required:!0}},{key:"value",value:{name:"signature",type:"object",raw:`{
  label: string;
  options: QueryFilterItem[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QueryFilterItem[]",required:!0}}]},required:!0}}]}}],raw:`Record<string, {
  operator: QueryFilterGroup;
  value: QueryFilterGroup;
}>`},description:"The property filter options (operator and value)."},filterProperty:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  options: QueryFilterItem[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QueryFilterItem[]",required:!0}}]}},description:"The properties that may be used as a filter."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom filter to add."},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value."},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: QueryFilterInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"QueryFilterInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: QueryFilterOpenChangeDetail) => void",signature:{arguments:[{type:{name:"QueryFilterOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the query filter open state changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: QueryFilterValueChangeDetails) => void",signature:{arguments:[{type:{name:"QueryFilterValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the query filter."},overlayConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Whether to flip the position.
   */
  flip?: boolean,
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
}`,signature:{properties:[{key:"flip",value:{name:"boolean",required:!1},description:"Whether to flip the position."},{key:"sameWidth",value:{name:"boolean",required:!1},description:"Whether to make the floating element same width as the reference element."}]}},description:"The overlay configuration."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"string[][]"},description:"The controlled selected value(s)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ht={"query-filter":"_query-filter_wqhk3_2"},_e=o.forwardRef(({allowCustomValue:e,children:n,className:l,defaultOpen:u,defaultValue:r,disabled:a,filterOption:p,filterProperty:d,highlightResults:g=!1,i18n:v,invalid:h,locale:y,name:q,newElementLabel:W="Use: ",noResultLabel:G="No results found",onInputValueChange:A,onOpenChange:x,onValueChange:S,open:w,overlayConfig:N,readOnly:V,required:D,value:$,...f},M)=>{const _=De(),O=h||(_==null?void 0:_.invalid);return i.jsx(Ue,{allowCustomValue:e,defaultOpen:u,defaultValue:r,disabled:a,filterOption:p,filterProperty:d,highlightResults:g,i18n:v,invalid:O,locale:y,name:q,newElementLabel:W,noResultLabel:G,onInputValueChange:A,onOpenChange:x,onValueChange:S,open:w,overlayConfig:N,readOnly:V,required:D,value:$,children:i.jsx("div",{className:B(ht["query-filter"],l),"data-ods":"query-filter",ref:M,...f,children:n})})});_e.displayName="QueryFilter";_e.__docgenInfo={description:"",methods:[],displayName:"QueryFilter",props:{allowCustomValue:{required:!1,tsType:{name:"boolean"},description:"Whether to allow adding a custom filter."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the query filter. Use when you don't need to control the open state of the query filter."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"string[][]"},description:"The initial selected value(s). Use when you don't need to control the selected value(s) of the query filter."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},filterOption:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  operator: QueryFilterGroup;
  value: QueryFilterGroup;
}`,signature:{properties:[{key:"operator",value:{name:"signature",type:"object",raw:`{
  label: string;
  options: QueryFilterItem[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QueryFilterItem[]",required:!0}}]},required:!0}},{key:"value",value:{name:"signature",type:"object",raw:`{
  label: string;
  options: QueryFilterItem[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QueryFilterItem[]",required:!0}}]},required:!0}}]}}],raw:`Record<string, {
  operator: QueryFilterGroup;
  value: QueryFilterGroup;
}>`},description:"The property filter options (operator and value)."},filterProperty:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  options: QueryFilterItem[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"QueryFilterItem[]",required:!0}}]}},description:"The properties that may be used as a filter."},highlightResults:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the matching part of filtered items.",defaultValue:{value:"false",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"INPUT_I18N.clearButton"},{name:"string"}],raw:"Record<INPUT_I18N.clearButton, string>"}],raw:"Partial<Record<INPUT_I18N.clearButton, string>>"},description:"Internal translations override (see Input i18n keys)."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},newElementLabel:{required:!1,tsType:{name:"string"},description:"Label displayed in front of a custom filter to add.",defaultValue:{value:"'Use: '",computed:!1}},noResultLabel:{required:!1,tsType:{name:"string"},description:"Label displayed when no values match the current input value.",defaultValue:{value:"'No results found'",computed:!1}},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: QueryFilterInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"QueryFilterInputValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the input value changes."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: QueryFilterOpenChangeDetail) => void",signature:{arguments:[{type:{name:"QueryFilterOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the query filter open state changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: QueryFilterValueChangeDetails) => void",signature:{arguments:[{type:{name:"QueryFilterValueChangeDetails"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value(s) changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the query filter."},overlayConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Whether to flip the position.
   */
  flip?: boolean,
  /**
   * Whether to make the floating element same width as the reference element.
   */
  sameWidth?: boolean,
}`,signature:{properties:[{key:"flip",value:{name:"boolean",required:!1},description:"Whether to flip the position."},{key:"sameWidth",value:{name:"boolean",required:!1},description:"Whether to make the floating element same width as the reference element."}]}},description:"The overlay configuration."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"string[][]"},description:"The controlled selected value(s)."}}};const k=o.forwardRef(({children:e,className:n,...l},u)=>{const{removeAllTags:r,tags:a}=K();return a.length?i.jsx(et,{className:n,"data-ods":"query-filter-clear",onClick:r,ref:u,size:rt.xs,variant:tt.ghost,...l,children:e}):i.jsx(i.Fragment,{})});k.displayName="QueryFilterClear";k.__docgenInfo={description:"",methods:[],displayName:"QueryFilterClear",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=BUTTON_COLOR
The color preset to use.`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state, disabling it."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},variant:{required:!1,tsType:{name:"literal",value:"`${BUTTON_VARIANT}`"},description:"The variant preset to use."}},composes:["ComponentPropsWithRef"]};const bt={"query-filter-highlight":"_query-filter-highlight_wx4nj_2"},Be=({children:e,highlight:n,inputValue:l})=>!n||!l?i.jsx(i.Fragment,{children:e}):i.jsx(i.Fragment,{children:at(e,l.toLowerCase(),({key:u,part:r})=>i.jsx("span",{className:bt["query-filter-highlight"],children:r},u))});Be.__docgenInfo={description:"",methods:[],displayName:"QueryFilterHighlight",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""}}};const oe={"query-filter-option":"_query-filter-option_d6o2j_2","query-filter-option--disabled":"_query-filter-option--disabled_d6o2j_12","query-filter-option--highlighted":"_query-filter-option--highlighted_d6o2j_18","query-filter-option__new-item":"_query-filter-option__new-item_d6o2j_21"},se=({className:e,isCustom:n,isHighlighted:l,item:u,...r})=>{const{disabled:a,highlightOption:p,highlightResults:d,inputValue:g,newElementLabel:v,selectItem:h}=K(),y=o.useRef(null);o.useEffect(()=>{y.current&&l&&y.current.scrollIntoView({block:"nearest"})},[l,y]);function q(){a||h(u,n)}return i.jsx("div",{"aria-selected":l,className:B(oe["query-filter-option"],{[oe["query-filter-option--disabled"]]:a},{[oe["query-filter-option--highlighted"]]:l},e),onClick:q,onPointerEnter:()=>p(u),ref:y,role:"option",tabIndex:-1,...r,children:n?i.jsxs("div",{className:oe["query-filter-option__new-item"],children:[v,u.label]}):i.jsx(Be,{highlight:d,inputValue:g,children:u.label})})};se.displayName="QueryFilterOption";se.__docgenInfo={description:"",methods:[],displayName:"QueryFilterOption",props:{isCustom:{required:!1,tsType:{name:"boolean"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}},composes:["ComponentPropsWithRef"]};const ie={"query-filter-group":"_query-filter-group_qhy7x_2","query-filter-group__label":"_query-filter-group__label_qhy7x_5","query-filter-group__label--disabled":"_query-filter-group__label--disabled_qhy7x_13","query-filter-group__option":"_query-filter-group__option_qhy7x_19"},Me=({className:e,group:n,...l})=>{const u=o.useId(),{disabled:r,highlightedOptionValue:a}=K();return i.jsxs("div",{"aria-labelledby":u,className:ie["query-filter-group"],role:"group",...l,children:[i.jsx("div",{className:B(ie["query-filter-group__label"],{[ie["query-filter-group__label--disabled"]]:r}),id:u,role:"presentation",children:n.label}),n.options.map(p=>i.jsx(se,{className:ie["query-filter-group__option"],isHighlighted:a===p.value,item:p},p.value))]})};Me.displayName="QueryFilterGroup";const X={"query-filter-content":"_query-filter-content_1bneh_2","query-filter-content--invalid":"_query-filter-content--invalid_1bneh_12","query-filter-content--open-bottom":"_query-filter-content--open-bottom_1bneh_15","query-filter-content--open-top":"_query-filter-content--open-top_1bneh_18","query-filter-content__empty":"_query-filter-content__empty_1bneh_21"},j=o.forwardRef(({className:e,createPortal:n=!0,id:l,...u},r)=>{var V,D;const{allowCustomValue:a,contentPosition:p,controlId:d,filteredGroup:g,highlightedOptionValue:v,isOpen:h,inputValue:y,invalid:q,noResultLabel:W,overlayConfig:G,setContentId:A,setContentPosition:x}=K(),S=o.useId(),w=o.useMemo(()=>l??S,[S,l]);o.useEffect(()=>{A(w)},[w,A]);function N({position:$}){x($)}return i.jsx(nt,{autoFocus:!1,onPositionChange:N,open:h,overlayConfig:{gutter:-1,position:le.bottom,sameWidth:!0,...G},triggerId:d,children:i.jsxs(lt,{className:B(X["query-filter-content"],{[X["query-filter-content--invalid"]]:q},{[X["query-filter-content--open-bottom"]]:p===le.bottom},{[X["query-filter-content--open-top"]]:p===le.top},e),createPortal:n,"data-ods":"query-filter-content",id:w,ref:r,...u,role:"listbox",children:[!a&&((V=g==null?void 0:g.options)==null?void 0:V.length)===0&&i.jsx("div",{className:X["query-filter-content__empty"],children:W}),a&&y&&i.jsx(se,{isCustom:!0,isHighlighted:v===y,item:{label:y,value:y}}),g&&((D=g.options)==null?void 0:D.length)>0&&i.jsx(Me,{group:g})]})})});j.displayName="QueryFilterContent";j.__docgenInfo={description:"",methods:[],displayName:"QueryFilterContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const R={"query-filter-control":"_query-filter-control_de356_2","query-filter-control--invalid":"_query-filter-control--invalid_de356_19","query-filter-control--disabled":"_query-filter-control--disabled_de356_19","query-filter-control--read-only":"_query-filter-control--read-only_de356_19","query-filter-control--focused":"_query-filter-control--focused_de356_19","query-filter-control--open-bottom":"_query-filter-control--open-bottom_de356_35","query-filter-control--open-top":"_query-filter-control--open-top_de356_38","query-filter-control__input":"_query-filter-control__input_de356_45","query-filter-control__caret":"_query-filter-control__caret_de356_54","query-filter-control__caret--disabled":"_query-filter-control__caret--disabled_de356_64","query-filter-control__caret__icon":"_query-filter-control__caret__icon_de356_68"},P=o.forwardRef(({className:e,clearable:n,id:l,loading:u,placeholder:r,...a},p)=>{const{contentId:d,contentPosition:g,controlId:v,disabled:h,filteredGroup:y,highlightedOptionValue:q,highlightNextOption:W,highlightPreviousOption:G,i18n:A,inputRef:x,inputValue:S,invalid:w,isOpen:N,locale:V,moveToNextStep:D,moveToPreviousStep:$,name:f,readOnly:M,required:_,resetControl:O,selection:F,selectHighlightedItem:pe,setInputValue:E,setIsOpen:Y}=K(),T=De(),[H,U]=o.useState(!1);function de(b){var I;((I=b.relatedTarget)==null?void 0:I.id)===d||Ce(b.relatedTarget,"data-ods",["query-filter-content","query-filter-control"])&&Ce(b.relatedTarget,"id",[d,v])||(U(!1),O())}function z(b){const I=b.target.value;I.length<qe(F).length?$():y&&y.options.some(me=>me.label.toLowerCase()===I.toLowerCase())&&D(),E(I),Y(!0)}function ye(b){switch(b.key){case"ArrowDown":b.preventDefault(),W();break;case"ArrowUp":b.preventDefault(),G();break;case"Enter":q&&(b.preventDefault(),pe());break;case"Escape":b.preventDefault(),Y(!1);break}}return i.jsxs("div",{className:B(R["query-filter-control"],{[R["query-filter-control--disabled"]]:h},{[R["query-filter-control--invalid"]]:w},{[R["query-filter-control--focused"]]:H},{[R["query-filter-control--open-bottom"]]:N&&g===le.bottom},{[R["query-filter-control--open-top"]]:N&&g===le.top},{[R["query-filter-control--read-only"]]:M},e),"data-ods":"query-filter-control",id:v,onBlur:de,ref:p,...a,children:[i.jsx(st,{"aria-activedescendant":q?`${v}-${q}`:"","aria-autocomplete":"list","aria-controls":d,"aria-expanded":N?"true":"false",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:R["query-filter-control__input"],clearable:n,disabled:h,i18n:A,id:l||(T==null?void 0:T.id),invalid:w,loading:u,locale:V,onChange:z,onClick:()=>Y(!0),onFocus:()=>U(!0),onKeyDown:ye,name:f,placeholder:r,readOnly:M,ref:x,required:_,role:"combobox",spellCheck:"false",value:S}),i.jsx("button",{"aria-hidden":"true",className:B(R["query-filter-control__caret"],{[R["query-filter-control__caret--disabled"]]:h}),onClick:()=>{var b,I;(b=x.current)==null||b.click(),(I=x.current)==null||I.focus()},tabIndex:-1,children:i.jsx(ot,{className:R["query-filter-control__caret__icon"],name:it.magnifyingGlass})})]})});P.displayName="QueryFilterControl";P.__docgenInfo={description:"",methods:[],displayName:"QueryFilterControl",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display in the input."}},composes:["ComponentPropsWithRef"]};const Fe={"query-filter-tags":"_query-filter-tags_1ctnq_2","query-filter-tags__tag":"_query-filter-tags__tag_1ctnq_10"},L=o.forwardRef(({className:e,...n},l)=>{const{removeTag:u,tags:r}=K();return r!=null&&r.length?i.jsx("ul",{className:B(Fe["query-filter-tags"],e),"data-ods":"query-filter-tags",ref:l,...n,children:r.map(a=>i.jsx("li",{children:i.jsx(ut,{className:Fe["query-filter-tags__tag"],onClick:()=>u(a.id),children:a.label})},a.id))}):i.jsx(i.Fragment,{})});L.displayName="QueryFilterTags";L.__docgenInfo={description:"",methods:[],displayName:"QueryFilterTags",composes:["ComponentPropsWithRef"]};const Z=Object.assign(_e,{Clear:k,Content:j,Control:P,Tags:L}),vt={argTypes:ct(["defaultOpen","defaultValue","i18n","filterOption","filterProperty","locale","name","onInputValueChange","onOpenChange","onValueChange","open","overlayConfig","required","value"]),component:Z,subcomponents:{QueryFilterClear:k,QueryFilterContent:j,QueryFilterControl:P,QueryFilterTags:L},tags:["new"],title:"React Components/Query Filter"},ue={label:"Properties",options:[{label:"Instance ID",value:"instance-id"},{label:"States",value:"states"}]},ce={"instance-id":{operator:{label:"Operators",options:[{label:"equals",value:"="},{label:"does not equal",value:"!="}]},value:{label:"Instance Values",options:[{label:"instance 1",value:"instance-1"},{label:"instance 2",value:"instance-2"}]}},states:{operator:{label:"Operators",options:[{label:"equals",value:"="},{label:"does not equal",value:"!="}]},value:{label:"State Values",options:[{label:"Running",value:"running"},{label:"Stopped",value:"stopped"}]}}},J={render:e=>c.createElement(Z,{allowCustomValue:e.allowCustomValue,disabled:e.disabled,highlightResults:e.highlightResults,invalid:e.invalid,filterOption:ce,filterProperty:ue,newElementLabel:e.newElementLabel,noResultLabel:e.noResultLabel,readOnly:e.readOnly},c.createElement(P,{clearable:e.clearable,loading:e.loading,placeholder:e.placeholder}),c.createElement(j,null),c.createElement(L,null),c.createElement(k,null,e.clearAllLabel)),argTypes:pt({allowCustomValue:{table:{category:Q.general},control:"boolean"},clearAllLabel:{table:{category:Q.general},control:"text"},clearable:{table:{category:Q.general,type:{summary:"boolean"}},control:"boolean"},disabled:{table:{category:Q.general},control:"boolean"},highlightResults:{table:{category:Q.general},control:"boolean"},invalid:{table:{category:Q.general},control:"boolean"},loading:{table:{category:Q.general,type:{summary:"boolean"}},control:"boolean"},newElementLabel:{table:{category:Q.general},control:"text"},noResultLabel:{table:{category:Q.general},control:"text"},placeholder:{table:{category:Q.general},control:"text"},readOnly:{table:{category:Q.general},control:"boolean"}}),args:{clearAllLabel:"Clear all",placeholder:"Add filters"}},ee={parameters:{layout:"start"},tags:["!dev"],render:({})=>c.createElement(Z,{filterOption:ce,filterProperty:ue,open:!0,overlayConfig:{flip:!1},value:[["instance-id","!=","instance-1"],["states","===","running"]]},c.createElement(P,null),c.createElement(j,{createPortal:!1}),c.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"8px",alignItems:"center",marginTop:"100px"}},c.createElement(L,{style:{justifyContent:"end"}}),c.createElement(k,null,"Clear")))},te={globals:{imports:`import { QueryFilter, QueryFilterClear, QueryFilterControl, QueryFilterContent, QueryFilterTags } from '@ovhcloud/ods-react';
import { useMemo } from 'react';`},parameters:{docs:{source:{...dt()}}},tags:["!dev"],render:({})=>{const e=o.useMemo(()=>({label:"Properties",options:[{label:"Instance ID",value:"instance-id"},{label:"States",value:"states"}]}),[]),n=o.useMemo(()=>({"instance-id":{operator:{label:"Operators I",options:[{label:"equals",value:"="},{label:"does not equal",value:"!="}]},value:{label:"Instance Values",options:[{label:"instance 1",value:"instance-1"},{label:"instance 2",value:"instance-2"}]}},states:{operator:{label:"Operators S",options:[{label:"equals",value:"="},{label:"does not equal",value:"!="}]},value:{label:"State Values",options:[{label:"Running",value:"running"},{label:"Stopped",value:"stopped"}]}}}),[]);return c.createElement(Z,{filterOption:n,filterProperty:e},c.createElement(P,null),c.createElement(j,null),c.createElement(L,null),c.createElement(k,null,"Clear all"))}},re={tags:["!dev"],parameters:{layout:"centered"},render:({})=>c.createElement(Z,{filterOption:ce,filterProperty:ue},c.createElement(P,{style:{alignSelf:"end",width:"300px"}}),c.createElement(j,null),c.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"8px",alignItems:"center"}},c.createElement(L,{style:{justifyContent:"end"}}),c.createElement(k,null,"Clear")))},ne={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>c.createElement(Z,{filterOption:ce,filterProperty:ue},c.createElement(P,null),c.createElement(j,null),c.createElement(L,null),c.createElement(k,null,"Clear all"))};var we,Oe,Ie;J.parameters={...J.parameters,docs:{...(we=J.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <QueryFilter allowCustomValue={arg.allowCustomValue} disabled={arg.disabled} highlightResults={arg.highlightResults} invalid={arg.invalid} filterOption={filterOption} filterProperty={filterProperty} newElementLabel={arg.newElementLabel} noResultLabel={arg.noResultLabel} readOnly={arg.readOnly}>
      <QueryFilterControl clearable={arg.clearable} loading={arg.loading} placeholder={arg.placeholder} />

      <QueryFilterContent />

      <QueryFilterTags />

      <QueryFilterClear>
        {arg.clearAllLabel}
      </QueryFilterClear>
    </QueryFilter>,
  argTypes: orderControls({
    allowCustomValue: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    clearAllLabel: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
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
    clearAllLabel: 'Clear all',
    placeholder: 'Add filters'
  }
}`,...(Ie=(Oe=J.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var Qe,Re,xe;ee.parameters={...ee.parameters,docs:{...(Qe=ee.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  parameters: {
    layout: 'start'
  },
  tags: ['!dev'],
  render: ({}) => <QueryFilter filterOption={filterOption} filterProperty={filterProperty} open overlayConfig={{
    flip: false
  }} value={[['instance-id', '!=', 'instance-1'], ['states', '===', 'running']]}>
      <QueryFilterControl />

      <QueryFilterContent createPortal={false} />

      <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      alignItems: 'center',
      marginTop: '100px'
    }}>
        <QueryFilterTags style={{
        justifyContent: 'end'
      }} />

        <QueryFilterClear>
          Clear
        </QueryFilterClear>
      </div>
    </QueryFilter>
}`,...(xe=(Re=ee.parameters)==null?void 0:Re.docs)==null?void 0:xe.source}}};var Ne,Ee,ke;te.parameters={...te.parameters,docs:{...(Ne=te.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  globals: {
    imports: \`import { QueryFilter, QueryFilterClear, QueryFilterControl, QueryFilterContent, QueryFilterTags } from '@ovhcloud/ods-react';
import { useMemo } from 'react';\`
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
    const filterProperty = useMemo(() => ({
      label: 'Properties',
      options: [{
        label: 'Instance ID',
        value: 'instance-id'
      }, {
        label: 'States',
        value: 'states'
      }]
    }), []);
    const filterOption = useMemo(() => ({
      ['instance-id']: {
        operator: {
          label: 'Operators I',
          options: [{
            label: 'equals',
            value: '='
          }, {
            label: 'does not equal',
            value: '!='
          }]
        },
        value: {
          label: 'Instance Values',
          options: [{
            label: 'instance 1',
            value: 'instance-1'
          }, {
            label: 'instance 2',
            value: 'instance-2'
          }]
        }
      },
      states: {
        operator: {
          label: 'Operators S',
          options: [{
            label: 'equals',
            value: '='
          }, {
            label: 'does not equal',
            value: '!='
          }]
        },
        value: {
          label: 'State Values',
          options: [{
            label: 'Running',
            value: 'running'
          }, {
            label: 'Stopped',
            value: 'stopped'
          }]
        }
      }
    }), []);
    return <QueryFilter filterOption={filterOption} filterProperty={filterProperty}>
        <QueryFilterControl />

        <QueryFilterContent />

        <QueryFilterTags />

        <QueryFilterClear>
          Clear all
        </QueryFilterClear>
      </QueryFilter>;
  }
}`,...(ke=(Ee=te.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var je,Pe,Le;re.parameters={...re.parameters,docs:{...(je=re.parameters)==null?void 0:je.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <QueryFilter filterOption={filterOption} filterProperty={filterProperty}>
      <QueryFilterControl style={{
      alignSelf: 'end',
      width: '300px'
    }} />

      <QueryFilterContent />

      <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      alignItems: 'center'
    }}>
        <QueryFilterTags style={{
        justifyContent: 'end'
      }} />

        <QueryFilterClear>
          Clear
        </QueryFilterClear>
      </div>
    </QueryFilter>
}`,...(Le=(Pe=re.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Ae,Se,Ve;ne.parameters={...ne.parameters,docs:{...(Ae=ne.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <QueryFilter filterOption={filterOption} filterProperty={filterProperty}>
      <QueryFilterControl />

      <QueryFilterContent />

      <QueryFilterTags />

      <QueryFilterClear>
        Clear all
      </QueryFilterClear>
    </QueryFilter>
}`,...(Ve=(Se=ne.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};const qt=["Demo","AnatomyTech","Default","Overview","ThemeGenerator"],Lt=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:ee,Default:te,Demo:J,Overview:re,ThemeGenerator:ne,__namedExportsOrder:qt,default:vt},Symbol.toStringTag,{value:"Module"}));export{ee as A,te as D,re as O,Lt as Q};
