var n=(r=>(r.accessibility="Accessibility",r.design="Design",r.general="General",r.slot="Slot",r))(n||{});const t=["Design","Slot","General","Accessibility"];function i(r){try{return Object.entries(r).sort((e,o)=>t.indexOf(e[1].category)-t.indexOf(o[1].category)).reduce((e,o)=>(e[o[0]]=o[1],e),{})}catch{return console.error("Error while ordering controls"),{}}}export{n as C,i as o};