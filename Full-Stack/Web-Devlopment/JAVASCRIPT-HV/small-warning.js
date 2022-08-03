const person={
    username:"pratik",
    age:20,
    about:function(){
        console.log(`Person name is ${this.username} age is ${this.age}`)
        // return `Person name is ${this.username} age is ${this.age}`
    }
}

person.about();

// Don't do this mistake
const myFunc = person.about;
myFunc();


// do this
const myFunc1 = person.about.bind(person);
myFunc1();


// print
// const myFunc = person.about();
// console.log(myFunc)