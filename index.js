let root =document.getElementById("root");

let app=document.createElement("div");
app.id="app"
root.appendChild(app);

let heading = document.createElement("h1");
heading.innerText="To Do application";

app.appendChild(heading);

let inputBox = document.createElement("div");
inputBox.className="input-box";

let input =document.createElement("input");
input.placeholder="Enter your tasks";

let addBtn =document.createElement("button");
addBtn.innerText="Add";

inputBox.appendChild(input);
inputBox.appendChild(addBtn);
app.appendChild(inputBox);

let todos=[];

const ul=document.createElement("ul");
app.appendChild(ul)
addBtn.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Enter the task");
    }
    const todoObj ={
        id:Date.now(),
        text:input.value,
        completed:false
    }
    todos.push(todoObj);
    createTodo(todoObj);
    input.value="";
});

function createTodo(todo){
    const li = document.createElement("li");
    const span =document.createElement("span");
    span.innerText=todo.text;

    if(todo.completed){
        span.classList.add("complete")
    }
    
    const actions = document.createElement("div");
    actions.className="actions";

    const completeBtn=document.createElement('button');
    completeBtn.innerText="Done";
    completeBtn.addEventListener("click",()=>{
        todo.completed =!todo.completed;
        span.classList.toggle("complete")
    });


    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.addEventListener("click",()=>{
        let newText=prompt("Edit Task",todo.next);
        if(newText !==null  && newText!== ""){
            span.innerTexxt=newText;
        }
    })

    const delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.addEventListener("click",()=>{
        ul.removeChild(li);
        todos=todos.filter(t=> t.id !== todo.id);
    })
    li .appendChild(span);
    actions.appendChild(delBtn);
    actions.appendChild(editBtn);
    actions.appendChild(completeBtn);

    li.appendChild(actions);
   
    ul.appendChild(li);

}


