function TodoList(containerId: string) {
  this.todoItem = null;
  this.todoList = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5"
  ];

  this.createList = function() {
    const todoContainer = document.getElementById(containerId);
    let fragmentContainer = new DocumentFragment();
    let wrapper = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.textContent = "new item";
    wrapper.classList.add("todo-item");
    wrapper.appendChild(paragraph);
    fragmentContainer.appendChild(wrapper);
    todoContainer.appendChild(fragmentContainer);
  };

  // debug
  this.getList = function() {
    return this.todoList;
  };
}

const todoList = new TodoList("todolist");
todoList.createList();
