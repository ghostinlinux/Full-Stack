// new keyword
// 1) this = {}
// 2) return {}
// 3) Object.create(creatUser.prototype); //// ye kaam bhi new keyword kr dega


function CreatUser(username,age,email,address){
    this.username = username;
    this.age=age;
    this.email=email;
    this.address=address;
}

CreatUser.prototype.about = function(){
    return `Person name is ${this.username} and age is ${this.age}`
};

CreatUser.prototype.is18 = function(){
    return this.age >=18;
};

const user1 = new CreatUser("Pratik",20,"pratik@gmail.com","Himachal");
console.log(user1)
console.log(user1.about())
console.log(user1.is18())

for(let key in user1){
    // console.log(key) /// it also give the key of prototype
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}