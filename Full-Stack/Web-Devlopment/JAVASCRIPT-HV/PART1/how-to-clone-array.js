// How to clone an  Array

// Slice method
let array1 = ["item1","item2"]
let array2 = array1.slice(0)
console.log(array1===array2)
console.log(array1)
console.log(array2)

// concat method
let array3 = ["item1","item2"]
let array4 = [].concat(array3)
console.log(array3===array4)
console.log(array3)
console.log(array4)

// spread operator // New method

let array5 = ["item1","item2"]
let array6 = [...array3]
console.log(array5===array6)
console.log(array5)
console.log(array6)

// clone the array and add some extra items

let array7 = ["item1","item2"]
let onemore = ["item3","item4"]
let array8 = [...array7].concat(["item3","item4"])
let array9 = [...array7,"item3","item4"]
let array10 = [...array7,...onemore]
console.log(array8)
console.log(array9)
console.log(array10)