// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

let items = new Set(["item1","item2"])
console.log(items)

let numbers = new Set();
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(5)
numbers.delete(2)
// numbers.clear()

console.log(numbers)

if(numbers.has(1)){
    console.log("present")
}else{
    console.log("absent")
}

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);

console.log(myArray)
console.log(uniqueElements)

console.log(uniqueElements.length)  // undefined 

// find length of set 
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length)






// Method	       Description
// new Set()	    Creates a new Set
// add()	        Adds a new element to the Set
// delete()     	Removes an element from a Set
// has()	        Returns true if a value exists
// clear()      	Removes all elements from a Set
// forEach()       	Invokes a callback for each element
// values()	        Returns an Iterator with all the values in a Set
// keys()	        Same as values()
// entries()    	Returns an Iterator with the [value,value] pairs from a Set

