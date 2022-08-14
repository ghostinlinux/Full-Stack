// every method is checking all the elements is even if, true else false
const numbers = [2,4,6,8,10];
const ans = numbers.every((number)=>{ return number%2===0})
console.log(ans);

const products=[
    {pid:1,pname:"pn1",price:300},
    {pid:2,pname:"pn2",price:500},
    {pid:3,pname:"pn3",price:1000},
    {pid:4,pname:"pn4",price:5000},
];

const cal = products.every((product)=>{return product.price<10000});
console.log(cal)