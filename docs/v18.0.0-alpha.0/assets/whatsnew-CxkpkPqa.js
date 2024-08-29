import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as o}from"./index-B5y3xRNA.js";import{M as r}from"./index-sugWq352.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/What's new?/What's new"}),`
`,e.jsx(n.h1,{id:"whats-new-",children:"What's new ?"}),`
`,e.jsx(n.h2,{id:"v1800",children:"v18.0.0"}),`
`,e.jsxs(n.p,{children:["As it is a major version, you'll have to follow the ",e.jsx(n.a,{href:"?path=/docs/ovhcloud-design-system-what-s-new-migration-guide-17-x-to-18-x--docs",children:"migration guide 17.x to 18.x"})]}),`
`,e.jsx(n.h3,{id:"project-changes",children:"Project changes:"}),`
`,e.jsx(n.p,{children:`From the beginning of the project to the latest v17 version, our vision of the project has greatly evolved.
Thanks to real-user feedbacks, a better understanding of our use cases and how ODS fits in the OVHCloud ecosystem.`}),`
`,e.jsx(n.p,{children:"With this new version we've tried to tackle most of the known issues to offer a better end-user experience:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"components are now behaving more like native html elements"}),`
`,e.jsx(n.li,{children:"components are now easier to use and to customize"}),`
`,e.jsxs(n.li,{children:["no more invasive ",e.jsx(n.code,{children:"console.log"}),", we only print meaningful warnings when needed"]}),`
`,e.jsx(n.li,{children:"enum values can now be used directly instead of importing it"}),`
`,e.jsx(n.li,{children:"events are now normalized for all components"}),`
`,e.jsx(n.li,{children:"release process will be shorter"}),`
`]}),`
`,e.jsx(n.p,{children:"On top of that, the v18 does bring new features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"new components: file-upload and timepicker"}),`
`,e.jsx(n.li,{children:"latest design applied on all components"}),`
`,e.jsx(n.li,{children:"now sync with figma changes"}),`
`,e.jsx(n.li,{children:"a new set of icons"}),`
`,e.jsx(n.li,{children:"a reworked documentation"}),`
`]}),`
`,e.jsx(n.p,{children:"To achieve all this, we had to rewrite almost the whole library."}),`
`,e.jsx(n.p,{children:`This is a major version change with tons of breaking changes.
But this aims to be the last time.`}),`
`,e.jsx(n.p,{children:`To help you moving from a previous version to the v18, we've added a dedicated page on each component presenting
the changes and some migration examples.`}),`
`,e.jsx(n.h3,{id:"ods-libraries",children:"ODS libraries"}),`
`,e.jsx(n.p,{children:"The following libs have been removed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"@ovhcloud/ods-cdk"}),`
`,e.jsx(n.li,{children:"@ovhcloud/ods-common-core"}),`
`,e.jsx(n.li,{children:"@ovhcloud/ods-common-stencil"}),`
`,e.jsx(n.li,{children:"@ovhcloud/ods-common-testing"}),`
`,e.jsx(n.li,{children:"@ovhcloud/ods-common-theming"}),`
`,e.jsx(n.li,{children:"@ovhcloud/ods-theme-blue-jeans"}),`
`]}),`
`,e.jsx(n.p,{children:"There is now only two library published that you should include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-components"})," that contain all web-components, react and vue wrappers and the sass mixins"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-themes"})," that contain the design tokens and the assets (fonts and icons)"]}),`
`]}),`
`,e.jsx(n.p,{children:`The CDK has been removed and we do not plan on publishing it again. If you were using part of it, please reach
out to us so that we can get more information about your usage.`}),`
`,e.jsx(n.p,{children:`All common libs have been and we do not plan on publishing them again. If you were using part of them, please reach
out to us so that we can get more information about your usage.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"blue-jeans"})," theme has been replaced by the default theme of ",e.jsx(n.code,{children:"@ovhcloud/ods-themes"}),"."]}),`
`,e.jsx(n.h3,{id:"ods-dependencies-upgrade",children:"ODS dependencies upgrade"}),`
`,e.jsx(n.p,{children:"The new version comes with the following upgrade on major library:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Stencil bumps from ",e.jsx(n.code,{children:"4.12.0"})," to ",e.jsx(n.code,{children:"4.16.0"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"node-sass"})," is not supported anymore and was replaced by ",e.jsx(n.code,{children:"sass"})," (",e.jsx(n.code,{children:"1.71.0"}),")"]}),`
`,e.jsxs(n.li,{children:["Typescript bumps from ",e.jsx(n.code,{children:"4.7.4"})," to ",e.jsx(n.code,{children:"5.3.3"})]}),`
`,e.jsxs(n.li,{children:["Storybook bumps from ",e.jsx(n.code,{children:"6.4.19"})," to ",e.jsx(n.code,{children:"8.0.4"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"style-customization",children:"Style customization"}),`
`,e.jsxs(n.p,{children:[`Although the ODS component comes with the expected design, you can now apply your own style directly on some part
of the web-component shadow DOM, thanks to the `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:"part selector"}),"."]}),`
`,e.jsxs(n.p,{children:["For example, you can add style on the native ",e.jsx(n.code,{children:"input"})," element of an ",e.jsx(n.code,{children:"ods-input"})," component through the following code:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
  .my-input::part(input) {
    width: 300px;
  }
</style>

<ods-input class="my-input" ... />
`})}),`
`,e.jsx(n.p,{children:"Most of the component exposes one or more part like this, you can find more information on each component documentation page."}),`
`,e.jsx(n.h3,{id:"sass-helpers",children:"Sass helpers"}),`
`,e.jsx(n.p,{children:`In addition to the easier customization, we're also exposing the "basic" style of some core component as Sass mixins
that you can use to apply on a native element to get the same ODS rendering.`}),`
`,e.jsxs(n.p,{children:["For example, if you need to make an anchor tag looks like an ",e.jsx(n.code,{children:"ods-link"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@import '@ovhcloud/ods-components/style';

.my-link {
  @include ods-link();
  @include ods-link-color('primary');
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<a class="my-link" ...>...</a>
`})}),`
`,e.jsx(n.p,{children:`This can be useful when you can't manage some part of the DOM as you want, for example using a library that will always
render an anchor and that provide no custom templating.`}),`
`,e.jsx(n.p,{children:`Be careful though, this does only provide basic style, not all the feature of an ODS component, so we do recommend
to use the web-component by default.`}),`
`,e.jsx(n.h3,{id:"new-components",children:"New components:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"}),`
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-file-upload--documentation",children:"See Documentation"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"}),`
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-timepicker--documentation",children:"See Documentation"})]}),`
`,e.jsx(n.h3,{id:"component-changes",children:"Component changes:"}),`
`,e.jsxs(n.p,{children:["Please check the ",e.jsx(n.a,{href:"?path=/docs/ovhcloud-design-system-what-s-new-migration-guide-17-x-to-18-x--docs",children:"migration guide"})," regarding all the component changes."]}),`
`,e.jsx(n.h2,{id:"v1722",children:"v17.2.2"}),`
`,e.jsx(n.p,{children:"This update brings a few bug fixes across components, ensuring a smoother and more accessible user experience."}),`
`,e.jsx(n.h3,{id:"bug-fixes",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Button"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix the issue where the button was still clickable on the border while disabled."}),`
`]}),`
`,e.jsx(n.h3,{id:"feature-updates",children:"Feature updates:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Radio-button"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add 'XS' size to radio button."}),`
`]}),`
`,e.jsx(n.h2,{id:"v1721",children:"v17.2.1"}),`
`,e.jsx(n.p,{children:"This update brings a few bug fixes across components, ensuring a smoother and more accessible user experience."}),`
`,e.jsx(n.h3,{id:"bug-fixes-1",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Clipboard"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A white background is now properly displayed on the ",e.jsx(n.code,{children:"Popover"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A minimal height is now forced in the ",e.jsx(n.code,{children:"Menu"})," component, giving proper styling on the bottom margin."]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1720",children:"v17.2.0"}),`
`,e.jsxs(n.p,{children:["This update introduces our new ",e.jsx(n.code,{children:"Table"}),` component, enhances various features and improves documentation.
It also brings numerous bug fixes across components, ensuring a smoother and more accessible user experience.`]}),`
`,e.jsx(n.h3,{id:"new-component",children:"New component:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"}),`
`,e.jsx(n.a,{href:"?path=/story/table--default",children:"See Documentation"})]}),`
`,e.jsx(n.h3,{id:"documentation-improvements",children:"Documentation improvements:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Form Field"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Added an accessibility label."}),`
`,e.jsx(n.li,{children:"Updated Storybook Usage Guidelines."}),`
`]}),`
`,e.jsx(n.h3,{id:"feature-updates-1",children:"Feature updates:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Clipboard"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tooltip"})," now features a ",e.jsx(n.code,{children:"3 seconds"})," closing delay."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tooltip"})," won't be displayed if ",e.jsx(n.code,{children:"success-message"})," OR ",e.jsx(n.code,{children:"error-message"})," is not defined."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Datepicker"})," days are now displayed with 2 letters."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pagination"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New attribute ",e.jsx(n.code,{children:"defaultCurrentPage"})," has been added."]}),`
`,e.jsxs(n.li,{children:["New method ",e.jsx(n.code,{children:"getCurrentPage()"})," has been added."]}),`
`,e.jsxs(n.li,{children:["Old attribute ",e.jsx(n.code,{children:"current"})," has been removed."]}),`
`,e.jsxs(n.li,{children:["Navigation will be hidden if ",e.jsx(n.code,{children:"totalItems"})," is lower than ",e.jsx(n.code,{children:"itemPerPage"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-2",children:"Bug fixes:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),`
`,e.jsx(n.strong,{children:"Link"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple active states issue on Safari browsers has been fixed."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Error color on ",e.jsx(n.code,{children:"Datepicker"}),"'s border has been fixed."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Input"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Clearing the ",e.jsx(n.code,{children:"Input"})," now properly focuses it afterwards."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Overlaying elements can now overflow from the ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsxs(n.li,{children:["Pressing the ",e.jsx(n.code,{children:"ESCAPE"})," key when a ",e.jsx(n.code,{children:"Select"})," is open inside a ",e.jsx(n.code,{children:"Modal"})," no longer displays an unwanted backdrop."]}),`
`,e.jsx(n.li,{children:"Width value has been fixed on breakpoint."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Popover"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Overlaying elements can now overflow from the ",e.jsx(n.code,{children:"Popover"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Textarea"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Textarea"})," style has been fixed to match the ",e.jsx(n.code,{children:"Input"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tile"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Checked ",e.jsx(n.code,{children:"Tile"})," styling has been fixed on Safari."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Search Bar"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"odsSearchSubmit"})," event is now properly triggered on ",e.jsx(n.code,{children:"KEY_DOWN"})," input."]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1710",children:"v17.1.0"}),`
`,e.jsx(n.p,{children:`As we're working towards a massive uniformisation of all ODS form elements (events, nav behaviour, required state, validity state, ...),
the amount of changes is too important to be released immediatly.`}),`
`,e.jsx(n.p,{children:`This release brings the expected form-association of form elements, so that they act as native one for
formData submit and reset.`}),`
`,e.jsxs(n.p,{children:["It also fixes the missing types of event (",e.jsx(n.code,{children:"odsBlur"}),", ",e.jsx(n.code,{children:"odsFocus"}),", ",e.jsx(n.code,{children:"odsValueChange"}),")."]}),`
`,e.jsx(n.h3,{id:"documentation-improvements-1",children:"Documentation improvements:"}),`
`,e.jsx(n.p,{children:"Documentation usage guidelines have been completed with almost all components properties and slots:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"tons of new components examples"}),`
`,e.jsxs(n.li,{children:["dark background when ",e.jsx(n.code,{children:"contrasted"})," prop is set"]}),`
`,e.jsx(n.li,{children:"shortcuts have been disabled due to issue with some input preview"}),`
`]}),`
`,e.jsx(n.h3,{id:"feature-update",children:"Feature update:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pagination"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A new ",e.jsx(n.code,{children:"defaultItemsPerPage"})," has been added, which allows to define the initial value of ",e.jsx(n.code,{children:"itemsPerPage"})," on first render"]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-3",children:"Bug fixes:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Button"}),`
`,e.jsx(n.strong,{children:"Checkbox"}),`
`,e.jsx(n.strong,{children:"Radio"}),`
`,e.jsx(n.strong,{children:"Range"}),`
`,e.jsx(n.strong,{children:"Tile"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prevent click event on click when disabled on Chromium & Safari."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Modal is now correctly cleaned up on disconnect"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tile"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure position stays consistent regarding end/start slot emptiness"}),`
`]}),`
`,e.jsx(n.h3,{id:"miscellaneous",children:"Miscellaneous:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Upgrade to StencilJS 4.12"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1703",children:"v17.0.3"}),`
`,e.jsx(n.h3,{id:"bug-fixes-4",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Input"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Icon size are now displayed at the expected size"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Quantity"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Native arrow are now hidden on Safari"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Radio / Radio group"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Remove logger issue on documentation example page"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Toggle"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Toggle now shrink correctly when slot content are very large"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tile"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tile borders are now correctly rounded on Safari"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1702",children:"v17.0.2"}),`
`,e.jsx(n.h3,{id:"bug-fixes-5",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"enter"})," and ",e.jsx(n.code,{children:"space"})," keys binding on the close button + cancel button on Storybook"]}),`
`,e.jsx(n.li,{children:"Fixed display problems within the modal that could lead to some elements getting shrunk"}),`
`,e.jsx(n.li,{children:"Scroll is now prevented when a modal is open"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1701",children:"v17.0.1"}),`
`,e.jsx(n.h3,{id:"bug-fixes-6",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pagination"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Next & previous buttons have been fixed on Chrome & Safari where they could allow the user to go out of bound."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Radio-Button"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Smaller text has been fixed and is now aligning vertically as well."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Fonts"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fonts have been fixed to display the correct font on Safari."}),`
`]}),`
`,e.jsx(n.h2,{id:"v1700",children:"v17.0.0"}),`
`,e.jsxs(n.p,{children:["As it is a major version, you'll have to follow the ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-what-s-new-migration-guide-16-x-to-17-x--docs",children:"migration guide 16.x to 17.x"})]}),`
`,e.jsx(n.h3,{id:"project-changes-1",children:"Project changes:"}),`
`,e.jsx(n.p,{children:"Main focus on this version has been on simplifying ODS integration in existing projects (React, Vue, JS, ...)."}),`
`,e.jsxs(n.p,{children:["We now only publish one ",e.jsx(n.code,{children:"ods-components"})," library that embed all the ODS components."]}),`
`,e.jsx(n.p,{children:"What this means for your code:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ods-component-xxx"})," are no longer published and should be removed"]}),`
`,e.jsxs(n.li,{children:["only one dependency to add to your ",e.jsx(n.code,{children:"package.json"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"ods-components": "17.0.0"
`})}),`
`,e.jsx(n.p,{children:"ODS components can then be either imported using lazy-loading (the code of each component is loaded on demand) or as a module (the code of the component is tree-shaked by your own bundling system)."}),`
`,e.jsx(n.p,{children:"For more details on how to import ODS components, see:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["the updated ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-get-started--docs#how-to-use-ods-components-in-my-project",children:"Get Started documentation"})]}),`
`,e.jsxs(n.li,{children:["the 16.x to 17.x ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-what-s-new-migration-guide-16-x-to-17-x--docs",children:"Migration guide"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"documentation-improvments",children:"Documentation improvments"}),`
`,e.jsx(n.p,{children:"We went through each component to update:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the Demo controls to be more relevant"}),`
`,e.jsx(n.li,{children:"the Usage Guidelines, with more examples and the missing properties"}),`
`,e.jsxs(n.li,{children:["with React example when relevant (ex: ",e.jsx(n.code,{children:"datagrid"})," reactFormatter with React 18 or ",e.jsx(n.code,{children:"tabs"})," with React Router)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"component-changes-1",children:"Component changes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pagination"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"odsItemPerPageChange"})," when the item per page select change"]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-7",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datagrid"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Overflowing elements can now correctly be displayed (see updated documentation)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ellipsis is now correctly displayed on Safari"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Inner element with overlay are now correctly displayed"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tabs"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix hover rendering"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1660",children:"v16.6.0"}),`
`,e.jsx(n.h3,{id:"feature-update-1",children:"Feature update:"}),`
`,e.jsx(n.p,{children:"** Breadcrumb **"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add attributes on ",e.jsx(n.code,{children:"breadcrumItem"})," : ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"referrerpolicy"}),", ",e.jsx(n.code,{children:"target"})]}),`
`,e.jsxs(n.li,{children:["Add event on ",e.jsx(n.code,{children:"breadcrumItem"})," : ",e.jsx(n.code,{children:"odsBreadcrumbItemClick"})]}),`
`,e.jsxs(n.li,{children:["Update ",e.jsx(n.code,{children:"OdsHTMLAnchorElementRel"})," type"]}),`
`]}),`
`,e.jsx(n.p,{children:"** Chip **"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"odsChipRemoval"})," event"]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"OsdsChip"})," is removable and is clicked, it will emit event ",e.jsx(n.code,{children:"odsChipRemoval"})]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"OsdsChip"})," is removable, focused on and key Enter is pressed, it will emit event ",e.jsx(n.code,{children:"odsChipRemoval"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-8",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:"** Button **"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix position of end slot when start slot is empty in ",e.jsx(n.code,{children:"OsdsButton"})]}),`
`]}),`
`,e.jsx(n.p,{children:"** Datagrid **"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the ",e.jsx(n.code,{children:"OsdsDatagrid"})," contains an overflowing on-interaction element (such as ",e.jsx(n.code,{children:"OsdsMenu"}),", ",e.jsx(n.code,{children:"OsdsTooltip"}),", ",e.jsx(n.code,{children:"OsdsSelect"})," or ",e.jsx(n.code,{children:"OsdsPopover"}),"), the element is either being displayed at the top left corner of the ",e.jsx(n.code,{children:"OsdsDatagrid"})," (native) or beneath the element, making it unvisible (React). This fix intends to correct this problem in both environments."]}),`
`]}),`
`,e.jsx(n.p,{children:"** Pagination **"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"itemPerPage"})," in payload event ",e.jsx(n.code,{children:"odsChange"})]}),`
`,e.jsxs(n.li,{children:["Watch ",e.jsx(n.code,{children:"totalPages"})," & update it"]}),`
`]}),`
`,e.jsx(n.p,{children:"** PhoneNumber **"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix shadow of flag icon in the select that was cut behind overflow"}),`
`]}),`
`,e.jsx(n.p,{children:"** Components **"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Some components were missing from package.json of components: ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"range"}),", ",e.jsx(n.code,{children:"toggle"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1650",children:"v16.5.0"}),`
`,e.jsx(n.h3,{id:"feature-update-2",children:"Feature update:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Documentation"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple updates to clarify documentation. (Welcome page, Get started, Design tokens, Code, Contributing & libraries)"}),`
`,e.jsx(n.li,{children:"Removing Starter documentation, as it is deprecated for now."}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-9",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datagrid"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"OsdsDatagrid"})," now emits the event ",e.jsx(n.code,{children:"onBottomScroll"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"OsdsDatagrid"})," now supports React Formatters."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/?path=/story/ods-components-layout-datagrid-organism-usage-react--docs",children:"See React Documentation"})}),`
`,e.jsx(n.li,{children:"Row change has been fixed."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"OsdsModal"})," is now using a ",e.jsx(n.code,{children:"HTMLDialogElement"}),","]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Phone number"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Flags have been fixed to be displayed with proper width & height."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Select"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Enhanced React support for ",e.jsx(n.code,{children:"OsdsSelect"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Storybook"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Storybook errors with displaying ",e.jsx(n.code,{children:"OsdsPhoneNumber"})," & ",e.jsx(n.code,{children:"OsdsSearchBar"})," inputs has been fixed."]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1640",children:"v16.4.0"}),`
`,e.jsx(n.h3,{id:"new-component-1",children:"New component:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datagrid"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/datagrid%E2%80%94default",children:"See Documentation"})}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-10",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Phone number"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Now consistently triggers ",e.jsx(n.code,{children:"odsValueChange"})," event on type."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Storybook"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The release list now correctly displays the name of the latest version."}),`
`]}),`
`,e.jsx(n.h3,{id:"feature-update-3",children:"Feature update:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Component Generator"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component Generator has been upgraded to align with the new architecture (introduced in version 16.0.0)."}),`
`]}),`
`,e.jsx(n.h2,{id:"v1632",children:"v16.3.2"}),`
`,e.jsx(n.h3,{id:"new-component-2",children:"New component:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Medium"}),`
`,e.jsx(n.a,{href:"?path=/story/medium--default",children:"See Documentation"})]}),`
`,e.jsx(n.h3,{id:"bug-fixes-11",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Phone number"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Emit event when the value is valid"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Accordion"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Can't open when the component is disabled"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Quantity"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Change the value onblur to be valid with step"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add event open & close (odsModalOpen, odsModalClose)"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1631",children:"v16.3.1"}),`
`,e.jsx(n.h3,{id:"bug-fixes-12",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The siblings months days are now updated after the datepicker was updated"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Select"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keyboard navigation correction"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1630",children:"v16.3.0"}),`
`,e.jsx(n.h3,{id:"component-changes-2",children:"Component changes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Button"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each variant now display correctly when using circle button"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️️ ",e.jsx(n.strong,{children:"Breaking change"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Circle button may render differently regarding the variant you're using"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component now close itself when value is selected"}),`
`,e.jsxs(n.li,{children:["You can now hide adjacent month days with the attributes ",e.jsx(n.code,{children:"showSiblingsMonthDays"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Flag"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component has been refactored internally, but this should not have any impacts"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Icon"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component has been refactored internally, but this should not have any impacts"}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-13",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Menu"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Now correctly work when used with React"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Select"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On Safari the component is displayed correctly when using flex"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Textarea"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On Safari the component is displayed correctly when using flex"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tile"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On Safari the component is displayed correctly when using flex"}),`
`]}),`
`,e.jsx(n.h3,{id:"project-changes-2",children:"Project changes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The whole project is now built using Stenciljs v4.7"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️️ ",e.jsx(n.strong,{children:"Breaking change"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We don't generate the bundle ",e.jsx(n.code,{children:"custom-elements-bundle"})," anymore"]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1621",children:"v16.2.1"}),`
`,e.jsx(n.h3,{id:"component-changes-3",children:"Component changes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New attribute ",e.jsx(n.code,{children:"locale"})," to manage internationalization, accepted locales are for now:"]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"French"}),`
`,e.jsx(n.li,{children:"English"}),`
`,e.jsx(n.li,{children:"German"}),`
`,e.jsx(n.li,{children:"Spanish"}),`
`,e.jsx(n.li,{children:"Italian"}),`
`,e.jsx(n.li,{children:"Polish"}),`
`,e.jsx(n.li,{children:"Portuguese"}),`
`,e.jsx(n.li,{children:"Dutch"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Text"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component has been refactored internally, but this should not have any impacts"}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-14",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add missing constants and types exports"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Is now correctly destroyed on page change"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Popover"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Now correctly work when used with React"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Select"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selected value is now correctly updated on cnange (ex: translation change)"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1620",children:"v16.2.0"}),`
`,e.jsx(n.h3,{id:"new-component-3",children:"New component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Datepicker"}),": ",e.jsx(n.a,{href:"?path=/story/datepicker--default",children:"See Documentation"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"component-changes-4",children:"Component changes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Clipboard"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Added tooltip confirmation message on paste"}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-15",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Textarea"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Correctly emit ",e.jsx(n.code,{children:"odsValueChange"})," event on value change."]}),`
`]}),`
`,e.jsx(n.h3,{id:"documentation-changes",children:"Documentation changes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Improve typedoc documentation"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1611",children:"v16.1.1"}),`
`,e.jsx(n.h3,{id:"documentation-fixes",children:"Documentation fixes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Component specification pages now displays correct information"}),`
`,e.jsx(n.li,{children:"Tile sandbox now uses correct list of commands"}),`
`]}),`
`,e.jsx(n.h2,{id:"v1610",children:"v16.1.0"}),`
`,e.jsx(n.h3,{id:"new-component-4",children:"New component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Phone Number"}),": ",e.jsx(n.a,{href:"?path=/story/phone-number--default",children:"See Documentation"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"component-changes-5",children:"Component changes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Input"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New attribute ",e.jsx(n.code,{children:"prefixValue"})," that allow to display a fixed prefix in front of the input value."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Progress Bar"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️️ ",e.jsx(n.strong,{children:"Breaking change"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max"})," and ",e.jsx(n.code,{children:"value"})," attributes are now ",e.jsx(n.code,{children:"number"})," and won",e.jsx(n.code,{children:"t accept "}),"string` anymore."]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-16",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Code"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Contrasted version have now the right color."}),`
`]}),`
`,e.jsx(n.h3,{id:"project-changes-3",children:"Project changes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The whole project is now built using node 18."}),`
`]}),`
`,e.jsx(n.h2,{id:"v1601",children:"v16.0.1"}),`
`,e.jsx(n.p,{children:"Fixes CI build issues when deploying Storybook."}),`
`,e.jsx(n.h2,{id:"v1600",children:"v16.0.0"}),`
`,e.jsxs(n.p,{children:["As it is a major version, you'll have to follow the ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-what-s-new-migration-guide-15-x-to-16-x--docs",children:"migration guide 15.x to 16.x"})]}),`
`,e.jsx(n.p,{children:"⚠️We're aware that not all the documentation is up-to-date with the latest technical changes ⚠️"}),`
`,e.jsx(n.p,{children:"⚠️We're currently working on improving the storybook but didn't want to delay the release much more ⚠️"}),`
`,e.jsx(n.p,{children:"⚠️If you have any issue migrating, reach us directly and we'll help you. ⚠️"}),`
`,e.jsx(n.h3,{id:"project-changes-4",children:"Project changes:"}),`
`,e.jsx(n.p,{children:"This version embed the whole new project architecture (initiated with the v15)."}),`
`,e.jsx(n.p,{children:"We now have seperations between:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cdk"})," (@ovhcloud/ods-cdk) which provides public non component related utilities."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"common"})," libs (@ovhcloud/ods-common-[core|stencil|testing|theming]) which provides internal helpers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"components"})," (@ovhcloud/ods-components or @ovhcloud/ods-component-",e.jsx(n.code,{children:"<component-name>"}),") which provide the agnostic components and their React, Vue wrapped versions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"examples"})," (@ovhcloud/ods-starter-[react|react-vite|vue-vite]) which contains application examples that use some ODS components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shared-dependencies"})," to share common dependencies internally accross projects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storybook"})," (@ovhcloud/ods-storybook) which tends to centralize all the ODS documentation content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"themes"})," (@ovhcloud/ods-theme-blue-jeans) which provides all existing themes that can be applied to ODS."]}),`
`]}),`
`,e.jsx(n.h3,{id:"component-changes-6",children:"Component changes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"All Components"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-stencil"})," package does not exists anymore."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Components are now accessible by adding either ",e.jsx(n.code,{children:"@ovhcloud/ods-component-<component>"})," or ",e.jsx(n.code,{children:"@ovhcloud/ods-components"})," dependency."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"@ovhcloud/ods-stencil-<component>"})," libs have been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-<component>"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"@ovhcloud/ods-stencil-<component>-react"})," libs have been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-<component>-react"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"@ovhcloud/ods-stencil-<component>-vue"})," libs have been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-<component>- vue"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Constants/Enums have been renamed to follow new naming convention:"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"All constants are now in UPPER_SNAKE_CASE."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"All objects are now in singular form."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"All lists are now in plural form."}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Ex:
`,e.jsx(n.code,{children:"OdsSpinnerSize"})," is now ",e.jsx(n.code,{children:"ODS_SPINNER_SIZE"}),`.
`,e.jsx(n.code,{children:"OdsSpinnerSizeList"})," is now ",e.jsx(n.code,{children:"ODS_SPINNER_SIZES"}),`.
`,e.jsx(n.code,{children:"OdsSpinnerSizeUnion"})," has been removed."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Exported types follow also the same naming convention, thus most of them are now in singular form."}),`
`]}),`
`,e.jsxs(n.p,{children:[`Ex:
`,e.jsx(n.code,{children:"OdsSpinnerAttributes"})," is now ",e.jsx(n.code,{children:"OdsSpinnerAttribute"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A lot of empty types who were exported previously have been removed."}),`
`]}),`
`,e.jsxs(n.p,{children:[`Ex:
`,e.jsx(n.code,{children:"OdsSpinnerEvents"}),` have been removed, as the component does not handle any events.
`,e.jsx(n.code,{children:"OdsSpinnerMethods"})," have been removed, as the component does not expose any methods."]}),`
`,e.jsx(n.h3,{id:"new-component-5",children:"New component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clipboard"}),": ",e.jsx(n.a,{href:"?path=/story/ui-components-clipboard-atom-web-component--default",children:"See Documentation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Menu"}),": ",e.jsx(n.a,{href:"?path=/story/menu--default",children:"See Documentation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modal"}),": ",e.jsx(n.a,{href:"?path=/story/modal--default",children:"See Documentation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search Bar"}),": ",e.jsx(n.a,{href:"?path=/story/ui-components-search-bar-atom-web-component--default",children:"See Documentation"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"features-changes",children:"Features changes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Button"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add a new attribute ",e.jsx(n.code,{children:"textAlign"})," which allows to choose the button text alignement between ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"end"})," and ",e.jsx(n.code,{children:"start"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-17",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Button"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Main slot is now correctly aligned vertically (visible when using icon)."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Flag"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Flags are now correctly displayed in the documentation."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Link"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Outline is now correctly updated on viewport change."}),`
`]}),`
`,e.jsx(n.h2,{id:"v1501",children:"v15.0.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix new packages release process."}),`
`,e.jsx(n.li,{children:"Update documentation."}),`
`]}),`
`,e.jsx(n.h2,{id:"v1500",children:"v15.0.0"}),`
`,e.jsxs(n.p,{children:["As it is a major version, you have to do the ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-what-s-new-migration-guide-14-x-to-15-x--docs",children:"migration guide 14.x to 15.x"})]}),`
`,e.jsx(n.h3,{id:"project-changes-5",children:"Project changes:"}),`
`,e.jsx(n.p,{children:`This version is the first step towards the new ODS internal architecture.
The goal of this refactoring is to simplify and improve the whole project to:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"provide a better developer experience and thus reduce development time"}),`
`,e.jsx(n.li,{children:"normalize all components behavior / design / attributes"}),`
`,e.jsx(n.li,{children:"have better control on dependencies and lib version upgrade"}),`
`,e.jsx(n.li,{children:"have better control on what ODS expose (through component or CDK)"}),`
`,e.jsx(n.li,{children:"..."}),`
`]}),`
`,e.jsxs(n.p,{children:["This first step only impact two components ",e.jsx(n.code,{children:"osds-text"})," and ",e.jsx(n.code,{children:"osds-textarea"}),"."]}),`
`,e.jsx(n.p,{children:"All other components will follow on next version."}),`
`,e.jsx(n.p,{children:"Then common ODS lib and theming will be refactored on next version."}),`
`,e.jsx(n.h3,{id:"features-changes-1",children:"Features changes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Text"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OsdsText"})," is no longer part of ",e.jsx(n.code,{children:"@ovhcloud/ods-stencil"})," package."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OsdsText"})," is now accessible by adding either ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text"})," or ",e.jsx(n.code,{children:"@ovhcloud/ods-components"})," dependency."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-stencil-text"})," lib has been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-stencil-text-react"})," lib has been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text-react"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-stencil-text-vue"})," lib has been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text- vue"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextSize"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"})," and has been replaced by ",e.jsx(n.code,{children:"ODS_TEXT_SIZE"})," from ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextSizeList"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"})," and is replaced by ",e.jsx(n.code,{children:"ODS_TEXT_SIZES"})," from ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextSizeUnion"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextLevel"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"})," and has been replaced by ",e.jsx(n.code,{children:"ODS_TEXT_LEVEL"})," from ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextLevelList"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"})," and is replaced by ",e.jsx(n.code,{children:"ODS_TEXT_LEVELS"})," from ",e.jsx(n.code,{children:"@ovhcloud/ods-component-text"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextLevelUnion"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-component-text"})," exports only ",e.jsx(n.code,{children:"OdsTextAttribute"})," as component interface."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Textarea"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OsdsTextarea"})," is no longer part of ",e.jsx(n.code,{children:"@ovhcloud/ods-stencil"})," package."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OsdsTextarea"})," is now accessible by adding either ",e.jsx(n.code,{children:"@ovhcloud/ods-component-textarea"})," or ",e.jsx(n.code,{children:"@ovhcloud/ods-components"})," dependency."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-stencil-textarea"})," lib has been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-textarea"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-stencil-textarea-react"})," lib has been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-textarea-react"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-stencil-textarea-vue"})," lib has been replaced by ",e.jsx(n.code,{children:"@ovhcloud/ods-component-textarea- vue"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextAreaSize"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"})," and is replaced by ",e.jsx(n.code,{children:"ODS_TEXTAREA_SIZE"})," from ",e.jsx(n.code,{children:"@ovhcloud/ods-component-textarea"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextAreaSizeList"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"})," and is replaced by ",e.jsx(n.code,{children:"ODS_TEXTAREA_SIZES"})," from ",e.jsx(n.code,{children:"@ovhcloud/ods-component-textarea"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OdsTextAreaSizeUnion"})," has been removed from ",e.jsx(n.code,{children:"@ovhcloud/ods-core"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-component-textarea"})," exports only ",e.jsx(n.code,{children:"OdsTextAttribute"}),", ",e.jsx(n.code,{children:"OdsTextAreaEvent"})," and ",e.jsx(n.code,{children:"OdsTextAreaValueChangeEvent"})," as component interfaces."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OsdsTextarea"})," is now displayed as flex by default."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OsdsTextarea"})," ",e.jsx(n.code,{children:"flex"})," attribute has been removed."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OsdsTextarea"})," ",e.jsx(n.code,{children:"inline"})," attribute has been added."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1410",children:"v14.1.0"}),`
`,e.jsx(n.h3,{id:"new-features",children:"New features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"CDK"})}),`
`,e.jsx(n.li,{children:"Manage surface position when located on the edge."}),`
`,e.jsxs(n.li,{children:["The surface can now be centered at the top or bottom of the trigger. ",e.jsx(n.a,{href:"?path=/story/libraries-cdk-overlay-strategies-symmetry--docs",children:"See CDK Documentation"})]}),`
`]}),`
`,e.jsx(n.p,{children:"We added the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form Field"}),": ",e.jsx(n.a,{href:"?path=/story/form-field--default",children:"See Form Field Documentation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Switch"}),": ",e.jsx(n.a,{href:"?path=/story/switch--default",children:"See Form Field Documentation"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"features-changes-2",children:"Features changes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pagination"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Add tooltip to the arrows."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Can now show pages according to a numbers of items shown by page."}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For more information, check our documentation ",e.jsx(n.a,{href:"?path=/story/ui-components-pagination-molecule-specifications--docs",children:"See Pagination Documentation"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Location-tile"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Component is now deprecated and won't be supported anymore. It will be deleted in a future release."}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For more information, check our replacement guide ",e.jsx(n.a,{href:"?path=/story/ui-components-location-tile-deprecated-remplacement--docs",children:"See Location Tile Documentation"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-18",children:"Bug fixes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"}),":"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Radio button is now unfocusable when disabled"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Input"}),":"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"cursor is set to not-allowed when disabled"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1400",children:"v14.0.0"}),`
`,e.jsxs(n.p,{children:["As it is a major version, you have to do the ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-what-s-new-migration-guide-13-x-to-14-x--docs",children:"migration guide 13.x to 14.x"})]}),`
`,e.jsx(n.h3,{id:"new-features-1",children:"New features:"}),`
`,e.jsx(n.p,{children:"We added the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Progress Bar"}),": ",e.jsx(n.a,{href:"?path=/story/progress-bar--default",children:"See Progress Bar Documentation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Popover"}),": ",e.jsx(n.a,{href:"?path=/story/popover--default",children:"See Popover Documentation"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tooltip"}),": ",e.jsx(n.a,{href:"?path=/story/tooltip--default",children:"See Popover Documentation"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Components version 2:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input V2"}),": ",e.jsx(n.a,{href:"?path=/story/input--default",children:"See Input Documentation"})]}),`
`,e.jsx(n.li,{children:"new properties have been added"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading"}),": it displays a Spinner"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"clearable"}),": it clears the input value on click"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"masked"}),": it indicates if the input value is hidden or not (to be used with password type)"]}),`
`,e.jsxs(n.li,{children:["new types have been added: ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"password"}),", ",e.jsx(n.code,{children:"search"}),", ",e.jsx(n.code,{children:"tel"}),", ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"time"})," and ",e.jsx(n.code,{children:"url"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select V2"}),": it is now connected to our CDK and keyboard navigation has been added ",e.jsx(n.a,{href:"?path=/story/select--default",children:"See Select Documentation"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"}),` component accepts four digits in the input field:
`,e.jsx(n.a,{href:"?path=/story/quantity--default",children:"See Quantity Documentation"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"CDK"}),` (Component Development Kit): new symmetry strategies have been added (left and right):
`,e.jsx(n.a,{href:"?path=/story/libraries-cdk-overlay-introduction--docs",children:"See CDK Documentation"})]}),`
`,e.jsx(n.h3,{id:"bug-fixes-19",children:"Bug fixes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tile"}),":"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hoverable"})," attribute has been added to avoid double focus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interactive"})," attribute has been removed"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️️ ",e.jsx(n.strong,{children:"Breaking change"}),e.jsx("br",{}),`
For more information, check our migration guide`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link"}),":"]}),`
`,e.jsx(n.li,{children:"add missing color for active state"}),`
`,e.jsx(n.li,{children:"fix Link host container size to match its content"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),": add ",e.jsx(n.code,{children:"hoverable"})," attribute so component color can change when in selectable parent"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checkbox Button"}),": aspect ratio has been added"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Quantity"}),": icons alignment has been fixed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Textarea"}),": when component is resized and ",e.jsx(n.code,{children:"flex"})," attribute is set to ",e.jsx(n.code,{children:"true"})," and then, set back to ",e.jsx(n.code,{children:"false"}),", Textarea width is no more blocked to 100%"]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1300",children:"v13.0.0"}),`
`,e.jsxs(n.p,{children:["As it is a major version, you have to do the ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-what-s-new-migration-guide-12-x-to-13-x--docs",children:"migration guide 12.x to 13.x"})]}),`
`,e.jsx(n.h3,{id:"new-features-2",children:"New features:"}),`
`,e.jsx(n.p,{children:"We added the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Breadcrumb: ",e.jsx(n.a,{href:"?path=/story/breadcrumb--default",children:"See Breadcrumb Documentation"})]}),`
`,e.jsxs(n.li,{children:["Collapsible: ",e.jsx(n.a,{href:"?path=/story/collapsible--default",children:"See Collapsible Documentation"})]}),`
`,e.jsxs(n.li,{children:["Pagination: ",e.jsx(n.a,{href:"?path=/story/pagination--default",children:"See Pagination Documentation"})]}),`
`,e.jsxs(n.li,{children:["Spinner: ",e.jsx(n.a,{href:"?path=/story/spinner--default",children:"See Spinner Documentation"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/story/button--default",children:"Circle-shaped button"})," has been added to Button Component (circle attribute)"]}),`
`,e.jsx(n.h3,{id:"bug-fixes-20",children:"Bug fixes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Button: ",e.jsx(n.code,{children:"button' and "}),"link",e.jsx(n.code,{children:"roles have been added (switching to"}),"link` role when Button has a href property)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Chip: expected style on Chip focus has been applied"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Icon: missing download icon has been added"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Input: odsValueChange event won't emit on component init"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Link:"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"all content in Link is now aligned as expected"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"href and target attributes are optional"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Select :"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"check for outside click target inside its DOM"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"fixed width on non flex Select has been removed"}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️️ ",e.jsx(n.strong,{children:"Breaking change"}),e.jsx("br",{}),`
For more information, check our migration guide`]}),`
`]}),`
`,e.jsx(n.h2,{id:"v1210",children:"v12.1.0"}),`
`,e.jsx(n.h3,{id:"new-features-3",children:"New features:"}),`
`,e.jsxs(n.p,{children:["We added the Tabs component.",e.jsx("br",{}),`
`,e.jsx(n.a,{href:"?path=/story/ui-components-tabs-atom-specifications--docs",children:"See Tabs Documentation"})]}),`
`,e.jsxs(n.p,{children:["A component generator has been added. Now, you can use that tool to generate a new component easily.",e.jsx("br",{}),`
`,e.jsx(n.a,{href:"?path=/story/contributing-how-to-s-create-a-component--docs",children:"See Component Generator in Contributing Documentation"})]}),`
`,e.jsxs(n.p,{children:["A coding Style has also been added so you can check our guidelines and how to write code for OVHcloud Design System project.",e.jsx("br",{}),`
`,e.jsx(n.a,{href:"?path=/story/code-our-principles-coding-style--docs",children:"See Component Coding Style Rules"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"?path=/story/contributing-get-started--docs",children:"Contributing Documentation"})," has been updated:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"How to use a component in an other one"}),`
`,e.jsx(n.li,{children:"Theming: how to customize a style"}),`
`,e.jsx(n.li,{children:"some warning about pushing any sensitive content"}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes-21",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:"Range component color when in error has been fixed."}),`
`,e.jsxs(n.p,{children:["Some width issue on Button component has been fixed.",e.jsx("br",{}),`
When in flex, a Button can now display an ellipsis for text content when necessary.`]}),`
`,e.jsx(n.h2,{id:"v1205",children:"v12.0.5"}),`
`,e.jsx(n.h3,{id:"bug-fixes-22",children:"Bug fixes:"}),`
`,e.jsx(n.p,{children:"Button component of type submit in a form will now submit the form as expected (by click or Enter / Space keys)."}),`
`,e.jsxs(n.p,{children:["Quantity component issue has been fixed regarding minus control that should be disabled when the input ",e.jsx(n.code,{children:"min"})," attribute is equal to 0 and its value has reached 0 too."]}),`
`,e.jsx(n.h2,{id:"v1200",children:"v12.0.0"}),`
`,e.jsx(n.p,{children:"First release on GitHub. There is no new feature in this version. It is now open source"}),`
`,e.jsx(n.h2,{id:"v1100",children:"v11.0.0"}),`
`,e.jsxs(n.p,{children:[`Flag component has been modified; you’ll need to update as explained in the migration guide.
For more details about assets, see `,e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-get-started--docs",children:"Installation"}),` page.
New attributes are available on this component: `,e.jsx(n.code,{children:"lazy"}),", ",e.jsx(n.code,{children:"assetPath"})," and ",e.jsx(n.code,{children:"src"}),"."]}),`
`,e.jsxs(n.p,{children:["Before importing any component you now have to setup ods, for more details see ",e.jsx(n.a,{href:"?path=/story/code-migration-guide-10-x-to-11-x--docs",children:"migration guide 10.x to 11.x"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/story/range--dual",children:"Dual range"})," is now available for Range component; It offers two handles to set a min and max value."]}),`
`,e.jsxs(n.p,{children:[`To build resilient infrastructure and promote sustainable industrialization, we moved code that could be agnostic.
Now, ODS components logic has been moved into controllers.
If you want to contribute to ODS by developing new components, please refer to the how-to section for controllers in our `,e.jsx(n.a,{href:"?path=/story/contributing-how-to-s-create-a-controller--docs",children:"Storybook"}),"."]}),`
`,e.jsxs(n.p,{children:["Now, Button component has ",e.jsx(n.code,{children:"download"})," and ",e.jsx(n.code,{children:"rel"})," new attributes available when it is used as a link (href)."]}),`
`,e.jsx(n.p,{children:`We had blur events on Quantity component to set the correct value regarding the Quantity bounds.
It means when the user set manually a value that is out of bounds for Quantity, the value will be automatically reset to a correct value.
When Quantity is out of bounds, the field value is now in error state.`}),`
`,e.jsxs(n.p,{children:["As it is a major version, you have to do the ",e.jsx(n.a,{href:"?path=/story/code-migration-guide-10-x-to-11-x--docs",children:"migration guide 10.x to 11.x"})]}),`
`,e.jsx(n.h2,{id:"v1020",children:"v10.2.0"}),`
`,e.jsxs(n.p,{children:["A new library called ",e.jsx(n.code,{children:"CDK"})," for ",e.jsx(n.code,{children:"Component Development Kit"}),` is available.
The main objective is to make the development to be easier thanks to helpers.
The first integrated feature is an overlay system that allows manipulating and displaying content
on foreground of the page.
`,e.jsx(n.a,{href:"?path=/story/cdk-introduction--docs",children:"CDK Documentation"})]}),`
`,e.jsxs(n.p,{children:["We added a new entire section for ",e.jsx(n.code,{children:"contributions"}),` in the storybook.
Feel free to read the `,e.jsx(n.a,{href:"?path=/story/contributing-getting-started--docs",children:"Contributing Documentation"})," if you want to contribute."]}),`
`,e.jsxs(n.p,{children:["We simplified our developer environment with a ",e.jsx(n.code,{children:"global.dev.ts"}),` file in order to
make the developer tests isolated from the production build.`]}),`
`,e.jsx(n.p,{children:"We optimized our CI/CD workflow for a more reactive and efficient build time and release time."}),`
`,e.jsx(n.p,{children:"We fixed some issue about automated screenshot testing with some timeout."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/story/code-changelog--docs",children:"Technical Changelog"})}),`
`,e.jsx(n.h2,{id:"v1010",children:"v10.1.0"}),`
`,e.jsxs(n.p,{children:[`We added the select component (version 1).
`,e.jsx(n.a,{href:"?path=/story/ui-components-select-atom-specifications--docs",children:"See Select Documentation"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/story/code-changelog--docs",children:"Technical Changelog"})}),`
`,e.jsx(n.h2,{id:"v1000",children:"v10.0.0"}),`
`,e.jsx(n.p,{children:"We updated a lot of third dependencies (stencilJs, typescript, jest, puppeteer, ...):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`@stencil/core ~2.6.0 to ~2.18.1
@stencil/sass ~1.4.1 to ~2.0.0
jest ~26.6.3 to ~27.4.5
@types/jest ~26.0.24 to ~27.5.2
jest-cli ~26.6.3 to ~27.4.5
jest-puppeteer ^5.0.4 to ~6.1.1
jest-puppeteer-preset ^5.0.4 to ~6.1.1
ts-jest ~26.5.6 to ~27.1.5
typescript 4.2.3 to 4.7.4
puppeteer ~5.5.0 to ~10.0.0
yarn-2.4.2 to yarn-3.2.4
node-fetch ~2.6.6 to ~2.6.7
ts-node ~9.1.1 to ~10.7.0
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you are an ",e.jsx(n.code,{children:"ODS"})," contributor, you may need to do some changes"]}),`
`]}),`
`,e.jsxs(n.p,{children:["We now build all of our components for ",e.jsx(n.code,{children:"React"})," and ",e.jsx(n.code,{children:"Vue"}),` frameworks.
They allow to use all the potential and features of your high-end JS framework.
You can read the updated `,e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-get-started--docs",children:"Getting Started"}),`
and more especially the `,e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-get-started--docs#ods-starters",children:"ODS Starters chapter"}),`
to initialize an App with ODS and see how it works depending the framework.`]}),`
`,e.jsxs(n.p,{children:["Also, ",e.jsx(n.code,{children:"ods-cart"})," is no more impacted by a parent container with ",e.jsx(n.code,{children:"text-align:center"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ods-textarea"})," had an incorrect ",e.jsx(n.code,{children:"spellcheck"})," property than could be equal to ",e.jsx(n.code,{children:`spellcheck="false'`}),` which is incorrect in HTML.
Now it is in DOM only if it is `,e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["You can now disable animation on ",e.jsx(n.code,{children:"ods-toggle"})," by defining a CSS value ",e.jsx(n.code,{children:"--ods-toggle-transition-slider: none"}),"."]}),`
`,e.jsxs(n.p,{children:["Css variables ",e.jsx(n.code,{children:"--ods-size-squish-n-*"})," and ",e.jsx(n.code,{children:"--ods-size-stretch-n-*"}),` are no more incorrect.
It was previously set with only one number instead of two, accordingly with CSS3.`]}),`
`,e.jsxs(n.p,{children:["As it is a major version, you have to do the ",e.jsx(n.a,{href:"?path=/story/code-migration-guide-9-x-to-10-x--docs",children:"migration guide 9.x to 10.x"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/story/code-changelog--docs",children:"Technical Changelog"})}),`
`,e.jsx(n.h2,{id:"v910",children:"v9.1.0"}),`
`,e.jsx(n.p,{children:"Adding 2 new components :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"accordion: display a content that can be collapsed"}),`
`,e.jsx(n.li,{children:"code: display a snippet of code and copy it into the clipboard"}),`
`]}),`
`,e.jsx(n.p,{children:`If you already have customized themes, you have to declare the variables for this 2 new components.
see more in the migration guide 9.x`}),`
`,e.jsx(n.h2,{id:"february-2022",children:"February 2022"}),`
`,e.jsxs(n.p,{children:["The V1 ",e.jsx(n.strong,{children:"Design System"})," graphical charter is finalized. This charter contains :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple color palettes (blue, gray, red, orange, green, availability & promotion extra colors)"}),`
`,e.jsx(n.li,{children:"A Typography system"}),`
`,e.jsx(n.li,{children:"All spacing options"}),`
`,e.jsx(n.li,{children:"Components:"}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Buttons"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form items"})," (inputs, dropdowns, checkboxes, radios, radio buttons, toggle buttons, range, textarea, etc.)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Chips & Badges"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Cards"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Cart"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://xd.adobe.com/view/031606c8-8f2f-4163-a2c2-f037d64bb294-5645",rel:"nofollow",children:"It is visible here"})})]})}function u(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
