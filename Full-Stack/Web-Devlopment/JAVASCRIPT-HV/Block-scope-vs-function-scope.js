// var is function scope 
// let and const is block scope

function myFunc(){
    if(true){
        let myName = "pratik";
        console.log(myName)
    }
    console.log(myName)

}

// It gives an error because myName is only accessable in if block..
myFunc();