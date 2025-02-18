/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=globalThis,b=y.trustedTypes,U=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,W="$lit$",p=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+p,D=`<${k}>`,m=document,C=()=>m.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",I=Array.isArray,z=r=>I(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",w=`[ 	
\f\r]`,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,R=/>/g,u=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,L=/"/g,V=/^(?:script|style|textarea|title)$/i,H=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),P=new WeakMap,g=m.createTreeWalker(m,129);function j(r,t){if(!I(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return U!==void 0?U.createHTML(t):t}const Z=(r,t)=>{const s=r.length-1,i=[];let e,h=t===2?"<svg>":t===3?"<math>":"",n=f;for(let a=0;a<s;a++){const o=r[a];let $,_,l=-1,c=0;for(;c<o.length&&(n.lastIndex=c,_=n.exec(o),_!==null);)c=n.lastIndex,n===f?_[1]==="!--"?n=O:_[1]!==void 0?n=R:_[2]!==void 0?(V.test(_[2])&&(e=RegExp("</"+_[2],"g")),n=u):_[3]!==void 0&&(n=u):n===u?_[0]===">"?(n=e??f,l=-1):_[1]===void 0?l=-2:(l=n.lastIndex-_[2].length,$=_[1],n=_[3]===void 0?u:_[3]==='"'?L:B):n===L||n===B?n=u:n===O||n===R?n=f:(n=u,e=void 0);const d=n===u&&r[a+1].startsWith("/>")?" ":"";h+=n===f?o+D:l>=0?(i.push($),o.slice(0,l)+W+o.slice(l)+p+d):o+p+(l===-2?a:d)}return[j(r,h+(r[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class N{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let h=0,n=0;const a=t.length-1,o=this.parts,[$,_]=Z(t,s);if(this.el=N.createElement($,i),g.currentNode=this.el.content,s===2||s===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(e=g.nextNode())!==null&&o.length<a;){if(e.nodeType===1){if(e.hasAttributes())for(const l of e.getAttributeNames())if(l.endsWith(W)){const c=_[n++],d=e.getAttribute(l).split(p),T=/([.?@])?(.*)/.exec(c);o.push({type:1,index:h,name:T[2],strings:d,ctor:T[1]==="."?q:T[1]==="?"?G:T[1]==="@"?J:S}),e.removeAttribute(l)}else l.startsWith(p)&&(o.push({type:6,index:h}),e.removeAttribute(l));if(V.test(e.tagName)){const l=e.textContent.split(p),c=l.length-1;if(c>0){e.textContent=b?b.emptyScript:"";for(let d=0;d<c;d++)e.append(l[d],C()),g.nextNode(),o.push({type:2,index:++h});e.append(l[c],C())}}}else if(e.nodeType===8)if(e.data===k)o.push({type:2,index:h});else{let l=-1;for(;(l=e.data.indexOf(p,l+1))!==-1;)o.push({type:7,index:h}),l+=p.length-1}h++}}static createElement(t,s){const i=m.createElement("template");return i.innerHTML=t,i}}function v(r,t,s=r,i){var n,a;if(t===H)return t;let e=i!==void 0?(n=s._$Co)==null?void 0:n[i]:s._$Cl;const h=x(t)?void 0:t._$litDirective$;return(e==null?void 0:e.constructor)!==h&&((a=e==null?void 0:e._$AO)==null||a.call(e,!1),h===void 0?e=void 0:(e=new h(r),e._$AT(r,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=e:s._$Cl=e),e!==void 0&&(t=v(r,e._$AS(r,t.values),e,i)),t}class F{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=((t==null?void 0:t.creationScope)??m).importNode(s,!0);g.currentNode=e;let h=g.nextNode(),n=0,a=0,o=i[0];for(;o!==void 0;){if(n===o.index){let $;o.type===2?$=new M(h,h.nextSibling,this,t):o.type===1?$=new o.ctor(h,o.name,o.strings,this,t):o.type===6&&($=new K(h,this,t)),this._$AV.push($),o=i[++a]}n!==(o==null?void 0:o.index)&&(h=g.nextNode(),n++)}return g.currentNode=m,e}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=(e==null?void 0:e.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=v(this,t,s),x(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):z(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){var h;const{values:s,_$litType$:i}=t,e=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(j(i.h,i.h[0]),this.options)),i);if(((h=this._$AH)==null?void 0:h._$AD)===e)this._$AH.p(s);else{const n=new F(e,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=P.get(t.strings);return s===void 0&&P.set(t.strings,s=new N(t)),s}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const h of t)e===s.length?s.push(i=new M(this.O(C()),this.O(C()),this,this.options)):i=s[e],i._$AI(h),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=h,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(t,s=this,i,e){const h=this.strings;let n=!1;if(h===void 0)t=v(this,t,s,0),n=!x(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const a=t;let o,$;for(t=h[0],o=0;o<h.length-1;o++)$=v(this,a[i+o],s,o),$===H&&($=this._$AH[o]),n||(n=!x($)||$!==this._$AH[o]),$===A?t=A:t!==A&&(t+=($??"")+h[o+1]),this._$AH[o]=$}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class q extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class G extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class J extends S{constructor(t,s,i,e,h){super(t,s,i,e,h),this.type=5}_$AI(t,s=this){if((t=v(this,t,s,0)??A)===H)return;const i=this._$AH,e=t===A&&i!==A||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,h=t!==A&&(i===A||e);e&&this.element.removeEventListener(this.name,this,i),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){v(this,t)}}const E=y.litHtmlPolyfillSupport;E==null||E(N,M),(y.litHtmlVersions??(y.litHtmlVersions=[])).push("3.2.1");export{A as E};
