const user={
    name:"pratik",
    address:{housenum:"123"}
}

console.log(user.name)
// console.log(user.address.housenum)   // it give the error
console.log(user.address)  // it give undefined

// optional chaining
console.log(user?.address?.housenum) // ? check first user is present then check address is present if yes then it proceed. 