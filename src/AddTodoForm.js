import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ addTodo }) {

    const [todoTitle, setTodoTitle] = useState("");
    const [todoList] = useState([]);

    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo({
            title: todoTitle,
            done: false,
            id: todoList.length + 1,
        });
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel
                id="title"
                label="Title"
                value={todoTitle}
                onChange={handleTitleChange}>
                Title:
            </InputWithLabel>
            <button type="submit">
                Add Todo
            </button>
        </form>
    );
}
export default AddTodoForm;







