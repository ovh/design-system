import{u as Ct,F as mt,a as ut}from"./FormFieldLabel-B8-lDkmb.js";import{r as u,e as c}from"./index-jIWwRBLr.js";import{j as m}from"./jsx-runtime-Cfl8ynUo.js";import{c as q}from"./index-CqY9YpN0.js";import{B as ft,d as Ft,c as gt}from"./Button-B-GJ-1TA.js";import{I as oe,a as re}from"./icon-name-C581wThh.js";import{c as fe,a as se,T as D,U as S,P as U,Q as kt,aA as qt,s as ce,aV as $t,d as ne,C as _t,z as Vt,w as Gt,r as Mt,n as Bt,l as xe,g as Yt,u as Zt,R as Wt,D as Ht,S as Kt}from"./use-locale-context-6s5qsrWI.js";import{f as Qt}from"./index-CPOqegBX.js";import{u as vt}from"./use-field-context-BOfmBRZb.js";import{L as F,u as Xt}from"./useI18n-C0NLVYPv.js";import{S as Jt,d as ei}from"./Spinner-DJB5ZadI.js";import{e as ti,o as ii,C as A}from"./controls-BtiQQn1l.js";import{s as P}from"./source-CPEZJ6oD.js";const[ai,O]=fe({name:"FileUploadContext",hookName:"useFileUploadContext",providerName:"<FileUploadProvider />"}),xt=u.forwardRef((e,t)=>{const[i,a]=se()(e,["disableClick"]),r=O(),l=D(r.getDropzoneProps(i),a);return m.jsx(S.div,{...l,ref:t})});xt.displayName="FileUploadDropzone";const yt=u.forwardRef((e,t)=>{const i=O(),a=D(i.getHiddenInputProps(),e),r=vt();return m.jsx(S.input,{"aria-describedby":r==null?void 0:r.ariaDescribedby,...a,ref:t})});yt.displayName="FileUploadHiddenInput";const[ri,li]=fe({name:"FileUploadItemGroupPropsContext",hookName:"useFileUploadItemGroupPropsContext",providerName:"<FileUploadItemGroupPropsProvider />"}),[oi,Fe]=fe({name:"FileUploadItemPropsContext",hookName:"useFileUploadItemPropsContext",providerName:"<FileUploadItemPropsProvider />"}),Ut=u.forwardRef((e,t)=>{const[i,a]=se()(e,["file"]),r=O(),l=li(),o={...i,type:l.type},s=D(r.getItemProps(o),a);return m.jsx(oi,{value:o,children:m.jsx(S.li,{...s,ref:t})})});Ut.displayName="FileUploadItem";const bt=u.forwardRef((e,t)=>{const i=O(),a=Fe(),r=D(i.getItemDeleteTriggerProps(a),e);return m.jsx(S.button,{...r,ref:t})});bt.displayName="FileUploadItemDeleteTrigger";const ht=u.forwardRef((e,t)=>{const[i,a]=se()(e,["type"]),r=O(),l=D(r.getItemGroupProps(i),a);return m.jsx(ri,{value:i,children:m.jsx(S.ul,{...l,ref:t})})});ht.displayName="FileUploadItemGroup";const Et=u.forwardRef((e,t)=>{const{children:i,...a}=e,r=O(),l=Fe(),o=D(r.getItemNameProps(l),a);return m.jsx(S.div,{...o,ref:t,children:i||l.file.name})});Et.displayName="FileUploadItemName";const Lt=u.forwardRef((e,t)=>{const{children:i,...a}=e,r=O(),l=Fe(),o=D(r.getItemSizeTextProps(l),a);return m.jsx(S.div,{...o,ref:t,children:i||r.getFileSize(l.file)})});Lt.displayName="FileUploadItemSizeText";var ni=e=>typeof e.getAsEntry=="function"?e.getAsEntry():typeof e.webkitGetAsEntry=="function"?e.webkitGetAsEntry():null,It=e=>e.isDirectory,de=e=>e.isFile,me=(e,t)=>(Object.defineProperty(e,"relativePath",{value:t?`${t}/${e.name}`:e.name}),e),si=(e,t)=>Promise.all(Array.from(e).filter(i=>i.kind==="file").map(i=>{const a=ni(i);if(!a)return null;if(It(a)&&t)return At(a.createReader(),`${a.name}`);if(de(a)&&typeof i.getAsFile=="function"){const r=i.getAsFile();return Promise.resolve(r?me(r,""):null)}if(de(a))return new Promise(r=>{a.file(l=>{r(me(l,""))})})}).filter(i=>i)),At=(e,t="")=>new Promise(i=>{const a=[],r=()=>{e.readEntries(l=>{if(l.length===0){i(Promise.all(a).then(s=>s.flat()));return}const o=l.map(s=>{if(!s)return null;if(It(s))return At(s.createReader(),`${t}${s.name}`);if(de(s))return new Promise(p=>{s.file(g=>{p(me(g,t))})})}).filter(s=>s);a.push(Promise.all(o)),r()})};r()});function pi(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function ci(e){return/^.*\.[\w]+$/.test(e)}var ye=e=>pi(e)||ci(e);function di(e){if(e!=null)return typeof e=="string"?e:Array.isArray(e)?e.filter(ye).join(","):Object.entries(e).reduce((t,[i,a])=>[...t,i,...a],[]).filter(ye).join(",")}var le=(e,t)=>e.name===t.name&&e.size===t.size&&e.type===t.type,G=e=>e!=null;function mi(e,t,i){if(G(e.size))if(G(t)&&G(i)){if(e.size>i)return[!1,"FILE_TOO_LARGE"];if(e.size<t)return[!1,"FILE_TOO_SMALL"]}else{if(G(t)&&e.size<t)return[!1,"FILE_TOO_SMALL"];if(G(i)&&e.size>i)return[!1,"FILE_TOO_LARGE"]}return[!0,null]}var ui="3g2_video/3gpp2[3gp,3gpp_video/3gpp[3mf_model/3mf[7z_application/x-7z-compressed[aac_audio/aac[ac_application/pkix-attr-cert[adp_audio/adpcm[adts_audio/aac[ai_application/postscript[aml_application/automationml-aml+xml[amlx_application/automationml-amlx+zip[amr_audio/amr[apk_application/vnd.android.package-archive[apng_image/apng[appcache,manifest_text/cache-manifest[appinstaller_application/appinstaller[appx_application/appx[appxbundle_application/appxbundle[asc_application/pgp-keys[atom_application/atom+xml[atomcat_application/atomcat+xml[atomdeleted_application/atomdeleted+xml[atomsvc_application/atomsvc+xml[au,snd_audio/basic[avi_video/x-msvideo[avci_image/avci[avcs_image/avcs[avif_image/avif[aw_application/applixware[bdoc_application/bdoc[bin,bpk,buffer,deb,deploy,dist,distz,dll,dmg,dms,dump,elc,exe,img,iso,lrf,mar,msi,msm,msp,pkg,so_application/octet-stream[bmp,dib_image/bmp[btf,btif_image/prs.btif[bz2_application/x-bzip2[c_text/x-c[ccxml_application/ccxml+xml[cdfx_application/cdfx+xml[cdmia_application/cdmi-capability[cdmic_application/cdmi-container[cdmid_application/cdmi-domain[cdmio_application/cdmi-object[cdmiq_application/cdmi-queue[cer_application/pkix-cert[cgm_image/cgm[cjs_application/node[class_application/java-vm[coffee,litcoffee_text/coffeescript[conf,def,in,ini,list,log,text,txt_text/plain[cpp,cxx,cc_text/x-c++src[cpl_application/cpl+xml[cpt_application/mac-compactpro[crl_application/pkix-crl[css_text/css[csv_text/csv[cu_application/cu-seeme[cwl_application/cwl[cww_application/prs.cww[davmount_application/davmount+xml[dbk_application/docbook+xml[doc_application/msword[docx_application/vnd.openxmlformats-officedocument.wordprocessingml.document[dsc_text/prs.lines.tag[dssc_application/dssc+der[dtd_application/xml-dtd[dwd_application/atsc-dwd+xml[ear,jar,war_application/java-archive[ecma_application/ecmascript[emf_image/emf[eml,mime_message/rfc822[emma_application/emma+xml[emotionml_application/emotionml+xml[eot_application/vnd.ms-fontobject[eps,ps_application/postscript[epub_application/epub+zip[exi_application/exi[exp_application/express[exr_image/aces[ez_application/andrew-inset[fdf_application/fdf[fdt_application/fdt+xml[fits_image/fits[flac_audio/flac[flv_video/x-flv[g3_image/g3fax[geojson_application/geo+json[gif_image/gif[glb_model/gltf-binary[gltf_model/gltf+json[gml_application/gml+xml[go_text/x-go[gpx_application/gpx+xml[gz_application/gzip[h_text/x-h[h261_video/h261[h263_video/h263[h264_video/h264[heic_image/heic[heics_image/heic-sequence[heif_image/heif[heifs_image/heif-sequence[htm,html,shtml_text/html[ico_image/x-icon[icns_image/x-icns[ics,ifb_text/calendar[iges,igs_model/iges[ink,inkml_application/inkml+xml[ipa_application/octet-stream[java_text/x-java-source[jp2,jpg2_image/jp2[jpeg,jpe,jpg_image/jpeg[jpf,jpx_image/jpx[jpm,jpgm_image/jpm[jpgv_video/jpeg[jph_image/jph[js,mjs_text/javascript[json_application/json[json5_application/json5[jsonld_application/ld+json[jsx_text/jsx[jxl_image/jxl[jxr_image/jxr[ktx_image/ktx[ktx2_image/ktx2[less_text/less[m1v,m2v,mpe,mpeg,mpg_video/mpeg[m4a_audio/mp4[m4v_video/x-m4v[md,markdown_text/markdown[mid,midi,kar,rmi_audio/midi[mkv_video/x-matroska[mp2,mp2a,mp3,mpga,m3a,m2a_audio/mpeg[mp4,mp4v,mpg4_video/mp4[mp4a_audio/mp4[mp4s,m4p_application/mp4[odp_application/vnd.oasis.opendocument.presentation[oda_application/oda[ods_application/vnd.oasis.opendocument.spreadsheet[odt_application/vnd.oasis.opendocument.text[oga,ogg,opus,spx_audio/ogg[ogv_video/ogg[ogx_application/ogg[otf_font/otf[p12,pfx_application/x-pkcs12[pdf_application/pdf[pem_application/x-pem-file[php_text/x-php[png_image/png[ppt_application/vnd.ms-powerpoint[pptx_application/vnd.openxmlformats-officedocument.presentationml.presentation[pskcxml_application/pskc+xml[psd_image/vnd.adobe.photoshop[py_text/x-python[qt,mov_video/quicktime[rar_application/vnd.rar[rdf_application/rdf+xml[rtf_text/rtf[sass_text/x-sass[scss_text/x-scss[sgm,sgml_text/sgml[sh_application/x-sh[svg,svgz_image/svg+xml[swf_application/x-shockwave-flash[tar_application/x-tar[tif,tiff_image/tiff[toml_application/toml[ts_video/mp2t[tsx_text/tsx[tsv_text/tab-separated-values[ttc_font/collection[ttf_font/ttf[vtt_text/vtt[wasm_application/wasm[wav_audio/wav[weba_audio/webm[webm_video/webm[webmanifest_application/manifest+json[webp_image/webp[wma_audio/x-ms-wma[wmv_video/x-ms-wmv[woff_font/woff[woff2_font/woff2[xls_application/vnd.ms-excel[xlsx_application/vnd.openxmlformats-officedocument.spreadsheetml.sheet[xml_application/xml[xz_application/x-xz[yaml,yml_text/yaml[zip_application/zip",fi=new Map(ui.split("[").flatMap(e=>{const[t,i]=e.split("_");return t.split(",").map(a=>[a,i])}));function Fi(e){const t=e.split(".").pop();return t&&fi.get(t)||null}function gi(e,t){if(e&&t){const i=Array.isArray(t)?t:typeof t=="string"?t.split(","):[];if(i.length===0)return!0;const a=e.name||"",r=(e.type||Fi(a)||"").toLowerCase(),l=r.replace(/\/.*$/,"");return i.some(o=>{const s=o.trim().toLowerCase();return s.charAt(0)==="."?a.toLowerCase().endsWith(s):s.endsWith("/*")?l===s.replace(/\/.*$/,""):r===s})}return!0}function _i(e,t){const i=e.type==="application/x-moz-file"||gi(e,t);return[i,i?null:"FILE_INVALID_TYPE"]}var vi=kt("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger"),I=vi.build(),Tt=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`file:${e.id}`},Pt=e=>{var t;return((t=e.ids)==null?void 0:t.dropzone)??`file:${e.id}:dropzone`},ue=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`file:${e.id}:input`},xi=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`file:${e.id}:trigger`},yi=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`file:${e.id}:label`},Ui=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.item)==null?void 0:a.call(i,t))??`file:${e.id}:item:${t}`},bi=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemName)==null?void 0:a.call(i,t))??`file:${e.id}:item-name:${t}`},hi=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemSizeText)==null?void 0:a.call(i,t))??`file:${e.id}:item-size:${t}`},Ei=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemPreview)==null?void 0:a.call(i,t))??`file:${e.id}:item-preview:${t}`},Li=e=>e.getById(Tt(e)),Ue=e=>e.getById(ue(e)),Ii=e=>e.getById(Pt(e));function be(e){const t=ne(e);return e.dataTransfer?e.dataTransfer.types.some(i=>i==="Files"||i==="application/x-moz-file"):!!t&&"files"in t}function Ai(e,t,i){const{prop:a,computed:r}=e;return!r("multiple")&&t>1?!1:!r("multiple")&&t+i.length===2?!0:!(t+i.length>a("maxFiles"))}function he(e,t,i=[],a=[]){const{prop:r,computed:l}=e,o=[],s=[],p={acceptedFiles:i,rejectedFiles:a};return t.forEach(g=>{var f;const[E,v]=_i(g,l("acceptAttr")),[L,N]=mi(g,r("minFileSize"),r("maxFileSize")),d=(f=r("validate"))==null?void 0:f(g,p),n=d?d.length===0:!0;if(E&&L&&n)o.push(g);else{const _=[v,N];n||_.push(...d??[]),s.push({file:g,errors:_.filter(Boolean)})}}),Ai(e,o.length,i)||(o.forEach(g=>{s.push({file:g,errors:["TOO_MANY_FILES"]})}),o.splice(0)),{acceptedFiles:o,rejectedFiles:s}}function Ti(e,t){const i=Yt(e);try{if("DataTransfer"in i){const a=new i.DataTransfer;t.forEach(r=>{a.items.add(r)}),e.files=a.files}}catch{}}var z="accepted";function Pi(e,t){const{state:i,send:a,prop:r,computed:l,scope:o,context:s}=e,p=!!r("disabled"),g=!!r("required"),E=r("allowDrop"),v=r("translations"),L=i.matches("dragging"),N=i.matches("focused")&&!p;return{dragging:L,focused:N,disabled:!!p,transforming:s.get("transforming"),openFilePicker(){p||a({type:"OPEN"})},deleteFile(d,n=z){a({type:"FILE.DELETE",file:d,itemType:n})},acceptedFiles:s.get("acceptedFiles"),rejectedFiles:s.get("rejectedFiles"),setFiles(d){a({type:"FILES.SET",files:d,count:d.length})},clearRejectedFiles(){a({type:"REJECTED_FILES.CLEAR"})},clearFiles(){a({type:"FILES.CLEAR"})},getFileSize(d){return Qt(d.size,r("locale"))},createFileUrl(d,n){const f=o.getWin(),_=f.URL.createObjectURL(d);return n(_),()=>f.URL.revokeObjectURL(_)},setClipboardFiles(d){if(p)return!1;const f=Array.from((d==null?void 0:d.items)??[]).reduce((_,$)=>{if($.kind!=="file")return _;const w=$.getAsFile();return w?[..._,w]:_},[]);return f.length?(a({type:"FILES.SET",files:f}),!0):!1},getRootProps(){return t.element({...I.root.attrs,dir:r("dir"),id:Tt(o),"data-disabled":U(p),"data-dragging":U(L)})},getDropzoneProps(d={}){return t.element({...I.dropzone.attrs,dir:r("dir"),id:Pt(o),tabIndex:p||d.disableClick?void 0:0,role:d.disableClick?"application":"button","aria-label":v.dropzone,"aria-disabled":p,"data-invalid":U(r("invalid")),"data-disabled":U(p),"data-dragging":U(L),onKeyDown(n){p||n.defaultPrevented||n.currentTarget===ne(n)&&(d.disableClick||n.key!=="Enter"&&n.key!==" "||a({type:"DROPZONE.CLICK",src:"keydown"}))},onClick(n){p||n.defaultPrevented||d.disableClick||n.currentTarget===ne(n)&&(n.currentTarget.localName==="label"&&n.preventDefault(),a({type:"DROPZONE.CLICK"}))},onDragOver(n){if(p||!E)return;n.preventDefault(),n.stopPropagation();try{n.dataTransfer.dropEffect="copy"}catch{}if(!be(n))return;const _=n.dataTransfer.items.length;a({type:"DROPZONE.DRAG_OVER",count:_})},onDragLeave(n){p||E&&(ce(n.currentTarget,n.relatedTarget)||a({type:"DROPZONE.DRAG_LEAVE"}))},onDrop(n){if(p)return;E&&(n.preventDefault(),n.stopPropagation());const f=be(n);p||!f||si(n.dataTransfer.items,r("directory")).then(_=>{a({type:"DROPZONE.DROP",files:$t(_)})})},onFocus(){p||a({type:"DROPZONE.FOCUS"})},onBlur(){p||a({type:"DROPZONE.BLUR"})}})},getTriggerProps(){return t.button({...I.trigger.attrs,dir:r("dir"),id:xi(o),disabled:p,"data-disabled":U(p),"data-invalid":U(r("invalid")),type:"button",onClick(d){p||(ce(Ii(o),d.currentTarget)&&d.stopPropagation(),a({type:"OPEN"}))}})},getHiddenInputProps(){return t.input({id:ue(o),tabIndex:-1,disabled:p,type:"file",required:r("required"),capture:r("capture"),name:r("name"),accept:l("acceptAttr"),webkitdirectory:r("directory")?"":void 0,multiple:l("multiple")||r("maxFiles")>1,onClick(d){d.stopPropagation(),d.currentTarget.value=""},onInput(d){if(p)return;const{files:n}=d.currentTarget;a({type:"FILE.SELECT",files:n?Array.from(n):[]})},style:qt})},getItemGroupProps(d={}){const{type:n=z}=d;return t.element({...I.itemGroup.attrs,dir:r("dir"),"data-disabled":U(p),"data-type":n})},getItemProps(d){const{file:n,type:f=z}=d;return t.element({...I.item.attrs,dir:r("dir"),id:Ui(o,n.name),"data-disabled":U(p),"data-type":f})},getItemNameProps(d){const{file:n,type:f=z}=d;return t.element({...I.itemName.attrs,dir:r("dir"),id:bi(o,n.name),"data-disabled":U(p),"data-type":f})},getItemSizeTextProps(d){const{file:n,type:f=z}=d;return t.element({...I.itemSizeText.attrs,dir:r("dir"),id:hi(o,n.name),"data-disabled":U(p),"data-type":f})},getItemPreviewProps(d){const{file:n,type:f=z}=d;return t.element({...I.itemPreview.attrs,dir:r("dir"),id:Ei(o,n.name),"data-disabled":U(p),"data-type":f})},getItemPreviewImageProps(d){var w;const{file:n,url:f,type:_=z}=d;if(!n.type.startsWith("image/"))throw new Error("Preview Image is only supported for image files");return t.img({...I.itemPreviewImage.attrs,alt:(w=v.itemPreview)==null?void 0:w.call(v,n),src:f,"data-disabled":U(p),"data-type":_})},getItemDeleteTriggerProps(d){var _;const{file:n,type:f=z}=d;return t.button({...I.itemDeleteTrigger.attrs,dir:r("dir"),type:"button",disabled:p,"data-disabled":U(p),"data-type":f,"aria-label":(_=v.deleteFile)==null?void 0:_.call(v,n),onClick(){p||a({type:"FILE.DELETE",file:n,itemType:f})}})},getLabelProps(){return t.label({...I.label.attrs,dir:r("dir"),id:yi(o),htmlFor:ue(o),"data-disabled":U(p),"data-required":U(g)})},getClearTriggerProps(){return t.button({...I.clearTrigger.attrs,dir:r("dir"),type:"button",disabled:p,hidden:s.get("acceptedFiles").length===0,"data-disabled":U(p),onClick(d){d.defaultPrevented||p||a({type:"FILES.CLEAR"})}})}}}var Ri=Vt({props({props:e}){return{minFileSize:0,maxFileSize:Number.POSITIVE_INFINITY,maxFiles:1,allowDrop:!0,preventDocumentDrop:!0,defaultAcceptedFiles:[],...e,translations:{dropzone:"dropzone",itemPreview:t=>`preview of ${t.name}`,deleteFile:t=>`delete file ${t.name}`,...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:i}){return{acceptedFiles:t(()=>({defaultValue:e("defaultAcceptedFiles"),value:e("acceptedFiles"),isEqual:(a,r)=>a.length===(r==null?void 0:r.length)&&a.every((l,o)=>le(l,r[o])),hash(a){return a.map(r=>`${r.name}-${r.size}`).join(",")},onChange(a){var l,o;const r=i();(l=e("onFileAccept"))==null||l({files:a}),(o=e("onFileChange"))==null||o({acceptedFiles:a,rejectedFiles:r.get("rejectedFiles")})}})),rejectedFiles:t(()=>({defaultValue:[],isEqual:(a,r)=>a.length===(r==null?void 0:r.length)&&a.every((l,o)=>le(l.file,r[o].file)),onChange(a){var l,o;const r=i();(l=e("onFileReject"))==null||l({files:a}),(o=e("onFileChange"))==null||o({acceptedFiles:r.get("acceptedFiles"),rejectedFiles:a})}})),transforming:t(()=>({defaultValue:!1}))}},computed:{acceptAttr:({prop:e})=>di(e("accept")),multiple:({prop:e})=>e("maxFiles")>1},watch({track:e,context:t,action:i}){e([()=>t.hash("acceptedFiles")],()=>{i(["syncInputElement"])})},on:{"FILES.SET":{actions:["setFiles"]},"FILE.SELECT":{actions:["setEventFiles"]},"FILE.DELETE":{actions:["removeFile"]},"FILES.CLEAR":{actions:["clearFiles"]},"REJECTED_FILES.CLEAR":{actions:["clearRejectedFiles"]}},effects:["preventDocumentDrop"],states:{idle:{on:{OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.FOCUS":{target:"focused"},"DROPZONE.DRAG_OVER":{target:"dragging"}}},focused:{on:{"DROPZONE.BLUR":{target:"idle"},OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.DRAG_OVER":{target:"dragging"}}},dragging:{on:{"DROPZONE.DROP":{target:"idle",actions:["setEventFiles"]},"DROPZONE.DRAG_LEAVE":{target:"idle"}}}},implementations:{effects:{preventDocumentDrop({prop:e,scope:t}){if(!e("preventDocumentDrop")||!e("allowDrop")||e("disabled"))return;const i=t.getDoc(),a=l=>{l==null||l.preventDefault()},r=l=>{ce(Li(t),ne(l))||l.preventDefault()};return Bt(xe(i,"dragover",a,!1),xe(i,"drop",r,!1))}},actions:{syncInputElement({scope:e,context:t}){queueMicrotask(()=>{const i=Ue(e);if(!i)return;Ti(i,t.get("acceptedFiles"));const a=e.getWin();i.dispatchEvent(new a.Event("change",{bubbles:!0}))})},openFilePicker({scope:e}){Mt(()=>{var t;(t=Ue(e))==null||t.click()})},setFiles(e){const{computed:t,context:i,event:a}=e,{acceptedFiles:r,rejectedFiles:l}=he(e,a.files);i.set("acceptedFiles",t("multiple")?r:r.length>0?[r[0]]:[]),i.set("rejectedFiles",l)},setEventFiles(e){const{computed:t,context:i,event:a,prop:r}=e,l=i.get("acceptedFiles"),o=i.get("rejectedFiles"),{acceptedFiles:s,rejectedFiles:p}=he(e,a.files,l,o),g=v=>{if(t("multiple")){i.set("acceptedFiles",L=>[...L,...v]),i.set("rejectedFiles",p);return}if(v.length){i.set("acceptedFiles",[v[0]]),i.set("rejectedFiles",p);return}p.length&&(i.set("acceptedFiles",i.get("acceptedFiles")),i.set("rejectedFiles",p))},E=r("transformFiles");E?(i.set("transforming",!0),E(s).then(g).catch(v=>{Gt(`[zag-js/file-upload] error transforming files
${v}`)}).finally(()=>{i.set("transforming",!1)})):g(s)},removeFile({context:e,event:t}){if(t.itemType==="rejected"){const i=e.get("rejectedFiles").filter(a=>!le(a.file,t.file));e.set("rejectedFiles",i)}else{const i=e.get("acceptedFiles").filter(a=>!le(a,t.file));e.set("acceptedFiles",i)}},clearRejectedFiles({context:e}){e.set("rejectedFiles",[])},clearFiles({context:e}){e.set("acceptedFiles",[]),e.set("rejectedFiles",[])}}}});_t()(["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","dir","directory","disabled","getRootNode","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","transformFiles","translations","validate"]);_t()(["file","type"]);const ji=e=>{const t=u.useId(),{getRootNode:i}=Zt(),{dir:a,locale:r}=Wt(),l=vt(),o={id:t,ids:{label:l==null?void 0:l.ids.label,hiddenInput:l==null?void 0:l.ids.control},dir:a,disabled:l==null?void 0:l.disabled,locale:r,required:l==null?void 0:l.required,invalid:l==null?void 0:l.invalid,getRootNode:i,...e},s=Ht(Ri,o);return Pi(s,Kt)},Rt=u.forwardRef((e,t)=>{const[i,a]=se()(e,["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","directory","disabled","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","translations","transformFiles","validate"]),r=ji(i),l=D(r.getRootProps(),a);return m.jsx(ai,{value:r,children:m.jsx(S.div,{...l,ref:t})})});Rt.displayName="FileUploadRoot";const jt=u.forwardRef((e,t)=>{const i=O(),a=D(i.getTriggerProps(),e);return m.jsx(S.button,{...a,ref:t})});jt.displayName="FileUploadTrigger";var h=(e=>(e.compact="compact",e.default="default",e))(h||{});const Di=Object.freeze(Object.values(h)),Dt=u.createContext({});function St({children:e,locale:t}){return m.jsx(Dt.Provider,{value:{locale:t},children:e})}function Si(){return u.useContext(Dt)}St.__docgenInfo={description:"",methods:[],displayName:"FileUploadProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["FileUploadContextType"]};var C=(e=>(e.invalidFile="invalid-file",e.maxFileReached="max-file-reached",e.sizeTooLarge="size-too-large",e.unknownError="unknown-error",e.wrongFormat="wrong-format",e))(C||{});Object.freeze(Object.values(C));function Oi(e){return!!(e||e===0)&&e<100}function zi(e){return e.map(t=>{switch(t){case"FILE_INVALID":return C.invalidFile;case"FILE_INVALID_TYPE":return C.wrongFormat;case"FILE_TOO_LARGE":return C.sizeTooLarge;case"TOO_MANY_FILES":return C.maxFileReached;default:return C.unknownError}})}const j={"file-upload-dropzone":"_file-upload-dropzone_lx0rr_2","file-upload-dropzone__rules":"_file-upload-dropzone__rules_lx0rr_7","file-upload-dropzone__zone":"_file-upload-dropzone__zone_lx0rr_12","file-upload-dropzone__zone--compact":"_file-upload-dropzone__zone--compact_lx0rr_21","file-upload-dropzone__zone--dragging":"_file-upload-dropzone__zone--dragging_lx0rr_27","file-upload-dropzone__zone--disabled":"_file-upload-dropzone__zone--disabled_lx0rr_30","file-upload-dropzone__zone__icon":"_file-upload-dropzone__zone__icon_lx0rr_36","file-upload-dropzone__zone--invalid":"_file-upload-dropzone__zone--invalid_lx0rr_39","file-upload-dropzone__error":"_file-upload-dropzone__error_lx0rr_46"},ge=({acceptedFileLabel:e,dropzoneLabel:t,error:i,invalid:a,maxFile:r,maxFileLabel:l,maxSize:o,maxSizeLabel:s,triggerLabel:p,variant:g})=>{const E=u.useId(),{disabled:v,dragging:L,getFileSize:N}=O(),d=u.useMemo(()=>!!e||!!l||!!s,[e,l,s]),n=g===h.compact;return m.jsxs("div",{className:j["file-upload-dropzone"],children:[d&&m.jsxs("div",{className:j["file-upload-dropzone__rules"],id:E,children:[l&&typeof r=="number"&&r>=0&&m.jsxs("span",{children:[l," ",r]}),s&&typeof o=="number"&&o>=0&&m.jsxs("span",{children:[s," ",N({size:o})]}),e&&m.jsx("span",{children:e})]}),m.jsxs("div",{className:q(j["file-upload-dropzone__zone"],{[j["file-upload-dropzone__zone--compact"]]:n},{[j["file-upload-dropzone__zone--dragging"]]:L},{[j["file-upload-dropzone__zone--disabled"]]:v},{[j["file-upload-dropzone__zone--invalid"]]:a}),children:[!n&&m.jsx(oe,{className:j["file-upload-dropzone__zone__icon"],name:re.filePlus}),m.jsx("span",{children:t}),m.jsx(jt,{asChild:!0,children:m.jsxs(ft,{"aria-describedby":d?E:"",size:gt.md,variant:Ft.ghost,children:[m.jsx(oe,{name:re.upload})," ",p]})})]}),!!i&&m.jsx("div",{className:j["file-upload-dropzone__error"],role:"alert",children:i})]})};ge.displayName="FileUploadDropzone";ge.__docgenInfo={description:"",methods:[],displayName:"FileUploadDropzone",props:{acceptedFileLabel:{required:!1,tsType:{name:"string"},description:""},dropzoneLabel:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},maxFile:{required:!1,tsType:{name:"number"},description:""},maxFileLabel:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},maxSizeLabel:{required:!1,tsType:{name:"string"},description:""},triggerLabel:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"literal",value:"`${FILE_UPLOAD_VARIANT}`"},description:""}}};const Ni={"file-upload":"_file-upload_1ozmv_2"},x=u.forwardRef(({accept:e,acceptedFileLabel:t,children:i,className:a,disabled:r,dropzoneLabel:l="Drag & drop a file",error:o,id:s,invalid:p,locale:g,maxFile:E=1/0,maxFileLabel:v,maxSize:L,maxSizeLabel:N,name:d,onFileAccept:n,onFileReject:f,required:_,triggerLabel:$="Browse files",variant:w=h.default,..._e},Ot)=>{const R=Ct(),zt=u.useCallback(({files:V})=>{f&&f({files:V.map(({errors:Nt,file:wt})=>({errors:zi(Nt),file:wt}))})},[f]),pe=p||(R==null?void 0:R.invalid),ve=s||(R==null?void 0:R.id);return m.jsx(St,{locale:g,children:m.jsxs(Rt,{accept:e,allowDrop:!0,className:q(Ni["file-upload"],a),"data-ods":"file-upload",directory:!1,disabled:r,ids:{hiddenInput:ve},invalid:pe,maxFiles:E,maxFileSize:L,onFileAccept:n,onFileReject:zt,name:d,ref:Ot,required:_,..._e,children:[m.jsxs(xt,{disableClick:!0,onDragOver:V=>V.preventDefault(),onDrop:V=>V.preventDefault(),children:[m.jsx(ge,{acceptedFileLabel:t,dropzoneLabel:l,error:o,invalid:pe,maxFile:E,maxFileLabel:v,maxSize:L,maxSizeLabel:N,triggerLabel:$,variant:w}),i]}),m.jsx(yt,{"aria-invalid":pe,"aria-describedby":_e["aria-describedby"]||(R==null?void 0:R.ariaDescribedBy),id:ve})]})})});x.displayName="FileUpload";x.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:"The accepted file types."},acceptedFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the accepted file types."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},dropzoneLabel:{required:!1,tsType:{name:"string"},description:"The dropzone label.",defaultValue:{value:"'Drag & drop a file'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"The global error message to display."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maxFile:{required:!1,tsType:{name:"number"},description:"The maximum number of files that can be selected.",defaultValue:{value:"Infinity",computed:!0}},maxFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum number of files that can be selected."},maxSize:{required:!1,tsType:{name:"number"},description:"The maximum size of selectable files."},maxSizeLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum size of selectable files."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onFileAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadAcceptDetail) => void",signature:{arguments:[{type:{name:"FileUploadAcceptDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been successfully added."},onFileReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadRejectDetail) => void",signature:{arguments:[{type:{name:"FileUploadRejectDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been rejected."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},triggerLabel:{required:!1,tsType:{name:"string"},description:"Upload button label.",defaultValue:{value:"'Browse files'",computed:!1}},variant:{required:!1,tsType:{name:"literal",value:"`${FILE_UPLOAD_VARIANT}`"},description:"The variant preset to use.",defaultValue:{value:"FILE_UPLOAD_VARIANT.default",computed:!0}}},composes:["ComponentPropsWithRef"]};var k=(e=>(e.cancelButton="fileUpload.file.cancel.button",e.deleteButton="fileUpload.file.delete.button",e.progressBar="fileUpload.file.progressBar",e))(k||{});const wi={"fileUpload.file.cancel.button":{[F.de]:"Abbrechen",[F.en]:"Cancel",[F.es]:"Cancelar",[F.fr]:"Annuler",[F.it]:"Annulla",[F.nl]:"Annuleren",[F.pl]:"Anuluj",[F.pt]:"Cancelar"},"fileUpload.file.delete.button":{[F.de]:"Löschen",[F.en]:"Delete",[F.es]:"Eliminar",[F.fr]:"Supprimer",[F.it]:"Elimina",[F.nl]:"Verwijderen",[F.pl]:"Usuń",[F.pt]:"Eliminar"},"fileUpload.file.progressBar":{[F.de]:"Hochladen",[F.en]:"Uploading",[F.es]:"Cargando",[F.fr]:"Chargement",[F.it]:"Caricamento in Corso",[F.nl]:"Uploaden",[F.pl]:"Ładowanie",[F.pt]:"A carregar"}},T={"file-upload-item":"_file-upload-item_kf8lo_6","file-upload-item__delete":"_file-upload-item__delete_kf8lo_22","file-upload-item__icon":"_file-upload-item__icon_kf8lo_28","file-upload-item__icon--error":"_file-upload-item__icon--error_kf8lo_28","file-upload-item__info":"_file-upload-item__info_kf8lo_38","file-upload-item__info__name":"_file-upload-item__info__name_kf8lo_44","file-upload-item__info__name--error":"_file-upload-item__info__name--error_kf8lo_49","file-upload-item__info__size":"_file-upload-item__info__size_kf8lo_52","file-upload-item__error":"_file-upload-item__error_kf8lo_57"},b=u.forwardRef(({className:e,error:t,file:i,i18n:a,progress:r,...l},o)=>{const{locale:s}=Si(),{translate:p}=Xt(wi,s,a),g=Oi(r);return m.jsxs(Ut,{className:q(T["file-upload-item"],e),"data-ods":"file-upload-item",file:i,ref:o,...l,children:[g?m.jsx("span",{role:"status",children:m.jsx(Jt,{"aria-label":p(k.progressBar),size:ei.sm})}):m.jsx(oe,{className:q(T["file-upload-item__icon"],{[T["file-upload-item__icon--error"]]:!!t}),name:t?re.circleXmark:re.file}),m.jsxs("div",{className:T["file-upload-item__info"],children:[m.jsx(Et,{className:q(T["file-upload-item__info__name"],{[T["file-upload-item__info__name--error"]]:!!t})}),g?m.jsxs("span",{className:T["file-upload-item__info__size"],children:[r,"%"]}):m.jsx(Lt,{className:T["file-upload-item__info__size"]})]}),m.jsx(bt,{asChild:!0,children:m.jsx(ft,{"aria-label":p(g?k.cancelButton:k.deleteButton),className:T["file-upload-item__delete"],size:gt.xs,variant:Ft.ghost,children:m.jsx(oe,{name:re.xmark})})}),!!t&&m.jsx("span",{className:T["file-upload-item__error"],role:"error",children:t})]})});b.displayName="FileUploadItem";b.__docgenInfo={description:"",methods:[],displayName:"FileUploadItem",props:{error:{required:!1,tsType:{name:"string"},description:"The file error message to display."},file:{required:!0,tsType:{name:"File"},description:"The current File object."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"FILE_UPLOAD_I18N"},{name:"string"}],raw:"Record<FILE_UPLOAD_I18N, string>"}],raw:"Partial<Record<FILE_UPLOAD_I18N, string>>"},description:"Internal translations override."},progress:{required:!1,tsType:{name:"number"},description:"The file upload progress."},uploadSuccessLabel:{required:!1,tsType:{name:"string"},description:`@deprecated
The label displayed after a successful upload.
DEPRECATED: Latest design change removed the upload success label in favor of a visual icon update.`}},composes:["ComponentPropsWithRef"]};const Ci={"file-upload-list":"_file-upload-list_tgdo3_2"},y=u.forwardRef(({children:e,className:t,...i},a)=>m.jsx(ht,{className:q(Ci["file-upload-list"],t),"data-ods":"file-upload-list",ref:a,...i,children:e}));y.displayName="FileUploadList";y.__docgenInfo={description:"",methods:[],displayName:"FileUploadList",composes:["ComponentPropsWithRef"]};const ki={argTypes:ti(["accept","locale","name","onFileAccept","onFileReject","required"]),component:x,subcomponents:{FileUploadItem:b,FileUploadList:y},title:"React Components/File Upload"},M={render:e=>{const[t,i]=u.useState(""),[a,r]=u.useState([]);function l({files:s}){r(s),i("")}function o({files:s}){i(s.length?"File(s) rejected":"")}return c.createElement(x,{...e,error:e.error||t,onFileAccept:l,onFileReject:o},c.createElement(y,null,a.map((s,p)=>c.createElement(b,{file:s,key:p}))))},argTypes:ii({acceptedFileLabel:{table:{category:A.general},control:"text"},disabled:{table:{category:A.general},control:"boolean"},dropzoneLabel:{table:{category:A.general},control:"text"},error:{table:{category:A.general},control:"text"},invalid:{table:{category:A.general},control:"boolean"},maxFile:{table:{category:A.general},control:"number"},maxFileLabel:{table:{category:A.general},control:"text"},maxSize:{table:{category:A.general},control:"number"},maxSizeLabel:{table:{category:A.general},control:"text"},triggerLabel:{table:{category:A.general},control:"text"},variant:{table:{category:A.design,type:{summary:"FILE_UPLOAD_VARIANT"}},control:{type:"select"},options:Di}})},B={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"File(s) not of the expected format":"")}return c.createElement(x,{accept:"image/png",acceptedFileLabel:"Png files only",error:e,onFileAccept:r,onFileReject:l,variant:h.compact},c.createElement(y,null,i.map((o,s)=>c.createElement(b,{file:o,key:s}))))}},Y={globals:{imports:`import { FILE_UPLOAD_I18N, FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return c.createElement(x,{onFileAccept:({files:i})=>t(i),variant:h.compact},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,i18n:{[k.cancelButton]:`Cancel uploading ${i.name}`,[k.deleteButton]:`Remove ${i.name}`,[k.progressBar]:`Uploading ${i.name}`},key:a}))))}},Z={globals:{imports:`import { FILE_UPLOAD_VARIANT, FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return c.createElement(x,{onFileAccept:({files:i})=>t(i),variant:h.compact},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a}))))}},W={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return c.createElement(x,{acceptedFileLabel:"Formats acceptés : images",dropzoneLabel:"Glisser-déposer des fichiers",maxFile:3,maxFileLabel:"Nombre maximal de fichiers :",maxSize:524288e3,maxSizeLabel:"Taille de fichier max :",onFileAccept:({files:i})=>t(i),triggerLabel:"Parcourir les fichiers",variant:h.compact},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a,progress:100,uploadSuccessLabel:"Fichier uploadé"}))))}},H={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return c.createElement(x,{onFileAccept:({files:i})=>t(i)},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a}))))}},K={globals:{imports:"import { FileUpload, FileUploadList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>c.createElement(x,{disabled:!0,variant:h.compact},c.createElement(y,null))},Q={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"Too many files":"")}return c.createElement(x,{error:e,maxFile:3,maxFileLabel:"Maximum file allowed:",onFileAccept:r,onFileReject:l,variant:h.compact},c.createElement(y,null,i.map((o,s)=>c.createElement(b,{file:o,key:s}))))}},X={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"File(s) too large":"")}return c.createElement(x,{error:e,maxSize:1e6,maxSizeLabel:"No file larger than:",onFileAccept:r,onFileReject:l,variant:h.compact},c.createElement(y,null,i.map((o,s)=>c.createElement(b,{file:o,key:s}))))}},J={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[e,t]=u.useState([]);return c.createElement(x,{onFileAccept:({files:i})=>t(i),variant:h.compact},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a}))))}},ee={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useEffect, useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);u.useEffect(()=>{e.forEach(a=>{a.progress||i(a)})},[e]);function i(a){const r=setInterval(()=>{t(l=>l.map(o=>(o.name===a.name&&(o.progress=(o.progress||0)+Math.floor(Math.random()*10+1),o.progress>=100&&clearInterval(r)),o)))},100)}return c.createElement(x,{onFileAccept:({files:a})=>t(a),variant:h.compact},c.createElement(y,null,e.map((a,r)=>c.createElement(b,{error:a.error,file:a,key:r,progress:a.progress}))))}},te={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return c.createElement(mt,null,c.createElement(ut,null,"Files:"),c.createElement(x,{onFileAccept:({files:i})=>t(i),variant:h.compact},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a})))))}},ie={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return c.createElement(mt,null,c.createElement(ut,null,"Files:"),c.createElement(x,{onFileAccept:({files:i})=>t(i),variant:h.compact},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a})))))}},ae={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>{const[e,t]=u.useState([]);return c.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},c.createElement(x,{onFileAccept:({files:i})=>t(i)},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a})))),c.createElement(x,{disabled:!0},c.createElement(y,null)),c.createElement(x,{invalid:!0,onFileAccept:({files:i})=>t(i)},c.createElement(y,null,e.map((i,a)=>c.createElement(b,{file:i,key:a})))))}};var Ee,Le,Ie;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'FILE_UPLOAD_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: FILE_UPLOAD_VARIANTS
    }
  })
}`,...(Ie=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Ae,Te,Pe;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
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
    return <FileUpload accept="image/png" acceptedFileLabel="Png files only" error={error} onFileAccept={onAccept} onFileReject={onReject} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Pe=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var Re,je,De;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FILE_UPLOAD_I18N, FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
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
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} i18n={{
          [FILE_UPLOAD_I18N.cancelButton]: \`Cancel uploading \${file.name}\`,
          [FILE_UPLOAD_I18N.deleteButton]: \`Remove \${file.name}\`,
          [FILE_UPLOAD_I18N.progressBar]: \`Uploading \${file.name}\`
        }} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(De=(je=Y.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var Se,Oe,ze;Z.parameters={...Z.parameters,docs:{...(Se=Z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FILE_UPLOAD_VARIANT, FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
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
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(ze=(Oe=Z.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Ne,we,Ce;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
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
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload acceptedFileLabel="Formats acceptés : images" dropzoneLabel="Glisser-déposer des fichiers" maxFile={3} maxFileLabel="Nombre maximal de fichiers :" maxSize={524288000} maxSizeLabel="Taille de fichier max :" onFileAccept={({
      files
    }) => setFiles(files)} triggerLabel="Parcourir les fichiers" variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} progress={100} uploadSuccessLabel="Fichier uploadé" />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Ce=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var ke,qe,$e;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
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
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...($e=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var Ve,Ge,Me;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FileUpload disabled variant={FILE_UPLOAD_VARIANT.compact}>
      <FileUploadList />
    </FileUpload>
}`,...(Me=(Ge=K.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var Be,Ye,Ze;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
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
    return <FileUpload error={error} maxFile={3} maxFileLabel="Maximum file allowed:" onFileAccept={onAccept} onFileReject={onReject} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Ze=(Ye=Q.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var We,He,Ke;X.parameters={...X.parameters,docs:{...(We=X.parameters)==null?void 0:We.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
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
    return <FileUpload error={error} maxSize={1000000} maxSizeLabel="No file larger than:" onFileAccept={onAccept} onFileReject={onReject} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Ke=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Qe,Xe,Je;J.parameters={...J.parameters,docs:{...(Qe=J.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => {
    const [files, setFiles] = useState<File[]>([]);
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Je=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var et,tt,it;ee.parameters={...ee.parameters,docs:{...(et=ee.parameters)==null?void 0:et.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useEffect, useState } from 'react';\`
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
    }) => setFiles(files)} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file, idx) => <FileUploadItem error={file.error} file={file} key={idx} progress={file.progress} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(it=(tt=ee.parameters)==null?void 0:tt.docs)==null?void 0:it.source}}};var at,rt,lt;te.parameters={...te.parameters,docs:{...(at=te.parameters)==null?void 0:at.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
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
    const [files, setFiles] = useState<File[]>([]);
    return <FormField>
          <FormFieldLabel>
            Files:
          </FormFieldLabel>

          <FileUpload onFileAccept={({
        files
      }) => setFiles(files)} variant={FILE_UPLOAD_VARIANT.compact}>
            <FileUploadList>
              {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
            </FileUploadList>
          </FileUpload>
        </FormField>;
  }
}`,...(lt=(rt=te.parameters)==null?void 0:rt.docs)==null?void 0:lt.source}}};var ot,nt,st;ie.parameters={...ie.parameters,docs:{...(ot=ie.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
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
    const [files, setFiles] = useState<File[]>([]);
    return <FormField>
        <FormFieldLabel>
          Files:
        </FormFieldLabel>

        <FileUpload onFileAccept={({
        files
      }) => setFiles(files)} variant={FILE_UPLOAD_VARIANT.compact}>
          <FileUploadList>
            {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
          </FileUploadList>
        </FileUpload>
      </FormField>;
  }
}`,...(st=(nt=ie.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var pt,ct,dt;ae.parameters={...ae.parameters,docs:{...(pt=ae.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => {
    const [files, setFiles] = useState<File[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <FileUpload onFileAccept={({
        files
      }) => setFiles(files)}>
          <FileUploadList>
            {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
          </FileUploadList>
        </FileUpload>

        <FileUpload disabled>
          <FileUploadList />
        </FileUpload>

        <FileUpload invalid onFileAccept={({
        files
      }) => setFiles(files)}>
          <FileUploadList>
            {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
          </FileUploadList>
        </FileUpload>
      </div>;
  }
}`,...(dt=(ct=ae.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};const qi=["Demo","Accept","AccessibilityFileButton","Compact","CustomLabels","Default","Disabled","MaxFile","MaxSize","Overview","Upload","InFormField","AccessibilityFormField","ThemeGenerator"],ea=Object.freeze(Object.defineProperty({__proto__:null,Accept:B,AccessibilityFileButton:Y,AccessibilityFormField:ie,Compact:Z,CustomLabels:W,Default:H,Demo:M,Disabled:K,InFormField:te,MaxFile:Q,MaxSize:X,Overview:J,ThemeGenerator:ae,Upload:ee,__namedExportsOrder:qi,default:ki},Symbol.toStringTag,{value:"Module"}));export{ie as A,Z as C,H as D,ea as F,te as I,Q as M,J as O,ee as U,Y as a,K as b,W as c,B as d,X as e};
