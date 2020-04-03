function TodoList(containerId) {
    this.todoContainer = null;
    this.buttonAdd = null;
    this.todoList = [];
    this.modal = null;
    this.isModalOpen = false;
    this.createList = function () {
        var fragmentContainer = new DocumentFragment();
        this.todoList.forEach(function (item) {
            var wrapper = document.createElement("div");
            wrapper.classList.add("todo-item");
            var paragraph = document.createElement("p");
            paragraph.textContent = item;
            wrapper.appendChild(paragraph);
            fragmentContainer.appendChild(wrapper);
        });
        this.todoContainer.appendChild(fragmentContainer);
    };
    this.init = function () {
        var _this = this;
        this.todoContainer = document.getElementById(containerId);
        this.buttonAdd = this.todoContainer.children[0].children[0];
        if (!this.todoContainer.classList.contains("todo-container")) {
            this.todoContainer.classList.add("todo-container");
        }
        this.createModal();
        this.buttonAdd.addEventListener("click", function () {
            _this.addTodo();
        });
    };
    this.addTodo = function () {
        if (!this.isModalOpen) {
            this.modal.classList.add("active");
            this.isModalOpen = true;
        }
    };
    this.deleteTodo = function (index) {
    };
    this.closeModal = function () {
        this.isModalOpen = false;
        this.modal.classList.remove("active");
    };
    this.createModal = function () {
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");
        var modalContents = document.createElement("div");
        modalContents.classList.add("add-todo-container");
        var header = document.createElement("h3");
        var form = document.createElement("form");
        var txtInput = document.createElement("input");
        txtInput.setAttribute("type", "text");
        txtInput.setAttribute("name", "todo-input");
        var wrapper = document.createElement("div");
        var saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "button");
        saveBtn.setAttribute("name", "save-btn");
        saveBtn.textContent = "save";
        var closeBtn = document.createElement("button");
        closeBtn.setAttribute("type", "button");
        closeBtn.setAttribute("name", "close-btn");
        closeBtn.textContent = "close";
        // if you don't bind 'this' to closeModal()
        // 'this' will refer to button inside the event handler
        closeBtn.addEventListener("click", this.closeModal.bind(this));
        wrapper.appendChild(saveBtn);
        wrapper.appendChild(closeBtn);
        form.appendChild(txtInput);
        form.appendChild(wrapper);
        form.appendChild(wrapper);
        modalContents.appendChild(header);
        modalContents.appendChild(form);
        this.modal.appendChild(modalContents);
        document.body.appendChild(this.modal);
    };
    // debug
    this.getList = function () {
        return this.todoList;
    };
}
var todoList = new TodoList("todolist");
todoList.init();
todoList.createList();
