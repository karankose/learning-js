let h2 = document.querySelector("h2");

setTimeout(()=>{
    h2.style.color = "red";
},2000);

setTimeout(()=>{
    h2.style.color = "green";
},4000)

setInterval(()=>{
    h2.style.color = "orange";
},6000);


