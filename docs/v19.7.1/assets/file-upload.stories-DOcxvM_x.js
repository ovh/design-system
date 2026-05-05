import{u as Gt,F as _t,a as vt}from"./index-B0M5RXeR.js";import{r as u,e as s}from"./index-jIWwRBLr.js";import{j as m}from"./jsx-runtime-Cfl8ynUo.js";import{c as q}from"./index-CqY9YpN0.js";import{u as Mt}from"./context-C_-r2uoG.js";import{B as xt,d as yt,c as Ut}from"./Button-B-GJ-1TA.js";import{I as ne,a as le}from"./icon-name-D0KNfDOz.js";import{c as Fe,a as pe,M as D,N as S,z as Bt,w as Yt,r as Zt,n as Wt,l as Ue,O as b,P as Ht,ay as Kt,s as de,aY as Xt,d as se,g as Qt,C as bt,$ as Jt,u as ei,D as ti,a0 as ii}from"./use-locale-context-CGqEQCyU.js";import{a as ai}from"./index-BXelFz3z.js";import{u as ht}from"./use-field-context-Dkm7CMfi.js";import{L as F,u as ri}from"./useI18n-C0NLVYPv.js";import{S as li,d as oi}from"./Spinner-DJB5ZadI.js";import{e as ni,o as si,C as A}from"./controls-BtiQQn1l.js";import{s as P}from"./source-CPEZJ6oD.js";const[pi,O]=Fe({name:"FileUploadContext",hookName:"useFileUploadContext",providerName:"<FileUploadProvider />"}),Et=u.forwardRef((e,t)=>{const[i,a]=pe()(e,["disableClick"]),r=O(),l=D(r.getDropzoneProps(i),a);return m.jsx(S.div,{...l,ref:t})});Et.displayName="FileUploadDropzone";const Lt=u.forwardRef((e,t)=>{const i=O(),a=D(i.getHiddenInputProps(),e),r=ht();return m.jsx(S.input,{"aria-describedby":r==null?void 0:r.ariaDescribedby,...a,ref:t})});Lt.displayName="FileUploadHiddenInput";const[ci,di]=Fe({name:"FileUploadItemGroupPropsContext",hookName:"useFileUploadItemGroupPropsContext",providerName:"<FileUploadItemGroupPropsProvider />"}),[mi,ge]=Fe({name:"FileUploadItemPropsContext",hookName:"useFileUploadItemPropsContext",providerName:"<FileUploadItemPropsProvider />"}),It=u.forwardRef((e,t)=>{const[i,a]=pe()(e,["file"]),r=O(),l=di(),o={...i,type:l.type},p=D(r.getItemProps(o),a);return m.jsx(mi,{value:o,children:m.jsx(S.li,{...p,ref:t})})});It.displayName="FileUploadItem";const At=u.forwardRef((e,t)=>{const i=O(),a=ge(),r=D(i.getItemDeleteTriggerProps(a),e);return m.jsx(S.button,{...r,ref:t})});At.displayName="FileUploadItemDeleteTrigger";const Tt=u.forwardRef((e,t)=>{const[i,a]=pe()(e,["type"]),r=O(),l=D(r.getItemGroupProps(i),a);return m.jsx(ci,{value:i,children:m.jsx(S.ul,{...l,ref:t})})});Tt.displayName="FileUploadItemGroup";const Pt=u.forwardRef((e,t)=>{const{children:i,...a}=e,r=O(),l=ge(),o=D(r.getItemNameProps(l),a);return m.jsx(S.div,{...o,ref:t,children:i||l.file.name})});Pt.displayName="FileUploadItemName";const Rt=u.forwardRef((e,t)=>{const{children:i,...a}=e,r=O(),l=ge(),o=D(r.getItemSizeTextProps(l),a);return m.jsx(S.div,{...o,ref:t,children:i||r.getFileSize(l.file)})});Rt.displayName="FileUploadItemSizeText";var ui=e=>typeof e.getAsEntry=="function"?e.getAsEntry():typeof e.webkitGetAsEntry=="function"?e.webkitGetAsEntry():null,jt=e=>e.isDirectory,me=e=>e.isFile,ue=(e,t)=>(Object.defineProperty(e,"relativePath",{value:t?`${t}/${e.name}`:e.name}),e),fi=(e,t)=>Promise.all(Array.from(e).filter(i=>i.kind==="file").map(i=>{const a=ui(i);if(!a)return null;if(jt(a)&&t)return Dt(a.createReader(),`${a.name}`);if(me(a)&&typeof i.getAsFile=="function"){const r=i.getAsFile();return Promise.resolve(r?ue(r,""):null)}if(me(a))return new Promise(r=>{a.file(l=>{r(ue(l,""))})})}).filter(i=>i)),Dt=(e,t="")=>new Promise(i=>{const a=[],r=()=>{e.readEntries(l=>{if(l.length===0){i(Promise.all(a).then(p=>p.flat()));return}const o=l.map(p=>{if(!p)return null;if(jt(p))return Dt(p.createReader(),`${t}${p.name}`);if(me(p))return new Promise(c=>{p.file(g=>{c(ue(g,t))})})}).filter(p=>p);a.push(Promise.all(o)),r()})};r()});function Fi(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function gi(e){return/^.*\.[\w]+$/.test(e)}var be=e=>Fi(e)||gi(e);function _i(e){if(e!=null)return typeof e=="string"?e:Array.isArray(e)?e.filter(be).join(","):Object.entries(e).reduce((t,[i,a])=>[...t,i,...a],[]).filter(be).join(",")}var oe=(e,t)=>e.name===t.name&&e.size===t.size&&e.type===t.type,G=e=>e!=null;function vi(e,t,i){if(G(e.size))if(G(t)&&G(i)){if(e.size>i)return[!1,"FILE_TOO_LARGE"];if(e.size<t)return[!1,"FILE_TOO_SMALL"]}else{if(G(t)&&e.size<t)return[!1,"FILE_TOO_SMALL"];if(G(i)&&e.size>i)return[!1,"FILE_TOO_LARGE"]}return[!0,null]}var xi="3g2_video/3gpp2[3gp,3gpp_video/3gpp[3mf_model/3mf[7z_application/x-7z-compressed[aac_audio/aac[ac_application/pkix-attr-cert[adp_audio/adpcm[adts_audio/aac[ai_application/postscript[aml_application/automationml-aml+xml[amlx_application/automationml-amlx+zip[amr_audio/amr[apk_application/vnd.android.package-archive[apng_image/apng[appcache,manifest_text/cache-manifest[appinstaller_application/appinstaller[appx_application/appx[appxbundle_application/appxbundle[asc_application/pgp-keys[atom_application/atom+xml[atomcat_application/atomcat+xml[atomdeleted_application/atomdeleted+xml[atomsvc_application/atomsvc+xml[au,snd_audio/basic[avi_video/x-msvideo[avci_image/avci[avcs_image/avcs[avif_image/avif[aw_application/applixware[bdoc_application/bdoc[bin,bpk,buffer,deb,deploy,dist,distz,dll,dmg,dms,dump,elc,exe,img,iso,lrf,mar,msi,msm,msp,pkg,so_application/octet-stream[bmp,dib_image/bmp[btf,btif_image/prs.btif[bz2_application/x-bzip2[c_text/x-c[ccxml_application/ccxml+xml[cdfx_application/cdfx+xml[cdmia_application/cdmi-capability[cdmic_application/cdmi-container[cdmid_application/cdmi-domain[cdmio_application/cdmi-object[cdmiq_application/cdmi-queue[cer_application/pkix-cert[cgm_image/cgm[cjs_application/node[class_application/java-vm[coffee,litcoffee_text/coffeescript[conf,def,in,ini,list,log,text,txt_text/plain[cpp,cxx,cc_text/x-c++src[cpl_application/cpl+xml[cpt_application/mac-compactpro[crl_application/pkix-crl[css_text/css[csv_text/csv[cu_application/cu-seeme[cwl_application/cwl[cww_application/prs.cww[davmount_application/davmount+xml[dbk_application/docbook+xml[doc_application/msword[docx_application/vnd.openxmlformats-officedocument.wordprocessingml.document[dsc_text/prs.lines.tag[dssc_application/dssc+der[dtd_application/xml-dtd[dwd_application/atsc-dwd+xml[ear,jar,war_application/java-archive[ecma_application/ecmascript[emf_image/emf[eml,mime_message/rfc822[emma_application/emma+xml[emotionml_application/emotionml+xml[eot_application/vnd.ms-fontobject[eps,ps_application/postscript[epub_application/epub+zip[exi_application/exi[exp_application/express[exr_image/aces[ez_application/andrew-inset[fdf_application/fdf[fdt_application/fdt+xml[fits_image/fits[flac_audio/flac[flv_video/x-flv[g3_image/g3fax[geojson_application/geo+json[gif_image/gif[glb_model/gltf-binary[gltf_model/gltf+json[gml_application/gml+xml[go_text/x-go[gpx_application/gpx+xml[gz_application/gzip[h_text/x-h[h261_video/h261[h263_video/h263[h264_video/h264[heic_image/heic[heics_image/heic-sequence[heif_image/heif[heifs_image/heif-sequence[htm,html,shtml_text/html[ico_image/x-icon[icns_image/x-icns[ics,ifb_text/calendar[iges,igs_model/iges[ink,inkml_application/inkml+xml[ipa_application/octet-stream[java_text/x-java-source[jp2,jpg2_image/jp2[jpeg,jpe,jpg_image/jpeg[jpf,jpx_image/jpx[jpm,jpgm_image/jpm[jpgv_video/jpeg[jph_image/jph[js,mjs_text/javascript[json_application/json[json5_application/json5[jsonld_application/ld+json[jsx_text/jsx[jxl_image/jxl[jxr_image/jxr[ktx_image/ktx[ktx2_image/ktx2[less_text/less[m1v,m2v,mpe,mpeg,mpg_video/mpeg[m4a_audio/mp4[m4v_video/x-m4v[md,markdown_text/markdown[mid,midi,kar,rmi_audio/midi[mkv_video/x-matroska[mp2,mp2a,mp3,mpga,m3a,m2a_audio/mpeg[mp4,mp4v,mpg4_video/mp4[mp4a_audio/mp4[mp4s,m4p_application/mp4[odp_application/vnd.oasis.opendocument.presentation[oda_application/oda[ods_application/vnd.oasis.opendocument.spreadsheet[odt_application/vnd.oasis.opendocument.text[oga,ogg,opus,spx_audio/ogg[ogv_video/ogg[ogx_application/ogg[otf_font/otf[p12,pfx_application/x-pkcs12[pdf_application/pdf[pem_application/x-pem-file[php_text/x-php[png_image/png[ppt_application/vnd.ms-powerpoint[pptx_application/vnd.openxmlformats-officedocument.presentationml.presentation[pskcxml_application/pskc+xml[psd_image/vnd.adobe.photoshop[py_text/x-python[qt,mov_video/quicktime[rar_application/vnd.rar[rdf_application/rdf+xml[rtf_text/rtf[sass_text/x-sass[scss_text/x-scss[sgm,sgml_text/sgml[sh_application/x-sh[svg,svgz_image/svg+xml[swf_application/x-shockwave-flash[tar_application/x-tar[tif,tiff_image/tiff[toml_application/toml[ts_video/mp2t[tsx_text/tsx[tsv_text/tab-separated-values[ttc_font/collection[ttf_font/ttf[vtt_text/vtt[wasm_application/wasm[wav_audio/wav[weba_audio/webm[webm_video/webm[webmanifest_application/manifest+json[webp_image/webp[wma_audio/x-ms-wma[wmv_video/x-ms-wmv[woff_font/woff[woff2_font/woff2[xls_application/vnd.ms-excel[xlsx_application/vnd.openxmlformats-officedocument.spreadsheetml.sheet[xml_application/xml[xz_application/x-xz[yaml,yml_text/yaml[zip_application/zip",yi=new Map(xi.split("[").flatMap(e=>{const[t,i]=e.split("_");return t.split(",").map(a=>[a,i])}));function Ui(e){const t=e.split(".").pop();return t&&yi.get(t)||null}function bi(e,t){if(e&&t){const i=Array.isArray(t)?t:typeof t=="string"?t.split(","):[];if(i.length===0)return!0;const a=e.name||"",r=(e.type||Ui(a)||"").toLowerCase(),l=r.replace(/\/.*$/,"");return i.some(o=>{const p=o.trim().toLowerCase();return p.charAt(0)==="."?a.toLowerCase().endsWith(p):p.endsWith("/*")?l===p.replace(/\/.*$/,""):r===p})}return!0}function hi(e,t){const i=e.type==="application/x-moz-file"||bi(e,t);return[i,i?null:"FILE_INVALID_TYPE"]}var Ei=Ht("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger"),I=Ei.build(),St=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`file:${e.id}`},Ot=e=>{var t;return((t=e.ids)==null?void 0:t.dropzone)??`file:${e.id}:dropzone`},fe=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`file:${e.id}:input`},Li=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`file:${e.id}:trigger`},Ii=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`file:${e.id}:label`},Ai=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.item)==null?void 0:a.call(i,t))??`file:${e.id}:item:${t}`},Ti=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemName)==null?void 0:a.call(i,t))??`file:${e.id}:item-name:${t}`},Pi=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemSizeText)==null?void 0:a.call(i,t))??`file:${e.id}:item-size:${t}`},Ri=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemPreview)==null?void 0:a.call(i,t))??`file:${e.id}:item-preview:${t}`},ji=e=>e.getById(St(e)),he=e=>e.getById(fe(e)),Di=e=>e.getById(Ot(e));function Ee(e){const t=se(e);return e.dataTransfer?e.dataTransfer.types.some(i=>i==="Files"||i==="application/x-moz-file"):!!t&&"files"in t}function Si(e,t,i){const{prop:a,computed:r}=e;return!r("multiple")&&t>1?!1:!r("multiple")&&t+i.length===2?!0:!(t+i.length>a("maxFiles"))}function Le(e,t,i=[],a=[]){const{prop:r,computed:l}=e,o=[],p=[],c={acceptedFiles:i,rejectedFiles:a};return t.forEach(g=>{var f;const[E,x]=hi(g,l("acceptAttr")),[L,N]=vi(g,r("minFileSize"),r("maxFileSize")),d=(f=r("validate"))==null?void 0:f(g,c),n=d?d.length===0:!0;if(E&&L&&n)o.push(g);else{const v=[x,N];n||v.push(...d??[]),p.push({file:g,errors:v.filter(Boolean)})}}),Si(e,o.length,i)||(o.forEach(g=>{p.push({file:g,errors:["TOO_MANY_FILES"]})}),o.splice(0)),{acceptedFiles:o,rejectedFiles:p}}function Oi(e,t){const i=Qt(e);try{if("DataTransfer"in i){const a=new i.DataTransfer;t.forEach(r=>{a.items.add(r)}),e.files=a.files}}catch{}}var z="accepted";function zi(e,t){const{state:i,send:a,prop:r,computed:l,scope:o,context:p}=e,c=!!r("disabled"),g=!!r("required"),E=r("allowDrop"),x=r("translations"),L=i.matches("dragging"),N=i.matches("focused")&&!c;return{dragging:L,focused:N,disabled:!!c,transforming:p.get("transforming"),openFilePicker(){c||a({type:"OPEN"})},deleteFile(d,n=z){a({type:"FILE.DELETE",file:d,itemType:n})},acceptedFiles:p.get("acceptedFiles"),rejectedFiles:p.get("rejectedFiles"),setFiles(d){a({type:"FILES.SET",files:d,count:d.length})},clearRejectedFiles(){a({type:"REJECTED_FILES.CLEAR"})},clearFiles(){a({type:"FILES.CLEAR"})},getFileSize(d){return ai(d.size,r("locale"))},createFileUrl(d,n){const f=o.getWin(),v=f.URL.createObjectURL(d);return n(v),()=>f.URL.revokeObjectURL(v)},setClipboardFiles(d){if(c)return!1;const f=Array.from((d==null?void 0:d.items)??[]).reduce((v,$)=>{if($.kind!=="file")return v;const w=$.getAsFile();return w?[...v,w]:v},[]);return f.length?(a({type:"FILES.SET",files:f}),!0):!1},getRootProps(){return t.element({...I.root.attrs,dir:r("dir"),id:St(o),"data-disabled":b(c),"data-dragging":b(L)})},getDropzoneProps(d={}){return t.element({...I.dropzone.attrs,dir:r("dir"),id:Ot(o),tabIndex:c||d.disableClick?void 0:0,role:d.disableClick?"application":"button","aria-label":x.dropzone,"aria-disabled":c,"data-invalid":b(r("invalid")),"data-disabled":b(c),"data-dragging":b(L),onKeyDown(n){c||n.defaultPrevented||n.currentTarget===se(n)&&(d.disableClick||n.key!=="Enter"&&n.key!==" "||a({type:"DROPZONE.CLICK",src:"keydown"}))},onClick(n){c||n.defaultPrevented||d.disableClick||n.currentTarget===se(n)&&(n.currentTarget.localName==="label"&&n.preventDefault(),a({type:"DROPZONE.CLICK"}))},onDragOver(n){if(c||!E)return;n.preventDefault(),n.stopPropagation();try{n.dataTransfer.dropEffect="copy"}catch{}if(!Ee(n))return;const v=n.dataTransfer.items.length;a({type:"DROPZONE.DRAG_OVER",count:v})},onDragLeave(n){c||E&&(de(n.currentTarget,n.relatedTarget)||a({type:"DROPZONE.DRAG_LEAVE"}))},onDrop(n){if(c)return;E&&(n.preventDefault(),n.stopPropagation());const f=Ee(n);c||!f||fi(n.dataTransfer.items,r("directory")).then(v=>{a({type:"DROPZONE.DROP",files:Xt(v)})})},onFocus(){c||a({type:"DROPZONE.FOCUS"})},onBlur(){c||a({type:"DROPZONE.BLUR"})}})},getTriggerProps(){return t.button({...I.trigger.attrs,dir:r("dir"),id:Li(o),disabled:c,"data-disabled":b(c),"data-invalid":b(r("invalid")),type:"button",onClick(d){c||(de(Di(o),d.currentTarget)&&d.stopPropagation(),a({type:"OPEN"}))}})},getHiddenInputProps(){return t.input({id:fe(o),tabIndex:-1,disabled:c,type:"file",required:r("required"),capture:r("capture"),name:r("name"),accept:l("acceptAttr"),webkitdirectory:r("directory")?"":void 0,multiple:l("multiple")||r("maxFiles")>1,onClick(d){d.stopPropagation(),d.currentTarget.value=""},onInput(d){if(c)return;const{files:n}=d.currentTarget;a({type:"FILE.SELECT",files:n?Array.from(n):[]})},style:Kt})},getItemGroupProps(d={}){const{type:n=z}=d;return t.element({...I.itemGroup.attrs,dir:r("dir"),"data-disabled":b(c),"data-type":n})},getItemProps(d){const{file:n,type:f=z}=d;return t.element({...I.item.attrs,dir:r("dir"),id:Ai(o,n.name),"data-disabled":b(c),"data-type":f})},getItemNameProps(d){const{file:n,type:f=z}=d;return t.element({...I.itemName.attrs,dir:r("dir"),id:Ti(o,n.name),"data-disabled":b(c),"data-type":f})},getItemSizeTextProps(d){const{file:n,type:f=z}=d;return t.element({...I.itemSizeText.attrs,dir:r("dir"),id:Pi(o,n.name),"data-disabled":b(c),"data-type":f})},getItemPreviewProps(d){const{file:n,type:f=z}=d;return t.element({...I.itemPreview.attrs,dir:r("dir"),id:Ri(o,n.name),"data-disabled":b(c),"data-type":f})},getItemPreviewImageProps(d){var w;const{file:n,url:f,type:v=z}=d;if(!n.type.startsWith("image/"))throw new Error("Preview Image is only supported for image files");return t.img({...I.itemPreviewImage.attrs,alt:(w=x.itemPreview)==null?void 0:w.call(x,n),src:f,"data-disabled":b(c),"data-type":v})},getItemDeleteTriggerProps(d){var v;const{file:n,type:f=z}=d;return t.button({...I.itemDeleteTrigger.attrs,dir:r("dir"),type:"button",disabled:c,"data-disabled":b(c),"data-type":f,"aria-label":(v=x.deleteFile)==null?void 0:v.call(x,n),onClick(){c||a({type:"FILE.DELETE",file:n,itemType:f})}})},getLabelProps(){return t.label({...I.label.attrs,dir:r("dir"),id:Ii(o),htmlFor:fe(o),"data-disabled":b(c),"data-required":b(g)})},getClearTriggerProps(){return t.button({...I.clearTrigger.attrs,dir:r("dir"),type:"button",disabled:c,hidden:p.get("acceptedFiles").length===0,"data-disabled":b(c),onClick(d){d.defaultPrevented||c||a({type:"FILES.CLEAR"})}})}}}var Ni=Bt({props({props:e}){return{minFileSize:0,maxFileSize:Number.POSITIVE_INFINITY,maxFiles:1,allowDrop:!0,preventDocumentDrop:!0,defaultAcceptedFiles:[],...e,translations:{dropzone:"dropzone",itemPreview:t=>`preview of ${t.name}`,deleteFile:t=>`delete file ${t.name}`,...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:i}){return{acceptedFiles:t(()=>({defaultValue:e("defaultAcceptedFiles"),value:e("acceptedFiles"),isEqual:(a,r)=>a.length===(r==null?void 0:r.length)&&a.every((l,o)=>oe(l,r[o])),hash(a){return a.map(r=>`${r.name}-${r.size}`).join(",")},onChange(a){var l,o;const r=i();(l=e("onFileAccept"))==null||l({files:a}),(o=e("onFileChange"))==null||o({acceptedFiles:a,rejectedFiles:r.get("rejectedFiles")})}})),rejectedFiles:t(()=>({defaultValue:[],isEqual:(a,r)=>a.length===(r==null?void 0:r.length)&&a.every((l,o)=>oe(l.file,r[o].file)),onChange(a){var l,o;const r=i();(l=e("onFileReject"))==null||l({files:a}),(o=e("onFileChange"))==null||o({acceptedFiles:r.get("acceptedFiles"),rejectedFiles:a})}})),transforming:t(()=>({defaultValue:!1}))}},computed:{acceptAttr:({prop:e})=>_i(e("accept")),multiple:({prop:e})=>e("maxFiles")>1},watch({track:e,context:t,action:i}){e([()=>t.hash("acceptedFiles")],()=>{i(["syncInputElement"])})},on:{"FILES.SET":{actions:["setFiles"]},"FILE.SELECT":{actions:["setEventFiles"]},"FILE.DELETE":{actions:["removeFile"]},"FILES.CLEAR":{actions:["clearFiles"]},"REJECTED_FILES.CLEAR":{actions:["clearRejectedFiles"]}},effects:["preventDocumentDrop"],states:{idle:{on:{OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.FOCUS":{target:"focused"},"DROPZONE.DRAG_OVER":{target:"dragging"}}},focused:{on:{"DROPZONE.BLUR":{target:"idle"},OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.DRAG_OVER":{target:"dragging"}}},dragging:{on:{"DROPZONE.DROP":{target:"idle",actions:["setEventFiles"]},"DROPZONE.DRAG_LEAVE":{target:"idle"}}}},implementations:{effects:{preventDocumentDrop({prop:e,scope:t}){if(!e("preventDocumentDrop")||!e("allowDrop")||e("disabled"))return;const i=t.getDoc(),a=l=>{l==null||l.preventDefault()},r=l=>{de(ji(t),se(l))||l.preventDefault()};return Wt(Ue(i,"dragover",a,!1),Ue(i,"drop",r,!1))}},actions:{syncInputElement({scope:e,context:t}){queueMicrotask(()=>{const i=he(e);if(!i)return;Oi(i,t.get("acceptedFiles"));const a=e.getWin();i.dispatchEvent(new a.Event("change",{bubbles:!0}))})},openFilePicker({scope:e}){Zt(()=>{var t;(t=he(e))==null||t.click()})},setFiles(e){const{computed:t,context:i,event:a}=e,{acceptedFiles:r,rejectedFiles:l}=Le(e,a.files);i.set("acceptedFiles",t("multiple")?r:r.length>0?[r[0]]:[]),i.set("rejectedFiles",l)},setEventFiles(e){const{computed:t,context:i,event:a,prop:r}=e,l=i.get("acceptedFiles"),o=i.get("rejectedFiles"),{acceptedFiles:p,rejectedFiles:c}=Le(e,a.files,l,o),g=x=>{if(t("multiple")){i.set("acceptedFiles",L=>[...L,...x]),i.set("rejectedFiles",c);return}if(x.length){i.set("acceptedFiles",[x[0]]),i.set("rejectedFiles",c);return}c.length&&(i.set("acceptedFiles",i.get("acceptedFiles")),i.set("rejectedFiles",c))},E=r("transformFiles");E?(i.set("transforming",!0),E(p).then(g).catch(x=>{Yt(`[zag-js/file-upload] error transforming files
${x}`)}).finally(()=>{i.set("transforming",!1)})):g(p)},removeFile({context:e,event:t}){if(t.itemType==="rejected"){const i=e.get("rejectedFiles").filter(a=>!oe(a.file,t.file));e.set("rejectedFiles",i)}else{const i=e.get("acceptedFiles").filter(a=>!oe(a,t.file));e.set("acceptedFiles",i)}},clearRejectedFiles({context:e}){e.set("rejectedFiles",[])},clearFiles({context:e}){e.set("acceptedFiles",[]),e.set("rejectedFiles",[])}}}});bt()(["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","dir","directory","disabled","getRootNode","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","transformFiles","translations","validate"]);bt()(["file","type"]);const wi=e=>{const t=u.useId(),{getRootNode:i}=Jt(),{dir:a,locale:r}=ei(),l=ht(),o={id:t,ids:{label:l==null?void 0:l.ids.label,hiddenInput:l==null?void 0:l.ids.control},dir:a,disabled:l==null?void 0:l.disabled,locale:r,required:l==null?void 0:l.required,invalid:l==null?void 0:l.invalid,getRootNode:i,...e},p=ti(Ni,o);return zi(p,ii)},zt=u.forwardRef((e,t)=>{const[i,a]=pe()(e,["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","directory","disabled","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","translations","transformFiles","validate"]),r=wi(i),l=D(r.getRootProps(),a);return m.jsx(pi,{value:r,children:m.jsx(S.div,{...l,ref:t})})});zt.displayName="FileUploadRoot";const Nt=u.forwardRef((e,t)=>{const i=O(),a=D(i.getTriggerProps(),e);return m.jsx(S.button,{...a,ref:t})});Nt.displayName="FileUploadTrigger";var h=(e=>(e.compact="compact",e.default="default",e))(h||{});const Ci=Object.freeze(Object.values(h)),wt=u.createContext(void 0);function Ct({children:e,locale:t}){return m.jsx(wt.Provider,{value:{locale:t},children:e})}function ki(){return Mt(wt)}Ct.__docgenInfo={description:"",methods:[],displayName:"FileUploadProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};var C=(e=>(e.invalidFile="invalid-file",e.maxFileReached="max-file-reached",e.sizeTooLarge="size-too-large",e.unknownError="unknown-error",e.wrongFormat="wrong-format",e))(C||{});Object.freeze(Object.values(C));function qi(e){return!!(e||e===0)&&e<100}function $i(e){return e.map(t=>{switch(t){case"FILE_INVALID":return C.invalidFile;case"FILE_INVALID_TYPE":return C.wrongFormat;case"FILE_TOO_LARGE":return C.sizeTooLarge;case"TOO_MANY_FILES":return C.maxFileReached;default:return C.unknownError}})}const j={"file-upload-dropzone":"_file-upload-dropzone_lx0rr_2","file-upload-dropzone__rules":"_file-upload-dropzone__rules_lx0rr_7","file-upload-dropzone__zone":"_file-upload-dropzone__zone_lx0rr_12","file-upload-dropzone__zone--compact":"_file-upload-dropzone__zone--compact_lx0rr_21","file-upload-dropzone__zone--dragging":"_file-upload-dropzone__zone--dragging_lx0rr_27","file-upload-dropzone__zone--disabled":"_file-upload-dropzone__zone--disabled_lx0rr_30","file-upload-dropzone__zone__icon":"_file-upload-dropzone__zone__icon_lx0rr_36","file-upload-dropzone__zone--invalid":"_file-upload-dropzone__zone--invalid_lx0rr_39","file-upload-dropzone__error":"_file-upload-dropzone__error_lx0rr_46"},_e=({acceptedFileLabel:e,dropzoneLabel:t,error:i,invalid:a,maxFile:r,maxFileLabel:l,maxSize:o,maxSizeLabel:p,triggerLabel:c,variant:g})=>{const E=u.useId(),{disabled:x,dragging:L,getFileSize:N}=O(),d=u.useMemo(()=>!!e||!!l||!!p,[e,l,p]),n=g===h.compact;return m.jsxs("div",{className:j["file-upload-dropzone"],children:[d&&m.jsxs("div",{className:j["file-upload-dropzone__rules"],id:E,children:[l&&typeof r=="number"&&r>=0&&m.jsxs("span",{children:[l," ",r]}),p&&typeof o=="number"&&o>=0&&m.jsxs("span",{children:[p," ",N({size:o})]}),e&&m.jsx("span",{children:e})]}),m.jsxs("div",{className:q(j["file-upload-dropzone__zone"],{[j["file-upload-dropzone__zone--compact"]]:n},{[j["file-upload-dropzone__zone--dragging"]]:L},{[j["file-upload-dropzone__zone--disabled"]]:x},{[j["file-upload-dropzone__zone--invalid"]]:a}),children:[!n&&m.jsx(ne,{className:j["file-upload-dropzone__zone__icon"],name:le.filePlus}),m.jsx("span",{children:t}),m.jsx(Nt,{asChild:!0,children:m.jsxs(xt,{"aria-describedby":d?E:"",size:Ut.md,variant:yt.ghost,children:[m.jsx(ne,{name:le.upload})," ",c]})})]}),!!i&&m.jsx("div",{className:j["file-upload-dropzone__error"],role:"alert",children:i})]})};_e.displayName="FileUploadDropzone";_e.__docgenInfo={description:"",methods:[],displayName:"FileUploadDropzone",props:{acceptedFileLabel:{required:!1,tsType:{name:"string"},description:""},dropzoneLabel:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},maxFile:{required:!1,tsType:{name:"number"},description:""},maxFileLabel:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},maxSizeLabel:{required:!1,tsType:{name:"string"},description:""},triggerLabel:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"literal",value:"`${FILE_UPLOAD_VARIANT}`"},description:""}}};const Vi={"file-upload":"_file-upload_1ozmv_2"},ve=u.forwardRef(({accept:e,acceptedFileLabel:t,children:i,className:a,disabled:r,dropzoneLabel:l="Drag & drop a file",error:o,id:p,invalid:c,locale:g,maxFile:E=1/0,maxFileLabel:x,maxSize:L,maxSizeLabel:N,name:d,onFileAccept:n,onFileReject:f,required:v,triggerLabel:$="Browse files",variant:w=h.default,...xe},kt)=>{const R=Gt(),qt=u.useCallback(({files:V})=>{f&&f({files:V.map(({errors:$t,file:Vt})=>({errors:$i($t),file:Vt}))})},[f]),ce=c||(R==null?void 0:R.invalid),ye=p||(R==null?void 0:R.id);return m.jsx(Ct,{locale:g,children:m.jsxs(zt,{accept:e,allowDrop:!0,className:q(Vi["file-upload"],a),"data-ods":"file-upload",directory:!1,disabled:r,ids:{hiddenInput:ye},invalid:ce,maxFiles:E,maxFileSize:L,onFileAccept:n,onFileReject:qt,name:d,ref:kt,required:v,...xe,children:[m.jsxs(Et,{disableClick:!0,onDragOver:V=>V.preventDefault(),onDrop:V=>V.preventDefault(),children:[m.jsx(_e,{acceptedFileLabel:t,dropzoneLabel:l,error:o,invalid:ce,maxFile:E,maxFileLabel:x,maxSize:L,maxSizeLabel:N,triggerLabel:$,variant:w}),i]}),m.jsx(Lt,{"aria-invalid":ce,"aria-describedby":xe["aria-describedby"]||(R==null?void 0:R.ariaDescribedBy),id:ye})]})})});ve.displayName="FileUpload";ve.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:"The accepted file types."},acceptedFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the accepted file types."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},dropzoneLabel:{required:!1,tsType:{name:"string"},description:"The dropzone label.",defaultValue:{value:"'Drag & drop a file'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"The global error message to display."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maxFile:{required:!1,tsType:{name:"number"},description:"The maximum number of files that can be selected.",defaultValue:{value:"Infinity",computed:!0}},maxFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum number of files that can be selected."},maxSize:{required:!1,tsType:{name:"number"},description:"The maximum size of selectable files."},maxSizeLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum size of selectable files."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onFileAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadAcceptDetail) => void",signature:{arguments:[{type:{name:"FileUploadAcceptDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been successfully added."},onFileReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadRejectDetail) => void",signature:{arguments:[{type:{name:"FileUploadRejectDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been rejected."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},triggerLabel:{required:!1,tsType:{name:"string"},description:"Upload button label.",defaultValue:{value:"'Browse files'",computed:!1}},variant:{required:!1,tsType:{name:"literal",value:"`${FILE_UPLOAD_VARIANT}`"},description:"The variant preset to use.",defaultValue:{value:"FILE_UPLOAD_VARIANT.default",computed:!0}}},composes:["ComponentPropsWithRef"]};var k=(e=>(e.cancelButton="fileUpload.file.cancel.button",e.deleteButton="fileUpload.file.delete.button",e.progressBar="fileUpload.file.progressBar",e))(k||{});const Gi={"fileUpload.file.cancel.button":{[F.de]:"Abbrechen",[F.en]:"Cancel",[F.es]:"Cancelar",[F.fr]:"Annuler",[F.it]:"Annulla",[F.nl]:"Annuleren",[F.pl]:"Anuluj",[F.pt]:"Cancelar"},"fileUpload.file.delete.button":{[F.de]:"Löschen",[F.en]:"Delete",[F.es]:"Eliminar",[F.fr]:"Supprimer",[F.it]:"Elimina",[F.nl]:"Verwijderen",[F.pl]:"Usuń",[F.pt]:"Eliminar"},"fileUpload.file.progressBar":{[F.de]:"Hochladen",[F.en]:"Uploading",[F.es]:"Cargando",[F.fr]:"Chargement",[F.it]:"Caricamento in Corso",[F.nl]:"Uploaden",[F.pl]:"Ładowanie",[F.pt]:"A carregar"}},T={"file-upload-item":"_file-upload-item_13hnu_6","file-upload-item__delete":"_file-upload-item__delete_13hnu_22","file-upload-item__icon":"_file-upload-item__icon_13hnu_28","file-upload-item__icon--error":"_file-upload-item__icon--error_13hnu_28","file-upload-item__info":"_file-upload-item__info_13hnu_38","file-upload-item__info__name":"_file-upload-item__info__name_13hnu_44","file-upload-item__info__name--error":"_file-upload-item__info__name--error_13hnu_49","file-upload-item__info__size":"_file-upload-item__info__size_13hnu_52","file-upload-item__error":"_file-upload-item__error_13hnu_57"},y=u.forwardRef(({className:e,error:t,file:i,i18n:a,progress:r,...l},o)=>{const{locale:p}=ki(),{translate:c}=ri(Gi,p,a),g=qi(r);return m.jsxs(It,{className:q(T["file-upload-item"],e),"data-ods":"file-upload-item",file:i,ref:o,...l,children:[g?m.jsx("span",{role:"status",children:m.jsx(li,{"aria-label":c(k.progressBar),size:oi.sm})}):m.jsx(ne,{className:q(T["file-upload-item__icon"],{[T["file-upload-item__icon--error"]]:!!t}),name:t?le.circleXmark:le.file}),m.jsxs("div",{className:T["file-upload-item__info"],children:[m.jsx(Pt,{className:q(T["file-upload-item__info__name"],{[T["file-upload-item__info__name--error"]]:!!t})}),g?m.jsxs("span",{className:T["file-upload-item__info__size"],children:[r,"%"]}):m.jsx(Rt,{className:T["file-upload-item__info__size"]})]}),m.jsx(At,{asChild:!0,children:m.jsx(xt,{"aria-label":c(g?k.cancelButton:k.deleteButton),className:T["file-upload-item__delete"],size:Ut.xs,variant:yt.ghost,children:m.jsx(ne,{name:le.xmark})})}),!!t&&m.jsx("span",{className:T["file-upload-item__error"],role:"alert",children:t})]})});y.displayName="FileUploadItem";y.__docgenInfo={description:"",methods:[],displayName:"FileUploadItem",props:{error:{required:!1,tsType:{name:"string"},description:"The file error message to display."},file:{required:!0,tsType:{name:"File"},description:"The current File object."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"FILE_UPLOAD_I18N"},{name:"string"}],raw:"Record<FILE_UPLOAD_I18N, string>"}],raw:"Partial<Record<FILE_UPLOAD_I18N, string>>"},description:"Internal translations override."},progress:{required:!1,tsType:{name:"number"},description:"The file upload progress."},uploadSuccessLabel:{required:!1,tsType:{name:"string"},description:`@deprecated
The label displayed after a successful upload.
DEPRECATED: Latest design change removed the upload success label in favor of a visual icon update.`}},composes:["ComponentPropsWithRef"]};const Mi={"file-upload-list":"_file-upload-list_tgdo3_2"},_=u.forwardRef(({children:e,className:t,...i},a)=>m.jsx(Tt,{className:q(Mi["file-upload-list"],t),"data-ods":"file-upload-list",ref:a,...i,children:e}));_.displayName="FileUploadList";_.__docgenInfo={description:"",methods:[],displayName:"FileUploadList",composes:["ComponentPropsWithRef"]};const U=Object.assign(ve,{Item:y,List:_}),Bi={argTypes:ni(["accept","locale","name","onFileAccept","onFileReject","required"]),component:U,subcomponents:{FileUploadItem:y,FileUploadList:_},title:"React Components/File Upload"},M={render:e=>{const[t,i]=u.useState(""),[a,r]=u.useState([]);function l({files:p}){r(p),i("")}function o({files:p}){i(p.length?"File(s) rejected":"")}return s.createElement(U,{...e,error:e.error||t,onFileAccept:l,onFileReject:o},s.createElement(_,null,a.map((p,c)=>s.createElement(y,{file:p,key:c}))))},argTypes:si({acceptedFileLabel:{table:{category:A.general},control:"text"},disabled:{table:{category:A.general},control:"boolean"},dropzoneLabel:{table:{category:A.general},control:"text"},error:{table:{category:A.general},control:"text"},invalid:{table:{category:A.general},control:"boolean"},maxFile:{table:{category:A.general},control:"number"},maxFileLabel:{table:{category:A.general},control:"text"},maxSize:{table:{category:A.general},control:"number"},maxSizeLabel:{table:{category:A.general},control:"text"},triggerLabel:{table:{category:A.general},control:"text"},variant:{table:{category:A.design,type:{summary:"FILE_UPLOAD_VARIANT"}},control:{type:"select"},options:Ci}})},B={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"File(s) not of the expected format":"")}return s.createElement(U,{accept:"image/png",acceptedFileLabel:"Png files only",error:e,onFileAccept:r,onFileReject:l,variant:h.compact},s.createElement(_,null,i.map((o,p)=>s.createElement(y,{file:o,key:p}))))}},Y={globals:{imports:`import { FILE_UPLOAD_I18N, FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return s.createElement(U,{onFileAccept:({files:i})=>t(i),variant:h.compact},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,i18n:{[k.cancelButton]:`Cancel uploading ${i.name}`,[k.deleteButton]:`Remove ${i.name}`,[k.progressBar]:`Uploading ${i.name}`},key:a}))))}},Z={tags:["!dev"],render:({})=>{const[e,t]=u.useState([new File(["foo"],"foo.txt",{type:"text/plain"}),new File(["dummy"],"dummy.txt",{type:"text/plain"})]);return s.createElement(U,{onFileAccept:({files:i})=>t(i),variant:h.compact},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a}))))}},W={globals:{imports:`import { FILE_UPLOAD_VARIANT, FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return s.createElement(U,{onFileAccept:({files:i})=>t(i),variant:h.compact},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a}))))}},H={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return s.createElement(U,{acceptedFileLabel:"Formats acceptés : images",dropzoneLabel:"Glisser-déposer des fichiers",maxFile:3,maxFileLabel:"Nombre maximal de fichiers :",maxSize:524288e3,maxSizeLabel:"Taille de fichier max :",onFileAccept:({files:i})=>t(i),triggerLabel:"Parcourir les fichiers",variant:h.compact},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a,progress:100,uploadSuccessLabel:"Fichier uploadé"}))))}},K={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return s.createElement(U,{onFileAccept:({files:i})=>t(i)},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a}))))}},X={globals:{imports:"import { FileUpload, FileUploadList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>s.createElement(U,{disabled:!0,variant:h.compact},s.createElement(_,null))},Q={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"Too many files":"")}return s.createElement(U,{error:e,maxFile:3,maxFileLabel:"Maximum file allowed:",onFileAccept:r,onFileReject:l,variant:h.compact},s.createElement(_,null,i.map((o,p)=>s.createElement(y,{file:o,key:p}))))}},J={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"File(s) too large":"")}return s.createElement(U,{error:e,maxSize:1e6,maxSizeLabel:"No file larger than:",onFileAccept:r,onFileReject:l,variant:h.compact},s.createElement(_,null,i.map((o,p)=>s.createElement(y,{file:o,key:p}))))}},ee={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[e,t]=u.useState([]);return s.createElement(U,{onFileAccept:({files:i})=>t(i),variant:h.compact},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a}))))}},te={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useEffect, useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);u.useEffect(()=>{e.forEach(a=>{a.progress||i(a)})},[e]);function i(a){const r=setInterval(()=>{t(l=>l.map(o=>(o.name===a.name&&(o.progress=(o.progress||0)+Math.floor(Math.random()*10+1),o.progress>=100&&clearInterval(r)),o)))},100)}return s.createElement(U,{onFileAccept:({files:a})=>t(a),variant:h.compact},s.createElement(_,null,e.map((a,r)=>s.createElement(y,{error:a.error,file:a,key:r,progress:a.progress}))))}},ie={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return s.createElement(_t,null,s.createElement(vt,null,"Files:"),s.createElement(U,{onFileAccept:({files:i})=>t(i),variant:h.compact},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a})))))}},ae={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[e,t]=u.useState([]);return s.createElement(_t,null,s.createElement(vt,null,"Files:"),s.createElement(U,{onFileAccept:({files:i})=>t(i),variant:h.compact},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a})))))}},re={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>{const[e,t]=u.useState([]);return s.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},s.createElement(U,{onFileAccept:({files:i})=>t(i)},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a})))),s.createElement(U,{disabled:!0},s.createElement(_,null)),s.createElement(U,{invalid:!0,onFileAccept:({files:i})=>t(i)},s.createElement(_,null,e.map((i,a)=>s.createElement(y,{file:i,key:a})))))}};var Ie,Ae,Te;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Te=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Pe,Re,je;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(je=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var De,Se,Oe;Y.parameters={...Y.parameters,docs:{...(De=Y.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Oe=(Se=Y.parameters)==null?void 0:Se.docs)==null?void 0:Oe.source}}};var ze,Ne,we;Z.parameters={...Z.parameters,docs:{...(ze=Z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => {
    const [files, setFiles] = useState<File[]>([new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    }), new File(['dummy'], 'dummy.txt', {
      type: 'text/plain'
    })]);
    return <FileUpload onFileAccept={({
      files
    }) => setFiles(files)} variant={FILE_UPLOAD_VARIANT.compact}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(we=(Ne=Z.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Ce,ke,qe;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(qe=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var $e,Ve,Ge;H.parameters={...H.parameters,docs:{...($e=H.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Me,Be,Ye;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ye=(Be=K.parameters)==null?void 0:Be.docs)==null?void 0:Ye.source}}};var Ze,We,He;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FileUpload disabled variant={FILE_UPLOAD_VARIANT.compact}>
      <FileUploadList />
    </FileUpload>
}`,...(He=(We=X.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ke,Xe,Qe;Q.parameters={...Q.parameters,docs:{...(Ke=Q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Qe=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var Je,et,tt;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var it,at,rt;ee.parameters={...ee.parameters,docs:{...(it=ee.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(rt=(at=ee.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var lt,ot,nt;te.parameters={...te.parameters,docs:{...(lt=te.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(nt=(ot=te.parameters)==null?void 0:ot.docs)==null?void 0:nt.source}}};var st,pt,ct;ie.parameters={...ie.parameters,docs:{...(st=ie.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(pt=ie.parameters)==null?void 0:pt.docs)==null?void 0:ct.source}}};var dt,mt,ut;ae.parameters={...ae.parameters,docs:{...(dt=ae.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(mt=ae.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var ft,Ft,gt;re.parameters={...re.parameters,docs:{...(ft=re.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(gt=(Ft=re.parameters)==null?void 0:Ft.docs)==null?void 0:gt.source}}};const Yi=["Demo","Accept","AccessibilityFileButton","AnatomyTech","Compact","CustomLabels","Default","Disabled","MaxFile","MaxSize","Overview","Upload","InFormField","AccessibilityFormField","ThemeGenerator"],na=Object.freeze(Object.defineProperty({__proto__:null,Accept:B,AccessibilityFileButton:Y,AccessibilityFormField:ae,AnatomyTech:Z,Compact:W,CustomLabels:H,Default:K,Demo:M,Disabled:X,InFormField:ie,MaxFile:Q,MaxSize:J,Overview:ee,ThemeGenerator:re,Upload:te,__namedExportsOrder:Yi,default:Bi},Symbol.toStringTag,{value:"Module"}));export{ae as A,W as C,K as D,na as F,ie as I,Q as M,ee as O,te as U,Y as a,Z as b,X as c,H as d,B as e,J as f};
