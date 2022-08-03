class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`
    }
    age1(){
        return `${this.name} age is ${this.age}`
    }
}

const animal = new Animal("tommy",5);
console.log(animal.name)
console.log(animal.eat())
console.log(animal.age1())