//variables 
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//Event listener

addTask.addEventListener('click', function(){

let task = document.createElement('div');
task.classList.add('task');

let li = document.createElement('li');
li.innerText = `${inputTask.value}`;
task.appendChild(li);

let checkButton = document.createElement('button');

checkButton.style.border="2px solid orange";
let checkTask = document.createElement("i");
checkTask.classList.add('fa-solid');
checkTask.classList.add('fa-check');
checkButton.style.color="orange";
checkButton.style.fontSize="1.3rem";
checkButton.style.marginRight="5px";
checkButton.appendChild(checkTask);
task.appendChild(checkButton);

checkButton.addEventListener("mouseover", function(){
checkButton.style.backgroundColor = "orange";
checkTask.style.color="white";
})

checkButton.addEventListener("mouseout", function(){
checkButton.style.backgroundColor = "#fff";
checkTask.style.color = "";
})


let deleteButton = document.createElement('button');

deleteButton.style.border="2px solid red";
let deleteTask = document.createElement("i");
deleteTask.classList.add('fa-solid');
deleteTask.classList.add('fa-trash-can');
deleteButton.style.color="red";
deleteButton.style.fontSize="1.3rem";

deleteButton.appendChild(deleteTask)
task.appendChild(deleteButton);



deleteButton.addEventListener("mouseover", function(){
deleteButton.style.backgroundColor = "red";
deleteTask.style.color="white";
})

deleteButton.addEventListener("mouseout", function(){
deleteButton.style.backgroundColor = "#fff";
deleteTask.style.color = "";
})


if (inputTask.value === "") {
    alert('Please Enter a task');
} else {
    taskContainer.appendChild(task);
}

inputTask.value ="";


 checkButton.addEventListener('click', function(){
 
 checkButton.parentElement.style.textDecoration="line-through";
 
 });
 
 deleteButton.addEventListener('click', function(e){
 
 let target = e.target;
 target.parentElement.parentElement.remove();
 });
});
