const numbers=[4,2,5,6];
function myFunc(number,index){
    console.log(`index is ${index} and number is ${number}`);
}

// normal for loop

// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i)
// }

// foreach
numbers.forEach(myFunc);


// Anonymous function

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number}`)
// });

// arrow function 

// numbers.forEach((number,index)=>{
//     console.log(`index is ${index} and number is ${number}`)
// })