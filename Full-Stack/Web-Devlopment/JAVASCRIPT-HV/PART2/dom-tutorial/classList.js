const section = document.querySelector(".hello")
// console.log(section)
// console.log(section.classList)
section.classList.add("bg-colo")
const paragraph = document.querySelector(".para")
paragraph.classList.remove("para")

// class exits or not
const check = section.classList.contains("bg-colo");
console.log(check);

// if class is present toogle remove and if not it add
section.classList.toggle("bg-colo")