import React from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ todoTitle, handleTitleChange }) => {
    const handleSubmit = e => {
        e.preventDefault();
        // onAddTodo(todoTitle);
        // setTodoTitle('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel id="title"
                type="text"
                value={todoTitle}
                onInputChange={handleTitleChange}>
                Title
            </InputWithLabel>

            <button type="submit">Add Todo</button>
        </form>

    );
};

export default AddTodoForm;






