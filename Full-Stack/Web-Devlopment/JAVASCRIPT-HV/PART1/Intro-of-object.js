// How to create objects
let person = {
    name:"pratik",
    age:20,
    collage:"chitkara",
    lang:["c++","java","javascript"]
}

// How to access data from objects

// . method
console.log(person.name)
console.log(person.lang)

// bracket method
console.log(person["age"])
console.log(person["collage"])
console.log(person["lang"])

// How to add key value pair to object
person.branch = "CSE"
person["stream"] = "FullStack"
console.log(person)