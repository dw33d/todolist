// Initializing the variables for tthe html side

const listSpace = document.querySelector(".listSpace");
const usrInput = document.querySelector(".usrInput")
const todoPost = document.querySelector(".todoPost");


// function for the button being clicked
function clicked(){
    
    const inputValue = usrInput.value;

    // setting span value to empty string
    usrInput.value = " ";

    // initializing the variables on the JS side

    const todo = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    // appending the list element into the list space
    listSpace.appendChild(todo);

    // attaching the span and delete button to the list element
    todo.appendChild(span);
    todo.appendChild(deleteButton);

    // value of span is the user input
    span.textContent = inputValue;

    // setting delete button to delete
    deleteButton.textContent = "Delete";

    // adding eventlistener to the delete button to make it execute after delleting
    deleteButton.addEventListener("click", () => {
        listSpace.removeChild(todo);
    })

    // the focus method's presence is qustionable honestly
    usrInput.focus()
    
}