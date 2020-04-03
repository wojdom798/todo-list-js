function TodoList(containerId) {
    this.todoContainer = null;
    this.buttonAdd = null;
    this.todoList = [];
    this.modal = null;
    this.isModalOpen = false;
    this.inputField = null;
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
    this.deleteTodo = function (ev) {
        var tmpElem = ev.target;
        while (!tmpElem.hasAttribute("todo-id")) {
            tmpElem = tmpElem.parentNode;
        }
        var index = parseInt(tmpElem.getAttribute("todo-id"));
        console.log("removing item: " + this.todoList[index] + " at id: " + index.toString());
        this.todoList = this.todoList.filter(function (item, id) {
            return id !== index;
        });
        tmpElem.remove();
        console.log(this.todoList);
    };
    this.saveTodo = function (ev) {
        if ((ev.type === "keypress") && (ev.keyCode === 13)) {
            ev.preventDefault();
        }
        else if ((ev.type === "keypress") && (ev.keyCode !== 13)) {
            return;
        }
        if (this.inputField.value !== "") {
            this.todoList.push(this.inputField.value);
            var wrapper = document.createElement("div");
            wrapper.classList.add("todo-item");
            wrapper.setAttribute("todo-id", (this.todoList.length - 1).toString());
            wrapper.addEventListener("click", this.deleteTodo.bind(this));
            var paragraph = document.createElement("p");
            paragraph.textContent = this.inputField.value;
            wrapper.appendChild(paragraph);
            this.todoContainer.appendChild(wrapper);
        }
        this.inputField.value = "";
        this.isModalOpen = false;
        this.modal.classList.remove("active");
        console.log(this.todoList);
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
        this.inputField = document.createElement("input");
        this.inputField.setAttribute("type", "text");
        this.inputField.setAttribute("name", "todo-input");
        this.inputField.addEventListener("keypress", this.saveTodo.bind(this));
        var wrapper = document.createElement("div");
        var saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "button");
        saveBtn.setAttribute("name", "save-btn");
        saveBtn.textContent = "save";
        saveBtn.addEventListener("click", this.saveTodo.bind(this));
        var closeBtn = document.createElement("button");
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
    this.getList = function () {
        return this.todoList;
    };
}
var todoList = new TodoList("todolist");
todoList.init();
todoList.createList();
