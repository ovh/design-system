import{a as m}from"./index-D7X5WOeG.js";import"./index-B_J8iUie.js";import{R as E}from"./index-D-G4MXwZ.js";const{global:L}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:k,addons:_}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:R,SELECT_STORY:S}=__STORYBOOK_MODULE_CORE_EVENTS__;var d="links",{document:i,HTMLElement:f}=L,O=e=>_.getChannel().emit(S,e),c=e=>{let{target:t}=e;if(!(t instanceof f))return;let o=t,{sbKind:n,sbStory:a}=o.dataset;(n||a)&&(e.preventDefault(),O({kind:n,story:a}))},r=!1,p=()=>{r||(r=!0,i.addEventListener("click",c))},v=()=>{r&&(r=!1,i.removeEventListener("click",c))};k({name:"withLinks",parameterName:d,wrapper:(e,t)=>(p(),_.getChannel().once(R,v),e(t))});const Y=({className:e,icon:t,kind:o,label:n,story:a,title:s})=>E.createElement(m,{className:e||"",href:"#",icon:t,label:n,onClick:l=>{l.preventDefault(),O(s?{title:s}:{kind:o,story:a})}});export{Y as S};
