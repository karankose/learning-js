let cars = ["bmw","audi","Tata", "mahindra"];
cars.forEach((num, index)=>{
    console.log(`Index ${index} : ${num}`);
    
});

let numbers = [10,20,30,40,50,60,70,80,99];

function getArr(elements , index) {
        console.log(`Index ${index} : ${elements} `);
}

numbers.forEach(getArr);