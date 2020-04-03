function TodoList(containerId) {
    this.todoItem = null;
    this.todoList = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5"
    ];
    this.createList = function () {
        var todoContainer = document.getElementById(containerId);
        var fragmentContainer = new DocumentFragment();
        var wrapper = document.createElement("div");
        var paragraph = document.createElement("p");
        paragraph.textContent = "new item";
        wrapper.classList.add("todo-item");
        wrapper.appendChild(paragraph);
        fragmentContainer.appendChild(wrapper);
        todoContainer.appendChild(fragmentContainer);
    };
    // debug
    this.getList = function () {
        return this.todoList;
    };
}
var todoList = new TodoList("todolist");
todoList.createList();
