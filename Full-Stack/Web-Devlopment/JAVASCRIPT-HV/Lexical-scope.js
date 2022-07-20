// function myApp(){
//     const var1 = "value1";
//     const myFunc=function(){
//         const var1="value2"
//         console.log("Inside myFunc",var1);
//     }
//     console.log(var1);
//     myFunc();
// }

// myApp();




// it takes value of var1 from its lexical scope
// function myApp(){
//     const var1 = "value1";
//     const myFunc=function(){
//         // const var1="value2"
//         console.log("Inside myFunc",var1);
//     }
//     console.log(var1);
//     myFunc();
// }

// myApp();




// it takes value of var1 from its lexical scope
const var1 = "value1";
function myApp(){
    // const var1 = "value1";
    const myFunc=function(){
        // const var1="value2"
        console.log("Inside myFunc",var1);
    }
    console.log(var1);
    myFunc();
}

myApp();