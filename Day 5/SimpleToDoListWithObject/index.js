// Todo listesi bir objede saklanmalıdır

//objesiz olarak todo larımızı bir arrayde saklıyorduk fakat bu doğru bir yaklaşım değil. bu nedenle todo listemizi bir objeye döndüştürmemiz gerekli.

//Todo listesini ekrana yansıtma metodu olmalıdır.

// Todo listesine bir ekleme metodu olmalıdır.

// Todo listesinde herhangi birşeyi güncelleme metodu olmalıdır.

// Todo listesinde bir silme metodu olmalıdır.

var todoList = {
    todos : ['Sabah erken kalkıp doğada yürüyüş yapma','Bol bol kitap okumalı ve medium üzerinden gerek yazılım gerek dünya hakkında ki yazıları okumalı', 'Ve artık yazılımın derinlere inme zamanıdır'],
    displayToDo: function(){
        console.log("My todos : " + this.todos);
    },
    addNewToDo: function(newTodo){
        this.todos.push(newTodo);
        this.displayToDo();
    },
    updateToDo: function(index, updateText){
        this.todos[index] = updateText;
        this.displayToDo();
    },
    deleteToDo: function(index){
        this.todos.splice(index, 1);
        this.displayToDo();
    }
};