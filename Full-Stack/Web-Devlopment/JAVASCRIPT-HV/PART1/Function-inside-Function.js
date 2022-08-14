const TopFunction = ()=>{
    const firstChar=(inp)=>inp[0];

    const searchValue =(array,number)=>{
        for(index in array){
            if(array[index]===number){
                return index;
            }
        }
        return -1;
    }
    console.log(firstChar("pratik"))
    console.log(searchValue([2,3,4,5,6],6))
}

TopFunction();