// method
// function inside object

const person = {
    username:"pratik",
    age:"20",
    about:function(){
        console.log(`Person name is ${this.username} and age is ${this.age}`)
    }
}

person.about();

function userinfo(){
    console.log(`Person name is ${this.username} and age is ${this.age}`)
}

const person1 = {
    username:"pranav",
    age:"16",
    about:userinfo
}

const person2 = {
    username:"vicky",
    age:"21",
    about:userinfo
}
const person3 = {
    username:"pranesh",
    age:"19",
    about:userinfo
}

person1.about();
person2.about();
person3.about();