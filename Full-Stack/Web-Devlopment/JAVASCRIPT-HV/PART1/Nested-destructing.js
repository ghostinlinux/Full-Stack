const students=[
    {user:"1201",name:"pratik",gender:"male"},
    {user:"1202",name:"vinay",gender:"male"},
    {user:"1203",name:"rahul",gender:"male"}
];


// destructure the name of user1 and gender of user3

const [{name:user1name}, , {gender:user3gender}]=students;
console.log(user1name, user3gender)
