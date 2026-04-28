import{r as F,e as l}from"./index-jIWwRBLr.js";import{j as t}from"./jsx-runtime-Cfl8ynUo.js";import{f as oe}from"./index-CPOqegBX.js";import{c as R}from"./index-CqY9YpN0.js";import{L as r,u as me}from"./useI18n-C0NLVYPv.js";import{B as ce,d as fe,c as ue}from"./Button-B-GJ-1TA.js";import{a as de}from"./colors-DSObuHxd.js";import{I,a as O}from"./icon-name-RfJfucZu.js";import{P as pe}from"./ProgressBar-ctSrx_5P.js";import{T as N,a as S}from"./Text-CRk0VKg4.js";import{e as be,o as _e,C as T}from"./controls-BtiQQn1l.js";import{s as m}from"./source-CPEZJ6oD.js";var v=(e=>(e.cancelButton="fileThumbnail.file.cancel.button",e.deleteButton="fileThumbnail.file.delete.button",e.progressBar="fileThumbnail.file.progressBar",e))(v||{});const ge={"fileThumbnail.file.cancel.button":{[r.de]:"Abbrechen",[r.en]:"Cancel",[r.es]:"Cancelar",[r.fr]:"Annuler",[r.it]:"Annulla",[r.nl]:"Annuleren",[r.pl]:"Anuluj",[r.pt]:"Cancelar"},"fileThumbnail.file.delete.button":{[r.de]:"Löschen",[r.en]:"Delete",[r.es]:"Eliminar",[r.fr]:"Supprimer",[r.it]:"Elimina",[r.nl]:"Verwijderen",[r.pl]:"Usuń",[r.pt]:"Eliminar"},"fileThumbnail.file.progressBar":{[r.de]:"Hochladen",[r.en]:"Uploading",[r.es]:"Cargando",[r.fr]:"Chargement",[r.it]:"Caricamento in Corso",[r.nl]:"Uploaden",[r.pl]:"Ładowanie",[r.pt]:"A carregar"}},he=new Set(["3dv","ai","amf","art","ase","awg","blp","bmp","bw","cd5","cdr","cgm","cit","cmx","cpt","cr2","cur","cut","dds","dib","djvu","dxf","e2d","ecw","egt","emf","eps","exif","fs","gbr","gif","gpl","grf","hdp","heic","heif","icns","ico","iff","int","inta","jfif","jng","jp2","jpeg","jpg","jps","jxr","lbm","liff","max","miff","mng","msp","nef","nitf","nrrd","odg","ota","pam","pbm","pc1","pc2","pc3","pcf","pct","pcx","pdd","pdn","pgf","pgm","PI1","PI2","PI3","pict","png","pnm","pns","ppm","psb","psd","psp","px","pxm","pxr","qfx","ras","raw","rgb","rgba","rle","sct","sgi","sid","stl","sun","svg","sxd","tga","tif","tiff","v2d","vnd","vrml","vtf","wdp","webp","wmf","x3d","xar","xbm","xcf","xpm"]);function xe(e=""){return he.has(e.split(".").pop()||"")}function Te(e){return!!(e||e===0)&&e<100}const n={"file-thumbnail":"_file-thumbnail_17gul_6","file-thumbnail--disabled":"_file-thumbnail--disabled_17gul_17","file-thumbnail--error":"_file-thumbnail--error_17gul_23","file-thumbnail__preview":"_file-thumbnail__preview_17gul_26","file-thumbnail__icon":"_file-thumbnail__icon_17gul_34","file-thumbnail__icon--error":"_file-thumbnail__icon--error_17gul_38","file-thumbnail__file":"_file-thumbnail__file_17gul_41","file-thumbnail__file__name":"_file-thumbnail__file__name_17gul_45","file-thumbnail__file__size":"_file-thumbnail__file__size_17gul_50","file-thumbnail__file__size--disabled":"_file-thumbnail__file__size--disabled_17gul_53","file-thumbnail__file__progress":"_file-thumbnail__file__progress_17gul_56","file-thumbnail__file__error":"_file-thumbnail__file__error_17gul_62","file-thumbnail__delete":"_file-thumbnail__delete_17gul_66"},i=F.forwardRef(({className:e,disabled:o,dismissible:y=!0,error:s,file:a,i18n:w,locale:f,onFileRemove:c,progress:C,...ie},le)=>{const{translate:E}=me(ge,f,w),[se,j]=F.useState(!1),k=F.useMemo(()=>{if(xe(a.name))try{return URL.createObjectURL(a)}catch{j(!0)}},[a]),A=Te(C);return t.jsxs("div",{className:R(n["file-thumbnail"],{[n["file-thumbnail--disabled"]]:o},{[n["file-thumbnail--error"]]:!!s},e),"data-ods":"file-thumbnail",ref:le,...ie,children:[k&&!se?t.jsx("img",{alt:a.name,className:n["file-thumbnail__preview"],onError:()=>j(!0),src:k}):t.jsx(I,{className:R(n["file-thumbnail__icon"],{[n["file-thumbnail__icon--error"]]:!!s}),name:s?O.circleXmark:O.file}),t.jsxs("div",{className:n["file-thumbnail__file"],children:[t.jsx(N,{as:"span",className:n["file-thumbnail__file__name"],disabled:o,preset:S.small,title:a.name,children:a.name}),!s&&(A?t.jsxs("div",{className:n["file-thumbnail__file__progress"],role:"status",children:[t.jsx(pe,{"aria-label":`${E(v.progressBar)} - ${C}%`,max:100,value:C}),t.jsx(N,{preset:S.caption,children:"​"})]}):t.jsx(N,{className:R(n["file-thumbnail__file__size"],{[n["file-thumbnail__file__size--disabled"]]:o}),disabled:o,preset:S.caption,children:oe(a.size,f)})),!!s&&t.jsx("span",{className:n["file-thumbnail__file__error"],role:"alert",children:s})]}),y&&t.jsx(ce,{"aria-label":E(A?v.cancelButton:v.deleteButton),className:n["file-thumbnail__delete"],color:de.neutral,disabled:o,onClick:()=>c==null?void 0:c({file:a}),size:ue.xs,variant:fe.ghost,children:t.jsx(I,{name:O.xmark})})]})});i.displayName="FileThumbnail";i.__docgenInfo={description:"",methods:[],displayName:"FileThumbnail",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the component holds a dismiss button.",defaultValue:{value:"true",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"The file error message to display."},file:{required:!0,tsType:{name:"File"},description:"The current File object."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"FILE_THUMBNAIL_I18N"},{name:"string"}],raw:"Record<FILE_THUMBNAIL_I18N, string>"}],raw:"Partial<Record<FILE_THUMBNAIL_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for size formatting and the translation of the internal elements."},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: FileThumbnailRemoveDetail) => void",signature:{arguments:[{type:{name:"FileThumbnailRemoveDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the file is removed."},progress:{required:!1,tsType:{name:"number"},description:"The file upload progress."}},composes:["ComponentPropsWithRef"]};const Fe={argTypes:be(["file","i18n","locale","onFileRemove"]),component:i,tags:["new"],title:"React Components/File Thumbnail"},u={render:({disabled:e,dismissible:o,error:y,progress:s})=>{const[a,w]=F.useState();return l.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},l.createElement("input",{onChange:f=>{var c;(c=f.target.files)!=null&&c.length&&w(f.target.files[0])},type:"file"}),a&&l.createElement(i,{disabled:e,dismissible:o,error:y,file:a,progress:s}))},argTypes:_e({disabled:{table:{category:T.general},control:"boolean"},dismissible:{table:{category:T.general},control:"boolean"},error:{table:{category:T.general},control:"text"},progress:{table:{category:T.general},control:"number"}})},d={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...m()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return l.createElement(i,{file:e})}},p={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...m()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return l.createElement(i,{disabled:!0,file:e})}},b={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...m()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"non-dismissible-file.txt",{type:"text/plain"});return l.createElement(i,{dismissible:!1,file:e})}},_={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...m()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return l.createElement(i,{error:"Something went wrong",file:e})}},g={parameters:{docs:{source:{...m()}},layout:"centered"},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return l.createElement(i,{file:e})}},h={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...m()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return l.createElement(i,{file:e,progress:45})}},x={parameters:{docs:{source:{...m()}},layout:"fullscreen"},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return l.createElement(i,{file:e})}};var L,B,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    disabled,
    dismissible,
    error,
    progress
  }) => {
    const [file, setFile] = useState<File>();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px'
    }}>
        <input onChange={e => {
        if (e.target.files?.length) {
          setFile(e.target.files[0]);
        }
      }} type="file" />
        {file && <FileThumbnail disabled={disabled} dismissible={dismissible} error={error} file={file} progress={progress} />}
      </div>;
  },
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    progress: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    }
  })
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,z,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileThumbnail } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail file={fakeFile} />;
  }
}`,...(q=(z=d.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var G,U,Y;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileThumbnail } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail disabled file={fakeFile} />;
  }
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var M,V,W;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileThumbnail } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'non-dismissible-file.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail dismissible={false} file={fakeFile} />;
  }
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var $,H,X;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileThumbnail } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail error="Something went wrong" file={fakeFile} />;
  }
}`,...(X=(H=_.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var Z,J,K;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    },
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail file={fakeFile} />;
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,ee,re;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FileThumbnail } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail file={fakeFile} progress={45} />;
  }
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,ae;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    },
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail file={fakeFile} />;
  }
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const ve=["Demo","Default","Disabled","NonDismissible","Error","Overview","Progress","ThemeGenerator"],Le=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Demo:u,Disabled:p,Error:_,NonDismissible:b,Overview:g,Progress:h,ThemeGenerator:x,__namedExportsOrder:ve,default:Fe},Symbol.toStringTag,{value:"Module"}));export{d as D,_ as E,Le as F,b as N,g as O,h as P,p as a};
