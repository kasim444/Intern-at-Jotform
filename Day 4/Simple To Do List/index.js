
//First of all define todos list.
var todos = ["Akşamları işten sonra js çalışma","Yatmadan önce kitap okuma","Sık sık duş alma"];

//After display to secreen todo list
function displayScreen(){
    console.log("My to do list : " + todos );
}

displayScreen();

//Then it should have a function to add todos.
function add(newTodo){
    todos.push(newTodo);
    displayScreen();
}
//add();

//we should be able to update a to do list
function update(index, newValue){
    todos[index] = newValue;
    displayScreen();
}
//update();

// finally it should have a function to delete todo.
function del(index){
    todos.splice(index,1);
    displayScreen();
}

//del();