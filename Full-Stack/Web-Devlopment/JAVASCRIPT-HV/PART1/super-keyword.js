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
    constructor(name,age,speed){
       super(name,age);
       this.speed=speed;
    }

    eat(){
        return `Modified : ${this.name} is eating`
    }
    run(){
        return `speed is ${this.speed}kmph`
    }
}

const animal = new Dog("tom",6,40);
console.log(animal.eat());
console.log(animal.sleep())
console.log(animal.run())