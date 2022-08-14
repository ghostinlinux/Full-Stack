// ek bhi element condition ko satisfy krta hai toh true return hoga
let numbers=[1,3,5,9,2];
let isEven = numbers.some((num)=>{return num%2===0});
console.log(isEven)


let products=[
    {id:1,price:20000},
    {id:2,price:30000},
    {id:3,price:75000},
    {id:4,price:200000}
];

let check = products.some((product)=>{return product.price > 100000 })
console.log(check)