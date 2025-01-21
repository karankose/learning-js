let h1 = document.querySelector("h1");

function changeColor(color,delay,nextcolor){
    setTimeout(()=>{
        h1.style.color = color
        if (nextcolor) nextcolor()}
        ,delay);
}
changeColor("red",1000, ()=>{
    changeColor("green",1000),()=>{
        changeColor("white",1000)
    }});
