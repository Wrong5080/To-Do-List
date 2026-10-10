let title = document.getElementById("title");

let taskInput = document.getElementById("taskInput");

let addBtn = document.getElementById("addBtn");

let massage = document.getElementById("massage");

let taskCount = document.getElementById("taskCount");

let taskList = document.getElementById("taskList");

let count = 0;

addBtn.addEventListener("click", function(){

    let taskText = taskInput.value;

    if(taskText === ""){

        massage.textContent = "Please Enter Your Task";

        massage.style.color = "#ff6b6b"; 

        return;

    }
    
    let li = document.createElement("li");

    let taskSpan = document.createElement("span");

    taskSpan.textContent = taskText;

    taskSpan.classList.add("task-text"); 

    let noteInput = document.createElement("input");

    noteInput.type = "text";

    noteInput.placeholder = "Add a note";

    noteInput.classList.add("note-input"); 

    let deletebtn = document.createElement("button");

    deletebtn.textContent = "Delete";

    deletebtn.classList.add("delete-btn"); 

    li.appendChild(taskSpan);

    li.appendChild(noteInput);

    li.appendChild(deletebtn);

    taskList.appendChild(li);

    count++;

    taskCount.textContent = count;

    massage.textContent = "Task Added Successfully";

    massage.style.color = "#4caf50"; 

    taskInput.value = "";

    deletebtn.addEventListener("click", function(){

        li.remove();

        count--;

        taskCount.textContent = count;

        massage.textContent = "Task Deleted";

        massage.style.color = "#ff9800"; 

    });

});