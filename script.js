let x=1000;
let mydiv=document.createElement("div");
document.body.append(mydiv);
mydiv.setAttribute("style","text-align:center;color:violet;");

let func=()=> new Promise((resolve,reject)=>{
    setTimeout(()=>mydiv.innerText="10",x);
    resolve()
})

func()
.then(()=>{
    setTimeout(()=>mydiv.innerText="9",2*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="8",3*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="7",4*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="6",5*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="5",6*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="4",7*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="3",8*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="2",9*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="1",10*x);
})
.then(()=>{
    setTimeout(()=>mydiv.innerHTML="Happy Independence Day",11*x);
})

