import{o as m,y as n}from"./ods-react-CYmC8DRO.js";import{B as o,a as c,b as s}from"./index-Ad1vjMe7.js";import{e}from"./index-E9JSHJbc.js";function i(r){const t=r==="removed";return e.createElement(m,{color:t?n.critical:n.information,size:"sm"},t?"Removed":"Updated")}const a=({items:r})=>e.createElement(o,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Former name"),e.createElement("th",null,"Status"),e.createElement("th",null,"New name"))),e.createElement("tbody",null,r.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",null,e.createElement(c,null,t.formerName)),e.createElement("td",null,i(t.status)),e.createElement("td",null,e.createElement(s,null,`${t.replacement}`))))));try{a.displayName="TokenMigrationTable",a.__docgenInfo={description:"",displayName:"TokenMigrationTable",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ formerName: string; replacement: string; status: ItemStatus; }[]"}}}}}catch{}export{a as T};
