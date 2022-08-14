// random color

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColo = `rgb(${red},${green},${blue})`
    return randomColo;

}



// events
const buttonEvent = document.querySelectorAll(".main button");
const body = document.body;
buttonEvent.forEach(function(btn){
    btn.addEventListener("click",function(){
        const randomColor = randomColorGenerator();
        btn.style.backgroundColor = randomColor;
        body.style.backgroundColor = randomColor;
    })
})

