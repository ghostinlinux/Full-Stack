// call  >>> first we give this keyword then we give argument

// function 
function hello(){
    console.log("hello world")
}
hello.call();


// call in object 


function about(hobby,favmusician){
    console.log(`Person name is ${this.username} and age is ${this.age}, hobby is ${hobby}, favmusician is ${favmusician}`)
}

const person = {
    username:"pratik",
    age:18,
    
}

about.call(person, "reading", "birla");


const person1 = {
    username:"pranav",
    age:16,
    about:function(hobby,sports){
        console.log(`Person name is ${this.username} and age is ${this.age}, hobby is ${hobby}, sports is ${sports}`)
    }
}

const person2 = {
    username:"vicky",
    age:21,
}

person1.about.call(person2,"running","cricket")



// apply >>> same as call but we provide argument in array


function about(hobby,collage){
    console.log(`Person name is ${this.username} and age is ${this.age}, hobby is ${hobby}, collage is ${collage}`)
}
const person3={
    username:"pranesh",
    age:19,
    
}

about.apply(person3,["gaming","chandighar university"])


// bind >>> same as call but it return function

function about2(hobby,branch){
    console.log(`Person name is ${this.username} and age is ${this.age}, hobby is ${hobby}, branch is ${branch}`)
}
const person4={
    username:"vishal",
    age:20,
    
}

const func = about2.bind(person4,"travelling","Agriculture")
func();