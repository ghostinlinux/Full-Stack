const rootNode = document.getRootNode();
// console.log(rootNode.childNodes)
const htmlNode = rootNode.childNodes[0]
// console.log(childNode)
const headElementNode = htmlNode.childNodes
console.log(headElementNode)

const headElementNode0 = htmlNode.childNodes[0]
console.log(headElementNode0.parentNode)



console.log(headElementNode0.nextSibling)  
console.log(headElementNode0.nextSibling.nextSibling)  // >>>>head>text>body
console.log(headElementNode0.nextElementSibling)  // it ignore the text it only give next element