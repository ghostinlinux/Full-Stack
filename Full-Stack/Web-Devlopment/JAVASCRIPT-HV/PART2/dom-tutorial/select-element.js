// select element using get element by ID

const mainHeading = document.getElementById("main-heading")
console.log(mainHeading)

// // select element using query selector

// id
const mainHeading2 = document.querySelector("#main-heading")
console.log(mainHeading2)

// class
const header = document.querySelector(".header")
console.log(header)


// select div>headline>>h2

const mainHeading3 = document.querySelector("div.headline h2")
console.log(mainHeading3)

// // get multiple element using getElement by ClassName

const navItem = document.getElementsByClassName("nav-item") //HTMLCOLLECTION
console.log(navItem)

// // get multiple element using querySelectorAll 
const nav = document.querySelectorAll(".nav-item") // NodeList
console.log(nav)

// select element using TagName

const tagName = document.getElementsByTagName("a")
console.log(tagName)
