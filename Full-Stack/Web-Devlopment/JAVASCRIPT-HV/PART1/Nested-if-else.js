let winningNum=20;
let userGuess = parseInt(prompt("Enter your number"));
if(userGuess===winningNum){
    console.log("Your guess is right!!!");
}else{
    if(userGuess<winningNum){
        console.log("Too low!!!")
    }else{console.log("Too high!!!")}
}