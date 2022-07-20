// How to iterate object

let person = {
    name:"pratik",
    age:20,
    collage:"chitkara",
    "my lang":["c++","java","javascript"]
}

for(key in person){
    // console.log(person[key])
}

console.log(Object.keys(person)) // it return the array

for(key of Object.keys(person)){
    console.log(key,":",person[key])
}

