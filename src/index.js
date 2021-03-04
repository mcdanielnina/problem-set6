
import * as moment from "moment";


const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
const addButton = document.getElementById("add");



addButton.addEventListener("click", () =>{
    
    const newTask = document.createElement("li");
    const wTask = document.getElementById("task");
    const dueDateInput = document.getElementById("duedate_input");
    const dueTimeInput = document.getElementById("duetime_input");

    const dueDate = dueDateInput.valueAsNumber;
    const dueTime = dueTimeInput.valueAsNumber;

    
    
    const fullDueDate = moment(new Date(dueDate + dueTime + timezoneOffset)).calendar();
    //fullDueDate.setAttribute("class", "due");
    
    
    newTask.innerHTML = wTask.value + " "+ fullDueDate;
    wTask.value = "";

    
    document.getElementById("toDo").append(newTask);

    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button");
    removeButton.textContent = "X";
    newTask.append(removeButton);
    
    
    removeButton.addEventListener("click", () =>{
        newTask.remove();
        
        
    });
   
});
const itemChecked = document.querySelector("ul");



itemChecked.addEventListener("click",function(line){
    if (line.target.tagName === "LI"){
        line.target.classList.toggle("done");
        

       document.getElementById("completed").append(document.querySelector("li"));
        
        

    }
    
}, false);
