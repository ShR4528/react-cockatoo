import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList'

function App() {
  const [newTodo, setNewTodo] = useState('')
  function handleAddTodo(todoTitle) {
    setNewTodo(todoTitle);
  }



  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList />
      <p>{newTodo}</p>
    </div>
  );
}

export default App;

