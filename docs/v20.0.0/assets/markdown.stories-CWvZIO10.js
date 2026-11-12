import{i as e,n as t}from"./rolldown-runtime-Dd_uD5pT.js";import{t as n}from"./react-BatatxyT.js";import{t as r}from"./jsx-runtime-DREnUpxT.js";import{t as i}from"./src-F9Qo_kpC.js";import{n as a,t as o}from"./src-BV2Am3Zs.js";import{H as s,Q as c,U as l,Y as u,ct as d,k as f,q as p}from"./index-CzEwg6AJ.js";import{t as m}from"./controls-Cw1EIeDH.js";import{t as h}from"./source-Cx2NEQZ_.js";import{r as g,t as _}from"./nord-C2cSEyF6.js";var v=t({AnatomyTech:()=>x,CodeHighlighter:()=>w,CustomComponent:()=>C,Default:()=>S,Overview:()=>T,ThemeGenerator:()=>E,default:()=>b});n();var y=e(r(),1),b={argTypes:m([`component`]),component:i,title:`React Components/Markdown`},x={tags:[`!dev`],render:({})=>(0,y.jsx)(`div`,{"data-ods":`markdown-story`,children:(0,y.jsx)(i,{content:`# Readme
  Wanna know more about **OVHCloud Design System**?

  Check the [Documentation](https://ovh.github.io/design-system/).`})})},S={globals:{imports:`import { Markdown } from '@ovhcloud/ods-react';`},tags:[`!dev`],render:({})=>(0,y.jsx)(i,{content:`# Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  > Blockquotes

  \`Inline code\`
  \`\`\`
  // print something in the console
  console.log('Hello World!');
  \`\`\`

  | Column 1 | Column 2 |
  | --- | --- |
  | Value 1 | Value 2 |
  `})},C={globals:{imports:`import { Link, Markdown } from '@ovhcloud/ods-react';`},parameters:{docs:{source:{...h()}}},tags:[`!dev`],render:({})=>(0,y.jsx)(i,{component:{a:({children:e,href:t})=>(0,y.jsx)(f,{href:t,target:`_blank`,children:e})},content:`Here is an example with a [target blank link](https://ovh.github.io/design-system/)`})},w={globals:{imports:`import { Code, Markdown } from '@ovhcloud/ods-react';
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';`},tags:[`!dev`],render:({})=>(0,y.jsx)(i,{component:{code:({children:e})=>(0,y.jsx)(d,{highlighter:{language:g,theme:_},children:e})},content:"# Highlighted Code\n  ```\n  // print something in the console\n  console.log('Hello World!');\n  ```\n  "})},T={tags:[`!dev`],parameters:{layout:`centered`},render:({})=>{let e=`# Readme
Wanna know more about **OVHCloud Design System**?

Check the [Documentation](https://ovh.github.io/design-system/).`;return(0,y.jsxs)(s,{defaultValue:`preview`,style:{height:`240px`,width:`350px`},variant:l.switch,children:[(0,y.jsxs)(p,{children:[(0,y.jsx)(c,{value:`preview`,children:`Preview`}),(0,y.jsx)(c,{value:`source`,children:`Source`})]}),(0,y.jsx)(u,{value:`preview`,children:(0,y.jsx)(i,{content:e})}),(0,y.jsx)(u,{value:`source`,children:(0,y.jsx)(o,{preset:a.paragraph,style:{whiteSpace:`break-spaces`},children:e})})]})}},E={parameters:{layout:`fullscreen`},tags:[`!dev`],render:({})=>(0,y.jsx)(i,{content:`# Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  > Blockquotes

  \`Inline code\`
  \`\`\`
  // print something in the console
  console.log('Hello World!');
  \`\`\`

  | Column 1 | Column 2 |
  | --- | --- |
  | Value 1 | Value 2 |
  `})};export{v as t};