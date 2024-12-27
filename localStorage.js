function saveTodos(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function loadTodos() {
    const savedTodos = localStorage.getItem('todoList');
    return savedTodos ? JSON.parse(savedTodos) : [];
}

