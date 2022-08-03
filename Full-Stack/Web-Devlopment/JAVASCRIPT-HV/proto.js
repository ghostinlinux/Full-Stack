// proto >>> __proto__ >>>>  [[prototype]] >>>>>>>>>>>> this is same

// prototype >>>>>>>> this is diffrent 

// proto is refrence 

const userMethod = {
    about:function(){
        return `Person name is ${this.username} and age is ${this.age}`
    },
    is18:function(){
        return this.age >=18;
    }
}

function creatUser(username,age,email,address){
    const user = Object.create(userMethod);  
    user.username = username;
    user.age=age;
    user.email=email;
    user.address=address;

    return user;
}

const user1 = creatUser("Pratik",20,"pratik@gmail.com","Himachal");
console.log(user1)
console.log(user1.about())
console.log(user1.is18())
