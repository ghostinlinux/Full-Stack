// change text
// textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent)   // >> it give display:none value
// mainHeading.textContent = "Something else"
// console.log(mainHeading.textContent)

console.log(mainHeading.innerText) // it only give inner text >> it do not give display:none value