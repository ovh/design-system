async function o(t){return navigator.clipboard.writeText(t||"")}function r(){return`id-${Date.now()}-${Math.random().toString(36).replace("0.","")}`}function u(t,i){return i?i.contains(t.target)||t.composedPath().includes(i):!1}function e(t,i,n,a){if(n.valid)i.setValidity({});else for(const s in n)n[s]&&i.setValidity({[s.toString()]:!0},a,t)}function d(t,i){return e(t,i,t.validity,t.validationMessage)}async function c(t,i){const n=await t.getValidity(),a=await t.getValidationMessage();return e(t,i,n,a)}function l(t,i){t.button===0&&(i==null||i.requestSubmit())}function g(t,i){t.key==="Enter"&&(i==null||i.requestSubmit())}export{d as a,l as b,o as c,c as d,r as g,u as i,g as s};
