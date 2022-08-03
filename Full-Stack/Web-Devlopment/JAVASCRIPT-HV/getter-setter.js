// when we use get we donot have call we can use it as property

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get eat(){
        return `${this.name} is eating`
    }

    get sleep(){
        return `${this.name} is sleeping`
    }
}

const animal = new Animal("tom",6);
console.log(animal.eat);
console.log(animal.sleep)


// //////////////////////////////////////////////////////////////////////////////////////////////////////


//  setters 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
person1.fullName = "mohit vashistha";
console.log(person1);