import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => (


    <li>
        {todo.title}
        <button type="button"
            key={todo.id}
            onClick={() =>
                onRemoveTodo(todo.id)}>
            Remove
        </button>
    </li>
)



export default TodoListItem;
