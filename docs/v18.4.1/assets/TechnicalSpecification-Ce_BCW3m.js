import{R as e,T as h,e as _,g}from"./index-Rx6QkXSv.js";import{H as a}from"./Heading-2XnXa8MH.js";const m={"class-module__properties__header":"_class-module__properties__header_9hcgh_1","class-module__properties__body":"_class-module__properties__body_9hcgh_6","class-module__events":"_class-module__events_9hcgh_10","class-module__methods":"_class-module__methods_9hcgh_11","class-module__events__item__name":"_class-module__events__item__name_9hcgh_18","class-module__methods__item__name":"_class-module__methods__item__name_9hcgh_19"},f=({module:s})=>{var E;const c=((E=(s.exports||[]).find(l=>l.kind==="js"))==null?void 0:E.name)||"",t=(s.declarations||[]).find(l=>l.kind==="class");if(!t)return e.createElement(e.Fragment,null);const r="events"in t?t.events||[]:[],i="members"in t?(t.members||[]).filter(l=>l.kind==="method"&&l.privacy==="public"):[],n="members"in t?(t.members||[]).filter(l=>l.kind==="field"&&l.privacy==="public"):[];return!r.length&&!i.length&&!n.length?e.createElement(e.Fragment,null,e.createElement(a,{label:c,level:2}),e.createElement("p",null,"This component has no properties, events nor methods.")):e.createElement(e.Fragment,null,e.createElement(a,{label:c,level:2}),n.length>0&&e.createElement(e.Fragment,null,e.createElement(a,{label:"Properties",level:3}),e.createElement(h,null,e.createElement("thead",{className:m["class-module__properties__header"]},e.createElement("tr",null,e.createElement("td",null,"Property"),e.createElement("td",null,"Type"),e.createElement("td",null,"Required"),e.createElement("td",null,"Default value"))),e.createElement("tbody",{className:m["class-module__properties__body"]},n.map((l,u)=>{var o,d;return e.createElement("tr",{key:u},e.createElement("td",null,l.name),e.createElement("td",null,e.createElement(_,null,"type"in l&&((o=l.type)==null?void 0:o.text.replace(/\| undefined/,"")))),e.createElement("td",null,e.createElement(_,null,"type"in l&&((d=l.type)!=null&&d.text.includes("undefined"))?"false":"true")),e.createElement("td",null,e.createElement(_,null,"default"in l&&l.default||"undefined")))})))),i.length>0&&e.createElement(e.Fragment,null,e.createElement(a,{label:"Methods",level:3}),e.createElement("ul",{className:m["class-module__methods"]},i.map((l,u)=>{var o,d;return e.createElement("li",{key:u},e.createElement("span",{className:m["class-module__methods__item__name"]},l.name,"():"),e.createElement(_,null,"return"in l&&((d=(o=l.return)==null?void 0:o.type)==null?void 0:d.text)))}))),r.length>0&&e.createElement(e.Fragment,null,e.createElement(a,{label:"Events",level:3}),e.createElement("ul",{className:m["class-module__events"]},r.map((l,u)=>e.createElement("li",{key:u},e.createElement("span",{className:m["class-module__events__item__name"]},l.name,":"),e.createElement(_,null,l.type.text))))))},p={"technical-specification__enums__keys":"_technical-specification__enums__keys_65k1l_1","technical-specification__enums__keys__name":"_technical-specification__enums__keys__name_65k1l_8"},k=({data:s})=>e.createElement("div",{className:p["technical-specification"]},(s.modules||[]).map((c,t)=>e.createElement(f,{key:t,module:c})),Object.keys(s.enumPlugin).length>0&&e.createElement(e.Fragment,null,e.createElement(a,{label:"Enums",level:2}),Object.entries(s.enumPlugin).map(([c,t],r)=>e.createElement(g.Fragment,{key:r},e.createElement(a,{label:c,level:3}),e.createElement("ul",{className:p["technical-specification__enums__keys"]},Object.entries(t).map(([i,n],E)=>e.createElement("li",{key:E},e.createElement("span",{className:p["technical-specification__enums__keys__name"]},i," ="),e.createElement(_,null,n.type==="number"?n.value:`"${n.value}"`))))))));export{k as T};
