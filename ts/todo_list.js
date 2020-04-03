function TodoList(containerId) {
    this.todoItem = null;
    this.todoList = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5"
    ];
    this.getList = function () {
        return this.todoList;
    };
}
