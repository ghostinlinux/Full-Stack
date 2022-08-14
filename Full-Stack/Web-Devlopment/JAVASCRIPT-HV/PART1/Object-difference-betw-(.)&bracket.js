// difference between dot and bracket notation 

let person = {
    name:"pratik",
    age:20,
    collage:"chitkara",
    "my lang":["c++","java","javascript"]  // space betwwen name
}

// If key have space we use bracket

// console.log(person.my lang)   // error

console.log(person["my lang"]) 

let key = "email"

person.key = "abc@gmail.com"  //here name of key is key but we want email as key name
console.log(person)

console.log("######################################################")

person[key]="abc@gmail.com"
console.log(person)

