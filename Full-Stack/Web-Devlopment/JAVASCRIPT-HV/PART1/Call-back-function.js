function myFunc1(name){
    console.log(`My name is ${name}`)
}

function myFunc2(callback){
    console.log("Inside myFunc2");
    callback("pratik");
}

myFunc2(myFunc1);

