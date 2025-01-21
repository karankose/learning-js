// print sum of n  num and return

function sum(n){
    let nsum = 0;
    for(let i = 1; i<=n; i++){
        nsum = nsum + i; 
    }
    return nsum;
}

console.log(sum(2));
