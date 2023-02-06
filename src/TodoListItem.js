import React from 'react'

function TodoListItem({ todo, onRemoveTodo, id }) {


    return (
        <li>{todo.title}
            <button type="button" key={id} onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>
    )
}

export default TodoListItem