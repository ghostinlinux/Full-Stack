// ForEach loop is not used in HTMLCOLLECTION

const tagName = document.getElementsByTagName("a")
// for(let i=0;i<tagName.length;i++){
//     const elmTagname = tagName[i];
//     elmTagname.style.backgroundColor="purple"
//     elmTagname.style.color="yellow"
// }

for(item of tagName){
    item.style.backgroundColor="purple"
    item.style.color="yellow"
}


// we can use foreach by converting object to array
// let tagName1 = document.getElementsByTagName("a");
// tagName1 = Array.from(tagName1);    // convert object to array
// tagName1.forEach(item => {
//     item.style.backgroundColor="purple"
//     item.style.color="yellow"
// });


// 4:32