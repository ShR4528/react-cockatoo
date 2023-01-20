import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function useSemiPersistentState(key) {
  const [value, setValue] = useState(
    Array.isArray(JSON.parse(localStorage.getItem(key))) ?
      JSON.parse(localStorage.getItem(key))
      : []
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key]);

  return [value, setValue];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList')

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App

