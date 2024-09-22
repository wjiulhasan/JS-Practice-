const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

let todos = [];
function addTodo(todo) {
    todos.push(todo);
    renderTodoList();
}

function renderTodoList() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('LI');
        todoItem.textContent = todo.text;
        todoItem.classList.add('todo-item');
        if (todo.done) {
            todoItem.classList.add('done');
        }
        todoItem.addEventListener('click', () => {
            todos[index].done = !todos[index].done;
            renderTodoList();
        });
        todoList.appendChild(todoItem);
    });
}
addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodo({ text: todoText, done: false });
        todoInput.value = '';
    }
}
