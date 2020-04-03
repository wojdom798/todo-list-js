function TodoList(containerId) {
    this.todoItem = null;
    this.todoList = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 6",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 7",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 8"
    ];
    this.createList = function () {
        var todoContainer = document.getElementById(containerId);
        var buttonAdd = todoContainer.children[0].children[0];
        var fragmentContainer = new DocumentFragment();
        this.todoList.forEach(function (item) {
            var wrapper = document.createElement("div");
            wrapper.classList.add("todo-item");
            var paragraph = document.createElement("p");
            paragraph.textContent = item;
            wrapper.appendChild(paragraph);
            fragmentContainer.appendChild(wrapper);
        });
        todoContainer.appendChild(fragmentContainer);
        buttonAdd.addEventListener("click", function () {
            console.log("clicked on the add button");
        });
    };
    // debug
    this.getList = function () {
        return this.todoList;
    };
}
var todoList = new TodoList("todolist");
todoList.createList();
