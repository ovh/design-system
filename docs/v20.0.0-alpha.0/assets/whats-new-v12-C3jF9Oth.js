import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,Heading:a}=t;return i||o(`DocLink`,!0),a||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`Release notes of v12 and earlier. For the current major version, see `,(0,r.jsx)(i,{to:`/guides/whats-new`,children:`What's new`}),`.`]})}),`
`,(0,r.jsx)(a,{label:`v12.1.0`,level:2}),`
`,(0,r.jsx)(a,{label:`New features`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`We added the Tabs component.`,(0,r.jsx)(`br`,{})]}),`
`,(0,r.jsx)(i,{to:`/components/tabs`,children:`See Documentation`}),`
`,(0,r.jsxs)(t.p,{children:[`A component generator has been added. Now, you can use that tool to generate a new component easily.`,(0,r.jsx)(`br`,{})]}),`
`,(0,r.jsxs)(t.p,{children:[`A coding Style has also been added so you can check our guidelines and how to write code for OVHcloud Design System project.`,(0,r.jsx)(`br`,{})]}),`
`,(0,r.jsx)(t.p,{children:`The Contributing Documentation has been updated:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`How to use a component in an other one`}),`
`,(0,r.jsx)(t.li,{children:`Theming: how to customize a style`}),`
`,(0,r.jsx)(t.li,{children:`some warning about pushing any sensitive content`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Range component color when in error has been fixed.`}),`
`,(0,r.jsxs)(t.p,{children:[`Some width issue on Button component has been fixed.`,(0,r.jsx)(`br`,{}),`
When in flex, a Button can now display an ellipsis for text content when necessary.`]}),`
`,(0,r.jsx)(a,{label:`v12.0.5`,level:2}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Button component of type submit in a form will now submit the form as expected (by click or Enter / Space keys).`}),`
`,(0,r.jsxs)(t.p,{children:[`Quantity component issue has been fixed regarding minus control that should be disabled when the input `,(0,r.jsx)(t.code,{children:`min`}),` attribute is equal to 0 and its value has reached 0 too.`]}),`
`,(0,r.jsx)(a,{label:`v12.0.0`,level:2}),`
`,(0,r.jsx)(t.p,{children:`First release on GitHub. There is no new feature in this version. It is now open source`}),`
`,(0,r.jsx)(a,{label:`v11.0.0`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Flag component has been modified; you’ll need to update as explained in the migration guide.
For more details about assets, see `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`Installation`}),` page.
New attributes are available on this component: `,(0,r.jsx)(t.code,{children:`lazy`}),`, `,(0,r.jsx)(t.code,{children:`assetPath`}),` and `,(0,r.jsx)(t.code,{children:`src`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`Before importing any component you now have to setup ods.`}),`
`,(0,r.jsx)(t.p,{children:`Dual range is now available for Range component; It offers two handles to set a min and max value.`}),`
`,(0,r.jsx)(t.p,{children:`To build resilient infrastructure and promote sustainable industrialization, we moved code that could be agnostic.
Now, ODS components logic has been moved into controllers.
If you want to contribute to ODS by developing new components, please refer to the how-to section for controllers in our Storybook.`}),`
`,(0,r.jsxs)(t.p,{children:[`Now, Button component has `,(0,r.jsx)(t.code,{children:`download`}),` and `,(0,r.jsx)(t.code,{children:`rel`}),` new attributes available when it is used as a link (href).`]}),`
`,(0,r.jsx)(t.p,{children:`We had blur events on Quantity component to set the correct value regarding the Quantity bounds.
It means when the user set manually a value that is out of bounds for Quantity, the value will be automatically reset to a correct value.
When Quantity is out of bounds, the field value is now in error state.`}),`
`,(0,r.jsx)(a,{label:`v10.2.0`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A new library called `,(0,r.jsx)(t.code,{children:`CDK`}),` for `,(0,r.jsx)(t.code,{children:`Component Development Kit`}),` is available.
The main objective is to make the development to be easier thanks to helpers.
The first integrated feature is an overlay system that allows manipulating and displaying content
on foreground of the page.`]}),`
`,(0,r.jsxs)(t.p,{children:[`We added a new entire section for `,(0,r.jsx)(t.code,{children:`contributions`}),` in the storybook.
Feel free to read the Contributing Documentation if you want to contribute.`]}),`
`,(0,r.jsxs)(t.p,{children:[`We simplified our developer environment with a `,(0,r.jsx)(t.code,{children:`global.dev.ts`}),` file in order to
make the developer tests isolated from the production build.`]}),`
`,(0,r.jsx)(t.p,{children:`We optimized our CI/CD workflow for a more reactive and efficient build time and release time.`}),`
`,(0,r.jsx)(t.p,{children:`We fixed some issue about automated screenshot testing with some timeout.`}),`
`,(0,r.jsx)(a,{label:`v10.1.0`,level:2}),`
`,(0,r.jsx)(t.p,{children:`We added the select component (version 1).`}),`
`,(0,r.jsx)(i,{to:`/components/select`,children:`See Documentation`}),`
`,(0,r.jsx)(a,{label:`v10.0.0`,level:2}),`
`,(0,r.jsx)(t.p,{children:`We updated a lot of third dependencies (stencilJs, typescript, jest, puppeteer, ...):`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-text`,children:`@stencil/core ~2.6.0 to ~2.18.1
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
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`If you are an `,(0,r.jsx)(t.code,{children:`ODS`}),` contributor, you may need to do some changes`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`We now build all of our components for `,(0,r.jsx)(t.code,{children:`React`}),` and `,(0,r.jsx)(t.code,{children:`Vue`}),` frameworks.
They allow to use all the potential and features of your high-end JS framework.
You can read the updated `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`Getting Started`}),`
to initialize an App with ODS and see how it works depending the framework.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Also, `,(0,r.jsx)(t.code,{children:`ods-cart`}),` is no more impacted by a parent container with `,(0,r.jsx)(t.code,{children:`text-align:center`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`ods-textarea`}),` had an incorrect `,(0,r.jsx)(t.code,{children:`spellcheck`}),` property than could be equal to `,(0,r.jsx)(t.code,{children:`spellcheck="false'`}),` which is incorrect in HTML.
Now it is in DOM only if it is `,(0,r.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`You can now disable animation on `,(0,r.jsx)(t.code,{children:`ods-toggle`}),` by defining a CSS value `,(0,r.jsx)(t.code,{children:`--ods-toggle-transition-slider: none`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Css variables `,(0,r.jsx)(t.code,{children:`--ods-size-squish-n-*`}),` and `,(0,r.jsx)(t.code,{children:`--ods-size-stretch-n-*`}),` are no more incorrect.
It was previously set with only one number instead of two, accordingly with CSS3.`]}),`
`,(0,r.jsx)(a,{label:`v9.1.0`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Adding 2 new components :`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`accordion: display a content that can be collapsed`}),`
`,(0,r.jsx)(t.li,{children:`code: display a snippet of code and copy it into the clipboard`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`If you already have customized themes, you have to declare the variables for this 2 new components.
see more in the migration guide 9.x`}),`
`,(0,r.jsx)(a,{label:`February 2022`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The V1 `,(0,r.jsx)(t.strong,{children:`Design System`}),` graphical charter is finalized. This charter contains :`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Multiple color palettes (blue, gray, red, orange, green, availability & promotion extra colors)`}),`
`,(0,r.jsx)(t.li,{children:`A Typography system`}),`
`,(0,r.jsx)(t.li,{children:`All spacing options`}),`
`,(0,r.jsx)(t.li,{children:`Components:`}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Buttons`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Form items`}),` (inputs, dropdowns, checkboxes, radios, radio buttons, toggle buttons, range, textarea, etc.)`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Chips & Badges`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Cards`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Cart`})}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};