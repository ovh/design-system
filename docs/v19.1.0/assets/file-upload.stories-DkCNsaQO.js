import{u as St,F as rt,a as it}from"./FormFieldLabel-DQkMrZpp.js";import{r as m,e as u}from"./index-D_CmzhJ4.js";import{j as p}from"./jsx-runtime-VM66peLj.js";import{c as Q}from"./index-CkQHsVsO.js";import{B as at,d as lt,c as st}from"./Button-Cu9Xbu09.js";import{D as Ot}from"./Divider-Cq2-AGRl.js";import{I as te,a as re}from"./icon-name-CL_C5kfn.js";import{c as nt,a as se,Q as P,R as D,W as b,T as Nt,aA as Ct,s as ae,b2 as zt,X as ue,d as ot,K as dt,H as wt,w as kt,r as qt,n as $t,l as me,g as Mt,u as Bt,U as Gt,L as Vt,V as Wt}from"./use-locale-context-DLC4Hyvy.js";import{u as ct}from"./use-field-context--XabuWSL.js";import{L as f,u as Yt}from"./useI18n-CFuCjRRO.js";import{P as Zt}from"./ProgressBar-D8xx6uVy.js";import{e as Ht,o as Kt,C as x}from"./controls-BtiQQn1l.js";import{s as j}from"./source-d0g_Nd0q.js";const[Qt,I]=nt({name:"FileUploadContext",hookName:"useFileUploadContext",providerName:"<FileUploadProvider />"}),pt=m.forwardRef((e,t)=>{const[r,i]=se()(e,["disableClick"]),a=I(),l=P(a.getDropzoneProps(r),i);return p.jsx(D.div,{...l,ref:t})});pt.displayName="FileUploadDropzone";const ut=m.forwardRef((e,t)=>{const r=I(),i=P(r.getHiddenInputProps(),e),a=ct();return p.jsx(D.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...i,ref:t})});ut.displayName="FileUploadHiddenInput";const[Xt,ne]=nt({name:"FileUploadItemPropsContext",hookName:"useFileUploadItemPropsContext",providerName:"<FileUploadItemPropsProvider />"}),mt=m.forwardRef((e,t)=>{const[r,i]=se()(e,["file"]),a=I(),l=P(a.getItemProps(r),i);return p.jsx(Xt,{value:r,children:p.jsx(D.li,{...l,ref:t})})});mt.displayName="FileUploadItem";const ft=m.forwardRef((e,t)=>{const r=I(),i=ne(),a=P(r.getItemDeleteTriggerProps(i),e);return p.jsx(D.button,{...a,ref:t})});ft.displayName="FileUploadItemDeleteTrigger";const Ft=m.forwardRef((e,t)=>{const r=I(),i=P(r.getItemGroupProps(),e);return p.jsx(D.ul,{...i,ref:t})});Ft.displayName="FileUploadItemGroup";const gt=m.forwardRef((e,t)=>{const{children:r,...i}=e,a=I(),l=ne(),s=P(a.getItemNameProps(l),i);return p.jsx(D.div,{...s,ref:t,children:r||l.file.name})});gt.displayName="FileUploadItemName";const yt=m.forwardRef((e,t)=>{const{children:r,...i}=e,a=I(),l=ne(),s=P(a.getItemSizeTextProps(l),i);return p.jsx(D.div,{...s,ref:t,children:r||a.getFileSize(l.file)})});yt.displayName="FileUploadItemSizeText";var Jt=e=>typeof e.getAsEntry=="function"?e.getAsEntry():typeof e.webkitGetAsEntry=="function"?e.webkitGetAsEntry():null,bt=e=>e.isDirectory,ht=e=>e.isFile,_t=(e,t)=>(Object.defineProperty(e,"relativePath",{value:t?`${t}/${e.name}`:e.name}),e),er=(e,t)=>Promise.all(Array.from(e).filter(r=>r.kind==="file").map(r=>{const i=Jt(r);if(!i)return null;if(bt(i)&&t)return Et(i.createReader(),`${i.name}`);if(ht(i))return new Promise(a=>{i.file(l=>{a(_t(l,""))})})}).filter(r=>r)),Et=(e,t="")=>new Promise(r=>{const i=[],a=()=>{e.readEntries(l=>{if(l.length===0){r(Promise.all(i).then(n=>n.flat()));return}const s=l.map(n=>{if(!n)return null;if(bt(n))return Et(n.createReader(),`${t}${n.name}`);if(ht(n))return new Promise(o=>{n.file(F=>{o(_t(F,t))})})}).filter(n=>n);i.push(Promise.all(s)),a()})};a()});function tr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function rr(e){return/^.*\.[\w]+$/.test(e)}var fe=e=>tr(e)||rr(e);function ir(e){if(e!=null)return typeof e=="string"?e:Array.isArray(e)?e.filter(fe).join(","):Object.entries(e).reduce((t,[r,i])=>[...t,r,...i],[]).filter(fe).join(",")}var J=(e,t)=>e.name===t.name&&e.size===t.size&&e.type===t.type,z=e=>e!=null;function ar(e,t,r){if(z(e.size))if(z(t)&&z(r)){if(e.size>r)return[!1,"FILE_TOO_LARGE"];if(e.size<t)return[!1,"FILE_TOO_SMALL"]}else{if(z(t)&&e.size<t)return[!1,"FILE_TOO_SMALL"];if(z(r)&&e.size>r)return[!1,"FILE_TOO_LARGE"]}return[!0,null]}function lr(e,t){if(e&&t){const r=Array.isArray(t)?t:typeof t=="string"?t.split(","):[];if(r.length===0)return!0;const i=e.name||"",a=(e.type||"").toLowerCase(),l=a.replace(/\/.*$/,"");return r.some(s=>{const n=s.trim().toLowerCase();return n.charAt(0)==="."?i.toLowerCase().endsWith(n):n.endsWith("/*")?l===n.replace(/\/.*$/,""):a===n})}return!0}function sr(e,t){const r=e.type==="application/x-moz-file"||lr(e,t);return[r,r?null:"FILE_INVALID_TYPE"]}function nr(e){const t=new Map;return function(i,a){const l=i+(a?Object.entries(a).sort((n,o)=>n[0]<o[0]?-1:1).join():"");if(t.has(l))return t.get(l);let s=new e(i,a);return t.set(l,s),s}}var or=nr(Intl.NumberFormat);function dr(e,t,r={}){return or(t,r).format(e)}var cr=["","kilo","mega","giga","tera"],pr=["","kilo","mega","giga","tera","peta"],ur=(e,t="en-US",r={})=>{if(isNaN(e))return"";if(e===0)return"0 B";const{unit:i="byte",unitDisplay:a="short"}=r,l=i==="bit"?cr:pr,s=Math.max(0,Math.min(Math.floor(Math.log10(e)/3),l.length-1)),n=l[s]+i,o=a||"short",F=parseFloat((e/Math.pow(1e3,s)).toPrecision(3));return dr(F,t,{style:"unit",unit:n,unitDisplay:o})},mr=Nt("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger"),U=mr.build(),vt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`file:${e.id}`},Ut=e=>{var t;return((t=e.ids)==null?void 0:t.dropzone)??`file:${e.id}:dropzone`},le=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`file:${e.id}:input`},fr=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`file:${e.id}:trigger`},Fr=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`file:${e.id}:label`},gr=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.item)==null?void 0:i.call(r,t))??`file:${e.id}:item:${t}`},yr=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemName)==null?void 0:i.call(r,t))??`file:${e.id}:item-name:${t}`},br=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemSizeText)==null?void 0:i.call(r,t))??`file:${e.id}:item-size:${t}`},hr=(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemPreview)==null?void 0:i.call(r,t))??`file:${e.id}:item-preview:${t}`},_r=e=>e.getById(vt(e)),Fe=e=>e.getById(le(e)),Er=e=>e.getById(Ut(e));function ge(e){const t=ot(e);return e.dataTransfer?e.dataTransfer.types.some(r=>r==="Files"||r==="application/x-moz-file"):!!t&&"files"in t}function vr(e,t){const{context:r,prop:i,computed:a}=e;return!a("multiple")&&t>1?!1:!a("multiple")&&t+r.get("acceptedFiles").length===2?!0:!(t+r.get("acceptedFiles").length>i("maxFiles"))}function ye(e,t){const{context:r,prop:i,computed:a}=e,l=[],s=[];return t.forEach(n=>{var d;const[o,F]=sr(n,a("acceptAttr")),[y,R]=ar(n,i("minFileSize"),i("maxFileSize")),L=(d=i("validate"))==null?void 0:d(n,{acceptedFiles:r.get("acceptedFiles"),rejectedFiles:r.get("rejectedFiles")}),c=L?L.length===0:!0;if(o&&y&&c)l.push(n);else{const g=[F,R];c||g.push(...L??[]),s.push({file:n,errors:g.filter(Boolean)})}}),vr(e,l.length)||(l.forEach(n=>{s.push({file:n,errors:["TOO_MANY_FILES"]})}),l.splice(0)),{acceptedFiles:l,rejectedFiles:s}}function Ur(e,t){const r=Mt(e);try{if("DataTransfer"in r){const i=new r.DataTransfer;t.forEach(a=>{i.items.add(a)}),e.files=i.files}}catch{}}function Lr(e,t){const{state:r,send:i,prop:a,computed:l,scope:s,context:n}=e,o=a("disabled"),F=a("allowDrop"),y=a("translations"),R=r.matches("dragging"),L=r.matches("focused")&&!o;return{dragging:R,focused:L,disabled:!!o,openFilePicker(){o||i({type:"OPEN"})},deleteFile(c){i({type:"FILE.DELETE",file:c})},acceptedFiles:n.get("acceptedFiles"),rejectedFiles:n.get("rejectedFiles"),setFiles(c){i({type:"FILES.SET",files:c,count:c.length})},clearRejectedFiles(){i({type:"REJECTED_FILES.CLEAR"})},clearFiles(){i({type:"FILES.CLEAR"})},getFileSize(c){return ur(c.size,a("locale"))},createFileUrl(c,d){const g=s.getWin(),h=g.URL.createObjectURL(c);return d(h),()=>g.URL.revokeObjectURL(h)},setClipboardFiles(c){if(o)return!1;const g=Array.from((c==null?void 0:c.items)??[]).reduce((h,S)=>{if(S.kind!=="file")return h;const X=S.getAsFile();return X?[...h,X]:h},[]);return g.length?(i({type:"FILES.SET",files:g}),!0):!1},getRootProps(){return t.element({...U.root.attrs,dir:a("dir"),id:vt(s),"data-disabled":b(o),"data-dragging":b(R)})},getDropzoneProps(c={}){return t.element({...U.dropzone.attrs,dir:a("dir"),id:Ut(s),tabIndex:o||c.disableClick?void 0:0,role:c.disableClick?"application":"button","aria-label":y.dropzone,"aria-disabled":o,"data-invalid":b(a("invalid")),"data-disabled":b(o),"data-dragging":b(R),onKeyDown(d){o||d.defaultPrevented||ue(d)&&(c.disableClick||d.key!=="Enter"&&d.key!==" "||i({type:"DROPZONE.CLICK",src:"keydown"}))},onClick(d){o||d.defaultPrevented||c.disableClick||ue(d)&&(d.currentTarget.localName==="label"&&d.preventDefault(),i({type:"DROPZONE.CLICK"}))},onDragOver(d){if(o||!F)return;d.preventDefault(),d.stopPropagation();try{d.dataTransfer.dropEffect="copy"}catch{}if(!ge(d))return;const h=d.dataTransfer.items.length;i({type:"DROPZONE.DRAG_OVER",count:h})},onDragLeave(d){o||F&&(ae(d.currentTarget,d.relatedTarget)||i({type:"DROPZONE.DRAG_LEAVE"}))},onDrop(d){if(o)return;F&&(d.preventDefault(),d.stopPropagation());const g=ge(d);o||!g||er(d.dataTransfer.items,a("directory")).then(h=>{i({type:"DROPZONE.DROP",files:zt(h)})})},onFocus(){o||i({type:"DROPZONE.FOCUS"})},onBlur(){o||i({type:"DROPZONE.BLUR"})}})},getTriggerProps(){return t.button({...U.trigger.attrs,dir:a("dir"),id:fr(s),disabled:o,"data-disabled":b(o),"data-invalid":b(a("invalid")),type:"button",onClick(c){o||(ae(Er(s),c.currentTarget)&&c.stopPropagation(),i({type:"OPEN"}))}})},getHiddenInputProps(){return t.input({id:le(s),tabIndex:-1,disabled:o,type:"file",required:a("required"),capture:a("capture"),name:a("name"),accept:l("acceptAttr"),webkitdirectory:a("directory")?"":void 0,multiple:l("multiple")||a("maxFiles")>1,onClick(c){c.stopPropagation(),c.currentTarget.value=""},onInput(c){if(o)return;const{files:d}=c.currentTarget;i({type:"FILE.SELECT",files:d?Array.from(d):[]})},style:Ct})},getItemGroupProps(){return t.element({...U.itemGroup.attrs,dir:a("dir"),"data-disabled":b(o)})},getItemProps(c){const{file:d}=c;return t.element({...U.item.attrs,dir:a("dir"),id:gr(s,d.name),"data-disabled":b(o)})},getItemNameProps(c){const{file:d}=c;return t.element({...U.itemName.attrs,dir:a("dir"),id:yr(s,d.name),"data-disabled":b(o)})},getItemSizeTextProps(c){const{file:d}=c;return t.element({...U.itemSizeText.attrs,dir:a("dir"),id:br(s,d.name),"data-disabled":b(o)})},getItemPreviewProps(c){const{file:d}=c;return t.element({...U.itemPreview.attrs,dir:a("dir"),id:hr(s,d.name),"data-disabled":b(o)})},getItemPreviewImageProps(c){var S;const{file:d,url:g}=c;if(!d.type.startsWith("image/"))throw new Error("Preview Image is only supported for image files");return t.img({...U.itemPreviewImage.attrs,alt:(S=y.itemPreview)==null?void 0:S.call(y,d),src:g,"data-disabled":b(o)})},getItemDeleteTriggerProps(c){var g;const{file:d}=c;return t.button({...U.itemDeleteTrigger.attrs,dir:a("dir"),type:"button",disabled:o,"data-disabled":b(o),"aria-label":(g=y.deleteFile)==null?void 0:g.call(y,d),onClick(){o||i({type:"FILE.DELETE",file:d})}})},getLabelProps(){return t.label({...U.label.attrs,dir:a("dir"),id:Fr(s),htmlFor:le(s),"data-disabled":b(o)})},getClearTriggerProps(){return t.button({...U.clearTrigger.attrs,dir:a("dir"),type:"button",disabled:o,hidden:n.get("acceptedFiles").length===0,"data-disabled":b(o),onClick(c){c.defaultPrevented||o||i({type:"FILES.CLEAR"})}})}}}var xr=wt({props({props:e}){return{minFileSize:0,maxFileSize:Number.POSITIVE_INFINITY,maxFiles:1,allowDrop:!0,preventDocumentDrop:!0,...e,translations:{dropzone:"dropzone",itemPreview:t=>`preview of ${t.name}`,deleteFile:t=>`delete file ${t.name}`,...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:r}){return{acceptedFiles:t(()=>({defaultValue:[],isEqual:(i,a)=>i.length===(a==null?void 0:a.length)&&i.every((l,s)=>J(l,a[s])),hash(i){return i.map(a=>`${a.name}-${a.size}`).join(",")},onChange(i){var l,s;const a=r();(l=e("onFileAccept"))==null||l({files:i}),(s=e("onFileChange"))==null||s({acceptedFiles:i,rejectedFiles:a.get("rejectedFiles")})}})),rejectedFiles:t(()=>({defaultValue:[],isEqual:(i,a)=>i.length===(a==null?void 0:a.length)&&i.every((l,s)=>J(l.file,a[s].file)),onChange(i){var l,s;const a=r();(l=e("onFileReject"))==null||l({files:i}),(s=e("onFileChange"))==null||s({acceptedFiles:a.get("acceptedFiles"),rejectedFiles:i})}}))}},computed:{acceptAttr:({prop:e})=>ir(e("accept")),multiple:({prop:e})=>e("maxFiles")>1},watch({track:e,context:t,action:r}){e([()=>t.hash("acceptedFiles")],()=>{r(["syncInputElement"])})},on:{"FILES.SET":{actions:["setFiles"]},"FILE.SELECT":{actions:["setEventFiles"]},"FILE.DELETE":{actions:["removeFile"]},"FILES.CLEAR":{actions:["clearFiles"]},"REJECTED_FILES.CLEAR":{actions:["clearRejectedFiles"]}},effects:["preventDocumentDrop"],states:{idle:{on:{OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.FOCUS":{target:"focused"},"DROPZONE.DRAG_OVER":{target:"dragging"}}},focused:{on:{"DROPZONE.BLUR":{target:"idle"},OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.DRAG_OVER":{target:"dragging"}}},dragging:{on:{"DROPZONE.DROP":{target:"idle",actions:["setEventFiles"]},"DROPZONE.DRAG_LEAVE":{target:"idle"}}}},implementations:{effects:{preventDocumentDrop({prop:e,scope:t}){if(!e("preventDocumentDrop")||!e("allowDrop")||e("disabled"))return;const r=t.getDoc(),i=l=>{l==null||l.preventDefault()},a=l=>{ae(_r(t),ot(l))||l.preventDefault()};return $t(me(r,"dragover",i,!1),me(r,"drop",a,!1))}},actions:{syncInputElement({scope:e,context:t}){queueMicrotask(()=>{const r=Fe(e);if(!r)return;Ur(r,t.get("acceptedFiles"));const i=e.getWin();r.dispatchEvent(new i.Event("change",{bubbles:!0}))})},openFilePicker({scope:e}){qt(()=>{var t;(t=Fe(e))==null||t.click()})},setFiles(e){const{computed:t,context:r,event:i}=e,{acceptedFiles:a,rejectedFiles:l}=ye(e,i.files);r.set("acceptedFiles",t("multiple")?a:[a[0]]),r.set("rejectedFiles",l)},setEventFiles(e){const{computed:t,context:r,event:i,prop:a}=e,{acceptedFiles:l,rejectedFiles:s}=ye(e,i.files),n=F=>{if(t("multiple")){r.set("acceptedFiles",y=>[...y,...F]),r.set("rejectedFiles",s);return}if(F.length){r.set("acceptedFiles",[F[0]]),r.set("rejectedFiles",s);return}s.length&&(r.set("acceptedFiles",r.get("acceptedFiles")),r.set("rejectedFiles",s))},o=a("transformFiles");o?o(l).then(n).catch(F=>{kt(`[zag-js/file-upload] error transforming files
${F}`)}):n(l)},removeFile({context:e,event:t}){const r=e.get("acceptedFiles").filter(a=>!J(a,t.file)),i=e.get("rejectedFiles").filter(a=>!J(a.file,t.file));e.set("acceptedFiles",r),e.set("rejectedFiles",i)},clearRejectedFiles({context:e}){e.set("rejectedFiles",[])},clearFiles({context:e}){e.set("acceptedFiles",[]),e.set("rejectedFiles",[])}}}});dt()(["accept","allowDrop","capture","dir","directory","disabled","getRootNode","id","ids","locale","maxFiles","maxFileSize","minFileSize","name","invalid","onFileAccept","onFileReject","onFileChange","preventDocumentDrop","required","translations","transformFiles","validate"]);dt()(["file"]);const Ir=e=>{const t=m.useId(),{getRootNode:r}=Bt(),{dir:i,locale:a}=Gt(),l=ct(),s={id:t,ids:{label:l==null?void 0:l.ids.label,hiddenInput:l==null?void 0:l.ids.control},dir:i,disabled:l==null?void 0:l.disabled,locale:a,required:l==null?void 0:l.required,invalid:l==null?void 0:l.invalid,getRootNode:r,...e},n=Vt(xr,s);return Lr(n,Wt)},Lt=m.forwardRef((e,t)=>{const[r,i]=se()(e,["accept","allowDrop","capture","directory","disabled","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","translations","transformFiles","validate"]),a=Ir(r),l=P(a.getRootProps(),i);return p.jsx(Qt,{value:a,children:p.jsx(D.div,{...l,ref:t})})});Lt.displayName="FileUploadRoot";const xt=m.forwardRef((e,t)=>{const r=I(),i=P(r.getTriggerProps(),e);return p.jsx(D.button,{...i,ref:t})});xt.displayName="FileUploadTrigger";const It=m.createContext({});function Rt({children:e,locale:t}){return p.jsx(It.Provider,{value:{locale:t},children:e})}function Rr(){return m.useContext(It)}Rt.__docgenInfo={description:"",methods:[],displayName:"FileUploadProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["FileUploadContextType"]};var O=(e=>(e.invalidFile="invalid-file",e.maxFileReached="max-file-reached",e.sizeTooLarge="size-too-large",e.unknownError="unknown-error",e.wrongFormat="wrong-format",e))(O||{});Object.freeze(Object.values(O));function Tt(e){return!!(e||e===0)&&e<100}function Tr(e){return e.map(t=>{switch(t){case"FILE_INVALID":return O.invalidFile;case"FILE_INVALID_TYPE":return O.wrongFormat;case"FILE_TOO_LARGE":return O.sizeTooLarge;case"TOO_MANY_FILES":return O.maxFileReached;default:return O.unknownError}})}const A={"file-upload-dropzone":"_file-upload-dropzone_faoyu_21","file-upload-dropzone--disabled":"_file-upload-dropzone--disabled_faoyu_28","file-upload-dropzone__icon":"_file-upload-dropzone__icon_faoyu_28","file-upload-dropzone--dragging":"_file-upload-dropzone--dragging_faoyu_31","file-upload-dropzone--empty":"_file-upload-dropzone--empty_faoyu_34","file-upload-dropzone__rules":"_file-upload-dropzone__rules_faoyu_41","file-upload-dropzone__error":"_file-upload-dropzone__error_faoyu_47","file-upload-dropzone__error__divider":"_file-upload-dropzone__error__divider_faoyu_55"},oe=({acceptedFileLabel:e,dropzoneLabel:t,error:r,maxFile:i,maxFileLabel:a,maxSize:l,maxSizeLabel:s,triggerLabel:n})=>{const o=m.useId(),{acceptedFiles:F,disabled:y,dragging:R,getFileSize:L}=I(),c=m.useMemo(()=>!!e||!!a||!!s,[e,a,s]);return p.jsxs("div",{className:Q(A["file-upload-dropzone"],{[A["file-upload-dropzone--disabled"]]:y},{[A["file-upload-dropzone--dragging"]]:R},{[A["file-upload-dropzone--empty"]]:!F.length}),children:[p.jsx(te,{className:A["file-upload-dropzone__icon"],name:re.filePlus}),p.jsx("span",{children:t}),c&&p.jsxs("div",{className:A["file-upload-dropzone__rules"],id:o,children:[a&&typeof i=="number"&&i>=0&&p.jsxs("span",{children:[a," ",i]}),s&&typeof l=="number"&&l>=0&&p.jsxs("span",{children:[s," ",L({size:l})]}),e&&p.jsx("span",{children:e})]}),p.jsx(xt,{asChild:!0,children:p.jsx(at,{"aria-describedby":c?o:"",size:st.md,variant:lt.ghost,children:n})}),!!r&&p.jsxs("div",{className:A["file-upload-dropzone__error"],children:[p.jsx("span",{role:"alert",children:r}),p.jsx(Ot,{className:A["file-upload-dropzone__error__divider"]})]})]})};oe.displayName="FileUploadDropzone";oe.__docgenInfo={description:"",methods:[],displayName:"FileUploadDropzone",props:{acceptedFileLabel:{required:!1,tsType:{name:"string"},description:""},dropzoneLabel:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},maxFile:{required:!1,tsType:{name:"number"},description:""},maxFileLabel:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},maxSizeLabel:{required:!1,tsType:{name:"string"},description:""},triggerLabel:{required:!0,tsType:{name:"string"},description:""}}};const be={"file-upload":"_file-upload_138iw_2","file-upload--invalid":"_file-upload--invalid_138iw_16"},_=m.forwardRef(({accept:e,acceptedFileLabel:t,children:r,className:i,disabled:a,dropzoneLabel:l="Drag & drop a file",error:s,id:n,invalid:o,locale:F,maxFile:y=1/0,maxFileLabel:R,maxSize:L,maxSizeLabel:c,name:d,onFileAccept:g,onFileReject:h,required:S,triggerLabel:X="Browse files",...ce},Pt)=>{const T=St(),Dt=m.useCallback(({files:C})=>{h&&h({files:C.map(({errors:jt,file:At})=>({errors:Tr(jt),file:At}))})},[h]),ie=o||(T==null?void 0:T.invalid),pe=n||(T==null?void 0:T.id);return p.jsx(Rt,{locale:F,children:p.jsxs(Lt,{accept:e,allowDrop:!0,className:Q(be["file-upload"],{[be["file-upload--invalid"]]:ie},i),"data-ods":"file-upload",directory:!1,disabled:a,ids:{hiddenInput:pe},invalid:ie,maxFiles:y,maxFileSize:L,onFileAccept:g,onFileReject:Dt,name:d,ref:Pt,required:S,...ce,children:[p.jsxs(pt,{disableClick:!0,onDragOver:C=>C.preventDefault(),onDrop:C=>C.preventDefault(),children:[p.jsx(oe,{acceptedFileLabel:t,dropzoneLabel:l,error:s,maxFile:y,maxFileLabel:R,maxSize:L,maxSizeLabel:c,triggerLabel:X}),r]}),p.jsx(ut,{"aria-invalid":ie,"aria-describedby":ce["aria-describedby"]||(T==null?void 0:T.ariaDescribedBy),id:pe})]})})});_.displayName="FileUpload";_.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:"The accepted file types."},acceptedFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the accepted file types."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},dropzoneLabel:{required:!1,tsType:{name:"string"},description:"The dropzone label.",defaultValue:{value:"'Drag & drop a file'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"The global error message to display."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maxFile:{required:!1,tsType:{name:"number"},description:"The maximum number of files that can be selected.",defaultValue:{value:"Infinity",computed:!0}},maxFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum number of files that can be selected."},maxSize:{required:!1,tsType:{name:"number"},description:"The maximum size of selectable files."},maxSizeLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum size of selectable files."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onFileAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadAcceptDetail) => void",signature:{arguments:[{type:{name:"FileUploadAcceptDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been successfully added."},onFileReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadRejectDetail) => void",signature:{arguments:[{type:{name:"FileUploadRejectDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been rejected."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},triggerLabel:{required:!1,tsType:{name:"string"},description:"Upload button label.",defaultValue:{value:"'Browse files'",computed:!1}}},composes:["ComponentPropsWithRef"]};var N=(e=>(e.cancelButton="fileUpload.file.cancel.button",e.deleteButton="fileUpload.file.delete.button",e.progressBar="fileUpload.file.progressBar",e))(N||{});const Pr={"fileUpload.file.cancel.button":{[f.de]:"Stornieren",[f.en]:"Cancel",[f.es]:"Cancelar",[f.fr]:"Annuler",[f.it]:"Annullare",[f.nl]:"Annuleren",[f.pl]:"Anulować",[f.pt]:"Cancelar"},"fileUpload.file.delete.button":{[f.de]:"Löschen",[f.en]:"Delete",[f.es]:"Eliminar",[f.fr]:"Supprimer",[f.it]:"Rimuovere",[f.nl]:"Verwijderen",[f.pl]:"Usunąć",[f.pt]:"Remover"},"fileUpload.file.progressBar":{[f.de]:"Hochzuladen",[f.en]:"Uploading",[f.es]:"Cargar",[f.fr]:"Chargement",[f.it]:"Caricare",[f.nl]:"Uploaden",[f.pl]:"Przesyłanie",[f.pt]:"Carregar"}},ee={"file-upload-item-status":"_file-upload-item-status_lthpx_21","file-upload-item-status__error":"_file-upload-item-status__error_lthpx_24","file-upload-item-status__progress":"_file-upload-item-status__progress_lthpx_28","file-upload-item-status__success":"_file-upload-item-status__success_lthpx_36"};function Dr(e,t,r,i){return t?p.jsx("span",{className:ee["file-upload-item-status__error"],children:t}):Tt(r)?p.jsxs("div",{className:ee["file-upload-item-status__progress"],children:[p.jsx(Zt,{"aria-label":i,value:r}),p.jsxs("span",{children:[r,"%"]})]}):r&&r>=100?p.jsxs("span",{className:ee["file-upload-item-status__success"],children:[p.jsx(te,{name:re.check})," ",e]}):p.jsx(p.Fragment,{})}const de=({className:e,error:t,progress:r,progressLabel:i,successLabel:a})=>p.jsx("div",{className:Q(ee["file-upload-item-status"],e),role:t?"error":"status",children:Dr(a,t,r,i)});de.displayName="FileUploadItemStatus";de.__docgenInfo={description:"",methods:[],displayName:"FileUploadItemStatus",props:{error:{required:!1,tsType:{name:"string"},description:""},progress:{required:!1,tsType:{name:"number"},description:""},progressLabel:{required:!1,tsType:{name:"string"},description:""},successLabel:{required:!0,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithoutRef"]};const w={"file-upload-item":"_file-upload-item_e3bwg_25","file-upload-item__icon":"_file-upload-item__icon_e3bwg_37","file-upload-item__name":"_file-upload-item__name_e3bwg_44","file-upload-item__size":"_file-upload-item__size_e3bwg_49","file-upload-item__status":"_file-upload-item__status_e3bwg_52"},v=m.forwardRef(({className:e,error:t,file:r,i18n:i,progress:a,uploadSuccessLabel:l="File uploaded",...s},n)=>{const{locale:o}=Rr(),{translate:F}=Yt(Pr,o,i);return p.jsxs(mt,{className:Q(w["file-upload-item"],e),"data-ods":"file-upload-item",file:r,ref:n,...s,children:[p.jsx(te,{className:w["file-upload-item__icon"],name:re.file}),p.jsx(gt,{className:w["file-upload-item__name"]}),p.jsx(yt,{className:w["file-upload-item__size"]}),p.jsx(ft,{asChild:!0,children:p.jsx(at,{"aria-label":Tt(a)?F(N.cancelButton):F(N.deleteButton),size:st.sm,variant:lt.ghost,children:p.jsx(te,{name:re.xmark})})}),p.jsx(de,{className:w["file-upload-item__status"],error:t,progress:a,progressLabel:F(N.progressBar),successLabel:l})]})});v.displayName="FileUploadItem";v.__docgenInfo={description:"",methods:[],displayName:"FileUploadItem",props:{error:{required:!1,tsType:{name:"string"},description:"The file error message to display."},file:{required:!0,tsType:{name:"File"},description:"The current File object."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"FILE_UPLOAD_I18N"},{name:"string"}],raw:"Record<FILE_UPLOAD_I18N, string>"}],raw:"Partial<Record<FILE_UPLOAD_I18N, string>>"},description:"Internal translations override."},progress:{required:!1,tsType:{name:"number"},description:"The file upload progress."},uploadSuccessLabel:{required:!1,tsType:{name:"string"},description:"The label displayed after a successful upload.",defaultValue:{value:"'File uploaded'",computed:!1}}},composes:["ComponentPropsWithRef"]};const he={"file-upload-list":"_file-upload-list_1b3bn_21","file-upload-list--not-empty":"_file-upload-list--not-empty_1b3bn_25"},E=m.forwardRef(({children:e,className:t,...r},i)=>{const{acceptedFiles:a}=I();return p.jsx(Ft,{className:Q(he["file-upload-list"],{[he["file-upload-list--not-empty"]]:a.length>0},t),"data-ods":"file-upload-list",ref:i,...r,children:e})});E.displayName="FileUploadList";E.__docgenInfo={description:"",methods:[],displayName:"FileUploadList",composes:["ComponentPropsWithRef"]};const jr={argTypes:Ht(["accept","locale","name","onFileAccept","onFileReject","required"]),component:_,subcomponents:{FileUploadItem:v,FileUploadList:E},title:"React Components/File Upload"},k={render:e=>{const[t,r]=m.useState(""),[i,a]=m.useState([]);function l({files:n}){a(n),r("")}function s({files:n}){r(n.length?"File(s) rejected":"")}return u.createElement(_,{...e,error:e.error||t,onFileAccept:l,onFileReject:s},u.createElement(E,null,i.map((n,o)=>u.createElement(v,{file:n,key:o}))))},argTypes:Kt({acceptedFileLabel:{table:{category:x.general},control:"text"},disabled:{table:{category:x.general},control:"boolean"},dropzoneLabel:{table:{category:x.general},control:"text"},error:{table:{category:x.general},control:"text"},invalid:{table:{category:x.general},control:"boolean"},maxFile:{table:{category:x.general},control:"number"},maxFileLabel:{table:{category:x.general},control:"text"},maxSize:{table:{category:x.general},control:"number"},maxSizeLabel:{table:{category:x.general},control:"text"},triggerLabel:{table:{category:x.general},control:"text"}})},q={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState(""),[r,i]=m.useState([]);function a({files:s}){i(s),t("")}function l({files:s}){t(s.length?"File(s) not of the expected format":"")}return u.createElement(_,{accept:"image/png",acceptedFileLabel:"Png files only",error:e,onFileAccept:a,onFileReject:l},u.createElement(E,null,r.map((s,n)=>u.createElement(v,{file:s,key:n}))))}},$={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState([]);return u.createElement(_,{onFileAccept:({files:r})=>t(r)},u.createElement(E,null,e.map((r,i)=>u.createElement(v,{file:r,i18n:{[N.cancelButton]:`Cancel uploading ${r.name}`,[N.deleteButton]:`Remove ${r.name}`,[N.progressBar]:`Uploading ${r.name}`},key:i}))))}},M={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState([]);return u.createElement(_,{acceptedFileLabel:"Formats acceptés : images",dropzoneLabel:"Glisser-déposer des fichiers",maxFile:3,maxFileLabel:"Nombre maximal de fichiers :",maxSize:524288e3,maxSizeLabel:"Taille de fichier max :",onFileAccept:({files:r})=>t(r),triggerLabel:"Parcourir les fichiers"},u.createElement(E,null,e.map((r,i)=>u.createElement(v,{file:r,key:i,progress:100,uploadSuccessLabel:"Fichier uploadé"}))))}},B={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState([]);return u.createElement(_,{onFileAccept:({files:r})=>t(r)},u.createElement(E,null,e.map((r,i)=>u.createElement(v,{file:r,key:i}))))}},G={tags:["!dev"],render:({})=>u.createElement(_,{disabled:!0},u.createElement(E,null))},V={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState(""),[r,i]=m.useState([]);function a({files:s}){i(s),t("")}function l({files:s}){t(s.length?"Too many files":"")}return u.createElement(_,{error:e,maxFile:3,maxFileLabel:"Maximum file allowed:",onFileAccept:a,onFileReject:l},u.createElement(E,null,r.map((s,n)=>u.createElement(v,{file:s,key:n}))))}},W={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState(""),[r,i]=m.useState([]);function a({files:s}){i(s),t("")}function l({files:s}){t(s.length?"File(s) too large":"")}return u.createElement(_,{error:e,maxSize:1e6,maxSizeLabel:"No file larger than:",onFileAccept:a,onFileReject:l},u.createElement(E,null,r.map((s,n)=>u.createElement(v,{file:s,key:n}))))}},Y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[e,t]=m.useState([]);return u.createElement(_,{onFileAccept:({files:r})=>t(r)},u.createElement(E,null,e.map((r,i)=>u.createElement(v,{file:r,key:i}))))}},Z={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState([]);m.useEffect(()=>{e.forEach(i=>{i.progress||r(i)})},[e]);function r(i){const a=setInterval(()=>{t(l=>l.map(s=>(s.name===i.name&&(s.progress=(s.progress||0)+Math.floor(Math.random()*10+1),s.progress>=100&&clearInterval(a)),s)))},100)}return u.createElement(_,{onFileAccept:({files:i})=>t(i)},u.createElement(E,null,e.map((i,a)=>u.createElement(v,{error:i.error,file:i,key:a,progress:i.progress}))))}},H={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState([]);return u.createElement(rt,null,u.createElement(it,null,"Files:"),u.createElement(_,{onFileAccept:({files:r})=>t(r)},u.createElement(E,null,e.map((r,i)=>u.createElement(v,{file:r,key:i})))))}},K={tags:["!dev"],parameters:{docs:{source:{...j()}}},render:({})=>{const[e,t]=m.useState([]);return u.createElement(rt,null,u.createElement(it,null,"Files:"),u.createElement(_,{onFileAccept:({files:r})=>t(r)},u.createElement(E,null,e.map((r,i)=>u.createElement(v,{file:r,key:i})))))}};var _e,Ee,ve;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(ve=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var Ue,Le,xe;q.parameters={...q.parameters,docs:{...(Ue=q.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(xe=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:xe.source}}};var Ie,Re,Te;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
          {files.map((file: File, idx) => <FileUploadItem file={file} i18n={{
          [FILE_UPLOAD_I18N.cancelButton]: \`Cancel uploading \${file.name}\`,
          [FILE_UPLOAD_I18N.deleteButton]: \`Remove \${file.name}\`,
          [FILE_UPLOAD_I18N.progressBar]: \`Uploading \${file.name}\`
        }} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Te=(Re=$.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Pe,De,je;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(je=(De=M.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var Ae,Se,Oe;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Oe=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Oe.source}}};var Ne,Ce,ze;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FileUpload disabled>
      <FileUploadList />
    </FileUpload>
}`,...(ze=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var we,ke,qe;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(qe=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var $e,Me,Be;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Be=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Ge,Ve,We;Y.parameters={...Y.parameters,docs:{...(Ge=Y.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(We=(Ve=Y.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Ye,Ze,He;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(He=(Ze=Z.parameters)==null?void 0:Ze.docs)==null?void 0:He.source}}};var Ke,Qe,Xe;H.parameters={...H.parameters,docs:{...(Ke=H.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
    return <FormField>
          <FormFieldLabel>
            Files:
          </FormFieldLabel>

          <FileUpload onFileAccept={({
        files
      }) => setFiles(files)}>
            <FileUploadList>
              {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
            </FileUploadList>
          </FileUpload>
        </FormField>;
  }
}`,...(Xe=(Qe=H.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Je,et,tt;K.parameters={...K.parameters,docs:{...(Je=K.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
    return <FormField>
        <FormFieldLabel>
          Files:
        </FormFieldLabel>

        <FileUpload onFileAccept={({
        files
      }) => setFiles(files)}>
          <FileUploadList>
            {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
          </FileUploadList>
        </FileUpload>
      </FormField>;
  }
}`,...(tt=(et=K.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const Ar=["Demo","Accept","AccessibilityFileButton","CustomLabels","Default","Disabled","MaxFile","MaxSize","Overview","Upload","InFormField","AccessibilityFormField"],Wr=Object.freeze(Object.defineProperty({__proto__:null,Accept:q,AccessibilityFileButton:$,AccessibilityFormField:K,CustomLabels:M,Default:B,Demo:k,Disabled:G,InFormField:H,MaxFile:V,MaxSize:W,Overview:Y,Upload:Z,__namedExportsOrder:Ar,default:jr},Symbol.toStringTag,{value:"Module"}));export{K as A,M as C,B as D,Wr as F,H as I,V as M,Y as O,Z as U,$ as a,G as b,q as c,W as d};
