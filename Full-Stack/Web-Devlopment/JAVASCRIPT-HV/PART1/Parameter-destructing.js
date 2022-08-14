const person ={
    name:"pratik",
    gender:"male",

}

function myFunc({name,gender}){
    console.log(name);
    console.log(gender)
}
myFunc(person);