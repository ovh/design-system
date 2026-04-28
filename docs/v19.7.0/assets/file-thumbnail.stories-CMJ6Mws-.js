import{r as U,e as r}from"./index-jIWwRBLr.js";import{F as o}from"./FileThumbnail-kmadOnAZ.js";import{e as V,o as W,C as f}from"./controls-BtiQQn1l.js";import{s as t}from"./source-CPEZJ6oD.js";const X={argTypes:V(["file","i18n","locale","onFileRemove"]),component:o,tags:["new"],title:"React Components/File Thumbnail"},n={render:({disabled:e,dismissible:I,error:J,progress:K})=>{const[u,Q]=U.useState();return r.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},r.createElement("input",{onChange:g=>{var F;(F=g.target.files)!=null&&F.length&&Q(g.target.files[0])},type:"file"}),u&&r.createElement(o,{disabled:e,dismissible:I,error:J,file:u,progress:K}))},argTypes:W({disabled:{table:{category:f.general},control:"boolean"},dismissible:{table:{category:f.general},control:"boolean"},error:{table:{category:f.general},control:"text"},progress:{table:{category:f.general},control:"number"}})},a={tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return r.createElement(o,{file:e})}},s={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return r.createElement(o,{file:e})}},l={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return r.createElement(o,{disabled:!0,file:e})}},i={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"non-dismissible-file.txt",{type:"text/plain"});return r.createElement(o,{dismissible:!1,file:e})}},c={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return r.createElement(o,{error:"Something went wrong",file:e})}},m={parameters:{layout:"centered"},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return r.createElement(o,{file:e})}},d={globals:{imports:"import { FileThumbnail } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return r.createElement(o,{file:e,progress:45})}},p={parameters:{docs:{source:{...t()}},layout:"fullscreen"},tags:["!dev"],render:({})=>{const e=new File(["foo"],"foo.txt",{type:"text/plain"});return r.createElement(o,{file:e})}};var b,x,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,T,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail file={fakeFile} />;
  }
}`,...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,k,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,E,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,D,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var G,A,N;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var L,Y,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    });
    return <FileThumbnail file={fakeFile} />;
  }
}`,...(P=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var j,z,M;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(M=(z=d.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var q,B,H;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Z=["Demo","AnatomyTech","Default","Disabled","NonDismissible","Error","Overview","Progress","ThemeGenerator"],te=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:a,Default:s,Demo:n,Disabled:l,Error:c,NonDismissible:i,Overview:m,Progress:d,ThemeGenerator:p,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{a as A,s as D,c as E,te as F,i as N,m as O,d as P,l as a};
