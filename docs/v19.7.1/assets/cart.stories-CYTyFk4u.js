import{r as g,e}from"./index-jIWwRBLr.js";import{j as n}from"./jsx-runtime-Cfl8ynUo.js";import{c as Y}from"./index-CqY9YpN0.js";import{L as u,u as se}from"./useI18n-C0NLVYPv.js";import{B as Q,d as Le,c as Xe}from"./Button-B-GJ-1TA.js";import{a as $e}from"./colors-DSObuHxd.js";import{C as Ke}from"./Card-DNx-3noX.js";import{u as He}from"./context-C_-r2uoG.js";import{A as Je}from"./AsChild-BQZQcPff.js";import{I as R,a as x}from"./icon-name-D0KNfDOz.js";import{c as Qe,a as et,A as tt,b as rt}from"./index-B-w1UZkk.js";import{T as I,a as P}from"./Text-CAQM6i-X.js";import{D as ee,f as at}from"./divider-color-2AUX7hAv.js";import{f as m}from"./format-C-fLMDQr.js";import{e as ot}from"./controls-BtiQQn1l.js";import{s as te}from"./source-CPEZJ6oD.js";const nt="Left",ct="Right",it="Up",st="Down",G={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},ie={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},me="mousemove",_e="mouseup",lt="touchend",dt="touchmove",ut="touchstart";function pt(t,s,o,c){return t>s?o>0?ct:nt:c>0?st:it}function ge(t,s){if(s===0)return t;const o=Math.PI/180*s,c=t[0]*Math.cos(o)+t[1]*Math.sin(o),d=t[1]*Math.cos(o)-t[0]*Math.sin(o);return[c,d]}function mt(t,s){const o=r=>{const a="touches"in r;a&&r.touches.length>1||t((i,l)=>{l.trackMouse&&!a&&(document.addEventListener(me,c),document.addEventListener(_e,f));const{clientX:y,clientY:T}=a?r.touches[0]:r,S=ge([y,T],l.rotationAngle);return l.onTouchStartOrOnMouseDown&&l.onTouchStartOrOnMouseDown({event:r}),Object.assign(Object.assign(Object.assign({},i),ie),{initial:S.slice(),xy:S,start:r.timeStamp||0})})},c=r=>{t((a,i)=>{const l="touches"in r;if(l&&r.touches.length>1)return a;if(r.timeStamp-a.start>i.swipeDuration)return a.swiping?Object.assign(Object.assign({},a),{swiping:!1}):a;const{clientX:y,clientY:T}=l?r.touches[0]:r,[S,ae]=ge([y,T],i.rotationAngle),$=S-a.xy[0],K=ae-a.xy[1],M=Math.abs($),U=Math.abs(K),oe=(r.timeStamp||0)-a.start,Ze=Math.sqrt(M*M+U*U)/(oe||1),Ye=[$/(oe||1),K/(oe||1)],ne=pt(M,U,$,K),ue=typeof i.delta=="number"?i.delta:i.delta[ne.toLowerCase()]||G.delta;if(M<ue&&U<ue&&!a.swiping)return a;const H={absX:M,absY:U,deltaX:$,deltaY:K,dir:ne,event:r,first:a.first,initial:a.initial,velocity:Ze,vxvy:Ye};H.first&&i.onSwipeStart&&i.onSwipeStart(H),i.onSwiping&&i.onSwiping(H);let pe=!1;return(i.onSwiping||i.onSwiped||i[`onSwiped${ne}`])&&(pe=!0),pe&&i.preventScrollOnSwipe&&i.trackTouch&&r.cancelable&&r.preventDefault(),Object.assign(Object.assign({},a),{first:!1,eventData:H,swiping:!0})})},d=r=>{t((a,i)=>{let l;if(a.swiping&&a.eventData){if(r.timeStamp-a.start<i.swipeDuration){l=Object.assign(Object.assign({},a.eventData),{event:r}),i.onSwiped&&i.onSwiped(l);const y=i[`onSwiped${l.dir}`];y&&y(l)}}else i.onTap&&i.onTap({event:r});return i.onTouchEndOrOnMouseUp&&i.onTouchEndOrOnMouseUp({event:r}),Object.assign(Object.assign(Object.assign({},a),ie),{eventData:l})})},_=()=>{document.removeEventListener(me,c),document.removeEventListener(_e,f)},f=r=>{_(),d(r)},h=(r,a)=>{let i=()=>{};if(r&&r.addEventListener){const l=Object.assign(Object.assign({},G.touchEventOptions),a.touchEventOptions),y=[[ut,o,l],[dt,c,Object.assign(Object.assign({},l),a.preventScrollOnSwipe?{passive:!1}:{})],[lt,d,l]];y.forEach(([T,S,ae])=>r.addEventListener(T,S,ae)),i=()=>y.forEach(([T,S])=>r.removeEventListener(T,S))}return i},b={ref:r=>{r!==null&&t((a,i)=>{if(a.el===r)return a;const l={};return a.el&&a.el!==r&&a.cleanUpTouch&&(a.cleanUpTouch(),l.cleanUpTouch=void 0),i.trackTouch&&r&&(l.cleanUpTouch=h(r,i)),Object.assign(Object.assign(Object.assign({},a),{el:r}),l)})}};return s.trackMouse&&(b.onMouseDown=o),[b,h]}function _t(t,s,o,c){return!s.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?s.preventScrollOnSwipe!==o.preventScrollOnSwipe||s.touchEventOptions.passive!==o.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:c(t.el,s)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:c(t.el,s)})}function gt(t){const{trackMouse:s}=t,o=g.useRef(Object.assign({},ie)),c=g.useRef(Object.assign({},G)),d=g.useRef(Object.assign({},c.current));d.current=Object.assign({},c.current),c.current=Object.assign(Object.assign({},G),t);let _;for(_ in G)c.current[_]===void 0&&(c.current[_]=G[_]);const[f,h]=g.useMemo(()=>mt(C=>o.current=C(o.current,c.current),{trackMouse:s}),[s]);return o.current=_t(o.current,c.current,d.current,h),f}function ft(t){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substring(0,4))}function We(){return{isMobile:g.useMemo(()=>ft(navigator.userAgent),[])}}var Z=(t=>(t.expandButton="cart.expand",t.reduceButton="cart.reduce",t.removeProductButton="cart.product.remove.button",t))(Z||{});const le={"cart.expand":{[u.de]:"Warenkorb aufklappen",[u.en]:"Expand cart",[u.es]:"Mostrar carrito",[u.fr]:"Afficher le panier",[u.it]:"Espandi carrello",[u.nl]:"Winkelwagentje uitbreiden",[u.pl]:"Pokaż koszyk",[u.pt]:"Expandir carrinho"},"cart.reduce":{[u.de]:"Warenkorb einklappen",[u.en]:"Reduce cart",[u.es]:"Ocultar carrito",[u.fr]:"Masquer le panier",[u.it]:"Riduci carrello",[u.nl]:"Winkelwagentje verminderen",[u.pl]:"Ukryj koszyk",[u.pt]:"Reduzir carrinho"},"cart.product.remove.button":{[u.de]:"Entfernen",[u.en]:"Remove",[u.es]:"Eliminar",[u.fr]:"Supprimer",[u.it]:"Rimuovi",[u.nl]:"Verwijderen",[u.pl]:"Usuń",[u.pt]:"Remover"}},Ve=g.createContext(void 0),Fe=({children:t,i18n:s,locale:o,onOpenChange:c,...d})=>{const{isMobile:_}=We(),[f,h]=g.useState(!1),[C,b]=g.useState(!_);function r(){l(!1)}function a(){l(!0)}function i(){l(!C)}function l(y){b(y),c==null||c({open:y})}return n.jsx(Ve.Provider,{value:{...d,closeCart:r,i18n:s,isEmpty:f,isOpen:C,locale:o,openCart:a,setIsEmpty:h,toggleCart:i},children:t})};function O(){return He(Ve)}Fe.__docgenInfo={description:"",methods:[],displayName:"CartProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const ht="_cart_1stuj_2",yt="_cart__handle_1stuj_13",fe={cart:ht,cart__handle:yt},Ct=g.forwardRef(({children:t,className:s,...o},c)=>{const{closeCart:d,i18n:_,isEmpty:f,isOpen:h,locale:C,openCart:b,toggleCart:r}=O(),{isMobile:a}=We(),{translate:i}=se(le,C,_),l=gt({onSwipedDown:d,onSwipedUp:b,preventScrollOnSwipe:!0});return n.jsxs(Ke,{className:Y(fe.cart,s),color:$e.neutral,"data-ods":"cart",ref:c,...o,children:[!f&&a&&n.jsx(Q,{"aria-label":i(h?Z.reduceButton:Z.expandButton),className:fe.cart__handle,onClick:r,...l}),t]})}),de=({i18n:t,locale:s,onOpenChange:o,...c})=>n.jsx(Fe,{i18n:t,locale:s,onOpenChange:o,children:n.jsx(Ct,{...c})});de.displayName="Cart";de.__docgenInfo={description:"",methods:[],displayName:"Cart",props:{i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"CART_I18N"},{name:"string"}],raw:"Record<CART_I18N, string>"}],raw:"Partial<Record<CART_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: CartOpenChangeDetail) => void",signature:{arguments:[{type:{name:"CartOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the cart open state changes (on Mobile only)."}},composes:["Omit"]};const v=g.forwardRef(({asChild:t,...s},o)=>{const{isEmpty:c}=O();return t?n.jsx(Je,{"data-ods":"cart-action",ref:o,...s}):n.jsx(Q,{"data-ods":"cart-action",disabled:c,ref:o,...s})});v.displayName="CartAction";v.__docgenInfo={description:"",methods:[],displayName:"CartAction"};const ce={"cart-empty":"_cart-empty_12ui2_6","cart-empty__icon":"_cart-empty__icon_12ui2_13","cart-empty__content":"_cart-empty__content_12ui2_16"},k=g.forwardRef(({children:t,className:s,...o},c)=>{const{setIsEmpty:d}=O();return g.useEffect(()=>(d(!0),()=>{d(!1)}),[d]),n.jsxs("div",{className:Y(ce["cart-empty"],s),"data-ods":"cart-empty",ref:c,...o,children:[n.jsx(R,{className:ce["cart-empty__icon"],name:x.shoppingCart}),n.jsx("div",{className:ce["cart-empty__content"],children:t})]})});k.displayName="CartEmpty";k.__docgenInfo={description:"",methods:[],displayName:"CartEmpty",composes:["ComponentPropsWithRef"]};const j=g.forwardRef(({children:t,className:s,...o},c)=>{const{isOpen:d}=O();return n.jsx("div",{className:s,"data-ods":"cart-extra-content",ref:c,...o,style:{...o.style,...d?{}:{display:"none"}},children:t})});j.displayName="CartExtraContent";j.__docgenInfo={description:"",methods:[],displayName:"CartExtraContent",composes:["ComponentPropsWithRef"]};const N={"cart-product-group__header":"_cart-product-group__header_1cpcs_6","cart-product-group__header__trigger":"_cart-product-group__header__trigger_1cpcs_13","cart-product-group__header__trigger__product":"_cart-product-group__header__trigger__product_1cpcs_17","cart-product-group__header__trigger__product__labels":"_cart-product-group__header__trigger__product__labels_1cpcs_23","cart-product-group__header__trigger__product__labels__details":"_cart-product-group__header__trigger__product__labels__details_1cpcs_29","cart-product-group__content":"_cart-product-group__content_1cpcs_34"},he="cart-1",E=g.forwardRef(({children:t,className:s,details:o,label:c,onRemove:d,open:_,price:f,...h},C)=>{const{i18n:b,isOpen:r,locale:a}=O(),{translate:i}=se(le,a,b);return n.jsx(Qe,{className:Y(N["cart-product-group"],s),"data-ods":"cart-product-group",defaultValue:_?[he]:void 0,ref:C,...h,style:{...h.style,...r?{}:{display:"none"}},children:n.jsxs(et,{value:he,children:[n.jsxs("div",{className:N["cart-product-group__header"],children:[n.jsx(tt,{className:N["cart-product-group__header__trigger"],expandIconPosition:"left",children:n.jsxs("div",{className:N["cart-product-group__header__trigger__product"],children:[n.jsxs("div",{className:N["cart-product-group__header__trigger__product__labels"],children:[o&&n.jsx("span",{className:N["cart-product-group__header__trigger__product__labels__details"],children:o}),n.jsx(I,{as:"span",preset:P.heading5,children:c})]}),n.jsx(I,{as:"span",preset:P.heading6,children:f})]})}),d&&n.jsx(Q,{"aria-label":i(Z.removeProductButton),onClick:d,size:Xe.sm,variant:Le.ghost,children:n.jsx(R,{name:x.trash})})]}),n.jsx(rt,{className:N["cart-product-group__content"],children:t})]})})});E.displayName="CartProductGroup";E.__docgenInfo={description:"",methods:[],displayName:"CartProductGroup",props:{details:{required:!1,tsType:{name:"ReactNode"},description:"Product details node to display."},label:{required:!0,tsType:{name:"ReactNode"},description:"Product label node to display."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the remove button is pressed."},price:{required:!0,tsType:{name:"ReactNode"},description:"Formatted price node to display."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the product group."}},composes:["Omit"]};const A={"cart-product-group-item":"_cart-product-group-item_1eu20_6","cart-product-group-item__divider":"_cart-product-group-item__divider_1eu20_17","cart-product-group-item__details":"_cart-product-group-item__details_1eu20_20","cart-product-group-item__item":"_cart-product-group-item__item_1eu20_25","cart-product-group-item__item__label":"_cart-product-group-item__item__label_1eu20_31","cart-product-group-item__item__price":"_cart-product-group-item__item__price_1eu20_37"},p=g.forwardRef(({children:t,className:s,details:o,label:c,onRemove:d,price:_,quantity:f,...h},C)=>{const{i18n:b,locale:r}=O(),{translate:a}=se(le,r,b);return n.jsxs("div",{className:Y(A["cart-product-group-item"],s),"data-ods":"cart-product-group-item",ref:C,...h,children:[o&&n.jsx("span",{className:A["cart-product-group-item__details"],children:o}),n.jsxs("div",{className:A["cart-product-group-item__item"],children:[f!==void 0&&n.jsxs(I,{as:"span",preset:P.small,children:[f,"x"]}),n.jsx("span",{className:A["cart-product-group-item__item__label"],children:c}),n.jsx("span",{className:A["cart-product-group-item__item__price"],children:_}),d&&n.jsx(Q,{"aria-label":a(Z.removeProductButton),onClick:d,size:Xe.sm,variant:Le.ghost,children:n.jsx(R,{name:x.trash})})]}),n.jsx(ee,{className:A["cart-product-group-item__divider"],spacing:at._0})]})});p.displayName="CartProductGroupItem";p.__docgenInfo={description:"",methods:[],displayName:"CartProductGroupItem",props:{details:{required:!1,tsType:{name:"ReactNode"},description:"Product details node to display."},label:{required:!0,tsType:{name:"ReactNode"},description:"Product label node to display."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the remove button is pressed."},price:{required:!0,tsType:{name:"ReactNode"},description:"Formatted price node to display."},quantity:{required:!1,tsType:{name:"number"},description:"Number of selected product."}},composes:["ComponentPropsWithRef"]};const J={"cart-total":"_cart-total_1qt3c_2","cart-total__pricing":"_cart-total__pricing_1qt3c_6","cart-total__details":"_cart-total__details_1qt3c_13","cart-total__details__price":"_cart-total__details__price_1qt3c_19"},w=g.forwardRef(({className:t,label:s,price:o,priceDetails:c,totalDetails:d,..._},f)=>{const{isOpen:h}=O();return n.jsxs("div",{className:Y(J["cart-total"],t),"data-ods":"cart-total",ref:f,..._,children:[n.jsxs("div",{className:J["cart-total__pricing"],children:[n.jsx(I,{as:"span",preset:P.heading4,children:s}),n.jsx(I,{as:"span",preset:P.heading2,children:o})]}),n.jsxs("div",{className:J["cart-total__details"],style:{..._.style,...h?{}:{display:"none"}},children:[n.jsx(I,{as:"span",preset:P.caption,children:d||""}),n.jsx(I,{as:"span",className:J["cart-total__details__price"],preset:P.caption,children:c||""})]})]})});w.displayName="CartTotal";w.__docgenInfo={description:"",methods:[],displayName:"CartTotal",props:{label:{required:!0,tsType:{name:"ReactNode"},description:"Total label node to display."},price:{required:!0,tsType:{name:"ReactNode"},description:"Formatted price node to display."},priceDetails:{required:!1,tsType:{name:"ReactNode"},description:"Price details node to display."},totalDetails:{required:!1,tsType:{name:"ReactNode"},description:"Total details node to display."}},composes:["ComponentPropsWithRef"]};const D=Object.assign(de,{Action:v,Empty:k,ExtraContent:j,ProductGroup:E,ProductGroupItem:p,Total:w}),Et={argTypes:ot(["i18n","locale","onOpenChange"]),component:D,subcomponents:{CartAction:v,CartEmpty:k,CartExtraContent:j,CartProductGroup:E,CartProductGroupItem:p,CartTotal:w},tags:["new"],title:"React Components/Cart"},re=()=>e.createElement(D,{style:{width:"320px"}},e.createElement(E,{details:"Domain",label:"ods.fr",onRemove:()=>{},open:!0,price:m(32.38,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(32.38,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(E,{details:"Domain",label:"ods-doc.fr",onRemove:()=>{},price:m(12.7,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(12.7,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(j,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--ods-theme-text-color)"}},"23% VAT / 2 years"),e.createElement("span",{style:{fontSize:"14px",fontWeight:700,color:"var(--ods-theme-text-color)"}},m(13.47,"en-GB","EUR"))),e.createElement(ee,{style:{marginTop:"calc(var(--ods-theme-row-gap) * 2)"}})),e.createElement(w,{label:"Total",priceDetails:e.createElement("div",null,e.createElement("span",null,"ex. VAT / year"),e.createElement("br",null),e.createElement("span",null,"i.e. €XX.XX incl. VAT / year")),totalDetails:"2 products",price:m(58.55,"en-GB","EUR")}),e.createElement(v,null,"Continue my order ",e.createElement(R,{name:x.arrowRight}))),q={render:()=>e.createElement(re,null)},B={tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",alignItems:"start",gap:"var(--ods-theme-row-gap) var(--ods-theme-column-gap)"}},e.createElement(re,null),e.createElement(D,null,e.createElement(k,null,"Your cart is empty"),e.createElement(v,null,"Continue my order ",e.createElement(R,{name:x.arrowRight}))))},z={globals:{imports:"import { Cart, CartAction, CartProductGroup, CartProductGroupItem, CartTotal, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...te()}}},tags:["!dev"],render:({})=>e.createElement(D,null,e.createElement(E,{label:"Product",price:m(13.24)},e.createElement(p,{label:"Lorem ipsum dolor",price:m(3.24)}),e.createElement(p,{label:"Lorem ipsum dolor",price:m(13)})),e.createElement(w,{label:"Total",price:m(16.24)}),e.createElement(v,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},L={globals:{imports:"import { Cart, CartAction, CartEmpty, ICON_NAME, Icon } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...te()}}},tags:["!dev"],render:({})=>e.createElement(D,null,e.createElement(k,null,"Your cart is empty"),e.createElement(v,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},X={globals:{imports:"import { Cart, CartAction, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, Divider, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...te()}}},tags:["!dev"],render:({})=>e.createElement(D,{style:{width:"320px"}},e.createElement(E,{details:"Domain",label:"ods.fr",onRemove:()=>{},open:!0,price:m(32.38,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(32.38,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(E,{details:"Domain",label:"ods-doc.fr",onRemove:()=>{},price:m(12.7,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(12.7,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(j,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--ods-theme-text-color)"}},"23% VAT / 2 years"),e.createElement("span",{style:{fontSize:"14px",fontWeight:700,color:"var(--ods-theme-text-color)"}},m(13.47,"en-GB","EUR"))),e.createElement(ee,{style:{marginTop:"calc(var(--ods-theme-row-gap) * 2)"}})),e.createElement(w,{label:"Total",priceDetails:e.createElement("div",null,e.createElement("span",null,"ex. VAT / year"),e.createElement("br",null),e.createElement("span",null,"i.e. €XX.XX incl. VAT / year")),totalDetails:"2 products",price:m(58.55,"en-GB","EUR")}),e.createElement(v,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},W={globals:{imports:"import { Cart, CartAction, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, Divider, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...te()}},userAgent:"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36"},tags:["!dev"],render:({})=>e.createElement(D,{style:{width:"320px"}},e.createElement(E,{details:"Domain",label:"ods.fr",onRemove:()=>{},open:!0,price:m(32.38,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(32.38,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(E,{details:"Domain",label:"ods-doc.fr",onRemove:()=>{},price:m(12.7,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(12.7,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(j,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--ods-theme-text-color)"}},"23% VAT / 2 years"),e.createElement("span",{style:{fontSize:"14px",fontWeight:700,color:"var(--ods-theme-text-color)"}},m(13.47,"en-GB","EUR"))),e.createElement(ee,{style:{marginTop:"calc(var(--ods-theme-row-gap) * 2)"}})),e.createElement(w,{label:"Total",priceDetails:e.createElement("div",null,e.createElement("span",null,"ex. VAT / year"),e.createElement("br",null),e.createElement("span",null,"i.e. €XX.XX incl. VAT / year")),totalDetails:"2 products",price:m(58.55,"en-GB","EUR")}),e.createElement(v,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},V={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(re,null)},F={name:"ThemeGenerator",parameters:{docs:{disable:!0},layout:"fullscreen",options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement(re,null)};var ye,Ce,Ee;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <FullExample />
}`,...(Ee=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var be,ve,Re;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    alignItems: 'start',
    gap: 'var(--ods-theme-row-gap) var(--ods-theme-column-gap)'
  }}>
      <FullExample />

      <Cart>
        <CartEmpty>
          Your cart is empty
        </CartEmpty>

        <CartAction>
          Continue my order <Icon name={ICON_NAME.arrowRight} />
        </CartAction>
      </Cart>
    </div>
}`,...(Re=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var xe,Se,we;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Cart, CartAction, CartProductGroup, CartProductGroupItem, CartTotal, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <Cart>
      <CartProductGroup label="Product" price={formatPrice(13.24)}>
        <CartProductGroupItem label="Lorem ipsum dolor" price={formatPrice(3.24)} />

        <CartProductGroupItem label="Lorem ipsum dolor" price={formatPrice(13)} />
      </CartProductGroup>

      <CartTotal label="Total" price={formatPrice(16.24)} />

      <CartAction>
        Continue my order <Icon name={ICON_NAME.arrowRight} />
      </CartAction>
    </Cart>
}`,...(we=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Te,Ne,Ie;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Cart, CartAction, CartEmpty, ICON_NAME, Icon } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <Cart>
      <CartEmpty>
        Your cart is empty
      </CartEmpty>

      <CartAction>
        Continue my order <Icon name={ICON_NAME.arrowRight} />
      </CartAction>
    </Cart>
}`,...(Ie=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var Pe,Oe,je;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Cart, CartAction, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, Divider, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <Cart style={{
    width: '320px'
  }}>
      <CartProductGroup details="Domain" label="ods.fr" onRemove={() => {}} open price={formatPrice(32.38, 'en-GB', 'EUR')}>
        <CartProductGroupItem details="Duration" label="2 years" onRemove={() => {}} price={formatPrice(32.38, 'en-GB', 'EUR')} />

        <CartProductGroupItem details="DNSSEC" label="Secure DNS" onRemove={() => {}} price="Included" quantity={1} />

        <CartProductGroupItem details="E-mail account" label="Zimbra Starter" onRemove={() => {}} price="Included" quantity={1} />
      </CartProductGroup>

      <CartProductGroup details="Domain" label="ods-doc.fr" onRemove={() => {}} price={formatPrice(12.70, 'en-GB', 'EUR')}>
        <CartProductGroupItem details="Duration" label="2 years" onRemove={() => {}} price={formatPrice(12.70, 'en-GB', 'EUR')} />

        <CartProductGroupItem details="DNSSEC" label="Secure DNS" onRemove={() => {}} price="Included" quantity={1} />

        <CartProductGroupItem details="E-mail account" label="Zimbra Starter" onRemove={() => {}} price="Included" quantity={1} />
      </CartProductGroup>

      <CartExtraContent>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <span style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--ods-theme-text-color)'
        }}>23% VAT / 2 years</span>
          <span style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--ods-theme-text-color)'
        }}>{formatPrice(13.47, 'en-GB', 'EUR')}</span>
        </div>

        <Divider style={{
        marginTop: 'calc(var(--ods-theme-row-gap) * 2)'
      }} />
      </CartExtraContent>

      <CartTotal label="Total" priceDetails={<div>
            <span>ex. VAT / year</span>
            <br />
            <span>i.e. €XX.XX incl. VAT / year</span>
          </div>} totalDetails="2 products" price={formatPrice(58.55, 'en-GB', 'EUR')} />

      <CartAction>
        Continue my order <Icon name={ICON_NAME.arrowRight} />
      </CartAction>
    </Cart>
}`,...(je=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var De,Ae,Ge;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Cart, CartAction, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, Divider, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    },
    userAgent: 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
  },
  tags: ['!dev'],
  render: ({}) => <Cart style={{
    width: '320px'
  }}>
      <CartProductGroup details="Domain" label="ods.fr" onRemove={() => {}} open price={formatPrice(32.38, 'en-GB', 'EUR')}>
        <CartProductGroupItem details="Duration" label="2 years" onRemove={() => {}} price={formatPrice(32.38, 'en-GB', 'EUR')} />

        <CartProductGroupItem details="DNSSEC" label="Secure DNS" onRemove={() => {}} price="Included" quantity={1} />

        <CartProductGroupItem details="E-mail account" label="Zimbra Starter" onRemove={() => {}} price="Included" quantity={1} />
      </CartProductGroup>

      <CartProductGroup details="Domain" label="ods-doc.fr" onRemove={() => {}} price={formatPrice(12.70, 'en-GB', 'EUR')}>
        <CartProductGroupItem details="Duration" label="2 years" onRemove={() => {}} price={formatPrice(12.70, 'en-GB', 'EUR')} />

        <CartProductGroupItem details="DNSSEC" label="Secure DNS" onRemove={() => {}} price="Included" quantity={1} />

        <CartProductGroupItem details="E-mail account" label="Zimbra Starter" onRemove={() => {}} price="Included" quantity={1} />
      </CartProductGroup>

      <CartExtraContent>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <span style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--ods-theme-text-color)'
        }}>23% VAT / 2 years</span>
          <span style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--ods-theme-text-color)'
        }}>{formatPrice(13.47, 'en-GB', 'EUR')}</span>
        </div>

        <Divider style={{
        marginTop: 'calc(var(--ods-theme-row-gap) * 2)'
      }} />
      </CartExtraContent>

      <CartTotal label="Total" priceDetails={<div>
            <span>ex. VAT / year</span>
            <br />
            <span>i.e. €XX.XX incl. VAT / year</span>
          </div>} totalDetails="2 products" price={formatPrice(58.55, 'en-GB', 'EUR')} />

      <CartAction>
        Continue my order <Icon name={ICON_NAME.arrowRight} />
      </CartAction>
    </Cart>
}`,...(Ge=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var ke,Me,Ue;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <FullExample />
}`,...(Ue=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var qe,Be,ze;F.parameters={...F.parameters,docs:{...(qe=F.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'ThemeGenerator',
  parameters: {
    docs: {
      disable: true
    },
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  },
  tags: ['!dev', 'hidden'],
  render: ({}) => <FullExample />
}`,...(ze=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};const bt=["Demo","AnatomyTech","Default","Empty","Full","Mobile","Overview","ThemeGenerator"],Ut=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:B,Default:z,Demo:q,Empty:L,Full:X,Mobile:W,Overview:V,ThemeGenerator:F,__namedExportsOrder:bt,default:Et},Symbol.toStringTag,{value:"Module"}));export{B as A,Ut as C,z as D,L as E,X as F,W as M,V as O};
