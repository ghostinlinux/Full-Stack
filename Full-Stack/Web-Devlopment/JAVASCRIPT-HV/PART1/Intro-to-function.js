// function isEven(num){
//     if(num%2===0){
//         console.log("True");
//     }else{
//         console.log("False")
//     }
// }

// isEven(3)

// function isEven(num){
//     if(num%2===0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(4))

function isEven(num){
    return num%2===0;
}
console.log(isEven(3))


function firstChar(inp){
    return inp[0]
}
console.log(firstChar("pratik"))

function searchValue(array,number){
    for(index in array){
        if(array[index]===number){
            return index;
        }
    }
    return -1;
}
console.log(searchValue([2,3,4,5,6],7))