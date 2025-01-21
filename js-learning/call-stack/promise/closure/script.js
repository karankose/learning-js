function outer() {
    let name  = "ABC";
    let value = 45;
    function inner() {
        console.log(name);    
    }
    inner();
}
outer();