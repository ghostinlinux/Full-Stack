// rest of the value assing in c in form of array
function myFunc(a,b,...c){
    console.log(`a : ${a}`)
    console.log(`b : ${b}`)
    console.log(`c : ${c}`)
}
myFunc(2,5,6,7,8,9)

function sumOfnum(...num){
    let sum = 0;
    for(n of num){
        sum = sum+n;
    }
    return sum;
}
console.log(sumOfnum(1,2,3,4,5));