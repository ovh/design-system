import{h as l,e as n}from"./Badge-EGenXdCK-DDYseYDy.js";import{B as m,a as u,b as o}from"./index-BlaLg9GY.js";import{e}from"./index-D_CmzhJ4.js";function s(r){const t=r==="removed";return e.createElement(l,{color:t?n.critical:n.information,size:"sm"},t?"Removed":"Updated")}const i=({items:r})=>e.createElement(m,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Former name"),e.createElement("th",null,"Status"),e.createElement("th",null,"New name"))),e.createElement("tbody",null,r.map((t,a)=>e.createElement("tr",{key:a},e.createElement("td",null,e.createElement(u,null,t.formerName)),e.createElement("td",null,s(t.status)),e.createElement("td",null,e.createElement(o,null,`${t.replacement}`))))));i.__docgenInfo={description:"",methods:[],displayName:"TokenMigrationTable",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  formerName: string,
  replacement: string,
  status: ItemStatus,
}`,signature:{properties:[{key:"formerName",value:{name:"string",required:!0}},{key:"replacement",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'removed' | 'updated'",elements:[{name:"literal",value:"'removed'"},{name:"literal",value:"'updated'"}],required:!0}}]}}],raw:`{
  formerName: string,
  replacement: string,
  status: ItemStatus,
}[]`},description:""}}};export{i as T};
