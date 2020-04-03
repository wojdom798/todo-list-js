function TodoList(containerId: string) {
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

  this.createList = function() {
    const todoContainer = document.getElementById(containerId);
    const buttonAdd = todoContainer.children[0].children[0];
    let fragmentContainer = new DocumentFragment();

    this.todoList.forEach(item => {
      let wrapper = document.createElement("div");
      wrapper.classList.add("todo-item");
      let paragraph = document.createElement("p");
      paragraph.textContent = item;
      wrapper.appendChild(paragraph);
      fragmentContainer.appendChild(wrapper);
    });

    todoContainer.appendChild(fragmentContainer);

    buttonAdd.addEventListener("click", () => {
      console.log("clicked on the add button");
    });
  };

  // debug
  this.getList = function() {
    return this.todoList;
  };
}

const todoList = new TodoList("todolist");
todoList.createList();
