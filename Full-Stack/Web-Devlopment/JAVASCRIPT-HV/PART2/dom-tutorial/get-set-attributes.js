// get attributes

const link = document.querySelector("a")
console.log(link)
console.log(link.getAttribute("href"))

const inputElement = document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("type"))


// set attributes


const link2 = document.querySelector("a")
console.log(link2)
link2.setAttribute("href","https://github.com/ghostinlinux")
console.log(link2.getAttribute("href"))
