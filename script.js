
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

let todos = [];
let id = 0;
function addTodo(text) {
    const todo = {
        id: id++,
        text: text,
        done: false
    };
    todos.push(todo);
    renderTodoList();
}
function deleteTodo(id) {
    todos = todos.filter(todo => (link unavailable) !== id);
    renderTodoList();
}

function toggleDone(id) {
    const todo = todos.find(todo => (link unavailable) === id);
    if (todo) {
        todo.done = !todo.done;
        renderTodoList();
    }
}
function renderTodoList() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('LI');
        todoItem.textContent = todo.text;
        todoItem.classList.add('todo-item');
        if (todo.done) {
            todoItem.classList.add('done');
        }
        const deleteBtn = document.createElement('BUTTON');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo((link unavailable)));
        const toggleBtn = document.createElement('BUTTON');
        toggleBtn.textContent = todo.done ? 'Undone' : 'Done';
        toggleBtn.addEventListener('click', () => toggleDone((link unavailable)));
        todoItem.appendChild(deleteBtn);
        todoItem.appendChild(toggleBtn);
        todoList.appendChild(todoItem);
    });
}


addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodo(todoText);
        todoInput.value = '';
    }
}
