class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`
    }

    sleep(){
        return `${this.name} is sleeping`
    }
}

class Dog extends Animal{
}

const animal = new Dog("tom",6);
console.log(animal.eat());
console.log(animal.sleep())