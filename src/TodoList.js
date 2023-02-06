import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onRemoveTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    );
}

export default TodoList;
