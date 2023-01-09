import React from 'react'

function TodoList() {
    const todoList = [
        { id: 1, title: 'item 1' },
        { id: 2, title: 'item 2' },
        { id: 3, title: 'item 3' },
    ];

    return (
        <ul>
            {todoList.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default TodoList