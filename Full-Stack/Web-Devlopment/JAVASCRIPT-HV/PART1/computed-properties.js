const key1 = "objkey1";
const key2 = "objkey2"
const value1 ="myvalue1";
const value2 ="myvalue2"; 

const myObj = {}
myObj[key1] = value1;
myObj[key2] = value2;
console.log(myObj);


// new

const myObj2 = {
    [key1]:value1,
    [key2]:value2
}
console.log(myObj2)