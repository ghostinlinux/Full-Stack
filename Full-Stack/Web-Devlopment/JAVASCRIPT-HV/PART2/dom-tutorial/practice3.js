const todoform = document.querySelector(".todo-form");
const input = document.querySelector(".todo-form input[type='text']")
const ulItem = document.querySelector(".list-item");
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    const newInnerHtml = `<span class="text">${newTodoText}</span>
    <button class="button done">Done</button>
    <button class="button remove">Remove</button>`;
    newLi.innerHTML=newInnerHtml; 
    ulItem.append(newLi)
    input.value="";
    
})

ulItem.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
     const liSpan = e.target.previousElementSibling;
     liSpan.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("remove")){
        const liitem = e.target.parentNode;
        liitem.remove();
    }
})