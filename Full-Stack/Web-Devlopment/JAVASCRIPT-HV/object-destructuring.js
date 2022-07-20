const computer = {
    Brand:"Acer",
    Ram:"8GB",
    Rom:"512GB",
    Graphic:"4GB"
}

// const {Brand,Ram}=computer;
// console.log(Brand)
// console.log(Ram)

// const {Brand,Ram,...rest}=computer;

// console.log(rest)  //give the rest object


// change the variable name // the default value is Key name
const {Brand:var1,Ram:var2}=computer;
console.log(var1)
console.log(var2)