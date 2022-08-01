function myFunc1(){
    function myFunc2(){
        console.log("Inside myFunc2")
    }
    return myFunc2;
}

const newFunct = myFunc1();
newFunct();


// function myFunc1(){
//     return function myFunc2(){
//         console.log("Inside myFunc2")
//     }
// }

// const newFunct = myFunc1();
// newFunct();
