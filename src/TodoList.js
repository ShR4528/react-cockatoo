import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => (
    <ul>
        {todoList.map((todo, id) => (
            <TodoListItem key={id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
    </ul>
);




export default TodoList;

