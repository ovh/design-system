import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{h as s}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as r,S as t}from"./index-BlaLg9GY.js";import{T as c}from"./tag.stories-CxBfBzxO.js";import{H as i}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";function a(o){const n={code:"code",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Tag - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Usage changes",level:2}),`
`,e.jsx(n.p,{children:"Previous to v18, Tag component was actually a Chip component with specific properties set."}),`
`,e.jsx(n.p,{children:"Chip has been split into two new components (Tag and Badge):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"use Tag when you need an interactive Chip that can be removed."}),`
`,e.jsx(n.li,{children:"use Badge when you need a presentational Chip."}),`
`]}),`
`,e.jsx(n.p,{children:"On Chip component, slots were used to allow any content to be put inside the chip."}),`
`,e.jsx(n.p,{children:"The new tag design enforces the usage of only text as the main content, with an optional icon on the left side."}),`
`,e.jsxs(n.p,{children:["Therefore, slots have been replaced by two attributes: ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"icon"}),"."]}),`
`,e.jsx(t,{code:`
<osds-chip removable>
  <osds-icon name="star"></osds-icon>
  My tag
</osds-chip>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(t,{code:`
<ods-tag icon="star"
         label="My tag">
</ods-tag>
`,dark:"true",language:"html"}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(s,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," ",e.jsx(s,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render an icon on the left side of the tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Tags are inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"label"})," ",e.jsx(s,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (required)."}),`
`,e.jsx(n.p,{children:"The label you want to render in the tag."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"removable"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Tag are all removable. If you want to display information without the removal, use the Badge component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"selectable"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:`Tag are not meant to be selected.
You may eventually mimic previous behavior using some style customization,
but we'll advise to reach out the design team before doing so.`}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Basic tag:"}),`
`,e.jsx(t,{code:`
<osds-chip>
  My tag
</osds-chip>

<!-- is now -->

<ods-tag label="My tag">
</ods-tag>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Disabled tag:"}),`
`,e.jsx(t,{code:`
<osds-chip disabled>
  My tag
</osds-chip>

<!-- is now -->

<ods-tag label="My tag" is-disabled>
</ods-tag>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Inline tag:"}),`
`,e.jsx(t,{code:`
<osds-chip inline>
  My tag
</osds-chip>

<!-- is now -->

<ods-tag label="My tag">
</ods-tag>
`,dark:"true",language:"html"})]})}function C(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{C as default};
