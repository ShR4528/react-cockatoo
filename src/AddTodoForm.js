import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ addTodo }) {

    const [todoTitle, setTodoTitle] = useState("");
    const [todoList, setTodoList] = useState([]);
    /////////////////
    const onAddTodo = (newTodo) => {
        const newTodoItem = {
            fields: {
                Title: newTodo
            }
        };

        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodoItem)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add todo');
                }
                setTodoList((prevTodoList) => [...prevTodoList]);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    ////////////////
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







