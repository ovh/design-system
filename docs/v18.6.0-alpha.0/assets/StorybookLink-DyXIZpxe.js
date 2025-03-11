import{a as g}from"./index-BDosBUxz.js";import"./index-D-8MO0q_.js";import{R as c}from"./index-CMHv63WF.js";var u=(e=>(e.design="Design and Style",e.formElements="Form elements",e.guides="Guides",e.home="OVHcloud Design System",e.migrationGuide="Migration guide",e.odsComponents="ODS Components",e.whatsNew="What's new?",e))(u||{}),D=(e=>(e.getStarted="OVHcloud Design System/Get Started",e.guideEvents="OVHcloud Design System/Guides/Using Events",e.guideMethods="OVHcloud Design System/Guides/Using Methods",e.migration12to13="OVHcloud Design System/What's new?/Migration guide/12.x to 13.x",e.migration13to14="OVHcloud Design System/What's new?/Migration guide/13.x to 14.x",e.migration14to15="OVHcloud Design System/What's new?/Migration guide/14.x to 15.x",e.migration15to16="OVHcloud Design System/What's new?/Migration guide/15.x to 16.x",e.migration16to17="OVHcloud Design System/What's new?/Migration guide/16.x to 17.x",e.migration17to18="OVHcloud Design System/What's new?/Migration guide/17.x to 18.x",e.styleCustomization="OVHcloud Design System/Design and Style/Style Customization",e.welcome="OVHcloud Design System/Welcome",e))(D||{}),h=(e=>(e.accordion="ODS Components/Accordion",e.badge="ODS Components/Badge",e.breadcrumb="ODS Components/Breadcrumb",e.button="ODS Components/Button",e.card="ODS Components/Card",e.cart="ODS Components/Cart",e.checkbox="ODS Components/Form elements/Checkbox",e.clipboard="ODS Components/Form elements/Clipboard",e.code="ODS Components/Code",e.combobox="ODS Components/Form elements/Combobox",e.contentAddon="ODS Components/Content Addon",e.datepicker="ODS Components/Form elements/Datepicker",e.divider="ODS Components/Divider",e.drawer="ODS Components/Drawer",e.fileUpload="ODS Components/Form elements/File Upload",e.flag="ODS Components/Flag",e.formField="ODS Components/Form elements/Form Field",e.icon="ODS Components/Icon",e.input="ODS Components/Form elements/Input",e.link="ODS Components/Link",e.medium="ODS Components/Medium",e.menu="ODS Components/Menu",e.message="ODS Components/Message",e.modal="ODS Components/Modal",e.pagination="ODS Components/Pagination",e.password="ODS Components/Form elements/Password",e.phoneNumber="ODS Components/Form elements/Phone Number",e.popover="ODS Components/Popover",e.progressBar="ODS Components/Progress Bar",e.searchBar="ODS Components/Search Bar",e.quantity="ODS Components/Form elements/Quantity",e.radio="ODS Components/Form elements/Radio",e.range="ODS Components/Form elements/Range",e.select="ODS Components/Form elements/Select",e.skeleton="ODS Components/Skeleton",e.spinner="ODS Components/Spinner",e.switch="ODS Components/Form elements/Switch",e.table="ODS Components/Table",e.tabs="ODS Components/Tabs",e.tag="ODS Components/Tag",e.text="ODS Components/Text",e.textarea="ODS Components/Form elements/Textarea",e.timepicker="ODS Components/Form elements/Timepicker",e.toggle="ODS Components/Form elements/Toggle",e.tooltip="ODS Components/Tooltip",e))(h||{}),F=(e=>(e.documentation="Documentation",e.migrationFrom17="Migration From 17.x",e.technicalInformation="Technical information",e))(F||{});const{global:b}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:x,addons:r}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:k,SELECT_STORY:y}=__STORYBOOK_MODULE_CORE_EVENTS__;var v="links",{document:a,HTMLElement:w}=b,l=e=>r.getChannel().emit(y,e),d=e=>{let{target:o}=e;if(!(o instanceof w))return;let m=o,{sbKind:n,sbStory:t}=m.dataset;(n||t)&&(e.preventDefault(),l({kind:n,story:t}))},s=!1,f=()=>{s||(s=!0,a.addEventListener("click",d))},V=()=>{s&&(s=!1,a.removeEventListener("click",d))};x({name:"withLinks",parameterName:v,wrapper:(e,o)=>(f(),r.getChannel().once(k,V),e(o))});const W=({className:e,icon:o,kind:m,label:n,story:t,title:i})=>c.createElement(g,{className:e||"",href:"#",icon:o,label:n,onClick:p=>{p.preventDefault(),l(i?{title:i}:{kind:m,story:t})}});export{D as H,h as O,W as S,F as a,u as b};
