var e=(r=>(r.accessibility="Accessibility",r.design="Design",r.general="General",r.slot="Slot",r))(e||{});const n=[e.design,e.slot,e.general,e.accessibility];function i(r){try{return Object.entries(r).sort((o,t)=>n.indexOf(o[1].category)-n.indexOf(t[1].category)).reduce((o,t)=>(o[t[0]]=t[1],o),{})}catch{return console.error("Error while ordering controls"),{}}}export{e as C,i as o};