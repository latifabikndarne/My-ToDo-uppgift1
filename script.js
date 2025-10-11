// Att deklarera en variabel
const completedElement = document.querySelector("#completedTask");
const inputTodo = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const infoTextElement = document.querySelector("#infoText");
const todolist = document.querySelector("#todolist");


let completed = 0;
let todoText = "";
let text = inputTodo.value;
infoTextElement.textContent = " ";


addTodoButton.addEventListener("click", addToDo);
function addToDo() {

    todoText = inputTodo.value;

    if (todoText == 0) {
        infoTextElement.textContent = "Input must not be empty";
        return;
        }
    
    const item = document.createElement("li");
    todolist.appendChild(item);
   

//span element för att behålla texten
const itemText = document.createElement("span");
itemText.innerText = todoText;

//EventListener för varje item

itemText.addEventListener("click",
    
    function () {

        if (itemText.getAttribute("class") == "completedTask") {
            itemText.setAttribute("class", "");
            completed--;
            completedElement.innerText = "Utförda uppgifter: " + completed;

        } else {
            itemText.setAttribute("class", "completedTask");
            completed++;
            completedElement.innerText = completed + " completed";
        }
     
    });
         infoTextElement.textContent = " ";
      item.appendChild(itemText);
    

// att lägga till papperskorgsikon
    const trashcan = document.createElement("span");
   trashcan.innerHTML ="🗑️";//"&#128465;"
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);

//EventListener för papperskorgsikon
    trashcan.addEventListener("click",
    function () {
        todolist.removeChild(item);

       }); 
  
    inputTodo.value = "";
} 
    


       



    