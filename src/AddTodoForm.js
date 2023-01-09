import React from 'react'

function AddTodoForm(props) {
    const { onAddTodo } = props

    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.reset();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title" />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm