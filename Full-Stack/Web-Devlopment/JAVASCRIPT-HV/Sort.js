const numbers=[300,500,1000,5000,1];
numbers.sort((a,b)=>{return a-b})  //accending order
// numbers.sort((a,b)=>{return b-a}) //decending order
// numbers.sort((a,b)=>a-b)
console.log(numbers);

const products=[
    {pid:1,pname:"pn1",price:300},
    {pid:2,pname:"pn2",price:500},
    {pid:3,pname:"pn3",price:1000},
    {pid:4,pname:"pn4",price:50},
];

products.sort((a,b)=>{return a.price - b.price})
console.log(products)


const str = ["a","c","d","b"]
str.sort();
console.log(str)