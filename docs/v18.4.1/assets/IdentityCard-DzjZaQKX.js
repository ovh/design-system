import{R as e,T as d,g as E}from"./index-Rx6QkXSv.js";import{m}from"./index-Dqa08QUn.js";import{a as o}from"./index-BJiUJsri.js";import{S as k}from"./StorybookLink-YE2HEeNv.js";const a={"best-practices__do-table":"_best-practices__do-table_2sac3_1","best-practices__dont-table":"_best-practices__dont-table_2sac3_2","best-practices__do-table__cell":"_best-practices__do-table__cell_2sac3_6","best-practices__dont-table__cell":"_best-practices__dont-table__cell_2sac3_10"},w=({donts:t,dos:s})=>e.createElement("div",null,e.createElement(d,{className:a["best-practices__do-table"]},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:a["best-practices__do-table__cell"]},"✅ Do"))),e.createElement("tbody",null,s.map((l,c)=>e.createElement("tr",{key:c},e.createElement("td",{className:a["best-practices__do-table__cell"]},l))))),e.createElement(d,{className:a["best-practices__dont-table"]},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:a["best-practices__dont-table__cell"]},"❌ Don't"))),e.createElement("tbody",null,t.map((l,c)=>e.createElement("tr",{key:c},e.createElement("td",{className:a["best-practices__dont-table__cell"]},l))))));var n=(t=>(t.atom="atom",t.molecule="molecule",t.organism="organism",t.quark="Quark",t))(n||{});const r={"identity-card":"_identity-card_gjwr4_1","identity-card__table":"_identity-card__table_gjwr4_7","identity-card__atomic-link":"_identity-card__atomic-link_gjwr4_12","identity-card__app-link":"_identity-card__app-link_gjwr4_16"};function y(t){switch(t){case n.atom:return"https://atomicdesign.bradfrost.com/chapter-2/#atoms";case n.molecule:return"https://atomicdesign.bradfrost.com/chapter-2/#molecules";case n.organism:return"https://atomicdesign.bradfrost.com/chapter-2/#organisms";case n.quark:return"https://bradfrost.com/blog/post/extending-atomic-design";default:return""}}const D=({aliases:t,atomicType:s,children:l,figmaLink:c,githubUrl:p,name:u,relatedComponents:i})=>e.createElement("div",{className:r["identity-card"]},e.createElement("div",null,l||""),e.createElement(d,{className:r["identity-card__table"]},e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"Name"),e.createElement("td",null,u)),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Also known as"),e.createElement("td",null,t.length>0?t.join(", "):"-")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Atomic type"),e.createElement("td",null,e.createElement(o,{className:r["identity-card__atomic-link"],href:y(s),icon:m.externalLink,label:s,target:"_blank"}))),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Related component(s)"),e.createElement("td",null,i.length>0?i.map((_,b)=>e.createElement(E.Fragment,{key:b},e.createElement(k,{kind:`ODS Components/${_.subtitle?`${_.subtitle}/`:""}${_.name}`,label:_.name,story:"Documentation"}),b<i.length-1&&e.createElement("span",null,", "))):"-")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"Links"),e.createElement("td",null,e.createElement(o,{className:r["identity-card__app-link"],href:c,icon:m.externalLink,label:"Design",target:"_blank"}),e.createElement(o,{className:r["identity-card__app-link"],href:p,icon:m.externalLink,label:"Github",target:"_blank"}))))));export{n as A,w as B,D as I};
