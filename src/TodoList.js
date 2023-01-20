import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({ todoList }) {
    // const todoList = [
    //     { id: 1, title: 'Complete assignment' },
    //     { id: 2, title: 'Go grocery shopping' },
    //     { id: 3, title: 'Meet with friends' },
    // ];

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todoList.map(todo => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList