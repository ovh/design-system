import{r as g,e}from"./index-jIWwRBLr.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as F}from"./index-CqY9YpN0.js";import{L as u,u as ce}from"./useI18n-C0NLVYPv.js";import{B as H,d as qe,c as Me}from"./Button-B-GJ-1TA.js";import{a as We}from"./colors-DSObuHxd.js";import{C as Ve}from"./Card-Dg62f6NA.js";import{u as Fe}from"./context-C_-r2uoG.js";import{A as Ze}from"./AsChild-BQZQcPff.js";import{I as R,a as x}from"./icon-name-DsSs6qF8.js";import{c as Ke,a as Ye,A as $e,b as He}from"./AccordionTrigger-CN-xz2wZ.js";import{T as I,a as j}from"./Text-CW33_IfE.js";import{D as J,d as Je}from"./divider-color-ZGInUGqC.js";import{f as m}from"./format-BeWtzLYr.js";import{e as Qe}from"./controls-BtiQQn1l.js";import{s as Q}from"./source-CPEZJ6oD.js";const et="Left",tt="Right",rt="Up",at="Down",G={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},ne={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},ue="mousemove",pe="mouseup",ot="touchend",nt="touchmove",ct="touchstart";function it(t,s,n,c){return t>s?n>0?tt:et:c>0?at:rt}function me(t,s){if(s===0)return t;const n=Math.PI/180*s,c=t[0]*Math.cos(n)+t[1]*Math.sin(n),d=t[1]*Math.cos(n)-t[0]*Math.sin(n);return[c,d]}function st(t,s){const n=r=>{const a="touches"in r;a&&r.touches.length>1||t((i,l)=>{l.trackMouse&&!a&&(document.addEventListener(ue,c),document.addEventListener(pe,f));const{clientX:y,clientY:T}=a?r.touches[0]:r,v=me([y,T],l.rotationAngle);return l.onTouchStartOrOnMouseDown&&l.onTouchStartOrOnMouseDown({event:r}),Object.assign(Object.assign(Object.assign({},i),ne),{initial:v.slice(),xy:v,start:r.timeStamp||0})})},c=r=>{t((a,i)=>{const l="touches"in r;if(l&&r.touches.length>1)return a;if(r.timeStamp-a.start>i.swipeDuration)return a.swiping?Object.assign(Object.assign({},a),{swiping:!1}):a;const{clientX:y,clientY:T}=l?r.touches[0]:r,[v,te]=me([y,T],i.rotationAngle),Z=v-a.xy[0],K=te-a.xy[1],k=Math.abs(Z),q=Math.abs(K),re=(r.timeStamp||0)-a.start,Le=Math.sqrt(k*k+q*q)/(re||1),Xe=[Z/(re||1),K/(re||1)],ae=it(k,q,Z,K),le=typeof i.delta=="number"?i.delta:i.delta[ae.toLowerCase()]||G.delta;if(k<le&&q<le&&!a.swiping)return a;const Y={absX:k,absY:q,deltaX:Z,deltaY:K,dir:ae,event:r,first:a.first,initial:a.initial,velocity:Le,vxvy:Xe};Y.first&&i.onSwipeStart&&i.onSwipeStart(Y),i.onSwiping&&i.onSwiping(Y);let de=!1;return(i.onSwiping||i.onSwiped||i[`onSwiped${ae}`])&&(de=!0),de&&i.preventScrollOnSwipe&&i.trackTouch&&r.cancelable&&r.preventDefault(),Object.assign(Object.assign({},a),{first:!1,eventData:Y,swiping:!0})})},d=r=>{t((a,i)=>{let l;if(a.swiping&&a.eventData){if(r.timeStamp-a.start<i.swipeDuration){l=Object.assign(Object.assign({},a.eventData),{event:r}),i.onSwiped&&i.onSwiped(l);const y=i[`onSwiped${l.dir}`];y&&y(l)}}else i.onTap&&i.onTap({event:r});return i.onTouchEndOrOnMouseUp&&i.onTouchEndOrOnMouseUp({event:r}),Object.assign(Object.assign(Object.assign({},a),ne),{eventData:l})})},_=()=>{document.removeEventListener(ue,c),document.removeEventListener(pe,f)},f=r=>{_(),d(r)},h=(r,a)=>{let i=()=>{};if(r&&r.addEventListener){const l=Object.assign(Object.assign({},G.touchEventOptions),a.touchEventOptions),y=[[ct,n,l],[nt,c,Object.assign(Object.assign({},l),a.preventScrollOnSwipe?{passive:!1}:{})],[ot,d,l]];y.forEach(([T,v,te])=>r.addEventListener(T,v,te)),i=()=>y.forEach(([T,v])=>r.removeEventListener(T,v))}return i},E={ref:r=>{r!==null&&t((a,i)=>{if(a.el===r)return a;const l={};return a.el&&a.el!==r&&a.cleanUpTouch&&(a.cleanUpTouch(),l.cleanUpTouch=void 0),i.trackTouch&&r&&(l.cleanUpTouch=h(r,i)),Object.assign(Object.assign(Object.assign({},a),{el:r}),l)})}};return s.trackMouse&&(E.onMouseDown=n),[E,h]}function lt(t,s,n,c){return!s.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?s.preventScrollOnSwipe!==n.preventScrollOnSwipe||s.touchEventOptions.passive!==n.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:c(t.el,s)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:c(t.el,s)})}function dt(t){const{trackMouse:s}=t,n=g.useRef(Object.assign({},ne)),c=g.useRef(Object.assign({},G)),d=g.useRef(Object.assign({},c.current));d.current=Object.assign({},c.current),c.current=Object.assign(Object.assign({},G),t);let _;for(_ in G)c.current[_]===void 0&&(c.current[_]=G[_]);const[f,h]=g.useMemo(()=>st(C=>n.current=C(n.current,c.current),{trackMouse:s}),[s]);return n.current=lt(n.current,c.current,d.current,h),f}function ut(t){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substring(0,4))}function Ue(){return{isMobile:g.useMemo(()=>ut(navigator.userAgent),[])}}var V=(t=>(t.expandButton="cart.expand",t.reduceButton="cart.reduce",t.removeProductButton="cart.product.remove.button",t))(V||{});const ie={"cart.expand":{[u.de]:"Warenkorb aufklappen",[u.en]:"Expand cart",[u.es]:"Mostrar carrito",[u.fr]:"Afficher le panier",[u.it]:"Espandi carrello",[u.nl]:"Winkelwagentje uitbreiden",[u.pl]:"Pokaż koszyk",[u.pt]:"Expandir carrinho"},"cart.reduce":{[u.de]:"Warenkorb einklappen",[u.en]:"Reduce cart",[u.es]:"Ocultar carrito",[u.fr]:"Masquer le panier",[u.it]:"Riduci carrello",[u.nl]:"Winkelwagentje verminderen",[u.pl]:"Ukryj koszyk",[u.pt]:"Reduzir carrinho"},"cart.product.remove.button":{[u.de]:"Entfernen",[u.en]:"Remove",[u.es]:"Eliminar",[u.fr]:"Supprimer",[u.it]:"Rimuovi",[u.nl]:"Verwijderen",[u.pl]:"Usuń",[u.pt]:"Remover"}},Be=g.createContext(void 0),ze=({children:t,i18n:s,locale:n,onOpenChange:c,...d})=>{const{isMobile:_}=Ue(),[f,h]=g.useState(!1),[C,E]=g.useState(!_);function r(){l(!1)}function a(){l(!0)}function i(){l(!C)}function l(y){E(y),c==null||c({open:y})}return o.jsx(Be.Provider,{value:{...d,closeCart:r,i18n:s,isEmpty:f,isOpen:C,locale:n,openCart:a,setIsEmpty:h,toggleCart:i},children:t})};function P(){return Fe(Be)}ze.__docgenInfo={description:"",methods:[],displayName:"CartProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const pt="_cart_1stuj_2",mt="_cart__handle_1stuj_13",_e={cart:pt,cart__handle:mt},_t=g.forwardRef(({children:t,className:s,...n},c)=>{const{closeCart:d,i18n:_,isEmpty:f,isOpen:h,locale:C,openCart:E,toggleCart:r}=P(),{isMobile:a}=Ue(),{translate:i}=ce(ie,C,_),l=dt({onSwipedDown:d,onSwipedUp:E,preventScrollOnSwipe:!0});return o.jsxs(Ve,{className:F(_e.cart,s),color:We.neutral,"data-ods":"cart",ref:c,...n,children:[!f&&a&&o.jsx(H,{"aria-label":i(h?V.reduceButton:V.expandButton),className:_e.cart__handle,onClick:r,...l}),t]})}),S=({i18n:t,locale:s,onOpenChange:n,...c})=>o.jsx(ze,{i18n:t,locale:s,onOpenChange:n,children:o.jsx(_t,{...c})});S.displayName="Cart";S.__docgenInfo={description:"",methods:[],displayName:"Cart",props:{i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"CART_I18N"},{name:"string"}],raw:"Record<CART_I18N, string>"}],raw:"Partial<Record<CART_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: CartOpenChangeDetail) => void",signature:{arguments:[{type:{name:"CartOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the cart open state changes (on Mobile only)."}},composes:["Omit"]};const w=g.forwardRef(({asChild:t,...s},n)=>{const{isEmpty:c}=P();return t?o.jsx(Ze,{"data-ods":"cart-action",ref:n,...s}):o.jsx(H,{"data-ods":"cart-action",disabled:c,ref:n,...s})});w.displayName="CartAction";w.__docgenInfo={description:"",methods:[],displayName:"CartAction"};const oe={"cart-empty":"_cart-empty_12ui2_6","cart-empty__icon":"_cart-empty__icon_12ui2_13","cart-empty__content":"_cart-empty__content_12ui2_16"},ee=g.forwardRef(({children:t,className:s,...n},c)=>{const{setIsEmpty:d}=P();return g.useEffect(()=>(d(!0),()=>{d(!1)}),[d]),o.jsxs("div",{className:F(oe["cart-empty"],s),"data-ods":"cart-empty",ref:c,...n,children:[o.jsx(R,{className:oe["cart-empty__icon"],name:x.shoppingCart}),o.jsx("div",{className:oe["cart-empty__content"],children:t})]})});ee.displayName="CartEmpty";ee.__docgenInfo={description:"",methods:[],displayName:"CartEmpty",composes:["ComponentPropsWithRef"]};const A=g.forwardRef(({children:t,className:s,...n},c)=>{const{isOpen:d}=P();return o.jsx("div",{className:s,"data-ods":"cart-extra-content",ref:c,...n,style:{...n.style,...d?{}:{display:"none"}},children:t})});A.displayName="CartExtraContent";A.__docgenInfo={description:"",methods:[],displayName:"CartExtraContent",composes:["ComponentPropsWithRef"]};const N={"cart-product-group__header":"_cart-product-group__header_1cpcs_6","cart-product-group__header__trigger":"_cart-product-group__header__trigger_1cpcs_13","cart-product-group__header__trigger__product":"_cart-product-group__header__trigger__product_1cpcs_17","cart-product-group__header__trigger__product__labels":"_cart-product-group__header__trigger__product__labels_1cpcs_23","cart-product-group__header__trigger__product__labels__details":"_cart-product-group__header__trigger__product__labels__details_1cpcs_29","cart-product-group__content":"_cart-product-group__content_1cpcs_34"},ge="cart-1",b=g.forwardRef(({children:t,className:s,details:n,label:c,onRemove:d,open:_,price:f,...h},C)=>{const{i18n:E,isOpen:r,locale:a}=P(),{translate:i}=ce(ie,a,E);return o.jsx(Ke,{className:F(N["cart-product-group"],s),"data-ods":"cart-product-group",defaultValue:_?[ge]:void 0,ref:C,...h,style:{...h.style,...r?{}:{display:"none"}},children:o.jsxs(Ye,{value:ge,children:[o.jsxs("div",{className:N["cart-product-group__header"],children:[o.jsx($e,{className:N["cart-product-group__header__trigger"],expandIconPosition:"left",children:o.jsxs("div",{className:N["cart-product-group__header__trigger__product"],children:[o.jsxs("div",{className:N["cart-product-group__header__trigger__product__labels"],children:[n&&o.jsx("span",{className:N["cart-product-group__header__trigger__product__labels__details"],children:n}),o.jsx(I,{as:"span",preset:j.heading5,children:c})]}),o.jsx(I,{as:"span",preset:j.heading6,children:f})]})}),d&&o.jsx(H,{"aria-label":i(V.removeProductButton),onClick:d,size:Me.sm,variant:qe.ghost,children:o.jsx(R,{name:x.trash})})]}),o.jsx(He,{className:N["cart-product-group__content"],children:t})]})})});b.displayName="CartProductGroup";b.__docgenInfo={description:"",methods:[],displayName:"CartProductGroup",props:{details:{required:!1,tsType:{name:"ReactNode"},description:"Product details node to display."},label:{required:!0,tsType:{name:"ReactNode"},description:"Product label node to display."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the remove button is pressed."},price:{required:!0,tsType:{name:"ReactNode"},description:"Formatted price node to display."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the product group."}},composes:["Omit"]};const D={"cart-product-group-item":"_cart-product-group-item_1jcqg_6","cart-product-group-item__divider":"_cart-product-group-item__divider_1jcqg_18","cart-product-group-item__details":"_cart-product-group-item__details_1jcqg_21","cart-product-group-item__item":"_cart-product-group-item__item_1jcqg_26","cart-product-group-item__item__label":"_cart-product-group-item__item__label_1jcqg_32","cart-product-group-item__item__price":"_cart-product-group-item__item__price_1jcqg_38"},p=g.forwardRef(({children:t,className:s,details:n,label:c,onRemove:d,price:_,quantity:f,...h},C)=>{const{i18n:E,locale:r}=P(),{translate:a}=ce(ie,r,E);return o.jsxs("div",{className:F(D["cart-product-group-item"],s),"data-ods":"cart-product-group-item",ref:C,...h,children:[o.jsxs("div",{children:[n&&o.jsx("span",{className:D["cart-product-group-item__details"],children:n}),o.jsxs("div",{className:D["cart-product-group-item__item"],children:[f!==void 0&&o.jsxs(I,{as:"span",preset:j.small,children:[f,"x"]}),o.jsx("span",{className:D["cart-product-group-item__item__label"],children:c}),o.jsx("span",{className:D["cart-product-group-item__item__price"],children:_})]})]}),d&&o.jsx(H,{"aria-label":a(V.removeProductButton),onClick:d,size:Me.sm,variant:qe.ghost,children:o.jsx(R,{name:x.trash})}),o.jsx(J,{className:D["cart-product-group-item__divider"],spacing:Je._0})]})});p.displayName="CartProductGroupItem";p.__docgenInfo={description:"",methods:[],displayName:"CartProductGroupItem",props:{details:{required:!1,tsType:{name:"ReactNode"},description:"Product details node to display."},label:{required:!0,tsType:{name:"ReactNode"},description:"Product label node to display."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the remove button is pressed."},price:{required:!0,tsType:{name:"ReactNode"},description:"Formatted price node to display."},quantity:{required:!1,tsType:{name:"number"},description:"Number of selected product."}},composes:["ComponentPropsWithRef"]};const $={"cart-total":"_cart-total_1qt3c_2","cart-total__pricing":"_cart-total__pricing_1qt3c_6","cart-total__details":"_cart-total__details_1qt3c_13","cart-total__details__price":"_cart-total__details__price_1qt3c_19"},O=g.forwardRef(({className:t,label:s,price:n,priceDetails:c,totalDetails:d,..._},f)=>{const{isOpen:h}=P();return o.jsxs("div",{className:F($["cart-total"],t),"data-ods":"cart-total",ref:f,..._,children:[o.jsxs("div",{className:$["cart-total__pricing"],children:[o.jsx(I,{as:"span",preset:j.heading4,children:s}),o.jsx(I,{as:"span",preset:j.heading2,children:n})]}),o.jsxs("div",{className:$["cart-total__details"],style:{..._.style,...h?{}:{display:"none"}},children:[o.jsx(I,{as:"span",preset:j.caption,children:d||""}),o.jsx(I,{as:"span",className:$["cart-total__details__price"],preset:j.caption,children:c||""})]})]})});O.displayName="CartTotal";O.__docgenInfo={description:"",methods:[],displayName:"CartTotal",props:{label:{required:!0,tsType:{name:"ReactNode"},description:"Total label node to display."},price:{required:!0,tsType:{name:"ReactNode"},description:"Formatted price node to display."},priceDetails:{required:!1,tsType:{name:"ReactNode"},description:"Price details node to display."},totalDetails:{required:!1,tsType:{name:"ReactNode"},description:"Total details node to display."}},composes:["ComponentPropsWithRef"]};const gt={argTypes:Qe(["i18n","locale","onOpenChange"]),component:S,subcomponents:{CartAction:w,CartEmpty:ee,CartExtraContent:A,CartProductGroup:b,CartProductGroupItem:p,CartTotal:O},tags:["new"],title:"React Components/Cart"},se=()=>e.createElement(S,{style:{width:"320px"}},e.createElement(b,{details:"Domain",label:"ods.fr",onRemove:()=>{},open:!0,price:m(32.38,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(32.38,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(b,{details:"Domain",label:"ods-doc.fr",onRemove:()=>{},price:m(12.7,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(12.7,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(A,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--ods-theme-text-color)"}},"23% VAT / 2 years"),e.createElement("span",{style:{fontSize:"14px",fontWeight:700,color:"var(--ods-theme-text-color)"}},m(13.47,"en-GB","EUR"))),e.createElement(J,{style:{marginTop:"calc(var(--ods-theme-row-gap) * 2)"}})),e.createElement(O,{label:"Total",priceDetails:e.createElement("div",null,e.createElement("span",null,"ex. VAT / year"),e.createElement("br",null),e.createElement("span",null,"i.e. €XX.XX incl. VAT / year")),totalDetails:"2 products",price:m(58.55,"en-GB","EUR")}),e.createElement(w,null,"Continue my order ",e.createElement(R,{name:x.arrowRight}))),M={render:()=>e.createElement(se,null)},U={globals:{imports:"import { Cart, CartAction, CartProductGroup, CartProductGroupItem, CartTotal, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...Q()}}},tags:["!dev"],render:({})=>e.createElement(S,null,e.createElement(b,{label:"Product",price:m(13.24)},e.createElement(p,{label:"Lorem ipsum dolor",price:m(3.24)}),e.createElement(p,{label:"Lorem ipsum dolor",price:m(13)})),e.createElement(O,{label:"Total",price:m(16.24)}),e.createElement(w,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},B={globals:{imports:"import { Cart, CartAction, CartEmpty, ICON_NAME, Icon } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...Q()}}},tags:["!dev"],render:({})=>e.createElement(S,null,e.createElement(ee,null,"Your cart is empty"),e.createElement(w,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},z={globals:{imports:"import { Cart, CartAction, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, Divider, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...Q()}}},tags:["!dev"],render:({})=>e.createElement(S,{style:{width:"320px"}},e.createElement(b,{details:"Domain",label:"ods.fr",onRemove:()=>{},open:!0,price:m(32.38,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(32.38,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(b,{details:"Domain",label:"ods-doc.fr",onRemove:()=>{},price:m(12.7,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(12.7,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(A,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--ods-theme-text-color)"}},"23% VAT / 2 years"),e.createElement("span",{style:{fontSize:"14px",fontWeight:700,color:"var(--ods-theme-text-color)"}},m(13.47,"en-GB","EUR"))),e.createElement(J,{style:{marginTop:"calc(var(--ods-theme-row-gap) * 2)"}})),e.createElement(O,{label:"Total",priceDetails:e.createElement("div",null,e.createElement("span",null,"ex. VAT / year"),e.createElement("br",null),e.createElement("span",null,"i.e. €XX.XX incl. VAT / year")),totalDetails:"2 products",price:m(58.55,"en-GB","EUR")}),e.createElement(w,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},L={globals:{imports:"import { Cart, CartAction, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, Divider, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...Q()}},userAgent:"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36"},tags:["!dev"],render:({})=>e.createElement(S,{style:{width:"320px"}},e.createElement(b,{details:"Domain",label:"ods.fr",onRemove:()=>{},open:!0,price:m(32.38,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(32.38,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(b,{details:"Domain",label:"ods-doc.fr",onRemove:()=>{},price:m(12.7,"en-GB","EUR")},e.createElement(p,{details:"Duration",label:"2 years",onRemove:()=>{},price:m(12.7,"en-GB","EUR")}),e.createElement(p,{details:"DNSSEC",label:"Secure DNS",onRemove:()=>{},price:"Included",quantity:1}),e.createElement(p,{details:"E-mail account",label:"Zimbra Starter",onRemove:()=>{},price:"Included",quantity:1})),e.createElement(A,null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--ods-theme-text-color)"}},"23% VAT / 2 years"),e.createElement("span",{style:{fontSize:"14px",fontWeight:700,color:"var(--ods-theme-text-color)"}},m(13.47,"en-GB","EUR"))),e.createElement(J,{style:{marginTop:"calc(var(--ods-theme-row-gap) * 2)"}})),e.createElement(O,{label:"Total",priceDetails:e.createElement("div",null,e.createElement("span",null,"ex. VAT / year"),e.createElement("br",null),e.createElement("span",null,"i.e. €XX.XX incl. VAT / year")),totalDetails:"2 products",price:m(58.55,"en-GB","EUR")}),e.createElement(w,null,"Continue my order ",e.createElement(R,{name:x.arrowRight})))},X={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(se,null)},W={name:"ThemeGenerator",parameters:{docs:{disable:!0},layout:"fullscreen",options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement(se,null)};var fe,he,ye;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <FullExample />
}`,...(ye=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Ce,Ee,be;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(be=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:be.source}}};var ve,Re,xe;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:xe.source}}};var Se,we,Te;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(we=z.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Ne,Ie,je;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(je=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Pe,Oe,De;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <FullExample />
}`,...(De=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Ge,Ae,ke;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(ke=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};const ft=["Demo","Default","Empty","Full","Mobile","Overview","ThemeGenerator"],Dt=Object.freeze(Object.defineProperty({__proto__:null,Default:U,Demo:M,Empty:B,Full:z,Mobile:L,Overview:X,ThemeGenerator:W,__namedExportsOrder:ft,default:gt},Symbol.toStringTag,{value:"Module"}));export{Dt as C,U as D,B as E,z as F,L as M,X as O};
