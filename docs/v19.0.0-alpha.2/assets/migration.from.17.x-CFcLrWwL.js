import{j as o}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as t}from"./index-DQB45XCM.js";import{h as i}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as l,S as n}from"./index-BlaLg9GY.js";import{M as a}from"./modal.stories-C9_PdlWJ.js";import{H as r}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-BRERPjFq.js";import"./index-CkQHsVsO.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./render-strategy-C1g0moKL.js";import"./index-BCxMAfLs.js";import"./portal-BQw3bnzL.js";import"./use-locale-context-Z4fgdY29.js";import"./use-presence-BmJ92aQP.js";import"./use-event-OCVb0O1l.js";import"./index-CW0111bW.js";import"./index-BtJLK9Rv.js";import"./SelectLabel-B4wtfstO.js";import"./use-field-context-BA6pMY5L.js";import"./Text-eeWNb4Wa.js";import"./TooltipTrigger-CUqGeRIQ.js";import"./overlay-CZHjGBMC.js";import"./index-DTqyXX3-.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";function d(s){const e={code:"code",p:"p",...t(),...s.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:a,name:"Migration From 17.x"}),`
`,o.jsx(r,{label:"Modal - migrate from v17 to v18",level:1}),`
`,o.jsx(r,{label:"Attributes changes",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"color"})," ",o.jsx(i,{color:"information",size:"sm",children:"Updated"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["Modal's color options have been restricted to the options in ",o.jsx(e.code,{children:"ODS_MODAL_COLORS"}),"."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"dismissible"})," ",o.jsx(i,{color:"information",size:"sm",children:"Updated"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isDismissible"})," attribute to obtain the same behavior."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"headline"})," ",o.jsx(i,{color:"critical",size:"sm",children:"Removed"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsx(e.p,{children:`Modal does not provide a headline attribute anymore.
You can use the content slot to recreate the desired headline.`}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"masked"})," ",o.jsx(i,{color:"information",size:"sm",children:"Updated"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isOpen"})," attribute to obtain the same behavior."]}),`
`,o.jsx(r,{label:"Migration examples",level:2}),`
`,o.jsx(e.p,{children:"Color modal:"}),`
`,o.jsx(n,{code:`
<osds-modal color={ODS_THEME_COLOR_INTENT.information}></osds-modal>

<!-- is now -->

<ods-modal color={ODS_MODAL_COLOR.information}></ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Dismissible modal:"}),`
`,o.jsx(n,{code:`
<osds-modal dismissible="true"></osds-modal>

<!-- is now -->

<ods-modal is-dismissible="true"></ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Headline modal:"}),`
`,o.jsx(n,{code:`
<osds-modal headline="Hello, world!"></osds-modal>

<!-- is now -->

<ods-modal>
  <ods-text preset="heading-3">Hello, world!</ods-text>
</ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Masked modal:"}),`
`,o.jsx(n,{code:`
<osds-modal masked="true"></osds-modal>

<!-- is now -->

<ods-modal is-open="false"></ods-modal>
`,dark:"true",language:"html"})]})}function q(s={}){const{wrapper:e}={...t(),...s.components};return e?o.jsx(e,{...s,children:o.jsx(d,{...s})}):d(s)}export{q as default};
