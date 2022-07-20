const firstChar = function(inp){
    return inp[0]
}
console.log(firstChar("pratik"))

const searchValue = function(array,number){
    for(index in array){
        if(array[index]===number){
            return index;
        }
    }
    return -1;
}
console.log(searchValue([2,3,4,5,6],6))