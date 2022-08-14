const body = document.body;
body.addEventListener("keypress",function(e){
    
    console.log(e.key)

})

const button = document.querySelector("button")
button.addEventListener("mouseover",()=>{
        console.log("Mouse over")
})

button.addEventListener("mouseleave",()=>{
    console.log("Mouse leave")
})