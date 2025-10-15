import{u as wt,F as ot,a as st}from"./FormFieldLabel-DW-nAxje.js";import{r as u,e as m}from"./index-jIWwRBLr.js";import{j as d}from"./jsx-runtime-Cfl8ynUo.js";import{c as ee}from"./index-CqY9YpN0.js";import{B as nt,d as pt,c as dt}from"./Button-Tqe-VRSF.js";import{D as Dt}from"./Divider-Dh8-cuUJ.js";import{I as ae,a as re}from"./icon-name-C581wThh.js";import{c as me,a as oe,T as P,U as R,P as y,Q as Ot,aA as zt,s as ne,aV as Nt,d as le,C as ct,z as Ct,w as kt,r as qt,n as $t,l as _e,g as Gt,u as Mt,R as Bt,D as Vt,S as Yt}from"./use-locale-context-BIV2aQtl.js";import{f as Wt}from"./index-CPOqegBX.js";import{u as mt}from"./use-field-context-xoqKb8Fu.js";import{L as g,u as Zt}from"./useI18n-C0NLVYPv.js";import{P as Ht}from"./ProgressBar-DSRyE-jh.js";import{e as Kt,o as Qt,C as I}from"./controls-BtiQQn1l.js";import{s as A}from"./source-CPEZJ6oD.js";const[Xt,j]=me({name:"FileUploadContext",hookName:"useFileUploadContext",providerName:"<FileUploadProvider />"}),ut=u.forwardRef((e,t)=>{const[i,a]=oe()(e,["disableClick"]),r=j(),l=P(r.getDropzoneProps(i),a);return d.jsx(R.div,{...l,ref:t})});ut.displayName="FileUploadDropzone";const ft=u.forwardRef((e,t)=>{const i=j(),a=P(i.getHiddenInputProps(),e),r=mt();return d.jsx(R.input,{"aria-describedby":r==null?void 0:r.ariaDescribedby,...a,ref:t})});ft.displayName="FileUploadHiddenInput";const[Jt,ei]=me({name:"FileUploadItemGroupPropsContext",hookName:"useFileUploadItemGroupPropsContext",providerName:"<FileUploadItemGroupPropsProvider />"}),[ti,ue]=me({name:"FileUploadItemPropsContext",hookName:"useFileUploadItemPropsContext",providerName:"<FileUploadItemPropsProvider />"}),gt=u.forwardRef((e,t)=>{const[i,a]=oe()(e,["file"]),r=j(),l=ei(),o={...i,type:l.type},p=P(r.getItemProps(o),a);return d.jsx(ti,{value:o,children:d.jsx(R.li,{...p,ref:t})})});gt.displayName="FileUploadItem";const Ft=u.forwardRef((e,t)=>{const i=j(),a=ue(),r=P(i.getItemDeleteTriggerProps(a),e);return d.jsx(R.button,{...r,ref:t})});Ft.displayName="FileUploadItemDeleteTrigger";const _t=u.forwardRef((e,t)=>{const[i,a]=oe()(e,["type"]),r=j(),l=P(r.getItemGroupProps(i),a);return d.jsx(Jt,{value:i,children:d.jsx(R.ul,{...l,ref:t})})});_t.displayName="FileUploadItemGroup";const xt=u.forwardRef((e,t)=>{const{children:i,...a}=e,r=j(),l=ue(),o=P(r.getItemNameProps(l),a);return d.jsx(R.div,{...o,ref:t,children:i||l.file.name})});xt.displayName="FileUploadItemName";const yt=u.forwardRef((e,t)=>{const{children:i,...a}=e,r=j(),l=ue(),o=P(r.getItemSizeTextProps(l),a);return d.jsx(R.div,{...o,ref:t,children:i||r.getFileSize(l.file)})});yt.displayName="FileUploadItemSizeText";var ii=e=>typeof e.getAsEntry=="function"?e.getAsEntry():typeof e.webkitGetAsEntry=="function"?e.webkitGetAsEntry():null,bt=e=>e.isDirectory,pe=e=>e.isFile,de=(e,t)=>(Object.defineProperty(e,"relativePath",{value:t?`${t}/${e.name}`:e.name}),e),ai=(e,t)=>Promise.all(Array.from(e).filter(i=>i.kind==="file").map(i=>{const a=ii(i);if(!a)return null;if(bt(a)&&t)return vt(a.createReader(),`${a.name}`);if(pe(a)&&typeof i.getAsFile=="function"){const r=i.getAsFile();return Promise.resolve(r?de(r,""):null)}if(pe(a))return new Promise(r=>{a.file(l=>{r(de(l,""))})})}).filter(i=>i)),vt=(e,t="")=>new Promise(i=>{const a=[],r=()=>{e.readEntries(l=>{if(l.length===0){i(Promise.all(a).then(p=>p.flat()));return}const o=l.map(p=>{if(!p)return null;if(bt(p))return vt(p.createReader(),`${t}${p.name}`);if(pe(p))return new Promise(n=>{p.file(F=>{n(de(F,t))})})}).filter(p=>p);a.push(Promise.all(o)),r()})};r()});function ri(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function li(e){return/^.*\.[\w]+$/.test(e)}var xe=e=>ri(e)||li(e);function oi(e){if(e!=null)return typeof e=="string"?e:Array.isArray(e)?e.filter(xe).join(","):Object.entries(e).reduce((t,[i,a])=>[...t,i,...a],[]).filter(xe).join(",")}var te=(e,t)=>e.name===t.name&&e.size===t.size&&e.type===t.type,q=e=>e!=null;function si(e,t,i){if(q(e.size))if(q(t)&&q(i)){if(e.size>i)return[!1,"FILE_TOO_LARGE"];if(e.size<t)return[!1,"FILE_TOO_SMALL"]}else{if(q(t)&&e.size<t)return[!1,"FILE_TOO_SMALL"];if(q(i)&&e.size>i)return[!1,"FILE_TOO_LARGE"]}return[!0,null]}var ni="3g2_video/3gpp2[3gp,3gpp_video/3gpp[3mf_model/3mf[7z_application/x-7z-compressed[aac_audio/aac[ac_application/pkix-attr-cert[adp_audio/adpcm[adts_audio/aac[ai_application/postscript[aml_application/automationml-aml+xml[amlx_application/automationml-amlx+zip[amr_audio/amr[apk_application/vnd.android.package-archive[apng_image/apng[appcache,manifest_text/cache-manifest[appinstaller_application/appinstaller[appx_application/appx[appxbundle_application/appxbundle[asc_application/pgp-keys[atom_application/atom+xml[atomcat_application/atomcat+xml[atomdeleted_application/atomdeleted+xml[atomsvc_application/atomsvc+xml[au,snd_audio/basic[avi_video/x-msvideo[avci_image/avci[avcs_image/avcs[avif_image/avif[aw_application/applixware[bdoc_application/bdoc[bin,bpk,buffer,deb,deploy,dist,distz,dll,dmg,dms,dump,elc,exe,img,iso,lrf,mar,msi,msm,msp,pkg,so_application/octet-stream[bmp,dib_image/bmp[btf,btif_image/prs.btif[bz2_application/x-bzip2[c_text/x-c[ccxml_application/ccxml+xml[cdfx_application/cdfx+xml[cdmia_application/cdmi-capability[cdmic_application/cdmi-container[cdmid_application/cdmi-domain[cdmio_application/cdmi-object[cdmiq_application/cdmi-queue[cer_application/pkix-cert[cgm_image/cgm[cjs_application/node[class_application/java-vm[coffee,litcoffee_text/coffeescript[conf,def,in,ini,list,log,text,txt_text/plain[cpp,cxx,cc_text/x-c++src[cpl_application/cpl+xml[cpt_application/mac-compactpro[crl_application/pkix-crl[css_text/css[csv_text/csv[cu_application/cu-seeme[cwl_application/cwl[cww_application/prs.cww[davmount_application/davmount+xml[dbk_application/docbook+xml[doc_application/msword[docx_application/vnd.openxmlformats-officedocument.wordprocessingml.document[dsc_text/prs.lines.tag[dssc_application/dssc+der[dtd_application/xml-dtd[dwd_application/atsc-dwd+xml[ear,jar,war_application/java-archive[ecma_application/ecmascript[emf_image/emf[eml,mime_message/rfc822[emma_application/emma+xml[emotionml_application/emotionml+xml[eot_application/vnd.ms-fontobject[eps,ps_application/postscript[epub_application/epub+zip[exi_application/exi[exp_application/express[exr_image/aces[ez_application/andrew-inset[fdf_application/fdf[fdt_application/fdt+xml[fits_image/fits[flac_audio/flac[flv_video/x-flv[g3_image/g3fax[geojson_application/geo+json[gif_image/gif[glb_model/gltf-binary[gltf_model/gltf+json[gml_application/gml+xml[go_text/x-go[gpx_application/gpx+xml[gz_application/gzip[h_text/x-h[h261_video/h261[h263_video/h263[h264_video/h264[heic_image/heic[heics_image/heic-sequence[heif_image/heif[heifs_image/heif-sequence[htm,html,shtml_text/html[ico_image/x-icon[icns_image/x-icns[ics,ifb_text/calendar[iges,igs_model/iges[ink,inkml_application/inkml+xml[ipa_application/octet-stream[java_text/x-java-source[jp2,jpg2_image/jp2[jpeg,jpe,jpg_image/jpeg[jpf,jpx_image/jpx[jpm,jpgm_image/jpm[jpgv_video/jpeg[jph_image/jph[js,mjs_text/javascript[json_application/json[json5_application/json5[jsonld_application/ld+json[jsx_text/jsx[jxl_image/jxl[jxr_image/jxr[ktx_image/ktx[ktx2_image/ktx2[less_text/less[m1v,m2v,mpe,mpeg,mpg_video/mpeg[m4a_audio/mp4[m4v_video/x-m4v[md,markdown_text/markdown[mid,midi,kar,rmi_audio/midi[mkv_video/x-matroska[mp2,mp2a,mp3,mpga,m3a,m2a_audio/mpeg[mp4,mp4v,mpg4_video/mp4[mp4a_audio/mp4[mp4s,m4p_application/mp4[odp_application/vnd.oasis.opendocument.presentation[oda_application/oda[ods_application/vnd.oasis.opendocument.spreadsheet[odt_application/vnd.oasis.opendocument.text[oga,ogg,opus,spx_audio/ogg[ogv_video/ogg[ogx_application/ogg[otf_font/otf[p12,pfx_application/x-pkcs12[pdf_application/pdf[pem_application/x-pem-file[php_text/x-php[png_image/png[ppt_application/vnd.ms-powerpoint[pptx_application/vnd.openxmlformats-officedocument.presentationml.presentation[pskcxml_application/pskc+xml[psd_image/vnd.adobe.photoshop[py_text/x-python[qt,mov_video/quicktime[rar_application/vnd.rar[rdf_application/rdf+xml[rtf_text/rtf[sass_text/x-sass[scss_text/x-scss[sgm,sgml_text/sgml[sh_application/x-sh[svg,svgz_image/svg+xml[swf_application/x-shockwave-flash[tar_application/x-tar[tif,tiff_image/tiff[toml_application/toml[ts_video/mp2t[tsx_text/tsx[tsv_text/tab-separated-values[ttc_font/collection[ttf_font/ttf[vtt_text/vtt[wasm_application/wasm[wav_audio/wav[weba_audio/webm[webm_video/webm[webmanifest_application/manifest+json[webp_image/webp[wma_audio/x-ms-wma[wmv_video/x-ms-wmv[woff_font/woff[woff2_font/woff2[xls_application/vnd.ms-excel[xlsx_application/vnd.openxmlformats-officedocument.spreadsheetml.sheet[xml_application/xml[xz_application/x-xz[yaml,yml_text/yaml[zip_application/zip",pi=new Map(ni.split("[").flatMap(e=>{const[t,i]=e.split("_");return t.split(",").map(a=>[a,i])}));function di(e){const t=e.split(".").pop();return t&&pi.get(t)||null}function ci(e,t){if(e&&t){const i=Array.isArray(t)?t:typeof t=="string"?t.split(","):[];if(i.length===0)return!0;const a=e.name||"",r=(e.type||di(a)||"").toLowerCase(),l=r.replace(/\/.*$/,"");return i.some(o=>{const p=o.trim().toLowerCase();return p.charAt(0)==="."?a.toLowerCase().endsWith(p):p.endsWith("/*")?l===p.replace(/\/.*$/,""):r===p})}return!0}function mi(e,t){const i=e.type==="application/x-moz-file"||ci(e,t);return[i,i?null:"FILE_INVALID_TYPE"]}var ui=Ot("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger"),L=ui.build(),ht=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`file:${e.id}`},Ut=e=>{var t;return((t=e.ids)==null?void 0:t.dropzone)??`file:${e.id}:dropzone`},ce=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`file:${e.id}:input`},fi=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`file:${e.id}:trigger`},gi=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`file:${e.id}:label`},Fi=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.item)==null?void 0:a.call(i,t))??`file:${e.id}:item:${t}`},_i=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemName)==null?void 0:a.call(i,t))??`file:${e.id}:item-name:${t}`},xi=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemSizeText)==null?void 0:a.call(i,t))??`file:${e.id}:item-size:${t}`},yi=(e,t)=>{var i,a;return((a=(i=e.ids)==null?void 0:i.itemPreview)==null?void 0:a.call(i,t))??`file:${e.id}:item-preview:${t}`},bi=e=>e.getById(ht(e)),ye=e=>e.getById(ce(e)),vi=e=>e.getById(Ut(e));function be(e){const t=le(e);return e.dataTransfer?e.dataTransfer.types.some(i=>i==="Files"||i==="application/x-moz-file"):!!t&&"files"in t}function hi(e,t,i){const{prop:a,computed:r}=e;return!r("multiple")&&t>1?!1:!r("multiple")&&t+i.length===2?!0:!(t+i.length>a("maxFiles"))}function ve(e,t,i=[],a=[]){const{prop:r,computed:l}=e,o=[],p=[],n={acceptedFiles:i,rejectedFiles:a};return t.forEach(F=>{var f;const[U,x]=mi(F,l("acceptAttr")),[E,S]=si(F,r("minFileSize"),r("maxFileSize")),c=(f=r("validate"))==null?void 0:f(F,n),s=c?c.length===0:!0;if(U&&E&&s)o.push(F);else{const _=[x,S];s||_.push(...c??[]),p.push({file:F,errors:_.filter(Boolean)})}}),hi(e,o.length,i)||(o.forEach(F=>{p.push({file:F,errors:["TOO_MANY_FILES"]})}),o.splice(0)),{acceptedFiles:o,rejectedFiles:p}}function Ui(e,t){const i=Gt(e);try{if("DataTransfer"in i){const a=new i.DataTransfer;t.forEach(r=>{a.items.add(r)}),e.files=a.files}}catch{}}var D="accepted";function Ei(e,t){const{state:i,send:a,prop:r,computed:l,scope:o,context:p}=e,n=!!r("disabled"),F=!!r("required"),U=r("allowDrop"),x=r("translations"),E=i.matches("dragging"),S=i.matches("focused")&&!n;return{dragging:E,focused:S,disabled:!!n,transforming:p.get("transforming"),openFilePicker(){n||a({type:"OPEN"})},deleteFile(c,s=D){a({type:"FILE.DELETE",file:c,itemType:s})},acceptedFiles:p.get("acceptedFiles"),rejectedFiles:p.get("rejectedFiles"),setFiles(c){a({type:"FILES.SET",files:c,count:c.length})},clearRejectedFiles(){a({type:"REJECTED_FILES.CLEAR"})},clearFiles(){a({type:"FILES.CLEAR"})},getFileSize(c){return Wt(c.size,r("locale"))},createFileUrl(c,s){const f=o.getWin(),_=f.URL.createObjectURL(c);return s(_),()=>f.URL.revokeObjectURL(_)},setClipboardFiles(c){if(n)return!1;const f=Array.from((c==null?void 0:c.items)??[]).reduce((_,C)=>{if(C.kind!=="file")return _;const w=C.getAsFile();return w?[..._,w]:_},[]);return f.length?(a({type:"FILES.SET",files:f}),!0):!1},getRootProps(){return t.element({...L.root.attrs,dir:r("dir"),id:ht(o),"data-disabled":y(n),"data-dragging":y(E)})},getDropzoneProps(c={}){return t.element({...L.dropzone.attrs,dir:r("dir"),id:Ut(o),tabIndex:n||c.disableClick?void 0:0,role:c.disableClick?"application":"button","aria-label":x.dropzone,"aria-disabled":n,"data-invalid":y(r("invalid")),"data-disabled":y(n),"data-dragging":y(E),onKeyDown(s){n||s.defaultPrevented||s.currentTarget===le(s)&&(c.disableClick||s.key!=="Enter"&&s.key!==" "||a({type:"DROPZONE.CLICK",src:"keydown"}))},onClick(s){n||s.defaultPrevented||c.disableClick||s.currentTarget===le(s)&&(s.currentTarget.localName==="label"&&s.preventDefault(),a({type:"DROPZONE.CLICK"}))},onDragOver(s){if(n||!U)return;s.preventDefault(),s.stopPropagation();try{s.dataTransfer.dropEffect="copy"}catch{}if(!be(s))return;const _=s.dataTransfer.items.length;a({type:"DROPZONE.DRAG_OVER",count:_})},onDragLeave(s){n||U&&(ne(s.currentTarget,s.relatedTarget)||a({type:"DROPZONE.DRAG_LEAVE"}))},onDrop(s){if(n)return;U&&(s.preventDefault(),s.stopPropagation());const f=be(s);n||!f||ai(s.dataTransfer.items,r("directory")).then(_=>{a({type:"DROPZONE.DROP",files:Nt(_)})})},onFocus(){n||a({type:"DROPZONE.FOCUS"})},onBlur(){n||a({type:"DROPZONE.BLUR"})}})},getTriggerProps(){return t.button({...L.trigger.attrs,dir:r("dir"),id:fi(o),disabled:n,"data-disabled":y(n),"data-invalid":y(r("invalid")),type:"button",onClick(c){n||(ne(vi(o),c.currentTarget)&&c.stopPropagation(),a({type:"OPEN"}))}})},getHiddenInputProps(){return t.input({id:ce(o),tabIndex:-1,disabled:n,type:"file",required:r("required"),capture:r("capture"),name:r("name"),accept:l("acceptAttr"),webkitdirectory:r("directory")?"":void 0,multiple:l("multiple")||r("maxFiles")>1,onClick(c){c.stopPropagation(),c.currentTarget.value=""},onInput(c){if(n)return;const{files:s}=c.currentTarget;a({type:"FILE.SELECT",files:s?Array.from(s):[]})},style:zt})},getItemGroupProps(c={}){const{type:s=D}=c;return t.element({...L.itemGroup.attrs,dir:r("dir"),"data-disabled":y(n),"data-type":s})},getItemProps(c){const{file:s,type:f=D}=c;return t.element({...L.item.attrs,dir:r("dir"),id:Fi(o,s.name),"data-disabled":y(n),"data-type":f})},getItemNameProps(c){const{file:s,type:f=D}=c;return t.element({...L.itemName.attrs,dir:r("dir"),id:_i(o,s.name),"data-disabled":y(n),"data-type":f})},getItemSizeTextProps(c){const{file:s,type:f=D}=c;return t.element({...L.itemSizeText.attrs,dir:r("dir"),id:xi(o,s.name),"data-disabled":y(n),"data-type":f})},getItemPreviewProps(c){const{file:s,type:f=D}=c;return t.element({...L.itemPreview.attrs,dir:r("dir"),id:yi(o,s.name),"data-disabled":y(n),"data-type":f})},getItemPreviewImageProps(c){var w;const{file:s,url:f,type:_=D}=c;if(!s.type.startsWith("image/"))throw new Error("Preview Image is only supported for image files");return t.img({...L.itemPreviewImage.attrs,alt:(w=x.itemPreview)==null?void 0:w.call(x,s),src:f,"data-disabled":y(n),"data-type":_})},getItemDeleteTriggerProps(c){var _;const{file:s,type:f=D}=c;return t.button({...L.itemDeleteTrigger.attrs,dir:r("dir"),type:"button",disabled:n,"data-disabled":y(n),"data-type":f,"aria-label":(_=x.deleteFile)==null?void 0:_.call(x,s),onClick(){n||a({type:"FILE.DELETE",file:s,itemType:f})}})},getLabelProps(){return t.label({...L.label.attrs,dir:r("dir"),id:gi(o),htmlFor:ce(o),"data-disabled":y(n),"data-required":y(F)})},getClearTriggerProps(){return t.button({...L.clearTrigger.attrs,dir:r("dir"),type:"button",disabled:n,hidden:p.get("acceptedFiles").length===0,"data-disabled":y(n),onClick(c){c.defaultPrevented||n||a({type:"FILES.CLEAR"})}})}}}var Li=Ct({props({props:e}){return{minFileSize:0,maxFileSize:Number.POSITIVE_INFINITY,maxFiles:1,allowDrop:!0,preventDocumentDrop:!0,defaultAcceptedFiles:[],...e,translations:{dropzone:"dropzone",itemPreview:t=>`preview of ${t.name}`,deleteFile:t=>`delete file ${t.name}`,...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:i}){return{acceptedFiles:t(()=>({defaultValue:e("defaultAcceptedFiles"),value:e("acceptedFiles"),isEqual:(a,r)=>a.length===(r==null?void 0:r.length)&&a.every((l,o)=>te(l,r[o])),hash(a){return a.map(r=>`${r.name}-${r.size}`).join(",")},onChange(a){var l,o;const r=i();(l=e("onFileAccept"))==null||l({files:a}),(o=e("onFileChange"))==null||o({acceptedFiles:a,rejectedFiles:r.get("rejectedFiles")})}})),rejectedFiles:t(()=>({defaultValue:[],isEqual:(a,r)=>a.length===(r==null?void 0:r.length)&&a.every((l,o)=>te(l.file,r[o].file)),onChange(a){var l,o;const r=i();(l=e("onFileReject"))==null||l({files:a}),(o=e("onFileChange"))==null||o({acceptedFiles:r.get("acceptedFiles"),rejectedFiles:a})}})),transforming:t(()=>({defaultValue:!1}))}},computed:{acceptAttr:({prop:e})=>oi(e("accept")),multiple:({prop:e})=>e("maxFiles")>1},watch({track:e,context:t,action:i}){e([()=>t.hash("acceptedFiles")],()=>{i(["syncInputElement"])})},on:{"FILES.SET":{actions:["setFiles"]},"FILE.SELECT":{actions:["setEventFiles"]},"FILE.DELETE":{actions:["removeFile"]},"FILES.CLEAR":{actions:["clearFiles"]},"REJECTED_FILES.CLEAR":{actions:["clearRejectedFiles"]}},effects:["preventDocumentDrop"],states:{idle:{on:{OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.FOCUS":{target:"focused"},"DROPZONE.DRAG_OVER":{target:"dragging"}}},focused:{on:{"DROPZONE.BLUR":{target:"idle"},OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.DRAG_OVER":{target:"dragging"}}},dragging:{on:{"DROPZONE.DROP":{target:"idle",actions:["setEventFiles"]},"DROPZONE.DRAG_LEAVE":{target:"idle"}}}},implementations:{effects:{preventDocumentDrop({prop:e,scope:t}){if(!e("preventDocumentDrop")||!e("allowDrop")||e("disabled"))return;const i=t.getDoc(),a=l=>{l==null||l.preventDefault()},r=l=>{ne(bi(t),le(l))||l.preventDefault()};return $t(_e(i,"dragover",a,!1),_e(i,"drop",r,!1))}},actions:{syncInputElement({scope:e,context:t}){queueMicrotask(()=>{const i=ye(e);if(!i)return;Ui(i,t.get("acceptedFiles"));const a=e.getWin();i.dispatchEvent(new a.Event("change",{bubbles:!0}))})},openFilePicker({scope:e}){qt(()=>{var t;(t=ye(e))==null||t.click()})},setFiles(e){const{computed:t,context:i,event:a}=e,{acceptedFiles:r,rejectedFiles:l}=ve(e,a.files);i.set("acceptedFiles",t("multiple")?r:r.length>0?[r[0]]:[]),i.set("rejectedFiles",l)},setEventFiles(e){const{computed:t,context:i,event:a,prop:r}=e,l=i.get("acceptedFiles"),o=i.get("rejectedFiles"),{acceptedFiles:p,rejectedFiles:n}=ve(e,a.files,l,o),F=x=>{if(t("multiple")){i.set("acceptedFiles",E=>[...E,...x]),i.set("rejectedFiles",n);return}if(x.length){i.set("acceptedFiles",[x[0]]),i.set("rejectedFiles",n);return}n.length&&(i.set("acceptedFiles",i.get("acceptedFiles")),i.set("rejectedFiles",n))},U=r("transformFiles");U?(i.set("transforming",!0),U(p).then(F).catch(x=>{kt(`[zag-js/file-upload] error transforming files
${x}`)}).finally(()=>{i.set("transforming",!1)})):F(p)},removeFile({context:e,event:t}){if(t.itemType==="rejected"){const i=e.get("rejectedFiles").filter(a=>!te(a.file,t.file));e.set("rejectedFiles",i)}else{const i=e.get("acceptedFiles").filter(a=>!te(a,t.file));e.set("acceptedFiles",i)}},clearRejectedFiles({context:e}){e.set("rejectedFiles",[])},clearFiles({context:e}){e.set("acceptedFiles",[]),e.set("rejectedFiles",[])}}}});ct()(["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","dir","directory","disabled","getRootNode","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","transformFiles","translations","validate"]);ct()(["file","type"]);const Ii=e=>{const t=u.useId(),{getRootNode:i}=Mt(),{dir:a,locale:r}=Bt(),l=mt(),o={id:t,ids:{label:l==null?void 0:l.ids.label,hiddenInput:l==null?void 0:l.ids.control},dir:a,disabled:l==null?void 0:l.disabled,locale:r,required:l==null?void 0:l.required,invalid:l==null?void 0:l.invalid,getRootNode:i,...e},p=Vt(Li,o);return Ei(p,Yt)},Et=u.forwardRef((e,t)=>{const[i,a]=oe()(e,["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","directory","disabled","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","translations","transformFiles","validate"]),r=Ii(i),l=P(r.getRootProps(),a);return d.jsx(Xt,{value:r,children:d.jsx(R.div,{...l,ref:t})})});Et.displayName="FileUploadRoot";const Lt=u.forwardRef((e,t)=>{const i=j(),a=P(i.getTriggerProps(),e);return d.jsx(R.button,{...a,ref:t})});Lt.displayName="FileUploadTrigger";const It=u.createContext({});function jt({children:e,locale:t}){return d.jsx(It.Provider,{value:{locale:t},children:e})}function ji(){return u.useContext(It)}jt.__docgenInfo={description:"",methods:[],displayName:"FileUploadProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["FileUploadContextType"]};var z=(e=>(e.invalidFile="invalid-file",e.maxFileReached="max-file-reached",e.sizeTooLarge="size-too-large",e.unknownError="unknown-error",e.wrongFormat="wrong-format",e))(z||{});Object.freeze(Object.values(z));function Tt(e){return!!(e||e===0)&&e<100}function Ti(e){return e.map(t=>{switch(t){case"FILE_INVALID":return z.invalidFile;case"FILE_INVALID_TYPE":return z.wrongFormat;case"FILE_TOO_LARGE":return z.sizeTooLarge;case"TOO_MANY_FILES":return z.maxFileReached;default:return z.unknownError}})}const O={"file-upload-dropzone":"_file-upload-dropzone_faoyu_21","file-upload-dropzone--disabled":"_file-upload-dropzone--disabled_faoyu_28","file-upload-dropzone__icon":"_file-upload-dropzone__icon_faoyu_28","file-upload-dropzone--dragging":"_file-upload-dropzone--dragging_faoyu_31","file-upload-dropzone--empty":"_file-upload-dropzone--empty_faoyu_34","file-upload-dropzone__rules":"_file-upload-dropzone__rules_faoyu_41","file-upload-dropzone__error":"_file-upload-dropzone__error_faoyu_47","file-upload-dropzone__error__divider":"_file-upload-dropzone__error__divider_faoyu_55"},fe=({acceptedFileLabel:e,dropzoneLabel:t,error:i,maxFile:a,maxFileLabel:r,maxSize:l,maxSizeLabel:o,triggerLabel:p})=>{const n=u.useId(),{acceptedFiles:F,disabled:U,dragging:x,getFileSize:E}=j(),S=u.useMemo(()=>!!e||!!r||!!o,[e,r,o]);return d.jsxs("div",{className:ee(O["file-upload-dropzone"],{[O["file-upload-dropzone--disabled"]]:U},{[O["file-upload-dropzone--dragging"]]:x},{[O["file-upload-dropzone--empty"]]:!F.length}),children:[d.jsx(ae,{className:O["file-upload-dropzone__icon"],name:re.filePlus}),d.jsx("span",{children:t}),S&&d.jsxs("div",{className:O["file-upload-dropzone__rules"],id:n,children:[r&&typeof a=="number"&&a>=0&&d.jsxs("span",{children:[r," ",a]}),o&&typeof l=="number"&&l>=0&&d.jsxs("span",{children:[o," ",E({size:l})]}),e&&d.jsx("span",{children:e})]}),d.jsx(Lt,{asChild:!0,children:d.jsx(nt,{"aria-describedby":S?n:"",size:dt.md,variant:pt.ghost,children:p})}),!!i&&d.jsxs("div",{className:O["file-upload-dropzone__error"],children:[d.jsx("span",{role:"alert",children:i}),d.jsx(Dt,{className:O["file-upload-dropzone__error__divider"]})]})]})};fe.displayName="FileUploadDropzone";fe.__docgenInfo={description:"",methods:[],displayName:"FileUploadDropzone",props:{acceptedFileLabel:{required:!1,tsType:{name:"string"},description:""},dropzoneLabel:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},maxFile:{required:!1,tsType:{name:"number"},description:""},maxFileLabel:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},maxSizeLabel:{required:!1,tsType:{name:"string"},description:""},triggerLabel:{required:!0,tsType:{name:"string"},description:""}}};const he={"file-upload":"_file-upload_138iw_2","file-upload--invalid":"_file-upload--invalid_138iw_16"},b=u.forwardRef(({accept:e,acceptedFileLabel:t,children:i,className:a,disabled:r,dropzoneLabel:l="Drag & drop a file",error:o,id:p,invalid:n,locale:F,maxFile:U=1/0,maxFileLabel:x,maxSize:E,maxSizeLabel:S,name:c,onFileAccept:s,onFileReject:f,required:_,triggerLabel:C="Browse files",...w},Pt)=>{const T=wt(),Rt=u.useCallback(({files:k})=>{f&&f({files:k.map(({errors:At,file:St})=>({errors:Ti(At),file:St}))})},[f]),se=n||(T==null?void 0:T.invalid),Fe=p||(T==null?void 0:T.id);return d.jsx(jt,{locale:F,children:d.jsxs(Et,{accept:e,allowDrop:!0,className:ee(he["file-upload"],{[he["file-upload--invalid"]]:se},a),"data-ods":"file-upload",directory:!1,disabled:r,ids:{hiddenInput:Fe},invalid:se,maxFiles:U,maxFileSize:E,onFileAccept:s,onFileReject:Rt,name:c,ref:Pt,required:_,...w,children:[d.jsxs(ut,{disableClick:!0,onDragOver:k=>k.preventDefault(),onDrop:k=>k.preventDefault(),children:[d.jsx(fe,{acceptedFileLabel:t,dropzoneLabel:l,error:o,maxFile:U,maxFileLabel:x,maxSize:E,maxSizeLabel:S,triggerLabel:C}),i]}),d.jsx(ft,{"aria-invalid":se,"aria-describedby":w["aria-describedby"]||(T==null?void 0:T.ariaDescribedBy),id:Fe})]})})});b.displayName="FileUpload";b.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:"The accepted file types."},acceptedFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the accepted file types."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},dropzoneLabel:{required:!1,tsType:{name:"string"},description:"The dropzone label.",defaultValue:{value:"'Drag & drop a file'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"The global error message to display."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},maxFile:{required:!1,tsType:{name:"number"},description:"The maximum number of files that can be selected.",defaultValue:{value:"Infinity",computed:!0}},maxFileLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum number of files that can be selected."},maxSize:{required:!1,tsType:{name:"number"},description:"The maximum size of selectable files."},maxSizeLabel:{required:!1,tsType:{name:"string"},description:"Label describing the maximum size of selectable files."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onFileAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadAcceptDetail) => void",signature:{arguments:[{type:{name:"FileUploadAcceptDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been successfully added."},onFileReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileUploadRejectDetail) => void",signature:{arguments:[{type:{name:"FileUploadRejectDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a some files have been rejected."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},triggerLabel:{required:!1,tsType:{name:"string"},description:"Upload button label.",defaultValue:{value:"'Browse files'",computed:!1}}},composes:["ComponentPropsWithRef"]};var N=(e=>(e.cancelButton="fileUpload.file.cancel.button",e.deleteButton="fileUpload.file.delete.button",e.progressBar="fileUpload.file.progressBar",e))(N||{});const Pi={"fileUpload.file.cancel.button":{[g.de]:"Abbrechen",[g.en]:"Cancel",[g.es]:"Cancelar",[g.fr]:"Annuler",[g.it]:"Annulla",[g.nl]:"Annuleren",[g.pl]:"Anuluj",[g.pt]:"Cancelar"},"fileUpload.file.delete.button":{[g.de]:"Löschen",[g.en]:"Delete",[g.es]:"Eliminar",[g.fr]:"Supprimer",[g.it]:"Elimina",[g.nl]:"Verwijderen",[g.pl]:"Usuń",[g.pt]:"Eliminar"},"fileUpload.file.progressBar":{[g.de]:"Hochladen",[g.en]:"Uploading",[g.es]:"Cargando",[g.fr]:"Chargement",[g.it]:"Caricamento in Corso",[g.nl]:"Uploaden",[g.pl]:"Ładowanie",[g.pt]:"A carregar"}},ie={"file-upload-item-status":"_file-upload-item-status_lthpx_21","file-upload-item-status__error":"_file-upload-item-status__error_lthpx_24","file-upload-item-status__progress":"_file-upload-item-status__progress_lthpx_28","file-upload-item-status__success":"_file-upload-item-status__success_lthpx_36"};function Ri(e,t,i,a){return t?d.jsx("span",{className:ie["file-upload-item-status__error"],children:t}):Tt(i)?d.jsxs("div",{className:ie["file-upload-item-status__progress"],children:[d.jsx(Ht,{"aria-label":a,value:i}),d.jsxs("span",{children:[i,"%"]})]}):i&&i>=100?d.jsxs("span",{className:ie["file-upload-item-status__success"],children:[d.jsx(ae,{name:re.check})," ",e]}):d.jsx(d.Fragment,{})}const ge=({className:e,error:t,progress:i,progressLabel:a,successLabel:r})=>d.jsx("div",{className:ee(ie["file-upload-item-status"],e),role:t?"error":"status",children:Ri(r,t,i,a)});ge.displayName="FileUploadItemStatus";ge.__docgenInfo={description:"",methods:[],displayName:"FileUploadItemStatus",props:{error:{required:!1,tsType:{name:"string"},description:""},progress:{required:!1,tsType:{name:"number"},description:""},progressLabel:{required:!1,tsType:{name:"string"},description:""},successLabel:{required:!0,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithoutRef"]};const $={"file-upload-item":"_file-upload-item_e3bwg_25","file-upload-item__icon":"_file-upload-item__icon_e3bwg_37","file-upload-item__name":"_file-upload-item__name_e3bwg_44","file-upload-item__size":"_file-upload-item__size_e3bwg_49","file-upload-item__status":"_file-upload-item__status_e3bwg_52"},h=u.forwardRef(({className:e,error:t,file:i,i18n:a,progress:r,uploadSuccessLabel:l="File uploaded",...o},p)=>{const{locale:n}=ji(),{translate:F}=Zt(Pi,n,a);return d.jsxs(gt,{className:ee($["file-upload-item"],e),"data-ods":"file-upload-item",file:i,ref:p,...o,children:[d.jsx(ae,{className:$["file-upload-item__icon"],name:re.file}),d.jsx(xt,{className:$["file-upload-item__name"]}),d.jsx(yt,{className:$["file-upload-item__size"]}),d.jsx(Ft,{asChild:!0,children:d.jsx(nt,{"aria-label":Tt(r)?F(N.cancelButton):F(N.deleteButton),size:dt.sm,variant:pt.ghost,children:d.jsx(ae,{name:re.xmark})})}),d.jsx(ge,{className:$["file-upload-item__status"],error:t,progress:r,progressLabel:F(N.progressBar),successLabel:l})]})});h.displayName="FileUploadItem";h.__docgenInfo={description:"",methods:[],displayName:"FileUploadItem",props:{error:{required:!1,tsType:{name:"string"},description:"The file error message to display."},file:{required:!0,tsType:{name:"File"},description:"The current File object."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"FILE_UPLOAD_I18N"},{name:"string"}],raw:"Record<FILE_UPLOAD_I18N, string>"}],raw:"Partial<Record<FILE_UPLOAD_I18N, string>>"},description:"Internal translations override."},progress:{required:!1,tsType:{name:"number"},description:"The file upload progress."},uploadSuccessLabel:{required:!1,tsType:{name:"string"},description:"The label displayed after a successful upload.",defaultValue:{value:"'File uploaded'",computed:!1}}},composes:["ComponentPropsWithRef"]};const Ue={"file-upload-list":"_file-upload-list_1b3bn_21","file-upload-list--not-empty":"_file-upload-list--not-empty_1b3bn_25"},v=u.forwardRef(({children:e,className:t,...i},a)=>{const{acceptedFiles:r}=j();return d.jsx(_t,{className:ee(Ue["file-upload-list"],{[Ue["file-upload-list--not-empty"]]:r.length>0},t),"data-ods":"file-upload-list",ref:a,...i,children:e})});v.displayName="FileUploadList";v.__docgenInfo={description:"",methods:[],displayName:"FileUploadList",composes:["ComponentPropsWithRef"]};const Ai={argTypes:Kt(["accept","locale","name","onFileAccept","onFileReject","required"]),component:b,subcomponents:{FileUploadItem:h,FileUploadList:v},title:"React Components/File Upload"},G={render:e=>{const[t,i]=u.useState(""),[a,r]=u.useState([]);function l({files:p}){r(p),i("")}function o({files:p}){i(p.length?"File(s) rejected":"")}return m.createElement(b,{...e,error:e.error||t,onFileAccept:l,onFileReject:o},m.createElement(v,null,a.map((p,n)=>m.createElement(h,{file:p,key:n}))))},argTypes:Qt({acceptedFileLabel:{table:{category:I.general},control:"text"},disabled:{table:{category:I.general},control:"boolean"},dropzoneLabel:{table:{category:I.general},control:"text"},error:{table:{category:I.general},control:"text"},invalid:{table:{category:I.general},control:"boolean"},maxFile:{table:{category:I.general},control:"number"},maxFileLabel:{table:{category:I.general},control:"text"},maxSize:{table:{category:I.general},control:"number"},maxSizeLabel:{table:{category:I.general},control:"text"},triggerLabel:{table:{category:I.general},control:"text"}})},M={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"File(s) not of the expected format":"")}return m.createElement(b,{accept:"image/png",acceptedFileLabel:"Png files only",error:e,onFileAccept:r,onFileReject:l},m.createElement(v,null,i.map((o,p)=>m.createElement(h,{file:o,key:p}))))}},B={globals:{imports:`import { FILE_UPLOAD_I18N, FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState([]);return m.createElement(b,{onFileAccept:({files:i})=>t(i)},m.createElement(v,null,e.map((i,a)=>m.createElement(h,{file:i,i18n:{[N.cancelButton]:`Cancel uploading ${i.name}`,[N.deleteButton]:`Remove ${i.name}`,[N.progressBar]:`Uploading ${i.name}`},key:a}))))}},V={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState([]);return m.createElement(b,{acceptedFileLabel:"Formats acceptés : images",dropzoneLabel:"Glisser-déposer des fichiers",maxFile:3,maxFileLabel:"Nombre maximal de fichiers :",maxSize:524288e3,maxSizeLabel:"Taille de fichier max :",onFileAccept:({files:i})=>t(i),triggerLabel:"Parcourir les fichiers"},m.createElement(v,null,e.map((i,a)=>m.createElement(h,{file:i,key:a,progress:100,uploadSuccessLabel:"Fichier uploadé"}))))}},Y={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState([]);return m.createElement(b,{onFileAccept:({files:i})=>t(i)},m.createElement(v,null,e.map((i,a)=>m.createElement(h,{file:i,key:a}))))}},W={globals:{imports:"import { FileUpload, FileUploadList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>m.createElement(b,{disabled:!0},m.createElement(v,null))},Z={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"Too many files":"")}return m.createElement(b,{error:e,maxFile:3,maxFileLabel:"Maximum file allowed:",onFileAccept:r,onFileReject:l},m.createElement(v,null,i.map((o,p)=>m.createElement(h,{file:o,key:p}))))}},H={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState(""),[i,a]=u.useState([]);function r({files:o}){a(o),t("")}function l({files:o}){t(o.length?"File(s) too large":"")}return m.createElement(b,{error:e,maxSize:1e6,maxSizeLabel:"No file larger than:",onFileAccept:r,onFileReject:l},m.createElement(v,null,i.map((o,p)=>m.createElement(h,{file:o,key:p}))))}},K={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[e,t]=u.useState([]);return m.createElement(b,{onFileAccept:({files:i})=>t(i)},m.createElement(v,null,e.map((i,a)=>m.createElement(h,{file:i,key:a}))))}},Q={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList } from '@ovhcloud/ods-react';
import { useEffect, useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState([]);u.useEffect(()=>{e.forEach(a=>{a.progress||i(a)})},[e]);function i(a){const r=setInterval(()=>{t(l=>l.map(o=>(o.name===a.name&&(o.progress=(o.progress||0)+Math.floor(Math.random()*10+1),o.progress>=100&&clearInterval(r)),o)))},100)}return m.createElement(b,{onFileAccept:({files:a})=>t(a)},m.createElement(v,null,e.map((a,r)=>m.createElement(h,{error:a.error,file:a,key:r,progress:a.progress}))))}},X={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState([]);return m.createElement(ot,null,m.createElement(st,null,"Files:"),m.createElement(b,{onFileAccept:({files:i})=>t(i)},m.createElement(v,null,e.map((i,a)=>m.createElement(h,{file:i,key:a})))))}},J={globals:{imports:`import { FileUpload, FileUploadItem, FileUploadList, FormField, FormFieldLabel } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...A()}}},render:({})=>{const[e,t]=u.useState([]);return m.createElement(ot,null,m.createElement(st,null,"Files:"),m.createElement(b,{onFileAccept:({files:i})=>t(i)},m.createElement(v,null,e.map((i,a)=>m.createElement(h,{file:i,key:a})))))}};var Ee,Le,Ie;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ie=(Le=G.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var je,Te,Pe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
    return <FileUpload accept="image/png" acceptedFileLabel="Png files only" error={error} onFileAccept={onAccept} onFileReject={onReject}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Pe=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var Re,Ae,Se;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Se=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var we,De,Oe;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    }) => setFiles(files)} triggerLabel="Parcourir les fichiers">
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} progress={100} uploadSuccessLabel="Fichier uploadé" />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Oe=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var ze,Ne,Ce;Y.parameters={...Y.parameters,docs:{...(ze=Y.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ce=(Ne=Y.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};var ke,qe,$e;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileUpload, FileUploadList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FileUpload disabled>
      <FileUploadList />
    </FileUpload>
}`,...($e=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var Ge,Me,Be;Z.parameters={...Z.parameters,docs:{...(Ge=Z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
    return <FileUpload error={error} maxFile={3} maxFileLabel="Maximum file allowed:" onFileAccept={onAccept} onFileReject={onReject}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Be=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Ve,Ye,We;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
    return <FileUpload error={error} maxSize={1000000} maxSizeLabel="No file larger than:" onFileAccept={onAccept} onFileReject={onReject}>
        <FileUploadList>
          {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(We=(Ye=H.parameters)==null?void 0:Ye.docs)==null?void 0:We.source}}};var Ze,He,Ke;K.parameters={...K.parameters,docs:{...(Ze=K.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(Ke=(He=K.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Qe,Xe,Je;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
    }) => setFiles(files)}>
        <FileUploadList>
          {files.map((file, idx) => <FileUploadItem error={file.error} file={file} key={idx} progress={file.progress} />)}
        </FileUploadList>
      </FileUpload>;
  }
}`,...(Je=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var et,tt,it;X.parameters={...X.parameters,docs:{...(et=X.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
      }) => setFiles(files)}>
            <FileUploadList>
              {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
            </FileUploadList>
          </FileUpload>
        </FormField>;
  }
}`,...(it=(tt=X.parameters)==null?void 0:tt.docs)==null?void 0:it.source}}};var at,rt,lt;J.parameters={...J.parameters,docs:{...(at=J.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
      }) => setFiles(files)}>
          <FileUploadList>
            {files.map((file: File, idx) => <FileUploadItem file={file} key={idx} />)}
          </FileUploadList>
        </FileUpload>
      </FormField>;
  }
}`,...(lt=(rt=J.parameters)==null?void 0:rt.docs)==null?void 0:lt.source}}};const Si=["Demo","Accept","AccessibilityFileButton","CustomLabels","Default","Disabled","MaxFile","MaxSize","Overview","Upload","InFormField","AccessibilityFormField"],Wi=Object.freeze(Object.defineProperty({__proto__:null,Accept:M,AccessibilityFileButton:B,AccessibilityFormField:J,CustomLabels:V,Default:Y,Demo:G,Disabled:W,InFormField:X,MaxFile:Z,MaxSize:H,Overview:K,Upload:Q,__namedExportsOrder:Si,default:Ai},Symbol.toStringTag,{value:"Module"}));export{J as A,V as C,Y as D,Wi as F,X as I,Z as M,K as O,Q as U,B as a,W as b,M as c,H as d};
