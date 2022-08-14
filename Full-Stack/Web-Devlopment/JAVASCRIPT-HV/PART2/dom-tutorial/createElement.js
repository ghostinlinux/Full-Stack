// document.createElement()
// append
// prepend
// remove


const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Contact Us";

const listItem = document.querySelector(".list")
// listItem.append(newTodoItem)  // it add below
// listItem.prepend(newTodoItem)  // it add up


// remove

// const listItem1 = document.querySelector(".list li")
// listItem1.remove();
const listItem1 = document.getElementsByTagName("li")
// listItem1[1].remove();


// before
// after

const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "Hello world";
const listItem2 = document.querySelector(".list")
listItem2.before(newTodoItem1) 
listItem2.after(newTodoItem1)


// clone Node

const newList = document.querySelector(".list1")
const createElement = document.createElement("li")
createElement.textContent = "Pranav"
const list2 = createElement.cloneNode(true)
newList.append(createElement)
newList.prepend(list2)