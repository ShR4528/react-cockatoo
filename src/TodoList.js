import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList() {
    const todoList = [
        { id: 1, title: 'item 1' },
        { id: 2, title: 'item 2' },
        { id: 3, title: 'item 3' },
    ];

    return (
        <ul>
            {todoList.map(todo => (
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList