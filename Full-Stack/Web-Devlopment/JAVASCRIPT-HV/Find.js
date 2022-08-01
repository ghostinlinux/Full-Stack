const str = ["abc","abcd","abcde","abc"];
const findElement = str.find((string)=>{ return string.length === 3});
console.log(findElement)

const myArray = ["Hello", "catt", "dog", "lion"];
const ans = myArray.find((string)=>string.length===3);
console.log(ans)


const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);