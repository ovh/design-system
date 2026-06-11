function n(){return{format:"dedent",transform:e=>{const t=[...e.matchAll(/render: \({[\w\s,]*}\) => {?([.\s\S]*)}?\n}$/gm)];return t.length&&t[0].length>=2?t[0][1]:e},type:"code"}}export{n as s};
