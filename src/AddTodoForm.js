import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = e => {
        setTodoTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onAddTodo(todoTitle);
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel

                id="todo-title"
                value={todoTitle}
                onInputChange={handleTitleChange}
                label="Title"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;

