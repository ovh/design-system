import{r as i,e}from"./index-jIWwRBLr.js";import{F as De,a as We,c as je,d as He}from"./index-B0M5RXeR.js";import{F as x}from"./FileThumbnail-kmadOnAZ.js";import{j as h}from"./jsx-runtime-Cfl8ynUo.js";import{c as N}from"./index-CqY9YpN0.js";import{u as $e}from"./context-C_-r2uoG.js";import{B as Re,d as _e,c as ke}from"./Button-B-GJ-1TA.js";import{I as Ue,a as Oe}from"./icon-name-D0KNfDOz.js";import{T as Ge}from"./Textarea-1HJNDjsP.js";import{T as ze,a as Me}from"./Text-CAQM6i-X.js";import{e as Xe,o as Ye,C as D}from"./controls-BtiQQn1l.js";import{s as qe}from"./source-CPEZJ6oD.js";import{D as Ke}from"./divider-color-2AUX7hAv.js";const Ve=i.createContext(void 0),Le=({children:t,disabled:o,loading:u,onInputSubmit:n,onFileChange:g,onValueChange:f,readOnly:d,...r})=>{const[c,I]=i.useState(r.value??r.defaultValue??""),P=r.value!==void 0,b=i.useRef(null);i.useEffect(()=>{r.value!==void 0&&I(r.value)},[r.value,P]);const F=T=>{var L;n==null||n(T),!P&&!d&&I(""),(L=b.current)==null||L.focus()};return h.jsx(Ve.Provider,{value:{...r,disabled:o,inputValue:c,loading:u,onFileChange:g,onInputSubmit:F,onValueChange:f,readOnly:d,setInputValue:I,textareaRef:b},children:t})};function W(){return $e(Ve)}Le.__docgenInfo={description:"",methods:[],displayName:"PromptInputProvider",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial textarea value. Use when you don't need to control the value of the textarea."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},fileCollection:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:"Array of the files associated with the prompt input."},value:{required:!1,tsType:{name:"string"},description:"The controlled textarea value."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},name:{required:!1,tsType:{name:"string"},description:"The name of the textarea form element. Useful for form submission."},onInputSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PromptInputInputSubmitDetails) => void",signature:{arguments:[{type:{name:"PromptInputInputSubmitDetails"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the prompt input is submitted."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PromptInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"PromptInputValueChangeDetails"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the prompt input text value changes."},onFileChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PromptInputFileChangeDetails) => void",signature:{arguments:[{type:{name:"PromptInputFileChangeDetails"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a file change is triggered on the file-upload button."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const H={"prompt-input":"_prompt-input_1hegn_2","prompt-input--disabled":"_prompt-input--disabled_1hegn_28"},j=i.forwardRef(({children:t,className:o,defaultValue:u,disabled:n,fileCollection:g,value:f,loading:d,name:r,onFileChange:c,onInputSubmit:I,onValueChange:P,readOnly:b,...F},T)=>h.jsx(Le,{defaultValue:u,disabled:n,fileCollection:g,value:f,loading:d,name:r,onFileChange:c,onInputSubmit:I,onValueChange:P,readOnly:b,children:h.jsx("div",{className:N(H["prompt-input"],{[H["prompt-input--disabled"]]:n||d},o),"data-ods":"prompt-input",ref:T,...F,children:t})}));j.displayName="PromptInput";j.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial textarea value. Use when you don't need to control the value of the textarea."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},fileCollection:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:"Array of the files associated with the prompt input."},value:{required:!1,tsType:{name:"string"},description:"The controlled textarea value."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},name:{required:!1,tsType:{name:"string"},description:"The name of the textarea form element. Useful for form submission."},onInputSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PromptInputInputSubmitDetails) => void",signature:{arguments:[{type:{name:"PromptInputInputSubmitDetails"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the prompt input is submitted."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PromptInputValueChangeDetails) => void",signature:{arguments:[{type:{name:"PromptInputValueChangeDetails"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the prompt input text value changes."},onFileChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PromptInputFileChangeDetails) => void",signature:{arguments:[{type:{name:"PromptInputFileChangeDetails"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when a file change is triggered on the file-upload button."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."}},composes:["Omit"]};const Ze={"prompt-input-controls":"_prompt-input-controls_1qbww_2"},a=i.forwardRef(({children:t,className:o,...u},n)=>h.jsx("div",{className:N(Ze["prompt-input-controls"],o),"data-ods":"prompt-input-controls",ref:n,...u,children:t}));a.displayName="PromptInputControls";a.__docgenInfo={description:"",methods:[],displayName:"PromptInputControls",composes:["ComponentPropsWithRef"]};const Je={"prompt-input-file-upload-button__input":"_prompt-input-file-upload-button__input_1xxr2_2"},s=i.forwardRef(({accept:t,className:o,multiple:u,...n},g)=>{const{disabled:f,loading:d,onFileChange:r}=W(),c=i.useRef(null),I=P=>{const b=Array.from(P.target.files??[]);r==null||r({files:b}),P.target.value=""};return h.jsxs(h.Fragment,{children:[h.jsx("input",{accept:t,"aria-hidden":!0,className:Je["prompt-input-file-upload-button__input"],disabled:f||d||n.disabled,multiple:u,onChange:I,ref:c,type:"file"}),h.jsx(Re,{className:o,"data-ods":"prompt-input-file-upload-button",size:ke.sm,variant:_e.ghost,...n,disabled:f||d||n.disabled,onClick:()=>{var P;return(P=c.current)==null?void 0:P.click()},ref:g,type:"button",children:h.jsx(Ue,{name:Oe.paperclip})})]})});s.displayName="PromptInputFileUploadButton";s.__docgenInfo={description:"",methods:[],displayName:"PromptInputFileUploadButton",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=BUTTON_COLOR
The color preset to use.`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state, disabling it."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},variant:{required:!1,tsType:{name:"literal",value:"`${BUTTON_VARIANT}`"},description:"The variant preset to use."},accept:{required:!1,tsType:{name:"HTMLInputElement['accept']",raw:"HTMLInputElement['accept']"},description:"Expected file type in file upload controls"},multiple:{required:!1,tsType:{name:"HTMLInputElement['multiple']",raw:"HTMLInputElement['multiple']"},description:"Whether multiple files can be selected at once"}},composes:["ComponentPropsWithRef"]};const Qe={"prompt-input-files":"_prompt-input-files_egyyc_2"},C=i.forwardRef(({children:t,className:o,...u},n)=>i.Children.count(t)?h.jsx("div",{className:N(Qe["prompt-input-files"],o),"data-ods":"prompt-input-files",ref:n,...u,children:t}):h.jsx(h.Fragment,{}));C.displayName="PromptInputFiles";C.__docgenInfo={description:"",methods:[],displayName:"PromptInputFiles",composes:["ComponentPropsWithRef"]};const l=i.forwardRef(({...t},o)=>{const{disabled:u,inputValue:n,fileCollection:g,loading:f,onInputSubmit:d}=W(),r=u||n.trim()===""&&!(g!=null&&g.length)||f;return h.jsx(Re,{"data-ods":"prompt-input-send-button",size:ke.sm,variant:_e.ghost,ref:o,...t,disabled:r,loading:f,onClick:()=>d==null?void 0:d({inputValue:n}),type:"button",children:h.jsx(Ue,{name:Oe.arrowUp})})});l.displayName="PromptInputSendButton";l.__docgenInfo={description:"",methods:[],displayName:"PromptInputSendButton",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=BUTTON_COLOR
The color preset to use.`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state, disabling it."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},variant:{required:!1,tsType:{name:"literal",value:"`${BUTTON_VARIANT}`"},description:"The variant preset to use."}},composes:["ComponentPropsWithRef"]};const et={"prompt-input-text-control":"_prompt-input-text-control_1p0bb_2"},$=typeof CSS<"u"&&CSS.supports("field-sizing","content");function G(t){t.style.setProperty("--explicit-height","unset"),t.style.setProperty("--explicit-height",`${t.scrollHeight}px`)}const p=i.forwardRef(({className:t,placeholder:o,...u},n)=>{const{disabled:g,inputValue:f,loading:d,name:r,onValueChange:c,onInputSubmit:I,readOnly:P,setInputValue:b,textareaRef:F}=W(),T=i.useRef(null);i.useImperativeHandle(n,()=>T.current),i.useLayoutEffect(()=>{F.current=T.current},[F]),i.useLayoutEffect(()=>{$||G(T.current)},[f]);const L=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),!g&&f.trim()!==""&&(I==null||I({inputValue:y.currentTarget.value})))},Ne=y=>{$||G(y.target),c==null||c({inputValue:y.currentTarget.value}),b(y.target.value)};return h.jsx(Ge,{className:N(et["prompt-input-text-control"],t),"data-ods":"prompt-input-text-control",rows:1,...u,placeholder:o,value:f,disabled:g||d,name:r,onChange:Ne,onKeyDown:L,readOnly:P,ref:T})});p.displayName="PromptInputTextControl";p.__docgenInfo={description:"",methods:[],displayName:"PromptInputTextControl",props:{invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},placeholder:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithRef"]};const m=Object.assign(j,{Controls:a,FileUploadButton:s,Files:C,SendButton:l,TextControl:p}),tt={argTypes:Xe(["defaultValue","fileCollection","name","onInputSubmit","onValueChange","onFileChange","value"]),component:m,subcomponents:{PromptInputControls:a,PromptInputFiles:C,PromptInputFileUploadButton:s,PromptInputSendButton:l,PromptInputTextControl:p},tags:["new"],title:"React Components/Prompt Input"},E={argTypes:Ye({disabled:{control:"boolean",table:{category:D.general}},loading:{control:"boolean",table:{category:D.general}},readOnly:{control:"boolean",table:{category:D.general}}}),render:t=>e.createElement(m,{loading:t.loading,readOnly:t.readOnly,disabled:t.disabled},e.createElement(a,null,e.createElement(s,null),e.createElement(p,{placeholder:"Type your message here..."}),e.createElement(l,null)))},v={tags:["!dev"],render:({})=>{const t=new File(["foo"],"a-default-text-file.txt",{type:"text/plain"});return e.createElement("div",{style:{minWidth:"500px"}},e.createElement(m,null,e.createElement(C,null,e.createElement(x,{file:t})),e.createElement(a,null,e.createElement(s,null),e.createElement(p,{placeholder:"This is where you can ask about something…"}),e.createElement(l,null))))}},S={tags:["!dev"],globals:{imports:"import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"},render:({})=>e.createElement(m,null,e.createElement(a,null,e.createElement(s,null),e.createElement(p,null),e.createElement(l,null)))},A={tags:["!dev"],render:({})=>{const[t,o]=i.useState([new File(["foo"],"a-default-text-file.txt",{type:"text/plain"}),new File(["foo"],"another-default-text-file.txt",{type:"text/plain"})]),[u,n]=i.useState(!1),g=({files:r})=>{o(c=>[...c,...r])},f=r=>{o(c=>c.filter(I=>I!==r))},d=()=>{n(!0),setTimeout(()=>{n(!1)},1500)};return e.createElement(m,{loading:u,onFileChange:g,onInputSubmit:d,fileCollection:t},e.createElement(C,null,t==null?void 0:t.map((r,c)=>e.createElement(x,{key:c,file:r,onFileRemove:()=>f(r)}))),e.createElement(a,null,e.createElement(s,{multiple:!0,"aria-description":"description","aria-label":"label"}),e.createElement(p,{"aria-label":"Ask someone about something…",placeholder:"Ask someone about something…"}),e.createElement(l,{"aria-label":u?"Sending message…":"Send message"})))}},B={tags:["!dev"],globals:{imports:"import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"},render:({})=>e.createElement(m,{disabled:!0,defaultValue:"Nobody’s here to answer…"},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach a file"}),e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(l,{"aria-label":"Send message"})))},w={tags:["!dev"],globals:{imports:"import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"},render:({})=>e.createElement(m,{readOnly:!0,defaultValue:"This is a read-only prompt input."},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach a file"}),e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(l,{"aria-label":"Send message"})))},R={tags:["!dev"],globals:{imports:"import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"},render:({})=>e.createElement(m,{defaultValue:"“Someone” is processing your request…",loading:!0},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach a file"}),e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(l,{"aria-label":"Send message"})))},_={parameters:{docs:{source:{...qe()}}},globals:{imports:"import { FileThumbnail, PromptInput, PromptInputControls, PromptInputFiles, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>{const t=new File(["foo"],"loading-pdf-file.pdf",{type:"application/pdf"}),o=new File(["bar"],"text-file.txt",{type:"text/plain"});return e.createElement(m,{fileCollection:[t,o]},e.createElement(C,null,e.createElement(x,{file:t,progress:45}),e.createElement(x,{file:o})),e.createElement(a,null,e.createElement(s,{"aria-label":"Attach a file"}),e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(l,{"aria-label":"Send message"})))}},k={globals:{imports:`import { Divider, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton, Text, TEXT_PRESET } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...qe()}}},render:({})=>{const[o,u]=i.useState("Some text that is almost hitting the length limit...");return e.createElement(De,{invalid:(o==null?void 0:o.length)>60},e.createElement(We,null,"Here is a prompt input inside a form field:"),e.createElement(m,{defaultValue:o,name:"prompt-input-textArea",onValueChange:({inputValue:n})=>u(n)},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach a file"}),e.createElement("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,rowGap:"var(--ods-theme-row-gap)"}},e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(Ke,{style:{width:"100%"}}),e.createElement(je,null,e.createElement(ze,{preset:Me.caption},o==null?void 0:o.length," / ",60))),e.createElement(l,{"aria-label":"Send message"}))),e.createElement(He,null,"Character limit exceeded"))}},U={tags:["!dev"],globals:{imports:"import { PromptInput, PromptInputControls, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"},render:({})=>e.createElement(m,null,e.createElement(a,null,e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(l,null)))},O={tags:["!dev"],globals:{imports:"import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"},render:({})=>e.createElement(m,null,e.createElement(a,null,e.createElement(s,{"aria-label":"Attach file"}),e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(l,{"aria-label":"Send request"})))},q={tags:["!dev"],globals:{imports:"import { PromptInput, PromptInputControls, PromptInputTextControl, PromptInputSendButton, PromptInputFileUploadButton } from '@ovhcloud/ods-react';"},render:({})=>e.createElement(m,{loading:!0},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach file"}),e.createElement(p,{"aria-label":"Ask someone about something…"}),e.createElement(l,{"aria-label":"Request is processing"})))},V={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(m,null,e.createElement(C,null,e.createElement(x,{file:new File(["foo"],"file1.pdf",{type:"application/pdf"}),progress:45}),e.createElement(x,{file:new File(["bar"],"file2.txt",{type:"text/plain"})})),e.createElement(a,null,e.createElement(s,{"aria-label":"Attach file"}),e.createElement(p,{"aria-label":"Ask someone about something…",placeholder:"Ask someone about something…"}),e.createElement(l,{"aria-label":"Send request"}))),e.createElement(m,{defaultValue:"This is a default value"},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach file"}),e.createElement(p,{"aria-label":"Ask someone about something…",placeholder:"Ask someone about something…"}),e.createElement(l,{"aria-label":"Send request"}))),e.createElement(m,{disabled:!0,defaultValue:"This is a default value in a disabled prompt input."},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach file"}),e.createElement(p,{"aria-label":"Ask someone about something…",placeholder:"Ask someone about something…"}),e.createElement(l,{"aria-label":"Request is processing"}))),e.createElement(m,{loading:!0},e.createElement(a,null,e.createElement(s,{"aria-label":"Attach file"}),e.createElement(p,{"aria-label":"Ask someone about something…",placeholder:"Placeholder in loading prompt input…"}),e.createElement(l,{"aria-label":"Request is processing"}))),e.createElement(m,{readOnly:!0,defaultValue:"This is a read-only prompt input."},e.createElement(a,null,e.createElement(p,{"aria-label":"Ask someone about something…",placeholder:"Ask someone about something…"}),e.createElement(l,{"aria-label":"Request is processing"}))))};var z,M,X;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: orderControls({
    disabled: {
      control: "boolean",
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    loading: {
      control: "boolean",
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    readOnly: {
      control: "boolean",
      table: {
        category: CONTROL_CATEGORY.general
      }
    }
  }),
  render: arg => <PromptInput loading={arg.loading} readOnly={arg.readOnly} disabled={arg.disabled}>
      <PromptInputControls>
        <PromptInputFileUploadButton />
        <PromptInputTextControl placeholder="Type your message here..." />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
}`,...(X=(M=E.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var Y,K,Z;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: ({}) => {
    const uploadedFile = new File(["foo"], "a-default-text-file.txt", {
      type: "text/plain"
    });
    return <div style={{
      minWidth: '500px'
    }}>
        <PromptInput>
          <PromptInputFiles>
            <FileThumbnail file={uploadedFile} />
          </PromptInputFiles>
          <PromptInputControls>
            <PromptInputFileUploadButton />
            <PromptInputTextControl placeholder="This is where you can ask about something…" />
            <PromptInputSendButton />
          </PromptInputControls>
        </PromptInput>
      </div>;
  }
}`,...(Z=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,Q,ee;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ["!dev"],
  globals: {
    imports: "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"
  },
  render: ({}) => <PromptInput>
      <PromptInputControls>
        <PromptInputFileUploadButton />
        <PromptInputTextControl />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
}`,...(ee=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ne;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: ({}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([new File(["foo"], "a-default-text-file.txt", {
      type: "text/plain"
    }), new File(["foo"], "another-default-text-file.txt", {
      type: "text/plain"
    })]);
    const [isLoading, setIsLoading] = useState(false);
    const handleFileChange = ({
      files
    }: {
      files: File[];
    }): void => {
      setUploadedFiles(prev => [...prev, ...files]);
    };
    const handleFileRemove = (fileToRemove: File): void => {
      setUploadedFiles(prev => prev.filter(file => file !== fileToRemove));
    };
    const handleInputSubmit = (): void => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };
    return <PromptInput loading={isLoading} onFileChange={handleFileChange} onInputSubmit={handleInputSubmit} fileCollection={uploadedFiles}>
        <PromptInputFiles>
          {uploadedFiles?.map((file, index) => <FileThumbnail key={index} file={file} onFileRemove={() => handleFileRemove(file)} />)}
        </PromptInputFiles>
        <PromptInputControls>
          <PromptInputFileUploadButton multiple aria-description="description" aria-label="label" />
          <PromptInputTextControl aria-label="Ask someone about something…" placeholder="Ask someone about something…" />
          <PromptInputSendButton aria-label={isLoading ? "Sending message…" : "Send message"} />
        </PromptInputControls>
      </PromptInput>;
  }
}`,...(ne=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,ae,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ["!dev"],
  globals: {
    imports: "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"
  },
  render: ({}) => <PromptInput disabled defaultValue="Nobody’s here to answer…">
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach a file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send message" />
      </PromptInputControls>
    </PromptInput>
}`,...(le=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var pe,ie,se;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ["!dev"],
  globals: {
    imports: "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"
  },
  render: ({}) => <PromptInput readOnly defaultValue="This is a read-only prompt input.">
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach a file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send message" />
      </PromptInputControls>
    </PromptInput>
}`,...(se=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ue,me,de;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ["!dev"],
  globals: {
    imports: "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"
  },
  render: ({}) => <PromptInput defaultValue="“Someone” is processing your request…" loading>
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach a file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send message" />
      </PromptInputControls>
    </PromptInput>
}`,...(de=(me=R.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,fe,he;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  globals: {
    imports: "import { FileThumbnail, PromptInput, PromptInputControls, PromptInputFiles, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"
  },
  tags: ["!dev"],
  render: ({}) => {
    const fakePdfFile = new File(["foo"], "loading-pdf-file.pdf", {
      type: "application/pdf"
    });
    const fakeTextFile = new File(["bar"], "text-file.txt", {
      type: "text/plain"
    });
    return <PromptInput fileCollection={[fakePdfFile, fakeTextFile]}>
        <PromptInputFiles>
          <FileThumbnail file={fakePdfFile} progress={45} />
          <FileThumbnail file={fakeTextFile} />
        </PromptInputFiles>
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach a file" />
          <PromptInputTextControl aria-label="Ask someone about something…" />
          <PromptInputSendButton aria-label="Send message" />
        </PromptInputControls>
      </PromptInput>;
  }
}`,...(he=(fe=_.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,Ie,Pe;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Divider, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton, Text, TEXT_PRESET } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const maxLength = 60;
    const [inputValue, setInputValue] = useState("Some text that is almost hitting the length limit...");
    return <FormField invalid={inputValue?.length > maxLength}>
        <FormFieldLabel>Here is a prompt input inside a form field:</FormFieldLabel>
        <PromptInput defaultValue={inputValue} name="prompt-input-textArea" onValueChange={({
        inputValue
      }) => setInputValue(inputValue)}>
          <PromptInputControls>
            <PromptInputFileUploadButton aria-label="Attach a file" />
            <div style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            rowGap: "var(--ods-theme-row-gap)"
          }}>
              <PromptInputTextControl aria-label="Ask someone about something…" />
              <Divider style={{
              width: "100%"
            }} />
              <FormFieldHelper>
                <Text preset={TEXT_PRESET.caption}>
                  {inputValue?.length} / {maxLength}
                </Text>
              </FormFieldHelper>
            </div>
            <PromptInputSendButton aria-label="Send message" />
          </PromptInputControls>
        </PromptInput>
        <FormFieldError>Character limit exceeded</FormFieldError>
      </FormField>;
  }
}`,...(Pe=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var be,Te,ye;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ["!dev"],
  globals: {
    imports: "import { PromptInput, PromptInputControls, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"
  },
  render: ({}) => <PromptInput>
      <PromptInputControls>
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
}`,...(ye=(Te=U.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var Ce,Fe,xe;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ["!dev"],
  globals: {
    imports: "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';"
  },
  render: ({}) => <PromptInput>
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send request" />
      </PromptInputControls>
    </PromptInput>
}`,...(xe=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:xe.source}}};var Ee,ve,Se;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  tags: ["!dev"],
  globals: {
    imports: "import { PromptInput, PromptInputControls, PromptInputTextControl, PromptInputSendButton, PromptInputFileUploadButton } from '@ovhcloud/ods-react';"
  },
  render: ({}) => <PromptInput loading>
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Request is processing" />
      </PromptInputControls>
    </PromptInput>
}`,...(Se=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var Ae,Be,we;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  tags: ["!dev"],
  render: ({}) => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>
      <PromptInput>
        <PromptInputFiles>
          <FileThumbnail file={new File(["foo"], "file1.pdf", {
          type: "application/pdf"
        })} progress={45} />
          <FileThumbnail file={new File(["bar"], "file2.txt", {
          type: "text/plain"
        })} />
        </PromptInputFiles>
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl aria-label="Ask someone about something…" placeholder="Ask someone about something…" />
          <PromptInputSendButton aria-label="Send request" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput defaultValue="This is a default value">
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl aria-label="Ask someone about something…" placeholder="Ask someone about something…" />
          <PromptInputSendButton aria-label="Send request" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput disabled defaultValue="This is a default value in a disabled prompt input.">
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl aria-label="Ask someone about something…" placeholder="Ask someone about something…" />
          <PromptInputSendButton aria-label="Request is processing" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput loading>
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl aria-label="Ask someone about something…" placeholder="Placeholder in loading prompt input…" />
          <PromptInputSendButton aria-label="Request is processing" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput readOnly defaultValue="This is a read-only prompt input.">
        <PromptInputControls>
          <PromptInputTextControl aria-label="Ask someone about something…" placeholder="Ask someone about something…" />
          <PromptInputSendButton aria-label="Request is processing" />
        </PromptInputControls>
      </PromptInput>
    </div>
}`,...(we=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};const ot=["Demo","AnatomyTech","Default","Overview","Disabled","ReadOnly","Loading","WithFiles","InFormField","AccessibilityAriaLabel","AccessibilityButtonsLabels","AccessibilityLoadingState","ThemeGenerator"],gt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:U,AccessibilityButtonsLabels:O,AccessibilityLoadingState:q,AnatomyTech:v,Default:S,Demo:E,Disabled:B,InFormField:k,Loading:R,Overview:A,ReadOnly:w,ThemeGenerator:V,WithFiles:_,__namedExportsOrder:ot,default:tt},Symbol.toStringTag,{value:"Module"}));export{U as A,S as D,k as I,R as L,A as O,gt as P,w as R,_ as W,O as a,q as b,v as c,B as d};
