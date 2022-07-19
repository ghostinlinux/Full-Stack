// let fruits = ["apple","banana","mango","litchi"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }


let fruits = ["apple","banana","mango","litchi"]
let newArray=[];
for(let i=0;i<fruits.length;i++){
    newArray.push(fruits[i].toUpperCase())
}
console.log(newArray)