// click

const clickk = document.querySelector(".btn")
clickk.addEventListener("click",()=>{
    console.log("clicked!!!!!!!!!!!")
})


const click2 = document.querySelectorAll(".sec button")
console.log(click2)
// of loop
for(let item of click2){
    item.addEventListener("click",()=>{
        console.log("you clicked me!!!")
    })
}


for(let item of click2){
    item.addEventListener("click",function(){
        console.log(this.textContent)
    })
}


// foreach
click2.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this)
    })
})