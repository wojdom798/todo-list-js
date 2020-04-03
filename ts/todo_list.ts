function TodoList(containerId: string) {
  this.todoContainer = null;
  this.buttonAdd = null;
  this.todoList = [];
  this.modal = null;
  this.isModalOpen = false;
  this.inputField = null;

  this.createList = function() {
    let fragmentContainer = new DocumentFragment();

    this.todoList.forEach(item => {
      let wrapper = document.createElement("div");
      wrapper.classList.add("todo-item");
      let paragraph = document.createElement("p");
      paragraph.textContent = item;
      wrapper.appendChild(paragraph);
      fragmentContainer.appendChild(wrapper);
    });

    this.todoContainer.appendChild(fragmentContainer);


  };

  this.init = function() {
    this.todoContainer = document.getElementById(containerId);
    this.buttonAdd = this.todoContainer.children[0].children[0];
    if (!this.todoContainer.classList.contains("todo-container")) {
      this.todoContainer.classList.add("todo-container");
    }

    this.createModal();

    this.buttonAdd.addEventListener("click", () => {
      this.addTodo();
    });
  };

  this.addTodo = function() {
    if (!this.isModalOpen) {
      this.modal.classList.add("active");
      this.isModalOpen = true;
    }
  };

  this.deleteTodo = function(ev) {
    let tmpElem = ev.target;
    while (!tmpElem.hasAttribute("todo-id")) {
      tmpElem = tmpElem.parentNode;
    }
    let index = parseInt(tmpElem.getAttribute("todo-id"));
    this.todoList = this.todoList.filter(item => {
      return item !== tmpElem.textContent;
    });
    tmpElem.remove();
  };

  this.saveTodo = function(ev) {
    if ( (ev.type === "keypress") && (ev.keyCode === 13) ) {
      ev.preventDefault();
    } else if ( (ev.type === "keypress") && (ev.keyCode !== 13) )  {
      return;
    }

    if (this.inputField.value !== "") {
      this.todoList.push(this.inputField.value);

      let wrapper = document.createElement("div");
      wrapper.classList.add("todo-item");
      wrapper.setAttribute("todo-id", (this.todoList.length - 1).toString());
      wrapper.addEventListener("click", this.deleteTodo.bind(this));

      let paragraph = document.createElement("p");
      paragraph.textContent = this.inputField.value;

      wrapper.appendChild(paragraph);
      this.todoContainer.appendChild(wrapper);
    }

    this.inputField.value = "";
    this.isModalOpen = false;
    this.modal.classList.remove("active");
  };

  this.closeModal = function() {
    this.isModalOpen = false;
    this.modal.classList.remove("active");
  };

  this.createModal = function() {
    this.modal = document.createElement("div");
    this.modal.classList.add("modal");

    let modalContents = document.createElement("div");
    modalContents.classList.add("add-todo-container");

    let header = document.createElement("h3");
    header.textContent = "Add New Todo Item";

    let form = document.createElement("form");

    this.inputField = document.createElement("input");
    this.inputField.setAttribute("type", "text");
    this.inputField.setAttribute("name", "todo-input");
    this.inputField.addEventListener("keypress", this.saveTodo.bind(this));

    let wrapper =  document.createElement("div");

    let saveBtn = document.createElement("button");
    saveBtn.setAttribute("type", "button");
    saveBtn.setAttribute("name", "save-btn");
    saveBtn.textContent = "save";

    saveBtn.addEventListener("click", this.saveTodo.bind(this));

    let closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("name", "close-btn");
    closeBtn.textContent = "close";

    // if you don't bind 'this' to closeModal()
    // 'this' will refer to button inside the event handler
    closeBtn.addEventListener("click", this.closeModal.bind(this));

    wrapper.appendChild(saveBtn);
    wrapper.appendChild(closeBtn);
    form.appendChild(this.inputField);
    form.appendChild(wrapper);
    form.appendChild(wrapper);
    modalContents.appendChild(header);
    modalContents.appendChild(form);
    this.modal.appendChild(modalContents);

    document.body.appendChild(this.modal);
  };

  // debug
  this.getList = function() {
    return this.todoList;
  };
}

const todoList = new TodoList("todolist");
todoList.init();
todoList.createList();
