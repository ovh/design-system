import{p as s,H as r,h as n,a as d}from"./index-DAZhnxgO.js";var e;(function(t){t.caption="caption",t.code="code",t.heading1="heading-1",t.heading2="heading-2",t.heading3="heading-3",t.heading4="heading-4",t.heading5="heading-5",t.heading6="heading-6",t.paragraph="paragraph",t.span="span"})(e||(e={}));Object.freeze(Object.values(e));const i=":host(.ods-text){display:inline-block}.ods-text--heading-1{margin:0;color:var(--ods-color-heading);font-size:36px;font-weight:700}.ods-text--heading-2{margin:0;color:var(--ods-color-heading);font-size:28px;font-weight:700}.ods-text--heading-3{margin:0;color:var(--ods-color-heading);font-size:24px;font-weight:700}.ods-text--heading-4{margin:0;color:var(--ods-color-heading);font-size:20px;font-weight:700}.ods-text--heading-5{margin:0;color:var(--ods-color-heading);font-size:18px;font-weight:700}.ods-text--heading-6{margin:0;color:var(--ods-color-heading);font-size:16px;font-weight:700}.ods-text--paragraph{margin:0;color:var(--ods-color-text);font-size:16px;font-weight:400}.ods-text--code{color:var(--ods-color-text);font-family:var(--ods-font-family-code);font-size:16px;font-weight:400}.ods-text--span{color:var(--ods-color-text);font-size:16px;font-weight:400}.ods-text--caption{color:var(--ods-color-text);font-size:12px;font-weight:400}",c=i,h=s(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.preset=e.paragraph}getTag(){switch(this.preset){case e.paragraph:return"p";case e.caption:return"span";case e.code:return"code";case e.span:return"span";case e.heading1:return"h1";case e.heading2:return"h2";case e.heading3:return"h3";case e.heading4:return"h4";case e.heading5:return"h5";case e.heading6:return"h6";default:return"p"}}render(){const o=this.getTag();return n(d,{key:"bb620ceb7a6fb4bae1e7bb33d26357cf3e1e7459",class:"ods-text"},n(o,{key:"451ae004038b6cf7f9eadcef5797da5806e4739d",class:`ods-text--${this.preset}`,part:"text"},n("slot",{key:"7d07034a6b6f9e6e63e597d46d1090ac5f4413a3"})))}static get style(){return c}},[1,"ods-text",{preset:[513]}]);function a(){if(typeof customElements>"u")return;["ods-text"].forEach(o=>{switch(o){case"ods-text":customElements.get(o)||customElements.define(o,h);break}})}a();const f=a;export{f as d};
