// concatenate string arr in and return concatenated string

let str = ['apple','samsung','redmi','realme'];
console.log(str);


function con(str)
{
    console.log("- - - - - - - - - - - - - - - - - -");
    
    let addstr = "";
    for(let i = 0; i<str.length;i++){
        addstr = addstr + str[i];
    }
    return addstr;
}
console.log(con(str));
