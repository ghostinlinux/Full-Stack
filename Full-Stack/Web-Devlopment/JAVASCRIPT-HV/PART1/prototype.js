function creatUser(username,age,email,address){
    const user = Object.create(creatUser.prototype);  
    user.username = username;
    user.age=age;
    user.email=email;
    user.address=address;

    return user;
}

creatUser.prototype.about = function(){
    return `Person name is ${this.username} and age is ${this.age}`
};

creatUser.prototype.is18 = function(){
    return this.age >=18;
};

const user1 = creatUser("Pratik",20,"pratik@gmail.com","Himachal");
console.log(user1)
console.log(user1.about())
console.log(user1.is18())

