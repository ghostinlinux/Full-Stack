// let fruits= ["banana","mango","litchi","pineapple"];
// let [var1,var2]=fruits
// console.log(var1)
// console.log(var2)

// skip 1st index value
// let fruits= ["banana","mango","litchi","pineapple"];
// let [var1, ,var2]=fruits
// console.log(var1)
// console.log(var2)

// rest of the item is in newvar
let fruits= ["banana","mango","litchi","pineapple"];
let [var1,var2,...newVar]=fruits
console.log(var1)
console.log(var2)
console.log(newVar)