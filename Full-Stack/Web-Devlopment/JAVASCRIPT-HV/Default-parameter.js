// old method

// function addTwono(num1,num2){
//     if(typeof num2==="undefined"){
//         num2=0;
//     }
//     return num1+num2;
// }

// console.log(addTwono(5))


// New method //default parameter
function addTwono(num1,num2=0){
    return num1+num2;
}

console.log(addTwono(5))