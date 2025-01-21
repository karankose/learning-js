// JS (Part 6)
// Practice Questions
// [Note - Some questions might take more time to solve as it will take time for any
// coding beginner to build logic for approaching such programming problems.

// These questions are based on programming logic, not on development. So, please
// don’t hesitate to look at the solution and try to understand the approach used.]

// Qs1. Write a JavaScript function that returns array elements larger than a number.
// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”
// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"
// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.
// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).

function space(){
    console.log(" _ _ _ _ _ _ _ ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" _ _ _ _ _ _ _ ");


    
    
}

// que 1 
console.log("// Qs1. Write a JavaScript function that returns array elements larger than a number.");
console.log('.. .. .. .. ..');


let array1 = [  1, 2, 3, 4, 5];
function check_len(arr, num) {
    let length = arr.length;
    if(length > num){
        return arr;
    }
    else{
       return console.log("length is less than array lenght");
    }
}
let result = check_len(array1,1);
console.log(result);
console.log('.. .. .. .. ..');
space();

// que 2
console.log("// Qs2. Write a JavaScript function to extract unique characters from a string.");


let s1 = "abcdabcdefgggh";

function strCheck(str){
    let unique_string = "";

    for(let i=0; i<str.length; i++){
        if(unique_string.indexOf(str[i]) == -1){
            unique_string += str[i];
            
        }
    }
    console.log("unique string : "+unique_string);
}
strCheck(s1);
console.log('.. .. .. .. ..');
space();

//Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"



console.log("Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output");


let country = ['Australia', 'Germany', 'United States of America'];

function total_lenth(counties){
    longs = "";
    for (let country of counties)
    {
        if (country.length >= longs.length) {
            longs = country;
        }
    }
    return longs;
}

let ans = total_lenth(country)
console.log(ans);


function remo(counties){
    let bigstr = "";
    for (let i=0; i<counties.length;i++){
        if (counties[i].length > bigstr.length){
             bigstr = counties[i];
        }
    }
return bigstr;
}

let result2 = remo(country);
console.log(result2);
space();

// que 4
//Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.


function vowelsCount(vowels){
let count = 0;
console.log("entwr");

for (let i=0; i<vowels.length;i++){
       let char = vowels.charAt(i);
    if (char == 'a' || char == 'i' || char == 'e' || char == 'u' || char == 'o'){
        count ++;
    }
    
}
console.log(count);
    
}

vowelsCount('java is very simple');


