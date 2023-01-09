import React from 'react'

function TodoList() {
    const todoList = ['item 1', 'item 2', 'item 3'];

    return (
        <ul>
            {todoList.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default TodoList