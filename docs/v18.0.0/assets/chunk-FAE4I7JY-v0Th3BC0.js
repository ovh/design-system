import"./index-B_J8iUie.js";const{global:O}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:E,addons:r}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:l,SELECT_STORY:L}=__STORYBOOK_MODULE_CORE_EVENTS__;var c="links",{document:s,HTMLElement:m}=O,d=e=>r.getChannel().emit(L,e),i=e=>{let{target:t}=e;if(!(t instanceof m))return;let o=t,{sbKind:a,sbStory:_}=o.dataset;(a||_)&&(e.preventDefault(),d({kind:a,story:_}))},n=!1,v=()=>{n||(n=!0,s.addEventListener("click",i))},R=()=>{n&&(n=!1,s.removeEventListener("click",i))};E({name:"withLinks",parameterName:c,wrapper:(e,t)=>(v(),r.getChannel().once(l,R),e(t))});export{d as n};
