import{r as x,e as d}from"./index-D_CmzhJ4.js";import{O as $e}from"./OdsButton-BdAON5Xz.js";import{O as ot,a as rt}from"./icon-name-CmqPEXVL.js";import{j as T}from"./jsx-runtime-VM66peLj.js";import{u as ce,g as st,a as de,s as nt,b as it,P as at,O as Ye,c as ct,d as ue}from"./portal-Qh9imqPK.js";import{o as lt,m as _,d as q,e as dt,u as A,a as X,g as ut,F as I,I as pe,J as H,b as k,K as pt,x as le,L as z,M as fe,l as ft,w as ht,N as gt,s as vt,O as mt,P as Ot,Q as L,R as B,S as bt,T as yt,U as Pt,B as Et,C as wt,V as Tt,q as Ct,W as he,X as Nt}from"./index-DDDhx9B2.js";import{c as Ft,b as It,d as xt,a as kt,n as At}from"./use-locale-context-D9QOpgGs.js";import{c as Lt}from"./index-CkQHsVsO.js";import{e as St,o as Dt,C as oe}from"./controls-BtiQQn1l.js";const[Rt,U]=lt({name:"PopoverContext",hookName:"usePopoverContext",providerName:"<PopoverProvider />"}),He=x.forwardRef((e,t)=>{const r=U(),o=_(r.getArrowProps(),e);return T.jsx(q.div,{...o,ref:t})});He.displayName="PopoverArrow";const qe=x.forwardRef((e,t)=>{const r=U(),o=_(r.getArrowTipProps(),e);return T.jsx(q.div,{...o,ref:t})});qe.displayName="PopoverArrowTip";const Xe=x.forwardRef((e,t)=>{const r=U(),o=ce(),s=_(r.getContentProps(),o.getPresenceProps(),e);return o.unmounted?null:T.jsx(q.div,{...s,ref:dt(o.ref,t)})});Xe.displayName="PopoverContent";const Ue=x.forwardRef((e,t)=>{const r=U(),o=ce(),s=_(r.getPositionerProps(),e);return o.unmounted?null:T.jsx(q.div,{...s,ref:t})});Ue.displayName="PopoverPositioner";var S=new WeakMap,Q=new WeakMap,Z={},re=0,Je=e=>e&&(e.host||Je(e.parentNode)),_t=(e,t)=>t.map(r=>{if(e.contains(r))return r;const o=Je(r);return o&&e.contains(o)?o:(console.error("[zag-js > ariaHidden] target",r,"in not contained inside",e,". Doing nothing"),null)}).filter(r=>!!r),Bt=e=>e.localName==="next-route-announcer"||e.localName==="script"||e.hasAttribute("aria-live")?!0:e.matches("[data-live-announcer]"),Mt=(e,t)=>{const{parentNode:r,markerName:o,controlAttribute:s}=t,n=_t(r,Array.isArray(e)?e:[e]);Z[o]||(Z[o]=new WeakMap);const i=Z[o],l=[],p=new Set,c=new Set(n),f=u=>{!u||p.has(u)||(p.add(u),f(u.parentNode))};n.forEach(f);const v=u=>{!u||c.has(u)||Array.prototype.forEach.call(u.children,a=>{if(p.has(a))v(a);else try{if(Bt(a))return;const E=a.getAttribute(s)==="true",O=(S.get(a)||0)+1,g=(i.get(a)||0)+1;S.set(a,O),i.set(a,g),l.push(a),O===1&&E&&Q.set(a,!0),g===1&&a.setAttribute(o,""),E||a.setAttribute(s,"true")}catch(h){console.error("[zag-js > ariaHidden] cannot operate on ",a,h)}})};return v(r),p.clear(),re++,()=>{l.forEach(u=>{const a=S.get(u)-1,h=i.get(u)-1;S.set(u,a),i.set(u,h),a||(Q.has(u)||u.removeAttribute(s),Q.delete(u)),h||u.removeAttribute(o)}),re--,re||(S=new WeakMap,S=new WeakMap,Q=new WeakMap,Z={})}},Gt=e=>(Array.isArray(e)?e[0]:e).ownerDocument.body,Vt=(e,t=Gt(e),r="data-aria-hidden")=>{if(t)return Mt(e,{parentNode:t,markerName:r,controlAttribute:"aria-hidden"})},jt=e=>{const t=requestAnimationFrame(()=>e());return()=>cancelAnimationFrame(t)};function Kt(e,t={}){const{defer:r=!0}=t,o=r?jt:n=>n(),s=[];return s.push(o(()=>{const i=(typeof e=="function"?e():e).filter(Boolean);i.length!==0&&s.push(Vt(i))})),()=>{s.forEach(n=>n==null?void 0:n())}}function Wt(e){const t={each(r){var o;for(let s=0;s<((o=e.frames)==null?void 0:o.length);s+=1){const n=e.frames[s];n&&r(n)}},addEventListener(r,o,s){return t.each(n=>{try{n.document.addEventListener(r,o,s)}catch{}}),()=>{try{t.removeEventListener(r,o,s)}catch{}}},removeEventListener(r,o,s){t.each(n=>{try{n.document.removeEventListener(r,o,s)}catch{}})}};return t}function $t(e){const t=e.frameElement!=null?e.parent:null;return{addEventListener:(r,o,s)=>{try{t==null||t.addEventListener(r,o,s)}catch{}return()=>{try{t==null||t.removeEventListener(r,o,s)}catch{}}},removeEventListener:(r,o,s)=>{try{t==null||t.removeEventListener(r,o,s)}catch{}}}}var ge="pointerdown.outside",ve="focus.outside";function Yt(e){for(const t of e)if(le(t)&&H(t))return!0;return!1}var Qe=e=>"clientY"in e;function Ht(e,t){if(!Qe(t)||!e)return!1;const r=e.getBoundingClientRect();return r.width===0||r.height===0?!1:r.top<=t.clientY&&t.clientY<=r.top+r.height&&r.left<=t.clientX&&t.clientX<=r.left+r.width}function qt(e,t){return e.y<=t.y&&t.y<=e.y+e.height&&e.x<=t.x&&t.x<=e.x+e.width}function me(e,t){if(!t||!Qe(e))return!1;const r=t.scrollHeight>t.clientHeight,o=r&&e.clientX>t.offsetLeft+t.clientWidth,s=t.scrollWidth>t.clientWidth,n=s&&e.clientY>t.offsetTop+t.clientHeight,i={x:t.offsetLeft,y:t.offsetTop,width:t.clientWidth+(r?16:0),height:t.clientHeight+(s?16:0)},l={x:e.clientX,y:e.clientY};return qt(i,l)?o||n:!1}function Xt(e,t){const{exclude:r,onFocusOutside:o,onPointerDownOutside:s,onInteractOutside:n,defer:i}=t;if(!e)return;const l=X(e),p=ut(e),c=Wt(p),f=$t(p);function v(g){const w=k(g);if(!le(w)||!w.isConnected||z(e,w)||Ht(e,g))return!1;const N=l.querySelector(`[aria-controls="${e.id}"]`);if(N){const J=fe(N);if(me(g,J))return!1}const ee=fe(e);return me(g,ee)?!1:!(r!=null&&r(w))}const u=new Set;function a(g){function w(){var J;const N=i?A:te=>te(),ee=((J=g.composedPath)==null?void 0:J.call(g))??[g.target];N(()=>{if(!(!e||!v(g))){if(s||n){const te=pe(s,n);e.addEventListener(ge,te,{once:!0})}Oe(e,ge,{bubbles:!1,cancelable:!0,detail:{originalEvent:g,contextmenu:pt(g),focusable:Yt(ee)}})}})}g.pointerType==="touch"?(u.forEach(N=>N()),u.add(I(l,"click",w,{once:!0})),u.add(f.addEventListener("click",w,{once:!0})),u.add(c.addEventListener("click",w,{once:!0}))):w()}const h=new Set,E=setTimeout(()=>{h.add(I(l,"pointerdown",a,!0)),h.add(f.addEventListener("pointerdown",a,!0)),h.add(c.addEventListener("pointerdown",a,!0))},0);function O(g){(i?A:N=>N())(()=>{if(!(!e||!v(g))){if(o||n){const N=pe(o,n);e.addEventListener(ve,N,{once:!0})}Oe(e,ve,{bubbles:!1,cancelable:!0,detail:{originalEvent:g,contextmenu:!1,focusable:H(k(g))}})}})}return h.add(I(l,"focusin",O,!0)),h.add(f.addEventListener("focusin",O,!0)),h.add(c.addEventListener("focusin",O,!0)),()=>{clearTimeout(E),u.forEach(g=>g()),h.forEach(g=>g())}}function Ut(e,t){const{defer:r}=t,o=r?A:n=>n(),s=[];return s.push(o(()=>{const n=typeof e=="function"?e():e;s.push(Xt(n,t))})),()=>{s.forEach(n=>n==null?void 0:n())}}function Oe(e,t,r){const o=e.ownerDocument.defaultView||window,s=new o.CustomEvent(t,r);return e.dispatchEvent(s)}function Jt(e,t){const r=o=>{o.key==="Escape"&&(o.isComposing||t==null||t(o))};return I(X(e),"keydown",r,{capture:!0})}var C={layers:[],branches:[],count(){return this.layers.length},pointerBlockingLayers(){return this.layers.filter(e=>e.pointerBlocking)},topMostPointerBlockingLayer(){return[...this.pointerBlockingLayers()].slice(-1)[0]},hasPointerBlockingLayer(){return this.pointerBlockingLayers().length>0},isBelowPointerBlockingLayer(e){var o;const t=this.indexOf(e),r=this.topMostPointerBlockingLayer()?this.indexOf((o=this.topMostPointerBlockingLayer())==null?void 0:o.node):-1;return t<r},isTopMost(e){const t=this.layers[this.count()-1];return(t==null?void 0:t.node)===e},getNestedLayers(e){return Array.from(this.layers).slice(this.indexOf(e)+1)},isInNestedLayer(e,t){return this.getNestedLayers(e).some(r=>z(r.node,t))},isInBranch(e){return Array.from(this.branches).some(t=>z(t,e))},add(e){const t=this.layers.push(e);e.node.style.setProperty("--layer-index",`${t}`)},addBranch(e){this.branches.push(e)},remove(e){const t=this.indexOf(e);t<0||(t<this.count()-1&&this.getNestedLayers(e).forEach(o=>o.dismiss()),this.layers.splice(t,1),e.style.removeProperty("--layer-index"))},removeBranch(e){const t=this.branches.indexOf(e);t>=0&&this.branches.splice(t,1)},indexOf(e){return this.layers.findIndex(t=>t.node===e)},dismiss(e){var t;(t=this.layers[this.indexOf(e)])==null||t.dismiss()},clear(){this.remove(this.layers[0].node)}},be;function ye(){C.layers.forEach(({node:e})=>{e.style.pointerEvents=C.isBelowPointerBlockingLayer(e)?"none":"auto"})}function Qt(e){e.style.pointerEvents=""}function Zt(e,t){const r=X(e),o=[];if(C.hasPointerBlockingLayer()&&!r.body.hasAttribute("data-inert")&&(be=document.body.style.pointerEvents,queueMicrotask(()=>{r.body.style.pointerEvents="none",r.body.setAttribute("data-inert","")})),t){const s=gt(t,n=>{o.push(vt(n,{pointerEvents:"auto"}))});o.push(s)}return()=>{C.hasPointerBlockingLayer()||(queueMicrotask(()=>{r.body.style.pointerEvents=be,r.body.removeAttribute("data-inert"),r.body.style.length===0&&r.body.removeAttribute("style")}),o.forEach(s=>s()))}}function zt(e,t){const{warnOnMissingNode:r=!0}=t;if(r&&!e){ht("[@zag-js/dismissable] node is `null` or `undefined`");return}if(!e)return;const{onDismiss:o,pointerBlocking:s,exclude:n,debug:i}=t,l={dismiss:o,node:e,pointerBlocking:s};C.add(l),ye();function p(a){var E,O;const h=k(a.detail.originalEvent);C.isBelowPointerBlockingLayer(e)||C.isInBranch(h)||((E=t.onPointerDownOutside)==null||E.call(t,a),(O=t.onInteractOutside)==null||O.call(t,a),!a.defaultPrevented&&(i&&console.log("onPointerDownOutside:",a.detail.originalEvent),o==null||o()))}function c(a){var E,O;const h=k(a.detail.originalEvent);C.isInBranch(h)||((E=t.onFocusOutside)==null||E.call(t,a),(O=t.onInteractOutside)==null||O.call(t,a),!a.defaultPrevented&&(i&&console.log("onFocusOutside:",a.detail.originalEvent),o==null||o()))}function f(a){var h;C.isTopMost(e)&&((h=t.onEscapeKeyDown)==null||h.call(t,a),!a.defaultPrevented&&o&&(a.preventDefault(),o()))}function v(a){var g;if(!e)return!1;const h=typeof n=="function"?n():n,E=Array.isArray(h)?h:[h],O=(g=t.persistentElements)==null?void 0:g.map(w=>w()).filter(le);return O&&E.push(...O),E.some(w=>z(w,a))||C.isInNestedLayer(e,a)}const u=[s?Zt(e,t.persistentElements):void 0,Jt(e,f),Ut(e,{exclude:v,onFocusOutside:c,onPointerDownOutside:p,defer:t.defer})];return()=>{C.remove(e),ye(),Qt(e),u.forEach(a=>a==null?void 0:a())}}function eo(e,t){const{defer:r}=t,o=r?A:n=>n(),s=[];return s.push(o(()=>{const n=ft(e)?e():e;s.push(zt(n,t))})),()=>{s.forEach(n=>n==null?void 0:n())}}var to=Object.defineProperty,oo=(e,t,r)=>t in e?to(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t,r)=>oo(e,typeof t!="symbol"?t+"":t,r),Pe={activateTrap(e,t){if(e.length>0){const o=e[e.length-1];o!==t&&o.pause()}const r=e.indexOf(t);r===-1||e.splice(r,1),e.push(t)},deactivateTrap(e,t){const r=e.indexOf(t);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}},ro=[],so=class{constructor(e,t){m(this,"trapStack"),m(this,"config"),m(this,"doc"),m(this,"state",{containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0}),m(this,"listenerCleanups",[]),m(this,"handleFocus",o=>{const s=k(o),n=this.findContainerIndex(s,o)>=0;if(n||bt(s))n&&(this.state.mostRecentlyFocusedNode=s);else{o.stopImmediatePropagation();let i,l=!0;if(this.state.mostRecentlyFocusedNode)if(B(this.state.mostRecentlyFocusedNode)>0){const p=this.findContainerIndex(this.state.mostRecentlyFocusedNode),{tabbableNodes:c}=this.state.containerGroups[p];if(c.length>0){const f=c.findIndex(v=>v===this.state.mostRecentlyFocusedNode);f>=0&&(this.config.isKeyForward(this.state.recentNavEvent)?f+1<c.length&&(i=c[f+1],l=!1):f-1>=0&&(i=c[f-1],l=!1))}}else this.state.containerGroups.some(p=>p.tabbableNodes.some(c=>B(c)>0))||(l=!1);else l=!1;l&&(i=this.findNextNavNode({target:this.state.mostRecentlyFocusedNode,isBackward:this.config.isKeyBackward(this.state.recentNavEvent)})),i?this.tryFocus(i):this.tryFocus(this.state.mostRecentlyFocusedNode||this.getInitialFocusNode())}this.state.recentNavEvent=void 0}),m(this,"handlePointerDown",o=>{const s=k(o);if(!(this.findContainerIndex(s,o)>=0)){if(G(this.config.clickOutsideDeactivates,o)){this.deactivate({returnFocus:this.config.returnFocusOnDeactivate});return}G(this.config.allowOutsideClick,o)||o.preventDefault()}}),m(this,"handleClick",o=>{const s=k(o);this.findContainerIndex(s,o)>=0||G(this.config.clickOutsideDeactivates,o)||G(this.config.allowOutsideClick,o)||(o.preventDefault(),o.stopImmediatePropagation())}),m(this,"handleTabKey",o=>{if(this.config.isKeyForward(o)||this.config.isKeyBackward(o)){this.state.recentNavEvent=o;const s=this.config.isKeyBackward(o),n=this.findNextNavNode({event:o,isBackward:s});if(!n)return;M(o)&&o.preventDefault(),this.tryFocus(n)}}),m(this,"handleEscapeKey",o=>{no(o)&&G(this.config.escapeDeactivates,o)!==!1&&(o.preventDefault(),this.deactivate())}),m(this,"_mutationObserver"),m(this,"setupMutationObserver",()=>{const o=this.doc.defaultView||window;this._mutationObserver=new o.MutationObserver(s=>{s.some(i=>Array.from(i.removedNodes).some(p=>p===this.state.mostRecentlyFocusedNode))&&this.tryFocus(this.getInitialFocusNode())})}),m(this,"updateObservedNodes",()=>{var o;(o=this._mutationObserver)==null||o.disconnect(),this.state.active&&!this.state.paused&&this.state.containers.map(s=>{var n;(n=this._mutationObserver)==null||n.observe(s,{subtree:!0,childList:!0})})}),m(this,"getInitialFocusNode",()=>{let o=this.getNodeForOption("initialFocus",{hasFallback:!0});if(o===!1)return!1;if(o===void 0||o&&!H(o))if(this.findContainerIndex(this.doc.activeElement)>=0)o=this.doc.activeElement;else{const s=this.state.tabbableGroups[0];o=s&&s.firstTabbableNode||this.getNodeForOption("fallbackFocus")}else o===null&&(o=this.getNodeForOption("fallbackFocus"));if(!o)throw new Error("Your focus-trap needs to have at least one focusable element");return o.isConnected||(o=this.getNodeForOption("fallbackFocus")),o}),m(this,"tryFocus",o=>{if(o!==!1&&o!==yt(this.doc)){if(!o||!o.focus){this.tryFocus(this.getInitialFocusNode());return}o.focus({preventScroll:!!this.config.preventScroll}),this.state.mostRecentlyFocusedNode=o,io(o)&&o.select()}}),m(this,"deactivate",o=>{if(!this.state.active)return this;const s={onDeactivate:this.config.onDeactivate,onPostDeactivate:this.config.onPostDeactivate,checkCanReturnFocus:this.config.checkCanReturnFocus,...o};clearTimeout(this.state.delayInitialFocusTimer),this.state.delayInitialFocusTimer=void 0,this.removeListeners(),this.state.active=!1,this.state.paused=!1,this.updateObservedNodes(),Pe.deactivateTrap(this.trapStack,this);const n=this.getOption(s,"onDeactivate"),i=this.getOption(s,"onPostDeactivate"),l=this.getOption(s,"checkCanReturnFocus"),p=this.getOption(s,"returnFocus","returnFocusOnDeactivate");n==null||n();const c=()=>{Ee(()=>{if(p){const f=this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);this.tryFocus(f)}i==null||i()})};if(p&&l){const f=this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);return l(f).then(c,c),this}return c(),this}),m(this,"pause",o=>{if(this.state.paused||!this.state.active)return this;const s=this.getOption(o,"onPause"),n=this.getOption(o,"onPostPause");return this.state.paused=!0,s==null||s(),this.removeListeners(),this.updateObservedNodes(),n==null||n(),this}),m(this,"unpause",o=>{if(!this.state.paused||!this.state.active)return this;const s=this.getOption(o,"onUnpause"),n=this.getOption(o,"onPostUnpause");return this.state.paused=!1,s==null||s(),this.updateTabbableNodes(),this.addListeners(),this.updateObservedNodes(),n==null||n(),this}),m(this,"updateContainerElements",o=>(this.state.containers=Array.isArray(o)?o.filter(Boolean):[o].filter(Boolean),this.state.active&&this.updateTabbableNodes(),this.updateObservedNodes(),this)),m(this,"getReturnFocusNode",o=>{const s=this.getNodeForOption("setReturnFocus",{params:[o]});return s||(s===!1?!1:o)}),m(this,"getOption",(o,s,n)=>o&&o[s]!==void 0?o[s]:this.config[n||s]),m(this,"getNodeForOption",(o,{hasFallback:s=!1,params:n=[]}={})=>{let i=this.config[o];if(typeof i=="function"&&(i=i(...n)),i===!0&&(i=void 0),!i){if(i===void 0||i===!1)return i;throw new Error(`\`${o}\` was specified but was not a node, or did not return a node`)}let l=i;if(typeof i=="string"){try{l=this.doc.querySelector(i)}catch(p){throw new Error(`\`${o}\` appears to be an invalid selector; error="${p.message}"`)}if(!l&&!s)throw new Error(`\`${o}\` as selector refers to no known node`)}return l}),m(this,"findNextNavNode",o=>{const{event:s,isBackward:n=!1}=o,i=o.target||k(s);this.updateTabbableNodes();let l=null;if(this.state.tabbableGroups.length>0){const p=this.findContainerIndex(i,s),c=p>=0?this.state.containerGroups[p]:void 0;if(p<0)n?l=this.state.tabbableGroups[this.state.tabbableGroups.length-1].lastTabbableNode:l=this.state.tabbableGroups[0].firstTabbableNode;else if(n){let f=this.state.tabbableGroups.findIndex(({firstTabbableNode:v})=>i===v);if(f<0&&((c==null?void 0:c.container)===i||H(i)&&!L(i)&&!(c!=null&&c.nextTabbableNode(i,!1)))&&(f=p),f>=0){const v=f===0?this.state.tabbableGroups.length-1:f-1,u=this.state.tabbableGroups[v];l=B(i)>=0?u.lastTabbableNode:u.lastDomTabbableNode}else M(s)||(l=c==null?void 0:c.nextTabbableNode(i,!1))}else{let f=this.state.tabbableGroups.findIndex(({lastTabbableNode:v})=>i===v);if(f<0&&((c==null?void 0:c.container)===i||H(i)&&!L(i)&&!(c!=null&&c.nextTabbableNode(i)))&&(f=p),f>=0){const v=f===this.state.tabbableGroups.length-1?0:f+1,u=this.state.tabbableGroups[v];l=B(i)>=0?u.firstTabbableNode:u.firstDomTabbableNode}else M(s)||(l=c==null?void 0:c.nextTabbableNode(i))}}else l=this.getNodeForOption("fallbackFocus");return l}),this.trapStack=t.trapStack||ro;const r={returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward(o){return M(o)&&!o.shiftKey},isKeyBackward(o){return M(o)&&o.shiftKey},...t};this.doc=r.document||X(Array.isArray(e)?e[0]:e),this.config=r,this.updateContainerElements(e),this.setupMutationObserver()}get active(){return this.state.active}get paused(){return this.state.paused}findContainerIndex(e,t){const r=typeof(t==null?void 0:t.composedPath)=="function"?t.composedPath():void 0;return this.state.containerGroups.findIndex(({container:o,tabbableNodes:s})=>o.contains(e)||(r==null?void 0:r.includes(o))||s.find(n=>n===e))}updateTabbableNodes(){if(this.state.containerGroups=this.state.containers.map(e=>{const t=mt(e),r=Ot(e),o=t.length>0?t[0]:void 0,s=t.length>0?t[t.length-1]:void 0,n=r.find(c=>L(c)),i=r.slice().reverse().find(c=>L(c)),l=!!t.find(c=>B(c)>0);function p(c,f=!0){const v=t.indexOf(c);return v<0?f?r.slice(r.indexOf(c)+1).find(u=>L(u)):r.slice(0,r.indexOf(c)).reverse().find(u=>L(u)):t[v+(f?1:-1)]}return{container:e,tabbableNodes:t,focusableNodes:r,posTabIndexesFound:l,firstTabbableNode:o,lastTabbableNode:s,firstDomTabbableNode:n,lastDomTabbableNode:i,nextTabbableNode:p}}),this.state.tabbableGroups=this.state.containerGroups.filter(e=>e.tabbableNodes.length>0),this.state.tabbableGroups.length<=0&&!this.getNodeForOption("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(this.state.containerGroups.find(e=>e.posTabIndexesFound)&&this.state.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")}addListeners(){if(this.state.active)return Pe.activateTrap(this.trapStack,this),this.state.delayInitialFocusTimer=this.config.delayInitialFocus?Ee(()=>{this.tryFocus(this.getInitialFocusNode())}):this.tryFocus(this.getInitialFocusNode()),this.listenerCleanups.push(I(this.doc,"focusin",this.handleFocus,!0),I(this.doc,"mousedown",this.handlePointerDown,{capture:!0,passive:!1}),I(this.doc,"touchstart",this.handlePointerDown,{capture:!0,passive:!1}),I(this.doc,"click",this.handleClick,{capture:!0,passive:!1}),I(this.doc,"keydown",this.handleTabKey,{capture:!0,passive:!1}),I(this.doc,"keydown",this.handleEscapeKey)),this}removeListeners(){if(this.state.active)return this.listenerCleanups.forEach(e=>e()),this.listenerCleanups=[],this}activate(e){if(this.state.active)return this;const t=this.getOption(e,"onActivate"),r=this.getOption(e,"onPostActivate"),o=this.getOption(e,"checkCanFocusTrap");o||this.updateTabbableNodes(),this.state.active=!0,this.state.paused=!1,this.state.nodeFocusedBeforeActivation=this.doc.activeElement||null,t==null||t();const s=()=>{o&&this.updateTabbableNodes(),this.addListeners(),this.updateObservedNodes(),r==null||r()};return o?(o(this.state.containers.concat()).then(s,s),this):(s(),this)}},M=e=>e.key==="Tab",G=(e,...t)=>typeof e=="function"?e(...t):e,no=e=>!e.isComposing&&e.key==="Escape",Ee=e=>setTimeout(e,0),io=e=>e.localName==="input"&&"select"in e&&typeof e.select=="function";function ao(e,t={}){let r;const o=A(()=>{const s=typeof e=="function"?e():e;if(s){r=new so(s,{escapeDeactivates:!1,allowOutsideClick:!0,preventScroll:!0,returnFocusOnDeactivate:!0,delayInitialFocus:!1,fallbackFocus:s,...t,document:X(s)});try{r.activate()}catch{}}});return function(){r==null||r.deactivate(),o()}}var se="data-scroll-lock";function we(e,t){if(!e)return;const r=Object.keys(t).reduce((o,s)=>(o[s]=e.style.getPropertyValue(s),o),{});return Object.assign(e.style,t),()=>{Object.assign(e.style,r)}}function co(e,t,r){if(!e)return;const o=e.style.getPropertyValue(t);return e.style.setProperty(t,r),()=>{o?e.style.setProperty(t,o):e.style.removeProperty(t)}}function lo(e){const t=e.getBoundingClientRect().left;return Math.round(t)+e.scrollLeft?"paddingLeft":"paddingRight"}function uo(e){const t=e??document,r=t.defaultView??window,{documentElement:o,body:s}=t;if(s.hasAttribute(se))return;s.setAttribute(se,"");const i=r.innerWidth-o.clientWidth,l=()=>co(o,"--scrollbar-width",`${i}px`),p=lo(o),c=()=>we(s,{overflow:"hidden",[p]:`${i}px`}),f=()=>{const{scrollX:u,scrollY:a,visualViewport:h}=r,E=(h==null?void 0:h.offsetLeft)??0,O=(h==null?void 0:h.offsetTop)??0,g=we(s,{position:"fixed",overflow:"hidden",top:`${-(a-Math.floor(O))}px`,left:`${-(u-Math.floor(E))}px`,right:"0",[p]:`${i}px`});return()=>{g==null||g(),r.scrollTo({left:u,top:a,behavior:"instant"})}},v=[l(),Pt()?f():c()];return()=>{v.forEach(u=>u==null?void 0:u()),s.removeAttribute(se)}}var po=Et("popover").parts("arrow","arrowTip","anchor","trigger","indicator","positioner","content","title","description","closeTrigger"),F=po.build(),Ze=e=>{var t;return((t=e.ids)==null?void 0:t.anchor)??`popover:${e.id}:anchor`},ze=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`popover:${e.id}:trigger`},ne=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`popover:${e.id}:content`},et=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`popover:${e.id}:popper`},fo=e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`popover:${e.id}:arrow`},ie=e=>{var t;return((t=e.ids)==null?void 0:t.title)??`popover:${e.id}:title`},ae=e=>{var t;return((t=e.ids)==null?void 0:t.description)??`popover:${e.id}:desc`},ho=e=>{var t;return((t=e.ids)==null?void 0:t.closeTrigger)??`popover:${e.id}:close`},Te=e=>e.getById(Ze(e)),D=e=>e.getById(ze(e)),R=e=>e.getById(ne(e)),Ce=e=>e.getById(et(e)),go=e=>e.getById(ie(e)),vo=e=>e.getById(ae(e));function mo(e,t){const{state:r,context:o,send:s,computed:n,prop:i,scope:l}=e,p=r.matches("open"),c=o.get("currentPlacement"),f=n("currentPortalled"),v=o.get("renderedElements"),u=st({...i("positioning"),placement:c});return{portalled:f,open:p,setOpen(a){r.matches("open")!==a&&s({type:a?"OPEN":"CLOSE"})},reposition(a={}){s({type:"POSITIONING.SET",options:a})},getArrowProps(){return t.element({id:fo(l),...F.arrow.attrs,dir:i("dir"),style:u.arrow})},getArrowTipProps(){return t.element({...F.arrowTip.attrs,dir:i("dir"),style:u.arrowTip})},getAnchorProps(){return t.element({...F.anchor.attrs,dir:i("dir"),id:Ze(l)})},getTriggerProps(){return t.button({...F.trigger.attrs,dir:i("dir"),type:"button","data-placement":c,id:ze(l),"aria-haspopup":"dialog","aria-expanded":p,"data-state":p?"open":"closed","aria-controls":ne(l),onPointerDown(a){Tt()&&a.currentTarget.focus()},onClick(a){a.defaultPrevented||s({type:"TOGGLE"})},onBlur(a){s({type:"TRIGGER_BLUR",target:a.relatedTarget})}})},getIndicatorProps(){return t.element({...F.indicator.attrs,dir:i("dir"),"data-state":p?"open":"closed"})},getPositionerProps(){return t.element({id:et(l),...F.positioner.attrs,dir:i("dir"),style:u.floating})},getContentProps(){return t.element({...F.content.attrs,dir:i("dir"),id:ne(l),tabIndex:-1,role:"dialog",hidden:!p,"data-state":p?"open":"closed","data-expanded":wt(p),"aria-labelledby":v.title?ie(l):void 0,"aria-describedby":v.description?ae(l):void 0,"data-placement":c})},getTitleProps(){return t.element({...F.title.attrs,id:ie(l),dir:i("dir")})},getDescriptionProps(){return t.element({...F.description.attrs,id:ae(l),dir:i("dir")})},getCloseTriggerProps(){return t.button({...F.closeTrigger.attrs,dir:i("dir"),id:ho(l),type:"button","aria-label":"close",onClick(a){a.defaultPrevented||s({type:"CLOSE"})}})}}}var Oo=Ct({props({props:e}){return{closeOnInteractOutside:!0,closeOnEscape:!0,autoFocus:!0,modal:!1,portalled:!0,...e,positioning:{placement:"bottom",...e.positioning}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"closed"},context({bindable:e}){return{currentPlacement:e(()=>({defaultValue:void 0})),renderedElements:e(()=>({defaultValue:{title:!0,description:!0}}))}},computed:{currentPortalled:({prop:e})=>!!e("modal")||!!e("portalled")},watch({track:e,prop:t,action:r}){e([()=>t("open")],()=>{r(["toggleVisibility"])})},entry:["checkRenderedElements"],states:{closed:{on:{"CONTROLLED.OPEN":{target:"open",actions:["setInitialFocus"]},TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}]}},open:{effects:["trapFocus","preventScroll","hideContentBelow","trackPositioning","trackDismissableElement","proxyTabFocus"],on:{"CONTROLLED.CLOSE":{target:"closed",actions:["setFinalFocus"]},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose","setFinalFocus"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"POSITIONING.SET":{actions:["reposition"]}}}},implementations:{guards:{isOpenControlled:({prop:e})=>e("open")!=null},effects:{trackPositioning({context:e,prop:t,scope:r}){e.set("currentPlacement",t("positioning").placement);const o=Te(r)??D(r);return de(o,()=>Ce(r),{...t("positioning"),defer:!0,onComplete(n){e.set("currentPlacement",n.placement)}})},trackDismissableElement({send:e,prop:t,scope:r}){const o=()=>R(r);let s=!0;return eo(o,{pointerBlocking:t("modal"),exclude:D(r),defer:!0,onEscapeKeyDown(n){var i;(i=t("onEscapeKeyDown"))==null||i(n),!t("closeOnEscape")&&n.preventDefault()},onInteractOutside(n){var i;(i=t("onInteractOutside"))==null||i(n),!n.defaultPrevented&&(s=!(n.detail.focusable||n.detail.contextmenu),t("closeOnInteractOutside")||n.preventDefault())},onPointerDownOutside:t("onPointerDownOutside"),onFocusOutside:t("onFocusOutside"),persistentElements:t("persistentElements"),onDismiss(){e({type:"CLOSE",src:"interact-outside",restoreFocus:s})}})},proxyTabFocus({prop:e,scope:t}){return e("modal")||!e("portalled")?void 0:Nt(()=>R(t),{triggerElement:D(t),defer:!0,onFocus(o){o.focus({preventScroll:!0})}})},hideContentBelow({prop:e,scope:t}){return e("modal")?Kt(()=>[R(t),D(t)],{defer:!0}):void 0},preventScroll({prop:e,scope:t}){if(e("modal"))return uo(t.getDoc())},trapFocus({prop:e,scope:t}){return e("modal")?ao(()=>R(t),{initialFocus:()=>he({root:R(t),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")})}):void 0}},actions:{reposition({event:e,prop:t,scope:r,context:o}){const s=Te(r)??D(r);de(s,()=>Ce(r),{...t("positioning"),...e.options,defer:!0,listeners:!1,onComplete(i){o.set("currentPlacement",i.placement)}})},checkRenderedElements({context:e,scope:t}){A(()=>{Object.assign(e.get("renderedElements"),{title:!!go(t),description:!!vo(t)})})},setInitialFocus({prop:e,scope:t}){e("modal")||A(()=>{const r=he({root:R(t),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")});r==null||r.focus({preventScroll:!0})})},setFinalFocus({event:e,scope:t}){var o;const r=e.restoreFocus??((o=e.previousEvent)==null?void 0:o.restoreFocus);r!=null&&!r||A(()=>{const s=D(t);s==null||s.focus({preventScroll:!0})})},invokeOnOpen({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!1})},toggleVisibility({event:e,send:t,prop:r}){t({type:r("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});Ft()(["autoFocus","closeOnEscape","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","defaultOpen","open","persistentElements","portalled","positioning"]);const bo=e=>{const t=x.useId(),{getRootNode:r}=It(),{dir:o}=xt(),s={id:t,dir:o,getRootNode:r,...e},n=kt(Oo,s);return mo(n,At)},yo=e=>{const[t,{children:r,...o}]=nt(e),s=bo(o),n=it(_({present:s.open},t));return T.jsx(Rt,{value:s,children:T.jsx(at,{value:n,children:r})})},tt=x.forwardRef((e,t)=>{const r=U(),o=ce(),s=_({...r.getTriggerProps(),"aria-controls":o.unmounted?void 0:r.getTriggerProps()["aria-controls"]},e);return T.jsx(q.button,{...s,ref:t})});tt.displayName="PopoverTrigger";const b=({children:e,open:t,position:r=Ye.top})=>T.jsx(yo,{open:t,positioning:{placement:r},children:e});b.displayName="OdsPopover";try{b.displayName="OdsPopover",b.__docgenInfo={description:"",displayName:"OdsPopover",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"ODS_POPOVER_POSITION.top"},description:"",name:"position",required:!1,type:{name:'"left" | "right" | "bottom" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top" | "top-end" | "top-start"'}}}}}catch{}const Po={"ods-popover-content":"_ods-popover-content_1pmlj_1"},y=x.forwardRef(({children:e,className:t,withArrow:r=!1,...o},s)=>T.jsx(ct,{children:T.jsx(Ue,{children:T.jsxs(Xe,{className:Lt(Po["ods-popover-content"],t),ref:s,...o,children:[r&&T.jsx(He,{children:T.jsx(qe,{})}),e]})})}));y.displayName="OdsPopoverContent";try{y.displayName="OdsPopoverContent",y.__docgenInfo={description:"",displayName:"OdsPopoverContent",props:{withArrow:{defaultValue:{value:"false"},description:"",name:"withArrow",required:!1,type:{name:"boolean"}}}}}catch{}const P=x.forwardRef(({children:e,...t},r)=>T.jsx(tt,{ref:r,...t,children:e}));P.displayName="OdsPopoverTrigger";try{P.displayName="OdsPopoverTrigger",P.__docgenInfo={description:"",displayName:"OdsPopoverTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Eo={argTypes:St(["open"]),component:b,subcomponents:{OdsPopoverContent:y,OdsPopoverTrigger:P},title:"ODS Components/Popover"},V={parameters:{layout:"centered"},render:e=>d.createElement(b,{position:e.position},d.createElement(P,null,"Show popover"),d.createElement(y,{withArrow:e.withArrow},e.content)),argTypes:Dt({content:{table:{category:oe.slot,defaultValue:{summary:"ø"}},control:"text"},position:{table:{category:oe.general,defaultValue:{summary:Ye.top},type:{summary:ue}},control:{type:"select"},options:ue},withArrow:{table:{category:oe.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:"My popover content"}},j={decorators:[e=>d.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>{const[e,t]=x.useState(!1);function r(){t(o=>!o)}return d.createElement(d.Fragment,null,d.createElement($e,{onClick:r},"Toggle popover"),d.createElement(b,{open:e},d.createElement(P,{asChild:!0},d.createElement(ot,{name:rt.cog})),d.createElement(y,{withArrow:!0},"This is the popover content")))}},K={tags:["!dev"],render:({})=>d.createElement(b,null,d.createElement(P,{asChild:!0},d.createElement($e,null,"Custom Trigger")),d.createElement(y,null,"This is the popover content"))},W={tags:["!dev"],render:({})=>d.createElement(b,null,d.createElement(P,null,"Show popover"),d.createElement(y,null,"This is the popover content"))},$={decorators:[e=>d.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},e())],tags:["!dev"],render:({})=>d.createElement(d.Fragment,null,d.createElement(b,{position:"top-start"},d.createElement(P,null,"Top Left"),d.createElement(y,{withArrow:!0},"Top Left popover")),d.createElement(b,{position:"top"},d.createElement(P,null,"Top"),d.createElement(y,{withArrow:!0},"Top popover")),d.createElement(b,{position:"top-end"},d.createElement(P,null,"Top Right"),d.createElement(y,{withArrow:!0},"Top Right popover")),d.createElement(b,{position:"left"},d.createElement(P,null,"Middle Left"),d.createElement(y,{withArrow:!0},"Middle Left popover")),d.createElement("div",null),d.createElement(b,{position:"right"},d.createElement(P,null,"Middle Right"),d.createElement(y,{withArrow:!0},"Middle Right popover")),d.createElement(b,{position:"bottom-start"},d.createElement(P,null,"Bottom Left"),d.createElement(y,{withArrow:!0},"Bottom Left popover")),d.createElement(b,{position:"bottom"},d.createElement(P,null,"Bottom"),d.createElement(y,{withArrow:!0},"Bottom popover")),d.createElement(b,{position:"bottom-end"},d.createElement(P,null,"Bottom Right"),d.createElement(y,{withArrow:!0},"Bottom Right popover")))},Y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>d.createElement(b,null,d.createElement(P,null,"Show popover"),d.createElement(y,null,"This is the popover content"))};var Ne,Fe,Ie;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <OdsPopover position={arg.position}>
      <OdsPopoverTrigger>
        Show popover
      </OdsPopoverTrigger>

      <OdsPopoverContent withArrow={arg.withArrow}>
        {arg.content}
      </OdsPopoverContent>
    </OdsPopover>,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_POPOVER_POSITION.top
        },
        type: {
          summary: ODS_POPOVER_POSITIONS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_POPOVER_POSITIONS
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: false
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }),
  args: {
    content: 'My popover content'
  }
}`,...(Ie=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var xe,ke,Ae;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    function togglePopover() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <OdsButton onClick={togglePopover}>
          Toggle popover
        </OdsButton>

        <OdsPopover open={isOpen}>
          <OdsPopoverTrigger asChild>
            <OdsIcon name={ODS_ICON_NAME.cog} />
          </OdsPopoverTrigger>

          <OdsPopoverContent withArrow>
            This is the popover content
          </OdsPopoverContent>
        </OdsPopover>
      </>;
  }
}`,...(Ae=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Le,Se,De;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsPopover>
      <OdsPopoverTrigger asChild>
        <OdsButton>
          Custom Trigger
        </OdsButton>
      </OdsPopoverTrigger>

      <OdsPopoverContent>
        This is the popover content
      </OdsPopoverContent>
    </OdsPopover>
}`,...(De=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var Re,_e,Be;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsPopover>
      <OdsPopoverTrigger>
        Show popover
      </OdsPopoverTrigger>

      <OdsPopoverContent>
        This is the popover content
      </OdsPopoverContent>
    </OdsPopover>
}`,...(Be=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var Me,Ge,Ve;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '50px 150px'
  }}>
      {story()}
    </div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsPopover position="top-start">
        <OdsPopoverTrigger>
          Top Left
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Top Left popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="top">
        <OdsPopoverTrigger>
          Top
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Top popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="top-end">
        <OdsPopoverTrigger>
          Top Right
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Top Right popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="left">
        <OdsPopoverTrigger>
          Middle Left
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Middle Left popover
        </OdsPopoverContent>
      </OdsPopover>

      <div />

      <OdsPopover position="right">
        <OdsPopoverTrigger>
          Middle Right
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Middle Right popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="bottom-start">
        <OdsPopoverTrigger>
          Bottom Left
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Bottom Left popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="bottom">
        <OdsPopoverTrigger>
          Bottom
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Bottom popover
        </OdsPopoverContent>
      </OdsPopover>

      <OdsPopover position="bottom-end">
        <OdsPopoverTrigger>
          Bottom Right
        </OdsPopoverTrigger>
        <OdsPopoverContent withArrow>
          Bottom Right popover
        </OdsPopoverContent>
      </OdsPopover>
    </>
}`,...(Ve=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var je,Ke,We;Y.parameters={...Y.parameters,docs:{...(je=Y.parameters)==null?void 0:je.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsPopover>
      <OdsPopoverTrigger>
        Show popover
      </OdsPopoverTrigger>

      <OdsPopoverContent>
        This is the popover content
      </OdsPopoverContent>
    </OdsPopover>
}`,...(We=(Ke=Y.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};const wo=["Demo","Controlled","CustomTrigger","Default","Grid","Overview"],So=Object.freeze(Object.defineProperty({__proto__:null,Controlled:j,CustomTrigger:K,Default:W,Demo:V,Grid:$,Overview:Y,__namedExportsOrder:wo,default:Eo},Symbol.toStringTag,{value:"Module"}));export{K as C,W as D,$ as G,Y as O,So as P,j as a};
