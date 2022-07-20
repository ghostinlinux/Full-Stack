// spread in array
const array1 = ["hlo","hii","good"];
const array2 = ["morning", "night","afternoon"]

const newArray = [...array1,...array2]
console.log(newArray)

// spread the string in array
const array3 = [..."pratik"]
console.log(array3)

// spread in object
const obj1 = {name:"pratik",age:20}
const obj2 = {collage:"chitkara",batch:"CSE"}

const newObj = {...obj1,...obj2}
//add new key
const newObj1 = {...obj1,...obj2,keynew : "valuekey"}
console.log(newObj)

// spread the string in object
const Obj3 ={..."morning"}
console.log(Obj3)
