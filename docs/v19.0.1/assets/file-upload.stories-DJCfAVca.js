import{r as u,e as m}from"./index-D_CmzhJ4.js";import{j as c}from"./jsx-runtime-VM66peLj.js";import{c as Y}from"./index-CkQHsVsO.js";import{u as ut}from"./FormFieldLabel-DjB85afw.js";import{B as qe,d as Me,c as $e}from"./Button-CbWLwkmI.js";import{D as mt}from"./Divider-2RSB1Lnd.js";import{I as K,a as Q}from"./icon-name-BOrBmUKT.js";import{c as Ge,a as te,Q as P,R as U,W as F,T as ft,a7 as gt,s as J,b2 as Ft,X as se,d as Ve,K as Be,H as yt,w as bt,r as ht,n as _t,l as le,g as Et,u as vt,U as xt,L as Tt,V as Rt}from"./use-locale-context-BQVaQ0H3.js";import{u as We}from"./use-field-context-A_pa20cf.js";import{P as It}from"./ProgressBar-DQZadLE1.js";import{e as Lt,o as Pt,C as T}from"./controls-BtiQQn1l.js";import{s as N}from"./source-d0g_Nd0q.js";const[Ut,R]=Ge({name:"FileUploadContext",hookName:"useFileUploadContext",providerName:"<FileUploadProvider />"}),Ye=u.forwardRef((e,t)=>{const[r,i]=te()(e,["disableClick"]),a=R(),s=P(a.getDropzoneProps(r),i);return c.jsx(U.div,{...s,ref:t})});Ye.displayName="FileUploadDropzone";const Ze=u.forwardRef((e,t)=>{const r=R(),i=P(r.getHiddenInputProps(),e),a=We();return c.jsx(U.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...i,ref:t})});Ze.displayName="FileUploadHiddenInput";const[jt,re]=Ge({name:"FileUploadItemPropsContext",hookName:"useFileUploadItemPropsContext",providerName:"<FileUploadItemPropsProvider />"}),He=u.forwardRef((e,t)=>{const[r,i]=te()(e,["file"]),a=R(),s=P(a.getItemProps(r),i);return c.jsx(jt,{value:r,children:c.jsx(U.li,{...s,ref:t})})});He.displayName="FileUploadItem";const Ke=u.forwardRef((e,t)=>{const r=R(),i=re(),a=P(r.getItemDeleteTriggerProps(i),e);return c.jsx(U.button,{...a,ref:t})});Ke.displayName="FileUploadItemDeleteTrigger";const Qe=u.forwardRef((e,t)=>{const r=R(),i=P(r.getItemGroupProps(),e);return c.jsx(U.ul,{...i,ref:t})});Qe.displayName="FileUploadItemGroup";const Xe=u.forwardRef((e,t)=>{const{children:r,...i}=e,a=R(),s=re(),l=P(a.getItemNameProps(s),i);return c.jsx(U.div,{...l,ref:t,children:r||s.file.name})});Xe.displayName="FileUploadItemName";const Je=u.forwardRef((e,t)=>{const{children:r,...i}=e,a=R(),s=re(),l=P(a.getItemSizeTextProps(s),i);return c.jsx(U.div,{...l,ref:t,children:r||a.getFileSize(s.file)})});Je.displayName="FileUploadItemSizeText";var Dt=e=>typeof e.getAsEntry=="function"?e.getAsEntry():typeof e.webkitGetAsEntry=="function"?e.webkitGetAsEntry():null,et=e=>e.isDirectory,tt=e=>e.isFile,rt=(e,t)=>(Object.defineProperty(e,"relativePath",{value:t?`${t}/${e.name}`:e.name}),e),Ot=(e,t)=>Promise.all(Array.from(e).filter(r=>r.kind==="file").map(r=>{const i=Dt(r);if(!i)return null;if(et(i)&&t)return it(i.createReader(),`${i.name}`);if(tt(i))return new Promise(a=>{i.file(s=>{a(rt(s,""))})})}).filter(r=>r)),it=(e,t="")=>new Promise(r=>{const i=[],a=()=>{e.readEntries(s=>{if(s.length===0){r(Promise.all(i).then(o=>o.flat()));return}const l=s.map(o=>{if(!o)return null;if(et(o))return it(o.createReader(),`${t}${o.name}`);if(tt(o))return new Promise(n=>{o.file(f=>{n(rt(f,t))})})}).filter(o=>o);i.push(Promise.all(l)),a()})};a()});function Nt(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function St(e){return/^.*\.[\w]+$/.test(e)}var oe=e=>Nt(e)||St(e);function At(e){if(e!=null)return typeof e=="string"?e:Array.isArray(e)?e.filter(oe).join(","):Object.entries(e).reduce((t,[r,i])=>[...t,r,...i],[]).filter(oe).join(",")}var Z=(e,t)=>e.name===t.name&&e.size===t.size&&e.type===t.type,z=e=>e!=null;function zt(e,t,r){if(z(e.size))if(z(t)&&z(r)){if(e.size>r)return[!1,"FILE_TOO_LARGE"];if(e.size<t)return[!1,"FILE_TOO_SMALL"]}else{if(z(t)&&e.size<t)return[!1,"FILE_TOO_SMALL"];if(z(r)&&e.size>r)return[!1,"FILE_TOO_LARGE"]}return[!0,null]}function Ct(e,t){if(e&&t){const r=Array.isArray(t)?t:typeof t=="string"?t.split(","):[];if(r.length===0)return!0;const i=e.name||"",a=(e.type||"").toLowerCase(),s=a.replace(/\/.*$/,"");return r.some(l=>{const o=l.trim().toLowerCase();return o.charAt(0)==="."?i.toLowerCase().endsWith(o):o.endsWith("/*")?s===o.replace(/\/.*$/,""):a===o})}return!0}function wt(e,t){const r=e.type==="application/x-moz-file"||Ct(e,t);return[r,r?null:"FILE_INVALID_TYPE"]}function kt(e){const t=new Map;return function(i,a){const s=i+(a?Object.entries(a).sort((o,n)=>o[0]<n[0]?-1:1).join():"");if(t.has(s))return t.get(s);let l=new e(i,a);return t.set(s,l),l}}var qt=kt(Intl.NumberFormat);function Mt(e,t,r={}){return qt(t,r).format(e)}var $t=["","kilo","mega","giga","tera"],Gt=["","kilo","mega","giga","tera","peta"],Vt=(e,t="en-US",r={})=>{if(isNaN(e))return"";if(e===0)return"0 B";const{unit:i="byte",unitDisplay:a="short"}=r,s=i==="bit"?$t:Gt,l=Math.max(0,Math.min(Math.floor(Math.log10(e)/3),s.length-1)),o=s[l]+i,n=a||"short",f=parseFloat((e/Math.pow(1e3,l)).toPrecision(3));return Mt(f,t,{style:"unit",unit:o,unitDisplay:n})},Bt=ft("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger"),h=Bt.build(),at=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`file:${e.id}`},st=e=>{var t;return((t=e.ids)==null?void 0:t.dropzone)??`file:${e.id}:dropzone`},ee=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`file:${e.id}:input`},Wt=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`file:${e.id}:trigger`},Yt=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`file:${e.id}:label`},Zt=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.item)==null?void 0:i.call(r,t))??`file:${e.id}:item:${t}`},Ht=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemName)==null?void 0:i.call(r,t))??`file:${e.id}:item-name:${t}`},Kt=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemSizeText)==null?void 0:i.call(r,t))??`file:${e.id}:item-size:${t}`},Qt=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemPreview)==null?void 0:i.call(r,t))??`file:${e.id}:item-preview:${t}`},Xt=e=>e.getById(at(e)),ne=e=>e.getById(ee(e)),Jt=e=>e.getById(st(e));function de(e){const t=Ve(e);return e.dataTransfer?e.dataTransfer.types.some(r=>r==="Files"||r==="application/x-moz-file"):!!t&&"files"in t}function er(e,t){const{context:r,prop:i,computed:a}=e;return!a("multiple")&&t>1?!1:!a("multiple")&&t+r.get("acceptedFiles").length===2?!0:!(t+r.get("acceptedFiles").length>i("maxFiles"))}function ce(e,t){const{context:r,prop:i,computed:a}=e,s=[],l=[];return t.forEach(o=>{var d;const[n,f]=wt(o,a("acceptAttr")),[y,x]=zt(o,i("minFileSize"),i("maxFileSize")),I=(d=i("validate"))==null?void 0:d(o,{acceptedFiles:r.get("acceptedFiles"),rejectedFiles:r.get("rejectedFiles")}),p=I?I.length===0:!0;if(n&&y&&p)s.push(o);else{const g=[f,x];p||g.push(...I??[]),l.push({file:o,errors:g.filter(Boolean)})}}),er(e,s.length)||(s.forEach(o=>{l.push({file:o,errors:["TOO_MANY_FILES"]})}),s.splice(0)),{acceptedFiles:s,rejectedFiles:l}}function tr(e,t){const r=Et(e);try{if("DataTransfer"in r){const i=new r.DataTransfer;t.forEach(a=>{i.items.add(a)}),e.files=i.files}}catch{}}function rr(e,t){const{state:r,send:i,prop:a,computed:s,scope:l,context:o}=e,n=a("disabled"),f=a("allowDrop"),y=a("translations"),x=r.matches("dragging"),I=r.matches("focused")&&!n;return{dragging:x,focused:I,disabled:!!n,openFilePicker(){n||i({type:"OPEN"})},deleteFile(p){i({type:"FILE.DELETE",file:p})},acceptedFiles:o.get("acceptedFiles"),rejectedFiles:o.get("rejectedFiles"),setFiles(p){i({type:"FILES.SET",files:p,count:p.length})},clearRejectedFiles(){i({type:"REJECTED_FILES.CLEAR"})},clearFiles(){i({type:"FILES.CLEAR"})},getFileSize(p){return Vt(p.size,a("locale"))},createFileUrl(p,d){const g=l.getWin(),b=g.URL.createObjectURL(p);return d(b),()=>g.URL.revokeObjectURL(b)},setClipboardFiles(p){if(n)return!1;const g=Array.from((p==null?void 0:p.items)??[]).reduce((b,D)=>{if(D.kind!=="file")return b;const S=D.getAsFile();return S?[...b,S]:b},[]);return g.length?(i({type:"FILES.SET",files:g}),!0):!1},getRootProps(){return t.element({...h.root.attrs,dir:a("dir"),id:at(l),"data-disabled":F(n),"data-dragging":F(x)})},getDropzoneProps(p={}){return t.element({...h.dropzone.attrs,dir:a("dir"),id:st(l),tabIndex:n||p.disableClick?void 0:0,role:p.disableClick?"application":"button","aria-label":y.dropzone,"aria-disabled":n,"data-invalid":F(a("invalid")),"data-disabled":F(n),"data-dragging":F(x),onKeyDown(d){n||d.defaultPrevented||se(d)&&(p.disableClick||d.key!=="Enter"&&d.key!==" "||i({type:"DROPZONE.CLICK",src:"keydown"}))},onClick(d){n||d.defaultPrevented||p.disableClick||se(d)&&(d.currentTarget.localName==="label"&&d.preventDefault(),i({type:"DROPZONE.CLICK"}))},onDragOver(d){if(n||!f)return;d.preventDefault(),d.stopPropagation();try{d.dataTransfer.dropEffect="copy"}catch{}if(!de(d))return;const b=d.dataTransfer.items.length;i({type:"DROPZONE.DRAG_OVER",count:b})},onDragLeave(d){n||f&&(J(d.currentTarget,d.relatedTarget)||i({type:"DROPZONE.DRAG_LEAVE"}))},onDrop(d){if(n)return;f&&(d.preventDefault(),d.stopPropagation());const g=de(d);n||!g||Ot(d.dataTransfer.items,a("directory")).then(b=>{i({type:"DROPZONE.DROP",files:Ft(b)})})},onFocus(){n||i({type:"DROPZONE.FOCUS"})},onBlur(){n||i({type:"DROPZONE.BLUR"})}})},getTriggerProps(){return t.button({...h.trigger.attrs,dir:a("dir"),id:Wt(l),disabled:n,"data-disabled":F(n),"data-invalid":F(a("invalid")),type:"button",onClick(p){n||(J(Jt(l),p.currentTarget)&&p.stopPropagation(),i({type:"OPEN"}))}})},getHiddenInputProps(){return t.input({id:ee(l),tabIndex:-1,disabled:n,type:"file",required:a("required"),capture:a("capture"),name:a("name"),accept:s("acceptAttr"),webkitdirectory:a("directory")?"":void 0,multiple:s("multiple")||a("maxFiles")>1,onClick(p){p.stopPropagation(),p.currentTarget.value=""},onInput(p){if(n)return;const{files:d}=p.currentTarget;i({type:"FILE.SELECT",files:d?Array.from(d):[]})},style:gt})},getItemGroupProps(){return t.element({...h.itemGroup.attrs,dir:a("dir"),"data-disabled":F(n)})},getItemProps(p){const{file:d}=p;return t.element({...h.item.attrs,dir:a("dir"),id:Zt(l,d.name),"data-disabled":F(n)})},getItemNameProps(p){const{file:d}=p;return t.element({...h.itemName.attrs,dir:a("dir"),id:Ht(l,d.name),"data-disabled":F(n)})},getItemSizeTextProps(p){const{file:d}=p;return t.element({...h.itemSizeText.attrs,dir:a("dir"),id:Kt(l,d.name),"data-disabled":F(n)})},getItemPreviewProps(p){const{file:d}=p;return t.element({...h.itemPreview.attrs,dir:a("dir"),id:Qt(l,d.name),"data-disabled":F(n)})},getItemPreviewImageProps(p){var D;const{file:d,url:g}=p;if(!d.type.startsWith("image/"))throw new Error("Preview Image is only supported for image files");return t.img({...h.itemPreviewImage.attrs,alt:(D=y.itemPreview)==null?void 0:D.call(y,d),src:g,"data-disabled":F(n)})},getItemDeleteTriggerProps(p){var g;const{file:d}=p;return t.button({...h.itemDeleteTrigger.attrs,dir:a("dir"),type:"button",disabled:n,"data-disabled":F(n),"aria-label":(g=y.deleteFile)==null?void 0:g.call(y,d),onClick(){n||i({type:"FILE.DELETE",file:d})}})},getLabelProps(){return t.label({...h.label.attrs,dir:a("dir"),id:Yt(l),htmlFor:ee(l),"data-disabled":F(n)})},getClearTriggerProps(){return t.button({...h.clearTrigger.attrs,dir:a("dir"),type:"button",disabled:n,hidden:o.get("acceptedFiles").length===0,"data-disabled":F(n),onClick(p){p.defaultPrevented||n||i({type:"FILES.CLEAR"})}})}}}var ir=yt({props({props:e}){return{minFileSize:0,maxFileSize:Number.POSITIVE_INFINITY,maxFiles:1,allowDrop:!0,preventDocumentDrop:!0,...e,translations:{dropzone:"dropzone",itemPreview:t=>`preview of ${t.name}`,deleteFile:t=>`delete file ${t.name}`,...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:r}){return{acceptedFiles:t(()=>({defaultValue:[],isEqual:(i,a)=>i.length===(a==null?void 0:a.length)&&i.every((s,l)=>Z(s,a[l])),hash(i){return i.map(a=>`${a.name}-${a.size}`).join(",")},onChange(i){var s,l;const a=r();(s=e("onFileAccept"))==null||s({files:i}),(l=e("onFileChange"))==null||l({acceptedFiles:i,rejectedFiles:a.get("rejectedFiles")})}})),rejectedFiles:t(()=>({defaultValue:[],isEqual:(i,a)=>i.length===(a==null?void 0:a.length)&&i.every((s,l)=>Z(s.file,a[l].file)),onChange(i){var s,l;const a=r();(s=e("onFileReject"))==null||s({files:i}),(l=e("onFileChange"))==null||l({acceptedFiles:a.get("acceptedFiles"),rejectedFiles:i})}}))}},computed:{acceptAttr:({prop:e})=>At(e("accept")),multiple:({prop:e})=>e("maxFiles")>1},watch({track:e,context:t,action:r}){e([()=>t.hash("acceptedFiles")],()=>{r(["syncInputElement"])})},on:{"FILES.SET":{actions:["setFiles"]},"FILE.SELECT":{actions:["setEventFiles"]},"FILE.DELETE":{actions:["removeFile"]},"FILES.CLEAR":{actions:["clearFiles"]},"REJECTED_FILES.CLEAR":{actions:["clearRejectedFiles"]}},effects:["preventDocumentDrop"],states:{idle:{on:{OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.FOCUS":{target:"focused"},"DROPZONE.DRAG_OVER":{target:"dragging"}}},focused:{on:{"DROPZONE.BLUR":{target:"idle"},OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.DRAG_OVER":{target:"dragging"}}},dragging:{on:{"DROPZONE.DROP":{target:"idle",actions:["setEventFiles"]},"DROPZONE.DRAG_LEAVE":{target:"idle"}}}},implementations:{effects:{preventDocumentDrop({prop:e,scope:t}){if(!e("preventDocumentDrop")||!e("allowDrop")||e("disabled"))return;const r=t.getDoc(),i=s=>{s==null||s.preventDefault()},a=s=>{J(Xt(t),Ve(s))||s.preventDefault()};return _t(le(r,"dragover",i,!1),le(r,"drop",a,!1))}},actions:{syncInputElement({scope:e,context:t}){queueMicrotask(()=>{const r=ne(e);if(!r)return;tr(r,t.get("acceptedFiles"));const i=e.getWin();r.dispatchEvent(new i.Event("change",{bubbles:!0}))})},openFilePicker({scope:e}){ht(()=>{var t;(t=ne(e))==null||t.click()})},setFiles(e){const{computed:t,context:r,event:i}=e,{acceptedFiles:a,rejectedFiles:s}=ce(e,i.files);r.set("acceptedFiles",t("multiple")?a:[a[0]]),r.set("rejectedFiles",s)},setEventFiles(e){const{computed:t,context:r,event:i,prop:a}=e,{acceptedFiles:s,rejectedFiles:l}=ce(e,i.files),o=f=>{if(t("multiple")){r.set("acceptedFiles",y=>[...y,...f]),r.set("rejectedFiles",l);return}if(f.length){r.set("acceptedFiles",[f[0]]),r.set("rejectedFiles",l);return}l.length&&(r.set("acceptedFiles",r.get("acceptedFiles")),r.set("rejectedFiles",l))},n=a("transformFiles");n?n(s).then(o).catch(f=>{bt(`[zag-js/file-upload] error transforming files
${f}`)}):o(s)},removeFile({context:e,event:t}){const r=e.get("acceptedFiles").filter(a=>!Z(a,t.file)),i=e.get("rejectedFiles").filter(a=>!Z(a.file,t.file));e.set("acceptedFiles",r),e.set("rejectedFiles",i)},clearRejectedFiles({context:e}){e.set("rejectedFiles",[])},clearFiles({context:e}){e.set("acceptedFiles",[]),e.set("rejectedFiles",[])}}}});Be()(["accept","allowDrop","capture","dir","directory","disabled","getRootNode","id","ids","locale","maxFiles","maxFileSize","minFileSize","name","invalid","onFileAccept","onFileReject","onFileChange","preventDocumentDrop","required","translations","transformFiles","validate"]);Be()(["file"]);const ar=e=>{const t=u.useId(),{getRootNode:r}=vt(),{dir:i,locale:a}=xt(),s=We(),l={id:t,ids:{label:s==null?void 0:s.ids.label,hiddenInput:s==null?void 0:s.ids.control},dir:i,disabled:s==null?void 0:s.disabled,locale:a,required:s==null?void 0:s.required,invalid:s==null?void 0:s.invalid,getRootNode:r,...e},o=Tt(ir,l);return rr(o,Rt)},lt=u.forwardRef((e,t)=>{const[r,i]=te()(e,["accept","allowDrop","capture","directory","disabled","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","translations","transformFiles","validate"]),a=ar(r),s=P(a.getRootProps(),i);return c.jsx(Ut,{value:a,children:c.jsx(U.div,{...s,ref:t})})});lt.displayName="FileUploadRoot";const ot=u.forwardRef((e,t)=>{const r=R(),i=P(r.getTriggerProps(),e);return c.jsx(U.button,{...i,ref:t})});ot.displayName="FileUploadTrigger";var O=(e=>(e.invalidFile="invalid-file",e.maxFileReached="max-file-reached",e.sizeTooLarge="size-too-large",e.unknownError="unknown-error",e.wrongFormat="wrong-format",e))(O||{});Object.freeze(Object.values(O));function sr(e){return e.map(t=>{switch(t){case"FILE_INVALID":return O.invalidFile;case"FILE_INVALID_TYPE":return O.wrongFormat;case"FILE_TOO_LARGE":return O.sizeTooLarge;case"TOO_MANY_FILES":return O.maxFileReached;default:return O.unknownError}})}const j={"file-upload-dropzone":"_file-upload-dropzone_faoyu_21","file-upload-dropzone--disabled":"_file-upload-dropzone--disabled_faoyu_28","file-upload-dropzone__icon":"_file-upload-dropzone__icon_faoyu_28","file-upload-dropzone--dragging":"_file-upload-dropzone--dragging_faoyu_31","file-upload-dropzone--empty":"_file-upload-dropzone--empty_faoyu_34","file-upload-dropzone__rules":"_file-upload-dropzone__rules_faoyu_41","file-upload-dropzone__error":"_file-upload-dropzone__error_faoyu_47","file-upload-dropzone__error__divider":"_file-upload-dropzone__error__divider_faoyu_55"},ie=({acceptedFileLabel:e,dropzoneLabel:t,error:r,maxFile:i,maxFileLabel:a,maxSize:s,maxSizeLabel:l,triggerLabel:o})=>{const{acceptedFiles:n,disabled:f,dragging:y,getFileSize:x}=R(),I=u.useMemo(()=>!!e||!!a||!!l,[e,a,l]);return c.jsxs("div",{className:Y(j["file-upload-dropzone"],{[j["file-upload-dropzone--disabled"]]:f},{[j["file-upload-dropzone--dragging"]]:y},{[j["file-upload-dropzone--empty"]]:!n.length}),children:[c.jsx(K,{className:j["file-upload-dropzone__icon"],name:Q.filePlus}),c.jsx("span",{children:t}),I&&c.jsxs("div",{className:j["file-upload-dropzone__rules"],children:[a&&typeof i=="number"&&i>=0&&c.jsxs("span",{children:[a," ",i]}),l&&typeof s=="number"&&s>=0&&c.jsxs("span",{children:[l," ",x({size:s})]}),e&&c.jsx("span",{children:e})]}),c.jsx(ot,{asChild:!0,children:c.jsx(qe,{size:$e.md,variant:Me.ghost,children:o})}),!!r&&c.jsxs("div",{className:j["file-upload-dropzone__error"],children:[c.jsx("span",{children:r}),c.jsx(mt,{className:j["file-upload-dropzone__error__divider"]})]})]})};ie.displayName="FileUploadDropzone";ie.__docgenInfo={description:"",methods:[],displayName:"FileUploadDropzone",props:{acceptedFileLabel:{required:!1,tsType:{name:"string"},description:""},dropzoneLabel:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},maxFile:{required:!1,tsType:{name:"number"},description:""},maxFileLabel:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},maxSizeLabel:{required:!1,tsType:{name:"string"},description:""},triggerLabel:{required:!0,tsType:{name:"string"},description:""}}};const pe={"file-upload":"_file-upload_138iw_2","file-upload--invalid":"_file-upload--invalid_138iw_16"},_=u.forwardRef(({accept:e,acceptedFileLabel:t,children:r,className:i,disabled:a,dropzoneLabel:s="Drag & drop a file",error:l,id:o,invalid:n,maxFile:f=1/0,maxFileLabel:y,maxSize:x,maxSizeLabel:I,name:p,onFileAccept:d,onFileReject:g,required:b,triggerLabel:D="Browse files",...S},nt)=>{const L=ut(),dt=u.useCallback(({files:A})=>{g&&g({files:A.map(({errors:ct,file:pt})=>({errors:sr(ct),file:pt}))})},[g]),X=n||(L==null?void 0:L.invalid);return c.jsxs(lt,{accept:e,allowDrop:!0,className:Y(pe["file-upload"],{[pe["file-upload--invalid"]]:X},i),directory:!1,disabled:a,id:o||(L==null?void 0:L.id),invalid:X,maxFiles:f,maxFileSize:x,onFileAccept:d,onFileReject:dt,name:p,ref:nt,required:b,...S,children:[c.jsxs(Ye,{disableClick:!0,onDragOver:A=>A.preventDefault(),onDrop:A=>A.preventDefault(),children:[c.jsx(ie,{acceptedFileLabel:t,dropzoneLabel:s,error:l,maxFile:f,maxFileLabel:y,maxSize:x,maxSizeLabel:I,triggerLabel:D}),r]}),c.jsx(Ze,{"aria-invalid":X,"aria-describedby":S["aria-describedby"]||(L==null?void 0:L.ariaDescribedBy)})]})});_.displayName="FileUpload";_.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:"The accepted file types."},acceptedFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the accepted file types."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},dropzoneLabel:{required:!1,tsType:{name:"string"},description:"The dropzone label.",defaultValue:{value:"'Drag & drop a file'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"The global error message to display."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},maxFile:{required:!1,tsType:{name:"number"},description:"The maximum number of files that can be selected.",defaultValue:{value:"Infinity",computed:!0}},maxFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum number of files that can be selected."},maxSize:{required:!1,tsType:{name:"number"},description:"The maximum size of selectable files."},maxSizeLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum size of selectable files."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onFileAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadAcceptDetail) => void",signature:{arguments:[{type:{name:"FileUploadAcceptDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been successfully added."},onFileReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadRejectDetail) => void",signature:{arguments:[{type:{name:"FileUploadRejectDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been rejected."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},triggerLabel:{required:!1,tsType:{name:"string"},description:"Upload button label.",defaultValue:{value:"'Browse files'",computed:!1}}},composes:["ComponentPropsWithRef"]};const H={"file-upload-item-status":"_file-upload-item-status_lthpx_21","file-upload-item-status__error":"_file-upload-item-status__error_lthpx_24","file-upload-item-status__progress":"_file-upload-item-status__progress_lthpx_28","file-upload-item-status__success":"_file-upload-item-status__success_lthpx_36"};function lr(e,t,r){return t?c.jsx("span",{className:H["file-upload-item-status__error"],children:t}):(r||r===0)&&r<100?c.jsxs("div",{className:H["file-upload-item-status__progress"],children:[c.jsx(It,{value:r}),c.jsxs("span",{children:[r,"%"]})]}):r&&r>=100?c.jsxs("span",{className:H["file-upload-item-status__success"],children:[c.jsx(K,{name:Q.check})," ",e]}):c.jsx(c.Fragment,{})}const ae=({className:e,error:t,progress:r,successLabel:i})=>c.jsx("div",{className:Y(H["file-upload-item-status"],e),children:lr(i,t,r)});ae.displayName="FileUploadItemStatus";ae.__docgenInfo={description:"",methods:[],displayName:"FileUploadItemStatus",props:{error:{required:!1,tsType:{name:"string"},description:""},progress:{required:!1,tsType:{name:"number"},description:""},successLabel:{required:!0,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithoutRef"]};const C={"file-upload-item":"_file-upload-item_e3bwg_25","file-upload-item__icon":"_file-upload-item__icon_e3bwg_37","file-upload-item__name":"_file-upload-item__name_e3bwg_44","file-upload-item__size":"_file-upload-item__size_e3bwg_49","file-upload-item__status":"_file-upload-item__status_e3bwg_52"},v=u.forwardRef(({className:e,error:t,file:r,progress:i,uploadSuccessLabel:a="File uploaded",...s},l)=>c.jsxs(He,{className:Y(C["file-upload-item"],e),file:r,ref:l,...s,children:[c.jsx(K,{className:C["file-upload-item__icon"],name:Q.file}),c.jsx(Xe,{className:C["file-upload-item__name"]}),c.jsx(Je,{className:C["file-upload-item__size"]}),c.jsx(Ke,{asChild:!0,children:c.jsx(qe,{size:$e.sm,variant:Me.ghost,children:c.jsx(K,{name:Q.xmark})})}),c.jsx(ae,{className:C["file-upload-item__status"],error:t,progress:i,successLabel:a})]}));v.displayName="FileUploadItem";v.__docgenInfo={description:"",methods:[],displayName:"FileUploadItem",props:{error:{required:!1,tsType:{name:"string"},description:"The file error message to display."},file:{required:!0,tsType:{name:"File"},description:"The current File object."},progress:{required:!1,tsType:{name:"number"},description:"The file upload progress."},uploadSuccessLabel:{required:!1,tsType:{name:"string"},description:"The label displayed after a successful upload.",defaultValue:{value:"'File uploaded'",computed:!1}}},composes:["ComponentPropsWithRef"]};const ue={"file-upload-list":"_file-upload-list_1b3bn_21","file-upload-list--not-empty":"_file-upload-list--not-empty_1b3bn_25"},E=u.forwardRef(({children:e,className:t,...r},i)=>{const{acceptedFiles:a}=R();return c.jsx(Qe,{className:Y(ue["file-upload-list"],{[ue["file-upload-list--not-empty"]]:a.length>0},t),ref:i,...r,children:e})});E.displayName="FileUploadList";E.__docgenInfo={description:"",methods:[],displayName:"FileUploadList",composes:["ComponentPropsWithRef"]};const or={argTypes:Lt(["accept","name","onFileAccept","onFileReject","required"]),component:_,subcomponents:{FileUploadItem:v,FileUploadList:E},title:"React Components/File Upload"},w={render:e=>{const[t,r]=u.useState(""),[i,a]=u.useState([]);function s({files:o}){a(o),r("")}function l({files:o}){r(o.length?"File(s) rejected":"")}return m.createElement(_,{...e,error:e.error||t,onFileAccept:s,onFileReject:l},m.createElement(E,null,i.map((o,n)=>m.createElement(v,{file:o,key:n}))))},argTypes:Pt({acceptedFileLabel:{table:{category:T.general},control:"text"},disabled:{table:{category:T.general},control:"boolean"},dropzoneLabel:{table:{category:T.general},control:"text"},error:{table:{category:T.general},control:"text"},invalid:{table:{category:T.general},control:"boolean"},maxFile:{table:{category:T.general},control:"number"},maxFileLabel:{table:{category:T.general},control:"text"},maxSize:{table:{category:T.general},control:"number"},maxSizeLabel:{table:{category:T.general},control:"text"},triggerLabel:{table:{category:T.general},control:"text"}})},k={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:({})=>{const[e,t]=u.useState(""),[r,i]=u.useState([]);function a({files:l}){i(l),t("")}function s({files:l}){t(l.length?"File(s) not of the expected format":"")}return m.createElement(_,{accept:"image/png",acceptedFileLabel:"Png files only",error:e,onFileAccept:a,onFileReject:s},m.createElement(E,null,r.map((l,o)=>m.createElement(v,{file:l,key:o}))))}},q={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:({})=>{const[e,t]=u.useState([]);return m.createElement(_,{acceptedFileLabel:"Formats acceptés : images",dropzoneLabel:"Glisser-déposer des fichiers",maxFile:3,maxFileLabel:"Nombre maximal de fichiers :",maxSize:524288e3,maxSizeLabel:"Taille de fichier max :",onFileAccept:({files:r})=>t(r),triggerLabel:"Parcourir les fichiers"},m.createElement(E,null,e.map((r,i)=>m.createElement(v,{file:r,key:i,progress:100,uploadSuccessLabel:"Fichier uploadé"}))))}},M={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:({})=>{const[e,t]=u.useState([]);return m.createElement(_,{onFileAccept:({files:r})=>t(r)},m.createElement(E,null,e.map((r,i)=>m.createElement(v,{file:r,key:i}))))}},$={tags:["!dev"],render:({})=>m.createElement(_,{disabled:!0},m.createElement(E,null))},G={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:({})=>{const[e,t]=u.useState(""),[r,i]=u.useState([]);function a({files:l}){i(l),t("")}function s({files:l}){t(l.length?"Too many files":"")}return m.createElement(_,{error:e,maxFile:3,maxFileLabel:"Maximum file allowed:",onFileAccept:a,onFileReject:s},m.createElement(E,null,r.map((l,o)=>m.createElement(v,{file:l,key:o}))))}},V={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:({})=>{const[e,t]=u.useState(""),[r,i]=u.useState([]);function a({files:l}){i(l),t("")}function s({files:l}){t(l.length?"File(s) too large":"")}return m.createElement(_,{error:e,maxSize:1e6,maxSizeLabel:"No file larger than:",onFileAccept:a,onFileReject:s},m.createElement(E,null,r.map((l,o)=>m.createElement(v,{file:l,key:o}))))}},B={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[e,t]=u.useState([]);return m.createElement(_,{onFileAccept:({files:r})=>t(r)},m.createElement(E,null,e.map((r,i)=>m.createElement(v,{file:r,key:i}))))}},W={tags:["!dev"],parameters:{docs:{source:{...N()}}},render:({})=>{const[e,t]=u.useState([]);u.useEffect(()=>{e.forEach(i=>{i.progress||r(i)})},[e]);function r(i){const a=setInterval(()=>{t(s=>s.map(l=>(l.name===i.name&&(l.progress=(l.progress||0)+Math.floor(Math.random()*10+1),l.progress>=100&&clearInterval(a)),l)))},100)}return m.createElement(_,{onFileAccept:({files:i})=>t(i)},m.createElement(E,null,e.map((i,a)=>m.createElement(v,{error:i.error,file:i,key:a,progress:i.progress}))))}};var me,fe,ge;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: arg => {
    const [error, setError] = useState<string>('');
    const [files, setFiles] = useState<File[]>([]);
    function onAccept({
      files
    }: FileUploadAcceptDetail): void {
      setFiles(files);
      setError('');
    }
    function onReject({
      files
    }: FileUploadRejectDetail): void {
      setError(files.length ? 'File(s) rejected' : '');
    }
    return <FileUpload {...arg} error={arg.error || error} onFileAccept={onAccept} onFileReject={onReject}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  },
  argTypes: orderControls({
    acceptedFileLabel: {
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
    dropzoneLabel: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    maxFile: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    },
    maxFileLabel: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    maxSize: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    },
    maxSizeLabel: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    triggerLabel: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    }
  })
}`,...(ge=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Fe,ye,be;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [error, setError] = useState<string>('');
    const [files, setFiles] = useState<File[]>([]);
    function onAccept({
      files
    }: FileUploadAcceptDetail): void {
      setFiles(files);
      setError('');
    }
    function onReject({
      files
    }: FileUploadRejectDetail): void {
      setError(files.length ? 'File(s) not of the expected format' : '');
    }
    return <FileUpload accept="image/png" acceptedFileLabel="Png files only" error={error} onFileAccept={onAccept} onFileReject={onReject}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(be=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,_e,Ee;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload acceptedFileLabel="Formats acceptés : images" dropzoneLabel="Glisser-déposer des fichiers" maxFile={3} maxFileLabel="Nombre maximal de fichiers :" maxSize={524288000} maxSizeLabel="Taille de fichier max :" onFileAccept={({
      files
    }) => setFiles(files)} triggerLabel="Parcourir les fichiers">
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} progress={100} uploadSuccessLabel="Fichier uploadé" />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Ee=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var ve,xe,Te;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Te=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Re,Ie,Le;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FileUpload disabled>
      <FileUploadList />
    </FileUpload>
}`,...(Le=(Ie=$.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Pe,Ue,je;G.parameters={...G.parameters,docs:{...(Pe=G.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [error, setError] = useState<string>('');
    const [files, setFiles] = useState<File[]>([]);
    function onAccept({
      files
    }: FileUploadAcceptDetail): void {
      setFiles(files);
      setError('');
    }
    function onReject({
      files
    }: FileUploadRejectDetail): void {
      setError(files.length ? 'Too many files' : '');
    }
    return <FileUpload error={error} maxFile={3} maxFileLabel="Maximum file allowed:" onFileAccept={onAccept} onFileReject={onReject}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(je=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};var De,Oe,Ne;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [error, setError] = useState<string>('');
    const [files, setFiles] = useState<File[]>([]);
    function onAccept({
      files
    }: FileUploadAcceptDetail): void {
      setFiles(files);
      setError('');
    }
    function onReject({
      files
    }: FileUploadRejectDetail): void {
      setError(files.length ? 'File(s) too large' : '');
    }
    return <FileUpload error={error} maxSize={1000000} maxSizeLabel="No file larger than:" onFileAccept={onAccept} onFileReject={onReject}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Ne=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var Se,Ae,ze;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => {
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(ze=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var Ce,we,ke;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    type MyFile = File & {
      error?: string;
      progress?: number;
    };
    const [files, setFiles] = useState<MyFile[]>([]);
    useEffect(() => {
      files.forEach(file => {
        if (!file.progress) {
          uploadFile(file);
        }
      });
    }, [files]);
    function uploadFile(file: MyFile): void {
      const intervalId = setInterval(() => {
        setFiles(files => files.map(f => {
          if (f.name === file.name) {
            f.progress = (f.progress || 0) + Math.floor(Math.random() * 10 + 1);
            if (f.progress >= 100) {
              clearInterval(intervalId);
            }
          }
          return f;
        }));
      }, 100);
    }
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)}>
        <FileUploadList>
          {files.map((file, idx) => <FileUploadItem error={file.error} file={file} key={idx} progress={file.progress} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(ke=(we=W.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};const nr=["Demo","Accept","CustomLabels","Default","Disabled","MaxFile","MaxSize","Overview","Upload"],Er=Object.freeze(Object.defineProperty({__proto__:null,Accept:k,CustomLabels:q,Default:M,Demo:w,Disabled:$,MaxFile:G,MaxSize:V,Overview:B,Upload:W,__namedExportsOrder:nr,default:or},Symbol.toStringTag,{value:"Module"}));export{k as A,q as C,M as D,Er as F,G as M,B as O,W as U,$ as a,V as b};
